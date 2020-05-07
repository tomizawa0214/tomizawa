from django import forms
from django.conf import settings
from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse

class ContactForm(forms.Form):
  name = forms.CharField (max_length = 100)
  email = forms.EmailField ()
  message = forms.CharField (widget=forms.Textarea)

  def send_email(self):
    subject = "お問い合わせ"
    name = self.cleaned_data['name']
    email = self.cleaned_data['email']
    message = self.cleaned_data['message']
    from_email = '{name} <{email}>'.format(name=name, email=email)
    recipient_list = [settings.EMAIL_HOST_USER]
    try:
      send_mail(subject, name, email, message, recipient_list)
    except BadHeaderError:
      return HttpResponse("無効なヘッダが検出されました。")