
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function goto( o ) {
    const earl =( oo )=> ( goto . earl( oo ) );
    const gurl =( uu )=> ( goto . gurl( uu ) );
    if ( o instanceof Object ) {
        if ( earl( o.value   ) ) { return gurl( o.value   ); }
        if ( earl( o.home    ) ) { return gurl( o.home    ); }
        if ( earl( o.address ) ) { return gurl( o.address ); }
        if ( earl( o.manual  ) ) { return gurl( o.manual  ); }
        if ( earl( o.url     ) ) { return gurl( o.url     ); }
        if ( earl( o.src     ) ) { return gurl( o.src     ); }
        if ( earl( o.href    ) ) { return gurl( o.href    ); }
    }
    throw new Error( "Invalid Argument ( no URL )" );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; ( goto ) . debug = ( false )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( goto )
. earl = function( o ) {
    return ( "string" === typeof o );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( goto )
. gurl = function( url ) {
    if ( url . startsWith( "file:" ) ) {
        alert( "File Protocol isn't Supported" );
        return;
    }
    if ( goto . debug ) { alert( url ); return; }
    if ( "function" === typeof window.visit ) {
        return ( visit( url ) );
    }
    if ( null === localStorage ) {
        const a = document . createElement( "A" );
        a . href = ( url );
        a . click();
    } else {
        return window.open( url, url );
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function write_address_bar( url ) {
    const ge = gid( "address_bar" );
    url = String( url || "" ).trim();
    ge . value = (
        url || window . location . href
    );
    return ( ge . value );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function read_address_bar() {
    return write_address_bar( "" );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

addEventListener(
  "load", (e) => { write_address_bar( "" ) }
);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console . info( `Loaded Gadget : cool-address-bar-v1p3.js` );
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
