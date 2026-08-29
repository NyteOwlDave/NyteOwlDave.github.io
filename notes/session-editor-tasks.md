<head> <link rel="icon" href="./icons/mynotepad.png" /> </head>

<style>
@import url("./../std/style/every-page.css");
</style>

<style>
p { text-align : center; }
h2 {
    margin-top : 64px;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[mdn-zoom]:
<https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen>
"Request Full Screen ~ MDN Article"

[mdn-local]:
<https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage>
"Local Storage ~ MDN Article"

[mdn-session]:
<https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage>
"Session Storage ~ MDN Article"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[sce-notes]:
<./sce-notes.html>
"Simple Code Editor Notes"

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[home]: <./mynotepad.html>

[editor]: <./session-editor.html> "Session Editor"

----------------------------------------------------------------

# Session Editor Tasks

----------------------------------------------------------------

> [Home][home]
> [Session Editor][editor]
> [SCE Notes][sce-notes]
> [File Sytem](./)

----------------------------------------------------------------

## [`✅` Accept Changes][sce-notes]

This task __Writes__ the contents of the SCE Editor to
the __Session Storage__.

The __Session Key__ is "Session Editor Content".

This is a single __Plain Text__ entry.

----------------------------------------------------------------

## [`❎` Reject Changes][sce-notes]

This task __Reverses All Changes__ made to SCE Editor Content
since the last __Refresh__.

----------------------------------------------------------------

## [`🔄` Refresh Editor][sce-notes]

This task __Reads__ the contents of the SCE Editor from 
the __Session Storage__.

It also stores a copy in the `recent` property for the
SCE Editor.

This backup is used by the __Reject__ task.

The __Session Key__ is "Session Editor Content".

This is a single __Plain Text__ entry.

----------------------------------------------------------------

## [`🔐` Show Session Keys][mdn-session]

This task displays __Session Keys__ in a popup dialog.

Since the __Session Store__ is usually sparsely populated, there
should be no issue with overly long lists.

----------------------------------------------------------------

## [`💠` Zoom Editor][mdn-zoom]

This task Requests __Full Screen__ mode for the SCE Editor only.

----------------------------------------------------------------

## [`🏠` Home](./mynotepad.html)

This task returns the browser to the __Home Page__.

For the present, this is 
the [My Notepad](./mynotepad.html) page.

----------------------------------------------------------------

## [`🔏` Persist Session][mdn-local]

This task composes the __Entire Session Storage__ content as a
single `JSON` string.

It then writes this string to a __Local Storage Entry__.

The user is required to confirm this task.

The __Store Key__ is "Session Editor Manuscript".

### Important

It's important to distinguish between a __Single Entry__ in the
__Session Storage__ from the __Compound Document__ stored in
__Local Storage__.

The former is treated as __Plain Text__. The latter is treated as
a __JSON Object__.

----------------------------------------------------------------

## [`🔓` Recover Session][mdn-local]

This tasks __Reads__ a previously persisted entry from the
__Local Storage__.

As mentioned above, this entry as a __Compound Document__ in
`JSON` format.

The __Store Key__ is "Session Editor Manuscript".

The `JSON` is parsed. What happens next depends on the
__Type__ of the parser result.

Ordinarily, the result is a __Vanilla Object__. This object
represents zero or more __Session Storage__ entries. Each key
is treated as a __Session Key__. Values for each entry are
written to the __Session Storage__. This is a __MERGE__. Any
existing entries which aren't overwritten remain as they were.

__Arrays__ and __Primitives__ are detected and processed
different.

__Arrays__ are written to __Session Store__ as `JSON`, using
special __Session Key__ : `Imported Array Object`.

__Primitives__ are <i>coerced</i> to type `String`. They're
then written to __Session Store__ using a 
special __Session Key__ : `Imported Primitive`.

----------------------------------------------------------------

## [`🗑️` Remove Session][mdn-local]

This task __Removes__ the __Compound Document__ from
the __Local Storage__.

This should be a rare occurance. Generally speaking, it's
better to preserve work (just in case), unless there's a
valid reason to destroy something.

We'd recommend first doing a __Backup__ of the entire
__Local Storage__ content before removing data.

----------------------------------------------------------------

<script>
; doc = document
; doc . title = ( `Session Editor Tasks` );
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

