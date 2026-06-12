
/*
    karlita-extender.js
*/

function karlita_extender( event ) {
    const code = event.keyCode;
    const ge   = event.target;
    if ( ge.nodeName !== "TEXTAREA" ) {
        return;
    }
    const ops = karlita_extender;
    ops.editor = ge;
    if ( "function" === typeof ops.client ) {
        ops.client( event );
        if ( event.defaultPrevented ) {
            return;
        }
    }
    if ( event.ctrlKey || event.metaKey ) {
        return;
    }
    if ( event.altKey ) {
        if ( event.shiftKey ) {
            if ( code === 45 ) {
                return edit_list( "" );
            }
            return;
        }
        if ( code === ascii( "G" ) ) {
            const org =( k )=> ( iwm.includes( k ) );
            const our =( k )=> (! org( k ) );
            const m = Object.keys( window );
            const list = (
                ( m )
                . filter( our )
                . sort()
            );
            console.debug( { m, list } );
            const id = "client-global.list";
            return edit_list( list, id );
        }
        if ( code === ascii( "I" ) ) {
            const list = (
                all( `[id]` )
                . map( ge => ge.id )
                . sort()
            );
            const id = "gadget-id.list";
            return edit_list( list, id );
        }
        if ( code === ascii( "K" ) ) {
            const store = KarlitaOps.get_store();
            const list = Object.keys( store ).sort();
            const id = "store-key.list";
            return edit_list( list, id );
        }
        if ( code === ascii( "M" ) ) {
            const list = KarlitaOps.members();
            const id = "karlita-ops-member.list";
            return edit_list( list, id );
        }
        if ( code === ascii( "H" ) ) {
            const id = "karlita-hotkey-list.json";
            return edit_object( ops.hotkeys, id );
        }
        if ( code === ascii( "L" ) ) {
            const id = "karlita-link-list.json";
            return edit_object( karlita.links, id );
        }
    }
    function solo() {
        const ops = karlita_extender;
        const ed = ops.editor;
        if ( ed.classList.contains( "solo" ) ) {
            return ed;
        }
        return ( null );
    }
    function edit_ok( o, id ) {
        if ( "function" !== typeof zed ) {
            const c = console;
            c.clear();
            c.group( id );
            if (! Array.isArray( o ) ) {
                o = ops.tabbify( o );
            }
            c.table( o );
            c.groupEnd();
            karlita.message( `See the Console for Results` );
            return ( false );
        } else {
            return ( true );
        }
    }
    function edit_object( obj, id ) {
        let ed;
        if ( edit_ok( obj, id ) ) {
            ed = zed( jst( obj ), 0, id );
            ed . title = ed . id;
            ed . focus();
        } else if ( ed = solo() ) {
            ed . value = jst( obj );
            ed . title = ( id );
            ed . focus();
        }
        return mine( event );
    }
    function edit_list( list, id ) {
        let ed;
        if ( edit_ok( list, id ) ) {
            const ed = zed( list, 0, id );
            ed . title = ed . id;
            ed . focus();
        } else if ( ed = solo() ) {
            ed . value = list.join( "\n" );
            ed . title = ( id );
        }
        return mine( event );
    }
};

karlita_extender.client = null;
karlita_extender.editor = null;

karlita_extender.hotkeys = {
  "TAB" : "Insert TAB Character"
, "ALT+ENTER" : "Run Script"
, "ALT+Z" : "Full Screen Mode"
, "ALT+X" : "Exchange Memo"
, "ALT+R" : "Read Store Entry"
, "ALT+W" : "Write Store Entry"
, "ALT+G" : "Edit Global Client Members"
, "ALT+H" : "Edit Karlita Hot Keys"
, "ALT+I" : "Edit Gadget ID Values"
, "ALT+K" : "Edit Store Keys"
, "ALT+L" : "Edit Karlita Links"
, "ALT+M" : "Edit Karlita Members"
, "ALT+SHIFT+DELETE" : "Remove Editor"
, "ALT+SHIFT+INSERT" : "New Editor"
};

karlita_extender.tabbify = function( o, rex ) {
    const ops = karlita_extender;
    const m = Object.keys( o );
    const u = ops.filter( m, rex );
    return (
        ( u )
        . sort( )
        . map( 
            k => {
                const v = ( o[ k ]   );
                const t = ( typeof v );
                return ( [ t, k, v ] );
            }            
        )
    );
};

karlita_extender.filter = function( list, rex ) {
    if ( rex ) {
        rex = new RegExp( rex );
        return ( 
            ( list )
            . map( 
                k => ( rex.test( k ) ) 
            )
        );
    } else {
        return ( list );
    }
};

addEventListener( "keydown", karlita_extender );

console.info( `🦩 Loaded "karlita-extender.js" API Ⓜ️ Module` );

