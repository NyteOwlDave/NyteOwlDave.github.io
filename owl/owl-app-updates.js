
/*

    owl-app-updates.js

    EXAMPLE : notes-menu.html

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function updated() {
    const ge = updated.gadget();
    const entry = updated.read();
    const when = str( ge . textContent );
    if (! when ) {
        alert( "Can't be empty!" );
        return;
    }
    ge . textContent = ( when );
    m[ document.title ] = ( when );
    updated.write( m );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; updated.key = "owl-app-updates.json"
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

updated.gadget = function() {
    const id = ( "updated_when" );
    const ge = document.getElementById( id );
    if ( ge ) { return ( ge ); }
    throw new Error( `Missing Gadget ID : "${id}"` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

updated.read = function() {
    if ( null === localStorage ) {
        alert( "Browser Store isn't Available" );
        return;
    }
    function oops() {
        throw new Error(
            `Expected Store Entry to be an Object`
        );
    }
    const o = localStorage;
    const k = ( updated.key );
    let v = o . getItem( k );
    let m;
    if ( null === v ) {
        m = {};
    } else {
        m = JSON.parse( v );
    }
    if (! m instanceof Object ) {
        return oops();
    }
    if ( Array.isArray( m ) ) {
        return oops();
    }
    return ( m );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

updated.write = function( entry ) {
    if ( null === localStorage ) {
        alert( "Browser Store isn't Available" );
        return;
    }
    let v = entry;
    if ( v instanceof Object ) {
        v = JSON.stringify( m, null, 2 );
    } else if ( "string" !== typeof v ) {
        throw new Error( `Expect JSON or Object` );
    }
    const o = localStorage;
    const k = ( updated.key );
    s . setItem( v );
    console . info( `Modified Owl Updates Store Entry` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

updated.inspect = function() {
    const m = updates.read();
    const t = ( "Owl Updates" );
    function table( m ) {
        const u = Object.keys( m );
        const record =( k )=> {
            return ( [ k, m[ k ] ] );
        }
        return m.map( record );
    }
    const c = console;
    c.clear();
    c.group( `〖 ${t} 〗` );
    c.table( table( m ) );
    c.groupEnd();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// NOTE : Call this @ page load
updated.restore = function() {
    if ( null === localStorage ) {
        return;
    }
    const ge = updated.gadget();
    const entry = updated.read();
    const k = document.title;
    const v = str( entry[ k ] );
    if ( v ) {
        ge . textContent = ( v );
    }
    console . info( `Restored Update Value` );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "owl-app-updates.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

