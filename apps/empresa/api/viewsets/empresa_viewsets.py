from rest_framework import viewsets
from rest_framework import permissions
from apps.empresa.api.serializers.empresa_serializers import EmpresaSerializer


class EmpresaViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    serializer_class = EmpresaSerializer
    queryset = EmpresaSerializer.Meta.model.objects.all()
