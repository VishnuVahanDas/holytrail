from .models import Category

def category_list(request):
    return {
        'nav_categories': Category.objects.all()
    }
