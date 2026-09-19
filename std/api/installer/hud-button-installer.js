
/*

    hud-button-installer.js

    - [x] Morphues Installers
    - [x] Web Demo Installers

*/

;( () => {

const doc = document;
const elx =( t )=> doc.createElement( t );

const psk =( p, s, k )=> ( [ p, s, k ].join( "/" ) );
const ksp =( k, s, p )=> psk( p, s, k );

function load_script( url ) {
    const se = elx( "SCRIPT" );
    doc.body.appendChild( se );
    se . src =( url );
};

const P = "https://nyteowldave.github.io";
const S = "std/api/gems";
const K = "add-hud-button.js";

console.log( "Loading : ", K );
console.info( `Invoke "add_hud_button()" when loaded` );

load_script( ksp( K, S, P ) );

} )();

