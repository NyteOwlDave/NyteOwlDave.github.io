
<style>
@import url("http://dave-legacy/~/style/sio/siox.css");
</style>

<fieldset>
 <legend> Zed Actions </legend>
 <button title="Add" onclick="dot(this)">➕</button>
 <button title="Remove" onclick="dot(this)">➖</button>
 <button title="Run" onclick="dot(this)">➡️</button>
 <button title="Help" onclick="dot(this)">ℹ️</button>
 <button title="ID" onclick="dot(this)">🆔</button>
 <button title="Rename" onclick="dot(this)">🪪</button>
 <button title="Zoom" onclick="dot(this)">💠</button>
 <button title="Save" onclick="dot(this)">💾</button>
 <button title="Recover" onclick="dot(this)">🔓</button>
 <button title="Persist" onclick="dot(this)">🔏</button>
</fieldset>

<fieldset>
 <legend> Zed Actions </legend>
 <article>

<blockquote>
<p>Comments</p>
</blockquote>
<p>This code was written almost entirely by automation.</p>
<p>There's a Browser Store script for this purpose. The Store Key
for this script is <code>action-button-maker.js</code>.</p>
<p>It's designed to be interpreted by the <code>Q Editor</code> app.</p>
<p>A copy has been downloaded for archival purposes. A link is
provided for access to this scriptlet.</p>
<ul>
<li><a href="http://dave-legacy/~/scriptlets/codegen/action-button-api.html" title="Action Button Maker Scriptlet API">Action Button Maker</a></li>
</ul>

 </article>
</fieldset>

<script name="zed-actions.js" group="Zed Actions">

actionDecals = [
  "➕" ,  "➖"  ,  "➡️" ,  "ℹ️" ,
  "🆔" ,  "🪪" ,  "💠" ,  "💾" ,
  "🔓" ,  "🔏"
];

actionScripts = [
  "on_add()"
, "on_remove()"
, "on_run()"
, "on_help()"
, "on_id()"
, "on_rename()"
, "on_zoom()"
, "on_save()"
, "on_recover()"
, "on_persist()"
]

/* Action Methods */
function on_add     () { _todo_(); }
function on_remove  () { _todo_(); }
function on_run     () { _todo_(); }
function on_help    () { _todo_(); }
function on_id      () { _todo_(); }
function on_rename  () { _todo_(); }
function on_zoom    () { _todo_(); }
function on_save    () { _todo_(); }
function on_recover () { _todo_(); }
function on_persist () { _todo_(); }

actionMap = {
  "➕"  : "on_add()"
, "➖"  : "on_remove()"
, "➡️" : "on_run()"
, "ℹ️" : "on_help()"
, "🆔" : "on_id()"
, "🪪" : "on_rename()"
, "💠" : "on_zoom()"
, "💾" : "on_save()"
, "🔓" : "on_recover()"
, "🔏" : "on_persist()"
};

function dot( button ) {
   try {
      let decal  = button.textContent.trim();
      let script = actionMap[ decal ];
      console.log( 
         window.eval( script )
      );
   } catch ( e ) {
      bummer( e );
   }
}

</script>

<script>

function _todo_() {
    alert( "TO-DO!" );
}

function bummer( e ) {
    alert( e );
}


</script>

