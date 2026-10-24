
/*
    jeannie-installer.js
    Morpheus Edition
    Version : 1.0.0.1
*/

( ()=> {

const doc = ( document   );
const boo = ( doc . body );

const gid =( i )=> ( doc . getElementById( i ) );
const elx =( t )=> ( doc . createElement ( t ) );

const jeannie_script = (
  "https://nyteowldave.github.io/owl/jeannie.js"
);

function install_script( url) {
    const se = elx( "SCRIPT" );
    boo . appendChild( se );
    se . src = ( url );
    console.info( "Requested Jeannie API Module" );
    return ( se );
};

install_script( jeannie_script );

} )( );

;
; console.log( `Loaded "jeannie-installer.js" API Module` )
;

