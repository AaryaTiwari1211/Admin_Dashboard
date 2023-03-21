from django.contrib import admin
from .models import Team

class TeamAdmin(admin.ModelAdmin):
    list_display = ("name", "age", "email",'phone','access_level')

admin.site.register(Team, TeamAdmin)
