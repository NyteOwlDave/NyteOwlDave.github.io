
/*

    write-clipboard.js

*/

function write_clipboard( value ) {
    const con = console;
    const doc = document;
    const elx =( t )=> ( doc.createElement( t ) );
    const ed = elx( "TEXTAREA" );
    doc.body.appendChild( ed );
    ed.style.opacity = "0";
    ed.value = String( value || "" );
    ed.select();
    ed.focus();
    doc.execCommand( "copy" );
    doc.body.removeChild( ed );
    con.info( `📋 Copied to Clipboard` );
}

