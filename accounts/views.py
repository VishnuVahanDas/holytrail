from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from allauth.socialaccount.signals import pre_social_login
from django.dispatch import receiver
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.utils.crypto import get_random_string

from .models import EmailOTP

@receiver(pre_social_login)
def social_account_login(sender, request, sociallogin, **kwargs):
    if sociallogin.is_new:
        # Custom logic to handle new users
        pass


def login_view(request):
    error = ""
    if request.method == "POST":
        form_type = request.POST.get("form_type")
        if form_type == "login":
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("home:home")
            else:
                error = "Invalid credentials"
        elif form_type == "register":
            username = request.POST.get("username")
            email = request.POST.get("email")
            password1 = request.POST.get("password1")
            password2 = request.POST.get("password2")
            if password1 != password2:
                error = "Passwords do not match"
            elif User.objects.filter(username=username).exists():
                error = "Username already exists"
            elif User.objects.filter(email=email).exists():
                error = "Email already exists"
            else:
                user = User.objects.create_user(
                    username=username,
                    email=email,
                    password=password1,
                    is_active=False,
                )

                otp_code = get_random_string(6, allowed_chars="0123456789")
                EmailOTP.objects.create(user=user, code=otp_code)

                html_content = render_to_string(
                    "emails/otp_email.html",
                    {"username": username, "code": otp_code},
                )
                text_content = strip_tags(html_content)
                subject = "Verify your email"
                email_message = EmailMultiAlternatives(
                    subject,
                    text_content,
                    settings.DEFAULT_FROM_EMAIL,
                    [email],
                )
                email_message.attach_alternative(html_content, "text/html")
                email_message.send()

                request.session["otp_user_id"] = user.id
                return redirect("accounts:verify_email")
    return render(request, "accounts/login.html", {"error": error})


def logout_view(request):
    logout(request)
    return redirect("home:home")
def verify_email_view(request):
    """Verify the OTP sent to the user's email address."""
    user_id = request.session.get("otp_user_id")
    if not user_id:
        return redirect("accounts:login")

    user = User.objects.filter(id=user_id).first()
    if not user:
        return redirect("accounts:login")

    otp = EmailOTP.objects.filter(user=user, verified=False).order_by("-created_at").first()
    error = ""
    if request.method == "POST":
        code = request.POST.get("code")
        if otp and otp.code == code:
            user.is_active = True
            user.save()
            otp.verified = True
            otp.save()
            login(request, user)
            request.session.pop("otp_user_id", None)
            return redirect("home:home")
        else:
            error = "Invalid code"

    return render(request, "accounts/verify_email.html", {"error": error})
