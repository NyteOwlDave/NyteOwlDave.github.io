
function insertText( editor, text ) {
    const start = editor.selectionStart;
    const stop = editor.selectionEnd;
    const head = editor.value.substr( 0, start );
    const tail = editor.value.substr( stop );
    editor.value = head + text + tail;
    editor.selectionStart =
    editor.selectionEnd = start + text.length;
    editor.focus(); 
}

function keisha( event ) {
    function handled() {
        event.preventDefault();
        event.stopPropagation();
    }
    function ascii( s ) {
        return s.toUpperCase().charCodeAt( 0 );
    }
    const code = event.keyCode;
    if ( code === 9 ) {
        if ( event.shiftKey ||
             event.altKey ||
             event.ctrlKey ) return;
        insertText( event.target, "\t" );
        return handled();
    }
    if ( code === 13 ) {
        if ( event.altKey ) {
            runInput();
            return handled();
        }
    }
    if ( code === ascii( 'x') ) {
        if ( event.altKey ) {
            if ( gid( "sip" ) && gid( "sop" ) ) {
                const s = sip.value;
                sip.value = sop.textContent;
                sop.textContent = s;
                return handled();
            }
        }
    }
}

function initEditor( editor ) {
    editor.style.tabSize = 4 ;
    editor.addEventListener( 'keydown', keisha );
}


const KeishaDoc = `
keisha     | Key Event Handler 
initEditor | Prepare TEXTAREA for Keyboard Events
insertText | Replace Selected Text for TEXTAREA
`;


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "Function", { keisha } );
        add( "Function", { initEditor } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { KeishaDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'keisha.js' );
}


/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/

