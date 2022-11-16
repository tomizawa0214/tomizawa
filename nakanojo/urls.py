from django.urls import path
from nakanojo import views


app_name = 'app'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('register/<int:pk>/', views.RegisterView.as_view(), name='register'),
    path('search/<int:pk>/', views.SearchView.as_view(), name='search'),
    path('register/add/', views.AddView.as_view(), name='add'),
]