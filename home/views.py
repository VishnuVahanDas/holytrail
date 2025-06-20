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


def blogdetails_view(request):
    return render(request, "blog-details.html")