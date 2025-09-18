
// Chachi Source File
// Nelson-Goodman Theorem

bit = o => ( o ? 1 : 0 );
prb = n => ( rnd() < n );
yes = p => ( k  ===  p );
ngf = p => bit( yes( yes( p ) ) );

nelsonGoodman = function( n=32 ) {
	k = prb( 0.5 );
	let truth=[], out=[];	
	while ( out.length < n ) {
		p = prb( 0.5 );
		truth.push( bit( p ) );
		out.push( ngf( p ) );
	}
	truth = truth.join( " " );
	out   = out.join( " " );
	match = ( truth == out );
	return { truth, out, match };
}

result = nelsonGoodman(); [
  "Truth : " + result.truth ,
  "Out   : " + result.out   ,
  "Match : " + match
].join( "\n" );

