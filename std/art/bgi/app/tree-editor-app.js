
/*

    tree-editor-app.js

*/


function _init_tree_editor_( event ) {
    doc = document;
    doc . title = ( `🪴 Tree Editor 1.1` );
    gid =( i )=> ( doc.getElementById( i ) );
    trvw = gid( "trvw" );
    trvw . title = ( `Click to Refresh Tree` );
    trvw . setAttribute( "clickable", "true" );
    trvw . onclick = function( e ) {
        if ( e.ctrlKey ) {
            TreeEditorOps.input_folder();
        } else {
            TreeEditorOps.tree();
        }
    };
    tred = gid( "tred" );
    tred . spellcheck = false;
    tred . style . height = ( "42vh" );
    console.info ( `🪴 Tree Editor App Initialized` );
}


;
; addEventListener( "load", _init_tree_editor_ )
;
; console.info( `🪴 Tree Editor App Loaded` );
;
