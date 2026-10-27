
/*

	add-hud-button.js

	- [x] Omega Store Downloads
	- [x] Jarvis Gems Source
	- [x] Jarvis Gems Note
	- [x] Morpheus Gems
	- [x] Web Demo Gems
	- [x] HUD App Peaches
	- [x] Express Lane

*/


function add_hud_button() {
    const id = "hud-button";
	let be = gid( id );
    if (! be ) {
    	be = elx( "SPAN" );
		be . id = ( id );
	    footer . appendChild( be );
    };
    be . classList . add( "dot" );
    be . textContent = "◩";
    be . onclick = function( e ) { hud(); };
    if ( "function" === typeof suggest ) {
        suggest( "hud.recover.hash()" );
    } else {		
		if ( "object" === typeof footer_input ) {
			footer_input . value = ( 
				"hud.recover.hash()" 
			);
		}
	}
    return ( be );
}

;
; console.log( `Loaded "add-hud-button.js" Gem Module` )
;

