<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("https://nyteowldave.neocities.org/style.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
.ghost {
    position : fixed;
    left     : -2000px;
    width    : 2px;
    height   : 2px;
    opacity  : 0;
}
li.clickable {
    padding : 4px;
    margin  : 3px;
    cursor  : pointer;
    display : inline-block;
    width   : 90%;
    border  : 2px solid transparent;
}
li.clickable:hover {
    background : #A0FF40;
    color      : black;
    border     : 2px dotted gold;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

----------------------------------------------------------------

<h1 id="_T_"> Docify Gem Notes </h1>

<div center>
  <img src="./gems.png" />
</div>

----------------------------------------------------------------

# Descriptions

----------------------------------------------------------------

| Member   | Description |
|----------|-------------------------------------------|
| type     | Popup Primitive Type Name                 |
| ntype    | Popup HTML Element Node Name              |
| ctype    | Popup Function or Class Contructor Name   |
| clist    | Popup HTML Element Class List             |
| cname    | Popup HTML Element Class Name             |
| asize    | Popup Array Length                        |
| osize    | Popup Object Size Property                |
| hints    | Popup Object Member Names                 |
| docify   | Create Object Document Table              |
| describe | Assessor                                  |

----------------------------------------------------------------

# Data Types

----------------------------------------------------------------

| Member   | Type   |
|----------|--------|
| type     | Method |
| ntype    | Method |
| ctype    | Method |
| clist    | Method |
| cname    | Method |
| asize    | Method |
| osize    | Method |
| hints    | Method |
| docify   | Method |
| describe | Object |

----------------------------------------------------------------

<style>
menu {
    box-sizing : border-box;
    margin  : 4px;
    padding : 4px;
}
footer input {
    box-sizing : border-box;
    width : calc( 100vw - 40px );
    margin   : 0.5ch 0.5ch;
    padding  : 0.5ch 1.2ch;
}
footer {
    box-sizing : border-box;
    text-align : center;
    padding    : 0;
}
footer, footer * {
    font : 12pt monospace;
}
</style>

<div center>
  <h1> 🔗 Related Links </h1>
  <h2> 🌐 Public </h2>
  <menu center>
    <button onclick="_do_1()">Morpheus</button>
  </menu>
  <h2> 📛 Home LAN </h2>
  <menu center>
    <button onclick="_do_2()" >Omega</button>
  </menu>
  <h2> 📛 File System </h2>
  <menu center>
    <button onclick="_do_3()" >Workspace</button>
  </menu>
</div>

----------------------------------------------------------------

# Using Docify

----------------------------------------------------------------

Most of the methods are basic and self-explanatory. They're
there for __Run-Time Diagnostics__ and __Code Spelunking__.

I won't dwell on those. Try them yourself in the
__Footer Command Input__. Click any <i>suggestion</i> below.

The real __Star__ here is the `docify` method itself.

### Suggestions

- type( doc )
- ntype( doc.body )
- asize( Array.from( doc.scripts ) )
- osize( new Set( [ 4, 2, 9 ] ) )
- clist( ghost_anchor )
- cname( ghost_editor )
- ctype( Example )
- ctype( new Example() )
- hints( location, 'Location Members' )
- hints( describe, 'Describe Members' )

----------------------------------------------------------------

# Example Docify Table

| Member | Type     | Comments | Value |
|--------|----------|----------|--------------------------------------|
| hints  | function | ?        | function hints( ... ) `{` ... `}`    |
| tikey  | string   | ?        | 5194e0c6-b830-11f1-b2a8-97173db9e163 |
| title  | string   | ?        | My Cool API Module                   |

----------------------------------------------------------------

## Equivalent Docify JSON

```json
[
  [
     "hints",
     "function hints( ... ) { ... }",
     "function",
     "?"
  ],
  [
     "tikey",
     "5194e0c6-b830-11f1-b2a8-97173db9e163",
     "string",
     "?"
  ],
  [
     "title",
     "My Cool API Module",
     "string",
     "?"
  ]
]

```

----------------------------------------------------------------

## JavaScript Source Code

```javascript

// Define Some API Code
MyCoolAPI = {};
MyCoolAPI.hints = function( ... ) { ... };
MyCoolAPI.tikey = "5194e0c6-b830-11f1-b2a8-97173db9e163";
MyCoolAPI.title = "My Cool API Module";

// Create Docify Core Table
// ( Here's our Star at Work!!! )
doc_table = docify( MyCoolAPI );

// Populate an HTML Table using Core Table
// ( This is a theoretical Client-Defined function )
create_html_table( doc_table );

// Convert Core Table to JSON and Edit as Text
// ( This is a theoretical Client-Defined function )
edit_as_json( doc_table );

```

----------------------------------------------------------------

# More Spelunking

For a __Hierarchical Tree__ of __Object__ and __Function__ names
within some __Accessor__, check out the `otree.js` module.

Many other __Web Apps__ also contain a `jarvis` method
or `JarvisOps` object for __Code Spelunking__. We leave
locating those features as an exercise for the reader.

----------------------------------------------------------------

# Gem Source Files

- [acquire.js](./acquire.js) ~ Acquire JS or CSS Modules
- [describe.js](./describe.js) ~ Description Popups Only
- [docify.js](./docify.js) ~ Description Popups and Docify
- [list-to-datalist.js](./list-to-datalist.js) ~ Convert `UL` to `DATALIST`
- [list-to-droplist.js](./list-to-droplist.js) ~ Convert `UL` to `SELECT`
- [otree.js](./otree.js) ~ Hierarchical Member Name Tree
- [suggestions.js](./suggestions.js) ~ List of Helpful Commands

----------------------------------------------------------------

<a id="ghost_anchor" class="ghost gadget"></a>

<textarea id="ghost_editor" class="ghost gadget"></textarea>

<footer>
  <input id="footer_input" onchange="perform(event)" />
</footer>

<header id="messages"></header>

----------------------------------------------------------------

<script>
function say( s ) {
    messages.textContent = ( s );
}
; blurt = message = announce = say;
</script>

<script>
function suggest( s ) {
    s = str( s );
    if ( s ) {
        footer_input.value = ( s );
    }
}
</script>

<script>
function install() {
    say( `Install Method isn't Supported` );
}
</script>

<script>
function acquire() {
    say( `Acquire Method isn't Supported` );
}
</script>

<script>
function request() {
    say( `Request Method isn't Supported` );
}
</script>

<script>
function perform( event ) {
    try {
        const sender = event.target;
        window.eval( sender.value.trim() );
    } catch ( e ) {
        crashed ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
; iwm = Object.keys( window ).sort()
</script>

<script>
; txt =( e )=> String( e.textContent || "" ).trim()
</script>

<script>
; doc = document
; doc . title = txt( _T_ )
</script>

<script>
; cls =()=> console.clear()
</script>

<script>
; epilog = {};
; epilog . title = ( _T_ ).textContent
; epilog . storekey = ( `docify.js` )
; epilog . providers = {
  "morpheus" : "https://nyteowldave.github.io"
, "omega"    : "http://dave-omega"
}
; epilog . splitters = {
  "morpheus" : "std/api/bluto/gems"
, "omega"    : "app/bluto/api/gems"
}
; epilog . primary = ( `omega` )
; epilog . workspace = (
  "file:///home/dave/Mount/WWW/app/bluto"
)
;
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/std/api/gems/prolog-beta.js"></script>
<script src="./docify.js"></script>
<script src="./otree.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function main( event ) {
    try {
        make_clickable();
        say( "Ready!" );
    } catch ( e ) {
        crashed ( e );
    }
}
</script>

<script>
addEventListener( "load", main );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function pass( provider ) {
    const ops = epilog;
    let pk = String( provider || "" ).trim();
    pk = ( pk || ops.primary );
    const p = ops.providers[ pk ];
    const s = ops.splitters[ pk ];
    const k = ops.storekey;
    const u = [ p, s, k ].join( "/" );
    if ( null === localStorage ) {
        visit( u );
    } else {
        wop( u );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
; wop =( u )=> ( window.open( u, u ) )
</script>

<script>
function visit( u ) {
    const a = ghost_anchor;
    a . setAttribute(
        ( "target"   )
      , ( a.href = u )
    );
    a . click();
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function crashed( e ) {
    console.error ( e );
    window .alert ( e );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function _do_1() {
    try {
        pass( "morpheus" );
    } catch ( e ) {
        crashed ( e );
    }
}
</script>

<script>
function _do_2() {
    try {
        pass( "omega" );
    } catch ( e ) {
        crashed ( e );
    }
}
</script>

<script>
function _do_3() {
    try {
        const u = epilog.workspace;
        if ( null === localStorage ) {
            visit( u );
        } else {
            wop( u );
        }
    } catch ( e ) {
        crashed ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
class Example {}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function make_clickable() {
    const c = "Suggestions";
    const hdr = locate( "H3", c );
    if ( hdr ) {
        const ul = next_sibling( "UL", hdr );
        if (! ul ) {
            throw new Error(
                `Can't Locate Sibling List : "${c}"`
            );
        }
        const items = arr(
            ( ul ).querySelectorAll( "LI" )
        );
        function clickable( ce ) {
            ce.onclick = ( e ) => {
                suggest( txt( ce ) );
            };
            ce.classList.add( "clickable" );
        }
        items.forEach( clickable );
    } else {
        throw new Error( `Can't Locate Header : "${c}"` );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function locate( type, content ) {
    const m = all( type );
    const v = ( m ).filter(
        ( ge ) => {
            const gt = txt( ge );
            return ( gt === content );
        }
    );
    return ( v[ 0 ] );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function next_sibling( type, gadget ) {
    let t, ce = ( gadget . nextElementSibling );
    let limit = 10000;
    while ( ce ) {
        t = ce.nodeName;
        if ( t === type ) {
            return ( ce );
        }
        if ( --limit < 1 ) {
            throw new Error( "Exceeded Max Depth" );
        }
        ce = ce . nextElementSibling;
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function canedit( ge, en=1 ) {
    const CE = "contenteditable";
    if ( en ) {
        ge.setAttribute( CE, "true" );
    } else {
        ge.removeAttribute( CE );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
