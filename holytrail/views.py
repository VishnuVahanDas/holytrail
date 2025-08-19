import os
import razorpay
from decimal import Decimal
from datetime import timedelta

from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render, redirect
from django.utils import timezone
from django.utils.html import strip_tags
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseBadRequest
from django.contrib.auth.decorators import login_required

from accounts.models import Subscription
from tour.models import Order


@login_required(login_url="accounts:login")
def checkout_view(request):
    if not request.user.is_active:
        request.session["otp_user_id"] = request.user.id
        return redirect("accounts:verify_email")
    # Always prepare a Razorpay order for the given amount
    count = request.GET.get("count", "0")
    total_amount = request.GET.get("total_amount", "0")
    booking_option = request.GET.get("booking_option", "economy").lower()

    try:
        total_int = int(total_amount)
    except (TypeError, ValueError):
        total_int = 0

    if total_int <= 0:
        return HttpResponseBadRequest("Invalid amount")
    total_decimal = Decimal(total_int)
    original_total = total_decimal
    discount_applied = False

    subscription = (
        Subscription.objects.filter(user=request.user, active=True)
        .order_by("-start_date")
        .first()
    )
    if subscription and subscription.start_date >= timezone.now().date() - timedelta(
        days=365
    ):
        total_decimal = (total_decimal * Decimal("0.90")).quantize(Decimal("1"))
        discount_applied = True

    client = razorpay.Client(
        auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
    )
    order = client.order.create(
        {
            "amount": int(total_decimal) * 100,
            "currency": "INR",
            "payment_capture": 1,
        }
    )

    booking_labels = {"economy": "Economy", "delux": "Delux", "premium": "Premium"}
    context = {
        "count": count,
        "total_amount": str(total_decimal),
        "original_total_amount": str(original_total),
        "discount_applied": discount_applied,
        "booking_option": booking_labels.get(booking_option, "Economy"),
        "booking_option_value": booking_option,
        "razorpay_order_id": order["id"],
        "razorpay_key_id": settings.RAZORPAY_KEY_ID,
    }
    return render(request, "checkout.html", context)


@csrf_exempt
@login_required(login_url="accounts:login")
def verify_payment_view(request):
    if not request.user.is_active:
        request.session["otp_user_id"] = request.user.id
        return redirect("accounts:verify_email")
    if request.method != "POST":
        return HttpResponseBadRequest("Invalid request")

    client = razorpay.Client(
        auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
    )
    data = {
        "razorpay_order_id": request.POST.get("razorpay_order_id"),
        "razorpay_payment_id": request.POST.get("razorpay_payment_id"),
        "razorpay_signature": request.POST.get("razorpay_signature"),
    }

    try:
        client.utility.verify_payment_signature(data)
    except razorpay.errors.SignatureVerificationError:
        return HttpResponseBadRequest("Signature verification failed")

    email = request.user.email
    name = request.POST.get("first_name")
    phone = request.POST.get("phone")
    address = request.POST.get("address")
    city = request.POST.get("town_city") or request.POST.get("town-city")
    state = request.POST.get("state")
    zip_code = request.POST.get("zip_code") or request.POST.get("zip-code")
    booking_option = request.POST.get("booking_option", "economy").lower()
    count = request.POST.get("count", "0")
    total_amount = request.POST.get("total_amount", "0")
    original_total = request.POST.get("original_total_amount", total_amount)

    try:
        total_int = int(total_amount)
        original_int = int(original_total)
    except (TypeError, ValueError):
        return HttpResponseBadRequest("Invalid amount")

    expected_decimal = Decimal(original_int)
    subscription = (
        Subscription.objects.filter(user=request.user, active=True)
        .order_by("-start_date")
        .first()
    )
    if subscription and subscription.start_date >= timezone.now().date() - timedelta(
        days=365
    ):
        expected_decimal = (expected_decimal * Decimal("0.90")).quantize(Decimal("1"))

    if int(expected_decimal) != total_int:
        return HttpResponseBadRequest("Amount mismatch")

    Order.objects.create(
        user=request.user,
        name=name,
        email=email,
        phone=phone,
        address=address,
        city=city or "",
        state=state or "",
        zip_code=zip_code or "",
        booking_option=booking_option,
        count=int(count or 0),
        total_amount=expected_decimal,
        razorpay_order_id=data["razorpay_order_id"],
        razorpay_payment_id=data["razorpay_payment_id"],
        razorpay_signature=data["razorpay_signature"],
    )

    labels = dict(Order.BOOKING_CHOICES)
    booking_label = labels.get(booking_option, "Economy")
    html_content = render(
        request,
        "emails/order_confirmation.html",
        {
            "name": name,
            "phone": phone,
            "address": address,
            "city": city,
            "state": state,
            "zip_code": zip_code,
            "email": email,
            "count": count,
            "total_amount": str(expected_decimal),
            "booking_option": booking_label,
        },
    ).content.decode("utf-8")
    text_content = strip_tags(html_content)

    subject = "Order Confirmation - Holytrail Tour Booking"
    client_email = EmailMultiAlternatives(
        subject, text_content, settings.DEFAULT_FROM_EMAIL, [email]
    )
    client_email.attach_alternative(html_content, "text/html")
    client_email.send()

    admin_html_content = render(
        request,
        "emails/admin_order_details.html",
        {
            "name": name,
            "phone": phone,
            "address": address,
            "city": city,
            "state": state,
            "zip_code": zip_code,
            "email": email,
            "count": count,
            "total_amount": str(expected_decimal),
            "booking_option": booking_label,
        },
    ).content.decode("utf-8")
    admin_text_content = strip_tags(admin_html_content)

    admin_subject = f"New Order Received !!"
    admin_emails = [
        e.strip() for e in os.getenv("ADMIN_EMAILS", "").split(",") if e.strip()
    ]
    cc_emails = [e.strip() for e in os.getenv("CC_EMAILS", "").split(",") if e.strip()]

    admin_email = EmailMultiAlternatives(
        admin_subject,
        admin_text_content,
        settings.DEFAULT_FROM_EMAIL,
        admin_emails,
        cc=cc_emails,
    )
    admin_email.attach_alternative(admin_html_content, "text/html")
    admin_email.send()

    # After successfully verifying the payment, show the thank you page
    return render(request, "thank_you.html", {"name": name})


# Optional: If you want a dedicated view for thank you page (used in urls.py)
def thank_you_view(request):
    return render(request, "thank_you.html")
