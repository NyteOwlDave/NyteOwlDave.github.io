

/*
  I need a way to display images for solving practice problems.
  Prefer Drag-Drop.
  Accept manual URL input also.
*/

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


function getImage( url ) {
    const want = o => ( o.src === url );
    return thelma( 'img' ).filter( want )[ 0 ];
}

function removeImage( url ) {
	let ie = getImage( url );
    if ( ie ) {
       	const pe = ie.parentElement;
       	if ( pe && ( pe.nodeName === "FIGURE" ) ) { 
			ie = pe;
       	}
		ie.remove();
        return "Removed " + ie.nodeName;
   	}
    return "Image not found:\n" + url;
}

function previewImage( url, parent ) {
    if (! parent ) {
        parent = ella( 'figure' );
        let o = selma( 'main' ) || document.body;
        o.appendChild( parent );    
    }
    let ie = ella( 'img' );
    parent.appendChild( ie );
    ie.src = ie.title = url;
}

function previewBonfire( parent ) {
    previewImage( bonfireURL, parent );
}

function visitImage( url, tag ) {
    tag = ( tag || url );
    window.open( url, tag, "left=100,top=100" );
}

function visitBonfire() { visitImage( bonfireURL, "BONFIRE" ); }

function editBonfireAPI() {
    gid( 'sip' ).value = ( `
// urlCoreDoc( doc );
// getImage( url ).src;
// removeImage( url );
// previewImage( url, parent );
// visitImage( url, tag );
// previewBonfire();
// visitBonfire();
// removeBonfire();
    ` );
}


/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-OCT-14 ~ Omega
*/

