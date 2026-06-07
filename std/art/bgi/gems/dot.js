
/*

    dot.js

    Launch a Dot Rocket or Visit a URL Address

*/

function dot( s ) {
    s = ( str( s ) );
    if ( s ) {
        let u;
        if ( s.includes( "." ) ) {
           u = ( `http://localhost/dot/${s}` );
        } else {
           u = ( `http://localhost/dot/${s}.html` );
        }
       return ( dot.visit( u ) );
    } else {
        console.warn( `Ignored Empty Dot Rocket Name` );
    }
}

dot.visit = function( url ) {
    url = ( str( url ) );
    if ( url ) {
        if ( dot.agent( "retext" ) ) {
            dot.click( url );
            return;
        } else {
           return ( window.open( url, url, dot.options ) );
        }
    } else {
        console.warn( `Ignored URL Address` );
    }
}

;
; dot.options = ( `left=10,top=10,width=800,height=680` )
;

dot.click = function( url ) {
    url = str( url );
    const d = document;
    const a = d.createElement( "A" );
    a.target = ( a.href = url );
    a.click();
}

dot.agent = function( s ) {
    s = str( s ).toLowerCase();
    const n = navigator;
    const u = n.userAgent.toLowerCase();
    return ( u.includes( s ) );
}

