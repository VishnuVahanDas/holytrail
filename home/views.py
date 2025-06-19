import os
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render, redirect
from django.utils.html import strip_tags
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponseRedirect
from .models import Review


def home_view(request):
    return render(request, "index.html")

def about_view(request):
    return render(request, "about.html")

def contact_view(request):
    return render(request, "contact.html")

def team_view(request):
    return render(request, "team.html")

def news_view(request):
    return render(request, "index.html")

def blog_view(request):
    return render(request, "index.html")

def destination_view(request):
    return render(request, "destibnation-details.html")

def tour_view(request):
    return render(request, "tour-listing-1.html")

def cart_view(request):
    return render(request, "cart.html")

def tourdetail_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        rating = request.POST.get('rating', 5)

        Review.objects.create(name=name, email=email, message=message, rating=rating)

    reviews = Review.objects.order_by('-created_at')[:10]  # Latest 10 reviews

    return render(request, "tour-detail.html", {
        "reviews": reviews
    })
    
def checkout_view(request):
    if request.method == 'POST':
        name = request.POST.get('first_name')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        city = request.POST.get('town-city')
        state = request.POST.get('state')
        zip_code = request.POST.get('zip-code')
        email = request.POST.get('email')
        adults = request.POST.get('adults')
        youths = request.POST.get('youths')
        adult_total = request.POST.get('adult_total')
        youth_total = request.POST.get('youth_total')
        total_amount = request.POST.get('total_amount')
        screenshot = request.FILES.get('screenshot')

        # Save screenshot
        screenshot_url = ''
        screenshot_content = None
        screenshot_name = ''
        screenshot_type = ''
        if screenshot:
            fs = FileSystemStorage()
            filename = fs.save(screenshot.name, screenshot)
            screenshot_url = fs.url(filename)
            screenshot.seek(0)
            screenshot_content = screenshot.read()
            screenshot_name = screenshot.name
            screenshot_type = screenshot.content_type

        # Render email content
        html_content = render(request, 'emails/order_confirmation.html', {
            'name': name,
            'phone': phone,
            'address': address,
            'city': city,
            'state': state,
            'zip_code': zip_code,
            'email': email,
            'adults': adults,
            'youths': youths,
            'adult_total': adult_total,
            'youth_total': youth_total,
            'total_amount': total_amount,
        }).content.decode('utf-8')
        text_content = strip_tags(html_content)

        # Send confirmation email to user
        subject = 'Order Confirmation - ISKCON Tour Booking'
        client_email = EmailMultiAlternatives(subject, text_content, settings.DEFAULT_FROM_EMAIL, [email])
        client_email.attach_alternative(html_content, "text/html")
        client_email.send()

        # Send admin notification
        admin_subject = f'New Order Received from {name}'
        admin_message = f'''
        Name: {name}
        Phone: {phone}
        Email: {email}
        Address: {address}, {city}, {state}, {zip_code}
        Adults: {adults} (₹{adult_total})
        Youths: {youths} (₹{youth_total})
        Total: ₹{total_amount}
        '''
        
        admin_email = EmailMultiAlternatives(
            admin_subject, 
            admin_message, 
            settings.DEFAULT_FROM_EMAIL, 
            ['vipul57612@gmail.com'],  # To (admin email)
            cc=['vishnuvahan.it@gmail.com']  # CC email(s)
            )
        if screenshot_content:
            admin_email.attach(screenshot_name, screenshot_content, screenshot_type)
        admin_email.send()

        return redirect('home:thank_you')

    else:
        # GET request
        adults = request.GET.get('adults', '0')
        youths = request.GET.get('youths', '0')
        adult_total = request.GET.get('adult_total', '0')
        youth_total = request.GET.get('youth_total', '0')
        total_amount = request.GET.get('total_amount', '0')

        context = {
            'adults': adults,
            'youths': youths,
            'adult_total': adult_total,
            'youth_total': youth_total,
            'total_amount': total_amount,
        }
        return render(request, 'checkout.html', context)


# Optional: If you want a dedicated view for thank you page (used in urls.py)
def thank_you_view(request):
    return render(request, "thank_you.html")
