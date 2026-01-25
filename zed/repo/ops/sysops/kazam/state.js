
workspace =  "Vulcan";

async function request( url, options ) {
    return await fetch( url, options ).then( r=>r.text() );
}

str = s => s || "";
safeDir = s => str(s) || ".";

cls = () => console.clear();
say = ( ... args ) => console.log( ... args );
table = (...args) => console.table(... args);

pwd = () => process.cwd();
cd = s => process.chdir( s );
dir = ls = s => fs.readdirSync( safeDir(s), (o=>console.table(o)) );

date = () => (new Date()).toLocaleString();
now = () => Date.now();

helpDoc = `
request
str
safeDir
cls
say
table
date
now
cd
pwd
ls
dir
help
`;

function help( clear=true ) {
    if ( clear ) cls();
    console.group( "Commands:" );
    pwd();
    console.log( helpDoc );
    console.groupEnd();
    console.log( pwd() );
    return ( date() );
}

API = {
    request ,  safeDir,
    str , cd , ls , dir ,
    say , table , 
    help , helpDoc ,
    cls , pwd, now
};

API.help( true );

