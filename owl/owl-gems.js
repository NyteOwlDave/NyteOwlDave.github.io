
/*

    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
    |                  [[ Owl 🦉 Gems ]]                  |
    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
    |   https://nyteowldave.github.io/owl/owl-gems.js     |
    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+

*/


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Gems() {
    tips( Gems );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function init_gems( ops ) {

; ops = ( ops || Gems )
;
; ( ops ).entries = {}
;

( ops )
. records = function( o ) {
    o = ( o || ops . entries );
    const m = mem( o );
    const entry =( k )=> {
        return str.opt( m[ k ] );
    };
    return ( m ).map( entry );
};

( ops )
. titles = function( o ) {
    o = ( o || ops . entries );
    const m = mem( o );
    const proper =( k )=> (
        tips . proper( k )
    );
    return ( m ).map( proper );
};

( ops )
. members = function( o ) {
    o = ( o || ops . entries );
    return mem( o );
};

( ops )
. write = function( k, v, o ) {
    const P$ = "/* ( pending ) */";
    o = ( o || ops . entries );
    k = str( k );
    v = str.opt( v, P$ );
    if ( k ) {
        return ( o[ k ] = str( v ) );
    } else {
        expected( "Gem Key" );
    }
};

( ops )
. read = function( k, o ) {
    const P$ = "// ( pending )";
    o = ( o || ops . entries );
    return ( ops . write( k, "", o ) );
};

( ops )
. merge = function( o ) {
    o = ( o || ops . entries );
// ~~~~~~~~~~~~~~~~~~~~~~~~~ [ TODO ] ~~~~~~~~~~~~~~~~~~~~~~~~~~
    const s = "Gems.merge()";
    incomplete( s );
    ops . fatal( s + " is uncomplete" );
};

( ops )
. diff = function( o ) {
    o = ( o || ops . entries );
// ~~~~~~~~~~~~~~~~~~~~~~~~~ [ TODO ] ~~~~~~~~~~~~~~~~~~~~~~~~~~
    const s = "Gems.diff()";
    incomplete( s );
    ops . fatal( s + " is uncomplete" );
};

( ops )
. fatal = function( s ) {
    throw new Error( "FATAL : " + s );
};

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; loaded  ( "owl-gems.js"      )
; reminder( "Call init_gems()" )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

