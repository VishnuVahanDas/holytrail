from django.test import TestCase
from django.urls import reverse

class CheckoutViewTests(TestCase):
    def test_travel_option_in_context(self):
        response = self.client.get(reverse('checkout') + '?count=1&total_amount=1000&booking_option=family&travel_option=Innova')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Innova')

