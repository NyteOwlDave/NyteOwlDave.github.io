
function pcl( s ) {
    s = str( s );
    return ( 
        ( s )
        . split  ( "\n"   )
        . map    ( str    )
        . filter ( s => s )
    );
};

pcl.needs = [ "str" ];

pcl.details = ( `Parse Core List` );

pcl.argmap = {
  "s" : "Core List (req'd)"
};

