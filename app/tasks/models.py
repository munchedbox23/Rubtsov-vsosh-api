from django.db import models
from django.contrib.auth.models import User



class Task(models.Model):
    title = models.CharField(max_length=256)
    content = models.FileField(upload_to='tasks/')
    username = models.CharField(max_length=256, null=True, blank=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, null=True, blank=True)
   
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.username = self.user.username  # заполняем поле username именем пользователя при сохранении
        super().save(*args, **kwargs) 
