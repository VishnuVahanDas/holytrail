from django.urls import path
from . import views

app_name = "tour"

urlpatterns = [
    path("", views.tour_view, name="tour"),
    path("tour-detail/", views.tourdetail_view, name="tour-detail"),
    path("tour-details/", views.tourdetails_view, name="tour-detail"),
]
