
/*

    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
    |                 [[ Owl 🦉 Basics ]]                 |
    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
    |   https://nyteowldave.github.io/owl/owl-basics.js   |
    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+

*/


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; LF$ = "\n"
; FF$ = "\n\n"
; RT$ = ( null === localStorage )
;
; STR$ =( o )=> String( o || "" ).trim()
;
; str = ( window.str ? str : STR$ )
; str.opt =( s, t="?" ) => ( str( s ) || str( t ) || "?" )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function store() {
    return (
        ( RT$ )
      ? ( sessionStorage )
      : ( localStorage   )
    );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function tips( o, title ) {
    try {
        const ops = ( tips );
        const s = ops . identify( o );
        const t = ( str . opt( title , s ) );
        const m = mem( o );
        m . unshift( tips . bracket( t ) + LF$ );
        window . alert( m . join( LF$ ) );
    } catch ( e ) {
        console . error( e );
        window  . alert( e );
    }
}

( tips )
. bracket = function( title ) {
    const t = str( title );
    let s;
    if ( t ) {
        s = ( t + " Members" );
    } else {
        s = "Members";
    }
    return ( `〖 ${s} 〗` );
};

( tips )
. identify = function( o ) {
    const _pn =( s )=> ( tips . proper( s ) );
    if ( o instanceof Object ) {
        return (
             _pn( o . title    )
          || _pn( o . name     )
          || _pn( o . id       )
          || _pn( o . nodeName )
        );
    }
    expected( "Object" );
};

( tips )
. proper = function( s ) {
    s = str( s );
    if ( s ) {
        const pfx = ( s ).slice( 0, 1 ).toUpperCase();
        const sfx = ( s ).slice(    1 ).toLowerCase();
        return ( pfx + sfx );
    }
    return ( s );
};

( tips )
. kebob = function( s ) {
    s = str( s );
    if ( s ) {
        const p = (
            ( s )
            . split( " " )
            . map( str )
            . filter( nop )
        );
        s = ( p ).join( "-" );
    }
    return ( s );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function report( s ) {
    let _f;
    const _w  =( window );
    const _fn =( k )=> ( ( _w[ k ] ) instanceof Function );
    s = str . opt( s );
    if ( _f = _fn( "say" ) ) {
        say( s ); return;
    }
    if ( _f = _fn( "blurt" ) ) {
        blurt( s ); return;
    }
    if ( _f = _fn( "message" ) ) {
        message( s ); return;
    }
    console . log( s );
    if ( report . silent ) { return; }
    window . alert( s );
}

;
; ( report ) . silent = (! RT$ )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function bummer( e ) {
    console . error( e );
    window  . alert( e );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function scoobie( a, b, c, d ) {
    try {
        return a( b, c );
    } catch ( e ) {
        if ( d instanceof Function ) {
            const o = {
                error : e
              , args: { a, b, c }
            };
            return d( o );
        };
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function expected( s ) {
    s = str.opt( s );
    throw new Error( "Expected : " + s );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function loaded( s ) {
    s = ( str( s ) );
    if ( s ) {
        console . info( "Loaded Component : " + s );
    } else {
        console . info( "Loaded Component : ( ? )" );
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function initialized( s ) {
    s = ( str( s ) || "Component" );
    console . info( "Initialized : " + s );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function incomplete( s ) {
    s = str.opt( s );
    report( "Incomplete : " + s );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function reminder( s ) {
    s = str.opt( s );
    console . info( "REMINDER : " + s );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function OwlBasics() {
    tips( OwlBasics );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function init_basics( ops ) {

;
; ops = ( ops || OwlBasics )
;

const _pass = {
  p : "https://nyteowldave.github.io"
, s : "owl"
, k : "owl-basics.js"
};

( _pass )
. url = function() {
    const o = ( _pass );
    const p = ( o . p );
    const s = ( o . s );
    const k = ( o . k );
    return ( [ p, s, k ] . join( "/" ) );
};

; ( ops ) . pass        = ( _pass       )
; ( ops ) . str_opt     = ( str.opt     )
; ( ops ) . store       = ( store       )
; ( ops ) . tips        = ( tips        )
; ( ops ) . report      = ( report      )
; ( ops ) . loaded      = ( loaded      )
; ( ops ) . reminder    = ( reminder    )
; ( ops ) . incomplete  = ( incomplete  )
; ( ops ) . initialized = ( initialized )
; ( ops ) . scoobie     = ( scoobie     )
; ( ops ) . expected    = ( expected    )
; ( ops ) . bummer      = ( bummer      )

initialized( "Owl Basics" )

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; loaded  ( "owl-basics.js"      )
; reminder( "Call init_basics()" )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

