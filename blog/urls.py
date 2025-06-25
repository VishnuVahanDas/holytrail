from django.urls import path
from .views import category_blog_view, blog_detail_view , all_blogs_view

app_name = 'blog'

urlpatterns = [
    
    path('category/<slug:category_slug>/', category_blog_view, name='category-blogs'),
    path('all-blogs/', all_blogs_view, name='all-blogs'), 
    path('<slug:slug>/', blog_detail_view, name='blog-details'),
]
