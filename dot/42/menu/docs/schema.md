<meta charset="utf-8">

<style>
@import url("http://dave-omega/public/style/wbrd/lemon.css");
</style>

<style>
pre, code, var, output {
    font : unset !important;
}
<style>
[contenteditable] ,
pre, code, var, output {
    font-family : "Nono Sans Mono", monospace !important;
}
</style>
<style>
[contenteditable] {
    outline : none;
    padding-right : 1.42ch;
    padding-left  : 1.42ch;  
    border : none;
    border-radius : 4.2ch;
    background : rgba( 0, 0, 84, 0.321 );
    box-shadow : 2px 2px 13px rgb( 64, 64, 64 );
}
[contenteditable]:focus {
    background : rgba( 122, 182, 255, 0.789 );
    box-shadow : 2px 2px 22px rgb( 21, 21, 21 );
}
[contenteditable]:hover {
    box-shadow : 2px 2px 22px rgb( 21, 21, 21 );
}
.dude {
    padding : 1.42ch;
    border-radius : 1ch ! important;
}
}
</style>
<style>
fieldset {
    margin-top : 2ch;
}
fieldset legend { 
    background : rgba( 0, 0, 84, 0.321 );
}
</style>
<style>
fieldset legend {  
    display       : inline-block;
    font-size     : 26pt;
    padding-right : 1.42ch;
    padding-left  : 1.42ch;  
    border : none;
    border-radius : 4.2ch;
    box-shadow : 2px 2px 13px rgb( 64, 64, 64 );
}
fieldset {  
    border-radius : 1.42ch;
}
</style>

<article>

<h1 contenteditable>Schema Definitions</h1>

<h2 contenteditable>Snagger Dot Menus</h2>

<fieldset>
<legend>Schema: Dot Menu (Overall)</legend>
<pre contenteditable class="dude">
{
    menuDots    : [] ,
    menuCorners : [] ,
    tikey       : ""
}
</pre>
</fieldset>

<fieldset>
<legend>Schema: <code>menuDots</code></legend>
<pre contenteditable class="dude">
[ {}, ... ]
</pre>
</fieldset>

<fieldset>
<legend>Schema: <code>menuCorners</code></legend>
<pre contenteditable class="dude">
[ [ {}, ... ], ...  ]
</pre>
</fieldset>

<fieldset>
<legend><code>menuDots</code> Entry Schema</legend>
<pre contenteditable class="dude">
{
  url   : "" ,
  decal : "" ,
  title : "" ,
  tikey : ""
}
</pre>
</fieldset>

<fieldset>
<legend><code>menuCorners</code> Entry Schema</legend>
<pre contenteditable class="dude">
{ 
    x : # ,
    y : # ,
    computed : {
       x : "#px" ,
       y : "#px"
    }
}
</pre>
<ul>
<li># => Integer </li>
</ul>  
</fieldset>

<h3>Comments</h3>

<pre contenteditable class="dude">
<code>menuDot</code> entry arrays determined grouping.

Any array that has a single entry
appears as a lone dot visually.   
  
Internally, it's still a menu tho.
</pre>

<pre contenteditable class="dude">
menuCorner entries don't bother with
width or height, since those are
determined dynamically by app state.
</pre>

</article>

<article>

<h1 contenteditable>Activities</h1>

<div>2025-AUG-02</div>

<h2 contenteditable>Snagger Dot Menus</h2>

<h3>I Cached the MRU Menu as</h3>

<p>
Bummer! This is cached in Chrome, which is DOA on
the Omega and the Probook.
</p>

<pre contenteditable class="dude">
console.log( 
  sip.output = load( 
    "Dot Menus for 2025-AUG-02" 
  ) 
);
</pre>

<h3>I also Downloaded to the Omega as:</h3>

<pre contenteditable class="dude">
snagger-menu-2024-AUG-02.json
</pre>

<h3>I Cached another Menu (extracted) as</h3>

<p>
Bummer! This is cached in Chrome, which is DOA on
the Omega and the Probook.
</p>

<pre contenteditable class="dude">
console.log(
  sip.output = load(
    "Dot Menus for 2025-AUG-02-B"
  )
);
</pre>

</article>

<script>
document.title = "Snaggy Schema Definitions"
document["📜"] = {};
document["📜"]["🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳"] = "2025-AUG-09";
document["📜"]["🔑"] = "d93318ae-fcda-4cb1-b8d7-d314a4796952";
</script>

