from django.shortcuts import render, redirect
from django.views import View
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import *
from .forms import *
from dateutil.relativedelta import relativedelta
from datetime import timedelta
import datetime

# ============================================================
# 関数
# ============================================================

# 名前選択フォーム
def function_form_user(form_user):
    user_data = Member.objects.order_by('created_at') # 登録の古いものが上
    user = [(user.id, user.name) for user in user_data]
    user.insert(0, ('名前を選択', '名前を選択'))
    form_user.fields['user'].choices = user # フォームの選択肢を設定
    form_user.fields['user'].initial = ['名前を選択'] # フォームの初期値を設定
    return form_user

# 検索の活動日選択フォーム
def function_form_working_days(form_working_days):
    working_days_data = WorkingDays.objects.order_by('-working_at') # 活動日の新しいものが上
    # 活動月の重複を避けて取得
    working_ym = []
    for working_days in working_days_data:
        ym = working_days.working_at.strftime('%Y年%m月')
        if not ym in working_ym:
            working_ym.append(ym)

    working_ym = [(ym, ym) for ym in working_ym]
    form_working_days.fields['month'].choices = working_ym # フォームの選択肢を設定
    return form_working_days

# ============================================================
# トップページ
# ============================================================
class IndexView(View):
    def get(self, request, *args, **kwargs):
        form_user = UserSelectForm(request.POST or None) # フォームを取得
        function_form_user(form_user)

        form_working_days = WorkingDaysSelectForm(request.POST or None) # フォームを取得
        function_form_working_days(form_working_days)

        return render(request, 'app/index.html', {
            'form_user': form_user,
            'form_working_days': form_working_days,
        })

    def post(self, request, *args, **kwargs):
        form_user = UserSelectForm(request.POST or None) # フォームを取得
        function_form_user(form_user)

        form_working_days = WorkingDaysSelectForm(request.POST or None) # フォームを取得
        function_form_working_days(form_working_days)

        if form_user.is_valid():
            user = form_user.cleaned_data['user']
            return redirect('app:register', pk=user)

        if form_working_days.is_valid():
            month = form_working_days.cleaned_data['month'].replace('年', '').replace('月', '')
            return redirect('app:search', pk=month)

        return render(request, 'app/index.html', {
            'form_user': form_user,
            'form_working_days': form_working_days,
        })

# ============================================================
# 活動日の登録ページ
# ============================================================
class RegisterView(View):
    def get(self, request, *args, **kwargs):
        user_data = get_object_or_404(Member, pk=self.kwargs['pk'])
        d_today = datetime.date.today() # 今日の日付を取得

        form = WorkingDaysRegisterForm( # フォームを取得
            request.POST or None,
            initial={'date': d_today}
        )

        # 活動日を取得
        working_days_data = WorkingDays.objects.filter(user__name=user_data.name).order_by('-working_at') # 活動日の新しいものが上

        return render(request, 'app/register.html', {
            'user_data': user_data,
            'working_days_data': working_days_data,
            'form': form
        })

# ============================================================
# 活動日の登録ページの非同期処理
# ============================================================
class AddView(View):
    def post(self, request, *args, **kwargs):
        add_date = request.POST.get('add_date')
        user_id = request.POST.get('user_id')

        # 重複を避けて活動日を登録
        if not WorkingDays.objects.filter(user__id=user_id, working_at=add_date).exists():
            working_days = WorkingDays()
            working_days.user = Member.objects.filter(id=user_id)[0]
            working_days.working_at = add_date
            working_days.save()

            data = {
                'judge': 'true',
                'add_date': add_date
            }
        else:
            data = {
                'judge': 'false',
                'add_date': add_date
            }
        
        return JsonResponse(data)

# ============================================================
# 活動日削除の非同期処理
# ============================================================
class DeleteView(View):
    def post(self, request, *args, **kwargs):
        working_id = request.POST.get('working_id')

        # 該当の活動日を削除
        try:
            working_data = WorkingDays.objects.get(id=int(working_id))
            delete_date = working_data.working_at
            working_data.delete()
            data = {
                'delete_date': delete_date
            }
            return JsonResponse(data)

        except Exception:
            return redirect('app:index')

# ============================================================
# 実行委員の活動日一覧ページ
# ============================================================
class SearchView(View):
    def get(self, request, *args, **kwargs):
        year = str(self.kwargs['pk'])[:4]
        month = str(self.kwargs['pk'])[-2:]

        form = WorkingDaysSelectForm(  # フォームを取得
            request.POST or None,
            initial={'month': f'{year}年{month}月'}
        )
        function_form_working_days(form)

        # dateオブジェクトに変換して1ヶ月間を特定
        search_dt_min = datetime.date(int(year), int(month), 1)
        search_dt_max = datetime.date(int(year), int(month), 1) + relativedelta(months=1) - timedelta(days=1)

        working_days_data = WorkingDays.objects.filter(working_at__range=[search_dt_min, search_dt_max]).order_by('user', 'working_at') # 登録順かつ日付順
        
        # 該当ユーザー数を確認
        user = []
        user_working_days_data = []
        for working_day in working_days_data:
            name = working_day.user.name
            if not name in user:
                user.append(name)

        # ユーザーごとに二次元配列化
        for i in range(len(user)):
            user_working_days_data.append([user[i]])
            for working_day in working_days_data:
                name = working_day.user.name
                dt = f'{working_day.working_at.month}/{working_day.working_at.day}'
                if name in user_working_days_data[i]:
                    user_working_days_data[i].append(dt)

        return render(request, 'app/search.html', {
            'form': form,
            'user_working_days_data': user_working_days_data
        })

    def post(self, request, *args, **kwargs):
        form_working_days = WorkingDaysSelectForm(request.POST or None) # フォームを取得
        function_form_working_days(form_working_days)

        if form_working_days.is_valid():
            month = form_working_days.cleaned_data['month'].replace('年', '').replace('月', '')
            return redirect('app:search', pk=month)

        return render(request, 'app/index.html', {
            'form_working_days': form_working_days,
        })