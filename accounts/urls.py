from django.urls import path
from django.urls import path, include

from . import views

app_name = "accounts"

urlpatterns = [
    path('', include('allauth.urls')),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
]
