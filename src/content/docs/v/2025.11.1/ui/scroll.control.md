---
title: "luxe: ui/scroll.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/scroll.control"
---
- [Data](#data)   
- [UIScroll](#uiscroll)   

---


## Data
```wren
import "luxe: ui/scroll.control" for Data
```
> no docs found

### Variables
```wren
var units : Float2 = [32, 32]
```

## UIScroll
```wren
import "luxe: ui/scroll.control" for UIScroll
```
> no docs found

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="create(ui : Entity)"></endpoint>
### UIScroll.create(.)
```wren
UIScroll.create(ui : Entity) : Control
```
> no docs found   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="add(scroll : Control, control : Control)"></endpoint>
### UIScroll.add(..)
```wren
UIScroll.add(scroll : Control, control : Control) : None
```
> Add a given control to the scroll area   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="remove(scroll : Control, control : Control)"></endpoint>
### UIScroll.remove(..)
```wren
UIScroll.remove(scroll : Control, control : Control) : None
```
> Remove a given control from the scroll area   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="count(scroll : Control)"></endpoint>
### UIScroll.count(.)
```wren
UIScroll.count(scroll : Control) : Num
```
> Get the number of controls in the scroll   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="clear(scroll : Control, action : UIClearAction)"></endpoint>
### UIScroll.clear(..)
```wren
UIScroll.clear(scroll : Control, action : UIClearAction) : None
```
> Clear the scroll, with the given action to do with the removed controls   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get(scroll : Control, index : Num)"></endpoint>
### UIScroll.get(..)
```wren
UIScroll.get(scroll : Control, index : Num) : Control
```
> Get the control at the given index inside the scroll   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="index(scroll : Control, control : Control)"></endpoint>
### UIScroll.index(..)
```wren
UIScroll.index(scroll : Control, control : Control) : Num
```
> Get the index of the given control inside the scroll   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="refresh(scroll : Control)"></endpoint>
### UIScroll.refresh(.)
```wren
UIScroll.refresh(scroll : Control) : None
```
> Refresh the scroll, called after changes (is this still needed?)   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_percent(scroll : Control, vertical : Num, horizontal : Num)"></endpoint>
### UIScroll.set_percent(...)
```wren
UIScroll.set_percent(scroll : Control, vertical : Num, horizontal : Num) : None
```
> Sets the amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_scroll(scroll : Control, vertical : Num, horizontal : Num)"></endpoint>
### UIScroll.set_scroll(...)
```wren
UIScroll.set_scroll(scroll : Control, vertical : Num, horizontal : Num) : None
```
> Returns the amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_percent_v(scroll : Control, vertical : Num)"></endpoint>
### UIScroll.set_percent_v(..)
```wren
UIScroll.set_percent_v(scroll : Control, vertical : Num) : None
```
> Sets the vertical amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_percent_h(scroll : Control, horizontal : Num)"></endpoint>
### UIScroll.set_percent_h(..)
```wren
UIScroll.set_percent_h(scroll : Control, horizontal : Num) : None
```
> Sets the horizontal amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_scroll_v(scroll : Control, vertical : Num)"></endpoint>
### UIScroll.set_scroll_v(..)
```wren
UIScroll.set_scroll_v(scroll : Control, vertical : Num) : None
```
> Sets the vertical amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_scroll_h(scroll : Control, horizontal : Num)"></endpoint>
### UIScroll.set_scroll_h(..)
```wren
UIScroll.set_scroll_h(scroll : Control, horizontal : Num) : None
```
> Sets the horizontal amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get_percent_v(scroll : Control)"></endpoint>
### UIScroll.get_percent_v(.)
```wren
UIScroll.get_percent_v(scroll : Control) : Num
```
> Returns the vertical amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get_percent_h(scroll : Control)"></endpoint>
### UIScroll.get_percent_h(.)
```wren
UIScroll.get_percent_h(scroll : Control) : Num
```
> Returns the horizontal amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get_scroll_v(scroll : Control)"></endpoint>
### UIScroll.get_scroll_v(.)
```wren
UIScroll.get_scroll_v(scroll : Control) : Num
```
> Returns the vertical amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get_scroll_h(scroll : Control)"></endpoint>
### UIScroll.get_scroll_h(.)
```wren
UIScroll.get_scroll_h(scroll : Control) : Num
```
> Returns the horizontal amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="can_scroll_v(scroll : Control)"></endpoint>
### UIScroll.can_scroll_v(.)
```wren
UIScroll.can_scroll_v(scroll : Control) : Bool
```
> Returns true if there's any space to scroll vertically   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="can_scroll_h(scroll : Control)"></endpoint>
### UIScroll.can_scroll_h(.)
```wren
UIScroll.can_scroll_h(scroll : Control) : Bool
```
> Returns true if there's any space to scroll horizontally   

