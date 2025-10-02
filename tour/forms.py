from django import forms

from .models import Feedback


class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = [
            "name",
            "mobile_number",
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
            "mobile_number": "Mobile Number",
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
                field.widget = forms.NumberInput(
                    attrs={
                        "class": "form-control",
                        "min": 0,
                        "max": 5,
                    }
                )
            elif field_name in {"overall_experience", "comments"}:
                field.widget = forms.Textarea(
                    attrs={
                        "class": "form-control",
                        "rows": 4,
                    }
                )
            elif field_name == "mobile_number":
                field.widget = forms.TextInput(
                    attrs={
                        "class": "form-control",
                        "type": "tel",
                    }
                )
            else:
                field.widget = forms.TextInput(
                    attrs={
                        "class": "form-control",
                    }
                )

        self.fields["comments"].required = False
