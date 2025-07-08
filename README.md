# Holytrail

This Django project powers the Holytrail website. It contains the application code and configuration used to run the site.

## Environment Variables

Some features rely on environment variables. When sending booking notifications from `checkout_view`, the following variables control the recipient addresses:

- `ADMIN_EMAILS` &mdash; Comma-separated list of email addresses that should receive the booking details. If unset, defaults to `vipul57612@gmail.com`.
- `CC_EMAILS` &mdash; Comma-separated list of addresses that will be copied on the same email. If unset, defaults to `rishabhpandey101@gmail.com`.

Set these variables in your deployment environment to customise who receives order notifications.
