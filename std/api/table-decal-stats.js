
/*
	table-decal-stats.js

	- [x] Jarvis API Modules
	- [x] Web Demo API Modules
	- [x] Morpheus API Modules
*/

// Write Cell Value
function write_cell( table, row, column, value ) {
    const cell = find_cell( table, row, column );
    cell.textContent = ( value );
    return ( cell );
}

// Read Cell Value
function read_cell( table, row, column ) {
    const cell = find_cell( table, row, column );
    return ( cell.textContent );
}

// Obtain Cell Reference
function find_cell( table, row, column ) {
    const m = find_row_cells( table, row );
    return ( m[ column ] );
}

// Obtain Row Reference
function find_row( table, row ) {
    const m = find_rows( table );
    return ( m[ row ] );
}

// Obtain Table Reference
function find_table( table ) {
    const m = all( "TABLE" );
    return ( m[ table ] );
}

// Obtain List of Row References
function find_rows( table ) {
    table = find_table( table );
    const m = Array.from( table.tBodies[ 0 ].rows );
    return ( m );
}

// Obtain List of Row's Cell References
function find_rows_cells( table, row ) {
    row = find_row( table, row );
    const m = Array.from( row.cells );
    return ( m );
}

// Obtain List of Column's Cell References
function find_column_cells( table, column ) {
    const m = find_rows( table );
    return (
        ( m )
        . map(
			( re ) => ( re.cells[ column ] )
        )
    );
}

// Sum Row's Decals and Show Result in Last Column
function update_row_count( table, row, decal ) {
    const cells = find_row_cells( table, row );
    const last  = cells.pop();
    const sum   = count_decals( cells, decal );
    last . textContent = ( sum );
    return ( sum );
}

// Sum Column's Decals and Show Result in Last Row
function update_column_count( table, column, decal ) {
    const cells = find_row_columns( table, column );
    const last  = cells.pop();
    const sum   = count_decals( cells, decal );
    last . textContent = ( sum );
    return ( sum );
}

// Sum Values in Bottom Table Row and Show in Last Column
function update_total( table ) {
    const rows  = find_rows( table );
    const cells = Array.from( rows.pop().cells );
    const last  = cells.pop();
    const total = sum_cells( cells );
    last . textContent = ( total );
    return ( total );
}

// Count Decal Occurances for Cell List
function count_decals( cells, decal ) {
    let s, d;
    const match =( n, ce )=> {
        s = ce.textContent;
        d = (
              ( s === decal )
            ? ( 1 )
            : ( 0 )
        );
        return ( n + d );
    };
    return ( cells.reduce( match, 0 ) );
}

// Sum Values for Cell List
function sum_values( cells ) {
    const add =( n, ce )=> {
        const d = parseFloat( ce.textContent );
        return ( n + d );
    };
    return ( cells.reduce( add, 0 ) );
}

// Update Table Row and Column Decal Counts
function update_table( table, decal ) {
	let cells, sum, total=0;
	let first_cell, last_cell;
	decal = str( decal );
	const decal_match =( ce )=> (
		str( ce.textContent ) === decal
	);
	const decal_sum =( a, b )=> {
		if ( decal_match( b ) ) {
			return ( a + 1 );
		} else {
			return ( a );
		}
	};
    const rows = find_rows( table );
	if ( rows.length < 1 ) { return; }
	const last_row = ( rows . pop() );
	const bottom = Array.from( last_row.cells );
	rows . forEach(
		( re ) => {
			cells = Array.from( re.cells );
			first_cell = ( cells . shift() );
			last_cell  = ( cells . pop  () );
			if ( cells . length > 0 ) {
				sum = cells . reduce( decal_sum, 0 );
				total += sum;
			} else {
				sum = 0;
			}
			if ( last_cell ) {
				last_cell . textContent = sum.toString();
			}
		}
	);
	last_cell = ( bottom . pop() );
	last_cell . textContent = ( total . toString() );
	const count = ( bottom . length );
	for ( let i = 1; i < count; i += 1 ) {
		cells = find_column_cells( table, i );
		sum = cells . reduce( decal_sum, 0 );
		bottom[ i ] . textContent = ( sum . toString() );
	}
}

