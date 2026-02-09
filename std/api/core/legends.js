
/* 

# Module Details

- 🚓 ⋄ Bod Squad Legends
- 🎫 ⋄ 2.1.0
- 🗓️ ⋄ 2025-APR-14
- 🤠 ⋄ The Tried and True Heroes

# Templates

//⋄ 🎩〖💢 Member Name〗
//⋄ 🗒️ 💢 Description
//⋄ 🔁 💢 Returns (what)
//⋄ 🧨 💢 Throws (what)
//⋄ ⏭️ 💢 Inline Code
//⋄ 🔰 💢 Comment

# Decals

- 〖🎫〗 Version
- 〖🗓️〗 Date
- 〖🤠〗 Ornery Tex
- 〖🚓〗 Legends
- 〖🦇〗 TiGG
- 〖🚁〗 Chopper
- 〖🏷️〗 Note Tag
- 〖👋〗 Register
- 〖🎩〗 Title / ID
- 〖🗒️〗 Description
- 〖🔁〗 Return Type
- 〖🧨〗 Throws
- 〖⏭️〗 Inline Code
- 〖🔰〗 Comments
- 〖💢〗 Pending / TODO
- 〖⛔〗 None / Missing
- 〖⋄〗  Diamond

# See Also

- http://dave-legacy/rt/Legends/menu.html

*/


/* --==[[ LEXER ACCESSOR ]]==-- */
const _L_ = {};
var LegendsLexer = _L_;


/* --==[[ DECALS ]]==-- */
_L_.DIAMOND = "⋄";
_L_.PENDING = "💢";
_L_.NONE = "⛔";
_L_.LEGENDS = "🚓";
_L_.CHOPPER = "🚁";
_L_.TIGG = "🦇"; 
_L_.decals = {
    diamond : _L_.DIAMOND ,
    pending : _L_.PENDING ,
    none    : _L_.NONE ,
    legends : _L_.LEGENDS ,
    chopper : _L_.CHOPPER ,
    tigg    : _L_.TIGG ,
    extras  : {
        version     : "🎫"
,       date        : "🗓️"
,       orneryTex   : "🤠"
,       noteTag     : "🏷️"
,       register    : "👋"
,       title       : "🎩"
,       description : "🗒️"
,       returnType  : "🔁"
,       inlineCode  : "⏭️"
,       throws      : "🧨"
,       comments    : "🔰"
    }
};


/* --==[[ LEXER CONSTANTS ]]==-- */
_L_.SI = Symbol.iterator;
_L_.DOT = "dot";
_L_.DOTS = "dots";
_L_.BALLOON = "balloon";
_L_.BALLOONS = "balloons";
_L_.CE = "contenteditable";
_L_.ED = "textarea";


/* --==[[ LEXER TOKENS ]]==-- */
_L_.FS = "|";
_L_.RS = "\n";
_L_.EQ = ":=";


/* --==[[ EXCEPTIONS ]]==-- */

const _DAGGUM_IT_ALL_YALL_ = () => {
    throw new Error( "🤠 Daggum it! This one ain't built yet." );
};

_L_.missingInAction = function( who ) {
    const o = _L_.LEGENDS;
    const c = _L_.CHOPPER;
    const msg = `⋄ ${o} ⋄ MIA ⋄ ${who} ⋄ ${c} ⋄`;
    throw new Error( msg );
};


/* --==[[ REQUIREMENTS ]]==-- */

/*
if ( `function` !== typeof TiGG ) {
    _L_.missingInAction( `TiGG` );
} else {
    const o = _L_.LEGENDS;
    const c = _L_.CHOPPER;
    const t = _L_.TIGG;
    console.log( o, c, t, "TiGG is present" );
}
*/

/* --==[[ ENCLOSE / EXPOSE BLOCK ]]==-- */

_L_.enclose = ( 
    s, o=_L_.DIAMOND, c=_L_.DIAMOND 
) => ( `${o} ${s} ${c}` );

_L_.expose = function( s, o=_L_.DIAMOND, c=_L_.DIAMOND ) {
    s = String( s ).trim();
    if ( s.startsWith( o ) ) {
        s = s.slice( 1 ).trimStart();
    }
    if ( s.ensWith( c ) ) {
        return s.slice( 0, -1 ).trimEnd();
    }
    return s;
};


/* --==[[ KEY/VALUE PAIR METHODS ]]==-- */

_L_.kav = function( s, c=_L_.EQ ) { 
    const parts = s.split( c );
    return {
        key   : parts[ 0 ] ,
        value : parts[ 1 ]
    };
};

_L_.kev = function( o, c=_L_.EQ ) { 
    return [ o.key, o.value ].join( c );
};


/* --==[[ LEXER CORE METHODS ]]==-- */

_L_.split = ( s, c="," ) => ( 
    String( s ).trim().split( c ).map( s => s.trim() ) 
);

_L_.spread = ( s ) => ( _L_.split( s, _L_.RS ) );

_L_.slice = ( s ) => ( _L_.split( s, _L_.FS ) );

_L_.chop = function( s ) {  
    return _L_.lines( s ).map(
        s => _L_.slice( s )
    );
};

_L_.merge = ( s ) => ( s.join( _L_.RS ) );

_L_.splice = ( s, gap=" " ) => ( 
    s.join( `${gap}${_L_.FS}${gap}` ) 
);

_L_.lines  = function( s ) {
    return String( s )
        .split( _L_.RS )
        .map( s => s.trim() )
        .filter( s => (!! s ) );
};

_L_.compact = function( s ) {
    return _L.merge( _L_.lines( s ) );
};

_L_.markdown = function( headers, records ) {
/*
    const si = _L_.SI;
    const str = o => String( o );
    const act = o => ( "function" === typeof o );
    const obj = o => ( o instanceof Object );
    const arr = o => Array.isArray( o );
    const itr = function( o ) {
        return ( obj( o ) && act( o[ SI ] ) );
    }
*/
    // 💢 TODO: Compose Markdown Table
    _DAGGUM_IT_ALL_YALL_();
};

_L_.examineOptions = function() {

const helpTable = parseDoc( `
slice   | Source is a single line        | 🏷️1
spread  | Source is a list               | 🏷️2
chop    | Source is a table              | 🏷️3
compact | Source is a compact collection | 🏷️4
map     | Source is a map                | 🏷️4
` );
        
console.group( `${I} Parser Options` );
console.table( helpTable )
console.groupEnd( title );
        
const noteTable = parseDoc( `
🏷️1 | Observe only FS (field separators)
🏷️2 | Observe only RS (record separators)
🏷️3 | Observe both FS and RS
🏷️4 | See Documentation for Details
` );

console.group( `🏷️ Parser Notes` );
console.table( noteTable )
console.groupEnd( title );
      
};


// Parse Text Document
_L_.parse = function( source, options = { chop : true } ) {

    const I = _L_.LEGENDS;
    const spread = s => ( _L_.spread( s ) );
    const slice  = s => ( _L_.slice( s ) );
    const chop   = s => ( _L_.chop( s ) );

    // 💢 TODO: Compact
    function compact() { _DAGGUM_IT_ALL_YALL_(); }

    // 💢 TODO: Map
    function map() {  _DAGGUM_IT_ALL_YALL_(); }

    if ( options.slice   ) { return slice  ( source ); }
    if ( options.spread  ) { return spread ( source ); }
    if ( options.chop    ) { return chop   ( source ); }
    if ( options.compact ) { return compact( source ); }
    if ( options.map     ) { return map    ( source ); }

    _L_.examineOptions();

    throw new Error( `${I} No valid parse option` );
};


// Compose Core Document
_L_.compose = function( source, options={ table : true } ) {
    // 💢 TODO: Compose CoreDoc
    _DAGGUM_IT_ALL_YALL_()
};


// Aliases
const D = document;
const H = D.head;
const V = D.firstElementChild;
var B = _L_.NONE;
var M = _L_.NONE;


// Acronyms
_L_.acronyms = {
    D, H, V, 
    // Deferred: [ B, M ]
    DOT  : "dot"  ,
    DOTS : "dots" ,
    BALLOON  : "balloon" ,
    BALLOONS : "balloons"
};


// Constants
_L_.constants = {
// Symbols
    si : [ _L_.SI, "Alias for Symbol.iterator" ]
// Strings
,   ce : [ _L_.CE, "Attribute for Editable Elements" ]
,   ed : [ _L_.ED, "Node Name for Editor Gadget" ]
// Tokens
,   fs : [ _L_.FS, "Field Separator" ]
,   rs : [ _L_.RS, "Record Separator" ]
,   eq : [ _L_.EQ, "Assignment Operator" ]
,   // Decals
    diamond : [ _L_.DIAMOND, "Diamond Bullet" ]
,   pending : [ _L_.PENDING, "Pending" ]
,   none    : [ _L_.NONE,    "None / Missing" ]
,   legends : [ _L_.LEGENDS, "API Module Decal for Legends" ]
,   tigg    : [ _L_.TIGG,    "API Module Decal for TiGG" ]
,   chopper : [ _L_.CHOPPER, "MIA Helicopter" ]
};


// Execute Action
_L_.macro = function( token ) {
    const we = _L_;
    const me = we.macro;
    const actions = me.actions || {};
    me.actions = actions;
    try {
        return action[ token ]();
    } catch ( e ) {
        console.error( e );
        window.alert( e );
    }
};


// Action Dispatch Map
_L_.macro.actions = {
    "💢" : ( () => { throw new Error( "💢 Reached pending code ..." ) } )
,   "🧼" : ( () => { console.clear()   } )
,   "♻️" : ( () => { location.reload() } )
,   "🔬" : ( () => { _L_.macro.examineActions(); } )
};


// Examine Actions
_L_.macro.examineActions = function() {
    const map = _L_.macro.actions;
    const table = Object.keys( map ).map( s => [ s ] );
    table.unshift( [ "Decal Key" ] );
    console.group( "Macro Action Keys" );
    console.table( table );
    console.groupEnd();
};


// Simple Registry
_L_.reginald = function( member, title, description ) {
    const map  = ( _L_.reginald.map || {} );
    const type = ( typeof member );
    const details = { member, title, type, description };
    _L_.reginald.map = map;
    map[ title ] = details;
    return details;
};


// Create HTML Element
const ella = t => D.createElement( t );


// Create HTML Element (extended args)
const eloise = function( t, s, id ) {
    const ge = ella( t );
    t.innerText = s ? String( s ) : "";
    t.id = id;
    return t;
};


// Get Element by ID
const gid = id => D.getElementById( id );

// For gid (backward compat.)
const gideon = gid; // For compat. issue


// Query Single Element
const selma  = q => D.querySelector( q );


// Query Multiple Elements
const selmax = q => D.querySelectorAll( q );


// Query Multiple Elements (array)
const thelma = q => Array.from( selmax( q ) );


// Query Single Element
const louise = ( q, i ) => thelma( q )[ i ];


// Set Attribute
const bart = ( e, k, v ) => e.setAttribute( k, v );


// Get Attribute
const artie = ( e, k ) => e.getAttribute( k );


// Remove Attribute
const bernie = ( e, k ) => e.removeAttribute( k );


// Verify Attribute
const barney = ( e, k ) => e.hasAttribute( k );


// Add Class name to Class List
const wanda = ( e, c ) => e.classList.add( c );


// Remove Class name from Class List
const ester = ( e, c ) => e.classList.remove( c );


// Verify Class name in Class List
const ethel = ( e, c ) => e.classList.contains( c );


// Toggle Class name in Class List
// Return nothing
const beth = ( e, c, b ) => e.classList.toggle( c, b );


// Compose Integer as CSS Pixel Value
const james = ( n ) =>( `${n}px` );


// Get Gadget Rectangle
const jake = ( e ) => e.getBoundingClientRect();


// Get Gadget Rectangle (Computed CSS)
const joseph = function( e ) {
    const cs = getComputedStyle( e );
    const x = cs.left;
    const y = cs.top;
    const w = cs.width;
    const h = cs.height;
    const computed = { x, y, w, h };
    return { e, computed, then : john };
};


// Set Gadget Rectangle
const john = function( e, rc ) {
    const s = e.style;
    s.left   = james( rc.x );
    s.top    = james( rc.y );
    s.width  = james( rc.width  );
    s.height = james( rc.height );
    return { e, rc, then : john };
};


// Get Gadget Top Left Corner
const jerry = function( e ) {
    const rc = jake( e )
    const x = rc.x;
    const y = rc.y;
    return { x, y, e, then : jerry };
};


// Get Gadget Size
const jethro = function( e ) {
    const rc = jake( e )
    const w = rc.width;
    const h = rc.height;
    return { w, h, e, then : jethro };
};


// Get Gadget Metrics
const jenny = function( e ) {
    const rect = jake( e );
    const x = rect.x;
    const y = rect.y;
    const w = rect.width;
    const h = rect.height;
    const radius = Math.max( w, h );
    const rhalf  = radius / 2;
    const cx = x + rhalf;
    const cy = y + rhalf;
    const center = { cx, cy }
    const dx = x / radius;
    const dy = w / radius;
    const deltas = { dx, dy }
    const aspect = x / y;
    const result = {
        center, deltas,
        radius, rhalf,
        aspect, 
        gadget : e, 
        then : jenny
    };
    return result;
};


// Get CSS Root Element
const sammy = function() {
    return selma( ":root" );
};


// Get Computed Styles
const deano = function() {
    return getComputedStyle( sammy() );
};


// Get Property Value (root)
const bobby = function( key ) {
    const cs = deano();
    return cs.getPropertyValue( key );
};


// Set Property Value (root)
const castiel = function( key, value ) {
    const root = sammy();
    return root.setProperty( key, value );
};


// Create Dot Button
const dizzy = function( decal, cx, cy, radius ) {
    const K = _L_.acronyms.DOT;
    const e = ella( 'button' );
    bart( s, K, "");
    wanda( e, K );
    const rhalf = radius / 2;
    const x = ( cx - rhalf );
    const y = ( cy - rhalf );
    const rc = new DOMRect( x, y, radius, radius );
    john( e, rc );
    const args = { decal, cx, cy, radius };
    const metrics = { x, y, rc, cx, cy, radius, rhalf };
    return { e, args, rh, metrics, e, then : dizzy }
};


// Create Anchor Balloon
const tizzy = function( href, filename, title, clicked ) {
    const K = _L_.acronyms.BALLOON;
    const e = ella( 'a' );
    e.url = e.href = href;
    e.filename = e.download = filename;
    e.innerText = e.title = title;
    bart( e, K, "");
    wanda( e, K );
    const args = { title, href, filename, clicked };
    if ( clicked === true ) {
        e.click();
    }
    return { anchor : e, args, then : tizzy };
};


// Download Text/JSON File
const rico = function( json, filename, options, clicked ) {
    const orelse = "rico-download.txt";
    const str = o => ( "string" === typeof o );
    const obj = o => ( o instanceof Object );
    filename = str( filename ) 
        ? filename.trim()
        : orelse;
    filename = filename || orelse;
    options = obj( options ) 
        ? options 
        : { type : "text/plain", charset : "utf-8" }; 
    const bo = new Blob( [ json ], options );
    const href = URL.createObjectURL( bo );
    const title = "💾 Rico Download";
    const result = tizzy( href, filename, title, clicked );
    if ( clicked === true ) {
        URL.revokeObjectURL( href );
    }
    const args = { json, filename, options, clicked };
    result = {
        tizzy : result ,
        rico : { blob, args, then : rico }
    };
    return ;
};

// Copy Text to Clipboard 
// (renamed as keith in later versions)
const carmen = function( text ) {
    const te = ella( "textarea" );
    te.value = String( text );
    te.position = "fixed";
    B.appendChild( te );
    te.focus();
    te.select();
    D.execCommand( "copy" );  
    B.removeChild( te );
    return { gadget : te, then : carmen };
};


// Accessor for HTML Document Composers
const deuce = {};

// Compose HTML TABLE from Map (any JS Object)
deuce.map = function( o, tigg ) {
    const obj = o => Array.isArray( o );
    if (! obj( o ) ) {
        throw new TypeError( "Expected an Object" )
    }
    const keys = Object.keys( o, tigg );
    if ( o.keys < 1 ) {
        return "⛔";
    }
    const entries = keys.map( k => { 
        const v = o[ k ];
        const t = typeof v;
        if ( tigg === true ) {
            return [ k, v, t, TiGG() ];
        } else {
            return [ k, v, t ];
        }
    } );
    const headers = [ "Key", "Value", "Type" ];
    if ( tigg ===true ) {
        headers.push( "TiKey" );
    }
    entries.unshift( headers );
    return deuce.table( entries );
};

// Compose HTML TABLE from Array of Arrays
deuce.table = function( o ) {
    const arr = o => Array.isArray( o );
    const rows = [];
    function record( row, i ) {
        const tag = ( i > 0 ) ? "td" : "th";
        row = row.map( field => {
            const value = String( field );
            return ( `<${tag}>${value}</${tag}>` );
        } );
        rows.push( row );
    }
    function wrapCells( list ) {
        list = list.join( "\n" );
        return ( `<tr>\n${list}\n</tr>` );
    }
    function isTable( o ) {
        if (! arr( o )    ) { return false; }
        if ( o.length < 1 ) { return false; }
        let good = true;
        arr.forEach( e => { good = good && arr( e ); } );
        return good;
    }
    if ( isTable( o ) ) {
        if ( o.length < 1 ) {
            return "⛔";
        }
        o.forEach( ( row, i ) => record( row, i ) );
        const headers = wrapCells( rows.shift() );
        const thead = ( `<thead>\n${headers}\n</thead>` );
        const records = rows.map( wrapCells );
        const tbody = ( `<tbody>\n${records}\n</tbody>` );
        return ( `<table>\n${thead}\n${tbody}\n</table>` )
    } else {
        throw new TypeError( "Expected an Array of Arrays" )
    }
    return null;
};

// Compose HTML UL from Array
deuce.list = function( o ) {
    const arr = o => Array.isArray( o );
    if (! arr( o ) ) {
        throw new TypeError( "Expected an Array" )
    }
    if ( o.length < 1 ) {
        return "⛔";
    }
    const items = o.map( e => {
        return ( `<li>${e}</li>` );
    } ).join( "\n" );
    return ( `<ul>\n${items}\n</ul>` );
};

// Extract Inner HTML from HTML Element
deuce.container = function( o ) {
    const elm = o => ( o  instanceof HTMLElement );
    if (! elm( o ) ) {
        throw new TypeError( "Expected and HTML Element" )
    }
    return o.innerHTML;
};

// Compose HTML PRE for ( id, content )
deuce.preview = function( id, content, className="sss" ) {
    content = deuce.auto( content, "string" );
    return [
        `<textarea id="${id}" wrap="off" rows="42" class="${className}">` ,
        content ,
        "</textarea>"
    ].join( "\n" );
};

// Compose HTML TEXTAREA for ( id, content )
deuce.editor = function( id, content, className="sss" ) {
    content = deuce.auto( content, "string" );
    return [
        `<textarea id="${id}" wrap="off" rows="42" class="${className}">` ,
        content ,
        "</textarea>"
    ].join( "\n" );
};

// Auto-Detect Type and Compose HTML Document
deuce.auto = function( o, orelse="json" ) {
    const arr = o => Array.isArray( o );
    const str = o => ( "string" === typeof o );
    const obj = o => ( o instanceof Object );
    const elm = o => ( o  instanceof HTMLElement );
    if ( str( o ) ) {
        switch( orelse ) {
            case "string" :
                return String( o );
            case "json" :
                return JSON.stringify( o, null, 2 );
            default : 
                return JSON.stringify( o );
        }
    }
    if ( elm( o ) ) {
        return deuce.container( o );
    }
    if ( arr( o ) ) {
        function good( prev, curr ) {
            return prev && arr( curr );
        }
        if ( o.reduce( good, true ) ) {
            return deuce.table( o );
        }
        return deuce.list( o );
    }
    if ( obj( o ) ) {
        const table = Object.entries( o )
            .map( e => {
                const t = typeof e[ 1 ];
                return [ e[ 0 ], e[ 1 ], t ]
            } );
        const headers = [ "Key", "Value", "Type" ];
        table.unshift( headers );
        return deuce.table( table );
    }
    return deuce.auto( String( o ) );
};

// Prepare Popup Window Options
deuce.options = function( options ) {
    const arr = o => Array.isArray( o );
    const str = o => ( "string" === typeof o );
    const obj = o => ( o instanceof Object );
    if (! str( options ) ) {
        if ( arr( options ) ) {
            options = options.join( "," );
        } else if ( obj( options ) ) {
            options = Object.entries( options )
                .map( o => ( `${o[0]}=${o[1]}` ) );
            options = options.join( "," );
        } else {
            warning = "Options ignored. Must be string, array, or object.";
            console.warn( "🚦", warning );
            return { warning };
        }
    }
    return options.trim();;
};

// Core Document for deuce Accessor
deuce.coreDoc = `
map       | Compose HTML TABLE from Map (any JS Object)
table     | Compose HTML TABLE from Array of Arrays
list      | Compose HTML UL from Array
container | Extract Inner HTML from an HTML Element
preview   | Compose HTML PRE for ( id, content )
editor    | Compose HTML TEXTAREA for ( id, content )
auto      | Auto-Detect Type and Compose HTML Document
options   | Prepare Popup Window Options
coreDoc   | This document
`;


// Writes HTML to a new tab
const ace = function( content, target, options ) {
    const obj = o => ( o instanceof Object );
    const NONE = "⛔";
    let warning = "n/a";
    options = deuce.options( options );
    if ( obj( options ) ) {
        warning = options.warning;
        options = undefined;
    }
    target = target || "_blank";
    let wnd = window.open( "", target, options );
    if ( options && (!wnd) ) {
        warning = "Popups disabled. Options ignored."
        console.warn( "🚦", warning );
        wnd = window.open( "", target );
    }
    if (! wnd ) {
        throw new Error( "Unable to open tab or popup window" );
    }
    content = deuce.auto( content );
    const doc = wnd.document;
    doc.open();
    doc.writeln( '<!DOCTYPE html>' );
    doc.writeln( '<html>' );
    doc.writeln( '<head>' );
    doc.writeln( '  <meta charset="utf-8">' );
    doc.writeln( '  <title>ACE Preview</title>' );
    doc.writeln( '</head>' );
    doc.writeln( '<body style="margin-bottom: 42vh">' );
    doc.writeln( content );
    doc.writeln( '</body>' );
    doc.writeln( '</html>' );
    doc.close();
    const args = { content, target, options };
    const result = { wnd, doc, args, warning, then : ace };
    return result;
};


// Open a new tab or popup window
const carl = function( url, target, options ) {
    const z = zim();
    if ( z.retext ) {
        const title = "⚓ Anchor by Carl";
        return tizzy( url, '', title, true )
    } else {
        return window.open( url, target, options );        
    }
};


// User Agent Details
const zim = function() {
    const agent = navigator.userAgent.toLowerCase();
    const retext = agent.includes( "retext" );
    const chrome = agent.includes( "chrome" );
    return { agent, retext, chrome };
};


// Verify args for z-sort
var zulu = function( least, stepSize, gadgets, specialGadget ) {
    const checkInt = function( o ) { 
        const n = parseInt( o );
        if ( isFinite( n ) ) return;
        if ( n > 0 ) return;
        throw new TypeError( "Expected a positive integer" );
    }
    const checkGadget = function( o ) {
        if ( o instanceof HTMLElement ) return;
        throw new TypeError( "Expected an HTML Element" );
    }
    const checkGadgetArray = function( o ) {
        if ( Array.isArray( o ) ) {
            o.forEach( checkGadget );
            return; // Cool!
        };
        throw new TypeError( "Expected an array of HTML Elements" );
    }
    checkInt( least );
    checkInt( stepSize );
    checkGadget( specialGadget );
    checkGadgetArray( gadgets );
};


// Send Gadget to Bottom of Z-Order
var alpha = function( least, stepSize, gadgets, bottomGadget ) {
    zulu( least, stepSize, gadgets, bottomGadget );
    // ???
    throw new Error( "TODO!" );
};

// Send Gadget to Top of Z-Order
var omega = function( least, stepSize, gadgets, topGadget ) {
    zulu( least, stepSize, gadgets, bottomGadget );
    // ???
    throw new Error( "TODO!" );
};


// Examine Core Document in Console
const quincy = function( cdoc, title, schema ) {
    const isString = o => ( typeof o === "string" );
    const isArray = o => ( Array.isArray( o ) );
    function check( s ) {
        if ( !isString( s ) ) {
            throw new TypeError( "cdoc must be or name a string" );
        }    
    }
    check( cdoc );
    if ( LegendsManifest[ cdoc ] ) {
        cdoc = LegendsManifest[ cdoc ];
        check( cdoc );
    }
    if ( window[ cdoc ] ) {
        cdoc = window[ cdoc ];
        check( cdoc );
    }
    // Could be string or list
    let headers = isArray( schema ) 
        ? schema // List => List
        : ( isString( schema )
            ? _L_.slice( schema ) // CoreRecord => List
            : LegendsManifest.coreDocSchema // Default List
        );
    // Could be string, list, or table...
    const proposed = isArray( cdoc )
        ? ( isArray( cdoc[ 0 ] )
            ? cdoc // Table => Table
            : cdoc.map( o => _L_.slice( o ) ) // List => Table
        )
        : _L_.chop( cdoc ); // CoreDoc => Table
    // Could be an Ordinary Object or other Primitive
    let table = proposed;
    if (! isArray( table ) ) {
        if ( o instanceof Object ) {
            // Override client-provided headers
            headers = LegendsManifest.coreDocSchema;
            // Ignore proposed table
            table = [];
            // Get object keys from original arg
            const keys = Object.keys( cdoc );
            // Map to entries
            keys.forEach( k => {
                const v = String( cdoc[ k ] ); // Cast Value as String
                const entry = [ k, v ]; // Key-Value Pair
                table.push( entry );    // Save it in Table
            } );
        } else { // Or some primitive (other than String)
            headers = [ "Value"   ];
            table   = [ [ table ] ];
        }
    }
    table.unshift( headers );    // Insert Headers (Column Names)
    title = ( isString( title ) ? title : "Examine Document" );
    // Finally! Show something here...
    console.group( title );
    console.table( table );
    console.groupEnd();
};


// Ozville Extras Accessor
const _O_ = {};
var OzvilleExtras = _O_;


// Dot Rocket Dispatcher
_O_.dot = function( title, target, options ) {
    let warning = "n/a";
    options = _L_.deuce.options( options );
    if ( options instanceof Object ) { 
        warning = options.warning;
        options = undefined; 
    }
    const url = `http://dave-lecacy/42/dots/dot.${title}.html"`;
    target = target || url;
    const wnd = window.open( url, target, options );
    const args = { title, target, options };
    return { wnd, url, warning, args }
};


// Dot Registry as a Core Document
_O_.dot.coreDoc = `
📡 | hosts                  | System 32 Hosts
🪁 | snagger                | Icon Snagger
📕 | amigas                 | X3A™ Notebook
📘 | notebooks              | MS Notebooks
🔗 | shorty                 | Shortcut Composer
⚡  | linker                 | Link Composer
🌞 | karma                  | Karma Script Editor
🌤️ | cloud9                 | Cloud 9 Dot Menus
🧸 | teddi                  | Teddi Text Editor
🐼 | yogi                   | Yogi Project Manager
🐯 | sapphyra               | Sapphyra Translator
🐆 | fluffy                 | Fluffy Checklists
🐒 | boppy                  | Boppy Workspace
🦄 | unicornopic            | Unicornopic Decal Editor
🐸 | floob                  | Floob Decal Manager
🐦‍🔥 | cache-sage             | Cache Sage Notes
👮 | commands               | Command Central
👷 | werk                   | Legacy Project Manager
🤺 | sulu                   | Sulu Navigator
🛫 | kruzer                 | LAN Kruze Kontrol
☕  | swill                  | Morning Swill
😜 | system42               | System 42 Editor
👔 | agenda42               | System 42 Agenda
🛸 | panel42                | System 42 Navigation Panel
🪪 | reg42                  | System 42 Registrar
🥰 | faves                  | Favorite Icons
📷 | kodachrome             | Kodachrome Icon Warehouse
📸 | oregano                | Oregano Snapshot Tool
🚓 | legends                | Legend Whiteboard
🎈 | nexus                  | Nexus Control Panel
💧 | raindrop               | Raindrop Bookmarks
🌊 | try-it                 | Try-It Editor
📽️ | media-tools            | Media Tools
🧭 | nav-tools              | Naviation Tools
👹 | i-see-you              | I See You (ICU)
🤖 | grok                   | Grok AI
🤓 | emoji-kbrd             | Emoji Keyboard
😎 | nyteowldave            | Dave's BIO
🧔 | perseus                | Perseus Project Manager
🧔‍♂️ | adam                   | Adam Table Editor
👩‍🦰 | desiree                | Desiree Shortcut Manager
👱‍♀️ | belinda                | Belinda for Mobius
👸 | Dorothy                | Dorothy Dot Rockets
🏇 | wrangler               | Table Wrangler
🫂 | contacts               | Google Contacts
👥 | social                 | Social Media
🐕 | snoopy                 | Snoopy Snippets
🦝 | rocky                  | Rocky Rocket Manager
🐧 | ben                    | Bash Scripts
🦉 | ncsws                  | NCS Web Standards
🦖 | rex                    | Rex Decal Dragger
🐳 | mobius                 | Mobius Editor
🦀 | crusty                 | Crusty Rusty API Module
🦈 | mako                   | Mako Workspace Manager
🐜 | ants                   | Anthem Ants (2a)
🚄 | express-lane           | Express Lane Repository
🚐 | shuttle-bus            | Shuttle Bus Repository
🏟️ | public                 | LAN Public Access
🏆 | brazz                  | X3A™ Brazz Database Tool
🎭 | decal-depot            | Decal Depot
🧢 | retext                 | ReText Workspace
🪖 | clean-sweep            | Operation Clean Sweep
⛑️ | code-rescue            | Code Rescue
💎 | jimbo                  | Jimbo the Jeweler
🎸 | anthem                 | Anthem Editor
⌨️ | keisha                 | Keisha Editor
🏮 | dharma                 | Dharma Editor
🐷 | awk                    | AWK Editor
?  | sed                    | SED Editor
?  | grep                   | GREP Editor
♾  | regexr                 | RegExr App
☍  | code2flow              | Code2Flow App
Ⓧ | xml                    | XML Editor
☯  | clisp                  | CLISP Editor
🛒 | shopping               | Shopping List Editor
?  | q                      | Q Workspace
`;


// Dot Rocket Dispatcher
_O_.dot.coreSchema = [ "Decal", "ID", "Description" ];


// Dot Rocket Dispatcher
_O_.dot.registry = _L_.PENDING;


// New Squad Members
_L_.NEW_MEMBERS = {
    beth, quincy,
    jake, james, john, jerry, jethro, joseph,
    sammy, deano, bobby, castiel,
    dizzy, tizzy, rico, 
    carmen, carl, ace, zim,
    alpha, omega, zulu, 
    deuce : _L_.deuce,
    dot   : _O_.dot
};


// Manifest for Legends
const LegendsManifest = {
    ella, eloise,
    gid, gideon, 
    selma, selmax, thelma, louise, 
    bart, artie, bernie, barney, 
    wanda, ester, ethel, beth,
    ozville   : _O_ ,
    lexer     : _L_ ,
    recent    : _L_.NEW_MEMBERS ,
    acronyms  : _L_.acronyms    ,
    constants : _L_.constants   ,
    decals    : _L_.decals
};


// Core Document Schema 
LegendsManifest.coreDocSchema = [
    "Symbol", 
    "Description" 
];


// Core Note Schema
LegendsManifest.coreNoteSchema = [
    "Group ID", 
    "Unique Key",
    "Description" 
];


// Core Document for Notes
LegendsManifest.coreNotes = `
1 | Note 1   | jenny => { center, deltas, aspect, radius, rhalf }
1 | Note 1a  | deltas => { dx, dy }
1 | Note 1b  | center => { cx, cy }
1 | Note 1c  | aspect => w / h
1 | Note 1d  | rhalf = radius / 2
2 | Note 2   | ReText uses tabs; others use popups
3 | Note 3a  | point => { x, y };
3 | Note 3b  | size => { w, h };
4 | Note 4x  | cx => center x
4 | Note 4y  | cy => center y
5 | Note 5x  | dx => delta x (unit scale)
5 | Note 5y  | dy => delta y (unit scale)
`;


// Core Document for Members
LegendsManifest.coreMembers = `
ella    | Create element
gid     | Get element by ID
gideon  | Alias for 'gid' (for legacy code)
selma   | CSS Selector Query (single)
selmax  | CSS Selector Query (multi)
thelma  | Call selmax; cast result as Array
louise  | Call thelma; return n-th result
bart    | Write an attribute
artie   | Read an attribute
bernie  | Remove an attribute
barney  | Verify an attribute exists
wanda   | Add a class to class list
ester   | Remove a class from class list
ethel   | Verify class list contains a class
beth    | Toggle a class
james   | Append 'px' suffix to number
jerry   | Get gadget top left corner { x, y }
jethro  | Get gadget size { w, h }
joseph  | Get gadget rectangle (CSS computed)
jake    | Get gadget rectangle (DOMRect)
john    | Set gadget rectangle (DOMRect)
jenny   | Get gadget metrics (see: note 1)
sammy   | Short for selma( ':root' )
deano   | Get computed styles for ':root'
bobby   | Read a property from ':root'
castiel | Write a property value to ':root'
dizzy   | Create unattached dot button
tizzy   | Create unattached balloon anchor
rico    | Downloads a text file (see note 1)
carmen  | Copies text to Clipboard (see note 1)
deuce   | Compose content for ace
ace     | Open browser tab and write content
zim     | Get User Agent details
carl    | Open browser tab or popup window (see note 2)
quincy  | Examine Core Document in Console
alpha   | Z-Sort Gadgets ~ bring gadget to top
omega   | Z-Sort Gadgets ~ send gadget to bottom
zulu    | Z-Sort Gadgets ~ verify arguments
`;


// Accessor for Lexical Manifest Members
LegendsManifest.coreLexer = {};


// Core Document for Lexical Members
LegendsManifest.coreLexer.methods = `
_L_.enclose        | Wrap string in delimiters
_L_.expose         | Remove delimiters from string
_L_.kav            | Split string into key/value pair
_L_.kev            | Join key/value pair
_L_.lines          | Split CoreDoc into lines
_L_.compact        | Split CoreDoc into lines, remove excess whitespace
_L_.split          | Split string into lines, fields, or key/value pair
_L_.spread         | Split string into lines (list)
_L_.slice          | Split string into fields (list)
_L_.chop           | Split string into fields and lines (table)
_L_.merge          | Merge lines and fields into a single string (CoreDoc)
_L_.splice         | Merge fields or lines into a single string (CoreDoc)
_L_.parse          | Parse CoreDoc (comprehensive)
_L_.compose        | Compose CoreDoc (comprehensive)
_L_.examineOptions | Show parse / compose Options in Console
_L_.markdown       | Compose Markdown Table from CoreDoc
_L_.macro          | Execute action based on token
_L_.reginald       | Simple Member Registry
`;


// Core Document for Lexical Members
LegendsManifest.coreLexer.info = `
_L_                | Legends Core Lexer Accessor
_L_.acronyms       | Map of all acronyms
_L_.constants      | Map of all constants
_L_.decals         | Map of all decals
_L_.macro.actions  | Action dispatch map
_L_.dot.coreDoc    | Dot Rocket Core Document
_L_.dot.registry   | Dot Rocket Registry
`;

// Core Document for Lexical Members
LegendsManifest.coreLexer.extras = `
_L_.DOT            |〖dot〗 (constant)
_L_.DOTS           |〖dots〗 (constant)
_L_.BALLOON        |〖balloon〗 (constant)
_L_.BALLOONS       |〖balloons〗 (constant)
_L_.CE             |〖contenteditable〗 (constant)
_L_.ED             |〖textarea〗 (constant)
_L_.FS             |〖|〗 Field Separator (constant)
_L_.RS             |〖\\n〗 Record Separator (constant)
_L_.EQ             |〖:=〗 Assignment Operator (constant)
_L_.SI             | Symbol.iterator (constant)
_L_.DIAMOND        |〖⋄〗  Diamond Bullet (decal)
_L_.PENDING        |〖💢〗 Pending / TODO (decal)
_L_.NONE           |〖⛔〗 None / Missing (decal)
_L_.CHOPPER        |〖🚁〗 MIA Chopper (decal)
_L_.LEGENDS        |〖🚓〗 Legends API Module (decal)
_L_.TIGG           |〖🦇〗 TiGG API Module (decal)
_L_.NEW_MEMBERS    | Map of new members
`;


// Accessor for Ozville Manifest Members
LegendsManifest.coreOzville = {};


// Core Document for Ozville Methods
LegendsManifest.coreOzville.methods = `
_O_.dot            | Dot Rocket Dispatcher
_O_.dot.getEntry   | Lookup Registry Entry
`;


// Core Document for Ozville Information Members
LegendsManifest.coreOzville.info = `
_O_                | Ozville Accessor
_O_.dot            | Dorothy Accessor
_O_.dot.coreDoc    | Dot Rocket Dispatcher (decal)
_O_.dot.coreSchema | Dot Rocket Dispatcher (decal)
_O_.dot.registry   | Dot Rocket Dispatcher (decal)
`;


// Core Schema for Ozville Members
LegendsManifest.coreOzville.schema = _O_.dot.coreSchema;


// Defer loading of Some Members
addEventListener( 'load', () => { 

    const NONE = _L_.NONE;
    
    let registered = false;

    window.B = _L_.acronyms.B = _L_.B = D.body;
    window.M = _L_.acronyms.M = _L_.M = D.scripts;

    // We need to parse this into the lookup table
    let doc = _L_.chop( _O_.dot.coreDoc );
    doc.forEach( entry => { 
        let decal = entry[ 0 ]       || NONE;
        let id    = entry[ 1 ]       || NONE;
        let description = entry[ 2 ] || NONE;
        _O_.dot.registry[ decal ] = { 
            decal, id, description
        };
    } );

    // We defer this here to give the App time to load
    // since Registrars may need our members to operate.
    if ( "object" === typeof AppModules ) {
        const add = AppModules.add;
        if ( "function" === typeof add ) {
            add( "LegendsManifest", { LegendsManifest } );
            registered = true;
        }
    }    

    if ( registered ) {
        console.log( `🚓 Squad Legends Manifest Registered` );
    }

} );


console.log( "Loaded legends.js API Module" );
