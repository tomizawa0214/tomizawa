from django.contrib import admin
from django.urls import path, include
from django.contrib.sitemaps.views import sitemap
from .sitemaps import (
    StaticViewSitemap,
)

sitemaps = {
    'static': StaticViewSitemap,
}

admin.site.site_header = 'AlkUnelma'
admin.site.index_title = 'AlkUnelma'

urlpatterns = [
    path('management/', admin.site.urls),
    path('', include('portfolio.urls')),
    path('nakanojo/', include('nakanojo.urls')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='sitemap'),
]
