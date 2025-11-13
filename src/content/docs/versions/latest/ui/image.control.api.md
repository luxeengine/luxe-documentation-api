---
title: "luxe: ui/image.control.api"
description: API version 2025.11.1
---
## `luxe: ui/image.control.api{:lx}` module

- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


### API
`import "luxe: ui/image.control.api" for API{:lx}`
> no docs found

- [id](#API.id)
- [create](#API.create)(**ui**: `Entity{:lx}`)
- [has](#API.has)(**control**: `Control{:lx}`)
- [get](#API.get)(**control**: `Control{:lx}`)
- [get](#API.get)
- [set](#API.set)


---

<endpoint module="luxe: ui/image.control.api" class="API" signature="id"></endpoint>
<h4 class="signature_head">API.id</h4><a class="signature-arity" href="#API.id" title="Permanent link">1</a><signature id="API.id">

```lx
API.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="API" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">API.create</h4><a class="signature-arity" href="#API.create" title="Permanent link">1</a><signature id="API.create">

```lx
API.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="API" signature="has(control : Control)"></endpoint>
<h4 class="signature_head">API.has</h4><a class="signature-arity" href="#API.has" title="Permanent link">1</a><signature id="API.has">

```lx
API.has(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="API" signature="get(control : Control)"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get(control : Control) : Data
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="API" signature="get"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="API" signature="set"></endpoint>
<h4 class="signature_head">API.set</h4><a class="signature-arity" href="#API.set" title="Permanent link">1</a><signature id="API.set">

```lx
API.set : APISet
```
</signature>

> no docs found   


### APIGet
`import "luxe: ui/image.control.api" for APIGet{:lx}`
> no docs found

- [new](#APIGet.new)()
- [image](#APIGet.image)(**control**: `Control{:lx}`)
- [color](#APIGet.color)(**control**: `Control{:lx}`)
- [angle](#APIGet.angle)(**control**: `Control{:lx}`)
- [pixelated](#APIGet.pixelated)(**control**: `Control{:lx}`)
- [fit](#APIGet.fit)(**control**: `Control{:lx}`)
- [uv](#APIGet.uv)(**control**: `Control{:lx}`)
- [material](#APIGet.material)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/image.control.api" class="APIGet" signature="new()"></endpoint>
<h4 class="signature_head">APIGet.new</h4><a class="signature-arity" href="#APIGet.new" title="Permanent link">1</a><signature id="APIGet.new">

```lx
APIGet.new() : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APIGet" signature="image(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.image</h4><a class="signature-arity" href="#APIGet.image" title="Permanent link">1</a><signature id="APIGet.image">

```lx
APIGet.image(control : Control) : Asset
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APIGet" signature="color(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.color</h4><a class="signature-arity" href="#APIGet.color" title="Permanent link">1</a><signature id="APIGet.color">

```lx
APIGet.color(control : Control) : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APIGet" signature="angle(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.angle</h4><a class="signature-arity" href="#APIGet.angle" title="Permanent link">1</a><signature id="APIGet.angle">

```lx
APIGet.angle(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APIGet" signature="pixelated(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.pixelated</h4><a class="signature-arity" href="#APIGet.pixelated" title="Permanent link">1</a><signature id="APIGet.pixelated">

```lx
APIGet.pixelated(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APIGet" signature="fit(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.fit</h4><a class="signature-arity" href="#APIGet.fit" title="Permanent link">1</a><signature id="APIGet.fit">

```lx
APIGet.fit(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APIGet" signature="uv(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.uv</h4><a class="signature-arity" href="#APIGet.uv" title="Permanent link">1</a><signature id="APIGet.uv">

```lx
APIGet.uv(control : Control) : Float4
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APIGet" signature="material(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.material</h4><a class="signature-arity" href="#APIGet.material" title="Permanent link">1</a><signature id="APIGet.material">

```lx
APIGet.material(control : Control) : Asset
```
</signature>

> no docs found   


### APISet
`import "luxe: ui/image.control.api" for APISet{:lx}`
> no docs found

- [new](#APISet.new)()
- [image](#APISet.image+2)(**control**: `Control{:lx}`, **value**: `Asset{:lx}`)
- [color](#APISet.color+2)(**control**: `Control{:lx}`, **value**: `Color{:lx}`)
- [angle](#APISet.angle+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [pixelated](#APISet.pixelated+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [fit](#APISet.fit+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [uv](#APISet.uv+2)(**control**: `Control{:lx}`, **value**: `Float4{:lx}`)
- [material](#APISet.material+2)(**control**: `Control{:lx}`, **value**: `Asset{:lx}`)


---

<endpoint module="luxe: ui/image.control.api" class="APISet" signature="new()"></endpoint>
<h4 class="signature_head">APISet.new</h4><a class="signature-arity" href="#APISet.new" title="Permanent link">1</a><signature id="APISet.new">

```lx
APISet.new() : APISet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APISet" signature="image(control : Control, value : Asset)"></endpoint>
<h4 class="signature_head">APISet.image</h4><a class="signature-arity" href="#APISet.image+2" title="Permanent link">2</a><signature id="APISet.image+2">

```lx
APISet.image(control : Control, value : Asset) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APISet" signature="color(control : Control, value : Color)"></endpoint>
<h4 class="signature_head">APISet.color</h4><a class="signature-arity" href="#APISet.color+2" title="Permanent link">2</a><signature id="APISet.color+2">

```lx
APISet.color(control : Control, value : Color) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APISet" signature="angle(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.angle</h4><a class="signature-arity" href="#APISet.angle+2" title="Permanent link">2</a><signature id="APISet.angle+2">

```lx
APISet.angle(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APISet" signature="pixelated(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.pixelated</h4><a class="signature-arity" href="#APISet.pixelated+2" title="Permanent link">2</a><signature id="APISet.pixelated+2">

```lx
APISet.pixelated(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APISet" signature="fit(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.fit</h4><a class="signature-arity" href="#APISet.fit+2" title="Permanent link">2</a><signature id="APISet.fit+2">

```lx
APISet.fit(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APISet" signature="uv(control : Control, value : Float4)"></endpoint>
<h4 class="signature_head">APISet.uv</h4><a class="signature-arity" href="#APISet.uv+2" title="Permanent link">2</a><signature id="APISet.uv+2">

```lx
APISet.uv(control : Control, value : Float4) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="APISet" signature="material(control : Control, value : Asset)"></endpoint>
<h4 class="signature_head">APISet.material</h4><a class="signature-arity" href="#APISet.material+2" title="Permanent link">2</a><signature id="APISet.material+2">

```lx
APISet.material(control : Control, value : Asset) : unknown
```
</signature>

> no docs found   


### Fields
`import "luxe: ui/image.control.api" for Fields{:lx}`
> no docs found

- [image](#Fields.image)
- [color](#Fields.color)
- [angle](#Fields.angle)
- [pixelated](#Fields.pixelated)
- [fit](#Fields.fit)
- [uv](#Fields.uv)
- [material](#Fields.material)


---

<endpoint module="luxe: ui/image.control.api" class="Fields" signature="image"></endpoint>
<h4 class="signature_head">Fields.image</h4><a class="signature-arity" href="#Fields.image" title="Permanent link">1</a><signature id="Fields.image">

```lx
Fields.image : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="Fields" signature="color"></endpoint>
<h4 class="signature_head">Fields.color</h4><a class="signature-arity" href="#Fields.color" title="Permanent link">1</a><signature id="Fields.color">

```lx
Fields.color : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="Fields" signature="angle"></endpoint>
<h4 class="signature_head">Fields.angle</h4><a class="signature-arity" href="#Fields.angle" title="Permanent link">1</a><signature id="Fields.angle">

```lx
Fields.angle : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="Fields" signature="pixelated"></endpoint>
<h4 class="signature_head">Fields.pixelated</h4><a class="signature-arity" href="#Fields.pixelated" title="Permanent link">1</a><signature id="Fields.pixelated">

```lx
Fields.pixelated : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="Fields" signature="fit"></endpoint>
<h4 class="signature_head">Fields.fit</h4><a class="signature-arity" href="#Fields.fit" title="Permanent link">1</a><signature id="Fields.fit">

```lx
Fields.fit : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="Fields" signature="uv"></endpoint>
<h4 class="signature_head">Fields.uv</h4><a class="signature-arity" href="#Fields.uv" title="Permanent link">1</a><signature id="Fields.uv">

```lx
Fields.uv : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control.api" class="Fields" signature="material"></endpoint>
<h4 class="signature_head">Fields.material</h4><a class="signature-arity" href="#Fields.material" title="Permanent link">1</a><signature id="Fields.material">

```lx
Fields.material : String
```
</signature>

> no docs found   

