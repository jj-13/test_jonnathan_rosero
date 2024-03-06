from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = [
            'username',
            'id',
            'email',
            'name',
            'last_name',
            'is_active',
            'is_admin',
            'is_externo',
        ]
