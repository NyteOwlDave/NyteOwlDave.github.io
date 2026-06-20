/*

    bump-app.js

    The application itself

    Dave Wellsted, NCS
    2020-MAR-14

    In order to keep the graphics code clean and focused on the
    aread of concern (bump mapping), we've separated the code
    into two modules.

    This is the code that doesn't deal strictly with bump mapping.

*/
 
// Psi = defined
const Ѱ = (arg) => typeof arg !== "undefined"

// 
// Output
function _εμιτ(s) {
  console.log(s);
}

// Report object as initialized
function Ɗσηε(name) {
    _εμιτ("➜ Ɗσηε", name)
    return "OK"
}

// Whether arg is an object
function is_object(arg) {
    return typeof arg === "object"
}

// Animation callback
let image_changed = false
function OnTimerTick(e) {
    if (!App.paused) {
        App.lightPos+=App.lightSpeed
    }
    App.renderFrame()
    if (image_changed) {
        image_changed = false
        App.resetImage()
    }
    requestAnimationFrame(OnTimerTick)
}

// Application singleton
const App = {
  // For reporting
  name : "App",
  // Light position
  lightPos : 0,
  // Light speed
  lightSpeed : 1,
  // Light speed step size
  lightStep : 0.1,
  // Pause flag
  paused : false,
  // Startup entry point
  run: function() {
    // Fixup the NCS logo as a hyperlink
    const elem = idAppBarLogo
    elem.onclick = function() {
      location = "https://nyteowldave.github.io"
    }
    elem.style = "cursor : pointer"
    // Initialize drag-drop
    DragDropUtil.init()
    // Reset the image
    App.resetImage()
    // Begin animation
    App.startTimer()
    // Report initialized
    Ɗσηε(App.name)
  },
  // Begin animation
  startTimer: function() {
    requestAnimationFrame(OnTimerTick);
  },
  // Capture image
  captureImage: function() {
    const C̅ = idCanvas;
    const G̅ = C̅.getContext('2d')
    const I̅ = idImage;
    const w = 320
    const h = 200
    C̅.width = w;
    C̅.height = h;
    I̅.width = w;
    I̅.height = h;
    G̅.drawImage(I̅,0,0,w,h)
    return G̅.getImageData(0,0,w,h)
  },
  // Draw an image to the canvas
  drawImage: function(img) {
    const C̅ = idCanvas;
    const G̅ = C̅.getContext('2d')
    G̅.putImageData(img,0,0)
  },
  // Render next frame based on light position
  renderFrame: function() {
    const me = App;
    const I̅ = BumpTerrain.render(me.lightPos)
    me.drawImage(I̅)
  },
  // Reset image
  resetImage : () => {
    // Capture the image
    const img = App.captureImage()
    // Initialize bump map singleton from image
    BumpTerrain.init(img)
    // Render first frame
    App.renderFrame()
  },
  // Load first file from list
  // The arg is a FileList object,as from drag-drop
  // or the <input type='file'> element.
  load_file(files, cb) {
    let file=null
    for (let i = 0; i < files.length; i++) {
        const f = files[i]
        if (f.type.startsWith('image/')) { 
            file = f
            break
        }
    }
    if (!file) return
    const reader = new FileReader()
    reader.onload =  function(e) {
        const res = e.target.result
        cb(res)
    };
    reader.readAsDataURL(file)
  },
  // Choose image file(s) for upload
  choose_file : () => {
    const me = App
    function handleFiles(files) {
        function got(result) {
          idImage.onload = function() {
            image_changed = true
          }
          idImage.src = result
        }
        me.load_file(files, got)
    }
    const input = document.createElement("input")
    input.type = "file"
    input.setAttribute("multiple", "false")
    input.setAttribute("accept", "image/*")
    input.oninput = function(e) {
        const files = e.target.files
        handleFiles(files)
        return true
    }
    input.click()
    return me
  },
  // Media control button presses
  media : {
    // Update speed
    speed : (n) => {
        const lo = parseFloat(idSpeed.getAttribute("min"))
        const hi = parseFloat(idSpeed.getAttribute("max"))
        n = Math.max(n, lo)
        n = Math.min(n, hi)
        idSpeed.value = App.lightSpeed = n
    },
    // Pause/play
    pause : (state) => {
        if (Ѱ(state)) {
            App.paused = state ? true : false
        } else {
            App.paused = !(App.paused)
        }
        idPlay.src = App.paused ? "./art/play.png" : "./art/stop.png"
    },
    // Left arrow press
    left : () => {
        App.media.speed(App.lightSpeed - App.lightStep)
    },
    // Right arrow press
    right : () => {
        App.media.speed(App.lightSpeed + App.lightStep)
    },
  }
}

// Drag-drop support
const DragDropUtil = {

  // For reporting
  name : "DragDropUtil",

  // Where drops happen
  dropbox : null,

  // One-time initialization
  init : () => {

      const me = DragDropUtil

      function dragenter(e) {
          e.stopPropagation()
          e.preventDefault()
      }

      function dragover(e) {
          e.stopPropagation()
          e.preventDefault()
      }

      function drop(e) {
          e.stopPropagation()
          e.preventDefault()
          const dt = e.dataTransfer
          const files = dt.files
          handleFiles(files)
      }

      function handleFiles(files) {
          let n = 0
          function got(result) {
            idImage.onload = function() {
              image_changed = true
            }
            idImage.src = result
          }
          App.load_file(files, got)
      }

      function start() {
          me.dropbox = document.getElementById("idImage")
          me.dropbox.addEventListener("dragenter", dragenter, false)
          me.dropbox.addEventListener("dragover", dragover, false)
          me.dropbox.addEventListener("drop", drop, false)
      }

      start()
      Ɗσηε(me.name)
      return me
  }

}

