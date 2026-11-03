
/*
    Owl System
    Enhance HUD Editor
    enhance-hud.js
    Version 1.0
*/

function enhance_hud( ops ) {

let recent$ = "";

ops = ( ops || window.hud );

if (! ops ) {
    say( "TRY : install('hud')" );
    return;
}

if ( ops.transporter ) {
    console.log( "HUD Already Enhanced" );
    return;
}

function _recent() {
    return str( recent$ );
}

function _origin() {
    return str( location . origin );
}

function _prompt( item, orelse ) {
    return str( window.prompt( item, orelse ) );
};

function _request( url ) {
    function accept( s ) {
        say( "File Request Succeeded" );
        const ed = hud . editor();
        ed . value = ( s );
    }
    function reject( s ) {
        const msg = "File Request Failed";
        console . warn( msg, s );
        say( s );
    }
    url = str( url );
    if (! url ) {
        say( "No URL Address" );
        return;
    }
    const xport = ( window . fetch );
    if ( "function" !== typeof xport ) {
        say( "File Requests Not Supported" );
        return;
    }
    recent$ = ( url );
    const req = xport( url );
    ; ( req )
    . then  ( r => r.text() )
    . then  ( accept )
    . catch ( reject )
    ;
    return ( req );
};

function _download( url ) {
    const msg = "URL Address to Download";
    url = (
         ( str( url ) )
      || ( _recent( ) )
      || ( _origin( ) )
    );
    url = _prompt( msg, url );
    if (! url ) {
        say( "Canceled" );
        return;
    }
    return _request( url );
};

; ( ops )
. transporter = {
  title    : "HUD Transporter"
, ask      : _prompt
, request  : _request
, download : _download
, origin   : _origin
, recent   : _recent
}
;

if ( "function" === typeof add_hud_button ) {
    add_hud_button();
}

;
; say( `Added : "hud . transporter"` )
;
; console . info( "Invoked : enhance_hud()" )
;
}

setTimeout(
  ( e ) => {
     if ( "undefined" !== typeof window.hud ) {
        enhance_hud();
     } else {
        console . warn ( "Unable to detect HUD Editor" );
     }
  }
, 777
);

;
; console . info( "Loaded : enhance-hud.js" )
; console . info( "REMINDER : Call enhance_hud()" )
;

