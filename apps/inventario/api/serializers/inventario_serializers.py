from rest_framework import serializers
from apps.inventario.models import Inventario
from apps.producto.api.serializers.producto_serializers import ProductoSerializer


class InventarioSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer()

    class Meta:
        model = Inventario
        fields = ('__all__')
        #exclude = ('parent',)