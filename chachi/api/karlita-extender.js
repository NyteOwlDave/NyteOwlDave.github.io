
/*
    karlita-extender.js
*/

function karlita_extender( event ) {
    const code = event.keyCode;
    const ge   = event.target;
    if ( ge.nodeName !== "TEXTAREA" ) {
        return;
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
        if ( code === ascii( "H" ) ) {
            const list = jst( karlita.hotkeys );
            const id = "karlita-hotkey.list";
            return edit_list( list, id );
        }
        if ( code === ascii( "L" ) ) {
            const list = jst( karlita.links );
            const id = "karlita-link.list";
            return edit_list( list, id );
        }
        if ( code === ascii( "M" ) ) {
            const list = KarlitaOps.members();
            const id = "karlita-ops-member.list";
            return edit_list( list, id );
        }
    }
    function edit_list( list, id ) {
        const ed = zed( list, 0, id );
        ed . title = ed . id;
        ed . focus();
        return mine( event );
    }
};

addEventListener( "keydown", karlita_extender );

