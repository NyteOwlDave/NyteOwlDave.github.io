
var pin = "📍";
var nxt = "➡";
var kvp = ( k, v ) => `📍 ${k} :➡ ${v}`;


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
        kvp( "Found"   , we.found    ) ,
        kvp( "Enabled" , we.enabled  ) ,
        kvp( "Disabled", we.disabled )
    ].join( "\n" );
    alert( msg );
};


console.log( "Loaded editables.js API Module" );
