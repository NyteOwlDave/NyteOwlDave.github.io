
<head>
<meta charset="utf-8">
<script>
document.title = "Chachi Help";
</script>
<script src="./../api/editables.js"></script>
<style>
@import url("./style/docs.css");
h1 {
    text-align : center;
    margin-top : 64px;
}
header {
    height : 68px;
    line-height : 30px;
}
</style>
</head>

<header>
<nav>
    <a href="https://nyteowldave.github.io">Home</a>
    <a href="./chachi.html">Chachi</a>
    <a href="https://whiteboard.office.com/me/whiteboards/9e35193f-649f-4a64-8322-58a27273aaa6">Whiteboard</a>
    <a href="./app-content.html">3P</a>
</nav>
</header>

# Hotkeys

The following hotkeys are defined when the Editor
has input focus:

<div id="t_hotkeys"></div>

| Key         | Modifier | Action | Notes |
|-------------|----------|--------|-------|
| Enter       | Alt      | Run    |
| Scroll Lock |          | Toggle Math Menu  |
| Scroll Lock | Alt      | Toggle Canvas     |
| I           | Alt      | Draw Isometric Grid  |
| C           | Alt      | Draw Cartesian Grid  |
| E           | Alt      | Erase Canvas |
| X           | Alt      | Swap Input with Output |

<script>
_K_ = t_hotkeys.nextElementSibling;
_K_.id = "hotkeyTable";
function tables() {
    const batch = document.querySelectorAll( 'table' );
    return Array.from( batch );
}
</script>


# Command Buttons

These are exposed by the `chachi.js` module.

<div id="t_cmdbtn"></div>

| Command   | Description           | Symbol   |
|-----------|-----------------------|----------|
| Run       | Evaluate Editor Input | runInput |
| 🗑️        | Clear Output          | clearOutput |
| ❑ Editor  | Full Screen Editor    | zoomEditor  |
| ❑ Output  | Full Screen Output    | zoomOutput  |
| ❑ Canvas  | Full Screen Canvas    | (see Canvas Ops) |
| ⓘ    | Show Help             | showMathHelp |
| 📋   | Online Clipboard      | onlineClipboard |
| 📽️   | Math Olympiad Videos  | mathOlympiad |
| CE   | Clear Editor   | (internal) |
| M    | Memory Write   | (internal) |
| R    | Memory Read    | (internal) |

<script>
_K_ = t_cmdbtn.nextElementSibling;
_K_.id = "cmdbtnTable";
</script>


# Examples

If you need to see some examples of `Chachi` source code,
check out these links.

[mdn-canvas]: 
<https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas> 
"Canvas Reference ~ MDN"
[mdn-context]: 
<https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D> 
"Context Reference ~ MDN"


- [Examples](./chachi-examples.html)
- [Canvas Reference][mdn-canvas]
- [Context Reference][mdn-context]


# Canvas Operations

These are exposed by the `graph.js` module.

<div id="t_canvas"></div>

| Command      | Description |
|--------------|-------------|
| _rgb  | Compose CSS rgb tuplet |
| _rgba | Compose CSS rgba tuplet |
| getContext   | Get Canvas 2D Context |
| clearCanvas  | Fill Canvas w/ Color |
| showCanvas   | Make the Canvas Visible |
| hideCanvas   | Make the Canvas Invisible |
| toggleCanvas | Toggle Canvas Visibility |
| zoomCanvas   | Request Canvas Full Screen |
| rotateXY     | Rotate a Point in 2D Space |
| drawIsometricGrid  | Draw Isometric Grid (3 axis) |
| drawCartesianGrid  | Draw Isometric Grid (2 axis) |
| drawGridLines | Draw Partial Grid (1 axis) |
| getCanvasCenter | Centerpoint for canvas |
| lineSeg | Draw line segment |
| ray     | Draw ray |
| spoke   | Draw radial spoke |
| circle     | Draw circle outline |
| circleFill | Draw circle w/ filled interior |
| rectangle  | Draw rectangle outline |
| rectangleFill | Draw rectangle w/ filled interior |

<script>
_K_ = t_canvas.nextElementSibling;
_K_.id = "canvasTable";
</script>


# Math Operations

These are exposed by various modules.

<div id="t_math"></div>

| Function | Description | Module | Notes |
|---|---|---|---|
| int    | Cast to Integer        | math.js |
| float  | Cost to Floating Point | math.js |
| ceil   | Next More Positive Integer | math.js |
| floor  | Next More Negative Integer | math.js |
| round  | Nearest Integer | math.js |
| trunc  | Truncate Fractional Digits | math.js |
| snap   | Adjust Numerical Precision | math.js |
| abs    | Absolute Value | math.js |
| sgn    | Algebraic Sign [-1, +1] | math.js |
| sgnz   | Algebraic Sign [-1, 0, +1] | math.js |
| rnd    | Random Real Number | math.js |
| irnd   | Random Integer | math.js |
| pow    | Raise to Exponent | math.js |
| pow2   | Powers of 2  | math.js |
| pow10  | Powers of 10 | math.js |
| sqrt   | Square Root | math.js |
| cbrt   | Cube Root   | math.js |
| exp    | Natural Exponential | math.js |
| log    | Natural Logarithm   | math.js |
| log2   | Base-2 Logarithm  | math.js |
| log10  | Base-10 Logarithm | math.js |
| logn   | Base-N Logarithm  | math.js |
| rootn  | Primary Nth Root  | math.js |
| square | N-squared | math.js |
| cube   | N-cubed   | math.js |
| cruxx  | Difference of Squares | math.js |
| crux   | Squared Difference | math.js |
| zeta   | Self Dot Product | math.js |
| zulu   | Absolute Difference | math.js |
| d2r    | Degrees to Radians | math.js |
| r2d    | Radians to Degrees | math.js |
| sin    | Sine    | math.js |
| cos    | Cosine  | math.js |
| tan    | Tangent | math.js |
| asin   | Inverse Sine    | math.js |
| acos   | Inverse Cosine  | math.js |
| atan   | Inverse Tangent (two quadrant) | math.js |
| hypot  | Hypotenuse | math.js |
| atan2  | Inverse Tangent (four quadrant) | math.js |
| euler  | Modulus and Argument | math.js |
| normal | Normalize Vector | math.js |
| now    | Current Date and Time | math.js |
| time   | Current Time | math.js |
| date   | Current Date | math.js |
| clock  | System Clock | math.js |
| stamp  | Cool Date Stamp | math.js |
| disc   | b*b - 4*a*c | mathplus.js |
| quadratic | Roots of Quadratic Equation | mathplus.js | 
| lambertW  | Lambert W | mathplus.js |
| xpx     | X to the power of X | mathplus.js |
| sqrti   | Integer Square Root | factor.js |
| gcf     | Greatest Common Factor | factor.js |
| lcm     | Least Common Multiple  | factor.js |
| acf     | All Common Factors | factor.js |
| apf     | All Prime Factors  | factor.js |
| multiples | First N Multiples   | factor.js | 
| factors   | Factors of N        | factor.js |
| fact      | Factorial           | factor.js |
| isect     | Interection of Sets | factor.js |
| vec       | Construct Cartesian Vector | mathvec.js |
| polar     | Construct Polar Vector | mathvec.js |
| size      | Construct 2D Size   | mathvec.js |
| rect      | Construct Rectangle | mathvec.js |
| eratosthenes  | Sieve of Eratosthenese   | factor.js | 
| math.evaluate | Evaluate Math Expression | math.js | 1 |

## Notes

1. Third Party Module

<script>
_K_ = t_math.nextElementSibling;
_K_.id = "mathTable";
</script>


# Math Helper Functions


<!--
<div id="t_canvas"></div>
<script>
_K_ = t_canvas.nextElementSibling;
_K_.id = "canvasTable";
</script>
-->

These are exposed internally by the `jasoom.js`
module, using the `__` accessor.

| Function    | Description | Notes  |
|-------------|-------------|--------|
| __.vec      | 6D Vector \{ x, y, z, u, v, w \} | 1, 2 |
| __.square   | N-Squared | 5 |
| __.delta    | Squared Difference | 6 |
| __.lerp     | Linear Interpotion |
| __.split    | Half-Split |
| __.project  | Project 1D Ray |
| __.combine  | Combine Scalars |
| __.range    | Create Range Limits |
| __.clamp    | Clamp| 7 |
| __.wrap     | Wrap | 8 |
| __.gamma    | Gamma Correction |
| __.pr       | Probability | 4 |
| __.npr      | Permutations |
| __.ncr      | Combinations |
| __.fact     | Factorial | 3 |
| __.fibo     | Fibonnaci | 3 |

## Notes

1. { x, y=f(x), z=xx, u=yy, v=xy, w=0 }
2. Generated by `kantos`
3. Uses recursion
4. Incomplete
5. Same as `square`
6. Same as `crux` and `sarkoja`
7. Same as `mid`
8. Modulo, but guaranteed `n >= 0`


# Event Logging

These are exposed internally by the `jasoom.js`
module, using the `__` accessor.

| Symbol    | Description | Type |
|-----------|-------------|------|
| __.add    | Add log entry   | Function |
| __.reset  | Reset log       | Function |
| __.status | Show log status | Function |
| __.track  | Log Entries     | Array |


# Numerical Methods

These are exposed by the `transcend.js`
module.

They're well-known versions of functions exposed
by the `jasoom.js` module for numerical analysis.

| Function      | Description | Related |
|---------------|-------------|---------|
| bisection     | Search by Half-Split | hunt |
| newtonRaphson | Search by Newton     |

These are exposed by the `jasoom.js` module.

| Function      | Description | Related |
|---------------|-------------|---------|
| tardos  | Verify Argument is a Function |
| tarkas  | Verify Argument is a Number |
| sola    | Difference Squared (scalar) |
| sarkoja | Difference Squared (vector) |
| dejah   | Series Generator (iterator) |
| carter  | Series Set Builder |
| sniff   | Linear Search for Best Guess |
| hunt    | Binary Search for Best Guess |
| foray   | Try-Catch Wrapper                 | han |
| kantos  | Generate sample point { x, f(x) } |
| Woola   | Set Builder / Search Arguments |


# Miscellaneous

These functions are exposed by various modules.

They're used primarily by the system.

## chachi.js

| Function | Description | Module  |
|----------|-------------|---------|
| includes | Report imported module | chachi.js |
| cls    | Clear Console | chachi.js |
| again  | Reload Page  | chachi.js |
| main   | Page Initialization | chachi.js |
| han    | Try-Catch Wrapper | chachi.js |
| persist   | Memory Write | chachi.js |
| recover   | Memory Read | chachi.js |
| memory    | Memory Read/Write | chachi.js |
| server    | Choose Server | chachi.js |
| button    | Find Button by Caption | chachi.js |
| modified  | Modified Indication ON/OFF | chachi.js |
| show   | Replace Output Text | chachi.js | 
| clearOutput  | Clear Output Text | chachi.js | 
| clearInput   | Clear Input Text | chachi.js | 
| appendInput       | Append Input Text | chachi.js |
| appendMathFunction| Math Button Event Handler | chachi.js |
| runInput       | Evaluate Input as JavaScript | chachi.js |
| solveInput     | Alias for runInput | chachi.js |
| solve | AutoRun Event Handler | chachi.js |
| autoRun | Read AutoRun Checkbox State | chachi.js |
| fullScreen | Request Full Screen       | chachi.js |
| zoomEditor    | Request Full Screen (sip)  | chachi.js |
| zoomOutput    | Request Full Screen (sop)  | chachi.js |
| preserveState | Write State to Cache | chachi.js |
| restoreState  | Read State from Cache | chachi.js |
| showMathMenu   | Make the Math Menu Visible | chachi.js |
| hideMathMenu   | Make the Math Menu Invisible | chachi.js |
| toggleMathMenu | Toggle Math Menu Visibility | chachi.js |
| initMathMenu | Generate Math Button Menu | chachi.js |

## mathplus.js

| Function | Description | Module  |
|----------|-------------|---------|
| mathPlusHelp | Show MathPlusDoc in Console | mathplus.js |

## editables.js

| Function | Description | Module  |
|----------|-------------|---------|
| editables    | Set Editability for Gadgets | editables.js |
| editable     | Set Editability for Gadget | editables.js |
| kvp          | Compose Key-Value Pair | editables.js |

## keisha.js

| Function | Description | Module  |
|----------|-------------|---------|
| keisha       | Keyboard Event Handler | keisha.js |
| insertText   | Insert Text into Editor  | keisha.js |
| initEditor   | Initialize Editor       | keisha.js |

## mathvec.js

| Function | Description | Module  |
|----------|-------------|---------|
| degToRad | Same as d2r | mathvec.js |
| radToDeg | Same as r2d | mathvec.js |

## prep.js

| Function | Description | Module  |
|----------|-------------|---------|
| json | Format object as JSON | prep.js |
| prep | Prepare an object for display as plain text | prep.js |
| zara | Helper for recursive formatting | prep.js |

## jarvis.js

| Function | Description | Module  |
|----------|-------------|---------|
| jarvis       | Code Analysis Assistant | jarvis.js |

## thor.js

| Function | Description | Module  |
|----------|-------------|---------|
| thor         | Script / Cache Management | thor.js |

## tigg.js

| Function | Description | Module  |
|----------|-------------|---------|
| TiGG | Tiny GUID Generator | tigg.js |


# Accessors

Accessors are global singleton objects used to
aggregate related methods and/or properties.

Oftentimes, the methods exposed by accessors are
also exposed as global functions, constants, variables,
or even other accessors.

Accessors are supposed to be registed at load time,
but this isn't guaranteed for all.

| Symbol         | Module        |
|----------------|---------------|
| AppModules     | chachi.html   |
| ChachiApp      | chachi.js     |
| ChachiGadgets  | chachi.js     |
| ClassList      | chachi.js     |
| HostRoutes     | chachi.js     |
| CoreDoc        | coredoc.js    |
| Editables      | editables.js  |
| FactorAPI      | factor.js     |
| GraphAPI       | graph.js      |
| CanvasOptions  | graph.js      |
| JasoomAPI      | jasoom.js     |
| __             | jasoom.js     |
| MathPlus       | mathplus.js   |
| TiGG           | tigg.js       |
| thor           | thor.js       |


# Special Accessors

Some objects are special cases. These are both a function and
an accessor for related methods.

These include `TiGG` and `thor`.


# GUID Generation

As a function, `TiGG` generates a single GUID.

Listed below are features accessible by `TiGG`.

| Symbol | Type | Description |
|--------|-------------|------|
| raw         | Function | Generate Text Document w/ one GUID per line |
| bulkTitles  | Function | Generate List of GUIDs (one per entry) |
| bulk        | Function | Alias for 'bulkTitles' (deprecated) |
| decalRange  | Function | Generate Range of Decal Definitions w/ tikeys |
| decalTable  | Function | Generate Table of Decal Definitions w/ tikeys |
| codePoints  | Function | Generate String w/ List of Decal Code Points |
| friends     | Array    | List of Friend Names |
| keyDef      | Array    | Module Key   Definition [ decal, codePoint, tikey, tidate ] |
| decalDef    | Array    | Module Decal Definition [ decal, tikey, tidate ] |
| linkDefs    | Object   | Module Link Definitions (resources) |
| details     | Object   | Module Details (title, version, etc.) |
| manifest    | Object   | Module Manifest |


# Jubilee from Transcenders

These are exposed by the `juba.js`
module.

Jubilee helps export APIs that are developed on the fly using
the browser's debug console.

Jubilee is officially part of the `Transcenders` project. The copy
maintained here is a fork.

| Symbol    | Type     | Description         |
|-----------|----------|---------------------|
| Juba      | Object   | Module Accessor |
| entry     | Function | List of Member Properties [ key, type, value ] |
| json      | Function | Compose API as JSON Document |
| slurp     | Function | Compose as JSON and Assign to Editor Gadget |
| decalDef  | Array    | List of Decal Properties [ decal, codepoint, description ] |
| keyDef    | Array    | List of Module Key Properties [ decal, tikey, tidate ] |
| keys      | Object   | Map of Module Resource Key/Value Pairs |
| linkDef   | Object   | Map of Home URL Key/Value Pairs |
| details   | Object   | Map of Module Details Key/Value Pairs |
| friends   | Array    | List of Friend Names |
| manifest  | Object   | Module Manifest { title, schema, doc } |


# Cache Documents

These are exposed by the `joni.js`
module.

| Symbol | Type     | Description         |
|--------|----------|---------------------|
| load   | Function | Load Cache Document |
| save   | Function | Save Cache Document |
| keys   | Function | Get Cache Keys      |
| joni   | Function | Run Joni Command    |


# Thor Script Manager

As a function, `thor` imports a script. This causes
a new `script` element to be created and appended to
the document's `head` element.

Listed below are features accessible by `thor`.

| Symbol               | Type     | Description |
|----------------------|----------|------|
| decals               | Array    | Decal Definitions (Arrays) |
| findScript           | Function | Lookup Script Module by URL |
| removeScript         | Function | Remove Script Module by URL |
| getScripts           | Function | Get all Script Modules as Array  |
| getScriptURLs        | Function | List of Source URLs for Imported Scripts |
| getScriptAttribs     | Function | List with same Attribute from all Scripts |
| getScriptDetails     | Function | Table with one or more Attribute(s) per Script module |
| getCacheKeys         | Function | List of Cache Keys |
| getCacheHints        | Function | Table with Cache Keys and Partial Values |
| getCacheHints.SCHEMA | Array    | List of Column Names for Cache Hints |
| describe             | Function | List of Object Descriptors { member, type, value } |
| mjolnir              | Function | String Containing JSON for an Object |
| hammer               | Function | String Containing JSON for any Data Type |
| perceive             | Function | Show Object Descriptors in Debug Console |
| perceiveCacheHints   | Function | Show Cache Hints in Debug Console |
| keys                 | Object   | Module Key Definitions |
| details              | Object   | Module Details |
| manifest             | Object   | Module Manifest |

## References

NEW! Thor has his own help file.

- [Thor Help](./thor-help.html)


# Core Documents

The global `CoreDoc` accessor parses and composes core documents.

At present, it exposes a single method: `report`. This method
parses a core document and displays it as a table in the console.

Several other modules expose core documents that can be examined
using this method.

| Symbol            | Module        |
|-------------------|---------------|
| EditablesDoc      | editables.js  |
| FactorDoc         | factor.js     |
| GraphDoc          | graph.js      |
| JasoomDoc         | jasoom.js     |
| Juba.manifest.doc | juba.js       |
| KeishaDoc         | keisha.js     |
| MathPlusDoc       | mathplus.js   |
| VectorDoc         | mathvec.js    |
| vec.coreDoc       | mathvec.js    |
| polar.coreDoc     | mathvec.js    |
| size.coreDoc      | mathvec.js    |
| PrepDoc           | prep.js       |
| thor.manifest.doc | thor.js       |
| TiGG.manifest.doc | tigg.js       |
| joni.cdoc         | joni.js       |


# ClassList

The `ClassList` accessor is used to determine whether
a global object should be treated as a class when
a command for it is inserted into the editor.

This is important because function calls don't
require the `new` keyword for invocation.

Constructing instances of object does require this.


# Gadgets

Chachi has an accessor to the most important gadgets
(HTML elements). This singleton is named `ChachiGadgets`.

This concludes:

- Editor
- Output
- Canvas
- Math Menu Container
- Auto Run Checkbox

The actual code is as follows:

```javascript
const ChachiGadgets = {
    sip,            // Editor
    sop,            // Output
    canvas,         // Canvas
    menuContainer,  // Math Menu Container 
    autoRunEnable   // Auto Run Checkbox
};
```

# Host Routes

Multiple hosts on the LAN have instances of `Chachi`.
To make navigation simpler between hosts, `Chachi` now
offers the `HostRoutes` accessor.

This object contains keys, which can be uses to obtain
a partial path for each host, as well as methods to
compose full URLs and open popup windows for any host.
There's also a method for obtaining keys.

The `HostRoutes` accessor has the following members:

| Symbol      | Type   | Description |
|-------------|--------|-------------|
| omega       | String | http://dave-omega/   |
| legacy      | String | http://dave-legacy/  |
| tower       | String | http://dave-tower/   |
| ryzen       | String | http://dave-ryzen/   |
| primary     | String | https://nyteowldave.github.io/ |
| keys        | Method | Read keys for HostRoutes    |
| composeURL  | Method | Compose Complete URL for Chachi |
| redirect    | Method | Show remote Chachi instance |
| report      | Method | Show this table |

There are a couple of things to be aware of when using
this object.

First is that the `keys` method only returns string properties.
These all contain partial URLs, which make them ideal for
passing to the `composeURL` or `redirect` method.

This leads into the second consideration. Both `composeURL`
and `redirect` can accept a key or the value associated
with that key.

For example:

```
// Pass by value
HostRoutes.redirect( HostRoutes.legacy );
// Pass by key
HostRoutes.redirect( "legacy" );
```

The `redirect` method looks for `http://` at the start
of the argument. If missing, the argument is treated
as a self-referential key. If present, the argument
is taken literally.


# Module Registry

The module registry is a key component shared by
a variety of projects. The implementation details
vary at times, but the central concept remains
the same.

The registry is available for externally loaded
script modules to register themselves in a consistent
way. This simplifies debugging tasks like module load
failures and helps power users glean more information
about which features are available.

The accessor for registry features is named `AppModules`.

In general, the pattern is as follows:

1. Each module calls the `add` method on `AppModules` as it's being loaded.
2. Core Documents can be registered with the `doc` method.
3. The user may examine loaded modules with the `report` method.

Registered modules are stored in a property named `map`. This is an
instance of a `Map` object.

Core documents are stored in the property named `core`. This is an
instance of `Array`.

The `report` method should be invoked from the debug console, since
the results are displayed there in table form.

These same rules apply to `composeURL`, since it's called by `redirect`
internally.

---

> 🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega

<script>
addEventListener( 'load', () => { 
    editables( 'td'  );
    editables( 'pre' );
    editables( 'h1'  );
} );
</script>
