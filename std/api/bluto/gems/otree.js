
/* 
	What  : otree.js
	When  : 2026-SEP-24
	Where : dave-omega
	Which : Bluto
	Why   : Create Object Member Tree
	CAS   : omega-firefox-omega
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function otree( o, node ) {
	node = ( node || {} );
	function empty( n ) {
		return ( Object.keys( n ).length < 1 );
	}
	const match =( k )=> (
		o[ k ] instanceof Object
	);
	const add =( k )=> {
		if ( match( k ) ) {
			const sub = ( node[ k ] = {} );
			otree( o[ k ], sub );
			if ( empty( sub ) ) {
				node[ k ] = "";
			}
		}
	};
	const m = Object.keys( o );
	m.forEach( add );
	return ( node );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

otree.examine = function( o, title ) {
    const c = ( str( title ) || "Member Tree" );
	const w = otree( o || otree );
    const m = "[ ${c} ]\n";
    const t = [ m, jst( w ) ];
    window.alert( t.join( "\n" ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

otree.debug = function( o ) {
	const w = otree( o || otree );
	console . debug( w );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "otree.js" Gem Module` )
;

