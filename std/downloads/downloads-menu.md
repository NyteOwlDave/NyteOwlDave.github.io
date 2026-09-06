<style>
@import url("./../style/every-page.css");
</style>

<style>
@import url("./../style/sce-hud.css");
</style>

<style>
#footer_input {
    width : calc( 100vw - 100px ) !important;
}
[disabled] {
    cursor  : not-allowed !important;
    opacity : 0.42;
}
[wide] {
    width : calc( 100% - 20ch );
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[cloud-pad]:
<https://texteditor.co/?id=drive-1cmolKg6ZCW-Nj8zArDwQkn0R5OWIR7am>
"Cloud Notepad"

[tick-tick]:
<https://ticktick.com/webapp/#p/6a99f28e8f086b72edb5a98b/tasks>
"Tick-Tick Project Notes"

[express-lane]:
<./express-lane.html>
"Express Lane"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[omega-empty-menu]:
<https://dave-omega/demo/web/grafico/templates/menu-empty.html>
"Omega Edition"

[me-morpheus]:
<https://nyteowldave.github.io/std/downloads/downloads-menu.html>
"Morpheus Edition"

[me-omega]:
<http://dave-omega/app/morpheus/std/downloads/downloads-menu.html>
"Omega Edition"

----------------------------------------------------------------

# `☰` Downloads Menu ~ Morpheus

> [`🔴` Primary][me-morpheus]

> [`🔴` Cloud Notepad][cloud-pad]
> [`🔴` Tick-Tick][tick-tick]
> [`🔴` Express Lane][express-lane]

> [`🔴` Omega][me-omega]{#dave-omega}

----------------------------------------------------------------

# `🗂️` Download Files

----------------------------------------------------------------

<div center>
  <select wide id="downloads_droplist"></select>
</div>

----------------------------------------------------------------

<div center>
 <button onclick="do_download(event)"><code>📥</code> Download</button>
 <button onclick="do_upload(event)" disabled><code>📤</code> Upload</button>
 <button onclick="do_refresh(event)"><code>♻️</code> Refresh</button>
</div>

----------------------------------------------------------------

# `🌐` Download File Location

<div center>
 <input wide id="provider" />
</div>

----------------------------------------------------------------

# `📥` Pending Download

<div center>
  <a id="pending_download" href="file.list" download="file.list">file.list</a>
</div>

----------------------------------------------------------------

<header id="messages"></header>

<footer id="footer">
  <input id="footer_input" onchange="perform(event)" />
</footer>

<textarea id="sce" class="hud hide" wrap="off">
</textarea>

----------------------------------------------------------------

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
; iwm = Object.keys( window ).sort()
</script>

<script>
;
; doc = document
; doc . title
= doc . querySelector( "H1" )
. textContent
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="./../api/gems/prolog-beta.js"></script>
<script src="./../api/gems/interpreter-lite.js"></script>
<script src="./../api/gems/houdini.js"></script>
<script src="./../api/gems/replace-anchor-decals.js"></script>

<script src="./../api/hud.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function do_pending( event ) {
    try {
        const sender = event.target;
        const method = sender.textContent;
        alert( `TODO ~ ${method}` );
    } catch( e ) {
        console.error( e );
        alert( e );
    }
}
</script>

<script>
function do_download( event ) {
    const a = ( pending_download );
    try {
        const k  = read_download_filename();
        a . download = ( a . textContent = ( k ) );
        a . href = read_download_url();
        alert( "Click the Pending Download to Confirm" );
    } catch( e ) {
        console.error( e );
        alert( e );
    }
}
</script>

<script>
function do_upload( event ) {
    try {
        do_pending( event );
    } catch( e ) {
        console.error( e );
        alert( e );
    }
}
</script>

<script>
function do_refresh( event ) {
    try {
        refresh_downloads();
    } catch( e ) {
        console.error( e );
        alert( e );
    }
}
</script>

<script>
function extension( s ) {
    s = String( s || "" ).trim();
    if (! s ) { return ""; }
    const p = s.split( "." );
    if ( p.length > 1 ) {
        return ( p.pop() );
    }
    return "";
}
</script>

<script>
extension.allowed = [
  "md"  , "html" , "txt" , "text"
, "js"  , "json" , "css" , "php"
, "ps1" , "cmd"  , "dos" , "sys"
, "des" , "desktop" , "url" , "lnk"
, "cfg" , "conf" , "config"
, "csv", "ini" , "zip" , "deb"
, "appimage" , "list" , "cdoc"
, "s-tree" , "yaml"
, "ods" , "odt" , "odb" , "odg"
, "odf" , "odp"
];
</script>

<script>
function refresh_downloads() {
    function accept( s ) {
        populate_droplist( downloads_droplist, s );
    }
    function reject( s ) {
        console.warn( s );
        alert( e );
    }
    try {
        fetch( "file.list" )
        . then  ( rsp => rsp.text() )
        . then  ( accept )
        . catch ( reject );
    } catch( e ) {
        console.error( e );
        alert( e );
    }
}
</script>

<script>
function populate_droplist( ge, items ) {
    function allowed( s ) {
        s = extension( s );
        return (
            extension
            . allowed
            . includes( s )
        );
    }
    try {
        ge . innerHTML = "";
        items = pcl( items ).filter( allowed );
        items . forEach(
            ( s ) => {
                const ce = elx( "OPTION" );
                ce . value = (
                    ce . textContent = ( s )
                );
                ge . appendChild( ce );
            }
        );
    } catch( e ) {
        console.error( e );
        alert( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function read_download_url() {
    let p = str( provider.value );
    while ( p.endsWith( "/" ) ) {
         p = p.slice( 0, -1 );
    }
    provider.value = ( p );
    if (! p ) {
        throw new Error( "Missing File Location" );
    }
    const k = read_download_filename();
    return [ p, k ].join( "/" );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function read_download_filename() {
    const k = str( downloads_droplist.value );
    if (! k ) {
        if ( null === localStorage ) {
            return "file.list";
        }
        throw new Error( "Missing File Name" );
    }
    return ( k );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function main( event ) {
    try {
        replace_anchor_decals( verified_buttons );
        footer_input.value = "hud()";
        if (! location.href.startsWith( "file:" ) ) {
            gid( "dave-omega" ).remove();
            refresh_downloads();
        }
        if ( location.hostname === "nyteowldave.github.com" ) {
            provider.value = "https://nyteowldave.github.io/std/downloads";
        } else {
            provider.value = "http://dave-omega/app/morpheus/std/downloads";
        }
    } catch ( e ) {
        console.error( e );
        alert( e );
    }
}
</script>

<script>
addEventListener( "load", main );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
verified_buttons = [
  "Tick-Tick"
, "Cloud Notepad"
, "Primary"
, "Express Lane"
, "Omega"
];
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function pcl( o ) {
    if ( o instanceof Object ) {
        if ( Array.isArray( o ) ) {
            o = ( o ).join( "\n" );
        } else {
            if ( null === o ) { o = {} };
            o = ( Object.keys( o ).sort() );
            o = ( o ).join( "\n" );
        }
    }
    return (
        String( o || "" )
        . trim()
        . split( "\n" )
        . map( s => s.trim() )
        . filter( s => s )
    );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

