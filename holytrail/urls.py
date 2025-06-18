"""
URL configuration for holytrail project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path as url
from django.conf.urls.static import static
from django.views.static import serve

from .views import  home_view , about_view , contact_view , team_view , news_view , blog_view , destination_view , tour_view , tourdetail_view , checkout_view, cart_view
urlpatterns = [
    path('admin/', admin.site.urls),
    path("", home_view, name="home"),
    path("about", about_view, name="about"),
    path("contact", contact_view, name="contact"),
    path("team", team_view, name="team"),
    path("news", news_view, name="news"),
    path("blog", blog_view, name="blog"),
    path("destination", destination_view, name="destination"),
    path("tour", tour_view, name="tour"),
    path("tour-detail", tourdetail_view, name="tour-detail"),
    path("checkout/", checkout_view, name="checkout"),
    path("cart", cart_view, name="cart"),


    url(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    url(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
