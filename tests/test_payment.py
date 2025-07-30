from django.test import TestCase
from django.urls import reverse
from unittest.mock import patch

class VerifyPaymentViewTests(TestCase):
    @patch('holytrail.views.razorpay.Client')
    def test_payment_success_shows_thank_you_page(self, mock_client):
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
            'total_amount': '1000'
        }
        response = self.client.post(reverse('verify_payment'), data)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'thank_you.html')
        self.assertContains(response, 'John')

