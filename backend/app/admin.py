from django.contrib import admin
from .models import User,Course,IntroContent,CourseConclusion,CourseCoreConcept,CourseFundamentals,CourseKeyFeatures,EnrolledCourse,Assignment,Quiz,Question,Choice

# Register your models here.

admin.site.register(User)
admin.site.register(Course)
admin.site.register(IntroContent)
admin.site.register(CourseConclusion)
admin.site.register(CourseCoreConcept)
admin.site.register(CourseFundamentals)
admin.site.register(CourseKeyFeatures)
admin.site.register(EnrolledCourse)
admin.site.register(Assignment)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(Choice)