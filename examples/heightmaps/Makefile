# super lazy io publisher

all: io

io: index.io.js index.io.html

# https://stackoverflow.com/questions/18083421/how-do-i-run-perl-command-from-a-makefile
# for perl in makefile, use $$ not $
token := $(shell cat ../geo-viewer/src/envs-ignore/env-dev.js | perl -ne 'print $$1 if /tokenMapbox: '\''(.*)'\''/s')

# https://github.com/babel/babel/issues/6758#issuecomment-357443945
index.io.js: index.js
	@echo token: $(token)
	cat index.js | sed -e "s/\*\*\*\*\*\*\*\*/$(token)/g" | npx babel --presets env | uglifyjs -c drop_console=true > index.io.js

# https://github.com/kangax/html-minifier#usage
index.io.html: index.html
	cat index.html | sed -e 's/index.js/index.io.js/g' | html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css true --minify-js true > index.io.html

clean:
	rm -f *.io.{js,html}
