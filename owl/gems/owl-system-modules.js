
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

PEACH_KEY = ( `owl-system-modules.js` );

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

;
; now =()=> ( Date.now() )
; huh =()=> say( "Epoch := " + now() )
;
; gems = ( window.gems || {} )
;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

owl_system = {};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

; ( owl_system )
. modules = ( `
blastoid.js
cas-alpha.js
cas-v1p0.js
enhance-hud.js
jarvis-v1p0.js
jeannie.js
links-table-2.js
links-table.js
list-manager.js
owl-app-updates.js
owl-basics.js
owl-clipper.js
owl-gems.js
owl.js
owl-jsom.js
owl-main.js
owl-prolog.js
owl-test.js
parse-config-file.js
stella.js
strong-password.js
table-manager.js
visit-ultra.js
` );

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
function mods_droplist() {
    const ops = droplist;
    const title = 
    const id = "owl-mods-droplist";
    const ge = ops . populate( items, id, owner );
	return ( ge );
}
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

gems.owl = sce . value;

say( gems.owl.length );

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*

# Description

This Peach was created while developing the BGI Icon Menu App
on the Omega Workstation.

I updated the list of Owl System Component Modules and needed
to parse them into a droplist.

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



