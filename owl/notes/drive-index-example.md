<head> <link rel="icon" href="favicon.ico" /> </head>

<style> @import url("./../owl.css"); </style>

<style>
td input {
    width : 90%;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[owl-grid]: <http://dave-owl/gadgets/grid//tools-grid.html>
[owl-host]: <http://dave-owl/dave-owl.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[sql-practice]:   <https://sqliteonline.com/>
[sql-menu-omega]: <http://dave-omega/app/sqlite/sqlite-menu.html>
[sql-examples]:   <http://dave-omega/app/morpheus/owl/notes/sqlite-examples.html>
[sql-notebook]:   <https://notebook.google.com/notebook/fab55194-c7dc-4f45-b48c-257af9aa564a>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-omega]:  <http://dave-omega/app/morpheus/owl/notes/drive-index-example.html>
[owl-notes]: <./../owl-notes.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

# `⛃` Drive Index Example

## `🦉` Owl System for Morpheus

----------------------------------------------------------------

> [`💻` Omega][me-omega]
> [`📘` Owl Notes][owl-notes]

> [`🗃️` File System](./)

----------------------------------------------------------------

# `☶` Drive Card Table

----------------------------------------------------------------

| Drive | Symbol | Label           | Address |
|-------|--------|-----------------|---------|
| A:    | `💿`   | Project Notes   | https://ticktick.com/webapp/#p/6a99f28e8f086b72edb5a98b/tasks |
| B:    | `💿`   | Idea Flip       | https://ideaflip.com/b/sv99ag69aj8f/ |
| C:    | `💿`   | Simple Mind Map | https://simplemindmap.com/ |
| D:    | `💿`   | Voice Notes     | https://voice.google.com/u/0/messages?itemId=t.%2B13187283242 |
| E:    | `💿`   | Keep Notes      | https://keep.google.com/ |
| F:    | `💿`   | Outlook Notes   | https://outlook.live.com/mail/0/notes |
| G:    | `💿`   | Calendar        | https://calendar.google.com |
| H:    | `💿`   | Sites           | https://sites.google.com |
| I:    |  ...   | ...             |  ...    |

----------------------------------------------------------------

## Table Operations

<div center>
  <button id="btn_edit_mode">Toggle Edit Mode</button>
  <button id="btn_exp_sql">Export SQL Insert</button>
  <button id="btn_exp_html">Export HTML</button>
  <button id="btn_exp_json">Export JSON</button>
  <button id="btn_imp_html">Import HTML</button>
  <button id="btn_imp_json">Import JSON</button>
  <button id="btn_persist">Persist</button>
  <button id="btn_recover">Recover</button>
</div>

----------------------------------------------------------------

## Record Operations

| Parameter  | Value |
|------------|----------------------|
| drive_from | <input value="I:" /> |
| drive_to   | <input value="Z:" /> |

----------------------------------------------------------------

<div center>
  <button id="btn_add_records">Add</button>
  <button id="btn_remove_records">Remove</button>
  <button id="btn_clear_records">Clear</button>
</div>

----------------------------------------------------------------

## Current Drive Assignments

- [`A:`] ~ `💿` Project Notes
- [`B:`] ~ `💿` Idea Flip
- [`C:`] ~ `💿` Simple Mind Map
- [`D:`] ~ `💿` Voice Notes
- [`E:`] ~ `💿` Keep Notes
- [`F:`] ~ `💿` Outlook Notes
- [`G:`] ~ `💿` Calendar
- [`H:`] ~ `💿` Sites

----------------------------------------------------------------

> `🧝` The __Drive Card Table__ is used by
> the [Grid Gadget][owl-grid] from
> the [Owl Host][owl-host].

----------------------------------------------------------------

# `👀` Example 1

## `⛃` Create Card Table

----------------------------------------------------------------

```sql

CREATE TABLE IF NOT EXISTS cards( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    drive TEXT NOT NULL UNIQUE ,
    symbol TEXT NOT NULL  ,
    label TEXT NOT NULL   ,
    address TEXT NOT NULL
);

```

----------------------------------------------------------------

> [`🧑‍🎓` Practice Online][sql-practice]

----------------------------------------------------------------

# `👀` Example 2

## `⛃` Insert Card Records

----------------------------------------------------------------

```sql

INSERT INTO cards( drive, symbol, label, address )
VALUES ( 'A:', '?', '?', '?' ) ,
VALUES ( 'B:', '?', '?', '?' ) ,
VALUES ( 'C:', '...', '...', '...' ) ;

```

----------------------------------------------------------------

> [`🧑‍🎓` Practice Online][sql-practice]

----------------------------------------------------------------

# `👀` Example 3

## `⛃` Create User Table

----------------------------------------------------------------

```sql

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    age INTEGER CHECK(age >= 18),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

```

----------------------------------------------------------------

> [`🧑‍🎓` Practice Online][sql-practice]

----------------------------------------------------------------

# `🧰 ` Toolkit

----------------------------------------------------------------

> [`☰` SQLite Menu][sql-menu-omega]
> [`🌐` SQLite Online][sql-practice]
> [`📘` SQLite Notebook][sql-notebook]
> [`👀` SQLite Examples][sql-examples]

----------------------------------------------------------------

<script>
; doc = ( document )
; doc . title = ( "Drive Index Example" )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

<script>
function bummer( e ) {
    console.error ( e );
    window .alert ( e );
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

<script>

function table_choose( index=0 ) {
    const q = "TABLE";
    const m = Array.from( doc.querySelectorAll( q ) );
    const te = m[ parseInt( index ) ];
    if ( te ) { return ( te ); }
    throw new Error(
        `Invalid Table Index : "${index}"`
    );
}

</script>
<script>

function table_toggle_mode( index=0 ) {
    try {
        const te = table_choose( index );
        const en = (! te.edit_mode );
        table_edit_mode( index, en );
    } catch ( e ) {
        bummer( e );
    }
}

</script>
<script>

function table_edit_mode( index, en=true ) {
    try {
        const te = table_choose( index );
        te . edit_mode = ( en );
        const be = te.tBodies[ 0 ];
        const q = "TD";
        const m = Array.from( doc.querySelectorAll( q ) );
        let err_count = 0;
        m . forEach(
            ( ce ) => {
                try {
                    edit_mode( ce, en );
                } catch ( e ) {
                    console.error( e );
                    err_count += 1;
                }
            }
        );
        if ( err_count > 0 ) {
            const s = ( `Error Count : ${err_count}` );
            throw new Error( s );
        }
    } catch ( e ) {
        bummer( e );
    }
}
</script>
<script>

function edit_mode( ge, en=true ) {
    if ( en ) {
        ge.setAttribute( _CE, "true" );
    } else {
        ge.removeAttribute( _CE );
    }
}

;
; _CE = "contenteditable"
;

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

<script>

table_edit_mode( 0 );

</script>
<script>

; ( btn_edit_mode )
. onclick = function( event ) {
    table_toggle_mode( 0 );
};

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

<script>

function table_read( index ) {
    function read_cell( ce ) {
        const s = ( ce.textContent || "" ).trim();
        return ( s || "?" );
    }
    function read_row( re ) {
        const m = Array.from( re.cells );
        return ( m ).map( read_cell );
    }
    function read_rows( be ) {
        const m = Array.from( be.rows );
        return ( m ).map( read_row );
    }
    function read_schema( he ) {
        return read_row( he.rows[ 0 ] );
    }
    let table_name = ( "practice" );
    let schema     = [];
    let records    = [];
    try {
        const te = table_choose( index );
        table_name  = ( te.title || table_name );
        schema  = read_schema( te.tHead );
        records = read_rows( te.tBodies[ 0 ] );
    } catch ( e ) {
        bummer( e );
    }
    const results = { table_name, schema, records };
    console.debug( { "[ Results ]" : results } );
    return ( results );
}

</script>

<script>
function table_write( index, records ) {
    try {
        throw new Error( "INCOMPLETE!" );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<script>
function table_sql_insert( records, schema, table_name ) {
    try {
        throw new Error( "INCOMPLETE!" );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

