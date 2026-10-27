
PEACH_KEY = ( `debbie-db-sandbox.js` );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
;
; today =()=> ( new Date() ).toLocaleString()
; when  =()=> say( today() )
; whut  =()=> say( "( ? )" )
;
; tips =( o )=> alert( qlc( mem( o ) ) )
;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
;
; w = ( `\n// ${today()}\n` )
; k = PEACH_KEY ; v = sce.value.trimRight() + ( w )
; s = ( localStorage || sessionStorage )
; s . setItem( k, v )
; say( `Saved Peach ${w}` )
;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

peach = function() {
	let s, k, v;
	k = PEACH_KEY; 
	v = sce.value;
	s = ( localStorage || sessionStorage );
	v = s . getItem( k );
	if ( null !== v ) {
		peach . loaded = ( v );
	} else {
		peach . loaded = ( sce . value );
	}
 	peach . when = when();
	say( `SEE : "peach.loaded"` );
};

jarvis . show = function( key ) {
	let m, v;
	const k = str( key );
	if ( k ) {
		m = mem( jarvis[ k ] );
	} else {
		m = mem( jarvis );
	}
	v = qlc( m );
	alert( v );
};

revert = function() {
	peach();
	sce . memo = peach.loaded;
	hud . memo.swap();
	hud . show();
	sce . focus();
};

revert.test = function() {
	peach();
	alert( peach.loaded );
};

;
; ( 0 ) && peach()
; ( 0 ) && revert()
; ( 0 ) && revert.test()
; ( 0 ) && whut()
; ( 0 ) && when()
; ( 0 ) && alert( today() )
;

//~~~~~~~~~~~~~~~~~~~~~~~~~
// Persist History
//~~~~~~~~~~~~~~~~~~~~~~~~~
// 10/26/2026, 10:02:02 PM
// 10/26/2026, 10:03:34 PM
// 10/26/2026, 10:16:00 PM
// 10/26/2026, 10:23:55 PM
// 10/26/2026, 10:24:14 PM


