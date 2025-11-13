---
title: "luxe: ui/list.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/list.control"
---
- [Data](#data)   
- [UIList](#uilist)   

---


## Data
```lx
import "luxe: ui/list.control" for Data
```
> no docs found


## UIList
```lx
import "luxe: ui/list.control" for UIList
```
> no docs found

<endpoint module="luxe: ui/list.control" class="UIList" signature="create(ui_entity : Entity)"></endpoint>
### UIList.create(.)
```lx
UIList.create(ui_entity : Entity) : Control
```
> Create a list control   

<endpoint module="luxe: ui/list.control" class="UIList" signature="add(list : Control, control : Control)"></endpoint>
### UIList.add(..)
```lx
UIList.add(list : Control, control : Control) : None
```
> Add a given control to the list   

<endpoint module="luxe: ui/list.control" class="UIList" signature="remove(list : Control, control : Control)"></endpoint>
### UIList.remove(..)
```lx
UIList.remove(list : Control, control : Control) : None
```
> Remove a given control from the list   

<endpoint module="luxe: ui/list.control" class="UIList" signature="clear(list : Control, action : UIClearAction)"></endpoint>
### UIList.clear(..)
```lx
UIList.clear(list : Control, action : UIClearAction) : None
```
> Clear the list, with the given action to do with the removed controls   

<endpoint module="luxe: ui/list.control" class="UIList" signature="refresh(list : Control)"></endpoint>
### UIList.refresh(.)
```lx
UIList.refresh(list : Control) : None
```
> Refresh the list, called after changes (is this still needed?)   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_flex_width(list : Control, state : Bool)"></endpoint>
### UIList.set_flex_width(..)
```lx
UIList.set_flex_width(list : Control, state : Bool) : None
```
> Sets whether the control will expand to fill horizontal space. Typically you want this in flex layout.   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_percent(list : Control, vertical : Num, horizontal : Num)"></endpoint>
### UIList.set_percent(...)
```lx
UIList.set_percent(list : Control, vertical : Num, horizontal : Num) : unknown
```
> Sets the amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_percent_v(list : Control, vertical : Num)"></endpoint>
### UIList.set_percent_v(..)
```lx
UIList.set_percent_v(list : Control, vertical : Num) : unknown
```
> Sets the vertical amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_percent_h(list : Control, horizontal : Num)"></endpoint>
### UIList.set_percent_h(..)
```lx
UIList.set_percent_h(list : Control, horizontal : Num) : unknown
```
> Sets the horizontal amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get_percent_v(list : Control)"></endpoint>
### UIList.get_percent_v(.)
```lx
UIList.get_percent_v(list : Control) : Num
```
> Returns the vertical amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get_percent_h(list : Control)"></endpoint>
### UIList.get_percent_h(.)
```lx
UIList.get_percent_h(list : Control) : Num
```
> Returns the horizontal amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_scroll(list : Control, vertical : Num, horizontal : Num)"></endpoint>
### UIList.set_scroll(...)
```lx
UIList.set_scroll(list : Control, vertical : Num, horizontal : Num) : None
```
> Returns the amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_scroll_v(list : Control, vertical : Num)"></endpoint>
### UIList.set_scroll_v(..)
```lx
UIList.set_scroll_v(list : Control, vertical : Num) : None
```
> Sets the vertical amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_scroll_h(list : Control, horizontal : Num)"></endpoint>
### UIList.set_scroll_h(..)
```lx
UIList.set_scroll_h(list : Control, horizontal : Num) : None
```
> Sets the horizontal amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get_scroll_v(list : Control)"></endpoint>
### UIList.get_scroll_v(.)
```lx
UIList.get_scroll_v(list : Control) : Num
```
> Returns the vertical amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get_scroll_h(list : Control)"></endpoint>
### UIList.get_scroll_h(.)
```lx
UIList.get_scroll_h(list : Control) : Num
```
> Returns the horizontal amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="can_scroll_v(list : Control)"></endpoint>
### UIList.can_scroll_v(.)
```lx
UIList.can_scroll_v(list : Control) : Bool
```
> Returns true if there's any space to scroll vertically   

<endpoint module="luxe: ui/list.control" class="UIList" signature="can_scroll_h(list : Control)"></endpoint>
### UIList.can_scroll_h(.)
```lx
UIList.can_scroll_h(list : Control) : Bool
```
> Returns true if there's any space to scroll horizontally   

<endpoint module="luxe: ui/list.control" class="UIList" signature="count(list : Control)"></endpoint>
### UIList.count(.)
```lx
UIList.count(list : Control) : Num
```
> Get the number of controls in the list   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get(list : Control, index : Num)"></endpoint>
### UIList.get(..)
```lx
UIList.get(list : Control, index : Num) : Control
```
> Get the control at the given index inside the list   

<endpoint module="luxe: ui/list.control" class="UIList" signature="index(list : Control, control : Control)"></endpoint>
### UIList.index(..)
```lx
UIList.index(list : Control, control : Control) : Num
```
> Get the index of the given control inside the list   

