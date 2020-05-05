from django.urls import path

from .views import IndexView, ContactFormView, ContactResultView

urlpatterns = [
  path('', IndexView.as_view(), name='index'),
  path('contact/', ContactFormView.as_view(), name='contact_form'),
  path('contact/result/', ContactResultView.as_view(), name='contact_result'),
]