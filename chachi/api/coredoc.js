
/* 

    coredoc.js
    2025-JUN-10

    Essential CoreDoc Reporting

*/

const CoreDoc = {};

// Parse and Display Core Document
CoreDoc.report = function( doc, title="Members", schema=[] ) {
    const RS = "\n";
    const FS = "|";
    const trim = s => s.trim();
    const falsy = s => (!! s );
    const lines = String( doc )
        .split( RS )
        .map( trim )
        .filter( falsy );
    const table  = [];
    if ( Array.isArray( schema ) && schema.length ) {
        table.unshift( schema );
    }
    function record( line ) {
        const row = [];
        const values = line.split( FS ).map( trim );
        values.forEach( s => row.push( s ) );
        table.push( row );
    }
    lines.forEach( record );
    console.group( title );
    console.table( table );
    console.groupEnd();
    return { title, table, schema };
}


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "CoreDoc",  { CoreDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'coredoc.js' );
}

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
