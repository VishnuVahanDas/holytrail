from django.urls import path
from . import views

app_name = "tour"

urlpatterns = [
    path("", views.tour_view, name="tour"),
    path("tour-detail/", views.tourdetail_view, name="tour-detail"),
    # Ensure a unique name for the tour-details route
    path("tour-details/", views.tourdetails_view, name="tour-details"),
]
