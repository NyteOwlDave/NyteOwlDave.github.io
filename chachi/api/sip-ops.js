
/* 
    Chachi Saved Script ~ Omega
    2025-AUG-09
    SIP Memo Operations

- [Omega](file:///home/dave/Mount/MORPHEUS/)

*/

if ( "function" !== typeof joni ) {
    throw new Error( "Missing module: 'joni.js'" );
}

if ( "function" !== typeof gid ) {
    throw new Error( "Missing module: 'legends.js'" );
}

if ( ( "function" !== typeof rico ) || 
     ( "function" !== typeof bruce ) ) {
    throw new Error( "Wrong module version: 'legends.js'" );
}

if (! sip ) sip = document.getElementByID( 'sip' );

sip.manifest = {
    title      : "Chachi's SIP Editor" ,
    version    : "1.0.0" ,
    edition    : "Morpheus Edition" ,
    decal      : "👨‍🏫" ,
    tikey      : "cee00952-f1c2-4c24-814f-622ab833b81d" ,
    tidate     : "2025-AUG-09" ,
    wbkey      : "cee00952-f1c2-4c24-814f-622ab833b81d" ,
    home       : "https://nyteowldave.github.io/chachi/chachi.html" ,
    repo       : "https://github.com/NyteOwlDave/NyteOwlDave.github.io"
}

sip.filename = function() {
    function readTitleInput() {
        const o = ( gid( 'sip-title' ) || gid( 'sipTitle' ) );
        if (! o ) return;
        if ( "string" === typeof o.value ) {
            return o.value.trim();
        } else {
            return o.innerText.trim();
        }
    }
    function readDocTitle() {
        return document.title.trim();
    }
    function readCachedTitle() {
        return joni().load( "Chachi SIP Title" );
    }
    const s = sip.title.trim()
            || readTitleInput()
            || readCachedTitle()
            || readDocTitle()
            || "untitled";
    return ( s + ".txt" );
}

sip.download = function() {
    rico( sip.filename(), sip.value );
    return sip;
};

sip.whiteboard = function( key ) {
    const P = "https://whiteboard.cloud.microsoft";
    const S = "me/whiteboards";
    const K = ( key || sip.manifest.wbkey );
    const U = [ P, S, K ].join( "/" );
    console.log( "Opening Whiteboard", U );
    bruce( U );
    return sip;
}

sip.stack = [];

sip.push = function() {
    sip.stack.push( sip.value );
    return sip;
}
sip.pop  = function() {
    if ( sip.stack.length ) {
        value = sip.stack.pop( sip.value );
    }
    return sip;
}

sip.cache = localStorage;

sip.save = () => {
    joni().save( sip.filename(), sip.value );
    return sip;
};

sip.load = () => {
    let payload = joni().load( sip.fileName );
    if ( payload !== null ) {
        sip.value = payload;
    }
    return sip;
}

sip.cacheKeys = () => ( joni().keys() );   // joni.js

sip.keys = () => ( Object.keys( sip ) );

sip.memoSave = () => { sip.memo  = sip.value; return sip; };
sip.memoLoad = () => { sip.value = sip.memo;  return sip; };
sip.memoSwap = () => {
	const tmp = sip.value
	sip.memoLoad().memo = temp;
	return sip;  
};

sip.zoom = () => ( sip.requestFullscreen() );

sip.dock = function() {
     sip.style.position = "fixed"; 
     return sip;
};

sip.undock = function() {
    sip.style.position = ""; 
     return sip;
}    

sip.normalize = function() {
    if ( sip.style.position !== "fixed" ) {
        throw new Error( "SIP isn't docked" );
    }
    const st = sip.style;
    st.left = st.top = st.width = st.height = "";
    return sip;
}

sip.minimize = function() {
    if ( sip.style.position !== "fixed" ) {
        throw new Error( "SIP isn't docked" );
    }
    const st = sip.style;
    st.left  = st.top    = "0";
    st.width = st.height = "320px";
    return sip;
}

sip.maximize = function() {
    if ( sip.style.position !== "fixed" ) {
        throw new Error( "SIP isn't docked" );
    }
    const st = sip.style;
    st.left = st.top = "0";
    st.width = st.height = "calc( 100% - 22px )";
    return sip;
}

sip.move = function( { x, y, w, h } ) {
    const st = sip.style;
    st.left   = x;
    st.top    = y;
    st.width  = w;
    st.height = h;
    return sip;
}

sip.location = function() {
    const cs = getComputedStyle( sip );
    const x = cs.left;
    const y = cs.top;
    const w = cs.width;
    const h = cs.height;
    return { x, y, w, h };
}

sip.rotate = function( angle ) {
    throw new Error( "Coming attraction!" );
}

sip.show = function() {
    if ( sip.style.display === "none" ) {
        sip.style.display = "";
    }
    return sip;
}

sip.hide = function() {
    sip.style.display = "none";
    return sip;
}

sip.toggle = function() {
    if ( sip.style.display === "none" ) {
        sip.show();
    } else {
        sip.hide();
    }
    return sip;
}

sip.parent = () => ( sip.parentElement );

"Loaded SIP Operations";


