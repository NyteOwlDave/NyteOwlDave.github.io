
/*
    populate-list.js
*/

function populate_list( select, options, update ) {
    const doc = document;
    const elx =( t )=> ( doc.createElement( t ) );
    const o = select;
    o . innerHTML = "";
    const m = options;
    const v = pcl( m ).sort();
    v . forEach( s => {
        const ce = elx( "OPTION" );
        ce . value = ce . textContent = ( s );
        o . appendChild( ce );
    } );
    if ( "function" === typeof update ) {
        update();
    }
}


