
/*

    replace-anchor-decals.js
    Morpheus Gems

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

anchor_decals = {
  R : "🔴"
, G : "🟢"
};

function replace_anchor_decals( verified ) {
    const RED = anchor_decals.R;
    const GRN = anchor_decals.G;
    if ( "string" === typeof verified ) {
        verified = [ verified ];
    }
    const m = find_anchors_by_content( verified );
    function replace( be ) {
        let s = be.innerHTML;
        be.innerHTML = s.replace( RED, GRN );
    }
    m.forEach( replace );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function find_anchors_by_content( list ) {
    const RED = anchor_decals.R;
    const GRN = anchor_decals.G;
    const strlwr =( s )=> ( str( s ).toLowerCase() );
    const m = all( "A" );
    const match =( be )=> {
        let s = ( be.textContent );
        s = s.replace( RED, ""  );
        s = s.replace( GRN, ""  );
        return list.includes( strlwr( s ) );
    };
    list = list.map( strlwr );
    return m.filter( match );
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


