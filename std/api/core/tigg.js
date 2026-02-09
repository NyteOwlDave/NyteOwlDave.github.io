
/*
    TiGG (Tiny GUID Gen) ~ 2025-MAR-21
    tigg.js
    Grok @ https://x.com/i/grok?conversation=1903141909637541947
*/


// Generates a single GUID ('TiKey')
function TiGG() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


// Generates a text document with one GUID per line
TiGG.raw = function( count=10, gadget ) {
    const isEditor = o => ( o instanceof HTMLTextAreaElement );
    const isGadget = o => ( o instanceof HTMLElement );
    function assign( doc ) {
        if ( isEditor( gadget ) ) {
            gadget.value = doc;
            return;
        }
        if ( isGadget( gadget ) ) {
            gadget.textContent = doc;
            return;
        }
        console.log( doc )
    }
    count = parseInt( count );
    if (! isFinite( count ) ) {
        throw new TypeError( "Expected an integer count argument " );
    }
    const keys = [];
    while ( count > 0 ) {
        count -= 1;
        keys.push( TiGG() );
    }
    assign( keys.join( "\n" ) );
}


// Generates a list of GUIDs (one per entry)
TiGG.bulkTitles = function( titleList, mapmode ) { 
    const str = o => ( 'string' === typeof o );
    const me = TiGG;
    function entry( s ) {
        let title = str( s ) ? s.trim() : "";
        title = ( title || "💢 Pending" );
        const tikey  = me();
        const tidate = ( new Date() ).toLocaleDateString();
        if ( mapmode ) {
            return { title, tikey, tidate };
        } else {
            return ( [ title, tikey, tidate ] );
        }
    }
    if ( str( titleList ) ) {
        return entry( titleList );
    }
    titleList = Array.from( titleList );
    return titleList.map( entry );
}


// For backward compat.
TiGG.bulk = TiGG.bulkTitles;


// Generates a range of GUIDs (one per entry)
TiGG.decalRange = function( min, max, mapmode ) {
    min = Math.min( min, max );
    max = Math.max( min, max );
    const n = max - min;
    const me = TiGG;
    const tidate = ( new Date() ).toLocaleDateString();
    function entry( i ) {
        const codePoint = JSON.stringify( [ i ] );
        const decal = String.fromCodePoint( i );
        const tikey  = me();
        if ( mapmode ) {
            return { decal, codePoint, tikey, tidate };
        } else {
            return [ decal, codePoint, tikey, tidate ];
        }
    }
    const list = [];
    while ( min <= max ) {
        list.push( entry( min++ ) );
    }
    return list;
}


// Generates a Table of Decal Definitions
TiGG.decalTable = function( list, mapmode ) {
    const str = o => ( 'string' === typeof o );
    const strok = o => str( o ) || "💢";
    const arr = o => Array.isArray( o );
    const me = TiGG;
    const tidate = ( new Date() ).toLocaleDateString();
    function entry( s ) {
        const decal = strok( s ).codePointAt( 0 );
        const codePoint = me.codePoints( decal );
        const tikey  = me();
        const title = "💢 Pending";
        if ( mapmode ) {
            return { decal, codePoint, tikey, tidate, title };
        } else { 
            return [ decal, codePoint, tikey, tidate, title ];
        }
    }
    if ( str( list ) ) {
        // Nice Cool Way to Split UTF-8 Combos!
        // U+FE0F (65039) is an "EOF" marker for character combos
        list = list.split( "\ufe0f" ).filter( s => ( !!s ) );
        return list.map( entry );
    } else if ( arr( list ) ) {
        return list.map( entry );
    } else {
        throw new TypeError( "Expected a string or array" );
    }
}


// Return an array of code points for a string
TiGG.codePoints = function( s ) {
    const str = o => ( 'string' === typeof o );
    // const me = TiGG;
    const codes = [];
    s = str( s ) ? s.trim() : "";
    if (! s ) { return codes; }
    let i = 0, cp = 0;
    while ( cp = s.codePointAt( i ) ) {
        codes.push( cp );
        i += 1;
    }
    return JSON.stringify( codes );
}


// IIFE for Details
;( we => {

// Link Definitions
const linkDefs = 
we.linkDefs = {
    home : "https://dave-legacy/42/api/core/tigg.js" ,
    grok : "https://x.com/i/grok?conversation=1903141909637541947" ,
    wbrd : "https://whiteboard.office.com/me/whiteboards/b2ee9f23-b5cd-4210-a252-306c829205a0"
};

// Key Definition
const keyDef = 
we.keyDef = [
    "🦇"                                    // decal
,   "0325530b-be5a-46fb-8dc6-89658363155a"  // tikey
,   "4/22/2015"                             // tidate
];

// Decal Defition
const decalDef =
we.decalDef = [ 
    keyDef[ 0 ]     // decal
,   "[ 129415 ]"    // codePoint
,   keyDef[ 1 ]     // tikey
,   keyDef[ 2 ]     // tidate
];

// Module Details
const details =
we.details = {
     decal   : keyDef[ 0 ]
,    tikey   : keyDef[ 1 ]
,    title   : "Tiny GUID Generator"
,    id      : "tigg"
,    version : "1.3.0"
,    date    : "2025-APR-22"
,    home    : "http://dave-legacy/42/api/core/tigg.js"
};

//⋄ Returns Array (Friend Names)
we.friends = [
    "Tigger", "Quark", "Jubilee",
    "Gilbert", "AppDecals", "Thor", 
    "GrokPASS"
];


} ) 
( TiGG );


//[ manifest ]
TiGG.manifest = {};

// IIFE for Manifest
;( we => {

we.title = TiGG.details.title;

we.schema = [
    "Member", "Type", "Description"
];

we.doc = `
TiGG        | Function | Accessor and Generator Function
raw         | Function | Generate Text Document w/ one GUID per line
bulkTitles  | Function | Generate List of GUIDs (one per entry)
bulk        | Function | Alias for 'bulkTitles' (deprecated)
decalRange  | Function | Generate Range of Decal Definitions w/ tikeys
decalTable  | Function | Generate Table of Decal Definitions w/ tikeys
codePoints  | Function | Generate String w/ List of Decal Code Points
friends     | Array    | List of Friend Names
keyDef      | Array    | Module Key   Definition [ decal, codePoint, tikey, tidate ]
decalDef    | Array    | Module Decal Definition [ decal, tikey, tidate ]
linkDefs    | Object   | Module Link Definitions (resources)
details     | Object   | Module Details (title, version, etc.)
manifest    | Object   | Module Manifest
`;


} ) 
( TiGG.manifest );


console.log( "Loaded tigg.js API Module" );

