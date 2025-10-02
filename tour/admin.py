from django.contrib import admin

# Register your models here.
from .models import Feedback, Order, Review


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "get_yatra", "overall_rating", "created_at")
    list_filter = ("yatra", "created_at")
    search_fields = ("name", "email", "overall_experience", "comments")

    @admin.display(description="Yatra")
    def get_yatra(self, obj):
        return obj.get_yatra_display()


admin.site.register(Review)
admin.site.register(Order)
