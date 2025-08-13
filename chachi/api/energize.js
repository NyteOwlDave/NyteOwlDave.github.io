
/* 
    title   Energize for Morpheus
    id      energize.js
    tikey   3655ed06-764b-48dc-b202-f7287c0043b1
    tidate  2025-JUL-28    
*/

const _404_ = "./(404)/";

function deenergized() {
    throw new Error( "Function not implemented" );
}


function otherFriends() {
    return {}; // Persistent (cache, file, idb, ...)
}

function persistOtherFriends() {
    deenergized();
}

function recoverOtherFriends() {
    deenergized();
}


function energize( url ) {
    const key = url;
    const known = FriendMap[ key ] || FriendIP[ key ];
    return bruce( known || url );   // legends.js
}

energize.api = {
    self : energize,
    todo : deenergized,
    otherFriends ,
    persistOtherFriends ,
    recoverOtherFriends
};


const FriendIP = {
  greystoke  : 'https://198.91.25.240/'
, private    : 'http://173.217.64.99/'
, system42   : 'http://173.217.64.99:4242/42/'
};


const FriendMap = {
  olympiad    : 'https://www.youtube.com/playlist?list=PLKLt4UEdBs1nFQ0jSgN5EK6OAGSym1YQ0 ' 
, whiteboards : 'https://whiteboard.cloud.microsoft/' 
, notebooks   : 'https://www.onenote.com/notebooks/' 
, gsites      : 'https://site.google.com/'
, gdocs       : 'https://docs.google.com/'
, gsheets     : 'https://docs.google.com/spreadsheets/'
, gforms      : 'https://sites.google.com/'
, gvoice      : 'https://voice.google.com/'
, gkeep       : 'https://keep.google.com/'
, gdrive      : 'https://sites.google.com/'
, onedrive    : 'https://ondrive.live.com'
, pastebin    : _404_
, dropbox     : 'https://dropbox.com'
, dbpaper     : 'https://dropbox.com/paper/'
, copilot     : _404_
, codepen     : 'https://codepen.io/'
, editors     : 'https://sites.google.com/view/morning-swill/links/editors/'
, panel42     : 'https://sites.google.com/view/morning-swill/links/panel42/'
, links       : 'https://sites.google.com/view/morning-swill/links/'
, swill       : 'https://sites.google.com/view/morning-swill/'
, commands    : 'https://sites.google.com/view/dww-commands/'
, johnny5     : 'https://sites.google.com/view/johnny-five/'
, greystoke   : 'https://nyteowldave.work/'
, emojikeybd  : 'https://emojigraph.org/copy-keyboard/'
, simpleicons : 'https://siimple.xyz/icons/'
, devicons    : 'https://nyteowldave.github.io/dev-icons/'
, cdn         : 'https://nyteowldave.github.io/cdn/'
, tigg        : 'https://nyteowldave.github.io/tigg/'
, chachi      : 'https://nyteowldave.github.io/chachi/'
, morpheus    : 'https://nyteowldave.github.io/'
, mathJax     : 'https://docs.mathjax.org/en/latest/'
, mathJS      : 'https://mathjs.org/examples/index.html'
, clipboard   : 'https://online-clipboard.online/online-clipboard'
, clipboard2  : 'https://live-clipboard.netlify.app'
, desmos      : 'https://www.desmos.com/calculator'
, others : otherFriends()
};

// https://mathnotepad.com/
// https://www.geogebra.org/geometry
// https://www.mathcha.io/editor


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "energize", { energize } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { EditablesDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'energize.js' );
}

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-12 ~ Omega
*/
