
/* 
    joni.js
    2025-JUN-26

    Companion to Chachi
*/

function load( key ) {
    if ( "number" === typeof key ) {
        key = localStorage.key( key );
    }
    return localStorage.getItem( key );
}

function save( key, value ) {
    if ( "number" === typeof key ) {
        key = localStorage.key( key );
    }
    localStorage.setItem( key, value );
}

function keys( splitter ) {
    const o = thor.getCacheKeys();
    if ( "string" === typeof splitter ) {
        return o.join( splitter );
    }
    return o;
}

function joni() {
    return { joni, load, save, keys, thor };
}

console.log( '📃', 'Loaded Local Module:', 'joni.js' );

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/

