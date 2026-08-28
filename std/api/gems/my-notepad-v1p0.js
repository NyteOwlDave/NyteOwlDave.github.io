
/* my-notepad-v1p0.js */


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

MyNotepad = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

MyNotepad.storekey = ( `my-notepad-v1p0.json` );
MyNotepad.notes    = { "Version" : "1.0" };
MyNotepad.latest   = ( `Omega` );

MyNotepad.cdn = {
  "Jefr"       : "http://dave-legacy/jefr/gems"
, "Hysteresis" : "http://dave-legacy/app/hysteresis/api"
, "Morpheus"   : "https://nyteowldave.github.io/std/api/gems"
, "Omega"      : "http://dave-omega/app/morpheus/std/api/gems"
, "Tower"      : "http://dave-tower/app/morpheus/std/api/gems"
, "Legacy"     : "http://dave-legacy/app/morpheus/std/api/gems"
};

MyNotepad.bug_fixes = [ "write", "merge" ];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write | Write Notes Object to Store

MyNotepad.write = function( key, value ) {
    const ops = MyNotepad;
    if ( "number" === typeof key ) {
        key = ( ops.key( key ) );
    }
    MyNotepad.notes[ key ] = str( value );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// merge | Merge Source Object with Notes Object

MyNotepad.merge = function( other ) {
    const ops = MyNotepad;
    const our = ops.notes;
    const m = Object.keys( other );
    m.forEach(
        k => {
            our[ k ] = other[ k ]
        }
    );
    return {
        merged : ops ,
        input  : other
    };
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// read | Read Value for Note Entry

MyNotepad.read = function( key ) {
    const ops = MyNotepad;
    if ( "number" === typeof key ) {
        key = ( ops.key( key ) );
    }
    return str( MyNotepad.notes[ key ] );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// key | Obtain Key for Note Entry (indexed)

MyNotepad.key = function( index ) {
    const ops = MyNotepad;
    const m = ops.dir();
    return ( m[ index ] );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// value | Obtain Value for Note Entry (indexed)

MyNotepad.value = function( index ) {
    const ops = MyNotepad;
    const m = ops.dir();
    const k = m[ index ];
    return ops.notes[ k ];
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// entry | Object Core Record for Note Entry (indexed)

MyNotepad.entry = function( index ) {
    const ops = MyNotepad;
    const m = ops.dir();
    const k = m[ index ];
    const v = ops.notes[ k ];
    return ( [ k, v ] );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// entries | Obtain Core Table of Note Entries

MyNotepad.entries = function( rex ) {
    const ops = MyNotepad;
    const m = ops.dir( rex );
    const v = ops.notes;
    return (
        ( m )
        . map ( k => [ k, v[ k ] ] )
    )
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// indexOf | Obtain Index of Note Entry

MyNotepad.indexOf = function( key ) {
    const ops = MyNotepad;
    const m = ops.dir();
    return ( m.indexOf( key ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// remove | Remove Note Entry

MyNotepad.remove = function( key ) {
    return ( delete MyNotepad.notes[ key ] );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// rename | Rename Note Entry

MyNotepad.rename = function( key_old, key_new ) {
    const ops = MyNotepad;
    ops.notes[ key_new ] = ops.notes[ key_old ];
    return ( delete ops.notes[ key_old ] );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// inspect | Show Notes Table in Console

MyNotepad.inspect = function( rex ) {
    const ops = MyNotepad;
    const c = console;
    c . group( "My Notepad" );
    c . table( ops.entries( rex ) );
    c . groupEnd();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// dir | Obtain Filtered List of Note Key Names

MyNotepad.dir = function( rex ) {
    const ops = MyNotepad;
    const m = Object.keys( ops.notes ).sort();
    return ( ops.filter( m, rex ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// persistable | Verify Browser Store is Available

MyNotepad.persistable = function() {
    return ( null !== stg );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// recoverable | Verify Store Entry Exists

MyNotepad.recoverable = function() {
    const ops = MyNotepad;
    if ( ops.persistable() ) {
        const k = ops.storekey;
        return (
            null !== stg.getItem( k )
        );
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// persist | Write Notes Object to Store

MyNotepad.persist  = function() {
    const ops = MyNotepad;
    const k = ops.storekey;
    const v = jst( ops.notes );
    stg.setItem( k, v );
    con.info( `🔏 Wrote "${k}" to Store` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// recover | Read Notes Object from Store

MyNotepad.recover  = function() {
    const ops = MyNotepad;
    const k = ops.storekey;
    const v = stg.getItem( k );
    if ( null === v ) {
        return ops.persist();
    }
    const man = jso( v );
    if ( man instanceof Object ) {
        ops.notes = ( man );
        con.info( `🔓 Read "${k}" from Store` );
    } else {
        throw new TypeError( `Expected an Object` );
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// members | Obtain Filtered List of Member Names

MyNotepad.members = function( rex ) {
    const ops = MyNotepad;
    const m = Object.keys( ops ).sort();
    return ( ops.filter( m, rex ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// assist | Show Members in Console

MyNotepad.assist = function( rex ) {
    const ops = MyNotepad;
    const c = console;
    c . group( "My Notepad Members" );
    c . table( ops.members( rex ) );
    c . groupEnd();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// summarize | Obtain Member Summary Object

MyNotepad.summarize = function( rex, other ) {
    const ops = MyNotepad;
    let source;
    if ( other instanceof Object ) {
        source = other;
    } else {
        source = ops;
    }
    const details = "?";
    const m = ops.filter(
         Object.keys( source ).sort()
       , rex
    );
    return (
        ( m )
        . map(
            member => ( {
                type : ( typeof source[ member ] )
              , member
              , details
            } )
        )
    );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// stats | Obtain Statistics

MyNotepad.stats = function( o, comment ) {
    o = (
        ( o instanceof Object )
      ? ( o )
      : ( MyNotepad.notes )
    );
    comment = str( comment );
    let chars = 0, average = 0;
    const m = ( Object.keys( o ).sort() );
    const entries = ( m.length );
    if ( entries ) {
        const t = JSON.stringify( o );
        chars   = ( t.length );
        average = ( chars / entries ).toFixed( 1 );
        average = parseFloat( average );
    }
    return {
        chars
      , entries
      , average
      , members : m
      , title   : "My Notepad"
      , type    : "statistics"
      , comment
    };
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// filter | Filter String List Members

MyNotepad.filter = function( list, rex ) {
    if ( rex ) {
        rex = new RegExp( rex );
        return (
            list.filter( k => ( rex.test( k ) ) )
        );
    } else {
        return ( list );
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// clone | Clone Notes Object

MyNotepad.clone = function() {
    const ops  = MyNotepad;
    const m = ops.dir();
    const v = ops.notes;
    const cloned = {};
    ( m )
    .forEach(
        k => ( cloned[ k ] = v[ k ] )
    );
    return ( cloned );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

addEventListener(
  "load"
, function( e ) {
     const ops = MyNotepad;
     if ( ops.persistable() ) {
         addEventListener(
             "beforeunload"
           , (e)=>(ops.persist())
         )
         ops.recover();
     }
  }
);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; ( console.log( `🧙 Hey! MyNotepad.assist() is helpful ...` ) )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

