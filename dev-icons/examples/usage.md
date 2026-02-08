
<style>
img, svg {
    background-color : gold;
    padding : 20px;
    border-radius : 20px;
    box-shadow : 0 0 16px #002;
}
img[src]:hover {
    display : inline-block;
    cursor  : pointer;
    animation  : linear 0.25s blossom forwards;
}
</style>

<style>
#store_keys_1 ,
#store_keys_2 {
    display : inline-block;
}

#store_keys_1 {
    max-width   : 100px;
    max-height  : 100px;
}

#store_keys_2 {
    max-width   : 140px;
    max-height  : 140px;
}
</style>


----------------------------------------------------------------

> <em>Example Usage</em>

----------------------------------------------------------------

# Using Design Icons

The easiest way to embed one of these Icons is to copy the
raw `SVG` code from the file and paste that code into the `HTML`
document.

Though this technique avoids additional `HTTP` __fetch__
operations, it also causes the `HTML` document to become
_ugly_ and _bloated_.

There's a much simpler approach, fortunately. This happens to
be the preferred technique.

The source code for this example `HTML` document contains 
__both approaches__.

If you prefer, you can example the source code directly using
the __browser__ or some download tool like `curl` or `wget`.

However, for __simplicity__, I've included the preferred
approach as part of this document's visible content.

----------------------------------------------------------------

# Technique #1 

----------------------------------------------------------------

## Using an SVG Element

This technique is included here for reference only. You'll do
better to use the second option.

<figure>
<svg id="store_keys_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.17 51.4"><defs><style>.cls-1{fill:#231f20;}</style></defs><g id="Layer_1-2"><g><path class="cls-1" d="m35.28,16.91H7.89c-4.35,0-7.89,3.54-7.89,7.89v18.71c0,4.35,3.54,7.89,7.89,7.89h29.32v-3.24H7.89c-2.56,0-4.65-2.09-4.65-4.65v-18.71c0-2.56,2.09-4.65,4.65-4.65h27.38c2.56,0,4.65,2.09,4.65,4.65v19.91h3.24v-19.91c0-4.35-3.54-7.89-7.89-7.89Z"/><path class="cls-1" d="m13.15,11.64c0-4.63,3.79-8.4,8.44-8.4s8.4,3.77,8.4,8.4v2.42h3.24v-2.42c0-6.42-5.22-11.64-11.64-11.64s-11.69,5.22-11.69,11.64v2.42h3.24v-2.42Z"/><circle class="cls-1" cx="21.78" cy="33.58" r="5.93"/></g></g></svg>
</figure>

----------------------------------------------------------------

## HTML Source Code

<pre>

Refer to the source code for this HTML document.

</pre>

----------------------------------------------------------------

# Technique #2 

----------------------------------------------------------------

## Using an IMG Element

This is the preferred technique.

<figure>
 <img id="store_keys_1" src="https://nyteowldave.github.io/dev-icons/art/dev-icon-255.svg">
</figure>

----------------------------------------------------------------

## HTML Source Code

<pre contenteditable>

&lt;figure>
 &lt;img src="https://nyteowldave.github.io/dev-icons/art/dev-icon-255.svg">
&lt;/figure>

</pre>

----------------------------------------------------------------

> <em>Handy Links</em>

----------------------------------------------------------------

[view]: 
<https://nyteowldave.github.io/dev-icons/art/dev-icon-255.svg>

[dev-icons]:
<https://nyteowldave.github.io/dev-icons/>

[help]:
<https://nyteowldave.github.io/dev-icons/help/>

[members]:
<https://nyteowldave.github.io/dev-icons/help/members.html>

1. [Help][dev-icons]
2. [Legends Roll Call][members]
3. [View SVG File][view]
4. [Design Icons][dev-icons]

----------------------------------------------------------------

<header>Design Icons</header>

<footer>
  <div id="messages">[ PENDING  ]</div>
</footer>

----------------------------------------------------------------

<script name="app-state.js">
let AppState = {};
AppState.index   = new Map();
AppState.today   = "2026-FEB-08";
AppState.DEBUG   = true;
AppState.VERBOSE = false;
AppState.importThese = [];
</script>

<script src="https://nyteowldave.github.io/chachi/api/legends.js">
</script>

<script src="https://nyteowldave.github.io/chachi/api/tigg.js">
</script>

<script src="https://nyteowldave.github.io/chachi/api/thor.js">
</script>

<script src="https://nyteowldave.github.io/chachi/api/joni.js">
</script>

<script src="https://nyteowldave.github.io/chachi/api/editables.js">
</script>

<script src="https://nyteowldave.github.io/chachi/api/energize.js">
</script>

<script src="https://nyteowldave.github.io/chachi/api/bonfire.js">
</script>

<script src="https://nyteowldave.github.io/chachi/api/math.js">
</script>

<script name="message.js">
function message( s ) {
    messages.textContent = ( s );
}
</script>

<script name="bummer.js">
function bummer( e ) {
    let dad = messages.parentElement;
    dad.classList.add( "error" );
    setTimeout(
        function(e) {
            dad.classList.remove( "error" );
        } , 4200
    );
    if ( e instanceof Error ) {
        message( e.message );
    } else {
        message( e );
    }
    throw ( e );
}
</script>

<script name="is-agent.js">
function isAgent( s ) {
    return( agent.includes( s.toLowerCase() ) );
}
</script>

<script name="preview-image.js">
function previewImage( img ) {
    preview(
          ( img.src )
        , ( previewImage.options )
    );
    previewImage.window = preview.window;
}
previewImage.options = (
    "top=10,left=10,width=340,height=340"
);
</script>

<script name="preview.js">
function preview( url, options ) {
    if ( isAgent( "retext" ) ) {
        throw new Error( "Preview unavailable for ReText" );
    }
    options = ( options || preview.options );
    url = ( url || location.origin );
    preview.window = (
        window.open( url, url, options )
    );
}
preview.options = (
    "top=10,left=10,width=800,height=640" 
);
</script>

<script name="on-click-image.js">
function on_click_image( event ) {
    try {
        previewImage( event.target );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<script name="init-images.js">
function initImages() {
    let arr =( o )=> Array.from( o );
    let all =( q )=> arr( document.querySelectorAll( q ) );
    all( "IMG[src]" )
    . forEach(
        img => {
            img.style.cursor = "pointer";
            img.addEventListener(
                 ( "click"        )
               , ( on_click_image )
            );
        }
    );
}
</script>

<script name="main.js">
function main( event ) {
    try {
        initImages();
        message( "Ready for action!" );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<script name="load-event.js">
addEventListener(
    "load" ,
    function(e) {
        han( main, e )
    }
);
</script>

