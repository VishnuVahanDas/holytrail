from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=100, strip=True)
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea, max_length=4000)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        field_classes = {
            "class": "form-control",
        }
        self.fields["name"].widget.attrs.update(
            {"placeholder": "Your Name", "required": True, **field_classes}
        )
        self.fields["email"].widget.attrs.update(
            {"placeholder": "Your Email", "required": True, **field_classes}
        )
        self.fields["message"].widget.attrs.update(
            {
                "placeholder": "Write Message . . ",
                "required": True,
                "rows": 5,
                **field_classes,
            }
        )

    def clean_name(self):
        name = self.cleaned_data["name"]
        if any(ord(ch) < 32 for ch in name):
            raise forms.ValidationError("Enter a valid name.")
        return name

    def clean_message(self):
        message = self.cleaned_data["message"]
        sanitized = []
        for ch in message:
            codepoint = ord(ch)
            if codepoint < 32 and ch not in {"\n", "\t"}:
                raise forms.ValidationError("Please remove control characters from the message.")
            sanitized.append("\n" if ch == "\r" else ch)
        cleaned = "".join(sanitized).strip()
        if not cleaned:
            raise forms.ValidationError("Please enter a message.")
        return cleaned

