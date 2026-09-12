
/*

# jsom-combo-api.js

- [`X`] describe.js
- [`X`] message-ops.js
- [`X`] gideon-ops.js
- [`X`] gather-ops.js
- [`X`] zed-ops.js
- [`X`] copy-ops.js
- [`X`] list-ops.js

<pre>

*/


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~[ Describe Gem ]~~~~~~~~~~~~~~~~~~~~~~~
*/

type  =( o )=> ( alert( typeof o   ) );
ntype =( o )=> ( alert( o.nodeName ) );
asize =( a )=> ( alert( a.length   ) );
osize =( o )=> ( alert( o.size     ) );

function hints( o, title ) {
    let m, t = str( title );
    if ( o instanceof Object ) {
        if ( Array.isArray( o ) ) {
            m = ( o );
        } else {
            m = Object.keys( o || [] ).sort();
        }
        t = ( t || "Members" );
    } else {
        m = [];
        m . push( String( o ) );
        t = ( t || "Value" );
    }
    m . unshift( `\n[ ${t} ]\n` );
    alert( m.join( "\n" ) );
};

describe = {
  type, ntype, asize, osize, hints
};


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~[ Message Ops ]~~~~~~~~~~~~~~~~~~~~~~~~
*/

function message( s ) {
    return (
        messages.textContent = str( s )
    );
}

function look_here( s ) {
    return message(
        [ `👀`, str( s ) ]
        . join( " " )
    );
}

function announce( s ) {
    return message(
        [ `🧝`, str( s ) ]
        . join( " " )
    );
}

function recommend( s ) {
    return message(
        [ `🧙`, str( s ) ]
        . join( " " )
    );
}

function blurt( s ) {
    return message(
        [ `🟡`, str( s ) ]
        . join( " " )
    );
}

function dangit( s ) {
    return message(
        [ `🟢`, str( s ) ]
        . join( " " )
    );
}

function bummer( e ) {
    let s;
    if ( e instanceof Error ) {
        s = e.message;
    } else {
        s = str( e );
        e = new Error( s );
    }
    message(
        [ `🔴`, str( s ) ]
        . join( " " )
    );
    return ( e );
}

function suggest( s ) {
    let i;
    if ( isFinite( i = parseInt( s ) ) ) {
        if ( "object" === typeof suggestions ) {
            const o = arr( suggestions );
            s = ( o[ i ] || s );
        } else {
            throw new Error( `Can't find "suggestions" list` );
        }
    }
    suggest.recent = (
        footer_input.value = str( s )
    );
}

suggest.count = function() {
    let n = 0;
    if ( "object" === typeof suggestions ) {
        n = suggestions.length;
    }
    message( `🧮 Suggestion Count : ${n}` );
};

function last() {
    const s = str( suggest.recent );
    if ( s ) {
        suggest( s );
    } else {
        message( "No recent command was found" );
    }
}

function say( s, ed ) {
    ed = ( ed || gid( "sop" ) );
    if ( ed ) {
        ed . value = ( s );
    } else {
        console.warn( `Missing SOP Editor` );
        blurt( s );
    }
}

function mention( s, ed ) {
    ed = ( ed || gid( "sop" ) );
    if ( ed ) {
        const t = ( ed.value );
        if ( t ) {
            s = [ t, s ].join( "\n" );
        }
    }
    return say( s, ed );
}

message.helpers = {
  mention, say
, announce, recommend, look_here
, blurt, dangit, bummer
, suggest, last
};

message.mem = function() {
    const ops = message;
    const m = Object.keys( ops.helpers );
    m.unshift( "message" );
    return ( m );
};

message.inspect = function( o, t ) {
    let m;
    if ( o instanceof Object ) {
        m = Object.keys( o ).sort();
        t = ( str( t ) || "Members" );
    } else {
        m = message.mem();
        t = "Message Methods";
    }
    const c = console;
    c.clear();
    c.group( `[ ${t} ]` );
    c.table( m );
    c.groupEnd();
};

message.hints = function( o, t ) {
    let m;
    if ( o instanceof Object ) {
        m = Object.keys( o ).sort();
        t = ( str( t ) || "Members" );
    } else {
        m = message.mem();
        t = "Message Methods";
    }
    m . unshift( `[ ${t} ]\n` );
    alert( m.join( "\n" ) );
};


/*
 ~~~~~~~~~~~~~~~~~~~~~~~[ Gideon Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function get_ghost_editor() {
    const id = "ghost_editor";
    const ed = gid( id );
    if ( ed ) { return ( ed ); }
    const cname = "ghost";
    const owner = ( doc . body );
    return (
        node( "TEXTAREA", id, cname, owner )
    );
}


function test_ghost_editor() {
    try {
        const ed = get_ghost_editor();
        alert( ed.nodeName );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}


function node( type, id, cname, owner ) {
    const ge = elx( str( type ) );
    if ( id = str( id ) ) {
        ge . id = ( id );
    }
    if ( cname = str( cname ) ) {
        ( ge )
        . classList
        . add ( cname );
    }
    if ( owner instanceof HTMLElement ) {
        owner . appendChild( ge );
    } else if ( "undefined" !== typeof owner ) {
        console.warn( { owner } );
        throw new TypeError(
            "Expected a Gadget Reference"
        );
    }
    return ( ge );
}

node.flash = function( o, cname, delay ) {
    cname = ( str( cname ) || "flashing" );
    delay = ( parseInt( delay ) || 800 );
    if ( delay < 1 ) { return; }
    o = ( o || document.activeElement );
    const cl = o.classList;
    const off =()=> { cl.remove( cname ); }
    cl.add( cname );
    setTimeout( off, delay );
};

node.nth = function( type, index, owner ) {
    owner = ( owner || document );
    type = str( type );
    if (! type ) {
        throw new TypeError(
            "Expected a CSS Query or Node Name"
        );
    }
    index = ( parseInt( index ) || 0 );
    const m = arr(
        owner.querySelectorAll( type )
    );
    return ( m[ index ] );
};


/*
 ~~~~~~~~~~~~~~~~~~~~~~~[ Gather Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function jsom( attrib, rex, dash, ed ) {
    ed = ned( ed );
    attrib = ( str( attrib ) || "group" );
    const artie =( se )=> ( se.getAttribute( attrib ) );
    const q = ( `SCRIPT[${attrib}]` );
    const m = all( q );
    let v;
    if ( rex = str( rex ) ) {
        rex = new RegExp( rex );
        const match =( se )=> ( rex.test( artie( se ) ) );
        v = ( ( m ).filter( match ) );
    } else {
        v = ( m );
    }
    const doc = jsom.compose( v, dash );
    if ( ed === "+" ) { ed = ned( gid( "sop" ) ); }
    if ( ed instanceof HTMLTextAreaElement ) {
        ed . value = ( doc );
        return ( ed );
    }
    return ( doc );
}

jsom.status = function( rex, dash="-", ed ) {
    return jsom( "status", rex, dash, ed );
};

jsom.group = function( rex, dash="-", ed ) {
    return jsom( "group", rex, dash, ed );
};

jsom.lang = function( rex, dash="-", ed ) {
    return jsom( "id", rex, dash, ed );
};

jsom.nametag = function( rex, dash="-", ed ) {
    return jsom( "name", rex, dash, ed );
};

jsom.lang = function( rex, dash="-", ed ) {
    return jsom( "lang", rex, dash, ed );
};

jsom.compose = function( scripts, dash="-" ) {
    dash = ( str( dash ) || "-" );
    const line = String( dash ).repeat( 62 );
    const sep = [ "\n|", "|\n" ].join( line );
    const lines = (
        ( scripts )
        . map( ( se )=> ( se.innerText ) )
    );
    return lines.join( sep );
}

jsom.acquire = function( url ) {
    try {
       const se = elx( "SCRIPT" );
       const boo = doc.body;
       boo.appendChild( se );
       se.src = ( url );
       return ( se );
    } catch ( e ) {
        console.error( e );
        message( e.message );
    }
};

jsom.acquire_psk = function( p, s, k ) {
    p = ( str( p ) || "http://dave-omega" );
    s = ( str( s ) || "app/bluto/api" );
    k = ( str( k ) || "hello.js" );
    u = [ p, s, k ].join( "/" );
	return acquire( u );
};


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~~[ Zed Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function ned( ed ) {
    ed = (
        ( ed )
        || gid( "sop" )
        || gid( "sce" )
        || gid( "sip" )
    );
    if (! ed ) {
        const owner = ned.section();
        ed = node(
            "TEXTAREA", "sop", "siox", owner
        );
    }
    return ( ed );
}

ned.all = function() {
    return all( "TEXTAREA" );
};

ned.nth = function( index ) {
    return ( all( "TEXTAREA" )[ index ] );
};

ned.section = function() {
    let section = (
           gid( "editor_section" )
        || gid( "editor-section" )
    );
    if ( section ) { return ( section ); }
    const fieldset = ned.fieldset( "Editors" );
    return node( "SECTION", "editor_section", 0, fieldset );
}

ned.fieldset = function( caption, owner ) {
    owner = ( owner || document.body );
    caption = ( str( caption ) || "New Group" );
    const fieldset = node( "FIELDSET", 0, 0, owner    );
    const legend   = node( "LEGEND"  , 0, 0, fieldset );
    legend.textContent = ( caption );
    return ( fieldset );
}

ned.imports = function( ed ) {
    const m = all( "SCRIPT[src]" );
    if ( ed === "*" ) { return ( m ); }
    const v = ( m ).map( ( se ) => ( se.src ) );
    if ( ed === "+" ) { ed = ned( gid( "sop" ) ); }
    if ( ed instanceof HTMLTextAreaElement ) {
        ed = value = ( v.join( "\n" ) );
        return ( ed );
    }
    return ( v );
};


ned.imports.macros = {
  "+" : "Use or Create SOP Editor"
, "*" : "Return SCRIPT Elements"
};


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~~[ Copy Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function locate_above_any( sender ) {
    if ( sender instanceof Event ) {
        sender = sender.target;
    }
    let ge = sender;
    if ( ge.parentElement.classList.contains( "menu" ) ) {
        ge = ge.parentElement;
    }
    ge = ge.previousElementSibling;
    if (! ge ) {
        console.warn( "Unable to locate previous element" );
        return ( null );
    }
    return ( ge );
}

function locate_above_sibling( type, sender ) {
    if ( sender instanceof Event ) {
        sender = sender.target;
    }
    let ge = sender;
    if ( ge.parentElement.classList.contains( "menu" ) ) {
        ge = ge.parentElement;
    }
    type = str( type );
    if (! type ) {
        throw new TypeError(
            "Expected an Element Node Type"
        );
    }
    const match  =()=> ( (  ge ) && ( ge.nodeName === type   ) );
    const failed =()=> ( (! ge ) || ( ge.nodeName === "BODY" ) );
    while (! match( ge ) ) {
        if ( failed() ) {
            console.warn( "Unable to locate PRE element" );
            return ( null );
        }
        ge = ge.previousElementSibling;
    }
    return ( ge );
}

function locate_above_preview( sender ) {
    return locate_above_sibling( "PRE", sender );
}

function locate_above_editor( sender ) {
    return locate_above_sibling( "TEXTAREA", sender );
}

function copy_above_preview( sender ) {
    try {
        const vw = locate_above_preview( sender );
        if (! vw ) {
            throw new Error( "No prior PRE element was found" );
        }
        if ( "function" === typeof node ) {
            node.flash( vw );
        }
        write_clipboard( vw.innerText );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

function copy_above_editor( sender ) {
    try {
        const ed = locate_above_editor( sender );
        if (! ed ) {
            throw new Error(
                "No prior TEXTAREA element was found"
            );
        }
        if ( "function" === typeof node ) {
            node.flash( ed.value );
        }
        write_clipboard( ed );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

function copy_above_html( sender ) {
    try {
        const buddy = locate_above_any( sender );
        if (! buddy ) {
            throw new Error(
                "No prior sibling element was found"
            );
        }
        if ( "function" === typeof node ) {
            node.flash( vw );
        }
        write_clipboard( buddy.innerHTML );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
}

function write_clipboard( s ) {
    try {
        const old = doc.activeElement;
        const ed = get_ghost_editor();
        ed.value = ( s );
        ed.select();
        ed.focus();
        doc.execCommand( "copy" );
        if ( old ) { old.focus(); }
        message( `Wrote item to clipboard` );
    } catch ( e ) {
        message( e.message );
        console.error( e );
    }
}


/*
 ~~~~~~~~~~~~~~~~~~~~~~~[ List Ops ]~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function pcl( o, sep="\n" ) {
    o = pcl.prep( o );
    return (
        ( o )
        . map( str )
        . filter( ( s ) => ( s ) )
    );
};

pcl.prep = function( o, sep="\n" ) {
    if ( o instanceof Object ) {
        if ( Array.isArray( o ) ) {
            return ( o ).map( str );
        }
        return Object.keys( o ).sort();
    }
    return (
        String( o )
        . split( sep )
    );
};

function filter( o, rex ) {
    o = pcl( o );
    if ( rex = str( rex ) ) {
        rex = new RegExp( rex );
        const match =( k )=> ( rex.test( k ) );
        return ( o ).filter( match );
    }
    return ( o );
};

function seeker( rex, ed ) {
    const our =( k )=> (! iwm.includes( k ) );
    const m = Object.keys( window ).filter( our );
    const v = filter( m, rex ).sort();
    if ( ed instanceof HTMLTextAreaElement ) {
        ed . value = ( v.join( "\n" ) );
        return ( ed );
    } else {
        return ( v );
    }
};

function kahlan( o, rex, ed ) {
    const org =( k )=> ( iwm.includes( k ) );
    const m = Object.keys( window ).filter( org );
    const v = filter( m, rex ).sort();
    if ( ed instanceof HTMLTextAreaElement ) {
        ed . value = ( v.join( "\n" ) );
        return ( ed );
    } else {
        return ( v );
    }
};

function populate_list( items, owner ) {
    const ops = populate_list;
    if (! gad( owner ) ) {
        owner = elx( "UL" );
    }
    let parent = ( owner.parentElement );
    if (! parent ) {
        parent = ops.section();
        parent . appendChild( owner );
    }
    const add =( s )=> {
        const ce = elx( "LI" );
        owner.appendChild( ce );
        ce . textContent = (
            ce . value = str( s )
        );
    };
    owner . innerHTML = "";
    items = pcl( items );
    items . forEach( add );
    return ( owner );
};

populate_list.section = function() {
    let section = (
           gid( "list_section" )
        || gid( "list-section" )
    );
    if (! section ) {
        section = elx( "SECTION" );
        doc.body.appendChild( section );
        section.id = "list_section";
    }
    return ( section );
};

function populate_droplist( items, owner ) {
    const ops = populate_droplist;
    if (! gad( owner ) ) {
        owner = elx( "SELECT" );
    }
    let parent = ( owner.parentElement );
    if (! parent ) {
        parent = ops.section();
        parent . appendChild( owner );
    }
    const add =( s )=> {
        const ce = elx( "OPTION" );
        owner.appendChild( ce );
        ce . textContent = (
            ce . value = str( s )
        );
    };
    owner . innerHTML = "";
    items = pcl( items );
    items . forEach( add );
    return ( owner );
};

populate_droplist.section = function() {
    let section = (
           gid( "droplist_section" )
        || gid( "droplist-section" )
    );
    if (! section ) {
        section = elx( "SECTION" );
        doc.body.appendChild( section );
        section.id = "droplist_section";
    }
    return ( section );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "jsom-combo-api.js" API Module` )
; console.info( `REMINDER : Integrate "enhance_hud()"` )
; console.info( `SEE : RT Sandbox @ Omega Jarvis Desktop"` )
;


/*

</pre>

*/


