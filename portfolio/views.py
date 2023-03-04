from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'index.html'

class AboutView(TemplateView):
    template_name = 'about.html'

class WorksView(TemplateView):
    template_name = 'works.html'

class SkillsView(TemplateView):
    template_name = 'skills.html'