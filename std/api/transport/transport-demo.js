
/*
    transport-demo.js
*/

;
; NEEDS = [
  "riccola-v1p0.js"
, "ricardo-v1p0.js"
]
;

PrologOps = {};

function prolog() {
;
; con = console
; doc = document
; jsn = JSON
; stg = localStorage
;
; str =( o )=> ( String( o || "" ).trim() )
; arr =( o )=> ( Array.from( o || [] ) )
; unq =( o )=> (   new Set( arr( o ) ) )
;
; elx =( t )=> ( doc.createElement( t ) )
;
; gad =( o )=> ( o instanceof HTMLElement )
; gid =( i )=> ( doc.getElementById( i ) )
; god =( o )=> (
      ( o            )
    ? ( gad( o )     )
    ? ( o            )
    : ( o = gid( o ) )
    ? ( o            )
    : ( null         )
    : ( null         )
)
;
; jso =( t )=> ( jsn.parse( t ) )
; jsx =( o )=> ( jsn.stringify( o ) )
; jst =( o )=> ( jsn.stringify( o, null, 2 ) )
;
; one =( q )=>    ( doc.querySelector   ( q ) )
; all =( q )=> arr( doc.querySelectorAll( q ) )
;
; mem =( o )=> Object.keys( o || window ).sort()
; dir =( o )=> mem( o || localStorage || {} )
; tmp =( o )=> mem( o || sessionStorage || {} )
;
PrologOps = {
  str, arr, unq
, elx
, gad, gid, god
, jso, jsx, jst
, one, all
, mem, dir, tmp
};
}

prolog();

function write_props( ed, props ) {
    ed = god( ed );
    if (! ( props instanceof Object ) ) {
        return ( ed );
    } else if ( null === props ) {
        return ( ed );
    }
    const ok =( k )=> ( "string" === typeof props[ k ] )
    const wr =( k )=> {
        if ( ok( k ) ) {
            ed[ k ] = props[ k ];
        }
    };
    wr( "id"       );
    wr( "title"    );
    wr( "storekey" );
    wr( "address"  );
    wr( "decal"    );
    wr( "icon"     );
    return ( ed );
}

PeachOps = {};

;
( ops => {

const ssg = sessionStorage;

let store = {};

function key( i ) {
    if ( null === ssg ) {
        const m = members();
        return m[ i ];
    } else {
        return ( ssg.key( i ) );
    }
}

function read( k ) {
    if ( null === ssg ) {
        return ( store[ k ] );
    } else {
        return ( ssg.getItem( k ) );
    }
}

function write( k, v ) {
    v = String( v || "" );
    if ( null === ssg ) {
        store[ k ] = ( v );
    } else {
        ssg.setItem( k, v );
    }
}

function remove( k ) {
    if ( null === ssg ) {
        delete store[ k ];
    } else {
        return ( ssg.removeItem( k ) );
    }
}

function members() {
    if ( null === ssg ) {
        return Object.keys( store );
    } else {
        return Object.keys( ssg );
    }
}

function edit_members( ed, props ) {
    ed = god( ed );
    ed . value = members().join( "\n" );
    return write_props( ed, props );
}

function edit_raw( ed, props ) {
    ed = god( ed );
    ed . value = store_json();
    return write_props( ed, props );
}

function store_json() {
    let o;
    if ( null === ssg ) {
        o = store;
    } else {
        o = ssg;
    }
    return JSON.stringify( o, null, 2 );
}

ops.key     = key;
ops.read    = read;
ops.write   = write;
ops.remove  = remove;
ops.members = members;

ops.edit = {
  raw     : edit_raw
, members : edit_members
};

} ) ( PeachOps )
;

function init_demo( event ) {
    try {
        const ed = zach( dir( PeachOps ) );
        ed . title = "Peach Ops";
        ed . id = "sip";
        ed . setAttribute( "locked", "true" );
        ed . run = function() {
            try {
                window.eval( sip.value );
            } catch ( e ) {
                bummer( e );
            }
        };
    } catch ( e ) {
        crashed ( e );
    }
}

addEventListener( "load", init_demo );

function message( s ) {
    const id = "messages";
    let m = gid( id );
    if (! m ) {
        let fe = one( "footer" );
        if (! fe ) {
            fe = elx( "FOOTER" );
            doc.body.appendChild( fe );
        }
        m = fe.appendChild( elx( "DIV" ) );
        m . id = ( id );
    }
    s = str( s );
    const log = message.log;
    log.shift( s );
    log.length = (
        Math.min( log.length, 1000 )
    );
    return (
        messages.textContent = ( s )
    );
}

message.log = [];

function crashed( e ) {
    message.log.push( e.message );
    console . error ( e );
    window  . alert ( e );
}

function claim( e ) {
    e.preventDefault();
    e.stopPropagation();
}

function zach( value, props ) {
    let o;
    const ed = elx( "TEXTAREA" );
    ed . value = zach.prep( value );
    ed . classList . add( "zach" );
    ed . id = nid();
    ed . title = ( ed . id );
    if ( props ) { o = god( props.owner ); }
    o = (
        ( o )
      || get_section(
            "editor_section"
          , "TEXTAREA"
          , "Editors"
        )
    );
    o . appendChild( ed );
    return write_props( ed, props );
}

zach.prep = function( o ) {
    if ( o instanceof Object ) {
        if ( gad( o ) ) {
            return read_value( o );
        }
        if ( Array.isArray( o  ) ) {
            return ( o ).join( "\n" );
        }
        if ( o[ Symbol.iterator ] ) {
            return arr( o ).join( "\n" );
        }
        return jst( o );
    }
    if ( o instanceof Function ) {
        return ( o ).toString();
    }
    return String( o );
};

zach.hints = function( o, title ) {
    let t, ed;
    if ( o instanceof Object ) {
        if ( Array.isArray( o ) ) {
            ed = zach( o );
            t = ( str( title ) || "List Items" );
        } else {
            ed = zach( mem( o ) );
            t = ( str( title ) || "Members" );
        }
    } else if ( "undefined" !== ( typeof o ) ) {
        ed = zach( o );
        t = ( str( title ) || "Primitive" );
    } else {
        ed = zach( mem( zach ) );
        t = ( "Zach Members" );
    }
    ed . title = ( t );
    return ( ed );
};

zach.save = function( ed ) {
    try {
        ed = ( god( ed ) || gid( "sip" ) );
        if ( ed ) {
            const k = ( ed.title || "download.txt" );
            const v = ed.value;
            riccola( k, v );
        } else {
            dangit( "Editor Not Found" );
        }
    } catch ( e ) {
        bummer ( e );
    }
};

zach.open = function() {
    ricardo.edit( sip );
};

function read_value( o ) {
    o = god( o );
    if ( o ) {
        switch ( o.nodeName ) {
        case "INPUT"    :
        case "TEXTAREA" : return ( o.value     );
        case "PRE"      : return ( o.innerText );
        default         : return ( o.innerHTML );
        }
    } else {
        return "";
    }
};

function get_section( id, type, title ) {
    let se = god( id );
    if ( se ) { return ( se ); }
    const add =( t, o )=> ( o.appendChild( elx( t ) ) );
    const o = ( gid( "section_group" ) || doc.body );
    const fe = add( "FIELDSET", o  );
    const le = add( "LEGEND"  , fe );
    se = add( "SECTION", fe );
    le.textContent = ( str( title ) || `${type} Section` );
    type = ( str( type ) || "DIV" );
    const tup = type.toUpperCase();
    const tlo = type.toLowerCase();
    id = ( str( id ) || `${tlo}_section` );
    se.id = ( id );
    se.setAttribute( "elx", tup );
    return ( se );
}

function rnd( k ) {
    k = ( parseFloat( k ) || 1.0 );
    return ( k * Math.random() );
}

function irnd( k ) {
    return Math.floor( rnd( k ) );
}

function now() {
    return ( Date.now() );
}

function nid( sep="-" ) {
    const a = now().toString( 32 );
    const b = irnd( 0xFFFF ).toString( 32 );
    const c = irnd( 0xFFFF ).toString( 32 );
    sep = str( sep );
    while ( sep.includes( " " ) ) {
        sep = sep.replace( " ", "" );
    }
    return ( [ "id", a, b, c ].join( sep ) );
}


;
; doc . title = ( `Transport Demo` )
;
; message( "Ready!" )
;

