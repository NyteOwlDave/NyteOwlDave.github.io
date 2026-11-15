<style>
@import url("https://nyteowldave.github.io/owl/owl.css");
</style>

----------------------------------------------------------------

# Owl Test Gems

> ( GEM_KEY : `filter-tree-output.js` )

----------------------------------------------------------------

# Description

----------------------------------------------------------------

This gem was created to filter unique JS filenames from the
output of the `tree` command.

The algorithm is simple:

- Reverse all lines
- Filter all not starting with ".js"
- Trim away line-drawing characters
- Reverse lines back to normal

Trimming line drawing characters uses this algorithm:

- Split on blank space
- Use array shift to grab the first element (word token)

One caveat is that any filename that contains blank space(s)
will be mangled (only the part nearest the extension is
preserved).

----------------------------------------------------------------

# Source Code

<pre contenteditable>

say("~");
nop=(o)=>(o);
boo=doc.body;
ED="TEXTAREA";
zed=(s)=>{
  id="sip"
  ed=gid("id");
  if (!ed) {
    ed=elx( ED );
    ed.id=id;
  }
  ed.value=(s);
  return boo.appendChild(ed);
};
// zed("Dave");
backward=(s)=>(s.split("").reverse().join(""));
reverso=function() {
  m = qlp( sip.value );
  m = m.map(backward);
  sip . value = qlc( m );
}
filter=function() {
  m = qlp( sip.value );
  w =( s )=> ( s.startsWith( "sj." ) );
  m = m.filter( w );
  sip . value = qlc( m );
};
// filter();
chop=function() {
  m = qlp( sip.value );
  w =( s )=> {
     p = s.split( " " );
     return ( p.shift() );
  };
  m = m.map( w ).filter( nop );
  sip . value = qlc( m );
};
// chop();
pretty=function() {
  m = new Set( qlp( sip.value ) );
  m = arr( m ).sort();
  sip . value = qlc( m );
};

</pre>

----------------------------------------------------------------


