# Generated by Django 4.0.2 on 2022-03-16 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicalcontactinformation',
            name='img_user',
            field=models.ImageField(upload_to='user_information/<django.db.models.fields.CharField>', verbose_name='Фото'),
        ),
    ]
