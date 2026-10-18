<head> <link rel="icon" href="favicon.ico" /> </head>

<style> @import url("./../owl.css"); </style>

<style>
td input {
    width : 90%;
}
</style>

<style>
fieldset {
    border : 1px dotted gold;
    border-radius : 3ch;
    padding : 3ch;
}
</style>

<style>
legend {
    display : inline-block;
    border-radius : 3ch;
    padding : 0.25ch 1.25ch;
    background : #EE95;
    color : black;
}
legend[onclick] {
    cursor : pointer;
    user-select : none;
}
legend[onclick]:hover {
    box-shadow : 0px 0px 16px gold;
    background : black;
    color : mintcream;
}
legend h3 {
    margin  : 0;
    padding : 0;
    border  : none;
    color   : inherit;
    background : transparent;
}
</style>

<style>
[clickable] {
    display : inline-block;
    border-radius : 3ch;
    padding : 0.25ch 1.25ch;
    background : #EE86;
    color : mintcream;;
	border : none;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[owl-grid]:   <http://dave-owl/gadgets/grid//tools-grid.html>
[owl-host]:   <http://dave-owl/dave-owl.html>
[tower-host]: <http://dave-tower/>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[pt-v1p1]:
<http://dave-tower/ramdisk/toolkit/project-tools-v1p1.html>
"Project Tools Version 1.1 (in Progress)"

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
| Y:    | `💿`   | Short URLs      | https://tiny.cc/tiny/manage |
| Z:    | `💿`   | Emojis          | https://emojigraph.org/copy-keyboard/ |

----------------------------------------------------------------

## Table Operations

<div center>
  <button clickable id="btn_edit_mode">Toggle Edit Mode</button>
</div>

<div center>
  <button clickable id="btn_exp_sql">Export SQL Insert</button>
  <button clickable id="btn_exp_html">Export HTML</button>
  <button clickable id="btn_exp_json">Export JSON</button>
  <button clickable id="btn_imp_html">Import HTML</button>
  <button clickable id="btn_imp_json">Import JSON</button>
</div>

<div center>
  <button clickable id="btn_persist">🔏 Persist</button>
  <button clickable id="btn_recover">🔓 Recover</button>
  <button clickable id="btn_reset">♻️ Reset</button>
</div>

----------------------------------------------------------------

## Record Operations

| Parameter  | Value |
|------------|----------------------|
| drive_from | <input value="I:" /> |
| drive_to   | <input value="Z:" /> |

----------------------------------------------------------------

<div center>
  <button clickable id="btn_add_records">Add</button>
  <button clickable id="btn_remove_records">Remove</button>
  <button clickable id="btn_clear_records">Clear</button>
</div>

----------------------------------------------------------------

> `🧝` The __Drive Card Table__ is used by
> [Project Tools][owl-grid] from
> the [Owl LAN Host][owl-host].

----------------------------------------------------------------

> `🧝` Version 1.1 of [Project Tools][pt-v1p1] is in Progress
> on the [Tower LAN Host][tower-host].

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
- [`Y:`] ~ `💿` Short URLs ~ ( LOCKED )
- [`Z:`] ~ `💿` Emojis ~ ( LOCKED )

----------------------------------------------------------------

<fieldset>
<legend onclick="do_toggle_section(event)"> <h3> Tables </h3> </legend>
<section id="table_section"></section>
</fieldset>

----------------------------------------------------------------

<fieldset>
<legend onclick="do_toggle_section(event)"> <h3> Lists </h3> </legend>
<section id="list_section"></section>
</fieldset>

----------------------------------------------------------------

<fieldset>
<legend onclick="do_toggle_section(event)"> <h3> Drop Lists </h3> </legend>
<section id="droplist_section"></section>
</fieldset>

----------------------------------------------------------------

<fieldset>
<legend onclick="do_toggle_section(event)"> <h3> Editors </h3> </legend>
<section id="editor_section"></section>
</fieldset>

----------------------------------------------------------------

<fieldset>
<legend onclick="do_toggle_section(event)"> <h3> Viewers </h3> </legend>
<section id="viewer_section"></section>
</fieldset>

----------------------------------------------------------------

<fieldset>
<legend onclick="do_toggle_section(event)"> <h3> Articles </h3> </legend>
<section id="article_section"></section>
</fieldset>

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
; iwm = Object.keys( window ).sort()
</script>

<script>
; doc = ( document )
; doc . title = ( "Drive Index Example" )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

<script src="https://nyteowldave.github.io/owl/owl.js"></script>
<script src="https://nyteowldave.github.io/owl/links-table.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

<script>
function main( event ) {
    try {
        table_edit_mode( 0 );
        init_buttons();
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<script>
addEventListener( "load", main );
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

function drive_index( s ) {
    s = str( s ).toUpperCase().replace( ":", "" );
    if (! s ) { return -1; }
    let i = ( s.charCodeAt( 0 ) - 65 );
    if ( i <  0 ) { return -1; }
    if ( i > 25 ) { return -1; }
    return ( i );
}

function drive_letter( i=0 ) {
    i = parseInt( i );
    if ( isFinite( i ) ) {
        if ( i <  0 ) { return "?"; }
        if ( i > 25 ) { return "?"; }
        return String.fromCharCode( 65 + i );
    }
    return "?";
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

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

<script>
function table_write( index, records ) {
    try {
        throw new Error( "INCOMPLETE!" );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

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

<script>

function do_incomplete( event ) {
    throw new Error( "INCOMPLETE!" );
}

function do_edit_mode( event ) {
    try {
        table_toggle_mode( 0 );
    } catch ( e ) {
        bummer( e );
    }
};


function do_exp_sql( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_exp_html( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_exp_json( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_imp_html( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_imp_json( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_persist( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_recover( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_reset( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_add_records( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_remove_records( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_clear_records( event ) {
    try {
        do_incomplete( event );
    } catch ( e ) {
        bummer( e );
    }
};

function do_toggle_section( event ) {
    try {
        let sender = event.target;
		if ( sender.nodeName === "H3" ) {
			sender = sender . parentElement;
		}
		if ( sender.nodeName === "LEGEND" ) {
			sender = sender . parentElement;
		}
		const section = sender.querySelector( "SECTION" );
		if (! section ) {
			throw new Error( "Missing SECTION element" );
		}
		const cl = section.classList;
		if ( cl . contains( "hide" ) ) {
			cl . remove( "hide" );
			console.debug( "Section VISIBLE", section.id );
		} else {
			cl . add( "hide" );
			console.debug( "Section HIDDEN", section.id );
		}
    } catch ( e ) {
        bummer( e );
    }
}

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

<script>

function init_buttons() {

    btn_edit_mode  . title = "Toggle Table Edit Mode";
    btn_exp_sql    . title = "Export Table as SQL INSERT";
    btn_exp_html   . title = "Export Table as HTML";
    btn_exp_json   . title = "Export Table as JSON";
    btn_imp_html   . title = "Import Table from HTML";
    btn_imp_json   . title = "Import Table from JSON";
    btn_persist    . title = "Persist Table to Store";
    btn_recover    . title = "Recover Table from Store";
    btn_reset      . title = "Remove Table from Store";

    btn_add_records    . title = "Add Empty Records"
    btn_remove_records . title = "Remove Records"
    btn_clear_records  . title = "Make Records Empty"

    btn_edit_mode . onclick = do_edit_mode;
    btn_exp_sql   . onclick = do_exp_sql;
    btn_exp_html  . onclick = do_exp_html;
    btn_exp_json  . onclick = do_exp_json;
    btn_imp_html  . onclick = do_imp_html;
    btn_imp_json  . onclick = do_imp_json;
    btn_persist   . onclick = do_persist;
    btn_recover   . onclick = do_recover;
    btn_reset     . onclick = do_reset;

    btn_add_records    . onclick = do_add_records;
    btn_remove_records . onclick = do_remove_records;
    btn_clear_records  . onclick = do_clear_records;
}

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

