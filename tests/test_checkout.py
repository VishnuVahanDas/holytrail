from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils import timezone

from accounts.models import Subscription


class CheckoutViewTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", password="pass12345")

    def test_travel_option_in_context(self):
        self.client.login(username="tester", password="pass12345")
        response = self.client.get(reverse('checkout') + '?count=1&total_amount=1000&booking_option=family&travel_option=Innova')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Innova')

    def test_redirect_if_not_logged_in(self):
        url = reverse('checkout') + '?count=1&total_amount=1000&booking_option=family&travel_option=Bus'
        response = self.client.get(url)
        login_url = reverse('accounts:login') + '?next=' + url
        self.assertRedirects(response, login_url)

    def test_redirect_if_not_verified(self):
        unverified = User.objects.create_user(
            username="unverified", password="pass12345", is_active=False
        )
        self.client.force_login(unverified)
        url = reverse('checkout') + '?count=1&total_amount=1000&booking_option=family&travel_option=Bus'
        response = self.client.get(url)
        self.assertRedirects(response, reverse('accounts:verify_email'))

    def test_discount_applied_for_active_subscription(self):
        Subscription.objects.create(user=self.user, start_date=timezone.now().date(), active=True)
        self.client.login(username="tester", password="pass12345")
        response = self.client.get(reverse('checkout') + '?count=1&total_amount=1000&booking_option=family')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['total_amount'], '900')
        self.assertEqual(response.context['original_total_amount'], '1000')

