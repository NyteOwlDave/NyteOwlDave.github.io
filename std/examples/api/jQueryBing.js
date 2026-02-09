
const Bing = {
  site  : 'https://www.bing.com' ,
  query : 'search?q' ,
  prefix: 'w3schools+jQuery' ,
  composeQuery: function( topic ) {
    const a = Bing.site;
    const b = Bing.query;
    const c = Bing.prefix;
    const d = ( `${a}/${b}=${c}+` );
    return ( d + String( topic ) );
  },
  runQuery: function(topic) {
    window.open( Bing.composeQuery( topic ) );
  }
};


console.log( "Loaded jQueryBing.js API Module" );

