
/* 
    jarvis.js
    2025-JUN-19

    Jarvis is an documentation building tool for web pages.

    At this point, it's sole feature is the ability to extract inner text
    from some list of gadgets (HTML elements).

*/

function jarvis( query ) {
    const batch = document.querySelectorAll( query );
    const list = Array.from( batch );
    return list.map( o => o.textContent.trim() );
}



// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "jarvis",  { jarvis } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'coredoc.js' );
}

