
/*
    links-table-installer.js
    Morpheus Edition
    Version : 1.0.0.1
*/

( ()=> {

const doc = ( document   );
const boo = ( doc . body );

const gid =( i )=> ( doc . getElementById( i ) );
const elx =( t )=> ( doc . createElement ( t ) );

const _script = (
  "https://nyteowldave.github.io/owl/links-table.js"
);

function install_script( url) {
    const se = elx( "SCRIPT" );
    boo . appendChild( se );
    se . src = ( url );
    console.info( "Requested Links Table API Module" );
    return ( se );
};

install_script( _script );

} )( );

;
; console.log( `Loaded "links-table-installer.js" API Module` )
;

