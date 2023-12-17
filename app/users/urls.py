from django.urls import path
from users.views import *

app_name = "users"

urlpatterns = [
    path('', UserApiList.as_view()), # получение списка задач для жюри 
    path('<int:pk>/', UserViewSet.as_view({'get': 'retrieve'})),
    path('register/', UserViewSet.as_view({'post': 'create'})),
    path('<int:pk>/update/', UserViewSet.as_view({'put': 'update'})),
    path('<int:pk>/delete/', UserViewSet.as_view({'delete': 'destroy'})),
]
