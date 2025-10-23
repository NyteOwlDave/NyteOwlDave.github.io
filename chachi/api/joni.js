
/*

    # joni.js
    ~ Companion to Chachi
    ~ Remote  => morpheus
    ~ Primary => dave-omega
    | TIKEY  : 279a2a2b-3abb-4f31-9a2e-8d570e252e7e
    | TIDATE : 2025-JUN-26
    | UPDATE : 2025-OCT-22

*/

function demetrius( ) {
    const q = `[details]`;
    return Array . from(
        document . querySelectorAll( q )
    );
}

function mcCoy( cdoc ) {
    const FS = "|";
    const RS = "\n";
    const split = ( s, t=FS ) => s.split( t );
    const chop = s => split( s, RS );
    const trim = s => s.trim();
    const keep = s => (!! s );
    const entry = s => ( split( s ) . map( trim ) );
    return chop( cdoc )
        . map( trim )
        . filter( keep )
        . map( entry );
}

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

function keys( splitter, decal ) {
    let o = thor.getCacheKeys();
    if ( "string" === typeof decal ) {
        o = o.map( k => ( `${decal} ${k}` ) );
    }
    if ( "string" === typeof splitter ) {
        return o.join( splitter );
    }
    return o;
}

function keyss( splitter ) {
    return keys( splitter, "🔑" );
}

function keysss( splitter ) {
    return keys( splitter, "🗝️ " );
}

function keyz( decal ) {
    let k
    console.table( k = keyzz( decal ) );
    return k;
}

function keyzz( decal ) {
    return keys( "\n", decal  );
}

function keyzzz( o ) {
    if  ( o === localStorage ) return ["🔑"];
    if  ( o instanceof Object ) return ["🗝️"];
    return [ "🔑", "🗝️", "🔏", "🔓", "🔐" ];
}

function joni() {
    const cdoc = ( `
joni      | Return Method Map
load      | Read Store Entry using Key or Index
save      | Write Store Entry using Key or Index
keys      | Return List of Store Keys (optional join & optional decal)
keyss     | Same as keys(), but uses predefined decal 🔑
keysss    | Same as keys(), but uses predefined decal 🗝️ 
keyz      | Display Table of Store Keys in Browser Console (optional decal)
keyzz     | Same as keys(), but provides linefeed for join (optional decal)
keyzzz    | Smart method for choosing an appropriate decal or decal list
demetrius | List of Gadgets with 'details' attribute
mcCoy     | CoreDoc ==> Table (array of string arrays)
thor      | Same as thor() from thor.js
    ` );
    return { 
        joni, 
        load, 
        save, 
        keys, keyss, keysss,
        keyz, keyzz, keyzzz,
        demetrius, mcCoy ,
        thor, cdoc
    };
}

console.log( '📃', 'Loaded Local Module:', 'joni.js' );

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-OCT-22 ~ Omega
*/

