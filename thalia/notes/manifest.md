
<style>
@import url("http://dave-legacy/rt/style/plain.css");
@import url("http://dave-legacy/math/toolkit/style/area-solver.css");
</style>

<style>
pre {
    overflow : scroll;
    font-family : "Noto Mono", monospace;
    text-align  : left;
    max-width   : calc( 100vw - 20ch );
    max-height  : calc( 60vh );
}
footer div {
    display : inline-block;
    margin-left  : 1ch;
    margin-right : 1ch;
}
</style>

----------------------------------------------------------------

<header> Manifest ~ Thalia NOW! </header>

<script>
addEventListener( "load", () => {
    document . title = (
        document
        . querySelector( "HEADER" )
        . textContent
    );
} );
</script>

<footer id="footer">
    <div id="button_tray"> (tray) </div>
    <div id="messages"> (status) </div>
</footer>

<script>
function message( o ) {
    let s;
    if ( o instanceof ? ) {
        if ( o instanceof ? ) {
            s = String( o.message );
            s = ( `🔴 ${s}` );
        } else {
            s = JSON.stringify( o );
        }
    } else {
        s = String( s );
    }
    ; return (
        messages.textContent = ( s )
    );
}
</script>

<script>
function defineButton( decal, action, hint ) {
    return { decal, action, hint };
}
</script>

<script>
function addButton( buttonDef ) {
    try {
        let be = document.createElement( "BUTTON" );
        be.textContent = ( decal );
        be.title = composeHint( decal, hint );
        be.addEventListener( "click", action );
        return ( button_tray.appendChild( be ) );
    } catch ( e ) {
        messages.textContent = composeError( e );
        return ( e );
    }
}
</script>

<script>
function composeHint( decal, hint ) {
    let d = ( decal || "?" );
    let h = String( hint || "Unknown" ).trim();
    return ( `${d} ${h}` );
}
</script>

<script>
// 🟢 🟡 🔴
function composeError( e ) {
    return composeHint( "🔴", e.message );
}
function composeWarning( e ) {
    return composeHint( "🟡", e.message );
}
function composeSuccess( e ) {
    return composeHint( "🟢", e.message );
}
function composeAdvice( e ) {
    return composeHint( "🟢", e.message );
}
function composeNotice( e ) {
    return composeHint( "🟢", e.message );
}
</script>

<script>
function removeButton( decal ) {}
</script>

<script>
function getButton( decal ) {}
</script>

<script>
function clickButton( decal ) {}
</script>

----------------------------------------------------------------

| Item       | Value                                |
|------------|--------------------------------------|
| Agent      | firefox                              |
| Client     | dave-legacy                          |
| Server     | dave-legacy                          |
| Store Key  | NOW!.md                              |
| Title      | Thalia NOW!                          |
| Version    | 1.0                                  |
| TiKey      | ffb0f5c0-1289-11f1-b0dd-b3517a073dfa |
| Updated    | 2026-FEB-25                          |
| Whiteboard | (pending)                            |
| Registered | no                                   |

----------------------------------------------------------------
