from django.contrib import admin
from .models import *


# 名簿
class MemberAdminCustom(admin.ModelAdmin):
    list_display = ( # 一覧
        'name',
        'created_date',
    )
    ordering = ( # 並び替え機能
        'created_at',
    )
    date_hierarchy = 'created_at' # 日にちのソート機能
admin.site.register(Member, MemberAdminCustom)

# 活動記録
class WorkingDaysAdminCustom(admin.ModelAdmin):
    list_display = ( # 一覧
        'user',
        'working_date',
        'created_date',
    )
    list_filter = ( # 絞り込み機能
        'user',
    )
    ordering = ( # 並び替え機能
        'working_at',
        'created_at',
    )
    date_hierarchy = 'working_at' # 日にちのソート機能
admin.site.register(WorkingDays, WorkingDaysAdminCustom)