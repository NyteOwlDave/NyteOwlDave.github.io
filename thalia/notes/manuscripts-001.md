
[home]:
<http://dave-legacy/app/thalia/notes/manuscripts-001.html>
"Home Page"


<script>
EDITABLE_TABLES = true;
</script>

<style group="Every Page Theme" host="dave-legacy">
@import url("http://dave-legacy/~/style/every-page.css")
</style>

<style group="Every Page Theme" host="dave-legacy">
@import url("http://dave-legacy/~/style/every-page-todo.css")
</style>

----------------------------------------------------------------

<header id="page_title">
    Thalia's New Manuscripts
</header>

<footer id="footer">
    <div id="button_tray"> &nbsp; </div>
    <div id="messages"> &nbsp; </div>
</footer>

----------------------------------------------------------------

# [x]  Dave's Fave Colors

----------------------------------------------------------------

> This is a manuscript for `Hysteresis`. It manages colors and
> named pairs of colors.

----------------------------------------------------------------

| Item         | Value                  | Notes   |
|--------------|------------------------|---------|
| STORE_KEY    | daves-fave-colors.json |         |
| Primary      | dave-legacy            |         | 
| Agent        | Firefox                |         |
| Application  | Hysteresis             |         |

----------------------------------------------------------------

## [?] Features

| Feature      | Description            | Peach Key |
|--------------|------------------------|-----------|
| TableManager | HTML table manager     |           |
| ColorTable   | Color pair HTML table  |           |
| ColorOps     | Core color operations  |           |
| ColorGadget  | Color input gadget     |           |
| ColorPair    | Named color pair       |           |
| PairGroup    | Named color pair group |           |

----------------------------------------------------------------

# [?] Link Table Creator

----------------------------------------------------------------

> This is a manuscript for `Q-Editor`. It creates __checklists__
> from `Navigation Docs`. It also provides a bunch of list and
> <i>text manipulation</i> functions.

----------------------------------------------------------------

> One of the more powerful features is the ability to scrape
> comments with special `Marker` tags (prefixes). This is very
> similar to the `Cody` self-documenting paradigm.

----------------------------------------------------------------

| Item         | Value                   | Notes   |
|--------------|-------------------------|---------|
| STORE_KEY    | link-table-creator.json |         |
| Primary      | dave-legacy             |         |
| Agent        | Firefox                 |         |
| Application  | Q-Editor                |         |

----------------------------------------------------------------

## [x] Features

| Feature      | Description                     | Notes     |
|--------------|---------------------------------|-----------|
| Manuscripts  | Composes Q-Editor Manuscript    |           |
| Markers      | Extracts Markers as CoreDoc     |           |
| Check List   | Composes Checklist for Nav Docs |           |
| String Ops   | Lots of String Manipulation     |           |

## [x] Members

| Member               | Description                               | Notes     |
|----------------------|-------------------------------------------|-----------|
| MANUSCRIPT_TITLE     | User Friendy Title                        |           |
| MANUSCRIPT_VERSION   | Version Number                            |           |
| STORE_KEY            | Manuscript Store Key (*.json)             |           |
| PEACH_KEY            | JavaScript Peach Key (*.js)               |           |
| con                  | Alias console                             |           |
| jot                  | Alias console.log                         |           |
| jet                  | Alias console.warn                        |           |
| jut                  | Alias console.error                       |           |
| jit                  | Alias console.table                       |           |
| jgo                  | Alias console.group                       |           |
| jgc                  | Alias console.groupEnd                    |           |
| arr                  | Create Array from Iterable                |           |
| unq                  | Create Set from Iterable                  |           |
| str                  | Create Trimmed String                     |           |
| jsn                  | Alias JSON                                |           |
| jso                  | Alias JSON.parse                          |           |
| jst                  | Alias JSON.stringify                      |           |
| jsp                  | Prettify JSON text                        |           |
| ged                  | Verify Arg is a Gadget Reference          |           |
| god                  | Resolve Gadget ID or Reference            |           |
| remove_prefix_N      | Remove arbitrary length prefix            |           |
| remove_prefix_2      | Remove 2-character prefix                 |           |
| remove_prefix_3      | Remove 3-character prefix                 |           |
| CHECKBOX             | Checkbox Prefix Literal                   |           |
| checkbox             | Insert checkbox prefix                    |           |
| remove_checkbox      | Remove checkbox prefix                    |           |
| read_title           | Read Nav Link Title (removes prefix)      |           |
| read_titles          | Read all Nav Link Titles (removes prefix) |           |
| title_checklist      | Generate Nav Link Title Checklist         |           |
| manuscript           | Compose Manuscript                        |           |
| resolve_ioc          | Resolve sip/sop/code editor references    |           |
| resolve_ioc          | Resolve hdrs array                        |           |
| resolve_hdr          | Resolve Header by Index                   |           |
| read_hdr             | Read Header Text by Index                 |           |
| write_hdr            | Write Header Text by Index                |           |
| apply_manuscript     | Apply Manuscript to Web App               |           |
| edit_manuscript      | Write Manuscript to Editor                |           |
| request_manuscript   | Request Manuscript from Remote Server     |           |
| read_marker_comments | Read Marker Comments                      |           |
| test_markers         | Text Marker Ops                           |           |
| enclose              | Enclose Single String                     |           |
| enclose_lines        | Enclose All Editor Lines                  |           |

----------------------------------------------------------------

# [?] PMS Notes

----------------------------------------------------------------

## [x] Hysteresis Editor Scraper

----------------------------------------------------------------

> I've written code for Hysteresis that reads all editors
> and extracts `PEACH_KEY` or `STORE_KEY`. This needs to be
> located. Use this tool to fill in the tables on this page.

----------------------------------------------------------------

# [x] JavaScript Gems

----------------------------------------------------------------

> There's a `Gem` subfolder for the `Peach Cloud Store`. As a
> temporary measure, I'm embedding some Gems in this document.

----------------------------------------------------------------

## nop() ~ No Operation

----------------------------------------------------------------

```javascript

PEACH_KEY = ( `some-peach.js` );

// App = Hysteresis
nop = function() {
   blurt( `Loaded ${PEACH_KEY} peach` );
}

```

----------------------------------------------------------------

> [Home][home]

----------------------------------------------------------------

> [Explore](./)

----------------------------------------------------------------

> ( `manuscripts-001.md` ) ~ ( `app/thalia/notes` ) ~ ( `dave-legacy` )

----------------------------------------------------------------


<!-- ~~~~~~~~~~~~~~ [[ SUPPORT API MODULES ]] ~~~~~~~~~~~~~~ -->

<script src="http://dave-legacy/app/zed/api/prolog.js">
</script>

<script src="http://dave-legacy/~/api/just/lando.js">
</script>

<script src="http://dave-legacy/~/api/just/replace-decals.js">
</script>

<script src="http://dave-legacy/~/api/just/simple-messaging.js">
</script>

<script src="http://dave-legacy/~/api/transport/open-file-3.js">
</script>

<script src="http://dave-legacy/~/api/transport/zapper.js">
</script>

<!-- ~~~~~~~~~~~~~~~~ [[ PAGE LOAD EVENT ]] ~~~~~~~~~~~~~~~~ -->

<script file="app-logic.js" hint="Page Initialization">
function main() {
    doc . title = page_title.textContent.trim();
    replaceHeaderDecals();
    replaceListDecals();
}
</script>

<script file="app-logic.js" hint="Page Load Event Handler">
function __init__( event ) { lando( main ); }
</script>

<script file="app-logic.js" hint="Page Load Event Listener">
addEventListener( "load", __init__ );
</script>

<!-- ~~~~~~~~~~~~~~~ [[ APPLICATION LOGIC ]] ~~~~~~~~~~~~~~~ -->

