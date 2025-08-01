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
            'username': 'newuser',
            'email': 'new@example.com',
            'password1': 'pass12345',
            'password2': 'pass12345'
        }
        response = self.client.post(reverse('accounts:register'), data)
        self.assertRedirects(response, reverse('accounts:verify_email'))
        user = User.objects.get(username='newuser')
        self.assertFalse(user.is_active)

    def test_user_login(self):
        User.objects.create_user(username='tester', password='pass12345')
        data = {
            'username': 'tester',
            'password': 'pass12345'
        }
        response = self.client.post(reverse('accounts:login'), data)
        self.assertEqual(response.status_code, 302)
        self.assertEqual(int(self.client.session['_auth_user_id']), User.objects.get(username='tester').id)

    def test_registration_sends_otp_email(self):
        data = {
            'username': 'emailuser',
            'email': 'email@example.com',
            'password1': 'pass12345',
            'password2': 'pass12345'
        }
        self.client.post(reverse('accounts:register'), data)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'Verify your email')

    def test_email_verification(self):
        data = {
            'username': 'verifyuser',
            'email': 'verify@example.com',
            'password1': 'pass12345',
            'password2': 'pass12345'
        }
        self.client.post(reverse('accounts:register'), data)
        user = User.objects.get(username='verifyuser')
        otp = user.email_otps.first()
        response = self.client.post(reverse('accounts:verify_email'), {'code': otp.code})
        self.assertRedirects(response, reverse('home:home'))
        user.refresh_from_db()
        self.assertTrue(user.is_active)

    def test_registration_duplicate_email(self):
        User.objects.create_user(username='existing', email='dup@example.com', password='pass12345')
        data = {
            'username': 'otheruser',
            'email': 'dup@example.com',
            'password1': 'pass12345',
            'password2': 'pass12345'
        }
        response = self.client.post(reverse('accounts:register'), data)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Email already exists')
        self.assertEqual(User.objects.filter(email='dup@example.com').count(), 1)

    def test_forgot_password_flow(self):
        user = User.objects.create_user(username='resetuser', email='reset@example.com', password='oldpass')

        # request OTP
        response = self.client.post(reverse('accounts:forgot_password'), {'email': 'reset@example.com'})
        self.assertRedirects(response, reverse('accounts:verify_reset_otp'))
        self.assertEqual(len(mail.outbox), 1)
        otp = user.password_reset_otps.first()

        # verify OTP
        response = self.client.post(reverse('accounts:verify_reset_otp'), {'code': otp.code})
        self.assertRedirects(response, reverse('accounts:reset_password'))

        # set new password
        data = {'password1': 'newpass123', 'password2': 'newpass123'}
        response = self.client.post(reverse('accounts:reset_password'), data)
        self.assertRedirects(response, reverse('accounts:login'))
        self.assertTrue(self.client.login(username='resetuser', password='newpass123'))
