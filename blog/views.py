from django.db.models import Count
from django.shortcuts import get_object_or_404, render
from .models import Blog, Category

def category_blog_view(request, category_slug):
    category = get_object_or_404(Category, slug=category_slug)
    blogs = Blog.objects.filter(category=category)
    return render(request, 'category-blog.html', {
        'category': category,
        'blogs': blogs,
    })



def blog_detail_view(request, slug):
    blog = get_object_or_404(Blog, slug=slug)
    categories = Category.objects.all()  # get all categories
    return render(request, "blog-details.html", {
        'blog': blog,
        'categories': categories,
    })