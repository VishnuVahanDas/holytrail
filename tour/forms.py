from django import forms

from .models import Feedback


STAR_CHOICES = [(value, str(value)) for value in range(5, -1, -1)]


class StarRatingWidget(forms.RadioSelect):
    template_name = "tour/widgets/star_rating.html"
    option_template_name = "tour/widgets/star_rating_option.html"


class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = [
            "name",
            "email",
            "yatra",
            "overall_rating",
            "travel_experience",
            "accommodation",
            "fooding",
            "tour_guide",
            "knowledge_sharing",
            "overall_experience",
            "comments",
        ]
        labels = {
            "name": "Name",
            "email": "Email Address",
            "yatra": "Which yatra did you join?",
            "overall_rating": "Overall, how would you rate your pilgrimage experience? (0-5)",
            "travel_experience": "How would you rate your travel experience? (0-5)",
            "accommodation": "How would you rate the accommodation arrangements? (0-5)",
            "fooding": "How satisfied were you with the food arrangements? (0-5)",
            "tour_guide": "How would you rate the tour guide's support? (0-5)",
            "knowledge_sharing": "How would you rate the knowledge sharing during the tour? (0-5)",
            "overall_experience": "Tell us about your overall experience",
            "comments": "Any additional comments or suggestions?",
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        rating_fields = [
            "overall_rating",
            "travel_experience",
            "accommodation",
            "fooding",
            "tour_guide",
            "knowledge_sharing",
        ]
        for field_name in self.fields:
            field = self.fields[field_name]
            if field_name in rating_fields:
                field.min_value = 0
                field.max_value = 5
                field.choices = STAR_CHOICES
                field.widget = StarRatingWidget()
                field.widget.choices = STAR_CHOICES
            elif field_name in {"overall_experience", "comments"}:
                field.widget = forms.Textarea(
                    attrs={
                        "class": "form-control",
                        "rows": 4,
                    }
                )
            elif field_name == "email":
                field.widget = forms.EmailInput(
                    attrs={
                        "class": "form-control",
                    }
                )
            elif field_name == "yatra":
                choices = [
                    ("", "Select your yatra"),
                    *Feedback.YATRA_CHOICES,
                ]
                field.choices = choices
                field.widget = forms.Select(
                    attrs={
                        "class": "form-control",
                    }
                )
                field.widget.choices = choices
                field.initial = ""
            else:
                field.widget = forms.TextInput(
                    attrs={
                        "class": "form-control",
                    }
                )

        self.fields["comments"].required = False
