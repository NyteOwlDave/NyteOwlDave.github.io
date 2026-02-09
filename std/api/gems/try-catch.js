

const tryCatch = function( a, b ) { 
    try { 
        return a( b );
    }
    catch ( c ) {
        console.error( c );
        return c;
    }
};


console.log( "Loaded try-catch.js API Module" );

