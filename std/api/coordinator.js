
/* coordinator.js */


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function block() {
    return Object.keys( block ).sort();
};

block.match = function( s, o, c ) {
    return (
           ( s.startsWith( o ) )
        && ( s.endsWith  ( o ) )
    );
};

block.enclose = function( s, o, c ) {
    return ( [ o, c ].join( s ) );
};

block.expose = function( s ) {
    s = str( s );
    return (
        ( s )
        . slice( 1, -1 )
        . trim()
    );
};

block.encloser = function( o, c ) {
    return {
      opener : str( o )
    , closer : str( c )
    };
};

block.enclosers = {
  "brackets" : block.encloser( "[", "]" )
, "braces"   : block.encloser( "{", "}" )
, "parenths" : block.encloser( "(", ")" )
, "bars"     : block.encloser( "|", "|" )
, "quotes-double" : block.encloser( '"', '"' )
, "quotes-single" : block.encloser( "'", "'" )
, "quotes-back"   : block.encloser( "`", "`" )
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function drive_letter( s ) {
    s = str( s );
    s = s.slice( 0, 1 ).toUpperCase();
    if ( ( s >= "A" ) && ( s <= "Z" ) ) {
        return ( s );
    }
    return ( "*" );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function phone_digit( s ) {
    s = str( s );
    s = s.slice( 0, 1 ).toUpperCase();
    if ( ( s >= "A" ) && ( s <= "Z" ) ) {
        return ( phone_digit.map( s ) );
    }
    if ( ( s >= "0" ) && ( s <= "9" ) ) {
        return ( s );
    }
    return ( "*" );
}

phone_digit.range = [
  [ "#", "#", "#" ]
, [ "*", "*", "*" ]
, [ "0", "0", "0" ]
, [ "1", "1", "1" ]
, [ "2", "A", "C" ]
, [ "3", "D", "F" ]
, [ "4", "G", "I" ]
, [ "5", "J", "L" ]
, [ "6", "M", "O" ]
, [ "7", "P", "S" ]
, [ "8", "T", "V" ]
, [ "9", "X", "Z" ]
];

phone_digit.map = function( s ) {
    const ops = phone_digit;
    const m = ops.range;
    const match =( range )=> {
        const a = ( s >= range[ 1 ] );
        const b = ( s <= range[ 2 ] );
        return ( a && b );
    };
    const v = m.filter( match );
    const w = v[ 0 ];
    if (! w ) { return ( s ); }
    return ( w[ 0 ] );
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function section_key( s ) {
    return ( str( s ) || "((anonymous))" );
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function section_value( o ) {
    if ( o instanceof Object ) {
        return ( o );
    }
    o = str( o );
    if ( block( o, "{", "}" ) ) {
        return window.eval( o );
    }
    if ( block( o, "[", "]" ) ) {
        return window.eval( o );
    }
    if ( block( o, "\"", "\"" ) ) {
        return window.eval( o );
    }
    function block( s, o, c ) {
        return (
               ( s.startsWith( o ) )
            && ( s.endsWith  ( c ) )
        );
    }
    return ( o );
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function store( choice ) {
    const k = ( str( choice ) || "local" );
    return (
          ops.store[ k ]
       || ops.store.session
    );
}

store.session = sessionStorage;
store.local   = localStorage;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

coordinator = {};

;( ( ops ) => {

ops.store = ( store );

ops.state = {
  pages     : {}
, scripts   : {}
, styles    : {}
, contacts  : {}
, notes     : {}
, hints     : {}
, drives    : {}
};

ops.psk =( p, s, k )=> (
    [ p, s, k ].join( "/" )
);

ops.ksp =( k, s, p )=> (
    [ p, s, k ].join( "/" )
);

ops.pass = {
  providers : new Set()
, splitters : new Set()
, keys      : new Set()
};

ops.pass.address = function( index ) {
    const pass = ops.pass;
    const p = ( pass.providers [ index ] );
    const s = ( pass.splitters [ index ] );
    const k = ( pass.keys      [ index ] );
    return ops.psk( p, s, k );
};

ops.pass.ps = function( index ) {
    const pass = ops.pass;
    const p = ( pass.providers [ index ] );
    const s = ( pass.splitters [ index ] );
    return ( [ p, s ].join( "/" ) );
};

ops.pass.pk = function( index ) {
    const pass = ops.pass;
    const p = ( pass.providers [ index ] );
    const k = ( pass.keys      [ index ] );
    return ( [ p, k ].join( "/" ) );
};

ops.pass.sk = function( index ) {
    const pass = ops.pass;
    const s = ( pass.splitters [ index ] );
    const k = ( pass.keys      [ index ] );
    return ( [ s, k ].join( "/" ) );
};

ops.explode = function( o ) {
    const ops = coordinator;
    o = ( o || ops.state );
    const keys     = Object.keys( o );
    const values   = keys.map( ( k ) => ( o[ k ] ) );
    const types    = keys.map( ( k ) => ( typeof o[ k ] ) );
    const comments = keys.map( ( k ) => ( "?" ) );
    return {
        source : ( o )
      , keys , value, types, comments
    }
};

ops.section = function( section ) {
    let source;
    if ( section instanceof Object ) {
        source = ( section );
    } else if ( "string" === typeof section ) {
        source = ( ops.state[ section ] )
    } else {
        console.warn( { section } );
        throw new TypeError(
            "Expected an Object or State Section Name"
        );
    }
    return ( source || {} );
};

ops.section.key = function( s ) {
    return section_key( s );
};

ops.read = function( section, key ) {
    key = ops.section.key( key );
    const source = ops.section( section );
    return ops.parse( source[ key ] );
};

ops.write = function( section, key, value ) {
    key = ops.section.key( key );
    const source = ops.section( section );
    source[ key ] = ops.compose( value );
    return ( source );
};

ops.compose = function( o ) {
    if ( o instanceof Object ) {
        return JSON.stringify( o, null, 2 );
    }
    return String( o );
};

ops.parse = function( o ) {
    return section_value( o );
};

ops.add = function( section, key, value ) {
    key = ops.section.key( key );
    const source = ops.section( section );
    if ( "undefined" === ( typeof source[ key ] ) ) {
        return (
            ops.write( section, key, value )
        );
    } else {
        throw new Error(
            `Key already exists : "${key}"`
        );
    }
};

ops.remove = function( section, key ) {
    key = ops.section.key( key );
    const source = ops.section( section );
    return ( delete section[ key ] );
};

ops.exists = function( section, key ) {
    key = ops.section.key( key );
    const source = ops.section( section );
    if ( "undefined" === ( typeof source[ key ] ) ) {
        return ( false );
    } else {
        return ( true );
    }
};

ops.keys = function( section ) {
    const source = ( ops.section( section ) );
    return Object.keys( source );
};

ops.values = function( section ) {
    const source = ops.section( section );
    const keys = Object.keys( source );
    return keys.map( ( k ) => ops.parse( source[ k ] ) );
};

ops.types = function( section ) {
    const values = ops.values( section );
    return values.map( ( v ) => ( typeof ( v ) ) );
};

ops.entries = function( section ) {
    const source = ops.section( section );
    const keys = Object.keys( source );
    return keys.map(
        ( key ) => (
            factory.entry( key, source )
        )
    );
};

ops.count = function( section ) {
    const m = ops.keys( section );
    return ( m.length );
};

ops.page = function( key , value ) {
    if ( "undefined" !== value ) {
        return ops.write( "page", key, value );
    } else {
        return ops.read( "page", key, value );
    }
};

ops.script = function( key , value ) {
    if ( "undefined" !== value ) {
        return ops.write( "script", key, value );
    } else {
        return ops.read( "script", key, value );
    }
};

ops.style = function( key , value ) {
    if ( "undefined" !== value ) {
        return ops.write( "style", key, value );
    } else {
        return ops.read( "style", key, value );
    }
};

ops.contact = function( key , value ) {
    if ( "undefined" !== value ) {
        return ops.write( "contact", key, value );
    } else {
        return ops.read( "contact", key, value );
    }
};

ops.note = function( key , value ) {
    if ( "undefined" !== value ) {
        return ops.write( "note", key, value );
    } else {
        return ops.read( "note", key, value );
    }
};

ops.hint = function( key , value ) {
    if ( "undefined" !== value ) {
        return ops.write( "hint", key, value );
    } else {
        return ops.read( "hint", key, value );
    }
};

ops.drive = function( key , value ) {
    key = ops.drive.letter( key );
    if ( "undefined" !== value ) {
        return ops.write( "drive", key, value );
    } else {
        return ops.read( "drive", key, value );
    }
};

ops.drive.letter = drive_letter;

} ) ( coordinator );


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function upload( key, source ) {
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function download( key, source ) {
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function save( key, source ) {
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function open( key, source ) {
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function persist( key, value, store ) {
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function recover( key, value, store ) {
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function sendmail( recipient, subject, content, options ) {
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function unpack( key, source ) {
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function merge( keylist, sourcelist ) {
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

factory = {};

;( ( ops ) => {

ops.link = function( title, address, details ) {};

ops.gadget = function( id, source, type ) {};

ops.script = function( id, source ) {};

ops.style = function( id, source ) {};

ops.contact = function( name, address, details ) {};

ops.note = function( subject, content ) {};

ops.hint = function( member, comment ) {};

ops.drive = function( letter, address ) {};

ops.entry = function( key, source ) {
};

factory.schema = {
  link    : [ "Title", "Address", "Details" ]
, gadget  : [ "ID", "Source", "Type" ]
, script  : [ "ID", "Source" ]
, style   : [ "ID", "Source" ]
, contact : [ "Name", "Address", "Details" ]
, note    : [ "Subject", "Content" ]
, hint    : [ "Member", "Comment"  ]
, drive   : [ "Letter", "Address"  ]
, entry   : [ "Key", "Value", "Type", "Comments" ];
};



} ) ( factory );


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


