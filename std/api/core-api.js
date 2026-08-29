
/* core-api.js */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

wrun =( js )=> window.eval( js );

zrun =( k )=> wrun( `meta("` + k + `")` );
krun =( k )=> wrun( localStorage  .getItem( k ) );
srun =( k )=> wrun( sessionStorage.getItem( k ) );

run =( ed )=> wrun( (ed||gid( "sce" )).value );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function now() {
	const dt = new Date();
	return dt.toLocaleString();
}

epoch = function() {
	return Date.now();
};

cool = function( dt ) {
	dt = ( dt || new Date );
	dt = dt.toString();
	parts = dt.split( " " );
	yy = fix( 4, parts[ 3 ] );
	mm = parts[ 1 ].toUpperCase();
	dd = fix( 2, parts[ 2 ] );
	return [ yy, mm, dd ].join( "-" );
};

nid = function( id ) {
 	id = str( id );
	if ( id ) { return id; }
	const rnd  =( k )=> ( Math.random() * k );
	const irnd =( k )=> Math.floor( rnd( k ) );
	const a = now.epoch()
	const b = irnd( 100000 );
	const c = irnd( 100000 );
	const sa = a . toString( 32 );
	const sb = b . toString( 32 );
	const sc = c . toString( 32 );
	return [ "id", sa, sb, sc ].join( "/" );;
};

nod = function( o ) {
	o.id = now.nid( o.id );
	return ( o );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function visit( url ) {
    if ( null === localStorage ) {
        const a = elx( "A" );
        a . href = ( url );
        a . click();
    } else {
        const w = window;
        w.open( url, url );
    }
}

function veer( hostname ) {
	location.hostname = str( hostname );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function message( s, silent ) {
    s = str( s );
    if (! s ) { return; }
    if (! silent ) {
        console.log( s );
    }
    messages.textContent = ( s );
}


function crashed( e ) {
    console.error( e );
    message( e.message, true );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function perform( event ) {
    const ops = perform;
    try {
        ops.event = mine( event );
        const sender = event.target;
        const js = sender.value;
        const op = window.eval( js );
        console.log( op );
    } catch ( e ) {
        crashed( e );
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function mine( ev ) {
    if ( ev instanceof Event ) {
        ( ev ).stopPropagation();
        ( ev ).preventDefault();
    }
    return ( ev );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function pcl( o ) {
	o = pcl.prepare( o );
	return (
		( o )
		. split  ( "\n"   )
		. map    ( str    )
		. filter ( s => s )
	);
}


pcl.prepare = function( o ) {
	if ( o instanceof Object ) {
		if ( Array.isArray( o ) ) {
			return ( o ).join( "\n" );
		}
		o = Object.keys( o ).sort();
		return ( o ).join( "\n" );
	}
	if ( "undefined" === typeof o ) {
		return ( "" );
	}
	return String( o );
};


function pclx( o, u, s, d ) {
	o = pcl( o );
	if ( u ) {
		o = Array.from( new Set( o ) );
	}
	if ( s ) {
		o = ( o ).sort();
	}
	if ( d = str( d ) ) {
		o = ( o ).map( ( t ) => ( `${d} ${t}` ) );
	}
	return ( o );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function filter( o, rex ) {
	o = pcl( o );
	if ( rex = str( rex ) ) {
		o = (
			( o )
			. filter(
				( t ) => ( rex.test( t ) )
		    )
		);
	}
	return ( o );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function show( o, t, rex, decal ) {
	o = filter( o, rex );
	o = pclx( o, 1, 1, decal );
	if ( str( t ) ) {
		o.unshift( `〖 ${t} 〗\n` );
	}
	alert( o.join( "\n" ) );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function inspect( o, t, rex ) {
	const c = console;
	o = inspect.prepare( o );
	t = str( t );
	if ( t ) {
		c.group( t );
		c.table( o );
		c.groupEnd();
	} else {
		c.table( o );
	}
}

inspect.prepare = function( o ) {
	if ( Array.isArray( o ) ) {
		return ( o );
	}
	if ( o instanceof Object ) {
		const m = Object.keys( o ).sort();
		let v, t;
		return m.map(
			( k ) => {
				v = o[ k ];
				t = ( typeof v );
				v = String( v ).trim();
				return [ t, k, v ];
			}
		);
	}
	return [ String( o ).trim() ];
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function analyze( o, t ) {
	const _i = [ "Input"  , o.input  ];
	const _o = [ "Output" , o.output ];
	const _e = [ "Error"  , o.error  ];
	const _t = [ _i, _o, _e ];
	inspect( _t, t );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function meta( k ) {
	const q = ( `meta[key="${k}"]` );
	const o = one( q );
	if ( o ) {
		return ( o ).getAttribute( "value" );
	}
	return "";
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function mapper( source, keys ) {
	const m = new Map();
	source = ( source || {} );
	if ( keys ) {
		keys = pcl( keys );
	} else {
		keys = mem( source );
	}
	( keys)
	. forEach(
		( k ) => {
			v = str( source[ k ] );
			m . set( k, v );
		}
	);
	return ( m );
}

mapper.hint = ( "Map from Vanilla Object" );

mapper.index = function( map ) {
	const index = [];
	let v;
	for ( let k of map.keys() ) {
		v = map.get( k );
		index[ k ] = v;
	}
	return ( index );
};

mapper.index.hint = ( "Vanilla Object from Map" );

mapper.compose = function( map ) {
	return jst( mapper.index( map ) );
};

mapper.parse = function( json ) {
	return mapper( jso( json ) );
};

mapper.keys = function( map ) {
	const keys = [];
	for ( let k of map.keys() ) {
		keys.push( k );
	}
	return ( keys );
};

mapper.keys.schema = [
  "Key"
];

mapper.values = function( map ) {
	const values = [];
	let v;
	for ( let k of map.keys() ) {
		v = map.get( k );
		values.push( v );
	}
	return ( values );
};

mapper.values.schema = [
  "Value"
];

mapper.entries = function( map ) {
	const entries = [];
	let v;
	for ( let k of map.keys() ) {
		v = map.get( k );
		entries.push( [ k, v ] );
	}
	return ( entries );
};

mapper.entries.schema = [
  "Key", "Value"
];

mapper.details = function( map ) {
	const details = [], w = now();
	let v;
	for ( let k of map.keys() ) {
		v = map.get( k );
		t = ( typeof v );
		details.push( [ t, k, v, w ] );
	}
	return ( details );
};

mapper.details.schema = [
  "Type" , "Key", "Value", "Comment"
];

mapper.tabulate = function( map, table ) {
	const be = elx( "TBODY" );
	const schema = mapper.details.schema;
	const info = mapper.details( map );
	let ce, re, details;
	( info )
    . forEach(
		( entry ) => {
			re = be.insertRow();
			details = entry;
			ce = cell( 0 );
			ce = cell( 1 );
			ce = cell( 2 );
			ce = cell( 3 );
		}
	);
	function cell( index ) {
		const ce = re.insertCell();
		key   = schema[ index ];
		value = details[ index ];
		ce . setAttribute( "key", key );
		const ie = elx( "INPUT" );
		ie . classList . add( "cell" );
		ie . value = str( value );
		ce . appendChild( ie );
		return ( ce );
	}
	if (! table ) {
		table = mapper.table();
	}
	mapper.schema( table, schema );
	table.appendChild( be );
	return ( be );
};

mapper.table = function( owner, id ) {
	const te = elx( "TABLE" );
	owner = ( owner || document.body );
	owner . appendChild( te );
	te . id = str( id );
	return ( te );
};

mapper.schema = function( table, schema ) {
	let he = table.tHead;
	if ( he ) {
		he.innerHTML = "";
	} else {
		he = table.createTHead();
	}
	let ce, re = he.insertRow();
    schema = ( schema || mapper.details.schema );
	( schema )
	. forEach(
		( s ) => {
			ce = elx( "TH" );
			re . appendChild( ce );
			ce . textContent = str( s );
		}
	);
	return ( he );
};

mapper.controls = function() {
	incomplete( `mapper.controls()` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "core-api.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.info( `Consider My Notepad API` )
; console.info( `Consider Rockets API` )
; console.info( `Consider HUD Editor API` )
; console.info( `Consider Lumina Graphics API` )
; console.info( `Consider Making a "Jester the Suggester" API for These HINTS!` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

