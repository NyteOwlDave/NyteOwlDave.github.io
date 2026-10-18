
/*

	links-table.js
	for Drive Letter Index

	SEE : Owl Folder at Morpheus

*/

links_table = {};

; ( ( ops ) => {

ops . name = "links";
ops . type = "links-table";
ops . key  = "links-table.json";

ops . records = [
  [ "Project Notes"   , "https://ticktick.com/webapp/#p/6a99f28e8f086b72edb5a98b/tasks", false ]
, [ "Idea Flip"       , "https://ideaflip.com/b/sv99ag69aj8f/", false ]
, [ "Simple Mind Map" , "https://simplemindmap.com/", false ]
, [ "Voice Notes"     , "https://voice.google.com/u/0/messages?itemId=t.%2B13379989226", false ]
, [ "Keep Notes"      , "https://keep.google.com/", false ]
, [ "Outlook Notes"   , "https://outlook.live.com/mail/0/notes", false ]
, [ "Calendar"        , "https://calendar.google.com", false ]
, [ "Sites"           , "https://sites.google.com", false ]
, [ "Short URLs"      , "https://tiny.cc/tiny/manage", false ]
, [ "Emojis"          , "https://emojigraph.org/copy-keyboard/", false ]
, [ "My Notebook"     , "https://nyteowldave.github.io/notes/mynotepad.html", false ]
, [ "Cloud-Pad"       , "?", false ]
, [ "Mark-Ed"         , "?", false ]
, [ "Clipboard"       , "?", false ]
, [ "Concept Docs"    , "?", false ]
, [ "Sheets"          , "?", false ]
, [ "Forms"           , "?", false ]
, [ "Dorothy"         , "?", false ]
, [ "HUD Editor"      , "?", false ]
, [ "Jarvis"          , "?", false ]
, [ "Web Demos"       , "?", false ]
, [ "Bluto"           , "?", false ]
, [ "Sinkro"          , "?", false ]
, [ "Snek"            , "?", false ]
, [ "Snaggy"          , "?", false ]
, [ "Apes of Tarzan"  , "?", false ]
, [ "Sulu"            , "?", false ]
, [ "Drop Zone"       , "?", false ]
, [ "Venus"           , "?", false ]
, [ "Thalia"          , "?", false ]
, [ "Calliope"        , "?", false ]
, [ "Key Magic"       , "?", false ]
, [ "Store Key Notes" , "?", false ]
, [ "Locutus"         , "?", false ]
, [ "Math Jax"        , "?", false ]
, [ "Zephyr"          , "?", false ]
, [ "Lissajous"       , "?", false ]
, [ "Canvas Editor"   , "?", false ]
, [ "Graphics Canvas" , "?", false ]
, [ "Code Sandbox"    , "?", false ]
];

ops . schema = [
  [ "Title", "Address", "Assigned" ]
];

ops . json = function() {
    const jst =( o )=> JSON.stringify( o, null, 2 );
    const name    = ( ops.name    );
    const type    = ( ops.type    );
    const key     = ( ops.key     );
    const schema  = ( ops.schema  );
    const records = ( ops.records );
    const man = {
        name   , type    , key
      , schema , records
    };
    return ( jst( man ) );
};

ops . parse = function( manuscript ) {
    function oops() {
        throw new Error( `Invalid Store Entry` );
    }
    const jso =( o )=> JSON.parse( o );
    const iar =( o )=> Array.isArray( o );
    let man = manuscript;
    if ( "string" === typeof man ) {
        man = jso( man );
    }
    if (! ( man instanceof Object ) ) {
        oops();
    }
    if ( man . type !== ops . type ) {
        oops();
    }
    const _os = man . schema;
    if (! iar( _os ) ) { oops(); }
    const _or = man . records;
    if (! iar( _or ) ) { oops(); }
    ops . schema  = ( _os );
    ops . records = ( _or );
    ops . key  = str( man . key  ) || ( ops . key  );
    ops . name = str( man . name ) || ( ops . name );
};

ops . store = function() {
    const o = localStorage;
    if ( null === o ) {
        return sessionStorage;
    }
    return ( o );
};

ops . persist = function() {
    const s = ops . store();
    const k = ops . key;
    const v = ops . json();
    s . setItem( k, v );
    console . log( `Wrote Links Table to Store` );
};

ops . recover = function() {
    const s = ops . store();
    const k = ops . key;
    const v = s . getItem( k );
    if ( null === v ) {
        return ( ops.persist() );
    }
    ops . parse( v );
    console . log( `Read Links Table from Store` );
};

ops . reset = function() {
    const s = ops . store();
    const k = ops . key;
	s . removeItem( k );
    console . log( `Removed Links Table from Store` );
};

ops . list = function( owner, invert ) {
    const le = elx( "UL" );
    const iar =( o )=> Array.isArray( o );
    const rd  =( s )=> ( str( s ) || "?" );
    const add =( link )=> {
        if (! iar( link ) ) { return; }
        const t = rd( link[ 0 ] );
        const u = rd( link[ 1 ] );
        const ie = elx( "LI" );
        if ( invert ) {
            ie . value       = ( t );
            ie . textContent = ( u );
        } else {
            ie . textContent = ( t );
            ie . value       = ( u );
        }
        le . appendChild( ie );
    };
    const m = ops . links;
    m . forEach( add );
    return owner . appendChild( le );
};

ops . droplist = function( owner, invert ) {
    const le = elx( "SELECT" );
    const iar =( o )=> Array.isArray( o );
    const rd  =( s )=> ( str( s ) || "?" );
    const add =( link )=> {
        if (! iar( link ) ) { return; }
        const t = rd( link[ 0 ] );
        const u = rd( link[ 1 ] );
        const ie = elx( "OPTION" );
        if ( invert ) {
            ie . value       = ( t );
            ie . textContent = ( u );
        } else {
            ie . textContent = ( t );
            ie . value       = ( u );
        }
        le . appendChild( ie );
    };
    const m = ops . links;
    m . forEach( add );
    return owner . appendChild( le );
};

ops . datalist = function( owner, invert ) {
    const le = elx( "DATALIST" );
    const iar =( o )=> Array.isArray( o );
    const rd  =( s )=> ( str( s ) || "?" );
    const add =( link )=> {
        if (! iar( link ) ) { return; }
        const t = rd( link[ 0 ] );
        const u = rd( link[ 1 ] );
        const ie = elx( "OPTION" );
        if ( invert ) {
            ie . value       = ( t );
            ie . textContent = ( u );
        } else {
            ie . textContent = ( t );
            ie . value       = ( u );
        }
    };
    const m = ops . links;
    m . forEach( add );
    return owner . appendChild( le );
};

ops . populate = function( owner ) {
    const te = elx( "TABLE" );
    const ne = te.createCaption();
    const he = te.createTHead();
    const be = te.createTBody();
    ne . textContent = ( "Links Table" );
    const cell =( s, re )=> {
        s = str( s ) || "?";
        const ce = re.insertCell();
        ce . textContent = ( s );
    }
    const add =( link )=> {
        const re = be . insertRow();
        cell( link[ 0 ], re );
        cell( link[ 1 ], re );
        cell( link[ 2 ], re );
    }
    let m = ops . links;
    m . forEach( add );
    const re = he.insertRow();
    m = ops . schema;
    m . forEach( ( s ) => cell( s, re ) );
    return owner . appendChild( te );
};

function _persist() {
    ops . persist();
}

ops . recover();

addEventListener( "beforeunload", _persist );

} ) ( links_table )
;

