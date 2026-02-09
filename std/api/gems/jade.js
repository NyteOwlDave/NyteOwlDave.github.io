
/* 
    The JADE Gem ~ 2025-MAR-24
    SSS Basics
    jade.js
*/

const _D_ = document;

// Shared Anchor
const _A_ = _D_.createElement( 'a' );

// Emulate a Click (Navigate top URL)
const _E_ = function( url ) {
    _A_.href = url;
    _A_.click();
}

// Navigate to Workspace
const _J_ = () => _E_( "./" );

const Workspace = {
    decal  : "" ,
    extras : { _J_, _A_, _D_, _E_ } ,
    open   : _J_ ,
    url    : "./" ,
    wbkey  : ""
};


console.log( "Loaded jade.js API Module" );

