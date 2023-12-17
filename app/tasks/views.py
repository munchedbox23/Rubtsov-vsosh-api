from django.shortcuts import render

from tasks.models import Task

from comments.models import Comment
from comments.serializers import CommentSerializer

from tasks.serializers import TaskSerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework.response import Response

from rest_framework import generics, viewsets

from rest_framework.pagination import PageNumberPagination

class TaskApiList(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    # permission_classes = [IsAuthenticated]

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    # permission_classes = [IsAdminUser]
    
    def get_queryset(self):
        queryset = Task.objects.all()
        pk = self.kwargs.get("pk")
        if pk:
            queryset = queryset.filter(pk=pk)
        return queryset 
    
    def destroy(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(f"Task with ID {pk} deleted successfully", status=200)
    


class TaskCommentApiList(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        task_id = self.kwargs.get('pk')
        return Comment.objects.filter(task_id=task_id)
