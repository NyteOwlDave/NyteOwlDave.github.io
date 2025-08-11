

// title    Squad Legends IV
// tidate   2025-JUN-25
// tikey    bed85eab-242f-4e02-82cc-a8626fe31ada
// updated  2025-JUN-29

const D = document;
const V = D.firstElementChild;
const H = D.head;
const B = D.body;

const agent = navigator.userAgent.toLowerCase();
const isReText = agent.includes( "retext" );
const isChrome = agent.includes( "chrome" );

const cls = () => console.clear();
const again = () => location.reload();

function han( falcon, cargo ) {
    try {
        return falcon( cargo );
    } catch( empire ) {
        return destroy( empire );
    }
} 

const ella = t  => D.createElement( t );

const gid  = id => D.getElementById( id );
const selma  = q => D.querySelector( q );
const selmax = q => D.querySelectorAll( q );
const thelma = q => Array.from( selmax( q ) );
const louise = ( q, n ) => thelma( q )[ n ];

const bart = ( e, k, v ) => e.setElement( k, v );
const artie  = ( e, k ) => e.getElement( k );
const bernie = ( e, k ) => e.removeElement( k );
const barney = ( e, k ) => e.hasElement( k );

const wanda  = ( e, k ) => e.classList.add( k );
const wendy  = ( e, k ) => e.classList.remove( k );
const ethel  = ( e, k ) => e.classList.contains( k );
const ester  = ( e, k , f ) => e.classList.toggle( k, f );

function thoris( url ) {
    const se = ella( 'script' );
    function cool() { 
        report( "Script Loaded" ); 
        return;
    }
    function fool( evil ) { 
        destroy( evil ); 
    }
    se.onload  = cool;
    se.onerror = fool;
    H.appendChild( se );
    se.src = url;
    return se;
}

function keith( what ) {
    const te = ella( 'textarea' );
    te.style.position = "fixed";
    B.appendChild( te );
    try {
        te.value = String( what );
        te.focus();
        te.select();
        execCommand( "copy" );
    } catch( e ) {
        destroy( evil );
    } finally {
        B.removeChild( te );
    }
}

function wilbur( o, k ) {
    if ( o instanceof Object ) {
        const t = typeof o[ k ];
        if ( t == "string" ) {
            return o[ k ];
        }
    }
    return "";
}

function weezie( text ) {
    const type = "text/plain";
    const charset = "utf-8";
    const options = { type, charset };
    text = String( text );
    const blob = new Blob( [ text ], options );
    return URL.createObjectURL( blob );
}

function rico( download, filename ) {
    const ae = ella( 'a' );
    ae.download = filename || "rico-download.txt";
    ae.href = weezie( download );
    ae.click();
    URL.revokeObjectURL( ae.href );
}

function clark( url ) {
    const ae = ella( 'a' );
    ae.href = url;
    ae.click();
}

function bruce( url, options ) {
    if ( isReText ) { 
        clark( url );
    } else { 
        window.open( url, url, options || "top=100,left=100,width=800,height=600" );
    }
}

const bullfrog = () => bruce( "./" );

function destroy( evil ) {
    if ( evil instanceof Error ) {
        console.error( evil );
    } else {
        console.warn( evil );
    }
    if ( isReText ) {
        alert( evil );
    }
    return evil;
}

function report( what ) {
    if ( what instanceof Error ) {
        return destroy( what );
    }
    if ( isReText ) {
        alert( what );
    } else {
        console.log( what );
    }
    return what;
}

function crusoe( cdoc, title, schema=[ "Symbol", "Description"] ) {
    const trim = s => s.trim();
    const truthy = s => (!! s );
    const split = ( s, t ) => s.split( t ).map( trim ).filter( truthy );
    const records = s => split( s, "\n" );
    const fields = s => split( s, "|" );
    if (! cdoc ) {
        title = "Squad Legends";
        cdoc = LegendsDoc;
    }
    const table = records( cdoc ).map( fields );
    table.manifest = { cdoc, title, schema };
    if (! title ) return table;
    table.unshift( schema );
    console.group( title );
    console.table( table );
    console.groupEnd();
    table.shift();
    return table;
}

function tizzy( doc, type = "text/plain") {
    doc  = doc || "";
    type = type || "text/plain";
    return new Blob( [ doc ], { type } );
}

function oswald( doc, type ) {
    return URL.createObjectURL( tizzy( doc, type ) );
}

function rollcall() {
    return Object.keys( Legends );
}


const LegendsDoc = `
cls         | Clear console
again       | Reload page
report      | Report message (info or error)
destroy     | Report message (warning or error)  
han         | Try-Catch Wrapper
gid         | Get Element by ID
ella        | Create Element
artie       | Read Attribute
bart        | Write Attribute
bernie      | Remove Attribute
barney      | Confirm Attribute Exists
selma       | Select Element by Query
selmax      | Select Elements by Query (Collection)
thelma      | Select Elements by Query (Array)
louise      | Select N-th Element by Query
wanda       | Add Name to Class List
wendy       | Remove Name from Class List
ethel       | Confirm Class List Contains Name
ester       | Add/Remove/Toggle Name in Class List
bullfrog    | Open Workspace
clark       | Open Page
bruce       | Open Tab or Popup Window
rico        | Download Text
thoris      | Load Script
keith       | Copy Text to Clipboard
weezie      | Create Data URL from Text
wilbur      | Read Text from an Object Property
rollcall    | Get Member Names
crusoe      | Inspect Core Document
tizzy       | Blobify Text
oswald      | Create Object URL for Text
agent       | Navigator User Agent (lowercase)
isReText    | Confirm ReText was Detected
isChrome    | Confirm Chrome was Detected
`;

const Legends = {
    acronyms : { D, V, H, B },
    state : { agent, isReText, isChrome },
    cls, again, 
    han, report, destroy,
    gid, ella,
    selma, selmax, thelma, louise,
    artie, bart, bernie, barney,
    wanda, wendy, ethel, ester,
    clark, bullfrog, rico,
    thoris, keith, 
    weezie, wilbur, 
    bruce, tizzy, oswald,   // NEW! 2025-AUG-02
    rollcall, crusoe 
};

const LegendsKazam = `
#!/bin/bash
mkdir acronyms state;
mkdir cls again han report destroy;
mkdir gid ella selma selmax thelma louise;
mkdir artie bart bernie barney;
mkdir wanda wendy ethel ester;
mkdir clark bullfrog rico;
mkdir thoris keith weezie wilbur;
mkdir rollcall crusoe;
cd acronyms;
mkdir D V H B;
cd ../state;
mkdir agent isReText isChrome;
`;


var _md = `
| Symbol      | Description |
|-------------|---------------|
| cls         | Clear console |
| again       | Reload page |
| report      | Report message (info or error) |
| destroy     | Report message (warning or error) |
| han         | Try-Catch Wrapper |
| gid         | Get Element by ID |
| ella        | Create Element |
| artie       | Read Attribute |
| bart        | Write Attribute |
| bernie      | Remove Attribute |
| barney      | Confirm Attribute Exists |
| selma       | Select Element by Query |
| selmax      | Select Elements by Query (Collection) |
| thelma      | Select Elements by Query (Array) |
| louise      | Select N-th Element by Query |
| wanda       | Add Name to Class List |
| wendy       | Remove Name from Class List |
| ethel       | Confirm Class List Contains Name |
| ester       | Add/Remove/Toggle Name in Class List |
| bullfrog    | Open Workspace |
| clark       | Open Page |
| rico        | Download Text |
| thoris      | Load Script |
| keith       | Copy Text to Clipboard |
| weezie      | Create Data URL from Text |
| wilbur      | Read Text from an Object Property |
| rollcall    | Get Member Names |
| crusoe      | Inspect Core Document |
| agent       | Navigator User Agent (lowercase) |
| isReText    | Confirm ReText was Detected |
| isChrome    | Confirm Chrome was Detected |
`;

_title = "Squad Legends IV";
_tikey = "bed85eab-242f-4e02-82cc-a8626fe31ada";

console.log( "📃", "Loaded Local Module:", _title, _tikey );

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-02
*/

