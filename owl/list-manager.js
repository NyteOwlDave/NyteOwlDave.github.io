
/*
    list-manager.js
    Owl System for Morpheus
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists = {};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.manifest = {
  "title": "List Manager for Owl System",
  "tikey": "1225d00f-6484-4a36-84ab-1aab18b7c244",
  "tidate": "2026-OCT-13",
  "updated": "2026-OCT-13",
  "author": "NyteOwlDave",
  "version": "1.0",
  "revision": "0.1",
  "edition": "Morpheus",
  "primary": "Omega",
  "decal": "📃",
  "icon": "owl.png"
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.nid = function( pfx="list", sep="-" ) {
    const krnd =()=> Math.floor( Math.random() * 0xFFFF );
    const when =()=> Date.now();
    const a = when().toString( 32 );
    const b = krnd().toString( 32 );
    const c = krnd().toString( 32 );
    const d = [ pfx, a, b, c ].join( sep );
    return ( d );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.all = function() {
    const m = list_section;
    const v = arr( m.querySelectorAll( "UL" ) );
    return ( v );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.choose = function( index ) {
    const m = lists.all();
    const i = parseInt( index );
    return ( m[ i ] );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.clear = function() {
    list_section.innerHTML = "";
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


lists.titles = function() {
    const m = lists.all();
    const v = ( m ).map( ( le ) => str( le.title ) );
    return ( v ).filter( nop );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.titles.edit = function( ed ) {
    ed = lists . editor( ed );
    ed . value = qlc( lists.titles() );
    return ( ed );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.titles.list = function() {
    const m = lists.titles();
    const t = "List Titles";
    return lists.add( m, null, t );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.ids = function() {
    const m = lists.all();
    const v = ( m ).map( ( le ) => str( le.id ) );
    return ( v ).filter( nop );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.ids.edit = function( ed ) {
    ed = lists . editor( ed );
    ed . value = qlc( lists.ids() );
    return ( ed );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


lists.ids.list = function() {
    const m = lists.ids();
    const t = "List IDs";
    return lists.add( m, null, t );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.indexOf = function( title ) {
    const m = lists.titles();
    return ( m ).indexOf( title );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.read = function( index ) {
    const result = { index };
    const le = lists.choose( index );
    const items =()=> {
        let o = arr( le . querySelectorAll( "LI" ) );
        o = ( o ).map( ( li ) => str( li . textContent ) );
        return ( o ).filter( nop );
    };
    if ( le ) {
        result.title = le.title;
        result.id    = le.id;
        result.items = items();
    }
    return ( result );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.editor = function( ed ) {
    if ( ed instanceof HTMLTextAreaElement ) {
        return ( ed );
    }
    ed = gid( "sce" );
    if ( ed ) { return ( ed ); };
    ed = elx( "TEXTAREA" );
    ed . classList . add( "siox" );
    ed . spellcheck = false;
    ed . wrap = "off";
    ed . id = lists.nid( "id" );
    return ( doc . body . appendChild( ed ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.edit = function( index, ed ) {
    ed = lists.editor( ed );
    ed . value = jst( lists.read( index ) );
    return ( ed );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.remove = function( index ) {
    const le = lists.choose( index );
    if ( le ) {
        say( `Removed List #${index}` );
        le . remove();
    } else {
        say( `Index is Out of Bounds` );
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.add = function( items, id, title ) {
    id = ( str( id ) || lists.nid() );
    let le = gid( id );
    if (! le ) {
        le = elx( "UL" );
        le . id = ( id );
    } else {
        le . innerHTML = "";
        title = ( str( title ) || le.title );
    }
    list_section.appendChild( le );
    const s = ( str( title ) || "New List" );
    le . title = ( s );
    const add =( s )=> {
        s = str( s ); if(! s ) { return; }
        const ie = elx( "LI" );
        ie . value = (
            ie . textContent = ( s )
        );
        le . appendChild( ie );
    };
    if ( items instanceof Object ) {
        if ( "function" === typeof items ) {
            items = [ items.toString() ];
        } else if ( Array.isArray( items ) ) {
            items = items.map( str ).filter( nop );
        } else {
            items = mem( items );
        }
    } else if ( "string" === typeof items ) {
        items = qlp( items );
    } else {
        items = [ String( items ) ];
    }
    items.forEach( add );
    return( le );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.request = function( url, id, title ) {
    function isSGML( s ) {
        s = str( s );
        const a = ( s.startsWith( `<` ) );
        const b = ( s.endsWith  ( `>` ) );
        return ( a && b );
    }
    const reject =( e )=> {
        console.warn( e );
        say( e );
    };
    const accept =( s )=> {
        if ( isSGML( s ) ) {
            const e = ( `Rejecting Markup File` );
            return reject( e );
        }
        lists.add( qlp( s ), id, title );
    };
    try {
        const req = fetch( url );
        ; ( req )
        . then  ( rsp => rsp.text() )
        . then  ( accept )
        . catch ( reject )
        ;
        lists . request . recent = ( url );
        return ( req );
    } catch ( e ) {
        reject( e.message );
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lists.hints = function( o, title ) {
    const m = mem( o || lists );
    const t = ( str( title ) || "Lists Members" );
    m.unshift( `〖 ${t} 〗\n` );
    window . alert( qlc( m ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "list-manager.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

