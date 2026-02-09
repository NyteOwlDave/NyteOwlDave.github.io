

/* 
    Date Scroller ~ 2025-MAR-11
    date-scroller.js
*/

//[ dateScrollerDetails ]
let dateScrollerDetails = { id : "date-paging" };

function dateTryCatch( action, locus, payload ) {
    try { 
        const result = action( payload ); 
        dateLogEntry( locus, { action, payload, result } );
    } catch ( error ) {
        dateLogEntry( locus, { action, error } );
    }
}

function dateToDo( what ) {
    console.log ( '🚧', what || "unspecified" )
}

function createDateButton( caption ) {
    const D = document;
    const B = D.createElement( 'button' );
    B.textContent = caption;
    return B;
}

function getDateDetails() {
    const o = dateScrollerDetails;
    o.container  = gid( o.id );
    o.dateGadget = container.querySelector( 'date' );
    return o;
}

function insertYesterday( details ) {
    const caption = "🔙 Yesterday";
    const button = createButton( caption );
    const container = details.container;
    const dateGadget = details.dateGadget;
    container.insertBefore( button, dateGadget );
}

function insertTommorow( details ) {
    const caption = "Tomorrow 🔜";
    const button = createButton( caption );
    const container = details.container;
    const dateGadget = details.dateGadget;
    container.insertBefore( button, dateGadget );
}

function insertDateButtons() {
    const details = createDateDetails();
    details.prev = insertYesterday( details );
    details.next = insertTomorrow( details );
    return { prev, next };
}

function initDateScroller() {
    insertDateButtons();
}

function prepCoolDate( source ) {
    if ( source instanceof Event ) {
        source = source.target;
    }
    if ( source instanceof HTMLElement ) {
        source = source.textContent;
    }
    if ( "string" === typeof source ) {
        return source.trim().toUpperCase();
    } else {
        throw new TypeError( source );
    }
}

function readDate() {
    return prepCoolDate( dateScrollerDetails.dateGadget );
}

function writeDate( dt ) {
    dt = prepCoolDate( dt );
    return dateScrollerDetails.dateGadget.textContent = dt;
}

function visitTomorrow( event ) {
    function enact() {
        const dt = new CoolDate();
        dt.value = readDate();
        dt.next().visit();
    }
    dateTryCatch( enact, "Visit Tomorrow" );
}

function visitYesterday( event ) {
    function enact() {
        const dt = new CoolDate();
        dt.value = readDate();
        dt.prev().visit();
    }
    dateTryCatch( enact, "Visit Yesterday" );
}

function chooseNewDate( event ) {
    // 🚧 TODO...
    dateToDo( "chooseNewDate" );
}

function dateLogEntry( what, details={} ) {
    what = what || "unspecified";
    details = details || {};
    const when = new Date();
    const entry = { what, when, details };
    dateScrollerDetails.log.push( entry );
    if ( details instanceof Object) {
        if ( details instanceof Error ) {
            alert( details );
        }
        else if ( details.error ) {
            alert( details.error );
        }
    }
    return entry;
}


console.log( "Loaded date-scroller.js API Module" );

