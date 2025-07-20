
// image-tools.js
// 2025-JUN-02
// Load Image Files (FSO or Dropped)
// NEEDS: starz.js


// Create IMG from File or Data URL
function createPreviewImage( source, parent ) {

    const img = ella( 'img' );

    img.src = source;

    img.style.maxWidth     = '100%';
    img.style.maxHeight    = '400px';
    img.style.borderRadius = '8px';
    img.style.borderStyle  = 'solid';
    img.style.borderColor  = 'gold';
    
    if ( parent ) parent.appendChild( img );
    return img;

}


// Function to convert image URL to data URL
function urlToDataURL( url, action ) {

    const img = new Image();
    // img.crossOrigin = 'anonymous';
   
    img.onload = function() {


        const canvas = ella( 'canvas' );
        const ctx = canvas.getContext( '2d' );
        
        canvas.width  = img.width;
        canvas.height = img.height;
        
        ctx.drawImage( img, 0, 0 );
        
        try {
            const dataURL = canvas.toDataURL();
            action( dataURL, null );
        } catch ( e ) {
            console.error( e )
            action( null, 'Failed to convert image to data URL' );
        }

    };
    
    img.onerror = function( e ) {
        console.error( e )
        action( null, 'Failed to load image from URL' );
    };
    
    img.src = url;

}


// Get Base Filename from URL
function baseFileName( url ) { 
    return url.split( '/' )
        .pop()
        .split( '?' )[0] 
        || 'dropped-image'; 
}


// Verify URL is Data URL
function isDataURL( url ) {
    return url.startsWith( "data:image/" );
}


// Verify URL has valid Image Extension
function isImageURL( url ) {
    return url.match( 
        /\.(jpeg|jpg|gif|png|svg|webp|bmp|ico)(\?.*)?$/i
    );
}


// Read Image File
function readImageFile( file, onload, from="", title="" ) {
    if (! title ) {
        if ( from ) {
            title = `${from}-image`;
        } else {
            title = 'image';
        }        
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        onload( e.target.result, file, title );
    }    
    reader.readAsDataURL( file );
}


// Read Chosen File
function readChosenFile( file, onload ) {
    readImageFile( file, onload, "chosen" );
}


// Read Dropped File
function readDroppedFile( file, onload ) {
    readImageFile( file, onload, "dropped" );
}


