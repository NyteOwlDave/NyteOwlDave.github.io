
/*

# copy-ops.js

## Needs Module

- gideon-ops.js
- message-ops.js
- zed-ops.js

## Uses ID

- ghost_editor (indirect)

# CSS Class

- ghost (indirect)
- menu

<pre>

*/


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~~[ Copy Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function locate_above_any( sender ) {
    if ( sender instanceof Event ) {
        sender = sender.target;
    }
    let ge = sender;
    if ( ge.parentElement.classList.contains( "menu" ) ) {
        ge = ge.parentElement;
    }
    ge = ge.previousElementSibling;
    if (! ge ) {
        console.warn( "Unable to locate previous element" );
        return ( null );
    }
    return ( ge );
}

function locate_above_sibling( type, sender ) {
    if ( sender instanceof Event ) {
        sender = sender.target;
    }
    let ge = sender;
    if ( ge.parentElement.classList.contains( "menu" ) ) {
        ge = ge.parentElement;
    }
    type = str( type );
    if (! type ) {
        throw new TypeError(
            "Expected an Element Node Type"
        );
    }
    const match  =()=> ( (  ge ) && ( ge.nodeName === type   ) );
    const failed =()=> ( (! ge ) || ( ge.nodeName === "BODY" ) );
    while (! match( ge ) ) {
        if ( failed() ) {
            console.warn( "Unable to locate PRE element" );
            return ( null );
        }
        ge = ge.previousElementSibling;
    }
    return ( ge );
}

function locate_above_preview( sender ) {
    return locate_above_sibling( "PRE", sender );
}

function locate_above_editor( sender ) {
    return locate_above_sibling( "TEXTAREA", sender );
}

function copy_above_preview( sender ) {
    try {
        const vw = locate_above_preview( sender );
        if (! vw ) {
            throw new Error( "No prior PRE element was found" );
        }
        if ( "function" === typeof node ) {
            node.flash( vw );
        }
        write_clipboard( vw.innerText );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

function copy_above_editor( sender ) {
    try {
        const ed = locate_above_editor( sender );
        if (! ed ) {
            throw new Error(
                "No prior TEXTAREA element was found"
            );
        }
        if ( "function" === typeof node ) {
            node.flash( ed.value );
        }
        write_clipboard( ed );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

function copy_above_html( sender ) {
    try {
        const buddy = locate_above_any( sender );
        if (! buddy ) {
            throw new Error(
                "No prior sibling element was found"
            );
        }
        if ( "function" === typeof node ) {
            node.flash( vw );
        }
        write_clipboard( buddy.innerHTML );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

function write_clipboard( s ) {
    try {
        const old = doc.activeElement;
        const ed = get_ghost_editor();
        ed.value = ( s );
        ed.select();
        ed.focus();
        doc.execCommand( "copy" );
        if ( old ) { old.focus(); }
        message( `Wrote item to clipboard` );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}

;
; console.log( `Loaded "copy-ops.js" API Module` )
;


/*

</pre>

*/


