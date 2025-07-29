_o_ = {};
_o_.TIDATE = "2025-JUL-29";
_o_.TIKEY = "ca1645a6-f1e2-4470-9d2f-763abaac4e22";
_o_.WBKEY = "pending";
_o_.FILENAME  = "LambertW-Explorations.js";
_o_.stash  = function( key=_o_.TIKEY ) {
	save( key, sop.innerText );
	alert( "🔏 Stashed As:\n\n🔑 " + key );
	return sop.innerText;
}
_o_.revise = function( key=_o_.TIKEY ) {
	return load( key );
}
_o_.download = function( filename=_o_.FILENAME ) {
   	rico( sop.innerText, filename );
	alert( "⏬ Downloaded As:\n\n📄 " + filename );
	return sop.innerText;
}

/*

	This has some cool stuff related to understanding how the
	LambertW function does what it does.

	We can create our own LambertW that ONLY works with integers.

	In other words, we can solve X^x = P^q for X, given some 
	integers P and q, assuming there is an integer solution for X.

	NOTE: 

		I use lowercase to denote exponents and uppercase for bases
		in these comments. Not in the actual code, though.

    EXAMPLE:

		X^x = 2^24 yields x = 8	.

	PROOF:

		2^24 = 8^8

    The trick here is to factor out (or in) one base unit per step
	and adjust the exponent accordingly. Then check the new
	exponential expression to see if it equals the original.

    Steps can be indexed, so that any step can be checked for
	a possible solution.

	the _zap() function does the real magic for checking a step.

*/


function _zoom( action, payload ) {
	sop.requestFullscreen();
	sop.focus();
	if ( "function" === typeof action ) {
		return han( action, payload );
	}
	return String( action );
}

function _zap( i=1, b=2, x=24 ) {
	let Io = i; // Index
	let Bo = b; // Base      (P from P^q)
	let Xo = x; // Exponent  (q from P^q)
	let To = pow( Bo, Xo );
	let No = pow( Bo, Io );
	let Eo = logn( To, No );
	return { Io, Bo, Xo, To, No, Eo };
}
// t = _zap( 3 );
// Zo = { "Index I" : t.Io, "Base N = 2ⁱ" : t.No, "Exponent E = logₙ(2²⁴)" : t.Eo };

function calc( B = 2, X = 24 ) {
	const results = [ 
		[ ' I ' , ' N ' , ' E ' , ' B ' , ' X ' ], 
        [ '---' , '---' , '---' , '---' , '---' ]
	];
	for( I = 1; I < X; I += 1 ) {
		t = _zap( I );
		results.push( [ t.Io, t.No, t.Eo, t.Bo, t.Xo ] );
	}
    function row( arr ) {
		return [ "| " , arr.join( " | " ) , " |" ].join( "" );
    }
	return results.map( row ).join( "\n" );
}

// _zoom( calc );
// sip.value
// TiGG()
// _o_.download() 

sop.innerText = sip.value;
_o_.stash();
// sop.innerText

// _o_.revise();
