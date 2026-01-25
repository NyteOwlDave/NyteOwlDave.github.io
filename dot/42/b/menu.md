<!--
[Yesterday]: <./2025-FEB-26.html>
[Today]:     <./2025-FEB-27.html>
[Tomorrow]:  <./2025-FEB-28.html>
[Index]:     <./@.html>
-->

<p style="display: none">
<style> [hidden] { display: none; } </style>
<link rel="stylesheet" href="http://localhost/42/style/josh.css">
<script src="http://localhost/42/peach/js/try-catch.js"></script>
<script src="http://localhost/42/peach/js/josh.js"></script>
</p>

<header>
<a href="./">Workspace</a>
<a href="http://localhost/42/rockets/whiteboards.rocket.html">Whiteboards</a>
<a href="http://localhost/42/rockets/notebooks.rocket.html">Notebooks</a>
<a href="http://localhost/42/rockets/">System 42</a>
<a href="./rockets/">Rockets</a>
<a href="./help/">Help</a>
</header>

# Main Menu

This is a generic menu for any Workspace. Just drop it in and 
all should be fine.

---

<!--
- [Index][Index] ~ [Yesterday][Yesterday] ~ [Tomorrow][Tomorrow]
-->

<p hidden>
<style> body { margin-bottom : 33vh; } </style>
</p>

<script id=""
 host=""
 home=""
 wbkey=""
 alias="title-h1.js" 
 details="Set Page Title from first H1">
document.title = (()=>{
    const NONE = "Untitled";
    const D = document;
    const H = D.querySelector( 'h1' );
    if (! H ) return NONE;
    const T = H.innerText.trim();
    return ( T || NONE );
})();
</script>


