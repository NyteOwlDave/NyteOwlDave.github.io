
/*

    hud-button-installer.js

    - [x] Morpheus Installers
    - [x] Web Demo Installers

*/

;( () => {

const doc = document;
const elx =( t )=> doc.createElement( t );

const psk =( p, s, k )=> ( [ p, s, k ].join( "/" ) );
const ksp =( k, s, p )=> psk( p, s, k );

const dot_style = ( `
.dot {
    display : inline-block;
    box-sizing : border-box;
    font : 11pt monospace;
    line-height : 2.2ch;
    width  : 2.2ch;
    height : 2.2ch;
    cursor      : pointer;
    text-align  : center;
    user-select : none;
    outline     : none;
    border      : none;
    margin      : 0px 16px 0px 5px;
}
` );

function create_style( css ) {
    const se = elx( "STYLE" );
    doc.body.appendChild( se );
    se.innerText = ( css );
};

function load_script( url ) {
    const se = elx( "SCRIPT" );
    doc.body.appendChild( se );
    se . src =( url );
};

function report( s ) {
    console.log( s );
    if ( "function" === typeof announce ) {
        announce( s );
    }
}

const P = "https://nyteowldave.github.io";
const S = "std/api/gems";
const K = "add-hud-button.js";

report( `Creating "dot" Style` );
create_style( dot_style );

report( `Loading Module "${K}"` );
load_script( ksp( K, S, P ) );

} )();


