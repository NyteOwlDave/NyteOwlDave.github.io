
/*
    links-table-2-installer.js
    Morpheus Edition
    Version : 2.0.0.1
*/

( ()=> {

const doc = ( document   );
const boo = ( doc . body );

const gid =( i )=> ( doc . getElementById( i ) );
const elx =( t )=> ( doc . createElement ( t ) );

const _script = (
  "https://nyteowldave.github.io/owl/links-table-2.js"
);

function install_script( url) {
    const se = elx( "SCRIPT" );
    boo . appendChild( se );
    se . src = ( url );
    console.info( "Requested Links Table v2 API Module" );
    return ( se );
};

install_script( _script );

} )( );

;
; console.log( `Loaded "links-table-2-installer.js" API Module` )
;

