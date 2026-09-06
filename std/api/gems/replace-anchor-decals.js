
/*

    replace-anchor-decals.js
    Morpheus Gems

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

led_color_decals = {
  RD : "🔴"
, GR : "🟢"
, YW : "🟡"
, OR : "🟠"
, BL : "🔵"
, MG : "🟣"
, BR : "🟤"
, BK : "⚫"
, WT : "⚪"
};

function replace_anchor_decals( verified=[], type="A" ) {
    const RED = led_color_decals.RD;
    const GRN = led_color_decals.GR;
    if ( "string" === typeof verified ) {
        verified = [ verified ];
    }
    const m = find_anchors_by_content( verified, type );
    function replace( be ) {
        let s = be.innerHTML;
        be.innerHTML = s.replace( RED, GRN );
    }
    m.forEach( replace );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function find_anchors_by_content( list=[], type="A" ) {
    const RED = led_color_decals.RD;
    const GRN = led_color_decals.GR;
    const strlwr =( s )=> ( str( s ).toLowerCase() );
    const m = all( str( type ) || "A" );
    const match =( be )=> {
        let s = ( be.textContent );
        s = s.replace( RED, ""  );
        s = s.replace( GRN, ""  );
        return list.includes( strlwr( s ) );
    };
    list = arr( list ).map( strlwr );
    return m.filter( match );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function remove_anchor_decals( list=[], type="A" ) {
    const LED = led_color_decals;
    if ( "string" === typeof list ) {
        verified = [ list ];
    }
    const m = find_anchors_by_content( list, type );
    function replace( be ) {
        let s = ( be.textContent );
        LED.forEach(
            ( color ) => {
                s = s.replace( color, "" );
            }
        );
        be.textContent = ( s );
    }
    m.forEach( replace );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

replace_anchor_decals.example = ( `

// Example List of Verified Links
verified_buttons = [
  "Primary"
, "Tick-Tick"
, "Cloud Notepad"
, "Express Lane"
];


// Example Dynamic Anchor Updates
addEventListener( "load", (e)=> {
    try {
        replace_anchor_decals( verified_buttons );
    } catch ( e ) {
        console.error( e );
        alert( e );
    }
} );

` );

replace_anchor_decals.edit_example = function( ed ) {
    ed.value = replace_anchor_decals.example;
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "replace-anchor-decals.js" Gem Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


