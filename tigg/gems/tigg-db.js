


//[ TikeyDB ]
//⋄ TiGG Database Ops Accessor
TiggDB = {};

;
( ops => {

const tirex = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/gi;

con = console;
doc = document;
jsn = JSON;
stg = localStorage;

str =( s )=> ( String( s || "" ).trim() );
arr =( o )=> ( Array.from( o || [] ) );
unq =( o )=> (    new Set( o || [] ) );

cls =()=> ( con.clear() );
jat =( t )=> ( con.table( t ) );
jet =( e )=> ( con.error( e ) );
jit =( s )=> ( con.info ( s ) );
jot =( s )=> ( con.log  ( s ) );
jut =( s )=> ( con.warn ( s ) );
jyt =( s )=> ( con.debug( s ) );

jsx =( o )=> ( jsn.stringify( o ) );
jst =( o )=> ( jsn.stringify( o, null, 2 ) );
jso =( t )=> ( jsn.parse ( t ) );
jsp =( t )=> ( jst( jso( t ) ) );

rsk =( i    )=> ( stg.key( i ) );
kse =( k    )=> ( stg.removeItem( k ) );
rse =( k    )=> ( stg.getItem( k ) );
wse =( k, v )=> ( stg.setItem( k, v ) );

srse =( k )=> ( jyt( `🔓 Read "${k}" from Store`    ) );
swse =( k )=> ( jyt( `🔏 Wrote "${k}" to Store`     ) );
skse =( k )=> ( jyt( `⛔ Removed "${k}" from Store` ) );

//[ ^.tirex ]
//⋄ TiKey/GUID RegEx
ops.tirex = tirex;

//[ ^.store_key ]
//⋄ TiGG Database Store Key
ops.store_key = ( `tikey-database-v1p0.json` );

//[ ^.records ]
//⋄ TiGG Database Records
ops.records = {};

//[ ^.persist ]
//⋄ Write Records to Store
ops.persist = function() {
    const k = ops.store_key;
    const v = jst( ops.records );
    wse( k, v );
    swse( k );
};

//[ ^.recover ]
//⋄ Read Records from Store
ops.recover = function() {
    const k = ops.store_key;
    const v = rse( k );
    if ( null === v ) {
        return ops.persist();
    }
    ops.records = jso( v );
    srse( k );
};

//[ ^.read ]
//⋄ Read Single Record
ops.read = function( k ) {
    k = safe_tikey( k );
    return ( ops.record[ k ] );
};

//[ ^.write ]
//⋄ Write Single Record
ops.write = function( k, v ) {
    k = safe_tikey ( k );
    v = safe_record( v );
    ops.record[ k ] = ( v );
    return ( ops );
};

//[ ^.dir ]
//⋄ Obtain Filtered TiKey List
ops.dir = function( rex ) {
    throw new Error( `TODO` );
};

//[ ^.select ]
//⋄ Obtain Filtered Record Map
ops.select = function( rex ) {
    throw new Error( `TODO` );
};

//[ ^.record ]
//⋄ Construct Record Object
ops.record = function( 
      title     // Required
    , tikey     // Optional
    , tidate    // Optional
    , version   // Optional
    , revision  // Optional
    , edition   // Optional
    , primary   // Optional
    , decal     // Optional
    , icon      // Optional
) {
    if ( tikey ) {
        tikey = safe_tikey( tikey );
    } else {
        tikey = ops.tikey();
    }
    title = str( title );
    if (! title ) {
        jyt( "🧝 Missing Record Title" );
        bad_record( {} );
    }
    tidate   = ( str( tidate   ) || ( ops.tidate() ) );
    version  = ( str( version  ) || "1.0"       );
    revision = ( str( revision ) || "0.0"       );
    decal    = ( str( decal    ) || "🎭"        );
    edition  = ( str( edition  ) || "(pending)" );
    primary  = ( str( primary  ) || "(pending)" );
    icon     = ( str( icon     ) || "(pending)" );
};

//[ ^.tikey ]
//⋄ Compose New TiGG Key (GUID)
ops.tikey = function() {
    return ( TiGG() );
};

//[ ^.tidate ]
//⋄ Compose New TiGG Date
ops.tidate = function() {
    function fix( s, n ) {
        while ( s.length < n ) {
            s = ( `0${s}` );
        }
        return ( s );
    }
    const dt = new Date().toString();
    const p = dt.split( " " );
    const yr = fix( p[ 3 ], 4 );
    const dy = fix( p[ 2 ], 2 );
    const mo = ( p[ 1 ].toUpperCase() );
    return [ yr, mo, dy ].join( "-" );
};

//[ ^.register ]
//⋄ Register New Record
ops.register = function( record ) {
    const k = safe_tikey( tikey );
    ops.records[ k ] = record;
    console.info( `Registered Key : ${k}` );
    return ( ops );
};

//[ ^.hints ]
//⋄ ( pending )
ops.hints = function( o ) {
    o = ( o || ops );
    const m = Object.keys( o ).sort();
    const v = m.map( details ).filter( o => o );
    function details( k ) {
        const member = o[ k ];
        const value  = str( member.details );
        if ( value ) {
            return ( [ member, value ] );
        }
        return ( null );
    }
    return ( v );
}

//[ ^.inspect ]
//⋄ ( pending )
ops.inspect = function( o, rex, caption ) {
    const m = (
        Object
        . keys( o || ops.records )
        . sort()
    );
    const v = ops.filter( m, rex );
    const c = console;
    c.group( str( caption ) || "Object Members" );
    c.table( v );
    c.groupEnd();
};

//[ ^.edit ]
//⋄ ( pending )
ops.edit = function( o, rex, editor ) {
    throw new Error( `TODO` );
};

//[ ^.filter ]
//⋄ Filter String List
ops.filter = function( list, rex ) {
    if ( "string" === typeof list ) {
        list = ops.pcl( list );
    } else if ( o instanceof Object ) {
        if (! Array.isArray( list ) ) {
            list = Object.keys( list ).sort();
        } else {
            list = ( 
                ( list )
                . map( str )
                . filter( s => s )
            );
        }
    } else if ( "undefined" !== typeof list ) {
        list = [ String( list ) ];
    } else {
        throw new Error( `👮 List is Undefined` );
    }
    if ( rex ) {
        rex = new RegExp( rex );
        const ok =( s )=> ( rex.test( s ) );
        return ( list.filter( ok ) );
    } else {
        return ( list );
    }
};

//[ ^.pcl ]
//⋄ Parse Core List
ops.pcl = function( s ) {
    s = str( s );
    return ( 
        ( s )
        . split  ( "\n"   )
        . map    ( str    )
        . filter ( s => s )
    );
};

ops.persist.details  = ( `Write Records to Store`       );
ops.recover.details  = ( `Read Records from Store`      );
ops.read.details     = ( `Read Single Record`           );
ops.write.details    = ( `Write Single Record`          );
ops.dir.details      = ( `Obtain Filtered TiKey List`   );
ops.select.details   = ( `Obtain Filtered Record Map`   );
ops.record.details   = ( `Construct Record Object`      );
ops.register.details = ( `Register New Record`          );
ops.tikey.details    = ( `Compose New TiGG Key (GUID)`  );
ops.tidate.details   = ( `Compose New TiGG Date`        );
ops.pcl.details      = ( `Parse Core List`              );
ops.filter.details   = ( `Filter String List`           );
ops.hints.details    = ( `Obtain Member Details Table`  );
ops.inspect.details  = ( `Inspect Member Details Table` );
ops.edit.details     = ( `Edit Records as JSON`         );

//[ safe_tikey ]
//⋄ TiKey/GUID String Validation
function safe_tikey( k ) {
    if ( tirex.test( k ) ) {
        return ( k );
    }
    bad_tikey( k );
}

//[ safe_record ]
//⋄ Record Object Validation
function safe_record( o ) {
    if ( o instanceof Object ) {
        if (! tirex.test( o.tikey ) ) {
            bad_tikey( o );
        }
        if (! o.title ) {
            jyt( "🧝 Missing Record Title", o );
            bad_record( o );
        }
        if (! o.date ) {
            o.date = "";
        }
    }
    bad_record( o );
}

//[ bad_tikey ]
//⋄ Throw a Bad GUID Error
function bad_tikey( k ) {
    jyt( "🧝 Target", k );
    throw new TypeError( "👮 Expected a Valid GUID" )
}

//[ bad_record ]
//⋄ Throw a Bad Record Error
function bad_record( o ) {
    jyt( "🧝 Target", o );
    throw new TypeError( "👮 Expected a Valid Record Object" )
}

//[ ^.decals ]
//⋄ Decal Dictionary
ops.decals = {
  "🦇" : "TiGG"
, "🗝️" : "TiKey"
, "💎" : "Gem"
, "🔑" : "Store Key"
, "🔐" : "Store Key List"
, "🔓" : "Read Store Entry"
, "🔏" : "Write Store Entry"
, "⛔" : "Remove Item"
, "👮" : "Error"
, "🧙" : "Advice"
, "🧝" : "Remark"
, "🎭" : "Decal"
};

//[ ^.addresses ]
//⋄ URL Address Map for Related Tools
ops.addresses = {
  "regexr" : "https://regexr.com"
, "regex101" : "https://regexr.com"
};

function _recover( event ) {
    ops.recover();
}

function _persist( event ) {
    ops.persist();
}

addEventListener( "load"         , _recover );
addEventListener( "beforeunload" , _persist );

} ) ( TiggDB )
;

;
; console.info( `🦇 Loaded TiGG Database 💎 Gem` )
;
