
/* hud.js */

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function hud( show ) {
    if ( "undefined" === typeof show ) {
        return hud.toggle();
    }
    if ( show ) {
        return hud.show();
    } else {
        return hud.hide();
    }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

;
; hud.title    = ( "Heads-Up Editor" )
; hud.tikey    = ( "8e314b66-9e0c-11f1-b5f8-e3977ca2d89c" )
; hud.updated  = ( "2026-AUG-22" )
; hud.storekey = ( "heads-up-editor.js" )
; hud.template = ( "http://dave-omega/demo/web/gadgets/hud-app.html" )
; hud.cnames = [ "hide" ]
; hud.types  = [ "TEXTAREA" ]
;

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.zoom = function( o ) {
    const ed = ( o || hud.editor() );
    ed.classList.remove( "hide" );
    ed.requestFullscreen();
    ed.focus();
}

hud.show = function( o ) {
    const ed = ( o || hud.editor() );
    ed.classList.remove( "hide" );
    return ( ed );
};

hud.hide = function( o ) {
    const ed = ( o || hud.editor() );
    ed.classList.add( "hide" );
    return ( ed );
};

hud.toggle = function( o ) {
    if ( hud.hidden( o ) ) {
        return hud.show( o );
    } else {
        return hud.hide( o );
    }
};

hud.hidden = function( o ) {
    const ed = ( o || hud.editor() );
    return ( ed.classList.contains( "hide" ) );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.editor = function() {
    const doc = document;
    const gid =( i )=> ( doc.getElementById( i ) );
    return (
          gid( "sce" )
       || gid( "hud_editor" )
       || gid( "hud-editor" )
    );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.assist = function() {
    const m = hud.members();
    m.unshift( "〖 HUD Members 〗\n" );
    alert( m.join( "\n" ) );
}

hud.inspect = function() {
    const m = hud.members();
    const c = console;
    c.groupCollapsed( "HUD Members" );
    c.table( m );
    c.groupEnd();
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.members = function() {
    return Object.keys( hud ).sort();
}

hud.peek = function( key, session ) {
    const store = (
          ( session )
        ? ( sessionStorage )
        : ( localStorage   )
    );
    if (! store ) {
        message( `Store is Unavailable` );
        return;
    }
    key = ( str( key ) || ( hud.storekey ) );
    return ( store.getItem( key ) );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.persist = function( key, session ) {
    const store = (
          ( session )
        ? ( sessionStorage )
        : ( localStorage   )
    );
    if (! store ) {
        message( `Store is Unavailable` );
        return;
    }
    key = ( str( key ) || ( hud.storekey ) );
    const value = hud.editor().value;
    store.setItem( key, value );
    if ( session ) {
        message( `Wrote "${key}" to Session` );
    } else {
        message( `Wrote "${key}" to Store` );
    }
}

hud.recover = function( key, session ) {
    const store = (
          ( session )
        ? ( sessionStorage )
        : ( localStorage   )
    );
    if (! store ) {
        hud.jot( `Store is Unavailable` );
        return;
    }
    key = ( str( key ) || ( hud.storekey ) );
    const value = store.getItem( key );
    if ( null === value ) {
        hud.message( `No Entry for Key : "${key}"` );
        return;
    }
    hud.editor().value = ( value );
    if ( session ) {
        hud.message( `Read "${key}" from Session` );
    } else {
        hud.message( `Read "${key}" from Store` );
    }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.run = function() {
    const ed = hud.editor();
    try {
        ed.prior = ( ed.input || "" );
        ed.input = ( ed.value );
        ed.output = window.eval( ed.input );
        ed.error = "";
    } catch ( e ) {
        console.error( e );
        ed.error = ( e.message );
        ed.output = "";
    }
    return ( ed );
};

hud.clear = function() {
    const ed = hud.editor();
    ed.value = "";
    return ( ed );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.memo = function() {
    const ed = hud.editor();
    return ( ed.memo || "" );
};

hud.memo.save = function() {
    const ed = hud.editor();
    ed.memo = ed.value;
    return ( ed );
};

hud.memo.load = function() {
    const ed = hud.editor();
    ed.value = ( ed.memo || "" );
    return ( ed );
};

hud.memo.swap = function() {
    const ed = hud.editor();
    const cl = ed.classList;
    if ( cl.contains( "swapped" ) ) {
        cl.remove( "swapped" );
    } else {
        cl.add( "swapped" );
    }
    const old = ( ed.value );
    ed.value = ( ed.memo || "" );
    ed.memo = ( old );
    return ( ed );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.stack = function() {
    const ed = hud.editor();
    const stack = ( ed.stack || [] );
    return ( ed.stack = stack );
};

hud.stack.push = function() {
    const ed = hud.editor();
    const stack = hud.stack();
    const value = ed.value;
    if (! value ) { return; }
    if ( stack.includes( value ) ) {
        stack.remove( value );
    }
    stack.push( value );
    return ( ed );
};

hud.stack.pop = function() {
    const ed = hud.editor();
    const stack = hud.stack();
    const value = stack.pop();
    if ( value ) {
        ed.value = ( value );
    }
    return ( ed );
};

hud.stack.rotate = function() {
    const ed = hud.editor();
    const value = ed.value;
    hud.stack.pop();
    if ( value ) {
        ed.stack.shift( value );
    }
    return ( ed );
};

hud.stack.compact = function() {
    const ed = hud.editor();
    const stack = ( ed.stack || [] );
    const m = new Set( stack );
    ed.stack = Array.from( m );
    return ( ed );
};

hud.stack.clear = function() {
    const ed = hud.editor();
    ed.stack = [];
    return ( ed );
};

hud.stack.reverse = function() {
    const ed = hud.editor();
    const stack = ( ed.stack || [] );
    ed.stack = stack.reverse();
    return ( ed );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.mem = function( o, rex ) {
    o = ( o || window );
    let m = Object.keys( o ).sort();
    if ( rex = str( rex ) ) {
        rex = new RegExp( rex );
        m = m.filter( ( k ) => ( rex.test( k ) ) );
    }
    const ed = hud.editor();
    ed.value = ( m.join( "\n" ) );
    return ( ed );
};

hud.dir = function( rex ) {
    let o = localStorage;
    if ( null === o ) {
        return hud.mem( {} );
    } else {
        return hud.mem( o, rex );
    }
};

hud.tmp = function( rex ) {
    let o = sessionStorage;
    if ( null === o ) {
        return hud.mem( {} );
    } else {
        return hud.mem( o, rex );
    }
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.hello = function() {
    return hud.mem( hud );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.message = function( s ) {
    if ( "function" === typeof message ) {
        return message( s );
    };
    s = str( s );
    if (! s ) { return; }
    hud.jot( s );
    return ( s );
};

hud.blurt = function( s ) {
    hud.jot( s );
    window.alert( s );
    return ( s );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

hud.jit = function( s ) {
    console.info( s );
    return ( s );
};

hud.jot = function( s ) {
    console.log( s );
    return ( s );
};

hud.jut = function( s ) {
    console.warn( s );
    return ( s );
};

hud.jyt = function( s ) {
    console.debug( s );
    return ( s );
};

hud.jet = function( e ) {
    console.error( e );
    return ( e );
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

( ( ops )=> {

ops.modkeys = function( event ) {
    const a = ( event.altKey   ? 0x01 : 0 );
    const c = ( event.ctrlKey  ? 0x02 : 0 );
    const m = ( event.metaKey  ? 0x04 : 0 );
    const s = ( event.shiftKey ? 0x08 : 0 );
    const k = ( a | c | m | s );
    return ( k );
};

ops.modkeys.ZERO  = 0x00;
ops.modkeys.ALT   = 0x01;
ops.modkeys.CTRL  = 0x02;
ops.modkeys.META  = 0x04;
ops.modkeys.SHIFT = 0x08;
ops.modkeys.MASK  = 0x0F;

ops.modkey = function( code ) {
    if ( code instanceof Event ) {
        code = code.keyCode;
    }
    const codes = ops.modkey.codes;
    return ( codes.includes( code ) );
};

ops.modkey.codes = [ 16, 17, 18, 91, 92 ];

ops.mine = function( ev ) {
    if ( ev instanceof Event ) {
        ( ev ).preventDefault();
        ( ev ).stopPropagation();
    }
    return ( ev )
};

ops.insert =
function insert( s ) {
    const ed = ops.editor();
    const t  = ( ed ).value;
    const n  = ( s  ).length;
    const lo = ( ed ).selectionStart;
    ed.value = [
        t.slice( 0, lo ) ,
        t.slice( ed.selectionEnd )
    ].join( s );
    ed.selectionStart = (
        ed.selectionEnd = ( lo + n )
    );
    ed.focus();
    return ( ed );
};

function keifer( event ) {
    const sender = event.target;
    const code = event.keyCode;
    const mods = ops.modkeys( event );
    if ( code === 145 ) {
        if ( mods ) { return; }
        ops.mine( event )
        hud();
        return;
    }
    if ( sender !== ops.editor() ) {
        return;
    }
    if ( mods & ops.modkeys.ALT ) {
        if ( code == 13 ) {
            ops.mine( event );
            ops.run();
            return;
        }
    }
    if ( code === 9 ) {
        if ( mods ) { return; }
        ops.mine( event )
        ops.insert( "\t" );
    }
}

function init() {
    const ed = ops.editor();
    const st = ed.style;
    st.tabSize = "4";
    ed.spellcheck = false;
};

addEventListener( "load", init );

addEventListener( "keydown", keifer );

} ) ( hud );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

;
; console.log( `Loaded "hud.js" API Module` );
;

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
