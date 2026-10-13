/*
	owl.js

	https://nyteowldave.github.io/owl/owl.js
	https://nyteowldave.github.io/owl/owl-prolog.js
	https://nyteowldave.github.io/owl/owl.css
	https://nyteowldave.github.io/owl/test.html
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; doc = ( document )
;
; elx =( t )=> ( doc . createElement( t ) )
; str =( o )=> String( o || "" ).trim()
;
; psk =( p, s, k )=> ( [ p, s, k ] . join( "/" ) )
; ksp =( k, s, p )=> psk( p, s, k )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const owl = {};

owl.pass = {
  p : "https://nyteowldave.github.io"
, s : "owl"
, k : "owl.js"
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function thor( url ) {
	const d = document;
	const b = d.body;
	const s = d.createElement( "SCRIPT" );
	b . appendChild( s );
	console.info( "Aquire:", url );
	s . src = ( url );
	return ( s );
}

thor.ksp = function( k, s, p ) {
	const pass = ( owl . pass );
	k = str( k );
	if (! k ) {
		throw new Error( "Missing Module URL Key" );
	}
	s = ( str( s ) || pass.s );
	p = ( str( p ) || pass.p );
	const u = psk( p, s, k );
	return thor( u );
};

thor.ksp( "owl-prolog.js" );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
( ()=> {

const w = window;
const d = document;
const b = d.body;

let o, s;

o = elx( "HEADER" );
b . appendChild( o );
o . id = ( "messages" );

o = elx( "FOOTER" );
b . appendChild( o );
o . id = ( "footer" );

o = elx( "INPUT" );
b . appendChild( o );
o . id = ( "footer_input" );
s = o . style;
s . width = "calc( 100vw - 160px )";

o . onchange = function( event ) {
	try {
		w.eval( event . target . value );
	} catch( e ) {
		bummer( e );
	}
};

w.say =( s )=> ( messages.textContent =( s ) );

w.bummer =( e )=> {
	console . error( e );
	say( e . message );
};

} )()
;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loading "owl.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

