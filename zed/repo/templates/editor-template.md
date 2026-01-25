
<style>
@import url("http://dave-legacy/app/zed/style/zed-demo.css");
</style>

<style>
input[type="file"] {
   background : transparent;
   color   : black;
   padding : 4px;
   cursor  : pointer;
}
</style>

----------------------------------------------------------------

<fieldset>
 <legend>
  <input type="file">
 </legend>
 <textarea id="sip" class="siox">
 </textarea>
</fieldset>

----------------------------------------------------------------

<header id="header" name="header.html" group="Tilly Gadgets">
  <a href="./home.html" id="title">Home</a>
  <a href="./menu/">Menu</a>
  <a href="./settings/">Settings</a>
  <a href="./help/">Help</a>
  <a href="./">Explore</a>
</header>

<footer id="footer" name="footer.html" group="Tilly Gadgets">
  <div id="status">Initializing ...</div>
</footer>

----------------------------------------------------------------

<script src="http://dave-legacy/~/api/auto/title.js">
</script>

<script src="http://dave-legacy/~/api/core/prolog-pico.js">
</script>

<script name="status-decals.js" group="Tilly Core">
StatusDecals = {
  blurt  : "🟢"
, bummer : "🔴"
};
</script>

<script name="resolve.js" group="Tilly Core">
function resolve( o ) {
    doc = document;
    ebi =( id )=> ( doc.getElementById( id ) );
	return (
		( o instanceof HTMLElement )
  	  ?	( o )
   	  :	( ebi( o ) )
	);
}
</script>

<script name="blurt.js" group="Tilly Core">
function blurt( s ) {
    if ( s instanceof Error ) {
        return bummer( s );
    }
    console.log( s );
    resolve( 'status' )
    . innerHTML = (
        [ StatusDecals.blurt
        , String( s )
        ] . join( " " )
    );
}

</script>

<script name="bummer.js" group="Tilly Core">
function bummer( e ) {
    console.error( e );
    let t = (
        ( e instanceof Error )
      ? ( e.message )
      : ( e )
    );
    resolve( 'status' )
    . innerHTML = (
        [ StatusDecals.bummer
        , String( t )
        ] . join( " " )
    );
}
</script>

<script name="app.js" group="Application Logic">
function runApp() {
	// Your code here ...
}
addEventListener( "load", function( event ) { 
   try {      
      if ( "function" === typeof runApp ) {
         runApp();
      }
      blurt( "Ready for Action!" );
   } catch ( error ) {
      bummer( error );
   }
} );
</script>



