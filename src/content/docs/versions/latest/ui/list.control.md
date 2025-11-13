---
title: "luxe: ui/list.control"
description: API version 2025.11.1
---
## `luxe: ui/list.control{:lx}` module

- [Data](#data)   
- [UIList](#uilist)   

---


### Data
`import "luxe: ui/list.control" for Data{:lx}`
> no docs found



---


### UIList
`import "luxe: ui/list.control" for UIList{:lx}`
> no docs found

- [create](#UIList.create)(**ui_entity**: `Entity{:lx}`)
- [add](#UIList.add+2)(**list**: `Control{:lx}`, **control**: `Control{:lx}`)
- [remove](#UIList.remove+2)(**list**: `Control{:lx}`, **control**: `Control{:lx}`)
- [clear](#UIList.clear+2)(**list**: `Control{:lx}`, **action**: `UIClearAction{:lx}`)
- [refresh](#UIList.refresh)(**list**: `Control{:lx}`)
- [set_flex_width](#UIList.set_flex_width+2)(**list**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [set_percent](#UIList.set_percent+3)(**list**: `Control{:lx}`, **vertical**: `Num{:lx}`, **horizontal**: `Num{:lx}`)
- [set_percent_v](#UIList.set_percent_v+2)(**list**: `Control{:lx}`, **vertical**: `Num{:lx}`)
- [set_percent_h](#UIList.set_percent_h+2)(**list**: `Control{:lx}`, **horizontal**: `Num{:lx}`)
- [get_percent_v](#UIList.get_percent_v)(**list**: `Control{:lx}`)
- [get_percent_h](#UIList.get_percent_h)(**list**: `Control{:lx}`)
- [set_scroll](#UIList.set_scroll+3)(**list**: `Control{:lx}`, **vertical**: `Num{:lx}`, **horizontal**: `Num{:lx}`)
- [set_scroll_v](#UIList.set_scroll_v+2)(**list**: `Control{:lx}`, **vertical**: `Num{:lx}`)
- [set_scroll_h](#UIList.set_scroll_h+2)(**list**: `Control{:lx}`, **horizontal**: `Num{:lx}`)
- [get_scroll_v](#UIList.get_scroll_v)(**list**: `Control{:lx}`)
- [get_scroll_h](#UIList.get_scroll_h)(**list**: `Control{:lx}`)
- [can_scroll_v](#UIList.can_scroll_v)(**list**: `Control{:lx}`)
- [can_scroll_h](#UIList.can_scroll_h)(**list**: `Control{:lx}`)
- [count](#UIList.count)(**list**: `Control{:lx}`)
- [get](#UIList.get+2)(**list**: `Control{:lx}`, **index**: `Num{:lx}`)
- [index](#UIList.index+2)(**list**: `Control{:lx}`, **control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/list.control" class="UIList" signature="create(ui_entity : Entity)"></endpoint>
<h4 class="signature_head">UIList.create</h4><a class="signature-arity" href="#UIList.create" title="Permanent link">1</a><signature id="UIList.create">

```lx
UIList.create(ui_entity : Entity) : Control
```
</signature>

> Create a list control   

<endpoint module="luxe: ui/list.control" class="UIList" signature="add(list : Control, control : Control)"></endpoint>
<h4 class="signature_head">UIList.add</h4><a class="signature-arity" href="#UIList.add+2" title="Permanent link">2</a><signature id="UIList.add+2">

```lx
UIList.add(list : Control, control : Control) : None
```
</signature>

> Add a given control to the list   

<endpoint module="luxe: ui/list.control" class="UIList" signature="remove(list : Control, control : Control)"></endpoint>
<h4 class="signature_head">UIList.remove</h4><a class="signature-arity" href="#UIList.remove+2" title="Permanent link">2</a><signature id="UIList.remove+2">

```lx
UIList.remove(list : Control, control : Control) : None
```
</signature>

> Remove a given control from the list   

<endpoint module="luxe: ui/list.control" class="UIList" signature="clear(list : Control, action : UIClearAction)"></endpoint>
<h4 class="signature_head">UIList.clear</h4><a class="signature-arity" href="#UIList.clear+2" title="Permanent link">2</a><signature id="UIList.clear+2">

```lx
UIList.clear(list : Control, action : UIClearAction) : None
```
</signature>

> Clear the list, with the given action to do with the removed controls   

<endpoint module="luxe: ui/list.control" class="UIList" signature="refresh(list : Control)"></endpoint>
<h4 class="signature_head">UIList.refresh</h4><a class="signature-arity" href="#UIList.refresh" title="Permanent link">1</a><signature id="UIList.refresh">

```lx
UIList.refresh(list : Control) : None
```
</signature>

> Refresh the list, called after changes (is this still needed?)   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_flex_width(list : Control, state : Bool)"></endpoint>
<h4 class="signature_head">UIList.set_flex_width</h4><a class="signature-arity" href="#UIList.set_flex_width+2" title="Permanent link">2</a><signature id="UIList.set_flex_width+2">

```lx
UIList.set_flex_width(list : Control, state : Bool) : None
```
</signature>

> Sets whether the control will expand to fill horizontal space. Typically you want this in flex layout.   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_percent(list : Control, vertical : Num, horizontal : Num)"></endpoint>
<h4 class="signature_head">UIList.set_percent</h4><a class="signature-arity" href="#UIList.set_percent+3" title="Permanent link">3</a><signature id="UIList.set_percent+3">

```lx
UIList.set_percent(list : Control, vertical : Num, horizontal : Num) : unknown
```
</signature>

> Sets the amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_percent_v(list : Control, vertical : Num)"></endpoint>
<h4 class="signature_head">UIList.set_percent_v</h4><a class="signature-arity" href="#UIList.set_percent_v+2" title="Permanent link">2</a><signature id="UIList.set_percent_v+2">

```lx
UIList.set_percent_v(list : Control, vertical : Num) : unknown
```
</signature>

> Sets the vertical amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_percent_h(list : Control, horizontal : Num)"></endpoint>
<h4 class="signature_head">UIList.set_percent_h</h4><a class="signature-arity" href="#UIList.set_percent_h+2" title="Permanent link">2</a><signature id="UIList.set_percent_h+2">

```lx
UIList.set_percent_h(list : Control, horizontal : Num) : unknown
```
</signature>

> Sets the horizontal amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get_percent_v(list : Control)"></endpoint>
<h4 class="signature_head">UIList.get_percent_v</h4><a class="signature-arity" href="#UIList.get_percent_v" title="Permanent link">1</a><signature id="UIList.get_percent_v">

```lx
UIList.get_percent_v(list : Control) : Num
```
</signature>

> Returns the vertical amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get_percent_h(list : Control)"></endpoint>
<h4 class="signature_head">UIList.get_percent_h</h4><a class="signature-arity" href="#UIList.get_percent_h" title="Permanent link">1</a><signature id="UIList.get_percent_h">

```lx
UIList.get_percent_h(list : Control) : Num
```
</signature>

> Returns the horizontal amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_scroll(list : Control, vertical : Num, horizontal : Num)"></endpoint>
<h4 class="signature_head">UIList.set_scroll</h4><a class="signature-arity" href="#UIList.set_scroll+3" title="Permanent link">3</a><signature id="UIList.set_scroll+3">

```lx
UIList.set_scroll(list : Control, vertical : Num, horizontal : Num) : None
```
</signature>

> Returns the amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_scroll_v(list : Control, vertical : Num)"></endpoint>
<h4 class="signature_head">UIList.set_scroll_v</h4><a class="signature-arity" href="#UIList.set_scroll_v+2" title="Permanent link">2</a><signature id="UIList.set_scroll_v+2">

```lx
UIList.set_scroll_v(list : Control, vertical : Num) : None
```
</signature>

> Sets the vertical amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="set_scroll_h(list : Control, horizontal : Num)"></endpoint>
<h4 class="signature_head">UIList.set_scroll_h</h4><a class="signature-arity" href="#UIList.set_scroll_h+2" title="Permanent link">2</a><signature id="UIList.set_scroll_h+2">

```lx
UIList.set_scroll_h(list : Control, horizontal : Num) : None
```
</signature>

> Sets the horizontal amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get_scroll_v(list : Control)"></endpoint>
<h4 class="signature_head">UIList.get_scroll_v</h4><a class="signature-arity" href="#UIList.get_scroll_v" title="Permanent link">1</a><signature id="UIList.get_scroll_v">

```lx
UIList.get_scroll_v(list : Control) : Num
```
</signature>

> Returns the vertical amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get_scroll_h(list : Control)"></endpoint>
<h4 class="signature_head">UIList.get_scroll_h</h4><a class="signature-arity" href="#UIList.get_scroll_h" title="Permanent link">1</a><signature id="UIList.get_scroll_h">

```lx
UIList.get_scroll_h(list : Control) : Num
```
</signature>

> Returns the horizontal amount of scroll in absolute units   

<endpoint module="luxe: ui/list.control" class="UIList" signature="can_scroll_v(list : Control)"></endpoint>
<h4 class="signature_head">UIList.can_scroll_v</h4><a class="signature-arity" href="#UIList.can_scroll_v" title="Permanent link">1</a><signature id="UIList.can_scroll_v">

```lx
UIList.can_scroll_v(list : Control) : Bool
```
</signature>

> Returns true if there's any space to scroll vertically   

<endpoint module="luxe: ui/list.control" class="UIList" signature="can_scroll_h(list : Control)"></endpoint>
<h4 class="signature_head">UIList.can_scroll_h</h4><a class="signature-arity" href="#UIList.can_scroll_h" title="Permanent link">1</a><signature id="UIList.can_scroll_h">

```lx
UIList.can_scroll_h(list : Control) : Bool
```
</signature>

> Returns true if there's any space to scroll horizontally   

<endpoint module="luxe: ui/list.control" class="UIList" signature="count(list : Control)"></endpoint>
<h4 class="signature_head">UIList.count</h4><a class="signature-arity" href="#UIList.count" title="Permanent link">1</a><signature id="UIList.count">

```lx
UIList.count(list : Control) : Num
```
</signature>

> Get the number of controls in the list   

<endpoint module="luxe: ui/list.control" class="UIList" signature="get(list : Control, index : Num)"></endpoint>
<h4 class="signature_head">UIList.get</h4><a class="signature-arity" href="#UIList.get+2" title="Permanent link">2</a><signature id="UIList.get+2">

```lx
UIList.get(list : Control, index : Num) : Control
```
</signature>

> Get the control at the given index inside the list   

<endpoint module="luxe: ui/list.control" class="UIList" signature="index(list : Control, control : Control)"></endpoint>
<h4 class="signature_head">UIList.index</h4><a class="signature-arity" href="#UIList.index+2" title="Permanent link">2</a><signature id="UIList.index+2">

```lx
UIList.index(list : Control, control : Control) : Num
```
</signature>

> Get the index of the given control inside the list   

