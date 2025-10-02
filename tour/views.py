import os

from django.conf import settings
from django.contrib import messages
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import redirect, render
from django.template.loader import render_to_string
from django.utils.html import strip_tags

from .forms import FeedbackForm
from .models import Review

# Create your views here.
def tour_view(request):
    return render(request, "unused/tour-listing-1.html")

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

def tourdetails_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        rating = request.POST.get('rating', 5)

        Review.objects.create(name=name, email=email, message=message, rating=rating)

    reviews = Review.objects.order_by('-created_at')[:10]  # Latest 10 reviews

    return render(request, "tour-details.html", {
        "reviews": reviews
    })



def dwarikayatra_view(request):
    return render(request, "tour/dwarika-yatra.html")

def vrindavanyatra_view(request):
    return render(request, "tour/vrindavan-yatra.html")

def jagannathpuriyatra_view(request):
    return render(request, "tour/jagannathpuri-yatra.html")


def feedback_view(request):
    if request.method == "POST":
        form = FeedbackForm(request.POST)
        if form.is_valid():
            feedback = form.save()

            admin_recipients = [
                email.strip()
                for email in os.getenv("ADMIN_EMAILS", "").split(",")
                if email.strip()
            ]
            if not admin_recipients:
                fallback_email = getattr(settings, "EMAIL_HOST_USER", None)
                if fallback_email:
                    admin_recipients = [fallback_email]

            admin_subject = f"New feedback received from {feedback.name}"
            admin_html = render_to_string(
                "emails/admin_feedback_notification.html", {"feedback": feedback}
            )
            admin_text = strip_tags(admin_html)

            if admin_recipients:
                admin_email = EmailMultiAlternatives(
                    admin_subject,
                    admin_text,
                    settings.DEFAULT_FROM_EMAIL,
                    admin_recipients,
                )
                admin_email.attach_alternative(admin_html, "text/html")
                admin_email.send()

            user_subject = "Thank you for sharing your Holytrail experience"
            user_html = render_to_string(
                "emails/feedback_thank_you.html", {"feedback": feedback}
            )
            user_text = strip_tags(user_html)

            user_email = EmailMultiAlternatives(
                user_subject,
                user_text,
                settings.DEFAULT_FROM_EMAIL,
                [feedback.email],
            )
            user_email.attach_alternative(user_html, "text/html")
            user_email.send()

            messages.success(request, "Thank you for sharing your feedback!")
            return redirect("tour:feedback")
        messages.error(request, "Please correct the errors below.")
    else:
        form = FeedbackForm()

    return render(request, "tour/feedback.html", {"form": form})
