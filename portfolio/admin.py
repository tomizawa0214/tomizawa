from django.contrib import admin
from .models import *


# ChatGPT
class ChatGPTAdminCustom(admin.ModelAdmin):
    list_display = ( # 一覧
        'token',
        'character',
        'created_date',
    )
admin.site.register(ChatGPT, ChatGPTAdminCustom)
