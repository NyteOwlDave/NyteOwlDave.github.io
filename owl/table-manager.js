
/*

table-manager.js

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

tables = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

tables.add = function( records, schema, title ) {
    const te = elx( "TABLE" );
    const he = te . createTHead();
    const be = te . createTBody();
    const ne = te . createCaption();
    const value =( s )=> ( str( s ) || "?" );
    ne . textContent = ( str( title ) || "New Table" );
    records = arr( records );
    let re, ce, hi = records.length, ncols = 0;
    for ( let i = 0; i < hi; i += 1 ) {
        const row = arr( records[ i ] );
        ncols = Math.max( ncols, row.length );
        re = be . insertRow();
        row . forEach(
            ( s ) => {
                ce = re.insertCell();
                ce . textContent = value( s );
            }
        );
    };
    schema = arr( schema );
    for ( let i = 0; i < ncols; i += 1 ) {
        let s = str( schema[ i ] );
        if (! s ) {
            s = ( `Column-${1+i}` );
            schema[ i ] = ( s );
        }
    }
    re = he.insertRow();
    schema.forEach(
        ( s ) => {
            ce = elx( "TH" );
            re . appendChild( ce );
            ce . textContent = ( s );
        }
    );
    const owner = table_section;
    return owner.appendChild( te );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

