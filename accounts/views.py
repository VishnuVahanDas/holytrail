from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from allauth.socialaccount.signals import pre_social_login
from django.dispatch import receiver

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
            else:
                user = User.objects.create_user(username=username, email=email, password=password1)
                login(request, user)
                return redirect("home:home")
    return render(request, "accounts/login.html", {"error": error})


def logout_view(request):
    logout(request)
    return redirect("home:home")