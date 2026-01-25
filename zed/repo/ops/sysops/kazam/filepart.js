
const cls = () => console.clear()
const info = (...args) => console.log(...args);
const warn = (...args) => console.warn(...args);
const oops = (...args) => console.error(...args);

function group( title, content ) {
  console.group( title );
  console.log( content );
  console.groupEnd();
}

function list( title, table ) {
  console.group( title );
  console.table( content );
  console.groupEnd();
}

function nodeProcess() {
  group( process );
}

function fork( cmd, args ) {
  // Start new forked process here...
}

function visit( url ) {
  let cmd = "google-chrome";
  let args = url;
  fork( cmd, args );
}

function grok( key ) {
  if ( "string" === typeof key ) {
    key = key.trim();
  }
  if ( key.length ) {
    return visit( "https://x.com/i/grok" );  
  } else {
    return visit( "https://x.com/i/grok" );  
  } 
}

