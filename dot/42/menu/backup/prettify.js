// [Workspace](./)

/*
    prettify-json.js
    Format a JSON File for Editing
    2025-JUL-31
*/

const fs = require( "fs" );

async function load( path ) {
    return await fs.readFileSync( fname );
}


// fname = process.argv[0] || "sample.json";
// console.log( fname );

// fname = process.argv[1] || "sample.json";
// console.log( fname );

fname = process.argv[2] || "sample.json";
// console.log( fname );

function prettify( buf ) {
    let s = String( buf );
    s = JSON.stringify( JSON.parse( s ) , null, 2 );
    console.log( s );
}

load( fname ).then( prettify );

