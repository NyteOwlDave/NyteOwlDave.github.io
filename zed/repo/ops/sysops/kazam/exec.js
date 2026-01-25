
/* 

> [exec.js](http://dave-legacy/~/sysops/vulcan/)

- [Process](https://nodejs.org/docs/latest/api/process.html)
- [Child Process](https://nodejs.org/api/child_process.html)

*/

/* <pre contenteditable><code> */

const { spawn } = require( 'child_process' );

exec = function( cmd, args=[] ) {
    let say =( ...o )=> ( console.log( ...o ) );
    const child = spawn( cmd, args );
    child.stdout.on(
        'data' , ( data ) => {
            say( `stdout: ${data}` );
        }
    );
    child.stderr.on(
        'data', ( data ) => {
            say( `stderr: ${data}` );
        }
    );
    child.on(
        'close', ( code ) => {
           say( `Child process exited with code ${code}` );
        }
    );
    child.on(
        'error', ( err ) => {
            say( 'Failed to start child process.', err );
        }
    );
    return child;
};


/* </code></pre> */

