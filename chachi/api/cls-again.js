


//[ cls ]
// Clear Debug Console
const cls = () => console.clear();


//[ again ]
// Reload Page
const again = () => location.reload();


//[ CoreDebugHelpers ]
// Accessor
const CoreDebugHelpers = { cls, again };


//[ CoreDebugHelpers.details ]
// Module Details
CoreDebugHelpers.details = {
    tikey   : "cc1e33a9-907e-456a-846d-d95cc946b6c6",
    tidate  : "4/18/2025",
    decal   : "🐝",
    title   : "Core Debug Helpers",
    version : "1.4.2",
    home    : "http://dave-legacy/42/api/gems/cls-again.js"
};


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

} ) ( CoreDebugHelpers );

