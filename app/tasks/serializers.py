from rest_framework import serializers

from tasks.models import Task


class TaskSerializer(serializers.ModelSerializer):
    ''' Вывод списка задач для жюри'''

    username = serializers.SerializerMethodField()
    
    class Meta:
        model = Task 
        fields = ["id", "title", "content", "username", "user"]

    def get_username(self, obj):
        return obj.user.username  
    
