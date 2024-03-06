from django.contrib import admin
from apps.empresa.models import Empresa


class EmpresaAdmin(admin.ModelAdmin):
    list_display = ('nit', 'nombre', )
    list_display_links = ('nombre',)
    list_per_page = 30


admin.site.register(Empresa, EmpresaAdmin)

