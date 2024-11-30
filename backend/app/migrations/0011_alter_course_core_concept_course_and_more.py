# Generated by Django 5.0.7 on 2024-08-31 13:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_remove_course_fundamentals_course_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course_core_concept',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='core_concept', to='app.course'),
        ),
        migrations.AlterField(
            model_name='intro_course_video',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='intro', to='app.course'),
        ),
    ]
