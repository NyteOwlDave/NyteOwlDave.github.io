
/* my-notepad-v1p0.js */

MyNotepad = {};

MyNotepad.storekey = ( `my-notepad-v1p0.json` );
MyNotepad.notes    = { "Version" : "1.0" };
MyNotepad.latest   = ( `Jefr` );
MyNotepad.cdn = {
  "Jefr"       : "http://dave-legacy/jefr/gems"
, "Hysteresis" : "http://dave-legacy/app/hysteresis/api"
};

MyNotepad.write = function( key, value ) {
    if ( "number" === typeof key ) {
        key = ( ops.key( key ) );
    }
    MyNotepad.notes[ key ] = str( value );
};

MyNotepad.merge = function( other ) {
    const ops = MyNotepad;
    const our = ops.notes;
    const m = Object.keys( other );
    m.forEach(
        k => {
            our[ k ] = other[ k ]
        }
    );
};

MyNotepad.read = function( key ) {
    const ops = MyNotepad;
    if ( "number" === typeof key ) {
        key = ( ops.key( key ) );
    }
    return str( MyNotepad.notes[ key ] );
};

MyNotepad.key = function( index ) {
    const ops = MyNotepad;
    const m = ops.dir();
    return ( m[ index ] );
};

MyNotepad.value = function( index ) {
    const ops = MyNotepad;
    const m = ops.dir();
    const k = m[ index ];
    return ops.notes[ k ];
};

MyNotepad.entry = function( index ) {
    const ops = MyNotepad;
    const m = ops.dir();
    const k = m[ index ];
    const v = ops.notes[ k ];
    return ( [ k, v ] );
};

MyNotepad.entries = function( rex ) {
    const ops = MyNotepad;
    const m = ops.dir( rex );
    const v = ops.notes;
    return (
        ( m )
        . map ( k => [ k, v[ k ] ] )
    )
};

MyNotepad.indexOf = function( key ) {
    const ops = MyNotepad;
    const m = ops.dir();
    return ( m.indexOf( key ) );
};

MyNotepad.remove = function( key ) {
    return ( delete MyNotepad.notes[ key ] );
};

MyNotepad.rename = function( key_old, key_new ) {
    const ops = MyNotepad;
    ops.notes[ key_new ] = ops.notes[ key_old ];
    return ( delete ops.notes[ key_old ] );
};

MyNotepad.inspect = function( rex ) {
    const ops = MyNotepad;
    const c = console;
    c . group( "My Notepad" );
    c . table( ops.entries( rex ) );
    c . groupEnd();
};

MyNotepad.dir = function( rex ) {
    const ops = MyNotepad;
    const m = Object.keys( ops.notes ).sort();
    return ( ops.filter( m, rex ) );
};

MyNotepad.persistable = function() {
    return ( null !== stg );
};

MyNotepad.recoverable = function() {
    const ops = MyNotepad;
    if ( ops.persistable() ) {
        const k = ops.storekey;
        return (
            null !== stg.getItem( k )
        );
    }
};

MyNotepad.persist  = function() {
    const ops = MyNotepad;
    const k = ops.storekey;
    const v = jst( ops.notes );
    stg.setItem( k, v );
    con.info( `🔏 Wrote "${k}" to Store` );
};

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

MyNotepad.members = function( rex ) {
    const ops = MyNotepad;
    const m = Object.keys( ops ).sort();
    return ( ops.filter( m, rex ) );
};

MyNotepad.assist = function( rex ) {
    const ops = MyNotepad;
    const c = console;
    c . group( "My Notepad Members" );
    c . table( ops.members( rex ) );
    c . groupEnd();
};

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

;
; ( console.log( `🧙 Hey! MyNotepad.assist() is helpful ...` ) )
;

