
[home]: 
<https://nyteowldave.github.io/>
"Morpheus Home Page"

[dev-icons]: 
<https://nyteowldave.github.io/dev-icons/>
"Design Icons Page"

----------------------------------------------------------------

> <em>Help Manual</em>

----------------------------------------------------------------

# Page Layout

The __page__ typically appears similar to the figure below.

<figure center>
  <img src="./art/webp/design-icons-page-layout.webp">
</figure>

----------------------------------------------------------------

## Navigation Menu

This menu is a collection of _anchor_ ( `A` ) elements.

It's located in the `HEADER` element pinned along the top of
the _page_.

<figure center>
  <img src="./art/webp/nav-menu.webp">
</figure>

----------------------------------------------------------------

## Preview Area

The largest area is reserved for __previewing icons__.

The area is sandwiched between 
the __Navigation Menu__ ( `HEADER` ) and the
__Options Section__ ( `FOOTER` ).

<figure center>
  <img src="./art/webp/preview-area.webp">
</figure>

----------------------------------------------------------------

## Options Section

This section is dedicated to managing __input values__.

It's located within the `FOOTER` element pinned at the bottom of
the _page_, above the __Action Menu__.

<figure center>
  <img src="./art/webp/input-options.webp">
</figure>

As shown above, there are _three_ __numeric input__ fields:

- __Index__
- __Count__
- __Limit__

----------------------------------------------------------------

__NOTE__: The _labels_ are shown here for __clarity__. They're 
<u>not</u> displayed on the actual _page_.

----------------------------------------------------------------

## Index Option

This input determines the __Index__ of the _first_ icon to be 
shown within the __Preview Area__.

The __Range__ is clamped so that it falls within
a _lower limit_ of `1` and
an _upper limit_ defined by
the __Limit__ input.

You can change this value _manually_. It's also updated for you
when you use the __Media Buttons__ for scrolling.

----------------------------------------------------------------

## Count Option

This input determines the __Number__ of icons to be displayed 
at any given location within the index __Range__.

We use a __Sliding Window__ of indices. This value represents
the __Size__ of that window.

----------------------------------------------------------------

## Limit Option

This input is meant primarily for _debugging_ and _development_.

However, it's also useful if the __number of icon__ files is
altered for some reason. Perhaps __new icons__ were uploaded
without reflecting this change in the Application's logic.

----------------------------------------------------------------

## Action Menu

This section is dedicated to managing __command actions__.

It's located within the `FOOTER` element pinned at the bottom of
the _page_, below the __Options Section__.

<figure center>
  <img src="./art/webp/action-menu.webp">
</figure>

### Update Button

The __Update__ button reads all _input values_ and performs
_validation_.

These new values are used to modify the icons shown in
the __Preview Area__.

<figure center>
  <img src="./art/webp/update-button.webp">
</figure>

### Reset Button

The __Reset__ button restores all _input values_ to their
original states.

The __Preview Area__ is updated accordingly.

<figure center>
  <img src="./art/webp/reset-button.webp">
</figure>

----------------------------------------------------------------

## Media Buttons

These should be familiar, as they're used for 
most __Media Control__ applications.

<figure center>
  <img src="./art/webp/media-buttons.webp">
</figure>

### Button Meanings

<!--
| Button  | Action Taken |
|---------|---------------------------|
|   ⏪    | Move to Previous Page     |
|   ◀️    | Move to Previous Column   |
|   ⏺️   | Rewind to Beginning       |
|   ▶️    | Move to Next Column       |
|   ⏩    | Move to Next Page         |
-->

<div center>
<style>
table { display : inline-block; }
tbody { text-align : left; }
td:first-child { text-align : center; }
</style>
<table>
<thead>
<tr><th>Button</th><th>Action Taken</th></tr>
</thead>
<tbody>
<tr><td>⏪</td><td>Move to Previous Page</td></tr>
<tr><td>◀️</td><td>Move to Previous Column</td></tr>
<tr><td>⏺️</td><td>Rewind to Beginning</td></tr>
<tr><td>▶️</td><td>Move to Next Column</td></tr>
<tr><td>⏩</td><td>Move to Next Page</td></tr>
</tbody>
</table>
</div>

----------------------------------------------------------------

# Icon Preview

----------------------------------------------------------------

[gemini]: <https://gemini.google.com/> "Gemini Chat Bot"

If you'd like to __preview__ an icon in a _popup_ window, you 
just __left click__ on that icon.

Note that modern browsers often _prevent popup windows_ by 
default. You may receive a _warning_ message (or just no popup).
In the former case, the browser will probably offer you the
opportunity to _enable popups_. Do so and try again, if you so
choose.

If there is <u>no warning message</u>, you may need to open 
your browser's __settings__ and search for _security_ and/or
_permission_ options. There should be a way to permit popups
via browser settings.

If all else fails, ask your favorite __AI Chat Bot__ how to
enable popups for your web browser. We'd 
suggest &nbsp; ![logo](./art/png/gemini-tiny.png) 
[Gemini][gemini] for this. Since `Google` makes both `Gemini` 
and the `Chrome` browser.

----------------------------------------------------------------

# Embedding Source Code

----------------------------------------------------------------

[popover]:
<https://www.youtube.com/watch?v=0_wgyB64a8I>
"Youtube Tutorial for Popover API"

If you're designing a web page and want to use these icons, it's
really easy. Just add some `HTML` to your project.

The [main page][dev-icons] can generate some _example code_ for
you. Just hold down the `SHIFT` key while __left-clicking__ any
icon.

You should see a [Popover Window][popover] with code you can
copy and paste into your page's `HTML` source code.

----------------------------------------------------------------

__NOTE__ : Most modern browser support __Popovers__. For those
older browsers, you'll see the popover at all times. Clicking
an icon will merely update the code it displays.

----------------------------------------------------------------

# Example

----------------------------------------------------------------

<pre contenteditable>

&lt;figure center>
  &lt;img src="http://dave-legacy/design-icon/art/dev-icon-1.svg">
&lt;/figure>

</pre>

----------------------------------------------------------------

> <em>Handy Links</em>

----------------------------------------------------------------

[examples]: 
<https://nyteowldave.github.io/dev-icons/examples/>
"Source Code Examples"

[usage]: 
<https://nyteowldave.github.io/dev-icons/examples/usage.html>
"Design Icons Usage Example"

[members]: 
<https://nyteowldave.github.io/dev-icons/help/members.html>
"Legends API Member Roll Call"

1. [Examples][examples]
2. [Icon Usage][usage]
3. [Legends Roll Call][members]
4. [Design Icons][dev-icons]
5. [Home][home]

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

