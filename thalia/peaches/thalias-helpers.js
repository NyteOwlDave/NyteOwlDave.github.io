
THALIA_MORPHEUS = (
  "https://nyteowldave.github.io/thalia/thalia.html"
);

THALIA_MORPHEUS_PEACHES = (
  "https://nyteowldave.github.io/thalia/peaches"
);

// + PEACH_KEY | Key for Browser Store
PEACH_KEY = ( `thalias-helpers.js` );

// RS ? | Row Separator Token
RS = "\n";

// + str | Create Trimmed String
// + arr | Create New Array from Iterable
// + unq | Create New Set from Iterable

str =( o )=> String( o || "" ).trim();
arr =( o )=> Array.from( o || [] );
unq =( o )=> ( new Set( o || [] ) );

// + con | Alias console
// + doc | Alias document
// + stg | Alias localStorage
// + wnd | Alias window

con = console;
doc = document;
stg = localStorage;
wnd = window;

// + elx | Create New HTML Element (Gadget)
// + ebi | Obtain Gadget Ref using ID String
// + one | Obtain First Matching Gadget Ref
// + all | Obtain List of All Matching Gadget Refs

elx =( nt )=> doc.createElement ( nt );
ebi =( id )=> doc.getElementById( id );
one =( qu )=> doc.querySelector( qu );
all =( qu )=> arr( doc.querySelectorAll( qu ) );

// + resolve | Obtain Gadget Ref from ID or Ref
resolve = function( o ) {
    return (
        ( o instanceof HTMLElement ) 
      ? ( o )
      : ( ebi( o ) )
    )
};

// + run | Run Editor Value as JavaScript
run =( ed )=> window.eval( resolve( ed ).value );

// + readLines | Read Editor Lines
readLines = function( o ) {
   o = resolve( o );
   return ( 
      ( o.value.trim() )
      . split( RS )
      . map( s => s.trim() )
      . filter( s => ( !!s ) ) 
   );
};

// + writeLines | Write Editor Lines
writeLines = function( o, list ) {
   resolve( o )
   . value = list.join( RS );
};

// + sortEditor | Sort Editor Lines
sortEditor = function( o ) {
   o = resolve( o || "sip" );
   let list = readLines( o );
   writeLines( o, list.sort() );
}


"OK!";

