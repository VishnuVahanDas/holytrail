from django.urls import path
from . import views

app_name = "tour"

urlpatterns = [
    path("", views.tour_view, name="tour"),
    path("detail/", views.tourdetail_view, name="tour-detail"),
]
