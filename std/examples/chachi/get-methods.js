
/*

# Get Object's Methods

> get-methods.js
 
schema = {  
   name   :  "Method Name"
,  source :  "Method Source Code"
,  memo   :  "Reserved for Future Description"
}

Note that source code is guaranteed, since all members that are
native code are filtered out. Basically this is for custom code. It's mainly
intended to capture and preserve work done in the browser console.

*/

function getMethods( obj ) {
    const FN = "function";
    const fn = o => ( FN === typeof o );
    const method = k => fn( obj[k] );
    const record = k => ( [ k, obj[ k ].toString(), "(memo)" ] );
    const wanted = o => ( ! o[ 1 ].includes( "[native code]" ) );
    obj = ( obj || window );
    return Object
         . keys  ( obj    )
         . filter( method )
         . map   ( record )
         . filter( wanted )
         . sort();
}

