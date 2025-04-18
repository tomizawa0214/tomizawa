from django.core.management.base import BaseCommand
import requests
from django.conf import settings
from django.core.mail import EmailMessage
from django.core.mail import send_mail


class Command(BaseCommand):
    help = '保守管理サイト用コマンド'

    def handle(self, *args, **options):
        # 保守管理ページ
        url_data = {
            'SunAlps LINEチャットボット': 'https://sunalps.work/callback/',
            'LINE灯油モバイルあんしん便': 'https://anshinbin.work/callback',
            '株式会社FABコーポレートサイト': 'https://www.fab-4.co.jp/'
        }

        for site, url in url_data.items():
            # GETメソッドによるWebページの取得
            res = requests.get(url)
            print(f'{site}:{res.status_code}')

            # ステータスコード200以外の場合はメールで通知
            if res.status_code != 200:
                subject = f'【障害】{site}'
                message = f'{site}に障害が発生している可能性があります。\n\nステータスコード：{res.status_code}\n\n{url}'
                to_list = [settings.EMAIL_HOST_USER]

                send_mail(
                    subject=subject,
                    message=message,
                    from_email=settings.FROM_EMAIL,
                    recipient_list=to_list,
                )

