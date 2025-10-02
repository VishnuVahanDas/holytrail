from django.contrib import admin

# Register your models here.
from .models import Feedback, Order, Review

admin.site.register(Review)
admin.site.register(Order)
admin.site.register(Feedback)
