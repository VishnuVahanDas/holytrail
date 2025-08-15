from django.urls import path
from . import views

app_name = "tour"

urlpatterns = [
    path("", views.tour_view, name="tour"),
    path("tour-detail/", views.tourdetail_view, name="tour-detail"),
    path("dwarika-yatra/", views.dwarikayatra_view, name="dwarika-yatra"),
    path("vrindavan-yatra/", views.vrindavanyatra_view, name="vrindavan-yatra"),
    path("jagannathpuri-yatra/", views.jagannathpuriyatra_view, name="jagannathpuri-yatra"),
    path("tour-details/", views.tourdetails_view, name="tour-details"),
]
