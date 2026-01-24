
/*

| rico.js           |
|-------------------|
| @ api / just      |
| @ Tilly           |
| Legacy Edition    |
| 2025-NOV-12       |

*/

rico = function( v, k, t ) {
    doc = document;
    ella = t => doc.createElement( t );
    jsn = o => JSON.stringify( o, 0, 2 );
    v = ( v || jsn( localStorage ) );
    t = ( t || "text/plain" );
    o = { type : t };
    b = new Blob( [ v ], o );
    a = ella( "A" );
    a.href = URL.createObjectURL( b );
    a.title = "Rico Download";
    a.download = ( k || "rico-download.json" );
    a.click();
    URL.revokeObjectURL( a.href );
    return { 
        anchor  : a ,
        blob    : b ,
        options : o ,
        api     : { doc, jsn, ella }
    };
}

