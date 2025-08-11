
// Source:
// https://codepen.io/NyteOwlDave/pen/OPVXBqZ?editors=0011

// Related:
// https://cdnjs.cloudflare.com/ajax/libs/mathjs/14.2.1/math.js

// Cartesian Vector Class { x, y }

function vec( x, y ) {
    this.x = x;
    this.y = y;
    this.length = function() {
        return hypot( this.y, this.x );
    }
    this.angle = function() {
        return atan2( this.y, this.x );
    }
    this.add = function( v ) {
        const x = this.x + v.x;
        const y = this.y + v.y;
        return new vec( x, y );
    }
    this.sub = function( v ) {
        const x = this.x - v.x;
        const y = this.y - v.y;
        return new vec( x, y );      
    }
    this.scale = function( k ) {
        const x = this.x * k;
        const y = this.y * k;
        return new vec( x, y );    
    }
    this.dot = function( v ) {
        v = v || this;
        const x = this.x * v.x;
        const y = this.y * v.y;
        return ( x + y );
    }
    this.cross = function( v ) {
        const x = this.x * v.y;
        const y = this.y * v.x;
        return ( x - y );
    }
    this.perp = function() {
        return new vec( -this.y, this. x );
    }
    // Interface
    this.lerp = vec.lerp;
    this.project = vec.project;
    this.combine = vec.combine;
    this.size = vec.size;
    this.polar = vec.polar;
    this.normal = vec.normal;
}


// Ray Projection

vec.lerp = function( t, v ) {
    const k = ( 1 - t )
    const x = this.x * k + v.x * t;
    const y = this.y * k + v.y * t;
    return new vec( x, y );
}

vec.project = function( k, v ) {
    const x = this.x + v.x * k;
    const y = this.y + v.y * k;
    return new vec( x, y );    
}

vec.combine = function( i, v, j ) {
    const x = this.x * i + v.x * j;
    const y = this.y * i + v.y * j;
    return new vec( x, y );    
}


// Polar Class { r, t }

function polar( r, t ) {
    this.r = r;
    this.t = t;
    this.length = function() {
        return this.r;
    }
    this.angle = function() {
        return this.t;
    }
    this.re = function() {
        return this.r * cos( this.t );
    }
    this.im = function() {
        return this.r * sin( this.t );        
    }
    // Interface
    this.size   = polar.size;
    this.cartes = polar.cartes;
    this.normal = polar.normal;
}


// Size Class { w, h }

function size( w, h ) {
    this.w = w;
    this.h = h;
    this.area = function() {
        return this.w * this.h;
    }
    this.aspect = function() {
        return this.w / this.h;
    }    
    this.slope = function() {
        return this.h / this.w;
    }
    this.diagonal = function() {
        return hypot( this.w, this.h );
    }
    // Interface
    this.cartes = size.cartes;
    this.polar  = size.polar;
    this.normal = size.normal;
}


// Conversions

vec.size = function() {
    return new size( this.x, this.y );
}

vec.polar = function() {
    const r = this.length();
    const t = this.angle();
    return new polar( r, t );
}

polar.cartes = function() {
    const x = this.r * cos( this.t );
    const y = this.r * sin( this.t );
    return new vec( x, y );
}

polar.size = function() {
    return this.cartes().size();
}

size.cartes = function() {
    return new vec( this.w, this.h );
}

size.polar = function() {
    return this.cartes().polar();
}


// Normalization

vec.normal = function() {
    let k = this.length();
    let x, y;
    if ( k > 1e-16 ) {
        k = 1 / k;
        x = this.x * k;
        y = this.y * k;
    } else {
        x = 1;
        y = 0;
    }
    return new vec( x, y );      
}

polar.normal = function() {
    return new polar( 1, this.t );
}

size.normal = function() {
    return new size( 1, 1 );
}


/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/

