from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils import timezone
from decimal import Decimal
from unittest.mock import patch
from datetime import timedelta

from accounts.models import Subscription
from tour.models import Order

class VerifyPaymentViewTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", password="pass12345")

    def test_login_required(self):
        response = self.client.post(reverse('verify_payment'))
        login_url = reverse('accounts:login') + '?next=' + reverse('verify_payment')
        self.assertRedirects(response, login_url)

    def test_redirect_if_not_verified(self):
        unverified = User.objects.create_user(username='nov', password='pass12345', is_active=False)
        self.client.force_login(unverified)
        response = self.client.post(reverse('verify_payment'))
        self.assertRedirects(response, reverse('accounts:verify_email'))

    @patch('holytrail.views.razorpay.Client')
    def test_payment_success_shows_thank_you_page(self, mock_client):
        self.client.login(username="tester", password="pass12345")
        mock_client.return_value.utility.verify_payment_signature.return_value = None
        data = {
            'razorpay_order_id': 'order_123',
            'razorpay_payment_id': 'payment_123',
            'razorpay_signature': 'sig_123',
            'first_name': 'John',
            'phone': '1234567890',
            'address': '123 Street',
            'town-city': 'Townsville',
            'state': 'State',
            'zip-code': '12345',
            'email': 'john@example.com',
            'booking_option': 'economy',
            'count': '2',
            'total_amount': '1000'
        }
        response = self.client.post(reverse('verify_payment'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'thank_you.html')
        self.assertContains(response, 'John')

    @patch('holytrail.views.razorpay.Client')
    def test_discount_amount_validated(self, mock_client):
        self.client.login(username="tester", password="pass12345")
        Subscription.objects.create(user=self.user, start_date=timezone.now().date(), active=True)
        mock_client.return_value.utility.verify_payment_signature.return_value = None
        data = {
            'razorpay_order_id': 'order_123',
            'razorpay_payment_id': 'payment_123',
            'razorpay_signature': 'sig_123',
            'first_name': 'John',
            'phone': '1234567890',
            'address': '123 Street',
            'town-city': 'Townsville',
            'state': 'State',
            'zip-code': '12345',
            'email': 'john@example.com',
            'booking_option': 'economy',
            'count': '2',
            'total_amount': '900',
            'original_total_amount': '1000',
        }
        response = self.client.post(reverse('verify_payment'), data)
        self.assertEqual(response.status_code, 200)
        order = Order.objects.get()
        self.assertEqual(order.total_amount, Decimal('900'))

    @patch('holytrail.views.razorpay.Client')
    def test_discount_not_applied_after_expiry(self, mock_client):
        self.client.login(username="tester", password="pass12345")
        Subscription.objects.create(
            user=self.user,
            start_date=timezone.now().date() - timedelta(days=366),
            active=True,
        )
        mock_client.return_value.utility.verify_payment_signature.return_value = None
        data = {
            'razorpay_order_id': 'order_123',
            'razorpay_payment_id': 'payment_123',
            'razorpay_signature': 'sig_123',
            'first_name': 'John',
            'phone': '1234567890',
            'address': '123 Street',
            'town-city': 'Townsville',
            'state': 'State',
            'zip-code': '12345',
            'email': 'john@example.com',
            'booking_option': 'economy',
            'count': '2',
            'total_amount': '1000',
            'original_total_amount': '1000',
        }
        response = self.client.post(reverse('verify_payment'), data)
        self.assertEqual(response.status_code, 200)
        order = Order.objects.get()
        self.assertEqual(order.total_amount, Decimal('1000'))


class VerifySubscriptionPaymentViewTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", password="pass12345")

    @patch('accounts.views.razorpay.Client')
    def test_subscription_created_on_successful_payment(self, mock_client):
        self.client.login(username="tester", password="pass12345")
        mock_client.return_value.utility.verify_payment_signature.return_value = None
        data = {
            'razorpay_order_id': 'order_123',
            'razorpay_payment_id': 'payment_123',
            'razorpay_signature': 'sig_123',
        }
        response = self.client.post(reverse('accounts:verify_subscription_payment'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'subscription_success.html')
        subscription = Subscription.objects.get()
        self.assertEqual(subscription.user, self.user)
        self.assertTrue(subscription.active)
        self.assertEqual(subscription.start_date, timezone.now().date())

