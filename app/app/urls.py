from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from app.yasg import urlpatterns as doc_urls

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/articles/', include('articles.urls')),
    path('api/v1/tasks/', include('tasks.urls')),
    path('api/v1/comments/', include('comments.urls')),
    path('api/v1/users/', include('users.urls')),
    
    path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]

urlpatterns += doc_urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# http://127.0.0.1:8000/swagger/ - docs 