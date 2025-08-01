from django.urls import path, include

from . import views

app_name = "accounts"

urlpatterns = [
    path("login", views.login_view, name="login"),
    path("register", views.register_view, name="register"),
    path("logout", views.logout_view, name="logout"),
    path("verify", views.verify_email_view, name="verify_email"),
    path("verify/resend", views.resend_otp_view, name="resend_otp"),
    path("forgot-password", views.forgot_password_view, name="forgot_password"),
    path("reset/verify", views.verify_reset_otp_view, name="verify_reset_otp"),
    path("reset/password", views.reset_password_view, name="reset_password"),
]
