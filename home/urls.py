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
    path("cart",  views.cart_view, name="cart"),
    path("privacy-policy/", views.privacy_policy_view, name="privacy_policy"),
    path("terms-and-conditions/", views.terms_and_conditions_view, name="terms_and_conditions"),
    path("cancellation-refund/", views.cancellation_refund_view, name="cancellation_refund"),
    path("shipping-delivery/", views.shipping_delivery_view, name="shipping_delivery"),
]
