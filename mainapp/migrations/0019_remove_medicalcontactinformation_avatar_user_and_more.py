# Generated by Django 4.0.2 on 2022-03-23 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0018_alter_doctorsdescription_id_doctor_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='medicalcontactinformation',
            name='avatar_user',
        ),
        migrations.RemoveField(
            model_name='medicalcontactinformation',
            name='img_user',
        ),
        migrations.AddField(
            model_name='doctorsdescription',
            name='avatar_user',
            field=models.ImageField(default='', upload_to='user_information/avatar/<django.db.models.fields.related.ForeignKey>', verbose_name='Аватарка'),
        ),
        migrations.AddField(
            model_name='doctorsdescription',
            name='img_user',
            field=models.ImageField(default='', upload_to='user_information/<django.db.models.fields.related.ForeignKey>', verbose_name='Фото'),
        ),
    ]
