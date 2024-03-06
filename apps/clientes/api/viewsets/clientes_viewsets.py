from rest_framework import viewsets
from rest_framework import permissions
from apps.clientes.api.serializers.clientes_serializers import ClienteSerializer


class ClientesViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ClienteSerializer
    queryset = ClienteSerializer.Meta.model.objects.all()
