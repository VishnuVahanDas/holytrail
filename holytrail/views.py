from django.shortcuts import render

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

def tourdetail_view(request):
      return render(request, "tour-listing-details-2.html")

def checkout_view(request):
      return render(request, "checkout.html")

