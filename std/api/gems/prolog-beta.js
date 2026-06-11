
/* prolog-beta.js */

// Client Apps should define this as Embedded JS
// iwm = ( Object.keys( window ).sort() );

;
; con = console
; doc = document
; idb = indexedDB
; jsn = JSON
; loc = location
; nav = navigator
; ssg = sessionStorage
; stg = localStorage
; wnd = window
;
; str =( o )=> String( o || "" ).trim()
; arr =( o )=> Array.from( o || [] )
; unq =( o )=> ( new Set( o || [] ) )
;
; psk =( p, s, k )=> ( [ p, s, k ].join( "/" ) )
; ksp =( k, s, p )=> psk( p, s, k )
;
; jsx =( o )=> jsn.stringify( o )
; jst =( o )=> jsn.stringify( o, null, 2 )
; jso =( t )=> jsn.parse( t )
; jsp =( o )=> jst( jso( t ) )
;
; elx =( t )=> doc.createElement( t )
;
; all =( q )=> arr( doc.querySelectorAll( q ) )
; one =( q )=>    ( doc.querySelector   ( q ) )
;
; gad =( o )=> ( o instanceof HTMLElement )
; gid =( i )=> doc.getElementById( i )
; god =( o )=> (
    ( o )
  ? ( gad( o ) ? ( o ) : gid( o ) )
  : ( null )
)
;
; who =( o )=> ( ( o=god( o ) ) ? ( o.id ) : ( "?" ) )
; see =( o )=> alert( who( o ) )
;
; wse =( k, v )=> stg.setItem( k, v )
; rse =( k    )=> stg.getItem( k )
; rsk =( i    )=> stg.key( i )
;
; mem =( o )=> ( Object.keys( o || {} ).sort() )
;
; dir =( o )=> ( mem( o || stg ) )
; tmp =( o )=> ( mem( o || ssg ) )
;
; zak =( o )=> ( mem( o || wnd ) )
; zek =( o )=> ( mem( o || doc ) )
; zik =( o )=> ( mem( o || nav ) )
; zok =( o )=> ( mem( o || loc ) )
; zuk =( o )=> ( mem( o || idb ) )
; zck =( o )=> ( mem( o || con ) )
; zjk =( o )=> ( mem( o || jsn ) )
;

QuarkOps = {
    str , arr , unq ,
    psk , ksp , jsp ,
    jsx , jst , jso ,
    all , one , elx ,
    gad , gid , god ,
    wse , rse , rsk ,
    mem , dir , tmp ,
    zak , zek , zik ,
    zok , zuk , zck ,
    zjk
};

QuarkOpsHints = [
  [ "str" , "Create Trimmed String"             ]
, [ "arr" , "Create Array from Iterable"        ]
, [ "unq" , "Create Set from Iterable"          ]
, [ "psk" , "Compose PASS/PSK Address"          ]
, [ "ksp" , "Compose PASS/KSP Address"          ]
, [ "jsp" , "Prettify JSON"                     ]
, [ "jsx" , "Compose Object as Terse JSON"      ]
, [ "jst" , "Compose Object as Pretty JSON"     ]
, [ "jso" , "Parse JSON"                        ]
, [ "elx" , "Create New Gadget"                 ]
, [ "all" , "List of Refs for Matching Gadgets" ]
, [ "one" , "Ref for First Matching Gadget"     ]
, [ "gad" , "Verify Argument is a Gadget"       ]
, [ "gid" , "Get Gadget Ref by ID"              ]
, [ "god" , "Get Gadget Ref by ID or Ref"       ]
, [ "who" , "Safe Version of god (default='?')" ]
, [ "see" , "Popup result of who()"             ]
, [ "wse" , "Write Store Entry"                 ]
, [ "rse" , "Read Store Entry"                  ]
, [ "rsk" , "Read Store Key by Index"           ]
, [ "mem" , "Sorted List of Object Members"     ]
, [ "dir" , "Sorted List of Store Keys"         ]
, [ "tmp" , "Sorted List of Session Keys"       ]
, [ "zak" , "Sorted List of Window Members"     ]
, [ "zek" , "Sorted List of Document Members"   ]
, [ "zik" , "Sorted List of Navigator Members"  ]
, [ "zok" , "Sorted List of Location Members"   ]
, [ "zuk" , "Sorted List of IndexedDB Members"  ]
, [ "zck" , "Sorted List of Console Members"    ]
, [ "zjk" , "Sorted List of JSON Members"       ]
, [ "con" , "Alias console"                     ]
, [ "doc" , "Alias document"                    ]
, [ "idb" , "Alias indexedDB"                   ]
, [ "jsn" , "Alias JSON"                        ]
, [ "loc" , "Alias location"                    ]
, [ "nav" , "Alias JSON"                        ]
, [ "ssg" , "Alias sessionStorage"              ]
, [ "stg" , "Alias localStorage"                ]
, [ "wnd" , "Alias window"                      ]
];

// Extended Aliases
function _all_aliases() {
; agt = navigator.userAgent.toLowerCase()
; con = console
; doc = document
; idb = indexedDB
; jsn = JSON
; loc = location
; nav = navigator
; ssg = sessionStorage
; stg = localStorage
; wnd = window
    return {
        agt , con , doc ,
        idb , jsn , loc ,
        nav , ssg , stg ,
        wnd
    }
};


/* acquire-mynotepad.js */
; ( ( url )=> {
    const se = elx( `SCRIPT` );
    doc.head.appendChild( se );
    se.id  = ( `notepad_source` );
    se.src = ( url );
} ) ( `https://nyteowldave.github.io/std/api/gems/my-notepad-v1p0.js` );

;
; ( console.info( `Loaded "prolog-beta.js" gem` ) )
;


