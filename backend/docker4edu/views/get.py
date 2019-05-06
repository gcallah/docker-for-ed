import os, json
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound

def component(request):
    allowedMethods = ['get', 'options']
    # if request.OPTIONS:
    #     response = HttpResponse()
    #     response['allow'] = ','.join([allowedMethods])
    #     return response
    print(request.GET)
    if request.GET:
        component = request.GET.get('component', 'all')
        component = component.lower()
        componentData = retrieveComponent(component)
        return componentData

def retrieveComponent(requestedComponent):
    componentsLocation = "{}/docker4edu/data".format(os.getcwd())
    components = [componentFile.split('.json')[0] for componentFile in os.listdir(componentsLocation) ]
    
    if requestedComponent == "all":
        namesSortedByLength = sorted(components)
        return JsonResponse({"result": namesSortedByLength})
    
    elif requestedComponent in components:
        
        with open("{}/{}.json".format(componentsLocation, requestedComponent)) as data:
            component = json.load(data)
        
        return JsonResponse({"result": component})

    else:
        return HttpResponseNotFound('Component Not Found')

    return dict()