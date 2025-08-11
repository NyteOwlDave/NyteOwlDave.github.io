
/* 

    mathvec.js
    2025-JUN-10

    Vector Math Functions

    NEEDS : math.js

*/

const degToRad = n => n * Math.PI / 180;
const radToDeg = n => n * 180 / Math.PI;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Cartesian Vector Class { x, y }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Cartesian Constructor
class vec {
    constructor( x, y ) {
        this.x = x || 0;
        this.y = y || 0;
    }
    re() {
        return this.x;
    }
    im() {
        return this.y;        
    }
    mod() {
        return hypot( this.y, this.x );
    }
    arg() {
        return atan2( this.y, this.x );
    }
    add( v ) {
        const x = this.x + v.x;
        const y = this.y + v.y;
        return new vec( x, y );
    }
    sub( v ) {
        const x = this.x - v.x;
        const y = this.y - v.y;
        return new vec( x, y );
    }
    scale( k ) {
        const x = this.x * k;
        const y = this.y * k;
        return new vec( x, y );
    }
    dot( v ) {
        v = v || this;
        const x = this.x * v.x;
        const y = this.y * v.y;
        return (x + y);
    }
    cross( v ) {
        const x = this.x * v.y;
        const y = this.y * v.x;
        return (x - y);
    }
    perp() {
        return new vec( -this.y, this.x );
    }
    lerp( t, v ) {
        const k = (1 - t);
        const x = this.x * k + v.x * t;
        const y = this.y * k + v.y * t;
        return new vec( x, y );
    }
    project( v, k ) {
        const x = this.x + v.x * k;
        const y = this.y + v.y * k;
        return new vec( x, y );
    }
    combine( i, v, j ) {
        const x = this.x * i + v.x * j;
        const y = this.y * i + v.y * j;
        return new vec( x, y );
    }
    size() {
        return new size( this.x, this.y );
    }
    polar() {
        const r = this.mod();
        const t = this.arg();
        return new polar( r, t) ;
    }
    normal() {
        return normal( this.x, this.y );
    }
    snap( digits = 15 ) {
        const best = n => Number( n.toFixed( digits ) );
        const x = best( this.x );
        const y = best( this.y );
        return new vec( x, y );
    }
}

vec.coreDoc = `
vec         | Constructor
.x          | X coordinate (property)
.y          | Y coordinate (property)
.re         | Complex Real (method)
.im         | Complex Imaginary (method)
.mod        | Modulus (method)
.arg        | Argument (method)
.add        | Addition
.sub        | Subtraction
.scale      | Homogenous scaling
.dot        | Dot product
.cross      | Cross product
.perp       | Perpendicular { -y, x }
.lerp       | Linear Interpolation
.project    | Ray Projection
.combine    | Sum Interpolations
.size       | { x, y } => { w, h }
.polar      | { x, y } => { r, t }
.normal     | { x, y } => { x, y, z, w, tiny }
.snap       | Snap to arbitray digit precision
`;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Polar Class { r, t }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Polar Constructor
class polar {
    constructor(r, t) {
        this.r = r || 0;
        this.t = t || 0;
    }
    mod() {
        return this.r;
    }
    arg() {
        return this.t;
    }
    re() {
        return this.r * cos( this.t );
    }
    im() {
        return this.r * sin( this.t );
    }
    cartes() {
        const x = this.re();
        const y = this.im();
        return new vec( x, y );
    }
    size() {
        return this.cartes().size();
    }
    normal() {
        return new polar( 1, this.t );
    }
    rotate( n ) {
        return new polar( this.r, this.t + n );
    }
    scale( k ) {
        return new polar( this.r * k, this.t );
    }
}

polar.coreDoc = `
polar       | Constructor
.r          | Radius (property)
.t          | Angle Theta (property)
.mod        | Modulus (method)
.arg        | Argument (method)
.re         | Complex Real (method)
.im         | Complex Imaginary (method)
.cartes     | { re, im } => { x, y }
.size       | { re, im } => { w, h }
.normal     | { r, t } => { 1, t }
.rotate     | Add n radians to t
.scale      | Multiply r by scalar k
`;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Size Class { w, h }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Size Constructor
class size {
    constructor(w, h) {
        this.w = w || 0;
        this.h = h || 0; 
    }
    width() {
        return this.w;
    }
    height() {
        return this.h;
    }
    aspect() {
        return this.w / this.h;
    }
    slope() {
        return this.h / this.w;
    }
    area() {
        return this.w * this.h;
    }
    volume( depth=1 ) {
        return this.w * this.h * depth;
    }
    diagonal() {
        return hypot( this.h, this.w );
    }
    manhatten() {
        return abs( this.w ) + abs( this.h );
    }
    perimeter = function () {
        return 2 * this.manhatten();
    }
    normal() {
        return new size( abs( this.w ), abs( this.h ) );
    }
    cartes() {
        return new vec( this.w, this.h );
    }
    polar() {
        return this.cartes().polar();
    }
}

size.coreDoc = `
size        | Constructor
.w          | Width (property)
.h          | Height (property)
.width      | Width (method)
.height     | Height (method)
.aspect     | w / h
.slope      | 1 / aspect
.area       | w * h
.volume     | w * h * depth
.diagonal   | hypot( w, h )
.manhatten  | abs(x) + abs(y)
.perimeter  | 2 * manhatten
.polar      | { w, h } => { r, t }
.cartes     | { w, h } => { x, y }
.normal     | { w, h } => { abs(w), abs(h) }
`;


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Rectangle Class (DOMRect)
// { x, y, width, height }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Rectangle Constructor
function rect( x, y, w, h ) {
    if ( x instanceof HTMLElement ) {
        return x.getBoundingClientRect();
    }
    if ( x === screen ) {
        const w = screen.availWidth;
        const h = screen.availHeight;
        return new DOMRect( 0, 0, w, h );
    }
    return new DOMRect( x, y, w, h );
}

const VectorAPI = {
    vec, polar, size, rect
};


const VectorDoc = `
vec   | Construct instance of Cartesian Vector 
polar | Construct instance of Polar Vector
size  | Construct instance of Size
rect  | Construct instance of Rectangle (DOMRect)
`;


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "Class", { vec   } );
        add( "Class", { polar } );
        add( "Class", { size  } );
        add( "Function", { rect } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { VectorDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'mathvec.js' );
}

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
