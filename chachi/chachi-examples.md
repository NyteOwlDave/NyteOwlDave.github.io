
<head>
<meta charset="utf-8">
<script>
document.title = "Chachi Examples";
</script>
<style>
@import url("./style/docs.css");
h1 {
    text-align : center;
    margin-top : 64px;
}
header {
    height : 68px;
    line-height : 30px;
}
</style>
<script src="./../api/editables.js"></script>
</head>

<header>
<nav>
<a href="./">Workspace</a>
<a href="http://dave-legacy/stereogram/docs/chachi-examples.html">Home</a>
<a href="http://dave-legacy/stereogram/docs/biblio.html">Bibliography</a>
</nav>
</header>

# Wheel

```chachi
canvas.width = canvas.height = 800;
canvas.style.transform = "scale(1, -1)";

ctx = getContext();

drawCartesianGrid( d2r(0), 20 );

rho = 300;
origin = getCanvasCenter();

ctx.fillStyle = "green";
circleFill( origin, rho );
ctx.fillStyle = "blue";

pv = new polar( 1, 0 );

step = 15

for ( let theta = 0; theta < 360; theta += step ) {
   pv.t = d2r( theta + 7.5 );
   norm = pv.cartes().normal();
   spoke( rho, norm );
   point( origin.project( norm, rho ) );
}
```

---

# Random Lines

```chachi
function randomLine() {
   pt0 = new vec( irnd(1200), irnd(1200) );
   pt1 = new vec( irnd(1200), irnd(1200) );
   lineSeg( pt0, pt1 );
}
for (n=0; n<100; n+=1) {
   randomLine();
}
```

# Rectangles

```chachi
w = 800;
canvas.width = canvas.height = w;

drawCartesianGrid( 0, 20 );

ctx = getContext();
ctx.lineWidth = 20;
ctx.strokeStyle = "gold";
ctx.fillStyle = "blue";

rc = rect( 10, 10, w-20, w-20 );
rectangle( rc );

rc.x     += 20; rc.y += 20;
rc.width -= 40; rc.height -= 40;
rectangleFill( rc );
```

# Spirograph

```chachi
function render() {
    const w = 1024;
    canvas.width = canvas.height = w;
    ctx = getContext();
    clearCanvas( "#000000" );
    const xx = [];
    const yy = [];
    let i = 360, j = 360;
    let r, g, b, u, v;
    let x1, y1, x2, y2;
    for ( let h = 1; h <= 6; h += 1 ) {
        let nm1;
        for ( let n = 1; n <= 36; n += 1 ) {
            nm1 = n - 1;
            let k = nm1 / 18 * Math.PI;
            xx[ nm1 ] = 512 + i * cos( k );
            yy[ nm1 ] = 512 + j * sin( k );
        }
        for ( let n = 1; n <= 36; n += 1 ) {
            let m = n + 12;
            if ( m > 36 ) m -= 36;
            u = n - 1;
            v = m - 1;
            x1 = xx[ u ]; y1 = yy[ u ];
            x2 = xx[ v ]; y2 = yy[ v ];
            r = j * 4;
            g = i * 2;
            b = m * 6;
            ctx.strokeStyle = _rgb( r, g, b );
            ctx.beginPath();
            ctx.moveTo( x1, y1 );
            ctx.lineTo( x2, y2 );
            ctx.stroke();
        }
        i *= 0.5;
        j *= 0.5;
    }
}
render();

```

---

> Last Update : 2025-JUN-25

<script>
addEventListener( 'load', () => { 
    editables( 'td'  );
    editables( 'pre' );
    editables( 'h1'  );
} );
</script>



