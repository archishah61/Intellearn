# Generated by Django 5.0.7 on 2024-08-31 13:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_course_conclusion_course_core_concept_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course_fundamentals',
            name='course',
        ),
        migrations.RemoveField(
            model_name='course_key_features',
            name='course',
        ),
        migrations.DeleteModel(
            name='Course_conclusion',
        ),
        migrations.DeleteModel(
            name='Course_Fundamentals',
        ),
        migrations.DeleteModel(
            name='Course_key_features',
        ),
    ]