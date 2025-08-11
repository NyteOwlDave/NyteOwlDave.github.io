
const canvas = document.getElementById( "canvas" );
canvas.width = canvas.height = 500;

// Canvas Options
const CanvasOptions = {
    canvas ,
    angle    : 0 ,
    cellSize : 16
};



// Compose CSS rgb tuplet
function _rgb( r, g, b ) {
    const fix = n => parseInt( n ) & 255;
    r = fix( r );
    g = fix( g );
    b = fix( b );
    return `rgb(${r}, ${g}, ${b})`;
}


// Compose CSS rgba tuplet
function _rgba( r, g, b, a=1 ) {
    const fix = n => parseInt( n ) & 255;
    r = fix( r );
    g = fix( g );
    b = fix( b );    
    return `rgba(${r}, ${g}, ${b}, ${a})`;

}

// Draw point
function point( pt ) {
    circleFill( pt, 3 );
}

// Draw line segment
function lineSeg( pt0, pt1 ) {
    const ctx = getContext();
    ctx.beginPath();
    ctx.moveTo( pt0.x, pt0.y );
    ctx.lineTo( pt1.x, pt1.y );
    ctx.stroke();
}

// Draw ray
function ray( pt, t, n ) {
    const pt1 = new vec( pt.x + t * n.x, pt.y + t * n.y );
    lineSeg( pt, pt1 );
}

// Draw spoke
function spoke( t, n ) {
    const pt = getCanvasCenter();
    ray( pt, t, n );
}

// Draw circle outline
function circle( pt, r ) {
    const ctx = getContext();
    ctx.beginPath();
    ctx.ellipse( pt.x, pt.y, r, r, 0, 0, 2*Math.PI );
    ctx.stroke();
}

// Draw circle w/ filled interior
function circleFill( pt, r ) {
    const ctx = getContext();
    ctx.beginPath();
    ctx.ellipse( pt.x, pt.y, r, r, 0, 0, 2*Math.PI );
    ctx.fill();
}

// Draw rectangle outline
function rectangle( rc ) {
    const ctx = getContext();
    ctx.beginPath();
    ctx.rect( rc.left, rc.top, rc.width, rc.height );
    ctx.stroke();
}

// Draw rectangle w/ filled interior
function rectangleFill( rc ) {
    const ctx = getContext();
    ctx.beginPath();
    ctx.rect( rc.left, rc.top, rc.width, rc.height );
    ctx.fill();
}


// Get canvas center
function getCanvasCenter() {
    const x = canvas.width  / 2;
    const y = canvas.height / 2;
    return new vec( x, y );
}

// Request Full Screen Mode
function zoomCanvas() { 
    canvas.requestFullscreen();
}

// Get Rendering Context for CANVAS
function getContext() {
    return canvas.getContext( "2d" );
}


// Clear the Canvas
function clearCanvas( color="#77FFFF" ) {
    const ctx = getContext();
    const w = canvas.width;
    const h = w;
    ctx.fillStyle = color;
    ctx.fillRect( 0, 0, w, h );
}


// Draw Grid Lines (single axis)
function drawGridLines( angle=0, cellSize=16 ) {
    const ctx = getContext();
    const w = canvas.width;
    const h = w;
    const cw = w / 2;
    const ch = h / 2;
    const step = cellSize;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 0.42;
    ctx.setLineDash([]);
    const radians = angle;
    let pt0 = {}, pt1 = {};

    // Draw everything but the axial lines
    for ( let x = step; x < w; x += step ) {

        let i = cw + x;
        ctx.beginPath();

        // Rotation for Quadrants I and IV
        pt0 = rotateXY( i,  -ch, cw, ch, radians );
        pt1 = rotateXY( i,  2*h, cw, ch, radians );
        ctx.moveTo( pt0.x, pt0.y );
        ctx.lineTo( pt1.x, pt1.y );

        ctx.stroke();

        ctx.beginPath();

        let j = cw - x;

        // Rotation for Quadrants II and III
        pt0 = rotateXY( j, -ch, cw, ch, radians );
        pt1 = rotateXY( j, 2*h, cw, ch, radians );
        ctx.moveTo( pt0.x, pt0.y );
        ctx.lineTo( pt1.x, pt1.y );

        ctx.stroke();

    }

    // Draw the axial lines
    function drawAxis( tilt=0 ) {

        ctx.beginPath();

        // Rotation for Quadrants I and IV
        pt0 = rotateXY( cw,  -ch, cw, ch, radians + tilt );
        pt1 = rotateXY( cw,  2*h, cw, ch, radians + tilt );
        ctx.moveTo( pt0.x, pt0.y );
        ctx.lineTo( pt1.x, pt1.y );

        ctx.stroke();

    }

    ctx.lineWidth *= 3;
    drawAxis( 0 );

}


// Draw Complete Isometric Grid
function drawIsometricGrid( angle, cellSize ) {
    clearCanvas();
    angle = angle || CanvasOptions.angle;
    cellSize = cellSize || CanvasOptions.cellSize;
    const draw = drawGridLines;
    const tilt = 60 * ( Math.PI / 180 );
    draw( angle, cellSize );
    draw( angle + tilt, cellSize );
    draw( angle - tilt, cellSize );
}

// Draw Complete Cartesian Grid
function drawCartesianGrid( angle, cellSize ) {
    clearCanvas();
    angle = angle || CanvasOptions.angle;
    cellSize = cellSize || CanvasOptions.cellSize;
    const draw = drawGridLines;
    const tilt = 90 * ( Math.PI / 180 );
    draw( angle, cellSize );
    draw( angle + tilt, cellSize );
}


// Rotate Vector { x,y } about Point { cx, cy }
// by angle theta (radians)
function rotateXY( x=1, y=0, cx=0, cy=0, theta=0 ) {
    const dx = x - cx;
    const dy = y - cy;
    const rho = Math.hypot( dy, dx );
    const eta = Math.atan2( dy, dx );
    const nx = Math.cos( eta + theta );
    const ny = Math.sin( eta + theta );
    x = cx + rho * nx;
    y = cy + rho * ny;
    return { x, y, dx, dy, cx, cy, nx, ny, rho, theta };
}


let canvasVisible = false;

// Toggle Canvas Visibility
function showCanvas() {
    const root = document.firstElementChild;
    canvasVisible = true;
    preserveState(); // See `chachi.js`
    root.style.setProperty( "--canvas-display", "inline-block" );
}

// Toggle Canvas Visibility
function hideCanvas() {
    const root = document.firstElementChild;
    canvasVisible = false;
    preserveState(); // See `chachi.js`
    root.style.setProperty( "--canvas-display", "none" );
}

// Toggle Canvas Visibility
function toggleCanvas() {
    if ( canvasVisible ) {
        hideCanvas();
    } else {
        showCanvas();
    };
}


// Canvas Key Event Handler
function canvasKeyDown( event ) {
    function handled() {
        event.preventDefault();
        event.stopPropagation();
    }
    function ascii( s ) {
        return s.toUpperCase().charCodeAt( 0 );
    }
    const code = event.keyCode;
    if ( event.altKey ) {
        if ( code === ascii( 'I' )) {
            showCanvas();
            drawIsometricGrid();
            return handled();
        }
        if ( code === ascii( 'C' )) {
            showCanvas();
            drawCartesianGrid();
            return handled();
        }
        if ( code === ascii( 'E' )) {
            showCanvas();
            clearCanvas();
            return handled();
        }
        if ( code === 145 ) {
            toggleCanvas();
            return handled();
        }
    }
    if ( code === 145 ) {
        // Math Menu visibility is handled in `chachi.js`
        if ( "function" === typeof toggleMathMenu ) {
            toggleMathMenu();
            return handled();
        }
    }
}

addEventListener( 'keydown', canvasKeyDown );

function canvasMouseEvent( event ) {
    const me = canvasMouseEvent;
    const state = me.state = me.state || {};
    switch ( event.type ) {
    case "mousedown": return press();
    case "mousemove": return move();
    case "mouseup"  : return release();
    }
    function handled() {
        event.preventDefault();
        event.stopPropagation();
    }
    function press() {
        if ( state.busy ) return;
        state.busy = true;
        state.count = 0;
        const rc = state.rc = canvas.getBoundingClientRect();
        state.xs = canvas.width  / rc.width;
        state.ys = canvas.height / rc.height;
        const ctx = state.ctx = getContext();
        state.x = event.clientX;
        state.y = event.clientY;
        const x = (state.x - rc.left) * state.xs;
        const y = (state.y - rc.top ) * state.ys;
        console.log( "Mouse Down", { x, y } );
        ctx.beginPath();
        ctx.moveTo( x, y );
        return handled();
    } 
    function move() {
        if (! state.busy ) return;
        const xx = event.clientX;
        const yy = event.clientY;
        const delta = abs(xx - state.x) + abs(yy - state.y);
        if ( delta ) {
            const ctx = state.ctx;
            const rc = state.rc;
            const x = (xx - rc.left) * state.xs;
            const y = (yy - rc.top ) * state.ys;
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black";
            ctx.lineTo( x, y );
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo( x, y );
            state.count += 1;
            state.x = x;
            state.y = y;
        }
        return handled();
    } 
    function release() {
        if (! state.busy ) return;
        console.log( "Mouse Up", state.count );
        move();
        state.busy = false;
        return handled();
    } 
}

canvas.addEventListener( 'mousedown', canvasMouseEvent );
canvas.addEventListener( 'mousemove', canvasMouseEvent );
canvas.addEventListener( 'mouseup',   canvasMouseEvent );


// Accessor
const GraphAPI = {
    _rgb, _rgba ,
    getContext ,
    clearCanvas ,
    showCanvas ,
    hideCanvas ,
    toggleCanvas ,
    rotateXY ,
    drawIsometricGrid ,
    drawCartesianGrid ,
    drawGridLines ,
    zoomCanvas ,
    point ,
    lineSeg ,
    ray ,
    spoke ,
    circle ,
    circleFill ,
    rectangle ,
    rectangleFill ,
    getCanvasCenter 
};


// Core Document
const GraphDoc = `
_rgb  | Compose CSS rgb tuplet
_rgba | Compose CSS rgba tuplet
getContext   | Get Canvas 2D Context 
clearCanvas  | Fill Canvas w/ Color
showCanvas   | Make the canvas visible
hideCanvas   | Make the canvas invisible
toggleCanvas | Toggle canvas visibility
zoomCanvas   | Request Canvas Full Screen
rotateXY     | Rotate a Point in 2D Space
drawIsometricGrid  | Draw Isometric Grid (3 axis)
drawCartesianGrid  | Draw Isometric Grid (2 axis)
drawGridLines   | Draw Partial Grid (1 axis)
getCanvasCenter | Centerpoint for canvas
point   | Draw point
lineSeg | Draw line segment
ray     | Draw ray
spoke   | Draw radial spoke
circle     | Draw circle outline
circleFill | Draw circle w/ filled interior
rectangle  | Draw rectangle outline
rectangleFill | Draw rectangle w/ filled interior
`;


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "GraphAPI", { GraphAPI } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { GraphDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'graph.js' );
}


/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/

