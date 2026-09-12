
/*

# message-ops.js

<pre>

*/


/*
 ~~~~~~~~~~~~~~~~~~~~~~~~[ Message Ops ]~~~~~~~~~~~~~~~~~~~~~~~~
*/

function message( s ) {
    return (
        messages.textContent = str( s )
    );
}

function look_here( s ) {
    return message(
        [ `👀`, str( s ) ]
        . join( " " )
    );
}

function announce( s ) {
    return message(
        [ `🧝`, str( s ) ]
        . join( " " )
    );
}

function recommend( s ) {
    return message(
        [ `🧙`, str( s ) ]
        . join( " " )
    );
}

function blurt( s ) {
    return message(
        [ `🟡`, str( s ) ]
        . join( " " )
    );
}

function dangit( s ) {
    return message(
        [ `🟢`, str( s ) ]
        . join( " " )
    );
}

function bummer( e ) {
    let s;
    if ( e instanceof Error ) {
        s = e.message;
    } else {
        s = str( e );
        e = new Error( s );
    }
    message(
        [ `🔴`, str( s ) ]
        . join( " " )
    );
    return ( e );
}

function suggest( s ) {
    let i;
    if ( isFinite( i = parseInt( s ) ) ) {
        if ( "object" === typeof suggestions ) {
            const o = arr( suggestions );
            s = ( o[ i ] || s );
        } else {
            throw new Error( `Can't find "suggestions" list` );
        }
    }
    suggest.recent = (
        footer_input.value = str( s )
    );
}

suggest.count = function() {
    let n = 0;
    if ( "object" === typeof suggestions ) {
        n = suggestions.length;
    }
    message( `🧮 Suggestion Count : ${n}` );
};

function last() {
    const s = str( suggest.recent );
    if ( s ) {
        suggest( s );
    } else {
        dangit( "No recent command was found" );
    }
}

function say( s, ed ) {
    ed = ( ed || gid( "sop" ) );
    if ( ed ) {
        ed . value = ( s );
    } else {
        console.warn( `Missing SOP Editor` );
        blurt( s );
    }
}

function mention( s, ed ) {
    ed = ( ed || gid( "sop" ) );
    if ( ed ) {
        const t = ( ed.value );
        if ( t ) {
            s = [ t, s ].join( "\n" );
        }
    }
    return say( s, ed );
}

message.helpers = {
  mention, say
, announce, recommend, look_here
, blurt, dangit, bummer
, suggest, last
};

message.mem = function() {
    const ops = message;
    const m = Object.keys( ops.helpers );
    m.unshift( "message" );
    return ( m );
};

message.inspect = function( o, t ) {
    let m;
    if ( o instanceof Object ) {
        m = Object.keys( o ).sort();
        t = ( str( t ) || "Members" );
    } else {
        m = message.mem();
        t = "Message Methods";
    }
    const c = console;
    c.clear();
    c.group( `[ ${t} ]` );
    c.table( m );
    c.groupEnd();
};

message.hints = function( o, t ) {
    let m;
    if ( o instanceof Object ) {
        m = Object.keys( o ).sort();
        t = ( str( t ) || "Members" );
    } else {
        m = message.mem();
        t = "Message Methods";
    }
    m . unshift( `[ ${t} ]\n` );
    alert( m.join( "\n" ) );
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "message-ops.js" API Module` )
;

/*

</pre>

*/

