
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
; ( str ).opt =( s, t="?" ) => ( str( s ) || str( t ) || "?" )
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
    const ops = ( tips );
    const s = ops . identify( o );
    const t = ( str . opt( title , s ) );
    const m = mem( o );
    m . unshift( tips . bracket( t ) + LF$ );
    window . alert( m . join( LF$ ) );
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
    if ( o instanceof Object ) {
        return (
             str( o . title    )
          || str( o . name     )
          || str( o . id       )
          || str( o . nodeName )
        );
    }
    expected( "Object" );
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

function incomplete( s ) {
    s = str.opt( s );
    report( "Incomplete : " + s );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function initialized( s ) {
    s = ( str( s ) || "Component" );
    console . info( "Initialized : " + s );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function OwlBasics() {
    tips( OwlBasics );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function init_basics( ops ) {

;
; ops = ( ops || OwlBasics )
;

; ( ops )
. pass = {
  p : "https://nyteowldave.github.io"
, s : "owl"
, k : "owl-basics.js"
}
;

; ( ops ) . str_opt     = ( str . opt   )
; ( ops ) . store       = ( store       )
; ( ops ) . tips        = ( tips        )
; ( ops ) . report      = ( report      )
; ( ops ) . bummer      = ( bummer      )
; ( ops ) . scoobie     = ( scoobie     )
; ( ops ) . expected    = ( expected    )
; ( ops ) . incomplete  = ( incomplete  )
; ( ops ) . initialized = ( initialized )

initialized( "Owl Basics" )

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; loaded  ( "owl-basics.js"      )
; reminder( "Call init_basics()" )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

