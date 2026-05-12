
<style group="Every Page Theme" host="dave-legacy">
@import url("https://nyteowldave.github.io/std/style/every-page.css")
</style>

<script>
; iwm = Object.keys( window ).sort();
</script>

----------------------------------------------------------------

<header id="page_title">
    Karlita Notes ~ Morpheus Edition
</header>

<footer id="footer">
    <div id="button_tray"> &nbsp; </div>
    <div id="messages"> &nbsp; </div>
</footer>

----------------------------------------------------------------

# Karlita Editions

----------------------------------------------------------------

- Morpheus
- Legacy
- Justin ~ Legacy

----------------------------------------------------------------

# Activity Log

----------------------------------------------------------------

| Host     | Updated     | Comments |
|----------|-------------|-------------------------------------|
| Morpheus | 2026-MAY-12 | Added Edition Notes                 |
| Legacy   | 2026-MAY-12 | Sync with Morpheus                  |
| Legacy   | 2026-MAY-12 | Updated Karlita Editor API Module   |

----------------------------------------------------------------

> [Editor](./karlita-editor.html)

----------------------------------------------------------------

<script src="https://nyteowldave.github.io/chachi/api/zed-prolog.js"></script>
<script src="https://nyteowldave.github.io/chachi/api/simple-messaging.js"></script>
<script src="https://nyteowldave.github.io/chachi/api/karlita-editor.js"></script>

<script>
function main( event ) {
    try {
        document . title = page_title.textContent;
    } catch ( e ) {
        fatal ( e );
    }
}
</script>

<script>
addEventListener( "load", main );
</script>

