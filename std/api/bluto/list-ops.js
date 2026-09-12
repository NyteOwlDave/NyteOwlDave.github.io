
/*

# list-ops.js

<pre>

*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function pcl( o, sep="\n" ) {
    o = pcl.prep( o );
    return (
        ( o )
        . map( str )
        . filter( ( s ) => ( s ) )
    );
};

pcl.prep = function( o, sep="\n" ) {
    if ( o instanceof Object ) {
        if ( Array.isArray( o ) ) {
            return ( o ).map( str );
        }
        return Object.keys( o ).sort();
    }
    return (
        String( o )
        . split( sep )
    );
};

function filter( o, rex ) {
    o = pcl( o );
    if ( rex = str( rex ) ) {
        rex = new RegExp( rex );
        const match =( k )=> ( rex.test( k ) );
        return ( o ).filter( match );
    }
    return ( o );
};

function seeker( rex, ed ) {
    const our =( k )=> (! iwm.includes( k ) );
    const m = Object.keys( window ).filter( our );
    const v = filter( m, rex ).sort();
    if ( ed instanceof HTMLTextAreaElement ) {
        ed . value = ( v.join( "\n" ) );
        return ( ed );
    } else {
        return ( v );
    }
};

function kahlan( o, rex, ed ) {
    const org =( k )=> ( iwm.includes( k ) );
    const m = Object.keys( window ).filter( org );
    const v = filter( m, rex ).sort();
    if ( ed instanceof HTMLTextAreaElement ) {
        ed . value = ( v.join( "\n" ) );
        return ( ed );
    } else {
        return ( v );
    }
};

function populate_list( items, owner ) {
    const ops = populate_list;
    if (! gad( owner ) ) {
        owner = elx( "UL" );
    }
    let parent = ( owner.parentElement );
    if (! parent ) {
        parent = ops.section();
        parent . appendChild( owner );
    }
    const add =( s )=> {
        const ce = elx( "LI" );
        owner.appendChild( ce );
        ce . textContent = (
            ce . value = str( s )
        );
    };
    owner . innerHTML = "";
    items = pcl( items );
    items . forEach( add );
    return ( owner );
};

populate_list.section = function() {
    let section = (
           gid( "list_section" )
        || gid( "list-section" )
    );
    if (! section ) {
        section = elx( "SECTION" );
        doc.body.appendChild( section );
        section.id = "list_section";
    }
    return ( section );
};

function populate_droplist( items, owner ) {
    const ops = populate_droplist;
    if (! gad( owner ) ) {
        owner = elx( "SELECT" );
    }
    let parent = ( owner.parentElement );
    if (! parent ) {
        parent = ops.section();
        parent . appendChild( owner );
    }
    const add =( s )=> {
        const ce = elx( "OPTION" );
        owner.appendChild( ce );
        ce . textContent = (
            ce . value = str( s )
        );
    };
    owner . innerHTML = "";
    items = pcl( items );
    items . forEach( add );
    return ( owner );
};

populate_droplist.section = function() {
    let section = (
           gid( "droplist_section" )
        || gid( "droplist-section" )
    );
    if (! section ) {
        section = elx( "SECTION" );
        doc.body.appendChild( section );
        section.id = "droplist_section";
    }
    return ( section );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "list-ops.js" Gem Module` )
;

/*

</pre>

*/
