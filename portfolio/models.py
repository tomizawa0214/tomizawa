from django.db import models
from django.utils import timezone
import pytz


# ChatGPT
class ChatGPT(models.Model):
    token = models.PositiveIntegerField('トークン数', default=0)
    character = models.PositiveIntegerField('文字数', default=0)
    created_at = models.DateTimeField('更新時間', auto_now=True)

    def created_date(self):
        return self.created_at.astimezone(pytz.timezone('Asia/Tokyo')).strftime('%Y / %m / %d　%H:%M')
    created_date.short_description = '更新時間'

    def __str__(self):
        return str(self.character)

    class Meta:
        verbose_name = 'ChatGPT'
        verbose_name_plural = 'ChatGPT'
