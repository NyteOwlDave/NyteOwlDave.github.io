/* 

<style>
@import url("http://dave-legacy/42/style/module.css");
body {
    text-align : center !important;
}
pre {
    text-align : left !important;
}
div[decal] {
    margin-left   : calc( 50vw - 128px );
    max-width     : 256px;
    min-height    : 256px;
    line-height   : 256px;
    font-size     : 242px;
    border        : 2px solid rgba( 42, 42, 142, 0.342 );
    background    : #223;
    border-radius : 42px;
    box-shadow    : 0px 0px 24px midnightblue;
}
</style>

- [Workspace](./)

# 🎺 Vibe Coder API ~ 2025-APR-16

> bcabaa7f-7712-43a3-b6db-4f33b8940359

<div decal>🎺</div>

<hr>

# TODO

- Add Alora
- Add Jaden

Both of these are in the CoreDoc Cleaner, located in
the `42/app/applet` Workspace.

<pre contenteditable>
+ Vibe Coder API Module
@ 42/api/gems
* vibe-coder.js
& decal  : 🎺
& tikey  : bcabaa7f-7712-43a3-b6db-4f33b8940359
& tidate : 4/16/2025
</pre>    

<hr>

<pre contenteditable>
scheme  | http
host    | dave-legacy
path    | 42/api/gems
file    | vibe-coder
ext     | js
type    | text/javascript  
charset | UTF-8
</pre>

*/


/*
<!-- 
*/


//[ _DAGGUMIT_YALL_ ]
function _DAGGUMIT_YALL_( source, type ) {
    throw new Error( "🤠 Daggum it, y'all! This one ain't wrote yet." );
}


//[ VibeCoder ]
// Accessor
const VibeCoder = {};


//[ VibeCoder.details ]
VibeCoder.details = {
    tikey   : "bcabaa7f-7712-43a3-b6db-4f33b8940359" ,
    tidate  : "4/16/2025" ,
    title   : "Vibe Coder API Module" ,
    version : "1.0.1" ,
    home    : "http://dave-legacy/42/api/gems/vibe-coder.js"
};


// IIFE for Lexer Manifest
;( accessor => { 

const m = accessor.manifest = {};

m.title = "Vibe Coder Manifest";

m.schema = [
    "Member", "Description"
];

m.doc = `
acronyms | Acronym Accessor 
legends  | Legend Method Accessor
lexer    | Lexer Subsystem Accessor
`;
    
} ) ( VibeCoder )


// Acronyms
const D = document;
const V = D.documentElement;
const W = window;
const N = W.navigator;
const A = N.userAgent.toLowerCase();
const E = A.includes( 'retext' ) ? 'retext' : 'other';


// Legends
const ella   = t => D.createElement( t );
const gid    = id => D.getElementById( id );
const selma  = q => D.querySelector( q );
const thelma = q => Array.from( D.querySelectorAll( q ) );
const artie  = ( e, k    ) => e.getAttribute( k );
const bart   = ( e, k, v ) => e.setAttribute( k, v );


//[ eloise ]
// Legend Candidates
const eloise = function( t, s ) {
    const ge = ella( t )
    ge.innerText = String( s );
    return ge;
}


//[ chuck ]
// Read Element Details into Dictionary Table or Core Table
// Dictionary Table is an Array of `detailDef` Objects: 
//      [ { type, decal, details, url }, ... ]
// Core Table is An Array of String Arrays
//      [ [ type, decal, details, url ], ... ]
// Core Table Includes Headers (see: `terry`);
const chuck = function( coreTable ) {
    const modules = thelma( "[details]" );
    const entries = modules.map( berry );
    if ( coreTable === true ) {
        const headers = terry();
        const records = entries.map( terry );
        return [ headers, ... records ];
    } else {
        return entries;
    }
}


//[ berry ]
// Accepts a Gadget as input (A or BUTTON)
// Returns a `detailDef` object { type, decal, details, url }
const berry = function( gadget ) {
    const NONE = "⛔";
    const str = o => ( ( "string" === typeof o ) ? o.trim() : "" );
    const strok = o => ( str( o ) || NONE );
    if (! ( gadget instanceof HTMLElement ) ) {
        return { 
            type    : "A"  ,
            decal   : "🗃️" ,
            details : "Workspace" ,
            url     : "./"
        };
    }
    const getDetails = o => strok( artie( o, "details" ) );
    const getURL     = o => strok( o.src );
    const getType    = o => str( o.nodeName ).toLowerCase();
    function getDecal( o ) {
        const s = str( artie( o, "decal" ) );
        if ( s ) { return s; }
        switch ( getType( o ) ) {
        case "script"  : return "📜" ;
        case "style"   : return "🎨" ;
        case "link"    : return "🔗" ;
        case "section" : return "🎛️";
        default        : return "🎭" ;
        }
    }
    const details = getDetails( gadget );
    const url     = getURL( gadget );
    const type    = getType( gadget );
    const decal   = getDecal( gadget );
    return { type, decal, details, url };
}


//[ terry ]
// Accepts a `detailsDef` object 
//      { type, decal, details, url }
// Returns a String Array
//      [ type, decal, details, url ]
// Note: if `entry` isn't an object, returns
//       schema record for String Array
const terry = function( entry ) {
    if (! ( entry instanceof Object ) ) {
        return [ 
            'Type'    ,
            'Decal'   ,
            'Details' ,
            'URL'
        ];
    }
    return [ 
        entry.type    ,
        entry.decal   ,
        entry.details ,
        entry.url
    ];
}


//[ listen ]
// Add Event Listener
function listen( a, b, c, d ) {
    const act = o => ( "function" === typeof o );
    c = c || window;
    b = b || 'load';
    a = a || act( d ) ? d : disperse;
    c.addEventListener( b, a );
}


//[ attempt ]
// Wrap action in try-catch block
function attempt( action, args ) {
    try { 
        return action( args );
    } catch ( error ) {
        disperse( error );
        return error;
    }
}


//[ whenPageLoads ]
// Invoke an action when the page load event fires
function whenPageLoads( action ) {
    listen( action );
}


//[ disperse ]
// Handle error or status message (intelligently)
function disperse( what ) {
    if ( what instanceof Error ) {
        console.error( what );
        window.alert( what ); 
    } else {
        console.log( what );
        const footer = selma( 'footer' );
        if ( footer ) {
            footer.innerText = what;
        }
    }
}


//[ festus ]
function festus( manifest ) {
    const arr = o => Array.isArray( o );
    const str = o => ( "string" === typeof o ) ? o.trim() : "";
    const obj = o => ( o instanceof Object );
    const arg = manifest;
    if ( obj( arg ) ) {
        const m = ( obj( arg.manifest ) ? arg.manifest : arg );
        const title = str( m.title ) || "Untitled Manifest";
        const headers = m.schema;
        const records = chop( m.doc );
        if ( arr( headers ) ) {
            records.unshift( headers );
        }
        console.group( title );
        console.table( records );
        console.groupEnd();
    } else {
        throw new TypeError( "Expected an Object (manifest)" );
    }
}

//[ RS ]
// Record Separator
var RS = "\n";

//[ FS ]
// Field Separator
var FS = "|";

//[ EQ ]
// Assignment Operator
var EQ = ":=";


//[ kev ]
// Compose key/value pair
// K.E.V. means "Key Equals Value"
// Which is the string result
function kev( o ) {
    const NONE = "⛔";
    const e = EQ;
    const obj = o => ( o instanceof Object );
    if ( obj( o ) ) {
        const k = o.key   || NONE;
        const v = o.value || NONE;
        return `${k} ${e} ${v}`;
    } else {
        throw new TypeError( "Expected an Object argument" );
    }
}


//[ kav ]
// Parse key/value pair
// K.A.V. means "Key And Value" (separated)
// Which is the Object result
function kav( s ) {
    const NONE = "⛔";
    const e = EQ;
    const str = o => ( "string" === typeof o );
    if ( str( s ) ) {
       const parts = s.split( e );
       const key   = parts[ 0 ] || NONE;
       const value = parts[ 1 ] || NONE;
    } else {
        throw new TypeError( "Expected a String argument" );
    }
}


//[ squeeze ]
// Accepts an array of strings (list)
// Returns an array of strings (list)
// Removes leading / trailing whitespace from each element
// Empties can be replaced with some decal or special value
function squeeze( list, empty="" ) {
    const arr = o => Array.isArray( o );
    const str = o => ( "string" === typeof o ) ? o.trim() : "";
    const trim = o => ( str( o ) || empty );
    const truthy = o => (!! o );
    if ( arr( list ) ) {
        return list.map( trim ).filter( truthy );
    } else {
        return [ empty ];
    }
}


//[ split ]
// Splits a String (explicit splitter)
// Returns Array of Strings (list)
// Separator is arbitrary (explicit arg)
function split( s, sep="," ) {
    const str = o => ( "string" === typeof o ) ? o.trim() : "";
    return str( s ).split( sep );
}


//[ slice ]
// Same as split, but uses FS as a separator
// Returns Array of Strings (list)
function slice( line ) {
    return split( line, FS );
}


//[ spread ]
// Same as split, but uses FS as a separator
// Returns Array of Strings (list)
// Each string is one value from the input line
function spread( line ) {
    return split( line, RS );
}


//[ chop ]
// Same as split, but uses RS as a separator
// Returns Array of String Arrays (table)
// Each string is one record from the input document
function chop( doc ) {
    const lines = squeeze( spread( doc ) );
    return lines.map( line => squeeze( slice( line ) ) );
}


//[ splice ]
// Inverse of `slice`
// Accepts an Array of Strings (values)
// Returns a String (line)
// Separator is FS
function splice( values ) {
    return values.join( FS );
}


//[ merge ]
// Inverse of `chop`
// Accepts an Array of Strings (lines)
// Returns a String (document)
// Separator is RS
function merge( lines ) {
    if ( Array.isArray( lines[ 0 ] ) ) {
        lines = lines.map( splice );
    }
    return lines.join( RS );
}


//[ parse ]
// Accepts a string (value, line, or document)
// Returns parsed data (type varies)
// The type argument determines how the source
// is processed. It can be any of:
/* 
- split    | Return Array of Strings; split on sep
- list     | Return HTML `ul`; split on sep
- chop     | Return Array of String Arrays (table); sep ignored
- table    | Return HTML `table`; sep ignored
- map      | Return Object (KVPs); sep ignored
*/
function parse( source, type, sep ) {
    function _split() {
        return split( source, sep );
    }
    function _list () {
        _DAGGUMIT_YALL_();
    }
    function _chop () {
        return chop( source );
    }
    function _table() {
        _DAGGUMIT_YALL_();
    }
    function _kvp( list ) {
        _DAGGUMIT_YALL_();        
    }
    function _record( list ) {
        list.forEach( _kvp )
    }
    function _map  () {
        const table = chop( source );
        table.forEach( _record );
    }
    switch( type ) {
    case "split" : return _split();
    case "list"  : return _list ();
    case "chop"  : return _chop ();
    case "table" : return _table();
    case "map"   : return _map  ();
    }
    console.warn( "🪧", "See documentation for types" );
    throw new TypeError( `Illegal type argument: ${type}` );
}


//[ compose ]
function compose( source, type ) {
    _DAGGUMIT_YALL_();
}


//[ compress ]
// Removes all excess whitespace
// Accepts a String (document)
// Returns a String (document)
function compress( doc ) {
    doc = String( doc ).trim();
    return merge(
        chop( doc )
            .map( s => s.trim() )
            .filter( s => (!! s ) )
            .map( line => slice( line ).map( value => value.trim() ) )
            .map( join )
    );
}


//[ compact ]
// This is a special case that merges all lines into
// one (replacing RS with FS) before splitting into
// a 1D list. Thus the input doc is treated as a single
// record, even if it contains record separators.
// This is used with long lists that contain one
// field, but may "wrap around".
function compact( doc ) {
    _DAGGUMIT_YALL_();
//    return splice( spread( doc ) )        
}


//[ properCase ]
function properCase( s ) {
    if ( "string" !== typeof s ) {
        return "⛔";
    }
    s = s.trim();
    return (
        s.slice( 0, 1 ).toUpperCase()
      + s.slice( 1    ).toLowerCase()
    );
}


//[ createTable ]
// Create table for elements w/ `details` attribute
// Requires: `chuck`, `berry`, and `terry`
function createDetailsTable( parent ) {
    const records = chuck( true );
    const headers = records.shift();
    const title = "Gadget Details";
    return createTable( records, headers, title, parent );
}


//[ createTable ]
// records | required | Array of String Arrays
// headers | required | Array of Strings
// title   | optional | String
// parent  | optional | HTML Element
function createTable( records, headers, title, parent ) {
    const arr = o => Array.isArray( o );
    function makeTag( s, tag, cr="" ) {
        s = `${cr}${s}${cr}`;
        return `<${tag}>${s}</${tag}>`;
    }
    function makeRow( s ) {
        if ( arr( s ) ) s = s.join( RS );
        return makeTag( s, "tr", RS );
    }
    function makeHeader( s ) {
        return makeTag( s, "th" );
    }
    function makeData( s ) {
        return makeTag( s, "td" );
    }
    const table = ella( 'table' );
    table.id = ( "top-" + TiGG() );
    table.caption = eloise( "caption", title || "Untitled" );
    const thead = table.tHead = ella( 'thead' );
    headers = headers.map( o => makeHeader( o, RS ) );
    thead.innerHTML = makeRow( headers, RS );
    const tbody = ella( 'tbody' );
    table.appendChild( tbody );
    function record( cells ) {
        cells = cells.map( o => makeData( o, RS ) );
        return makeRow( cells, RS );
    }
    records =records.map( record );
    tbody.innerHTML = records.join( RS );
    if( parent ) {
        parent.appendChild( table );
    }
    return table;
}


//[ verifyUniqueID ]
// Ensure an HTML Element ID is not already used
// Throws otherwise
function verifyUniqueID( id ) {
    if (!! gid( id ) ) {
        throw new Error( `ID '${id}' is already being used` );
    }
}


//[ createPreview ]
// Create `pre` element (w/ optional content)
function createPreview( content, id="pop", parent ) {
    verifyUniqueID( id );
    const pe = eloise( "pre", content );
    pe.id = id;
    pe.classList.add( "ppp" );
    bart( pe, "decal", "🌄" );
    bart( pe, "title", "Icon Definitions" );
    if ( parent ) {
        parent.appendChild( pe );
    }
    return pe;
}


//[ createPreview ]
// Create `textarea` element (w/ optional content)
function createEditor( content, id="sop", parent ) {
    verifyUniqueID( id );
    const te = ella( 'textarea' );
    te.id = id;
    te.classList.add( "sss" );
    bart( te, "wrap", "off" );
    bart( te, "rows", "42" );
    bart( te, "decal", "🌄" );
    bart( te, "title", "Icon Definitions" );
    if ( parent ) {
        parent.appendChild( te );
    }
    return pe;
}


//[ VibeCoder.acronyms ]
// Accessor for Acronyms
VibeCoder.acronyms = {
    W, N, A, E, D, V
};


// IIFE for Acronyms Manifest
;( accessor => { 

const m = accessor.manifest = {};

m.title = "Acronyms Manifest";

m.schema = [
    "Acronym", "Description"
];

m.doc = `
W | Alias for 'window'
N | Alias for 'window.navigator'
A | Alias for 'window.navigator.userAgent' (as lowercase)
E | Name of Script Engine ('retext' or 'other')
D | Alias for 'document'
V | Alias for 'document.documentElement'
`;

} ) 
( VibeCoder.acronyms );


//[ VibeCoder.legends ]
// Legends Accessor
VibeCoder.legends = { 
    ella    ,
    eloise  ,
    gid     ,
    selma   ,
    thelma  ,
    artie   ,
    bart    ,
    chuck   , 
    berry   , 
    terry   ,
    festus
};


// IIFE for Legends Manifest
;( accessor => { 

const m = accessor.manifest = {};
        
m.title = "Legends Manifest";

m.schema = [
    "Legend", "Description"
];

m.doc = `
ella    | Create Element
eloise  | Create Element and Write Content
gid     | Find Element by ID
selma   | CSS Query for One Element
thelma  | CSS Query for Multiple Elements
artie   | Read Attribute
bart    | Write Attribute
chuck   | Read Details for All Elements
berry   | Read Details for One Element
terry   | Convert Details Object to Array
festus  | Show a Manifest in Debug Console
`;
   
} )
( VibeCoder.legends );


//[ VibeCoder.legends.manifest.doc ]
VibeCoder.lexer = {};


// IIFE for Lexer Accessor
;( lexer => { 

    lexer.tokens = { RS, FS, EQ };
    // lexer.tokens.manifest = {};

    lexer.helpers = {
        kev , kav ,  
        squeeze ,
        disperse , attempt ,
        listen, whenPageLoads 
    };
    // lexer.helpers.manifest = {};

    lexer.parsers = {
        split , slice , spread , chop , parse
    };
    // lexer.parsers.manifest = {};

    lexer.composers = { 
        splice , merge , compose 
    };
    // lexer.composers.manifest = {};

    lexer.extras = { 
        verifyUniqueID ,
        createTable , 
        createDetailsTable ,
        createPreview , 
        createEditor
    };
    // lexer.extras.manifest = {};

} )
( VibeCoder.lexer );


// IIFE for Lexer Manifest
;( accessor => { 

const m = accessor.manifest = {};

m.title = "Lexer Manifest";

m.schema = [
    "Member", "Description"
];

m.doc = `
tokens    | Token Accessor
helpers   | Helper Method Accessor
parsers   | Parser Method  Accessor
composers | Composer Method Accessor
extras    | Extra Method Accessor
`;

} ) ( VibeCoder.lexer )


// IIFE for Lexer Tokens Manifest
;( accessor => { 

const m = accessor.manifest = {};
    
m.title = "Lexer Tokens Manifest";

m.schema = [
    "Token", "Meaning"
];

m.doc = `
RS | Record Separator
FS | Field Separator
EQ | Assignment Operator
`;

} )
( VibeCoder.lexer.tokens );


// IIFE for Lexer Helpers Manifest
;( accessor => { 

const m = accessor.manifest = {};

m.title = "Lexer Helpers Manifest";

m.schema = [ "Method", "Description" ];

m.doc = `
kev           | Compose Key/Value Pair
kav           | Parse Key/Value Pair
squeeze       | Remove Whitespace and Empty Lines from String Array
disperse      | Report Info or Error Message (as appropriate)
attempt       | Wrap Function Call in Try-Catch Block
listen        | Add Event Listener
whenPageLoads | Add Page Load Event Listener
`;

} )
( VibeCoder.lexer.helpers );


// IIFE for Lexer Parsers Manifest
;( accessor => { 

const m = accessor.manifest = {};
   
m.title = "Lexer Parsers Manifest";

m.schema = [ "Method", "Description" ];

m.doc = `
split   | Split String into Array (explicit separator)
slice   | Split String into Array (FS)
spread  | Split String into Array (RS)
chop    | String String into Array of Arrays (RS and FS)
parse   | Comprehensive Parser (see docs)
`;
    
} )
( VibeCoder.lexer.parsers );


// IIFE for Lexer Composers Manifest
;( accessor => { 

const m = accessor.manifest = {};

m.title = "Lexer Composers Manifest";

m.schema = [ "Method", "Description" ];

m.doc = `
splice  | Join String Array into String (FS)
merge   | Join String Array into String (RS)
compose | Comprehensive Composer (see docs)
`;

} )
( VibeCoder.lexer.composers );


// IIFE for Lexer Extras Manifest
;( accessor => { 

const m = accessor.manifest = {};

m.title = "Lexer Extras Manifest";

m.schema = [ "Method", "Description" ];

m.doc = `
verifyUniqueID      | Verify 'gid' fails for an ID
createPreview       | Create HTML Preview Gadget (PRE)
createEditor        | Create HTML Editor Gadget (TEXTAREA)
createTable         | Create HTML Table Gadget (TABLE)
createDetailsTable  | Create HTML Table Gadget for Element Details
`;

} )
( VibeCoder.lexer.extras );


// IIFE for App Registrations
;( we => { 

    const title = we.details.title;
    let registered = false;

    if ( "object" === typeof AppModules ) {
        const add = AppModules.add;
        if ( "function" === typeof add ) {
            add( title, we );
            registered = true;
        }
    }

    if ( registered ) {
        console.log( "🪪", "Registered" , title )
    } else {
        console.log( "👋", "Loaded" , title )
    }

} ) ( VibeCoder );

/*
-->
*/



