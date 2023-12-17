from django.contrib.auth.models import User

from users.serializers import UserSerializer

from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework.response import Response

from rest_framework import generics, viewsets


class UserApiList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAdminUser]

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    # permission_classes = [IsAdminUser]
    
    def get_queryset(self):
        queryset = User.objects.all()
        pk = self.kwargs.get("pk")
        if pk:
            queryset = queryset.filter(pk=pk)
        return queryset 
    
    def destroy(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(f"User with ID {pk} deleted successfully", status=200)
    