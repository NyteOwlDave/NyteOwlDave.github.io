
/*
	bluto-dialog.js
    bluto-dialog.css
*/

;
; kid = ( t, e )=> ((e||doc.body).appendChild(elx(t)))
; acl = ( e, k )=> (e.classList.add(k))
;

function create_dlg( title ) {
	const de = kid( "DIV" );
	acl( de, "dialog" );
	const te = kid( "DIV", de );
	acl( te, "dialog-caption" );
	const ce = kid( "DIV", de );
	acl( ce, "dialog-content" );
	const s = str( title );
	te.textContent = ( s || "New Dialog" );
	return init_dlg( de );
}

function init_dlg( de ) {
	acquire_dlg_theme();
	const st = de.style;
	st.boxSizing = "border-box";
	de.caption = function() {
		const q = ".dialog-caption";
		return ( this.querySelector( q ) );
	};
	de.content = function() {
		const q = ".dialog-content";
		return ( this.querySelector( q ) );
	};
	de.visible = function() {
		const cl = this.classList;
		return (! cl.contains( "hide" ) );
	};
	de.hide = function() {
		const cl = this.classList;
		cl.add( "hide" );
		return ( this );
	};
	de.show = function() {
		const cl = this.classList;
		cl.remove( "hide" );
		return ( this );
	};
	de.toggle = function() {
		if ( this.visible() ) {
			return this.hide();
		} else {
			return this.show();
		}
	};
	de.zoom = function() {
		this.requestFullscreen();
		this.focus();
		return ( this );
	};
	de.move = function( x, y ) {
		const st = this.style;
		st.left = ( x + "px" );
		st.top  = ( y + "px" );
		return ( this );
	};
	de.slide = function( dx, dy ) {
		const rc = this.rect();
		const x = ( dx + rc.left );
		const y = ( dy + rc.top  );
		return this.move( x, y );
	};
	de.rect = function() {
		const rc = this.getBoundingClientRect();
		return ( rc );
	};
	return ( de );
}

function acquire_dlg_theme() {
	const k = "bluto-dialog.css";
	let se;
	if ( se = gid( k ) ) { return ( se ); }
	const p = "https://nyteowldave.github.io";
	const s = "std/style/bluto";
	const u = [ p, s, k ].join( "/" );
	se = elx( "STYLE" );
	se.id = ( k );
	doc.body.appendChild( se );
	se.innerText = ( [
		"@import url(", u , ");"
	] ).join( "" );
	return ( se );
}

function test_dlg() {
	de = create_dlg( "Dave" );
    de . id = "test";
	de . style.zIndex = "99999";
	de . style.position="fixed";
	console . debug( de );
};

;
; ( 0 ) && oscillate()
;

