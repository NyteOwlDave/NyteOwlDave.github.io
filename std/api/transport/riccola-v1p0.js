
/*
    riccola-v1p0.js
*/

function blob( source, opts ) {
    text = blob.read_value( source );
    opts = ( opts || blob.options );
    return new Blob( [ text ], opts );
}

blob.options = {
  type    : "text/plain"
, charset : "utf-8"
};

blob.read_value = function( source ) {
    const _SI = Symbol.iterator;
    const o = source;
    if ( o instanceof HTMLElement ) {
        switch ( o.nodeName ) {
        case "TEXTAREA":
        case "INPUT":
            return o.value;
        case "PRE":
            return o.innerText;
        default:
            return o.innerHTML;
        }
    }
    if ( o instanceof Function ) {
        return o.toString();
    }
    if ( o instanceof Object ) {
        if ( o[ _SI ] ) {
            o = Array.from( o );
        }
        if ( Array.isArray( o ) ) {
            return o.join( "\n" );
        }
        return JSON.stringify( o, null, 2 );
    }
    return String( o );
};

function obj_url( source, opts ) {
    return URL.createObjectURL( blob( source, opts ) );
}

function obj_anchor( filename, source, options ) {
    const ops = obj_anchor;
    const a = elx( "A" );
    a.download = ( filename || ops.filename );
    a.href = obj_url( source, options );
    return ( a );
}

obj_anchor.filename = ( `ricolla.txt` );

function riccola( filename, text, opts ) {
    try {
        const a = obj_anchor( filename, text, opts );
        a.click();
        URL.revokeObjectURL( a.href );
    } catch ( e ) {
        console . error ( e );
        window  . alert ( e );
    }
}


;
; console.info( `Ⓜ️ Loaded "riccola-v1p0.js" API Module` )
;


