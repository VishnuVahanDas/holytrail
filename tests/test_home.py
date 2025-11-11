from django.core import mail
from django.test import TestCase, override_settings
from django.urls import reverse


class ContactViewTests(TestCase):
    @override_settings(CONTACT_RECIPIENT_EMAIL="support@example.com", DEFAULT_FROM_EMAIL="noreply@example.com")
    def test_contact_form_sends_email(self):
        data = {
            "name": "Alice",
            "email": "alice@example.com",
            "message": "Hello there",
        }
        response = self.client.post(reverse("contact"), data)
        self.assertRedirects(response, reverse("contact"))
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].to, ["support@example.com"])
        self.assertEqual(mail.outbox[0].reply_to, ["alice@example.com"])
        self.assertIn("Hello there", mail.outbox[0].body)

    @override_settings(DEFAULT_FROM_EMAIL="noreply@example.com")
    def test_contact_form_rejects_header_injection_attempt(self):
        data = {
            "name": "Alice",
            "email": "bob@example.com\r\nBcc: injected@example.com",
            "message": "Test",
        }
        response = self.client.post(reverse("contact"), data)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Enter a valid email address.")
        self.assertEqual(len(mail.outbox), 0)

    @override_settings(CONTACT_RECIPIENT_EMAIL="support@example.com", DEFAULT_FROM_EMAIL="noreply@example.com")
    def test_contact_form_normalizes_message_content(self):
        data = {
            "name": "Alice",
            "email": "alice@example.com",
            "message": "Line one\r\nLine two\t",
        }
        response = self.client.post(reverse("contact"), data)
        self.assertRedirects(response, reverse("contact"))
        self.assertEqual(len(mail.outbox), 1)
        self.assertIn("Line one\nLine two", mail.outbox[0].body)

    @override_settings(DEFAULT_FROM_EMAIL="noreply@example.com")
    def test_contact_form_rejects_control_characters_in_name(self):
        data = {
            "name": "Alice\x07",
            "email": "alice@example.com",
            "message": "Hello",
        }
        response = self.client.post(reverse("contact"), data)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Enter a valid name.")
        self.assertEqual(len(mail.outbox), 0)
