
/*
    list-to-droplist.js
    Bluto's Gems
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function list_to_droplist( list ) {
    const dl = elx( "SELECT" );
    const option =( s )=> {
        s = ( s ).trim();
        if (! s ) { return; }
        const ce = elx( "OPTION" );
        dl . appendChild( ce );
        ce . value = (
            ce . textContent = ( s )
        );
    };
    const item =( ce )=> ( ce.nodeName === "LI" );
    const text =( ce )=> ( ce.textContent );
    const m = arr( list.children ).filter( item );
    const v = m.map( text );
    v.forEach( option );
    list.insertAdjacentElement( "beforebegin", dl );
    list.remove();
    return ( dl );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "list-to-droplist.js" Gem Module` )
;

