# from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import TemplateView
from django.views.generic.edit import FormView

from .forms import ContactForm

class IndexView(TemplateView):
  template_name = 'portfolio/index.html'

class ContactFormView(FormView):
  template_name = 'portfolio/contact_form.html'
  redirect_field_name = 'portfolio/contact_thanks.html'
  form_class = ContactForm
  # success_url = reverse_lazy('contact_thanks')

  def form_valid(self, form):
    form.send_email()
    return super().form_valid(form)

class ContactThanksView(TemplateView):
  template_name = 'portfolio/contact_thanks.html'

  def get_context_data(self, **kwargs):
    context = super().get_context_data(**kwargs)
    context['success'] = "お問い合わせは正常に送信されました。"