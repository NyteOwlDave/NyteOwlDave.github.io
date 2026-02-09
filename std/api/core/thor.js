
/* 

    Thor Script Module
    thor.js
    Version 2.1.1

*/

// Load a Script Module
var thor = function( url, remove=true ) {
    let S;
    const me = thor;
    const fn = o => ( "function" == typeof o );
    if ( remove && fn( me.removeScript) ) {
        me.removeScript( url );
    }
    const D = document;
    const H = D.head;
    S = D.createElement( 'script' );
    H.appendChild( S );
    S.src = url;
    return S;
};


// Decal Dictionary
thor.decals = [ 
    [ "⚒️" , '[ 9874, 65039 ]' , "Thor API Module" ] 
,   [ "𝑓"   , '[ 119891, 56403 ]' , "Algebraic Function", "U+1D453" ]
];


// Find One Script by its URL
thor.findScript = function( url, remove ) {
    const q = `script[src="${url}"]`;
    const s = document.querySelector( q );
    if ( s && remove ) {
        s.parentElement.removeChild( s );
    }
    return s;
};


// Remove One Script by its URL
thor.removeScript = function( url ) {
    return thor.findScript( url, true );
};


// Get Script Elements within a parent (or all)
thor.getScripts = function( parent ) {
    parent = parent || document;
    let batch = parent.getElementsByTagName( `script` );
    return Array.from( batch );
};


// Get List of Scripts with a Source URL (src)
thor.getScriptURLs = function() {
    const all = Array.from( D.scripts );
    const src = o => o.src;
    const truthy = o => (!! o );
    return all.map( src ).filter( truthy );
};


// Reads the same attribute for all scripts
thor.getScriptAttribs = function( key="url" ) {
    const artie = o => ( o.getAttribute( key ) ) || "⛔";
    const list = thor.getScripts();
    return list.map( artie );
};


// Gets one or more attributes per Script module
thor.getScriptDetails = function( keys=[] ) {
    let script, errors = [], table = [ [ keys ] ];
    function artie( key ) {
        return script.getAttribute( key ) || "(n/a)";
    }
    function row( s ) {
        if ( s instanceof HTMLScriptElement ) {
            script = s;
            const entry = keys.map( artie );
            table.push( entry );
            return;
        }
        const e = new TypeError( s );
        errors.push( e );
    }
    const scripts = thor.getScripts();
    scripts.forEach( row );
    return { table, errors, keys, scripts };
};


// Read Cache Keys (localStorage)
thor.getCacheKeys = function( maxCount = 42 ) {
    maxCount = Math.min( maxCount, 10000 );
    maxCount = Math.max( maxCount, 0 );
    let i = 0, key, keys = [];
    while ( i < maxCount ) {
        key = localStorage.key( i++ );
        if ( key == null ) { break; }
        keys.push( key );
    }
    return keys;
};


// Read Cache Keys and Partial Values (hints)
thor.getCacheHints = function( hintSize = 15, maxCount = 42 ) {
    hintSize = Math.min( hintSize, 78 );
    hintSize = Math.max( hintSize,  8 );
    hintSize = Math.floor( hintSize ) || 15;
    const hints = [];
    function hint( key ) {
        const hint = localStorage.getItem( key )
            .slice( 0, hintSize );
        hints.push( [ key, hint ] );
    }
    const keys = thor.getCacheKeys( maxCount );
    keys.forEach( hint );
    return hints;
};


// Get Cache Metrics
thor.getCacheMetrics = function() {
    let keys = thor.getCacheKeys();
    let keySizeMin = Infinity;
    let keySizeMax = 0;
    let keySizeAvg = 0;
    let keySize = 0;
    let valueSizeMin = Infinity;
    let valueSizeMax = 0;
    let valueSizeAvg = 0;
    let valueSize = 0;
    keys.forEach( k => { 
        let n = k.length;
        keySize += n;
        keySizeMin = Math.min( n, keySizeMin );
        keySizeMax = Math.max( n, keySizeMax );
        let data = localStorage.getItem( k );
        if ( data ) {
            n = data.length;
            valueSize += n;
            valueSizeMin = Math.min( n, valueSizeMin );
            valueSizeMax = Math.max( n, valueSizeMax );            
        }
    } );
    if ( keys.length ) {
        keySizeAvg = keySize / keys.length;
        valueSizeAvg = valueSize / keys.length;
    } else {
        keySizeMin = valueSizeMin = 0;
    }
    return {
        key : {
            list : keys ,
            min : keySizeMin ,
            max : keySizeMax ,
            avg : keySizeAvg
        } ,
        value : {
            min : valueSizeMin ,
            max : valueSizeMax ,
            avg : valueSizeAvg
        } ,
        size : keySize + valueSize
    }
};

// Columns Names for getCacheHints method
thor.getCacheHints.SCHEMA = [ "Key", "Value" ];


// Prepares a Table to Describe Object Members
thor.describe = function( o ) {
    const obj = o => ( o instanceof Object );
    const descriptor = function( k ) { 
        const member = k;
        let   value  = o[ k ];
        const type   = ( typeof value );
        value = value.toString();
        return { member, type, value };
    };
    if ( obj( o ) ) {
        return Object.keys( o ).map( descriptor );
    } else {
        throw new TypeError( "Expected an Object reference" );
    }
};


// Prepares an Object for Editing as Text
thor.mjolnir = function( o ) {
    const obj = o => ( o instanceof Object );
    const kvp = k => ( [ k, thor.hammer( o[ k ] ) ] );
    if ( obj( o ) ) {
        o = Object.keys( o ).map( kvp );
    }
    return this.hammer( o );
};


// Prepares an Object for Editing as Text
thor.hammer = function( source ) {
    // const TX = "string";
    const FN = "function";
    const SI = Symbol.iterator;
    const arr = o => Array.isArray( o );
    const act = o => ( FN === typeof o );
    const obj = o => ( o instanceof Object );
    const evt = o => ( o instanceof Event );
    const err = o => ( o instanceof Error );
    const elm = o => ( o instanceof HTMLElement );
    const edt = o => ( o instanceof HTMLTextAreaElement );
    const pre = o => ( o instanceof HTMLPreElement );
    const inp = o => ( o instanceof HTMLInputElement );
    const json = o => JSON.stringify( o );
    const itr = o => ( obj( o ) && act( o[ SI ] ) );
    if ( act( source ) ) { 
        return source.toString() || "𝑓";
    }
    if ( obj( source ) ) {
        if ( evt( source ) ) {
            return source.type;
        }
        if ( err( source ) ) {
            return String( source );
        }
        if ( elm( source ) ) {
            if ( edt( source ) || inp( source ) )  {
                return source.value
            }
            if ( pre( source ) )  {
                return source.innerText;
            }
            return source.innerHTML;
        }
        if ( arr( source ) ) {
            return json( source );
        }
        if ( itr( source ) ) {
            return json( Array.from( source ) );
        }
        return thor.mjolnir( source );
    }
    return String( source );
};


// Examine Data in the Debug Console
thor.perceive = function( arg, title ) {
    const obj = o => ( o instanceof Object );   // Object Test
    const arr = o => Array.isArray( o );        // Array Test
    const fun = o => thor.describe( o );        // Smart Object Composition
    title = title || "Your Item(s)";
    console.group( title );
    if ( arr( arg ) ) {
        console.table( arg );
    } else if ( obj( arg ) ) {
        console.table( fun( arg ) );
    } else {
        console.log( thor.hammer( arg ) );
    }
    console.groupEnd();
};


// Examine Cache Hints in the Debug Console
thor.listCacheHints =  // For backward compat.
thor.perceiveCacheHints = 
function( hintSize = 15, title = "Cache Hints" ) {
    const headers = thor.getCacheHints.SCHEMA;
    const hints   = thor.getCacheHints( hintSize );
    const table = [ headers, ... hints ];
    title = ( title || "Cache Hints" );
    thor.perceive( table, title );
    table.shift();
    return { title, hintSize, headers, hints };
};


// Resource Keys
thor.keys = {
    aikey : "💢 Pending" ,
    tikey : "cfff2ccf-921e-4197-ba6d-75c156c18d2f" ,
    wbkey : "343292c6-c62c-48c2-9e22-01a9063a048b"
};


// Module Details Record
thor.details = {
    title   : "Thor ~ God of Scripts" ,
    version : "2.1.1" ,
    date    : "2026-FEB-09"
};


// Module Accessor Manifest
thor.manifest = {};


// IIFE for Module Manifest
;( m => {

m.title = thor.details.title;

m.schema = [
    "Member", "Type", "Description"
];
    
m.doc = `
thor                 | Function | Load Script AND Module Accessor
decals               | Array    | Decal Definitions (Arrays)
findScript           | Function | Lookup Script Module by URL
removeScript         | Function | Remove Script Module by URL
getScripts           | Function | Get all Script Modules as Array 
getScriptURLs        | Function | List of Source URLs for Imported Scripts
getScriptAttribs     | Function | List with same Attribute from all Scripts
getScriptDetails     | Function | Table with one or more Attribute(s) per Script module
getCacheKeys         | Function | List of Cache Keys
getCacheHints        | Function | Table with Cache Keys and Partial Values
getCacheHints.SCHEMA | Array    | List of Column Names for Cache Hints
describe             | Function | List of Object Descriptors { member, type, value }
mjolnir              | Function | String Containing JSON for an Object
hammer               | Function | String Containing JSON for any Data Type
perceive             | Function | Show Object Descriptors in Debug Console
perceiveCacheHints   | Function | Show Cache Hints in Debug Console
keys                 | Object   | Module Key Definitions
details              | Object   | Module Details
manifest             | Object   | Module Manifest
`;

} ) ( thor.manifest );


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
    }

} ) ( thor );


console.log( "Loaded thor.js API Module" );

