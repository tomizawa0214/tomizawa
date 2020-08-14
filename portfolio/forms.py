from django import forms

class ContactForm(forms.Form):
  name = forms.CharField (max_length=30)
  email = forms.EmailField (min_length=7, max_length=256)
  message = forms.CharField (widget=forms.Textarea)