<style>
@import url("http://dave-omega/style/owl.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[concept-editor]: <https://docs.google.com>
[jarvis-sandbox]: <http://dave-omega/app/jarvis/owl/jarvis-sandbox.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-omega]: <http://dave-omega/app/jarvis/owl/notes/jarvis-sandbox-notes.html>
[me-morpheus]: <https://nyteowldave.github.io/owl/notes/jarvis-sandbox-notes.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[rel-0010]: <./../dot/auto/> "Owl System"
[rel-0020]: <./../dot/auto/> "Jarvis Concept"
[rel-0021]: <./../dot/auto/> "Jarvis Sandbox"
[rel-0030]: <./../dot/auto/> "Jarvis Component Concept"
[rel-0040]: <./../dot/auto/> "Concept Editor"
[rel-0050]: <./../dot/auto/> "Concept Project"
[rel-0060]: <./../dot/auto/> "Crucial Projects"
[rel-0070]: <./../dot/auto/> "Dorothy's Rockets"
[rel-0080]: <./../dot/auto/> "Hikaru Address Manager"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<h1 id="_T_"> Jarvis Component Notes </h1>

----------------------------------------------------------------

# App Editions

> [Omega][me-omega]
> [Morpheus][me-morpheus]

----------------------------------------------------------------

# Related Links

> [Owl System][rel-0010]
> [Jarvis Sandbox][rel-0021]
> [Jarvis Concept][rel-0020]
> [Jarvis Component Concept][rel-0030]
> [Concept Editor][rel-0040]
> [Concept Project][rel-0050]
> [Crucial Projects][rel-0060]
> [Dorothy's Rockets][rel-0070]
> [Hikaru Address Manager][rel-0080]

----------------------------------------------------------------

# TODO

- Page Improvements
    - Owl System Support
    - HUD Editor / Installer
- Component Testing and Extraction
    - Extract Jarvis Component to API Module
    - Extract Realms Component to API Module
    - Extract Rico Component to API Module
    - Extract Gideon Component to API Module
    - Extract Fieldset Wrappers Component to API Module
- Documentation
    - Concept Doc for Jarvis Sandbox Features
    - Concept Docs for Components

----------------------------------------------------------------

> [Concept Editor][rel-0040]
> [Jarvis Sandbox][jarvis-sandbox]

----------------------------------------------------------------

# `⚙️` App Features

- `⚙️` Realms
    - `🧝` URL Address Manager
- `⚙️` Gideon
    - `🧝` Gadget Operations
- `⚙️` Jarvis
    - `🧝` Code Analysis
- `⚙️` Rico
    - `🧝` File System Operations
- `⚙️` Fieldset Wrappers
    - `🧝` Wrap Gadgets with Fieldsets
- `⚙️` Auto Bookmarks
    - `🧝` Assign URLs to Anchors

----------------------------------------------------------------

## Realms Component

The `realm` component manages a global array named `places`.
This places array should be populated by Client Apps to contain
an initial list of related links. This step should occur before
importing a places array for the merge step.

The `places` array contains __URL Addresses__. This is a
__universally__ shared resource. IOW it's common to all apps.

<details>
<summary> Important! </summary>
<p>
Care should be taken to avoid losing URL Addresses. In light of
this, the <code>realm</code> uses <b>Merge__</b> operations.
It never clears the <code>places</code> array when importing
new addresses.
</p>
</details>

Existing addresses are maintained as new addresses are added.
Care is taken to remove duplicate addresses.

The raw address lists are referred to as `HAL` lists. This is
an acronym for __Hikaru Address List__.

----------------------------------------------------------------

## `⚙️` Gideon Component

> ( pending )

----------------------------------------------------------------

## `⚙️` Jarvis Component

> ( pending )

----------------------------------------------------------------

## `⚙️` Rico Component

> ( pending )

----------------------------------------------------------------

## `⚙️` Fieldset Wrappers Component

> ( pending )

----------------------------------------------------------------

## `⚙️` Auto Bookmarks Component

> ( pending )

----------------------------------------------------------------

<script>
; mem =( o )=> Object.keys( o || window ).sort()
; iwm = mem()
</script>

<script>
; doc = ( document )
; doc . title = ( _T_.textContent ).trim()
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
auto_bookmarks = {};
</script>

<script>

/*

# Related Files

- owl/dot/auto/bookmarks.json

# TODO

- tiny.cc/concept-project
- tiny.cc/hikaru

*/

auto_bookmarks . entries = {

  "Owl System"
: "https://nyteowldave.github.io/owl/test.html"

, "Jarvis Sandbox"
: "./../jarvis-sandbox.html"

, "Jarvis Concept"
: "http://tiny.cc/jarvis-concept"

, "Jarvis Component Concept"
: "http://tiny.cc/jarvis-component-concept"

, "Concept Editor"
: "https://docs.google.com"

, "Concept Project"
: "http://tiny.cc/concept-project"

, "Crucial Projects"
: "http://tiny.cc/crucial-projects"

, "Dorothy's Rockets"
: "http://tiny.cc/dorothy-rockets"

, "Hikaru Address Manager"
: "http://tiny.cc/hikaru"

};

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


