<style>
@import url("https://nyteowldave.github.io/owl/owl.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
li strong {
    font-size : x-large;
}
</style>

<style>
iframe { resize : both; }
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style name="gold-glow.css" project="Owl System">
:root {
    --glow : 0px 0px 1em gold;
}
</style>

<style name="wide.css" project="Owl System">
.wide ,
[wide] {
    width   : calc( 100vw - 160px );
    outline : none;
    border  : none;
    padding : 7px 1em;
    font    : 11pt monospace;
    border-radius : 3ch;
}
.wide:focus ,
[wide]:focus {
    box-shadow : var( --glow );
    transform  : scale( 1.07 );
}
</style>

<style name="dot-button.css" project="Owl System">
.dot-button {
    outline : none;
    border  : none;
    padding : 7px;
    margin  : 4px;
    z-index : 100;
    font    : 10pt monospace;
    display : inline-block;
    cursor  : pointer;
    color   : midnightblue;
    background    : mintcream;
    text-align    : center;
    border-radius : 3ch;
    user-select   : none;
}
.dot-button:hover {
    box-shadow : var( --glow );
    transform  : scale( 1.2  );
    color : mintcream;
    background : midnightblue;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<h3 id=""> Owl Themes </h3>

----------------------------------------------------------------

# Cool Address Bar Theme

----------------------------------------------------------------

This is just the CSS ~~ Gadgets are provided elsewhere.

----------------------------------------------------------------

# Gadget Client Apps

- Pending Themes ~ Owl System Notes
- App Boilerplate ~ Owl Examples
- Downloader Idea
- ( To Be Determined )

----------------------------------------------------------------

# Example

<div center>
  <iframe id="frame01" src="http://dave-omega/rtj/rt-downloader-idea.html"></iframe>
</div>

----------------------------------------------------------------

> [Downloader Idea](http://dave-omega/rtj/rt-downloader-idea.html)

----------------------------------------------------------------

<script>
; doc = ( document )
; doc . title = ( _T_.textContent ).trim()
</script>

<script>
; gid =( i )=> doc . getElementById( i )
</script>

<script>
function rz() {
    try {
        const fe = gid( "frame01" );
        const st = fe . style;
        st . width  = "800px";
        st . height = "640px";
    } catch ( e ) {
        alert( e );
    }
}
addEventListener( "load", rz );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<!-- |~~~~~~~~ [[ TODO : Owl System and Prologs ]] ~~~~~~~~| -->
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


