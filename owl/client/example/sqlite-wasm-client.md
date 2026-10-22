<head> <link rel="icon" href="favicon.ico" /> </head>

<!-- [[ sqlite-wasm-client.md ]] -->

<style>
@import url("./../../owl.css");
</style>

<style>
header,
footer {
    text-align : left;
}
header div {
    display : inline-block;
}
header a {
    background : black !important;
    color : mintcream  !important;
}
#messages ,
#footer_input {
    width : calc( 100vw - 240px ) !important;
}
.siox {
    background : mintcream;
    color : #080822;
    opacity : 0.777;
    overflow : scroll;
    max-width : calc( 100vw - 60px ) !important;
}
.siox:focus {
    opacity : 1.0;
}
</style>


<style>
fieldset {
    padding : 20px;
    border-radius : 20px;
    border : 1px dotted gold;
    background : #0003;
}
legend {
    padding : 0.25ch 1.0ch;
    font : 18pt sans-serif;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<header>
  <div id="messages"></div>
  <div>
    <a title="📘 Manual" href="https://sqlite.org/docs.html">📘</a>
    <a title="🧑‍💻 Practice" href="https://sqliteonline.com/">🧑‍💻</a>
  </div>
</header>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<h1>Sqlite3 Demo</h1>

---------------------------------------------------------------

<fieldset center>
  <legend> SQL Editor </legend>
  <textarea id="sql_editor" class="siox" wrap="off"></textarea>
</fieldset>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<fieldset center>
    <legend> Tables </legend>
    <section center id="table_section"></section>
</fieldset>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<fieldset center>
    <legend> Links </legend>
    <section center id="anchor_section">
 <a href="https://sqliteonline.com/">⛃ Practice Online</a>
 <a href="http://dave-omega/app/sqlite/sqlite-menu.html">☰ SQLite Menu</a>
 <a href="http://dave-omega/app/chatter/chatter.html#sqlite-examples.json">💬 SQLite Chat</a>
 <a href="https://nyteowldave.github.io/zed/hysteresis/alpha/pen.html#sqlite-examples.json">🐍 SQLite Snek</a>
 <a href="https://notebook.google.com/notebook/fab55194-c7dc-4f45-b48c-257af9aa564a">🤖 Gemini Notebook</a>
    </section>
   <div center>
<button title="♻️ Refresh Links" onclick="links.refresh()">♻️</button>
   </div>
</fieldset>

---------------------------------------------------------------

<div center>
 <img src="http://dave-omega/app/morpheus/art/png/featuring.png" />
</div>

> Jennie Scraper API

> Links Table API

---------------------------------------------------------------

<footer>
 <input id="footer_input" onchange="perform(event)" />
</footer>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
; doc = ( document )
; doc . title = ( `Sqlite3 Demo` )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="./../../owl-prolog.js"></script>
<script src="./../../table-manager.js"></script>
<script src="./../jswasm/sqlite3.js"></script>
<script src="./sqlite-wasm-client.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
// Called by "sqlite-wasm-client.js" module
function main( event ) {
    init_editor( sql_editor );
    setTimeout( later, 1000 );
}
later = function() {
    footer_input . value = "jeannie.test[0]()";
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="sqlite-links-table.js"></script>

<script name="links{}" status="working" group="sqlite-links-table.js">
links = {};
</script>

<script name="links.anchors()" status="working" group="sqlite-links-table.js">
links.anchors = function() {
    const se = ( anchor_section );
    return Array.from(
        se.querySelectorAll( "A" )
    );
};
</script>

<script name="links.records()" status="working" group="sqlite-links-table.js">
links.records = function() {
    const m = links . anchors();
    function record( ae ) {
        const title   = ( ae.title || ae.textContent || "?" );
        const address = ( ae.href  || "./" );
        return { title, address };
    };
    return ( m ).map( record );
};
</script>

<script name="links.find()" status="untested" group="sqlite-links-table.js">
links.find = function( address ) {
    const m = links . anchors();
    function match( ae ) {
        return ( address === ae.href );
    }
    const v = (
        ( m ).filter( match );
    );
    return ( v[ 0 ] );
};
</script>

<script name="links.addresses()" status="working" group="sqlite-links-table.js">
links.addresses = function() {
    const m = links . records();
    return ( m ).map( ( rec ) => ( rec.address ) );
};
</script>

<script name="links.titles()" status="working" group="sqlite-links-table.js">
links.titles = function() {
    const m = links . records();
    return ( m ).map( ( rec ) => ( rec.title ) );
};
</script>

<script name="links.add()" status="untested" group="sqlite-links-table.js">
links.add = function( record ) {
    const title   = ( record . title   );
    const address = ( record . address );
    let ae = links . find( address );
    if (! ae ) {
        ae = elx( "A" );
        ae . href = ( address );
        anchor_section.appendChild( ae );
    }
    ae . title = ( ae . textContent = title );
    return ( ae );
};
</script>

<script name="links.merge()" status="untested" group="sqlite-links-table.js">
links.merge = function( records ) {
    if (! records ) { return; }
    const idx = links . addresses();
    const add =( rec )=> {
        links . add( record );
    };
    records . forEach( add );
};
</script>

<script name="links.refresh()" status="untested" group="sqlite-links-table.js">
links.refresh = function() {
    const man = links . recover();
    return links . merge( man );
};
</script>

<script name="links.storekey" status="untested" group="sqlite-links-table.js">
;
; links.storekey = ( "links-table.json" )
;
</script>

<script name="links.store()" status="untested" group="sqlite-links-table.js">
links.store = function() {
    const s  = localStorage;
    if ( null === s ) {
        throw new Error( `Store is Unavailable` );
    }
    return ( s );
};
</script>

<script name="links.recover()" status="untested" group="sqlite-links-table.js">
links.recover = function() {
    const s = links . store();
    const k = ( links . storekey );
    const v = s . getItem( k );
    if ( null === v ) {
        return ( links . persist() );
    }
    console . debug( `Read Links Table from Store` );
    const records = JSON.parse( v );
    if ( Array.isArray( records ) ) {
        links . merge( records );
        return;
    }
    throw new Error( `Expected a JSON Array` );
};
</script>

<script name="links.persist()" status="untested" group="sqlite-links-table.js">
links.persist = function() {
    const s = links . store();
    const k = ( links . storekey  );
    const records = ( links . records() );
    const v = JSON.stringify( records, null, 2 );
    s . setItem( k, v );
    console . debug( `Wrote Links Table to Store` );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>

function jeannie( group, status, type ) {
    type = ( type || "SCRIPT" ).toUpperCase();
    group  = str( group  );
    status = str( status );
    const m = all( type );
    const matcher =( ge, k, v )=> {
        const s = ge.getAttribute( k );
        return ( s === v );
    };
    let v = ( m );
    if ( group ) {
        const match =( ge )=> (
            matcher( ge, "group", group )
        );
        v = ( v ).filter( match );
    }
    if ( status ) {
        const match =( ge )=> (
            matcher( ge, "status", status )
        );
        v = ( v ).filter( match );
    }
    return ( v );
};

</script>
<script>

jeannie.untested = function( group ) {
    return jeannie( group, "untested" );
};

</script>
<script>

jeannie.working = function( group ) {
    return jeannie( group, "working" );
};

</script>
<script>

jeannie.test = [];

</script>
<script>
jeannie.test[0] = function() {
    say( "Working Modules" );
    group = "sqlite-links-table.js";
    const m = jeannie.working( group );
    const v = ( m ).map(
        ( ge ) => ( ge.getAttribute( "name" ) )
    );
    sql_editor.value = qlc( v );
};
alert(123);
</script>
<script>
jeannie.test[1] = function() {
    say( "Untested Modules" );
    group = "sqlite-links-table.js";
    const m = jeannie.untested( group );
    const v = ( m ).map(
        ( ge ) => ( ge.getAttribute( "name" ) )
    );
    sql_editor.value = qlc( v );
};
alert(234);
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
