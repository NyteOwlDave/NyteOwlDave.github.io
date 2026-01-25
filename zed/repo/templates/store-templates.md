
<style>
@import url("http://dave-legacy/app/zed/style/zed-demo.css");
</style>

[templates]: <http://dave-legacy/app/zed/templates/>

----------------------------------------------------------------

> [Data Store Templates][templates]

----------------------------------------------------------------

<textarea class="zeddicus" id="store-template.json">
/* JSON (store-template.json) */
{
  "key": "(?)",
  "value": {
    "agent": "(?)",
    "client": "(?)",
    "server": "(?)",
    "store": { /* (?) */ },
    "file": "(?)",
    "when": "(?)"
  }
}
</textarea>

<textarea class="zeddicus" id="store-template.js">
/* JavaScript (store-template.js) */
var manifest = {
    key   : ""
,   value : {
        agent  : ""
,       client : ""
,       server : ""
,       file   : ""
,       when   : ""
,       store  : {}
    }
};
</textarea>

<textarea class="zeddicus" id="store-manager.js">

/* JavaScript (store-manager.js) */

stitch =( sep, list )=> ( list.join( sep ) );

kav  = ( k, v ) => ( { key : k, value : v } );
jst  = ( o    ) => ( JSON.stringify( o, null, 2 ) );
jake = ( k, v ) => jst( kav( k, v ) );

_agent = "chrome";
client = "ryzen";
server = "alora";
when   = "2025-DEC-20";
store  = localStorage;
type   = "store";
file   = stitch( "-" , [ client , server , _agent ] );
key    = stitch( "." , [ file   , type            ] );

value = {
  agent  : _agent
, client , server
, store  , file 
, when
};

manifest = jake( key, value );

write( sop, manifest );

</textarea>

<textarea class="zeddicus" id="store-menu.nav">

----------------------------------------------------------------

> Store Menu

----------------------------------------------------------------

+ Home
@ ???

+ Netwide
@ ???

+ Web Site
@ ???

+ Whiteboard
@ ???

+ Notebook
@ ???

+ Cloud Store
@ ???

+ Tools
@ ???

+ Settings
@ ???

+ Help
@ ???

</textarea>

----------------------------------------------------------------

> Decals

----------------------------------------------------------------

| * | Title       |
|---|-------------|
| ? | Home        |
| ? | Netwide     |
| ? | Web Site    |
| ? | Whiteboard  |
| ? | Notebook    |
| ? | Cloud Store |
| ? | Tools       |
| ? | Settings    |
| ? | Help        |

----------------------------------------------------------------


----------------------------------------------------------------


