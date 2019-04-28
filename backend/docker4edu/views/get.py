from django.http import HttpResponse, JsonResponse

def get(request):
    allowedMethods = ['get', 'options']
    if request.OPTIONS:
        response = HttpResponse()
        response['allow'] = ','.join([allowedMethods])
        return response
    
    if request.GET:
        component = request.GET.get('component', 'all')
        componentData = retrieveComponent(component)
        return componentData

def retrieveComponent(component):
    return dict()