
/*

    apply-bgi.js

    Apply Background Image to Gadget

*/

function apply_bgi( gadget, address ) {
    ( gadget )
    . style
    . backgroundImage = (
        `url("${address}")`
    )
}

