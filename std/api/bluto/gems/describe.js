
/* describe.js */

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

;
; console.log( `Loaded "describe.js" Gem Module` )
;