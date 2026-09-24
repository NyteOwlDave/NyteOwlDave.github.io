
/*

| U | PASS URL Address |
|---|-------------------------------|
| P | https://nyteowldave.github.io |
| S | std/api/dialog                |
| K | notepad.js                    |

*/


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function point2d( x, y ) {
	x = ( parseFloat( x ) || 0.0 );
	y = ( parseFloat( y ) || 0.0 );
	return { x, y };
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function offset_gadget( ge, dx, dy ) {
	const px =( n )=> ( `${n}px` );
	const st = ge.style;
	st.boxShadow = "unset";
	const rc = ge.getBoundingClientRect();
	let x, y;
	st.left = px( x = ( dx + rc.x ) );
	st.top  = px( y = ( dy + rc.y ) );
	st.boxShadow = "";
	// report( "New Position = { " + ( `${x}, ${y}` ) + " }" );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function bring_forward( dlg ) {
	const m = all( ".dialog" );
	m . forEach(
		( de ) => {
			if ( de !== dlg ) {
				de.classList.remove( "front" );
			}
		}
	);
	if ( dlg ) {
		const cl = dlg.classList;
		if ( cl.contains( "dialog" ) ) {
			cl.add( "front" );
			return;
		}
		throw new TypeError( "Expected a Dialog" );
	}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function report( o ) {
	if ( report.silent ) { return; }
	console.debug( o );
	if ( "object" !== typeof o ) {
		blurt( o );
	}
}
report.silent = ( true );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function mine( ev ) {
	if ( ev instanceof Event ) {
		( ev ).stopPropagation();
		( ev ).preventDefault ();
	}
	return ( ev );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function next_id() {
	let id, pre = "dlg";
	for ( let i = 1; i < 10000; i += 1 ) {
		id = ( "dlg" + i );
		if (! gid( id ) ) { break; };
	}
	return ( id );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function get_dlg_caption( dlg ) {
	return ( dlg.querySelector( ".dialog-caption" ) );
}

function get_dlg_content( dlg ) {
	return ( dlg.querySelector( ".dialog-content" ) );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function create_dlg( id, owner, title ) {
	const CE = "contenteditable";
	function node( type, owner ) {
		const ne = elx( type );
		return ( owner.appendChild( ne ) );
	}
	let dlg;
	if ( dlg = gid( id ) ) {
		return ( dlg );
	}
	owner = ( owner || doc.body );
	title = ( str( title ) || "New Dialog" );
	dlg = node( "DIV", owner );
	dlg . id = ( str( id ) || next_id() );
	dlg . title = ( title );
	dlg . classList . add( "dialog" );
	const dte = node( "DIV", dlg );
	dte . textContent = ( title );
	dte . classList . add( "dialog-caption" );
	if ( BLUE ) {
		dte . classList . add( "blue" );
	}
	const dce = node( "DIV", dlg );
	dce . classList . add( "dialog-content" );
	dce . setAttribute( CE, "true" );
	dce . innerText = "\n";
	dlg . read_caption = function() {
		const ge = get_dlg_caption( this );
		return ( ge.textContent );
	};
	dlg . write_caption = function( s ) {
		const ge = get_dlg_caption( this );
		dlg . title = ( s );
		return ( ge.textContent = s );
	};
	dlg . get_content = function() {
		return get_dlg_content( this );
	};
	dlg . read_text = function() {
		const ge = get_dlg_content( this );
		return ( ge.innerText );
	};
	dlg . write_text = function( s ) {
		const ge = get_dlg_content( this );
		return ( ge.innerText = s );
	};
	dlg . read_html = function() {
		const ge = get_dlg_content( this );
		return ( ge.innerHTML );
	};
	dlg . write_html = function( s ) {
		const ge = get_dlg_content( this );
		return ( ge.innerHTML = s );
	};
	return ( dlg );
}
;
; BLUE = true
;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function mick( event ) {
	const CE = "contenteditable";
	const ge = event.target;
	const pe = ge.parentElement;
	if (! pe ) {
		bring_forward( null );
		return;
	}
	const is_caption = ge.classList.contains( "dialog-caption" );
	const is_content = ge.classList.contains( "dialog-content" );
	if ( event.altKey ) {
		if ( event.shiftKey ) {
			mine( event );
			create_dlg();
			return;
		}
		if ( is_title || is_content ) {
			mine( event );
			if ( ge.hasAttribute( CE ) ) {
				ge.removeAttribute( CE );
			} else {
				ge.setAttribute( CE, "true" );
				ge.focus();
			}
		}
		return;
	}
	if ( is_caption ) {
		if ( event.ctrlKey ) {
			if ( event.shiftKey ) {
				pe.remove();
				mine( event );
			} else {
				Smaug.begin( event );
			}
			return;
		}
		mine( event );
		bring_forward( pe );
		return;
	}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Smaug = {};
Smaug . gadget = ( null );
Smaug . points = {
  start  : {}
, recent : {}
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Smaug.begin = function( event ) {
	const ops = Smaug;
	function move( event ) {
		const ops = Smaug;
		const pts = ops.points;
		if (! ops.gadget ) { return; }
		mine( event );
		const x = event.clientX;
		const y = event.clientY;
		const dx = ( x - pts.recent.x );
		const dy = ( y - pts.recent.y );
		const zz = dx*dx + dy*dy;
		if ( zz < 25 ) { return; }
		report( [ dx, dy ].join( " : " ) );
		pts . recent = point2d( x, y );
		offset_gadget( ops.gadget, dx, dy );
	}
	function release( event ) {
		const ops = Smaug;
		move( event );
		report( "Released" );
		ended();
	}
	function ended() {
		const ops = Smaug;
		if ( ops.gadget ) {
			removeEventListener( "mousemove" , move    );
			removeEventListener( "mouseup"   , release );
			ops.gadget = ( null );
		}
		report( "Drag Ended" );
	}
	report( "Starting Drag" );
	const pts = ops.points;
	mine( event );
	const ge = ( ops.gadget = event.target.parentElement );
	ge.style.position = "fixed";
	pts.start = (
		pts.recent = point2d(
			event.clientX ,
			event.clientY
		)
	);
	report( pts.start );
	addEventListener( "mousemove" , move    );
	addEventListener( "mouseup"   , release );
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; console.log( `Loaded "notepad.js" API Module` )
;

