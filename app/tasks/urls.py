from django.urls import path 
from tasks.views import * 

app_name = "tasks"

urlpatterns = [
    path('', TaskApiList.as_view()), # получение списка задач для жюри 
    path('<int:pk>/', TaskViewSet.as_view({'get': 'retrieve'})),
    path('create/', TaskViewSet.as_view({'post': 'create'})),
    path('<int:pk>/update/', TaskViewSet.as_view({'put': 'update'})),
    path('<int:pk>/delete/', TaskViewSet.as_view({'delete': 'destroy'})),

    path('task_comments/<int:pk>/', TaskCommentApiList.as_view()), # получение комментов к задаче 

     # получение списка открытых задач 
]
