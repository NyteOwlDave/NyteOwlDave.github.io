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
; cls =()=> ( console.clear() )
;
; nop =( o )=> ( o )
; qlc =( o, sep="\n" )=> ( o.join( sep ) )
; qlp =( o, sep="\n" )=> {
    o = o.split( sep ) . map( str );
    return ( o . filter( nop ) );
}
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

let o, s, i;

o = elx( "HEADER" );
b . appendChild( o );
o . id = ( "messages" );

o = elx( "FOOTER" );
b . appendChild( o );
o . id = ( "footer" );

o = elx( "INPUT" );
footer . appendChild( o );
o . id = ( "footer_input" );
s = o . style;
s . width = "calc( 100vw - 20ch )";

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

owl.visit = function( u ) {
    if ( null === localStorage ) {
        const a = d.createElement( "A" );
        a . href = ( u );
        a . click();
    } else {
        w.open( u, u );
    }
};

owl.build = function() {
    const p = "https://github.com";
    const s = "NyteOwlDave/NyteOwlDave.github.io";
    const k = "actions";
    const u = psk( p, s, k );
    owl.visit( u );
};

owl.button = function( decal, action, hint ) {
    const be = elx( "BUTTON" );
    be.classList.add( "dot" );
    be.action = action;
    hint = str( hint );
    if ( hint ) {
        be . title = ( hint );
    }
    be.textContent = str( decal );
    be.onclick = function( event ) {
        const btn = event.target;
        const action = btn.action;
        try {
            if ( "function" === typeof action ) {
                action();
            } else {
                w.eval( action );
            }
        } catch ( e ) {
            bummer( e );
        }
    };
    footer.appendChild( be );
    return ( be );
};

} )()
;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function visit( u ) {
    if ( null === localStorage ) {
        const a = elx( "A" );
        a . href = ( u );
        a .click();
    } else {
        wop( u );
    }
}

function wop( u ) {
    return window.open( u, u );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loading "owl.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

