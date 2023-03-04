from django.urls import path
from .views import IndexView, AboutView, WorksView, SkillsView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('about', AboutView.as_view(), name='about'),
    path('works', WorksView.as_view(), name='works'),
    path('skills', SkillsView.as_view(), name='skills'),
]