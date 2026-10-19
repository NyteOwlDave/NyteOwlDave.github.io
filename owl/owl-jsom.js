/*
	owl-jsom.js
	owl-jsom.css

	EXAMPLE : sqlite-jsom-001.md
    WHERE   : Tower SQLITE downloads
*/

jsom = {};

;
( ( ops )=> {

const SVR = "https://nyteowldave.github.io";

doc = ( document );
boo = ( doc . body );

elx =( t )=> doc.createElement( t );
ace =( t, p )=> p.appendChild( elx( t ) );

ksp =( k, s, p )=> ( [ p, s, k ] .join( "/" ) );

let se;

se = ace( "SCRIPT", boo );
se . src = ksp(
  "owl-prolog.js"
, "owl"
, SVR
);

se = ace( "SCRIPT", boo );
se . src = ksp(
  "visit-ultra.js"
, "owl"
, "https://nyteowldave.github.io"
);

} )
( jsom )
;

function bummer( e ) {
	console . error ( e );
	window  . alert ( e );
}

function perform( event ) {
	try {
		const sender = event.target;
		window.eval( sender.value );
	} catch ( e ) {
		bummer( e )
	}
}

