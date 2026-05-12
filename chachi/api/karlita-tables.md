<style>
@import url("https://nyteowldave.github.io/std/style/every-page.css");
@import url("https://nyteowldave.github.io/std/style/noto-mono.css");
</style>

<script>
; iwm = Object.keys( window ).sort();
</script>

----------------------------------------------------------------

<header id="page_title">
    🦩 Karlita Notes ~ Morpheus Edition
</header>

<footer id="footer">
    <div id="button_tray"> &nbsp; </div>
    <div id="messages"> &nbsp; </div>
</footer>

----------------------------------------------------------------

# KarlitaOps Member Tables

----------------------------------------------------------------

<article center>
These members are accessed via the <code>KarlitaOps</code>
accessor object.
</article>

----------------------------------------------------------------

| Method                   | Action Taken                   |
|--------------------------|--------------------------------|
| ascii                    | ASCII Code from Character      |
| create_editor_manuscript | Create Editor Manuscript       |
| exec                     | Execute Editor Content as JS   |
| get_store                | Obtain Store Reference         |
| init_editor              | Initialize Editor Gadget       |
| input_store_key          | Input Editor Key Property      |
| is_modifier              | Verify Modifier Key Code       |
| karlita                  | Key Down Event Handler         |
| members                  | Obtain List of Object Members  |
| mine                     | Signal Event as Handled        |
| persist_editor           | Write Editor Content to Store  |
| recover_editor           | Read Editor Content from Store |
| replace_text             | Replace Selected Editor Text   |
| swap_memo                | Swap Editor Content with Memo  |
| unzoom                   | Unzoom Editor Gadget           |
| zoom                     | Zoom Editor Gadget             |

| Property | Type   | Value                                 |
|----------|--------|---------------------------------------|
|   n/a    |  n/a   | n/a                                   |

----------------------------------------------------------------

# Karlita Member Tables

----------------------------------------------------------------

<article center>
These members are accessed via the <code>karlita</code> method,
which doubles as an accessor.
</article>

----------------------------------------------------------------

| Method  | Action Taken                                    |
|---------|-------------------------------------------------|
| acquire | Acquire API Module                              |
| edit    | Request Remote Content for Editor               |
| math    | Acquire math.js API Module                      |
| message | Show Message or Alert Popup                     |
| request | Download Remote Content                         |

| Property | Type   | Value                                 |
|----------|--------|---------------------------------------|
| hotkeys  | object | Hot Key Map                           |
| links    | object | URL Address Map                       |
| tidate   | string | Registration Date                     |
| tikey    | string | Registration Key                      |
| title    | string | API Title                             |
| updated  | string | Date of Change                        |
| version  | string | Version Number                        |

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


