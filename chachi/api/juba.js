
/* 

# Juba API Module

- Alias `Jubilee Pico` from X3A
- [Workspace](./)


*/


//[ Juba ]
const Juba = {};


//[ Juba.entry ]
Juba.entry = ( o ) => {
    const me = Juba;
    let key = o[ 0 ];
    let val = o[ 1 ];
    let typ = typeof val;
    if ( typ === "function" ) {
         val = ( val.toString() || "(()=>null)" );
    } else {
         val = JSON.stringify( val );
    }
    return JSON.stringify( [ typ, key, val ], null, 2 );
}


//[ Juba.json ]
Juba.json = api => {
    const me = Juba;
    const keys = Object.entries( api );
    return keys.map( o => me.entry( o ) );
}


//[ Juba.slurp ]
Juba.slurp = api => {
    const me = Juba;
    const D = document;
    const fid = id => D.getElementById( id );
    const edt = o => ( o.nodeName === 'TEXTAREA' );
    const elm = o => ( o instanceof HTMLElement  );
    const sip = fid( 'sip' );
    if ( edt( sip ) ) {
        sip.value = me.json( api );
        return sip;
    }
    const gip = fid( 'gip' );
    if ( elm( gip ) ) {
        gip.innerText = me.json( api );
        return gip;
    }
    let bar = fid( 'status-bar' );
    if ( elm( bar ) ) {
        bar.innerText = me.json( api );
        return bar;
    }
    bar = fid( 'footer' );
    if ( elm( bar ) ) {
        if ( bar.firstElementChild ) {
            const baby = D.createElement( 'div' );
            baby.innerText = me.json( api );
            bar.appendChild( baby );
            bar = baby;
        } else {
            bar.innerText = me.json( api );
        }
        return bar;
    }
    return { json : me.json( api ) };
};


// decalDef
Juba.decalDef = [ 
    "🥈" ,              // decal
    "[ 129352 ]" ,      // codepoint
    "Jubilee Femto"     // description
];


// keyDef
Juba.keyDef = [
    Juba.decalDef[ 0 ] ,                        // decal
    "112f0a2d-c742-4e0e-8f64-3cf1a5e2f1af" ,    // tikey
    "4/9/2025"                                  // tidate
];


// keys
Juba.keys = {
    tikey : Juba.keyDef[ 1 ]
,   aikey : "💢 Pending" 
,   wbkey : "💢 Pending" 
,   nbkey : "💢 Pending" 
};


// linkDef
Juba.linkDef  = {
    scheme    : "http" ,
    host      : "dave-legacy" ,
    path      : "x3a/api"     ,
    file      : "juba" ,
    extension : "js" ,
    mime      : "text/javascript" ,
    charset   : "utf-8" ,
    tikey     : Juba.keyDef[ 1 ] ,
};


// details
Juba.details = {  
    decal   : "🥈" , 
    id      : "juba" ,
    title   : "Jubilee Femto" , 
    date    : "2025-APR-21"   , 
    version : "2.0.0" , 
    tikey   : Juba.keyDef[ 1 ]
};


// friends
Juba.friends = [
    "X3A" , "Transcenders Three Amigas" ,
    "Transcenders" , "Ascenders" ,
    "Three Amigas Noteboook" ,
    "Quark" , "Tigger" , "TiGG"
];


// manifest
Juba.manifest = {};


// IIFE for Manifest
;( m => { 

m.title = Juba.details.title;

m.schema = [
    "Member", "Type", "Description"
];

m.doc = `
Juba      | Object   | Module Accessor
entry     | Function | List of Member Properties [ key, type, value ]
json      | Function | Compose API as JSON Document
slurp     | Function | Compose as JSON and Assign to Editor Gadget
decalDef  | Array    | List of Decal Properties [ decal, codepoint, description ]
keyDef    | Array    | List of Module Key Properties [ decal, tikey, tidate ]
keys      | Object   | Map of Module Resource Key/Value Pairs
linkDef   | Object   | Map of Home URL Key/Value Pairs
details   | Object   | Map of Module Details Key/Value Pairs
friends   | Array    | List of Friend Names
manifest  | Object   | Module Manifest { title, schema, doc }
`;

} ) 
( Juba.manifest );


// IIFE for App Registration
;( we => { 

    const title = we.details.title;
    let registered = false;

    if ( "object" === typeof AppModules ) {
        const add = AppModules.add;
        if ( "function" === typeof add ) {
            add( title, we );
            registered = true;
        }
    }

    if ( registered ) {
        console.log( "🪪", "Registered" , title )
    } else {
        console.log( "👋", "Loaded" , title )
    }

} ) 
( Juba );

