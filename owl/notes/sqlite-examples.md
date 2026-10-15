<!-- [[ sqlite-examples.md ]] -->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->

# SQLite Examples

----------------------------------------------------------------

# Example 1

## Insert Multiple Records

----------------------------------------------------------------

```sql
BEGIN TRANSACTION;
INSERT INTO users (name, age, email) VALUES ('Alice', 30, 'alice@example.com');
INSERT INTO users (name, age, email) VALUES ('Bob', 25, 'bob@example.com');
INSERT INTO users (name, age, email) VALUES ('Charlie', 35, 'charlie@example.com');
COMMIT;
```

----------------------------------------------------------------

> Example 1 wraps several `INSERT` statements within a single
> `TRANSACTION` block.

----------------------------------------------------------------

# Example 2

## Insert Multiple Records

----------------------------------------------------------------

```sql

INSERT INTO users (name, age)
VALUES
    ( 'Alice'   , 30 ),
    ( 'Bob'     , 25 ),
    ( 'Charlie' , 44 );

```

----------------------------------------------------------------

> Example 2 uses a single `INSERT` statement to add multiple
> records to the `user` table.

----------------------------------------------------------------

# Example 3

## Create Table if Missing

----------------------------------------------------------------

```sql

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER

```

----------------------------------------------------------------

----------------------------------------------------------------

# Toolkit

----------------------------------------------------------------

> [SQLite Online]()

----------------------------------------------------------------

<script>
; doc = ( document )
; doc . title = ( "SQLite Examples" )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~! -->


