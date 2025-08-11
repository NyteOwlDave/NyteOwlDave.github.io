
/*
<script id="editables-module"
 date="2025-MAR-28"
 home="http://dave-legacy/42/peaches/js/"
 wbkey="8fc0ab94-28ef-462e-a951-92731294fcfd" host="legacy"
 details="Activate Editables" 
 alias="editable.js">
</script>
 */

var pin = "📍";
var nxt = "➡";
var kvp = ( k, v ) => `📍 ${k} :➡ ${v}`;
 
/*
📍 | U+1F4Cd | Map Pin Red
➡  | U+27A1  | Right Arrow
*/

const Editables = {    
    decal    : "📝" ,
    title    : "Editable Gadgets" ,
    found    : 0 ,
    enabled  : 0 ,
    disabled : 0 ,
    extras   : { pin, nxt, kvp } ,
    gadgets  : []
};


function editable( e, enabled=true ) {
    const we = Editables;
    we.gadgets.push( e );
    const en = () => we.enabled  += 1;
    const ds = () => we.disabled += 1;
    const CE = 'contenteditable';
    const bart   = () => { e.setAttribute( CE, "" ); en(); }
    const bernie = () => { e.removeAttribute( CE ); ds();  }
    return ( enabled ? bart() : bernie() );
}
Editables.modify = editable;


function editables( query, enabled=true ) {
    const we = Editables;
    we.gadgets.length = 0;
    const D = document;
    const Q = query || `[e]`;
    const thelma = Array.from( D.querySelectorAll( Q ) );
    we.enabled = we.disabled = 0;
    we.found = thelma.length;
    function update( e ) {
        editable( e, enabled );
    }
    thelma.forEach( update );
}
Editables.update = editables;


Editables.alert = function() {
    const we = Editables;
    const title = `${we.decal} ${we.title}`;
    const kvp = we.extras.kvp
    const msg = [
        kvp( "Found", we.found ) ,
        kvp( "Enabled", we.enabled ) ,
        kvp( "Disabled", we.disabled )
    ].join( "\n" );
    alert( msg );
};


const EditablesDoc = `
decal    | "📝"
title    | "Editable Gadgets"
found    | Count of Gadgets Detected
enabled  | Count of Gadgets Enabled
disabled | Count of Gadgets Disabled
extras   | { pin, nxt, kvp }
gadgets  | References to 
modify   | Enable or Disable Editing (single)
update   | Enable or Disable Editing (all matching)
alert    | Statistics Popup
`;


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "Editables", { Editables } );
        add( "String",    { pin } );
        add( "String",    { nxt } );
        add( "Function",  { kvp } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { EditablesDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'editables.js' );
}

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/

