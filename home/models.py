from django.db import models

class Review(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    rating = models.IntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.rating} Stars"

from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='blogs/')
    content = models.TextField()
    author = models.CharField(max_length=100, default='Admin')
    category = models.CharField(max_length=100, default='Travel')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
