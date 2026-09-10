
/* interpreter-lite.js */


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// mine.js

function mine( ev ) {
    ev . preventDefault();
    ev . stopPropagation();
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// action.js

function action( event ) {
    return action.lite( event );
}

action.lite = function( event ) {
    const ops = action;
    try {
        mine( ops.event = event );
        const sender = event.target;
        const attrib =( k )=> sender.getAttribute( k );
        run( attrib( "action" ) );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// perform.js

function perform( event ) {
    return perform.lite( event );
}

perform.lite = function( event ) {
    const ops = perform;
    try {
        mine( ops.event = event );
        const sender = event.target;
        run( sender.value );
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// run.js

function run( js ) {
    return run.lite( js );
}

run.lite = function( js ) {
    const ops = run;
    try {
        const cmd = str( js );
        if ( macro( cmd ) ) { return; }
        console.debug(
            window.eval( js )
        );
    } catch ( e ) {
        alert ( e );
        console.error ( e );
    }
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// macro.js

function macro( cmd ) {
    return macro.lite( cmd );
}

macro.lite = function( cmd ) {
    const ops = macro;
    try {
        cmd = str( cmd );
        if (! cmd ) { return true; }
        if ( "function" === typeof incomplete ) {
	        incomplete( `macro()` );
	   	}
    } catch ( e ) {
        alert ( e );
        throw ( e );
    }
    return ( false );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "interpreter-lite.js" Gem` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


