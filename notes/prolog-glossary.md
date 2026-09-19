<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("https://nyteowldave.neocities.org/style.css");
@import url("https://nyteowldave.github.io/std/style/hud.css");
</style>

<style>
#footer_input {
    width : calc( 100vw - 100px ) !important;
}
</style>

<style>
.dot {
	display : inline-block;
	box-sizing : border-box;
	font : 11pt monospace;
	line-height : 2.2ch;
	width  : 2.2ch;
	height : 2.2ch;
	cursor      : pointer;
	text-align  : center;
	user-select : none;
	outline     : none;
	border      : none;
	margin      : 0px 16px 0px 5px;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[prolog-home]: <./auto/>
[prolog-concept]: <./auto/>
[prolog-sheet]: <./auto/>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[shurl]: <https://tiny.cc/tiny/manage>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-morpheus]:
<https://nyteowldave.github.io/notes/prolog-glossary.html>
"🤩 Morpheus Edition"

[me-tower]:
<http://dave-tower/app/morpheus/notes/prolog-glossary.html>
"Tower Edition (📛 private)"

[me-omega]:
<http://dave-omega/app/morpheus/notes/prolog-glossary.html>
"Omega Edition (📛 private)"

[me-legacy]:
<http://dave-legacy/app/morpheus/notes/prolog-glossary.html>
"Legacy Edition (📛 private)"

----------------------------------------------------------------

# Prolog Glossary

> [`🤩` Morpheus][me-morpheus]

> [`📛` Tower][me-tower]
> [`📛` Omega][me-omega]
> [`📛` Legacy][me-legacy]

> [`🗃️` File System](./)

----------------------------------------------------------------

<div class="table-owner" id="table_owner"></div>

| Member | Description                          | Ops Group |
|--------|--------------------------------------|-----------|
| cls    |                                      |           |
| agn    |                                      |           |
| mem    |                                      |           |
| dir    |                                      |           |
| tmp    |                                      |           |
| str    |                                      |           |
| arr    |                                      |           |
| unq    |                                      |           |
| ole    |                                      |           |
| ale    |                                      |           |
| one    |                                      |           |
| all    |                                      |           |
| elx    |                                      |           |
| gid    |                                      |           |
| iat    |                                      |           |
| ias    |                                      |           |
| iaf    |                                      |           |
| ian    |                                      |           |
| iar    |                                      |           |
| iob    |                                      |           |
| gad    |                                      |           |
| ged    |                                      |           |
| gvw    |                                      |           |
| gtb    |                                      |           |
| gip    |                                      |           |
| jst    |                                      |           |
| jsx    |                                      |           |
| jso    |                                      |           |
| jsp    |                                      |           |
| jat    |                                      |           |
| jet    |                                      |           |
| jit    |                                      |           |
| jot    |                                      |           |
| jut    |                                      |           |
| jyt    |                                      |           |
| jgc    |                                      |           |
| jgs    |                                      |           |
| jge    |                                      |           |

----------------------------------------------------------------

<div center>
  <button action="_persist()" onclick="action(event)">Persist</button>
  <button action="_recover()" onclick="action(event)">Recover</button>
  <button action="_edit()"    onclick="action(event)">Edit</button>
  <button action="_accept()"  onclick="action(event)">Accept</button>
</div>

----------------------------------------------------------------

# Important

This is a __General Purpose__ document. There are numerous
__Prolog__ implementations in my code base.

The implication is that there may be inconsistencies or name
conflicts. Missing items also, which have yet to be recorded
here.

----------------------------------------------------------------

# Resources

----------------------------------------------------------------

> [Home Site][prolog-home]
> [Concept][prolog-concept]
> [Spreadsheet][prolog-sheet]

> [Short URLs][shurl]

----------------------------------------------------------------

<textarea id="sce" class="hud hide"></textarea>

<header id="messages"></header>

<footer id="footer">
 <input id="footer_input" wide onchange="perform(event)" />
 <span class="dot" onclick="hud()">◩</span>
</footer>

----------------------------------------------------------------

<script id="iwm.js">
; iwm = Object.keys( window ).sort();
</script>

<script id="doc.js">
; doc = document
; doc . title = "Prolog Glossary"
</script>

<script id="debug.js">
; cls =()=> console.clear()
; agn =()=> location.reload()
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/std/api/gems/prolog-beta.js"></script>
<script src="https://nyteowldave.github.io/std/api/gems/interpreter-lite.js"></script>
<script src="https://nyteowldave.github.io/std/api/hud.js"></script>
<script src="https://nyteowldave.github.io/std/api/bluto/message-ops.js"></script>
<script src="https://nyteowldave.github.io/std/api/bluto/gems/acquire.js"></script>
<script src="https://nyteowldave.github.io/std/api/bluto/gems/docify.js"></script>
<script src="https://nyteowldave.github.io/std/api/bluto/gems/suggestions.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="main">
function main( event ) {
	try {
		const t = ( main . table = one( "TABLE" ) );
		table_owner . appendChild( t );
        if ( store.has_entry( store.key ) ) {
            _recover();
        }
		const m = arr( t . querySelectorAll( "TD" ) );
		m . forEach( ( ge ) => canedit( ge ) );
	} catch ( e ) {
		console . error ( e );
		window  . alert ( e );
	}
}
;
; main.table =( null )
;
</script>

<script id="page-load.js">
addEventListener( "load", main );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="canedit.js">
function canedit( o, en=1 ) {
	if ( en ) {	o.setAttribute( CE, "true" ); }
	else      { o.removeAttribute( CE );      }
}
;
; CE = "contenteditable"
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="event-actions.js">
function _persist() { shaggy( persist ); }
function _recover() { shaggy( recover ); }
function _edit   () { shaggy( edit    ); }
function _accept () { shaggy( accept  ); }
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="store.js">
function store() {
	let s = store.ref;
	if ( s ) { return ( s ); }
	s = ( localStorage );
	if ( null === s ) {
		s = ( sessionStorage );
	}
	return ( store.ref = s );
}
;
; store.key = "prolog-glossary.html"
;
store.has_entry = function( key ) {
    const s = store();
    key = ( str( key ) || store.key );
    return ( null !== s.getItem( key ) );
};
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="persist.js">
function persist() {
	const s = store();
	const k = store.key;
	const t = main.table;
	const v = t.innerHTML;
	s . setItem( k, v );
	blurt( `Wrote "${k}" to Store` );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="recover.js">
function recover() {
	const k = store.key;
	const s = store();
	const v = s.getItem( k );
	if ( null === v ) {
		dangit( `Missing Store Entry` );
		return;
	}
	const t = main.table;
	t.innerHTML = ( v );
	blurt( `Read "${k}" from Store` );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="edit.js">
function edit() {
	hud.show();
	sce.value = main.table.outerHTML;
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="accept.js">
function accept() {
	const owner = get_table_owner();
	owner . innerHTML = sce.value.trim();
	let t = (
		owner . querySelector( "TABLE" )
	);
	if ( t ) {
		main . table = ( t );
	} else {
		t = ( main . table );
		owner . innerHTML ="";
		owner . appendChild( t );
	}
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="shaggy.js">
function shaggy( a, b, c ) {
	try {
		return a( b, c );
	} catch ( e ) {
		return bummer( e );
	}
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="get-table-owner.js">
function get_table_owner( a, b, c ) {
	const cname = "table-owner";
	const t = main.table;
	let o = t.parentElement;
	if ( o.classList.contains( cname ) ) {
		return ( o );
	}
	let d = elx( "DIV" );
	d . classList . add( cname );
	o . appendChild( d );
	d . appendChild( t );
	return ( d );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script id="express.js">
function express() {
    window.open( "http://tiny.cc/express-lane", "_blank" );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


