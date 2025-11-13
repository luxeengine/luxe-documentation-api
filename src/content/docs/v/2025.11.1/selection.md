---
title: "luxe: selection"
description: API version 2025.11.1
slug: "v/2025.11.1/selection"
---
- [Selection](#selection)   

---


## Selection
```wren
import "luxe: selection" for Selection
```
> no docs found

<endpoint module="luxe: selection" class="Selection" signature="CHANGE"></endpoint>
### Selection.CHANGE
```wren
Selection.CHANGE : unknown
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="DESELECT"></endpoint>
### Selection.DESELECT
```wren
Selection.DESELECT : unknown
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="SELECT"></endpoint>
### Selection.SELECT
```wren
Selection.SELECT : unknown
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="INVALID"></endpoint>
### Selection.INVALID
```wren
Selection.INVALID : unknown
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="PRE_CHANGE"></endpoint>
### Selection.PRE_CHANGE
```wren
Selection.PRE_CHANGE : unknown
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="id"></endpoint>
### Selection.id
```wren
Selection.id : String
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="events"></endpoint>
### Selection.events
```wren
Selection.events : Events
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="selected"></endpoint>
### Selection.selected
```wren
Selection.selected : List
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="any()"></endpoint>
### Selection.any(.)
```wren
Selection.any() : Bool
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="is_selected(value : Any)"></endpoint>
### Selection.is_selected(.)
```wren
Selection.is_selected(value : Any) : Bool
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="is_selected(value : Any, non_transient_only : Bool)"></endpoint>
### Selection.is_selected(..)
```wren
Selection.is_selected(value : Any, non_transient_only : Bool) : Bool
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="is_invalid_selection(value : Any)"></endpoint>
### Selection.is_invalid_selection(.)
```wren
Selection.is_invalid_selection(value : Any) : String
```
> returns a string as a reason if not able to select, otherwise returns null   

<endpoint module="luxe: selection" class="Selection" signature="count"></endpoint>
### Selection.count
```wren
Selection.count : Num
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="first"></endpoint>
### Selection.first
```wren
Selection.first : Any
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="last"></endpoint>
### Selection.last
```wren
Selection.last : Any
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="transient"></endpoint>
### Selection.transient
```wren
Selection.transient : Bool
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="new(context : String)"></endpoint>
### Selection.new(.)
```wren
Selection.new(context : String) : Selection
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="destroy()"></endpoint>
### Selection.destroy(.)
```wren
Selection.destroy() : unknown
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="emit(kind : Any, items : List)"></endpoint>
### Selection.emit(..)
```wren
Selection.emit(kind : Any, items : List) : unknown
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="start_transient(change : Fn)"></endpoint>
### Selection.start_transient(.)
```wren
Selection.start_transient(change : Fn) : unknown
```
> Start a transient selection where changes will be stored separately and notifed of a change directly   

<endpoint module="luxe: selection" class="Selection" signature="end_transient()"></endpoint>
### Selection.end_transient(.)
```wren
Selection.end_transient() : None
```
> End a transient selection, read .selected before calling to capture the transient selection   

<endpoint module="luxe: selection" class="Selection" signature="sync(other : Selection)"></endpoint>
### Selection.sync(.)
```wren
Selection.sync(other : Selection) : unknown
```
> Sync selection with another instance.   

<endpoint module="luxe: selection" class="Selection" signature="unsync(other : Selection)"></endpoint>
### Selection.unsync(.)
```wren
Selection.unsync(other : Selection) : unknown
```
> Stop syncing selection.   

<endpoint module="luxe: selection" class="Selection" signature="deselect()"></endpoint>
### Selection.deselect(.)
```wren
Selection.deselect() : unknown
```
> Clear the selection. emits `DESELECT` with a list of items deselected   

<endpoint module="luxe: selection" class="Selection" signature="deselect(item : Any)"></endpoint>
### Selection.deselect(.)
```wren
Selection.deselect(item : Any) : unknown
```
> Deselect the given item. emits `DESELECT` with a list containing the item   

<endpoint module="luxe: selection" class="Selection" signature="deselect_items(items : List)"></endpoint>
### Selection.deselect_items(.)
```wren
Selection.deselect_items(items : List) : unknown
```
> Deselect the given items. emits `DESELECT` with a list containing the items (ones that were actually selected)   

<endpoint module="luxe: selection" class="Selection" signature="select(item : Any)"></endpoint>
### Selection.select(.)
```wren
Selection.select(item : Any) : unknown
```
> select the given item. emits `SELECT` with a list containing the item   

<endpoint module="luxe: selection" class="Selection" signature="select(item : Any, plural : Bool)"></endpoint>
### Selection.select(..)
```wren
Selection.select(item : Any, plural : Bool) : unknown
```
> Select the given item, and if plural is true, the item 
>             is added to the existing selection. If not, the selection
>             is cleared and only this item is selected afterward. 
>             Emits `SELECT` with a list containing the item   

<endpoint module="luxe: selection" class="Selection" signature="select_items(items : List)"></endpoint>
### Selection.select_items(.)
```wren
Selection.select_items(items : List) : None
```
> Select multiple items. Replaces the current selection. Emits `SELECT` with a list containing the items   

<endpoint module="luxe: selection" class="Selection" signature="select_items(items : List, plural : Bool)"></endpoint>
### Selection.select_items(..)
```wren
Selection.select_items(items : List, plural : Bool) : None
```
> Select the given items, and if plural is true, the items 
>             are added to the existing selection. If not, the selection
>             is cleared and only the items are selected afterward. 
>             Emits `SELECT` with a list containing the items   

<endpoint module="luxe: selection" class="Selection" signature="toggle(item : Any)"></endpoint>
### Selection.toggle(.)
```wren
Selection.toggle(item : Any) : unknown
```
> no docs found   

<endpoint module="luxe: selection" class="Selection" signature="notify()"></endpoint>
### Selection.notify(.)
```wren
Selection.notify() : None
```
> send a change event for the selection   

<endpoint module="luxe: selection" class="Selection" signature="set_invalid_handler(fn : Fn)"></endpoint>
### Selection.set_invalid_handler(.)
```wren
Selection.set_invalid_handler(fn : Fn) : unknown
```
> no docs found   

