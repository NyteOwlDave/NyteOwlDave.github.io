
//=> + Jasoom Math API | 2024-AUG-10 <=
//=> @ /std/api/jasoom.js <=

//[ __ ]
const __   = {};
__.track   = [];
__.add     = ( o ) => __.track.push( o );
__.reset   = () => { __.track = [] };
__.square  = ( x ) => ( x * x );
__.delta   = ( a, b ) => __.square( a - b );
__.lerp    = ( a, b, t ) => ( ( 1 - t ) * a + t * b );
__.project = ( a, b, t ) => ( a + t * b );
__.combine = ( a, at, b, bt ) => ( a * at + b * bt );
__.split   = ( a, b ) => __.lerp( a, b, 0.5 );
__.vec = function( x, y, z, u=0, v=0, w=0 ) {
    return { x, y, z, u, v, w };
}
__.range   = function( a, b ) {
    const lo = Main.min( b, a );
    const hi = Main.max( b, a );
    return { lo, hi };
}
__.clamp = function( a, b, c ) {
    const r = __.range( b, c );
    return Math.min( Math.max( a, r.lo ), r.hi );
}
__.wrap = function( a, b ) {
    b = Math.abs( b );
    a = a % b;
    if ( a < 0 ) return ( a + b );
    return a;
}
__.gamma = function( a, lo, hi, n ) {
    const range = __.range( lo, hi );
    lo = range.lo;
    hi = range.hi;    
    const scale = 1 / ( hi - lo );
    a = __.clamp( a, lo, hi );
    a = ((a - lo) * scale);
    return ( lo + Math.pow( a, n ) );
}
//========================================
__.pr = function( n, r ) {
    throw new Error( 'Incomplete' );
}
//========================================
__.npr = function( n, r ) {
    const bang = __.factorial;
    return bang( n ) / bang( n - r )
}
__.ncr = function( n, r ) {
    const bang = __.factorial;
    return bang( n ) /
    ( bang( n - r ) * bang( r ) );    
}
__.fact = function( n ) {
    n = parseInt( n );
    if ( isNaN( n ) ) return NaN;
    if ( n < 0 ) return NaN;
    if ( n < 2 ) return 1;
    let a = 2;
    let b = 3;
    while ( b <= n ) {
        if ( isNaN( a ) ) return a;
        a *= b;
        b += 1;
    }
    return a;
}
__.fibo = function( n ) {
    n = parseInt( n );
    if ( isNaN( n ) ) return NaN;
    if ( n < 0 ) return NaN;
    if ( n < 1 ) return 0;
    if ( n < 3 ) return 1;
    let a = 1;
    let b = 1;
    while ( --n > 1 ) {
        if ( isNaN( a ) ) return a;
        const c = a;
        a += b;
        b = c;
    }
    return a;
}
__.status = function( silent=false ) {
    let icon;
    function report( ... args ) {
        console.log( icon, ... args ); 
    }
    function zero() {
        icon = '🔘';
        report( "The log is empty" );
        return 0;
    }
    function one() {
        icon = '👍';
        report( "The log contains just 1 entry" );
        return 1;
    }
    function few( count ) {
        icon = '🔷';
        report( "The log contains", count, "entries" );
        return count;
    }
    function many( count ) {
        icon = '🔶';
        report( "The log contains", count, "entries!" );
        return count;
    }
    function mongo( count ) {
        icon = '🔴';
        report( "The log NOW contains", count, "entries!!!" );
        return count;
    }
    const n = __.track.length;
    if ( silent ) return n;
    if ( !n ) {
        return zero(); 
    }
    if ( n < 2 ) {
        return one();
    } 
    if ( n < 50 ) {
        return few( n );
    } 
    if ( 1000 ) {
        return many( n );
    } else {
        return mongo( n );
    }
}

// The Jeddak of Helium brooks no bad callbacks
//[ tardos ]
const tardos = ( o ) => {
    if ( Array.isArray( o ) ) {
        o.forEach( tardos );
        return;
    }
    const isFunc = ( o ) => ( 'function' == typeof o );
    if ( isFunc( o ) ) return;
    throw new TypeError( "Argument isn't a function" );
}

// The Jeddak of Thark brooks no bad numbers
//[ tarkas ]
const tarkas = ( o ) => {
    if ( Array.isArray( o ) ) {
        o.forEach( tarkas );
        return;
    }
    if ( isFinite( o ) ) return;
    throw new TypeError( "Argument isn't a number" );
}

//[ foray ]
function foray( fn, n ) {
    try {
        return fn( n );
    } catch( err ) {
        __.add( err );
        return NaN;
    }
}

// Generates a sample point as { x, y=f(x), z=xx, u=yy, v=xy }
//[ kantos ]
const kantos = ( x, yfx ) => {
    tardos( yfx ); // Throws
    const y = foray( yfn, x );
    const z = y*y;
    const u = x*x;
    const v = x*y;
    return vec( x, y, z, u, v );
} 

// Prepares arguments for dejah, hunt, and sniff
//[ Woola ]
class Woola {
    constructor( f, a, b, n ) {
        this.init( f, a, b, n );
    }
    reset() {
        this.state = {
            a : 0, b : 0, n : 0, f : ( o => o )
        }
        return this;
    }
    integer( n ) {
        return parseInt( n );
    }
    whole( n ) {
        return Math.abs( this.integer( n ) );
    }
    natural( n ) {
        return this.whole( n ) || 1;
    }
    safeCount( n ) {
        n = this.whole( n );
        return ( n > 1 ) ? n : 2;
    }
    real( n ) {
        return parseFloat( n );
    }
    init( f, a, b, n ) {
        this.reset();
        tardos( f );
        this.state.f = f;
        tarkas( n = this.safeCount( n ) );
        this.state.n = n;
        tarkas( a = this.real( a ) );
        tarkas( b = this.real( b ) );
        this.state.a = a;
        this.state.b = b;
        return this;
    }
    get callback() {
        return this.state.f;
    }
    get lower() {
        let { a, b } = { ... this.state };
        return Math.min( a, b );
    }
    get upper() {
        let { a, b } = { ... this.state };
        return Math.max( a, b );
    }
    get count() {
        return this.safeCount( this.state.n );
    }
    get step() {
        const a = this.lower;
        const b = this.upper;
        const c = this.count; // Always > 1
        return  ( b - a ) / ( c - 1 );
    }
}

// Assert object is a Woola instance
//[ Woola.isCalot ]
Woola.isCalot = ( o ) => {
    if ( o instanceof Woola ) return;
    throw new TypeError( "Argument isn't a calot" );
}

// Series generator (iterate samples)
//[ dejah ]
function* dejah( calot ) {
    Woola.isCalot( calot ); // Throws
    const fn = calot.callback; // Tardos not needed here
    const lo = calot.lower;
    const hi = calot.upper;
    const inc = calot.step;
    let i = lo;
    if ( 'function' == typeof fn ) {
        while ( i < hi ) {
            yield foray( fn, i );
            i += inc;
        }    
    } else {
        while ( i < hi ) {
            yield i;
            i += inc;
        }    
    }
}

// Squared difference of (a.z - b.z) for z-sorting vectors
//[ sola ]
const sola = ( a, b ) => __.square( a.z - b.z );

// Difference of a^2 - b^2 (for sorting)
//[ sarkoja ]
const sarkoja = ( a, b ) => __.square( a - b );

// The main dude
// Given a dejah and a sorty, produces the sorted sample set
//[ carter ]
const carter = ( genFunc, sortFunc ) => {
    __.reset();
    tardos( genFunc  ); // Throws
    tardos( sortFunc ); // Throws
    const results = [];
    for ( let sample of genFunc ) {
        results.push( sample )
    }
    __.status();
    return results.sort( sortFunc );
}

// Linear Search
//[ sniff ]
const sniff = ( calot ) => {
    __.reset();
    Woola.isCalot( calot ); // Throws
    const fn = calot.callback;
    tardos( fn );  // Throws
    const incr = calot.step;    // Always >= 0, or NaN
    if ( !incr ) return NaN;
    let lo = calot.lower;       // Always <= hi
    const hi = calot.upper;     // Always >= lo
    if ( lo >= hi ) return NaN;
    const results = [];
    const zsort = () => {
        const sorted = results.sort( sola );
        return sorted.pop();
    };
    while ( lo < hi ) {
        x = lo; 
        y = foray( fn, x ); 
        z = square( y );
        const sample = vec( x, y, z );
        results.push( sample );
        lo += incr;
    }
    if ( results.length < 1 ) return NaN;
    __.status();
    return zsort();
}

// Binary Search
//[ hunt ]
const hunt = ( calot ) => {
    __.reset();
    let fn;
    tardos( fn = calot.callback );
    tarkas( [ 
        calot.lower , 
        calot.upper , 
    ] );
    let limit = calot.count;    // Always >= 2
    limit = Math.max( Math.min( limit, 108 ), 10 );
    const diff   = __.delta;
    const square = __.square;
    const split  = __.split;
    const log    = __.add;
    const deeper = ( a, b, n ) => {
        if ( diff( a, b ) < 1e-31 ) {
            return vec( a, 0, 0 );
        }
        const x = split( a, b );
        const y = foray( fn, x );
        const z = square ( y );
        if ( n > limit ) {
            return vec( x, y, z );
        }
        if ( y < 1e-31 ) {
            return vec( x, y, z );
        }
        const guess = { x, y, z, a, b, n };
        log( { guess } );
        const xa = split( x, a );
        const xb = split( x, b );
        const ya = square( foray( fn, xa ) );
        const yb = square( foray( fn, xb ) );
        if ( ya <= yb ) {
            return deeper( x, a, n + 1 );
        } else {
            return deeper( x, b, n + 1 );
        }
    }
    const best = deeper( 
        calot.lower , 
        calot.upper , 
        0 , 
    );
    __.status();
    return best;
}

const JasoomDoc = `
tardos    | Assert argument is a function
tarkas    | Assert argument is a number
kantos    | Generate sample point { x, f(x) }
foray     | Callback wrapped in try-catch, with log
sarkoja   | Difference Squared (scalar)
sola      | Difference Squared (vector)
dejah     | Series generator (iterator)
carter    | Series sample set builder
sniff     | Linear search for best guess
hunt      | Binary search for best guess
Woola     | Set building/searching arguments
__        | Math Accessor
JasoomAPI | Root Accessor
`;

const JasoomAPI = {
    tardos  , tarkas  ,
    sola    , sarkoja ,
    dejah   , carter  ,
    sniff   , hunt    ,
    foray   , kantos  ,
    Woola   ,
    track : {
        log   : __.track ,
        add   : __.add   ,
        reset : __.reset , 
    } ,
    math : {
        vec     : __.vec     ,
        square  : __.square  ,
        delta   : __.delta   ,
        lerp    : __.lerp    ,
        split   : __.split   ,    
        project : __.project ,
        combine : __.combine ,    
        range   : __.range   ,    
        clamp   : __.clamp   ,    
        wrap    : __.wrap    ,
        gamma   : __.gamma   ,    
        pr      : __.pr      ,    
        npr     : __.npr     ,    
        ncr     : __.ncr     ,    
        fact    : __.fact    ,    
        fibo    : __.fibo    ,    
    }
};


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "JasoomAPI", { JasoomAPI } );
        add( "__", { __ } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { JasoomDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'jasoom.js' );
}

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/

