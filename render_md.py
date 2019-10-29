import mistune
import os
import sys
from pathlib import Path

renderer = mistune.Renderer(escape=False, hard_wrap=False)
# use this renderer instance
markdown = mistune.Markdown(renderer=renderer)

cur_path = Path(os.path.abspath(os.path.dirname(sys.argv[0])))
print(cur_path)
md_file = Path(os.path.abspath((sys.argv[1])))
print(md_file)
md = markdown(open(md_file, 'r').read())
print(md)
