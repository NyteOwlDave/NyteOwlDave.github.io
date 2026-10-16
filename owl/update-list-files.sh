#!/bin/bash
# html
# md
# js
# css
# sh
# php
# ico
# png
# txt
# list

update() {
   ls | grep "$1";
}

# file.list
# folder.list
# explore.list
~/Scripts/dave

update 'html$' > page.list
update 'md$'   > markdown.list

update 'js$'   > module.list
update 'css$'  > theme.list

update 'sh$'   > bash.list
update 'php$'  > php.list

update 'ico$'  > ico.list
update 'png$'  > png.list

update 'txt$'  > text.list

update 'list$' > list.list




