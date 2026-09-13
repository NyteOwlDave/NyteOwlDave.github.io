
/*
    list-to-datalist.js
    Bluto's Gems
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function list_to_datalist( list, input ) {
    let dl, id = input.getAttribute( "list" );
    if ( id ) { dl = gid( id ); }
    if (! dl ) {
        dl = elx( "DATALIST" );
        dl . id = dlid();
        input.setAttribute( "list", dl.id );
        doc . body . appendChild( dl );
    } else {
        dl.innerHTML = "";
    }
    const option =( s )=> {
        s = ( s ).trim();
        if (! s ) { return; }
        const ce = elx( "OPTION" );
        dl . appendChild( ce );
        ce . value = ( s );
    };
    const item =( ce )=> ( ce.nodeName === "LI" );
    const text =( ce )=> ( ce.textContent );
    const m = arr( list.children ).filter( item );
    const v = m.map( text );
    v.forEach( option );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "" Gem Module` )
;

