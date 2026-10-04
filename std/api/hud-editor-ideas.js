
/* 
	hud-editor-ideas.js
	Morpheus Edition
	SEE : hud-ideas-installer.js
*/

if ( "function" !== typeof hud ) {
	throw new Error( `Missing HUD Editor` );
};

hud.ideas = {};

hud.ideas.chatkey  = ( `hud-editor-chat.json`  );
hud.ideas.storekey = ( `hud-editor-ideas.json` );
hud.ideas.peachkey = ( `hud-editor-ideas.js`   );
hud.ideas.noteskey = ( `hud-editor-ideas.md`   );

hud.ideas.published = ( `2026-OCT-04 ~ 08:47 ~ Omega` );

;
; k = ( hud.ideas.peachkey )
; v = ( sce.value )
; localStorage   . setItem( k, v )
; sessionStorage . setItem( k, v )
; console.log ( `Updated HUD Ideas Store Entry` )
;

hud.ideas.todo = function( s ) {
	s = str( s );
	if ( s ) {
		s = ( `The "${s}" feature is INCOMPLETE` );
	} else {
		s = ( "This Feature is INCOMPLETE" );
	}
	window.alert( s );
};

hud.ideas.persist = {};
hud.ideas.recover = {};

hud.ideas.persist.manuscript = function () {
	const ops = ( hud.ideas );
	ops.todo( "persist.manuscript()" );
};

hud.ideas.persist.peach = function () {
	const ops = ( hud.ideas );
	ops.todo( "persist.peach()" );
};

hud.ideas.persist.notes = function () {
	const ops = ( hud.ideas );
	ops.todo( "persist.notes()" );
};

hud.ideas.recover.manuscript = function () {
	const ops = ( hud.ideas );
	ops.todo( "recover.manuscript()" );
};

hud.ideas.recover.peach = function () {
	const ops = ( hud.ideas );
	ops.todo( "recover.peach()" );
};

hud.ideas.recover.notes = function () {
	const ops = ( hud.ideas );
	ops.todo( "recover.notes()" );
};

hud.ideas.chat = function() {
	const ops = ( hud.ideas );
	ops.todo( "chat()" );
};

hud.ideas.acquire = function( url ) {
	const boo = ( document . body );
	const ops = ( hud.ideas );
	ops . acquire . remove( url );
	const se = elx( "SCRIPT" );
	boo . appendChild( se );
	se . src = ( url );
	return ( se );
};

hud.ideas.acquire.remove = function( url ) {
	const m = all( `SCRIPT[src]` );
	const match =( se )=> {
		const u = ( se . src );
		return ( u === url );
	};
	const v = m.filter( match );
	const old = ( v[ 0 ] );
	if (! old ) { return; }
	old . remove();
	return ( old );
};

hud.ideas.hints = function() {
	const t = ( "HUD Ideas Members" );
    hints( hud.ideas, t );
};

hud.ideas.markdown = ( `

# HUD Editor Ideas

- Finish HUD Ideas Concept
- Implement HUD Ideas as Installer

` );

/*

osc = function() {
 	main.OK = (! main.OK );
	if ( main.OK ) {
		blurt( "OK!" );
	} else {
		blurt( "Cool, dude!" );
	};
};

;
; osc()
;

*/

