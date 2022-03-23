from django.contrib import admin

# Register your models here.
from .models import MedicalContactInformation, MedicalDirections, Slogan, PatientStatistics, Doctors, DoctorsDescription, QualificationsDoctor, InterestsDoctor

admin.site.register(MedicalContactInformation)
admin.site.register(MedicalDirections)
admin.site.register(Slogan)
admin.site.register(PatientStatistics)
admin.site.register(Doctors)
admin.site.register(DoctorsDescription)
admin.site.register(QualificationsDoctor)
admin.site.register(InterestsDoctor)