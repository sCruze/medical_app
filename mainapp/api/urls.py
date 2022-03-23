from django.urls import path

from rest_framework import routers
from .views import MedicalContactInformationViewSet, MedicalDirectionsViewSet, SloganViewSet, PatientStatisticsViewSet, DoctorsViewSet, DoctorsDescriptionViewSet, QualificationsDoctorViewSet, InterestsDoctorViewSet

router = routers.SimpleRouter()

router.register('medical-information', MedicalContactInformationViewSet, basename='medical-information')
router.register('medical-directions', MedicalDirectionsViewSet, basename='medical-directions')
router.register('slogan', SloganViewSet, basename='slogan')
router.register('statistics', PatientStatisticsViewSet, basename='statistics')
router.register('doctors-name', DoctorsViewSet, basename='doctors-name')
router.register('doctors-description', DoctorsDescriptionViewSet, basename='doctors-description')
router.register('doctors-qualifications', QualificationsDoctorViewSet, basename='doctors-qualifications')
router.register('doctors-interests', InterestsDoctorViewSet, basename='doctors-interests')

urlpatterns = []
urlpatterns += router.urls
