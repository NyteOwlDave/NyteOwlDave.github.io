<head> <link rel="icon" href="./icons/mynotepad.png" /> </head>

<style>
@import url("./../std/style/every-page.css");
</style>
<style>
html {
    background-image : url("./../art/png/galaxy-station-bgi.png");
    background-size  : cover;
}
body {
    background : transparent;
}
</style>
<style>
.dock-right {
    box-sizing : border-box;
    position   : fixed;
    top        : 0;
    left       : 0;
    width      : 50vw;
    max-width  : calc( 100vw - 18px );
    height     : calc( 100vh - 80px );
    border     : none;
    outline    : none;
    font       : 14pt monospace;
    padding    : 0.25ch 1.25ch;
    resize     : horizontal;
    overflow   : scroll;
    z-index    : 999942;
}
#sce:focus ,
#sce {
    color : #080842;
    background : mintcream;
}
</style>
<style>
footer {
    text-align : left;
}
footer span {
    user-select : none;
    cursor : pointer;
}
footer input {
    display : inline-block;
    width   : calc( 100vw - 340px );
}
</style>
<style>
.button-right {
    box-sizing  : border-box;
    display     : inline-block;
    min-width   : 3.2ch;
    margin-left : 0.1ch;
    height      : 4ch;
    line-height : 4ch;
    border      : none;
    border-radius : 12px;
    font : 13pt monospace;
    padding : 11px;
    text-align : center;
}
.button-right:hover {
    background : #000A;
    color : mintcream;
    box-shadow : 0px 0px 9px gold;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<textarea id="sce" class="dock-right" wrap="off">
// session-editor.html
</textarea>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<footer>
 <input id="footer_input" onchange="perfecto(event)" />
 <select id="task_droplist">
   <option  value="accept()">✅ Accept Changes</option>
   <option  value="reject()">❎ Reject Changes</option>
   <option value="refresh()">🔄 Refresh Editor</option>
   <option value="catalog()">🔐 Show Session Keys</option>
   <option    value="zoom()">💠 Zoom Editor</option>
   <option    value="home()">🏠 Home</option>
   <option value="persist()">🔏 Persist Session</option>
   <option value="recover()">🔓 Recover Session</option>
   <option  value="remove()">🗑️ Remove Session</option>
 </select>
 <span class="button-right" id="btn_invoke" onclick="invoke(event)">🆗</span>
</footer>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="iwm.js">
; iwm = Object.keys( window ).sort()
</script>

<script id="doc.js">
; doc = document
</script>

<script id="debug.js">
; cls =()=> console.clear()
; agn =()=> location.reload()
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="global-props.js">
const sce = doc.getElementById( "sce" );
</script>

<script id="main.js">
function main( event ) {
    try {
        doc . title = "Session Editor";
        init_ui();
        session . read();
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<script id="page-load.js">
addEventListener( "load", main );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="session.js">
session = {};
</script>

<script id="session-props.js">
session.store = sessionStorage;
session.key = "Session Editor Content";
</script>

<script id="session-read.js">
session.read = function() {
    const store = session.store;
    const key   = session.key;
    sce.value = (
        store.getItem( key ) || sce.value
    );
    sce.recent = ( sce.value );
    console.log( `Read "${key}" from Session` );
};
</script>

<script id="session-write.js">
session.write = function() {
    const store = session.store;
    const key   = session.key;
    store.setItem( key, sce.value );
    console.log( `Wrote "${key}" to Session` );
};
</script>

<script id="session-catalog.js">
session.catalog = function() {
    const m = Object.keys( session.store );
    const v = m.sort();
    v.unshift( `[ Session Keys ]\n` );
    alert ( v.join( "\n" ) );
};
</script>

<script id="session-persist.js">
session.persist = function() {
    const w = ( `Persist Entire Session to Store?` );
    if (! prompt( w ) ) { return; }
    const stg = localStorage;
    const ssg = sessionStorage;
    const key = session.key;
    const value = JSON.stringify( ssg, null, 2 );
    stg.setItem( key, value );
    console.log( `Wrote "${key}" to Store` );
};

</script>

<script id="session-recover.js">
session.recover = function() {
    const w = ( `Recover Entire Session from Store?` );
    if (! prompt( w ) ) { return; }
    const stg = localStorage;
    const ssg = sessionStorage;
    const key = session.key;
    const value = stg.getItem( key );
    if ( null === value ) {
        alert( `Missing Store Key:\n"${key}"` );
        return;
    }
    const man = JSON.parse( value );
    if ( Array.isArray( man ) ) {
        const k = "Imported Array Object";
        ssg.setItem( k , man );
        console.log( `Imported an Array from Store` );
        console.log( `Session Key : "${k}"` );
        return;
    }
    if ( man instanceof Object ) {
        const m = Object.keys( man );
        ( m )
        . forEach(
            ( k ) => {
                ssg.setItem( k, man[ k ] );
            }
        );
        console.log( `Read "${key}" from Store` );
        const n = m.length;
        if ( n < 1 ) {
            console.log( `No Keys were Processed` );
        } else if ( n === 1 ) {
            console.log( `Just One Key was Processed` );
        } else {
            console.log( `Keys Processed : ${m.length}` );
        }
    } else {
        const k = "Imported Primitive";
        ssg.setItem( k , man );
        console.log( `Imported a Primitive from Store` );
        console.log( `Session Key : "${k}"` );
        return;
    }
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="perfecto.js">
function perfecto( event ) {
    try {
        const ie = event.target;
        const js = ( ie.value );
        exec( js );
    } catch ( e ) {
        alert( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="visit.js">
function visit( url ) {
    const a = doc.createElement( "A" );
    a . href = ( url );
    a . setAttribute( "target", url );
    a . click();
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="home.js">
function home( event ) {
    try {
        let p, s;
        p = location.origin;
        if ( p.startsWith( "file:" ) ) {
            p = "http://dave-omega";
        }
        if ( p.includes( "github.io" ) ) {
            s = ( `notes` );
        } else {
            s = ( `app/morpheus/notes` );
        }
        const k = ( `session-editor.html` );
        const u = [ p, s, k ].join( "/" );
        visit( u );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="accept.js">
function accept( event ) {
    try {
        session.write();
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="reject.js">
function reject( event ) {
    try {
        sce.value = sce.recent;
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="perfecto.js">
function refresh( event ) {
    try {
        session.read();
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="catalog.js">
function catalog( event ) {
    try {
        session.catalog();
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="zoom.js">
function zoom( o ) {
    try {
        o = ( o || sce );
        o.requestFullscreen();
        o.focus();
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="exec.js">
function exec( js ) {
    const ops = exec;
    const str =( s )=> String( s || "" ).trim();
    try {
        js = str( s );
        if (! js ) { return; };
        ops.prior = String( ops.input || "" );
        ops.gems.add( js );
        ops.input = ( js );
        ops.output = window.eval( ops.input );
        ops.error = "";
    } catch ( e ) {
        console.error( e );
        ops.error = ( e.message );
        ops.output = "";
    }
}
;
; exec.prior  = ""
; exec.input  = ""
; exec.output = ""
; exec.error  = ""
; exec.gems = ( new Set() )
;
</script>

<script id="exec-compose-gems.js">
exec.compose_gems = function() {
    function hr() {
        return String( "-" ).repeat( 64 );
    }
    const m = Array.from( exec.gems );
    const line = [ "\n", hr(), "\n" ].join("");
    const v = m.join( line );
    return ( v );
};
</script>

<script id="exec-add-gem-module.js">
exec.add_gem_module = function( id ) {
    const se = doc.getElementById( id );
    if ( se ) {
        exec.gems.add( se.innerText );
        console.log( `Added Gem for Gadget : "${id}"` );
    } else {
        alert( `No Such Gadget ID : "${id}"` );
    }
};
</script>

<script id="exec-edit-gems.js">
exec.edit_gems = function() {
    sce.value = exec.compose_gems();
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="invoke.js">
function invoke( event ) {
    const ge = doc.getElementById( "task_droplist" );
    const js = ge.value;
    exec( js );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="init-ui.js">
function init_ui() {
  btn_invoke.title = "❇️ Execute Task";
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

