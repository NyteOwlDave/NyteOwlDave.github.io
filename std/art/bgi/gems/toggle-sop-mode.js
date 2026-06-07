
/*

    toggle-sop-mode.js

*/

// sop = PRE Gadget
// teb = Toggle Button Gadget

_CE = "contenteditable";

function sed() {
    const gad =( o )=> ( o instanceof HTMLElement );
    sop.setAttribute( _CE, "" );
    sop.focus();
    if ( "undefined" !== typeof teb ) {
        if ( gad( teb ) ) {
            teb.textContent = "📑";
        }
    }
};

function svw() {
    const gad =( o )=> ( o instanceof HTMLElement );
    sop.removeAttribute( _CE );
    if ( "undefined" !== typeof teb ) {
        if ( gad( teb ) ) {
            teb.textContent = "📝";
        }
    }
};

function tog() {
    if ( sop.hasAttribute( _CE ) ) {
        svw();
    } else {
        sed();
    }
};

