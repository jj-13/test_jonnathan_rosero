from rest_framework import serializers
from apps.producto.api.serializers.producto_serializers import ProductoSerializer
from apps.ordenes.models import Orden, OrdenProducto


class OrdenProductoSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer()

    class Meta:
        model = OrdenProducto
        fields = '__all__'


class OrdenSerializer(serializers.ModelSerializer):
    #productos = OrdenProductoSerializer(many=True)

    class Meta:
        model = Orden
        fields = '__all__'
