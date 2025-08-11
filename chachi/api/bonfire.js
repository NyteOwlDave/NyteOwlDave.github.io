
// Bonfire
// https://static.wixstatic.com/media/9c882e_6cc3b6fc1cc34f888484966dc8ce534b~mv2.png

function urlCoreDoc( doc ) {
    return doc.split( "\n" )
        .map( s => s.trim() )
        .filter( s => (!! s ) )
        .join( "/" );
}

const bonfireURL = urlCoreDoc( `
https://static.wixstatic.com
media
9c882e_6cc3b6fc1cc34f888484966dc8ce534b~mv2.png
` );

function previewBonfire( parent ) {
    if (! parent ) {
        parent = ella( 'figure' );
        let o = selma( 'main' ) || document.body;
        o.appendChild( parent );    
    }
    previewImage( bonfireURL, parent );
}

function visitBonfire() {
    window.open( bonfireURL, "BONFIRE", "left=100,top=100" );
}

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
