<style>
@import url("https://nyteowldave.github.io/owl/owl.css");
</style>

<h3 id="_T_" > Owl Boilterplate </h3>

----------------------------------------------------------------

# Description

Just some _boilerplate_ for __Owl Apps__.

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

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
; mem =( o )=> Object.keys( o || window ).sort()
; iwm = mem();
</script>

<script>
; doc = ( document )
; doc . title = ( _T_.textContent ).trim()
</script>

<script>
; nop =( o )=> ( o )
; str =( o )=> String( o || "" ).trim()
; arr =( o )=> Array.from( o || []   )
; unq =( o )=> ( new Set( arr( o ) ) )
</script>

<script>
; elx =( t )=> ( doc.createElement( t ) )
; gid =( t )=> ( doc.createElement( t ) )
</script>

<script>
; ale =( q, e )=> arr( ( e ).querySelectorAll( q ) )
; ole =( q, e )=> nop( ( e ).querySelector   ( q ) )
; all =( q    )=> ale( q, doc );
; one =( q    )=> ole( q, doc );
</script>

<script>
; wop =( u )=> window.open( u, u )
; wap =( u )=> {
    const a = elx( "A" );
    a . href = ( u );
    a . click();
}
;
</script>

<script>
; asize =( o )=> ( o.length )
; osize =( o )=> ( o.size   )
</script>

<script>
; con = console;
; jat =( o )=> ( con . table( o ) )
; jet =( o )=> ( con . error( o ) )
; jit =( o )=> ( con . info ( o ) )
; jot =( o )=> ( con . log  ( o ) )
; jut =( o )=> ( con . warn ( o ) )
; jyt =( o )=> ( con . debug( o ) )
</script>

<script>
; jst =( o )=> ( JSON . stringify( o, null, 2 ) )
; jsx =( o )=> ( JSON . stringify( o ) )
; jso =( t )=> ( JSON . parse( t ) )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/owl/owl.js"></script>
<script src="https://nyteowldave.github.io/owl/visit-ultra.js"></script>
<script src="https://nyteowldave.github.io/std/api/install.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
; P$ = "http://dave-omega"
; S$ = "app/sinkro/notes/rt/open-files"
; K$ = "2026-OCT-31-omega.html"
</script>

<script>
; HOME$ = [ P$, S$, K$ ] . join( "/" )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function gadget( k ) {
    const o = window[ k ];
    return ( o instanceof HTMLElement );
}
</script>

<script>
if ( gadget( "address_input" ) ) {
   address_input . value = ( HOME$ );
} else {
    alert( "No Address Bar" );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function visit( url ) {
    const d = document;
    const a = d . createElement( "A" );
    a . href = ( url );
    a . click();
}
</script>

