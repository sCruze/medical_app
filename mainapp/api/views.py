from rest_framework import viewsets

from .serializers import MedicalContactInformationSerializers, MedicalDirectionsSerializers, SloganSerializers, PatientStatisticsSerializers, DoctorsSerializers, DoctorsDescriptionSerializers, QualificationsDoctorSerializers, InterestsDoctorSerializers
from ..models import MedicalContactInformation, MedicalDirections, Slogan, PatientStatistics, Doctors, DoctorsDescription, QualificationsDoctor, InterestsDoctor


class MedicalContactInformationViewSet(viewsets.ModelViewSet):

    queryset = MedicalContactInformation.objects.all()
    serializer_class = MedicalContactInformationSerializers


class MedicalDirectionsViewSet(viewsets.ModelViewSet):

    queryset = MedicalDirections.objects.all()
    serializer_class = MedicalDirectionsSerializers


class SloganViewSet(viewsets.ModelViewSet):

    queryset = Slogan.objects.all()
    serializer_class = SloganSerializers


class PatientStatisticsViewSet(viewsets.ModelViewSet):

    queryset = PatientStatistics.objects.all()
    serializer_class = PatientStatisticsSerializers


class DoctorsViewSet(viewsets.ModelViewSet):

    queryset = Doctors.objects.all()
    serializer_class = DoctorsSerializers


class DoctorsDescriptionViewSet(viewsets.ModelViewSet):

    queryset = DoctorsDescription.objects.all()
    serializer_class = DoctorsDescriptionSerializers


class QualificationsDoctorViewSet(viewsets.ModelViewSet):

    queryset = QualificationsDoctor.objects.all()
    serializer_class = QualificationsDoctorSerializers


class InterestsDoctorViewSet(viewsets.ModelViewSet):

    queryset = InterestsDoctor.objects.all()
    serializer_class = InterestsDoctorSerializers


