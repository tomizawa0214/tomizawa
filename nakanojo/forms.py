from django import forms
import bootstrap_datepicker_plus.widgets as datetimepicker


# 名前を選択
class UserSelectForm(forms.Form):
    user = forms.ChoiceField(label='', widget=forms.Select)

    # エラーメッセージ
    def clean_user(self):
        user = self.cleaned_data['user']
        if user == '名前を選択':
            raise forms.ValidationError('※名前を選択してください。')
        return user

# 活動日を選択
class WorkingDaysSelectForm(forms.Form):
    month = forms.ChoiceField(label='', widget=forms.Select)

# 活動日の登録
class WorkingDaysRegisterForm(forms.Form):
    date = forms.DateField(
        widget = datetimepicker.DatePickerInput(
            attrs={'readonly': 'true'},
            options={
                'locale': 'ja',
                'format': 'YYYY / MM / DD',
                'dayViewHeaderFormat': 'YYYY年 MMMM',
                'ignoreReadonly': True,
                'allowInputToggle': True
            }
        )
    )