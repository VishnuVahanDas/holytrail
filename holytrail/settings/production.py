"""
Django settings for holytrail project.

Generated by 'django-admin startproject' using Django 5.2.1.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.2/ref/settings/
"""

import os
from typing import Any, Dict
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))


# SECURITY WARNING: keep the secret key used in production secret!
# Falls back to the original development key when the environment variable
# is unset so the project can run locally without additional configuration.
#SECRET_KEY = os.environ.get(
#    "SECRET_KEY",
#    "django-insecure-864p+t^0re3pz01cp1fcfj!@sh7)j)z*cj+6#+z*(8xq55pv^&",
#)
SECRET_KEY = 'django-insecure-864p+t^0re3pz01cp1fcfj!@sh7)j)z*cj+6#+z*(8xq55pv^&'

# SECURITY WARNING: don't run with debug turned on in production!
#DEBUG = True

ALLOWED_HOSTS = ["*"]

# Application definition

INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Third-party apps (like CKEditor)
    'django_ckeditor_5',
    # local apps
    "home",
    "blog",
    'tour',

]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'holytrail.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'blog.context_processors.category_list',
            ],
        },
    },
]

WSGI_APPLICATION = 'holytrail.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'holytrail_db',
        'USER': os.environ.get("DATABASE_USER"),
        'PASSWORD': os.environ.get("DATABASE_PASSWORD"),
        'HOST': 'localhost',
        'PORT': '5432',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

JAZZMIN_SETTINGS: Dict[str, Any] = {
    
    # Logo to use for your site, must be present in static files, used for brand on top left

    # Relative path to logo for your site, used for login logo (must be present in static files. Defaults to site_logo)
    "login_logo": "books/img/logo-login.png",
    # Logo to use for login form in dark themes (must be present in static files. Defaults to login_logo)
    "login_logo_dark": "books/img/logo-login-dark-mode.png",
    # CSS classes that are applied to the logo
    "site_logo_classes": None,
    # Relative path to a favicon for your site, will default to site_logo if absent (ideally 32x32 px)
    "site_icon": "books/img/icon.png",
    # List of model admins to search from the search bar, search bar omitted if excluded
    # If you want to use a single search field you dont need to use a list, you can use a simple string
    # Field name on user model that contains avatar ImageField/URLField/Charfield or a callable that receives the user
    "user_avatar": None,
    ############
    # Top Menu #
    ############
    # Links to put along the top menu
    "topmenu_links": [
        # Url that gets reversed (Permissions can be added)
        {"name": "Home", "url": "admin:index",
            "permissions": ["auth.view_user"]},
        # external url that opens in a new window (Permissions can be added)
        # model admin to link to (Permissions checked against model)
        {"model": "auth.User"},
        # App with dropdown menu to all its models pages (Permissions checked against models)
    ],
    #############
    # User Menu #
    #############
    # Additional links to include in the user menu on the top right ('app' url type is not allowed)
    "usermenu_links": [
        {"model": "auth.user"},
    ],
    #############
    # Side Menu #
    #############
    # Whether to display the side menu
    "show_sidebar": True,
    # Whether to aut expand the menu
    "navigation_expanded": True,
    # Hide these apps when generating side menu e.g (auth)
    "hide_apps": [],
    # Hide these models when generating side menu (e.g auth.user)
    "hide_models": [],
    # List of apps to base side menu (app or model) ordering off of
    "order_with_respect_to": ["Make Messages", "auth", "books", "books.author", "books.book", "loans"],
    # Custom links to append to app groups, keyed on app name

    # Custom icons for side menu apps/models See the link below
    # https://fontawesome.com/icons?d=gallery&m=free&v=5.0.0,5.0.1,5.0.10,5.0.11,5.0.12,5.0.13,5.0.2,5.0.3,5.0.4,5.0.5,5.0.6,5.0.7,5.0.8,5.0.9,5.1.0,
    # 5.1.1,5.2.0,5.3.0,5.3.1,5.4.0,5.4.1,5.4.2,5.13.0,5.12.0,5.11.2,5.11.1,5.10.0,5.9.0,5.8.2,5.8.1,5.7.2,5.7.1,5.7.0,5.6.3,5.5.0,5.4.2
    # for the full list of 5.13.0 free icon classe

    # Icons that are used when one is not manually specified
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    #################
    # Related Modal #
    #################
    # Activate Bootstrap modal
    "related_modal_active": True,
    #############
    # UI Tweaks #
    #############
    # Relative paths to custom CSS/JS scripts (must be present in static files)
    "custom_css": None,
    "custom_js": None,
    ###############
    # Change view #
    ###############
    # Render out the change view as a single form, or in tabs, current options are
    # - single
    # - horizontal_tabs (default)
    # - vertical_tabs
    # - collapsible
    # - carousel
    "changeform_format": "horizontal_tabs",
    # override change forms on a per modeladmin basis
    "changeform_format_overrides": {"auth.user": "collapsible", "auth.group": "vertical_tabs"},

}

JAZZMIN_SETTINGS = {
    "site_title": "HolyTrail Admin",
    "site_header": "HolyTrail Admin Portal",
    "welcome_sign": "Welcome to HolyTrail Admin",
    "copyright": "HolyTrail © 2025",
    "search_model": "auth.User",
    "show_ui_builder": True,
    # add more options here if needed
}


# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Kolkata'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/

# static paths
STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")
# media paths
MEDIA_URL = "/media/"  # django storage
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

CKEDITOR_5_CONFIGS = {
    "default": {
        "toolbar": [
            "heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "blockQuote",
            "|", "alignment", "insertTable", "imageUpload", "undo", "redo"
        ],
        "image": {
            "toolbar": ["imageStyle:alignLeft", "imageStyle:alignCenter", "imageStyle:alignRight", "|", "imageTextAlternative"],
            "styles": ["alignLeft", "alignCenter", "alignRight"]
        },
        "language": "en"
    }
}


CKEDITOR_5_UPLOADS_PATH = 'uploads/'  # This handles image/file uploads in editor

CKEDITOR_5_CUSTOM_CSS = 'css/editor-custom.css'  # This applies your own styles to editor content


# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
# Email Backend

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
DEFAULT_FROM_EMAIL = 'Holytrail <iskcongkp.it@gmail.com>'
