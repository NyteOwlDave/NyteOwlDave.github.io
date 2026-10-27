
/*

    Debbie DB Sandbox
    script.js

*/

places = {
   jsinfo_idb_tutorial : "https://javascript.info/indexeddb"
};

function bummer( event ) {
  console . error( e );
  window  . alert( e );
}

function enact( action, arg ) {
    if ( "function" === typeof action ) {
        enact . input  = arg;
        try {
          enact . output = action( arg );
          enact . error  = "";
          return ( true );
        } catch ( e ) {
          enact . error = ( e . message );
          bummer ( e );
        }
    } else {
        enact . input  = ( null );
        enact . output = ( null );
        enact . error  = ( null );
      return false;
    }
}

function ident( ge ) {
  const id = str( ge.id ) || "?";
  const pe = ge . parentElement;
  const ce = elx( "H6" )
  pe . insertBefore( ce, ge );
  ce . textContent = ( `〖 ID := ${id} 〗` );
}

function incomplete( what ) {
  what = str( what );
  if ( what ) {
    alert( `INCOMPLETE : ${what}`);
  } else {
    alert( "INCOMPLETE!");
  }
};

function main( event ) {
    try {
        init_editors();
        install( "hud" );
    } catch ( e ) {
          bummer( e );
    }
}

addEventListener( "load", main )

function init_editors() {
  ident( id_code );
  ident( id_data );
}

/* Pending Components */
actions = { incomplete };
gideon = { incomplete };
jsom = { incomplete };
ramdisk = { incomplete };
dorothy = { incomplete };
gloria = { incomplete };
sheena = { incomplete };
concepts = { incomplete };
mccloud = { incomplete };
minuet = { incomplete };
tonto = { incomplete }

function debbie( cool, oops, upgrade ) {
  let req = indexedDB.open("store", 1);
  req . onupgradeneeded = function() {
    if ( upgrade, req ) { return; }
    console . warn( "Debbie Upgrade Needed" );
  };
  req . onerror = function() {
    if ( oops, req ) { return; }
    console . error( "Debbie Request Failed : ", req . error );
  };
  req . onsuccess = function() {
    let db = openRequest.result;
    if ( cool, db ) { return; }
    console . info( "Debbie Request Successful" );
  };
  return ( req );
}

debbie.tutorial = function() {
  const u = places . jsinfo_idb_tutorial;
  visit( u );
};

function zoom( ge, which ) {
	ge = ( ge || document . body );
	ge . requestFullscreen();
	ge . focus();
  if ( which ) {
  	say( `Zoom Mode Activated : ${which}` );
  } else {
  	say( "Zoom Mode Activated" );
  }
};

zoom.code = function() {
    zoom( id_code, "Code Editor");
};

zoom.data = function() {
    zoom( id_data, "Data Editor");
};

zoom.editors = function() {
    zoom( editor_section, "Editors");
};

zoom.tables  = function() {
    zoom( table_section, "Tables");
};

gems = function() {};

gems . entries = {};

gems . storekey = "debbie-gems.json";

gems . recover = function( store ) {
    const stg = ( localStorage   );
    const ssg = ( sessionStorage );
    const s = ( store || stg || ssg );
    const k = gems . storekey;
    const v = s . getItem( k );
    if ( null === v ) {
        say( `No Store Entry for Gems`);
        return;
    };
    try {
      const m = jso( v );
      gems . merge( m );      
    } catch ( e ) {
        bummer( e );
    }
};

gems . persist = function() {
    const stg = ( localStorage );
    const ssg = ( sessionStorage );
    const k = gems . storekey;
    const v = gems . json();
    ssg . setItem( k, v );
    if ( null !== stg ) {
      ssg . setItem( k, v );
      say( `Wrote Gems to Both Stores` ); 
    } else {
      say( `Wrote Gems to Session Store` );      
    }
};

gems . json = function() {
  return jst( gems . entries );
};

gems . count = function( report ) {
  const n = mem( gems . entries ).length;
  if ( report ) {  
    say( `Total Gems := ${n}` );
  }
  return ( n );
};

gems . read = function( key ) {
  const entry = gems . entries[ key ];
  if ( entry ) { return ( entry ); }
  say( `No Such Gem : "${key}"`);
}

gems . read . code = function( key ) {
    const entry = gems . read( key );
    if ( entry ) {
        return ( entry . code );
    }
};
gems . read . memo = function( key ) {
    const entry = gems . read( key );
    if ( entry ) {
        return ( entry . memo );
    }
};

gems . read . keys = function( index ) {
  return mem( gems . entries );
};

gems . read . items = function() {
  const m = gems . read . keys();
  const items = [];
  const add =( k )=> {
    items.push( gems . entries[ k ] );
  };
  return ( items );
};

gems . read . item = function( index ) {
  const m = gems . read . items();
  const i = parseInt( index );
  const item = ( m[ i ] );
  if ( item ) { return item; }
  say( `Gem Index is Out of Range : ${i}` );
};

gems . merge = function( o ) {
    if ( "string" === typeof o ) {
        o = jso( o );
    }
    if ( o instanceof Object ) {
      if (! Array.isArray( o ) ) {
        let updated = 0;
        let ignored = 0;
        const m = mem( o );
        const add =( k )=> {
            k = str( k );
            if (! k ) { 
              ignored += 1;
              return;
            }
            gems . entries[ k ] = m[ k ];
            updated += 1;
        };
        m . forEach( add );
        let processed = ( updated + ignored );
        const c = console;
        c . clear();
        c . group( "Gem Merge Results");
        c . log( "Updated : "   , updated        );
        c . log( "Ignored : "   , ignored        );
        c . log( "Processed : " , processed      );
        c . log( "New Total : " , gems . count() );
        c . groupEnd()
      }
    }
    throw new Error( `Expected JSON or Object Reference for Gems` );
};

gem = function( key, code, memo ) {
  key = ( str( key ) || gem.nid() );
  code = str( code );
  memo = str( memo );
  return { key, code, memo };
};

function rico( k, v ) {
  k = str( k );
  if (! k ) {
    throw new Error( `Expected a Filename (key)` );
  }  
  v = rico . prep( v );
  const o = rico . options;
  const b = new Blob( [ v ], o );
  const a = elx( "A" );
  a . download = ( k );
  a . href = URL . createObjectURL( b );
  a . click();
  URL . revokeObjectURL( a . href );
};

rico . options = {
  type : "text/plain"
, charset : "utf-8"
};

rico . prep = function( o ) {
  if ( iob( o ) ) {
    if ( "function" === typeof o ) {
        return ( o ).toString();
    }
    return jst( o );
  }
  if ( ias( o ) ) {
    return str( o );
  }
  return String( o ).trim();
};

realms = function() {
  return ( places );  
};

jarvis = function( o, rex ) {
    let want =( k )=> (! iwm . includes( k ) );
    o = mem( o ).filter( want );
    if ( rex = str( rex ) ) {
      rex = new RexExp( rex );
      want =( k )=> ( rex.test( k ) );
      o = ( o ).filter( want );
    }
    return ( o );
};

jarvis.categories = [
    "Groups"
  , "Gadgets"
  , "Meta"
  , "System"
  , "Pending"
  , "Other"
  , "State"
];

jarvis.state = { places };

jarvis.gadgets = (
  Array.from( doc . querySelectorAll( "[id]" ) )
);

jarvis.meta = (
  Array.from( doc . querySelectorAll( "META" ) )
);

jarvis.groups = {
    debbie
  , realms
  , gems
  , gem
  , rico
  , zoom
};

jarvis . pending = [
  [ actions  , "Actions Dropdown List"    ]
, [ gideon   , "Gadget Operations"        ]
, [ jsom     , "JSOM Operations"          ]
, [ ramdisk  , "RAM Disk Operations"      ]
, [ dorothy  , "Dot Rocket Operations"    ]
, [ gloria   , "Google Site Operations"   ]
, [ sheena   , "Google Sheets Operations" ]
, [ concepts , "Google Docs Operations"   ]
, [ mccloud  , "Cloud Store Operations"   ]
, [ minuet   , "Home Network Operations"  ]
, [ tonto    , "HTTP Server Operations"   ]
];

jarvis.system = {
    bummer
  , enact
  , ident
  , incomplete
};

jarvis.other = {
    main
  , init_editors
};

peaches = function( ed, options ) {
    return peaches . request( "", ed, options );
};

peaches . folder = function() {
    const u = location.href;
    const p = ( u ).split( "/" );
    p . pop();  // => sandbox
    p . pop();  // => debbie
    p . push( "api/peaches" );
    return ( p ).join( "/" );
};

peaches . address = function( peachkey ) {
    const p = peaches.folder();
    const k = ( str( peachkey ) || "peach.list" );
    return ( [ p, k ] . join( "/" ) );
};

peaches . request = function( peachkey, ed, options ) {
    ed = ( ed || id_data );
    const reject =( e )=> {
        console . warn( "Request Failed : ",  e );
        ed . value = str( e );
    };
    const accept =( s )=> {
        console . info( "Request Succeeded : ", s );
        ed . value = ( s );
    };
    const u = peaches . address( peachkey );
    console.log( "File Request : ", u );
    peaches . recent = ( u );
    const req = fetch( u, options );
    ; ( req )
    . then  ( r => r.text() )
    . then  ( accept )
    . catch ( reject )
    ;
    return ( req );
};

peaches . test = function() {
    say( peaches.address() );
};

