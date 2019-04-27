from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate, login

@csrf_exempt
def page(request):
	if request.POST:
		name     = request.POST['name']
		password = request.POST['password']

		try:
			# Check if user exists
			user = authenticate(request, username=name, password=password)
			if user is not None:
				login(request, user)
			else:
				return JsonResponse({"msg":"in try username or password wrong!", "login":False})
		except:
			return JsonResponse({"msg":"username or password wrong!", "login":False})
		
		msg = "Hi {} Loggedin successfully!".format(request.user)
		return JsonResponse({"msg":msg,  "login":True})
	else:
		return JsonResponse({"msg":"username and password required!", "login":False})