
/* 
    Cool Date ~ 2025-APR-11
    cool-date.js
*/

class CoolDate {

    constructor() {}

    getType( dt ) { return this.we.getType( dt ); }

    getString( dt ) {
        const type = this.getType( dt );
        switch( type ) {
        case "Date"     : return this.readDOMDate  ( dt );
        case "CoolDate" : return this.readCoolDate ( dt );
        case "Array"    : return this.readArrayDate( dt );
        case "Object"   : return this.readObject   ( dt );
        case "String"   : return this.readString   ( dt );
        }
    }

    parseDOMDate( dt ) { return (new Date( dt )).toString(); }
    composeDOMDate( dt ) { return new Date( dt ); }

    parseCoolDate( dt ) { TODO() }
    composeCoolDate( dt ) { TODO() }

    readObject( o ) {
        this.todo();
    }
    writeObject( o, coolDate ) {
        this.todo();
    }
    createObject( year, month, date ) {
        this.todo();
    }

    readArray( array ) {
        const year  = array[ 0 ];
        const month = array[ 1 ];
        const date  = array[ 2 ];
        const o = this.createObject( year, month, day );
        return this.readObject();
    }
    writeArray( array, coolDate ) {
        coolDate = this.unwrap( coolDate );
        let parts = coolDate.split( "-" );
        parts = this.createArray( 
            parts[ 0 ] ,
            parts[ 1 ] ,
            parts[ 2 ] 
        );
        if ( this.isArray( array ) ) {
            array[ 0 ] = parts[ 0 ];
            array[ 1 ] = parts[ 1 ];
            array[ 2 ] = parts[ 2 ];
        }
        return parts;
    }
    createArray( year, month, date ) {
        const dt = new Date();
        year  = this.prepYear ( year,  dt );
        month = this.prepMonth( month, dt );
        date  = this.prepDate ( date,  dt );
        return [ year, month, date ];
    }

    prepYear( year, dt ) {
        dt = this.isDOMDate( dt ) ? dt : (new Date());
        year = parseInt( year ) || dt.getYear();
        year = this.clamp( 1970, year, 9999 );
        return String( year );
    }

    prepMonth( month, dt ) {
        dt = this.isDOMDate( dt ) ? dt : (new Date());
        year = parseInt( year ) || dt.getMonth();
        return String( year );
    }
 
    isLeapYear( year ) {
        this.todo();
    }

    maxDate( dt ) { // Days in Month
        return this.we.maxDate( dt );
    }

    clamp( lo, n, hi ) {
        return Math.min( Math.max( n, lo ), hi );
    }

    prepDate( date, dt ) {
        dt = this.isDOMDate( dt ) ? dt : (new Date());
        date = parseInt( date ) || dt.getDate();
        year = this.clamp( 1, year, this.maxDate( dt ) );
        return String( date );
    }

    prep( s ) {
        return String( s ).trim().toUpperCase();
    }

    unwrap( o ) {
        if ( o instanceof CoolDate ) {
            return o.value;
        } else if ( "string" === typeof o ) {
            return this.prepContent( o ); 
        } else {
            throw new TypeError( o );
        }
    }

    wrap( o ) {
        if ( o instanceof CoolDate ) {
            return o;
        } else if ( "string" === typeof o ) {
            const coolDate = new CoolDate();
            coolDate.value = o;
            return coolDate; 
        } else {
            throw new TypeError( o );
        }
    }

    readContent( gadget ) {
        if (! this.isGadget( gadget ) ) {
            throw new TypeError( gadget );
        }
        return this.prep( gadget.textContent );
    }

    writeContent( gadget, coolDate ) {
        if (! this.isGadget( gadget ) ) {
            throw new TypeError( gadget );
        }
        gadget.textContent = this.prep( coolDate );
    }

    todo() {
        throw new Error( "This feature is under construction." );
    }

}


;( o => { 

const we = o.we = {};

function throwTODO() {
    throw new Error( "This feature is under construction." );
}

// 28=Feb
// 30=Apr/Jun/Sep/Nov
// 31=Jan/Mar/May/Jul/Aug/Oct/Dec
we.daysInMonth = [
    31, 28, 31, 30,
    31, 30, 31, 31,
    30, 31, 30, 31,
];

we.monthNames = [
    "January" , "February", "March"     ,
    "April"   , "May"     , "June"      ,
    "July"    , "August"  , "September" ,
    "October" , "November", "December"
];

we.getMonthNameByIndex = function( index ) {
    index = parseInt( index ) % 12;
    index = ( index < 0 ) ? index + 12 : index;
    return we.monthNames[ index ];
}

we.isLeapYear = function( year ) {
    // Set date to Feb 29th for the year
    const s = `2/29/${year}`;
    // Create Date for this Year
    const dt = new Date( s );
    // See if month indicates FEBRUARY (0-based)
    return ( dt.getMonth() === 1 );
}

we.daysInYear = function( year ) {
    return ( we.isLeapYear( year ) ) ? 366 : 365;
}

// Alias "Days in Month"
we.maxDate = function( dt ) {
    const month = dt.getMonth(); // 0-based
    if ( month === 1 ) { // FEB
        const year = dt.getYear();
        return ( we.isLeapYear( year ) ) ? 29 : 28;
    }
    return we.daysInMonth[ month ];
}

we.prep = function( dt ) {
    throwTODO();
}

we.wrap = function( dt ) {
    const t = we.type( dt );
    throwTODO();
}

we.unwrap = function( dt ) {
    const t = we.type( dt );
    throwTODO();
}

we.isArray    = function( arg ) { return Array.isArray( arg );           }
we.isString   = function( arg ) { return ( "string" === typeof arg    ); }
we.isObject   = function( arg ) { return ( arg instanceof Object      ); }
we.isGadget   = function( arg ) { return ( arg instanceof HTMLElement ); }
we.isDOMDate  = function( arg ) { return ( arg instanceof Date        ); }
we.isCoolDate = function( arg ) { return ( arg instanceof CoolDate    ); }

we.isDateGadget = function( arg ) {
    if ( we.isGadget( arg ) ) {
        return ( arg.nodeName.toLowerCase() === "date" );
    } else {
        return false;
    }
}

we.type = function( source ) {
    if ( we.isObject  ( dt ) ) { 
        if ( we.isArray   ( dt ) ) { return "Array"    ; }
        if ( we.isGadget  ( dt ) ) { return "Gadget"   ; }
        if ( we.isDOMDate ( dt ) ) { return "Date"     ; }
        if ( we.isCoolDate( dt ) ) { return "CoolDate" ; }
        return "Object"; 
    }
    if ( we.isString( dt ) ) { return "String"  ; }
    return ( typeof dt );
}

we.readContent = function( gadget ) {
    throwTODO();
}

we.writeContent = function( gadget, coolDate ) {
    throwTODO();
}

} )( CoolDate );


console.log( "Loaded cool-date.js API Module" );

