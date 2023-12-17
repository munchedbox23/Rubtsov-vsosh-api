from rest_framework import serializers

from comments.models import Comment

class CommentSerializer(serializers.ModelSerializer):

    username = serializers.SerializerMethodField()

    class Meta:
        model = Comment 
        fields = ["id", "user", "task", "content", "create", "username"]

    def get_username(self, obj):
        return obj.user.username  