
//=> + ChatGPT for this App <=
//=> @ https://chatgpt.com/c/8a1b88c7-e605-4971-9d61-5bfb2a67398e <=

// https://nodejs.org/docs/latest/api/fs.html
const fs = require('fs');

// https://nodejs.org/docs/latest/api/path.html
const path = require('path');

//[ Module ]
const Module = {
    title   : "KAZAM!" ,
    version : "2024-JUL-25"
}

//[ Flags ]
const Flags = {
   verbose : true ,
   debug   : true ,
   log     : true ,
};

//[ Log ]
const Log = {
    errors  : [] ,
    debug   : [] ,
    files   : [] ,
    folders : [] ,
}

//[ Stats ]
const Stats = {
    maxDepth : 0 ,
    errors : {
        read  :  0 ,
        write :  0 ,
        other :  0 ,
    } ,
    debug : {
        read  :  0 ,
        write :  0 ,
    } ,
    bytes : {
        read  : 0 ,
        write : 0 ,
    } ,
    files : {
        read  :  0 ,
        write :  0 ,
        check :  0 ,
        match :  0 ,
    } ,
    folders : {
        read  :  0 ,
        write :  0 ,
        check :  0 ,
    } ,
};

//[ State ]
const State = {
    fullPath     : "" ,
    currentPath  : "" ,
    currentEntry : "" ,
    level : 0 ,
};

//[ logFile ]
function logFile( s ) {
    if (! Flags.log ) return;
    Log.files.push( s );
}

//[ logFolder ]
function logFolder( s ) {
    if (! Flags.log ) return;
    Log.folders.push( s );
}

//[ logDebug ]
function logDebug( s ) {
    if (! Flags.log ) return;
    Log.debug.push( s );
}

//[ logError ]
function logError( s ) {
    if (! Flags.log ) return;
    Log.errors.push( s );
}

//[ composeModule ]
const composeModule = () => {
    const title = Module.title;
    const version = Module.version;
    return `[ ${title} | ${version} ]`;
}

//[ header ]
const header = ( title ) => {
    console.log( `[ ${title} ]` );
}

//[ group ]
const group = ( title, ... content ) => {
    header( title );
    // content = { ... content };
    console.log( content );
}

//[ jsonError ]
const jsonError = ( err ) => {
    Stats.errors.other += 1;      
    logError( err );
    if ( !Flags.verbose ) return;
    console.error(
'Error parsing JSON config file', 
        err
    );
}

//[ dirError ]
const dirError = ( path, err ) => {
    Stats.errors.read += 1;      
    logError( err );
    if ( !Flags.verbose ) return;
    console.error(
`Error reading directory: ${path}`, 
        err
    );
}

//[ configError ]
const configError = ( path, err ) => {
    Stats.errors.read += 1;
    logError( err );
    if ( !Flags.verbose ) return;
    console.error( 
`Error reading config file: ${path}`, 
         err
    );
}

//[ aboutWithout ]
const abortWithout = ( s ) => {
    Stats.errors.other += 1;      
    logError( err );
    if ( !Flags.verbose ) return false;
    console.warn( 
`Can't continue without ${s}.` );
    return false;
}

//[ safeString ]
const safeString = ( s ) => {
    if ( 'string' == typeof s ) return s.trim();
    return '';
}

//[ checkString ]
const checkString = ( s, t ) => {
    if ( s.length > 0 ) return true;
    Stats.errors.other += 1;      
    logError( err );
    if ( !Flags.verbose ) return false;
    console.warn( 
`Configuration property '${t}' is missing or empty` 
    );
    return false;
}

//[ readFile ]
const readFile = ( pathName ) => {
    // Simulation mode (for debugging)
    if ( Flags.debug ) {
        Stats.debug.read += 1;
        logDebug( { read : pathName } );
        return "Simulated";
    }
    try {
        const content = fs.readFileSync( pathName );
        Stats.files.read += 1;
        Stats.bytes.read += content.length;
        logFile( { read: pathName } );
        return content;
    } catch( err ) {
        Stats.errors.read += 1;
        logError( {
            error : err,
            read  : pathName
        } );
        if ( Flags.verbose ) {
            console.error(
`Error reading file: ${pathName}`, err            
            );        
        }
    }
    return null;
}

//[ writeFile ]
const writeFile = ( pathName, content ) => {
    // Simulation mode (for debugging)
    if ( Flags.debug ) {
        Stats.debug.write += 1;
        logDebug( { write : pathName } );
        return false;
    }
    try {
        fs.writeFileSync(
            pathName, 
            content
        );
        logFile( { write : pathName } );
        Stats.files.write += 1;      
        Stats.bytes.write += content.length;
        return true;
    } catch( err ) {
        Stats.errors.read += 1;
        logError( {
            error : err,
            write  : pathName
        } );
        if ( Flags.verbose ) {
            console.error(
`Error writing file: ${pathName}`, err            
            );
        }
    }
    return false;
}

//[ errorDump ]
function errorDump() {
    if ( ! ( Flags.debug || Flags.verbose ) ) return;
    group( 'Error Dump', {
        Flags, Stats, State
    } );
}

//[ finalReport ]
function finalReport() {
    if ( ! ( Flags.debug || Flags.verbose ) ) return;
    group( 'Statistics', Stats );
}

//[ generateLogFile ]
function generateLogFile() {
    const isArray = ( o ) => Array.isArray( o );
    const isObject = ( o ) => ( o instanceof Object );
    const isType = ( o, t ) => ( t == typeof o );
    const isString = ( o ) => isType( o, 'string' );  
    const fixKeyValuePair = ( kvp ) => {
        if ( kvp.startsWith( '{' ) ) {
            return '{ ' + kvp.substring( 1 );
        }
        if ( kvp.endsWith( '}' ) ) {
            const len = kvp.length-1;
            return kvp.substring( 0, len ) + ' }';
        }
        return `${kvp}`;
    }
    const composeJSON = ( o ) => {  
        return JSON.stringify( o )  
        .split( ',' ).join( ', ' )  
        .split( ':' ).map( fixKeyValuePair )  
        .join( ' : ' );
    }
    const keys = ( o ) => {
        const results = [];
        if ( isObject( o ) ) {
            for ( let key in o ) results.push( key );
        }
        return results;
    }
    const isEmpty = ( o ) => {
        if ( isType( o, 'undefined' ) ) return true;
        if ( isType( o, 'null'      ) ) return true;
        if ( isType( o, 'boolean'   ) ) return false;
        if ( isString( o ) ) {
            return ( o.length < 1 );
        }
        if ( isArray( o ) ) {
            return ( o.length < 1 );
        }
        if ( isObject( o ) ) {
            return keys( o ).length < 1;
        }
        return (! isFinite( o ) );
    }
    const results = [];
    const writeLogObject = ( obj ) => {
        for ( let key in obj ) {
            let value = obj[ key ];
            if ( value instanceof Object ) {
                value = composeJSON( value );
            }
            const s = `${key} : ${value}`;
            writeLogEntry( s );
        }
    }
    const writeLogArray = ( arr ) => {
        arr.forEach( writeLogEntry );
    }
    const writeLogEntry = ( entry ) => {
        if ( Array.isArray( entry ) ) {
            return writeLogArray( entry );
        }
        if ( entry instanceof Object ) {
            return writeLogObject( entry );
        }
        results.push( entry );
    }
    const writeLogTitle = ( title ) => {
        results.push( `[ ${title} ]` );
    }
    const writeLog = ( title, log ) => {
        if ( isEmpty( log ) ) return;
        writeLogTitle( title );
        writeLogEntry( log );
    }
    writeLog( 'Module' , Module );
    writeLog( 'Time', { now : (new Date()).toLocaleString() } );
    writeLog( 'Flags' , Flags );
    writeLog( 'Statistics' , Stats  );
    writeLog( 'Errors' , Log.errors  );
    writeLog( 'Debug'  , Log.debug   );
    writeLog( 'Files'  , Log.files   );
    writeLog( 'Folders', Log.folders );
    const content = results.join( "\n" );
    try {
        fs.writeFileSync( "kazam.log", content );
    } catch( err ) {
        group( 'Log Error', err );
    }
}

/**
 * Replace files in the directory hierarchy.
 * 
 * @param {string} topLevelPath - The path to the top level folder where the search begins.
 * @param {string} replacementPath - The pathname to the file to be used as a replacement.
 * @param {string} baseFileName - The base name of the file to use for comparison.
 */

//[ replaceFiles ]
function replaceFiles( 
    topLevelPath, 
    replacementPath, 
    baseFileName ) {
    topLevelPath = safeString( topLevelPath );
    if (! checkString( 
        topLevelPath, 
        'topLevelPath' 
    ) ) return abortWithout( "a top level path" );
    baseFileName = safeString( baseFileName );
    if (! checkString( 
        baseFileName, 
        'baseFileName' 
    ) ) return abortWithout( "a base file name" );
    replacementPath = safeString( replacementPath );
    if (! checkString( 
        replacementPath, 
        'replacementPath' 
    ) ) return abortWithout( "a replacement path name." );
    const replacement = readFile( replacementPath );
    if (! replacement ) {
        return abortWithout( "a replacement file." );
    }
    const matchFileName = ( entry ) => {
        // logFile( { check : entry } );
        return ( entry == baseFileName );
    }
    const replaceFile = ( pathName ) => {
        logFile( { replace : pathName } );
        return writeFile( pathName, replacement );
    }
    const traverseFolder = ( currentPath ) => {
        try {
            Stats.folders.check += 1;
            State.currentPath = currentPath;
            let stat = fs.lstatSync( currentPath );
            // logFolder( { check : currentPath } );
            if (! stat.isDirectory() ) {
                throw new Error( 
`Argmuent isn't a directory:\n${currentPath}` 
                );
            }
            const entries = fs.readdirSync( currentPath );
            State.level += 1;
            Stats.maxDepth = Math.max(
                State.level, Stats.maxDepth
            )
            Stats.folders.read += 1;
            logFolder( { read : currentPath } );
            let filesWritten = false;
            entries.forEach( entry => {
                State.currentEntry = entry;
                const fullPath 
                    = path.join( currentPath, entry );
                State.fullPath = fullPath;
                stat = fs.lstatSync( fullPath );
                if ( stat.isDirectory() ) {
                    traverseFolder( fullPath );
                    State.currentPath = currentPath;
                } else if ( stat.isFile() ) {
                    Stats.files.check += 1;
                    if ( matchFileName( entry ) ) {
                        Stats.files.match += 1;                        
                        if ( replaceFile( fullPath ) ) {
                            filesWritten = true;
                        }
                    }
                }
            } );
            if ( filesWritten ) {
                Stats.folders.write += 1;
            }
            State.level -= 1;
        } catch( err ) {
            Stats.errors.other += 1;
            errorDump();
            throw err;
        }
    }

    // Start the traversal from the top level path
    traverseFolder( topLevelPath );
}

/**
 * Load configuration from a JSON file and execute the replacement process.
 * 
 * @param {string} configFilePath - The path to the JSON configuration file.
 */

//[ loadAndReplace ]
function loadAndReplace( configFilePath ) {
    // This is an asynch read
    fs.readFile( configFilePath, 'utf8', (err, data) => {
        if ( err ) {
            return configError( 
                configFilePath,
                err
            );
        }
        try {            
            const config = JSON.parse( data );
            let { 
                topLevelPath , 
                replacementFilePath , 
                baseFileName ,
                debug ,
                verbose ,
                log ,
            } = config;
            if ( verbose === false ) {
                Flags.verbose = false;
            } else {
                verbose = Flags.verbose;
            }
            if ( log === false ) {
                Flags.log = false;
            } else {
                log = Flags.log;
            }
            if ( debug === false ) {
                Flags.debug = false;
            } else {
                debug = Flags.debug;
            }
            if ( debug ) {
                verbose = Flags.verbose =
                log = Flags.log =
                true
            }
            if ( verbose ) {
                header( 'Internals' );
                console.log( {
                    debug ,  
                    verbose , 
                    log ,
                    configFilePath
                } );
                header( 'Configuration' );
                console.log( {
                    File : config              
                } );
            }
            replaceFiles(
                topLevelPath, 
                replacementFilePath, 
                baseFileName
            );
            finalReport();
            if ( log ) {
                console.log( ">> Generating log file" );
                generateLogFile();
            }
        } catch ( err ) {
            jsonError( err );
        }

    } );
}

//[ main ]
function main() {

    console.clear();
    console.log( `[${composeModule()}]` );

    // Get configFilePath from command line arguments
    const configFilePath = process.argv[ 2 ]
    || 'kazam.json';

    loadAndReplace( configFilePath );

}

main();


