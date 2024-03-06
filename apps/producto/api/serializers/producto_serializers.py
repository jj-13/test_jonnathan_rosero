from rest_framework import serializers
from apps.producto.models import Categoria, Producto


class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        fields = ('__all__')
        #exclude = ('parent',)


class ProductoSerializer(serializers.ModelSerializer):
    categorias = CategoriaSerializer(many=True, read_only=True)

    class Meta:
        model = Producto
        fields = ('__all__')
        #exclude = ('parent',)