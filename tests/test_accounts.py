from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from django.core import mail

class AccountsTests(TestCase):
    def test_login_page_loads(self):
        response = self.client.get(reverse('accounts:login'))
        self.assertEqual(response.status_code, 200)

    def test_user_registration(self):
        data = {
            'form_type': 'register',
            'username': 'newuser',
            'email': 'new@example.com',
            'password1': 'pass12345',
            'password2': 'pass12345'
        }
        response = self.client.post(reverse('accounts:login'), data)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(User.objects.filter(username='newuser').exists())

    def test_user_login(self):
        User.objects.create_user(username='tester', password='pass12345')
        data = {
            'form_type': 'login',
            'username': 'tester',
            'password': 'pass12345'
        }
        response = self.client.post(reverse('accounts:login'), data)
        self.assertEqual(response.status_code, 302)
        self.assertEqual(int(self.client.session['_auth_user_id']), User.objects.get(username='tester').id)

    def test_registration_sends_welcome_email(self):
        data = {
            'form_type': 'register',
            'username': 'emailuser',
            'email': 'email@example.com',
            'password1': 'pass12345',
            'password2': 'pass12345'
        }
        self.client.post(reverse('accounts:login'), data)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'Welcome to Holytrail')
