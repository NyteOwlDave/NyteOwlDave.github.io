
/////////////////////////////////////////////////////////////////////////////
//
// bump-terrain.js - animate bump-mapped terrain with lighting
//
// Author:  Dave Wellsted, NyteOwl Computer Software
// Updated: 2020-MAR-15
//
/////////////////////////////////////////////////////////////////////////////
//
// We have a pixel (say x,y) and we want to find how its normal vector
// is facing (that is its slope). Normally we would have to mess with
// cos and sin and other slow stuff but here we only care about something
// like a pseudo-normal... in other words we only care about the algebraic
// sign.  There are three possible pseudo-normals:
//
//    nx < 0    - Normal facing right
//    nx > 0    - Normal facing left
//    nx = 0    - Normal sticking out of the screen
//
// And it's the same story with ny (up, down or sticking out).
//
// To find this orientation we get 2 pixels: the one left and the one
// right (or the one up and the one down for ny) and we subtract.
// The result is the N vector for our point.
//
// The rest is easy.  We have two vectors now (N,L).  We want their
// coordinates to be as close as possible (the closer they are the more
// light the pixel gets. We scale the range of acceptable distances so
// that it maps to indices within our color intensity palette.
//
/////////////////////////////////////////////////////////////////////////////

// Do nearest match for palette color
// Palette is a 256x3 array of RGB triplets
// This is a handy general-purpose support function
const MatchColor = function(pal,r,g,b) {
  let y,i=0,best=Infinity
  for (y=0; y<256; y++) {
    let rdiff = r - pal[y][0]
    let gdiff = g - pal[y][1]
    let bdiff = b - pal[y][2]
    let diff = rdiff*rdiff 
             + gdiff*gdiff 
             + bdiff*bdiff
    if (diff < best) {
      i = y
      best = diff
    }
  }
  return i
}

// Bump terrain singleton object
const BumpTerrain = {
  // Fill color
  fill : [200, 200, 10],
  // Cutoff for distance squared
  cutoff : 24000,
  // Palette for lighting effects
  palette : [],
  // This is our bump map (height map)
  image : new Uint8ClampedArray(320*200),
  // Called to initialize the palette
  // and height map from a 320x200 image
  init : function(img) {
    const me = BumpTerrain
    let n, x, y, i, j, k
    // First 14 entries are black
    // Entries are essentially levels of illumination
    for (n=0; n<14; n++) {
      me.palette[n] = [0,0,0]
    }
    // The remaining 242 entries are increasing
    // intensities of yellow
    for (; n<256; n++) {
      me.palette[n] = [n,n,n>>3]
    }
    // For each pixel map row
    for (y=0; y<199; y++) {
      // Calculate offset to start of row
      j = y*320
      // For each pixel map column
      for (x=0; x<319; x++) {
        // Index of column within destination pixmap
        // This is 8 bits per pixel (paletted)
        i = j+x
        // Index of column within source pixmap
        // This is 24 bits per pixel (true-color RGBA)
        k = 4*i
        // Read source pixmap color channels
        let r = img.data[k]
        let g = img.data[k+1]
        let b = img.data[k+2]
        // Match to nearest palette color and
        // write palette index to o/p pixmap
        me.image[i] = MatchColor(me.palette,r,g,b)
      }
    }
  },
  // Renders the image to a 320x200 frame buffer
  // and returns the result as a new ImageData object
  render : function(light_pos) {
    const me = BumpTerrain
    let i, j        // Indices
    let x, y        // Counters
    let l           // Light Counter
    let lx, ly      // Light Position
    let nx, ny      // Pixel Normal Vector
    let vlx, vly    // Light Vector
    let difx        // X axis difference
    let dify        // Y axis difference
    let c, col      // Color
    // Create destination image
    const img = new ImageData(320,200)
    // Get pixel (destination) buffer
    const bfr = img.data
    // Get bump map (source) buffer
    const bump = me.image
    // Init
    l = light_pos
    // Make sure the light moves in a nice round path
    lx = (Math.floor(Math.cos(l / 13.0) * 66.0) + 160.5)
    ly = (Math.floor(Math.sin(l / 23.0) * 66.0) + 100.5)
    // Row loop
    for (y=1; y<199; y++) {
      // Column loop
      for (x=1; x<319; x++) {
        // Calculate the light vector
        vlx = x-lx
        vly = y-ly
        // If light too far away, ignore pixel
        const co = vlx*vlx + vly*vly
        if (co <= me.cutoff) {
          // Get pseudo-normals
          nx = Math.floor(bump[ y*320+x+1   ] - bump[ y*320+x-1   ])
          ny = Math.floor(bump[ (y+1)*320+x ] - bump[ (y-1)*320+x ])
          // Determine difference between pixel's horz normal
          //  and light's horz normal.
          difx = Math.abs(vlx - nx)
          if (difx > 127) difx = 127
          difx = 127-difx
          if (difx < 0) difx = 0
          // Determine difference between pixel's vert normal
          //  and light's vert normal.
          dify = Math.abs(vly - ny)
          if (dify > 127) dify = 127
          dify = 127-dify
          if (dify < 0) dify = 0
          // Finally we add the two intensities and clamp
          // to palette index range [0 ... 255]
          col = (difx+dify) & 0xFF
          // This is the slow (more accurate) way
          // col = parseInt(Math.sqrt(difx*difx + dify*dify))
          // col = Math.min(col, 255)
          // Lookup the light color
          c = me.palette[col]
        } else {
          c = me.fill
        }
        // And write it as a pixel
        let k = 4*(y*320+x)
        bfr[k]   = c[0]
        bfr[k+1] = c[1]
        bfr[k+2] = c[2]
        bfr[k+3] = 255
      }
    }
    // Return O/P image
    return img
  }  
}

