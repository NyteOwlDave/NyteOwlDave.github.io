
/*

    acquire.js

    Acquire a SCRIPT module

*/

function acquire( url ) {
    const _S_ = ( `SCRIPT` );
    const d = document;
    const h = d.head;
    const s = d.createElemenent( _S_ );
    h . appendChild( s );
    console.info( `Acquiring : ${url}` );
    s . src = ( url );
    return ( s );
}

