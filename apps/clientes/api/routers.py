from rest_framework.routers import DefaultRouter
from apps.clientes.api.viewsets.clientes_viewsets import ClientesViewSet

router = DefaultRouter()

router.register(r'clientes', ClientesViewSet, basename='clientes')

urlpatterns = router.urls
