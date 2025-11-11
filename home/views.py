import logging

from django.conf import settings
from django.contrib import messages
from django.core.mail import EmailMessage
from django.shortcuts import redirect, render

from blog.models import Blog


logger = logging.getLogger(__name__)


def home_view(request):
    blogs = Blog.objects.all().order_by('-date')
    return render(request, "index.html", {'blogs': blogs})

def about_view(request):
    return render(request, "about.html")

def contact_view(request):
    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        message = request.POST.get("message", "").strip()

        if not (name and email and message):
            messages.error(request, "Please complete all required fields before submitting the form.")
        else:
            subject = f"Contact request from {name}"
            body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
            recipient = getattr(settings, "CONTACT_RECIPIENT_EMAIL", None) or settings.DEFAULT_FROM_EMAIL

            email_message = EmailMessage(
                subject=subject,
                body=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[recipient],
            )
            if email:
                email_message.reply_to = [email]

            try:
                email_message.send(fail_silently=False)
            except Exception:
                logger.exception("Unable to send contact form email")
                messages.error(request, "We couldn't send your message right now. Please try again later.")
            else:
                messages.success(request, "Thank you for contacting us. We'll get back to you soon.")
                return redirect("contact")

    return render(request, "contact.html")

def team_view(request):
    return render(request, "team.html")

def news_view(request):
    return render(request, "index.html")

def blog_view(request):
    return render(request, "index.html")

def destination_view(request):
    return render(request, "unused/destination-details.html")

def cart_view(request):
    return render(request, "cart.html")

def privacy_policy_view(request):
    return render(request, "privacy_policy.html")

def terms_and_conditions_view(request):
    return render(request, "terms_and_conditions.html")

def cancellation_refund_view(request):
    return render(request, "cancellation_refund.html")

def shipping_delivery_view(request):
    return render(request, "shipping_delivery.html")

