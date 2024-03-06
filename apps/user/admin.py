from django.contrib import admin
from apps.user.models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'email', 'is_staff', 'is_admin', 'is_externo')
    search_fields = ('name', 'last_name', 'email', 'is_staff', 'is_admin', 'is_externo')
    list_per_page = 30


admin.site.register(User, UserAdmin)

