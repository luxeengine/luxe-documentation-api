---
title: "luxe: ui/scroll.control.api"
description: API version 2025.11.1
---
## `luxe: ui/scroll.control.api{:lx}` module

- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


### API
`import "luxe: ui/scroll.control.api" for API{:lx}`
> no docs found

- [id](#API.id)
- [create](#API.create)(**ui**: `Entity{:lx}`)
- [has](#API.has)(**control**: `Control{:lx}`)
- [get](#API.get)(**control**: `Control{:lx}`)
- [get](#API.get)
- [set](#API.set)


---

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="id"></endpoint>
<h4 class="signature_head">API.id</h4><a class="signature-arity" href="#API.id" title="Permanent link">1</a><signature id="API.id">

```lx
API.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">API.create</h4><a class="signature-arity" href="#API.create" title="Permanent link">1</a><signature id="API.create">

```lx
API.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="has(control : Control)"></endpoint>
<h4 class="signature_head">API.has</h4><a class="signature-arity" href="#API.has" title="Permanent link">1</a><signature id="API.has">

```lx
API.has(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="get(control : Control)"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get(control : Control) : Data
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="get"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="set"></endpoint>
<h4 class="signature_head">API.set</h4><a class="signature-arity" href="#API.set" title="Permanent link">1</a><signature id="API.set">

```lx
API.set : APISet
```
</signature>

> no docs found   


### APIGet
`import "luxe: ui/scroll.control.api" for APIGet{:lx}`
> no docs found

- [new](#APIGet.new)()
- [units](#APIGet.units)(**control**: `Control{:lx}`)
- [scroll](#APIGet.scroll)(**control**: `Control{:lx}`)
- [drag](#APIGet.drag)(**control**: `Control{:lx}`)
- [containerb](#APIGet.containerb)(**control**: `Control{:lx}`)
- [handle_v](#APIGet.handle_v)(**control**: `Control{:lx}`)
- [handle_h](#APIGet.handle_h)(**control**: `Control{:lx}`)
- [dragging_h](#APIGet.dragging_h)(**control**: `Control{:lx}`)
- [dragging_v](#APIGet.dragging_v)(**control**: `Control{:lx}`)
- [in_handle_v](#APIGet.in_handle_v)(**control**: `Control{:lx}`)
- [in_handle_h](#APIGet.in_handle_h)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="new()"></endpoint>
<h4 class="signature_head">APIGet.new</h4><a class="signature-arity" href="#APIGet.new" title="Permanent link">1</a><signature id="APIGet.new">

```lx
APIGet.new() : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="units(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.units</h4><a class="signature-arity" href="#APIGet.units" title="Permanent link">1</a><signature id="APIGet.units">

```lx
APIGet.units(control : Control) : Float2
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="scroll(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.scroll</h4><a class="signature-arity" href="#APIGet.scroll" title="Permanent link">1</a><signature id="APIGet.scroll">

```lx
APIGet.scroll(control : Control) : Float2
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="drag(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.drag</h4><a class="signature-arity" href="#APIGet.drag" title="Permanent link">1</a><signature id="APIGet.drag">

```lx
APIGet.drag(control : Control) : Float2
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="containerb(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.containerb</h4><a class="signature-arity" href="#APIGet.containerb" title="Permanent link">1</a><signature id="APIGet.containerb">

```lx
APIGet.containerb(control : Control) : Float4
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="handle_v(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.handle_v</h4><a class="signature-arity" href="#APIGet.handle_v" title="Permanent link">1</a><signature id="APIGet.handle_v">

```lx
APIGet.handle_v(control : Control) : Float4
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="handle_h(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.handle_h</h4><a class="signature-arity" href="#APIGet.handle_h" title="Permanent link">1</a><signature id="APIGet.handle_h">

```lx
APIGet.handle_h(control : Control) : Float4
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="dragging_h(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.dragging_h</h4><a class="signature-arity" href="#APIGet.dragging_h" title="Permanent link">1</a><signature id="APIGet.dragging_h">

```lx
APIGet.dragging_h(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="dragging_v(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.dragging_v</h4><a class="signature-arity" href="#APIGet.dragging_v" title="Permanent link">1</a><signature id="APIGet.dragging_v">

```lx
APIGet.dragging_v(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="in_handle_v(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.in_handle_v</h4><a class="signature-arity" href="#APIGet.in_handle_v" title="Permanent link">1</a><signature id="APIGet.in_handle_v">

```lx
APIGet.in_handle_v(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="in_handle_h(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.in_handle_h</h4><a class="signature-arity" href="#APIGet.in_handle_h" title="Permanent link">1</a><signature id="APIGet.in_handle_h">

```lx
APIGet.in_handle_h(control : Control) : Bool
```
</signature>

> no docs found   


### APISet
`import "luxe: ui/scroll.control.api" for APISet{:lx}`
> no docs found

- [new](#APISet.new)()
- [units](#APISet.units+2)(**control**: `Control{:lx}`, **value**: `Float2{:lx}`)
- [scroll](#APISet.scroll+2)(**control**: `Control{:lx}`, **value**: `Float2{:lx}`)
- [drag](#APISet.drag+2)(**control**: `Control{:lx}`, **value**: `Float2{:lx}`)
- [containerb](#APISet.containerb+2)(**control**: `Control{:lx}`, **value**: `Float4{:lx}`)
- [handle_v](#APISet.handle_v+2)(**control**: `Control{:lx}`, **value**: `Float4{:lx}`)
- [handle_h](#APISet.handle_h+2)(**control**: `Control{:lx}`, **value**: `Float4{:lx}`)
- [dragging_h](#APISet.dragging_h+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [dragging_v](#APISet.dragging_v+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [in_handle_v](#APISet.in_handle_v+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [in_handle_h](#APISet.in_handle_h+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)


---

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="new()"></endpoint>
<h4 class="signature_head">APISet.new</h4><a class="signature-arity" href="#APISet.new" title="Permanent link">1</a><signature id="APISet.new">

```lx
APISet.new() : APISet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="units(control : Control, value : Float2)"></endpoint>
<h4 class="signature_head">APISet.units</h4><a class="signature-arity" href="#APISet.units+2" title="Permanent link">2</a><signature id="APISet.units+2">

```lx
APISet.units(control : Control, value : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="scroll(control : Control, value : Float2)"></endpoint>
<h4 class="signature_head">APISet.scroll</h4><a class="signature-arity" href="#APISet.scroll+2" title="Permanent link">2</a><signature id="APISet.scroll+2">

```lx
APISet.scroll(control : Control, value : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="drag(control : Control, value : Float2)"></endpoint>
<h4 class="signature_head">APISet.drag</h4><a class="signature-arity" href="#APISet.drag+2" title="Permanent link">2</a><signature id="APISet.drag+2">

```lx
APISet.drag(control : Control, value : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="containerb(control : Control, value : Float4)"></endpoint>
<h4 class="signature_head">APISet.containerb</h4><a class="signature-arity" href="#APISet.containerb+2" title="Permanent link">2</a><signature id="APISet.containerb+2">

```lx
APISet.containerb(control : Control, value : Float4) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="handle_v(control : Control, value : Float4)"></endpoint>
<h4 class="signature_head">APISet.handle_v</h4><a class="signature-arity" href="#APISet.handle_v+2" title="Permanent link">2</a><signature id="APISet.handle_v+2">

```lx
APISet.handle_v(control : Control, value : Float4) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="handle_h(control : Control, value : Float4)"></endpoint>
<h4 class="signature_head">APISet.handle_h</h4><a class="signature-arity" href="#APISet.handle_h+2" title="Permanent link">2</a><signature id="APISet.handle_h+2">

```lx
APISet.handle_h(control : Control, value : Float4) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="dragging_h(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.dragging_h</h4><a class="signature-arity" href="#APISet.dragging_h+2" title="Permanent link">2</a><signature id="APISet.dragging_h+2">

```lx
APISet.dragging_h(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="dragging_v(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.dragging_v</h4><a class="signature-arity" href="#APISet.dragging_v+2" title="Permanent link">2</a><signature id="APISet.dragging_v+2">

```lx
APISet.dragging_v(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="in_handle_v(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.in_handle_v</h4><a class="signature-arity" href="#APISet.in_handle_v+2" title="Permanent link">2</a><signature id="APISet.in_handle_v+2">

```lx
APISet.in_handle_v(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="in_handle_h(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.in_handle_h</h4><a class="signature-arity" href="#APISet.in_handle_h+2" title="Permanent link">2</a><signature id="APISet.in_handle_h+2">

```lx
APISet.in_handle_h(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   


### Fields
`import "luxe: ui/scroll.control.api" for Fields{:lx}`
> no docs found

- [units](#Fields.units)
- [scroll](#Fields.scroll)
- [drag](#Fields.drag)
- [containerb](#Fields.containerb)
- [handle_v](#Fields.handle_v)
- [handle_h](#Fields.handle_h)
- [dragging_h](#Fields.dragging_h)
- [dragging_v](#Fields.dragging_v)
- [in_handle_v](#Fields.in_handle_v)
- [in_handle_h](#Fields.in_handle_h)


---

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="units"></endpoint>
<h4 class="signature_head">Fields.units</h4><a class="signature-arity" href="#Fields.units" title="Permanent link">1</a><signature id="Fields.units">

```lx
Fields.units : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="scroll"></endpoint>
<h4 class="signature_head">Fields.scroll</h4><a class="signature-arity" href="#Fields.scroll" title="Permanent link">1</a><signature id="Fields.scroll">

```lx
Fields.scroll : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="drag"></endpoint>
<h4 class="signature_head">Fields.drag</h4><a class="signature-arity" href="#Fields.drag" title="Permanent link">1</a><signature id="Fields.drag">

```lx
Fields.drag : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="containerb"></endpoint>
<h4 class="signature_head">Fields.containerb</h4><a class="signature-arity" href="#Fields.containerb" title="Permanent link">1</a><signature id="Fields.containerb">

```lx
Fields.containerb : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="handle_v"></endpoint>
<h4 class="signature_head">Fields.handle_v</h4><a class="signature-arity" href="#Fields.handle_v" title="Permanent link">1</a><signature id="Fields.handle_v">

```lx
Fields.handle_v : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="handle_h"></endpoint>
<h4 class="signature_head">Fields.handle_h</h4><a class="signature-arity" href="#Fields.handle_h" title="Permanent link">1</a><signature id="Fields.handle_h">

```lx
Fields.handle_h : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="dragging_h"></endpoint>
<h4 class="signature_head">Fields.dragging_h</h4><a class="signature-arity" href="#Fields.dragging_h" title="Permanent link">1</a><signature id="Fields.dragging_h">

```lx
Fields.dragging_h : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="dragging_v"></endpoint>
<h4 class="signature_head">Fields.dragging_v</h4><a class="signature-arity" href="#Fields.dragging_v" title="Permanent link">1</a><signature id="Fields.dragging_v">

```lx
Fields.dragging_v : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="in_handle_v"></endpoint>
<h4 class="signature_head">Fields.in_handle_v</h4><a class="signature-arity" href="#Fields.in_handle_v" title="Permanent link">1</a><signature id="Fields.in_handle_v">

```lx
Fields.in_handle_v : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="in_handle_h"></endpoint>
<h4 class="signature_head">Fields.in_handle_h</h4><a class="signature-arity" href="#Fields.in_handle_h" title="Permanent link">1</a><signature id="Fields.in_handle_h">

```lx
Fields.in_handle_h : String
```
</signature>

> no docs found   

