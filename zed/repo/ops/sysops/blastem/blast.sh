#!/bin/bash
# [Explore](./)

SRC="new.png";
TGT="";
BEM="${BLAST}";

[[ -z "$1" ]] || { SRC="$1"; }

function init() {
echo
echo "# Blast-Em! ";
echo
echo "> $(hostname)";
echo
echo "> $(pwd)";
echo
echo "> $(date)";
echo
echo "# Source";
echo
echo "> ${SRC}";
echo
echo "# Target";
echo
}

function blast() {  
    [[ -d "$1" ]] || return;
    TGT="$1";
    [[ -z "${BEM}" ]] && {   \
        echo "> [ ] ${TGT}";  \
    } || {  \
        cp "${SRC}" "${TGT}/${SRC}";
        echo "> [x] ${TGT}"; \
    }
}

function blastAll() {  
   local a;
   while read a; do
     blast "$a";
   done;
}

function main() {  
  init;
  ls | blastAll;
  echo;
}

main;

