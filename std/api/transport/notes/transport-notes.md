<style>
@import url("https://nyteowldave.neocities.org/style.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[prolog-glossary]:
<https://nyteowldave.github.io/notes/prolog-glossary.html>
"Morpheus Edition"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[u-01]: <./../ricolla-v1p0.js>   "Riccola API"
[u-02]: <./../ricardo-v1p0.js>   "Ricardo API"
[u-03]: <./../transport-demo.js> "Transport Demo App"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-morpheus]:
<https://nyteowldave.github.io/std/api/transport/notes/transport-notes.html>
"Morpheus Edition"

[me-omega]:
<http://dave-omega/app/morpheus/std/api/transport/notes/transport-notes.html>
"Omega Edition (Private)"

----------------------------------------------------------------

# Transport Notes

> [Morpheus][me-morpheus]
> [Omega][me-omega]

> [Transport Demo](./../transport-demo.html)

----------------------------------------------------------------

## Purpose

The __Transport API Collection__ is dedicated to
__Data Transfer__ operations.

This includes a number of common __Media__ and __Operations__
for moving __Content__ from one location to another.

__Content__ may be __Applications__ or __Data__.

----------------------------------------------------------------

## Categories

- File System I/O
- Hypertext I/O
- E-Mail

----------------------------------------------------------------

> __NOTE__ : Operation names may not match Method Names

----------------------------------------------------------------

### File System I/O

| Operation | Description |
|-----------|----------------------------|
| Save      | Write Data to File System  |
| Load      | Read Data from File System |
| Open      | Choose File to Load        |

----------------------------------------------------------------

### Hypertext I/O

| Operation | Description |
|-----------|------------------------------------------|
| Acquire   | Load Script or Style from Remote Server  |
| Request   | Load Data from Remote Server             |
| Download  | Load Remote Data and Save to File System |
| Upload    | Post Data to Remote Server               |

----------------------------------------------------------------

### E-Mail

| Operation | Description |
|-----------|--------------------------|
| Send      | Send Mail to Recipient   |
| Compose   | Compose Mail to Send     |
| Review    | Open Mail Account In-Box |

----------------------------------------------------------------

# Transport API Modules

----------------------------------------------------------------

## Implemented

| Filename        | Purpose | Category |
|-----------------|---------|-----------------|
| riccola-v1p0.js | Save    | File System I/O |
| ricardo-v1p0.js | Open    | File System I/O |

----------------------------------------------------------------

## Pending

| Filename   | Purpose | Category |
|------------|---------|---------------|
| acquire.js | Acquire | Hypertext I/O |
| request.js | Request | Hypertext I/O |
| email.js   | All     | E-Mail        |

----------------------------------------------------------------

# Transport API Demo

----------------------------------------------------------------

## Purpose

The __Transport Demo__ was designed as a test area for the
__API Modules__.

It also serves as a central access point for __Notes__ and
__Downloads__.

----------------------------------------------------------------

## Features

There are three primary __Accessor__ objects:

| Accessor  | Purpose               | Type |
|-----------|-----------------------|----------|
| PrologOps | Global Prolog Methods | Object   |
| PeachOps  | Browser Store Methods | Object   |
| zach      | Text Editor Methods   | Function |

----------------------------------------------------------------

> All three are located within the `transport-demo.js` module.

> General __Tranport Operations__ are located within the various
> individual __API Modules__.

----------------------------------------------------------------

## Usage

When the application first loads, a single __Editor__ is
created. The __ID__ for this editor is `sip`.

There's also a standard `HEADER` for messages and `FOOTER`
for single line command input.

New __Editors__ can be created in a variety of ways. The most
common is to call the `zach()` method. This method also doubles
as an __Accessor__. Many of the member methods also create new
__Editors__ as needed.

New __Editors__ are assigned random __ID__ values using the
`nid()`  global method.

One of the more useful methods is `zach.hints()`. This method
creates a new __Editor__ and populates it with either a list
of strings from an __Array__ or with a list of
__Object Members__.

If the argument is neither an __Object__ or __Array__, it's
coerced to a __String Primitive__ for editing.

----------------------------------------------------------------

## Zach Accessor Method

----------------------------------------------------------------

```
function zach( source, props ) { ... }
```

----------------------------------------------------------------

### Notes

- Source May Be an HTML Element, Array, Object, or Primitive
- Props is an Object (Property Map)

----------------------------------------------------------------

## Zach Methods

----------------------------------------------------------------

| Method  | Action |
|---------|------------------------------------|
| editor  | Obtain Editor Ref by Index         |
| hints   | Show Hints in New Editor           |
| open    | Open File in New Editing           |
| prep    | Prepare Source for Editing         |
| remove  | Remove Editor by Index             |
| request | Request Remote Content for Editing |
| save    | Save Editor Content by Editor Ref  |
| zoom    | Zoom Editor by Index               |

----------------------------------------------------------------

## PeachOps Methods

----------------------------------------------------------------

| Method       | Action |
|--------------|------------------------------|
| edit.raw     | Edit Store as JSON           |
| edit.members | Edit Store Entry Key List    |
| key          | Read Key by Index            |
| resolve      | Resolve Key Index or String  |
| members      | Obtain Entry Key List        |
| read         | Read Entry by Key or Index   |
| remove       | Remove Entry by Key or Index |
| write        | Write Entry by Key or Index  |

----------------------------------------------------------------

### Important

The default store is `localStorage` if available. Otherwise,
the default is `sessionStorage`. 

This default may be overridden with method arguments.

----------------------------------------------------------------

## Prolog Methods

----------------------------------------------------------------

| Method  | Action                              | Notes |
|---------|-------------------------------------|-------|
| str     | Coerce Arg to String                | 4, 5  |
| arr     | Coerce Arg to Array                 | 5     |
| unq     | Coerce Arg to Set                   | 5     |
| elx     | Create HTML Element                 |       |
| gad     | Verify Arg is HTML Element          |       |
| gid     | Get HTML Element by ID              |       |
| god     | Resolve HTML Element Reference      | 6     |
| jst     | Compose Object as JSON Text         | 7     |
| jsx     | Compose Object as JSON Text         | 8     |
| jso     | Parse JSON Text to Object           |       |
| one     | Select Single HTML Element          |       |
| all     | Select All Matching HTML ELements   |       |
| jat     | Show Table in Console               |       |
| jet     | Show Error in Console               |       |
| jit     | Show Info Message in Console        |       |
| jot     | Show Log Message in Console         |       |
| jut     | Show Warning Message in Console     |       |
| jyt     | Show Debug Message in Console       |       |
| mem     | Obtain List of Member Names         |   1   |
| dir     | Obtain List of Member Names         |   2   |
| tmp     | Obtain List of Member Names         |   3   |

----------------------------------------------------------------

### Notes

- (1) Default arg is `window`
- (2) Default arg is `localStorage`
- (3) Default arg is `sessionStorage`
- (4) Outer Whitespace is Trimmed
- (5) Default is EMPTY
- (6) Expects Element Ref or Element ID
- (7) Verbose Format (Prettified)
- (8) Terse Format

----------------------------------------------------------------

> SEE ALSO ~ [Prolog Glossary][prolog-glossary]

----------------------------------------------------------------

## Global Methods

----------------------------------------------------------------

| Method      | Action                          | Location |
|-------------|---------------------------------|----------|
| perform     | Execute `INPUT` Value as JS     | 1        |
| seeker      | Obtain Filtered List of Members | 2        |
| droplist    | Create `SELECT` Element         | 2        |
| blurt       | Show Info Message               | 2        |
| dangit      | Show Warning Message            | 2        |
| bummer      | Show Error Message              | 2        |
| message     | Append Message Log Entry        | 2        |
| crashed     | Show Error in Popup Dialog      | 2        |
| claim       | Signal Event as Handled         | 2        |
| nid         | Generate Random ID              | 2        |
| now         | Read Epoch Clock                | 2        |
| rnd         | Generate Random Real Number     | 2        |
| irnd        | Generate Random Integer         | 2        |
| write_props | Write Editor Properties         | 2        |
| read_value  | Read HTML Element Content       | 2        |
| get_section | Obtain `SECTION` Reference      | 2        |
| init_demo   | Intialize Demo App              | 2        |

----------------------------------------------------------------

### Locations

- (1) transport-demo.html
- (2) transport-demo.js

----------------------------------------------------------------

### Notes

- The `get_section()` method may create missing element(s)
- The `droplist()` method populates element from string list
- The `message()` method has a `log` property
- The `blurt`, `dangit`, and `bummer` methods use `HEADER`
- The `read_value()` method determines property from node name
- Both `rnd()` and `irnd()` accept a `scale` argument

----------------------------------------------------------------

## Global Properties

----------------------------------------------------------------

| Alias | Description |
|-------|------------------------------------|
| iwm   |  Names of Initial `window` Members |

----------------------------------------------------------------

## Global Aliases

----------------------------------------------------------------

| Alias | Original Object |
|-------|-----------------|
| con   |  console        |
| doc   |  document       |
| jsn   |  JSON           |
| ssg   |  sessionStorage |
| stg   |  localStorage   |

----------------------------------------------------------------

## Source Files

- [Riccola API][u-01] ~ Save File
- [Ricardo API][u-02] ~ Open File
- [Transport Demo App][u-03] ~ App Logic

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
</script>

<script>
; doc = document
; doc . title = ( `Transport Notes` )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


