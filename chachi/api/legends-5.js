/*

----------------------------------------------------------------

> Manifest (CHECKED OUT TO LEGACY)

| Item     | Value            |
|----------|------------------|
| title    | Squad Legends V  |
| updated  | 2025-DEC-26      |
| version  | 5.1.0            |
| volume   | Tilly            |
| edition  | Ryzen            |
| primary  | dave-ryzen       |
| relpath  | ~/api/chachi     |
| filename | legends.js       |

----------------------------------------------------------------

> Registration

| tidate      | tikey                                | version |
|-------------|--------------------------------------|---------|
| 2025-JUN-29 | bed85eab-242f-4e02-82cc-a8626fe31ada |  4.1.0  |
| 2025-DEC-24 | 05645054-2ba5-4ac7-a122-7d6380addf51 |  5.1.0  |

----------------------------------------------------------------

<pre><code>

*/

D = document;
V = D.firstElementChild;

agent    = navigator.userAgent.toLowerCase();
isReText = agent.includes( "retext" );
isChrome = agent.includes( "chrome" );

cls   = () => console.clear  ();
again = () => location.reload();

han = function( falcon, cargo ) {
    try {
        return falcon( cargo );
    } catch( empire ) {
        return destroy( empire );
    }
};

_ary_ =( o )=> Array.from( o );

ella =( t )=> ( D.createElement( t ) );

gid    =( i, e )=> ( ( e || D ).getElementById  ( i ) );
selma  =( q, e )=> ( ( e || D ).querySelector   ( q ) );
selmax =( q, e )=> ( ( e || D ).querySelectorAll( q ) );

thelma =( q, e )=> ( _ary_( selmax( q, e ) ) );

louise =( q, n, e )=> ( thelma( q, e ) [ n ] );

artie  =( e, k )=> ( e.getAttribute   ( k ) );
bernie =( e, k )=> ( e.removeAttribute( k ) );
barney =( e, k )=> ( e.hasAttribute   ( k ) );

bart =( e, k, v )=> ( e.setAttribute( k, v ) );

wanda =( e, k ) => ( e.classList.add     ( k ) );
wendy =( e, k ) => ( e.classList.remove  ( k ) );
ethel =( e, k ) => ( e.classList.contains( k ) );

ester =( e, k, f )=> ( 
    e.classList.toggle( k, f ) 
);

addEventListener
( "load" , (e) => {
   siox_ultra = {
     sip : gid( "sip" )
   , sop : gid( "sop" )
   , ser : gid( "ser" )
   , sce : gid( "sce" )
   , pms : gid( "pms" )
   , man : gid( "man" )
   , eds : gid( "eds" )
   };
} );

thoris = function( url ) {
    const se = ella( "SCRIPT" );
    function cool() { 
        report( "Script Loaded" ); 
    }
    function fool( evil ) { 
        destroy( evil ); 
    }
    se.onload  = cool;
    se.onerror = fool;
    D.head.appendChild( se );
    se.src = ( url || thoris.compose( "thor" ) );
    return ( se );
};

thoris.places = {
    cdn   : "https://nyteowldave.github.io/chachi/api"
,   home  : "https://nyteowldave.github.io/"
,   wbrn  : "https://whiteboard.cloud.microsoft"
,   repo  : "https://github.com/NyteOwlDave/NyteOwlDave.github.io"
,   site  : "https://sites.google.com"
,   keep  : "https://keep.google.com"
,   voice : "https://voice.google.com"
,   cloud : "https://drive.google.com"
,   mail  : "https://mail.google.com/mail/u/0/"
,   ntbk  : "https://onenote.cloud.microsoft"
,   notes : "https://outlook.live.com/mail/0/notes"
,   lists : "https://lists.live.com/"
};

thoris.friends = {
    dave      : "(?)"
,   arsenio   : "(?)"
,   ben       : "(?)"
,   calliope  : "(?)"
,   carmen    : "(?)"
,   catalina  : "(?)"
,   chippy    : "(?)"
,   chronos   : "(?)"
,   edgar     : "(?)"
,   egsie     : "(?)"
,   elmer     : "(?)"
,   fluffy    : "(?)"
,   garfield  : "(?)"
,   gustaf    : "(?)"
,   jango     : "(?)"
,   kim       : "(?)"
,   korak     : "(?)"
,   minuet    : "(?)"
,   nancy     : "(?)"
,   norma     : "(?)"
,   odin      : "(?)"
,   pollyanna : "(?)"
,   reggie    : "(?)"
,   regi      : "(?)"
,   rhett     : "(?)"
,   sapphyra  : "(?)"
,   snoopy    : "(?)"
,   spock     : "(?)"
,   sulu      : "(?)"
,   tarzan    : "(?)"
,   tempy     : "(?)"
,   thalia    : "(?)"
,   tigg      : "(?)"
,   tilly     : "(?)"
,   tricia    : "(?)"
,   yogi      : "(?)"
,   zed       : "(?)"
};

thoris.notes = ( "" );

thoris.prolog = ( `
ED  = "TEXTAREA";
arr = o => Array.from( o )
con = console;
doc = document;
stg = localStorage;
wnd = window;
ebi = i => doc . createElement( i );
one = q => doc . querySelector( q );
run = e => doc . eval( e.value );
` );

thoris.things = {};

thoris.storeKey = "Thoris ~ v5.1.0";

thoris.persist = function() {
   let t = thoris;
   let when    = ( t.when     ) = ( new Date() );
   let notes   = ( t.notes    );
   let places  = ( t.places   );
   let friends = ( t.friends  );
   let things  = ( t.friends  );
   let key     = ( t.storeKey );
   let man = {
  	   key
     , value : { things, friends, places, notes, when }
   };
   localStorage.setItem( key, jst( man ) );
   console.log( `Wrote "${key}" to Store` );
};

thoris.recover = function() {
   let t = thoris;
   let key = ( thoris.storeKey );
   let value = localStorage.getItem( key );
   if ( null === value ) {
      return thoris.persist();
   }
   let man = jso( value );
   let v   = man.value   ;
   t.things  = v.things  ;
   t.friends = v.friends ;
   t.places  = v.placed  ;
   t.notes   = v.notes   ;
   t.when    = v.when    ;
   console.log( `Read "${key}" from Store` );
};

thoris.compose = function( filename ) {
    if (! filename.endsWith( ".js" ) ) {
       filename += ( ".js" );
    }
    return (
      [ thoris.places.cdn , filename ].join( "/" ) 
    );
};

keith = function( what, id ) {
    keith.ED = ( "TEXTAREA" );
    keith.CN = ( "clipboard-keith" );
    keith.ID = ( id ) = ( id || keith.CN );
    try {
        const ed = ( gid( id ) || ella( keith.ED ) );
        ed.id         = ( id    );
        ed.wrap       = ( "off" );
        ed.spellcheck = ( false );
        ed.classList.add( keith.CN );
        D.body.appendChild( ed );
        ed.value = String( what );
        ed.focus ();
        ed.select();
        execCommand( "copy" );
    } catch( e ) {
        destroy( evil );
    }
};

wilbur = function( o, k, type ) {
    type = ( type || "string" );
    return ( 
	( o instanceof Object )
      ? ( typeof o[ k ] === type )
      ? ( o[ k ] ) 
      : ( "" ) 
      : ( "" )
    );
};

weezie = function( text ) {
    const type = "text/plain";
    const charset = "utf-8";
    const options = { type, charset };
    text = String( text );
    const blob = new Blob( [ text ], options );
    return URL.createObjectURL( blob );
};

tizzy = function( doc, type ) {
    doc  = ( doc  || "" );
    type = ( type || "text/plain" );
    return (
        new Blob( [ doc ], { type } ) 
    );
};

oswald = function( doc, type ) {
    return URL.createObjectURL( 
        tizzy( doc, type ) 
    );
};

rico = function( download, filename ) {
    const ae = ella( 'a' );
    ae.download = ( filename || "rico-download.txt" );
    ae.href = weezie( download );
    ae.click();
    URL.revokeObjectURL( ae.href );
};

clark = function( url ) {
    const ae = ella( 'a' );
    ae.href = url;
    ae.click();
};

bruce = function( url, options ) {
    if ( isReText ) {
        clark( url );
    } else {
        window.open(
            url, url,
 ( options || "top=100,left=100,width=800,height=600"  )
        );
    }
};

bullfrog =()=> bruce( "./" );

destroy = function( evil ) {
    if ( evil instanceof Error ) {
        console.error( evil );
    } else {
        console.warn( evil );
    }
    if ( isReText ) {
        alert( evil );
    }
    return evil;
};

report = function( what ) {
    if ( what instanceof Error ) {
        return destroy( what );
    }
    if ( isReText ) {
        alert( what );
    } else {
        console.log( what );
    }
    return what;
};

crusoe = function( 
   cdoc, title, 
   schema=[ "Symbol", "Description"] 
) {
    const trim   =( s    )=> s.trim();
    const truthy =( s    )=> (!! s );
    const split  =( s, t )=> ( 
        ( s )
        . split( t )
        . map( trim )
        . filter( truthy ) 
    );
    const records =( s )=> split( s, "\n" );
    const fields  =( s )=> split( s, "|"  );
    if (! cdoc ) {
        title = "Squad Legends";
        cdoc  = LegendsDoc;
    }
    const table = records( cdoc ).map( fields );
    table.manifest = { cdoc, title, schema };
    if (! title ) return table;
    table.unshift( schema );
    let _c = console;
    _c.group( title );
    _c.table( table );
    _c.groupEnd();
    table.shift();
    return table;
};

rollcall = function( o ) {
    return Object.keys( o || Legends );
};

LegendsDoc = ( `
cls        | Clear console
again      | Reload page
report     | Report message (info or error)
destroy    | Report message (warning or error)  
han        | Try-Catch Wrapper
gid        | Get Element by ID
ella       | Create Element
artie      | Read Attribute
bart       | Write Attribute
bernie     | Remove Attribute
barney     | Confirm Attribute Exists
selma      | Select Element by Query
selmax     | Select Elements by Query (Collection)
thelma     | Select Elements by Query (Array)
louise     | Select N-th Element by Query
wanda      | Add Name to Class List
wendy      | Remove Name from Class List
ethel      | Confirm Class List Contains Name
ester      | Add/Remove/Toggle Name in Class List
bullfrog   | Open Workspace
clark      | Open Page
bruce      | Open Tab or Popup Window
rico       | Download Text
thoris     | Load Script
keith      | Copy Text to Clipboard
weezie     | Create Data URL from Text
wilbur     | Read Text from an Object Property
rollcall   | Get Member Names
crusoe     | Inspect Core Document
tizzy      | Blobify Text
oswald     | Create Object URL for Text
agent      | Navigator User Agent (lowercase)
isReText   | Confirm ReText was Detected
isChrome   | Confirm Chrome was Detected
` );

Legends = {
   acronyms : { D, V }
,  state    : { agent, isReText, isChrome }
,  cls    , again  
,  han    , report , destroy
,  gid    , ella
,  selma  , selmax , thelma , louise
,  artie  , bart   , bernie , barney
,  wanda  , wendy  , ethel  , ester
,  clark  , rico   , bullfrog
,  thoris , keith
,  weezie , wilbur
,  bruce  , tizzy  , oswald
,  crusoe , rollcall
};

Legends.ben = {};

Legends.ben.kazam = ( `
#!/bin/bash
mkdir acronyms state;
mkdir cls again han report destroy;
mkdir gid ella selma selmax thelma louise;
mkdir artie bart bernie barney;
mkdir wanda wendy ethel ester;
mkdir clark bullfrog rico;
mkdir thoris keith weezie wilbur;
mkdir rollcall crusoe;
cd acronyms;
mkdir D V H B;
cd ../state;
mkdir agent isReText isChrome;
` );

__md__ = ( `
| Symbol      | Description                           |
|-------------|---------------------------------------|
| cls         | Clear console                         |
| again       | Reload page                           |
| report      | Report message (info or error)        |
| destroy     | Report message (warning or error)     |
| han         | Try-Catch Wrapper                     |
| gid         | Get Element by ID                     |
| ella        | Create Element                        |
| artie       | Read Attribute                        |
| bart        | Write Attribute                       |
| bernie      | Remove Attribute                      |
| barney      | Confirm Attribute Exists              |
| selma       | Select Element by Query               |
| selmax      | Select Elements by Query (Collection) |
| thelma      | Select Elements by Query (Array)      |
| louise      | Select N-th Element by Query          |
| wanda       | Add Name to Class List                |
| wendy       | Remove Name from Class List           |
| ethel       | Confirm Class List Contains Name      |
| ester       | Add/Remove/Toggle Name in Class List  |
| bullfrog    | Open Workspace                        |
| clark       | Open Page                             |
| rico        | Download Text                         |
| thoris      | Load Script                           |
| keith       | Copy Text to Clipboard                |
| weezie      | Create Data URL from Text             |
| wilbur      | Read Text from an Object Property     |
| rollcall    | Get Member Names                      |
| crusoe      | Inspect Core Document                 |
| agent       | Navigator User Agent (lowercase)      |
| isReText    | Confirm ReText was Detected           |
| isChrome    | Confirm Chrome was Detected           |
` );

console.log( "Loaded Squad Legends V" );

/*

</code></pre>

> Updated ~ 2025-DEC-24 ~ Ryzen

*/
