# A template makefile that works for static websites.
# Need to export as ENV var
export TEMPLATE_DIR = templates
PTML_DIR = html_src
UTILS_DIR = utils

INCS = $(TEMPLATE_DIR)/head.txt $(TEMPLATE_DIR)/logo.txt $(TEMPLATE_DIR)/menu.txt

HTMLFILES = $(shell ls $(PTML_DIR)/*.ptml | sed -e 's/.ptml/.html/' | sed -e 's/html_src\///')

FORCE:

%.html: $(PTML_DIR)/%.ptml $(INCS)
	python3 $(UTILS_DIR)/html_checker.py $< 
	$(UTILS_DIR)/html_include.awk <$< >$@
	git add $@

render:
	python3 $(PTML_DIR)/render_tpl_with_md.py

local: render $(HTMLFILES)

prod: $(INCS) $(HTMLFILES)
	-git commit -a 
	git pull origin master
	git push origin master

# real tests need to be written!
tests: FORCE
	ls

submods:
	git submodule foreach 'git pull origin master'
	
nocrud:
	rm *~
	rm .*swp
	rm $(PTML_DIR)/*~
	rm $(PTML_DIR)/.*swp

clean:
	touch $(PTML_DIR)/*.ptml; make local
