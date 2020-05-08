from django import forms
from django.conf import settings
from django.core.mail import BadHeaderError, send_mail, EmailMessage
from django.http import HttpResponse

class ContactForm(forms.Form):
  name = forms.CharField (max_length = 100)
  email = forms.EmailField ()
  message = forms.CharField (widget=forms.Textarea)

  def send_email(self):
    name = self.cleaned_data['name']
    email = self.cleaned_data['email']
    message = self.cleaned_data['message']
    subject = "お問い合わせありがとうございます"
    message = '※このメールはシステムからの自動返信です。\n\n{0}様\n\nお問い合わせいただき、ありがとうございます。\n以下の内容でお問い合わせを受け付けいたしました。\n確認させていただき、ご入力いただいたメールアドレスにご連絡いたしますので今しばらくお待ちくださいませ。\n\n--------------------\nName: {0}様\n\nEmail: {1}\n\nMessage:\n{2}\n--------------------'.format(name, email, message)
    to_list = [email]
    bcc_list = [settings.EMAIL_HOST_USER]

    try:
      message = EmailMessage(subject=subject, body=message, to=to_list, bcc=bcc_list)
      message.send()
    except BadHeaderError:
      return HttpResponse("無効なヘッダが検出されました。")