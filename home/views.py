import logging

from django.conf import settings
from django.contrib import messages
from django.core.exceptions import ValidationError
from django.core.mail import BadHeaderError, EmailMessage
from django.core.validators import validate_email
from django.shortcuts import redirect, render

from blog.models import Blog

from .forms import ContactForm


logger = logging.getLogger(__name__)


def home_view(request):
    blogs = Blog.objects.all().order_by('-date')
    return render(request, "index.html", {'blogs': blogs})

def about_view(request):
    return render(request, "about.html")

def _contact_recipients():
    configured = getattr(settings, "CONTACT_RECIPIENT_EMAIL", "") or ""
    candidates = [item.strip() for item in configured.split(",") if item.strip()]
    recipients = []

    for candidate in candidates:
        try:
            validate_email(candidate)
        except ValidationError:
            logger.warning("Ignoring invalid contact recipient '%s'", candidate)
            continue
        recipients.append(candidate)

    fallback = getattr(settings, "DEFAULT_FROM_EMAIL", "")
    if not recipients:
        if fallback:
            recipients.append(fallback)
        else:
            logger.error("No valid contact recipient configured; defaulting to empty list")

    return recipients


def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            email = form.cleaned_data["email"]
            message = form.cleaned_data["message"]

            subject = f"Contact request from {name}"
            body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
            recipients = _contact_recipients()
            if not recipients:
                messages.error(
                    request,
                    "We couldn't determine who should receive your message. Please try again later.",
                )
                return render(request, "contact.html", {"form": form})

            email_message = EmailMessage(
                subject=subject,
                body=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=recipients,
            )
            email_message.reply_to = [email]

            try:
                email_message.send(fail_silently=False)
            except BadHeaderError:
                logger.warning("Rejected contact form submission due to header injection attempt")
                messages.error(request, "Your message contained invalid characters and could not be sent.")
            except Exception:
                logger.exception("Unable to send contact form email")
                messages.error(request, "We couldn't send your message right now. Please try again later.")
            else:
                messages.success(request, "Thank you for contacting us. We'll get back to you soon.")
                return redirect("contact")
    else:
        form = ContactForm()

    return render(request, "contact.html", {"form": form})

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

