<head> <link rel="icon" href="./icons/mynotepad.png" /> </head>

<style>
@import url("./../std/style/session-editor.css");
</style>

<style>
body {
    background : #080822CC;
    margin : 0px 40px 64vh 40px;
    border-radius : 22px;
}
</style>

----------------------------------------------------------------

# My Notepad Coordinator

----------------------------------------------------------------

## Introduction

Since Web-Based front-end only apps tend to scatter data all
over the place, coordination and synchronization are crucial
to maintaining coherent, consistent, and up to date information.

This applet serves that role for the `MyNotepad` API Module.
The `Session Editor` can get multiple versions into Session
Storage. This app then faciliates merging diverse collections
or related data.

----------------------------------------------------------------

## Usage

I can think of a few possible strategies for merging raw `JSON`
objects. Not the internal logic -- that's trivial. I mean the
steps required by the User while working with the Interface.

The first might be to provide a list of Store Keys for some
previoulsy saved Entries.

Another approach might have all Entries previously saved as
a JSON-encoded array in a single Store Entry.

Then there's the choice I've settled on. Make it easy to create
`TEXTAREA` elements. Permit the user to create one such gadget
per JSON object. Then it's a matter of pasting, loading, or
even writing entries as needed.

With a final __Merge__ button to combine the parts.

----------------------------------------------------------------

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<footer>
 <input id="footer_input" onchange="perfecto(event)" />
 <select id="task_droplist">
<!--
   <option  value="accept()">✅ Accept Changes</option>
   <option  value="reject()">❎ Reject Changes</option>
   <option value="refresh()">🔄 Refresh Editor</option>
   <option value="catalog()">🔐 Show Session Keys</option>
   <option    value="zoom()">💠 Zoom Editor</option>
   <option    value="home()">🏠 Home</option>
   <option value="persist()">🔏 Persist Session</option>
   <option value="recover()">🔓 Recover Session</option>
   <option  value="remove()">🗑️ Remove Session</option>
-->
 </select>
 <span class="button-right" id="btn_invoke" onclick="invoke(event)">🆗</span>
</footer>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="iwm.js">
; iwm = Object.keys( window ).sort()
</script>

<script id="doc.js">
; doc = document
</script>

<script id="debug.js">
; cls =()=> console.clear()
; agn =()=> location.reload()
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="./../std/api/gems/prolog-beta.js"></script>
<script src="./../std/api/interpreter-lite.js"></script>
<script src="./../std/api/coordinator.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="global-props.js">
// const sce = doc.getElementById( "sce" );
</script>

<script id="main.js">
function main( event ) {
    try {
        doc . title = "My Notepad Coordinator";
        // init_ui();
        // init_editor( sce );
        // session . read();
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}
</script>

<script id="page-load.js">
addEventListener( "load", main );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
