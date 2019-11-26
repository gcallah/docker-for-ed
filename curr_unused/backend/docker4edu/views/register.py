from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.models import User
from docker4edu.models import UserProfile

@csrf_exempt
def page(request):
	if request.POST:		
		name     = request.POST['name']
		password = request.POST['password']
		email    = request.POST['email']
		
		try:
			# Check if user exists
			new_user = User.objects.create_user(username=name, password=password)
			user_profile = UserProfile(user_auth=new_user, name=name, email=email)
			user_profile.save()
		except:
			return JsonResponse({"msg":"user exists! Choose different username.", "registered":False})

		new_user.first_name = name
		new_user.is_active = True
		new_user.email = email
		new_user.save()

		return JsonResponse({"msg":"User added!", "registered":True})
	else:
		return JsonResponse({"msg":"username, email and password required!", "registered":False})