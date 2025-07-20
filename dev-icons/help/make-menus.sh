#!/bin/bash

blast() {
    echo "$@";
    cp "./menu.md" "$@";
}

blastEach() {
    local a;
    while read a; do 
        blast "./${a}/menu.md";
    done
}

echo

blastEach << _X_ 
cls
again
han
report
destroy
gid
ella
selma
selmax
thelma
louise
artie
bart
bernie
barney
wanda
wendy
ethel
ester
clark
bullfrog
rico
thoris
keith
weezie
wilbur
rollcall
crusoe
acronyms
acronyms/D
acronyms/V
acronyms/H
acronyms/B
state
state/agent
state/isReText
state/isChrome
_X_

