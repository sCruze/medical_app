# Generated by Django 4.0.2 on 2022-03-18 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0004_remove_slogan_img_slogan_icon'),
    ]

    operations = [
        migrations.CreateModel(
            name='PatientStatistics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patients_number', models.CharField(max_length=255, verbose_name='Общее количество пациентов')),
                ('employees_number', models.CharField(max_length=255, verbose_name='Количество сотрудников')),
                ('chambers_number', models.CharField(max_length=255, verbose_name='Количество палат')),
                ('clinics_number', models.CharField(max_length=255, verbose_name='Количество клиниик')),
            ],
            options={
                'verbose_name': 'Статистика',
                'verbose_name_plural': 'Статистика',
            },
        ),
    ]
