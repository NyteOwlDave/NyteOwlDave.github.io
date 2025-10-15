
/*

    NEEDS:

        editables.js
        legends.js
        tigg.js

    ==>> IMPORTANT!!! <<==

    (INSERT) ReText WILL NOT load this module. Not sure why.

    This module is a work in progress. It has some interdependencies with
    another work in progress named "chachi-tabbed-gadgets.js". There's are
    copies of that module in two places:

    1) Chachi Downloads.
    2) The X-Module-List.md file @ Chippy (Omega).

    The first one may not be pushed to the repo yet, so check that as well.

    The second is being used as a test case for dependency issues and other
    potential bugs.

*/

/* 
    New Name : chachi-table.js
    Old Name : chachi-table-api.js
*/

const Status = {};

;( (me) => { 

    const str = o => ( "string" === typeof o );
    const tbl = o => ( o instanceof HTMLTableElement );
    const edt = o => ( o instanceof HTMLTextAreaElement );
    const elm = o => ( o instanceof HTMLElement );
    
    me.isType = { 
        string : str ,
        table  : tbl ,
        editor : edt ,
        gadget : elm
    };

    me.options = { delay : 6400 };

    me.messages = [];

    me.report = function( what ) {
        const gadget = gid( 'statusGadget' );
        if ( what instanceof Error ) {
            console.error( what );
            if ( gadget ) {
                gadget.style.background = "rgb( 240, 180, 180 )";
                gadget.style.color = "rgb( 10, 22, 22 )";
            } else {
                alert( what );
                return;
            }
        } else {
            console.log( what );
            if ( gadget ) {
                const cs = gadget.style;
                cs.background = cs.color = "";
            }
        }
        function reset( event ) {
            const cs = gadget.style;
            cs.background = cs.color = "";
            gadget.innerText = window.db ? "Ready" : "Database Connection Closed";
        }
        function oneshot() {
            if ( oneshot.id ) {
                clearTimeout( oneshot.id );
            }
            oneshot.id = setTimeout( reset, me.options.delay );
        }
        const when = ( new Date() ).toLocaleString();
        me.messages.shift( when + " | " + what );
        if ( me.messages.length > 100 ) {
            console.log( "🟡 Status Message Log is Full" );
            me.messages.length = 100;
        }
        gadget.innerText = what;
        oneshot();
    }

    console.log( "🎉 Initialized global Status object" );

} )( Status );


const ChachiTable = {};

;( ( me ) => {

    let str, tbl, edt, elm;

    me.hide = function() {
        const table = me.state.table;
        table.style.display = "none";
    }

    me.show = function() {
        const table = me.state.table;
        table.style.display = "block";
        editables( 'td' );
        table.tBodies[ 0 ].rows[ 0 ].cells[ 0 ].focus();
    }

    me.zoom = function() {
        const table = me.state.table;
        	table.show();
        table.requestFullscreen();
    };

    me.save = function() {
        const table = me.state.table;
        const doc = table.innerHTML;
        const key = me.safeCacheKey();
        localStorage.setItem( key, doc );
    };

    me.load = function() {
        const table = me.state.table;
        const key = me.safeCacheKey();
        const doc = localStorage.getItem( key );
        if ( doc === null ) return;
        table.innerHTML;
    }

    me.download = function() {
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

    me.adopt = function( table, parent ) {
        if ( table.parentElement ) {
            // Don't change parent for static tables
            // For barney def, see legends.js
            if ( barney( table, 'static' ) ) { return; }
        } else {
            parent = parent || document.body;
        }
        if ( parent === table.parentElement ) {
            return;
        }
        table.remove();
        parent.appendChild( table );
    }

    me.create = function( id, title, parent ) {
       	let table = gid( id );
        if (! table ) {
            table = ella( 'table' )
            table.id = id;
        }
        table.id = ( table.id || ( "table-" + TiGG() ) );
        table.title = ( title || "Chachi Table" );
       	table.innerHTML = "";
        table.editable = ( enabled ) => editables( 'td', enabled );
        table.show = me.show;
        table.hide = me.hide;
        table.zoom = me.zoom;
        table.save = me.save;
        table.load = me.load;
        table.download = me.download;
        me.adopt( table, parent );
        me.state = {};
        me.state.table = table;
    }

    me.repopulate = function( id, coreDoc, schema, title, parent ) {
    	me.create( id, title, parent );
    	const table = me.state.table;
       	const rawTable = me.parseCoreDoc( coreDoc || me.tableCoreDoc );
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
        const title  = me.safeTitle();
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

    me.test = function( id ) {
        	me.repopulate(
            id , me.tableCoreDoc2 ,
            [] , "Example"
        	);
    }

    me.safeFileName = function( s ) {
        s = ( str( s ) ? s.trim() : "" );
        return ( s ? s : "chachi-table" ) + ".html";
    }

    me.safeCacheKey = function( s ) {
        return ( me.safeTitle( s ) + " (HTML)" );
    }

    me.safeTitle = function( s ) {
        const table = me.state.table;
        s = ( str( s ) ? s : table.title ).trim();
        return ( s || "Chachi Table" );
    }

    me.safeID = function( s ) {
        s = str( s ) ? s.trim() : "";
        return ( s ? s : "table-" + TiGG() );   // tigg.js
    }

me.tableCoreDoc2 = ( `
Index | Key          | Value
0     | SAT          | 100 %
1     | Brad Pitt    | Actor 
2     | Ada Lovelace | Famous Inventor
` );

me.tableCoreDoc = ( `
Key  | Value        | Remarks
SAT  | 100%         | Best Score Ever!
dude | Brad Pitt    | Actor
gal  | Ada Lovelace | Famous Inventor
` );

    me.uploadHTML = async function( id, url ) {
        async function upload( url ) {
            return await fetch( url ).then( r => r.text() );
        }
        function writeHTML( html ) {
            const table = me.state.table;
            const div = ella( 'div' );
            div.innerHTML = html;
            let t = div.querySelector( 'table' );
            if ( t ) {
                table.innerHTML = t.innerHTML;
            } else {
                const th = div.querySelector( 'thead' );
                if ( th ) {
                    const tb = div.querySelector( 'tbody' );
                    if ( tb ) {
                        th.remove();
                        tb.remove();
                        table.innerHTML   = "";
                        table.tHead = th;
                        table.appendChild( tb );
                    }
                }
            }
        }
        me.create( id );
        id = me.state.table.id;
        return await upload( url ).then( writeHTML );
    }

    me.uploadCoreDoc = async function( id, url ) {
        async function upload( url ) {
            return await fetch( url ).then( r => r.text() );
        }
        me.create( id );
        id = me.state.table.id;
        return await upload( url )
            .then( cdoc => me.repopulate( id, cdoc ) );
    }

    function init() {
        function missing( what ) {
            throw new Error( "Missing " + what );
        }
        if ( "function" !== typeof TiGG ) {
            missing( "tigg.js" );
        }
        if ( "function" !== typeof barney ) {
            missing( "legends.js" );
        }
        if ( "function" !== typeof editables ) {
            missing( "editables.js" );
        }
        if ( "object" !== typeof Status ) {
            missing( "global Status object" );
        }
        const _t_ = me.isType = Status.isType;
        str = _t_.string;
        tbl = _t_.table;
        elm = _t_.gadget;
        edt = _t_.editor;
        console.log( "🎉 Initialized Chachi Table" );
    }

    addEventListener( 'load', init );

} ) ( ChachiTable );


const ChachiKeyHandler = {};

;( (me) => {

    let str, tbl, edt, elm;

    me.ascii = function( s ) {
        return s.toUpperCase().charCodeAt( 0 );
    }

    me.handled = function( event ) {
        if ( event instanceof Event ) {
            event.stopPropagation();
            event.preventDefault();  
        }
    }

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
            me.handled( event );
            me.insertText( "\t", target );
            return true;
        }
        if (! event.altKey ) { return false; }
        switch ( event.keyCode ) {
        case 13 : return exec();  // Below
        case me.ascii( 's' ) : return download(); // Below
        default : return false;
        }
        function download() {
            me.handled( event );
            try {
                target.download();
            } catch ( e ) {
                Status.report( e );
            }
            return true;
        }
        function exec() {
            if ( target.id !== 'sce' ) { return false; }
            me.handled( event );
            try {
                const sce = gid( 'sce' );
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

    function container( o ) {
        return o.classList.contains( "container" );
    }

    me.container = container;

    function keisha( event ) {
        if ( me.metaKey( event ) ) { return; }
        const code = event.keyCode;
        if ( me.editorAction( event ) ) { return; }
        if ( me.tableAction( event ) ) { return; }
        let target = event.target;
        switch ( code ) {
            case me.ascii( 'z' ) : {
                if (! container( target ) ) {
                     target = target.parentElement;
                }
                if (! container( target ) ) { return; }
                me.handled( event );
                target.requestFullscreen();
                return;
            }
        }
    }

    me.keisha = keisha;

    function initAction( gadget, type, action ) {
        gadget.addEventListener( type, action );
    }

    me.initAction = initAction;

    function initTabClick( tab ) {
        const key = 'pressed';
        function toggle( event ) {
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

    function init() {
        if ( "function" !== typeof thelma ) {
            missing( "legends.js" );
        }
        if ( "object" !== typeof Status ) {
            missing( "global Status object" );
        }
        addEventListener( 'keydown', keisha );
        initMouseActions();
        const _t_ = me.isType = Status.isType;
        str = _t_.string;
        tbl = _t_.table;
        elm = _t_.gadget;
        edt = _t_.editor;
        console.log( "🎉 Initialized Chachi Key Event Handler" );
    }

    addEventListener( 'load', init );

} ) ( ChachiKeyHandler );


console.log( "📃 Loaded chachi-table.js" );


/*
    > Last Updated : 2025-SEP-20 ~ Omega
*/

/* 

This is part of tabbed-gadgets.css in Chippy's style folder
on the Omega host.

.pressed {
    animation : @pressed 1s 1;
}

@keyframes pressed {  
    0%)   { transform : scale( 1.0  ); }
    50%)  { transform : scale( 0.75 ); }
    100%) { transform : scale( 1.0  ); }
}

*/
