
/*

# zed-ops.js

<pre>

*/


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~~[ Zed Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function ned( ed ) {
    ed = (
        ( ed )
        || gid( "sop" )
        || gid( "sce" )
        || gid( "sip" )
    );
    if (! ed ) {
        const owner = ned.section();
        ed = node(
            "TEXTAREA", "sop", "siox", owner
        );
    }
    return ( ed );
}

ned.section = function() {
    let section = (
           gid( "editor_section" )
        || gid( "editor-section" )
    );
    if ( section ) { return ( section ); }
    const fieldset = ned.fieldset( "Editors" );
    return node( "SECTION", "editor_section", 0, fieldset );
}

ned.fieldset = function( caption, owner ) {
    owner = ( owner || document.body );
    caption = ( str( caption ) || "New Group" );
    const fieldset = node( "FIELDSET", 0, 0, owner    );
    const legend   = node( "LEGEND"  , 0, 0, fieldset );
    legend.textContent = ( caption );
    return ( fieldset );
}

ned.imports = function( ed ) {
    const m = all( "SCRIPT[src]" );
    if ( ed === "*" ) { return ( m ); }
    const v = ( m ).map( ( se ) => ( se.src ) );
    if ( ed === "+" ) { ed = ned( gid( "sop" ) ); }
    if ( ed instanceof HTMLTextAreaElement ) {
        ed = value = ( v.join( "\n" ) );
        return ( ed );
    }
    return ( v );
};


ned.imports.macros = {
  "+" : "Use or Create SOP Editor"
, "*" : "Return SCRIPT Elements"
};

;
; console.log( `Loaded "zed-ops.js" API Module` )
;

/*

</pre>

*/


