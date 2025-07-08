import os
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render, redirect
from django.utils.html import strip_tags
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponseRedirect

from blog.models import Blog

def home_view(request):
    blogs = Blog.objects.all().order_by('-date')
    return render(request, "index.html", {'blogs': blogs})

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
    return render(request, "unused/destination-details.html")

def cart_view(request):
    return render(request, "cart.html")

