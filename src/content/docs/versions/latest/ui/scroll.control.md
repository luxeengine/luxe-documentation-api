---
title: "luxe: ui/scroll.control"
description: API version 2025.11.1
---
## `luxe: ui/scroll.control{:lx}` module

- [Data](#data)   
- [UIScroll](#uiscroll)   

---


### Data
`import "luxe: ui/scroll.control" for Data{:lx}`
> no docs found

- `var units : Float2 = [32, 32]{:lx}`


---


### UIScroll
`import "luxe: ui/scroll.control" for UIScroll{:lx}`
> no docs found

- [create](#UIScroll.create)(**ui**: `Entity{:lx}`)
- [add](#UIScroll.add+2)(**scroll**: `Control{:lx}`, **control**: `Control{:lx}`)
- [remove](#UIScroll.remove+2)(**scroll**: `Control{:lx}`, **control**: `Control{:lx}`)
- [count](#UIScroll.count)(**scroll**: `Control{:lx}`)
- [clear](#UIScroll.clear+2)(**scroll**: `Control{:lx}`, **action**: `UIClearAction{:lx}`)
- [get](#UIScroll.get+2)(**scroll**: `Control{:lx}`, **index**: `Num{:lx}`)
- [index](#UIScroll.index+2)(**scroll**: `Control{:lx}`, **control**: `Control{:lx}`)
- [refresh](#UIScroll.refresh)(**scroll**: `Control{:lx}`)
- [set_percent](#UIScroll.set_percent+3)(**scroll**: `Control{:lx}`, **vertical**: `Num{:lx}`, **horizontal**: `Num{:lx}`)
- [set_scroll](#UIScroll.set_scroll+3)(**scroll**: `Control{:lx}`, **vertical**: `Num{:lx}`, **horizontal**: `Num{:lx}`)
- [set_percent_v](#UIScroll.set_percent_v+2)(**scroll**: `Control{:lx}`, **vertical**: `Num{:lx}`)
- [set_percent_h](#UIScroll.set_percent_h+2)(**scroll**: `Control{:lx}`, **horizontal**: `Num{:lx}`)
- [set_scroll_v](#UIScroll.set_scroll_v+2)(**scroll**: `Control{:lx}`, **vertical**: `Num{:lx}`)
- [set_scroll_h](#UIScroll.set_scroll_h+2)(**scroll**: `Control{:lx}`, **horizontal**: `Num{:lx}`)
- [get_percent_v](#UIScroll.get_percent_v)(**scroll**: `Control{:lx}`)
- [get_percent_h](#UIScroll.get_percent_h)(**scroll**: `Control{:lx}`)
- [get_scroll_v](#UIScroll.get_scroll_v)(**scroll**: `Control{:lx}`)
- [get_scroll_h](#UIScroll.get_scroll_h)(**scroll**: `Control{:lx}`)
- [can_scroll_v](#UIScroll.can_scroll_v)(**scroll**: `Control{:lx}`)
- [can_scroll_h](#UIScroll.can_scroll_h)(**scroll**: `Control{:lx}`)


---

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">UIScroll.create</h4><a class="signature-arity" href="#UIScroll.create" title="Permanent link">1</a><signature id="UIScroll.create">

```lx
UIScroll.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="add(scroll : Control, control : Control)"></endpoint>
<h4 class="signature_head">UIScroll.add</h4><a class="signature-arity" href="#UIScroll.add+2" title="Permanent link">2</a><signature id="UIScroll.add+2">

```lx
UIScroll.add(scroll : Control, control : Control) : None
```
</signature>

> Add a given control to the scroll area   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="remove(scroll : Control, control : Control)"></endpoint>
<h4 class="signature_head">UIScroll.remove</h4><a class="signature-arity" href="#UIScroll.remove+2" title="Permanent link">2</a><signature id="UIScroll.remove+2">

```lx
UIScroll.remove(scroll : Control, control : Control) : None
```
</signature>

> Remove a given control from the scroll area   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="count(scroll : Control)"></endpoint>
<h4 class="signature_head">UIScroll.count</h4><a class="signature-arity" href="#UIScroll.count" title="Permanent link">1</a><signature id="UIScroll.count">

```lx
UIScroll.count(scroll : Control) : Num
```
</signature>

> Get the number of controls in the scroll   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="clear(scroll : Control, action : UIClearAction)"></endpoint>
<h4 class="signature_head">UIScroll.clear</h4><a class="signature-arity" href="#UIScroll.clear+2" title="Permanent link">2</a><signature id="UIScroll.clear+2">

```lx
UIScroll.clear(scroll : Control, action : UIClearAction) : None
```
</signature>

> Clear the scroll, with the given action to do with the removed controls   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get(scroll : Control, index : Num)"></endpoint>
<h4 class="signature_head">UIScroll.get</h4><a class="signature-arity" href="#UIScroll.get+2" title="Permanent link">2</a><signature id="UIScroll.get+2">

```lx
UIScroll.get(scroll : Control, index : Num) : Control
```
</signature>

> Get the control at the given index inside the scroll   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="index(scroll : Control, control : Control)"></endpoint>
<h4 class="signature_head">UIScroll.index</h4><a class="signature-arity" href="#UIScroll.index+2" title="Permanent link">2</a><signature id="UIScroll.index+2">

```lx
UIScroll.index(scroll : Control, control : Control) : Num
```
</signature>

> Get the index of the given control inside the scroll   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="refresh(scroll : Control)"></endpoint>
<h4 class="signature_head">UIScroll.refresh</h4><a class="signature-arity" href="#UIScroll.refresh" title="Permanent link">1</a><signature id="UIScroll.refresh">

```lx
UIScroll.refresh(scroll : Control) : None
```
</signature>

> Refresh the scroll, called after changes (is this still needed?)   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_percent(scroll : Control, vertical : Num, horizontal : Num)"></endpoint>
<h4 class="signature_head">UIScroll.set_percent</h4><a class="signature-arity" href="#UIScroll.set_percent+3" title="Permanent link">3</a><signature id="UIScroll.set_percent+3">

```lx
UIScroll.set_percent(scroll : Control, vertical : Num, horizontal : Num) : None
```
</signature>

> Sets the amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_scroll(scroll : Control, vertical : Num, horizontal : Num)"></endpoint>
<h4 class="signature_head">UIScroll.set_scroll</h4><a class="signature-arity" href="#UIScroll.set_scroll+3" title="Permanent link">3</a><signature id="UIScroll.set_scroll+3">

```lx
UIScroll.set_scroll(scroll : Control, vertical : Num, horizontal : Num) : None
```
</signature>

> Returns the amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_percent_v(scroll : Control, vertical : Num)"></endpoint>
<h4 class="signature_head">UIScroll.set_percent_v</h4><a class="signature-arity" href="#UIScroll.set_percent_v+2" title="Permanent link">2</a><signature id="UIScroll.set_percent_v+2">

```lx
UIScroll.set_percent_v(scroll : Control, vertical : Num) : None
```
</signature>

> Sets the vertical amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_percent_h(scroll : Control, horizontal : Num)"></endpoint>
<h4 class="signature_head">UIScroll.set_percent_h</h4><a class="signature-arity" href="#UIScroll.set_percent_h+2" title="Permanent link">2</a><signature id="UIScroll.set_percent_h+2">

```lx
UIScroll.set_percent_h(scroll : Control, horizontal : Num) : None
```
</signature>

> Sets the horizontal amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_scroll_v(scroll : Control, vertical : Num)"></endpoint>
<h4 class="signature_head">UIScroll.set_scroll_v</h4><a class="signature-arity" href="#UIScroll.set_scroll_v+2" title="Permanent link">2</a><signature id="UIScroll.set_scroll_v+2">

```lx
UIScroll.set_scroll_v(scroll : Control, vertical : Num) : None
```
</signature>

> Sets the vertical amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="set_scroll_h(scroll : Control, horizontal : Num)"></endpoint>
<h4 class="signature_head">UIScroll.set_scroll_h</h4><a class="signature-arity" href="#UIScroll.set_scroll_h+2" title="Permanent link">2</a><signature id="UIScroll.set_scroll_h+2">

```lx
UIScroll.set_scroll_h(scroll : Control, horizontal : Num) : None
```
</signature>

> Sets the horizontal amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get_percent_v(scroll : Control)"></endpoint>
<h4 class="signature_head">UIScroll.get_percent_v</h4><a class="signature-arity" href="#UIScroll.get_percent_v" title="Permanent link">1</a><signature id="UIScroll.get_percent_v">

```lx
UIScroll.get_percent_v(scroll : Control) : Num
```
</signature>

> Returns the vertical amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get_percent_h(scroll : Control)"></endpoint>
<h4 class="signature_head">UIScroll.get_percent_h</h4><a class="signature-arity" href="#UIScroll.get_percent_h" title="Permanent link">1</a><signature id="UIScroll.get_percent_h">

```lx
UIScroll.get_percent_h(scroll : Control) : Num
```
</signature>

> Returns the horizontal amount of scroll in relative percent, 0...1   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get_scroll_v(scroll : Control)"></endpoint>
<h4 class="signature_head">UIScroll.get_scroll_v</h4><a class="signature-arity" href="#UIScroll.get_scroll_v" title="Permanent link">1</a><signature id="UIScroll.get_scroll_v">

```lx
UIScroll.get_scroll_v(scroll : Control) : Num
```
</signature>

> Returns the vertical amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="get_scroll_h(scroll : Control)"></endpoint>
<h4 class="signature_head">UIScroll.get_scroll_h</h4><a class="signature-arity" href="#UIScroll.get_scroll_h" title="Permanent link">1</a><signature id="UIScroll.get_scroll_h">

```lx
UIScroll.get_scroll_h(scroll : Control) : Num
```
</signature>

> Returns the horizontal amount of scroll in absolute units   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="can_scroll_v(scroll : Control)"></endpoint>
<h4 class="signature_head">UIScroll.can_scroll_v</h4><a class="signature-arity" href="#UIScroll.can_scroll_v" title="Permanent link">1</a><signature id="UIScroll.can_scroll_v">

```lx
UIScroll.can_scroll_v(scroll : Control) : Bool
```
</signature>

> Returns true if there's any space to scroll vertically   

<endpoint module="luxe: ui/scroll.control" class="UIScroll" signature="can_scroll_h(scroll : Control)"></endpoint>
<h4 class="signature_head">UIScroll.can_scroll_h</h4><a class="signature-arity" href="#UIScroll.can_scroll_h" title="Permanent link">1</a><signature id="UIScroll.can_scroll_h">

```lx
UIScroll.can_scroll_h(scroll : Control) : Bool
```
</signature>

> Returns true if there's any space to scroll horizontally   

