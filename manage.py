import os
import sys


def main():
    # os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings.production') # 本番環境
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings.local') # 開発環境
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
