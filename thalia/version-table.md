
----------------------------------------------------------------

> Version Details Template

| Property | Value |
|----------|----------------------|
| Updated  | 2026-JAN-27          |
| Version  | 2.0.0                |

----------------------------------------------------------------

> Editor

<div center>
<textarea id="sip" class="siox" wrap="off">
</textarea>
<script>
addEventListener( "load" , (ev)=>{
    let doc = document;
    let table = doc.querySelector( "TABLE" );
    let sip = doc.getElementById( "sip" );
    sip.value = table.outerHTML;
    sip.spellcheck = false;
} );
</script>
</div>

----------------------------------------------------------------

> Navigation

- [Explore](./)
- [Version Details Fieldset](./version-details.html)

----------------------------------------------------------------