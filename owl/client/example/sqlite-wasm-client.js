
/*

sqlite-wasm-client.js

*/


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

sqlite = {};
sqlite . db = ( null );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

sqlite.init = function() {

    // Initialize the WASM module loader
    const req = ( window . sqlite3InitModule() );
    ; ( req )
    . then( function( sqlite3 ) {

        // Create an in-memory database
        sqlite . db = new sqlite3.oo1.DB();

        console.log( "Intialized SQL List Database" );

    } )
    ;
    return ( req );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function test_01() {
    const ops = sqlite;
    const test =()=> {
        const db = ops . db;
        // Execute basic operations
        db . exec( "CREATE TABLE items(A, B)" );
        db . exec( "INSERT INTO items VALUES(1, 2), (3, 4)" );
        // Query results
        const records = db.exec(
            "SELECT * FROM items"
          , { returnValue : "resultRows" }
        );
        db . exec( "DROP TABLE items" );
        const title = "Test #01 Results";
        const schema = [ "A", "B" ];
        tables . add( records, schema, title );
    }
    if (! ops . db ) {
        ops . init() . then( test );
    } else {
        test();
    }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function init_editor( ed ) {
    ed . run  =()=> exec( ed.value );
    ed . zoom =()=> zoom( ed );
    const cl = ed.classList;
    cl . add( "siox" );
    const st = ed.style;
    st . borderTopLeftRadius = "12px";
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function perform( event ) {
    try {
        const sender = event.target;
        sender . prior = str( sender.value );
        if (! sender.recall ) {
            sender.recall = function() {
                this.value = str( this.prior );
            };
        }
        exec( sender.value );
    } catch ( e ) {
        bummer( e );
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function exec( js ) {
    const ops = exec;
    try {
        if ( ops.macro( js ) ) { return; }
        exec.gems.add( js );
        window.eval( js );
    } catch ( e ) {
        bummer( e );
    }
}

exec.gems = {};
exec.gems . items = ( new Set() );

exec.gems . add =( s )=> {
    exec.gems.items.add( s );
};

exec.gems . count = function( s ) {
    return ( exec.gems.items.size );
};

exec.gems . list = function() {
    const ops = exec.gems;
    return arr( ops.items ).sort();
};

exec.gems . json = function() {
    const ops = exec.gems;
    return jst( ops.list() );
};

exec.macro = function( cmd ) {
    cmd = str( cmd );
    if (! cmd ) { return true; }
    const token = cmd.slice( 0, 1 );
    const args  = cmd.slice( 1 ).trim();
    switch ( token ) {
    case "?" : return _help();
    case "@" : return _visit( args );
    }
    function _help() {
        const p = "https://nyteowldave.github.io";
        const s = "owl/notes";
        const k = "owl-concept.pdf";
        const u = psk( p, s, k );
        visit( u );
        return ( true );
    }
    function _visit( url ) {
        visit( url );
        return ( true );
    }
    return ( false );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function visit( u ) {
    if ( null === localStorage ) {
        return wap( u );
    } else {
        return wop( u );
    }
}

visit.popup = function( u ) {
    const o = (
        "width=800,height=680,left=10,top=10,popup=true"
    );
    window.open( u, u, o );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function hints( o , title ) {
    const t = ( str( title ) || "Items" );
    const m = hints.prep( o );
    m . unshift( `〖 ${t} 〗\n` );
    window.alert( qlc( m ) );
}

hints.prep = function( o ) {
    if ( o instanceof Object ) {
        if ( "function" === typeof o ) {
            return [ String( o ) ];
        }
        if ( Array.isArray( o ) ) {
            return ( o ).map( str ).filter( nop );
        }
        return ( mem( o ) );
    }
    if ( "string" === typeof o ) {
        return ( qlp( o ) );
    }
    return [ String( o ) ];
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function zoom( ge ) {
    try {
        ge . requestFullscreen();
        ge . focus();
    } catch ( e ) {
        bummer( e );
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function say( s ) {
    const ge = gid( "messages" );
    ge.textContent = str( s );
    return ( s );
}

function bummer( e ) {
    console.error( e );
    say( e.message );
    return ( e );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function suggest( s ) {
    const ge = gid( "footer_input" );
    ge . value = str( s );
}

suggestions = [
   "test_01()"
];

suggest.count = function() {
    const ideas = suggestions;
    say( `Total Suggestions : ${ideas.length}` );
};

suggest.item = function( index ) {
    const ideas = suggestions;
    const i = parseInt( index );
    const s = ideas[ i ];
    if ( s ) {
        suggest( s );
    } else {
        say( `Suggestion Index is Out of Range` );
    }
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function on_page_load( event ) {
    try {
        if ( "function" === typeof main ) {
            main( event );
        }
        suggest.item( 0 );
        say( doc . title );
    } catch ( e ) {
        bummer( e );
    }
}

addEventListener( "load", on_page_load );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "sqlite-wasm-client.js" Application Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

