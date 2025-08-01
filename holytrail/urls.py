"""
URL configuration for holytrail project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path as url
from django.conf.urls.static import static
from django.views.static import serve
from django.conf.urls.i18n import i18n_patterns
from . import views

admin.sites.AdminSite.site_header = 'Holytrail Admin'
admin.sites.AdminSite.site_title = 'Holytrail'
admin.sites.AdminSite.index_title = 'Tour & Travel'

urlpatterns = [
    path("i18n", include("django.conf.urls.i18n")),
    path('admin/', admin.site.urls),
    path("", include("home.urls")),
    path("accounts/", include("accounts.urls")),
    path('auth/', include('social_django.urls', namespace='social')),
    path("tour/", include("tour.urls")),
    path('blogs/', include('blog.urls', namespace='blog')),
    path("checkout/", views.checkout_view, name="checkout"),
    path("payment/verify/", views.verify_payment_view, name="verify_payment"),
    path("thank-you/",  views.thank_you_view, name="thank_you"),
     # ✅ CKEditor5 URL for uploads
    path('ckeditor5/', include('django_ckeditor_5.urls')),

    # media/static serving in development
    url(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    url(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
]
urlpatterns += i18n_patterns(path("admin", admin.site.urls))
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)