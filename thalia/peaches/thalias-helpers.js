
THALIA_MORPHEUS = (
  "https://nyteowldave.github.io/thalia/thalia.html"
);

THALIA_MORPHEUS_PEACHES = (
  "https://nyteowldave.github.io/thalia/peaches"
);

PEACH_KEY = ( `thalias-helpers.js` );
PEACH_DECAL = ( `🍑` );

// + RS | Record Separator Token
// + FS | Field Separator Token

RS = String( "\n" );
FS = String( "|"  );

RS.decal = "⚜";
FS.decal = "⚜";

RS.details = "Record Separator Token";
FS.details = "Field Separator Token";

// + str | Create Trimmed String
// + arr | Create New Array from Iterable
// + unq | Create New Set from Iterable

str =( o )=> String( o || "" ).trim();
arr =( o )=> Array.from( o || [] );
unq =( o )=> ( new Set( o || [] ) );

str.decal = "☣";
arr.decal = "☣";
unq.decal = "☣";

str.details = "Create Trimmed String";
arr.details = "Create New Array from Iterable";
unq.details = "Create New Set from Iterable";

// + con | Alias console
// + doc | Alias document
// + stg | Alias localStorage
// + wnd | Alias window

con = console;
doc = document;
stg = localStorage;
wnd = window;

con.decal = "☯";
doc.decal = "☯";
stg.decal = "☯";
wnd.decal = "☯";

con.details = "Alias console";
doc.details = "Alias document";
stg.details = "Alias localStorage";
wnd.details = "Alias window";

// + elx | Create New HTML Element (Gadget)
// + ebi | Obtain Gadget Ref using ID String
// + one | Obtain First Matching Gadget Ref
// + all | Obtain List of All Matching Gadget Refs

elx =( nt )=> doc.createElement ( nt );
ebi =( id )=> doc.getElementById( id );
one =( qu )=> doc.querySelector( qu );
all =( qu )=> arr( doc.querySelectorAll( qu ) );

elx.decal = "🎛️";
ebi.decal = "🎛️";
one.decal = "🎛️";
all.decal = "🎛️";

elx.details = "Create New HTML Element (Gadget)";
ebi.details = "Obtain Gadget Ref using ID String";
one.details = "Obtain First Matching Gadget Ref";
all.details = "Obtain List of All Matching Gadget Refs";

// + resolve | Obtain Gadget Ref from ID or Ref
resolve = function( o ) {
    return (
        ( o instanceof HTMLElement ) 
      ? ( o )
      : ( ebi( o ) )
    )
};

resolve.decal = "🎛️";
resolve.details = "Obtain Gadget Ref from ID or Ref";

// + run | Run Editor Value as JavaScript
run =( ed )=> window.eval( resolve( ed ).value );

run.decal = "➡️";
run.details = "Run Editor Value as JavaScript";

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

readLines.decal = "🧾";
readLines.details = "Read Editor Lines";

// + writeLines | Write Editor Lines
writeLines = function( o, list ) {
   resolve( o )
   . value = list.join( RS );
};

writeLines.decal = "✏️";
writeLines.details = "Write Editor Lines";

// + sortEditor | Sort Editor Lines
sortEditor = function( o ) {
   o = resolve( o || "sip" );
   let list = readLines( o );
   writeLines( o, list.sort() );
}

sortEditor.decal = "⇅";
sortEditor.details = "Sort Editor Lines";

; console.info( `Loaded "thalias-helpers.js" 🍑 peach` )
;





