from django.urls import path 
from articles.views import * 

app_name = "articles"

urlpatterns = [
    path('', ArticleApiList.as_view()),
    path('<int:pk>/', AritcleViewSet.as_view({'get': 'retrieve'})),
    path('create/', AritcleViewSet.as_view({'post': 'create'})),    
    path('<int:pk>/update/', AritcleViewSet.as_view({'put': 'update'})),
    path('<int:pk>/delete/', AritcleViewSet.as_view({'delete': 'destroy'})),
]
