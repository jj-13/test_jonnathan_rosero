from rest_framework.routers import DefaultRouter
from apps.producto.api.viewsets.producto_viewsets import CategoriaViewSet, ProductoViewSet

router = DefaultRouter()

router.register(r'categorias', CategoriaViewSet, basename='categorias')
router.register(r'productos', ProductoViewSet, basename='productos')

urlpatterns = router.urls