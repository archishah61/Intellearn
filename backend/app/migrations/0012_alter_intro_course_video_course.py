# Generated by Django 5.0.7 on 2024-08-31 13:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_alter_course_core_concept_course_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='intro_course_video',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='intro_video', to='app.course'),
        ),
    ]
