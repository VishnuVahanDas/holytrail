from django.db import models
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
    
class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='blogs/')
    content = CKEditor5Field('Text', config_name='default')
    author = models.CharField(max_length=100, default='Admin')
    
    # ✅ Link to Category model
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='blogs')
    
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
