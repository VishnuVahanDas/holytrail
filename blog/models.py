from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='blogs/')
    content =CKEditor5Field('Content')  # This is the rich text field. instead of models.TextField()
    author = models.CharField(max_length=100, default='Admin')
    category = models.CharField(max_length=100, default='Travel')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
