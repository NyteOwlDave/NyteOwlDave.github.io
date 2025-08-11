
// Bisection method to find a root of f(x) in interval [a, b]
function bisection(f, a, b, tolerance = 1e-12, maxIterations = 100) {

    const start = [ a, b ];

    // Verify that f(a) * f(b) < 0
    let fa = f(a);
    let fb = f(b);

    if (fa * fb > 0) {
        throw new Error(
            "Function must have opposite signs at interval endpoints."
        );
    }

    let iterations = 0;
    let c, fc;

    function round( n ) {
        const digits = abs( log10( tolerance ) );
        return snap( n, digits );
    }

    function results( converged=false ) {
        const o = {
            args : { tolerance, maxIterations, interval : start },
            iterations,
            converged,
            root : c,
            nearest : round( c ),
            interval : [ a, b ]
        };
        if (! converged ) {
            o.warning = "Max iterations reached, may not have converged.";
        }
        return o;
    }

    while (iterations < maxIterations) {
        // Compute midpoint
        c = (a + b) / 2;
        fc = f(c);

        // Check for convergence
        if (abs(b - a) < tolerance || abs(fc) < tolerance) {
            return results( true );
        }

        // Update interval
        if (fa * fc < 0) {
            b = c;
            fb = fc;
        } else {
            a = c;
            fa = fc;
        }

        iterations++;
    }

    // Return result if max iterations reached
    return results();
}


// https://x.com/i/grok?conversation=1935953564142117042
// Newton-Raphson method to find a root of f(x)
function newtonRaphson(f, fPrime, x0, tolerance = 1e-6, maxIterations = 100) {

    let x = x0;
    let iterations = 0;

    function round( n ) {
        const digits = abs( log10( tolerance ) );
        return snap( n, digits );
    }

    function results( converged = false ) {
        const o = {
            args : { tolerance, maxIterations, guess : x0 },
            iterations,
            converged,
            root: x ,
            nearest : round( x )
        };
        if (! converged ) {
            o.warning = "Max iterations reached, may not have converged.";
        }
        return o;
    }

    while (iterations < maxIterations) {
        const fx = f(x);
        const fpx = fPrime(x);

        // Check for zero derivative to avoid division by zero
        if (abs(fpx) < 1e-10) {
            throw new Error("Derivative too small, Newton-Raphson may fail.");
        }

        // Update x using Newton-Raphson formula
        const xNext = x - fx / fpx;

        // Check for convergence
        if (abs(xNext - x) < tolerance) {
            return results( true );
        }

        x = xNext;
        iterations++;
    }

    // Return result if max iterations reached
    return results();
}


console.log( '📃', 'Loaded Local Module:', 'transcend.js' );

/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
