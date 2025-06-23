from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='blogs/')
    content = RichTextField()  # instead of models.TextField()
    author = models.CharField(max_length=100, default='Admin')
    category = models.CharField(max_length=100, default='Travel')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
