
/*

	quadratic.js
	
	Use the Quadratic Formula to solve for roots
	of a quadratic equation.
	
	Programmer: Dave Wellsted
	Company:    NyteOwl Computer Software
    Mail:       david.wellsted.1964@gmail.com
	
*/

// Calculates the discriminant
let discriminant = function(a,b,c) {
	return b*b - 4*a*c;
}

// Returns +1 for a single real root
// Returns +2 for two real roots
// Returns -2 for two complex roots
let numRoots = function(disc) {
	if (disc==0) { return 1; }	// Single real root
	if (disc>0)  { return 2; }	// Two real roots
	return -2;					// Two complex roots
}

// Calculates for a single real root
let singleRoot = function(b,scale) {
	return (-b)*scale;
}

// Calculates for two real roots
let twoRealRoots = function(b,scale,disc) {
	let roots = [];
	let re=Math.sqrt(disc);
	roots.push(( re-b)*scale);
	roots.push((-re-b)*scale);
	return roots;
}

// Calculates for two complex roots
let twoComplexRoots = function(b,scale,disc) {
	let roots = [];
	let root1 = [];
	let root2 = [];
	let re=(-b)*scale;
	let im=Math.sqrt(-disc)*scale;
	root1.push( re);
	root1.push( im);
	roots.push(root1);
	root2.push( re);
	root2.push(-im);
	roots.push(root2);
	return roots;
}

// Calculates the root(s) using the quadratic equation
function quadratic(a,b,c) {
	let denom = a+a;
	if (denom === 0) return null;
	let disc = discriminant(a,b,c);
	let scale=1/denom;
	switch (numRoots(disc))
	{
	case 1:
		return singleRoot(b,scale);
	case 2:
		return twoRealRoots(b,scale,disc);
	case -2:
		return twoComplexRoots(b,scale,disc);
	default:
		break;
	}
	return 'The numRoots function returned an invalid result.';
}
