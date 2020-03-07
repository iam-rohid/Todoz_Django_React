from django.urls import path, include
from rest_framework import routers
from tasks.api.views import TaskViewSet

router = routers.DefaultRouter()
router.register('tasks', TaskViewSet, 'tasks')

urlpatterns = router.urls