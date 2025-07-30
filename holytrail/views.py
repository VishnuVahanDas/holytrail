import os
import razorpay
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render
from django.utils.html import strip_tags
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseBadRequest

    
def checkout_view(request):
    # Always prepare a Razorpay order for the given amount
    count = request.GET.get('count', '0')
    total_amount = request.GET.get('total_amount', '0')
    booking_option = request.GET.get('booking_option', 'family')
    travel_option = request.GET.get('travel_option', '')

    try:
        total_int = int(total_amount)
    except (TypeError, ValueError):
        total_int = 0

    if total_int <= 0:
        return HttpResponseBadRequest('Invalid amount')

    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
    order = client.order.create({
        'amount': total_int * 100,
        'currency': 'INR',
        'payment_capture': 1,
    })

    context = {
        'count': count,
        'total_amount': total_amount,
        'booking_option': 'Family / Individual (Private)' if booking_option == 'family' else 'Youth Group (Shared)',
        'travel_option': travel_option,
        'razorpay_order_id': order['id'],
        'razorpay_key_id': settings.RAZORPAY_KEY_ID,
    }
    return render(request, 'checkout.html', context)


@csrf_exempt
def verify_payment_view(request):
    if request.method != 'POST':
        return HttpResponseBadRequest('Invalid request')

    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
    data = {
        'razorpay_order_id': request.POST.get('razorpay_order_id'),
        'razorpay_payment_id': request.POST.get('razorpay_payment_id'),
        'razorpay_signature': request.POST.get('razorpay_signature'),
    }

    try:
        client.utility.verify_payment_signature(data)
    except razorpay.errors.SignatureVerificationError:
        return HttpResponseBadRequest('Signature verification failed')

    name = request.POST.get('first_name')
    phone = request.POST.get('phone')
    address = request.POST.get('address')
    city = request.POST.get('town-city')
    state = request.POST.get('state')
    zip_code = request.POST.get('zip-code')
    email = request.POST.get('email')
    booking_option = request.POST.get('booking_option', 'family')
    travel_option = request.POST.get('travel_option', '')
    count = request.POST.get('count')
    total_amount = request.POST.get('total_amount')

    html_content = render(request, 'emails/order_confirmation.html', {
        'name': name,
        'phone': phone,
        'address': address,
        'city': city,
        'state': state,
        'zip_code': zip_code,
        'email': email,
        'count': count,
        'total_amount': total_amount,
        'booking_option': 'Family / Individual (Private)' if booking_option == 'family' else 'Youth Group (Shared)',
        'travel_option': travel_option,
    }).content.decode('utf-8')
    text_content = strip_tags(html_content)

    subject = 'Order Confirmation - Holytrail Tour Booking'
    client_email = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, [email])
    client_email.attach_alternative(html_content, "text/html")
    client_email.send()

    admin_subject = f'New Order Received from {name}'
    admin_message = f'''
    Name: {name}
    Phone: {phone}
    Email: {email}
    Address: {address}, {city}, {state}, {zip_code}
    Booking Option: {'Family / Individual (Private)' if booking_option == 'family' else 'Youth Group (Shared)'}
    Travel Option: {travel_option}
    Count: {count}
    Total: ₹{total_amount}
    '''

    admin_emails = [e.strip() for e in os.getenv('ADMIN_EMAILS', 'vipul57612@gmail.com').split(',') if e.strip()]
    cc_emails = [e.strip() for e in os.getenv('CC_EMAILS', 'rishabhpandey101@gmail.com').split(',') if e.strip()]

    admin_email = EmailMultiAlternatives(
        admin_subject,
        admin_message,
        settings.DEFAULT_FROM_EMAIL,
        admin_emails,
        cc=cc_emails
    )
    admin_email.send()

    # After successfully verifying the payment, show the thank you page
    return render(request, "thank_you.html", {"name": name})


# Optional: If you want a dedicated view for thank you page (used in urls.py)
def thank_you_view(request):
    return render(request, "thank_you.html")
