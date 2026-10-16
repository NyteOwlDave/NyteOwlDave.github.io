<!-- [[ sqlite-examples.md ]] -->

<head> <link rel="icon" href="favicon.ico" /> </head>

<style> @import url("./../owl.css"); </style>


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

[sql-practice]:   <https://sqliteonline.com/>
[sql-menu-omega]: <http://dave-omega/app/sqlite/sqlite-menu.html>
[sql-examples]:   <http://dave-omega/app/morpheus/owl/notes/sqlite-examples.html>
[sql-notebook]:   <https://notebook.google.com/notebook/fab55194-c7dc-4f45-b48c-257af9aa564a>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

[me-omega]:  <http://dave-omega/app/morpheus/owl/notes/sqlite-examples.html> "Omega Edition"
[owl-notes]: <./../owl-notes.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

# `⛃` SQLite Examples

## `🦉` Owl System for Morpheus

----------------------------------------------------------------

> [`💻` Omega][me-omega]
> [`📘` Owl Notes][owl-notes]

> [`🗃️` File System](./)

----------------------------------------------------------------

# `👀` Example 1

## `⛃` Insert Transaction

----------------------------------------------------------------

```sql
BEGIN TRANSACTION;
INSERT INTO users (name, age, email) VALUES ('Alice', 30, 'alice@example.com');
INSERT INTO users (name, age, email) VALUES ('Bob', 25, 'bob@example.com');
INSERT INTO users (name, age, email) VALUES ('Charlie', 35, 'charlie@example.com');
COMMIT;
```

----------------------------------------------------------------

> `🧝` Example 1 wraps several `INSERT` statements within a single
> `TRANSACTION` block.

----------------------------------------------------------------

> [`🧑‍🎓` Practice Online][sql-practice]

----------------------------------------------------------------

# `👀` Example 2

## `⛃` Insert Multiple Records

----------------------------------------------------------------

```sql

INSERT INTO users (name, age)
VALUES
    ( 'Alice'   , 30 ),
    ( 'Bob'     , 25 ),
    ( 'Charlie' , 44 );

```

----------------------------------------------------------------

> `🧝` Example 2 uses a single `INSERT` statement to add multiple
> records to the `user` table.

----------------------------------------------------------------

> [`🧑‍🎓` Practice Online][sql-practice]

----------------------------------------------------------------

# `👀` Example 3

## `⛃` Create Table if Missing

----------------------------------------------------------------

```sql

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER

```

----------------------------------------------------------------

> `🧝` Example 3 creates a `user` table, if one doesn't exist.

----------------------------------------------------------------

> [`🧑‍🎓` Practice Online][sql-practice]

----------------------------------------------------------------

# `🧰 ` Toolkit

----------------------------------------------------------------

> [`☰` SQLite Menu][sql-menu-omega]
> [`🌐` SQLite Online][sql-practice]
> [`📘` SQLite Notebook][sql-notebook]

----------------------------------------------------------------

<script>
; doc = ( document )
; doc . title = ( "SQLite Examples" )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->


