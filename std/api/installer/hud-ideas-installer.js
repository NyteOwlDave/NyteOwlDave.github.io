
/*
    hud-installer.js
    Morpheus Edition
*/

( ()=> {

const doc = ( document   );
const boo = ( doc . body );

const gid =( i )=> ( doc . getElementById( i ) );
const elx =( t )=> ( doc . createElement ( t ) );

const hud_ideas_script = (
  "https://nyteowldave.github.io/std/api/hud-editor-ideas.js"
);

function install_script( url) {
    const se = elx( "SCRIPT" );
    boo . appendChild( se );
    se . src = ( url );
    console.info( "Requested HUD Ideas API Module" );
    return ( se );
};

install_script( hud_ideas_script );

create_sce();

} )( );

;
; console.log( `Loaded "hud-ideas-installer.js" API Module` )
;

