# Generated by Django 4.0.2 on 2022-03-22 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0012_alter_doctorsdescription_qualifications_doctor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorsdescription',
            name='interests_doctor',
            field=models.ManyToManyField(blank=True, related_name='interests', to='mainapp.InterestsDoctor', verbose_name='Профессиональные интересы'),
        ),
    ]
