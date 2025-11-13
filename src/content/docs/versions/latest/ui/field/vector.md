---
title: "luxe: ui/field/vector"
description: API version 2025.11.1
---
## `luxe: ui/field/vector{:lx}` module

- [UIVector](#uivector)   
- [UIVectorState](#uivectorstate)   

---


### UIVector
`import "luxe: ui/field/vector" for UIVector{:lx}`
> no docs found

- [create](#UIVector.create)(**ui**: `Any{:lx}`)
- [get_component_count](#UIVector.get_component_count)(**vec**: `Control{:lx}`)
- [set_component_count](#UIVector.set_component_count+2)(**vec**: `Control{:lx}`, **count**: `Num{:lx}`)
- [get_value](#UIVector.get_value)(**vec**: `Control{:lx}`)
- [set_value](#UIVector.set_value+2)(**vec**: `Control{:lx}`, **value**: `Vec{:lx}`)
- [get_text_field](#UIVector.get_text_field+2)(**vec**: `Control{:lx}`, **index**: `Num{:lx}`)


---

<endpoint module="luxe: ui/field/vector" class="UIVector" signature="create(ui : Any)"></endpoint>
<h4 class="signature_head">UIVector.create</h4><a class="signature-arity" href="#UIVector.create" title="Permanent link">1</a><signature id="UIVector.create">

```lx
UIVector.create(ui : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVector" signature="get_component_count(vec : Control)"></endpoint>
<h4 class="signature_head">UIVector.get_component_count</h4><a class="signature-arity" href="#UIVector.get_component_count" title="Permanent link">1</a><signature id="UIVector.get_component_count">

```lx
UIVector.get_component_count(vec : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVector" signature="set_component_count(vec : Control, count : Num)"></endpoint>
<h4 class="signature_head">UIVector.set_component_count</h4><a class="signature-arity" href="#UIVector.set_component_count+2" title="Permanent link">2</a><signature id="UIVector.set_component_count+2">

```lx
UIVector.set_component_count(vec : Control, count : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVector" signature="get_value(vec : Control)"></endpoint>
<h4 class="signature_head">UIVector.get_value</h4><a class="signature-arity" href="#UIVector.get_value" title="Permanent link">1</a><signature id="UIVector.get_value">

```lx
UIVector.get_value(vec : Control) : Vec
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVector" signature="set_value(vec : Control, value : Vec)"></endpoint>
<h4 class="signature_head">UIVector.set_value</h4><a class="signature-arity" href="#UIVector.set_value+2" title="Permanent link">2</a><signature id="UIVector.set_value+2">

```lx
UIVector.set_value(vec : Control, value : Vec) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVector" signature="get_text_field(vec : Control, index : Num)"></endpoint>
<h4 class="signature_head">UIVector.get_text_field</h4><a class="signature-arity" href="#UIVector.get_text_field+2" title="Permanent link">2</a><signature id="UIVector.get_text_field+2">

```lx
UIVector.get_text_field(vec : Control, index : Num) : Control
```
</signature>

> no docs found   


### UIVectorState
`import "luxe: ui/field/vector" for UIVectorState{:lx}`
> no docs found

- [components](#UIVectorState.components)
- [components](#UIVectorState.components=)=(v : Any)
- [value](#UIVectorState.value)
- [set_value](#UIVectorState.set_value)(**value**: `Vec{:lx}`)
- [get_text_field](#UIVectorState.get_text_field)(**index**: `Num{:lx}`)
- [make_field](#UIVectorState.make_field)(**index**: `Num{:lx}`)
- [new](#UIVectorState.new+2)(**ui**: `Any{:lx}`, **ctrl**: `Any{:lx}`)
- [on_event](#UIVectorState.on_event+2)(**field**: `Any{:lx}`, **event**: `Any{:lx}`)


---

<endpoint module="luxe: ui/field/vector" class="UIVectorState" signature="components"></endpoint>
<h4 class="signature_head">UIVectorState.components</h4><a class="signature-arity" href="#UIVectorState.components" title="Permanent link">1</a><signature id="UIVectorState.components">

```lx
UIVectorState.components : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVectorState" signature="components=(v : Any)"></endpoint>
<h4 class="signature_head">UIVectorState.components</h4><a class="signature-arity" href="#UIVectorState.components=" title="Permanent link">1</a><signature id="UIVectorState.components=">

```lx
UIVectorState.components=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVectorState" signature="value"></endpoint>
<h4 class="signature_head">UIVectorState.value</h4><a class="signature-arity" href="#UIVectorState.value" title="Permanent link">1</a><signature id="UIVectorState.value">

```lx
UIVectorState.value : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVectorState" signature="set_value(value : Vec)"></endpoint>
<h4 class="signature_head">UIVectorState.set_value</h4><a class="signature-arity" href="#UIVectorState.set_value" title="Permanent link">1</a><signature id="UIVectorState.set_value">

```lx
UIVectorState.set_value(value : Vec) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVectorState" signature="get_text_field(index : Num)"></endpoint>
<h4 class="signature_head">UIVectorState.get_text_field</h4><a class="signature-arity" href="#UIVectorState.get_text_field" title="Permanent link">1</a><signature id="UIVectorState.get_text_field">

```lx
UIVectorState.get_text_field(index : Num) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVectorState" signature="make_field(index : Num)"></endpoint>
<h4 class="signature_head">UIVectorState.make_field</h4><a class="signature-arity" href="#UIVectorState.make_field" title="Permanent link">1</a><signature id="UIVectorState.make_field">

```lx
UIVectorState.make_field(index : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVectorState" signature="new(ui : Any, ctrl : Any)"></endpoint>
<h4 class="signature_head">UIVectorState.new</h4><a class="signature-arity" href="#UIVectorState.new+2" title="Permanent link">2</a><signature id="UIVectorState.new+2">

```lx
UIVectorState.new(ui : Any, ctrl : Any) : UIVectorState
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/vector" class="UIVectorState" signature="on_event(field : Any, event : Any)"></endpoint>
<h4 class="signature_head">UIVectorState.on_event</h4><a class="signature-arity" href="#UIVectorState.on_event+2" title="Permanent link">2</a><signature id="UIVectorState.on_event+2">

```lx
UIVectorState.on_event(field : Any, event : Any) : unknown
```
</signature>

> no docs found   

