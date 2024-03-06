from django.contrib import admin
from apps.inventario.models import Inventario


class InventarioAdmin(admin.ModelAdmin):
    list_display = ('producto', 'cantidad', )
    list_display_links = ('producto',)
    list_per_page = 30


admin.site.register(Inventario, InventarioAdmin)
