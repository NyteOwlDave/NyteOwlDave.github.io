
/*
    links-table-2.js
    Owl System for Morpheus
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; _t_ = "links-table-2.js"
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.anchors = function() {
    const se = ( anchor_section );
    return Array.from(
        se.querySelectorAll( "A" )
    );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.records = function() {
    const m = links . anchors();
    function record( ae ) {
        const title   = ( ae.title || ae.textContent || "?" );
        const address = ( ae.href  || "./" );
        return { title, address };
    };
    return ( m ).map( record );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.find = function( address ) {
    const m = links . anchors();
    function match( ae ) {
        return ( address === ae.href )
    }
    const v = (
        ( m ).filter( match )
    );
    return ( v[ 0 ] );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.addresses = function() {
    const m = links . records();
    return ( m ).map( ( rec ) => ( rec.address ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.titles = function() {
    const m = links . records();
    return ( m ).map( ( rec ) => ( rec.title ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.add = function( record ) {
    const title   = ( record . title   );
    const address = ( record . address );
    let ae = links . find( address );
    if (! ae ) {
        ae = elx( "A" );
        ae . href = ( address );
        anchor_section.appendChild( ae );
    }
    ae . title = ( ae . textContent = title );
    return ( ae );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.merge = function( records ) {
    if (! records ) { return; }
    const idx = links . addresses();
    const add =( rec )=> {
        links . add( record );
    };
    records . forEach( add );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.refresh = function() {
    const man = links . recover();
    return links . merge( man );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; links.storekey = ( "links-table-2.json" )
;

links.store = function() {
    const s  = localStorage;
    if ( null === s ) {
        throw new Error( `Store is Unavailable` );
    }
    return ( s );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.recover = function() {
    const s = links . store();
    const k = ( links . storekey );
    const v = s . getItem( k );
    if ( null === v ) {
        return ( links . persist() );
    }
    console . debug( `Read Links Table from Store` );
    const records = JSON.parse( v );
    if ( Array.isArray( records ) ) {
        links . merge( records );
        return;
    }
    throw new Error( `Expected a JSON Array` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

links.persist = function() {
    const s = links . store();
    const k = ( links . storekey  );
    const records = ( links . records() );
    const v = JSON.stringify( records, null, 2 );
    s . setItem( k, v );
    console . debug( `Wrote Links Table to Store` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "${_t_}" API Module` );
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


