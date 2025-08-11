

// Let N be some natural number on [2, 10000]
var N;

// Use the sieve of Eratothenes to determine all prime numbers
function eratosthenes( through=50 ) {
	// Ensure the argument is an integer
	through = parseInt( through );
	// Clip the argument to the valid range [2, 10000]
	if ( through < 2 ) { return []; }
	else if ( through > 10000 ) { N = 10000; }
	else { N = through; }
	// Let A be an array of Boolean values, indexed by integers 2 to N,
	// initially all set to true.
	let i;
	const A = [];
	const primes = [];
	for ( i=2; i <= N; i+=1 ) { A.push( true ); }
	// Set all flags in A to false for non-primes 
	for ( i=2; i*i <= N; i+=1 ) {
		if ( A[ i-2 ] ) {
			var j;
			for ( j=i*i; j <= N; j+=i ) { A[ j-2 ] = false; }
		}
	}
	// Compose an array of prime numbers
	for ( i=2; i <= N; i+=1 ) { 
		if ( A[ i-2 ] ) primes.push( i ); 
	}
	// Return the array of prime numbers
	return primes;
}

// Pseudo code algorithm
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
//
// Let N be some natural number on [2, 10000]
// for i = 2, 3, 4, ..., not exceeding âˆšn:
//   if A[i] is true:
//     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
//       A[j] := false.
// 
// Output: all i such that A[i] is true.


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "Number",    { N } );
        add( "Function",  { eratosthenes } );
    }
} else {
	console.log( '📃', 'Loaded Local Module:', 'eratosthenes.js' );
}
