from articles.models import Article
from articles.serializers import ArticleSerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework.response import Response

from rest_framework import generics, viewsets

from rest_framework.pagination import PageNumberPagination

class ArticleApiList(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class AritcleViewSet(viewsets.ModelViewSet):

    serializer_class = ArticleSerializer
    # permission_classes = [IsAdminUser]

    def destroy(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(f"Article with ID {pk} deleted successfully", status=200)
    
    def get_queryset(self):
        queryset = Article.objects.all()
        pk = self.kwargs.get("pk")
        if pk:
            queryset = queryset.filter(pk=pk)
        return queryset 
    




    