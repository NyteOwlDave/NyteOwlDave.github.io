
/*
    jeannie.js
    Owl System for Morpheus
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; _t_ = "jeannie.js"
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function jeannie( group, status, type ) {
    type = ( type || "SCRIPT" ).toUpperCase();
    group  = str( group  );
    status = str( status );
    const m = all( type );
    const matcher =( ge, k, v )=> {
        const s = ge.getAttribute( k );
        return ( s === v );
    };
    let v = ( m );
    if ( group ) {
        const match =( ge )=> (
            matcher( ge, "group", group )
        );
        v = ( v ).filter( match );
    }
    if ( status ) {
        const match =( ge )=> (
            matcher( ge, "status", status )
        );
        v = ( v ).filter( match );
    }
    return ( v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jeannie.entry = function( ge ) {
    const artie   =( k )=> str( ge.getAttribute( k ) );
    const group   = artie( "group"   );
    const name    = artie( "name"    );
    const status  = artie( "status"  );
    const concept = artie( "concept" );
    return { group, name, status, concept };
};

jeannie.entries = function( group, type ) {
    const m = jeannie( group, "", type );
    function entry( ge ) {
        return jeannie.entry( ge );
    };
    const v = ( m ).map( entry );
    return ( v );
};

jeannie.schema = [
  "Group", "Name", "Status", "Concept"
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jeannie.record = function( ge ) {
    const artie   =( k )=> str( ge.getAttribute( k ) );
    const group   = artie( "group"   );
    const name    = artie( "name"    );
    const status  = artie( "status"  );
    const concept = artie( "concept" );
    return [ group, name, status, concept ];
};

jeannie.records = function( group, type ) {
    const m = jeannie( group, "", type );
    function record( ge ) {
        return jeannie.record( ge );
    };
    const v = ( m ).map( record );
    return ( v );
};

jeannie.table = function( group, type ) {
    const title   = ( "Gadget Group"    );
    const schema  = ( jeannie.schema    );
    const records = ( jeannie.records() );
    return { table, schema, records };
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jeannie.status_names = [
  "untested"
, "working"
, "published"
];

jeannie.untested = function( group ) {
    return jeannie( group, "untested" );
};

jeannie.working = function( group ) {
    return jeannie( group, "working" );
};

jeannie.published = function( group ) {
    return jeannie( group, "published" );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jeannie.test = [];

jeannie.test[0] = function() {
    say( "Working Modules" );
    group = "sqlite-links-table.js";
    const m = jeannie.working( group );
    const v = ( m ).map(
        ( ge ) => ( ge.getAttribute( "name" ) )
    );
    sql_editor.value = qlc( v );
};

jeannie.test[1] = function() {
    say( "Untested Modules" );
    group = "sqlite-links-table.js";
    const m = jeannie.untested( group );
    const v = ( m ).map(
        ( ge ) => ( ge.getAttribute( "name" ) )
    );
    sql_editor.value = qlc( v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "${_t_}" API Module` );
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

