
/*

    perform.js

    Interpret Input Value as Macro or JavaScript Expression

*/

function perform( event ) {
    try {
        const ge = event.target;
        const ip = ge.value.trim();
        if (! ip ) { return; }
        if ( "function" === typeof macro ) {
            if ( macro( ip ) ) { return; }
        }
        const op = exec( ip );
        console  . log ( op );
    } catch ( e ) {
        console . error ( e );
        window  . alert ( e );
    }
}
