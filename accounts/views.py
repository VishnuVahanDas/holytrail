from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from allauth.socialaccount.signals import pre_social_login
from django.dispatch import receiver
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.utils.crypto import get_random_string
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseBadRequest
from django.utils import timezone
import razorpay

from .models import EmailOTP, PasswordResetOTP, Subscription
from tour.models import Order

@receiver(pre_social_login)
def social_account_login(sender, request, sociallogin, **kwargs):
    if sociallogin.is_new:
        # Custom logic to handle new users
        pass


def login_view(request):
    error = ""
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("home:home")
        else:
            user_obj = User.objects.filter(username=username).first()
            if user_obj and user_obj.check_password(password) and not user_obj.is_active:
                request.session["otp_user_id"] = user_obj.id
                return redirect("accounts:verify_email")
            error = "Invalid credentials"
    return render(request, "accounts/login.html", {"error": error})


def register_view(request):
    error = ""
    if request.method == "POST":
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

            welcome_html = render_to_string(
                "emails/welcome_email.html",
                {
                    "username": username,
                    "email": email,
                    "password": password1,
                },
            )
            welcome_text = strip_tags(welcome_html)
            welcome_email = EmailMultiAlternatives(
                "Welcome to Holytrail",
                welcome_text,
                settings.DEFAULT_FROM_EMAIL,
                [email],
            )
            welcome_email.attach_alternative(welcome_html, "text/html")
            welcome_email.send()

            request.session["otp_user_id"] = user.id
            return redirect("accounts:verify_email")
    return render(request, "accounts/register.html", {"error": error})


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


def resend_otp_view(request):
    """Resend a verification OTP to the user."""
    user_id = request.session.get("otp_user_id")
    if not user_id:
        return redirect("accounts:login")

    user = User.objects.filter(id=user_id).first()
    if not user:
        return redirect("accounts:login")

    otp_code = get_random_string(6, allowed_chars="0123456789")
    EmailOTP.objects.create(user=user, code=otp_code)

    html_content = render_to_string(
        "emails/otp_email.html",
        {"username": user.username, "code": otp_code},
    )
    text_content = strip_tags(html_content)
    subject = "Verify your email"
    email_message = EmailMultiAlternatives(
        subject,
        text_content,
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
    )
    email_message.attach_alternative(html_content, "text/html")
    email_message.send()

    return redirect("accounts:verify_email")


def forgot_password_view(request):
    """Send an OTP to the user's email for resetting password."""
    error = ""
    if request.method == "POST":
        email = request.POST.get("email")
        user = User.objects.filter(email=email).first()
        if user:
            otp_code = get_random_string(6, allowed_chars="0123456789")
            PasswordResetOTP.objects.create(user=user, code=otp_code)

            html_content = render_to_string(
                "emails/password_reset_otp_email.html",
                {"username": user.username, "code": otp_code},
            )
            text_content = strip_tags(html_content)
            subject = "Reset your password"
            email_message = EmailMultiAlternatives(
                subject,
                text_content,
                settings.DEFAULT_FROM_EMAIL,
                [email],
            )
            email_message.attach_alternative(html_content, "text/html")
            email_message.send()

            request.session["reset_user_id"] = user.id
            return redirect("accounts:verify_reset_otp")
        else:
            error = "No user with that email"
    return render(request, "accounts/forgot_password.html", {"error": error})


def verify_reset_otp_view(request):
    """Verify the OTP sent for password reset."""
    user_id = request.session.get("reset_user_id")
    if not user_id:
        return redirect("accounts:login")

    user = User.objects.filter(id=user_id).first()
    if not user:
        return redirect("accounts:login")

    otp = (
        PasswordResetOTP.objects.filter(user=user, used=False)
        .order_by("-created_at")
        .first()
    )
    error = ""
    if request.method == "POST":
        code = request.POST.get("code")
        if otp and otp.code == code:
            otp.used = True
            otp.save()
            request.session["password_reset_verified"] = True
            return redirect("accounts:reset_password")
        else:
            error = "Invalid code"

    return render(request, "accounts/verify_reset_otp.html", {"error": error})


def reset_password_view(request):
    """Allow the user to set a new password after OTP verification."""
    user_id = request.session.get("reset_user_id")
    if not user_id or not request.session.get("password_reset_verified"):
        return redirect("accounts:login")

    user = User.objects.filter(id=user_id).first()
    if not user:
        return redirect("accounts:login")

    error = ""
    if request.method == "POST":
        password1 = request.POST.get("password1")
        password2 = request.POST.get("password2")
        if password1 != password2:
            error = "Passwords do not match"
        else:
            user.set_password(password1)
            user.save()
            request.session.pop("reset_user_id", None)
            request.session.pop("password_reset_verified", None)
            return redirect("accounts:login")
    return render(request, "accounts/reset_password.html", {"error": error})


@login_required
def dashboard_view(request):
    user = request.user
    orders = Order.objects.filter(user=user)
    return render(
        request,
        "accounts/dashboard.html",
        {"user": user, "orders": orders},
    )


@login_required(login_url='accounts:login')
def subscribe_view(request):
    """Initiate a Razorpay order for a fixed subscription amount."""
    if not request.user.is_active:
        request.session['otp_user_id'] = request.user.id
        return redirect('accounts:verify_email')

    client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
    order = client.order.create({
        'amount': 9999 * 100,
        'currency': 'INR',
        'payment_capture': 1,
    })

    context = {
        'razorpay_order_id': order['id'],
        'razorpay_key_id': settings.RAZORPAY_KEY_ID,
    }
    return render(request, 'subscribe.html', context)


@csrf_exempt
@login_required(login_url='accounts:login')
def verify_subscription_payment_view(request):
    """Verify Razorpay payment for a subscription and activate it."""
    if not request.user.is_active:
        request.session['otp_user_id'] = request.user.id
        return redirect('accounts:verify_email')

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

    Subscription.objects.create(
        user=request.user,
        start_date=timezone.now().date(),
        active=True,
    )

    return render(request, 'subscription_success.html')
