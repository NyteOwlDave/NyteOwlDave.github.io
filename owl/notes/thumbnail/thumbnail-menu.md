<head> <link rel="icon" href="favicon.ico" /> </head>

<style>
@import url("https://nyteowldave.github.io/owl/owl.css");
</style>

<style>
[hand] { cursor : pointer; }
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

# Thumbnail Menu

----------------------------------------------------------------

<div center>
 <img hand id="img_dot_rockets" src="./dot-rockets.png" />
 <img hand id="img_download"    src="./download.png" />
 <img hand id="img_file_system" src="./file-system.png" />
 <img hand id="img_ebook"       src="./ebook.png" />
 <img hand id="img_sqlite"      src="./sqlite.png" />
 <img hand id="img_drive_index" src="./drive-index.png" />
 <img hand id="img_editions"    src="./editions.png" />
 <img hand id="img_pending"     src="./pending.png" />
</div>

----------------------------------------------------------------

# Thumbnails

----------------------------------------------------------------

## Checklist

| Title        | Status   |
|--------------|----------|
| Dot Rockets  | Finished |
| Download     | Finished |
| File System  | Finished |
| EBook        | Finished |
| SQLite       | Finished |
| Drive Index  | Finished |
| Editions     | Finished |
| Pending      | Finished |

----------------------------------------------------------------

## Details

| Title        | ID               | Filename        |
|--------------|------------------|-----------------|
| Dot Rockets  | img_dot_rockets  | dot-rockets.png |
| Download     | img_download     | download.png    |
| File System  | img_file_system  | file-system.png |
| EBook        | img_ebook        | ebook.png       |
| SQLite       | img_sqlite       | sqlite.png      |
| Drive Index  | img_drive_index  | drive-index.png |
| Editions     | img_editions     | editions.png    |
| Pending      | img_pending      | pending.png     |

----------------------------------------------------------------

# Editions

----------------------------------------------------------------

[me-morpheus]:
<https://nyteowldave.github.io/owl/notes/thumbnail/thumbnail-menu.html>
"Morpheus Edition"

[me-omega]:
<http://dave-omega/app/morpheus/owl/notes/thumbnail/thumbnail-menu.html>
"Omega Edition"

> [Morpheus][me-morpheus]
> [Omega][me-omega]

----------------------------------------------------------------

<script>
; iwm = Object.keys( window ).sort()
</script>

<script>
; doc = ( document )
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script src="./../../owl.js"></script>
<script src="./../../visit-ultra.js"></script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>

function main( event ) {
    try {
        doc . title = ( "Owl Thumbnail Menu" );
        init_titles();
        init_actions();
        // suggest( `visit.confirm( "http://example.com" )` );
    } catch ( e ) {
        bummer( e );
    }
}

addEventListener( "load", main );

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>

function suggest( s ) {
    footer_input . value = str( s );
}

</script>

<script>

function bummer( e ) {
    console . error ( e );
    window  . alert ( e );
}

</script>

<script>

function incomplete( s ) {
    s = ( `INCOMPLETE FEATURE : ${s}` );
    throw new Error( s );
}

</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script>
function init_titles() {
    img_dot_rockets  . title = "Dot Rockets";
    img_download     . title = "Download";
    img_file_system  . title = "File System";
    img_ebook        . title = "EBook";
    img_sqlite       . title = "SQLite";
    img_drive_index  . title = "Drive Index";
    img_editions     . title = "Editions";
    img_pending      . title = "Pending";
}
</script>

<script>
function init_actions() {
    const clicked =( e )=> clicked_image( e );
    img_dot_rockets  . onclick = clicked;
    img_download     . onclick = clicked;
    img_file_system  . onclick = clicked;
    img_ebook        . onclick = clicked;
    img_sqlite       . onclick = clicked;
    img_drive_index  . onclick = clicked;
    img_editions     . onclick = clicked;
    img_pending      . onclick = clicked;
}
</script>

<script>
function clicked_image( event ) {
    try {
        const img = event.target;
        const url = img.src;
        visit.confirm( url, "View Image?" );
    } catch ( e ) {
        bummer( e );
    }
}
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

