
/* 
    chachi-table.js 
*/

const ChachiTable = {};

( ( me ) => {

const cacheKey = function() {
    const table = me.state.table;
    return ( table.title || "Chachi Table" ) + " (HTML)";
}

const filename = function() {
    const table = me.state.table;
    return ( table.id || "chachi-table" ) + ".html";
}

const hide = function() {
    const table = me.state.table;
    table.style.display = "none";
}

const show = function() {
    const table = me.state.table;
    table.style.display = "block";
    editables( 'td' );
    table.tBodies[ 0 ].rows[ 0 ].cells[ 0 ].focus();
}

const zoom = function() {
    const table = me.state.table;
	table.show();
    table.requestFullscreen();
};

const save = function() {
    const table = me.state.table;
    const doc = table.innerHTML;
    const key = cacheKey();
    localStorage.setItem( key, doc );
};

const load = function() {  
    const table = me.state.table;
    const key = cacheKey();
    const doc = localStorage.getItem( key );
    if ( doc === null ) return;
    table.innerHTML;
}

const download = function() {
    const table = me.state.table;
    rico( table.outerHTML, filename() );
}

me.parseCoreDoc = function( coreDoc ) {
    if ( "string" !== typeof coreDoc ) { return []; }
    const RS = String.fromCharCode( 10 );
    const FS = "|";
    const trim = s => s.trim();
    const keep = s => (!! s );
   	const split = function(s, t) {
	 	return s.split(t).map(trim).filter(keep);
	}
    return split( coreDoc, RS )
		   .map( o => split( o, FS ) );	
}

me.create = function( title, id, parent ) { 
   	const table = ( gid( id ) || ella( 'table' ) );
    table.id = ( table.id || id || ( "table-" + TiGG() ) );
   	table.innerHTML = "";
    table.editable = ( enabled ) => editables( 'td', enabled );
    table.show = show;
    table.hide = hide;
    table.zoom = zoom;
    table.save = save;
    table.load = load;
    table.download = download;
   	if ( parent instanceof HTMLElement ) {
      	if ( table.parentElement instanceof HTMLElement ) {
         	table.remove();
      	}
      	parent.appendChild( table );
   	}
   	me.state = {};
   	me.state.table = table;
}

me.repopulate = function( coreDoc, schema, title, id, parent ) {
	me.create( title, id, parent );
	const table = me.state.table;
   	const rawTable = me.parseCoreDoc( coreDoc );
   	me.state.rawTable = rawTable;
   	me.state.args = { coreDoc, schema, title, id, parent };
   	if (! Array.isArray( schema ) ) {
      	schema = rawTable.shift();
   	} else if ( schema.length < 1 ) {
      	schema = rawTable.shift();
   	}
	if (! schema ) { return; }
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
   	let tr = thead.insertRow();
    let i = 0;
   	schema.forEach( s => { 
       i += 1;
       let th = ella( 'th' );
       s = ( s || "COL" + i );
       th.textContent = s;
       tr.appendChild( th ); 
   	} );
   	const tbody = ella( 'tbody' );
   	table.appendChild( tbody );
    rawTable.forEach( r => {
        if (! Array.isArray( r ) ) return;
        tr = tbody.insertRow();
        r.forEach( c => {
           let td = tr.insertCell();
           td.innerText = ( c || "" );
        } ); 
    } );
}

me.tableSchema = function() {
    const table = me.state.table;
    let schema = [];
    const row = table.tHead.rows[ 0 ];
    const cells = Array.from( row.cells );
    cells.forEach( c => schema.push( c.textContent ) );
    return schema;
}

me.tableStats = function() {  
    const table  = me.state.table;
    const title  = ( table.title || "Chachie Table" );
    const schema = me.tableSchema();
    const rows = Array.from( table.tBodies[ 0 ].rows );
    let cols = ( schema.length || 0 );
    let maxColWidth = 0;
    schema.forEach( c => {
        const s = ( c.textContent || "" );
        maxColWidth = Math.max( s.length, maxColWidth );
    } );
    rows.forEach( r => {
        cells = Array.from( r.cells );
        cols  = Math.max( cols, cells.length );
        cells.forEach( c => { 
            const s = ( c.textContent || "" );
            maxColWidth = Math.max( s.length, maxColWidth );
        } );
    } );
    let size = { 
         rows : rows.length ,
         cols , maxColWidth 
    };
    return { title, schema, size };
}

me.insertRow = function() {
    const size  = me.tableStats().size;
    const table = me.state.table;
    const body  = table.tBodies[ 0 ];
    const tr = body.insertRow();
    for ( let column = 1; column <= size.cols; column += 1 ) {
        tr.insertCell().textContent = column;
    }
    editables( 'td' );
    return tr;
}

me.test = function() {
	me.repopulate( 
		me.example, [], 
		"Example", "exampleTable", 
 		document.body
	);
}

me.example = `
Key  | Value        | Remarks
SAT  | 100%         | Best Score Ever!
dude | Brad Pitt    | Actor
gal  | Ada Lovelace | Famous Inventor
`;

console.log( "📃 Loaded chachi-table.js" );

} ) ( ChachiTable );


/*
    > Last Updated : 2025-AUG-21 ~ Omega
*/

