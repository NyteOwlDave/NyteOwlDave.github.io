
/*

    advance-index.js

    Increment or Decrement SELECT index

*/

function advance_index( select, reverse, dist ) {
    dist = ( parseInt( dist ) || 1 );
    const limit = select.children.length;
    const inc = (
        reverse ? ( -dist ) : ( dist )
    );
    let n = ( inc + select.selectedIndex );
    n = ( n % limit );
    if ( n < 0 ) { n += limit; }
    select.selectedIndex = n;
}

