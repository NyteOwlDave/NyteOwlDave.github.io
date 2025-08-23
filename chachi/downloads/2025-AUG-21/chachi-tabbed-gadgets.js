
/* 
    ==>> IMPORTANT!!! <<==
    
    This hasn't yet been tested or debugged. There's a copy embedded in the
    markdown file named "X-Module-List.md", located in the Chippy workspace
    on the Omega host.

    LORD, HAVE MERCY!

    One more issue to consider. There's a related CSS file that handles the
    layout for tabbed gadgets in general. Currently, it's nowhere near the
    Chachi workspace or repo. Instead it's located in Chippy's style folder
    on the Omega host. Sheeeeeesh. Extrapolating embedded code is a real
    nightmare in practice. Most especially when multiple workstations and
    repositories are involved. Grrrrrrrr.....

    It's no wonder I can't find anything after a day or two passes. With the
    sheer volume of work I put out, on so many different platforms, there's
    no need to blame it on ADHD!!!

*/

/*

    chachi-tabbed-gadgets.js

    MODULE DEPENDENCIES:

      chachi-table-api.js (interdependent)
      legends.js 
      joni.js
      editables.js

    GLOBAL OBJECT DEPENDENCIES:

      AppAgent
      Status

    GLOBAL STRING DEPENDENCIES:

      TableHTML
      TableHeaderRowHTML
      TableBodyRowHTML

    REMARKS:

    These object and string dependencies are an ugly hack.
    Originally this module was embedded in "IDB Demo". Until I can
    refactor these things, this is what we'll need to contend with.

*/

Gadgets = {};

;( (me) => {

    me.tabs = {};           // References to tab gadgets
    me.user = {};           // References to user gadgets
    me.framework = {};      // References to fieldset and legend gadgets

    // Safely select a gadget based on ID
    // Our unusual choice for static vs. dynamic (user) editing gadgets
    // makes using this method important.
    // This will only select "editing" gadgets.
    // Tabs, Sections, Fieldset, and Legend are accessed by other means.
    me.choose = function( id ) {
        const gadget = ( me[ id ] || me.user[ id ] );
        if (! gadget instanceof HTMLElement ) {
            throw new Error( "Gadget ID is invalid: " + id );
        }
        return gadget;
    };

    // Confirm that an id refers to a static editing gadget
    me.isStatic = function( id ) {
        return ( me[ id ] instanceof HTMLElement );
    }

    // Confirm that an id refers to a dynamic (user) editing gadget
    me.isUser = function( id ) {
        return ( me.user[ id ] instanceof HTMLElement );
    }

    // Select the Tab Gadget that Corresponds
    //   to an ID for an Editing Gadget
    me.tabFor = function( id ) {
        if ( me.tabs[ id ] ) {
            return me.tabs[ id ];
        }
        const legend = me.framework.legend;
        const q = `div.tab[for="${id}"]`;
        return ( me.tabs[ id ] = legend.querySelector( q ) );
    }

    // Select the Section Gadget that Corresponds 
    //   to an ID for an Editing Gadget
    me.sectionFor = function( id ) {
        const gadget = choose( id );
        return gadget.parentElement;
    }

    // Throw a Logic Error
    me.logicError = function() {
        throw new Error( "Internal Logic Error" );
    }

    // Throw an Incomplete Feature Error
    me.pending = function( what ) {
        throw new Error( "Incomplete feature: " + what );
    }

    // Remove the Content from an Editing Gadget
    me.clear = function( id ) {
        const gadget = me.choose( id );
        if ( gadget.nodeName === "TEXTAREA" ) {
            gadget.value = "";
        } else if ( gadget.nodeName === "TABLE" ) {
            ChachiTable.repopulate( 'table' );  // NEED THAT ID!!!
/*
            if (! gadget.innerHTML ) { 
                gadget.innerHTML = TableHTML;
            }
            const head = gadget.tHead;
            const body = gadget.tBodies[ 0 ];
            head.rows[ 0 ].innerHTML = TableHeaderRowHTML;
            body.rows[ 0 ].innerHTML = TableBodyRowHTML;
            head.rows.length = 1;
            body.rows.length = 1;
            gadget.tBodies.length = 1;
*/
        } else {
            me.logicError();
        }
        editables( 'td' );      // editables.js
    }

    // Read an Editing Gadget's Content
    me.read = function( id ) {
        const gadget = me.choose( id );
        if ( gadget.nodeName === "TEXTAREA" ) {
            return gadget.value;
        } else if ( gadget.nodeName === "TABLE" ) {
            return table.innerHTML;
        } else {
            me.logicError();
        }
    }

    // Overwrite an Editing Gadget's Content
    me.write = function( id, doc ) {
        const gadget = me.choose( id );
        if ( gadget.nodeName === "TEXTAREA" ) {
            gadget.value = doc;
        } else if ( gadget.nodeName === "TABLE" ) {
            table.innerHTML = doc;
            editables( 'td' );
        } else {
            me.logicError();
        }
    }

    // Compose a "Cache" key for an Editing Gadget
    // By default localStorage is the "Cache"
    me.cacheKey = function( id ) {
        const k = me.readTitle( id );
        return ( k ) ? ( k ) : ( document.title + " ~ " + id );
    }

    // Restore an Editing Gadget's Content from the Cache
    me.load = function( id ) {
        if ( AppAgent.retext ) { 
            Status.report( "Feature not supported by ReText" );
            return;
        }
        const key = me.cacheKey( id );
        const doc = localStorage.getItem( key );
        if ( doc === null ) {
            Status.report( `No cache entry for '${key}'` );
            return;
        }
        me.write( id, doc );
    }

    // Overwrite any Cached copy of an Editing Gadget's Content
    me.save = function( id ) {
        if ( AppAgent.retext ) { 
            Status.report( "Feature not supported by ReText" );
            return;
        }
        const key = me.cacheKey( id );
        const doc = me.read( id );
        localStorage.setItem( key, doc );
    }

    // Compose a filename for an Editing Gadget's content
    me.filename = function( id ) {
        const k = me.readTitle( id );
        return me.safeFilename( k  + ".txt" );
    }

    // Download an Editing Gadget's content
    me.download = function( id ) {
        const filename = me.filename( id );
        const doc = me.read( id );
        rico( doc, filename );      // legends.js
    }

    me.zoom = function( id ) {
        const gadget  = ( me.choose( id ) || document.body );
        if ( gadget === document.body ) {
            gadget.requestFullscreen();
        } else {
            const section = ( gadget.parentElement || gadget );
            section.requestFullscreen();
        }
    }

    me.selectTabFor = function( id ) {
        const tab = me.tabFor( id );
        deselectTabsExcept( tab );
        tab.classList.add( 'selected' );
    }

    me.show = function( id ) {
        const gadget = me.choose( id );
        const section = gadget.parentElement;
        hideSectionsExcept( section );
        section.classList.remove( 'hide' );
        gadget.focus();
    }

    me.hide = function( id ) {
        const gadget = me.choose( id );
        const section = gadget.parentElement;
        section.classList.add( 'hide' );
    }

    me.saveState = function() {
        if ( AppAgent.retext ) return;
        const key = document.title;
        const json = me.readState();
        localStorage.setItem( key, json );
    }

    me.loadState = function() {
        if ( AppAgent.retext ) return;
        const key = document.title;
        const json = localStorage.getItem( key );
        if ( json !== null ) {
            me.writeState( json );
        }
    }

    me.downloadState = function() {
        let filename = ( document.title + "-state.json" );
        filename = me.safeFilename( filename );
        const state = me.readState();
        rico( state, filename );
    }

    me.resetState = function() {
        me.sip.value = demoSourceCode;
        me.sop.value = me.sce.value = notes.value = "";
        me.sip.title = me.sop.title = me.sce.title 
           = me.notes.title = me.table.title = "";
        me.clear( 'table' );
    }

    me.readState = function() {
        const titles = me.readTitles();
        const input  = me.read( 'sip'   );
        const output = me.read( 'sop'   );
        const script = me.read( 'sce'   );
        const notes  = me.read( 'notes' );
        const table  = me.read( 'table' );
        const state = { titles, input, output, script, notes, table };
        return JSON.stringify( state );
    }

    me.writeState = function( json ) {
        let titles = {};
        function write( id, key ) {
            const doc = state[ key ];
            if ( doc ) { me.write( id, doc ); }
        }
        const state = JSON.parse( json );
        write( 'sce'  , 'script' );
        write( 'sip'  , 'input'  );
        write( 'sop'  , 'output' );
        write( 'notes', 'notes'  );
        write( 'table', 'table'  );
        titles = ( state.titles || titles );
        me.writeTitles( titles );
    }

    me.readTitle = function( id ) {
        const gadget = me.choose( id );
        let title = gadget.title.trim();
        if ( title ) { return title; }
        const tab = me.tabFor( id );
        if ( tab instanceof HTMLElement ) {
            title = tab.innerText.trim();
            if ( title ) { return title; }
        }
        return ( document.title + "-" + gadget.id );
    }

    me.readTitles = function() {
        const input  = me.readTitle( 'sip'   );
        const output = me.readTitle( 'sop'   );
        const script = me.readTitle( 'sce'   );
        const notes  = me.readTitle( 'notes' );
        const table  = me.readTitle( 'table' );
        return { input, output, script, notes, table };
    }

    me.writeTitle = function( id, title ) {
        const gadget = me.choose( id );
        gadget.title = me.safeTitle( title );
        if ( me.isStatic( id ) ) { return; }
        me.tabs[ id ].innerText = gadget.title;
    }

    me.writeTitles = function( o ) {
        const write = function( id, title ) {
            if (! title ) return;
            me.writeTitle( id, title );
        }
        write( 'sce'  , o.script );
        write( 'sip'  , o.input  );
        write( 'sop'  , o.output );
        write( 'notes', o.notes  );
        write( 'table', o.table  );
    }

    me.addUserGadget = function( id, type="textarea", title="", doc="" ) {
        const fieldset = me.framework.fieldset;
        const legend = me.framework.legend;
        type  = me.validateType( type );    // throws
        id    = me.safeID( id );
        title = me.safeTitle( title );
        doc   = me.safeDoc( doc );
        const section  = ella( 'section' );
        const gadget   = ella( type );
        gadget.title   = title;
        me.user[ id ] = gadget.id = id;
        // Type safety handled above
        if ( type === "TEXTAREA" ) {
            gadget.value = doc;
        } else if ( type === "TABLE" ) {
            gadget.innerHTML = doc;
            editables( 'td' );
        }
        section.classList.add( 'container' );
        section.classList.add( 'hide' );
        section.appendChild( gadget );
        fieldset.appendChild( section );
        const tab = ella( 'div' );
        tab.classList.add( 'tab' );
        tab.innerText = title;
        tab.setAttribute( 'for', id );
        tab.setAttribute( 'onclick', "showTab('" + id + "')" );
        legend.appendChild( tab );
        me.tabs[ id ] = tab;
    }

    me.removeTabFor = function( id ) {
        const tab = me.tabFor( id );
        if ( tab instanceof HTMLElement ) {
            if ( tab.classList.contains( 'tab' ) ) {
                tab.remove();
                delete me.tabs[ id ];
                return;
            }
        }
        Status.report( new Error( "Invalid tab for gadget id: " + id ) );
    }

    me.removeUserGadget = function( id ) {
        me.removeTabFor( id );
        const gadget = me.user[ id ];
        if ( gadget instanceof HTMLElement ) {
            if ( gadget.parentElement.nodeName === "SELECT" ) {
                gadget.parentElement.remove();
            } else {
                gadget.remove();
            }
            delete me.user[ id ];
            return;
        }
        Status.report( new Error( "Invalid gadget id: " + id ) );
    }

    me.validateType = function( type ) {
        type = String( type ).trim().toUpperCase();
        if ( [ "TEXTAREA", "TABLE" ].includes( type ) ) { return type; };
        throw new Error( "Gadget must be type TEXTAREA or TABLE" );
    }

    me.safeID = function( id ) {
        if ( "string" !== typeof id ) {
            return TiGG();
        }
        if ( document.getElementById( id ) ) {
            return TiGG();
        }
        return ( id.trim() || TiGG() );
    }

    me.safeTitle = function( title ) {
        const OOPS = "Untitled";
        if ( "string" !== typeof id ) {
            return OOPS;
        }
        return ( title.trim() || OOPS );
    }

    me.safeDoc = function( doc ) {
        const OOPS = "";
        if ( "string" !== typeof id ) {
            return OOPS;
        }
        return ( title.trim() || OOPS );
    }

    me.safeFilename = function( filename ) {
        function replaceAll( s, ch ) {
            return s.split( ch ).filter( s => (!! s ) ).join( "-" );
        }
        let k = replaceAll( filename, "\n" );
            k = replaceAll( k, "\t" );
        return ( replaceAll( k, " " ).toLowerCase() );
    }

    me.getKeys = function( o ) {
        return Object.keys( o || me );
    }

    me.getSelectedTab = function() {
        const legend = me.framework.legend;
        const q = `div.selected`;
        return legend.querySelector( q );
    }

    me.getVisibleSection = function() {
        const legend = me.framework.legend;
        const visible = o => (! ethel( o, 'hide' ) );
        const q = `fieldset section`;
        const sections = thelma( q );
        return ( sections.filter( visible )[ 0 ] );
    }

    me.init = function() {
        const choose = id => document.getElementById( id );
        const fieldset = me.framework.fieldset = document.querySelector( 'fieldset' );
        me.framework.legend = fieldset.querySelector( 'legend' );
        me.sce   = choose( 'sce'   );   me.tabFor( 'sce'   );
        me.sip   = choose( 'sip'   );   me.tabFor( 'sip'   );
        me.sop   = choose( 'sop'   );   me.tabFor( 'sop'   );
        me.notes = choose( 'notes' );   me.tabFor( 'notes' );
        me.table = choose( 'table' );   me.tabFor( 'table' );
        me.clear( 'table' );
        me.selectTabFor( 'sce' );
        editables( 'td' );      // editables.js
    }

    addEventListener( 'load', () => me.init() );

} ) ( Gadgets );

