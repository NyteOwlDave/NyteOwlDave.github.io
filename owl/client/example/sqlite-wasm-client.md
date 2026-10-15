<head> <link rel="icon" href="favicon.ico" /> </head>

<!-- [[ sqlite-wasm-client.md ]] -->

<style>
@import url("./../../owl.css");
</style>

<style>
header,
footer {
    text-align : left;
}
header div {
    display : inline-block;
}
header a {
    background : black !important;
    color : mintcream  !important;
}
#messages ,
#footer_input {
    width : calc( 100vw - 240px ) !important;
}
.siox {
    background : mintcream;
    color : #080822;
    opacity : 0.777;
    overflow : scroll;
    max-width : calc( 100vw - 60px ) !important;
}
.siox:focus {
    opacity : 1.0;
}
</style>


<style>
fieldset {
    padding : 20px;
    border-radius : 20px;
    border : 1px dotted gold;
    background : #0003;
}
legend {
    padding : 0.25ch 1.0ch;
    font : 18pt sans-serif;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<header>
  <div id="messages"></div>
  <div>
    <a title="📘 Manual" href="https://sqlite.org/docs.html">📘</a>
    <a title="🧑‍💻 Practice" href="https://sqliteonline.com/">🧑‍💻</a>
  </div>
</header>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<h1>Sqlite3 Demo</h1>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<fieldset center>
  <legend> SQL Editor </legend>
  <textarea id="sql_editor" class="siox" wrap="off"></textarea>
</fieldset>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<fieldset center>
    <legend> Tables </legend>
    <section center id="table_section"></section>
</fieldset>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<footer>
 <input id="footer_input" onchange="perform(event)" />
</footer>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
; doc = ( document )
; doc . title = ( `Sqlite3 Demo` )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="./../../owl-prolog.js"></script>
<script src="./../../table-manager.js"></script>
<script src="./../jswasm/sqlite3.js"></script>
<script src="./sqlite-wasm-client.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
// Called by "sqlite-wasm-client.js" module
function main( event ) {
    init_editor( sql_editor );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
