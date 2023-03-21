from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=40)
    age = models.IntegerField(null=True)
    phone = models.CharField(max_length=10)
    access_level = models.CharField(max_length=10)
    
    def __str__(self):
        return self.name
