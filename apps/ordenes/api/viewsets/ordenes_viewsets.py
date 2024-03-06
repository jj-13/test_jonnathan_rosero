from rest_framework import viewsets
from rest_framework import permissions
from apps.ordenes.models import Orden, OrdenProducto
from apps.ordenes.api.serializers.ordenes_serializers import OrdenSerializer, OrdenProductoSerializer


class OrdenProductoViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = OrdenProductoSerializer
    queryset = OrdenProducto.objects.all()


class OrdenViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = OrdenSerializer
    queryset = Orden.objects.all()
