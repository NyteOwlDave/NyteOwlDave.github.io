
/*
    This is used by the JSON loader (dot-menu-reader.html) to 
    generate HTML tables from Dot Menu (JSON) entries.

*/


/*
DAVE-PI      (120)
DAVE-RYZEN   (125)
DAVE-TOWER   (130)
DAVE-ZOMBIE  (135)
DAVE-LENOVO  (140)
DAVE-LEGACY  (145)
DAVE-PROBOOK (150)
DAVE-OMEGA   (155)
*/

const siteURL = {
    pi      : "http://192.168.1.120/42/app/stereogram/dot/menu/"
,   ryzen   : "http://192.168.1.125/applets/app/dotmenu/"
,   tower   : "http://192.168.1.130/42/app/stereogram/dot/menu/"
,   zombie  : "http://192.168.1.135/42/app/stereogram/dot/menu/"
,   lenovo  : "http://192.168.1.140/42/app/stereogram/dot/menu/"
,   legacy  : "http://192.168.1.145/42/app/stereogram/dot/menu/"
,   probook : "http://192.168.1.150/42/app/stereogram/dot/menu/"
,   omega   : "http://192.168.1.155/42/app/stereogram/dot/menu/"
};

const site = siteURL.legacy;

function makeTable( dotmenu ) {
    const title = o => o.title;
    const titles = dotmenu.map( title );
    console.table( titles );
}

function showResult( o ) {
    console.log( "" );
    if ( o instanceof Object ) {
        if ( Array.isArray( o.menuDots ) ) {
            makeTable( o.menuDots[ 0 ] )
        } else {
            console.log( "[Object]" );
            console.dir( o );
        }
    } else {
        console.log( "[String]" );
        console.log( o );
    } 
}


function composeAssetURL( filename ) {
    return ( site + filename );
}


function fetchTextFile( url, onsuccess ) {
    return fetch( url )
        .then( resp=>resp.text())
        .then( text=>onsuccess( text ) )
        .catch( e => console.error( e ) );
}

function fetchObjectFile( url, onsuccess ) {
    return fetch( url )
        .then( resp => resp.json())
        .then( json => onsuccess( json ) )
        .catch( e => console.error( e ) );
}


function fetchDotMenu( filename = "auto-menu.json" ) {
    const url = composeAssetURL( filename );
    console.log( "URL:", url );
    fetchObjectFile( url, showResult );
}

console.clear();

const fname = process.argv[ 2 ] 
    || "auto-menu";

fetchDotMenu( fname + ".json" );

// console.table( process.argv )

