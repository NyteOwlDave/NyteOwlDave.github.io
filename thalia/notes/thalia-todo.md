<!doctype mkd>

<style group="Every Page Theme" host="dave-legacy">
@import url("https://nyteowldave.github.io/std/style/every-page.css")
</style>

<!-- [ TEMPORARY HACKS ]] -->
<style>
pre {
    max-height : 64vh;
    overflow : scroll;
    text-align : left;
    font : 12pt monospace;
}
</style>

----------------------------------------------------------------

<header>
    Thalia's To-Do Notes
</header>

----------------------------------------------------------------

# Broken References

----------------------------------------------------------------

> Version 1.1 and 2.0 still reference CSS files located
> on Dave's Tower. This host is out of service. The
> missing links cause severely degraded load times.

----------------------------------------------------------------

# Common Themes

----------------------------------------------------------------

> I've already begun working on a fix for the CSS issue.
> There's a mini-project named __Common Themes__. This new
> project contains the essential themes for all of my never
> Web Pages. It's located in `JEFR's Notes` of the `Legacy`
> host. This document references the URL where the uploaded
> combination `CSS` file should be stored in `Morpheus`.

----------------------------------------------------------------

# Indy Datalist

----------------------------------------------------------------

> The file named `thalias-faves.html` contains links that
> should be added to the `DATALIST` for `Indy`.

----------------------------------------------------------------

> It's important to ensure that every link can be hosted
> safely within an `IFRAME` element. The reason for the
> links in the first place is to access them using the
> embedded browser.

----------------------------------------------------------------

# Operations

----------------------------------------------------------------

> A link to __Thalia's Notes__ should be added to the Google
> Site for `Operations`. This should also apply to all other
> projects that contain `PMS Notes`.

----------------------------------------------------------------

# Resources

----------------------------------------------------------------

> Whiteboard and notebook for Thalia should also contain links
> to the `Notes` folder. Perhaps links to this document.


----------------------------------------------------------------

# Odds and Ends

----------------------------------------------------------------

> I need to import the 0001-index.js file from the legacy host.

----------------------------------------------------------------

> There should also be links to Thalia's Whiteboard and the Chachi Home Site.

----------------------------------------------------------------

> These SIP Editor colors SUCK BIG TIME !!!

----------------------------------------------------------------

> Freaking spell checker is bugging me AGAIN... FIX THIS!!!

----------------------------------------------------------------

> The Store Key Algorithm is hosed. It maxes out at 42 and
> doesn't sort the keys.

----------------------------------------------------------------

> Would be nice to have a clear button for the SIP Editor.

----------------------------------------------------------------

# More Notes Files

----------------------------------------------------------------

<details>
<summary>
Thalia Notes (thalia-notes.js)
</summary>
<div center>
<pre>

notes = ( `
1) Run Button
2) Auto Persist / Recover
` );

function writeThaliaNotes() {
   c = locateStorage;
   k = "Thalia Notes (thalia-notes.js)";
   v = gid( 'sip' ).value;
   c.setItem( k, v );
}

function readThaliaNotes() {
   c = locateStorage;
   k = "Thalia Notes (thalia-notes.js)";
   v = c.getItem( k );
   if ( v === null ) {
      return writeThaliaNotes();
   }
   gid( 'sip' ).value = v;
}

function saveThaliaNotes() {
   v = gid( 'sip' ).value;
   k = "thalia-notes.js";
   rico( v, k );
}

</pre>
</div>
</details>

----------------------------------------------------------------

<details>
<summary>
Thalia's Helpers (thalia-helpers.js)
</summary>
<div center>
<pre>

RS = "\n";

arr =( o  )=> Array.from( o );
unq =( o  )=> ( new Set( o ) );

con = console;
doc = document;
stg = localStorage;
wnd = window;

elx =( nt )=> doc.createElement ( nt );
ebi =( id )=> doc.getElementById( id );
one =( qu )=> doc.querySelector( qu );
all =( qu )=> arr( doc.querySelectorAll( qu ) );

resolve = function( o ) {
    return (
        ( o instanceof HTMLElement ) 
      ? ( o )
      : ( ebi( o ) )
    )
};

run =( ed )=> window.eval( resolve( ed ).value );

readLines = function( o ) {
   o = resolve( o );
   return ( 
      ( o.value.trim() )
      . split( RS )
      . map( s => s.trim() )
      . filter( s => ( !!s ) ) 
   );
};

writeLines = function( o, list ) {
   resolve( o )
   . value = list.join( RS );
};

sortEditor = function( o ) {
   o = resolve( o || "sip" );
   let list = readLines( o );
   writeLines( o, list.sort() );
}

"OK!";

</pre>
</div>
</details>

----------------------------------------------------------------

> [Explore](./)

----------------------------------------------------------------

> ( `thalia-todo.md` )
> ~ ( `app/thalia/notes` )
> ~ ( `dave-legacy` )

----------------------------------------------------------------

# Browser Store

> ( `Legacy` ) => ( `Legacy` ) => ( `FireFox` )

----------------------------------------------------------------

<details>
<summary>
Current Store Keys (2026-APR-08)
</summary>
<div center>
<pre>

🔑 (VOLATILE-ENTRY).html
🔑 0000-test
🔑 0001-editor-states.js
🔑 0001-editor-states.json
🔑 0001-index-table.html
🔑 0001-index.js
🔑 0001-index.json
🔑 0001-most-recent.json
🔑 0001-zed-states.json
🔑 0002-editor-states-v3.js
🔑 0002-zed-states.json
🔑 A698F7622548FA93!s202dc81888b948ada79661456dd2fd71
🔑 Basenames Editor ~ memo
🔑 Basenames Editor ~ nav
🔑 Basenames Editor ~ sce
🔑 Basenames Editor ~ sop
🔑 CSS Gen ~ AppState
🔑 Calliope Decals ~ 2025-DEC-19
🔑 Calliope Decals ~ 2025-NOV-21
🔑 Calliope Decals ~ 2026-FEB-25
🔑 Cameron ~ /graphics/stereogram/app/cameron.html
🔑 Chachi Math
🔑 Chachi Server
🔑 Chachi Servers
🔑 Chachi State
🔑 Chachi Upload
🔑 Chachi ~ Server Pool
🔑 Checklist ~ 2025-DEC-24
🔑 Checklist ~ Mom's Agenda
🔑 Checklist ~ TODO
🔑 Checklist ~ Today ~ 2025-NOV-20
🔑 Checklist ~ checklist
🔑 Checklist ~ prolog
🔑 Dave's Ad Buster 1.1
🔑 Decal Picks
🔑 Design DevOps Icons
🔑 Goldie ~ Elmer TO-DO
🔑 Greystoke Script
🔑 Greystoke UI Settings
🔑 Icon Snagger ~ Icons
🔑 Icon Snagger ~ Menus
🔑 Icon Snagger ~ Script
🔑 Icon Snagger ~ Settings
🔑 Key History - 🐉 Pip API
🔑 Kim SCE State ~ Version 1.0
🔑 Known-Store-Keys.json
🔑 Kodie Notes
🔑 Local Host Names
🔑 MDN Addresses
🔑 MathJax Demo ~ Notes
🔑 My Notes
🔑 NOW!.md
🔑 PSK Editor
🔑 Q-Dozer
🔑 Realm Table ~ Realm Table
🔑 Realm Table ~ http://dave-legacy
🔑 SCE ~ SCE Starter @ Legacy
🔑 SIOX Editor ~ sce
🔑 SIOX Editor ~ sip
🔑 Shared State Flags
🔑 Shorty - Desktop Shortcut Generator
🔑 Store Details Record Notes
🔑 Sulu Navigator State ~ Version 1
🔑 Thalia Decals
🔑 Thalia Notes (thalia-notes.js)
🔑 Thalia-Notes.md
🔑 WWW-NOV-15-A.nav
🔑 [object BeforeUnloadEvent]
🔑 beezer-v2.24.1.js
🔑 bonzai-version-2.0.js
🔑 button-tray.md
🔑 captains-log.json
🔑 datalist-ops.js
🔑 dave.wellsted
🔑 daves-fave-colors.json
🔑 daves-notes.html
🔑 daves-temp-table.html
🔑 details
🔑 elmer-node-modules.list
🔑 firefox-2026-APR-08.js
🔑 firefox-2026-APR-08.nav
🔑 freud.js
🔑 g-drive-store-keys.html
🔑 hottie-001.js
🔑 hysteresis-change-log.json
🔑 jefr-database.json
🔑 jefr-mysql-client-buttons.json
🔑 jefr-php-server-notes.js
🔑 jefr-php-server-notes.md
🔑 karlita-editor-sandbox.js
🔑 kim-action-menu.js
🔑 kodie.js
🔑 komodo-editor-state.json
🔑 lauraVersion
🔑 legacy-open-files-2026-FEB-28.json
🔑 madge-project-explorer-notes.js
🔑 match-keys.js
🔑 mathjax-peach.js
🔑 midge-deux.js
🔑 min-max-sop.md
🔑 notebooks.css
🔑 now.json
🔑 null
🔑 octagram-state-ops.json
🔑 octagram.json
🔑 octogram-editor-states.json
🔑 priority-rating-decals.html
🔑 priority-rating-decals.js
🔑 project-priority-decals.md
🔑 proud-peach-toolkit.json
🔑 ratings-gadget.md
🔑 request.js
🔑 sike.js
🔑 sort-editor.js
🔑 sulu-notes.js
🔑 sulu_notes.js
🔑 table-magic.json
🔑 thalia-helpers.js
🔑 thalia-todo.md
🔑 thalias-faves.html
🔑 today-pms-ideas.md
🔑 today-pms-notes.md
🔑 undefined
🔑 virtualSpace
🔑 vulcan-math-menu-address-map.json
🔑 xavia-sandbox.json
🔑 zed.js
🔑 zenith-redux.js
🔑 💾 Kruze Kontrol State

</pre>
</div>
</details>

----------------------------------------------------------------

<script>
doc = document;
doc . title = "Thalia's To-Do Notes";
</script>

