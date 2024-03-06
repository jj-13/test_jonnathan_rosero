from django.db import models
from apps.producto.models import Producto


class Inventario(models.Model):
    producto = models.OneToOneField(Producto, on_delete=models.CASCADE, primary_key=True)
    cantidad = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name = 'Inventario'
        verbose_name_plural = 'Inventarios'
