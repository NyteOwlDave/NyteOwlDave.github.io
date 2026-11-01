<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="icon" href="./favicon.ico" />

<style>
<!--
@import url("http://dave-omega/style/owl.css");
@import url("https://nyteowldave.github.io/owl/owl.css");
-->
@import url("http://dave-omega/style/owl.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
.action-section { text-align : center; }
</style>

<style>
th { text-align : left; }
</style>

<style>
td input {
    width : inherit;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-omega]:    <http://dave-omega/app/morpheus/owl/notes/owl-basics-notes.html> "Omega Edition"
[me-morpheus]: <https://nyteowldave.github.io/owl/notes/owl-basics-notes.html> "Morpheus Edition"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<div center>
  <img src="./favicon.ico" />
</div>

----------------------------------------------------------------

<h3 id="_T_"> Owl Basics Notes </h3>

----------------------------------------------------------------

# Symbol Table

----------------------------------------------------------------

| Symbol       | Type      | Description |
|--------------|-----------|-------------|
| LF$          | <input /> | <input />   |
| FF$          | <input /> | <input />   |
| RT$          | <input /> | <input />   |
| ...          | <input /> | <input />   |

----------------------------------------------------------------

<section class="action-section" table="Symbol Table">
  <strong> ( menu pending ) </strong>
</section>

----------------------------------------------------------------

# OwlBasics Members

----------------------------------------------------------------

| Member       | Description |
|--------------|-------------|
| .str_opt     | <input />   |
| .pass        | <input />   |
| .store       | <input />   |
| .tips        | <input />   |
| .report      | <input />   |
| .loaded      | <input />   |
| .reminder    | <input />   |
| .incomplete  | <input />   |
| .initialized | <input />   |
| .scoobie     | <input />   |
| .expected    | <input />   |
| .bummer      | <input />   |
| ...          | <input />   |

----------------------------------------------------------------

<section class="action-section" table="OwlBasics Members">
  <strong> ( menu pending ) </strong>
</section>

----------------------------------------------------------------

# Finish Me

- Table Reader Component
- Persistent State
- Add Link to Ruminations ( Captain's Log )

----------------------------------------------------------------

# Related Components

- Owl Basics ( common methods like `tips` and `bummer` )
- Owl Gems ( generic Gem Manager )
- Owl Clipper ( clipboard )

----------------------------------------------------------------

# Related Notes

- Notes Menu
    - API Component Names
    - CORS Notes
    - Drive Index Example
    - Drive Index Omega Edition
    - Jarvis Sandbox Notes
    - Mount Samba Share
    - Pending Styles
    - Ruminations
    - Snag Editor Notes
    - SQLite Examples
    - SQLite Lex-An
    - User Agents

----------------------------------------------------------------

# Recent Activities

## Web Pages

- Owl Login
- Owl Help
- Owl Folders

## Web Components

- App Features
- Cool Address Bar
- Editable List
- App Boilerplate
- Script Core Imports ( outdated )

----------------------------------------------------------------

# Earlier Activities

- Owl Bookmark Editor
- Owl File Transfer
- Owl-Notes
- Owl System
- Jarvis Sandbox
- Debbie Sandbox ( Code Pen )

----------------------------------------------------------------

# Comments

- None of the Components is fully debugged
- The Apps Contain __LAN__ Refs to These Components
- __LAN__ References are for Testing
- `CORS` makes this an Issue for Access via Morpheus
- Latest Gems (Downloads) contains `owl-basics-gems.md`

----------------------------------------------------------------

# Open Files

## Markdown

- owl-basics-notes.md
- owl-basics-gems.md
- owl-folders.md

## JavaScript

- owl-basics.js
- owl-gems.js
- owl-clipper.js

----------------------------------------------------------------

# Editions

> [Omega][me-omega]
> [Morpheus][me-morpheus]

> [Notes Menu](./notes-menu.html)

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
; mem =( o )=> Object.keys( o || window ).sort()
</script>

<script>
; doc = ( document )
; doc . title = ( _T_.textContent ).trim()
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<!-- |~~~~~~~~~~~~~~~~ [[ Owl 🦉 System ]] ~~~~~~~~~~~~~~~~| -->
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<!-- [ owl-script-core-imports.md ] -->
<script src="https://nyteowldave.github.io/owl/owl.js"></script>
<script src="https://nyteowldave.github.io/owl/visit-ultra.js"></script>
<script src="https://nyteowldave.github.io/std/api/install.js"></script>

<!--
<script src="https://nyteowldave.github.io/owl/owl-basics.js"></script>
-->


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function main( event ) {
    try {
        install( 'hud' );
        install( 'hud-button' );
        init_basics();
        init_gems();
    } catch ( e ) {
        console . error ( e );
        window  . alert ( e );
    }
}
</script>

<script>
addEventListener( "load", main );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="http://dave-omega/app/morpheus/owl/owl-basics.js"></script>
<script src="http://dave-omega/app/morpheus/owl/owl-gems.js"></script>
<script src="http://dave-omega/app/morpheus/owl/owl-clipper.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
