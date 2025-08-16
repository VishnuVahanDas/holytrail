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


class PasswordResetOTP(models.Model):
    """Store one time passwords for resetting a user's password."""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="password_reset_otps",
    )
    code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    used = models.BooleanField(default=False)

    def __str__(self) -> str:  # pragma: no cover - trivial
        return f"{self.user.username} - {self.code}"


class Subscription(models.Model):
    """Store subscription details for a user."""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="subscriptions",
    )
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self) -> str:  # pragma: no cover - trivial
        return f"{self.user.username} subscription"
