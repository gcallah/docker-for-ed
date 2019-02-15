# A template makefile that works for static websites.
# Need to export as ENV var
export TEMPLATE_DIR = templates
PTML_DIR = html_src
UTILS_DIR = utils

INCS = $(TEMPLATE_DIR)/head.txt $(TEMPLATE_DIR)/logo.txt $(TEMPLATE_DIR)/menu.txt

HTMLFILES = $(shell ls $(PTML_DIR)/*.ptml | sed -e 's/.ptml/.html/' | sed -e 's/html_src\///')

%.html: $(PTML_DIR)/%.ptml $(INCS)
	python3 $(UTILS_DIR)/html_checker.py $< 
	$(UTILS_DIR)/html_include.awk <$< >$@
	git add $@

local: $(HTMLFILES)

prod: $(INCS) $(HTMLFILES)
	-git commit -a 
	git pull origin master
	git push origin master

submods:
	git submodule foreach 'git pull origin master'
	
nocrud:
	rm *~
	rm .*swp
	rm $(PTML_DIR)/*~
	rm $(PTML_DIR)/.*swp

clean:
	touch $(PTML_DIR)/*.ptml; make local

build-image:
	docker build -t cplusplus docker/

build-docker-image:
	docker build -t pyoey/cplusplus docker/

run-interactive:
	docker run --rm -it --name cppcontainer cplusplus bash

run-sample:
	docker run --rm cplusplus

copy-to-container:
	docker cp HW cppcontainer:/home/HW

copy-from-container:
	docker cp cppcontainer:/home/HW .

save-hw:
	docker cp cppcontainer:/home/HW .