from django.db import models
from django.core.validators import FileExtensionValidator


# Managers
# Контактная информация
class MedicalContactInformationManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()

    # def all(self):
    #     return self.get_queryset().filter(in_archive=False)


# Медицинские направления
class MedicalDirectionsManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()


# Слоганы
class SlogansManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()


# Статистика пациентов
class PatientStatisticsManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()


class DoctorsManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()


# Информация о врачах
class DoctorsDescriptionManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()


class QualificationsDoctorManager(models.Manager):

    def get_queryset(self):
        return super().get_queryset()


class InterestsDoctorManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset()


# Create your models here.
class MedicalContactInformation(models.Model):
    full_name = models.CharField(max_length=50, verbose_name='ФИО')
    phone = models.CharField(max_length=30, verbose_name='Номер телефона')
    email = models.CharField(max_length=255, verbose_name='Email')
    location = models.CharField(max_length=255, verbose_name='Местоположение клиники')

    objects = MedicalContactInformationManager()

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Контактная информация"
        verbose_name_plural = "Контактная информация"


class MedicalDirections(models.Model):
    direction = models.CharField(max_length=60, verbose_name='Медицинское направление')
    objects = MedicalDirectionsManager()

    def __str__(self):
        return self.direction

    class Meta:
        verbose_name = "Медицинское направление"
        verbose_name_plural = "Медицинские направления"


class Slogan(models.Model):
    slogan_header = models.CharField(max_length=255, verbose_name='Заголовок слогана')
    slogan_description = models.CharField(max_length=255, verbose_name='Описание слогана')
    icon = models.FileField(upload_to='slang/', validators=[FileExtensionValidator(['svg'])], verbose_name='Иконка', null = True)

    objects = SlogansManager()

    def __str__(self):
        return self.slogan_header

    class Meta:
        verbose_name = 'Слоган'
        verbose_name_plural = 'Слоганы'


class PatientStatistics(models.Model):
    patients_counter = models.CharField(max_length=255, verbose_name='Общее количество пациентов')
    employees_counter = models.CharField(max_length=255, verbose_name='Количество сотрудников')
    chambers_counter = models.CharField(max_length=255, verbose_name='Количество палат')
    clinics_counter = models.CharField(max_length=255, verbose_name='Количество клиниик')

    objects = PatientStatisticsManager()

    def __str__(self):
        return 'Статистика'

    class Meta:
        verbose_name = 'Статистика'
        verbose_name_plural = 'Статистика'


class Doctors(models.Model):
    name = models.CharField(max_length=255, verbose_name='ФИО врача')

    objects = DoctorsManager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Врач'
        verbose_name_plural = 'Врачи'


class DoctorsDescription(models.Model):
    id_doctor = models.ForeignKey(Doctors, on_delete=models.CASCADE, default='', verbose_name='Врач')
    working_position = models.CharField(max_length=255, verbose_name='Рабочая должность', default='')
    specialization = models.CharField(max_length=255, verbose_name='Специализация')
    education = models.CharField(max_length=255, verbose_name='Образование')
    internship = models.CharField(max_length=255, verbose_name='Интернатура')
    work_experience = models.CharField(max_length=255, verbose_name='Стаж работы')
    primary_specialization = models.CharField(max_length=255, verbose_name='Первичная специализация')
    additional_information = models.CharField(max_length=255, verbose_name='Дополнительная информация')
    img_user = models.ImageField(upload_to=f'doctors/{id_doctor}', verbose_name='Фото', default='')
    avatar_user = models.ImageField(upload_to=f'doctors/avatar/{id_doctor}', verbose_name='Аватарка', default='')

    objects = DoctorsDescriptionManager()

    def __str__(self):
        return str(self.id_doctor)

    class Meta:
        verbose_name = 'Описание доктора'
        verbose_name_plural = 'Описание докторов'


class QualificationsDoctor(models.Model):
    id_doctor_description = models.ForeignKey(Doctors, on_delete=models.CASCADE, default='', verbose_name='Врач')
    name = models.CharField(max_length=255, verbose_name='Наименование квалификации')

    objects = QualificationsDoctorManager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Наименование квалификации'
        verbose_name_plural = 'Наименование квалификаций'


class InterestsDoctor(models.Model):
    id_doctor_description = models.ForeignKey(Doctors, on_delete=models.CASCADE, default='', verbose_name='Врач')
    name = models.CharField(max_length=255, verbose_name='Наименование профессионального интереса')

    objects = InterestsDoctorManager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Наименование профессионального интереса'
        verbose_name_plural = 'Наименование профессиональных интересов'




