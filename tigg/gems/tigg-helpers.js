
PEACH_KEY = ( `tigg-helpers.js` );

// Edit Store Keys
function keez() {
   stash();
   sip.value = jst( dir() );
};

// Edit Store as JSOM
function jsom() {
   stash();
   sip.value = jst( localStorage );
};

// Save Peach to Store Entry
function keep() {
   stash();
   const s = ( localStorage );
   const k = ( PEACH_KEY );
   const v = ( sip.memo  );
   s.setItem( k, v );
   console.log( `Write "${k}" to Store` );
   
};

// Write Editor Value to Memo
function stash( override ) {
    if ( override || (! sip.stashed) ) {
       sip.memo = sip.value;
       sip.stashed = ( true );
    } else {
       console.warn( "SIP Content is ALREADY Stashed" );
       console.info( "Try again with override argument" );
    }
}

// Read Editor Value from Memo
function remind( override ) {
    if ( override || sip.stashed ) {
       sip.value = sip.memo;
       sip.stashed = ( false );
    } else {
       console.warn( "SIP Content is NOT Stashed" );
       console.info( "Try again with override argument" );
    }
}

;
; ( op = 1 )
; ( op === 1 ) ? keep()
: ( op === 2 ) ? keez()
: ( op === 3 ) ? jsom()
: console.log( "Ready!" )
;

