from django.contrib import admin

# Register your models here.
from .models import Review, Order

admin.site.register(Review)
admin.site.register(Order)
