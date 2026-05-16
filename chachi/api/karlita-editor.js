
/* karlita-editor.js */

// + karlita | Keydown event handler
function karlita( event ) {
    const ed = event.target;
    const code = event.keyCode;
    if ( is_modifier( code ) ) return;
    if ( event.ctrlKey  ) return;
    if ( event.metaKey  ) return;
    if ( event.shiftKey ) {
        if ( event.altKey ) {
            if ( code === 46 ) {
                mine( event );
                if ( ed.locked ) { return; }
                const sib = ( 
                     ed.previousSibling 
                  || ed.nextElementSibling
                  || document.querySelector( "TEXTAREA" )
                );
                ed.remove();
                if ( sib ) { sib.focus(); }
                return;
            }
        }
        return;
    }
    if ( event.altKey ) {
        if ( code === 13 ) {
            mine( event );
            exec( ed );
            return;
        }
        if ( code === ascii( "Z" ) ) {
            mine( event );
            zoom( ed );
            return;
        }
        if ( code === ascii( "X" ) ) {
            mine( event );
            swap_memo( ed );
            return;
        }
        if ( code === ascii( "R" ) ) {
            mine( event );
            persist_editor( ed );
            return;
        }
        if ( code === ascii( "W" ) ) {
            mine( event );
            recover_editor( ed );
            return;
        }
    }
    if ( code === 9 ) {
        mine( event );
        replace_text( ed, "\t" );
    }
}

// + karlita.title   | User friendly title
// + karlita.version | Manuscript Version
// + karlita.updated | Date of last changes
// + karlita.tidate  | Date of registration
// + karlita.tikey   | Registration ID

karlita.title   = "Karlita Editor";
karlita.version = "1.1";
karlita.updated = "2026-MAY-12";
karlita.tidate  = "2026-APR-08";
karlita.tikey   = "35700578-333e-11f1-b3e1-cf7a2b15b449";

// + karlita.hotkeys | Hotkey Definition Map
karlita.hotkeys = {
  "TAB" : "Insert TAB Character"
, "ALT+ENTER" : "Run Script"
, "ALT+Z" : "Full Screen Mode"
, "ALT+X" : "Exchange Memo"
, "ALT+R" : "Read Store Entry"
, "ALT+W" : "Write Store Entry"
, "ALT+SHIFT+DELETE" : "Remove Editor"
};

// + karlita.links | Links to related content
karlita.links = {
  "jefr"       : "http://dave-jefr/~/api/just/karlita-editor.js"
, "legacy"     : "http://dave-legacy/~/api/just/karlita-editor.js"
, "netwide"    : "http://192.168.1.3/shares/42/api/karlita-editor.js"
, "cloud"      : "https://drive.google.com/drive/folders/18leGZPGC9Dk66Ra7CoWIKVI0u_QQ9Htq"
, "sheet"      : "https://docs.google.com/spreadsheets/d/1gZenUc5Y4bjOcCQLkuqRa7XwvmAT3If2aBaH1NrIUJI/edit"
, "morpheus"   : "https://nyteowldave.github.io/chachi/api/karlita-editor.js"
, "whiteboard" : "https://whiteboard.cloud.microsoft/me/whiteboards/6729c449-c4df-4795-9b02-0fc607d1feed"
, "mathjs"     : "https://unpkg.com/mathjs@14.5.2/lib/browser/math.js"
};

// + karlita.message | Alert or message (if available)
karlita.message = function( msg ) {
    msg = ( msg || "" );
    if ( "function" === typeof message ) {
        message( msg );
    } else {
        alert( msg );
    }
};

// + karlita.request | Request content from URL
karlita.request = function( url, accept, reject ) {
    function cool( s ) {
       console.log( { result : s } );
    }
    function dang( e ) {
       console.error( e );
    }
    accept = ( accept || cool );
    reject = ( reject || dang );
	return fetch( url )
	. then  ( r => r.text() )
	. then  ( accept )
	. catch ( reject );
};

// + karlita.acquire | Import API Module
karlita.acquire = function( url ) {
    const doc = document;
    const elx =( t )=> doc.createElement( t );
    const arr =( o )=> Array.from( o );
    const all =( q )=> arr( doc.querySelectorAll( q ) );
    const want =( o )=> ( o.src === url );
    const mods = ( 
        all( "SCRIPT" ) 
        . filter( want )
    );
    if ( mods.length ) {
        mods[ 0 ].remove();
    }
    const mod = elx( "SCRIPT" );
    doc.head.appendChild( mod );
    mod.src = ( url );
    return ( mod );
};

karlita.math = function() {
    const url = karlita.links.mathjs;
    console.info( "Acquiring Math JS" );
    return ( karlita.acquire( url ) );
};

// + karlita.edit | Edit Karlita's API Module
karlita.edit = function( ed, url ) {
	url = ( url || karlita.links.morpheus );
	function accept( s ) {
		if ( ed ) { 
            ed.value = s; 
            ed.address = url;
        }
		else { 
            console.info( s );
        }
	}
	return karlita.request( url, accept );
};

// + mine | Signal event was handled
function mine( event ) {
    const ev = event;
    if ( ev instanceof Event ) {
        ev.preventDefault();
        ev.stopPropagation();
    }
}

// + ascii | Obtain ASCII character code from string
function ascii( s ) {
    const c = s.charAt( 0 ).toUpperCase();
    return ( c ).charCodeAt( 0 );
}

// + is_modifier | Verify arg is a modifier key code
function is_modifier( code ) {
    return [ 16, 17, 18, 91, 92 ].includes( code );
}

// + replace_text | Replaced Editor's selected text
function replace_text( ed, t ) {
    const old = ed.value;
    const n = ed.selectionStart;
    ed.value = [
         old.slice( 0, n )
       , old.slice( ed.selectionEnd )
    ] . join( t );
    ed.selectionStart =
    ed.selectionEnd = ( n + t.length );
    ed.focus();
    return ( ed );
}

// + init_editor | Initialize Karlita Editor
function init_editor( ed ) {
    ed.addEventListener( "keydown", karlita );
    ed.style.tabSize = "4";
    ed.wrap = "off";
    ed.spellcheck = false;
    ed.classList.add( "siox" );
    return ( ed );
}

// + swap_memo | Exchange editor value and memo properties
function swap_memo( ed ) {
    if ( ed.classList.contains( "swapped" ) ) {
        ed.classList.remove( "swapped" );
    } else {
        ed.classList.add( "swapped" );
    }
    const tmp = ed.value;
    ed.value = ( ed.memo || "" );
    ed.memo = tmp;
    return ( ed );
}

// + swap_memo.style | CSS for .swapped class
swap_memo.style = ( `
.swapped {
    color : midnightblue   !important;
    background : lime      !important;
}
` );

// + get_store | Obtain reference to Browser Data Store
function get_store() {
    const s = localStorage;
    if ( null === s ) {
        karlita.message(
            "Agent doesn't support Data Store"
        );
        return ( null );
    }
    return ( s );
}

// + create_editor_manuscript | Create manuscript for editor
function create_editor_manuscript( ed ) {
    const store_key = ( ed.store_key );
    const title     = ( ed.title || karlita.title );
    const id        = ( ed.id || "" );
    const version   = ( karlita.version );
    const agent     = ( navigator.userAgent );
    const origin    = ( location.href );
    const when      = ( (new Date()).toLocaleString() );
    const wants     = [ "karlita-editor.js" ];
    const value     = ( ed.value );
    const memo      = ( ed.memo || "" );
    const man = {
          store_key
        , title , id     , version
        , agent , origin , when
        , wants , value  , memo
    };
    return ( man );
}

// + persist_editor | Write editor manuscript to store
function persist_editor( ed ) {
    const store = get_store();
    if ( store ) {
        const k = input_store_key( ed );
        if (! k ) {
            karlita.message( "Cancelled" );
            return;
        }
        const man = create_editor_manuscript( ed );
        const v = JSON.stringify( man, null, 2 );
        store.setItem( k, v );
        karlita.message( `Wrote "${k}" to Store` );
    }
}

// + recover_editor | Read editor manuscript from store
function recover_editor( ed ) {
    const store = get_store();
    if ( store ) {
        const k = input_store_key( ed );
        if (! k ) {
            karlita.message( "Cancelled" );
            return;
        }
        try {
            const v = store.getItem( k );
            if ( null === v ) {
                throw new Error( `Can't find Store Key : "${k}"` );
                return;
            }
            const man = JSON.parse( v );
            let n0 = parseFloat( man.version     );
            let n1 = parseFloat( karlita.version );
            if ( n0 < n1 ) {
                throw new Error( `Invalid manuscript version` );
            }
            ed.manuscript = man;
            ed.title = ( man.title || "" );
            ed.value = ( man.value || "" );
            ed.memo  = ( man.memo  || "" );
            karlita.message( `Read "${k}" from Store` );
        } catch ( e ) {
            karlita.message( e.message );
        }
    }
}

// + input_store_key | Prompt user for store key
function input_store_key( ed ) {
    let k = ( ed.store_key || "editor-store-key.js" );
    let s = window.prompt(
          "Editor Store Key?"
        , k
    );
    if (! s ) { return ( null ); }
    s = s.trim();
    if (! s ) { return ( null );  }
    return ( ed.store_key = ( s ) );
}

// + unzoom | Restore normal screen mode
function unzoom( event ) {
    const ge = event.target;
    ge.classList.remove( "zoomed" );
    ge.removeEventListener( "blur", unzoom );
}

// + zoom | Request full screen mode
function zoom( ge ) {
    try {
        ge.requestFullscreen();
        ge.focus();
        ge.classList.add( "zoomed" );
        ge.addEventListener( "blur", unzoom );
        return ( ge );
    } catch ( e ) {
        alert ( e );
    }
}

// + zoom.style | CSS for .zoom class
zoom.style = ( `
.zoomed {
    color : midnightblue   !important;
    background : mintcream !important;
}
` );

// + zoom.init | Initialize zoom style
zoom.init = function() {
    const doc = document;
    const he = doc.querySelector( "HEAD" );
    const se = he.appendChild(
        doc.createElement( "STYLE" )
    );
    se.innerHTML = [
      	  zoom.style
    	, swap_memo.style
    ] . join( "\n" );
};

addEventListener( "load" , function() {
    zoom.init();
} );

// + exec | Run Editor content as JavaScript
function exec( ge ) {
    try {
        ge.prior = ( ge.input || "" );
        ge.input = ge.value;
        ge.output = window.eval( ge.input );
        delete ge.error;
    } catch ( e ) {
        alert ( e );
        ge.error = ( e.message );
        delete ge.output;
    }
    return ( ge );
}

KarlitaOps = {
  karlita
, mine, ascii
, is_modifier
, replace_text, init_editor
, swap_memo, exec, zoom, unzoom
, get_store
, persist_editor
, recover_editor
, input_store_key
, create_editor_manuscript
, members : function( o ) {
    o = (
          ( o instanceof Object )
        ? ( o )
        : ( KarlitaOps )
    );
    return (
        Object
        . keys( o )
        . sort()
    );
}
};

console.info( `🦩 Loaded "karlita-editor.js" API Ⓜ️ Module` );
console.info( `🧙‍ Remember to call KarlitaOps.init_editor() ...` );

