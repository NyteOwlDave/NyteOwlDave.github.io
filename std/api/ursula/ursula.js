
con = console;
doc = document;
jsn = JSON;
stg = localStorage;
wnd = window;

jst =( o )=> ( jsn.stringify( o, null, 2 ) );
jso =( t )=> ( jsn.parse( t ) );
jsp =( t )=> ( jst( jso( t ) ) );

str =( o )=> ( String( o || "" ).trim() );
arr =( o )=> ( Array.from( o || [] ) );
unq =( o )=> ( new Set( o || [] ) );

let Peaches = {};

const PeachOps = {
  STORE_KEY : "ursula-peaches.json"
};

PeachOps.persist = function() {
    let k = PeachOps.STORE_KEY;
    let v = jst( Peaches );
    stg.setItem( k, v );
}

PeachOps.recover = function() {
    let k = PeachOps.STORE_KEY;
    let v = stg.getItem( k );
    if ( null === v ) {
        return PeachOps.persist();
    }
    Peaches = jso( v );
};

let ScriptStack = [];

const ScriptStackOps = {
  STORE_KEY : "ursula-script-stack.json"
};

ScriptStackOps.persist = function() {
    let k = ScriptStackOps.STORE_KEY;
    let v = jst( ScriptStack );
    stg.setItem( k, v );
};

ScriptStackOps.recover = function() {
    let k = ScriptStackOps.STORE_KEY;
    let v = stg.getItem( k );
    if ( null === v ) {
        return ScriptStackOps.persist();
    }
    ScriptStack = jso( v );    
};

function persist() {
}

function recover() {
}

function manifest() {
}

manifest.apply = function( man ) {}

function zoom( ed ) {
    ed.requestFullscreen();
    ed.focus();
}

function exec( ed ) {
    window.eval( ed.value );
}

function exchange( ed ) {
    let old = ed.value;
    let ed.value = str( ed.memo );
    ed.memo = old;
    ed.classList.toggle( "memo" );
}

function rawManuscript() {
    let agent  = navigator.userAgent;
    let source = location.href;
    let origin = location.origin;
    let when = (new Date()).toLocaleString();
    let man = { agent, sounrce, origin, when };
    return ( man );
}

function editorState( ed ) {
    let id    = str( ed.id    );
    let title = str( ed.title );
    let value = str( ed.value );
    let memo  = str( ed.memo  );
    let style = str( ed.style );
    return { id, title, value, memo, style };
}

function persistEditor( ed ) {
    let key = inputStoreKey( ed.storeKey );
    if ( key ) {
        let man = rawManuscript;
        man.editor = editorState( ed );
        stg.setItem( key, jst( man ) );
    }
}

function recoverEditor( ed ) {
}
