---
title: "luxe: ui/slider.control.api"
description: API version 2025.11.1
---
## `luxe: ui/slider.control.api{:lx}` module

- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


### API
`import "luxe: ui/slider.control.api" for API{:lx}`
> no docs found

- [id](#API.id)
- [create](#API.create)(**ui**: `Entity{:lx}`)
- [has](#API.has)(**control**: `Control{:lx}`)
- [get](#API.get)(**control**: `Control{:lx}`)
- [get](#API.get)
- [set](#API.set)


---

<endpoint module="luxe: ui/slider.control.api" class="API" signature="id"></endpoint>
<h4 class="signature_head">API.id</h4><a class="signature-arity" href="#API.id" title="Permanent link">1</a><signature id="API.id">

```lx
API.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="API" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">API.create</h4><a class="signature-arity" href="#API.create" title="Permanent link">1</a><signature id="API.create">

```lx
API.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="API" signature="has(control : Control)"></endpoint>
<h4 class="signature_head">API.has</h4><a class="signature-arity" href="#API.has" title="Permanent link">1</a><signature id="API.has">

```lx
API.has(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="API" signature="get(control : Control)"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get(control : Control) : Data
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="API" signature="get"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="API" signature="set"></endpoint>
<h4 class="signature_head">API.set</h4><a class="signature-arity" href="#API.set" title="Permanent link">1</a><signature id="API.set">

```lx
API.set : APISet
```
</signature>

> no docs found   


### APIGet
`import "luxe: ui/slider.control.api" for APIGet{:lx}`
> no docs found

- [new](#APIGet.new)()
- [value](#APIGet.value)(**control**: `Control{:lx}`)
- [min](#APIGet.min)(**control**: `Control{:lx}`)
- [max](#APIGet.max)(**control**: `Control{:lx}`)
- [step](#APIGet.step)(**control**: `Control{:lx}`)
- [invert](#APIGet.invert)(**control**: `Control{:lx}`)
- [dragging](#APIGet.dragging)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/slider.control.api" class="APIGet" signature="new()"></endpoint>
<h4 class="signature_head">APIGet.new</h4><a class="signature-arity" href="#APIGet.new" title="Permanent link">1</a><signature id="APIGet.new">

```lx
APIGet.new() : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APIGet" signature="value(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.value</h4><a class="signature-arity" href="#APIGet.value" title="Permanent link">1</a><signature id="APIGet.value">

```lx
APIGet.value(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APIGet" signature="min(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.min</h4><a class="signature-arity" href="#APIGet.min" title="Permanent link">1</a><signature id="APIGet.min">

```lx
APIGet.min(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APIGet" signature="max(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.max</h4><a class="signature-arity" href="#APIGet.max" title="Permanent link">1</a><signature id="APIGet.max">

```lx
APIGet.max(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APIGet" signature="step(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.step</h4><a class="signature-arity" href="#APIGet.step" title="Permanent link">1</a><signature id="APIGet.step">

```lx
APIGet.step(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APIGet" signature="invert(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.invert</h4><a class="signature-arity" href="#APIGet.invert" title="Permanent link">1</a><signature id="APIGet.invert">

```lx
APIGet.invert(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APIGet" signature="dragging(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.dragging</h4><a class="signature-arity" href="#APIGet.dragging" title="Permanent link">1</a><signature id="APIGet.dragging">

```lx
APIGet.dragging(control : Control) : Bool
```
</signature>

> no docs found   


### APISet
`import "luxe: ui/slider.control.api" for APISet{:lx}`
> no docs found

- [new](#APISet.new)()
- [value](#APISet.value+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [min](#APISet.min+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [max](#APISet.max+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [step](#APISet.step+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [invert](#APISet.invert+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [dragging](#APISet.dragging+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)


---

<endpoint module="luxe: ui/slider.control.api" class="APISet" signature="new()"></endpoint>
<h4 class="signature_head">APISet.new</h4><a class="signature-arity" href="#APISet.new" title="Permanent link">1</a><signature id="APISet.new">

```lx
APISet.new() : APISet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APISet" signature="value(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.value</h4><a class="signature-arity" href="#APISet.value+2" title="Permanent link">2</a><signature id="APISet.value+2">

```lx
APISet.value(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APISet" signature="min(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.min</h4><a class="signature-arity" href="#APISet.min+2" title="Permanent link">2</a><signature id="APISet.min+2">

```lx
APISet.min(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APISet" signature="max(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.max</h4><a class="signature-arity" href="#APISet.max+2" title="Permanent link">2</a><signature id="APISet.max+2">

```lx
APISet.max(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APISet" signature="step(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.step</h4><a class="signature-arity" href="#APISet.step+2" title="Permanent link">2</a><signature id="APISet.step+2">

```lx
APISet.step(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APISet" signature="invert(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.invert</h4><a class="signature-arity" href="#APISet.invert+2" title="Permanent link">2</a><signature id="APISet.invert+2">

```lx
APISet.invert(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="APISet" signature="dragging(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.dragging</h4><a class="signature-arity" href="#APISet.dragging+2" title="Permanent link">2</a><signature id="APISet.dragging+2">

```lx
APISet.dragging(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   


### Fields
`import "luxe: ui/slider.control.api" for Fields{:lx}`
> no docs found

- [value](#Fields.value)
- [min](#Fields.min)
- [max](#Fields.max)
- [step](#Fields.step)
- [invert](#Fields.invert)
- [dragging](#Fields.dragging)


---

<endpoint module="luxe: ui/slider.control.api" class="Fields" signature="value"></endpoint>
<h4 class="signature_head">Fields.value</h4><a class="signature-arity" href="#Fields.value" title="Permanent link">1</a><signature id="Fields.value">

```lx
Fields.value : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="Fields" signature="min"></endpoint>
<h4 class="signature_head">Fields.min</h4><a class="signature-arity" href="#Fields.min" title="Permanent link">1</a><signature id="Fields.min">

```lx
Fields.min : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="Fields" signature="max"></endpoint>
<h4 class="signature_head">Fields.max</h4><a class="signature-arity" href="#Fields.max" title="Permanent link">1</a><signature id="Fields.max">

```lx
Fields.max : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="Fields" signature="step"></endpoint>
<h4 class="signature_head">Fields.step</h4><a class="signature-arity" href="#Fields.step" title="Permanent link">1</a><signature id="Fields.step">

```lx
Fields.step : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="Fields" signature="invert"></endpoint>
<h4 class="signature_head">Fields.invert</h4><a class="signature-arity" href="#Fields.invert" title="Permanent link">1</a><signature id="Fields.invert">

```lx
Fields.invert : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control.api" class="Fields" signature="dragging"></endpoint>
<h4 class="signature_head">Fields.dragging</h4><a class="signature-arity" href="#Fields.dragging" title="Permanent link">1</a><signature id="Fields.dragging">

```lx
Fields.dragging : String
```
</signature>

> no docs found   

