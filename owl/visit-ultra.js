
/*

    visit-ultra.js
    Owl System for Morpheus

*/

function visit( url ) {
    switch ( visit.mode ) {
    case "hint"    :
        return visit.hint( url );
    case "edit"    :
        return visit.edit( url );
    case "confirm" :
        return visit.confirm( url );
    case "blurt" :
        return visit.blurt( url );
    case "suggest" :
        return visit.suggest( url );
    default :
        return visit.open( url );
    }
}

;
; visit.mode = "open";
;

visit.open = function( url ) {
    if ( null === localStorage ) {
        const a = elx( "A" );
        a . href = ( url );
        a . click ();
    } else {
        window.open( url, url );
    }
};

visit.hint = function( url ) {
    window.alert( url );
};

visit.edit = function( url ) {
    return str( window.prompt( "Address", url ) );
};

visit.confirm = function( url, action ) {
    action = ( str( action ) || "Confirm Address" );
    const msg = [ action, url ].join( "\n\n" );
    if ( window.confirm( msg ) ) {
        visit.open( url );
    }
};

visit.blurt = function( url ) {
    const orelse =()=> visit.hint( url );
    if ( "function" === typeof blurt ) {
        return blurt( url );
    }
    if ( "function" === typeof say ) {
        return say( url );
    }
    if ( "function" === typeof message ) {
        return message( url );
    }
    if ( "undefined" === typeof messages ) {
        return orelse( url );
    }
    if ( messages instanceof HTMLElement ) {
        messages.textContent = ( url );
        return;
    }
    return orelse( url );
};

visit.suggest = function( url ) {
    const orelse =()=> visit.hint( url );
    if ( "function" === typeof suggest ) {
        return suggest( url );
    }
    return orelse( url );
};

visit.append = function( value, title, type, owner ) {
    const ce = elx( type );
    ce . value  = ( value );
    ce . title  = ce . textContent = ( title );
    return owner.appendChild( ce );
};

;
; console.log( `Loaded "visit-ultra.js" API Module` )
;