
/*

    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
    |                [[ Owl 🦉 Clipper ]]                 |
    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
    |  https://nyteowldave.github.io/owl/owl-clipper.js   |
    +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Clipper() {
    tips( Clipper );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( Clipper )
. prepare = function( source ) {
    const prep = ( Clipper.prepare );
    const o = ( source );
    let s;
    if ( o instanceof Object ) {
        return ( prep . object( o ) );
    } else if ( "string" === typeof o ) {
        s = ( o );
    } else {
        s = String( o ).trim();
    }
    return ( s );
}
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( Clipper )
. prepare
. gadget = function( source ) {
    if ( o instanceof HTMLElement ) {
        switch ( o.nodeName ) {
        case "INPUT"    :
        case "TEXTAREA" : return _val( o );
        case "PRE"  :
        case "CODE" :
        case "VAR"  : return _txt( o );
        default     : return _htm( o );
        }
    } else {
        expected( "HTML Element" );
    }
    function _val( o ) {
        return String( ( o ).value );
    }
    function _txt( o ) {
        return String( ( o ).textContent );
    }
    function _htm( o ) {
        const de = elx( "DIV" );
        de . title = "HTML Content";
        de . type  = "text/html";
        const charset = [
          ( `<meta charset="utf-8"` )
        , ( `>` )
        ] . join( " /" );
        de . innerHTML = [
          ( charset )
        , ( o . innerHTML )
        ] . join( "\n" );
        return ( de.outerHTML );
    }
}
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( Clipper )
. prepare
. object = function( o ) {
    const prep = ( Clipper.prepare );
    if ( o instanceof Object ) {
        if ( o instanceof HTMLElement ) {
            return ( prep.gadget( o ) );
        }
        return jst( o );
    } else {
        expected( "Object" );
    }
}
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( Clipper )
. present = function( source ) {
    const ops  = ( Clipper );
    const prep = ( ops . prepare );
    const s = prep( source );
    alert( s );
}
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( Clipper )
. editor = function() {
	const d = document;
	const id = "clipper-editor";
	let ed = d . getElementById( id );
	if ( ed ) { return ( ed ) };
	ed = d . createElement( "TEXTAREA" );
	ed . id = ( ed );
    const st = ed . style;
	st . position = "fixed";
	st . opacity  = "0";
	st . left     = "-2000px";
	st . width    = "2px";
	st . height   = "2px";
	return ( d . body . appendChild( ed ) );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( Clipper )
. copy = function( source ) {
    const ops  = ( Clipper );
    const prep = ( ops . prepare );
	const ed = ops . editor();
	ed . value = prep( source );
	ed . focus();
	ed . select();
	document . execCommand( "copy" );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; loaded( "owl-clipper.js" )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

