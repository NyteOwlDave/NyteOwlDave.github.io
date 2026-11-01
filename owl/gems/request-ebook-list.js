// APP : Owl System Test
// GEM : request-ebook-list.js

/*
	function request( url, accept, reject ) { ... }
*/

request . list = function() {
	tips( request . list );
};

request . list . ebooks = function() {
   t = "EBook List";
   i = "list-ebooks";
   p = "https://nyteowldave.github.io";
   s = "owl/notes";
   k = "ebook.list";
   u = psk( p, s, k );
   lists . clear();
   lists . request( u );
};

