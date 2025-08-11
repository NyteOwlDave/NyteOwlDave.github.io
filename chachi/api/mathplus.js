
/* 
    mathplus.js
    2025-JUN-07

    NEEDS: math.js
    LIKES: coredoc.js

    This module provides an Accessor object for
    all of the global functions in `math.js`.

*/

function lambertW(z, tolerance = 1e-6, maxIterations = 100) {
    if (z < 0) throw new Error("Lambert W not implemented for negative z in this version");
    if (z === 0) return 0;

    // Initial guess: for z > 0, log(z) or a refined approximation
    let w = z < 10 ? Math.log(z) : Math.log(z) - Math.log(Math.log(z));

    // Newton's method
    for (let i = 0; i < maxIterations; i++) {
        let ew = Math.exp(w);
        let wew = w * ew;
        let delta = (wew - z) / (ew * (w + 1)); // Newton's update
        w -= delta;
        if (Math.abs(delta) < tolerance) break;
    }

    return w;
}

// Solve x^x = c
function xpx( c = 25 ) {
    let lnC = Math.log(c); // ln(25) ≈ 3.2189
    let w = lambertW(lnC); // W(ln(25))
    let x = Math.exp(w); // x = e^W(ln(c))
    console.log(x);     // ~2.236
    // alert(x);
    return x;
}

function disc( a, b, c ) {
    return b*b - 4*a*c;
}

function quadratic( a, b, c ) {
    const d = disc( a, b, c );
    const dSqr = d * d;
    const denom = 2 * a;
    if ( dSqr < 1e-14 ) {
        return [ -b / denom ];
    }
    const root = Math.sqrt( Math.abs( d ) );
    if ( d > 0 ) {
        return [
            ( root - b ) / denom ,
            (-root - b ) / denom
        ];
    }
    const re =   -b / denom;
    const im = root / denom;
    return [
        `${re} + ${im}i` ,
        `${re} - ${im}i` ,
    ];
}

const MathPlus = {
    int,        float,      
    ceil,       floor,   
    round,      trunc,      snap,
    abs,        sgn,        sgnz,       
    rnd,        irnd,       
    pow,        pow2,       pow10,      
    sqrt,       cbrt,
    exp,        
    log,        log2,       log10,      logn,       
    rootn,      square,     cube,
    cruxx,      crux,       
    zeta,       zulu,
    d2r,        r2d,
    sin,        cos,        tan,        asin,       
    acos,       atan, 
    hypot,      atan2,      euler,      normal,
    now,        time,       date,       clock,
    disc,       quadratic,  lambertW,   xpx
};

const MathPlusDoc = `
int       | Integer from String
float     | Real Number from String
ceil      | Round to Next More Positive
floor     | Round to Next More Negative
round     | Round to Nearest
trunc     | Truncate Fraction
snap      | Snap to Precision
abs       | Absolute Value
sgn       | Sign [ -1, +1 ]
sgnz      | Sign [ -1, 0, + 1 ]
rnd       | Random Real
irnd      | Random Integer
pow       | a ^ n
pow2      | 2 ^ n
pow10     | 10 ^ n
sqrt      | Square Root
cbrt      | Cube Root
exp       | e ^ n
log       | Natural Logarithm
log2      | Binary Logarithm
log10     | Common Logarithm
logn      | Base-N Logarithm
rootn     | Primary Nth Root
square    | n ^ 2
cube      | n ^ 3
cruxx     | Difference of Squares
crux      | Squared Difference
zane      | Self Perp Product
zeta      | Self Dot Product
zulu      | Absolute Difference
r2d       | rad => deg
d2r       | deg => rad
sin       | adj / hyp
cos       | opp / hyp
tan       | opp / adj
asin      | Inverse Sine
acos      | Inverse Cosine
atan      | Inverse Tangent (two quadrant)
hypot     | sqrt( x ^ 2 + y ^ 2 )
atan2     | Inverse Tangent (four quadrant)
euler     | ( x, y ) => { x, y, r, t }
normal    | ( x, y ) => { x, y, z, w, tiny }
now       | Current Date and Time
time      | Current Time
date      | Current Date
clock     | Epoch Clock (tick count)
disc      | Discriminant for quadratic ( b*b - 4*a*c )
quadratic | Roots of Quadratic Equation 
lambertW  | Lambert W Function
xpx       | Solve pow( x, x ) = c
`;

function mathPlusHelp() {
    try { 
        return CoreDoc.report( MathPlusDoc );
    } catch ( e ) {
        const msg = "🟡 Requires 'coredoc.js'";
        console.log( msg );
        return msg;
    }
}

// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "MathPlus", { MathPlus } );
        add( "Function", { mathPlusHelp } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { MathPlusDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'mathplus.js' );
}


/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/

