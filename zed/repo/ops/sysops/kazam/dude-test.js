
/*

> [Vulcan](./)

*/

dude={};

dude.prep=function(o){
    let isArray=(o)=>Array.isArray(o);
    let isObject=(o)=>(o instanceof Object);
    let isSymbol=(o)=>(o instanceof Symbol);
    let isMethod=(o)=>(o instanceof Function);
    let isIter=function(o) {
        return (
               ( isObject( o ) )
            && ( isMethod( o[ Symbol.iterator ] ) )
        );
    }
    let isStore=function(o) {
        return (
               ( isObject( o ) )
            && ( isMethod( o.constructor ) )
            && ( o.constructor.name === "Storage" )
        );
    }
    if ( isObject( o ) ) {
        if ( isIter( o ) ) {
            o = Array.from( o );
        }
        if ( isArray( o ) ) {
            return o.map(v=>sip.prep(v));
        } else if ( isStore( o ) ) {
            return sip.storeKeys( o );
        } else {
            return sip.keys( o );
        }
    }
    return String( s );
};

dude.entries=function(o,limit) {
    let keys = dude.keys( o, limit );
    return (
        keys.map(
            k => {
                let v = ( o[ k ]   );
                let t = ( typeof v );
                return [ t, k, dude.prep( v ) ];
            }
        )
    );
};

dude.keys=function(o,limit) {
    limit=Math.min(Math.max(limit||420,1),420);
    let keys=Object.keys( o );
    keys.length=(Math.min(keys.length,limit));
    return ( keys );
};

if ( "undefined" === typeof sop ) {
    sop = {};
}

sop.value = dude.entries( dude );

console.table( sop.value );


