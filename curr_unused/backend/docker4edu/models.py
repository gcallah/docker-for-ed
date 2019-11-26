from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user_auth = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, verbose_name="Name")
    email = models.CharField(max_length=100, verbose_name="Email")
    #email_confirmed = models.BooleanField(default=False,verbose_name="Email Confirmed?")
    #activation_key  = models.CharField(max_length=64, blank=True)
    #key_expires     = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.user_auth.username
