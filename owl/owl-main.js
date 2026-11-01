
/*
    Owl Main Component
    owl-main.js
*/

function init_main( ops ) {

const wnd = ( window );

const _st =( o )=> ( str( o ) || "?" );
const _fn =( k )=> ( "function" === typeof wnd[ k ] );

ops . silent = ( false );

wnd . report =
ops . report = function( s ) {
    s = _st( s );
    if ( _fn( "say" ) ) {
        return say( s );
    }
    if ( _fn( "blurt" ) ) {
        return blurt( s );
    }
    if ( _fn( "message" ) ) {
        return message( s );
    }
    if ( "object" === typeof messages ) {
        if ( messages instanceof HTMLElement ) {
            messages . textContent = ( s );
            return;
        }
    }
    if ( _fn( "balloon" ) ) {
        return ballon( s );
    }
    console . log( s );
    if ( ops . silent ) {
        return;
    }
    window . alert( s );
};

wnd . bummer =
ops . bummer = function( e ) {
    console . error ( e );
    if ( ops . silent ) {
        return ops . report( e . message );
    } else {
        window  . alert ( e );
    }
};

wnd . incomplete =
ops . incomplete = function( s ) {
    s = _st( s );
    ops . report( "INCOMPLETE : " + s );
};

wnd . reminder =
ops . reminder = function( s ) {
    s = _st( s );
    console . info( "REMINDER : " + s );
};

wnd . loaded =
ops . loaded = function( s ) {
    s = _st( s );
    console . log( "Loaded Component : " + s );
};

wnd . manual =
ops . manual = (
    return ( "https://docs.google.com" );
);

}

;
; init_main( main )
; addEventListener( "load", main )
;

