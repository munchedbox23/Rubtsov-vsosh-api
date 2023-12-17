from rest_framework import serializers

from articles.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    ''' Вывод списка новостей '''
    class Meta:
        model = Article
        fields = ["id", "title", "description", "create"]