
/* 
    Reggie Lite
    API Module Registration Example
    reggie-lite.js
*/

let ReggieLite = {};


ReggieLite.state = {
    modules : []
,   notes   : []
};


ReggieLite.decals = ( `
🆘 | Warning
🧝 | Hint
` );

ReggieLite.decals.schema = ( 
[ "Decal" , "Meaning" ]
);


ReggieLite.members = ( `
state        | object | Registered Item Lists
decals       | string | Core Document for Decals
members      | string | Core Document for Reggie's Members
define       | method | Register a Global Code Symbol
describe     | method | Register a Global Core Document
explain      | method | Show a Global Core Document in the Console
hint         | method | Show Hint Message in Console
wrongType    | method | Throw Type Error with Expected Type Warning
hasAppMethod | method | Verify AppModule object and method exist
` );

ReggieLite.members.schema = ( 
  [ "Name" , "Type", "Description" ]
);


ReggieLite.wrongType = function( o, expects ) {
    console.warn( "🆘 Expected type" , ":" , expects );
    throw new TypeError( o );
};


ReggieLite.hint = function( msg ) {
    console.log( "🧝 HINT", ":" , msg );
};


ReggieLite.define = function( typeName, o ) {
    let we = ReggieLite;
    let mods = we.state.modules;
    if ( "object" !== typeof o ) {
        we.wrongType( o, "Object" );
    }
    if ( "string" !== typeof typeName ) {
        we.wrongType( type, "String" );
    }
    mods.push( [ typeName, o ] );
    if ( we.hasAppMethod( "add" ) ) {
        AppModules.add( type, o );
    } else {
        we.hint( "Consider defining AppModules.add() method" );
    };    
};


ReggieLite.describe = function( o ) {
    let we = ReggieLite;
    let notes = we.state.notes;
    if ( "object" !== typeof o ) {
        we.wrongType( o, "Object" );
    }
    notes.push( o );
    if ( we.hasAppMethod( "add" ) ) {
        AppModules.add( type, o );
    } else {
        we.hint( "Consider defining AppModules.doc() method" );
    }; 
};


ReggieLite.hasAppMethod = function( method ) {
    if ( "object" === typeof AppModules ) {
        return ( 
            "function" === typeof AppModules[ method ] 
        );
    }
    return false;
};


;(()=>{

function register() {
    let r = ReggieLite;
    r.define( "Object", { ReggieLite } );
    r.describe( 
        { "Reggie Lite Members" : ReggieLite.members }
    );
    r.describe( 
        { "Reggie Lite Decals" : ReggieLite.decals }
    );
}

if ( "object" === typeof ReggieLite ) {
    addEventListener( "load", register );
}

}) ();


console.log( 'Ⓜ️', 'Loaded reggie-lite.js API Module' );

/*
    Updated ~ 2026-FEB-10 ~ Legacy
*/
