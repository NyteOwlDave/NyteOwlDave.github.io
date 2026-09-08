<head> <link rel="icon" href="./icons/mynotepad.png" /> </head>

<style>
@import url("./../std/style/every-page.css");
</style>

----------------------------------------------------------------

# My Notepad Coordinator

----------------------------------------------------------------

## Introduction

Since Web-Based front-end only apps tend to scatter data all
over the place, coordination and synchronization are crucial
to maintaining coherent, consistent, and up to date information.

This applet serves that role for the `MyNotepad` API Module.
The `Session Editor` can get multiple versions into Session
Storage. This app then faciliates merging diverse collections
or related data.

----------------------------------------------------------------

## Usage

I can think of a few possible strategies for merging raw `JSON`
objects. Not the internal logic -- that's trivial. I mean the
steps required by the User while working with the Interface.

The first might be to provide a list of Store Keys for some
previoulsy saved Entries.

Another approach might have all Entries previously saved as
a JSON-encoded array in a single Store Entry.

Then there's the choice I've settled on. Make it easy to create
`TEXTAREA` elements. Permit the user to create one such gadget
per JSON object. Then it's a matter of pasting, loading, or
even writing entries as needed.

With a final __Merge__ button to combine the parts.

----------------------------------------------------------------

