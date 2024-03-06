from rest_framework.routers import DefaultRouter
from apps.ordenes.api.viewsets.ordenes_viewsets import OrdenViewSet, OrdenProductoViewSet

router = DefaultRouter()

router.register(r'oredenes', OrdenViewSet, basename='oredenes')
router.register(r'oredenes/productos', OrdenViewSet, basename='oredenes/productos')

urlpatterns = router.urls
