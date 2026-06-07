
/*
    request.js

    Request Remote Content

    Load Result Into Gadget

    Different Gadgets for Text or HTML Results

*/

function request( url, text_receiver, html_receiver ) {
    const doc  = document;
    const one  =( q )=> ( doc.querySelector ( q ) );
    const gid  =( o )=> ( doc.getElementById( o ) );
    const sop  = (
           text_receiver
        || gid( "sop" )
        || gid( "sip" )
        || gid( "sce" )
        || one( "TEXTAREA" )
        || one( "PRE"      )
    );
    const page = (
           html_receiver
        || gid( "page"    )
        || one( "ARTICLE" )
        || sop
    );
    function accept( s ) {
        if ( s.trimStart().startsWith( "<" ) ) {
            page.innerHTML = ( s );
        } else {
            sop.innerText = ( s );
        }
        return ( s );
    }
    const rp = fetch( url );
    return (
        ( rp )
        . then  ( r => r.text() )
        . then  ( accept        )
        . catch ( accept        )
    );
}

