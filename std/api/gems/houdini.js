
/* houdini.js */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function houdini( gadget ) {
    const HIDE = "hide";
    function visible( o ) {
        o = ( o || this );
        return o.classList.includes( HIDE );
    }
    function show( o ) {
        o = ( o || this );
        o . classList.remove( HIDE );
        return ( o );
    }
    function hide( o ) {
        o = ( o || this );
        o . classList.add( HIDE );
        return ( o );
    }
    function toggle( o ) {
        o = ( o || this );
        if ( visible( o ) ) {
            return hide( o );
        } else {
            return show( o );
        }
    }
    function zoom( o ) {
        o = ( o || this );
        o . requestFullscreen();
        o . focus();
        return ( o );
    }
    function resolve( o ) {
        const ops = houdini;
        return ( ops.resolve( o || this ) );
    }
    function hints( o, title ) {
        o = ( o || this );
        let t = String( title || "" ).trim();
        t = ( t || o.title || o.id || "Members" );
        const m = Object.keys( o ).sort();
        const v = Array.from( m );
        v.unshift( `[ ${t} ]\n` );
        window.alert( v.join( "\n" ) );
        return ( m );
    }
    const ge = resolve( gadget );
    ge.visible = visible;
    ge.hide    = hide;
    ge.show    = show;
    ge.toggle  = toggle;
    ge.zoom    = zoom;
    ge.hints   = hints;
    return ( ge );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

houdini.resolve = function( o ) {
    if ( o ) {
        if ( o instanceof HTMLElement ) {
            return ( o );
        }
        if ( "string" === typeof o ) {
            return document.getElementById( o );
        }
    }
    return ( null );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "houdini.js" Gem Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


