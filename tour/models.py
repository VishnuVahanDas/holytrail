from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class Review(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    rating = models.IntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.rating} Stars"


class Feedback(models.Model):
    RATING_VALIDATORS = [MinValueValidator(0), MaxValueValidator(5)]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    overall_rating = models.PositiveSmallIntegerField(validators=RATING_VALIDATORS)
    travel_experience = models.PositiveSmallIntegerField(validators=RATING_VALIDATORS)
    accommodation = models.PositiveSmallIntegerField(validators=RATING_VALIDATORS)
    fooding = models.PositiveSmallIntegerField(validators=RATING_VALIDATORS)
    tour_guide = models.PositiveSmallIntegerField(validators=RATING_VALIDATORS)
    knowledge_sharing = models.PositiveSmallIntegerField(validators=RATING_VALIDATORS)
    overall_experience = models.TextField()
    comments = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.overall_rating} Stars"


class Order(models.Model):
    BOOKING_CHOICES = (
        ("economy", "Economy"),
        ("delux", "Delux"),
        ("premium", "Premium"),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    booking_option = models.CharField(max_length=20, choices=BOOKING_CHOICES)
    count = models.PositiveIntegerField(default=1)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    razorpay_order_id = models.CharField(max_length=100)
    razorpay_payment_id = models.CharField(max_length=100, blank=True, null=True)
    razorpay_signature = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"
