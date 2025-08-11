
// trig.js
// Simplified Math Functions
// 2025-JUN-02

const PI = Math.PI;

const int = n => parseInt( n );
const float = n => parseFloat( n );


const round = n => Math.round( n );
const floor = n => Math.floor( n );
const ceil = n => Math.ceil( n );
const trunc = n => Math.trunc( n );

const rnd = () => Math.random();
const rand = (min, max) => rnd() * (max - min) + min;
const irand = (min, max) => floor( rnd() * (max - min + 1) ) + min;


const degToRad = deg => deg * (PI / 180);
const radToDeg = rad => rad * (180 / PI);


const abs = n => Math.abs( n );
const sgn = n => Math.sign( n );
const sgnz = n => ( n === 0 ? 0 : sgn( n ) );

const min = (...args) => Math.min( ...args );
const max = (...args) => Math.max( ...args );
const mid = (a, b, c) => Math.min( Math.max( a, b ), c );


const cos = r => Math.cos( r );
const sin = r => Math.sin( r);
const tan = r => Math.tan( r );

const acos = t => Math.acos( t );
const asin = t => Math.asin( t );

const atan2 = (y, x) => Math.atan2( y, x );
const hypot = (y, x) => Math.hypot( y, x );

const square = n => ( n**2 );
const cube   = n => ( n**3 );

const sqrt = n => Math.sqrt( n );
const cbrt = n => Math.cbrt( n );

const pow = (n, p) => Math.pow( n, p );
const exp = n => Math.exp( n );

const log = n => Math.log( n );
const log10 = n => Math.log10( n );
const log2 = n => Math.log2( n );

const logn = (n, b) => ( log(n) / log(b) );
const rootn = (n, p) => Math.pow( n, 1 / p );

const mse = (a, b) => square( a - b );
const stddev = (a, b) => sqrt( mse( a, b ) );

function snap( n, digits=15 ) {
    return Number( n.toFixed( digits ) );
}

console.log( '📃', 'Loaded Local Module:', 'trig.js' );


/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
