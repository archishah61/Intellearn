# Generated by Django 5.0.7 on 2024-08-31 13:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_video'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course_conclusion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField()),
                ('duration', models.CharField(max_length=10)),
                ('preview_available', models.BooleanField(default=False)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='conclusion', to='app.course')),
            ],
        ),
        migrations.CreateModel(
            name='Course_core_concept',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField()),
                ('duration', models.CharField(max_length=10)),
                ('preview_available', models.BooleanField(default=False)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Core_concept', to='app.course')),
            ],
        ),
        migrations.CreateModel(
            name='Course_Fundamentals',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField()),
                ('duration', models.CharField(max_length=10)),
                ('preview_available', models.BooleanField(default=False)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fundamental', to='app.course')),
            ],
        ),
        migrations.CreateModel(
            name='Course_key_features',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField()),
                ('duration', models.CharField(max_length=10)),
                ('preview_available', models.BooleanField(default=False)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='key_features', to='app.course')),
            ],
        ),
        migrations.CreateModel(
            name='Intro_course_Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField()),
                ('duration', models.CharField(max_length=10)),
                ('preview_available', models.BooleanField(default=False)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Intro', to='app.course')),
            ],
        ),
        migrations.DeleteModel(
            name='Video',
        ),
    ]
