deploy:
	cd docker_for_edu_site; \
	npm run build; \
	cp favicon.ico build; \
	npm run deploy; \
	cd ..