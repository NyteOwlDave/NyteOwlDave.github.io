
/*
    title   Play Beep for Greystoke
    id      play-beep.js
    tikey   2351bc89-9b1f-4334-b847-2f7c7d40bb25
    tidate  2025-JUL-22

    https://developer.mozilla.org/en-US/docs/Web/API/Audio_Output_Devices_API
    https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type
*/

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playBeep( frequency = 2424, duration = 42, gain = 0.1 ) {

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine'; // Simple tone (sine wave)
    oscillator.frequency.value = frequency; // Hz (440 is A4 note)
    gainNode.gain.value = gain; // Volume (0 to 1)

    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, duration);
}

_title = "Play Beep for Morpheus";
_tikey = "2351bc89-9b1f-4334-b847-2f7c7d40bb25";

console.log( "📃", _title, _tikey );

