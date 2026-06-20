
;
; str =( s )=> ( String( s || "" ).trim() )
;

function message( s ) {
    console.log( s );
    s = str( s );
    if ( s ) {
        messages.textContent = ( s );
    }
    return ( s );
}

function crashed( e ) {
    let s;
    if ( e instanceof Error ) {
        s = e.message;
    } else {
        s = str( e ); e = new Error( s );
    }
    console.error( e );
    messages.textContent = ( s );
    return ( e );
}

function claim( event ) {
    event.preventDefault();
    event.stopPropagation();
}


