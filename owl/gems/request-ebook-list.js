// APP : Owl System Test
// GEM : request-ebook-list.js
function request_ebook_list() {
   t = "EBook List";
   i = "list-ebooks";
   p = "https://nyteowldave.github.io";
   s = "owl/notes";
   k = "ebook.list";
   u = psk( p, s, k );
   lists . clear();
   lists . request( u );
};

