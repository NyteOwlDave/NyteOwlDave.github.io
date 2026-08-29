
/* canedit.js */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function canedit( o, en=true ) {
    if ( "string" === typeof o ) {
         o = all( o );
    }
    if ( Array.isArray( o ) ) {
        ( o )
        . forEach(
            ( ge ) => canedit( ge, en )
        );
        return;
    }
    if ( o instanceof HTMLElement ) {
        const CE = "contenteditable";
        if ( en ) {
            o.setAttribute( CE, "true" );
        } else {
            o.removeAttribute( CE );
        }
        return;
    }
    canedit.ignored.add( o );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; canedit.ignored = ( new Set() )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

canedit.inspect = function() {
    const c = console;
    c.clear();
    c.group( "Ignored Item List" );
    c.table( [ arr( canedit.ignored ) ] );
    c.groupEnd();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

canedit.reset = function() {
    return (
        canedit.ignored = ( new Set() )
    );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

canedit.show = function() {
    const m = Object.keys( canedit ).sort();
    ( m ).unshift( "[ canedit ]\n" );
    alert( m.join( "\n" ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

canedit.assist = function() {
    const t = arr( Object.keys( canedit ).sort() );
    t.unshift( "Member" );
    const c = console;
    c.clear();
    c.group( "[ canedit ]" );
    c.table( t );
    c.groupEnd();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "canedit.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

