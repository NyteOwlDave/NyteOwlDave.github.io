
/*
    parse-config-file.js
    Owl System API
    for ReText Config Files
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function import_config_file( accept, reject, options ) {
    if ( null === localStorage ) {
        throw new Error(
            `The fetch() method isn't supported`
        );
    }
    function oops( e ) {
        console.debug( "Request Failed" , e );
        if ( "function" === typeof reject ) {
            reject( e );
        }
    }
    function cool( s ) {
        console.debug( "Received Payload", s );
        if ( "function" === typeof accept ) {
            accept( s );
        }
    }
    const ops = import_config_file;
    const url = ( ops . url );
    import_config_file . recent = ( url );
    console.debug( "File Request : " , url );
    const req = fetch( url, options );
    ; ( req )
    . then  ( rsp => rsp.text() )
    . then  ( cool )
    . catch ( oops )
    ;
    return ( req );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import_config_file.url = (
  "http://dave-omega/rtj/101/cfg/ReText.conf"
);

import_config_file.recent = ( "" );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function parse_config_file( s ) {
    const result  = {};
    const ignored = [];
    const ignore =( t )=> {
        ignored.push( t );
    };
    function log( k, v ) {
        if ( log.active ) {
            console.debug( k, " := ", v );
        }
    };
    const ops =  parse_config_file
    log . active = ( ops . DEBUG );
    const str =( s )=> String( s || "" ).trim();
    const kvp =( t )=> {
        log( "Parsing", t );
        if ( t.startsWith( "#" ) ) {
            return ignore( t );
        }
        if ( t.startsWith( "[" ) ) {
            return ignore( t );
        }
        const parts = ( t.split( "=" ) );
        if ( parts.length != 2 ) {
            return ignore( t );
        }
        const k = str( parts[ 0 ] );
        const v = str( parts[ 1 ] );
        log( "Parts", parts );
        return { k, v };
    };
    const decode =( line )=> {
        const entry = kvp( line );
        if ( entry instanceof Object ) {
            log( "Entry", entry );
            result[ entry.k ] = entry.v;
        } else {
            log( "Entry", "( ignored )" );
        }
    };
    const lines = qlp( s );
    lines . forEach( decode );
    const report = { lines, result, ignored };
    ops . report = report;
    log( "Decoded Config", report );
    return ( result );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

parse_config_file.DEBUG = ( false );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "parse-config-file.js" API Module` );
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

