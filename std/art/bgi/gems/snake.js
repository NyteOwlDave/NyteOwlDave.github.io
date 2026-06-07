
/*

    snake.js

    Open Hysteresis Manuscript

    Prompt User for Store Key

*/

function snake( suggest ) {
    const key = prompt( "Store Key to Edit?", suggest );
    if (! key ) return;
    let q = key.trim();
    if (! q ) return;
    q = ( `?key=` ) + encodeURIComponent( q );
    const url = snk.home + q;
    return ( window.open( url, url ) );
}

snake.home = ( `http://dave-legacy/app/hysteresis/pen.html` );


