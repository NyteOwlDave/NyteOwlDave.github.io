
/* header-footer.js */

function init_header() {
    const o = ( `<` );
    const c = ( `>` );
    const block =( s )=> ( `${o}${s}${c}` );
    header.innerHTML = [
         block( `div id="messages"` )
       , block( `/div` )
    ].join("");
}

function init_footer() {
    const o = ( `<` );
    const c = ( `>` );
    const block =( s )=> ( `${o}${s}${c}` );
    footer.style.textAlign = "left";
    footer.innerHTML = [
         ( o )
       , ( `input id="footer_input" /` )
       , ( c )
    ].join("");
    const ie = gid( "footer_input" );
    ie.onchange = perform;
    ie.style.display = "inline-block";
    ie.style.width   = "calc( 100% - 100px )";
    if ( "function" === typeof hud ) {
        ie.value = "hud()";
    }
}

function begin_op( ops, event ) {
    ops . event = ( event );
    if ( event instanceof Event ) {
        event.preventDefault();
        event.stopPropagation();
    }
    return ( event );
}

function end_op( ops, o, e ) {
    ops . ouput = ( o );
    ops . error = ( e.message );
}

function action( event ) {
    const ops = action;
    try {
        begin_op( ops, event );
        const sender = event.target;
        const js = sender.getAttribute( "action" );
        ops.input = ( js );
        const o = exec( js );
        end_op( ops, o, "" );
    } catch ( e ) {
        end_op( ops, "", e );
    }
}

function perform( event ) {
    const ops = perform;
    try {
        begin_op( ops, event );
        const sender = event.target;
        const js = ( sender.value );
        ops.input = ( js );
        const o = exec( js );
        end_op( ops, o, "" );
    } catch ( e ) {
        end_op( ops, "", e );
    }
}

function exec( js ) {
    const ops = exec;
    try {
        const cmd = String( js || "" );
        if ( macro( cmd ) ) { return; }
        if ( ops.prior ) {
            ops.history.add( ops.prior );
        }
        ops.prior = String( ops.input || "" );
        ops.input = ( cmd );
        const o = window.eval( js );
        end_op( ops, o, "" );
        message( "OK!" );
    } catch ( e ) {
        end_op( ops, "", e );
        bummer( e );
    }
}

;
; exec.prior = ""
; exec.history = ( new Set() )
;

function macro( cmd ) {
    const ops = macro;
    try {
        cmd = String( cmd || "" ).trim();
        if (! cmd ) { return true; }
        const p = cmd.slice( 0, 1 );
        const t = cmd.slice( 1 ).trim();
        switch ( p ) {
        case "?"  : return _assist( t );
        case "@"  : return _visit ( t );
        case "."  : return _dot   ( t );
        case "~"  : return _user( p, t );
        case "`"  : return _user( p, t );
        case "!"  : return _user( p, t );
        case "@"  : return _user( p, t );
        case "#"  : return _user( p, t );
        case "$"  : return _user( p, t );
        case "%"  : return _user( p, t );
        case "^"  : return _user( p, t );
        case "&"  : return _user( p, t );
        case "*"  : return _user( p, t );
        case "-"  : return _user( p, t );
        case "_"  : return _user( p, t );
        case "="  : return _user( p, t );
        case "+"  : return _user( p, t );
        case "|"  : return _user( p, t );
        case "/"  : return _user( p, t );
        case "\\" : return _user( p, t );
        case ":"  : return _user( p, t );
        case ";"  : return _user( p, t );
        case "'"  : return _user( p, t );
        case "\"" : return _user( p, t );
        case ","  : return _user( p, t );
        case "."  : return _user( p, t );
        case "<"  : return _user( p, t );
        case ">"  : return _user( p, t );
        default   : return ( false );
        }
        function _assist( t ) {
            macro.visit( macro.address );
            return ( true );
        }
        function _visit( t ) {
            macro.visit( t );
            return ( true );
        }
        function _dot( t ) {
            macro.dot( t );
            return ( true );
        }
        function _user( p, t ) {
            const fn = ops.user_action[ p ];
            if ( "function" !== typeof fn ) {
                return ( false );
            }
            fn( t );
            return ( true );
        }
    } catch ( e ) {
        end_op( ops, "", e );
        bummer( e );
    }
    return ( false );
}

;
; macro.user_action = {};
; macro.address = "http://tiny.cc/ncs-macro-assist";
;

macro.dot = function( k ) {
    const p = ( `https://nyteowldave.github.io` );
    const s = ( `std/rockets` );
};

macro.visit = function( url ) {
    const d = document;
    const a = d.createElement( "A" );
    a . href = ( url );
    a . click();
};

macro.popup = function( url ) {
    const w = window;
    const o = macro.popup.options;
    return ( w ).open( url, url, o );
};

function message( s, silent ) {
    s = String( s || "" ).trim();
    if (! s ) { return; }
    if (! silent ) {
        console.log( s );
    }
    messages.textContent = ( `🟢 ${s}` );
    return ( s );
}

function dangit( s, silent ) {
    s = String( s || "" ).trim();
    if (! s ) { return; }
    if (! silent ) {
        console.warn( s );
    }
    messages.textContent = ( `🟡 ${s}` );
    return ( s );
}

function bummer( e, silent ) {
    let s;
    if ( e instanceof Error ) {
        s = e.message;
    } else {
        e = new Error( s = e );
    }
    if (! silent ) {
        console.error( e );
    }
    messages.textContent = ( `🔴 ${s}` );
    return ( e );
}

function analyze( o, title, silent ) {
    const _i = [ "Input"  , o.input  ];
    const _o = [ "Output" , o.output ];
    const _e = [ "Error"  , o.error  ];
    const _t = [ _i, _o, _e ];
    if ( silent ) {
        return ( _t );
    } else {
        const _s = ( title || "Results" );
        const _c = console;
        _c.clear();
        _c.group( _s );
        _c.table( _t );
        _c.groupEnd();
    }
};


