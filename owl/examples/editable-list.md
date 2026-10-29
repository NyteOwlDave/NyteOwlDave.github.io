<style>
@import url("http://dave-omega/style/owl.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
li[value] {
    cursor : pointer;
}
li[value]:hover {
    background : gold;
    color      : black;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
.shout {
    color      : lemonchiffon;
    background : crimson;
}
.whisper {
    color      : "default";
    background : "default";
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<h1 id="_T_"> Editable List Example </h1>

----------------------------------------------------------------

## Magic List

<ul class="magic-list">
  <li value="123" onclick="change(this)" onmouseenter="reveal(this)"> First Item </li>
  <li value="345" onclick="change(this)" onmouseenter="reveal(this)"> Second Item </li>
  <li value="3.1415" onclick="change(this)" onmouseenter="reveal(this)"> Greek PI </li>
</ul>

----------------------------------------------------------------

<div center>
<h2> Item Viewer </h2>
<div id="value_preview"> ? </div>
</div>

<div center>
<h2> Item Editor </h2>
<input id="value_input" />
</div>

----------------------------------------------------------------

<div center>
 <button onclick="do_accept(event)">Accept</button>
 <button onclick="do_reject(event)">Reject</button>
 <button onclick="do_clear(event)">Clear</button>
 <button onclick="do_add_item(event)">New Item</button>
 <button onclick="do_remove_item(event)">Remove Item</button>
</div>

----------------------------------------------------------------

# Usage Notes

- Hover over any List Item to Reveal its Value
- Click to Modify

## Suggestions

- Check out the `tips()` method
- Check out the `usage()` method

----------------------------------------------------------------

# Project Management

> [Concept Editor](https://docs.google.com)
> [Voice Notes](https://voice.google.com)
> [Calendar](https://calendar.google.com)
> [Sites](https://sites.google.com)
> [Projects](http://tiny.cc/crucial-projects)

----------------------------------------------------------------

# Priority Level

> MEDIUM

----------------------------------------------------------------

# Future Ideas

- Test, Debug, and Document
- Integrate __List Editor__ with __Recent Nav Links__
- Extract __Components__ to __Owl System__

----------------------------------------------------------------

> [Recent Nav Links](http://dave-omega/applet/navlinks/recent-navlinks.html)

----------------------------------------------------------------

# Editions

- Use the `home()` method

----------------------------------------------------------------

<script status="untested">
; mem =( o )=> Object.keys( o || window ).sort()
; iwm = mem()
</script>

<script status="untested">
; RTX = ( null === localStorage )
</script>

<script status="untested">
; arr  =( o )=> Array.from( o || [] )
; str  =( o )=> String( o || "" ).trim()
; earl =( u )=> ( str( u ) || "./" )
</script>

<script status="untested">
; doc = ( document )
; doc . title = str( _T_.textContent )
</script>

<script status="untested">
; tips =( o )=> alert( qlc( mem( o ) ) )
</script>

<script status="untested">
; iat =( t, o )=> ( t === typeof o   )
; ias =( o )=> iat( "string"   , o   )
; iaf =( o )=> iat( "function" , o   )
; ian =( o )=> iat( "number"   , o   )
; iob =( o )=> ( o instanceof Object )
; iar =( o )=> ( Array.isArray( o )  )
</script>

<script status="untested">
; wap =( u )=> {
    const a = elx( "A" );
    a . href = earl( u );
    a . click();
}
; wop =( u )=> {
    if ( RTX ) { return wap( u ); }
    u = earl( u );
    return window . open( u, u );
}
; dlg =( u )=> {
    if ( RTX ) { return wap( u ); }
    u = earl( u );
    return window . open( u, u, dlg.options );
}
; dlg . options = (
  "popup=true,width=800,height=680,left=10,right=10"
)
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/owl/owl.js"></script>
<script src="https://nyteowldave.github.io/owl/visit-ultra.js"></script>
<script src="https://nyteowldave.github.io/owl/jarvis-v1p0.js"></script>
<script src="https://nyteowldave.github.io/std/api/install.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
; CAPTION =( s )=> ( `〖 ${s} 〗` );
</script>

<script status="untested">
; CANCELED$    = CAPTION( "canceled"    )
; INVALID$     = CAPTION( "invalid"     )
; MISSING$     = CAPTION( "missing"     )
; UNDEFINED$   = CAPTION( "undefined"   )
; UNAVAILABLE$ = CAPTION( "unavailable" )
</script>

<script status="untested">
prolog$ = {
  mem
, arr, str, earl
, tips
, wap, wop, dlg
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function incomplete( s ) {
    s = str( s );
    if ( s ) {
        shout( "INCOMPLETE!" );
    } else {
        shout( "INCOMPLETE : " + ( s ) );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function shout( s ) {
    const dst = ( value_preview );
    dst . textContent = ( s );
    dst . className = "shout";
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function whisper( s ) {
    const ge = ( value_preview );
    ge . textContent = ( s );
    ge . className = "whisper";
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function bummer( e ) {
    shout( e . message );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function reveal( src ) {
    try {
        const io = item( src );
        const k = ( src.textContent );
        const v = ( io . read() );
        const s = ( `${k} := ${v}` );
        whisper( s );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function change( src ) {
    try {
        const io = item( src );
        modify . item = ( io );
        modify( io . read() );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function modify( s ) {
    try {
        const dst = ( value_input );
        dst . value = ( s );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
;
; modify . item = ( null );
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
modify . clear  = function() {
    modify . item = ( null );
    modify( "?" );
    whisper( "Ready!" );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
modify . accept = function() {
    const io = modify.item;
    if ( io ) {
        const src = ( value_input );
        io . write( src . value );
        reveal( io . source );
    } else {
        modify . missing();
    }
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
modify . reject = function() {
    const io = modify.item;
    if ( io ) {
        const dst = ( value_input );
        dst . value  = io . read();
    } else {
        modify . missing();
    }
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
modify . missing =  function() {
    shout( "No Element is Being Modified" );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function item( gadget ) {
    if ( gad( gadget ) ) {
        item . source = ( gadget );
    } else {
        item . source = ( null );
        item . missing();
    }
    return ( item );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
item . read = function() {
    const rd =( o )=> ( o.getAttribute( "value" ) );
    const src = ( item . source );
    if ( gad( src ) ) {
        return rd( src );
    } else {
        item . missing();
        return ( "?" );
    }
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
item . write = function( s ) {
    s = str( s );
    const wr =( o )=> ( o.setAttribute( "value", s ) );
    const dst = ( item . source );
    if ( gad( dst ) ) {
        wr( dst );
    } else {
        item . missing();
    }
    return ( item );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
item . add =  function() {
    incomplete( "item.add()" );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
item . remove =  function() {
    incomplete( "item.remove()" );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
item . missing =  function() {
    shout( "Missing or Invalid HTML Element" );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function main( event ) {
    try {
        buttons . add( "[H]", "home()", "[H]ome"
        install( 'hud' );
        whisper( "Hello!" );
    } catch ( e ) {
        bummer( e );
    }
}
main . usage = "main( event )";
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function do_action( action, options ) {
    try {
        return action( options );
    } catch ( e ) {
        bummer( e );
    }
}
do_action .usage = (
  "do_action( action, options )"
);
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">

function do_accept( event ) {
    const action =()=> ( modify.accept() );
    do_action( action );
}

function do_reject( event ) {
    const action =()=> ( modify.reject() );
    do_action( action );
}

function do_clear( event ) {
    const action =()=> ( modify.clear() );
    do_action( action );
}

function do_add_item( event ) {
    const action =()=> ( item.add() );
    do_action( action );
}

function do_remove_item( event ) {
    const action =()=> ( item.remove() );
    do_action( action );
}

</script>

<script status="untested">
do_accept      . usage = "do_accept( event )";
do_reject      . usage = "do_reject( event )";
do_clear       . usage = "do_clear( event )";
do_add_item    . usage = "do_add_item( event )";
do_remove_item . usage = "do_remove_item( event )";
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function codec() {
    tips( codec );
}
codec .usage = "codec()";
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function buttons() {
    tips( buttons );
}
buttons . usage = "buttons()";
</script>

<script status="untested">
buttons . add = function( title, action, hint ) {
    console . warn( "INCOMPLETE! buttons.add()" );
}
buttons . add . usage = (
  "buttons.add( title, action, hint )"
);
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<script status="untested">
function usage( o ) {
    if (! iob( o ) ) {
        say( INVALID$ );
        return;
    }
    o = ( o || usage );
    if ( s = str( o . usage ) ) {
        say( s );
    } else {
        usage . edit( o );
    }
}
usage . usage = "usage( object )";
</script>

<script status="untested">
usage . edit = function( o ) {
    if (! iob( o ) ) {
        say( INVALID$ );
        return;
    }
    let m = "Usage?";
    let s = "name( args ... )";
    s = str( window.prompt( m, s ) );
    if (! s ) {
        say( CANCELED$ );
        return;
    }
    o . usage = ( s );
    say( o . usage );
};
usage . edit . usage = "usage.edit( object )";
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function travel( place ) {
    const url = earl( places$[ place ] );
    return visit( url );
}
travel . usage = "travel( place )";
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function home() {
    if ( null === localStorage ) {
        home . omega();
    } else {
        home . morpheus();
    }
}
home . usage = "home()";
</script>

<script status="untested">
home . omega = function() {
    travel( "Omega Editable List Demo" );
};
home . omega . usage = "home.omega()";
</script>

<script status="untested">
home . morpheus = function() {
    travel( "Morpheus Editable List Demo" );
};
home . morpheus . usage = "home.morpheus()";
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function winston() {
    tips( winston );
}
</script>

<script status="untested">
; ( ( ops ) => {

ops . select = function( owner, query ) {
    const o = ( owner || document body );
    const q = ( str( query ) || "SCRIPT" );
    return arr( o.querySelectorAll( q ) );
};

ops . status = function( owner ) {
    return ops.select( "[status]" );
};

ops.prop = function( gadget, key ) {
    const ge = gadget;
    const s  = str( ge[ key ] );
    return ( s || "?" );
};

ops.attr = function( gadget, key ) {
    const ge = gadget;
    const s  = str( ge . getAttribute( key ) );
    return ( s || "?" );
};

ops.entry = function( gadget ) {
    const ge = ( gadget );
    if (! gad( ge ) ) { return; }
    const prop =( k )=> ( ops.prop( ge, k );
    const attr =( k )=> ( ops.attr( ge, k );
    const type   = ge . nodeName;
    const id     = prop( "id"     );
    const name   = prop( "name"   );
    const title  = prop( "title"  );
    const status = attr( "status" );
    const record = [
        type, id, name, title, status
    ];
    return {
      type
    , id
    , name
    , title
    , status
    , record
    };
};

ops . entries = function( owner, query ) {
    const m = ops . select( owner, query );
    return ( m ).map(
        ( ge ) => ( ops.entry( ge ) )
    );
};

ops . record = function( gadget ) {
    const entry = ops.entry( gadget );
    if (! entry ) { return; }
    return ( entry . record );
};

ops . record . schema = [
  "Type"
, "ID"
, "Name"
, "Title"
, "Status"
];

ops . records = function( owner, query ) {
    const m = ops . select( owner, query );
    return ( m ).map(
        ( ge ) => ( ops . record( ge ) )
    );
};

ops . table = function( owner, query, title ) {
    title = ( str( title ) || "Winston Table" );
    const schema = ops . record . schema;
    const records = ops . records( owner, query );
    const type = "winston-table";
    return { type, title, schema, records };
};

ops . untested = function( owner ) {
    const m = ops . status( owner );
    const w =( ge )=> {
    };
    const entry =( ge )=> {
    };
    return ( m ).filter( w );
};

} )
( winston )
;
</script>

<script status="untested">
winston . details = ( `
winston   | Show Winston Members
.attr     | Read Gadget Attribute
.prop     | Read Gadget Member Value
.select   | Select Gadgets by Owner and Query
.entry    | Create an Entry for Gadget Analysis
.entries  | Create an Array of Entries
.record   | Create a Table Record for Gadget Analysis
.records  | Create an Array of Table Records
.table    | Create a Table with Records and Schema
.status   | Select Gadgets by Status Attribute
.untested | Select Gadgets with Untested Status
` );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
function tabulate() {
    tips( tabulate );
};
</script>

<script status="untested">
; ( ( ops ) => {
} )
( tabulate )
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script status="untested">
places$ = {

  "Omega Editable List Demo"
: "http://dave-omega/app/morpheus/owl/examples/editable-list.html"

, "Morpheus Editable List Demo"
: "https://nyteowldave.github.io/owl/examples/editable-list.html"

, "Morpheus Home"
: "https://nyteowldave.github.io/"

, "Owl System"
: "https://nyteowldave.github.io/owl/owl.test"

};
</script>

<script status="untested">
winston . places = {
  "Winston Concept"
: "https://docs.google.com"
, "Winston Client Example"
: places$[ "Omega Editable List Demo" ]
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

