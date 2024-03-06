from rest_framework.routers import DefaultRouter
from apps.inventario.api.viewsets.inventario_viewsets import InventarioViewSet

router = DefaultRouter()

router.register(r'inventario', InventarioViewSet, basename='inventario')

urlpatterns = router.urls
