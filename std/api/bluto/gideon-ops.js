
/*

# gideon-ops.js

<pre>

*/


/*
 ~~~~~~~~~~~~~~~~~~~~~~~[ Gideon Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function get_ghost_editor() {
    const id = "ghost_editor";
    const ed = gid( id );
    if ( ed ) { return ( ed ); }
    const cname = "ghost";
    const owner = ( doc . body );
    return (
        node( "TEXTAREA", id, cname, owner )
    );
}


function test_ghost_editor() {
    try {
        const ed = get_ghost_editor();
        alert( ed.nodeName );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}


function node( type, id, cname, owner ) {
    const ge = elx( str( type ) );
    if ( id = str( id ) ) {
        ge . id = ( id );
    }
    if ( cname = str( cname ) ) {
        ( ge )
        . classList
        . add ( cname );
    }
    if ( owner instanceof HTMLElement ) {
        owner . appendChild( ge );
    } else if ( "undefined" !== typeof owner ) {
        console.warn( { owner } );
        throw new TypeError(
            "Expected a Gadget Reference"
        );
    }
    return ( ge );
}

node.flash = function( o, cname, delay ) {
    cname = ( str( cname ) || "flashing" );
    delay = ( parseInt( delay ) || 800 );
    if ( delay < 1 ) { return; }
    o = ( o || document.activeElement );
    const cl = o.classList;
    const off =()=> { cl.remove( cname ); }
    cl.add( cname );
    setTimeout( off, delay );
};

;
; console.log( `Loaded "gideon-ops.js" API Module` )
;

/*

</pre>

*/


