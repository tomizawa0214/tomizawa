from django.shortcuts import render, redirect
from django.views import View
from django.conf import settings
from django.views.generic import TemplateView
from django.core.mail import BadHeaderError, EmailMessage
from django.http import HttpResponse
from django.template.loader import render_to_string
from .forms import ContactForm
import re


class IndexView(TemplateView):
    template_name = 'portfolio/index.html'

class ContactFormView(View):
    def get(self, request, *args, **kwargs):
        form = ContactForm(request.POST or None)

        return render(request, 'portfolio/contact_form.html', {
            'form': form
        })

    def post(self, request, *args, **kwargs):
        form = ContactForm(request.POST or None)

        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            context = {
                'name': name,
                'email': email,
                'message': message
            }

            subject = render_to_string('portfolio/mail_template/contact_subject.txt', context)
            body = render_to_string('portfolio/mail_template/contact_message.txt', context)
            to_list = [email]
            bcc_list = [settings.EMAIL_HOST_USER]

            try:
                # ひらがなを含む場合のみメール送信
                if re.search('[ぁ-ん]', message) != None:
                    message = EmailMessage(subject=subject, body=body, to=to_list, bcc=bcc_list)
                    message.send()
                else:
                    return HttpResponse("メッセージ内容に問題が発生したため、送信がキャンセルされました。")
            except BadHeaderError:
                return HttpResponse("無効なヘッダが検出されました。")

            return redirect('contact_thanks')

        return render(request, 'portfolio/contact_form.html', {
            'form': form
        })

class ContactThanksView(TemplateView):
    template_name = 'portfolio/contact_thanks.html'