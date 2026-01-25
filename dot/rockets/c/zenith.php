<?php

function newline() {
  echo "\n";
}

function quoteEx( $arg, $suffix ) {
  echo "\"" . $arg . "\"" . $suffix;
  newline();
}

function quoteComma( $arg ) {
   quoteEx( $arg, "," );
}

function quote( $arg ) {
  echo "\"" . $arg . "\"";
  newline();
}

function quoteComment( $arg ) {
  echo "\"# " . $arg . "\"" . ",";
  newline();
}

function openTag( $tag ) {
  echo "<" . $tag . ">";
}

function closeTag( $tag ) {
  echo "</" . $tag . ">";  
}

function openArray() {
  echo "[";
}

function closeArray() {
  echo "]";
}

function emit( $s ) {
  echo "$s";
}

openTag( "pre" );
newline();
openArray();
newline();

quoteComment( "Zenith 2024-JUL-14" );

$dir = getcwd();
quoteComment( $dir );

// Open a directory, and read its contents
if ( is_dir( $dir ) ) {
  if ( $dh = opendir( $dir ) ) {
    $cache = "";
    while ( ( $file = readdir( $dh ) ) !== false ) {
      if ( substr( $file, 0, 1 ) == "." ) {
        continue;
      }
      if ( strlen( $cache ) > 0 ) {
        quoteComma( $cache );
        $cache = $file;
        continue;         
      }
      $cache = $file;
    }
    if ( strlen( $cache ) > 0 ) {
      quote( $cache );
    }
    closedir( $dh );
  }
}

closeArray();
newline();
closeTag( "pre" );
newline();

?>
