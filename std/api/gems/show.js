
/* show.js */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function show( o, title ) {
    const s = ( title || "Unknown" );
    if ( Array.isArray( o ) ) {
        const m = arr( o );
        m.unshift( `[ ${s} ]\n` );
        alert( m.join( "\n" ) );
    } else if ( "function" === typeof o ) {
        const t = ( o.name || s );
        const m = mem( o );
        m.unshift( `[ ${t} ]\n` );
        alert( m.join( "\n" ) );
    } else if ( o instanceof Object ) {
        const m = mem( o );
        m.unshift( `[ ${s} ]\n` );
        alert( m.join( "\n" ) );
    } else {
        const t = ( `Type : ${typeof o}` );
        o = String( o ).trim();
        const v = ( `Value : ${o}` );
        const m = [ t, v ];
        m.unshift( `[ ${s} ]\n` );
        alert( m.join( "\n" ) );
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "show.js" Gem` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
