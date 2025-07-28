# Holytrail

This Django project powers the Holytrail website. It contains the application code and configuration used to run the site.

## Installation

1. Clone the repository and switch into the project directory:
   ```bash
   git clone <REPO_URL>
   cd holytrail
   ```
2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install the required packages:
   ```bash
   pip install django jazzmin django-ckeditor-5
   ```
   *(Alternatively, install from a `requirements.txt` file if you maintain one.)*

## Environment Variables

Some features rely on environment variables. At a minimum set the following keys:

- `SECRET_KEY` – Secret key for cryptographic signing. `settings.base` uses a fallback when running locally.
- `ENVIRONMENT_NAME` – Optional setting that chooses which settings module is loaded (`base` by default or `production`).
- `ADMIN_EMAILS` – Comma-separated list of email addresses that should receive the booking details. Defaults to `vipul57612@gmail.com`.
- `CC_EMAILS` – Comma-separated list of addresses that will be copied on the same email. Defaults to `rishabhpandey101@gmail.com`.
- `EMAIL_HOST_USER` / `EMAIL_HOST_PASSWORD` – SMTP credentials used when sending mail in the production configuration.
- `DATABASE_USER` / `DATABASE_PASSWORD` – PostgreSQL credentials when using the production settings file.

Set these variables in your deployment environment to configure email notifications and database access and to keep Django secure.

## Running the Development Server

Apply any pending migrations and start the built-in server:

```bash
python manage.py migrate
python manage.py runserver
```

If you wish to use a different settings module (for example the production configuration), set `ENVIRONMENT_NAME` accordingly before running the command.

## Running Tests

Run the Django test suite with:

```bash
python manage.py test
```

## Policies

Editable templates for common policies are located in `templates/`:

- `privacy_policy.html`
- `terms_and_conditions.html`
- `cancellation_refund.html`
- `shipping_delivery.html`

Update these files to change the text shown on the corresponding pages.
