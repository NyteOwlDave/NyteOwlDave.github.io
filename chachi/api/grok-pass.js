
/* 
    + Grok PASS ~ 2025-MAY-21
    @ /42/api/core
    * grok-pass.js
*/


const _GROK_PASS_PSK_MODULE_ACRONYMS_ = {
    PASS : "Provider and Splitter System" ,
    PSK  : "Provider, Splitter, and Key" ,
    GROK_SPLIT : "" ,
    WBRD_SPLIT : "" ,
    GROK_ORIGIN : "https://x.com/i/grok" ,
    WBRD_ORIGIN : "https://whiteboard.office.com"
};


function createPASS( url, splitter ) {
    function oops() { throw new TypeError( "Expected some text" ); }
    const str = o => ( "string" === typeof o );
    const fix = o => str( o ) ? o.trim() : "";
    const chk = o => o ? o : oops(); 
    url = chk( fix( url ) );
    splitter = chk( fix( splitter ) );
    const parts = url.split( splitter );
    const provider = parts[ 0 ];
    const key = parts[ 1 ];
    return { provider, splitter, key };
}


function applyPASS( pass ) {
    return [ 
        pass.provider , 
        pass.key 
    ].join( pass.splitter ); 
}


function createGrokPASS( key ) {
    const acros = _GROK_PASS_PSK_MODULE_ACRONYMS_;
    const provider = acros.GROK_ORIGIN;
    const splitter = acros.GROK_SPLIT;
    return { provider, splitter, key };
}


function createWBrdPASS( key ) {
    const acros = _GROK_PASS_PSK_MODULE_ACRONYMS_;
    const provider = acros.WBRD_ORIGIN;
    const splitter = acros.WBRD_SPLIT;
    return { provider, splitter, key };
}


function resolveGrokChatURL( key ) {
    if ( key ) {
        return applyPASS( createGrokPASS( key ) );
    } else {
        // To avoid throwing ~ "none" is a dummy arg
        return createGrokPASS( "none" ).provider;
    }
}

function resolveWBrdChatURL( key ) {
    if ( key ) {
        return applyPASS( createWBrdPASS( key ) );
    } else {
        // To avoid throwing ~ "none" is a dummy arg
        return createWBrdPASS( "none" ).provider;
    }
}


const wellKnowSplitters = {
grok : "?conversation=" , 
whiteboard : "me/whiteboards"
};


const GrokPassManifest = {
    wellKnowSplitters , 
    applyPASS , createPASS ,
    createGrokPASS , resolveGrokChatURL ,
    createWBrdPASS , resolveWBrdChatURL ,
    acronyms : _GROK_PASS_PSK_MODULE_ACRONYMS_
};


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "GrokPassManifest", { GrokPassManifest } );
    }
}

