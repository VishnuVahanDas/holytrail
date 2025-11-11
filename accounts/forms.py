from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.validators import UnicodeUsernameValidator


class RegistrationForm(forms.Form):
    username = forms.CharField(
        max_length=150,
        strip=True,
        validators=[UnicodeUsernameValidator()],
    )
    email = forms.EmailField()
    password1 = forms.CharField(strip=True, widget=forms.PasswordInput)
    password2 = forms.CharField(strip=True, widget=forms.PasswordInput)

    error_messages = {
        "password_mismatch": "Passwords do not match",
        "username_exists": "Username already exists",
        "email_exists": "Email already exists",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.user_model = get_user_model()
        self.fields["username"].widget.attrs.update(
            {"placeholder": "username", "required": True}
        )
        self.fields["email"].widget.attrs.update(
            {"placeholder": "email", "required": True}
        )
        self.fields["password1"].widget.attrs.update(
            {"placeholder": "password", "required": True, "class": "login-page__password"}
        )
        self.fields["password2"].widget.attrs.update(
            {
                "placeholder": "confirm password",
                "required": True,
                "class": "login-page__password",
            }
        )

    def clean_username(self):
        username = self.cleaned_data["username"]
        if self.user_model.objects.filter(username__iexact=username).exists():
            raise forms.ValidationError(self.error_messages["username_exists"])
        return username

    def clean_email(self):
        email = self.cleaned_data["email"]
        disallowed = {",", ";"}
        if any(char in email for char in disallowed):
            raise forms.ValidationError(self.fields["email"].error_messages["invalid"])
        if any(ord(ch) < 32 for ch in email):
            raise forms.ValidationError(self.fields["email"].error_messages["invalid"])
        if self.user_model.objects.filter(email__iexact=email).exists():
            raise forms.ValidationError(self.error_messages["email_exists"])
        return email

    def clean(self):
        cleaned_data = super().clean()
        password1 = cleaned_data.get("password1")
        password2 = cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError(self.error_messages["password_mismatch"])
        return cleaned_data


class EmailSubmissionForm(forms.Form):
    email = forms.EmailField()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["email"].widget.attrs.update(
            {"placeholder": "Email", "required": True}
        )

    def clean_email(self):
        email = self.cleaned_data["email"]
        disallowed = {",", ";"}
        if any(char in email for char in disallowed):
            raise forms.ValidationError(self.fields["email"].error_messages["invalid"])
        if any(ord(ch) < 32 for ch in email):
            raise forms.ValidationError(self.fields["email"].error_messages["invalid"])
        return email
