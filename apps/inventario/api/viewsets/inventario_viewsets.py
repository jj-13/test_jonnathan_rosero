from rest_framework import viewsets
from rest_framework import permissions
from apps.inventario.api.serializers.inventario_serializers import InventarioSerializer


class InventarioViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = InventarioSerializer
    queryset = InventarioSerializer.Meta.model.objects.all()
