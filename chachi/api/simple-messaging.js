
// `simple-messaging.js`

function message( s ) {
  return ( messages.textContent = ( s ) );
}

message.decals = {
  decal   : "🎭"
, advise  : "🧙‍♂️"
, ready   : "🦅"
, nyteowl : "🦉"
, remark  : "🧝"
, notice  : "🟢"
, warning : "🟡"
, fatal   : "🔴"
, respond : "⚡"
, todo    : "🚧"
};

message.notes = {
  decal   : "🎭 ~ Signifies one or more decal characters"
, advise  : "🧙‍♂️ ~ Signifies a tip, hint, or recommended action"
, ready   : "🦅 ~ Signifies system is idle"
, nyteowl : "🦉 ~ Signifies a personal message from the Developer"
, remark  : "🧝 ~ Signifies a general notification or remark"
, notice  : "🟢 ~ Signifies success or some positive result"
, warning : "🟡 ~ Signifies a warning or partial success"
, fatal   : "🔴 ~ Signifies a fatal exception, disrupting flow"
, respond : "⚡ ~ Signifies an event was fired and optionally handled"
, todo    : "🚧 ~ Signifies a to-do item (incomplete feature)"
};

function respond( e, handle ) {
    if ( e instanceof Event ) {
        if ( handle ) {
            e.preventDefault();
            e.stopPropagation();
        }
        s = e.type;
    } else {
        s = String( e );
    }
    return message( `⚡ ${s}` );
}

function advise( s ) {
    return message( `🧙‍♂️ ${s}` );
}

function ready( s ) {
    return message( `🦅 ${s}` );
}

function nyteowl( s ) {
    return message( `🦉 ${s}` );
}

function remark( s ) {
    return message( `🧝 ${s}` );
}

function notice( s ) {
    return message( `🟢 ${s}` );
}

function warning( s ) {
    return message( `🟡 ${s}` );
}

function fatal( s ) {
    if ( s instanceof Error ) {
        message( `🔴 ${s.message}` );
        throw ( s );
    } else {
        message( `🔴 ${s}` );
        throw new Error( s );
    }
}

function todo( s ) {
    return message( `🚧 ${s}` );
}

function auto_title() {
    if ( "object" === typeof page_title ) {
        document.title = (
            page_title
            . textContent
            . trim()
        );
        remark( "Document Title was Auto-Updated" );
        return true;
    }
}

addEventListener( "load", (e)=> {
    let doc = document;
    if (! auto_title() ) {
        let s = doc.title;
        doc.title = ( `🦉 [ ${s} ]` );
        if ( "object" === typeof messages ) {
            nyteowl( "Howdy from your favorite NyteOwl!" );
        }
        let he = doc.querySelector( "HEADER" );
        if (! he ) {
            he = doc.createElement( "HEADER" );
            doc.body.appendChild( he );
            alert( "Providing Default HEADER" );
        }
        he.textContent = ( doc.title );
    }
} );

if ( "object" !== typeof messages ) {
    let doc = document;
    let fe  = doc.querySelector( "FOOTER" );
    if ( fe && ( fe.id == "" ) ) {
        fe.id = "messages";
        window.messages = fe;
    } else {
        let e = new Error(
            `🔴 Missing "messages" gadget!`
        );
        document.body.style.background = "red";
        window.recent_error = ( e );
        throw ( e );
    }
}

class Xander {
    constructor() {
        this._state = {
            props  : {} ,
            stack  : [] ,
            memo   : ""
        };
    }
    get state() { return this._state; }
    get stack() { return this.state.stack; }
    get props() { return this.state.props; }
    get memo() { return this.state.memo; }
    set memo( o ) {
        this._state.memo = this.prep( o );
    }
    prep( o ) { return Xander.prep( o ); }
    setItem( k, v ) {
        k = this.resolveKey( k )
        this.props[ k ] = ( v );
    };
    getItem( k ) {
        k = this.resolveKey( k )
        return this.props[ k ];
    };
    pop  () { return this.stack.pop  (); };
    shift() { return this.stack.shift(); };
    push( o ) {
        this.stack.push( this.prep( o ) );
    };
    unshift( o ) {
        this.stack.push( this.prep( o ) );
    };
    peek( i ) {
        i = parseInt( i );
        if ( isFinite( i ) ) {
            return this.stack[ i ];
        }
    };
    unique( o ) {
        return ( new Set( o || this.stack ) );
    }
    getItemValues( keys ) {
        let props = this.props;
        keys = ( keys || this.keys( props ) );
        return (
            ( keys )
            . map( k => ( props[ k ] ) )
        );
    }
    keys( o ) {
        o = ( o || this );
        return ( Object.keys( o ).sort() );
    }
    resolveString( o ) {
        return ( String( o || "" ).trim() );
    }
    resolveInt( i ) {
        return ( parseInt( i ) || 0 );
    }
    resolveReal( n ) {
        return ( parseFloat( n ) || 0 );
    }
    resolveKey( k ) {
        if ( "number" !== typeof k ) {
            return ( k );
        }
        let i = parseInt( k );
        if ( isFinite( i ) ) { return ( i ); }
        return ( k );
    }
};

Xander.prep = function( o ) {
    let obj =( o )=> ( o instanceof Object );
    let err =( o )=> ( o instanceof Error  );
    let evt =( o )=> ( o instanceof Event  );
    if ( obj( o ) ) {
        if ( err( o ) ) {
            return ( o.message );
        }
        if ( evt( o ) ) {
            return ( o.type );
        }
        if ( o[ Symbol.iterator ] ) {
            o = Array.from( o );
        }
        return JSON.stringify( o );
    }
    return String( o );
};

class XaviaLite extends Xander {
    get con() { return console;  }
    get doc() { return document; }
    get wnd() { return window;   }
    get stg() { return window.localStorage; }
    get loc() { return window.location;     }
    get scn() { return window.screen;       }
    get nav() { return window.navigator;    }
    get hst() { return window.history;      }
    get idb() { return window.indexDB;      }
    get agt() { return window.navigator.agent.toLowerCase(); }
};

class Gatherer extends XaviaLite {
    arr( o ) { return Array.from( o ); }
    one( q ) { return this.doc.querySelector( q ); }
    all( q ) { return this.arr( this.doc.querySelectorAll( q ) ); }
    gad( o ) { return ( o instanceof HTMLElement ); }
    ged( o ) { return ( o instanceof HTMLTextAreaElement ); }
    gid( i ) { return this.doc.querySelector( i ); }
    god( o ) { return ( gad( o ) ? ( o ) : gid( o ) ); }
    gud( o ) {
        o = god( o );
        return ( ged( o ) ? ( o ) : ( null ) );
    }
};

function kill_spellcheck( type ) {
    function enact( o ) { o.spellcheck = false; }
    enact( document );
    all( "TEXTAREA" ).forEach( enact );
    all( "PRE" ).forEach( enact );
    all( "INPUT" ).forEach( enact );
}

function make_editable( enable, type ) {
    let CE = "contenteditable";
    let doc = document;
    let arr =( o )=> Array.from( o );
    let all =( q )=> arr( doc.querySelectorAll( q ) );
    all( type || "TD" ) . forEach ( editable );
    function editable( o ) {
        if ( enable ) {
            o.setAttribute( CE, true );
        } else {
            o.removeAttribute( CE );
        }
    }
}

addEventListener( "load" , (e) => {
    if ( "undefined" !== typeof EDITABLE_TABLES ) {
        if (!! EDITABLE_TABLES ) {
            make_editable( true );
        }
    }
} );

SimpleMessaging = {
  messages
, message
, notice
, warning
, fatal
, advise
, remark
, todo
, ready
, nyteowl
, auto_title
, decals : message.decals
, notes  : message.notes
};

console.log( `🧝 Loaded simple-messaging.js API Module` );

// alert( 123 );

