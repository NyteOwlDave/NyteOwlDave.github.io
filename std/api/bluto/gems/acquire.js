
/*

# acquire.js ~ HUD App Gem

> [HUD App Store](https://drive.google.com/drive/folders/1TxnDyyNIPYZ0X-jOlszUdxaDxW9QTXWK)

*/

acquire = function( url ) {
    const ops = acquire;
    try {
        url = str( url );
        if (! url.includes( ":" ) ) {
            return ops.psk( url );
        }
        ops . remove( url );
        const se = elx( "SCRIPT" );
        const boo = doc.body;
        boo . appendChild( se );
        se . src = ( url );
        return ( se );
    } catch ( e ) {
        console.error( e );
        message( e.message );
    }
};

; ( ( ops ) => {

const wnd = window;

ops . locate = function( url ) {
    const m = arr( doc.scripts );
    const match =( se )=> ( se.src === url );
    const v = m.filter( match );
    return ( v[ 0 ] );
};

ops . remove = function( url ) {
    const se = ops.locate( url );
    if ( se ) { re.remove(); }
    return ( se );
};

ops . psk = function( p, s, k ) {
    try {
        p = str( p );
        s = str( s );
        k = str( k );
        if (! ( p && s ) ) {
            k = ( p );
            s = ( "app/bluto/api" );
            p = ( "http://dave-omega" );
        }
        k = ( k || "hello.js" );
        u = [ p, s, k ].join( "/" );
        return ops( u );
    } catch ( e ) {
        console.error( e );
        message( e.message );
    }
};

if ( "undefined" === typeof wnd.message ) {
    wnd.message =( s )=> ( messages.textContent = ( s ) );
}

if ( "undefined" === typeof wnd.suggest ) {
    wnd.suggest =( s )=> ( footer_input.value   = ( s ) );
}

} ) ( acquire );

;
; console.log( `Loaded "acquire.js" Gem Module` )
;

