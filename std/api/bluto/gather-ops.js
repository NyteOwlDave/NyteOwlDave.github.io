
/*

# gather-ops.js

<pre>

*/

/*
 ~~~~~~~~~~~~~~~~~~~~~~~[ Gather Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function jsom( attrib, rex, dash, ed ) {
    ed = ned( ed );
    attrib = ( str( attrib ) || "group" );
    const artie =( se )=> ( se.getAttribute( attrib ) );
    const q = ( `SCRIPT[${attrib}]` );
    const m = all( q );
    let v;
    if ( rex = str( rex ) ) {
        rex = new RegExp( rex );
        const match =( se )=> ( rex.test( artie( se ) ) );
        v = ( ( m ).filter( match ) );
    } else {
        v = ( m );
    }
    const doc = jsom.compose( v, dash );
    if ( ed === "+" ) { ed = ned( gid( "sop" ) ); }
    if ( ed instanceof HTMLTextAreaElement ) {
        ed . value = ( doc );
        return ( ed );
    }
    return ( doc );
}

jsom.status = function( rex, dash="-", ed ) {
    return jsom( "status", rex, dash, ed );
};

jsom.group = function( rex, dash="-", ed ) {
    return jsom( "group", rex, dash, ed );
};

jsom.lang = function( rex, dash="-", ed ) {
    return jsom( "id", rex, dash, ed );
};

jsom.name = function( rex, dash="-", ed ) {
    return jsom( "name", rex, dash, ed );
};

jsom.lang = function( rex, dash="-", ed ) {
    return jsom( "lang", rex, dash, ed );
};

jsom.compose = function( scripts, dash="-" ) {
    dash = ( str( dash ) || "-" );
    const line = String( dash ).repeat( 62 );
    const sep = [ "\n|", "|\n" ].join( line );
    const lines = (
        ( scripts )
        . map( ( se )=> ( se.innerText ) )
    );
    return lines.join( sep );
}

jsom.acquire = function( url ) {
    try {
       const se = elx( "SCRIPT" );
       const boo = doc.body;
       boo.appendChild( se );
       se.src = ( url );
       return ( se );
    } catch ( e ) {
        console.error( e );
        message( e.message );
    }
};

jsom.acquire_psk = function( p, s, k ) {
    p = ( str( p ) || "http://dave-omega" );
    s = ( str( s ) || "app/bluto/api" );
    k = ( str( k ) || "hello.js" );
    u = [ p, s, k ].join( "/" );
	return acquire( u );
};


;
; console.log( `Loaded "gather-ops.js" API Module` )
;


/*

</pre>

*/


