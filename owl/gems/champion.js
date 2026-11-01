
/*
	champion.js
	Owl System Gems
*/

function champion( event ) {
    if ( champion . enabled ) {
        const ge = event.target;
        if ( ge.nodeName === "A" ) {
            mine( event );
            alert( ge.href );
        }
    };
}
champion.enabled = true;
addEventListener( "click", champion );

