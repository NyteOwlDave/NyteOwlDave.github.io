<style>
@import url("https://nyteowldave.neocities.org/style.css");
</style>

<style>
[wide] {
    width : calc( 100% - 100px ) !important;
}
.zach {
    display    : inline-block;
    max-width  : calc( 100vw - 100px );
    max-height : calc( 100vh - 200px );
    font       : 12pt monospace;
}
.zach:focus {
    color : midnightblue   !important;
    background : mintcream !important;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[demo]:
<https://nyteowldave.github.io/std/api/transport/transport-demo.html>
"Morpheus Edition"

[demo-omega]:
<http://dave-omega/app/morpheus/std/api/transport/transport-demo.html>
"Omega Edition (Private)"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[u-01]: <./ricolla-v1p0.js> "Riccola API"
[u-02]: <./ricardo-v1p0.js> "Ricardo API"
[u-03]: <./transport-demo.js> "Transport Demo App"
[u-04]: <./notes/transport-notes.html> "Transport API Notes"

----------------------------------------------------------------

# Transport Demo

> [Morpheus][demo]
> [Omega][demo-omega]

----------------------------------------------------------------

## Source Files

- [Riccola API][u-01] ~ Save File
- [Ricardo API][u-02] ~ Open File
- [Transport Demo App][u-03] ~ App Logic

----------------------------------------------------------------

## References

- [Transport Notes][u-04]

----------------------------------------------------------------

# Comments

----------------------------------------------------------------

- Use `PeachOps` for __Store Access__
- Use `zach` for __Editor Control__
- Use `zach.hints()` for __Member Lists__
- Use `sip.run()` to Execute SIP Value

----------------------------------------------------------------

<header id="messages"></header>

<footer id="footer">
  <input id="footer_input" wide onchange="perform(event)" />
</footer>

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="./riccola-v1p0.js"></script>
<script src="./ricardo-v1p0.js"></script>
<script src="./transport-demo.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function perform( event ) {
    const ops = perform;
    ops . error = "";
    try {
        ops.event = event;
        claim( event );
        const sender = event.target;
        window.eval( sender.value.trim() );
    } catch ( e ) {
        ops . error = ( e.message );
        bummer( e );
    }
}
</script>

