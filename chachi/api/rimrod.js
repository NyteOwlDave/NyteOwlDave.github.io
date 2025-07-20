 
// rimrod.js
// 2025-JUN-02
// Texture Mapping with Arc


// Draw Texture Map with Arc
function arcMap( ctx, img, params={} ) {
    img = img ? img : API.source;
    const canvas = ctx.canvas;
    const w = canvas.width;
    const h = canvas.height;
    const details = {
        canvas, ctx, img, params,
        w, h
    };
    const theta = PI / 6;
    const chi = PI / 2;
    const neg = chi - theta;
    const pos = chi + theta;
    let startAngle = params.startAngle || neg;
    let endAngle   = params.endAngle   || pos;
    console.dir( { details } );
}


// Create ImageData from an Image
function createImageData( source, width=256, height=256 ) {
    const canvas = ella( 'canvas' );
    const dw = canvas.width  = width;
    const dh = canvas.height = height;
    const ctx = canvas.getContext( "2d" );
    ctx.drawImage( source, 0, 0, dw, dh );
    return ctx.getImageData( 0, 0, dw, dh );
}


// Create and Load an Image
function createImage( source, action, parent ) {
    const img = ella( 'img' );
    img.onload  = action;
    img.onerror = action;
    img.src = source;
    if ( parent ) { parent.appendChild( img ); }
    return img;
}

// Load and Preview an Image
function previewImage( url, parent ) {
    const top = selma( 'main' ) || document.body;
    const fig = ella( 'figure' );
    top.appendChild( ' fig ' );
    return createImage( url, null, fig );
}




