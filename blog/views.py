from django.shortcuts import render

# Create your views here.

def blog_detail_view(request, slug):
    #blog = Blog.objects.get(slug=slug)
    #return render(request, "blog-details.html", {'blog': blog})
    return render(request, "about.html")

