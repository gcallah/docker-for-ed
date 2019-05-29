from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import logout

@csrf_exempt
def page(request):
	logout(request)
	return JsonResponse({"msg":"Logged out successfully!", "logout":True})