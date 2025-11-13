---
title: "luxe: selection"
description: API version 2025.11.1
---
## `luxe: selection{:lx}` module

- [Selection](#selection)   

---


### Selection
`import "luxe: selection" for Selection{:lx}`
> no docs found

- [CHANGE](#Selection.CHANGE)
- [DESELECT](#Selection.DESELECT)
- [SELECT](#Selection.SELECT)
- [INVALID](#Selection.INVALID)
- [PRE_CHANGE](#Selection.PRE_CHANGE)
- [id](#Selection.id)
- [events](#Selection.events)
- [selected](#Selection.selected)
- [any](#Selection.any)()
- [is_selected](#Selection.is_selected)(**value**: `Any{:lx}`)
- [is_selected](#Selection.is_selected+2)(**value**: `Any{:lx}`, **non_transient_only**: `Bool{:lx}`)
- [is_invalid_selection](#Selection.is_invalid_selection)(**value**: `Any{:lx}`)
- [count](#Selection.count)
- [first](#Selection.first)
- [last](#Selection.last)
- [transient](#Selection.transient)
- [new](#Selection.new)(**context**: `String{:lx}`)
- [destroy](#Selection.destroy)()
- [emit](#Selection.emit+2)(**kind**: `Any{:lx}`, **items**: `List{:lx}`)
- [start_transient](#Selection.start_transient)(**change**: `Fn{:lx}`)
- [end_transient](#Selection.end_transient)()
- [sync](#Selection.sync)(**other**: `Selection{:lx}`)
- [unsync](#Selection.unsync)(**other**: `Selection{:lx}`)
- [deselect](#Selection.deselect)()
- [deselect](#Selection.deselect)(**item**: `Any{:lx}`)
- [deselect_items](#Selection.deselect_items)(**items**: `List{:lx}`)
- [select](#Selection.select)(**item**: `Any{:lx}`)
- [select](#Selection.select+2)(**item**: `Any{:lx}`, **plural**: `Bool{:lx}`)
- [select_items](#Selection.select_items)(**items**: `List{:lx}`)
- [select_items](#Selection.select_items+2)(**items**: `List{:lx}`, **plural**: `Bool{:lx}`)
- [toggle](#Selection.toggle)(**item**: `Any{:lx}`)
- [notify](#Selection.notify)()
- [set_invalid_handler](#Selection.set_invalid_handler)(**fn**: `Fn{:lx}`)


---

<endpoint module="luxe: selection" class="Selection" signature="CHANGE"></endpoint>
<h4 class="signature_head">Selection.CHANGE</h4><a class="signature-arity" href="#Selection.CHANGE" title="Permanent link">1</a><signature id="Selection.CHANGE">

```lx
Selection.CHANGE : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="DESELECT"></endpoint>
<h4 class="signature_head">Selection.DESELECT</h4><a class="signature-arity" href="#Selection.DESELECT" title="Permanent link">1</a><signature id="Selection.DESELECT">

```lx
Selection.DESELECT : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="SELECT"></endpoint>
<h4 class="signature_head">Selection.SELECT</h4><a class="signature-arity" href="#Selection.SELECT" title="Permanent link">1</a><signature id="Selection.SELECT">

```lx
Selection.SELECT : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="INVALID"></endpoint>
<h4 class="signature_head">Selection.INVALID</h4><a class="signature-arity" href="#Selection.INVALID" title="Permanent link">1</a><signature id="Selection.INVALID">

```lx
Selection.INVALID : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="PRE_CHANGE"></endpoint>
<h4 class="signature_head">Selection.PRE_CHANGE</h4><a class="signature-arity" href="#Selection.PRE_CHANGE" title="Permanent link">1</a><signature id="Selection.PRE_CHANGE">

```lx
Selection.PRE_CHANGE : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="id"></endpoint>
<h4 class="signature_head">Selection.id</h4><a class="signature-arity" href="#Selection.id" title="Permanent link">1</a><signature id="Selection.id">

```lx
Selection.id : String
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="events"></endpoint>
<h4 class="signature_head">Selection.events</h4><a class="signature-arity" href="#Selection.events" title="Permanent link">1</a><signature id="Selection.events">

```lx
Selection.events : Events
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="selected"></endpoint>
<h4 class="signature_head">Selection.selected</h4><a class="signature-arity" href="#Selection.selected" title="Permanent link">1</a><signature id="Selection.selected">

```lx
Selection.selected : List
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="any()"></endpoint>
<h4 class="signature_head">Selection.any</h4><a class="signature-arity" href="#Selection.any" title="Permanent link">1</a><signature id="Selection.any">

```lx
Selection.any() : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="is_selected(value : Any)"></endpoint>
<h4 class="signature_head">Selection.is_selected</h4><a class="signature-arity" href="#Selection.is_selected" title="Permanent link">1</a><signature id="Selection.is_selected">

```lx
Selection.is_selected(value : Any) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="is_selected(value : Any, non_transient_only : Bool)"></endpoint>
<h4 class="signature_head">Selection.is_selected</h4><a class="signature-arity" href="#Selection.is_selected+2" title="Permanent link">2</a><signature id="Selection.is_selected+2">

```lx
Selection.is_selected(value : Any, non_transient_only : Bool) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="is_invalid_selection(value : Any)"></endpoint>
<h4 class="signature_head">Selection.is_invalid_selection</h4><a class="signature-arity" href="#Selection.is_invalid_selection" title="Permanent link">1</a><signature id="Selection.is_invalid_selection">

```lx
Selection.is_invalid_selection(value : Any) : String
```
</signature>

> returns a string as a reason if not able to select, otherwise returns null   

<endpoint module="luxe: selection" class="Selection" signature="count"></endpoint>
<h4 class="signature_head">Selection.count</h4><a class="signature-arity" href="#Selection.count" title="Permanent link">1</a><signature id="Selection.count">

```lx
Selection.count : Num
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="first"></endpoint>
<h4 class="signature_head">Selection.first</h4><a class="signature-arity" href="#Selection.first" title="Permanent link">1</a><signature id="Selection.first">

```lx
Selection.first : Any
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="last"></endpoint>
<h4 class="signature_head">Selection.last</h4><a class="signature-arity" href="#Selection.last" title="Permanent link">1</a><signature id="Selection.last">

```lx
Selection.last : Any
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="transient"></endpoint>
<h4 class="signature_head">Selection.transient</h4><a class="signature-arity" href="#Selection.transient" title="Permanent link">1</a><signature id="Selection.transient">

```lx
Selection.transient : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="new(context : String)"></endpoint>
<h4 class="signature_head">Selection.new</h4><a class="signature-arity" href="#Selection.new" title="Permanent link">1</a><signature id="Selection.new">

```lx
Selection.new(context : String) : Selection
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="destroy()"></endpoint>
<h4 class="signature_head">Selection.destroy</h4><a class="signature-arity" href="#Selection.destroy" title="Permanent link">1</a><signature id="Selection.destroy">

```lx
Selection.destroy() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="emit(kind : Any, items : List)"></endpoint>
<h4 class="signature_head">Selection.emit</h4><a class="signature-arity" href="#Selection.emit+2" title="Permanent link">2</a><signature id="Selection.emit+2">

```lx
Selection.emit(kind : Any, items : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="start_transient(change : Fn)"></endpoint>
<h4 class="signature_head">Selection.start_transient</h4><a class="signature-arity" href="#Selection.start_transient" title="Permanent link">1</a><signature id="Selection.start_transient">

```lx
Selection.start_transient(change : Fn) : unknown
```
</signature>

> Start a transient selection where changes will be stored separately and notifed of a change directly   

<endpoint module="luxe: selection" class="Selection" signature="end_transient()"></endpoint>
<h4 class="signature_head">Selection.end_transient</h4><a class="signature-arity" href="#Selection.end_transient" title="Permanent link">1</a><signature id="Selection.end_transient">

```lx
Selection.end_transient() : None
```
</signature>

> End a transient selection, read .selected before calling to capture the transient selection   

<endpoint module="luxe: selection" class="Selection" signature="sync(other : Selection)"></endpoint>
<h4 class="signature_head">Selection.sync</h4><a class="signature-arity" href="#Selection.sync" title="Permanent link">1</a><signature id="Selection.sync">

```lx
Selection.sync(other : Selection) : unknown
```
</signature>

> Sync selection with another instance.   

<endpoint module="luxe: selection" class="Selection" signature="unsync(other : Selection)"></endpoint>
<h4 class="signature_head">Selection.unsync</h4><a class="signature-arity" href="#Selection.unsync" title="Permanent link">1</a><signature id="Selection.unsync">

```lx
Selection.unsync(other : Selection) : unknown
```
</signature>

> Stop syncing selection.   

<endpoint module="luxe: selection" class="Selection" signature="deselect()"></endpoint>
<h4 class="signature_head">Selection.deselect</h4><a class="signature-arity" href="#Selection.deselect" title="Permanent link">1</a><signature id="Selection.deselect">

```lx
Selection.deselect() : unknown
```
</signature>

> Clear the selection. emits `DESELECT` with a list of items deselected   

<endpoint module="luxe: selection" class="Selection" signature="deselect(item : Any)"></endpoint>
<h4 class="signature_head">Selection.deselect</h4><a class="signature-arity" href="#Selection.deselect" title="Permanent link">1</a><signature id="Selection.deselect">

```lx
Selection.deselect(item : Any) : unknown
```
</signature>

> Deselect the given item. emits `DESELECT` with a list containing the item   

<endpoint module="luxe: selection" class="Selection" signature="deselect_items(items : List)"></endpoint>
<h4 class="signature_head">Selection.deselect_items</h4><a class="signature-arity" href="#Selection.deselect_items" title="Permanent link">1</a><signature id="Selection.deselect_items">

```lx
Selection.deselect_items(items : List) : unknown
```
</signature>

> Deselect the given items. emits `DESELECT` with a list containing the items (ones that were actually selected)   

<endpoint module="luxe: selection" class="Selection" signature="select(item : Any)"></endpoint>
<h4 class="signature_head">Selection.select</h4><a class="signature-arity" href="#Selection.select" title="Permanent link">1</a><signature id="Selection.select">

```lx
Selection.select(item : Any) : unknown
```
</signature>

> select the given item. emits `SELECT` with a list containing the item   

<endpoint module="luxe: selection" class="Selection" signature="select(item : Any, plural : Bool)"></endpoint>
<h4 class="signature_head">Selection.select</h4><a class="signature-arity" href="#Selection.select+2" title="Permanent link">2</a><signature id="Selection.select+2">

```lx
Selection.select(item : Any, plural : Bool) : unknown
```
</signature>

> Select the given item, and if plural is true, the item 
>             is added to the existing selection. If not, the selection
>             is cleared and only this item is selected afterward. 
>             Emits `SELECT` with a list containing the item   

<endpoint module="luxe: selection" class="Selection" signature="select_items(items : List)"></endpoint>
<h4 class="signature_head">Selection.select_items</h4><a class="signature-arity" href="#Selection.select_items" title="Permanent link">1</a><signature id="Selection.select_items">

```lx
Selection.select_items(items : List) : None
```
</signature>

> Select multiple items. Replaces the current selection. Emits `SELECT` with a list containing the items   

<endpoint module="luxe: selection" class="Selection" signature="select_items(items : List, plural : Bool)"></endpoint>
<h4 class="signature_head">Selection.select_items</h4><a class="signature-arity" href="#Selection.select_items+2" title="Permanent link">2</a><signature id="Selection.select_items+2">

```lx
Selection.select_items(items : List, plural : Bool) : None
```
</signature>

> Select the given items, and if plural is true, the items 
>             are added to the existing selection. If not, the selection
>             is cleared and only the items are selected afterward. 
>             Emits `SELECT` with a list containing the items   

<endpoint module="luxe: selection" class="Selection" signature="toggle(item : Any)"></endpoint>
<h4 class="signature_head">Selection.toggle</h4><a class="signature-arity" href="#Selection.toggle" title="Permanent link">1</a><signature id="Selection.toggle">

```lx
Selection.toggle(item : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="notify()"></endpoint>
<h4 class="signature_head">Selection.notify</h4><a class="signature-arity" href="#Selection.notify" title="Permanent link">1</a><signature id="Selection.notify">

```lx
Selection.notify() : None
```
</signature>

> send a change event for the selection   

<endpoint module="luxe: selection" class="Selection" signature="set_invalid_handler(fn : Fn)"></endpoint>
<h4 class="signature_head">Selection.set_invalid_handler</h4><a class="signature-arity" href="#Selection.set_invalid_handler" title="Permanent link">1</a><signature id="Selection.set_invalid_handler">

```lx
Selection.set_invalid_handler(fn : Fn) : unknown
```
</signature>

> no docs found   

