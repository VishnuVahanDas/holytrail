"""
ASGI config for holytrail project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

if "ENVIRONMENT_NAME" in os.environ:
    environment_name = os.environ["ENVIRONMENT_NAME"]
    environment_settings_file = "holytrail.settings." + environment_name
else:
    environment_settings_file = "holytrail.settings.base"

os.environ.setdefault("DJANGO_SETTINGS_MODULE", environment_settings_file)

application = get_asgi_application()
