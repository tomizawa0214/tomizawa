from django import forms
from django_recaptcha.widgets import ReCaptchaV3
from django_recaptcha.fields import ReCaptchaField


class ContactForm(forms.Form):
  name = forms.CharField (max_length=30)
  email = forms.EmailField (min_length=7, max_length=256)
  message = forms.CharField (widget=forms.Textarea)
  captcha = ReCaptchaField(widget=ReCaptchaV3)