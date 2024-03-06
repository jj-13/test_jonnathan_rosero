from django.contrib import admin
from apps.ordenes.models import Orden, OrdenProducto


class OrdenAdmin(admin.ModelAdmin):
    list_display = ('id',)
    list_display_links = ('id',)
    list_per_page = 30


admin.site.register(Orden, OrdenAdmin)
admin.site.register(OrdenProducto)
