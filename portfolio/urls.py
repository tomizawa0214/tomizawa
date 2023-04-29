from django.urls import path
from .views import IndexView, ContactFormView, ContactThanksView
from portfolio import views

urlpatterns = [
  path('', IndexView.as_view(), name='index'),
  path('contact/', ContactFormView.as_view(), name='contact_form'),
  path('contact/thanks/', ContactThanksView.as_view(), name='contact_thanks'),
  path('callback/', views.CallbackView.as_view(), name='callback_view'),
]