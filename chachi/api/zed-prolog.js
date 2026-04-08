
/*

<style>
@import url("http://dave-legacy/app/zed/style/zed-demo.css");
</style>

<script src="http://dave-legacy/app/zed/api/prolog.js">
</script>

<script src="http://dave-legacy/~/api/gadgets/checklist.js">
</script>

<header>
  <a href="http://dave-legacy/app/zed/toolkit/betty/api/prolog.html">Home</a>
  <a href="./">Explore</a>
</header>

<textarea id="code" class="siox">

*/


/*

    GROUP : Zeddicus API Module Collection
    TITLE : Application Prolog
    FILE  : prolog.js
    DATE  : 2025-DEC-28
    HELPS : member-index.js

*/


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : alias.js        */
/* SAVED?  : [x]             */

con  =( console      );
doc  =( document     );
stg  =( localStorage );
wnd  =( window       );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : location.js     */
/* SAVED?  : [x]             */

again =()=> ( location.reload() );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : console.js      */
/* SAVED?  : [x]             */

cls =()=> ( console.clear() );

jot   =( s )=> ( console.log  ( "🦌", s ), s );
boom  =( s )=> ( console.warn ( s ), s );
blast =( s )=> ( console.error( s ), s );

boost =( t )=> ( console.table( t ), t );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : clist.js        */
/* SAVED?  : [x]             */

o_o =( o )=> ( o );
unq =( o )=> ( new Set( o ) );
arr =( o )=> ( Array.from( o ) );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : key-value.js    */
/* SAVED?  : [x]             */

kav =( k, v    )=> ( { key : k, value : v } );
kev =( k, e, v )=> ( `${k} ${e} ${v}`       );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : gadget-core.js  */
/* SAVED?  : [x]             */

all =( q )=> arr( doc.querySelectorAll( q ) );
one =( q )=> ( doc.querySelector ( q ) );

gad =( o )=> ( o instanceof HTMLElement );
elx =( t )=> ( doc.createElement ( t ) );
ebi =( i )=> ( doc.getElementById( i ) );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : json.js       */
/* SAVED?  : [x]           */

jst  =( o )=> ( JSON.stringify( o, null, 2 ) );
jso  =( t )=> ( JSON.parse( t ) );
jsot =( t )=> ( jst( jso( t ) ) );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : psk-pass.js   */
/* SAVED?  : [x]           */

pk   =( p, k )=> ( [p,k].join("/") );
psk  =( p, s, k )=> ( [p,s,k].join("/") );
pskq =( p, s, k, q )=> ( [psk(p,s,k),q].join("?") );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : resolve.js    */
/* SAVED?  : [x]           */

resolve =( o )=> ( gad( o ) ? ( o ) : ebi( o ) );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : number.js     */
/* SAVED?  : [x]           */

int =( n )=> parseInt( n );
flt =( n )=> parseFLoat( n );

min =( a, b    )=> Math.min( a, b );
max =( a, b    )=> Math.max( a, b );
mid =( a, b, c )=> min( max( a, b ), c );

abs =( n )=> Math.abs ( n );
sgn =( n )=> Math.sign( n );

now =()=> Date.now();
rnd =()=> Math.random();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : string.js     */
/* SAVED?  : [ ]           */

str =( o )=> ( ( o || "" ).trim() );

asc =( c )=> ( c.toUpperCase().charCodeAt( 0 ) );
chr =( n )=> String.fromCharCode( n );

uni =( c )=> ( c.toUpperCase().codePointAt( 0 ) );
emo =( n )=> String.fromCodePoint( n );

strupr  =( s )=> str( s || "" ).toUpperCase();
strlwr  =( s )=> str( s || "" ).toLowerCase();

sproper = function( s ) {
    return [
      strupr( s.slice( 0, 1 ) )
    , strlwr( s.slice( 1    ) )
    ] . join( "" );
};

radix = function( n, p, r ) {
    p = str( p );
    n = strupr( n.toString( r ) );
    return ( p ? ( `${p}${n}` ) : n );
};

hex =( n, p )=> radix( n, p, 16 );
dec =( n, p )=> radix( n, p, 10 );
oct =( n, p )=> radix( n, p,  8 );
bin =( n, p )=> radix( n, p,  2 );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : tigger.js     */
/* SAVED?  : [x]           */

tigger = function( sep ) {
    sep = ( sep || "-" );
    let n = ( rnd()*now() + rnd()*now() );
    let s = n.toString( 33 ).replace( ".", sep );
    return [ "id", s ].join( sep );
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : tigg-name.js  */
/* SAVED?  : [x]           */

tigg = function() {
    let bfr =() => ( new Uint8Array( 1 ) );
    let rdm =( o )=> ( crypto.getRandomValues( o ) [ 0 ] );
    let enc =( c )=> (
        c ^ rdm( bfr() ) & 15 >> c / 4
    ) . toString( 16 );
    let s = String( [1e7]+-1e3+-4e3+-8e3+-1e11 );
    let r = /[018]/g;
    return ( s . replace( r, enc ) );
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : exec.js       */
/* SAVED?  : [x]           */

exec = function( ed ) {
	try {
	   ed.input = ed.value;
	   ed.error = "";
	   ed.output = srun( ed.input );
	} catch ( e ) {
	   ed.output = "";
	   throw ( ed.error = e );
	}
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : payloads.js   */
/* SAVED?  : [x]           */

const payloads = new Map();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : sevika.js     */
/* SAVED?  : [x]           */

srun =( s )=> ( window.eval( s ) );
erun =( e )=> ( srun( e.value  ) );
vrun =( v )=> ( srun( v.innerText ) );
krun =( k )=> ( srun( stg.getItem( k ) ) );
irun =( i )=> ( krun( stg.key( i ) ) );

arun = function( a, o ) {
  return fetch( a, o )
  . then ( r => r.text() )
  . then ( t => {
      jot( {
          address : a
        , options : o
        , payload : t
      } );
      payloads.set( a, t );
      jot( srun( t ) );
   } );
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : request.js    */
/* SAVED?  : [x]           */

request = function( a, o, ed ) {
    ed = resolve( ed );
    return fetch( a, o )
    . then( r => r.text() )
    . then( t => {
          jot( {
              address : a
            , options : o
            , payload : t
            , editor  : ed
          } );
          payloads.set( a, t );
          if ( ed ) { ed.value = t; }
     } );
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : chachi.js     */
/* SAVED?  : [x]           */

chachi = function( modname ) {
    let we  = chachi;
    let bod = document.body;
    let elm =( t )=> bod.appendChild( elx( t ) );
    let m = we.modname( modname );
    let k = [ m, "js" ].join(".");
    let s = we.splitter;
    let p = we.provider;
    let se = elm( "SCRIPT" );
    se.src = psk( p, s, k );
    jot( { address : se.src } );
    return se;
};

chachi.provider = "https://nyteowldave.github.io";
chachi.splitter = "chachi/api";
chachi.modnames = ( new Set() );
chachi.modname = function( o ) {
    let mods = chachi.modnames;
    if ( int( o ) ) {
        o = mods[ o ];
    };
    o = ( o || "legends" );
    mods.add( o );
    return  ( o );
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : modkeys.js    */
/* SAVED?  : [x]           */

MK_ALT   = 0x01;
MK_CTRL  = 0x02;
MK_META  = 0x04;
MK_SHIFT = 0x08;
MK_NONE  = 0x00;

modkeys = function( ev ) {
    let bit=( x, n )=> ( x ? n : MK_NONE );
    let bit0 = bit ( ev.altKey   , MK_ALT   );
    let bit1 = bit ( ev.ctrlKey  , MK_CTRL  );
    let bit2 = bit ( ev.metaKey  , MK_META  );
    let bit3 = bit ( ev.shiftKey , MK_SHIFT );
    return ( bit3 + bit2 + bit1 + bit0 );
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : kenneth.js  */
/* SAVED?  : [x]         */

kenneth = function( ev ) {
    let ken = kenneth;
    let ed = ev.target;
    if (! ed ) return;
    if ( ed.nodeName !== "TEXTAREA" ) return;
    let ed_cls = ken.editor_class;
    if ( ed.classList.contains( ed_cls ) ) {
        ed.spellcheck = false;
        ed.wrap = "off";
    }
    let handled =()=> ken.handled( ev );
    let code = ev.keyCode;
    if ( code === 145 ) {
        ken.toggle_echo();
        return handled();
    }
    if ( ken.echoed( ev ) ) return;
    if ( ken.custom( ev ) ) return;
    if ( [ 16, 17, 18, 92 ].includes( code ) ) {
        return;
    }
    let mods = modkeys( ev );
    if ( mods === MK_ALT ) {
        if ( code === 13 ) {
            exec( ed );
            return handled();
        }
        if ( code === asc( "Z" ) ) {
            ed.requestFullscreen();
            ed.focus();
            return handled();
        }
        return;
    }
    if ( mods === 0 ) {
        if ( code === 9 ) {
            ken.insert( ed, "\t" );
            return handled();
        }
    }
};

;( ken => {

ken.editor_class = "zarandar";

ken.lamp_hi  = "1.00";
ken.lamp_lo  = "0.25";
ken.lamp_key = "--key-echo-opacity";

ken.insert = function( ed, txt ) {
    ed  = resolve( ed );
    txt = str( txt );
    let n   = txt.length
    let old = ed.value;
    let ss  = ed.selectionStart;
    let se  = ed.selectionEnd;
    let pfx = old.slice( 0, ss );
    let sfx = old.slice( se );
    ed.value = [ pfx, sfx ].join( txt );
    ed.selectionEnd =
    ed.selectionstart = ( n + ss );
    ed.focus();
    return ed;
};

ken.toggle_echo = function( ev ) {
    let echo =( ken.echo )= (! ken.echo );
    let st = doc.firstElementChild.style;
    let key = ken.lamp_key;
    if ( echo ) {
        st.setProperty( key, ken.lamp_hi );
    } else {
        st.setProperty( key, ken.lamp_lo );
    }
};

ken.echoed = function( ev ) {
    let handled =()=> ken.handled( ev, true );
    if ( ken.echo ) {
        let key  = ev.key;
        let code = ev.keyCode;
        jot( { key, code } );
        return handled( ev , true );
    }
};

ken.encode_key = function( { key, mods } ) {
    key  = ( key  & 0x0FFF );
    mods = ( mods & 0x000F ) << 12;
    return ( mods + key    );
};

ken.decode_key = function( encoded_key ) {
    let ek   = encoded_key;
    let key  = ( ek &  0x0FFF );
    let mods = ( ek >> 0xF000 ) >> 12;
    return { key, mods };
};

ken.custom = function( ev ) {
    let handled =()=> ken.handled( ev, true );
    let key  = ev.keyCode;
    let mods = modkeys( ev );
    if (! ken.has_custom( { key, mods } ) ) return;
    let idx = ken.get_index();
    let action = idx.get(
        ken.encode_key( { key, mods } )
    );
    if ( action instanceof Function ) {
        jot( action( ev ) );
        return handled();
    }
    if ( "string" === typeof action ) {
        jot( srun( action ) );
        return handled();
    }
    boom( "Action ignored (not a String of Function)" );
};

ken.handled = function( ev, retcode ) {
    ken.recent = ev;
    ev.stopPropagation();
    ev.preventDefault();
    return ( retcode );
};

ken.get_index = function() {
    let idx = ( ken.index || new Map() );
    return ( ken.index = idx );
};

ken.has_custom = function( { key, mods } ) {
    let ek = ken.encode_key( { key, mods } );
    return ( ken.get_index().has( ek ) );
};

ken.add_custom = function( { key, mods, action } ) {
    action = ken.encode_action( action );
    let idx = ken.get_index();
    let ek = ken.encode_key( { key, mods } );
    idx.set( ek, action );
    jot( "Added custom key action" );
    jot( { key, mods, action } );
    return ken;
};

ken.remove_custom = function( { key, mods } ) {
    let idx = ken.get_index();
    let ek = ken.encode_key( { key, mods } );
    if ( idx.has( ek ) ) {
        idx.remove( ek );
        jot( "Removed custom key action" );
        jot( { key, mods } );
        return true;
    }
    return false;
};

ken.inspect_custom = function() {
    let table = ken.get_custom_table();
    con.group( "Custom Key Actions" );
    con.table( table )
    con.groupEnd();
};

ken.encode_action = function( action ) {
    function darn( msg ) {
        boom( msg );
        throw new TypeError( action );
    }
    let s = action;
    if ( s instanceof Function ) {
        if ( s = s.name ) {
            return ( `${s}()` );
        }
        darn( "Arrow Functions aren't permitted" );
    }
    if ( "string" !== typeof s ) {
        darn( "Action must be a String or Function" );
    }
    return ( s );
};

ken.get_custom_table = function() {
    function row( o, k ) {
        let key    = ( k & 0xFFFF );
        let mods   = ( k >> 16    );
        let action, s = o[ k ];
        action = s;
        return ( [ key, mods, action ] );
    }
    let idx = ken.get_index();
    let table = [];
    for( let k of idx.keys() ) {
        table.push( row( idx, k ) );
    }
    return table;
};

ken.set_custom_table = function( table ) {
    function row( ary ) {
        let key    = ary[ 0 ] & 0x0FFF;
        let mods   = ary[ 1 ] & 0x000F;
        let action = ary[ 2 ];
        ken.add_custom( { key, mods, action } );
    }
    table.forEach( row );
};

ken.get_custom_json = function() {
    return jst( ken.get_custom_table() );
};

ken.set_custom_json = function( jsn ) {
    return (
        ken.set_custom_table(
            jso( jsn )
        )
    );
};

ken.edit_custom_json = function( ed ) {
    resolve( ed )
    . value = ken.get_custom_json();
};

} ) ( kenneth );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* MODNAME : beezer.js     */
/* SAVED?  : [ ]           */

beeze = function( ev ) {
    beezer.handled( ev );
    let event   = ev;
    let type    = ev.type;
    let mods    = modkeys( ev );
    let button  = ev.button;
    let buttons = ev.buttons;
    let gadget  = ev.target;
    let CE = "contenteditable";
    let ce = gadget.getAttribute( CE );
    let locked = (! ce );
    con.group( "Mouse Down Event" );
    boost( [
        [ "Event"    , event   ]
      , [ "Type"     , type    ]
      , [ "Mod Keys" , mods    ]
      , [ "Buttons"  , buttons ]
      , [ "Button"   , button  ]
      , [ "Gadget"   , gadget  ]
      , [ "Locked"   , locked  ]
    ] );
};

boozable = function( gadget ) {
    let ge = resolve( gadget );
    return ge.classList.contains( "ce" );
};

boozed = function( gadget ) {
    let ge = resolve( gadget );
    return ge.classList.contains( boozed.className );
};

boozed.className = "boozed";

booze = function( ev ) {
    let ge = resolve( ev.target );
    if (! boozable( ge ) ) { return; }
    beezer.handled( ev );
    let CE = "contenteditable";
    if ( ge.hasAttribute( CE ) ) {
        boozify( ge, true );
    } else {
        boozify( ge, false );
    }
};

boozify = function( gadget, lock ) {
    let _jot =( o )=> beezer.jot( o );
    let CE = "contenteditable";
    let ge = resolve( gadget );
    let nn = ge.nodeName;
    if ( lock ) {
        ge.classList.remove( boozed.className );
        ge.removeAttribute( CE );
        _jot( `Element "${nn}" is read only now` );
    } else {
        ge.classList.add( boozed.className );
        ge.setAttribute( CE, "true" );
        _jot( `Element "${nn}" is editable now` );
    }
};

boozificate = function( ary, enable ) {
    ary.forEach( o => {
        if (! gad( o ) ) return;
        if ( enable ) {
            o.classList.add( "ce" );
        } else {
            o.classList.remove( "ce" );
        }
    } );
};

beezer = function( ev ) {
    if ( beezer.locked ) return;
    let mods = modkeys( ev );
    if ( mods & MK_CTRL ) {
        if ( mods & MK_SHIFT ) {
            return booze( ev );
        } else {
            return beeze( ev );
        }
    }
};

beezer.locked = false;
beezer.muted  = false;
beezer.recent = null;

beezer.handled = function( ev, retcode ) {
    beezer.recent = ev;
    ev.preventDefault();
    ev.stopPropagation();
    return ( retcode );
};

beezer.jot = function( o ) {
    if ( beezer.muted ) return;
    return jot( o );
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* cdoc.js */
/* [ ] SAVED */

const cdoc = {};

cdoc.acronyms = function( options ) {
    let s, rs, fs;
    let has =( o )=> ( "string" === typeof o );
    let read =( k )=> (
        has( s = options[ k ] ) ? ( s ) : ""
    );
    if ( options instanceof Object ) {
        rs = read( "rs" );
        fs = read( "fs" );
    }
    return {
        rs : ( rs || "\n" )
      , fs : ( fs || "|"  )
    };
};

cdoc.fields = function( txt, sep ) {
    let trim =( s )=> ( str( s ).trim() );
    return (
        str( txt )
        . trim()
        . split( sep || "|" )
        . map( trim )
    )
};

cdoc.lines =( txt )=> cdoc.fields( txt, "\n" );

cdoc.splice = function( ary, sep ) {
    return ( ary.join( str( sep ) ) );
};

cdoc.splitters = function( ary, sep ) {
    sep = ( sep || splitter( "-", 64 ) );
    return ( cdoc.splice( ary, sep ) );
};

cdoc.splitter = function( token, count ) {
    token = ( str( token ) || "-" );
    count = abs( parseInt( count ) || 0 );
    return token.repeat( count );
};

cdoc.parse = function( txt, options ) {
    let a = cdoc.acronyms( options );
    let trim   =( s )=> ( str( s ).trim() );
    let truthy =( s )=> (!! s );
    let row =( s )=> cdoc.fields( s );
    return (
        trim( txt )
        . split( a.rs )
        . map( trim )
        . filter( truthy )
        . map( row )
    );
};

cdoc.compose = function( ary ) {
    let a = cdoc.acronyms( options );
    let fs = ( ` ${a.fs} ` );
    let lines = [];
    let add  =( s )=> ( lines.push( s ) );
    let line =( o )=> ( o.join( fs ) );
    ary.map( line ).forEach( add );
    return lines.join( a.rs );
};

cdoc.beautify = function( txt ) {
    return cdoc.compose(
        cdoc.parse( txt )
    );
};


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* init-zed-prolog.js */
/* [ ] SAVED */

$_init_zed_prolog = function() {
    doc.title = (
         ( o = ebi( "title" ) )
       ? ( o . textContent    )
       : ( doc . title )
    );
    addEventListener( "keydown"   , kenneth );
    addEventListener( "mousedown" , beezer  );
    jot( "Zed prolog initialized" );
};


addEventListener( "load", $_init_zed_prolog );


jot( "Loaded prolog.js module" );


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*

</textarea>

> TODO :

- [ ] Save string.js
- [ ] Save beezer.js
- [ ] Save cdoc.js
- [ ] Save $_init_zed_prolog.js
- [ ] Write API Notes for all modules
- [ ] Create theme.js module
- [ ] Create theme-index.js module
- [ ] Copy files to Zed's API folder (root)

*/
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


