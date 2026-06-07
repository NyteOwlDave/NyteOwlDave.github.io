
function filter( list, rex ) {
    if ( "string" === typeof list ) {
        list = pcl( list );
    } else if ( o instanceof Object ) {
        if (! Array.isArray( list ) ) {
            list = Object.keys( list ).sort();
        } else {
            list = ( 
                ( list )
                . map( str )
                . filter( s => s )
            );
        }
    } else if ( "undefined" !== typeof list ) {
        list = [ String( list ) ];
    } else {
        throw new Error( `👮 List is Undefined` );
    }
    if ( rex ) {
        rex = new RegExp( rex );
        const ok =( s )=> ( rex.test( s ) );
        return ( list.filter( ok ) );
    } else {
        return ( list );
    }
}

filter.needs = [ "pcl" ];

filter.details = ( 
  `Obtain Filtered String List`
);

filter.argmap = {
  "list" : "Source List (req'd)"
, "rex"  : "Regular Expression (opt.)"
};

