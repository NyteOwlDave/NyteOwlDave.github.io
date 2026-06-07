
/*

    tree-editor-api.js

*/




function _init_tree_editor_api_( event ) {
    const ops = TreeEditorOps;
    ops.acquire_needs();
    setTimeout( function(e) {
        if ( "function" === typeof init_editor ) {
            init_editor( tred );
        }
    } , 999 );
    console.info ( `🪴 Tree Editor API Initialized` );
}


TreeEditorOps = {};

;
( ( ops ) => {

    str =( s )=> ( String( s || "" ).trim() );
    arr =( o )=> ( Array.from( o || [] ) );
    unq =( o )=> (    new Set( o || [] ) );

    con = console;

    cls =()=> ( con.clear() );

    doc = document;

    elx =( t )=> ( doc.createElement( t ) );

    one =( q )=>    ( doc.querySelector   ( q ) );
    all =( q )=> arr( doc.querySelectorAll( q ) );

    gad =( o )=> ( o instanceof HTMLElement );
    gid =( i )=> ( doc.getElementById ( i ) );

    god =( o )=> (
        ( o )
      ? ( gad( o ) ? ( o ) : gid( o ) )
      : ( null )
    );

    pcl = function( s ) {
        s = str( s );
        return (
            ( s )
            . split  ( "\n"   )
            . map    ( str    )
            . filter ( s => s )
        );
    };

    ops.needs = [
  "http://dave-legacy/app/norma/atm/gems/prolog-beta.js"
, "http://dave-legacy/app/chachi/api/karlita-editor.js"
, "http://dave-legacy/app/chachi/api/karlita-extender.js"
    ];

    ops.locate = function( url ) {
        const wanted =( se )=> ( se.src === url );
        const m = all( "SCRIPT" );
        const v = m.filter( wanted );
        return ( v[ 0 ] );
    };

    ops.acquire = function( url ) {
        let se;
        if ( se = ops.locate( url ) ) {
            con.debug( `⛔ Removed Script : ${url}` );
            ( se ).remove();
        }
        con.debug( `📥 Acquiring Script : ${url}` );
        se = elx( "SCRIPT" );
        se . src = ( url );
        return ( doc . body . appendChild( se ) );
    };

    ops.acquire_needs = function( urls ) {
        if ( urls ) {
            if ( "string" === typeof urls ) {
                urls = pcl( urls );
            } else if (! Array.isArray( urls ) ) {
    throw new TypeError( `👮 Expected a String Array` );
            }
        }
        const needs = ( urls || ops.needs );
        con.debug( `📥 Acquiring Needs`, needs );
        ( needs )
        . forEach( u => ops.acquire( u ) );
    };

    ops.request = function( url, accept ) {
        function receive( s ) {
            ops.payload = ( s );
            if ( "function" === typeof accept ) {
                accept( s );
            } else if ( gad( accept ) ) {
                const ge = accept;
                if ( "TEXTAREA" === ge.nodeName ) {
                    return ( ge.value = ops.extract( s ) );
                } else if ( "PRE" === ge.nodeName ) {
                    return ( ge.innerText = ops.extract( s ) );
                } else {
                    return ( ge.innerHTML = ( s ) );
                }
            }
            return ( s );
        }
        if ( "function" !== typeof fetch ) {
            alert( "👮 Agent doesn't support fetch method" );
        }
        const req = (
            ops.promise = fetch( url )
        );
        return (
            ( req )
            . then  ( rsp => rsp.text() )
            . then  ( receive )
            . catch ( receive )
        );
    };

    ops.tree = function( url ) {
        url = str( url );
        if (! url ) {
            url = (
                  str( ops.tree.folder )
               || ops.folder( location.href )
            );
        } else {
            while ( url.endsWith( "/" ) ) {
                url = url.slice( 0, -1 );
            }
            if (! url.includes( ":" ) ) {
                url = folder( location.href );
            }
        }
        url = [ url, "tree.php" ].join( "/" );
        function accept( s ) {
            const ed = gid( "tred" );
            if (! gad( ed ) ) {
                throw new TypeError(
        `👮 Missing Tree Editor ( "tred" )`
                );
            }
            ed.value = ops.extract( s );
            ops.transfer_last_line( ed );
            return ( s );
        }
        return ( ops.request( url, accept ) );
    };

    ops.extract = function( html ) {
        const s = str( html );
        if ( ( `<` ) !== s.charAt( 0 ) ) {
            return ( html );
        }
        const wrapper = elx( "DIV" );
        wrapper.innerHTML = ( s );
        const kids = wrapper.children;
        if ( kids.length < 1 ) {
            return fix( html );
        } else {
            return fix( kids[ 0 ].innerHTML );
        }
        function fix( s ) {
            const tag = ( `-&gt;` );
            while ( s.includes( tag ) ) {
                s = s.replace( tag, "->" );
            }
            return ( s );
        }
    };

    ops.folder = function( url ) {
        url = str( url );
        const p = ( url.split( "/" ) );
        if ( p.length > 1 ) {
            p.pop();
        }
        return ( p.join( "/" ) );
    };

    ops.filename = function( url ) {
        url = str( url );
        const p = ( url.split( "/" ) );
        if ( p.length > 1 ) {
            return ( p.pop() );
        }
        return ( "" );
    };

    ops.basename = function( url ) {
        const s = ops.filename( url );
        const p = ( s.split( "." ) );
        if ( p > 1 ) {
            p.pop();
            return ( p.join( "." ) );
        }
        return ( s );
    };

    ops.extension = function( url ) {
        const s = ops.filename( url );
        const p = ( s.split( "." ) );
        if ( p > 1 ) {
            return ( p.pop() );
        }
        return ( "" );
    };

    ops.stats = function( s ) {
        let p = pcl( s );
        let lines = p.length;
        let chars = s.length;
        let average = 0;
        if ( lines ) {
            average = fixed( chars / lines );
        }
        function fixed( n ) {
            return ( Math.round( n * 10 ) * 0.1 );
        }
        return { chars, lines, average };
    };

    ops.line = function( s, n ) {
        n = parseInt( n );
        if (! isFinite( n ) ) {
            return ( "" );
        }
        const lines = ( s ).split( "\n" );
        if ( n < 0 ) { n += lines.length; }
        return str( lines[ n ] );
    };

    ops.remove_line = function( s, n ) {
        let line  = "";
        let lines = ( s ).split( "\n" );
        n = parseInt( n );
        if (! isFinite( n ) ) {
            return { line, lines };
        }
        if ( n < 0 ) { n += lines.length; }
        if ( n >= lines.length ) {
            return { line, lines };
        }
        line       = ( lines[ n ] );
        lines[ n ] = ( null       );
        lines = (
            ( lines )
            . filter(
                t => ( "string" === typeof t )
            )
        );
        return { line, lines };
    };

    ops.transfer_last_line = function( editor, viewer ) {
        const ed = ( god( editor ) || gid( "tred" ) );
        if (! gad( ed ) ) {
    throw new TypeError( `👮 Expected a Source Editor` );
        }
        const vw = ( god( viewer ) || gid( "trvw" ) );
        if (! gad( vw ) ) {
    throw new TypeError( `👮 Expected a Destination Viewer` );
        }
        const info = ops.remove_line( str( ed.value ), -1 );
        if ( info.line ) {
            ed.value = ( info.lines.join( "\n" ) );
            vw.textContent = ( info.line );
        }
    };

    ops.tree.folder = ops.folder( location.href );

    ops.input_folder = function() {
        const t = str( ops.tree.folder );
        const m = ( `Tree Folder URL Address?` );
        let s = window.prompt( m, t );
        if (! s ) { return; }
        s = str( s );
        if (! s ) { return; }
        ops.tree.folder = ( s );
    }

} ) ( TreeEditorOps )
;


;
; addEventListener( "load", _init_tree_editor_api_ )
;
; console.info( `🪴 Tree Editor API Loaded` );
;

