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

# Owl Basics Notes

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

# Editions

> [Omega][me-omega]
> [Morpheus][me-morpheus]

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
; mem =( o )=> Object.keys( o || window ).sort()
</script>

<script>
; doc = ( document )
; doc . title = ( `Owl Style Example` )
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

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
