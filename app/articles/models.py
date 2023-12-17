from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField(null=True, blank=True)
    create = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title