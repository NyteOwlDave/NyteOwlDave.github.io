/*
	cas-alpha.js
	Owl System API
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; _t_ = "cas-alpha.js"
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
 *	Supports Original CAS Concept
 *	SEE : cas-v1p0.js for improvements
 */
function cas() {
	const client = cas . client();
	const server = cas . server();
	const agent  = cas . agent();
	return { client, agent, server }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . record = function( o ) {
	const _s =( o )=> ( str( o ) || "any" );
	o = ( o || cas() );
	const client = _s( o . client );
	const server = _s( o . server );
	const agent  = _s( o . agent  );
	return [ client, agent, server ];
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . key = function( o, sep = "_" ) {
	o = cas . record( o );
	return [
	  o.client
	, o.agent
	, o.server
	] . join( str( sep ) || "_" );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . read   = function( k ) {
	const root = doc.firstElementChild;
	const  cs  = getComputedStyle( root );
	return cs  . getPropertyValue( k );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . client = function() {
	const _s =( o )=> ( str( o ) || "any" );
	return _s( cas . read( "--client" ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . server = function() {
	const _s =( o )=> ( str( o ) || "any" );
	return _s( cas . read( "--server" ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// This is a VERY Naive Algorithm
// It FAILS for most Agents
cas . agent  = function() {
	const _s =( o )=> ( str( o ) || "any" );
	const a = navigator.userAgent.toLowerCase();
	const o = cas . agent . map ;
	const m = mem( o );
	while ( m . length > 0 ) {
		const k = m . pop();
		const v = o[ k ];
		if ( a . includes( v ) ) {
			return ( k );
		}
	}
	return _s( "" );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . prop . names = [
  "--client"
, "--agent"
, "--server"
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . record . schema = [
  "Client"
, "Agent"
, "Server"
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . agent . map = {
  "firefox"  : "firefox"
, "chrome"   : "chrome"
, "chromium" : "chromium"
, "brave"    : "brave"
, "edge"     : "edge"
, "avg"      : "avg"
, "opera"    : "opera"
, "operagx"  : "opera gx"
, "retext"   : "retext"
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cas . tips = function() {
	alert( qlc( mem( cas ) ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "${_t_}" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

