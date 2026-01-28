
/* 
     Filename : legends-helper.js
     Purpose  : Compose Core Document as JSON
     Updated  : 2026-JAN-27
     Agent    : Fire Fox
     Client   : dave-omega
     Server   : dave-omega
     Address  : http://dave-omega/Q/Editor/q-editor.html
*/

MANIFEST_KEY = "legends-manifest.json";

SOURCE_KEY = "legends.cdoc";
SOURCE_ED  = sip; // Standard Input Editor

TARGET_KEY = "legends-helper.js";
TARGET_ED  = code; // Standard Code Editor

// Dunsel Function ( o => o )
// for improved code readability
_$_ =( o )=> ( o );

// Type Casts
int =( o )=> ( parseInt  ( o ) || 0 );
flt =( o )=> ( parseFloat( o ) || 0 );
str =( o )=> ( String( o || "" ).trim() );
arr =( o )=> ( Array.from( o ) );
unq =( o )=> ( new Set( arr( o ) ) );

// JSON abbreviations
jst  =( o )=> JSON.stringify( o, null, 2 );
jso  =( t )=> JSON.parse( t );
jsot =( t )=> jst( jso( t ) );

// Global Object Aliases
con = console;
doc = document;
stg = localStorage;
wnd = window;

// Gadget Ops
elx =( t )=> ( doc.createElement ( t )  );
ebi =( i )=> ( doc.getElementById( i )  );

// Gadget Ops (avoids namespace conflict)
if ( "undefined" === typeof gid ) { gid = ebi; }

// Gadget Ops
gad =( o )=> ( o instanceof HTMLElement );
god =( o )=> ( gad( o ) ? ( o ) : gid( o ) );

// Gadget Ops
one =( q )=> _$_( doc.querySelector   ( q ) );
all =( q )=> arr( doc.querySelectorAll( q ) );

// Write Arbitrary Store Entry
// OP = (n/a)
keepContent = function( key, editor ) {
    stg.setItem( key, editor.value ); 
    return ( `Wrote "${key}" to Store` );
};

// Read Arbitrary Store Entry
// OP = (n/a)
recallContent = function( key, editor ) {
    let v = stg.getItem( key );    
    if ( null === v ) {
       return keepContent( key, editor );
    }
    editor.value = v;
    return ( `Read "${key}" from Store` );
};

// Write Source Editor's Content to Store Entry
// OP =  2  |  Keep Source
keepSource = function() {
    return ( keepContent( SOURCE_KEY, SOURCE_ED ) );
};

// Read Source Editor's Content from Store Entry
// OP =  4  |  Recall Source 
recallSource = function() {
    return ( recallContent( SOURCE_KEY, SOURCE_ED ) );
};

// Write Target Editor's Content to Store Entry
// OP =  3  |  Keep Target
keepTarget = function() {
    return ( keepContent( TARGET_KEY, TARGET_ED ) );
};

// Read Target Editor's Content from Store Entry
// OP =  5  |  Recall Target
recallTarget = function() {
    return ( recallContent( TARGET_KEY, TARGET_ED ) );
};

// Compose Compound Document 
// a.k.a. "Manifest"
// Includes both Source and Target
// OP = (n/a)
composeManifest = function( filename ) {
    let source = {
        key   : SOURCE_KEY ,
        value : SOURCE_ED.value
    };
    let target = {
        key   : TARGET_KEY ,
        value : TARGET_ED.value
    };
    filename = ( filename || MANIFEST_KEY );
    let payload  = { filename , source, target };
    return jst( payload );
};

// Write Manifest to store Entry
// OP =  1  |  Keep Manifest
keepManifest = function() {
    let key, filename = MANIFEST_KEY;
    let value = composeManifest( filename );
    stg.setItem( key = filename, value );
    return ( `Wrote "${key}" to Store` );   
};

// Download Manifest to File System
// OP =  6  |  Download Manifest
downloadManifest = function() {
    let filename = MANIFEST_KEY;
    let value = composeManifest( filename );
    rico( value , filename ); // requires legends.js or rico.js
    return ( `Downloaded "${filename}" to File System` );
};

// Read Store Keys (with cool prefix decal)
// OP =  7  |  Examine Store Keys
examineStoreKeys = function() {
    let cool =( k )=> ( `🔑 ${k}` );
    return ( 
        ( keys() )
        . map ( cool )
        . join( "\n" ) 
    );
};

// Read Arbitrary Store Entry
// OP = (n/a)
examineEntry = function( key ) {
   let value = stg.getItem( key );
   if ( null === value ) {
       return ( `Missing Store Key "${key}"` );       
   }
   return ( jsn );
}

// Read Source Editor's Store Entry
// OP =  9  |  Examine Source
examineSource = function() {
   return examineEntry( SOURCE_KEY );
}

// Read Target Editor's Store Entry
// OP = 10  |  Examine Target
examineTarget = function() {
   return examineEntry( TARGET_KEY );
}

// Read Manifest's Store Entry
// OP =  8  |  Examine Manifest
examineManifest = function() {
   return examineEntry( MANIFEST_KEY );
}

// Write Message to Standard Output Editor
// OP = (n/a)
say = function( s ) {
   write( sop, s = ( s || "OK!" ) );
   return ( s );
};

// Main Operation
// OP = (n/a)
coreDocToJSON = function( cdoc ) {
    _token_ = { rs : "\n" , fs : "|" };
    _out_   = {};
    cdoc = ( cdoc || read( SOURCE_ED ) );
    let lines = ( 
        ( cdoc.split( _token_.rs ) )
        . map( s => s.trim() )
        . filter( s => (!! s ) )
    );
    lines.forEach( s => { 
        let k, p = ( 
            ( s || "" )
            . trim()
            . split( _token_.fs )
            . map( s => s.trim() )
         );
         if ( k = p.shift() ) {
            _out_[ k ] = p.join( _token_.fs );
         }
    } );
    return jst( _out_ );
}

// OP = 99  |  Run Main Operation
examineResult = function() {
    return coreDocToJSON();
};

// Execute Arbitrary Operation
// OP = user defined
enact = function( op ) {
    return (
        ( op ===  1 ) ? ( say( keepManifest()     ) )
      : ( op ===  2 ) ? ( say( keepSource()       ) )
      : ( op ===  3 ) ? ( say( keepTarget()       ) )
      : ( op ===  4 ) ? ( say( recallSource()     ) )
      : ( op ===  5 ) ? ( say( recallTarget()     ) )
      : ( op ===  6 ) ? ( say( downloadManifest() ) )
      : ( op ===  7 ) ? ( say( examineStoreKeys() ) )
      : ( op ===  8 ) ? ( say( examineManifest()  ) )
      : ( op ===  9 ) ? ( say( examineSource()    ) )
      : ( op === 10 ) ? ( say( examineTarget()    ) )
      : ( op === 99 ) ? ( say( examineResult()    ) )
      : ( say( "Ready for Action!" ) )
    );
};

// Operations Helper
ops = ( `

     0  |  No Operation
     1  |  Keep Manifest
     2  |  Keep Source
     3  |  Keep Target
     4  |  Recall Source 
     5  |  Recall Target
     6  |  Download Manifest
     7  |  Examine Store Keys
     8  |  Examine Manifest
     9  |  Examine Source
    10  |  Examine Target
    99  |  Run Main Operation

` );

// Examine Operations Core Document
// OP = (n/a)
ops.examine = function() {
    return ( say( ops ) );
};

// Execute Op
enact( 99 );

