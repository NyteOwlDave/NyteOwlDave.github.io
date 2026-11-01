<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="icon" href="favicon.ico" />

<style>
@import url("https://nyteowldave.github.io/owl/owl.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
:root {
    --glow : 0px 0px 1em gold;
}
</style>

<style name="wide.css">
.wide ,
[wide] {
    width   : calc( 100vw - 160px );
    outline : none;
    border  : none;
    padding : 7px 1em;
    font    : 11pt monospace;
    border-radius : 3ch;
}
.wide:focus ,
[wide]:focus {
    box-shadow : var( --glow );
    transform  : scale( 1.07 );
}
</style>

<style>
.dot-button {
    outline : none;
    border  : none;
    padding : 7px;
    margin  : 4px;
    z-index : 100;
    font    : 10pt monospace;
    display : inline-block;
    cursor  : pointer;
    color   : midnightblue;
    background    : mintcream;
    text-align    : center;
    border-radius : 3ch;
    user-select   : none;
}
.dot-button:hover {
    box-shadow : var( --glow );
    transform  : scale( 1.2  );
    color : mintcream;
    background : midnightblue;
}
</style>

<style name="Cool Button Style">
button[cool] {
    display    : inline-block;
    border     : none;
    background : #000A;
    color      : #FF4A;
    border-radius : 2.2ch;
    height        : 3.2ch;
    line-height   : 2.2ch;
    padding       : 0px 1.5ch;
}
</style>

<style name="Details Text Area Style">
details textarea.siox {
    margin-top : 2em;
}
</style>

<style name="Input Section Style">
.input-section {
    text-align : center;
}
</style>

<style name="Action Menu Style">
.action-menu {
    text-align : center;
}
.action-group {
    text-align : center;
    padding    : 7px;
}
.action-group:hover {
    background : #FF73;
}
</style>

<style >
h3#_T_:before { content : "〖 "; }
h3#_T_:after  { content : " 〗"; }
</style>

<style>
th {
   text-align : left;
}
</style>

<style>
/*
    icon-menu.css
*/

#icon_section {
    text-align : center;
    overflow-y : scroll;
    max-height : calc( 640px );
    margin  : 7px;
    padding : 7px;
}

#icon_section:hover {
    background : #DF42;
}

.icon {
    display : inline-block;
    margin  : 4px;
    padding : 4px;
    height  : 64px;
    width   : 64px;
    outline : none;
    border  : 1px dashed gold;
    border-radius : 8px;
    user-select   : none;
    cursor  : pointer;
}

.icon:hover {
    transform : scale( 1.18 );
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<h3 id="_T_"> Pending Styles </h3>

----------------------------------------------------------------

<div center>
<h3> Page Address </h3>
<div>
  <input wide id="address_input" />
  <div class="dot-button" onclick="goto(address_input)">Go</div>
</div>
<script>
function goto( o ) {
    const earl =( oo )=> ( "string" === typeof oo );
    const gurl =( uu )=> ( visit( uu ) );
    if ( earl( o         ) ) { return gurl( o         ); }
    if ( o instanceof Object ) {
        if ( earl( o.value   ) ) { return gurl( o.value   ); }
        if ( earl( o.home    ) ) { return gurl( o.home    ); }
        if ( earl( o.address ) ) { return gurl( o.address ); }
        if ( earl( o.manual  ) ) { return gurl( o.manual  ); }
        if ( earl( o.url     ) ) { return gurl( o.url     ); }
        if ( earl( o.src     ) ) { return gurl( o.src     ); }
        if ( earl( o.href    ) ) { return gurl( o.href    ); }
    }
    throw new Error( "Invalid Argument ( no URL )" );
}
</script>
</div>

----------------------------------------------------------------

# Description

This document contains CSS Styles that need to be added to the
`owl.css` file.

----------------------------------------------------------------

# Remarks

This document also contains the original `owl-main.js` source
code ( embedded). As such, it serves as a test bed for devops
for that component.

It also contains:

- Advanced `input` component
- Advanced `tips` component
- Cool Address Bar Gadget
- Cool Dot Button Gadget

What would be really awesome would be to integrate this with
the NAVLINKS Project and other Link Management Tools!

----------------------------------------------------------------

<script>
; mem =( o )=> Object.keys( o || window ).sort()
; iwm = mem()
</script>

<script>
; doc = ( document )
; doc . title = ( _T_.textContent ).trim()
</script>

<script>
; nop =( o )=> ( o )
; str =( o )=> String( o || "" ).trim()
; arr =( o )=> Array.from( o || [] )
; unq =( o )=> ( new Set( arr( o ) ) )
; idx =(   )=> ( new Map() )
</script>

<script>
; gad =( o )=> ( o instanceof HTMLElement )
</script>

<script>
; jst =( o )=> ( JSON . stringify( o, null, 2 ) )
; jsx =( o )=> ( JSON . stringify( o ) )
; jso =( t )=> ( JSON . parse( t ) )
</script>

<script>
; qlc =( o, sep="\n" )=> ( o . join( sep ) )
; qlp =( o, sep="\n" )=> {
    o = ( o ).split( sep ).map( str );
    return ( o ).filter( nop );
}
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/owl/owl.js"></script>
<script src="https://nyteowldave.github.io/owl/visit-ultra.js"></script>
<script src="https://nyteowldave.github.io/owl/install.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function pass( descriptor ) {
    const o = ( descriptor );
    const p = ( o.provider || o.p || o.P );
    const s = ( o.plitter  || o.s || o.S );
    const k = ( o.key      || o.k || o.K );
    return ( [ p, s, k ] . join( "/" ) );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function main( event ) {
    try {
        init_input( input );
        init_address();
        say( "Initialized!" );
    } catch ( e ) {
        if ( "function" !== typeof window.bummer ) {
            console . error( e );
            window  . alert( e );
            window  . alert( "Failed to Initialize Main!" )
        } else {
            bummer( e );
        }
    }
}
;
; ( 0 ) && alert( "main()" )
;
</script>

<script>
main . pass = {
  p : "http://dave-omega"
, s : "app/morpheus/owl/notes"
, k : "pending-styles.html"
};
</script>

<script>
main . home = pass(  main . pass );
</script>

<script>
;
; ( 0 ) && ( alert( main . home ) )
;
</script>

<script>

function init_address( url ) {
    const ge = resolve( "address_input" );
    url = ( str( url ) || main . home );
    ( input )
    . write(
        ge
      , url
    );
}

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script name="owl-main.js">

function init_main( ops ) {

const wnd = ( window );

const _fn =( k )=> ( "function" === typeof wnd[ k ] );
const _ob =( k )=> ( "object"   === typeof wnd[ k ] );
const _st =( o )=> ( str( o ) || "?" );

; ( ops )
. manual = ( "https://docs.google.com" );

; ( ops )
. silent = ( false );

( ops )
. report = function( s ) {
    let _f, _o;
    s = _st( s );
    if ( _f = _fn( "say" ) ) {
        return _f( s );
    }
    if ( _f = _fn( "blurt" ) ) {
        return _f( s );
    }
    if ( _f = _fn( "message" ) ) {
        return _f( s );
    }
    if ( _o = _ob( "messages" ) ) {
        if ( gad( _o ) ) {
            messages . textContent = ( s );
            return;
        }
    }
    if ( _f = _fn( "balloon" ) ) {
        return _f( s );
    }
    console . log( s );
    if ( ops . silent ) { return; }
    window . alert( s );
};

( ops )
. bummer = function( e ) {
    console . error ( e );
    if ( ops . silent ) {
        return ops . report( e . message );
    } else {
        window . alert ( e );
    }
};

( ops )
. incomplete = function( s ) {
    s = _st( s );
    ops . report( "INCOMPLETE : " + s );
};

( ops )
. reminder = function( s ) {
    s = _st( s );
    console . info( "REMINDER : " + s );
};

( ops )
. loaded = function( s ) {
    s = _st( s );
    console . log( "Loaded Component : " + s );
};

( ops )
. initialized = function( s ) {
    s = _st( s );
    console . log( "Initialized Component : " + s );
};

( ops )
. expected = function( s ) {
    s = _st( s );
    throw new Error( "Expected : " + s );
};

( ops )
. resolve = function( o ) {
    if ( o ) {
        if ( gad( o ) ) { return ( o ); }
        o = String( o ).trim();
        return gid( o );
    }
    ops . expected( "Reference or ID" );
};

let m = [
  "bummer"
, "expected"
, "incomplete"
, "reminder"
, "report"
, "resolve"
, "resolve"
];

m . forEach(
  ( k ) => { wnd[ k ] = ( ops[ k ] ); }
);

; ( ops )
. exported = ( m )
;

;
; ops . initialized( "main" )
;

}

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
try {
    init_main( main )
    addEventListener( "load", main )
} catch ( e ) {
    console . error( e );
    window  . alert( e );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function input() {
    tips( input, "Input Members" );
}
</script>

<script>

function init_input( ops ) {

; ( ops )
. manual = ( "https://docs.google.com" )
;

( ops )
. read = function( gadget ) {
    return ops . write( gadget );
};

( ops )
. write = function( gadget, value ) {
    const ge = main . resolve( gadget );
    let v1 = ops . prep( value );
    let v2 = ops . prep( ge . value );
    ge . value = ( v1 || v2 );
    return ( ge . value );
};

( ops )
. nullish = function( value ) {
    if ( null === value ) {
        return true;
    }
    if ( "undefined" === typeof value ) {
        return true;
    }
    return ( false );
};

( ops )
. prep = function( value ) {
    if ( ops . nullish( value ) ) {
        return "";
    }
    const pr = ( ops . prep );
    const pobj =()=> ( pr . object   ( value ) );
    const prim =()=> ( pr . primitive( value ) );
    switch ( typeof value ) {
    case "object"    : return pobj();
    default          : return prim();
    }
};

( ops )
. prep
. object = function( value, sep=" | " ) {
    if ( ops . nullish( value ) ) {
        return "";
    }
    if ( value instanceof Set ) {
        value = arr( value );
    }
    if ( Array.isArray( value ) ) {
        return (
            ( value )
            . join( sep )
        );
    }
    return (
        ( mem( value ) )
        . join( sep )
    );
};

( ops )
. prep
. primitive = function( value ) {
    if ( ops . nullish( value ) ) {
        return "";
    }
    if ( "string" === typeof value ) {
        return str( value );
    }
    return (
        ( value )
        . toString()
        . trim()
    );
};

}

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function tips( o, title ) {
    o = mem( o );
    t =  tips . bracket( title );
    o . unshift( t + LF$ );
    window . alert( qlc( o ) );
}
;
; LF$ = "\n"
; MEMBERS$ = "Members"
;
</script>

<script>
;
( ( ops ) => {

ops . bracket = function( t, orelse=MEMBERS$ ) {
    t = ( str( t ) || orelse );
    return ( `〖 ${t} 〗` );
};

ops . manual = (
    return ( "https://docs.google.com" );
);

} )
( tips )
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

