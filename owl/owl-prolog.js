
/*
	owl-prolog.js
	Based on prolog-beta.js
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Client Apps should define this as Embedded JS
// iwm = ( Object.keys( window ).sort() );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; con = console
; doc = document
; idb = indexedDB
; jsn = JSON
; loc = location
; nav = navigator
; ssg = sessionStorage
; stg = localStorage
; wnd = window

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; nop =( o )=> ( o )
; str =( o )=> String( o || "" ).trim()
; arr =( o )=> Array.from( o || [] )
; unq =( o )=> ( new Set( o || [] ) )
; idx =(   )=> ( new Map() )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; psk =( p, s, k )=> ( [ p, s, k ].join( "/" ) )
; ksp =( k, s, p )=> psk( p, s, k )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; jsx =( o )=> jsn.stringify( o )
; jst =( o )=> jsn.stringify( o, null, 2 )
; jso =( t )=> jsn.parse( t )
; jsp =( t )=> jst( jso( t ) )
; psj =( o )=> jso( jst( o ) )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; elx =( t )=> doc.createElement( t )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; all =( q )=> arr( doc.querySelectorAll( q ) )
; one =( q )=>    ( doc.querySelector   ( q ) )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; gad =( o )=> ( o instanceof HTMLElement )
; gid =( i )=> doc.getElementById( i )
; god =( o )=> (
    ( o )
  ? ( gad( o ) ? ( o ) : gid( o ) )
  : ( null )
)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; wse =( k, v )=> stg.setItem( k, v )
; rse =( k    )=> stg.getItem( k )
; rsk =( i    )=> stg.key( i )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; mem =( o )=> ( Object.keys( o || window ).sort() )
; dir =( o )=> ( mem( o || stg || {} ) )
; tmp =( o )=> ( mem( o || ssg || {}) )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; hut =( t )=> console.table( t )
; hum =(   )=> hut( dir() )
; hun =(   )=> hut( tmp() )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; zak =( o )=> ( mem( o || wnd ) )
; zek =( o )=> ( mem( o || doc ) )
; zik =( o )=> ( mem( o || nav ) )
; zok =( o )=> ( mem( o || loc ) )
; zuk =( o )=> ( mem( o || idb ) )
; zck =( o )=> ( mem( o || con ) )
; zjk =( o )=> ( mem( o || jsn ) )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; qlc =( o, sep="\n" )=> ( o.join( sep ) )
; qlp =( o, sep="\n" )=> {
    o = ( o ).split( sep ).map( str );
    return ( o ).filter( nop );
}
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; wop =( u )=> window.open( u, u )
; wap =( u )=> {
    const a = elx( "A" );
    a . href = ( u );
    a . click();
}
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; who   =( o )=> ( ( o=god( o ) ) ? ( o.id ) : ( "?" ) )
; see   =( o )=> alert( who( o ) )
; type  =( o )=> alert( typeof o )
; ntype =( o )=> alert( o.nodeName )
; oname =( o )=> alert( o.constructor.name || o.name )
; cname =( o )=> alert( o.className )
; clist =( o )=> alert( o.classList.sort().join( "\n" ) )
; asize =( o )=> alert( o.length )
; osize =( o )=> alert( o.size )
; shat  =( o )=> alert( qlc( arr( o.attributes ).sort() ) )

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function qoh() {
    hut( QuarkOpsHints );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

QuarkOps = {

  str , arr , unq
, psk , ksp
, jsp , psj
, jsx , jst , jso
, all , one , elx
, gad , gid , god
, wse , rse , rsk
, mem , dir , tmp
, zak , zek , zik
, zok , zuk , zck
, zjk , qoh
, hut , hum , hun
, who, see

/* ~~~~~~~~~~~~~~~ [[ NEW ! ]] ~~~~~~~~~~~~~~~ */
, type
, ntype , oname , cname
, clist , asize, osize
, shat
, qlc , qlp , nop
, wop , wap

};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

QuarkOpsHints = [
  [ "str" , "Create Trimmed String"             ]
, [ "arr" , "Create Array from Iterable"        ]
, [ "unq" , "Create Set from Iterable"          ]
, [ "psk" , "Compose PASS/PSK Address"          ]
, [ "ksp" , "Compose PASS/KSP Address"          ]
, [ "psj" , "Sanitize JSON"                     ]
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
, [ "hut" , "Show Table in Console"             ]
, [ "hum" , "Show Store Keys in Console"        ]
, [ "hun" , "Show Session Keys in Console"      ]
, [ "qoh" , "Show QuarkOps Hints in Console"    ]
, [ "zak" , "Sorted List of Window Members"     ]
, [ "zek" , "Sorted List of Document Members"   ]
, [ "zik" , "Sorted List of Navigator Members"  ]
, [ "zok" , "Sorted List of Location Members"   ]
, [ "zuk" , "Sorted List of IndexedDB Members"  ]
, [ "zck" , "Sorted List of Console Members"    ]
, [ "zjk" , "Sorted List of JSON Members"       ]

/* ~~~~~~~~~~~~~~~ [[ NEW ! ]] ~~~~~~~~~~~~~~~ */
, [ "type  , "Show Primitive Type in Popup"     ]
, [ "ntype , "Show Node Name in Popup"          ]
, [ "oname , "Show Object Name in Popup"        ]
, [ "cname , "Show CSS Class Name in Popup"     ]
, [ "clist , "Show CSS Class List in Popup"     ]
, [ "asize , "Show Array Length in Popup"       ]
, [ "osize , "Show Collection Size in Popup"    ]
, [ "qoh   , "Show Quark Ops Hints in Console"  ]
, [ "qlc   , "Join String List"                 ]
, [ "qlp   , "Parse String List"                ]
, [ "nop   , "No Operation"                     ]
, [ "wop   , "Open Browser Window"              ]
, [ "wap   , "Emulate Anchor Click"             ]
, [ "idx"  , "Create Empty Map"                 ]

/* ~~~~~~~~~~~~~~~ [[ ALIAS ]] ~~~~~~~~~~~~~~~ */
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

QuarkModules = [
  [ "list-manager.js"    , "HTML List Operations"  ]
, [ "table-manager.js"   , "HTML Table Operations" ]
, [ "my-notepad-v1p0.js" , "Project Notes"         ]
, [ "owl.js"             , "Application Module"    ]
, [ "owl-prolog.js"      , "Prolog API Module"     ]
, [ "owl.css"            , "Theme Module"          ]
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* acquire-mynotepad.js */
; ( ( url )=> {
    const se = elx( `SCRIPT` );
    doc . head . appendChild( se );
    se . id  = ( `notepad_source` );
    se . src = ( url );
} ) (
  `https://nyteowldave.github.io/std/api/gems/my-notepad-v1p0.js`
);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; ( console.info( `Loaded "owl-prolog.js" API Module` ) )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


