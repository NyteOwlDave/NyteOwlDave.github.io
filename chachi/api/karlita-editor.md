
<style group="Every Page Theme" host="dave-legacy">
@import url("http://dave-legacy/~/style/every-page.css")
@import url("http://dave-legacy/~/style/every-page-todo.css")
</style>

<style group="Every Page Theme" host="dave-legacy">
@import url("https://nyteowldave.github.io/std/style/every-page.css")
</style>

<script>
; iwm = Object.keys( window ).sort();
</script>

----------------------------------------------------------------

<header id="page_title">
    Karlita Sandbox ~ Morpheus Edition
</header>

<footer id="footer">
    <div id="button_tray"> &nbsp; </div>
    <div id="messages"> &nbsp; </div>
</footer>

[wbrd]:
<https://whiteboard.cloud.microsoft/me/whiteboards/6729c449-c4df-4795-9b02-0fc607d1feed>
"API Modules Whiteboard"

----------------------------------------------------------------

<fieldset center>
<legend> Karlita Sandbox </legend>
<div>
  <textarea id="sce"></textarea>
</div>
<div>
  <button onclick="zoom(sce)">Zoom</button>
  <button onclick="exec(sce)">Run</button>
</div>
</fieldset>

----------------------------------------------------------------

> [Explore](./)
> [Editions](./karlita-editions.html)
> [Home](https://nyteowldave.github.io/chachi/api/karlita-editor.html)
> [Whiteboard][wbrd]

----------------------------------------------------------------

<script src="https://nyteowldave.github.io/chachi/api/zed-prolog.js"></script>
<script src="https://nyteowldave.github.io/chachi/api/simple-messaging.js"></script>
<script src="https://nyteowldave.github.io/chachi/api/karlita-editor.js"></script>

<script>
function main( event ) {
    try {
        init_editor( sce );
        ready( "Ready for Action!" );
    } catch ( e ) {
        fatal ( e );
    }
}
</script>

<script>
addEventListener( "load", main );
</script>

