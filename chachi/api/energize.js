
/* 
    title   Energize for Morpheus
    id      energize.js
    tikey   3655ed06-764b-48dc-b202-f7287c0043b1
    tidate  2025-JUL-28    
*/

function deenergized() {
    throw new Error( "Function not implemented" );
}

function energize( url ) {
    bruce( url );   // legends.js
}

function whiteboards() {
    energize( `https://whiteboard.cloud.microsoft/` );
}

function notebooks() {
    energize( `https://www.onenote.com/notebooks` );
}

function sites() {
    energize( `https://sites.google.com/` );
}

function editors() {
    energize( `https://sites.google.com/view/morning-swill/links/editors` );
}

function swill() {
    energize( `https://sites.google.com/view/morning-swill/` );
}

function commandCentral() {
    energize( `https://sites.google.com/view/dww-commands/` );
}

function wellsteds() {
    energize( `https://sites.google.com/view/wellsted-family/` );
}

function johnny5() {
    energize( `https://sites.google.com/view/johnny-five/` );
}

function festus() {
    energize( `http://173.217.64.99:4242/` );
}

function system42() {
    energize( `http://173.217.64.99:4242/42/system-42.html` );
}

function morpheus() {
    energize( `https://nyteowldave.github.io` );
}

function greystoke() {
    energize( `https://nyteowldave.work` );
}

function greystokeIP() {
    energize( `http://198.91.25.240` );
}

function localHost() {
    energize( `http://localhost` );
}

function emojiKeyboard() {
    energize( `https://emojigraph.org/copy-keyboard/` );
}

function simpleIcons() {
    energize( `https://siimple.xyz/icons/` );
}

function thirdPartyContent() {
    energize( `https://nyteowldave.github.io/chachi/app-content.html` );
}

function chachiCalculator() {
    energize( `https://nyteowldave.github.io/chachi/chachi.html` );
}

function mathJax() {
    energize( `https://docs.mathjax.org/en/latest/` );
}

function mathJS() {
    energize( `https://mathjs.org/examples/index.html` );
}

function clipboardApp() {
    energize( `https://live-clipboard.netlify.app` );
}

energize.api = {
    self : energize,
    todo : deenergized,
    whiteboards, notebooks,
    swill, editors, 
    commandCentral, wellsteds,
    festus, system42,
    johnny5,     
    greystoke, greystokeIP,
    localHost, 
    mathJax, mathJS,
    simpleIcons, thirdPartyContent,
    morpheus, chachiCalculator,
    clipboardApp
};

energize.coreDoc = `
energize        | Open Tab or Popup Window
deenergized     | Throw Not Implemented Exception
clipboardApp    | Online Clipboard App
whiteboards     | MS Whiteboards
notebooks       | MS Notebooks
sites           | Google Sites
swill           | Morning Swill Page
editors         | Editors Page
commandCentral  | Command Centrl Page
johnny5         | Johnny5 Page
wellsteds       | Wellsted Family Page
festus          | Festus (Optimum IP)
system42        | System 42 (via Festus)
morpheus        | Morpheus Host
greystoke       | Greystoke Host (DNS)
greystokeIP     | Greystoke Host (IP4)
localHost       | Local Host
mathJax         | 📔 MathJax Documentation
mathJS          | 📔 MathJS Documentation
emojiKeyboard   | Emoji Keyboard
simpleIcons     | Simple Icons
thirdPartyContent | Third Party Content
chachiCalculator  | Chachi Calculator
`;


// 👋 Register Module
if ( "object" === typeof AppModules ) {
    const add = AppModules.add;
    if ( "function" === typeof add ) {
        add( "energize", { energize } );
    }
    const doc = AppModules.doc;
    if ( "function" === typeof doc ) {
        doc( { EditablesDoc } );
    }
} else {
    console.log( '📃', 'Loaded Local Module:', 'energize.js' );
}


/*
    🅻🅰🆂🆃 🆄🅿🅳🅰🆃🅴🅳 ~ 2025-AUG-11 ~ Omega
*/
