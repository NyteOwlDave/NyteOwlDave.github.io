<meta charset="utf-8">

<script id="address" name="ignite.js" group="Dorothy Rocket">
POPUP_OPTIONS = "";
LAUNCH = false;
T = "Jeddicus Redirect Rocket";
P = "https://sites.google.com";
S = "view";
K = "zeddicus";
U = [P,S,K].join("/");
</script>

<script name="prolog.js" group="Dorothy Rocket">
doc = document;
doc . title = ( T );
</script>

<script name="launch.js" group="Dorothy Rocket">
( LAUNCH ) && ( location=( U ) );
</script>

<script name="edit.js" group="Dorothy Rocket">
ZED_DEMO = ( `
@import url("http://dave-legacy/~/style/zed/zed-demo.css");
` );
</script>

<script name="prolog.js" group="Dorothy Rocket">
doc = document;
ebi =( id )=> doc.getElementById( id );
elx =( t  )=> doc.createElement( t );
</script>

<script name="agent.js" group="Dorothy Rocket">
agent   = navigator.userAgent.toLowerCase();
retext  = agent.includes( "retext"  );
chrome  = agent.includes( "chrome"  );
firefox = agent.includes( "firefox" );
function showAgent() {
    let s = (
          chrome   ? "Ⓒhrome"
        : firefox  ? "Ⓕirefox"
        : retext   ? "ⓇeText"
        : "Unknown"
    );
    ebi( "agent" ).textContent = ( s );
}
</script>

<script name="run-app.js" group="Dorothy Rocket">
function runApp( event ) {
    let se = elx( "style" );
    doc.head.appendChild( se );
    se.innerHTML = ZED_DEMO;
    ebi( "title" ) . textContent = doc.title;
    showAgent()
    _reload_();
}
</script>

<script name="start-app.js" group="Dorothy Rocket">
function startApp( event ) {
    try{
        runApp();
    } catch ( e ) {
        alert( e )
    }
}
</script>

<script name="launch.js" group="Dorothy Rocket">
function accept() {
    try {
        window.eval(
            ebi( "sip" ).value 
        );
    } catch ( e ) {
        alert( e )
    }
}
</script>

<script name="launch.js" group="Dorothy Rocket">
function launch( event ) {
    try {
        if ( retext ) {
            let ae = elx( "A" );
            ae.href = ( U );
            ae.click();
        } else {
            options = POPUP_OPTIONS;
            window.open( U, U, options );
        }
    } catch ( e ) {
        alert( e )
    }
}
</script>

<script name="_reload_.js" group="Dorothy Rocket">
function _reload_( event ) {
    try {
        sip = ebi( "sip"     );  // Input Editor
        sce = ebi( "address" );  // Script Element
        sip.value = sce.innerHTML;
    } catch ( e ) {
        alert( e );
    }
}
</script>

<script name="_home_.js" group="Dorothy Rocket">
function _home_() {
    try {
        RS = "\n";
        let p = location.origin;
        let s = location.pathname;
        let opts = POPUP_OPTIONS;
        sip = ebi( "sip" );
        sip.value = ( [
          `POPUP_OPTIONS = "${opts}";`
        , `T = "Rocket Home";`
        , `P = "${p}";`
        , `S = "${s}";`
        , `U = [P,S].join("/");`
        ].join( RS ) );
    } catch ( e ) {
        alert( e );
    }
}
</script>

<script name="page-load.js" group="Dorothy Rocket">
addEventListener( "load", startApp );
</script>

<style name="message.css" group="Dorothy Rocket">
.message {
  display : block;
  background : #2287;
  padding : 4px;
  border-radius : 2ch;
  text-align : center;
}
.message * {
  color : mintcream;
  text-shadow : 1px 1px 3px black;
}
</style>

<fieldset>
  <legend id="title"></legend>
  <textarea id="sip" class="siox"></textarea>
  <div class="menu">
    <button onclick="accept()">Accept</button>
    <button onclick="launch()">Launch</button>
    <button onclick="_home_()">Home</button>
    <button onclick="_reload_()">Reload</button>
  </div>
  <div class="message">
     <span>Agent&nbsp;</span>
     <span id="agent">(pending)</span>
  </div>
</fieldset>

