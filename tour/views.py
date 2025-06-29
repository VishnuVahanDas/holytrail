from django.shortcuts import render
from .models import Review

# Create your views here.
def tour_view(request):
    return render(request, "tour-listing-1.html")

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