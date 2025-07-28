from django.test import TestCase

class PolicyPagesTests(TestCase):
    def test_privacy_policy_page(self):
        response = self.client.get('/privacy-policy/')
        self.assertEqual(response.status_code, 200)

    def test_terms_page(self):
        response = self.client.get('/terms-and-conditions/')
        self.assertEqual(response.status_code, 200)

    def test_cancellation_refund_page(self):
        response = self.client.get('/cancellation-refund/')
        self.assertEqual(response.status_code, 200)

    def test_shipping_delivery_page(self):
        response = self.client.get('/shipping-delivery/')
        self.assertEqual(response.status_code, 200)
