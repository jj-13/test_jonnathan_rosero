from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import permissions
from apps.producto.api.serializers.producto_serializers import CategoriaSerializer, ProductoSerializer


class CategoriaViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CategoriaSerializer
    queryset = CategoriaSerializer.Meta.model.objects.all()


class ProductoViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ProductoSerializer
    queryset = ProductoSerializer.Meta.model.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data

        # Convertir campos a tipos de datos apropiados
        data['precio_en_moneda'] = float(data['precio_en_moneda'])
        data['empresa'] = int(data['empresa'])

        # Convertir categorías a una lista de diccionarios
        categorias_raw = data.pop('categorias', '').split(',')
        data['categorias'] = [{'nombre': cat_name} for cat_name in categorias_raw]

        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "producto creado!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


