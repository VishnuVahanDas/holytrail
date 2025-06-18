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
    adults = request.GET.get('adults', '0')
    youths = request.GET.get('youths', '0')
    adult_total = request.GET.get('adult_total', '0')
    youth_total = request.GET.get('youth_total', '0')
    total_amount = request.GET.get('total_amount', '0')

    context = {
        'adults': adults,
        'youths': youths,
        'adult_total': adult_total,
        'youth_total': youth_total,
        'total_amount': total_amount,
    }
    return render(request, 'checkout.html', context)



def cart_view(request):
      return render(request, "cart.html")

