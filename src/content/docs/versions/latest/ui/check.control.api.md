---
title: "luxe: ui/check.control.api"
description: API version 2025.11.1
---
## `luxe: ui/check.control.api{:lx}` module

- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


### API
`import "luxe: ui/check.control.api" for API{:lx}`
> no docs found

- [id](#API.id)
- [create](#API.create)(**ui**: `Entity{:lx}`)
- [has](#API.has)(**control**: `Control{:lx}`)
- [get](#API.get)(**control**: `Control{:lx}`)
- [get](#API.get)
- [set](#API.set)


---

<endpoint module="luxe: ui/check.control.api" class="API" signature="id"></endpoint>
<h4 class="signature_head">API.id</h4><a class="signature-arity" href="#API.id" title="Permanent link">1</a><signature id="API.id">

```lx
API.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="API" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">API.create</h4><a class="signature-arity" href="#API.create" title="Permanent link">1</a><signature id="API.create">

```lx
API.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="API" signature="has(control : Control)"></endpoint>
<h4 class="signature_head">API.has</h4><a class="signature-arity" href="#API.has" title="Permanent link">1</a><signature id="API.has">

```lx
API.has(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="API" signature="get(control : Control)"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get(control : Control) : Data
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="API" signature="get"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="API" signature="set"></endpoint>
<h4 class="signature_head">API.set</h4><a class="signature-arity" href="#API.set" title="Permanent link">1</a><signature id="API.set">

```lx
API.set : APISet
```
</signature>

> no docs found   


### APIGet
`import "luxe: ui/check.control.api" for APIGet{:lx}`
> no docs found

- [new](#APIGet.new)()
- [state](#APIGet.state)(**control**: `Control{:lx}`)
- [override](#APIGet.override)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/check.control.api" class="APIGet" signature="new()"></endpoint>
<h4 class="signature_head">APIGet.new</h4><a class="signature-arity" href="#APIGet.new" title="Permanent link">1</a><signature id="APIGet.new">

```lx
APIGet.new() : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="APIGet" signature="state(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.state</h4><a class="signature-arity" href="#APIGet.state" title="Permanent link">1</a><signature id="APIGet.state">

```lx
APIGet.state(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="APIGet" signature="override(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.override</h4><a class="signature-arity" href="#APIGet.override" title="Permanent link">1</a><signature id="APIGet.override">

```lx
APIGet.override(control : Control) : Any
```
</signature>

> no docs found   


### APISet
`import "luxe: ui/check.control.api" for APISet{:lx}`
> no docs found

- [new](#APISet.new)()
- [state](#APISet.state+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [override](#APISet.override+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)


---

<endpoint module="luxe: ui/check.control.api" class="APISet" signature="new()"></endpoint>
<h4 class="signature_head">APISet.new</h4><a class="signature-arity" href="#APISet.new" title="Permanent link">1</a><signature id="APISet.new">

```lx
APISet.new() : APISet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="APISet" signature="state(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.state</h4><a class="signature-arity" href="#APISet.state+2" title="Permanent link">2</a><signature id="APISet.state+2">

```lx
APISet.state(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="APISet" signature="override(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.override</h4><a class="signature-arity" href="#APISet.override+2" title="Permanent link">2</a><signature id="APISet.override+2">

```lx
APISet.override(control : Control, value : Any) : unknown
```
</signature>

> no docs found   


### Fields
`import "luxe: ui/check.control.api" for Fields{:lx}`
> no docs found

- [state](#Fields.state)
- [override](#Fields.override)


---

<endpoint module="luxe: ui/check.control.api" class="Fields" signature="state"></endpoint>
<h4 class="signature_head">Fields.state</h4><a class="signature-arity" href="#Fields.state" title="Permanent link">1</a><signature id="Fields.state">

```lx
Fields.state : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/check.control.api" class="Fields" signature="override"></endpoint>
<h4 class="signature_head">Fields.override</h4><a class="signature-arity" href="#Fields.override" title="Permanent link">1</a><signature id="Fields.override">

```lx
Fields.override : String
```
</signature>

> no docs found   

