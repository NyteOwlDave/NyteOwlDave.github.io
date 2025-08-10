
/* 
    sio.js
    2025-JUN-24

    Simple Input/Output
*/

function removeAllGadgets( q ) {
    const batch = document.querySelectorAll( q );
    const list = Array.from( batch );
    list.forEach( o => o.remove() );   
}

function removeIOEGadgets() {
    removeAllGadgets( ".input"  );
    removeAllGadgets( ".output" );
    removeAllGadgets( ".error"  );
}

function removeSSSGadgets() {
    removeAllGadgets( ".sip" );
    removeAllGadgets( ".sip" );
    removeAllGadgets( ".ser" );
}

function selectIOE() {
    return { 
        input  : gid( "input"  ), 
        output : gid( "output" ), 
        error  : gid( "error"  )
    };
}

function selectSSS() {
    return { 
        sip : gid( "sip" ), 
        sop : gid( "sop" ), 
        ser : gid( "ser" ) 
    };
}

async function fetchSavedScript( url, action, error ) {
    const ok = ( o ) => ( "function" === typeof o );
    function cool( payload ) {
        console.log( { payload } );
        if ( ok( action ) ) { action( payload ); }
    }
    function oops( payload ) {
        console.log( { payload } );
        if ( ok( error ) ) { error( payload ); }
    }
    return await fetch( url )
        .then( resp => resp.text() )
        .then( cool )
        .catch( oops );
}
