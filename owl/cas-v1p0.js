
/*
	cas-v1p0.js
	Owl System for Morpheus
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

_t_ = "cas-v1p0.js";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CAS = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Manifest
 */
CAS . manifest = {
   version  : "1.0"
,  revision : "0.0"
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Store Key for Persistent Client Name
 */
CAS . storekeys = {
  client : "__cas_manual_client_name__"
, agent  : "__cas_manual_agent_name__"
, server : "__cas_manual_server_name__"
, full   : "__cas_manual_full_name__"
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Choose Store based on Availability
 */
CAS . store = function() {
	const o = localStorage;
	if ( null === o ) {
		return sessionStorage;
	};
	return ( o );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Composes C.A.S Signature
 */
CAS . compose = function(
	  client
	, agent
	, server
	, sep = '_'
) {
	const _s =( t )=> ( String( t || "" ).trim() || "any" );
	const _f =( t )=> CAS .filterHost( t );
	return [
	  _f( client )
	, _s( agent  )
	, _f( server )
	] . join( sep );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Clean up Client or Server Name
 */
CAS . filterHost = function( s ) {
	if ( "string" !== typeof s ) {
		return "any";
	}
	s = (
		( s )
		. trim()
		. toLowerCase()
		. replace( /[^a-zA-Z0-9.-]/g, '_' )
	);
	return ( s || "any" );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Determine Client Host Name
 */
CAS . client = function() {
	const _s =( o )=> String( o || "" ).trim();
	let v = _s( window . DEV_MACHINE_NAME );
	if ( v ) {
		console . debug(
			`Detected "DEV_MACHINE_NAME" Override`
		);
	} else {
		v = CAS . client . recover();
	}
	if (! v ) {
		console . warn( "CAS Client can't be determined" );
		console . warn( `Defaulting to "any"` );
	}
	return CAS . filterHost( v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Write Client Name to Data Store
 */
CAS . client . persist = function( client ) {
	const str =( t )=> String( t || "" ).trim();
	const store = CAS . store();
	const k = ( CAS . storekeys . client );
    const v = str( client );
    store  . setItem( k, v );
    window . DEV_MACHINE_NAME = ( v );
	CAS . say( `Stored Client Name : ${v}` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Read Client Name from Data Store
 */
CAS . client . recover = function() {
	const str =( t )=> String( t || "" ).trim();
	const store = CAS . store();
	const k = CAS . storekeys . client;
	const v = str( store . getItem( k ) );
	if ( v ) {
		console . debug( "Detected Stored CAS Client" );
	}
	return ( v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Prompt for Client Name
 */
CAS . client . override = function() {
	const str =( t )=> String( t || "" ).trim();
	let s = CAS . client();
	const t = "Client Host Name?";
	s = str( window . prompt( t, s ) );
	if (! s ) { return; }
	CAS . client . persist( s );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Determine Server Host Name
 */
CAS . server = function() {
	let v = CAS . server . recover();
	if (! v ) {
		console . debug( "Using Server Location's Host Name" );
		v = ( window . location . host );
	}
	return ( CAS . filterHost( v ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Read Server Name from Data Store
 */
CAS . server . recover = function() {
	const str =( t )=> String( t || "" ).trim();
	const store = CAS . store();
	const k = CAS . storekeys . server;
	const v = str( store . getItem( k ) );
	if ( v ) {
		console . debug( "Detected Stored CAS Server" );
	}
	return ( v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Write Server Name to Data Store
 */
CAS . server . persist = function( server ) {
	const str =( t )=> String( t || "" ).trim();
	const store = CAS . store();
	const k = CAS . storekeys . server;
	const v = ( str( server ) || CAS . server() );
	store . setItem( k, v );
	CAS . say( `Stored Server Name : ${v}` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Prompt for Server Name
 */
CAS . server . override = function() {
	const str =( t )=> String( t || "" ).trim();
	let s = CAS . server();
	const t = "Server Host Name?";
	s = str( window . prompt( t, s ) );
	if (! s ) { return; }
	CAS . server . persist( s );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Determine User Agent Name
 */
CAS . agent = function() {

	// Override?
	const sval  = CAS . agent . recover();
	if ( sval ) {
		return CAS . filterHost( sval );
	}
	const nav = navigator;
	const ua  = nav . userAgent;
	const uaLower = ua . toLowerCase();

    // 1. High-accuracy extraction using modern Client Hints
	// ( Chromium Ecosystem )
    if ( nav . userAgentData &&
     	 nav . userAgentData . brands ) {
		const brands = (
			( nav )
			. userAgentData
			. brands
			. map( b => b.brand )
		);
		const _t =( s )=> brands.includes( s );
      	// Explicit Brand arrays for your Chromium subsets
      	if ( _t( "Opera GX"           ) ) { return "operagx";  }
      	if ( _t( "Opera"              ) ) { return "opera";    }
      	if ( _t( "AVG Secure Browser" ) ) { return "avg";      }
      	if ( _t( "Google Chrome"      ) ) { return "chrome";   }
      	if ( _t( "Microsoft Edge"     ) ) { return "edge";     }
      	if ( _t( "Brave"              ) ) { return "brave";    }
      	if ( _t( "Chromium"           ) ) { return "chromium"; }
	}

    // 2. Legacy User Agent Sniffing Matrix
	// ( Fallbacks for strict blocks/older engines )

	const _u =( s )=> ua.includes( s );
	const _l =( s )=> uaLower.includes( s );

    // Check for AVG Secure Browser token explicitly
    if ( _u( "AVG/" ) ) { return "avg"; }

    // Differentiate Opera variants
    if ( _u( "OPX/" ) ) { return "operagx"; }
    if ( _u( "OPR/" ) ) {
      	if ( _u( "Edition std-1" ) ) { return "operagx"; }
      	if ( _u( "GX"            ) ) { return "operagx"; }
      	return ( "opera" );
    }

    // Standard Non-Chromium & Stock Core Browsers
    if ( _l( "firefox/" ) ) { return "firefox";	}
    if ( _l( "fxios/"   ) ) { return "firefox";  }
    if ( _u( "Edge/"    ) ) { return "edge";     }
    if ( _u( "Edg/"     ) ) { return "edge";     }

    // True native Apple Safari
    if ( _l( "safari/"   ) &&
	   ! _l( "chrome/"   ) &&
    	   ! _l( "chromium/" ) ) {
      	return ( "safari" );
    }

    // Generic fallback if it's an unbranded raw Chromium build that masked hints
    if ( _l( 'chrome/'  ) ) { return "chromium"; }
    if ( _l( 'chromium/') ) { return "chromium"; }

    return ( "any" );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Read User Agent Name from Data Store
 */
CAS . agent . recover = function() {
	const str =( t )=> String( t || "" ).trim();
	const store = CAS . store();
	const k = CAS . storekeys . agent;
	const v = str(  store . getItem( k ) );
	if ( v ) {
		console . debug( "Detected Stored CAS Agent" );
	}
	return ( v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Write User Agent Name to Data Store
 */
CAS . agent . persist = function( agent ) {
	const str =( t )=> String( t || "" ).trim();
	const store = CAS . store();
	const k = CAS . storekeys . agent;
	const v = ( str( agent ) || CAS . agent() );
	store . setItem( k, v );
	CAS . say( `Stored Agent Name : ${v}` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Prompt to Override User Agent Name
 */
CAS . agent . override = function( agent ) {
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * List of Supported User Agent Names
 */
CAS . agent . names = [
  "firefox"
, "chrome"
, "chromium"
, "brave"
, "edge"
, "avg"
, "opera"
, "operagx"
, "retext"
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Creates an Entry Instance ( core entry )
 */
CAS . entry = function() {
	const client = CAS . client();
	const server = CAS . server();
	const agent  = CAS . agent();
	return { client, agent, server };
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Creates a Record Instance ( core list )
 */
CAS . record = function() {
	const o = CAS . entry();
	return [ o.client, o.agent, o.server ];
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * List of Record Field Names
 */
CAS . record . schema = [
	"Client", "Agent", "Server"
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Read Properties and Compose Full CAS Signature
 */
CAS . key = function( sep = "_" ) {
	const o = CAS . entry();
	return CAS . compose(
		o.client, o.agent, o.server, sep
	);
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Displays a Message
 */
CAS . say = function( s ) {
	if ( "function" === typeof say ) {
		return say( s );
	}
	if ( "function" === typeof blurt ) {
		return blurt( s );
	}
	if ( "function" === typeof message ) {
		return message( s );
	}
	if ( "function" === typeof bubble ) {
		return bubble( s );
	}
	if ( "undefined" !== typeof messages ) {
		if ( messages instanceof HTMLElement ) {
			return (
				messages . textContent = ( s )
			);
		}
	}
	console.info( s );
	return ( s );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Test Method ( popup Key )
 */
CAS . test = function() {
	window.alert( CAS.key() );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Log Advise for Possible Issues
 */
CAS . advise = function() {
	const ANY = "any";
	const o = CAS.entry();
	if ( o.client === ANY ) {
		console.warn( "Unable to determine Client Name" );
	}
	if ( o.agent === ANY ) {
		console.warn( "Unable to determine Agent Name" );
	}
	if ( o.server === ANY ) {
		console.warn( "Unable to determine Server Name" );
	}
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "${_t_}" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

