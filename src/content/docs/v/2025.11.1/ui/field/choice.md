---
title: "luxe: ui/field/choice"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/field/choice"
---
- [State](#state)   
- [UIChoice](#uichoice)   

---


## State
```lx
import "luxe: ui/field/choice" for State
```
> no docs found

<endpoint module="luxe: ui/field/choice" class="State" signature="list"></endpoint>
### State.list
```lx
State.list : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="new(ui : Any, control : Any)"></endpoint>
### State.new(..)
```lx
State.new(ui : Any, control : Any) : State
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="resize()"></endpoint>
### State.resize(.)
```lx
State.resize() : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="add(control : Any, keywords : Any)"></endpoint>
### State.add(..)
```lx
State.add(control : Any, keywords : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="remove(control : Any)"></endpoint>
### State.remove(.)
```lx
State.remove(control : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="clear(uiclear_action : Any)"></endpoint>
### State.clear(.)
```lx
State.clear(uiclear_action : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="count()"></endpoint>
### State.count(.)
```lx
State.count() : Num
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="get(index : Num)"></endpoint>
### State.get(.)
```lx
State.get(index : Num) : Control
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="refresh()"></endpoint>
### State.refresh(.)
```lx
State.refresh() : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="focus()"></endpoint>
### State.focus(.)
```lx
State.focus() : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="placeholder=(v : Any)"></endpoint>
### State.placeholder
```lx
State.placeholder=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="placeholder"></endpoint>
### State.placeholder
```lx
State.placeholder : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="fn=(v : Any)"></endpoint>
### State.fn
```lx
State.fn=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="fn"></endpoint>
### State.fn
```lx
State.fn : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="has_filter"></endpoint>
### State.has_filter
```lx
State.has_filter : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="force_filter(text : Any, focus : Any)"></endpoint>
### State.force_filter(..)
```lx
State.force_filter(text : Any, focus : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="cancel_filter()"></endpoint>
### State.cancel_filter(.)
```lx
State.cancel_filter() : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="State" signature="filter(filter : Any)"></endpoint>
### State.filter(.)
```lx
State.filter(filter : Any) : unknown
```
> no docs found   


## UIChoice
```lx
import "luxe: ui/field/choice" for UIChoice
```
> no docs found

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="create(ui : UI)"></endpoint>
### UIChoice.create(.)
```lx
UIChoice.create(ui : UI) : Control
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="get_placeholder(choice : Control)"></endpoint>
### UIChoice.get_placeholder(.)
```lx
UIChoice.get_placeholder(choice : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="set_placeholder(choice : Control, text : String)"></endpoint>
### UIChoice.set_placeholder(..)
```lx
UIChoice.set_placeholder(choice : Control, text : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="set_filter(choice : Control, fn : Fn)"></endpoint>
### UIChoice.set_filter(..)
```lx
UIChoice.set_filter(choice : Control, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="add(choice : Control, control : Control, keywords : List)"></endpoint>
### UIChoice.add(...)
```lx
UIChoice.add(choice : Control, control : Control, keywords : List) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="remove(choice : Control, control : Control)"></endpoint>
### UIChoice.remove(..)
```lx
UIChoice.remove(choice : Control, control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="clear(choice : Control, uiclear_action : UIClear)"></endpoint>
### UIChoice.clear(..)
```lx
UIChoice.clear(choice : Control, uiclear_action : UIClear) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="refresh(choice : Control)"></endpoint>
### UIChoice.refresh(.)
```lx
UIChoice.refresh(choice : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="focus(choice : Control)"></endpoint>
### UIChoice.focus(.)
```lx
UIChoice.focus(choice : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="count(choice : Control)"></endpoint>
### UIChoice.count(.)
```lx
UIChoice.count(choice : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/field/choice" class="UIChoice" signature="get_choice(choice : Control, index : Num)"></endpoint>
### UIChoice.get_choice(..)
```lx
UIChoice.get_choice(choice : Control, index : Num) : Control
```
> no docs found   

