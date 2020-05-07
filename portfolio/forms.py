from django import forms
from django.conf import settings
from django.core.mail import BadHeaderError, send_mail, EmailMessage
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
    message = '<Name>\n{0}\n\n<Email>\n{1}\n\n<Message>\n{2}'.format(name, email, message)
    to_list = [settings.EMAIL_HOST_USER]

    try:
      message = EmailMessage(subject=subject, body=message, to=to_list)
      message.send()
    except BadHeaderError:
      return HttpResponse("無効なヘッダが検出されました。")