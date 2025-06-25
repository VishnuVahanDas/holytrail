from django.db.models import Count
from django.shortcuts import get_object_or_404, render
from .models import Blog, Category

def category_blog_view(request, category_slug):
    category = get_object_or_404(Category, slug=category_slug)
    blogs = Blog.objects.filter(category=category)
    categories = Category.objects.all()  # get all categories
    recent_posts = Blog.objects.order_by('-date')[:3]  # Latest 3 post
    return render(request, 'category-blog.html', {
        'category': category,
        'blogs': blogs,
        'categories': categories,
        'recent_posts': recent_posts,
    })



def blog_detail_view(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    categories = Category.objects.all()  # get all categories
    recent_posts = Blog.objects.order_by('-date')[:3]  # Latest 3 post
    return render(request, "blog-details.html", {
        'blog': blog,
        'categories': categories,
        'recent_posts': recent_posts,
    })