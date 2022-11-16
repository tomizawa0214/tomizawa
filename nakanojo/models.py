from django.db import models
from django.utils import timezone
import pytz


# 名簿
class Member(models.Model):
    name = models.CharField('お名前', max_length=100)
    created_at = models.DateTimeField('登録日', auto_now_add=True)

    def created_date(self):
        return self.created_at.astimezone(pytz.timezone('Asia/Tokyo')).strftime('%Y / %m / %d　%H:%M')
    created_date.short_description = '登録日'

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '名簿'
        verbose_name_plural = '名簿'

# 活動記録
class WorkingDays(models.Model):
    user = models.ForeignKey(Member, verbose_name='お名前', on_delete=models.DO_NOTHING)
    working_at = models.DateField('活動日', default=timezone.now)
    created_at = models.DateTimeField('登録日', auto_now=True)

    def working_date(self):
        return self.working_at.strftime('%Y / %m / %d')
    working_date.short_description = '活動日'

    def created_date(self):
        return self.created_at.astimezone(pytz.timezone('Asia/Tokyo')).strftime('%Y / %m / %d　%H:%M')
    created_date.short_description = '登録日'

    def __str__(self):
        return self.user.name

    class Meta:
        verbose_name = '活動記録'
        verbose_name_plural = '活動記録'