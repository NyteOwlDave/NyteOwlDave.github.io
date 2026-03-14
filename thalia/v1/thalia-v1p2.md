
<script>
FAVORITES_STORE_KEY = "thalias-faves.html";
</script>

[wksp]:
<./>
"🗃️ Explore File System"

[now!]:
<http://dave-legacy/app/thalia/>
"🔐 Thalia ~ NOW!"

[legacy]:
<http://dave-legacy/app/thalia-v1/thalia-v1p2.html>
"🔐 Thalia 1.2 ~ Legacy"

[ryzen]:
<http://dave-ryzen/thalia/>
"🔐 Thalia 2 ~ Ryzen"

[omega]:
<http://dave-omega/app/thalia/>
"🔐 Thalia 2  ~ Omega"

[tower]:
<http://dave-tower/app/thalia/>
"🔐 Thalia 2  ~ Tower"

[zombie]:
<http://dave-zombie/app/thalia/>
"🔐 Thalia 2  ~ Zombie"

[lenovo]:
<http://dave-lenovo/app/thalia/>
"🔐 Thalia 2  ~ Lenovo"

[probook]:
<http://dave-probook/app/thalia/>
"🔐 Thalia 2  ~ Probook"

[pi]:
<http://dave-pi/app/thalia/>
"🔐 Thalia 2  ~ Pi"

[netwide]:
<http://192.168.1.3/shares/workspace/Thalia/>
"🔐 Thalia ~ Netwide"

[morpheus]:
<https://nyteowldave/github.io/thalia/thalia.html>
"🔐 Thalia ~ Morpheus"

<style>
body {
    margin-bottom : 42vh;
}
</style>

<style>
.choose-file {
    opacity : 0;
    position : fixed;
    display  : inline-block;
    left   : -2000px;
    height : 1px;
    width  : 1px;
}
</style>

<style>
.zeddicus {
    max-width  : 80vw;
    max-height : 64vh;
    padding       : 0.5ch;
    padding-left  : 1.5ch;
    padding-right : 1.5ch;
    resize     : both;
    overflow   : scroll;
    background : #A0A0E0;
    color      : black;
    font       : 12pt monospace;
}
.zeddicus:focus {
    background : mintcream    !important;
    color      : midnightblue !important;
}
</style>

----------------------------------------------------------------

<header id="page_title">
 Version 1.2.1 (preliminary)
</header>

<footer id="footer">
  <div id="messages">(pending)</div>
</footer>

----------------------------------------------------------------

# [🗃️ Thalia][wksp]{#title}

----------------------------------------------------------------

> [🔐 NOW!][now!]
> [🔐 Legacy][legacy]
> [🔐 Omega][omega]
> [🔐 Ryzen][ryzen]
> [🔐 Tower][tower]
> [🔐 Zombie][zombie]
> [🔐 Lenovo][lenovo]
> [🔐 Probook][probook]
> [🔐 Pi][pi]
> [🔐 Netwide][netwide]
> [🔐 Morpheus][morpheus]

----------------------------------------------------------------

<div center>
<style>
button {
    text-shadow : 0px 0px 5px #040414;
}
[dot], 
.dot {
    display     : inline-block;
    min-width   : 4.3ch !important;
    min-height  : 4.3ch !important;
    text-align  : center;
    padding     : 0;
    line-height : 3.3ch !important;
    border-radius : 100%;
}
</style>
<script>
function say( s, silent ) {
    ( sop = gid( 'sop' ) )
    . value = String( s );
    if ( silent ) { return; }
    presentSOP();
}
function mention( s, silent ) {
    sop = gid( 'sop' );
    sop . value = ( 
        [ sop.value, s ] . join( "\n" )
    );
    if ( silent ) { return; }
    presentSOP();
}
function presentSOP() {
    gid( 'sop-owner' ).showPopover();
}
function clearSOP() {
    ( sop = gid( 'sop' ) )
    . value = "";
}
</script>

<div popover="auto" id="sop-owner">
  <textarea id="sop" wrap="off" spellcheck="false"></textarea>
</div>

<div class="menu">
  <button class="dot" title="🔘 Show Log"  onclick="presentSOP()">🔘</button>
  <button class="dot" title="🗑 Clear Log" onclick="clearSOP()">🗑</button>
  <button class="dot" title="🖼️ Show Icon" onclick="presentIcon()">🖼️</button>
</div>

</div>

----------------------------------------------------------------

<div center>
<style>
@import url("http://dave-legacy/sio/style/just/siox.css");
@keyframes bloom {
    0%   { transform  : scale( 1.00 ); }
    50%  { transform  : scale( 1.17 ); }
    100% { transform  : scale( 1.22 ); }
}
legend {
    display    : inline-block;
    background : transparent !important;
}
input {
    font       : 12pt monospace;
    width      : 24em;
    padding    : 0.5ch;
    padding-left  : 1.5ch;
    padding-right : 1.5ch;
}
input:focus,
.menu button:focus {
    background : #000 !important;
    color      : #AFD !important;
    box-shadow : 0px 0px 1.2ch #020212;
    animation  : 0.12s bloom linear forwards;
}
input:hover,
.menu button:hover {
    box-shadow : 0px 0px 1.2ch gold;
}
input ,
.menu button {
    border : none;
    background : #687 !important;
    color      : #000 !important;
    border-radius : 3ch;
    display    : inline-block;
    outline    : none;
}
.menu, .settings {
    margin-top : 1.5ch;
}
[decal] {
    display : inline-block;
    text-shadow : 0px 0px 11px gold;
    cursor : pointer;
    user-select : none;
}
[decal]:hover {
    transform : scale( 1.22 );
}
</style>

<script src="http://dave-legacy/~/api/just/rico.js"></script>

<script>
doc = document;
</script>

<script>
gad =( o )=> ( o instanceof HTMLElement );
gid =( i )=> ( doc.getElementById( i ) );
god =( o )=> ( gad( o ) ? ( o ) : gid(o ) );
</script>

<script>
elx =( t )=> ( doc.createElement( t ) );
</script>

<script>
function add( t, o, i ) {
    let ge = (
        ( o || doc.body )
        . appendChild( elx( t ) )
    );
    ge.id = ( i );
    return ( ge );
};
</script>

<script>
function nid() {
    let rnd=()=> ( Math.random() );
    let now=()=> ( Date.now() );
    let s = ( rnd() * now() ).toString( 32 );
    let t = ( s.replace( ".", "-" ) );
    return ( `id=${t}` );
}
</script>

<script>
function xed( o, i ) {
    i = ( String( i || "" ).trim() );
    i = ( i || nid() );
    o = ( o || gid( "editors" ) || ( doc.body ) );
    let ed = add( "TEXTAREA", o,  i );
    ed.classList.add( "zeddicus" );
    mention( `Added := "${i}"` );
    return ( ed );
};
</script>

<script>
function zed( s, o, i ) {
    let ed = xed( o, i );
    ed.value = ( s );
    return ( ed );
};
</script>

<script>
function showKeyCount( n ) {
    gid( 'key-count' )
    . textContent = String(
        Math.floor( n ) || 0
    );
}
</script>
<script>
function getStoreKey() {
    return setStoreKey(
        gid( 'store-key' )
        . value
    );
}
</script>
<script>
function setStoreKey( key ) {
    return (
        gid( 'store-key' )
        . value = (
            key.trim() || document.title
        )
    );
}
</script>
<script>
function noStore() {
    return ( null === localStorage );
}
</script>
<script>
function getStoreKeys() {
    if ( noStore() ) { 
        return [ getStoreKey() ];
    }
    let keys = [];
    let store = localStorage;
    if ( store !== null ) {
        while ( keys.length < 420 ) {
            let k = store.key( keys.length );
            if ( k === null ) break;
            keys.push( k );
        }
    }
    return keys;
}
</script>
<script>
function setStoreKeys( keys ) {
    function option( k ) {
        let o = document.createElement( 'option' );
        o . value = k;
        list . appendChild( o );
    }
    let list = gid( 'store-keys' );
    list.innerHTML = "";
    let key  = getStoreKey();
    keys = ( keys || getStoreKeys() )
    if ( key ) {
        if (! keys.includes( key ) ) {
            keys.push( key );
        }
     }
    keys . forEach( option );
    showKeyCount( keys.length );
}
</script>
<script>
function on_Read_Keys() {
    let keys = getStoreKeys();
    setStoreKeys( keys );
    ( sip = gid( 'sip' ) )
    . value = ( 
        keys
        . map( k => ( `🔑 ${k}` ) )
        . join( "\n" )
    );
}
</script>
<script>
function on_Refresh_Keys() {
    setStoreKeys( getStoreKeys() );
}
</script>
<script>
function on_Read_Store() {
    if ( noStore() ) { return; }
    jsn = o => JSON.stringify( o, 0, 2 );
    ( sip = gid( 'sip' ) )
    . value = ( jsn( localStorage ) );
}
</script>
<script>
function on_Read_Value() {
    if ( noStore() ) { return; }
    let v = localStorage . getItem( getStoreKey() );
    if ( v === null ) { return; }
    ( sip = gid( 'sip' ) ) . value = v;
}
</script>
<script>
function on_Write_Value() {
    if ( noStore() ) { return; }
    localStorage . setItem( 
        getStoreKey() ,
        ( sip = gid( 'sip' ) ) . value
    );
}
</script>
<script>
function on_Open() {
    try {
        sip = gid( 'sip' );
        chooseFile( sip );
    } catch ( e ) {
        console.error( e );
        mention( e.message );
    }
}
</script>
<script>
function on_Save() {
    try {
        let input;
        let k = (
            ( input = gid( 'filename' ) )
            . value
            . trim()
        );
        input.value = (
            rico(
                ( ( sip = gid( 'sip' ) ) . value ) ,
                ( k )
            )
        )
        . anchor
        . download;
    } catch ( e ) {
        console.error( e );
        mention( e.message );
    }
}
</script>
<script>
function on_Edit_Script() {
    let ed = gid( 'sip' );
    try {
        zed( ed.value );
    } catch ( e ) {
        console.error( e );
        mention( e.message );
    }
}
</script>
<script>
function on_Run_Script() {
    let ed = gid( 'sip' );;
    try {
        ed.error = "";
        ed.input = ed.value;
        ed.output = window.eval( ed.input );
        mention( `See "sip.output" for script results` );
    } catch ( e ) {
        ed.output = "";
        ed.error  = e.message;
        console.error( e );
        mention( e.message );
    }
}
</script>
<script>
function composeAction( button ) {
    let t = ( 
        button
        . textContent
        . trim()
    );
    let parts = ( t . split( " " ) );
    let decal = parts . shift();
    t = ( parts . join( "_" ) );
    return ( [ "on_", t, "()" ] .join( "" ) );
}
</script>
<script>
function rst( span ) {
    let attr = k => span.getAttribute( k );
    function rstName() {
        gid( 'filename' ) . value = attr( 'filename' );
    }
    function rstKey() {
        setStoreKey( attr( 'key' ) );
    }
    switch ( span.textContent.trim() ) {
    case "📃" : return rstName();
    case "🔑" : return rstKey ();
    }
}
</script>
<script>
function eraseValue( o ) {
    let ge = ( o );
    if ( "string" === typeof ge ) {
        ge = document.getElementById( o );
    }
    ge.value = ( "" );
    mention( "Erased Store Key from Input" );
}
</script>
<script>
function copyValue( idDst, idSrc ) {
    god( idDst )
    . value = (
        god( idSrc )
        . value
        . trim()
    );
}
</script>
<script>
function zap( button ) {
    try {
        let js;
        mention( js = composeAction( button ), true );
        window.eval( js );
    } catch ( e ) {
        console.error( e );
        mention( e.message );
    }
}
// 🔒 🔏 🔓 🔐 🔑 📤 📥 ⏫ 📃 💾 📂 📝 🧭 🗃️
</script>

<fieldset>
<legend>
  <span onclick="rst(this)" decal title="Reset Filename" filename="thalia-download.json">📃</span>
  <span decal title="Copy Filename from Store Key" onclick="copyValue('filename','store-key')">🔑</span>
  <span decal title="Erase Filename from Input Gadget" onclick="eraseValue('filename')">🧽</span>
  <input type="url" id="filename" value="thalia-download.json">
</legend>
<textarea id="sip" class="siox" wrap="off spellcheck="false">
</textarea>
</fieldset>

<div class="menu">
  <button onclick="zap(this)">⏫ Read Keys</button>
  <button onclick="zap(this)">⏫ Read Store</button>
  <button onclick="zap(this)">💾 Save</button>
  <button onclick="zap(this)">📂 Open</button>
</div>

<div class="menu">
  <button onclick="zap(this)">🏍️ Run Script</button>
  <button onclick="zap(this)">📝 Edit Script</button>
</div>

<div class="menu">
  <button onclick="zap(this)">🔓 Read Value</button>
  <button onclick="zap(this)">🔏 Write Value</button>
  <button onclick="zap(this)">🔐 Refresh Keys</button>
</div>

<div class="settings">
  <span decal title="Reset Key" onclick="rst(this)" key="Thalia Decals">🔑</span>
  <span decal title="Copy Key from Filename" onclick="copyValue('store-key','filename')">📃</span>
  <span decal title="Erase Key from Input Gadget" onclick="eraseValue('store-key')">🧽</span>
  <input list="store-keys" id="store-key" value="Thalia Decals" placeholder="🔑">
<!-- 
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist
-->
  <datalist id="store-keys">
    <option value="Thalia Decals"></option>
  </datalist>
  <span id="key-count" title="Key Count">0</span>
</div>

</div>

----------------------------------------------------------------

<style>
details {
    text-align : center;
}
summary {
    width : calc( 10em );
    margin-left : calc( 50% - 5em );
    font-size : x-large;
    user-select : none;
    outline : none;
    cursor  : pointer;
    padding : 0.42ch;
}
summary:hover {
    display : block;
    box-shadow : 0 0 3ch gold;
    background : mintcream;
    color : midnightblue;
    border-radius : 3ch;
    border : 1px solid black;
}
details nav {
    margin : 2em;
    display : block;
}
</style>

----------------------------------------------------------------

<div center>
<details>
<summary>📝 Zed's Editors</summary>
<div id="editors"></div>
</details>
</div>

----------------------------------------------------------------

<div center>
<details>
<summary>🧭 Navigation</summary>
<nav id="dot-rockets">
 <a title="Thalia's Whiteboard" href="./dot/whiteboard.html">Whiteboard</a>
</nav>
<nav id="favorites">
 <a title="Home Site" href="http://dave-legacy/app/thalia/">Legacy</a>
 <a title="Zed Editor" href="http://dave-legacy/app/zed/zed-demo.html">Zed</a>
 <a title="Elmer ~ Legacy" href="http://dave-legacy/app/elmer/">Elmer</a>
 <a title="Indy ~ Legacy" href="http://dave-legacy/app/">Indy</a>
 <a title="Sulu Navigator" href="http://dave-legacy/nav/">Sulu</a>
 <a title="Calliope Decals" href="http://dave-legacy/app/calliope/">Calliope</a>
 <a title="Chronos" href="http://dave-omega/app/chronos/chronos.html">Chronos</a>
 <a title="Dave's Notes" href="http://tiny.cc/daves-notes">Dave's Notes</a>
 <a title="Web Dev @ MDN" href="https://developer.mozilla.org/en-US/docs/Web/">MDN</a>
 <a title="PSK Example @ Legacy"  href="http://dave-legacy/~/examples/psk.html">PSK</a>
</nav>
<nav id="file-system">
 <a title="Explore File System" href="./">Explore</a>
</nav>
</details>
</div>

----------------------------------------------------------------

<script>
function main() {
    function persist( event ) {
        persistFavorites();
    }
    try {
        doc . title = gid( 'page_title' ).textContent;
        hideFileSystem();
        recoverFavorites();
        addEventListener( "beforeunload", persist );
        messages.textContent = "Ready for Action!";
    } catch ( e ) {
        console.error( e );
        mention( e.message );
    }
}
addEventListener( "load", main );
</script>

<script>
function hideFileSystem() {
    let nav = navigator;
    let agent = nav.userAgent.toLowerCase();
    if ( agent.includes( "retext" ) ) {
        return;
    }
    gid( "file-system" ).remove();
}
</script>

<script>
function persistFavorites() {
    try {
        localStorage.setItem(
              FAVORITES_STORE_KEY
            , favorites.innerHTML
        );
    } catch ( e ) {
        console.error( e );
        messages.textContent = ( e.message );
    }
}
function recoverFavorites() {
    try {
        let v = localStorage.getItem(
              FAVORITES_STORE_KEY
        );
        if ( null === v ) {
            return persistFavorites();
        }
        favorites.innerHTML = ( v );
    } catch ( e ) {
        console.error( e );
        messages.textContent = ( e.message );
    }
}
function addFavorite( href, title, hint ) {
    let ae = favorites.appendChild(
        doc.createElement( "A" )
    );
    ae.href = ( href || "./" );
    title = String( title || "" ).trim();
    title = ( title || "Untitled" );
    hint  = String( hint || "" ).trim();
    hint  = ( hint || title );
    ae.title = hint;
    ae.textContent = title;
    return ( ae );
}
function removeFavorite( href ) {
    let ae = locateFavorite( href );
    ae.remove();
}
function locateFavorite( href ) {
    let doc = document;
    let arr =( o )=> Array.from( o );
    let faves = arr( favorites.querySelectorAll( "A" ) );
    function matches( ae ) {
        return ( ae.href === href );
    }
    return ( faves.filter( matches ) [ 0 ] );
}
</script>

<script>
function chooseFile( ed ) {
    let id = "choose-file";
    let ge = gid( id );
    ed = god( ed );
    if (! ge ) {
        ge = doc.body.appendChild( elx( "INPUT" ) );
        ge . id = ( id );
        ge . classList . add( id );
        ge . type = "file";
    }
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    function read_file( file ) {
        let reader = new FileReader();
        reader.onload = ( ev ) => {
            let txt = ( ev.target.result );
            console.log( txt );
            if ( ed ) {
                ed.value = ( txt );
                sip_label.textContent = ( "Local" );
            }
        };
        reader.readAsText( file );
    }
    function open_first( event ) {
        if ( ge.files.length < 1 ) {
            remark( "Cancelled" );
            return;
        }
// https://developer.mozilla.org/en-US/docs/Web/API/File
        let file = ge.files[ 0 ];
        read_file( file );
    }
    ge.onchange = open_first;
    ge.click();
}
</script>

<script>
function presentIcon() {
    try {
        let url  = "./favicon.ico";
        let opts = "left=10,top=10,width=320,height=400";
        let dlg  = window.open( url, url, opts );
        return ( dlg );
    } catch ( e ) {
        console.error( e );
        mention( e.message );
    }
}
</script>


