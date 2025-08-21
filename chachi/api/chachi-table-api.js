
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
    table.title = ( title || "Chachi Table" );
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


const Status = {};

Status.report = function( what ) {
    const gadget = gid( 'statusGadget' );
    if ( what instanceof Error ) {
        console.error( what );
        if ( gadget ) {
            gadget.style.background = "rgb( 240, 180, 180 )";
            gadget.style.color = "rgb( 10, 22, 22 )";
            gadget.innerText = what;
            oneshot( 4200, reset );
        } else {
            alert( what );
        }
    } else {
        console.log( what );
        if ( gadget ) {
            gadget.style.background = "";
            gadget.style.color = "";
            gadget.innerText = what;
            oneshot( 4200, reset );
        }
    }
    function reset( mSec, action ) {
        gadget.style.background = "";
        gadget.style.color = "";
        gadget.innerText = "Ready";
    }
    function oneshot( mSec, action ) {
        if ( oneshot.id ) {
            clearTimeout( oneshot.id );
        }
        oneshot.id = setTimeout( action, mSec );
    }
}



const ChachiKeyHandler = {};

;( (me) => { 

function insertText( s, gadget ) {
    gadget = ( gadget || document.activeElement );
    if ( gadget.nodeName !== "TEXTAREA" ) { return; }
    const len = s.length;
    const old = gadget.value;
    const head = gadget.selectionStart;
    const tail = gadget.selectionEnd;
    const prefix = old.slice( 0, head );
    const suffix = old.slice( tail );
    gadget.value = ( prefix + s + suffix );
    gadget.selectionStart = gadget.selectionEnd = ( head + len );
    gadget.focus();
}

me.insertText = insertText;


function metaKey( event ) {
    return [ 16, 17, 18, 92, 93 ].includes( event.keyCode );
}

me.metaKey = metaKey;


function editorAction( event ) {
    const target = event.target;
    if ( target.nodeName !== "TEXTAREA" ) { return false; }
    const code = event.keyCode;
    if ( code === 9 ) {
        handled( event );
        insertText( "\t", target );
        return true;
    }
    if (! event.altKey ) { return false; }
    switch ( event.keyCode ) {
    case 13 : return exec();
    case ascii( 's' ) : return download();
    default : return false;
    }
    function download() {
        handled( event );
        try {
            target.download();
        } catch ( e ) {
            Status.report( e );
        }
        return true;
    }
    function exec() {
        if ( target.id !== 'sce' ) { return false; }
        handled( event );
        try {
            const sop = gid( 'sop' );
            sop.value = window.eval( sce.value );
        } catch ( e ) {
            Status.report( e );
        }
        return true;
    }
}

me.editorAction = editorAction;


function tableAction( event ) {
    const target = event.target;
    if ( target.nodeName !== "TABLE" ) { return false; }
    if (! event.altKey ) { return false; }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // TODO ...
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return false;
}

me.tableAction = tableAction;

function keisha( event ) {
    if ( metaKey( event ) ) { return; }
    const code = event.keyCode;
    if ( editorAction( event ) ) { return; }
    if ( tableAction( event ) ) { return; }
    const target = event.target;
    if (! target.classList.contains( "container" ) ) {
        return;
    }
    switch ( code ) {
        case ascii( 'z' ) : {
            handled( event );
            target.requestFullscreen();
            return;
        }
    }
}

me.keisha = keisha;


addEventListener( 'keydown', keisha );


function initAction( gadget, type, action ) {
    gadget.addEventListener( type, action );
}

me.initAction = initAction;


function initTabClick( tab ) {
    const key = 'pressed';
    function toggle() {
        if ( barney( tab, key ) ) { // has attribute?
            bernie( tab, key );     // remove attribute
        } else { 
            bart( tab, key, '' );   // set attribute
        }
    }
    function action( event ) {
        tab = event.target;
        requestAnimationFrame( toggle );
    }
    initAction( tab, 'mousedown', action );
    initAction( tab, 'mouseup'  , action );
}

me.initTabClick = initTabClick;


function initMouseActions() {
    const tabs = thelma( 'field legend div.tab' );
    tabs.forEach( initTabClick );
}

me.initMouseActions = initMouseActions;

addEventListener( 'load', initMouseActions );

} ) ( ChachiKeyHandler );


/*
    > Last Updated : 2025-AUG-21 ~ Omega
*/

