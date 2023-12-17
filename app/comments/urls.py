from django.urls import path 
from comments.views import * 

app_name = "comments"

urlpatterns = [
    path('', CommentApiList.as_view()),
    path('<int:pk>/', CommentViewSet.as_view({'get': 'retrieve'})),
    path('create/', CommentViewSet.as_view({'post': 'create'})),    
    path('<int:pk>/update/', CommentViewSet.as_view({'put': 'update'})),
    path('<int:pk>/delete/', CommentViewSet.as_view({'delete': 'destroy'})),
]
