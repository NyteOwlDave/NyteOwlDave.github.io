
/*

--------------------------------------------

# sqlite-node-server.mjs

--------------------------------------------

# USAGE

- Open Console
- Invoke Node JS
- Pass script filename as argument

--------------------------------------------

*/

import { DatabaseSync } from 'node:sqlite';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const cls =(   )=> console.clear(   );
const jat =( t )=> console.table( t );
const jet =( e )=> console.error( e );
const jit =( s )=> console.info ( s );
const jot =( s )=> console.log  ( s );
const jut =( s )=> console.warn ( s );
const jyt =( s )=> console.debug( s );

var ConsoleOps = {
  cls
, jat , jet , jit
, jot , jut , jyt
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const jst =( o )=> JSON.stringify( o, null, 2 );
const jso =( t )=> JSON.parse( t );
const jsp =( t )=> jst( jso( t ) );
const psj =( o )=> jso( jst( o ) );

var JsonOps = { jst, jso, jsp, psj };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const dbname = "owl-database.db";

// Connect to a local database file
// (creates it if it doesn't exist)
const db = new DatabaseSync( dbname );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var examples = {};

examples . create_table = ( `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER
)
` );

examples . insert_record = ( `
INSERT INTO users (name, age) VALUES (?, ?)
` );

examples . select_all = ( `
SELECT * FROM users
` );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function create_user_table() {
    db.exec( examples . create_table );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function insert_user_record( name, age ) {
    const sql = db.prepare( examples . insert_record );
    sql . run( name , age );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

insert_user_record . test = function() {
    const ops = insert_user_record;
    ops( 'Alice' , 28 );
    ops( 'Bob'   , 34 );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function select_all_users() {
    const sql = db.prepare( examples . select_all );
    const rows = sql . all();
    return ( rows );

/*

# Output

[
    { id: 1, name: 'Alice' , age: 28 } ,
    { id: 2, name: 'Bob'   , age: 34 }
]

*/

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function update_user_record( name, new_age ) {
    // Update
    const sql = (
        db.prepare( 'UPDATE users SET age = ? WHERE name = ?' )
    );
    sql . run( new_age, name );
    console.log( `${name} is now ${new_age} year(s) old` );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

update_user_record.test = function() {
    const ops = update_user_record;
    ops( 'Alice', 42 );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function delete_user_record( id ) {
    const sql = db.prepare( 'DELETE FROM users WHERE id = ?' );
    sql . run( id );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

delete_user_record.test = function() {
    const ops = delete_user_record;
    ops( 2 ); // Deletes Bob
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function clear_user_table() {
    const sql = db.prepare( 'DELETE * FROM users' );
    sql . run();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function exec_sql( cmd ) {
    const sql = db.prepare( cmd );
    sql . run();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function test_01() {

    let rows;

    jot( "\nCreating User Table\n" );
    create_user_table();

    jot( "\nInserting Test Records:\n" );
    insert_user_record . test();

    jot( "\nSelecting All Records:\n" );
    rows = select_all_users();
    jat( rows );

    jot( "\nUpdating Test Record:\n" );
    update_user_record . test();

    jot( "\nSelecting All Records:\n" );
    rows = select_all_users();
    jat( rows );

    jot( "\nDeleting Test Record:\n" );
    delete_user_record . test();

    jot( "\nSelecting All Records:\n" );
    rows = select_all_users();
    jat( rows );

    jot( "\nFinished!\n" );

}

cls();

jot( `\nLoaded "sqlite-node-server.js" Module\n` );

test_01();

