
/* seeker.js */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function seeker( o, rex ) {
    const m = (
        Object.keys( o || window )
        . filter(
            ( k ) => (! iwm.includes( k ) )
        )
        . sort()
    );
    if ( rex ) {
        rex = new RegExp( rex );
        return ( m ).filter( ( k ) => ( rex.test( k ) ) );
    }
    return ( m );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( "🧙 Hey! Seeker is available ..." )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
