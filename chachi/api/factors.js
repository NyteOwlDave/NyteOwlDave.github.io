 
function sqrti( n ) {
    return floor( sqrt( int( n ) ) );
}

// Prime Factors
function apf( value ) {
    const list = [];
    const sieve = eratosthenes( value );
    let j = int( value ) || 0;
    if ( j < 2 ) { return list; }
    if ( j > 10000 ) { return list; }
    for ( let i = 0; i < sieve.length; i += 1 ) {
        const k = sieve[ i ];
        while ( j % k === 0 ) {
            list.push( k );
            j /= k;
        }
    }
    if ( j > 1 ) {
        list.push ( j);
    }
    return list;
}

// Factors
function factors( value ) {
    value = int( value ) || 0;
    const sq = sqrti( value );
    const results = [];    
    if ( value < 1 ) return results;
    else if( value == 1 ) return [ 1    ];
    else if( value == 2 ) return [ 1, 2 ];
    for ( let n=1; n<=sq; n++ ) {
        if ( value % n == 0 ) {
            results.push( n );
            const m = value / n;
            if ( m != n ) results.push( m );
        }
    }
    const cmp = (a, b) => a-b;
    return  results.sort( cmp );
}

// Intersection of sets
function isect( a, b ) {
    const result = new Set();
    a = new Set( a );
    b = new Set( b );
    for ( const elem of a ) {
        if ( b.has( elem ) ) {
            result.add( elem );
        }
    }
    return result;
}

function acf( a, b ) {
    a = factors( a );
    b = factors( b );
    const common = isect( a, b );
    return [ ... common ];
}

function gcf( x, y ) {
    // Greatect Common Divisor (Factor)
    while ( y !== 0 ) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
}

function lcm( a, b ) {
    // Calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
    const c = gcf( a, b );
    return (a * b) / c;
}
  
function multiples( x=1, n=1 ) {
    let result = [];
    if (! x ) return result;
    while ( n > 0 ) {
        result.push( x*n );
        n-=1;
    }
    return result.reverse();
}


// Factorial
function fact( n ) {
    if ( n < 2 ) return 0;
    function next( i ) {
        if ( i < 2 ) return i;
        return i * next( i - 1 );
    }
    return n * next( n - 1 );
}


// Accessor
const FactorAPI = {
    sqrti, 
    gcf, lcm,
    acf, apf,
    multiples, factors, fact,
    isect
};


const FactorDoc = `
sqrti       | Integer Square Root 
gcf         | Greatest Common Factor
lcm         | Least Common Multiple
acf         | All Common Factors
apf         | All Prime Factors
multiples   | Multiples
factors     | Factors
fact        | Factorial
isect       | Intersection of Sets
`;


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "FactorAPI", { FactorAPI } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { FactorDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'factors.js' );
}
