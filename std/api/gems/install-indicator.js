
// Detect Installer Function
// Show Indicator
function install_indicator() {
    const w = ( window );
    if ( "function" === typeof w.install ) {
        const ce = doc . querySelector( "footer" );
        if ( ce ) {
            const st = ce . style;
            st . borderRight = "10px solid #70F0A0E7";
        }
        return;
    }
}

