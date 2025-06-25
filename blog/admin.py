from django.contrib import admin
from django.utils.text import slugify
from .models import Blog, Category

class CategoryAdmin(admin.ModelAdmin):
      # this hides the slug field in the form

    def save_model(self, request, obj, form, change):
        if not obj.slug:
            obj.slug = slugify(obj.name)
        super().save_model(request, obj, form, change)

admin.site.register(Category, CategoryAdmin)
admin.site.register(Blog)
