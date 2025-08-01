from django.db import models
from django.conf import settings


class EmailOTP(models.Model):
    """Store one time passwords for verifying a user's email address."""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="email_otps",
    )
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField(default=False)

    def __str__(self) -> str:  # pragma: no cover - trivial
        return f"{self.user.username} - {self.code}"
