
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
  "?"   : "https://nyteowldave.github.io/std/api/installer/hud-installer.js"
, "hud" : "https://nyteowldave.github.io/std/api/installer/hud-installer.js"
, "hud-demo" : "http://dave-omega/demo/web/gems/hud-installer.js"
};

install.inspect = function() {
    const t = Object.keys( install.packages ).sort();
    delete t[ "?" ];
    const g = "[ Installable Packages ]";
    const c = console;
    c.clear();
    c.group( g );
    c.table( t );
    c.groupEnd();
    alert( "See Debug Console" );
};

;
; console.log( `Loaded "install.js" API Module` )
;

