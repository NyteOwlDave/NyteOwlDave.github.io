// APP : Owl System Test
// GEM : request-list.js

/*
	function request( url, accept, reject ) { ... }
*/


function init_list_request( ops ) {

function _req() { tips( _req ); }

const _iaf =( o )=> ( "function" === typeof o );
const _iwf =( k )=> _iaf( window[ k ] );

if (! _iwf( "main" ) {
	main  =( event )=> ();
}

if (! _iaf( ops ) ) {
	main . request = ( ops = _req );
}

; ( ops )
. list = function( u, i, t ) {
	if ( "undefined" === typeof( u ) {
		tips( ops . list );
		return;
	} else {
		// Needs : list-manager.js
	   	return lists . request( u, i, t );
	}
};

; ( ops )
. list
. ebooks = function( relpath ) {
   const t = "EBook List";
   const p = "https://nyteowldave.github.io";
   	const s = ( str( relpath ) || "owl/notes" );
   const k = "ebook.list";
   const u = psk( p, s, k );
   return request . list( u, k, t );
};

; ( ops )
. list
. folders = function( relpath ) {	
   	const t = "Folder List";
   	const p = "https://nyteowldave.github.io";
   	const s = ( str( relpath ) || "owl" );
   	const k = "folder.list";
   	const u = psk( p, s, k );
   	return request . list( u, k, t );
};

; ( ops )
. list
. files = function( relpath ) {
   	const t = "File List";
   	const p = "https://nyteowldave.github.io";
   	const s = ( str( relpath ) || "owl" );
   	const k = "file.list";
   	const u = psk( p, s, k );
   	return request . list( u, k, t );
};

; ( ops )
. list
. explore = function( relpath ) {
   	const t = "Explore List";
   	const p = "https://nyteowldave.github.io";
   	const s = ( str( relpath ) || "owl" );
   	const k = "explore.list";
   	const u = psk( p, s, k );
   	return request . list( u, k, t );
};

; ( ops )
. list
. modules = function( relpath ) {
   	const t = "Module List";
   	const p = "https://nyteowldave.github.io";
   	const s = ( str( relpath ) || "owl/api" );
   	const k = "module.list";
   	const u = psk( p, s, k );
   	return request . list( u, k, t );
};

; ( ops )
. list
. gems = function( relpath ) {
   	const t = "Gem List";
   	const p = "https://nyteowldave.github.io";
   	const s = ( str( relpath ) || "owl/api/gems" );
   	const k = "gem.list";
   	const u = psk( p, s, k );
   	return request . list( u, k, t );
};

; ( ops )
. list . peaches = function( relpath ) {
   	const t = "Peach List";
   	const p = "https://nyteowldave.github.io";
   	const s = ( str( relpath ) || "owl/api/peaches" );
   	const k = "peach.list";
   	const u = psk( p, s, k );
   	return request . list( u, k, t );
};

; ( ops )
. list
. styles = function( relpath ) {
   	const t = "Style List";
   	const p = "https://nyteowldave.github.io";
   	const s = ( str( relpath ) || "owl/api/style" );
   	const k = "style.list";
   	const u = psk( p, s, k );
   	return request . list( u, k, t );
};

}


