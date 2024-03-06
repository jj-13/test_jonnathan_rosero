from django.contrib import admin
from apps.producto.models import Categoria, Producto


class ProductosAdmin(admin.ModelAdmin):
    list_display = ('codigo', 'nombre', )
    list_display_links = ('nombre',)
    list_per_page = 30


admin.site.register(Producto, ProductosAdmin)
admin.site.register(Categoria)

