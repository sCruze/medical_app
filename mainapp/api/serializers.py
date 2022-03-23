from rest_framework import serializers

from ..models import MedicalContactInformation, MedicalDirections, Slogan, PatientStatistics, Doctors, DoctorsDescription, QualificationsDoctor, InterestsDoctor


class MedicalContactInformationSerializers(serializers.ModelSerializer):

    class Meta:
        model = MedicalContactInformation
        fields = '__all__'


class MedicalDirectionsSerializers(serializers.ModelSerializer):

    class Meta:
        model = MedicalDirections
        fields = '__all__'


class SloganSerializers(serializers.ModelSerializer):

    class Meta:
        model = Slogan
        fields = '__all__'


class PatientStatisticsSerializers(serializers.ModelSerializer):

    class Meta:
        model = PatientStatistics
        fields = '__all__'


class DoctorsSerializers(serializers.ModelSerializer):

    class Meta:
        model = Doctors
        fields = '__all__'


class DoctorsDescriptionSerializers(serializers.ModelSerializer):

    class Meta:
        model = DoctorsDescription
        fields = '__all__'


class QualificationsDoctorSerializers(serializers.ModelSerializer):

    class Meta:
        model = QualificationsDoctor
        fields = '__all__'


class InterestsDoctorSerializers(serializers.ModelSerializer):

    class Meta:
        model = InterestsDoctor
        fields = '__all__'



