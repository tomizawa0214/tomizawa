from django.shortcuts import render, redirect
from django.views import View
from django.conf import settings
from django.views.generic import TemplateView
from django.core.mail import BadHeaderError, EmailMessage
from django.http import HttpResponse, HttpResponseRedirect
from django.template.loader import render_to_string
from .forms import ContactForm
import re


class IndexView(View):
    def get(self, request, *args, **kwargs):
        redirect_url = 'https://www.alkunelma.co.jp'
        return HttpResponseRedirect(redirect_url)

class ContactFormView(View):
    def get(self, request, *args, **kwargs):
        redirect_url = 'https://www.alkunelma.co.jp#contact'
        return HttpResponseRedirect(redirect_url)

class ContactThanksView(View):
    def get(self, request, *args, **kwargs):
        redirect_url = 'https://www.alkunelma.co.jp'
        return HttpResponseRedirect(redirect_url)