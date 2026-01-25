
/* 
    Fave 42 Loader ~ 2025-MAR-22
*/

var FaveLoader = {
URL : "http://dave-legacy/42/api/fave.js";
};

( we => { 

const PENDING = "⚫ Pending";
const LOADING = "⚪ Loading";
const SUCCESS = "🟢 Success";
const ERROR   = "🔴 Error";
const WARNING = "🟡 Warning";

we.stateNames  = { 
    PENDING, LOADING, SUCCESS, ERROR
};

we.state = PENDING;

we.alert = o => window.alert( o );
we.debug = o => console.error( o );

we.W = window;
we.D = document;
we.H = D.head;
we.B = D.body;
we.V = D.firstElementChild;
we.A = navigator.userAgent.toLowerCase();
we.R = we.A.includes( 'retext' );
we.S = we.script = D.createElement( 'script' );

we.ALERT = we.R;

we.report = function( result, event ) {
    console.log( 
        we.STATE = result ,
        we.EVENT = event 
    we.EVENT );
}

S.onload  = event => we.report( SUCCESS , event );
S.onerror = event => we.report( ERROR   , event );

we.STATE = LOADING;
we.URL   = S.src =  FAVEJS;

function presentReport( ) {
    if ( we.STATE === SUCCESS ) return;
    const lines = [];
    lines[ 0 ] = we.STATE;
    lines[ 1 ] = "Fave 42 Loader";
    lines[ 2 ] = `URL   := {we.URL}`;
    lines[ 3 ] = `EVENT := {we.EVENT}`;
    we.W.alert( lines.join( "\n" ) );
}

if ( we.ALERT ) {
    addEventListener( 'load', presentReport );
}

} ) ( AppDebug );


