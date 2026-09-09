
/*

<script>
EDITABLE_TABLES = true;
SHOW_NAUTILUS = true;
</script>

<style group="Every Page Theme" host="dave-legacy">
@import url("http://dave-legacy/~/style/every-page.css")
</style>

<style group="Every Page Theme" host="dave-legacy">
@import url("http://dave-legacy/~/style/every-page-todo.css")
</style>

*/

/*
    pen.js
    Code Pen Edition
    2026-MAY-28
*/



/*
    =============================================
    ||	              ZED PROLOG               ||
    =============================================
*/

/*
<datalist grammar="markdown" id="prolog-aliases">
- con
- doc
- stg
- wnd
- loc
- scn
- nav
</datalist>
*/

const con = console;
const doc = document;
const stg = localStorage;
const wnd = window;
const loc = window.location;
const nav = window.navigator;
const scn = window.screen;

/*
    =============================================
    ||	            GLOBAL MEMBERS             ||
    =============================================
*/

/*
<datalist grammar="markdown" id="prolog-globals">
- iwm
- org
- our
- seeker
- kahlan
</datalist>
*/

org =( k )=> ( iwm.includes( k ) );
our =( k )=> (! org( k ) );

seeker = function( list, rex=".*" ) {
    if (! Array.isArray( list ) ) {
        list = (
            Object
            . keys( window )
            . filter( our )
        );
    }
    rex = new RegExp( rex );
    return (
        list
        . filter( k => rex.test( k ) )
        . sort()
    );
};

kahlan = function( list, rex=".*" ) {
    if (! Array.isArray( list ) ) {
        list = (
            Object
            . keys( window )
            . filter( org )
        );
    }
    rex = new RegExp( rex );
    return (
        list
        . filter( k => rex.test( k ) )
        . sort()
    );
};

/*
<datalist grammar="markdown" id="prolog-type-casts">
- flt
- str
- arr
- unq
- psk
</datalist>
*/

let flt =( o )=> parseFloat( o || 0 );
let str =( o )=> ( String( o || "" ).trim() );
let arr =( o )=> ( Array.from( o || [] ) );
let unq =( o )=> ( new Set( o || [] ) );

let psk =( p, s, k )=> ( [ p, s, k ].join( "/") );

/*
<datalist grammar="markdown" id="prolog-json">
- jst
- jso
- jsot
</datalist>
*/

let jst  =( o )=> JSON.stringify( o, null, 2 );
let jso  =( t )=> JSON.parse( t );
let jsot =( t )=> jst( jso( t ) );


/*
<datalist grammar="markdown" id="prolog-gadgets">
- gad
- ebi
- elx
- one
- all
</datalist>
*/

let gad =( o )=> ( o instanceof HTMLElement );
let ebi =( i )=> ( doc.getElementById( i ) );
let elx =( t )=> ( doc.createElement ( t ) );
let one =( q )=> ( doc.querySelector( q ) );
let all =( q )=> arr( doc.querySelectorAll( q ) );

/*
<datalist grammar="markdown" id="prolog-resolve">
- resolve
</datalist>
*/

function resolve( o ) {
   return ( gad( o ) ? ( o ) : gid( o ) );
}


/*
    =============================================
    ||	           REQUEST CONTENT             ||
    =============================================
*/

/*
<datalist grammar="markdown" id="request-content">
- request
</datalist>
*/

function request( address, options, accept, reject ) {
    function ok( o ) {
        return ( o instanceof Function );
    }
    function text( response ) {
        return response.text();
    }
    function cool( t ) {
        request.result = t;
        if ( ok( accept ) ) { accept( t ); }
    }
    function oops( e ) {
        request.result = String( e );
        if ( ok( reject ) ) { reject( e ); }
    }
    return (
        fetch( address, options )
        . then( text )
        . then( cool )
        . catch( oops )
    );
}


/*
    =============================================
    ||	          SCRIPT EXECUTION             ||
    =============================================
*/

/*
<datalist grammar="markdown" id="script-execution">
- srun
- erun
- vrun
- krun
- irun
- arun
</datalist>
*/

let srun=( s )=> ( window.eval( s ) );
let erun=( e )=> ( srun( e.value  ) );
let vrun=( e )=> ( srun( e.innerText ) );
let krun=( k )=> ( srun( load(k)     ) );
let irun=( i )=> ( krun( stg.key(i)  ) );

function arun( address, options, editor ) {
    editor = resolve( editor );
    function accept( o ) {
        editor.value = srun( String( o ) );
    }
    function reject( e ) {
        editor.value = String( e );
    }
    return request(
        address
      , options
      , accept
      , reject
    )
}


/*
    =============================================
    ||	          MESSAGE REPORTING            ||
    =============================================
*/

/*
<datalist grammar="markdown" id="message-reporting">
- blurt
- todo
- ack
- announce
- greet
- removed
- inform
- dangit
- bummer
- noActiveEditor
- question
</datalist>
*/

function blurt( msg ) {
    console.log( msg );
    return ( message.textContent = msg );
}

function todo( what ) {
    return blurt( `TODO : ${what}` );
}

function ack( msg ) {
    if ( msg instanceof Event ) {
      msg = msg.target;
    }
    if ( msg instanceof HTMLElement ) {
      msg = msg.title;
    }
    msg = ( msg || "Unknown Event" );
    return blurt( "⚡ " + msg );
}

function announce( msg ) {
    if ( msg instanceof Object ) {
        throw new TypeError( `Expected a String` );
    }
    return blurt( "🧝 " + msg );
}

function greet( gadget ) {
    return blurt( "🆔 New Editor " + gadget.id );
}

function removed( gadget ) {
    return blurt( "🗑️ " + gadget.id );
}

function inform( s ) {
   return blurt( "🟢 " + s );
}

function dangit( s ) {
   return blurt( "🟡 " + s );
}

function bummer( e ) {
   let s;
   if ( e instanceof Error ) {
      s = e.message;
   } else {
      s = e;
   }
   return blurt( "🔴 " + s );
};

function noActiveEditor() {
    dangit( "Please choose an editor" );
}

function question( msg ) {
    return confirm( `❓ ${msg}` );
}


/*
    =============================================
    ||	         PROJECT MANAGEMENT            ||
    =============================================
*/

/*
<datalist grammar="markdown" id="project-management">
- actionTested
</datalist>
*/

function actionTested( button ) {
    if ( Array.isArray( button ) ) {
      button.forEach( actionTested );
    } else {
      button.classList.add( "tested" );
    }
}


/*
    =============================================
    ||	             MATH ENGINE               ||
    =============================================
*/

// SEE : math.js (imported Chachi API)


/*
    =============================================
    ||	          GRAPHICS ENGINE              ||
    =============================================
*/

// RELATED : midge.js (Tilly Graphics API)

/*
<datalist grammar="markdown" id="midge-nano-graphics">
- surface
- graphics
- graphics.fill
- palette
- palette.read
- pen
- pen.state
- pen.state.index
- pen.state.position
- pen.color
- pen.ink
- pen.hline
- pen.vline
- pen.line
- pen.position
- pen.move
- pen.ray
- drawAxes
</datalist>
*/

function surface( width, height ) {
    let doc = document;
    let ce = (
          doc.querySelector( "canvas" )
       || doc.createElement( "canvas" )
    );
    if (! ce.parentElement ) {
        doc.body.appendChild( ce );
    }
    if ( width && height ) {
        ce.width  = width;
        ce.height = height;
    }
    surface.width  = ce.width;
    surface.height = ce.height;
    return ce;
};

function graphics() {
   return (
      surface().getContext( "2d" )
   );
};

graphics.fill = function( style ) {
    let ctx = graphics();
    ctx.fillStyle = ( style || "black" );
    ctx.fillRect( 0, 0, surface.width, surface.height );
};

palette = [
  "#000" , "#008" , "#080" , "#088"
, "#800" , "#808" , "#880" , "#888"
, "#444" , "#00F" , "#0F0" , "#0FF"
, "#F00" , "#F0F" , "#FF0" , "#FFF"
];

palette.read = function( index ) {
   let n = palette.length;
   index = index % n;
   index = ( index < 0 ) ? ( index + n ) : ( index );
   return ( palette[ index ] );
};

pen = {
   state : {
       index    : ( 0 ) // Palette ink color index
     , position : { x : 0 , y : 0 }
   }
};

pen.color = function( index ) {
   if ( isFinite( index ) ) {
      pen.state.index = parseInt( index );
   };
   return ( pen.state.index );
};

pen.ink = function() {
   return palette.read( pen.state.index );
};

// Draw Horizontal Line Segment
pen.hline = function( x, y, width  ) {
   let ctx = graphics();
   let x2;
   ctx.beginPath();
   ctx.moveTo( x, y );
   ctx.lineTo( x2 = x + width, y );
   ctx.strokeStyle = pen.ink();
   ctx.stroke();
   pen.position.x = x2;
   pen.position.y = y;
   return pen;
};

// Draw Vertical Line Segment
pen.vline = function( x, y, height ) {
   let ctx = graphics();
   let y2;
   ctx.beginPath();
   ctx.moveTo( x, y );
   ctx.lineTo( x, y2 = y + height );
   ctx.strokeStyle = pen.ink();
   ctx.stroke();
   pen.position.x = x;
   pen.position.y = y2;
   return pen;
};

// Draw Line Segment
pen.line = function( x, y ) {
   let ctx = graphics();
   ctx.lineTo( x, y );
   ctx.strokeStyle = pen.ink();
   ctx.stroke();
   pen.position.x = x;
   pen.position.y = y;
   return pen;
};

// Write Pen Coordinates (move pen)
pen.move = function( x, y ) {
   let ctx = graphics();
   ctx.beginPath();
   ctx.moveTo( x, y );
   pen.position.x = x;
   pen.position.y = y;
   return pen;
};

// Read Pen Coordinates
pen.position = function() {
   let x = pen.state.position.x;
   let y = pen.state.position.y;
   return { x, y };
};

// Draw Ray
pen.ray = function( origin, direction, distance ) {
   let ctx = graphics();
   let x = origin.x;
   let y = origin.y;
   let dx = distance * direction.x;
   let dy = distance * direction.y;
   ctx.beginPath();
   ctx.moveTo( x, y );
   ctx.lineTo( x + dx, y + dy );
   ctx.strokeStyle = pen.ink();
   ctx.stroke();
   return pen;
};

// DRAW AXES
function drawAxes( paletteIndex = 3 ) {
  pen.color( paletteIndex );
  pen.hline(  0, cy, scn_w );
  pen.vline( cx,  0, scn_h );
  pen.move ( cx, cy );
}


/*
    =============================================
    ||	          HYSTERESIS DEMO              ||
    =============================================
*/

// SCREEN SIZE = 280 x 192
let scn_w = 280;
let scn_h = 192;

addEventListener(
  "load"
, ()=>( surface( scn_w, scn_h ) )
);

// SCREEN CENTER = { 140 , 96 }
let cx = scn_w / 2;
let cy = scn_h / 2;

// SHIFTED CENTER = { 120 , 80 }
let sx = cx - 20;
let sy = cy - 16;

// ANIMATE PARAMS
let ph  = 0.30;
let dph = 0.01;
let sat = 1.80;
let amp = 1.00;

// DRAW FRAME
function drawFrame( paletteIndex, angleStep ) {
    pen.color( paletteIndex );
    let f = 0;
    for( let t=0; t<6.28; t+=angleStep ) {
        let h  = sin( t );
        let s1 = sin( t - ph );
        let b  = amp * ( s1 / ( 1 + sat * s1 * s1 ) );
        let px = cx + h * sx;
        let py = cy - b * sy;
        if ( f ) { pen.line( px, py );        }
        else     { pen.move( px, py ); f = 1; }
     }
}

// RENDER SCENE
function renderScene() {
       graphics.fill();
       drawAxes( 3 );
       drawFrame( 1, 0.04 );
       drawFrame( 5, 0.02 );
       ph += dph;
       if ( ph > 0.60 ) { dph = -0.01; }
       if ( ph < 0.20 ) { dph = +0.01; }
}


/*
    =============================================
    ||	          GADGET LOGIC (UI)            ||
    =============================================
*/


/* ------------------------------- */
/* --- [[ APPLICATION STATE ]] --- */

// TODO: Make Editable & Persistent

/*
<datalist grammar="markdown" id="application-state">
- APP_VERSION
- HELP_ADDRESS
- ADDRESS_HINT_KEY
- COLOR_PAIR_KEY
- OPEN_OPTIONS
- HIDE_MENUS
- UNPLUG
- RUNNING
- UNTITLED
- AppState
- active_editor
- frame_count
- epoch_time
</datalist>
*/

// Change only when document JSON structure is modified
// with some code-breaking alterations!
;
; APP_VERSION ="2026-JAN-21-A"
;
; HELP_ADDRESS = "https://nyteowldave.github.io/chachi/"
;
; ADDRESS_HINT_KEY = ( `hysteresis-address-hints.html` )
;
; COLOR_PAIR_KEY = ( `hysteresis-color-pair.json` )
;
; // SEE : Hysteresis Navigator for options
; OPEN_OPTIONS = ""
; HIDE_MENUS = false
;
; UNTITLED = "untitled"
; UNPLUG = false
; RUNNING = false
;

// In Case we need the Hexagon API Modules later on ...
const AppState = {};

let active_editor = null;
let frame_count   = 0;
let epoch_time    = 0;


/* --------------------------------- */
/* --- [[ GRAPHICS MANAGEMENT ]] --- */

function on_click_gx_play( ev ) {
    // ⚡ ▶️ Play Animation
    try {
        ack( ev.target.title );
        RUNNING = true;
        if ( UNPLUG ) {
            initGraphics();
        }
    } catch( e ) { bummer(e); }
}

function on_click_gx_pause( ev ) {
    // ⚡  ⏸️ Pause Animation
    try {
        ack( ev.target.title );
        RUNNING = false;
    } catch( e ) { bummer(e); }
}

function on_click_gx_stop( ev ) {
    // ⚡ ⏹️ Stop Animation
    try {
        ack( ev.target.title );
        RUNNING = false;
        UNPLUG  = true;
    } catch( e ) { bummer(e); }
    graphics.fill();
}

function on_click_gx_zoom( ev ) {
    // ⚡ 💠 Zoom Graphics
    try {
        ack( ev.target.title );
        RUNNING = true;
    } catch( e ) { bummer(e); }
    surface().requestFullscreen();
}

function initGraphics( ev ) {
   // ⌛ Initialize Graphics System

    function animate() {
        if ( RUNNING ) {
            frame_count += 1;
            renderScene();
        }
        if (! UNPLUG ) {
            requestAnimationFrame( animate );
        }
    }

    if (! UNPLUG ) {
        _gx_play.onclick  = on_click_gx_play;
        _gx_pause.onclick = on_click_gx_pause;
        _gx_stop.onclick  = on_click_gx_stop;
        _gx_zoom.onclick  = on_click_gx_zoom;
    } else {
        UNPLUG = false;
    }

    frame_count = 0;
    epoch_time = Date.now();

    animate();

    actionTested(
     [
         _gx_play
       , _gx_pause
       , _gx_stop
       , _gx_zoom
     ]
   );

}


/* ----------------------------- */
/* --- [[ ZOOM MANAGEMENT ]] --- */

function on_click_doc_zoom( ev ) {
    // ⚡ 💠 Zoom Editors
    try {
        ack( ev.target.title );
        ( thelma( "fieldset" )[ fieldsets.document ] )
        . requestFullscreen();
    } catch( e ) { bummer(e); }
}

function on_click_ed_zoom( ev ) {
    // ⚡ 💠 Zoom Active Editor
    try {
        ack( ev.target.title );
        let ed = getActiveEditor();
        if ( ed ) {
          ed . requestFullscreen();
        } else {
            noActiveEditor();
        }
    } catch( e ) { bummer(e); }
}


/* ------------------------------- */
/* --- [[ EDITOR MANAGEMENT ]] --- */

function on_click_ed_add( ev ) {
    // ⚡ ➕ Add New Editor
    try {
        ack( ev.target.title );
        xed();
    } catch( e ) { bummer(e); }
}

function on_click_ed_remove( ev ) {
    // ⚡ ➖ Remove Active Editor
    try {
        ack( ev.target.title );
        removeEditor( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_refocus( ev ) {
    // ⚡ 👁️ Refocus Editor
    try {
        ack( ev.target.title );
        if ( active_editor ) {
            active_editor.focus();
        } else {
            noActiveEditor();
        }
    } catch( e ) { bummer(e); }
}

function on_click_ed_title( ev ) {
    // ⚡ 🎩 Edit Title
    try {
        // ack( ev.target.title );
        todo( "🎩 Edit Title" );
    } catch( e ) { bummer(e); }
}

function on_click_ed_id( ev ) {
    // ⚡ 🏷️ Edit ID
    try {
        // ack( "🏷️ EDIT ID" );
        todo( "🏷️ Edit ID" );
    } catch( e ) { bummer(e); }
}

function on_click_ed_left( ev ) {
    // ⚡ ⬅️ Move Editor Left
    try {
        ack( ev.target.title );
        moveEditorLeft( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_right( ev ) {
    // ⚡ ➡️ Move Editor Right
    try {
        ack( ev.target.title );
        moveEditorRight( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_home( ev ) {
    // ⚡ ↖️ MOve Editor to Start
    try {
        ack( ev.target.title );
        moveEditorToStart( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_end( ev ) {
    // ⚡ ↘️ Move Editor to End
    try {
        ack( ev.target.title );
        moveEditorToEnd( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_analyze( ev ) {
    // ⚡ 🔬 Analyze Script Result
    try {
        ack( ev.target.title );
        analyzeEditor( active_editor );
    } catch( e ) { bummer(e); }
}

function on_click_ed_run( ev ) {
    // ⚡ ▶️  Run Active Editor
    try {
        ack( ev.target.title );
        runEditor( active_editor );
    } catch( e ) { bummer(e); }
}

function on_click_ed_ms( ev ) {
    // ⚡ ⏬ Write Memo
    try {
        ack( ev.target.title );
        writeMemo( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_mr( ev ) {
    // ⚡ ⏫ Read Memo
    try {
        ack( ev.target.title );
        readMemo( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_mx ( ev ) {
    // ⚡ 🔀 Swap Memo
    try {
        ack( ev.target.title );
        swapMemo( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_ce( ev ) {
    // ⚡ 🧽 Scrub Memo
    try {
        ack( ev.target.title );
        scrubMemo( getActiveEditor() );
    } catch( e ) { bummer(e); }
}

function on_click_ed_colors_acquire( ev ) {
    // 🔻 Acquire Colors
    try {
        ack( ev.target.title );
        let ed = getActiveEditor();
        if ( ed ) {
            acquireColors( ed );
        } else {
            noActiveEditor();
        }
    } catch (e) {
        bummer( e );
    }
}

function on_click_ed_colors_apply( ev ) {
    // 🔺 Apply Colors
    try {
        ack( ev.target.title );
        let ed = getActiveEditor();
        if ( ed ) {
            applyColors( ed );
        } else {
            noActiveEditor();
        }
    } catch (e) {
        bummer( e );
    }
}

function on_click_ed_colors_swap( ev ) {
    // 🔄 Swap Color Pair
    try {
        ack( ev.target.title );
        swapColorPair();
    } catch (e) {
        bummer( e );
    }
}


/* --------------------------------- */
/* --- [[ DOCUMENT MANAGEMENT ]] --- */

function on_click_doc_filename_read( ev ) {
    // ⚡ 🔖 Read Document Filename
    try {
        ack( ev.target.title );
        readDocumentFilename();
    } catch( e ) { bummer(e); }
}

function on_click_doc_export( ev ) {
  // ⚡ ✈️ _doc_export
  try {
    ack( ev.target.title );
    exportRawDocument()
  } catch ( e ) { bummer( e ); }
}

function on_click_doc_save( ev ) {
    // ⚡ 💾 Save Document
    try {
        ack( ev.target.title );
        saveDocument();
    } catch( e ) { bummer(e); }
}

function on_click_doc_open( ev ) {
    // ⚡ 📂 Open Document
    try {
        ack( ev.target.title );
        openDocument();
    } catch( e ) { bummer(e); }
}

function on_click_doc_download( ev ) {
    // ⚡ 📥 Download Document
    try {
        ack( ev.target.title );
        downloadDocument();
    } catch( e ) { bummer(e); }
}

function on_click_doc_clear( ev ) {
    // ⚡ 🗑️ Clear Document
    try {
        ack( ev.target.title );
        clearDocument();
    } catch( e ) { bummer(e); }
}


/* ------------------------------ */
/* --- [[ STORE MANAGEMENT ]] --- */

function on_click_store_doc_save( ev ) {
  // ⚡ 💾 Save Store Document
  try {
    ack( ev.target.title );
    saveStoreDocument();
  } catch ( e ) { bummer( e ); }
}

function on_click_store_doc_entries( ev ) {
    // ⚡ 📦 Edit Store Entries
    try {
        ack( ev.target.title );
        editStoreEntries();
    } catch( e ) { bummer(e); }
}

function on_click_store_doc_exchange( ev ) {
    // ⚡ 🔃 Exchange Document
    try {
        ack( ev.target.title );
        exchangeDocument();
    } catch( e ) { bummer(e); }
}

function on_click_store_doc_write( ev ) {
    // ⚡ 🔏 Store Document
    try {
      ack( ev.target.title );
      storeDocument();
    } catch( e ) { bummer(e); }
}

function on_click_store_doc_read( ev ) {
    // ⚡ 🔓 Recover Document
    try {
        ack( ev.target.title );
        recoverDocument();
    } catch( e ) { bummer(e); }
}

function on_click_keys_edit( ev ) {
    // ⚡ 🔐 Edit Store Keys
    try {
        ack( ev.target.title );
        let ed = zed( loadStoreKeys() );
    } catch( e ) { bummer(e); }
}

function on_click_keys_refresh( ev ) {
    // ♻️ Refresh Store Keys
    try {
      ack( ev.target.title );
      refreshStoreKeys();
    } catch( e ) { bummer(e); }
}

function on_click_keys_add( ev ) {
  // ⚡ ➕ Add Store Key
  try {
    ack( ev.target.title );
    addStoreKey()
  } catch ( e ) { bummer( e ); }
}

function on_click_keys_remove( ev ) {
  // ⚡ ➖ Remove Store Key
  try {
    ack( ev.target.title );
    removeStoreKey();
  } catch ( e ) { bummer( e ); }
}

function on_click_keys_title_read( ev ) {
  // ⚡ 🎩 Read Title from Store Keys
  try {
    ack( ev.target.title );
    readTitleFromStoreKeyGadget();
  } catch ( e ) { bummer( e ); }
}

function on_before_unload( ev ) {
    recoverColors();
}

function initZeddicus( ev ) {
    // ⚡ ⌛ Initialize Editor Management

    // Zoom
    _doc_zoom.onclick = on_click_doc_zoom;
    _ed_zoom.onclick = on_click_ed_zoom;

    // Editor Options
    _ed_colors_apply.onclick = on_click_ed_colors_apply;
    _ed_colors_acquire.onclick = on_click_ed_colors_acquire;
    _ed_colors_swap.onclick = on_click_ed_colors_swap;

    // Refocus Active Editor
    _ed_refocus.onclick = on_click_ed_refocus;

    // Editor Properties
    _ed_title.onclick = on_click_ed_title;
    _ed_id.onclick = on_click_ed_id;

    // Editor Script Execution
    _ed_analyze.onclick  = on_click_ed_analyze;
    _ed_run.onclick      = on_click_ed_run;

    // Editor Add / Remove
    _ed_add.onclick      = on_click_ed_add;
    _ed_remove.onclick   = on_click_ed_remove;

    // Editor Position
    _ed_left.onclick     = on_click_ed_left;
    _ed_right.onclick    = on_click_ed_right;
    _ed_home.onclick     = on_click_ed_home;
    _ed_end.onclick      = on_click_ed_end;

    // Editor Memo
    _ed_ms.onclick          = on_click_ed_ms;
    _ed_mr.onclick          = on_click_ed_mr;
    _ed_mx.onclick          = on_click_ed_mx;
    _ed_ce.onclick          = on_click_ed_ce;

     // Document Transport
    _doc_save.onclick     = on_click_doc_save;
    _doc_open.onclick     = on_click_doc_open;
    _doc_export.onclick   = on_click_doc_export;
    _doc_download.onclick = on_click_doc_download;

    // Document Properties
    _doc_filename_read.onclick = on_click_doc_filename_read;

    // Document Clear
    _doc_clear.onclick = on_click_doc_clear;

    // Store
    _store_doc_save.onclick     = on_click_store_doc_save;
    _store_doc_entries.onclick  = on_click_store_doc_entries;
    _store_doc_exchange.onclick = on_click_store_doc_exchange;
    _store_doc_write.onclick    = on_click_store_doc_write;
    _store_doc_read.onclick     = on_click_store_doc_read;
    _keys_refresh.onclick       = on_click_keys_refresh;
    _keys_edit.onclick          = on_click_keys_edit;
    _keys_add.onclick           = on_click_keys_add;
    _keys_remove.onclick        = on_click_keys_remove;
    _keys_title_read.onclick    = on_click_keys_title_read;

    // Persistent State
    addEventListener( "beforeunload", on_before_unload );
    writeColorsDiscrete( "midnightblue", "mintcream" );
    recoverColors();

    actionTested(
     [
       // Zoom
         _doc_zoom
       , _ed_zoom

       // Editor Focus
       , _ed_refocus

       // Editor Properties
       // , _ed_title
       // , _ed_id

       // Script Execution
       , _ed_analyze
       , _ed_run

       // Editors
       , _ed_add
       , _ed_remove
       , _ed_left
       , _ed_right
       , _ed_home
       , _ed_end

       // Memo
       , _ed_ms
       , _ed_mr
       , _ed_mx
       , _ed_ce

       // Editor Color Management
       , _ed_colors_apply
       , _ed_colors_acquire

       // Document Properties
       , _doc_filename_read

       // Document Transport
       , _doc_save
       // , _doc_export
       , _doc_open
       // , _doc_download

       // Document Clear
       , _doc_clear

       // Store Documents
       , _store_doc_save
       , _store_doc_entries
       , _store_doc_exchange
       , _store_doc_write
       , _store_doc_read

       // Store Keys
       , _keys_edit
       , _keys_refresh
       , _keys_add
       , _keys_remove
       , _keys_title_read

     ]
    );
}


/* ------------------------------- */
/* --- [[ SYSTEM MANAGEMENT ]] --- */

function on_click_sys_document( ev ) {
    // ⚡ 📝 Show Document
    try {
        ack( ev.target.title );
        showDocument();
    } catch( e ) { bummer(e); }
}

function on_click_sys_graphics( ev ) {
    // ⚡ 🖼️ Show Graphics
    try {
        ack( ev.target.title );
        showGraphics();
    } catch( e ) { bummer(e); }
}

function on_click_sys_help( ev ) {
    // ⚡ ℹ️ Help
    try {
        ack( ev.target.title );
        openLink( "help" );
    } catch( e ) { bummer(e); }
}

function on_click_sys_menus( ev ) {
    // ⚡ [☰] Toggle Menus
    try {
        ack( ev.target.title );
        toggleMenus();
    } catch( e ) { bummer(e); }
}

/*

function on_click_sys_wbrd( ev ) {
    // ⚡ 🔲 BASIC Whiteboard
    try {
        ack( ev.target.title );
        openLink( "appWbrd" );
    } catch ( e ) { bummer( e ); }
}

function on_click_sys_sketch( ev ) {
    // ⚡ ✏️ SKETCH PAD
    try {
        ack( ev.target.title );
        openLink( "sketchpad" );
    } catch ( e ) { bummer( e ); }
}

function on_click_sys_chachi( ev ) {
    // ⚡ ⚛️ Chachi
    try {
        ack( ev.target.title );
        openLink( "chachi" );
    } catch ( e ) { bummer( e ); }
}

*/

function on_click_sys_navtool( ev ) {
    // ⚡ 🚩 nav-tool
    try {
        ack( ev.target.title );
        openLink( "navtool" );
    } catch ( e ) { bummer( e ); }
}


function on_system_timer_tick( ev ) {
    // ⚡ ⏱️ Update Indicators
    updateIndicators();
}

function initSystem( ev ) {
   // ⚡ ⌛ Initialize System Management

   _sys_document.onclick = on_click_sys_document;
   _sys_graphics.onclick = on_click_sys_graphics;
   _sys_menus.onclick    = on_click_sys_menus;
   _sys_help.onclick     = on_click_sys_help;
   _sys_navtool.onclick  = on_click_sys_navtool;

/*
   _sys_wbrd.onclick     = on_click_sys_wbrd;
   _sys_sketch.onclick   = on_click_sys_sketch;
   _sys_chachi.onclick   = on_click_sys_chachi;
*/

    setInterval(
         on_system_timer_tick
       , 300
    )

    actionTested(
      [ _sys_document
      , _sys_graphics
      , _sys_menus
      , _sys_help
//    , _sys_navtool
//    , _sys_wbrd
//    , _sys_sketch
//    , _sys_chachi
      ]
    );

}


/* ------------------------------- */
/* --- [[ DIALOG MANAGEMENT ]] --- */

function on_click_dlg_accept() {
    // ⚡(?) Accept Dialog Action
    try {
      // ack( ev.target.title );
      todo( ev.target.title );
    } catch ( e ) { bummer( e ); }
}

function on_click_dlg_cancel() {
    // ⚡ Cancel Dialog Action
    try {
      // ack( ev.target.title );
      todo( ev.target.title );
    } catch ( e ) { bummer( e ); }
}

function initDialog( ev ) {
   // ⚡ ⌛ Initialize Dialog
    /*
    _dlg_accept = on_click_dlg_accept();
    _dlg_cancel = on_click_dlg_cancel();

    actionTested(
      [ _dlg_accept
      , _dlg_cancel
      ]
    );
    */
    console.warn( "TODO : initDialog()" );
}


/* ------------------------------- */
/* --- [[ SEARCH MANAGEMENT ]] --- */

function initManuscript( event ) {
    const params = new URLSearchParams( location.search );
    const k = (
         params.get( "key" )
      || params.get( "store_key" )
    );
    if (! k ) { return; }
    const v = load( k );
    if ( null === v ) {
        dangit( `No Store Entry for "${k}"` );
        return false;
    }
    parseDocument( v );
    return true;
}

/* --------------------------------- */
/* --- [[ APPLICATION STARTUP ]] --- */

/*
<datalist grammar="markdown" id="intialization">
- initZeddicus
- initGadgetTitles
- initSystem
- initGraphics
- initManuscript
- initDialog
- startApp
</datalist>
*/

function startApp( event ) {
    // ⚡ ⌛ Initialize Application
    // Write Default Document Title
    setDocumentTitle();
    // Load Store Keys
    refreshStoreKeys();
    // Initialize Document Event Handlers
    initZeddicus( event );
    // Add Title Properties to UI elements 
    initGadgetTitles( event );
    initIndicatorTitles( event );
    // Initialize Footer Tray Event Handlers
    // Start System Timer (Indicater Refresh)
    initSystem( event );
    // Initialize Graphics Event Handlers
    // Start Graphics Animation Loop
    initGraphics( event );
    // TODO : Popup Dialog
    initDialog();
    // Deal With URL Query String
    initManuscript( event );
    blurt( "🦅 Ready" );

}

addEventListener( "load", startApp );


/* ------------------------------- */
/* --- [[ EDITOR MANAGEMENT ]] --- */

/*
<datalist grammar="markdown" id="editor-management">
- resolveEditor
- getActiveEditor
- setActiveEditor
- activateEditor
- on_focus_ed
- isEditorModified
- editorModified
- getAllEditors
- getAllEditorValues
- getAllEditorMemos
- getAllEditorValuesAndMemos
- getEditorCount
- getEditorIndex
- getEditorByIndex
- moveEditorToStart
- moveEditorToEnd
- moveEditorLeft
- moveEditorRight
- removeEditor
- removeAllEditors
- runEditor
- analyzeEditor
- composeEditor
- parseEditor
- initEditor
- nid
- xed
- zed
- zuul
</datalist>
*/

function resolveEditor( o ) {
   // 📑 Resolve Editor
   // Index or ID or Reference!
   if ( isFinite( o ) ) {
      return getEditorByIndex( o );
   } else {
      return resolve( o );
   }
}

function getActiveEditor() {
    // 🔋 Get Activate Editor
    return active_editor;
}

function setActiveEditor( o ) {
    // 🔋 Set Activate Editor
    let ed = active_editor = resolveEdior( o );
    if ( ed ) {
        if ( doc.activeElement !== ed ) {
          ed.focus();
        }
    }
    return ed;
}

function activateEditor( o ) {
   // 🔋 Activate Editor
   let ed = resolveEditor( o );
   ed.focus();
}

function on_focus_ed( event ) {
    // ⚡ Handle Editor Focus Event
    try {
        let ed = active_editor = event.target;
        greet( ed );
    } catch( e ) { bummer(e); }
}

function getAllEditors() {
   // 🛍️ Get All Editors
   return arr(
      editors.querySelectorAll( "TEXTAREA" )
   );
}

function getAllEditorValues() {
   // 🛍️ Get All Editor Values
   return getAllEditors().map( ed => ed.value );
}

function getAllEditorMemos() {
   // 🛍️ Get All Editor Memos
   return getAllEditors().map( ed => str( ed.memo ) );
}

function getAllEditorValuesAndMemos() {
   // 🛍️ Get All Editor Values and Memos
   let values = getAllEditorValues();
   let memos  = getAllEditorMemos();
  return { values, memos };
}

function getEditorCount() {
    return ( getAllEditors().length );
}

function getEditorIndex( o ) {
    let ed = resolveEditor( o );
    let list = getAllEditors();
    return list.indexOf( ed );
}

function getEditorByIndex( index ) {
    // 📑 Get Editor By Index
   let eds = getAllEditors();
   return eds[ index ];
}

function moveEditorToStart( o ) {
  let ed =  resolveEditor( o );
  if ( ed ) {
    let joe, dad = ed.parentElement;
    if( joe = dad.firstElementChild ) {
      if ( joe !== ed ) {
        dad.insertBefore( ed, joe );
        ed.focus();
      }
    }
  } else {
      noActiveEditor();
  }
}

function moveEditorToEnd( o ) {
    let ed =  active_editor;
    if ( ed ) {
        let dad = ed.parentElement;
        ed.remove();
        dad.appendChild( ed );
        ed.focus();
    } else {
        noActiveEditor();
    }
}

function moveEditorLeft( o ) {
    let ed =  active_editor;
    if ( ed ) {
        let dad = ed.parentElement;
        let joe = ed.previousElementSibling;
        if (! joe ) return;
        dad.insertBefore( ed, joe );
        ed.focus()
    } else {
        noActiveEditor();
    }
}

function moveEditorRight( o ) {
    let ed =  active_editor;
    if ( ed ) {
        let dad = ed.parentElement;
        let joe = ed.nextElementSibling;
        if (! joe ) return;
        dad.insertBefore( joe, ed );
        ed.focus()
    } else {
        noActiveEditor();
    }
}

function removeEditor( o ) {
    // 🗑️ Remove Editor
    let ed = resolve( o );
    if ( ed ) {
       if ( ed === active_editor ) {
          active_editor = null;
       }
       ed.remove();
       removed( ed );
    } else {
        noActiveEditor();
    }
}

function removeAllEditors() {
    // 🗑️ Remove All Editors
    clearDocument();
}

function runEditor( o ) {
   // ▶️ Run Editor
   let ed;
   try {
      ed = resolveEditor( o );
      // console.log( "Running", ed );
      ed.error = "";
      ed.input = ed.value;
      ed.output = erun( ed );
   } catch( e ) {
      ed.output = "";
      ed.error  = e.message;
      bummer( e );
   }
}

function analyzeEditor( o ) {
   // 🔬 Analyze Editor Script Results
   let ed = resolve( o );
   if (! ed ) {
      return noActiveEditor();
   }
   let eid = [ "Editor" , ed.id     ]
   let inp = [ "Input"  , ed.input  ];
   let opt = [ "Output" , ed.output ];
   let err = [ "Error"  , ed.error  ];
   let table = [ eid, inp, opt, err ];
   con.group( "🔬 Script Result" );
   con.table( table );
   con.groupEnd();
};

function isEditorModified( o ) {
    // Get Editor Modified Class
    let ed = resolve( o );
    return ed.classList.contains( "modified" );
}

function editorModified( o , state ) {
    // Set Editor Modified Class
    let ed = resolve( o );
    if ( state ) {
        ed.classList.add( "modified" );
    } else {
        ed.classList.remove( "modified" );
    }
}

function initEditor( o ) {
   // 🐣 Initialize Editor
   let ed = resolve( o );
   ed.addEventListener( "focus", on_focus_ed );
   ed.addEventListener( "change", function(e) {
        editorModified( ed, true );
   } );
}

function nid() {
    // 🐅 Nid (alias Tigger)
    let rnd =()=> Math.random();
    let now =()=> Date.now();
    let n = rnd()*now() + rnd()*now();
    let s = n.toString( 33 ).replace( ".", "" );
    return ( "id-" + s );
};

function xed( silent ) {
    // 🧊 Xed
    let ed = ella( "TEXTAREA" );
    ed.classList.add( "zeddicus" );
    ed.title = ed.id = nid();
    ed.wrap="off";
    ed.spellcheck=false;
    initEditor( ed );
    editors.appendChild( ed );
    if (! silent ) { announce( ed.id ); }
    return ed;
}

function zed( value, id, silent ) {
    // 🧙‍♂️ Zed
    id = str( id );
    let ed;
    if ( id  ) { ed = resolve( id ) };
    if (! ed ) {
        ed = xed( silent );
        if ( id ) {
            ed . title = ed . id = id;
        }
    }
    ed.value = value;
    return ( ed );
}

function zuul( key ) {
    // 🧙‍♂️ Zuul
    key = ( key || getStoreKeyGadgetValue() );
    return zed( load( key ) || "?" );
}

// Returns JSON
function composeEditor( o ) {
    // 🔩 Compose Editor
    let ed = resolve( o );
    if (! ed ) {
        return composeRecord( "", "", "", "", "" );
    }
    let title = str( ed.title );
    let value = str( ed.value );
    let memo  = str( ed.memo  );
    let tikey = str( ed.tikey );
    let when  = composeRecordDate();
    return composeRecord( title, value, memo, tikey, when );
}

// Expects JSON
function parseEditor( doc ) {
    // ⚔️ Parse Editor
    try {
        let o = parseRecord( doc )
        let ed = zed( o.value );
        ed.title = o.title;
        ed.tikey = o.tikey;
        ed.value = o.value;
        ed.memo  = o.memo;
        ed.when  = o.when;
        return ed;
    } catch ( e ) {
        console.error( e );
        return e;
    }
}


/* --------------------------------- */
/* --- [[ DOCUMENT MANAGEMENT ]] --- */

/*
<datalist grammar="markdown" id="document-management">
- isDocumentEmpty
- readTitleFromStoreKeyGadget
- setDocumentTitle
- getDocumentTitle
- composeRecord
- composeRecordDate
- composeRawDocument
- composeDocument
- parseRecord
- parseDocument
- tryParseDocument
- clearDocument
- exportRawDocument
- saveDocument
- openDocument
- downloadDocument
- exchangeDocument
- storeDocument
- recoverDocument
</datalist>
*/

function isDocumentEmpty() {
    // ❓ Is Document Empty
    return ( getEditorCount() < 1 );
}

function readTitleFromStoreKeyGadget() {
    // 🎩 Read Title from Store Keys
    if ( isDocumentEmpty() ) {
      let key = getStoreKeyGadgetValue();
      setDocumentTitle( key );
      return;
    } else {
       // Data is present, so Sync Store Key Gadget
       dangit( `Document isn't empty. Using sync mode.` )
       syncStoreKeyWithTitle();
    }
}

function setDocumentTitle( s ) {
    // 🎩 Set Document Title
    s = ( s || UNTITLED ).trim();
    resolve( "document-title" ).value = s;
    return s;
}

function getDocumentTitle() {
    // 🎩 Get Document Title
    return setDocumentTitle(
        resolve( "document-title" ).value
    );
}

function getDocumentFilename() {
    // 🔖 Get Document Filename
    let s = getDocumentTitle();
    if ( s.includes( "." ) ) { return s; }
    return ( s + ".json" );
}

function readDocumentFilename() {
    zed( getDocumentFilename() );
    blurt( "🔖 Read Document Filename" );
}

// Returns Plain Text
function composeRecordDate() {
    // 🔩 Compose Record Date
    return ( new Date() ).toLocaleString();
}

// Returns JSON
function composeRecord( title, value, memo, tikey, when ) {
    // 🔩 Compose Record
    let o = { title, value, memo, tikey, when };
    return jst( o );
}

// Returns JSON
function composeDocument() {
   // 🔩 Compose Document
   let version = APP_VERSION;
   let title = getDocumentTitle();
   let eds = getAllEditors();
   let files = eds.map( composeEditor );
   let agent = navigator.agent;
   let origin = location.href;
   let state = { title, version, files, agent, origin };
   return jst( state );
}

// Expects JSON
function parseRecord( rec ) {
    let o = jso( rec );
    o.title = str( o.title );
    o.tikey = str( o.tikey );
    o.value = str( o.value );
    o.memo  = str( o.memo  );
    o.when  = str( o.when  ) || composeRecordDate();
    return o;
}

// Expects JSON
function parseDocument( doc ) {
    // ⚔️ Parse Document
    if (! tryParseDocument( doc ) ) {
        dangit( "Bad file format" );
        return;
    }
    clearDocument();
    let state = jso( doc );
    setDocumentTitle( state.title );
    state.files.forEach( parseEditor );
}

function tryParseDocument( doc ) {
    // ⚔️ Try to Parse Document
    const isArray =( o )=> Array.isArray( o );
    function isTitle( o ) {
        if ( "string" !== typeof o ) { return false; }
        return ( o.length > 0 );
    }
    try {
        let version = APP_VERSION;
        console.debug( "Input JSON", doc );
        let state = jso( doc );
        console.debug( "Output State", state );
        if ( state.version === version ) {
            if (! isTitle( state.title ) ) {
                console.warn( "Invalid Document Title" );
                return false;
            }
            let ok = isArray( state.files );
            if ( ok ) return ok;
            console.warn( "Files Property isn't an Array" );
        } else {
            let wants = version;
            let found = state.version;
            let o = { wants, found };
            console.warn( "Wrong Version", o );
        }
    } catch ( e ) {
        console.error( e );
    }
    return false;
}

function clearDocument() {
    // 🗑️ Clear Document
    active_editor = null;
    editors.innerHTML = "";
    setDocumentTitle( "" );
    blurt( "🗑️ Document" );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 🚧 TODO : Make JSOM Compatible
//    ALSO : Button Click Handler!
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function composeRawDocument() {
    // 🔩 Compose Raw Document
    let content = getAllEditorValuesAndMemos();
    let FF = String.fromCharCode( 12 );
    let line = "\n" + ( "~". repeat( 40 ) );
    let top = content.values.join(  );
    let btm = content.values.join( " ~". repeat( 40 ) );
    return [ top , btm ].join( `\n${FF}\n` );
}

function exportRawDocument() {
    // ✈️ Export Raw Document
    let k = getDocumentFilename();
    let v = composeRawDocument();
    rico( v, k );
    blurt( `✈️ Export Raw Document` );
}

function saveDocument() {
    // 💾 Save Document
    let k = getDocumentFilename();
    let v = composeDocument();
    rico( v, k );
    blurt( `💾 Save Document` );
}

function openDocument() {
  // 📂 Open Document
  let me = openDocument;

  function acceptFile( event ) {
      const target  = event.target;
      const payload = target.result;
      console.log( { target, payload } );
      me.target  = target;
      me.payload = payload;
      setDocumentTitle( "" )
      parseDocument( payload );
  }

  function readFile( file ) {
      const rdr = new FileReader();
      rdr.onload = acceptFile;
      rdr.readAsText( file );
  }

  function initFile() {
      let ID = "file-input";
      const D = document;
      const o = (
             D.getElementById( ID )
          || D.createElement( "INPUT" )
      );
      if (! o.id ) {
          D.body.appendChild( o );
          o.id = ID;
      }
      o.style.opacity = "0";
      o.style.width   = "2px";
      o.setAttribute( 'type', 'file' );
      o.setAttribute( 'accept', '*.*' );
      o.addEventListener( "change", () => {
          if ( o.files.length === 1 ) {
              readFile( o.files[ 0 ] );
          } else {
              console.log( "Number of Selected Files", o.file.length );
          }
      } );
      return o;
  }

  try {
        initFile().click();
  } catch ( e ) {
        bummer( e );
  }

}

function downloadDocument() {
    // 📥 Download Document
    let k = getDocumentFileName();
    let v = composeDocument();
    rico( k, v );
}

function exchangeDocument() {
    // 🔃 Exchange Document
    let k = getDocumentFilename();
    let v = load( k );
    if ( v === null ) {
        return storeDocument();
    };
    let w = composeDocument();
    save( k, w );
    parseDocument( v );
}

function storeDocument() {
    // 🔏 Store Document
    let k = getDocumentFilename();
    let v = composeDocument();
    save( k, v );
    refreshStoreKeys();
    const eds = all( `textarea.modified` );
    eds.forEach( ed => editorModified( ed, false ) );
    blurt( `🔏 Wrote ${k} to Store` );
}

function recoverDocument() {
    // 🔓 Recover Document
    function selected() {
        return getStoreKeyGadgetValue();
    }
    let k = getDocumentFilename();
    if (! k ) {
        k = selected();
    }
    else if ( k.startsWith( "untitled" ) ) {
        k = selected();
    }
    let v = load( k );
    if ( v === null ) {
        return storeDocument();
    };
    parseDocument( v );
    blurt( `🔓 Read ${k} from Store` );
}


/* ------------------------------ */
/* --- [[ STORE MANAGEMENT ]] --- */

/*
<datalist grammar="markdown" id="store-management">
- keyify
- getStoreKeyGadget
- getStoreKeyGadgetValue
- getStoreKeyGadgetIndex
- addStoreKey
- removeStoreKey
- refreshStoreKeys
- loadStoreKeys
- editStoreEntries
- saveStoreDocument
- composeAppStoreKey
- composeStoreEntry
- composeStoreDocument
- syncStoreKeyWithTitle (should be with doc ops)
</datalist>
*/

function keyify( s ) {
    let k = keyzzz()[ 0 ];
    return ( `${k} ${s}` );
}

// With Decals ~ Multline Text (Core Document)
function loadStoreKeys() {
    // Load Store Keys
    return ( keys().sort().map( keyify ).join( "\n" ) );
}

function getStoreKeyGadget() {
    // 🎛️  Get Store Get Gadget
    return resolve( "store-keys" );
}

function getStoreKeyGadgetValue() {
    // 🔑 Get Store Get Gadget Value
    let ge = getStoreKeyGadget();
    return ge.value;
}

function getStoreKeyGadgetIndex( key ) {
    // 📑 Get Store Key Gadget Index
    let ge = getStoreKeyGadget();
    let opts = arr( ge.options );
    let values = opts.map( o=>o.value );
    return values.indexOf( key );
}

function syncStoreKeyWithTitle() {
    let k = getDocumentTitle();
    let i = getStoreKeyGadgetIndex( k );
    if ( i < 0 ) {
        dangit( `No such store entry : ${k}` );
        return;
    }
    let ge = getStoreKeyGadget();
    ge.selectedIndex = ( i );
}

function refreshStoreKeys() {
    // ♻️ Refresh Store Keys
    let owner = getStoreKeyGadget();
    owner.innerHTML = "";
    function add( k ) {
        let o = ella( "OPTION" );
        o.value = k;
        o.textContent = keyify( k );
        owner.appendChild( o );
    };
    keys().sort().forEach( add );
    syncStoreKeyWithTitle();
}

function addStoreKey() {
  // 🔑 Add Store Key
  let msg = ( `🔑 Add store key:` );
  let s = "New Store Key";
  let key = ( prompt( msg, s ) || "" ).trim();
  if ( key ) {
    localStorage.setItem( key, "" );
    refreshStoreKeys();
    blurt( `➕ Added ${key} to Store` );
  } else {
    alert( key );
  }
}

function removeStoreKey() {
  // 🔑 Remove Store Key
  let key = getStoreKeyGadgetValue();
  let msg = ( `Remove store key "${key}"` );
  if ( question( msg ) ) {
    localStorage.removeItem( key );
    refreshStoreKeys();
  }
}

function editStoreEntries() {
    // 📦 Edit Store Entries
    keys().sort().forEach( zuul );
    blurt( `📦 Edit Store Entries` );
}

function saveStoreDocument() {
    // 💾 Save Store Document
    let filename = "browser-store.json";
    let doc = composeStoreDocument( "Web Browser Store" );
    rico( doc, filename );
    blurt( `💾 Saved Store Document` );
}

// Returns JSON
function composeStoreDocument( title ) {
   // 🔩 Compose Store Document
   let version = APP_VERSION;
   let files = keys().sort().map( composeStoreEntry );
   let agent = navigator.agent;
   let origin = location.href;
   let state = { title, version, files, agent, origin };
   return jst( state );
}

// Returns JSON
function composeStoreEntry( key ) {
    // 🔩 Compose Store Entry
    if (! key ) {
        return composeRecord( "", "", "", "", "" );
    }
    let title = str( key );
    let value = str( localStorage.getItem( key ) );
    let memo  = str( "" );
    let tikey = str( "" );
    let when  = composeRecordDate();
    return composeRecord( title, value, memo, tikey, when );
}

function composeAppStoreKey( topic ) {
    return ( `Hysteresis State ~ ${topic}` );
}

/* ----------------------------- */
/* --- [[ MEMO MANAGEMENT ]] --- */

/*
<datalist grammar="markdown" id="memo-management">
- writeMemo
- readMemo
- swapMemo
- scrubMemo
</datalist>
*/

function writeMemo( o ) {
    // ⏬ Write Memo
    let ed = resolve( o );
    if ( ! ed ) {
        return noActiveEditor();
    }
    ed.memo = ed.value;
    let id = ed.id;
    blurt( `⏬ Wrote Memo 🆔 ${id}` );
}

function readMemo( o ) {
    // ⏫ Read Memo
    let ed = resolve( o );
    if ( ! ed ) {
        return noActiveEditor();
    }
    ed.value = ( ed.memo || "" );
    let id = ed.id;
    blurt( `⏫ Read Memo 🆔 ${id}` );
}

function swapMemo( o ) {
    // 🔀 Swap Memo
    let ed = resolve( o );
    if ( ! ed ) {
        return noActiveEditor();
    }
    let tmp  = ( ed.memo || "" );
    ed.memo  = ed.value;
    ed.value = tmp;
    let id = ed.id;
    blurt( `🔀 Memo Swapped 🆔 ${id}` );
}

function scrubMemo( o ) {
    // 🧽 Scrub Memo
    let ed = resolve( o );
    if ( ! ed ) {
        return noActiveEditor();
    }
    ed.memo = "";
    let id = ed.id;
    blurt( `🧽 Memo Scrubbed 🆔 ${id}` );
}


/* ------------------------ */
/* --- [[ NAVIGATION ]] --- */

// SEE : Hysteresis Navigator for more info

/*
<datalist grammar="markdown" id="navigation">
- AppLinks
- getOpenOptions
- openURL
- openLink
- openPSK
</datalist>
*/

const AppLinks = {
  navtool
: "navigator.html"
, launch
: "launcher.html"
, chachi
: "https://nyteowldave.github.io/chachi"
, sketchpad
: "https://sketch.io/sketchpad/"
, basicWbrd
: "https://whiteboard.cloud.microsoft/me/whiteboards/10831bb3-c909-40d8-aa35-c5d5a2eb040d"
, appWbrd
: "https://whiteboard.cloud.microsoft/me/whiteboards/145dd1e4-d5bd-45a7-b130-29c98509c3a4  " 
, help
: "http://tiny.cc/daves-notes"
};

function getOpenOptions() {
    // ⚙️ Get Open Options
    todo( "Customizable Open Options" );
    return OPEN_OPTIONS;
}

function openURL( address, options ) {
    // 🌐 Open URL
    options = ( options || getOpenOptions() );
    return window.open( address, "_BLANK", options );
}

function openPSK( p, s, k, options ) {
    // 🌐 Open PSK
    let address = [ p, s, k ].join( "/" );
    return openURL( address, options );
}

function openLink( key, options ) {
    // 🌐 Open Link
    return openURL( AppLinks[ key ], options );
}


/* --------------------------------- */
/* --- [[ FIELDSET MANAGEMENT ]] --- */

/*
<datalist grammar="markdown" id="fieldset-management">
- fieldsets
- getFieldset
- hideFieldset
- showFieldset
- toggleFieldset
- toggleMenus
- showGraphics
- showDocument
</datalist>
*/

// 📑 Fieldset Indexes
const fieldsets = {
  graphics           : 0
, graphicsMenu       : 1
, document           : 2
, documentEditorMenu : 3
, documentMemoMenu   : 4
, documentMainMenu   : 5
, documentStoreMenu  : 6
};

function getFieldset( index ) {
    // ☶ Get Fieldset
    return thelma( "fieldset" )[ index ];
}

function hideFieldset( index ) {
    // ☒ Hide Fieldset
    let fs = getFieldset( index );
    fs.classList.add( "hide" );
}

function showFieldset( index ) {
    // ☐ Show Fieldset
    let fs = getFieldset( index );
    fs.classList.remove( "hide" );
}

function toggleFieldset( index ) {
    // ☑ Toggle Fieldset
    let fs = getFieldset( index );
    fs.classList.toggle( "hide" );
}

function toggleMenus() {
    // [☰] Toggle Menus
    let menus = [
        fieldsets.graphicsMenu
      , fieldsets.documentEditorMenu
      , fieldsets.documentMemoMenu
      , fieldsets.documentMainMenu
      , fieldsets.documentStoreMenu
    ];
    if ( HIDE_MENUS = !HIDE_MENUS ) {
        menus.forEach( hideFieldset );
    } else {
        menus.forEach( showFieldset );
    }
}

function showDocument() {
    // 📝 Show Document
    hideFieldset( fieldsets.graphics );
    showFieldset( fieldsets.document );
    RUNNING = false;
}

function showGraphics() {
    // 🖼️ Show Graphics
    hideFieldset( fieldsets.document );
    showFieldset( fieldsets.graphics );
}


/* ---------------------------------- */
/* --- [[ INDICATOR MANAGEMENT ]] --- */

/*
<datalist grammar="markdown" id="indicator-management">
- showCurrentTime
- showDocumentStats
- updateIndicators
- initIndicatorTitles
</datalist>
*/

function showCurrentTime() {
    // ⏱️ Show Current Time
    let ge = resolve( "current-time" );
    if (! ge ) return;
    let when = new Date();
    ge.textContent = when.toLocaleTimeString();
}

function showDocumentStats() {
    // ⏱️ Show Document Statistics
    // TODO ...
    // Active Editor Modified
    // Active Editor Value Length
    // Active Editor Memo Length
    // Document Modified
    // Editor Count
    function update( k, v ) {
        const ge = resolve( k );
        if ( ge ) {
            ge . textContent = ( v );
        }
    }
    let vlen = 0;
    let mlen = 0;
    let vmod = "🔘";
    const ed = getActiveEditor();
    if ( ed ) {
        vlen = ( ed.value || "" ).length;
        mlen = ( ed.memo  || "" ).length;
        vmod = ( isEditorModified( ed ) ? "🔴" : vmod );
    }
    update( "editor-count"        , getAllEditors().length );
    update( "editor-value-length" , vlen );
    update( "editor-memo-length"  , mlen );
    update( "editor-modified"     , vmod );
}

function initIndicatorTitles() {
    resolve( "editor-count"        ).title = "Editor Count";
    resolve( "editor-value-length" ).title = "Active Editor's Value Length";
    resolve( "editor-memo-length"  ).title = "Active Editor's Memo Length";
    resolve( "editor-modified"     ).title = "Active Editor Modified";
}

function updateIndicators() {
    // ⏱️ Update Indicators
    showCurrentTime();
    showDocumentStats();
}


/* --------------------------- */
/* --- [[ USER SETTINGS ]] --- */

/*
<datalist grammar="markdown" id="user-settings">
- acquireColors
- applyColors
- readColors
- writeColors
- writeColorsDiscrete
- persistColors
- recoverColors
</datalist>
*/

function acquireColors( o ) {
    // 🔻 Acquire Colors from Active Editor
    o = resolve( o );
    let cp = new ColorPair( 0, 0 );
    cp.acquire( o );
    cp.writeGadgets(
        _fg_color
      , _bg_color
    );
    return cp;
}

function applyColors( o ) {
    // 🔺 Apply Colors to Active Editor
    o = resolve( o );
    let cp = readColors();
    cp.apply( o );
    return cp;
}

function swapColorPair() {
    // 🔄 Swap Color Pair
    let cp = readColors();
    writeColorsDiscrete( cp.bgc, cp.fgc );
}

function readColors() {
    // 🎨 Read Color Input Gadgets
    let cp = new ColorPair( 0, 0 );
    cp.readGadgets(
        _fg_color
      , _bg_color
    );
    return cp;
}

function writeColors( { fgc, bgc } ) {
    // 🎨 Write Color Input Gadgets
    return writeColorsDiscrete( fgc, bgc  )
}

function writeColorsDiscrete( fgc, bgc ) {
    // 🎨 Write Color Input Gadgets
    let cp = new ColorPair( fgc, bgc );
    cp.writeGadgets(
        _fg_color
      , _bg_color
    );
    return cp;
}

function persistColors( k ) {
    k = ( str( k ) || COLOR_PAIR_KEY );
    const cp = readColors();
    const v = cp.composeState();
    localStorage.setItem( k, v );
    console.debug( `Wrote Color Pair to Store` );
}

function recoverColors( k ) {
    k = ( str( k ) || COLOR_PAIR_KEY );
    const v = localStorage.getItem( k );
    if ( null == v ) {
        return persistColors();
    }
    const cp = JSON.parse( v );
    writeColors( cp );
    console.debug( `Read Color Pair from Store` );
}

addEventListener( "load", function( e ) {
    recoverColors();
} );

addEventListener( "beforeunload", function( e ) {
    persistColors();
} );


/* --------------------------- */
/* --- [[ GADGET TITLES ]] --- */

/*

<datalist grammar="markdown"  id="gadget-titles">
- initGadgetTitles
</datalist>

*/

function initGadgetTitles( event ) {

  // Zoom Gadgets
  _gx_zoom.title  = "💠 Zoom Graphics";
  _ed_zoom.title  = "💠 Zoom Active Editor";
  _doc_zoom.title = "💠 Zoom Document";

  // Graphics Animation
  _gx_play.title  = "▶️ Play Animation";
  _gx_pause.title = "⏸️ Pause Animation";
  _gx_stop.title  = "⏹️ Stop Animation";

  // Editor Properties
  _ed_title.title = "🎩 Edit Title";
  _ed_id.title    = "🏷️ Edit ID";

  // Editor Script Execution
  _ed_analyze.title = "🔬 Analyze Active Editor Results";
  _ed_run.title     = "▶️ Run Active Editor";

  // Editor Add/Remove
  _ed_add.title    = "➕ Add New Editor";
  _ed_remove.title = "➖ Remove Active Editor";

  // Editor Focus
  _ed_refocus.title = "👁️ Refocus Editor";

  // Editor Order
  _ed_left.title  = "⬅️ Move Editor Left";
  _ed_right.title = "➡️ Move Editor Right";
  _ed_home.title  = "↖️ Move Editor to Start";
  _ed_end.title   = "↘️ Vove Editor to End";

  // Editor Memo
  _ed_ms.title = "⏬ Write Memo";
  _ed_mr.title = "⏫ Read Memo";
  _ed_mx.title = "🔀 Swap Memo";
  _ed_ce.title = "🧽 Scrub Memo";

  // Editor Color Options
  _ed_colors_apply.title   = "🔺 Apply Colors to Active Editor";
  _ed_colors_acquire.title = "🔻 Acquire Colors from Active Editor";
  _ed_colors_swap.title = "🔄 Swap Color Pair";
  _fg_color.title = "⬜ Choose Foreground Color";
  _bg_color.title = "⬛ Choose Background Color";

  // Document Properties
  _doc_filename_read.title = "🔖 Read Document Filename";

  // Document Transport
  _doc_export.title = "✈️ Export Raw Document";
  _doc_save.title     = "💾 Save Document";
  _doc_open.title     = "📂 Open Document";
  _doc_download.title = "📥 Download Document";

  // Document Clear
  _doc_clear.title = "🗑️ Clear Document";

  // Store Documents
  _store_doc_save.title     = "💾 Save Store Document";
  _store_doc_entries.title  = "📦 Read All Store Entries";
  _store_doc_exchange.title = "🔃 Exchange Document with Stored Copy";
  _store_doc_write.title    = "🔏 Write Document to Store";
  _store_doc_read.title     = "🔓 Read Document from Store";

  // Store Keys
  _keys_edit.title       = "🔐 Edit Store Keys";
  _keys_title_read.title = "🎩 Read Title from Store Keys";
  _keys_refresh.title    = "♻️ Refresh Store Keys";
  _keys_add.title        = "➕ Add Store Key";
  _keys_remove.title     = "➖ Remove Store Key";

  // System Management
  _sys_graphics.title = "🖼️ Show Graphics";
  _sys_document.title = "📝 Show Document";
  _sys_menus.title    = "[☰] Toggle Menus";
  _sys_help.title     = "ℹ️ Help";
  _sys_navtool.title  = "🚩 Navigator";

/*
  _sys_wbrd.title     = "🔲 Whiteboard";
  _sys_sketch.title   = "✏️ Sketch Pad";
  _sys_chachi.title   = "⚛️ Chachi";
*/

}


/* ------------------------------ */
/* --- [[ DECAL MANAGEMENT ]] --- */

/*

*/

/*
    =============================================
    ||	         WEB CANVAS CLASSES            ||
    =============================================
*/

/*
<datalist grammar="markdown" id="web-canvas-classes">
- Surface
- Graphics
- PixelMap
- Pixel
- Pen
- Brush
- Color
- ColorCodec
- ColorPairAdapter
- ColorPair
- Palette
</datalist>
*/

// Wrapper for Canvas
class Surface {
    // Canvas Wrapper
    constructor( w, h ) { this.resize( w, h ); }
    resize( w, h ) {
        if ( this.isCanvas( w ) ) {
            this.$canvas = w;
            return;
        }
        let c = this.canvas;
        c.width  = Math.abs( w || 1 );
        c.height = Math.abs( h || 1 );
        return this;
    }
    get canvas() {
        let c = this.$canvas;
        if ( c ) { return c; }
        c = document.createElement( "canvas" );
        return ( this.$canvas = c );
    }
    get context() {
        return this.canvas.getContext( "2d" );
    }
    get graphics() {
        return ( new Graphics( this.context ) );
    }
    get w() { return this.canvas.width;  }
    get h() { return this.canvas.height; }
    set w( n ) { this.canvas.width  = n; }
    set h( n ) { this.canvas.height = n; }
    get size() {
        return { w : this.w, h : this.h };
    }
}

// Wrapper for Context 2D
class Graphics {
    // Context 2D Wrapper
    constructor( context ) {
        let tst = Graphics;
        if ( context instanceof Surface ) {
            context = context.canvas.context;
        } else if ( context instanceof Graphics ) {
            context = context.context;
        } else if ( tst.isCanvas( context ) ) {
            context = context.getContext( "2d" );
        }
        if ( tst.isContext( context ) ) {
            this.$context = context;
        } else {
            console.warn( "# Expect Type" );
            console.warn( "- Context 2D" );
            console.warn( "- Canvas" );
            console.warn( "- Surface" );
            console.warn( "- Graphics" );
            throw new TypeError( context );
        }
    }
    get context () { return this.$context; }
    get canvas  () { return this.context.canvas; }
    get surface () { return new Surface( this.canvas ); }
    get size() { return this.canvas.size; }
    clear() {
        let size = this.size;
        this.context.clearRect( 0, 0, size.w, size.h );
        return this;
    }
    fill( style ) {
        let size = this.size;
        let c = this.context;
        c.fillStyle = style;
        this.context.fillRect( 0, 0, size.w, size.h );
        return this;
    }
}

Graphics.isSurface = function( o ) {
  return ( o instanceof Surface );
}

Graphics.isGraphics = function( o ) {
  return ( o instanceof Graphics );
}

Graphics.isCanvas = function( o ) {
  return ( o instanceof HTMLCanvasElement );
}

Graphics.isContext = function( o ) {
  return ( o instanceof CanvasRenderingContext2D );
}

// CSS Color Palette
class Palette {}

// CSS Color
class Color {}

// Helper for Drawing Lines & Polygons
class Pen {}

// Helper for Drawing Solid Shapes
class Brush {}

// This should contain the Surface instance
// that's being used by ColorPair
class ColorCodec {} // Color Encoder / Decoder

// This should handle the acquire / apply logic
// ColorPair should be much simpler
class ColorPairAdapter {}

// Wrapper for ImageData
class PixelMap {
    // Image Data Wrapper
    constructor( w, h ) {
        if ( PixelMap.isImageData( w ) ) {
            this.$image = w;
        } else {
            w = ( parseInt( w ) || 1 );
            h = ( parseInt( h ) || 1 );
            this.$image = new ImageData( w, h );
        }
    }
    get image() { return this.$image; }
    get data() { return this.image.data; }
    get w() { return this.image.width; }
    get h() { return this.image.height; }
    get size() {
        let i = this.$image;
        let w = i.width;
        let h = i.height;
        return { w, h };
    }
    getOffset( x, y ) {
        return ( 4 * ( y * this.w + x ) );
    }
}

PixelMap.isPixMap = function( o ) {
    return ( o instanceof PixelMap );
}

PixelMap.isImageData = function( o ) {
      return ( o instanceof ImageData );
}


// Single RGBA Pixel
class Pixel {
  constructor( r, g, b, a ) {
      this.accept( r, g, b, a );
  }
  accept( r, g, b, a ) {
      this.r = this.byte( r );
      this.g = this.byte( g );
      this.b = this.byte( b );
      this.a = this.byte( a );
  }
  get r() { return this.$r; }
  get g() { return this.$g; }
  get b() { return this.$b; }
  get a() { return this.$a; }
  set r( n ) { this.$r = this.byte( n ); }
  set g( n ) { this.$g = this.byte( n ); }
  set b( n ) { this.$b = this.byte( n ); }
  set a( n ) { this.$a = this.byte( n ); }
  byte( n ) { return     ( 255 & parseInt  ( n || 0 ) ); }
  real( n ) { return byte( 255 * parseFloat( n || 0 ) ); }
  ratio( n ) { return n / 255; }
  get alpha() { return this.ratio( this.a ); }
  set alpha( n ) { this.a = 255 * par; }
  getInteger() {
      return (
        ( this.a << 24 )
      + ( this.r << 16 )
      + ( this.g <<  8 )
      + ( this.b )
      )
  }
  getVector() {
      let va = this.alpha;
      let vr = this.ratio( this.r );
      let vg = this.ratio( this.g );
      let vb = this.ratio( this.b );
      return { va, vr, vg, vb };
  }
  setInteger( i ) {
      i = parseFloat( i || 0 );
      this.b = this.byte( i ); i >>= 8;
      this.g = this.byte( i ); i >>= 8;
      this.r = this.byte( i ); i >>= 8;
      this.a = this.byte( i );
      return this;
  }
  setVector( v ) {
      this.alpha = v.va;
      this.r = this.real( v.vr );
      this.b = this.real( v.vg );
      this.g = this.real( v.vg );
      return this;
  }
  read( buffer, offset ) {
      this.r = buffer[ 0 + offset ];
      this.g = buffer[ 1 + offset ];
      this.b = buffer[ 2 + offset ];
      this.a = buffer[ 3 + offset ];
      return this;
  }
  write( buffer, offset ) {
      buffer[ 0 + offset ] = this.r;
      buffer[ 1 + offset ] = this.g;
      buffer[ 2 + offset ] = this.b;
      buffer[ 3 + offset ] = this.a;
      return this;
  }
  createPixelMap() {
      let pixmap = new PixelMap( 1, 1 );
      this.write( pixmap.data, 0 );
      return pixmap;
  }
  createSurface( w, h ) {
      let sfc = new Surface( w, h );
      let gfx = new Graphics( sfc );
      gfx.fill( `rgb(${this.r},${this.g},${this.b})` );
      return sfc;
  }
}

// Foreground / Backgound Color Pair
class ColorPair {
    constructor( fgc, bgc ) {
        this.createSurface();
        this.accept( fgc, bgc );
    }
    createSurface() {
        let c = document.createElement( "CANVAS" );
        c.width  = c.height = 2;
        this.surface = c;
        this.graphics = c.getContext( "2d", { willReadFrequently: true } );
        return this;
    }
    get w() { return this.surface.width ; }
    get h() { return this.surface.height; }
    get size() {
        return {
            w : this.w ,
            h : this.h
        }
    }
    get fgc() { return this._fgc_; }
    get bgc() { return this._bgc_; }
    set fgc( o ) { this._fgc_ = this.convertToHex( o ); }
    set bgc( o ) { this._bgc_ = this.convertToHex( o ); }
    accept( fgc, bgc ) {
        this.fgc = fgc;
        this.bgc = bgc;
        return this;
    }
    fill( color ) {
        let gc = this.graphics;
        gc.fillStyle = ( color || "#000000" );
        gc.fillRect( 0, 0, this.w, this.h );
        return this;
    }
    getPixelMap() {
        let gc = this.graphics;
        return ( gc.getImageData( 0, 0, this.w, this.h ) );
    }
    convertToPixel( color ) {
        this.fill( color );
        let pixmap = this.getPixelMap();
        let pixel = new Pixel();
        pixel.read( pixmap.data, 0 );
        return pixel;
    }
    convertToHex( color ) {
        let c = this.convertToPixel( color );
        let r = c.r << 16;
        let g = c.g << 8;
        let b = c.b;
        c = ( r + g + b );
        let s = c.toString( 16 );
        let more = 6 - s.length;
        if ( more > 0 ) { s = "0".repeat( more ) + s };
        return ( "#" + s );
    }
    readGadgets( fgcInput, bgcInput ) {
        if (! this.isColorInput( fgcInput ) ) {
            throw new TypeError( fgcInput );
        }
        if (! this.isColorInput( bgcInput ) ) {
            throw new TypeError( bgcInput );
        }
        this.fgc = fgcInput.value;
        this.bgc = bgcInput.value;
        return this;
    }
    writeGadgets( fgcInput, bgcInput ) {
        this.validateColorInputs( fgcInput, bgcInput );
        fgcInput.value = this.fgc;
        bgcInput.value = this.bgc;
        return this;
    }
    acquire( gadget ) {
        this.validateGadget( gadget );
        let cs = getComputedStyle( gadget );
        this.fgc = cs.color;
        this.bgc = cs.backgroundColor;
        return this;
    }
    apply( gadget ) {
        this.validateGadget( gadget );
        let st = gadget.style;
        st.color = this.fgc;
        st.backgroundColor = this.bgc;
        return this;
    }
    isPixelMap( o ) {
        return (
             ( o instanceof PixelMap  )
          || ( o instanceof ImageData )
        );
    }
    isGadget( o ) {
        return ( o instanceof HTMLElement );
    }
    isColorInput( o ) {
        if ( this.isGadget( o ) ) {
            if ( o.nodeName.toUpperCase() !== "INPUT" ) { return false; }
            return ( o.type.toUpperCase() === "COLOR" );
        }
        return false;
    }
    getPixelMapSize( pixmap ) {
        let w, h;
        this.validatePixelMap( pixmap );
        if ( pixmap instanceof ImageData ) {
          w = pixmap.width;
          h = pixmap.height;
        } else {
          w = pixmap.w;
          h = pixmap.h;
        }
        return { w, h };
    }
    getPixelOffset( pixmap, x, y ) {
        let size = this.getPixelMapSize( pixmap );
        let w = size.w;
        let h = size.h;
        return ( ( y * w + x ) * 4 );
    }
    readPixel( pixmap, x, y ) {
        let offset = this.getPixelOffset( pixmap );
        let pixel = new Pixel();
        pixel.read( pixmap.data, offset );
        return pixel;
    }
    writePixel( pixmap, x, y, pixel ) {
        let offset = this.getPixelOffset( pixmap );
        pixel.write( pixmap.data, offset );
        return this;
    }
    validatePixelMap( o ) {
        if (! this.isPixelMap( o ) ) {
            console.warn( "Expected a PixelMap object" );
            throw new TypeError( o );
        }
    }
    validateGadget( gadget ) {
        if (! this.isGadget( gadget ) ) {
            console.warn( "Expected gadget" );
            throw new TypeError( gadget );
        }
    }
    validateColorInputs( fgcInput, bgcInput ) {
        if (! this.isColorInput( fgcInput ) ) {
            console.warn( "Expected foreground color input" );
            throw new TypeError( fgcInput );
        }
        if (! this.isColorInput( bgcInput ) ) {
            console.warn( "Expected background color input" );
            throw new TypeError( bgcInput );
        }
    }
    composeState() {
        let fgc = this.fgc;
        let bgc = this.bgc;
        return JSON.stringify( fgc, bgc );
    }
    parseState( json ) {
        let cp = JSON.parse( json );
        this.fgc = cp.fgc;
        this.bgc = cp.bgc;
        return this;
    }
}


/* ------------------------------- */
/* --- [[    TEMPLATES      ]] --- */

/*
<datalist grammar="markdown" id="(?)">
- ???
</datalist>
*/

/*
function on_click_???( ev ) {
    // ⚡ 
    try {
      // ack( ev.target.title );
      todo( "" );
    } catch ( e ) { bummer( e ); }
}
*/


/*

<section id="project_notes">

<h1>
    Project Notes
</h1>

<h2>
    Data List Magic for Hysteresis
</h2>

<pre contenteditable id="notes_01">

This Ryzen Manuscript permits reading and editing DATALIST
elements like the ones in this page.

Download this and implement as part of the Hysteresis app!

</pre>

</section>

*/


/* --------------------------------- */
/* --- [[ DATALIST MANAGEMENT ]] --- */

/*
<datalist grammar="markdown" id="datalist-ops">
- getDataListGrammar
- getDataLists
- getDataListIDs
- translateDataLists
- getDataListTree
- editDataListTree
- recoverAddressHints
- persistAddressHints
- refreshStoreKeyHints
</datalist>
*/

function getDataListGrammar( id ) {
    const ge = resolve( id );
    return (
          ( ge )
        ? ( ge.getAttribute( "grammar" ) )
        : ( null )
    );
}

function getDataLists( grammar ) {
    function matching( ge ) {
        const v = ge.getAttribute( "grammar" );
        return (
            grammar === v.toLowerCase()
        );
    }
    let lists = all( "DATALIST" );
    grammar = str( grammar ).toLowerCase();
    if ( grammar ) {
        lists = (
            lists.filter( matching )
        );
    }
    return lists;
}

function getDataListIDs( grammar ) {
    return (
        getDataLists( grammar )
        . map( ge => ge.id )
    );
};

function translateDataLists() {
    let oe;
    function xlate( ge ) {
        ge.setAttribute( "grammar", "html" );
        const s = ge.innerText;
        const items = (
            ( s )
            . split( "\n" )
            . map( str )
            . filter( s => s )
        );
        ge.innerHTML = "";
        items.forEach(
            t => {
                oe = ge.appendChild( elx( "OPTION" ) );
                oe . value = str( t.slice( 1 ) );
            }
        );
    }
    let lists = getDataLists( "markdown" )
    lists.forEach( xlate );
}

function getDataListTree() {
    const tree  = {};
    function add_entry( o ) {
        const id = ( o.id || nid() );
        const opts = arr( o.options );
        tree[ id ] = opts.map( g => g.value );
    };
    const lists = getDataLists();
    lists . forEach( add_entry );
    return ( tree );
};

function editDataListTree() {
    return zed( jst( getDataListTree() ) );
};

function refreshStoreKeyHints( k, inputID ) {
    let oe;
    const id = ( "store-key-hints" );
    const ge = resolve( id );
    const items = Object.keys( localStorage ).sort();
    ge.innerHTML = "";
    items.forEach(
        k => {
            oe = ge.appendChild( elx( "OPTION" ) );
            oe . value = ( k );
        }
    );
    const ie = resolve( inputID );
    if ( ie ) {
        ie.setAttribute( "list", id );
    }
}

function recoverAddressHints( k ) {
    let oe;
    const id = ( "address-hints" );
    const ge = resolve( id );
    k = ( k || ADDRESS_HINT_KEY );
    v = load( k );
    if ( null === v ) {
        return ( persistAddressHints( k ) );
    }
    ge.innerHTML = ( v );
    console.debug( `Read "${k}" from Store` );
}

function persistAddressHints( k ) {
    let oe;
    const id = ( "address-hints" );
    const ge = resolve( id );
    k = ( k || ADDRESS_HINT_KEY );
    v = ge.innerHTML;
    save( k, v );
    console.debug( `Wrote "${k}" to Store` );
}

addEventListener( "load", function( e ) {
    recoverAddressHints();
    translateDataLists();
} );

addEventListener( "beforeunload", function( e ) {
    persistAddressHints();
} );


/* ----------------------------- */
/* --- [[  METADATA OPS   ]] --- */

/*
<datalist grammar="markdown" id="metadata-ops">
- readAllMetaData
- readMetaData
- editMetaData
</datalist>
*/

function readAllMetaData() {
    const map = {};
    function add( m ) {
        const k = m.getAttribute( "content" );
        const v = m.getAttribute( "value"   );
        map[ k ] = v;
    }
    all( `meta[content]` ).forEach( add );
    return ( map );
}

function readMetaData() {
    const contents = [
      "Author"
    , "Version"
    , "Updated"
    , "Primary"
    , "Remote"
    ];
    const hdr = document.head;
    const map = {};
    function add( k ) {
        const q = ( `meta[content="${k}"]` );
        const m = hdr.querySelector( q );
        const v = m.getAttribute( "value" );
        map[ k ] = v;
    }
    contents.forEach( add );
    return ( map );
}

function editMetaData( version ) {
    const map = ( 
          ( version )
        ? ( readMetaData   () )
        : ( readAllMetaData() )
    );
    return (
        zed( jst( map ) )
    );
}

/* ---------------------------- */
/* --- [[ ARTICLE LOADER ]] --- */

function article( url, id, title, owner ) {
    const ops = article;
    const fe = ops.fieldset( title, owner );
    const ae = elx( "ARTICLE" );
    ae.id = ( str( id ) || nid() );
    ae.title = ( str( title ) || ae.id );
    fe.appendChild( ae );
    ops.request( url, ae );
    return ( ae );
}

article.fieldset = function( title, owner ) {
    const fe = elx( "FIELDSET" );
    const le = elx( "LEGEND");
    fe.appendChild( le );
    le.textContent = ( str( title ) || "New Article" );
    owner = ( owner || document.body );
    return ( owner.appendChild( fe ) );
};

article.request = function( url, gadget ) {
    function accept( s ) {
        gadget.innerHTML = ( s );
        console.log( "Article Received" );
    }
    function reject( reason ) {
        console.warn( "Request Rejected" );
        console.warn( { reason } );
    }
    console.log( "Request Article : " , url );
    const req = fetch( url );
    ( req )
    . then ( rsp => rsp.text() )
    . then ( accept )
    . catch( reject );
    return ( req );
};

article.morpheus = {
  provider : "https://nyteowldave.githib.io"
, splitter : "zed/hysteresis/notes"
};

article.lan = {
  provider : location.origin
, splitter : "app/morpheus/zed/hysteresis/notes"
};

article.address = function( filename ) {
    let pass;
    if ( location.origin.includes( "dave-") ) {
        pass = article.lan;
    } else {
        pass = article.morpheus;
    }
    const p = pass.provider;
    const s = pass.splitter;
    const k = filename;
    return ( [ p, s, k ].join("/") );
};

/* ------------------------------- */
/* --- [[ KEY EVENT HANDLER ]] --- */

function kianna( event ) {
    const mine =()=> kianna.mine( event );
    const asc =( ch )=> kianna.asc( ch );
    const ed = event.target;
    if ( "TEXTAREA" !== ed.nodeName ) {
        return;
    }
    const code = event.keyCode;
    if ( kianna.modkey( code ) ) {
        return;
    }
    const mods = kianna.modkeys( event );
    if ( mods === 0x01 ) {
        if ( code === 13 ) {
            mine();
            return kianna.exec( ed );
        }
        if ( code === asc( "Z" ) ) {
            mine();
            return kianna.zoom( ed );
        }
        if ( code === asc( "X" ) ) {
            mine();
            return kianna.swap( ed );
        }
        if ( code === asc( "K" ) ) {
            mine();
            return kianna.store_keys( ed );
        }
        if ( code === asc( "G" ) ) {
            mine();
            return kianna.globals( ed );
        }
        if ( code === asc( "H" ) ) {
            mine();
            return kianna.hints( ed );
        }
        if ( code === asc( "I" ) ) {
            mine();
            return kianna.gadgets_ids( ed );
        }
        if ( code === asc( "L" ) ) {
            mine();
            return kianna.data_list_ids( ed );
        }
        if ( code === asc( "T" ) ) {
            mine();
            return kianna.data_list_tree( ed );
        }
        if ( code === asc( "R" ) ) {
            mine();
            const k = kianna.selected( ed );
            return kianna.read_entry( k );
        }
        return;
    }
    if ( mods ) { return; }
    if ( code !== 9 ) { return; }
    mine();
    kianna.paste( ed, "\t" );
}

kianna.selected = function( ed ) {
    const lo = ed.selectionStart;
    const hi = ed.selectionEnd;
    return ( ed.value.slice( lo, hi ) );
};

kianna.exec = function( ed ) {
    runEditor( ed );
};

kianna.zoom = function( ed ) {
    ed . requestFullscreen();
};

kianna.swap = function( ed ) {
    const old = ( ed.memo || "" );
    ed.memo = ed.value;
    ed.value = old;
};

kianna.HINTS = {
  "ALT+ENTER" : "Run Editor Script"
, "ALT+G" : "Edit Global Symbols"
, "ALT+H" : "Edit Hotkey Hints"
, "ALT+I" : "Edit Gadget IDs"
, "ALT+K" : "Edit Store Keys"
, "ALT+L" : "Edit Data List IDs"
, "ALT+R" : "Read Store Entry (zuul)"
, "ALT+T" : "Edit Data List Tree"
, "ALT+X" : "Exchange Editor Value with Memo"
, "ALT+Z" : "Zoom Editor"
};

kianna.hints = function( ed ) {
    ed.value = jst( kianna.HINTS );
};

kianna.globals = function( ed ) {
    ed.value = ( seeker().join( "\n" ) );
};

kianna.store_keys = function( ed ) {
    const list = (
        Object
        . keys( localStorage )
        . sort()
    );
    ed.value = ( list.join( "\n" ) );
};

kianna.read_entry = function( k ) {
    k = str( k );
    if ( k ) {
        zuul( k );
    } else {
        dangit( `Selected Text is Empty` );
    }
};

kianna.data_list_ids = function( ed ) {
    const list = getDataListIDs();
    ed . value = list.join( "\n" );
};

kianna.data_list_tree = function( ed ) {
    const map = getDataListTree();
    ed . value = jst( map );
};

kianna.gadgets_ids = function( ed ) {
    const list = (
        all( `[id]` )
        . map( ge => ge.id )
        . sort()
    );
    ed . value = list.join( "\n" );
};

kianna.asc = function( ch ) {
    return (
        String( ch )
        . toUpperCase()
        . charCodeAt( 0 )
    );
};

kianna.paste = function( ed, t ) {
    const n = t.length;
    const lo = ed.selectionStart;
    const old = ed.value;
    ed.value = [
          old.slice( 0, lo )
        , old.slice( ed.selectionEnd )
    ].join( t );
    ed.selectionStart =
    ed.selectionEnd = ( lo + n );
    ed.focus();
};

kianna.mine = function( event ) {
    event.preventDefault();
    event.stopPropagation();
};

kianna.modkey = function( code ) {
    if ( code instanceof Event ) {
        code = code.keyCode;
    }
    return (
        [
            16, 17, 18, 91, 92
        ] . includes( event.keyCode )
    );
};

kianna.modkeys = function( event ) {
    let a = event.altKey   ? 0x01 : 0;
    let b = event.ctrlKey  ? 0x02 : 0;
    let c = event.shiftKey ? 0x04 : 0;
    let d = event.metaKey  ? 0x08 : 0;
    return ( a | b | c | d );
};

addEventListener( "keydown", kianna );


;
; console.info( `Loaded Hysteresis App Module` )
;

