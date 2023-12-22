from django.contrib import admin
from backend_api.views import register_user, login_user
from django.urls import path



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', register_user, name='register_user'),
    path('api/login/', login_user, name='login_user'),
]
