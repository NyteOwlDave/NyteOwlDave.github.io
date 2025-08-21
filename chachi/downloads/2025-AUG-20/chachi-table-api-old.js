o = ( ChachiTable = {} );
o.parseCoreDoc = function( coreDoc ) {
	// TODO ...
}
o.create = function( coreDoc, schema, title, id, parent ) {
   	const me = ChachiTable;
   	const rawTable = me.parseCoreDoc( coreDoc );
   	const table = ( gid( id ) || ella( 'table' ) );
   	table.innerHTML = "";
   	me.state = {};
   	me.state.table    = table;
   	me.state.rawTable = rawTable;
   	me.state.args     = { coreDoc, schema, title, id, parent };
   	if ( parent instanceof HTMLElement ) {
      	if ( table.parentElement instanceof HTMLElement ) {
         	table.remove();
      	}
      	parent.appendChild( table );
   	}
   	if (! Array.isArray( schema ) ) {
      schema = rawTable.shift();
   	}
   	let colCount = schema.length;
   	rawTable.forEach( r => { 
        if (! Array.isArray( r ) ) return;
		const cellCount = r.length;
        colCount = Math.max( colCount, cellCount );
   	} );
   	while ( schema.length < colCount ) {
      	schema.push( "COL" + schema.length + 1 );
   	}
   	const thead = table.createTHead();
   	const tbody = ella( 'tbody' );
   	table.appendChild( tbody );
   	let tr = thead.insertRow();
   	schema.forEach( s => { 
       let th = ella( 'th' );
       th.textContent = s;
       tr.appendChild( th ); 
   	} );
   	const rowCount = rawTable.length;
	   
}

