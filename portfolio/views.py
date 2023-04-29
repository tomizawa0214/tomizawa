# from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import View
from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.conf import settings
from django.core.mail import BadHeaderError, EmailMessage
from django.http import HttpResponse
from django.template.loader import render_to_string
from .forms import ContactForm
import re

# LINE送信
from django.http.response import HttpResponse, HttpResponseBadRequest, HttpResponseServerError
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from linebot import LineBotApi, WebhookHandler
from linebot.exceptions import InvalidSignatureError, LineBotApiError
from linebot.models import MessageEvent, TextMessage, FlexSendMessage
from .models import *
# ChatGPT
import openai

line_bot_api = LineBotApi(settings.CHANNEL_ACCESS_TOKEN)
handler = WebhookHandler(settings.CHANNEL_SECRET)
openai.api_key = settings.OPEN_AI_API

class CallbackView(View):
    def get(self, request, *args, **kwargs):
        return HttpResponse('OK')

    def post(self, request, *args, **kwargs):
        signature = request.META['HTTP_X_LINE_SIGNATURE']
        body = request.body.decode('utf-8')

        try:
            handler.handle(body, signature)
        except InvalidSignatureError:
            return HttpResponseBadRequest()
        except LineBotApiError as e:
            print(e)
            return HttpResponseServerError()

        return HttpResponse('OK')

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(CallbackView, self).dispatch(*args, **kwargs)
    
    @staticmethod
    @handler.add(MessageEvent, message=TextMessage)
    def message_event(event):
        if event.reply_token == '00000000000000000000000000000000':
            return

        # ユーザーからのメッセージを格納
        text = event.message.text

        # ユーザーの入力からChatGPTの文章を作成
        response = openai.ChatCompletion.create(
            model='gpt-3.5-turbo',
            messages=[
                {
                    'role': 'user',
                    'content': text
                }
            ]
        )

        # ChatGPTの回答本文
        chat_results = response.choices[0]['message']['content'].strip()

        # ChatGPTのトークン数（入力＆出力）
        token = response.usage['total_tokens']

        # 文字数
        character = len(text) + len(chat_results)

        # DB更新
        chatgpt = ChatGPT.objects.get(pk=1)
        current_num_token = chatgpt.token
        current_num_character = chatgpt.character
        chatgpt.token = token + current_num_token
        chatgpt.character = character + current_num_character
        chatgpt.save()

        # LINEボットを送信
        content = {
            'type': 'flex',
            'altText': chat_results,
            'contents': {
                'type': 'bubble',
                'body': {
                    'type': 'box',
                    'layout': 'vertical',
                    'contents': [
                        {
                            'type': 'text',
                            'text': chat_results,
                            'wrap': True,
                            'contents': []
                        }
                    ]
                }
            }
        }
        result = FlexSendMessage.new_from_json_dict(content)
        line_bot_api.reply_message(event.reply_token, result)
        return

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