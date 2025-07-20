
const json = o => JSON.stringify( o, null, 2 );

function zara( o ) {
    const obj = o => ( o instanceof Object );
    const plunge = key => {
        o[ key ] = prep( o[ key ] );         
    };
    if ( obj( o ) ) {
        const keys = Object.keys( o );
        keys.forEach( plunge );
        return json( o );
    }
    return prep( o );
}

function prep( o ) {
    const SI = Symbol.iterator;
    const FN = "function";
    const arr = o => Array.isArray( o );
    const act = o => ( FN === typeof o );
    const obj = o => ( o instanceof Object );
    const err = o => ( o instanceof Error );
    const evt = o => ( o instanceof Event );
    const itr = o => ( obj( o ) && act( o[ SI ] ) );
    if ( obj( o ) ) {
        if ( evt( o ) ) { return `Event: ${o.type}`};
        if ( err( o ) ) { return `Error: ${o}`};
        if ( arr( o ) ) { return json( o ); }
        if ( itr( o ) ) { return prep( Array.from( o ) ); }
        return zara( o );
    }
    if ( act( o ) ) return String( o );
    return o;
}

const PrepDoc = `
prep | Prepare an object for display as plain text
zara | Helper for recursive formatting
json | Format object as JSON
`;

// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "Function", { prep } );
        add( "Function", { zara } );
        add( "Function", { json } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { PrepDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'prep.js' );
}
