from django.db import models

# Create your models here.

class User(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField(max_length=50,unique=True)
    Phone_no = models.IntegerField()
    password=models.CharField(max_length=50)
    reg_date = models.DateField( auto_now_add=True)

    def __str__(self) :
        return f"Name : {self.fname + self.lname}"
    
class Course(models.Model):
    c_id = models.CharField(max_length=100)
    Course_name = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.CharField(max_length=100)
    main_image = models.CharField(max_length=100)
    lessons = models.CharField(max_length=100)
    instructor_name = models.CharField(max_length=100)
    Categories = models.CharField(max_length=100)
    
    def __str__(self) :
        return self.Course_name
    
class IntroContent(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='intro_contents')
    title = models.CharField(max_length=255)
    duration = models.CharField(max_length=50)
    preview_available = models.BooleanField(default=False)
    url = models.TextField(max_length=255)

    def __str__(self):
        return self.title

class CourseConclusion(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='conclusions')
    title = models.CharField(max_length=255)
    duration = models.CharField(max_length=50)
    preview_available = models.BooleanField(default=False)
    url = models.TextField(max_length=255)

    def __str__(self):
        return self.title

class CourseCoreConcept(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='core_concepts')
    title = models.CharField(max_length=255)
    duration = models.CharField(max_length=50)
    preview_available = models.BooleanField(default=False)
    url = models.TextField(max_length=255)

    def __str__(self):
        return self.title

class CourseFundamentals(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='fundamentals')
    title = models.CharField(max_length=255)
    duration = models.CharField(max_length=50)
    preview_available = models.BooleanField(default=False)
    url = models.TextField(max_length=255)

    def __str__(self):
        return self.title
    
from django.db import models

class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='assignments')
    title = models.CharField(max_length=255)
    marks = models.IntegerField()
    file = models.FileField(upload_to='assignments/')  # This will store files in the 'assignments/' directory

    def __str__(self):
        return self.title


class CourseKeyFeatures(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='key_features')
    title = models.CharField(max_length=255)
    duration = models.CharField(max_length=50)
    preview_available = models.BooleanField(default=False)
    url = models.TextField(max_length=255)

    def __str__(self):
        return self.title     

class EnrolledCourse(models.Model):
    ENROLLMENT_STATUS_CHOICES = [
        ('enrolled', 'Enrolled'),
        ('active', 'Active'),
        ('complete', 'Complete'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='enrolled_courses')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrolled_users')
    enrolled_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=ENROLLMENT_STATUS_CHOICES, default='enrolled')
    
class Quiz(models.Model):
    course = models.ForeignKey(Course, related_name='quiz', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    
    def __str__(self):
        return self.title

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, related_name='questions', on_delete=models.CASCADE)
    question_text = models.CharField(max_length=255)
    
    def __str__(self) :
        return self.question_text

class Choice(models.Model):
    question = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False) 
    
    def __str__(self) :
        return self.choice_text