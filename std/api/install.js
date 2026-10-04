
/*
    install.js
    Morpheus Gems
*/


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
    ops . message( msg );
    if ( "hud" === package ) {
        ops . suggest( "hud-button" );
    }
    return ( se );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

install.packages = {
  "?"   : "https://nyteowldave.github.io/std/api/installer/hud-installer.js"
, "hud" : "https://nyteowldave.github.io/std/api/installer/hud-installer.js"
, "hud-ideas"  : "https://nyteowldave.github.io/std/api/installer/hud-ideas-installer.js"
, "hud-demo"   : "http://dave-omega/demo/web/gems/hud-installer.js"
, "hud-button" : "https://nyteowldave.github.io/std/api/installer/hud-button-installer.js"
, "hud-button-demo" : "http://dave-omega/demo/web/gems/hud-button-installer.js"
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

install.hints = function() {
    const m = Object.keys( install.packages ).sort();
    const t = ( "Installable Packages" );
    m . unshift( `[ ${t} ]\n` );
    window . alert( m.join( "\n" ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

install.inspect = function() {
    const ops = install;
    const t = Object.keys( ops.packages ).sort();
    delete t[ "?" ];
    const g = "[ Installable Packages ]";
    const c = console;
    c.clear();
    c.group( g );
    c.table( t );
    c.groupEnd();
    ops.message( "See Debug Console", true );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

install.suggest = function( package ) {
    const ops = install;
    const cmd = ( `install( '${package}' )` );
    if ( "function" === typeof suggest ) {
        suggest( cmd );
    } else {
        const id = ( "footer_input" );
        const ie = document.getElementById( id );
        if ( ie ) {
            ie . value = ( cmd );
        } else {
            console.warn( `No Footer Input was located` );
        }
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

install.message = function( s, loud ) {
    if ( "function" === typeof message ) {
        message( msg );
    } else {
        console.info( msg );
        if ( loud ) {
            alert( msg );
        }
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "install.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

