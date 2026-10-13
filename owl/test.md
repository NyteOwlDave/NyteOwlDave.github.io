<head> <link rel="icon" href="favicon.ico" /> </head>

<style> @import url("./owl.css"); </style>

<style>
.fill {
    position : absolute;
    top    : 60px;
    left   : 1px;
    width  : calc( 100vw - 18px );
    min-height : 40vh;
    max-height : calc( 100vh - 120px );
    resize : vertical;
    overflow : scroll;
    font   : 20pt monospace;
}
#sce {
    color : #080822;
    background : mintcream;
    opacity : 0.7;
}
#sce:focus {
    opacity : 1.0;
};
header {
    height      : 58px;
    line-height : 58px;
    font   : 20pt monospace;
}
</style>

<textarea id="sce" class="fill" wrap="off"></textarea>

<script>
; iwm = Object.keys( window ).sort();
</script>

<script src="https://nyteowldave.github.io/owl/owl.js"></script>

<script src="./owl-test.js"></script>

<script>
function main( event ) {
    try {
    	doc . title = "Owl v1.11 System Test";
        say( doc . title );
        init_sce();
        init_buttons();
    } catch ( e ) {
        bummer( e );
    }
}
addEventListener( "load", main );
</script>

