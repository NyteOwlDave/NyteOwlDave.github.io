<style>
<!--
@import url("http://dave-omega/style/owl.css");
@import url("https://nyteowldave.github.io/owl/owl.css");
-->
@import url("http://dave-omega/style/owl.css");
</style>

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
| .store       | <input />   |
| .tips        | <input />   |
| .report      | <input />   |
| .bummer      | <input />   |
| .scoobie     | <input />   |
| .expected    | <input />   |
| .incomplete  | <input />   |
| .initialized | <input />   |
| ...          | <input />   |

----------------------------------------------------------------

<section class="action-section" table="OwlBasics Members">
  <strong> ( menu pending ) </strong>
</section>

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
<script src="https://nyteowldave.github.io/owl/owl-basics.js"></script>
<script src="https://nyteowldave.github.io/owl/visit-ultra.js"></script>
<script src="https://nyteowldave.github.io/std/api/install.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function main( event ) {
    try {
        install( 'hud' );
        install( 'hud-button' );
        init_basics();
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

