from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.5

    def items(self):
        return ['index', 'contact_form', 'contact_thanks']

    def location(self, item):
        return reverse(item)