
<style>
@import( "./style/legends.css" );
</style>

<header>
<a href="https://whiteboard.cloud.microsoft/me/whiteboards/383de1cd-229b-4dc4-a664-425cd4657a2b" title="Squad Members Whiteboard">Whiteboard</a>
</header>

----------------------------------------------------------------

# Squad Members

----------------------------------------------------------------

| Symbol      | Description |
|-------------|---------------|
| cls         | Clear console |
| again       | Reload page |
| report      | Report message (info or error) |
| destroy     | Report message (warning or error) |
| han         | Try-Catch Wrapper |
| gid         | Get Element by ID |
| ella        | Create Element |
| artie       | Read Attribute |
| bart        | Write Attribute |
| bernie      | Remove Attribute |
| barney      | Confirm Attribute Exists |
| selma       | Select Element by Query |
| selmax      | Select Elements by Query (Collection) |
| thelma      | Select Elements by Query (Array) |
| louise      | Select N-th Element by Query |
| wanda       | Add Name to Class List |
| wendy       | Remove Name from Class List |
| ethel       | Confirm Class List Contains Name |
| ester       | Add/Remove/Toggle Name in Class List |
| bullfrog    | Open Workspace |
| clark       | Emulate Anchor Click |
| bruce       | Open New Tab or Popup Window |
| rico        | Download Text |
| thoris      | Load Script |
| keith       | Copy Text to Clipboard |
| weezie      | Create Data URL from Text |
| wilbur      | Read Text from an Object Property |
| rollcall    | Get Member Names |
| crusoe      | Inspect Core Document |
| agent       | Navigator User Agent (lowercase) |
| isReText    | Confirm ReText was Detected |
| isChrome    | Confirm Chrome was Detected |

----------------------------------------------------------------

<button onclick="down()">Download HTML Table</button>

----------------------------------------------------------------

<script src="https://nyteowldave.github.io/chachi/api/legends.js">
</script>

<script>
doc = document;
doc.title = "Squad Legends";
</script>

<script>
function down() {
    try {
        const t = selma( "table" );
        let k = "legends-rollcall.html";
        let v = t.outerHTML;
        rico( v, k );
        alert( `Saved "${k}" to file system` );
    } catch ( e ) {
        alert( e );
        throw e;
    }
}
</script>


