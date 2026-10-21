
/*
    blastoid.js
    Owl System API
    for Quick Links
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function blastoid( id ) {
    const se = gid( id );
    const v = blastoid.read( se );
    return blastoid.rico( id, v );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; blastoid.options = {
  type : "text/plain"
, charset : "utf-8"
}
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

blastoid.rico = function( k, v ) {
    const o = blastoid.options;
    const b = new Blob( [ v ], o );
    const a = elx( "A" );
    a . href = URL.createObjectURL( b );
    a . download = ( k );
    a . click();
    URL.revokeObjectURL( a . href );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

blastoid.read = function( ge ) {
    if (! ge ) {
        throw new Error( `Missing Gadget or ID` );
    }
    if (! ( ge instanceof Object ) ) {
        throw new Error( `Invalid Gadget or ID` );
    }
    switch( ge.nodeName.toUpperCase() ) {
    case "INPUT" : case "TEXTAREA" :
        return ( ge.value );
    case "PRE" : case "CODE" : case "VAR" :
        return ( ge.innerText );
    default :
        return ( ge.innerHTML );
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

blastoid.mods = function( id_list ) {
    let m = [];
    if ( Array.isArray( id_list ) ) {
        m = id_list.map( gid );
    } else {
        m = all( "SCRIPT[id]" );
    }
    const v = m.map(
        ( ce ) => {
            const k = ce.id;
            const v = blastoid.read( ce );
            return [ k, v ];
        }
    );
    return ( v );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

blastoid.json = function( id_list, filename ) {
    const mods = blastoid.mods( id_list );
    const v = JSON.stringify( mods, null, 2 );
    if (! filename ) { return ( v ); }
    filename = filename.replace( ".json", ".json" );
    const k = filename + ".json";
    blastoid.rico( k, v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

blastoid.jsom = function( id_list, filename ) {
    const dash = "~".repeat( 62 );
    const line = [ "\n|", "|\n" ].join( dash );
    const jsom = [];
    const header =( s )=> {
        jsom.push( line );
        jsom.push( s );
        jsom.push( line );
    };
    const block =( s )=> {
        jsom.push( [ "\n" , "\n" ].join( s ) );
    };
    const mod =( entry )=> {
        header( entry[ 0 ] );
        block( entry[ 1 ] );
    };
    const mods = blastoid.mods( id_list );
    mods.forEach( mod );
    jsom.push( line );
    const v = jsom.join( "" );
    if (! filename ) { return ( jsom ); }
    filename = filename.replace( ".jsom", ".jsom" );
    const k = filename + ".jsom";
    blastoid.rico( k, v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "blastoid.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
