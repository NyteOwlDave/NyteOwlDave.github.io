<head>
<meta charset="utf-8">
<script>
document.title = "Document Loader";
document["📜"] = {};
document["📜"]["🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳"] = "2025-AUG-03";
document["📜"]["🔑"] = "fadf6278-bda8-46d9-a501-151f225ab89a";
</script>
<script src="https://nyteowldave.work/greystoke/api/thor.js"></script>
<script src="https://nyteowldave.work/greystoke/api/tigg.js"></script>
<script src="https://nyteowldave.work/greystoke/api/joni.js"></script>
<script src="https://nyteowldave.work/greystoke/api/legends.js"></script>
<script src="https://nyteowldave.work/greystoke/api/editables.js"></script>
<script src="https://nyteowldave.work/greystoke/api/energize.js"></script>
<script>
AppAgent = {};
AppAgent.holmes = navigator.userAgent.toLowerCase();
AppAgent.retext = AppAgent.holmes.includes( 'retext' );
</script>
</head>

<h1 contenteditable>JSON Loader</h1>

<div>
    <input id="address" placeholder="Enter URL for Document">
</div>

<menu>
    <button onclick="loadText()">Load</button>
    <button onclick="hints()">Hints</button>
</menu>

<pre id="sop"></pre>
<pre id="ser"></pre>

<footer>
<nav></nav>
<a href="./">Workspace</a>
<a href="http://dave-omega/42/dots/menu/doc-loader.html">Home</a>
</footer>

<script>
async function loadTextAsync( url ) {
    url = new URL( url );
    return await fetch( url.href )
        .then( resp => resp.text() )
        .then( text => { write( sop, text ); } )
        .catch( error => { write( ser, error ); }
}
</script>

<script>
function loadText() {
    try {
        const url = address.value.trim();
        loadTextAsync( url );
    } catch ( e ) {
        ser.value = e;
    }
}
</script>

<script>
function hints() {
write( sop, `
cute-dot-menu-1
cute-dot-menu-2
cute-dot-menu-3
...
cute-dot-menu-13
` );
}
</script>

<script>

function isGadget( gadget ) {
    return ( gadget instanceof HTMLElement );
}

function browserCheck() {
    if (! AppAgent.retext ) return;
    throw new TypeError( "☠️ Feature isn't available for ReText!", gadget );
}

function confirm( gadget ) {
    if ( isGadget( gadget ) ) return;
    throw new TypeError( "☠️ Not a gadget!", gadget );
}

function hasValue( gadget, content ) {
    confirm( gadget );
    return ( "string" === typeof gadget.value );
}

function generateKey() {
    throw new Error( "TODO!" );
}

function readKey( gadget ) {
    confirm( gadget );
    let k = gadget.title.trim()
        || attrib( gadget.id )
        || attrib( gadget.key )
        || input( gadget.id )
        || generateKey();
    return document.title + " : " + key;
}

function read( gadget ) {
    if (! isGadget( gadget ) ) {
        if ( gadget instanceof Object ) {
            return JSON.stringify( gadget, null, true );
        }
        return String( gadget );
    }
    if ( hasValue( gadget ) ) {
        return gadget.value;
    } else {
        return gadget.innerText;
    }
}

function write( gadget, content ) {
    if ( isGadget( content ) ) {
        content = read( content );
    }
    if ( hasValue( gadget ) ) {
        gadget.value = content || "";
    } else {
        gadget.innerText = content || "";
    }
    return gadget;
}

function append( gadget, content ) {
    const value = read( gadget );
    return write( gadget, value + content );
}

function clear( gadget ) {
    return write( gadget, "" );
}

function recover( gadget ) {
    let result = "🟢 OK";
    let cache = localStorage;
    try {
        browserCheck();
        const doc = localStorage.getItem( key );
        if ( doc === null ) {
            throw new Error( `⛔ No entry for 🔑 ${key}` );
        }
        try { 
            result = JSON.parse( doc );
            if ( result instanceof Object ) {
                doc = JSON.stringify( result, null, true );
            }
        } catch ( e ) { }
        write( gadget, doc );
    } catch ( e ) {
        console.error( e );
        if ( retext ) alert( e );
        result = e;
    }
    return { key, gadget, doc, result, cache };
}

function persist( gadget ) {
    let result = "🟢 OK";
    let cache = localStorage;
    let doc;
    try { 
        browserCheck();
        doc = read( gadget );
        localStorage.setItem( key, doc );
    } catch ( e ) {
        console.error( e );
        if ( retext ) alert( e );
        result = e;
    }
    return { key, gadget, doc, result, cache };
}

function download( gadget ) {
    const doc = read( gadget );
    const title = 
}

function dock( gadget, x, y, w, h ) {
    confirm( gadget );
}

function zoom( gadget ) {
    confirm( gadget );
}

function show( gadget ) {
    confirm( gadget );
}

function hide( gadget ) {
    confirm( gadget );
}

function toggle( gadget ) {
    confirm( gadget );
}

function details( gadget ) {
}

function keys( gadget ) {
}

function methods( gadget ) {
}

function attribs( gadget ) {
}

function types( gadget ) {
}

function create( id, title ) {
    const se = document.createElement( 'textarea' );
    se.id = id;
    se.title = parent;
    se.classList.add( "sio" );
    se.style.display = "none";
    se.exec = function() {
        try {
            return se.output = window.eval( read( se ) );
        } catch ( error ) {
            console.error( error );
            se.error = error;
            if ( AppAgent.retext ) {
                alert( error );
            }
        }
    }
}

function dismiss( gadget ) {
}

</script>

