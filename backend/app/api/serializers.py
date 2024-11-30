from rest_framework.serializers import ModelSerializer
from ..models import ( User, Course, IntroContent, CourseCoreConcept, CourseKeyFeatures,CourseFundamentals, CourseConclusion, EnrolledCourse, Assignment, Quiz,Question,Choice)


class IntroContentSerializer(ModelSerializer):
    class Meta:
        model = IntroContent
        fields = ['id', 'title', 'url', 'duration', 'preview_available']

class ConclusionSerializer(ModelSerializer):
    class Meta:
        model = CourseConclusion
        fields = ['id', 'title', 'url', 'duration', 'preview_available']

class CoreConceptSerializer(ModelSerializer):
    class Meta:
        model = CourseCoreConcept
        fields = ['id', 'title', 'url', 'duration', 'preview_available']

class FundamentalsSerializer(ModelSerializer):
    class Meta:
        model = CourseFundamentals
        fields = ['id', 'title', 'url', 'duration', 'preview_available']

class KeyFeaturesSerializer(ModelSerializer):
    class Meta:
        model = CourseKeyFeatures
        fields = ['id', 'title', 'url', 'duration', 'preview_available']
        
class EnrolledCoursesSerializer(ModelSerializer):
    class Meta:
        model = EnrolledCourse
        fields = '__all__'
        
class AssignmentSerializer(ModelSerializer):
    class Meta:
        model = Assignment
        fields = "__all__"
        
class UserSerializer(ModelSerializer):
    enrolled_courses = EnrolledCoursesSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = '__all__'
        
class ChoiceSerializer(ModelSerializer):
    class Meta:
        model = Choice
        fields = ['id', 'choice_text', 'is_correct']

class QuestionSerializer(ModelSerializer):
    choices = ChoiceSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'question_text', 'choices']

class QuizSerializer(ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Quiz
        fields = ['id', 'title', 'description', 'questions']
        
class CourseSerializer(ModelSerializer):
    conclusions = ConclusionSerializer(many=True, read_only=True)
    key_features = KeyFeaturesSerializer(many=True, read_only=True)
    fundamentals = FundamentalsSerializer(many=True, read_only=True)
    intro_contents = IntroContentSerializer(many=True, read_only=True)  # Ensure this matches the `related_name`
    core_concepts = CoreConceptSerializer(many=True, read_only=True)
    assignments = AssignmentSerializer(many = True, read_only = True)
    quiz = QuizSerializer(many = True, read_only = True)
    
    class Meta:
        model = Course
        fields = '__all__'