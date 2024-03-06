from django.conf import settings
from django.db import models

User = settings.AUTH_USER_MODEL


class Cliente(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.email
