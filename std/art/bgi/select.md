
<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<script>
;
; iwm = Object.keys( window ).sort()
;
</script>

<script>
;
; str =( o )=> ( String( o || "" ).trim() )
;
</script>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<style>
html, body, textarea, pre {
    box-sizing : border-box;
    border  : none;
    margin  : 0;
    padding : 0;
}
html {
    background-image : url("x-files.png");
}
body {
    background : transparent;
    text-align : center;
}
</style>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<style>
select {
    display : inline-block;
    width   : 20em;
    font    : 14pt monospace;
}
#preview {
    display    : inline-block;
    width      : 300px;
    background : navy;
    margin     : 20px;
    border     : 1px dotted gold;
    box-shadow : 0 0 20px black;
}
button {
    border : 2px solid black !important;
    font-size : 20pt;
}
h1, h2, h3,
h4, h5, h6 {
    text-shadow : 1px 1px 3px black;
}
</style>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<style>
*:focus {
    background : mintcream  !important;
    color : rgb( 8, 8, 22 ) !important;
}
</style>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<style>
textarea {
    position : fixed;
    left     : 0;
    width    : 100%;
    outline  : none;
    white-space : nowrap;
    padding  : 4px;
    padding-left  : 14px;
    padding-right : 14px;
}
textarea {
    top  : 0;
    max-height : calc( 100vh - 100px );
    resize : vertical;
    overflow-x : scroll;
    overflow-y : scroll;
    font       : 11pt monospace;
}
textarea:hover {
    background : mintcream  !important;
    color : rgb( 8, 8, 22 ) !important;
}
</style>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<h1> Choose Background </h1>

<div>
    <select id="bgi_choice"></select>
</div>

<div>
    <img id="preview" src="x-files.png" alt="Preview" />
</div>

<div>
    <button onclick="ok()">Apply</button>
</div>


----------------------------------------------------------------

<style>
@import url("./style/footer-input.css");
</style>

<footer>
  <input id="footer_input" onchange="perform(event)" />
</footer>


----------------------------------------------------------------

<a f1="" class="fixed" href="./dot/mathjs.html" title="Math JS">
  <img class="icon32" src="https://nyteowldave.github.io/icons/32/math-js.png" alt="MathJS">
</a>

<a f2="" class="fixed" href="./dot/thalia/" title="Thalia">
  <img class="icon32" src="https://nyteowldave.github.io/icons/32/thalia.png" alt="Thalia">
</a>

<a f3="" class="fixed" href="./dot/hysteresis/" title="Hysteresis">
  <img class="icon32" src="https://nyteowldave.github.io/icons/32/hysteresis.png" alt="Hyss">
</a>

<a f4="" class="fixed" href="https://nyteowldave.github.io/art/std/bgi/select.html" title="Home">
  <img class="icon32" src="https://nyteowldave.github.io/icons/32/home-dark.png" alt="Home">
</a>

<style>
.icon32 { width : 32px;    }
.fixed { position : fixed; z-index : 99999; }
a[f1] { bottom :  50px; right : 10px; }
a[f2] { bottom : 100px; right : 10px; }
a[f3] { bottom : 150px; right : 10px; }
a[f4] { bottom : 200px; right : 10px; }
a[f5] { bottom : 250px; right : 10px; }
a[f6] { bottom : 300px; right : 10px; }
</style>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<!-- [[ Background Image Names ]] -->
<script src="./bgi-choices.js"></script>

<!-- [[ Parse Name Core List ]] -->
<script src="./gems/pcl.js"></script>

<!-- [[ Gadget Ops ]] -->
<script src="./gems/populate-list.js"></script>
<script src="./gems/select-source.js"></script>
<script src="./gems/apply-bgi.js"></script>
<script src="./gems/advance-index.js"></script>

<!-- [[ Footer Input Ops ]] -->
<script src="./gems/dot.js"></script>
<script src="./gems/exec.js"></script>
<script src="./gems/macro.js"></script>
<script src="./gems/perform.js"></script>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<script>
function ok( event ) {
    const gadget = doc.firstElementChild;
    const address = bgi_choice.value;
    apply_bgi( gadget, address );
}
</script>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<script>
function look( event ) {
    select_source( preview, bgi_choice );
}
</script>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<script>
function advance( event ) {
    const select = bgi_choice;
    const reverse = event.ctrlKey;
    advance_index( select, reverse );
    look();
}
</script>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<script>
function main( event ) {
    const select  = bgi_choice;
    const options = bgi_choices;
    populate_list( select, options );
    select . addEventListener( "change", look );
    look();
    preview.onclick = advance;
}
</script>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

<script>
;
; doc = document
; doc . title = ( `Background Selection` )
;
; addEventListener( "load", main )
;
</script>


<!--  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  -->

