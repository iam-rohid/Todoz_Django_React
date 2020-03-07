from rest_framework import viewsets
from tasks.models import Task
from tasks.api.serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()
  serializer_class = TaskSerializer