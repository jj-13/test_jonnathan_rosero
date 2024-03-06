from rest_framework import serializers
from apps.clientes.models import Cliente
from apps.user.api.serializers.user_serializers import UserSerializer


class ClienteSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Cliente
        fields = ('__all__')
        #exclude = ('is_active',)

