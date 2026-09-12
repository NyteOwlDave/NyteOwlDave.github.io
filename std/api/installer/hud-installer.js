
/*
    hud-installer.js
    Morpheus Edition
*/

( ()=> {

const doc = document;
const gid =( i )=> doc.getElementById( i );
const elx =( t )=> doc.createElement( t );

const hud_script = (
  "https://nyteowldave.github.io/std/api/hud.js"
);

const hud_style = ( `
.hud {
    z-index    : 99999;
    box-sizing : border-box;
    outline    : none;
    border     : none;
    margin     : 0;
    padding    : 0.5ch 1.2ch;
    position   : fixed;
    left       : 1px;
    top        : 45px;
    width      : calc( 100vw - 19px  );
    height     : calc( 50vh );
    max-height : calc( 100vh - 102px );
    font       : 13pt monospace;
    resize     : vertical;
    overflow   : scroll;
    tab-size   : 4;
}
.hud ,
.hud:hover ,
.hud:focus {
    background : mintcream;
    color : midnightblue;
}
.hide {
    display : none !important;
}
` );

function install_script( url) {
    const se = elx( "SCRIPT" );
    doc . body . appendChild( se );
    se . src = ( url );
    console.info( "Requested HUD API Module" );
    return ( se );
};

function create_style( css ) {
    const se = elx( "STYLE" );
    doc . body . appendChild( se );
    se . innerText = ( css );
    console.info( "Created HUD Style" );
    return ( se );
}

function create_sce() {
    const id = "sce";
    let ed = gid( id );
    if (! ed ) {
        ed = elx( "TEXTAREA" );
        ed . id = ( id );
        doc . body . appendChild( ed );
    }
    ed . classList . add( "hide" );
    ed . classList . add( "hud"  );
    ed . setAttribute( "wrap", "off" );
    ed . spellcheck = false;
    console.info( "Created HUD Editor" );
}

create_style( hud_style );

install_script( hud_script );

create_sce();

} )( );

;
; console.log( `Loaded "hud-installer.js" API Module` )
;

