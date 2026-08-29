
/* module-status.js */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function module_status( rex ) {
    const m = all( "SCRIPT[status]" );
    const t = (
        ( m )
        . map(
            ( se ) => {
                const id = se.id;
                const status = se.getAttribute( "status" );
                return [ id, status ];
            }
        )
    );
    ( t ).unshift( [ "ID", "Status" ] );
    const c = console;
    c.clear();
    c.group( "Module Status" );
    c.table( t );
    c.groupEnd();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function module_list( rex, q ) {
    q = ( q || "SCRIPT[id]" );
    const m = all( q );
    if ( rex ) {
        rex = new RegExp( rex );
        const match =( se )=> ( rex.test( se.id ) );
        return ( m ).filter( match );
    }
    return ( m );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function module_sources( rex ) {
    const q = ( `SCRIPT[src]` );
    const m = (
        all( q )
        . map(
            ( se ) => ( se.src )
        )
    );
    if ( rex ) {
        rex = new RegExp( rex );
        const match =( src )=> ( rex.test( src ) );
        return ( m ).filter( match );
    }
    return ( m );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "module-status.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

