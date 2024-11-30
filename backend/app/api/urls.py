from rest_framework.routers import DefaultRouter
from .views import UserViewSet,CourseListView,EnrolledViewSet

user_router=DefaultRouter()
user_router.register(r'users',UserViewSet)
user_router.register(r'Course',CourseListView)
user_router.register(r'EnrolledCourse',EnrolledViewSet)
