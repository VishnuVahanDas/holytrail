from django.urls import path

from . import views

app_name = "home"
urlpatterns = [
    path("", views.home_view, name="home"),
    path("about", views.about_view, name="about"),
    path("contact", views.contact_view, name="contact"),
    path("team", views.team_view, name="team"),
    path("news", views.news_view, name="news"),
    path("blog", views.blog_view, name="blog"),
    path("destination", views.destination_view, name="destination"),
    path("tour", views.tour_view, name="tour"),
    path("tour-detail/", views.tourdetail_view, name="tour-detail"),
    path("cart",  views.cart_view, name="cart"),
    
]
