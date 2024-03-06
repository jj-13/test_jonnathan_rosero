from rest_framework.routers import DefaultRouter
from apps.empresa.api.viewsets.empresa_viewsets import EmpresaViewSet

router = DefaultRouter()

router.register(r'empresas', EmpresaViewSet, basename='empresas')

urlpatterns = router.urls

