
<style name="Imported Styles">
@import url("https://cdn.jsdelivr.net/npm/siimple-icons/siimple-icons.css");
@import url("http://dave-legacy/rt/style/std.css");
@import url("http://dave-legacy/sio/style/siox.css");
</style>

<style name="IFRAME Styles">
iframe {
    display : inline-block;
    width   : 100%;
    height  : 20em;
}
</style>

<script>
siimple_names = ( `
address-book
align-bottom
align-center
align-left
align-middle
align-right
align-top
archive
arrow-alt-left
arrow-alt-right
arrow-alt-up
arrow-circle-down
arrow-circle-left
arrow-circle-right
arrow-circle-up
arrow-down
arrow-down-left
arrow-down-right
arrow-left
arrow-right
arrow-up
arrow-up-left
arrow-up-right
arrows
arrows-maximize
arrows-minimize
arrows-shuffle
back
backpack
backspace
bag
ban
bars
bell
bezier
bold
bolt
book
book-open
bookmark
box
briefcase
brush
bug
calendar
camera
caret-down
caret-left
caret-right
caret-up
cart
chart-area
chart-bar
chart-line
chart-pie
chat
chat-dots
check
check-circle
check-square
chevron-down
chevron-left
chevron-right
chevron-up
circle
circle-fill
circle-half
clipboard
clock
close
cloud
cloud-rain
code
code-square
coffee
compass
copy
credit-card
crop
cut
disk
dna
download
droplet
edit
emoji-confused
emoji-empty
emoji-expressionless
emoji-laugh
emoji-neutral
emoji-sad
emoji-smile
emoji-surprise
emoji-wink
envelope
erase
exclamation-circle
exclamation-square
exclamation-triangle
external-link
eye
eye-slash
file
file-check
file-dots
file-empty
file-minus
file-plus
file-x
files
fill
filter
flag
flask
folder
folder-check
folder-minus
folder-plus
folder-x
folders
frame
front
fullscreen
fullscreen-exit
gift
git-branch
git-commit
git-merge
git-pull-request
globe
grid
hamburger
headphones
heart
history
history-redo
history-undo
home
image
inbox
info-circle
info-square
italic
keyboard
laptop
layout
lightbulb
line
line-hr
line-vr
link
location
lock
login
logout
map
megaphone
message
microphone
minus
minus-circle
minus-square
mobile
money
monitor
moon
mouse
mug
music-note
music-player
news
note
notebook
notepad
object-group
object-ungroup
palette
path
pause
pen
pencil
pin
play
plus
plus-circle
plus-square
pointer
postcard
presentation
printer
puzzle
question-circle
question-square
quote
rocket
ruler
search
send
server
shapes
share
shield
shield-check
shield-x
siimple
sliders
soda-cup
square
square-fill
square-half
stack
star
star-half
step-backward
step-forward
stop
sun
table
tablet
terminal
text
text-center
text-justify
text-left
text-right
ticket
togo-cup
tools
tower
trash
trophy
tv
tv-retro
umbrella
underline
unlock
upload
user
user-circle
user-minus
user-plus
user-x
video
virus
volume-down
volume-mute
volume-up
wallet
window
x
x-cricle
x-square
zoom-in
zoom-out
` );
</script>

<fieldset center>
<legend>Siimple Icon Names</legend>
<textarea id="sip"></textarea>
</fieldset>

<div center>
<iframe src="https://siimple.josemi.xyz/icons/"></iframe>
</div>

<header>
  <i class="si-home"           style="font-size: 32px;"></i>
  <i class="si-emoji-confused" style="font-size: 32px; color: #f0a905;"></i>
  <i class="si-bars"           style="font-size: 32px;"></i>
</header>

<script>
let siimple_name_list = [];
function init() {
    sip.spellcheck = false;
    sip.wrap = "off";
    sip.classList.add( "siox" );
    siimple_name_list = parseCoreList(
        siimple_names
    );
    sip.value = siimple_name_list.join( "\n" );
}
</script>

<script name="Page Load Event Handler">
function main( event ) {
    lando( init );
}
addEventListener( "load", main );
</script>

<script name="Try-Catch Wrapper">
function lando( action, arg ) {
    try {
        return action( arg );
    } catch ( e ) {
        // bummer( e );
        alert ( e );
        throw ( e );
    }
}
</script>

<script name="List Ops">
function parseCoreList( doc ) {
    return (
        ( String( doc || "" ) )
        . trim()
        . split( "\n" )
        . map( s => s.trim() )
        . filter( s => (!! s ) )
    );
}
</script>


