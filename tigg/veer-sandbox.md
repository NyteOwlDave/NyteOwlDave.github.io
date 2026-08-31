<style>
@import url("./../std/style/every-page.css");
</style>

<style>
fieldset {
    border : 1px solid rgba(142,142,255,0.4242);
    border-radius : 20px;
    padding : 16px;
}
legend {
    padding : 10px 16px;
}
td {
    text-align : left;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[home]:     <./../morpheus.html>
[tigg]:     <./tigg.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-omega]:
<http://dave-omega/app/morpheus/tigg/veer-sandbox.html>
"Omega Edition"

[notes]: <./../notes/veer-peach-notes.md>
"Sandbox Notes"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

----------------------------------------------------------------

# `🏜️` Veer Sandbox

----------------------------------------------------------------

> [`🏠` Home][home]
> [`🦇` TiGG][tigg]

> [`🗒️` Peach Usage Notes][notes]

> [`🖥️` Omega][me-omega]

----------------------------------------------------------------

<fieldset>
 <legend><h3>Tables</h3></legend>
 <section id="table-section"></section>
</fieldset>

----------------------------------------------------------------

<fieldset>
 <legend><h3>Drop Lists</h3></legend>
 <section id="droplist-section"></section>
</fieldset>

----------------------------------------------------------------

<fieldset>
 <legend><h3>Editors</h3></legend>
 <section id="editor-section">
   <textarea id="sop" class="siox" wrap="off"></textarea>
 </section>
</fieldset>

----------------------------------------------------------------

<fieldset>
 <legend><h3>Menus</h3></legend>
 <section id="menu-section"></section>
</fieldset>

----------------------------------------------------------------

# `🧝` Description

This page is intended to permit experimenting with the
`Veer` Helper Peach.

It's currently incomplete. It needs some additional support
files and code logic written.

There's an embedded version of the Peach Helper Module in this
HTML Page. There's also an external copy of this code.

Run `veer.show()` for a popup dialog listing `Veer Members`.

Other helpful `Veer` methods include:

- `veer.tabulate.members()`
- `veer.menu()`
- `veer.assist()`
- `veer.inspect()`
- `veer.notes()`

----------------------------------------------------------------

# `📝` HUD Editor

There's now a hidden `HUD Editor` for this page.

Just run the `hud()` function to reveal this Gadget.

----------------------------------------------------------------

<!-- [[ NEEDS: header-footer.js ]] -->
<header id="header"></header>
<footer id="footer"></footer>

----------------------------------------------------------------

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="iwm.js" status="done">
; iwm = Object.keys( window ).sort()
</script>

<script id="doc.js" status="done">
; doc = document
</script>

<script id="debug.js" status="done">
; cls =()=> console.clear()
; agn =()=> location.reload()
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="./../std/api/gems/prolog-beta.js"></script>
<script src="./../std/api/gems/seeker.js"></script>
<script src="./../std/api/gems/show.js"></script>

<script src="./../std/api/popeye.js"></script>
<script src="./../std/api/canedit.js"></script>
<script src="./../std/api/module-status.js"></script>
<script src="./../std/api/core-api.js"></script>

<script src="./../std/gadgets/header-footer.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="main.js" status="done">
function main( event ) {
    try {
        doc . title = ( `Veer Sandbox` );
        init_header();
        init_footer();
        footer_input.value = "alert( typeof iwm )";
        message( "Ready!" );
    } catch ( e ) {
        throw ( e );
        alert ( e );
    }
}
</script>

<script id="page-load.js" status="done">
addEventListener( "load", main );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="tigg-veer-helper.js" folder="gems">

PEACH_KEY = ( `tigg-veer-helper.js` );
PEACH_VER = ( 1.0 );
PEACH_REV = ( 0.0 );

function veer( host, popup ) {
    let url = ( veer.hosts[ host ]       );
    url     = ( url || veer.hosts[ "?" ] );
    if ( popup ) {
        window.open( url, url, veer.options  );
    } else {
        location = ( url );
    }
};

;
; veer.options = ( "left=10,top=10,width=800,height=680" )
; veer.tikey = ( `c25b25f5-5917-4605-a1a1-eb5fd121425b` );
;

veer.message = function( s ) {
    if ( "function" === message ) {
        return message( s );
    }
    console.log( s );
    return ( s );
};

veer.keep = function( ed ) {
    const stg = localStorage;
    ed = (
           ( ed )
        || gid( "sce" )
        || gid( "sip" )
        || gid( "sop" )
        || one( "TEXTAREA" )
    );
    const k   = PEACH_KEY;
    const v   = ed.value;
    stg.setItem( k, v );
    veer.message( `Wrote "${k}" to Store`, `🔏` );
};

veer.hosts = {
  "?"        : "https://nyteowldave.github.io/notes/mynotepad.html"
, "morpheus" : "https://nyteowldave.github.io/tigg/tigg.html"
, "omega"    : "http://dave-omega/app/morpheus/tigg/tigg.html"
, "tower"    : "http://dave-tower/app/morpheus/tigg/tigg.html"
, "legacy"   : "http://dave-legacy/app/morpheus/tigg/tigg.html"
, "lenovo"   : "http://dave-lenovo/app/morpheus/tigg/tigg.html"
, "probook"  : "http://dave-probook/app/morpheus/tigg/tigg.html"
, "pi"       : "http://dave-pi/app/morpheus/tigg/tigg.html"
, "jefr"     : "http://dave-jefr/app/morpheus/tigg/tigg.html"
, "ryzen"    : "http://dave-ryzen/app/morpheus/tigg/tigg.html"
, "site"     : "https://sites.google.com"
, "cloud"    : "http://tiny.cc/express-lane"
, "nas"      : "http://neo/shares"
, "mail"     : "mailto:nyteowldave@gmail.com"
, "notes"    : "https://nyteowldave.github.io/notes/veer-peach-notes.html"
, "sandbox"  : "https://nyteowldave.github.io/tigg/veer-sandbox.html"
};

veer.catalog = function( hosts, rex, ed ) {
    hosts = ( hosts || veer.hosts );
    const m = Object.keys( hosts );
    let v = veer.filter( m, rex );
    if ( ed instanceof HTMLTextAreaElement ) {
        ed.title = "Veer Host Names";
        ed.value = v.join( "\n" );
    } else {
        return ( v );
    }
};

veer.addresses = function( hosts, rex, ed ) {
    hosts = ( hosts || veer.hosts );
    const m = veer.catalog( hosts );
    let v = (
        ( m )
        . map(
            ( k ) => ( hosts[ k ] )
        )
    );
    v = veer.filter( v, rex );
    if ( ed instanceof HTMLTextAreaElement ) {
        ed.title = "Veer Addresses";
        ed.value = v.join( "\n" );
    } else {
        return ( v );
    }
};

veer.entries = function( hosts, rex, gadget ) {
    hosts = ( hosts || veer.hosts );
    const m = veer.catalog( hosts );
    let v = (
        ( m )
        . map(
            ( k ) => ( [ k, hosts[ k ] ] )
        )
    );
    v = veer.filter( v, rex );
    if ( gadget instanceof HTMLTextAreaElement ) {
        gadget.title = "Veer Host Table";
        gadget.value = v.join( "\n" );
    } else if ( gadget instanceof HTMLTableElement ) {
        const schema = [ "Key", "Value" ];
        veer.tabulate( v, schema, gadget );
    } else {
        return ( v );
    }
};

;
; veer.debug = ( true )
;

veer.tabulate = function( records, schema, table ) {
    function blurt( o ) {
        if ( veer.debug ) {
            console.debug( o );
        }
    }
    const doc = document;
    const elx =( t )=> ( doc.createElement ( t ) );
    const gid =( i )=> ( doc.getElementById( i ) );
    let te = table;
    if (! te ) {
        blurt( `Creating New Table` );
        let owner = gid( "table-section" );
        owner = ( owner || gid( "table_section" ) );
        owner = ( owner || doc.body );
        te = owner.appendChild( elx( "TABLE" ) );
        table = ( te );
        blurt( { owner, table } );
    }
    let be = te.tBodies[ 0 ];
    if (! be ) { be = te.createTBody(); }
    be . innerHTML = "";
    records = Array.from( records || [] );
    blurt( { records } );
    let ce, re, record;
    let rows = 0, columns = 1;
    while ( records.length > 0 ) {
        rows += 1;
        if ( rows > 1000 ) {
            throw new Error( `Exceeded Row Limit` );
        }
        record = Array.from( records.shift() || [] );
        blurt( { record } );
        re = be . insertRow();
        let limit2 = 30;
        while ( record.length > 0 ) {
            columns = Math.max( columns, record.length );
            if ( columns > 10 ) {
                throw new Error( `Exceeded Column Limit` );
            }
            ce = re . insertCell();
            ce . textContent = (
                String( record.shift() || "?" ).trim() 
            );
        }
    }
    blurt( { rows, columns } );
    schema = Array.from( schema || [] );
    while ( schema.length < columns ) {
        const n = 1 + ( schema.length );
        schema.push( `Column ${n}` );
        blurt( schema[ n - 1 ] );
    }
    const tmp = Array.from( schema );
    blurt( { schema : tmp } );
    let he = te.tHead;
    if (! he ) { he = te.createTHead(); }
    he . innerHTML = "";
    re = he.insertRow();
    while ( schema.length > 0 ) {
        ce = re . appendChild( elx( "TH" ) );
        ce . textContent = schema.shift();
    }
    blurt( { table } );
    return ( table );
};

veer.tabulate.members = function( o, rex, table ) {
    o = ( o || veer );
    const m = Object.keys( o );
    let v = veer.filter( m, rex ).sort();
    v = v.map(
        ( k ) => {
            const u = o[ k ];
            const t = ( typeof u );
            return [ k, t , String( u ) ];
        }
    );
    const schema = [ "Member", "Type", "Value" ];
    return ( veer.tabulate( v, schema, table ) );
};

veer.modules = function( rex, ed ) {
    const m = all( `SCRIPT[id]` );
    const v = veer.filter( m, rex ).sort();
    if ( ed instanceof HTMLTextAreaElement ) {
        ed.title = "Modules";
        ed.value = (
            ( v )
            . map( ( se ) => ( se.id ) )
            . join( "\n" )
        );
    } else {
        return v.map( ( se ) => ( se.id ) );
    }
};

veer.json = function( hosts, rex, ed ) {
    hosts = ( hosts || veer.hosts );
    const m = veer.catalog( hosts, rex );
    const man = {};
    ( m ).forEach(
        ( k ) => ( man[ k ] = hosts[ k ] )
    );
    const v = JSON.stringify( man, null, 2 );
    if ( ed instanceof HTMLTextAreaElement ) {
        ed.title = "Veer Manuscript";
        ed.value = ( v );
    } else {
        return ( v );
    }
};

veer.navdoc = function( hosts, rex, ed ) {
    hosts = ( hosts || veer.hosts );
    const m = veer.catalog( hosts, rex );
    let v = ( m ).map( navlink );
    const hr = String( "-" ).repeat( 64 );
    const line = [ "\n", "\n" ].join( hr );
    if ( ed instanceof HTMLTextAreaElement ) {
        ed.title = "Nav Links";
        ed.value = v.join( line );
    } else {
        return ( v.join( line ) );
    }
};

veer.show = function( rex ) {
    const m = veer.members( rex );
    m.unshift( "[ Veer Members ]\n" );
    alert( m.join( "\n" ) );
};

veer.inspect = function( hosts, rex, title ) {
    const m = veer.entries( hosts, rex );
    const t = ( title || "[ Veer Hosts ]" );
    const c = console;
    c.clear();
    c.group( t );
    c.table( m );
    c.groupEnd();
};

veer.assist = function( rex, title, o ) {
    const m = veer.members( rex, null, o );
    const t = ( title || "[ Veer Members ]" );
    const c = console;
    c.clear();
    c.group( t );
    c.table( m );
    c.groupEnd();
};

veer.members = function( rex, ed, o ) {
    const m = Object.keys( o || veer );
    const v = veer.filter( m, rex ).sort();
    if ( ed instanceof HTMLTextAreaElement ) {
        ed.title = "Members";
        ed.value = v.join( "\n" );
    } else {
        return ( v );
    }
};

veer.filter = function( o, rex ) {
    let m;
    if (! Array.isArray( o ) ) {
        throw new TypeError( `Expected an Array of Strings` );
    }
    if ( rex ) {
        rex = new RegExp( rex );
        m = (
            ( o )
            .filter(
                ( k ) => rex.test( k )
            )
        );
    } else {
        m = ( o );
    }
    return ( m );
};

veer.menu = function( hosts, rex, owner ) {
    const m = veer.entries( hosts, rex );
    owner = (
           ( owner )
        || gid( `menu-section` )
        || gid( `menu_section` )
        || document.body
    );
    const me = owner.appendChild( elx( "DIV" ) );
    me.classList.add( "veer-menu" );
    let ae;
    m.forEach(
        ( entry ) => {
            ae = me.appendChild( elx( "A" ) );
            ae . textContent = (
                ae . title = ( entry[ 0 ] )
            );
            ae . href = entry[ 1 ];
            ae . decal = "";
            ae . icon  = "";
        }
    );
    return ( me );
};

veer.droplist = function( hosts, rex, owner ) {
    const m = veer.entries( hosts, rex );
    owner = (
           ( owner )
        || gid( `droplist-section` )
        || gid( `droplist_section` )
        || document.body
    );
    const de = owner.appendChild( elx( "SELECT" ) );
    de.classList.add( "veer-droplist" );
    m.forEach(
        ( entry ) => {
            ae = de.appendChild( elx( "OPTION" ) );
            ae . textContent = (
                ae . title = ( entry[ 0 ] )
            );
            ae . value = entry[ 0 ];
        }
    );
    return ( me );
};

;
; ( 0 ) && ( veer.keep() )
; ( 0 ) && message( "OK!", "🦇" )
;

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
@import url("./../std/style/sce-hud.css");
</style>
<textarea id="sce" class="hide"></textarea>
<script src="./../std/api/hud.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

