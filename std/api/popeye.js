
/* popeye.js */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function popeye( rex, anchors ) {
    const m = ( anchors || all( "A" ) );
    if (! Array.isArray( m ) ) {
        console.warn( "Error Subject:", anchors );
        throw new TypeError( `Expected a List of Anchors` );
    }
    const v = (
        ( m )
        . map(
            ge => popeye.encode( ge )
        )
    );
    if ( rex ) {
        rex = new RegExp( rex );
        const match =( entry )=> ( rex.test( entry.address ) );
        return ( v ).filter( match );
    }
    return ( v );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

popeye.encode = function( ge ) {
    const EXAMPLE = "https://example.com";
    const title   = ( str( ge.textContent ) || "Untitled" );
    const address = ( str( ge.href )  || EXAMPLE );
    const hint    = ( str( ge.title ) || title );
    const file    = str( ge.getAttribute( "download" ) );
    const icon    = str( ge.icon  );
    const decal   = str( ge.decal );
    const entry = {
          title , address , hint
        , icon, decal , file
    };
    return ( entry );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

popeye.tabulate = function( records ) {
    const entry =( o )=> {
        const title   = str( o.title   );
        const address = str( o.address );
        const hint    = str( o.hint    );
        const file    = str( o.file    );
        const icon    = str( o.icon    );
        const decal   = str( o.decal   );
        return [
            title , address , hint
          , icon, decal , file
        ];
    };
    return ( records.map( entry ) );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

popeye.edit = function( rex, gadget ) {
    function cells( te ) {
        return Array.from( te.querySelectorAll( "TD" ) );
    }
    function toggle_edit_mode( te ) {
        if ( te.editmode ) {
            te.editmode = false;
            canedit( cells( te ), true );
        } else {
            te.editmode = true;
            canedit( cells( te ), false );
        }
    }
    function table( rex, gadget ) {
        const te = gadget;
        const he = ( te.tHead || te.createTHead() );
        he.innerHTML = "";
        he.style.cursor = "pointer";
        he.onclick = function( e ) {
            toggle_edit_mode( te );
        };
        let ce, re = he.insertRow();
        popeye.schema.forEach(
            ( field ) => {
                ce = elx( "TH" );
                re . appendChild( ce );
                ce . textContent = ( field );
            }
        );
        const be = ( te.tBodies[ 0 ] || te.createTBody() );
        be.innerHTML = "";
        const m = popeye.tabulate( popeye( rex ) );
        m.forEach(
            ( record ) => {
                re = be.insertRow();
                ( record )
                . forEach(
                    ( field ) => {
                        ce = re.insertCell();
                        ce . textContent = ( field );
                    }
                );
            }
        );
        const st = te.style;
        st.width = st.maxWidth = "auto";
        return ( te );
    }
    function editor( rex, gadget ) {
        const ed = ( gadget );
        const m = popeye( rex );
        const v = JSON.stringify( m, null, 2 );
        ed . value = ( v );
        return ( ed );
    }
    if ( "string" === typeof gadget ) {
        if ( "TABLE" === gadget ) {
            const id = ( "popeye-table" );
            const ge = ( gid( id ) || elx( gadget ) );
            if (! ge.parentElement ) {
                doc.body.appendChild( ge );
            }
            gadget = ( ge );
        }
        else if ( "TEXTAREA" === gadget ) {
            const ge = ( gid( "sce" ) || elx( gadget ) );
            if (! ge.parentElement ) {
                doc.body.appendChild( ge );
            }
            gadget = ( ge );
        } else {
            gadget = gid( gadget );
        }
    }
    if ( "TABLE" === gadget.nodeName ) {
        return table( rex, gadget );
    }
    if ( "TEXTAREA" === gadget.nodeName ) {
        return editor( rex, gadget );
    }
    popeye.inspect( popeye( rex ) );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; popeye.edit.types = [ "TABLE", "TEXTAREA"   ]
; popeye.edit.ids   = [ "sce", "popeye-table" ]
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

popeye.inspect = function( rex ) {
    const t = popeye.tabulate( popeye( rex ) );
    t.unshift( popeye.schema );
    const c = console;
    c.clear();
    c.group( "Anchor Table" );
    c.table( t );
    c.groupEnd();
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

popeye.show = function( o, title ) {
    const m = ( o || Object.keys( popeye ).sort() );
    const t = ( title || "popeye" );
    ( m ).unshift( `[ ${t} ]\n` );
    alert( m.join( "\n" ) );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

popeye.assist = function( o, title, type ) {
    const m = arr( o || Object.keys( popeye ).sort() );
    ( m ).unshift( type || "Member" );
    const t = ( title || "popeye" );
    const c = console;
    c.clear();
    c.group( `[ ${t} ]` );
    c.table( m );
    c.groupEnd();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

popeye.schema = [
  "Title" , "Address" , "Hint"
, "Icon"  , "Decal"   , "File"
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "popeye.js" API Module` )
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

