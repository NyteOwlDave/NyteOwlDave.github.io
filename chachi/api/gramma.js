
// gramma.js
// NEEDS: trig.js

const cls = () => console.clear();
const again = () => location.reload();

const D = document;
const B = D.body;

const gid = id => D.getElementById( id );
const ella = t => D.createElement( t );
const selma  = q => D.querySelector( q );
const selmax = q => D.querySelectorAll( q );
const thelma = q => Array.from( selmax( q ) );

let source = selma( 'img' );
let canvas = gid( 'canvas' );
let ctx = canvas.getContext( "2d" );

// Settings
let Gramma = {
    grid   : "#124242" , 
    fgc    : "#000000" ,
    bgc    : "#EEEE99" ,
    dot    : 5 ,
    origin : 7 , 
    thick  : 5 , 
    thin   : 3 ,
    wire   : 1
};


// Draw Line
function drawLine( x1=0, y1=0, x2=10, y2=10 ) {
    const pt = getCanvasCenter();
    x1 += pt.x; y1 += pt.y;
    x2 += pt.x; y2 += pt.y;
    ctx.strokeStyle = Gramma.fgc;
    ctx.lineWidth   = Gramma.thin;
    ctx.beginPath();
    ctx.moveTo( x1, y1 );
    ctx.lineTo( x2, y2 );
    ctx.stroke();
    ctx.closePath();
}

// Draw Vec
function drawVec( x=0, y=0, dx=10, dy=10 ) {
    drawLine( x, y, x+dx, y+dy );
}

// Draw Spoke
function drawSpoke( x=0, y=0, radius=10, angle=PI/4 ) {
    const dx = radius * cos( angle );
    const dy = radius * sin( angle );
    drawVec( x, y, dx, dy );
}

// Draw Wheel
function drawWheel( x=0, y=0, radius=100, startAngle=PI/14, sectors=7 ) {
    sectors = int( sectors );
    if ( sectors >= 2 ) {
        ctx.setLineDash( [ 4, 6 ] );
        const stepAngle = 2 * PI / sectors;
        while ( sectors-- ) {
            drawSpoke( x, y, radius, startAngle );
            startAngle += stepAngle;            
        }
        ctx.setLineDash( [] );
    }
    drawCircle( x, y, radius );
}

// Draw Wedge
function drawWedge( x=0, y=0, radius=100, startAngle=-PI/12, endAngle=PI/12 ) {
    const pt = getCanvasCenter();
    drawSpoke( x, y, radius, startAngle );
    drawSpoke( x, y, radius, endAngle   );
    x += pt.x;
    y += pt.y;
    ctx.beginPath();
    ctx.ellipse( x, y, radius, radius, 0, startAngle, endAngle );
    ctx.stroke();
    ctx.closePath();
}

// Draw Point
function drawPoint( x=0, y=0 ) {
    const pt = getCanvasCenter();
    x += pt.x;
    y += pt.y;
    ctx.fillStyle = Gramma.fgc;
    fillCircleCore( x, y, Gramma.dot );
}

// Draw Point List
function drawPointList( list ) {
    const center = getCanvasCenter();
    ctx.fillStyle = Gramma.bgc;
    list.forEach( pt => {
        pt.x += center.x;
        pt.y += center.y;
        fillCircleCore( x, y, Gramma.dot );
    } );
}

// Draw Circle
function drawCircle( x=0, y=0, radius=100, fill=false ) {
    const pt = getCanvasCenter();
    x += pt.x;
    y += pt.y;
    if ( fill ) {
        ctx.fillStyle = Gramma.bgc;
        fillCircleCore( x, y, radius );        
    } else {
        ctx.lineWidth =  Gramma.thick;
        ctx.strokeStyle = Gramma.fgc;
        drawCircleCore( x, y, radius );
    }
}

// Draw Circle Core
function drawCircleCore( x, y, radius ) {
    ctx.beginPath();
    ctx.ellipse( x, y, radius, radius, 0, 0, 2 * PI );
    ctx.stroke();
    ctx.closePath();
}


// Fill Circle Core
function fillCircleCore( x, y, radius ) {
    ctx.beginPath();
    ctx.ellipse( x, y, radius, radius, 0, 0, 2 * PI );
    ctx.fill();
    ctx.closePath();
}

// Fill Circle
function fillCircle(  x=0, y=0, radius=100 ) {
    drawCircle( x, y, radius, true );
}

// Fill Wedge
function fillWedge( x=0, y=0, radius=100, startAngle=-PI/12, endAngle=PI/12 ) {
    const pt = getCanvasCenter();
    x += pt.x;
    y += pt.y;
    ctx.fillStyle = Gramma.bgc;
    ctx.beginPath();
    ctx.moveTo( x, y );
    ctx.ellipse( x, y, radius, radius, 0, startAngle, endAngle );
    ctx.closePath();
    ctx.fill();
}


// Inspect API
function inspect( o ) {
    o = o || API;
    console.table( Object.entries( o ) );
}


// Erase Context
function wipeCanvas() { 
    const sz = getCanvasSize();
    ctx.clearRect( 0, 0, sz.w, sz.h );
}


// Draw Image to Context
function blitSource() {
    const sz = getCanvasSize();
    ctx.clearRect( 0, 0, sz.w, sz.h );
    ctx.drawImage( API.source, 0, 0, sz.w, sz.h );
}


// Draw Grid to Context
function drawGrid( dx, dy ) {
    const me = API;
    const C = me.canvas;
    const ctx = C.getContext( "2d" );
    const w = C.width;
    const h = C.height;
    dx = dx || 100;
    dy = dy || 100;
    me.blitSource();
    ctx.lineWidth   = Gramma.thin;
    ctx.strokeStyle = Gramma.grid;
    ctx.beginPath();
    for ( let x = dx; x < w; x += dx ) {
        ctx.moveTo( x, 0 );
        ctx.lineTo( x, h );
        ctx.stroke();
    }
    for ( let y = dy; y < h; y += dy ) {
        ctx.moveTo( 0, y );
        ctx.lineTo( w, y );
        ctx.stroke();
    }
    ctx.closePath();
    const cx = int( w / 2 );
    const cy = int( h / 2 );
    Fill.circleCore( cx, cy, Gramma.origin );
}

// Get Canvas Center Point
function  getCanvasCenter() {
    const me = API;
    const C = me.canvas;
    const x = 0.5 * C.width;
    const y = 0.5 * C.height;
    return { x, y };
}

// Get Canvas Size
function getCanvasSize() {
    const me = API;
    const C = me.canvas;
    const w = C.width;
    const h = C.height;
    return { w, h };
}

// Get Source Image Size
function getSourceSize() {
    const me = API;
    const S = me.source;
    const w = S.naturalWidth;
    const h = S.naturalHeight;
    return { w, h };
}

// Match Canvas to Image Size
function matchSize( canvas, img ) {
    const me = API;
    const C = me.canvas;
    const S = me.source;
    const w = S.naturalWidth;
    const h = S.naturalHeight;
    C.width  = S.width  = w;
    C.height = S.height = h;
    return { w, h };
}

// Acronyms
const Acronyms = { D, B };

// Draw Primitives
const Draw = {
    grid   : drawGrid   ,
    line   : drawLine   ,
    vec    : drawVec    ,
    spoke  : drawSpoke  ,
    wedge  : drawWedge  ,
    wheel  : drawWheel  ,
    point  : drawPoint  ,
    circle : drawCircle ,
    circleCore : drawCircleCore 
};

// Fill Primitives
const Fill = {  
    wedge  : fillWedge ,
    circle : fillCircle ,
    circleCore : fillCircleCore
};

// Accessor
const API = {
    Gramma, Acronyms, 
    Draw, Fill,
    canvas, source,
    cls, inspect, 
    wipeCanvas, blitSource, 
    getCanvasCenter, getCanvasSize, 
    getSourceSize, matchSize, 
    ella, selma 
};

function beginSession() {
    wipeCanvas();
    blitSource();
    Draw.grid();
}

addEventListener( 'load', beginSession );

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
