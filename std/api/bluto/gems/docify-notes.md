<head> <link rel="icon" href="./favicon.ico" /> </head>

<style>
@import url("https://nyteowldave.neocities.org/style.css");
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

<footer>
  <input id="footer_input" onchange="perform(event)" />
</footer>

<header id="messages"></header>

<script>
function say( s ) {
    messages.textContent = ( s );
}
; blurt = message = announce = say;
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

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
</script>

<script>
; doc = document
; doc . title = ( _T_ ).textContent
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

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
addEventListener(
 "load", (e)=>( say("Ready!") )
);
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
//  alert( u ); 
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
    const a = doc . createElement( "A" );
    a . setAttribute(
        ( "target"   )
      , ( a.href = u )
    );
    a . click();
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
