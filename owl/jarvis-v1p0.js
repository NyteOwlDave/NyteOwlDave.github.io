
/*

    jarvis-v1p0.js
    Owl System Component

    IMPORTANT

    This is NOT the version from Jarvis Sandbox, which should
    become version 2.0 once it's debugged, tested, and
    extracted from the Web App.

    This IS the version extracted from Recent Nav Links.

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; _t_ = "jarvis-v1p0.js"
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function jarvis( o, rex ) {
    let want =( k )=> (! iwm.includes( k ) );
    o = mem( o || jarvis ).filter( want );
    if ( rex = str( rex ) ) {
        rex = new RegExp( rex );
        want =( k )=> ( rex . test( k ) );
        o = ( o ).filter( want );
    }
    return ( o );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis.needs = [
  "owl-prolog.js"
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis.uses = [
  "iwm"
, "mem"
, "str"
, "qlc"
, "visit"
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis . concept = function() {
    visit( "http://tiny.cc/jarvis-concept" );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis . projects = function() {
    visit( "http://tiny.cc/crucial-projects" );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis . hints = function( o, title ) {
    o = mem( o || jarvis );
    if ( o === jarvis ) {
        t = str( "Jarvis Members" );
    } else {
        t = ( str( title ) || "Members" );
    }
    o . unshift( `〖 ${t} 〗\n` );
    window . alert( qlc( o ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis . inspect = function( o, title ) {
    o = mem( o || jarvis );
    if ( o === jarvis ) {
        t = str( "Jarvis Members" );
    } else {
        t = ( str( title ) || "Members" );
    }
    const c = console;
    c . clear();
    c . group( `〖 ${t} 〗` );
    c . table( o );
    c . groupEnd();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis . analyze = function( o, title ) {
    const _i = str( o . input  );
    const _o = str( o . output );
    const _e = str( o . error  );
    const _t = [
      [ "Object" ,  o ]
    , [ "Input"  , _i ]
    , [ "Output" , _o ]
    , [ "Error"  , _e ]
    ];
    const c = console;
    c . clear();
    c . group( "〖 Script Result 〗" );
    c . table( _t );
    c . groupEnd();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis.details = ( `
jarvis    | Obtain Filtered List of Member Names
.details  | This Core Document
.ideas    | Future Ideas Core Document
.needs    | Filenames for Required Components
.uses     | Names for Global Members Used
.concept  | Visit Jarvis Concept Document
.projects | Visit Crucial Projects Site
.hints    | Show Members in Popup Dialog
.inspect  | Show Members in Console Table
.analyze  | Show Script Results in Console Table
` );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis.ideas = ( `
.assist   | Show Core Document as Console Table
.describe | Generate Member Type Table
.docify   | Generate Member Documentation Table
.records  | Read Records
.record   | Read Single Record
.entries  | Read Entry Map
.entry    | Read Single Entry
.droplist | Populate HTML Dropdown List
.list     | Populate HTML Unordered List
.tabulate | Populate HTML Table
.edit     | Write JSON / JSOM to Editor
.json     | Compose Manuscript
.jsom     | Compose JSOM Document
` );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis.manifest = {
  "title": "Jarvis Code Analysis",
  "tikey": "( pending )",
  "tidate": "( pending )",
  "updated": "2026-OCT-28",
  "author": "NyteOwlDave",
  "version": "1.0",
  "revision": "0.1",
  "edition": "Morpheus",
  "primary": "Omega",
  "decal": "🅙",
  "icon": "jarvis.png"
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis.contact = {
  mail : "nyteowldave@gmail.com"
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

jarvis.storage = {
  provider : "Morpheus"
, primary  : "Omega"
, nas      : "http://neo/shares/workspace/Jarvis"
, samba    : "smb://neo/workspace/Jarvis"
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "${_t_}" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

