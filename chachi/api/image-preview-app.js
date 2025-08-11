
// Extrapolated from image_preview_page.html

// Chat PSK/PASS
const CLAUDE_P = "https://claude.ai/";
const CLAUDE_S = "chat";
const CLAUDE_K = "2f7b0762-40c1-4d26-819c-744e45d5a123";

const PASS = {
    provider : CLAUDE_P ,
    splitter : CLAUDE_S ,
    key      : CLAUDE_K
};

PASS.visit = function() {
    const psk = CLAUDE_PSK;
    const p = psk.provider;
    const s = psk.splitter;
    const k = psk.key;
    const url = [ p, s, k ].join( "/" );
    window.open( url, url, "top=100,left=100" );
}


// Gadget References
const fileInput    = gid( 'fileInput'    );
const imagePreview = gid( 'imagePreview' );
const fileInfo     = gid( 'fileInfo'     );
const resetContent = gid( 'resetContent' );
const gadgets = {
    fileInput, imagePreview, fileInfo, resetContent
};


// Convert Bytes to Kilbytes String
function kilobytes( n ) {
    n = int( n ) / 1024;
    return ( n > 0 ) 
        ? `${n.toFixed(2)} KB` 
        : 'Unknown';
}


// Compose Image File Details
function composeFileInfo( fileName = 'Unknown', fileSize = 0, fileType = 'image' ) {

    fileSize = kilobytes( fileSize );

    return `
        <strong>File:</strong> ${fileName}<br>
        <strong>Size:</strong> ${fileSize}<br>
        <strong>Type:</strong> ${fileType}
    `;

}


// Show Image File Info
function showFileInfo( fileName = 'Unknown', fileSize = 0, fileType = 'image' ) {

    fileInfo.innerHTML = composeFileInfo( fileName, fileSize, fileType );
    fileInfo.style.display = 'block';

}


// Create/Display IMG from File or Data URL
function displayImage( source ) {

    const parent = imagePreview;

    parent.classList.remove( 'empty', 'drag-over' );
    parent.innerHTML = '';
    
    createPreviewImage( source, parent );
    
}


// Reset Page to Default (no Image)
function resetPage( ) {
    // Hide file info
    fileInfo.style.display = 'none';
    // Remove preview content
    imagePreview.classList.add( 'empty' );
    imagePreview.innerHTML = resetContent.innerHTML;    
}


// File Loaded Event Handler
function onFileLoad( result, file, title ) {
    displayImage( result ); 
    showFileInfo( file.name || title, file.size, file.type );
};

// Data URL Created Event Handler
function onCreateDataURL( dataURL, error ) {
    if ( dataURL ) {
        const fileName = baseFileName( url );
        displayImage( dataURL );
        showFileInfo( fileName );
    } else {
        alert( 'Error loading image: ' + error );
    }
}


// Drag Over Event Handler
// Show Hover Style
function onDragOver( e ) {
    e.preventDefault();
    e.stopPropagation();
    imagePreview.classList.add( 'drag-over' );
};

// Drag Leave Event Handler
// Remove Hover Style
function onDragLeave( e ) {
    e.preventDefault();
    e.stopPropagation();
    imagePreview.classList.remove('drag-over');
};

// Drag Drop Event Handler
// Dropped URLs or Images
function onDropFiles( e ) {

    // Remove Hover Style
    onDragLeave( e );

    resetPage();

    // Handle dropped files
    if ( e.dataTransfer.files && e.dataTransfer.files.length > 0 ) {
        const file = e.dataTransfer.files[ 0 ];
        if ( file.type.startsWith( 'image/' ) ) {
            readDroppedFile( file, onFileLoad ); 
        } else {
            alert( 'Please drop a valid image file.' );
        }
        return;
    }

    // Get URL as String
    function gas( url ) {
        if ( isDataURL( url ) ) {
            displayImage( url );
            return;
        }
        // Check if URL points to an image
        if ( isImageURL( url ) ) {
            urlToDataURL( url, onCreateDataURL );
        } else {
            alert( 'Please drop a valid image URL.' );
        }
    }

    // Handle dropped URLs/images from other tabs
    const items = e.dataTransfer.items;
    for ( let i = 0; i < items.length; i++ ) {
        if ( items[ i ].type === 'text/uri-list' ) {
            items[ i ].getAsString( gas );
            break;
        }        
        // Handle images dragged directly from web pages
        if ( items[ i ].type.startsWith( 'image/' ) ) {
            const file = items[ i ].getAsFile();
            if ( file ) {
                readDroppedFile( file, onFileLoad ); 
            }
            break;
        }
    }
}


// File input handling   
function onFileInputChange( e ) {

    const file = e.target.files[ 0 ];

    resetPage();
    
    if ( file ) {

        if ( file.type.startsWith( 'image/' ) ) {
            readChosenFile( file, onFileLoad );
        } else {
            alert( 'Please select a valid image file.' );
            fileInput.value = '';
        }

    }

};


// Prevent Default Event Behavior
function onPreventDefault( e ) {
    e.preventDefault();
}


// One Time Initialization
function initPreviewPage() {

    // File Input Events
    fileInput.addEventListener( 'change', onFileInputChange );

    // Image Preview Events
    imagePreview.addEventListener( 'dragover'  , onDragOver  );
    imagePreview.addEventListener( 'dragleave' , onDragLeave );
    imagePreview.addEventListener( 'drop'      , onDropFiles );


    // Document Events
    document.addEventListener( 'dragover', onPreventDefault );
    document.addEventListener( 'drop'    , onPreventDefault );

    resetPage();

}

addEventListener( 'load', initPreviewPage );


/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
