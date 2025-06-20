from django.urls import path

from . import views

app_name = "home"
urlpatterns = [
    path("<slug:slug>/", views.blog_detail_view, name="blog-details"),

]
