
/*
    ricardo-v1p0.js
*/

function ricardo( accept ) {
    function read_file( file ) {
        const reader = new FileReader();
        reader.onload =( ev )=> {
            accept( ev.target.result );
        };
        reader.readAsText( file );
    }
    function open_first_file( event ) {
        if ( ge.files.length < 1 ) {
            ricardo.message( "🚫 Canceled" );
            return;
        }
        read_file( ge.files[ 0 ] );
    }
    const ge = ricardo.input();
    ge.onchange = open_first_file;
    ge.click();
}

ricardo.edit = function( ed ) {
    const resolve = ricardo.resolve;
    function accept( s ) {
        console.info( s );
        resolve( ed ).value = ( s );
    }
    return ricardo( accept );
};

ricardo.view = function( vw ) {
    const resolve = ricardo.resolve;
    function accept( s ) {
        console.info( s );
        resolve( vw ).innerText = ( s );
    }
    return ricardo( accept );
};

ricardo.section = function( se ) {
    const resolve = ricardo.resolve;
    function accept( s ) {
        console.info( s );
        resolve( se ).innerHTML = ( s );
    }
    return ricardo( accept );
};

ricardo.mdn = {
  "Home" : "https://developer.mozilla.org/"
, "File" : "https://developer.mozilla.org/en-US/docs/Web/API/File"
, "FileReader" : "https://developer.mozilla.org/en-US/docs/Web/API/FileReader"
};

ricardo.theme = ( `
.choose-file {
    opacity  : 0;
    position : fixed;
    display  : inline-block;
    left     : -2000px;
    height   : 1px;
    width    : 1px;
}
` );

ricardo.message = function( s ) {
    if ( "function" === typeof message ) {
        message( s );
    } else {
        alert( s );
    }
};

ricardo.resolve = function( o ) {
    const doc = document;
    if (! o ) { return null; }
    if ( o instanceof HTMLElement ) {
        return ( o );
    }
    return (
        doc.getElementById( o )
    );
};

ricardo.input = function() {
    const resolve = ricardo.resolve;
    const doc = document;
    const elx =( t )=> ( doc.createElement( t ) );
    const id = "choose-file";
    let ge = resolve( id );
    if (! ge ) {
        ge = doc.body.appendChild( elx( "INPUT" ) );
        ge . id = ( id );
        ge . classList . add( id );
        ge . type = "file";
    }
    return ( ge );
};

ricardo.init = function() {
    const d = document;
    const h = d.head;
    const s = d.createElement( "STYLE" );
    s . innerText = ricardo.theme;
    h . appendChild( s );
};

addEventListener(
  "load"
, function( e ) { ricardo.init(); }
);

;
; console.info( `Ⓜ️ Loaded "ricardo-v1p0.js" API Module` )
;
