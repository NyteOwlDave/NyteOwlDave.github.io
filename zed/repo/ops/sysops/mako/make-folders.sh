#!/bin/bash

tr=$(which tr);

#[ mid ]
#( mid [string] [start] [end] )
mid() {
    local A="$1";
    local B="$2";
    local C="$3";
    [[ -n "$C" ]] && echo "${A:B:C}" || echo "${A:B}";
}

#[ properCase ]
#( properCase [string] )
properCase() {
    local A="$1";
    local HEAD=$(mid "$A" 0 1);
    local TAIL=$(mid "$A" 1);
    HEAD=$(echo "${HEAD}" | $tr [:lower:] [:upper:]);
    TAIL=$(echo "${TAIL}" | $tr [:upper:] [:lower:]);
    echo "${HEAD}${TAIL}";
}

#[ createFolder ]
#( createFolder [string] )
createFolder() {
    local A=$(properCase "$@");
    mkdir "$A" 2>&1;
}

#[ createLoop ]
#( createLoop < stdin )
createLoop() {
   while read a; do
       createFolder "$a" >> make.log;
   done;
}

# List folders to create loop
echo "" > make.log;
cat folder.list | createLoop;

