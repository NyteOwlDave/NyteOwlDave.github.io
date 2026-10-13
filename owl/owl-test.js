
/*

    owl-test.js

*/

function assist() {
    visit( "owl-help.html" );
}

function init_sce() {
    sce.storekey = "owl-system-editor.js";
    sce.run  =()=> ( window.eval( sce.value ) );
    sce.zoom =()=> {
        sce.requestFullscreen();
        sce.focus();
    };
    sce.toggle =()=> ( sce.classList.toggle( "hide" ) );
    sce.persist = function() {
        const k = sce.storekey;
        const v = sce.value;
        sessionStorage.setItem( k, v );
        if ( null !== localStorage ) {
            localStorage.setItem  ( k, v );
        }
    };
    sce.recover = function() {
        const k = sce.storekey;
        let v = sessionStorage.getItem( k );
        if ( null === v ) {
            if ( null !== localStorage ) {
                v = localStorage.getItem( k );
            }
        }
        if ( null === v ) {
            return sce.persist();
        }
        sce . value = ( v );
    };
    sce.memo = {};
    sce.memo.value = "";
    sce.memo.stash = function() {
        sce.memo.value = sce.value;
    };
    sce.memo.recall = function() {
        sce.value = String( sce.memo.value || "" );
    };
    sce.memo.swap = function() {
        const tmp = String( sce.memo.value || "" );
        sce.memo.value = sce.value;
        sce.value = tmp;
        sce.classList.toggle( "memo" );
    };
    addEventListener( "beforeunload", ()=>( sce.persist() ) );
    sce.recover();
}


function init_buttons() {
    footer_input.style.width = "calc( 100vw - 16em )";
    owl.button( "▶️", "sce.run()"    , "▶️ Run Editor Script" );
    owl.button( "💠", "sce.zoom()"   , "💠 Zoom Editor" );
    owl.button( "◩", "sce.toggle()"  , "◩ Toggle Editor" );
    owl.button( "🧝", "assist()"     , "🧝 Help" );
}

