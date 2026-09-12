
/*

# acquire.js ~ HUD App Gem

> [HUD App Store](https://drive.google.com/drive/folders/1TxnDyyNIPYZ0X-jOlszUdxaDxW9QTXWK)

*/

message =( s )=> ( messages.textContent = ( s ) );
suggest =( s )=> ( footer_input.value   = ( s ) );

acquire = function( url ) {
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

acquire.psk = function( p, s, k ) {
    p = ( str( p ) || "http://dave-omega" );
    s = ( str( s ) || "app/bluto/api" );
    k = ( str( k ) || "hello.js" );
    u = [ p, s, k ].join( "/" );
	return acquire( u );
};

;
; console.log( `Loaded "acquire.js" Gem Module` )
;

