from django.db import models
from apps.empresa.models import Empresa


class Categoria(models.Model):
    nombre = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    codigo = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)
    caracteristicas = models.TextField()
    precio_en_moneda = models.DecimalField(max_digits=10, decimal_places=2)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    categorias = models.ManyToManyField(Categoria)

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'

    # def __str__(self):
    #     return f'{self.codigo} - {self.nombre}'
