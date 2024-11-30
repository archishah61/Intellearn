from rest_framework.viewsets import ModelViewSet
from ..models import User , Course,EnrolledCourse
from .serializers import  UserSerializer , CourseSerializer,EnrolledCoursesSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class CourseListView(ModelViewSet):
    queryset = Course.objects.all()         
    serializer_class = CourseSerializer

class EnrolledViewSet(ModelViewSet):
    queryset = EnrolledCourse.objects.all()
    serializer_class = EnrolledCoursesSerializer

