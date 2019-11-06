# A template makefile that works for static websites.
# Need to export as ENV var
export TEMPLATE_DIR = templates
export MARKDOWN_DIR = markdown_files
PTML_DIR = html_src
UTILS_DIR = utils
BACK_DIR = backend
PYLINT = flake8
PYLINTFLAGS = 
PYTHONFILES = $(shell ls $(BACK_DIR)/*.py)
INCS = $(TEMPLATE_DIR)/head.txt $(TEMPLATE_DIR)/logo.txt $(TEMPLATE_DIR)/menu.txt
CONTCMD = sh build_container.sh

HTMLFILES = $(shell ls $(PTML_DIR)/*.ptml | sed -e 's/.ptml/.html/' | sed -e 's/html_src\///')

FORCE:

%.html: $(PTML_DIR)/%.ptml $(INCS)
	python3 $(UTILS_DIR)/html_checker.py $<
	$(UTILS_DIR)/render_md.awk <$< | $(UTILS_DIR)/html_include.awk >$@
	git add $@

local: $(HTMLFILES)

prod: $(INCS) $(HTMLFILES)
	-git commit -a 
	git pull origin master
	git push origin master

# real tests need to be written!
tests: FORCE
	#$(CONTCMD) [docker hub name] [local name]
	$(CONTCMD) cpluscplus cpp
	$(CONTCMD) pl pl
	# $(CONTCMD) java java - Doesn't work

lint: $(patsubst %.py,%.pylint,$(PYTHONFILES))

%.pylint:
	$(PYLINT) $(PYLINTFLAGS) $*.py

submods:
	git submodule foreach 'git pull origin master'
	
nocrud:
	rm *~
	rm .*swp
	rm $(PTML_DIR)/*~
	rm $(PTML_DIR)/.*swp

clean:
	touch $(PTML_DIR)/*.ptml; make local
