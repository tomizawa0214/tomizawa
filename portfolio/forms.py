from django import forms
from snowpenguin.django.recaptcha2.fields import ReCaptchaField
from snowpenguin.django.recaptcha2.widgets import ReCaptchaWidget


class ContactForm(forms.Form):
  name = forms.CharField (max_length=30)
  email = forms.EmailField (min_length=7, max_length=256)
  message = forms.CharField (widget=forms.Textarea)
  captcha = ReCaptchaField(widget=ReCaptchaWidget())