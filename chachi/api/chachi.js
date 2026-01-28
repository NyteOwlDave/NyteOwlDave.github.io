 
/* 
    
    chachi.js
    2025-JUN-10

    Application Logic for the Chachi Calculator

*/


function includes( s ) {
    console.log( "📲 Includes Third Party Module:", s );
}

includes( "math.js" );
includes( "mermaid.js" );
includes( "jquery.js" );
includes( "underscore.js" );
includes( "siimple-icons.css" );
includes( "moment.js" );
includes( "tabulator.js" );

// TODO...
// includes( "p5.js" );
// includes( "three.js" );
// includes( "gl-matrix.js" );
// includes( "popper.js" );
// includes( "chart.js" );
// includes( "date.js" );
// includes( "phaser.js" );
// includes( "backbone.js" );
// includes( "fontawesome.js" );


// Insertable Classes (local modules)
const ClassList = { vec, size, polar, Woola };



if (! "object" === typeof FriendMap ) {
    throw new Error( "Missing energize.js");
}


FriendMap.help = "./chachi-help.html";


function showMathHelp( evt ) {
    window.open( FriendMap.help, "_BLANK" );
}

function onlineClipboard() {
    const url = FriendMap.clipboard;
    window.open( url, "_BLANK" );
}

function mathOlympiad() {
    const url = FriendMap.olympiad;
    window.open( url, "_BLANK" );
}


// Clear O/P Text
function clearOutput() {
    sop.textContent="";
}

// Clear I/P Text
function clearInput() {
    sip.value="";
}

// Append Text to O/P Gadget (sop)
function show( s ) {
    let t = sop.textContent;
    sop.textContent += (t.length)
        ? `\n${s}` : s;
}

// Append Text to I/P Gadget (sip)
function appendInput( s ) {
    let t = sip.value;
    sip.value += (t.length)
        ? `\n${s}` : s;
}

// Execute Input Script and Show Results (sip => sop)
function runInput() {
    try {
        sop.textContent = prep( window.eval( sip.value ) );
    } catch ( e ) {
        console.error( e );
        sop.textContent = String( e );
    }
}

// Alias for Button Click Event Usage
const solveInput = runInput;


// Checkbox State for AUTO SOLVE
function autoRun() {
    return autoRunEnable.checked;
}


// Timer Tick Callback for AUTO SOLVE
function solve( event ) {
    if ( autoRun() ) {
        solveInput();
    }
//    if ( mathMenuVisible ) {
        if ( sip.value != memory()) {
            modified( true );
        } else {
            modified( false );
        }
//    }
}

function memory( value ) {
    const key = "Chachi Math";
    modified( false );
    if ( "string" === typeof value ) {
        localStorage.setItem( key, value );
    } else {
        return localStorage.getItem( key );        
    }
}

function button( caption ) {
    function query() {
        return document.querySelectorAll( 'button' );
    }
    const buttons = Array.from( query() );
    return buttons.filter( o => o.textContent === caption )[ 0 ];
}

function modified( state ) {
    const btn = button( 'M' );
    if ( btn ) {
        btn.style.backgroundColor = state
            ? "red" : "";
    }
}

function persist() {
    memory( sip.value );
}

function recover() {
    let s = memory();
    if ( s !== null ) {
        sip.value = s;
    } else {
        persist();
    }
}


// Preserve Options and Editor Content
function preserveState() {
    const key = "Chachi State";
    const state = {
        mathMenuVisible , 
        canvas : {
            visible : canvasVisible ,
            options : {
                cellSize : CanvasOptions.cellSize ,
                angle : CanvasOptions.angle
            }
        }        
    };
    const json = JSON.stringify( state );
    localStorage.setItem( key, json );
}

// Restore Options and Editor Content
function restoreState() {
    const key = "Chachi State";
    const json = localStorage.getItem( key );
    if ( json === null ) return;
    const state = JSON.parse( json );
    mathMenuVisible = !state.mathMenuVisible;
    toggleMathMenu();
    const options = state.canvas.options;
    CanvasOptions.cellSize = options.cellSize;
    CanvasOptions.angle = options.angle;
    canvasVisible = !state.canvas.visible;
    toggleCanvas();
}

// Request Full Screen Mode
function fullScreen( gadget ) {
    gadget.requestFullscreen();
}
function zoomEditor() { fullScreen( sip ); }
function zoomOutput() { fullScreen( sop ); }
// zoomCanvas is defined in graph.js


// Event Handler for Math Function Buttons
function appendMathFunction( button ) {
    let t;
    let lo = sip.selectionStart;
    let hi = sip.selectionEnd;
    let s = sip.value.slice( lo, hi );   
    const k = button.textContent.trim();
    if ( ClassList[ k ] ) {
        if ( s ) {
            t =  `new ${k}(${s})`;
            insertText( sip, t );
            return;
        } else {
            t =  `new ${k}()`;            
        }
    } else {
        if ( s ) {
            t =  `${k}(${s})`;
            insertText( sip, t );
            return;
        } else {
            t =  `${k}()`;
        }
    }
    console.log( t )
    appendInput( t );
}


// Create Menu Gadget for Math Functions
function initMathMenu() {
    const D = document;
    const el = t => D.createElement( t );
    const menu = el( 'menu' );
    function button( title, tooltip, action ) {
        const o = el( 'button' );
        if ( tooltip ) {
            o.textContent = title;
            o.title = tooltip;
        } else {
            o.textContent = o.title = title;
        }
        o.classList.add( 'math-plus' );
        if ( action ) {
            o.addEventListener( 'click', action );
        } else {
            o.setAttribute( 'onclick', 'appendMathFunction(this)' );
        }
        menu.appendChild( o );
        return o;
    }
    function buttonGroup( accessor ) {
        const act = k => ( "function" === typeof accessor[ k ] );
        let api = Object.keys( accessor ).filter( act );
        api.forEach( s => button( s ) );
    }
    buttonGroup( MathPlus );
    buttonGroup( JasoomAPI );
    buttonGroup( FactorAPI );
    buttonGroup( VectorAPI );
    button( "eratosthenes" );
    button( "bisection" );
    button( "newtonRaphson" );
    button( "math.evaluate" );
    menuContainer.appendChild( menu );
}


/* 
<!--
button( "CE", "Clear Editor", ()=>sip.value="" );
button( "M", "Memory", persist );
button( "R", "Recall", recover );
-->
*/

let mathMenuVisible = false;

// Toggle Canvas Visibility
function showMathMenu() {
    const root = document.firstElementChild;
    mathMenuVisible = true;
    preserveState();
    root.style.setProperty( "--menu-display", "inline-block" );
}

// Toggle Canvas Visibility
function hideMathMenu() {
    const root = document.firstElementChild;
    mathMenuVisible = false;
    preserveState();
    root.style.setProperty( "--menu-display", "none" );
}

// Toggle Canvas Visibility
function toggleMathMenu() {
    if ( mathMenuVisible ) {
        hideMathMenu();
    } else {
        showMathMenu();
    };
}


// Application Version Gadget
function initAppVersion() {
    const ve  = gid( 'appVersion' );
    const mve = selma( 'meta[content="version"]' ); 
    const mde = selma( 'meta[content="tidate"]'  );
    const version = artie( mve, 'value' );
    const tidate = artie( mde, 'value' );
    ve.innerText = `${version} ~ ${tidate}`;
}

const HostRoutes = {
    omega   : 'http://dave-omega/' ,
    legacy  : 'http://dave-legacy/' ,
    tower   : 'http://dave-tower/' ,
    ryzen   : 'http://dave-ryzen/' ,
    primary : 'https://nyteowldave/github.io/'
};

HostRoutes.keys = () => {
    const me = HostRoutes;
    function text( key ) {
        return ( "string" === typeof HostRoutes[ key ] );
    }
    return Object.keys( HostRoutes ).filter( text );
}

HostRoutes.composeURL = function( key ) {
    const me = HostRoutes;
    const lan = key.startsWith( "http://" );
    if ( lan ) {
        const host = me[ key ];
        return host + "chachi.html";
    } 
    const www = key.startsWith( "https://" );
    if ( www ) {
        const host = me[ key ];
        return host + "chachi/chachi.html";
    } 
    return key + "chachi.html";
}

HostRoutes.redirect = function( key ) {
    const me = HostRoutes;
    const url = me.composeURL( key );
    const options = "top=10,left=10";
    window.open( url, url, options );
}

HostRoutes.report = function(  ) {
    CoreDoc.report( HostDoc, "HostRoutes Members" );
}

function server( key ) {
    location = HostRoutes.composeURL( key );
}

const HostDoc = `
omega      | http://dave-omega/
legacy     | http://dave-legacy/
tower      | http://dave-tower/
ryzen      | http://dave-ryzen/
primary    | https://nyteowldave/github.io/
keys       | Read keys for HostRoutes
composeURL | Compose Complete URL for Chachi
redirect   | Show remote Chachi instance
report     | Show this table
`;


const ChachiGadgets = {
    sip, sop, 
    canvas, 
    menuContainer, 
    autoRunEnable
};


const ChachiApp = { 
cls ,   // legends.js
again , // legends.js
han ,   // legends.js
server ,
clearOutput ,
clearInput ,
appendInput ,
appendMathFunction,
runInput ,
solveInput ,
autoRun ,
solve ,
show ,
fullScreen ,
zoomEditor ,
zoomOutput ,
initMathMenu ,
showMathHelp ,
showMathMenu ,
hideMathMenu ,
toggleMathMenu ,
onlineClipboard ,
mathOlympiad
};


const ChachiDoc = ` 
cls            | Clear Console
again          | Reload Page
han            | Try-Catch Wrapper
server         | Choose Server
clearOutput    | Clear Output Text
clearInput     | Clear Input Text
appendInput    | Append Input Text
appendMathFunction | Event Handler for all Math Buttons
runInput       | Evaluate Input as JavaScript
solveInput     | Alias for runInput
autoRun        | Read Autorun Checkbox State
solve          | Autorun Timer Event Handler
show           | Replace Output Text
fullScreen     | Request Full Screen Mode (any)
zoomEditor     | Request Full Screen Mode (sip)
zoomOutput     | Request Full Screen Mode (sop)
initMathMenu   | Initialize Math Menu
showMathMenu   | Make the Math Menu visible
hideMathMenu   | Make the Math Menu invisible
toggleMathMenu | Toggle Math Menu visibility
showMathHelp   | Show Help for Ma
persist        | Memory Write
recover        | Memory Read
memory         | Memory Read/Write
button         | Find Button by Caption
modified       | Modified Indication ON/OFF
`;

// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "ChachiApp",      { ChachiApp     } );
        add( "ChachiGadgets",  { ChachiGadgets } );
        add( "ClassList",      { ClassList     } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { ChachiDoc } );
        doc( { HostDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'chachi.js' );
}

/* 
    UPDATED ~ 2026-JAN-26 ~ Tower
*/

