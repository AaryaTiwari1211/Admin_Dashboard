from django.shortcuts import render
from .serializers import TeamSerializer
from .models import Team
from rest_framework import viewsets

class TeamView(viewsets.ModelViewSet):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()

