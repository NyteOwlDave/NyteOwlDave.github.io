
/* 

| Chachi Scriptlet     |
|----------------------|
| * graf-o-matic.js    |
| @ downloads          |
| @ Chachi             |
| Ryzen Edition        |
| 2025-NOV-25          |

ORIGIN:
http://dave-ryzen/chachi/chachi.html


*/

sop.innerText = "";

mention=( s )=>{ 
   if ( t=( sop.innerText ) ) {
      sop.innerText=[ t, s ].join( "\n" );
   } else {
      sop.innerText=( s );
   }   
}

[ ctx, w, h ] = [
  canvas.getContext( '2d' )
, canvas.width
, canvas.height
];

mention( `Canvas Size : ${w} x ${h}` );

min=( a, b )=>Math.min( a, b );
max=( a, b )=>Math.max( a, b );

defineFunctions=()=>{
   __a=( 20 * rnd() * Math.PI / w );
   __t=( 0.012 );
   __f=( a )=>( a * __t * ( rnd()-0.5 ) );
   mention( `Defined y=f(x)` );
   __g=( a )=>( sin( a * __a ) );
   mention( `Defined y=g(x)` );
   __h=( a )=>( cos( a * __a ) );
   mention( `Defined y=h(x)` );
   samples=[];
   mention( `Created Empty Sample Set` );
   sample=( x )=>( [ x, __f(x), __g(x), __h(x) ] );
   mention( `Defined Sample Method` );
   add=( x )=>samples.push( sample( x ) );
   mention( `Defined Sample Add Method` );
}

defineFunctions();

pal = [
	"black"
,	"crimson"
,	"lemonchiffon"
,	"navy"
,	"white"
];

mention( [ "Palette", pal ].join( " : " ) );

clearSurface=()=>{
    w   =( canvas.width  );
    h   =( canvas.height );
    ctx =( canvas.getContext( '2d' ) );
    ctx.clearRect( 0, 0, w, h ) 
    mention( `Erased Drawing Surface` );
};

mention( `Defined Surface Clear Method` );

plot=( i )=>{
	samp = samples[ i ];
	x = tx( samp[ 0 ] );
	// y = f(x)
	ctx.strokeStyle = pal[1];
	ctx.beginPath();
    ctx.moveTo( x, ty(  0 ) )
    ctx.lineTo( x, ty( samp[1] ) )
	ctx.stroke();
	// y = g(x)
	ctx.strokeStyle = pal[2];
	ctx.beginPath();
    ctx.moveTo( x+1, ty(  0 ) )
    ctx.lineTo( x+1, ty( samp[2] ) )
	ctx.stroke();
	// y = h(x)
	ctx.strokeStyle = pal[3];
	ctx.beginPath();
    ctx.moveTo( x+2, ty( 0 ) )
    ctx.lineTo( x+2, ty( samp[3] ) )
	ctx.stroke();
};

mention( `Defined Sample Plot Method` );

createSamples=()=>{
   samples.length=( 0 );
   for( x=0; x<(w/4); x+=1 ) { add( x ); }
   n=( samples.length );
   mention( `Created ${n} samples` );
}

mention( `Defined Sample Set Generator Method` );

prepareTransform=()=>{
   [ ctx, w, h ] = [
     canvas.getContext( '2d' )
   , canvas.width
   , canvas.height
   ];
   ctx.resetTransform();
   count=( samples.length );
   xo=( 0 );
   xs=( w / count );
   yo=( 0.5 * h );
   ys=( 0.5 * h );
   mention( `X-scale : ${xs}` );
   mention( `Y-scale : ${ys}` );
   mention( `X-xlate : ${xo}` );
   mention( `Y-xlate : ${yo}` );
}

mention( `Defined Transform Preparation Method` );

tx=( i )=>( xo + ( xs * i ) );
ty=( j )=>( yo - ( ys * j ) );

mention( `Defined Transform Application Methods` );

renderSamples=()=>{
  n=( samples.length );
  for( i=0; i<n; i+=1 ) { plot( i ); }
  mention( `Rendered ${n} Samples` );
}

mention( `Defined Sample Set Render Method` );

clearSurface();

createSamples();

prepareTransform();

renderSamples();

// Preserve Output
sop.innerText;


