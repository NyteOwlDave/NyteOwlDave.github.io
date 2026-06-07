

function pcl( s ) {
    const str =( s )=> String( s || "" ).trim();
    s = str( s );
    return (
        ( s )
        . split  ( "\n"   )
        . map    ( str    )
        . filter ( s => s )
    );
}

