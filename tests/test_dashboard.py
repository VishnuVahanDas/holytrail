from decimal import Decimal
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from unittest.mock import patch

from tour.models import Order


class DashboardTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="tester", password="pass12345")

    @patch('holytrail.views.razorpay.Client')
    def test_successful_payment_creates_order(self, mock_client):
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
            'booking_option': 'family',
            'travel_option': 'Bus',
            'count': '2',
            'total_amount': '1000',
        }
        self.assertEqual(Order.objects.count(), 0)
        response = self.client.post(reverse('verify_payment'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'thank_you.html')
        self.assertEqual(Order.objects.count(), 1)

    def test_dashboard_displays_user_orders(self):
        Order.objects.create(
            user=self.user,
            name='John',
            email='john@example.com',
            phone='1234567890',
            address='123 Street',
            city='Townsville',
            state='State',
            zip_code='12345',
            booking_option='family',
            travel_option='Bus',
            count=2,
            total_amount=Decimal('1000.00'),
            razorpay_order_id='order_123',
        )
        self.client.login(username="tester", password="pass12345")
        response = self.client.get(reverse('accounts:dashboard'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'accounts/dashboard.html')
        self.assertContains(response, 'Bus')
        self.assertEqual(len(response.context['orders']), 1)
