
/*

----------------------------------------------------------------

> Manifest

| Item        | Value       |
|-------------|-------------|
| title       | Zed API     |
| version     | 1.0.0       |
| updated     | 2025-DEC-24 |
| volume      | Zed         |
| edition     | Legacy      |
| primary     | dave-legacy |
| relpath     | api         |
| filename    | zed.js      |

----------------------------------------------------------------

> Registration

| TiDate      | TiKey     |
|-------------|-----------|
| 2025-DEC-21 | e4a9e7f4-dad1-11f0-aaa8-1f32850bd4bd |

----------------------------------------------------------------

> Needs

| Filename           | Location      | Volume |
|--------------------|---------------|--------|
| zed.js             | api           | Zed    |
| prolog-pico.js     | ~/api/core    | Tilly  |
| status-messages.js | ~/api/gadgets | Tilly  |
| named-items.js     | ~/api/gadgets | Tilly  |
| siox-mini.js       | api           | SIO    |

----------------------------------------------------------------

> Methods

| Name               | Description                   | Notes |
|--------------------|-------------------------------|-------|
| composePageOptions | Compose Open Options          |   1   |
| openRemoteFile     | Open Remote Web File          |       |
| openTillyFile      | Open Tilly File               |       |
| openZedDemo        | Open Zed Demo App             |       |
| editActionDefs     | Edit Action Definitions       |       |
| getActionDefs      | Get List of Action Defs       |       |
| xed                | Create New Editor Gadget      |       |
| zed                | Write Editor Content          |   2   |
| createSCIOE        | Create Standard SCIOE Editors |       |

## Notes

1. Argument for window.open() method
2. Calls xed() to create missing Editor

----------------------------------------------------------------

*/

function composePageOptions( x, y, w, h ) {
    function fix( n, limit, orelse ) {
        n = parseInt( n );
        return ( 
            isFinite( n )
            ? Math.min( Math.max( n, 0 ), limit )
            : orelse
        );
    }
    let sw = screen.availWidth;
    let sh = screen.availHeight;
    x = fix( x, sw, 10 );
    y = fix( x, sh, 10 );
    w = fix( w, sw, sw - 20 );
    h = fix( h, sh, sh - 20 );
    return ( [ 
       ( `left=${x}`   )
    ,  ( `top=${y}`    )
    ,  ( `width=${w}`  )
    ,  ( `height=${h}` )
    ].join(",") );
}

function openRemoteFile( url, options ) {
    return window.open( url, url, options );
}

function openZedDemo( origin, options ) {
    let p = ( origin || "http://dave-legacy" );
    let s = "app/zed";
    let k = "zed-demo.html";
    let url = [p,s,k].join("/");
    return openRemoteFile( url, options );
}

function openTillyFile( host, relpath, options ) {
    let host = ( host || "dave-legacy" );
    let origin = [ "http:", host ].join("//");
    let relpath = ( relpath || "~/explore.list" );
    let url = [ origin, relpath ].join("/");
    return openRemoteFile( url, options );
}

function editActionDefs() {
    let actions = getActionDefs();
    let ed = xed( "sip" );
    ed.value = actions.join( "\n" );
    return ed;
}

function getActionDefs() {
    function prep( title ) {
        title = ( title || "dunsel" )
        return (
            ( title )
            . trim()
            . toLowerCase()
            . split( " " )
            . join( "_" )
        );
    }
    function action( title ) {
        return [
            "function on_"
          , prep( title )
          , "() {}"
        ].join( "" );
    }
    return (
        getButtonTitles()
        . map( action )
    );
}

function xed( o ) {
    let ed = resolve( o );
    if ( ed ) return ed;
    ed = elx( "TEXTAREA" );
    ed.classList.add( "zeddicus" );
    ed.spellcheck = false;
    ed.wrap = "off";
    if ( "string" === typeof o ) {
        ed.id = o;
    } else {
        ed.id = tigger();
    }
    resolve( "zarandar" ) . appendChild( ed );
    return ed;
}

function zed( ed, value ) {
    ed = ( resolve( ed ) || xed() );
    ed . value = value;
    return ed;
}

function createSCIOE() {
	sip = xed( "sip" );
	sop = xed( "sop" );
	ser = xed( "ser" );
	sce = xed( "sce" );
    resolve( "sce" )
    . setAttribute( "lingo", "javascript" );
    return { sip, sop, ser, sce };
}

function getCommentNodes() {
    return (
          all( "*" )
        . map( o => ( o.nodeName === "#COMMENT" ) )
    );
}

console.log( "Loaded zed.js module" );

