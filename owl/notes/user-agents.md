<style>
@import url("http://dave-tower/style/owl.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[mhs]: <https://nyteowldave.github.io/>
[mos]: <https://nyteowldave.github.io/owl/test.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[oat]: <http://dave-legacy/rtj/rt-owl-style.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[rtj-omega]:  <http://dave-omega/rtj/>
[rtj-tower]:  <http://dave-tower/rtj/>
[rtj-legacy]: <http://dave-legacy/rtj/>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me]:
<http://dave-tower/app/morpheus/owl/notes/user-agents.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

# [User Agents][me]

----------------------------------------------------------------

| Agent    | CAS Support |
|----------|-------------|
| firefox  |             |
| chrome   |             |
| chromium |             |
| brave    |             |
| edge     |             |
| avg      |             |
| opera    |             |
| operagx  |             |

----------------------------------------------------------------

# TODO

----------------------------------------------------------------

- Populate Table based on CAS Agent Names

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
; mem =( o )=> Object.keys( o || window ).sort()
</script>

<script>
; doc = ( document )
; doc . title = ( `Owl App Starter` )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="https://nyteowldave.github.io/owl/owl.js"></script>
<script src="https://nyteowldave.github.io/std/api/install.js"></script>

<!--
<script src="https://nyteowldave.github.io/owl/cas-alpha.js"></script>
<script src="https://nyteowldave.github.io/owl/cas-v1p0.js"></script>
-->

<script src="http://dave-tower/app/morpheus/owl/cas-alpha.js"></script>
<script src="http://dave-tower/app/morpheus/owl/cas-v1p0.js"></script>
<script>
console.warn( "LAN Dependency detected!" );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function main( event ) {
    try {
        install( 'hud' );
        install( 'hud-button' );
		CAS . advise();
        say ( "Ready for Action!" );
    } catch ( e ) {
        console . error ( e );
        window  . alert ( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
addEventListener( "load", main );
</script>

