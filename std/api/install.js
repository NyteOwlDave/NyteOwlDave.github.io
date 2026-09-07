
/*
    install.js
    Morpheus Gems
*/

function install( package ) {
    const ops = install;
    const packages = ops.packages;
    const u = (
        packages[ package ] || packages[ "?" ]
    );
    const doc = document;
    const se = doc.createElement( "SCRIPT" );
    doc . body . appendChild( se );
    se . src = ( u );
    const msg = ( `Installing package "${package}"` );
    if ( "function" === typeof message ) {
        message( msg );
    } else {
        console.info( msg );
    }
    return ( se );
};

install.packages = {
  "?"   : "http://dave-omega/demo/web/gems/hud-installer.js"
, "hud" : "http://dave-omega/demo/web/gems/hud-installer.js"
};

;
; console.log( `Loaded "install.js" API Module` )
;

