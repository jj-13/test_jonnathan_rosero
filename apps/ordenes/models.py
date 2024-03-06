from django.db import models
from apps.clientes.models import Cliente
from apps.producto.models import Producto


class Orden(models.Model):
    options = (
        ('compra', 'Compra'),
        ('venta', 'Venta'),
    )
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    productos = models.ManyToManyField(Producto, through='OrdenProducto')
    tipo = models.CharField(max_length=10, choices=options)

    class Meta:
        verbose_name = 'Orden'
        verbose_name_plural = 'Ordenes'

    def __str__(self):
        return str(self.id)


class OrdenProducto(models.Model):
    orden = models.ForeignKey(Orden, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()

    def __str__(self):
        return str(self.id)
        #return f'{self.cantidad} unidades de {self.producto.nombre} en la orden {self.orden.id}'

