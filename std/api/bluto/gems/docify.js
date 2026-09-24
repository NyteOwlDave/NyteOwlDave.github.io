
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// docify.js
// For Bluto & Morpheus Gems
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type  =( o )=> alert( typeof o    );
ntype =( o )=> alert( o.nodeName  );
ctype =( o )=> alert( o.constructor.name );
clist =( o )=> alert( arr( o.classList ).join( "\n" ) );
cname =( o )=> alert( o.className );
asize =( o )=> alert( o.length    );
osize =( o )=> alert( o.size      );

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

function docify( o ) {
    function __str( o ) {
        if ( "string" === typeof o ) {
            return ( o.trim() );
        }
        if ( o instanceof Function ) {
            return ( o ).toString();
        };
        if ( o instanceof Object ) {
            return jst( o );
        };
        return ( ( o ).toString() );
    }
    const t = [];
    let w, x, y, z;
    const add =( k )=> {
        x = o[ k ];
        y = ( typeof x );
        z = "...";
        r = [ k, __str( x ), y, z ];
        t . push( r );
    };
    const m = Object.keys( o ).sort();
    m . forEach( add );
    return ( t );
}

docify.help = function() {
    const p = "https://nyteowldave.github.io";
    const s = "std/api/bluto/gems";
    const k = "docify-notes.html";
    const u = [ p, s, k ].join( "/" );
    return ( window.open( u, u ) );
};

describe = {
  type, ntype
, ctype, cname, clist
, asize, osize
, hints, docify
};

;
; console.log( `Loaded "docify.js" Gem Module` )
;



 