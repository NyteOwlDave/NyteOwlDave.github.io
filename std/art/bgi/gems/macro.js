
/*

    macro.js

    Interpret String as Macro

    Return FALSE if it's not a Macro

    NEEDS : [ "str", "dot", "dot.visit" ]

*/


function macro( cmd ) {
    try {
        cmd = str( cmd );
        const pfx = cmd.charAt( 0 );
        cmd = str( cmd.slice( 1 ) );
        if ( "." === pfx ) {
            dot( cmd );
            return true;
        }
        if ( "@" === pfx ) {
            dot.visit( cmd );
            return true;
        }
    } catch ( e ) {
        console . error ( e );
    } finally {
        console.debug( `TODO ~ Finish Macro Interpreter` );
    }
    return ( false );
}

