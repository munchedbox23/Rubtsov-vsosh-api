from django.db import models
from django.contrib.auth.models import User
from tasks.models import Task

class Comment(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, null=True, blank=True)
    task = models.ForeignKey(to=Task, on_delete=models.CASCADE, null=True, blank=True)
    username = models.CharField(max_length=256, null=True, blank=True)
    content = models.TextField()
    create = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        self.username = self.user.username  # заполняем поле username именем пользователя при сохранении
        super().save(*args, **kwargs) 