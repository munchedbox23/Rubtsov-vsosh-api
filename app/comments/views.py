from comments.models import Comment 
from comments.serializers import CommentSerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework.response import Response

from rest_framework import generics, viewsets

from rest_framework.pagination import PageNumberPagination

class CommentApiList(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentViewSet(viewsets.ModelViewSet):
    
    serializer_class = CommentSerializer
    # permission_classes = [IsAdminUser]

    def destroy(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(f"Comment with ID {pk} deleted successfully", status=200)
    
    def get_queryset(self):
        queryset = Comment.objects.all()
        pk = self.kwargs.get("pk")
        if pk:
            queryset = queryset.filter(pk=pk)
        return queryset 
    




    