---
title: "luxe: ui/window.control.api"
description: API version 2025.11.1
---
## `luxe: ui/window.control.api{:lx}` module

- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


### API
`import "luxe: ui/window.control.api" for API{:lx}`
> no docs found

- [id](#API.id)
- [create](#API.create)(**ui**: `Entity{:lx}`)
- [has](#API.has)(**control**: `Control{:lx}`)
- [get](#API.get)(**control**: `Control{:lx}`)
- [get](#API.get)
- [set](#API.set)


---

<endpoint module="luxe: ui/window.control.api" class="API" signature="id"></endpoint>
<h4 class="signature_head">API.id</h4><a class="signature-arity" href="#API.id" title="Permanent link">1</a><signature id="API.id">

```lx
API.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">API.create</h4><a class="signature-arity" href="#API.create" title="Permanent link">1</a><signature id="API.create">

```lx
API.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="has(control : Control)"></endpoint>
<h4 class="signature_head">API.has</h4><a class="signature-arity" href="#API.has" title="Permanent link">1</a><signature id="API.has">

```lx
API.has(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="get(control : Control)"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get(control : Control) : Data
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="get"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="set"></endpoint>
<h4 class="signature_head">API.set</h4><a class="signature-arity" href="#API.set" title="Permanent link">1</a><signature id="API.set">

```lx
API.set : APISet
```
</signature>

> no docs found   


### APIGet
`import "luxe: ui/window.control.api" for APIGet{:lx}`
> no docs found

- [new](#APIGet.new)()
- [bring_to_front](#APIGet.bring_to_front)(**control**: `Control{:lx}`)
- [closable](#APIGet.closable)(**control**: `Control{:lx}`)
- [collapsible](#APIGet.collapsible)(**control**: `Control{:lx}`)
- [resizable](#APIGet.resizable)(**control**: `Control{:lx}`)
- [draggable](#APIGet.draggable)(**control**: `Control{:lx}`)
- [title_height](#APIGet.title_height)(**control**: `Control{:lx}`)
- [text](#APIGet.text)(**control**: `Control{:lx}`)
- [align](#APIGet.align)(**control**: `Control{:lx}`)
- [align_vertical](#APIGet.align_vertical)(**control**: `Control{:lx}`)
- [localization](#APIGet.localization)(**control**: `Control{:lx}`)
- [max_visible](#APIGet.max_visible)(**control**: `Control{:lx}`)
- [text_margin](#APIGet.text_margin)(**control**: `Control{:lx}`)
- [override](#APIGet.override)(**control**: `Control{:lx}`)
- [render_text](#APIGet.render_text)(**control**: `Control{:lx}`)
- [dragging](#APIGet.dragging)(**control**: `Control{:lx}`)
- [dragging_resize](#APIGet.dragging_resize)(**control**: `Control{:lx}`)
- [collapsed](#APIGet.collapsed)(**control**: `Control{:lx}`)
- [in_title](#APIGet.in_title)(**control**: `Control{:lx}`)
- [in_close_handle](#APIGet.in_close_handle)(**control**: `Control{:lx}`)
- [in_collapse_handle](#APIGet.in_collapse_handle)(**control**: `Control{:lx}`)
- [in_resize_handle](#APIGet.in_resize_handle)(**control**: `Control{:lx}`)
- [collapse_size](#APIGet.collapse_size)(**control**: `Control{:lx}`)
- [drag](#APIGet.drag)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="new()"></endpoint>
<h4 class="signature_head">APIGet.new</h4><a class="signature-arity" href="#APIGet.new" title="Permanent link">1</a><signature id="APIGet.new">

```lx
APIGet.new() : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="bring_to_front(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.bring_to_front</h4><a class="signature-arity" href="#APIGet.bring_to_front" title="Permanent link">1</a><signature id="APIGet.bring_to_front">

```lx
APIGet.bring_to_front(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="closable(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.closable</h4><a class="signature-arity" href="#APIGet.closable" title="Permanent link">1</a><signature id="APIGet.closable">

```lx
APIGet.closable(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapsible(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.collapsible</h4><a class="signature-arity" href="#APIGet.collapsible" title="Permanent link">1</a><signature id="APIGet.collapsible">

```lx
APIGet.collapsible(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="resizable(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.resizable</h4><a class="signature-arity" href="#APIGet.resizable" title="Permanent link">1</a><signature id="APIGet.resizable">

```lx
APIGet.resizable(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="draggable(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.draggable</h4><a class="signature-arity" href="#APIGet.draggable" title="Permanent link">1</a><signature id="APIGet.draggable">

```lx
APIGet.draggable(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="title_height(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.title_height</h4><a class="signature-arity" href="#APIGet.title_height" title="Permanent link">1</a><signature id="APIGet.title_height">

```lx
APIGet.title_height(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="text(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.text</h4><a class="signature-arity" href="#APIGet.text" title="Permanent link">1</a><signature id="APIGet.text">

```lx
APIGet.text(control : Control) : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="align(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.align</h4><a class="signature-arity" href="#APIGet.align" title="Permanent link">1</a><signature id="APIGet.align">

```lx
APIGet.align(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="align_vertical(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.align_vertical</h4><a class="signature-arity" href="#APIGet.align_vertical" title="Permanent link">1</a><signature id="APIGet.align_vertical">

```lx
APIGet.align_vertical(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="localization(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.localization</h4><a class="signature-arity" href="#APIGet.localization" title="Permanent link">1</a><signature id="APIGet.localization">

```lx
APIGet.localization(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="max_visible(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.max_visible</h4><a class="signature-arity" href="#APIGet.max_visible" title="Permanent link">1</a><signature id="APIGet.max_visible">

```lx
APIGet.max_visible(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="text_margin(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.text_margin</h4><a class="signature-arity" href="#APIGet.text_margin" title="Permanent link">1</a><signature id="APIGet.text_margin">

```lx
APIGet.text_margin(control : Control) : Float4
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="override(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.override</h4><a class="signature-arity" href="#APIGet.override" title="Permanent link">1</a><signature id="APIGet.override">

```lx
APIGet.override(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="render_text(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.render_text</h4><a class="signature-arity" href="#APIGet.render_text" title="Permanent link">1</a><signature id="APIGet.render_text">

```lx
APIGet.render_text(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="dragging(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.dragging</h4><a class="signature-arity" href="#APIGet.dragging" title="Permanent link">1</a><signature id="APIGet.dragging">

```lx
APIGet.dragging(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="dragging_resize(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.dragging_resize</h4><a class="signature-arity" href="#APIGet.dragging_resize" title="Permanent link">1</a><signature id="APIGet.dragging_resize">

```lx
APIGet.dragging_resize(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapsed(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.collapsed</h4><a class="signature-arity" href="#APIGet.collapsed" title="Permanent link">1</a><signature id="APIGet.collapsed">

```lx
APIGet.collapsed(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_title(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.in_title</h4><a class="signature-arity" href="#APIGet.in_title" title="Permanent link">1</a><signature id="APIGet.in_title">

```lx
APIGet.in_title(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_close_handle(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.in_close_handle</h4><a class="signature-arity" href="#APIGet.in_close_handle" title="Permanent link">1</a><signature id="APIGet.in_close_handle">

```lx
APIGet.in_close_handle(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_collapse_handle(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.in_collapse_handle</h4><a class="signature-arity" href="#APIGet.in_collapse_handle" title="Permanent link">1</a><signature id="APIGet.in_collapse_handle">

```lx
APIGet.in_collapse_handle(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_resize_handle(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.in_resize_handle</h4><a class="signature-arity" href="#APIGet.in_resize_handle" title="Permanent link">1</a><signature id="APIGet.in_resize_handle">

```lx
APIGet.in_resize_handle(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapse_size(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.collapse_size</h4><a class="signature-arity" href="#APIGet.collapse_size" title="Permanent link">1</a><signature id="APIGet.collapse_size">

```lx
APIGet.collapse_size(control : Control) : Float2
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="drag(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.drag</h4><a class="signature-arity" href="#APIGet.drag" title="Permanent link">1</a><signature id="APIGet.drag">

```lx
APIGet.drag(control : Control) : Float2
```
</signature>

> no docs found   


### APISet
`import "luxe: ui/window.control.api" for APISet{:lx}`
> no docs found

- [new](#APISet.new)()
- [bring_to_front](#APISet.bring_to_front+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [closable](#APISet.closable+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [collapsible](#APISet.collapsible+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [resizable](#APISet.resizable+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [draggable](#APISet.draggable+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [title_height](#APISet.title_height+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [text](#APISet.text+2)(**control**: `Control{:lx}`, **value**: `String{:lx}`)
- [align](#APISet.align+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [align_vertical](#APISet.align_vertical+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [localization](#APISet.localization+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [max_visible](#APISet.max_visible+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [text_margin](#APISet.text_margin+2)(**control**: `Control{:lx}`, **value**: `Float4{:lx}`)
- [override](#APISet.override+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [render_text](#APISet.render_text+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [dragging](#APISet.dragging+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [dragging_resize](#APISet.dragging_resize+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [collapsed](#APISet.collapsed+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [in_title](#APISet.in_title+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [in_close_handle](#APISet.in_close_handle+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [in_collapse_handle](#APISet.in_collapse_handle+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [in_resize_handle](#APISet.in_resize_handle+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [collapse_size](#APISet.collapse_size+2)(**control**: `Control{:lx}`, **value**: `Float2{:lx}`)
- [drag](#APISet.drag+2)(**control**: `Control{:lx}`, **value**: `Float2{:lx}`)


---

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="new()"></endpoint>
<h4 class="signature_head">APISet.new</h4><a class="signature-arity" href="#APISet.new" title="Permanent link">1</a><signature id="APISet.new">

```lx
APISet.new() : APISet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="bring_to_front(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.bring_to_front</h4><a class="signature-arity" href="#APISet.bring_to_front+2" title="Permanent link">2</a><signature id="APISet.bring_to_front+2">

```lx
APISet.bring_to_front(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="closable(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.closable</h4><a class="signature-arity" href="#APISet.closable+2" title="Permanent link">2</a><signature id="APISet.closable+2">

```lx
APISet.closable(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapsible(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.collapsible</h4><a class="signature-arity" href="#APISet.collapsible+2" title="Permanent link">2</a><signature id="APISet.collapsible+2">

```lx
APISet.collapsible(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="resizable(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.resizable</h4><a class="signature-arity" href="#APISet.resizable+2" title="Permanent link">2</a><signature id="APISet.resizable+2">

```lx
APISet.resizable(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="draggable(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.draggable</h4><a class="signature-arity" href="#APISet.draggable+2" title="Permanent link">2</a><signature id="APISet.draggable+2">

```lx
APISet.draggable(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="title_height(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.title_height</h4><a class="signature-arity" href="#APISet.title_height+2" title="Permanent link">2</a><signature id="APISet.title_height+2">

```lx
APISet.title_height(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="text(control : Control, value : String)"></endpoint>
<h4 class="signature_head">APISet.text</h4><a class="signature-arity" href="#APISet.text+2" title="Permanent link">2</a><signature id="APISet.text+2">

```lx
APISet.text(control : Control, value : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="align(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.align</h4><a class="signature-arity" href="#APISet.align+2" title="Permanent link">2</a><signature id="APISet.align+2">

```lx
APISet.align(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="align_vertical(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.align_vertical</h4><a class="signature-arity" href="#APISet.align_vertical+2" title="Permanent link">2</a><signature id="APISet.align_vertical+2">

```lx
APISet.align_vertical(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="localization(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.localization</h4><a class="signature-arity" href="#APISet.localization+2" title="Permanent link">2</a><signature id="APISet.localization+2">

```lx
APISet.localization(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="max_visible(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.max_visible</h4><a class="signature-arity" href="#APISet.max_visible+2" title="Permanent link">2</a><signature id="APISet.max_visible+2">

```lx
APISet.max_visible(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="text_margin(control : Control, value : Float4)"></endpoint>
<h4 class="signature_head">APISet.text_margin</h4><a class="signature-arity" href="#APISet.text_margin+2" title="Permanent link">2</a><signature id="APISet.text_margin+2">

```lx
APISet.text_margin(control : Control, value : Float4) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="override(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.override</h4><a class="signature-arity" href="#APISet.override+2" title="Permanent link">2</a><signature id="APISet.override+2">

```lx
APISet.override(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="render_text(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.render_text</h4><a class="signature-arity" href="#APISet.render_text+2" title="Permanent link">2</a><signature id="APISet.render_text+2">

```lx
APISet.render_text(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="dragging(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.dragging</h4><a class="signature-arity" href="#APISet.dragging+2" title="Permanent link">2</a><signature id="APISet.dragging+2">

```lx
APISet.dragging(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="dragging_resize(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.dragging_resize</h4><a class="signature-arity" href="#APISet.dragging_resize+2" title="Permanent link">2</a><signature id="APISet.dragging_resize+2">

```lx
APISet.dragging_resize(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapsed(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.collapsed</h4><a class="signature-arity" href="#APISet.collapsed+2" title="Permanent link">2</a><signature id="APISet.collapsed+2">

```lx
APISet.collapsed(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_title(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.in_title</h4><a class="signature-arity" href="#APISet.in_title+2" title="Permanent link">2</a><signature id="APISet.in_title+2">

```lx
APISet.in_title(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_close_handle(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.in_close_handle</h4><a class="signature-arity" href="#APISet.in_close_handle+2" title="Permanent link">2</a><signature id="APISet.in_close_handle+2">

```lx
APISet.in_close_handle(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_collapse_handle(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.in_collapse_handle</h4><a class="signature-arity" href="#APISet.in_collapse_handle+2" title="Permanent link">2</a><signature id="APISet.in_collapse_handle+2">

```lx
APISet.in_collapse_handle(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_resize_handle(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.in_resize_handle</h4><a class="signature-arity" href="#APISet.in_resize_handle+2" title="Permanent link">2</a><signature id="APISet.in_resize_handle+2">

```lx
APISet.in_resize_handle(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapse_size(control : Control, value : Float2)"></endpoint>
<h4 class="signature_head">APISet.collapse_size</h4><a class="signature-arity" href="#APISet.collapse_size+2" title="Permanent link">2</a><signature id="APISet.collapse_size+2">

```lx
APISet.collapse_size(control : Control, value : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="drag(control : Control, value : Float2)"></endpoint>
<h4 class="signature_head">APISet.drag</h4><a class="signature-arity" href="#APISet.drag+2" title="Permanent link">2</a><signature id="APISet.drag+2">

```lx
APISet.drag(control : Control, value : Float2) : unknown
```
</signature>

> no docs found   


### Fields
`import "luxe: ui/window.control.api" for Fields{:lx}`
> no docs found

- [bring_to_front](#Fields.bring_to_front)
- [closable](#Fields.closable)
- [collapsible](#Fields.collapsible)
- [resizable](#Fields.resizable)
- [draggable](#Fields.draggable)
- [title_height](#Fields.title_height)
- [text](#Fields.text)
- [align](#Fields.align)
- [align_vertical](#Fields.align_vertical)
- [localization](#Fields.localization)
- [localization_key](#Fields.localization_key)
- [localization_space](#Fields.localization_space)
- [localization_args](#Fields.localization_args)
- [max_visible](#Fields.max_visible)
- [text_margin](#Fields.text_margin)
- [override](#Fields.override)
- [render_text](#Fields.render_text)
- [dragging](#Fields.dragging)
- [dragging_resize](#Fields.dragging_resize)
- [collapsed](#Fields.collapsed)
- [in_title](#Fields.in_title)
- [in_close_handle](#Fields.in_close_handle)
- [in_collapse_handle](#Fields.in_collapse_handle)
- [in_resize_handle](#Fields.in_resize_handle)
- [collapse_size](#Fields.collapse_size)
- [drag](#Fields.drag)


---

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="bring_to_front"></endpoint>
<h4 class="signature_head">Fields.bring_to_front</h4><a class="signature-arity" href="#Fields.bring_to_front" title="Permanent link">1</a><signature id="Fields.bring_to_front">

```lx
Fields.bring_to_front : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="closable"></endpoint>
<h4 class="signature_head">Fields.closable</h4><a class="signature-arity" href="#Fields.closable" title="Permanent link">1</a><signature id="Fields.closable">

```lx
Fields.closable : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapsible"></endpoint>
<h4 class="signature_head">Fields.collapsible</h4><a class="signature-arity" href="#Fields.collapsible" title="Permanent link">1</a><signature id="Fields.collapsible">

```lx
Fields.collapsible : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="resizable"></endpoint>
<h4 class="signature_head">Fields.resizable</h4><a class="signature-arity" href="#Fields.resizable" title="Permanent link">1</a><signature id="Fields.resizable">

```lx
Fields.resizable : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="draggable"></endpoint>
<h4 class="signature_head">Fields.draggable</h4><a class="signature-arity" href="#Fields.draggable" title="Permanent link">1</a><signature id="Fields.draggable">

```lx
Fields.draggable : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="title_height"></endpoint>
<h4 class="signature_head">Fields.title_height</h4><a class="signature-arity" href="#Fields.title_height" title="Permanent link">1</a><signature id="Fields.title_height">

```lx
Fields.title_height : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="text"></endpoint>
<h4 class="signature_head">Fields.text</h4><a class="signature-arity" href="#Fields.text" title="Permanent link">1</a><signature id="Fields.text">

```lx
Fields.text : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="align"></endpoint>
<h4 class="signature_head">Fields.align</h4><a class="signature-arity" href="#Fields.align" title="Permanent link">1</a><signature id="Fields.align">

```lx
Fields.align : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="align_vertical"></endpoint>
<h4 class="signature_head">Fields.align_vertical</h4><a class="signature-arity" href="#Fields.align_vertical" title="Permanent link">1</a><signature id="Fields.align_vertical">

```lx
Fields.align_vertical : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization"></endpoint>
<h4 class="signature_head">Fields.localization</h4><a class="signature-arity" href="#Fields.localization" title="Permanent link">1</a><signature id="Fields.localization">

```lx
Fields.localization : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_key"></endpoint>
<h4 class="signature_head">Fields.localization_key</h4><a class="signature-arity" href="#Fields.localization_key" title="Permanent link">1</a><signature id="Fields.localization_key">

```lx
Fields.localization_key : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_space"></endpoint>
<h4 class="signature_head">Fields.localization_space</h4><a class="signature-arity" href="#Fields.localization_space" title="Permanent link">1</a><signature id="Fields.localization_space">

```lx
Fields.localization_space : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_args"></endpoint>
<h4 class="signature_head">Fields.localization_args</h4><a class="signature-arity" href="#Fields.localization_args" title="Permanent link">1</a><signature id="Fields.localization_args">

```lx
Fields.localization_args : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="max_visible"></endpoint>
<h4 class="signature_head">Fields.max_visible</h4><a class="signature-arity" href="#Fields.max_visible" title="Permanent link">1</a><signature id="Fields.max_visible">

```lx
Fields.max_visible : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="text_margin"></endpoint>
<h4 class="signature_head">Fields.text_margin</h4><a class="signature-arity" href="#Fields.text_margin" title="Permanent link">1</a><signature id="Fields.text_margin">

```lx
Fields.text_margin : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="override"></endpoint>
<h4 class="signature_head">Fields.override</h4><a class="signature-arity" href="#Fields.override" title="Permanent link">1</a><signature id="Fields.override">

```lx
Fields.override : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="render_text"></endpoint>
<h4 class="signature_head">Fields.render_text</h4><a class="signature-arity" href="#Fields.render_text" title="Permanent link">1</a><signature id="Fields.render_text">

```lx
Fields.render_text : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="dragging"></endpoint>
<h4 class="signature_head">Fields.dragging</h4><a class="signature-arity" href="#Fields.dragging" title="Permanent link">1</a><signature id="Fields.dragging">

```lx
Fields.dragging : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="dragging_resize"></endpoint>
<h4 class="signature_head">Fields.dragging_resize</h4><a class="signature-arity" href="#Fields.dragging_resize" title="Permanent link">1</a><signature id="Fields.dragging_resize">

```lx
Fields.dragging_resize : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapsed"></endpoint>
<h4 class="signature_head">Fields.collapsed</h4><a class="signature-arity" href="#Fields.collapsed" title="Permanent link">1</a><signature id="Fields.collapsed">

```lx
Fields.collapsed : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_title"></endpoint>
<h4 class="signature_head">Fields.in_title</h4><a class="signature-arity" href="#Fields.in_title" title="Permanent link">1</a><signature id="Fields.in_title">

```lx
Fields.in_title : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_close_handle"></endpoint>
<h4 class="signature_head">Fields.in_close_handle</h4><a class="signature-arity" href="#Fields.in_close_handle" title="Permanent link">1</a><signature id="Fields.in_close_handle">

```lx
Fields.in_close_handle : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_collapse_handle"></endpoint>
<h4 class="signature_head">Fields.in_collapse_handle</h4><a class="signature-arity" href="#Fields.in_collapse_handle" title="Permanent link">1</a><signature id="Fields.in_collapse_handle">

```lx
Fields.in_collapse_handle : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_resize_handle"></endpoint>
<h4 class="signature_head">Fields.in_resize_handle</h4><a class="signature-arity" href="#Fields.in_resize_handle" title="Permanent link">1</a><signature id="Fields.in_resize_handle">

```lx
Fields.in_resize_handle : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapse_size"></endpoint>
<h4 class="signature_head">Fields.collapse_size</h4><a class="signature-arity" href="#Fields.collapse_size" title="Permanent link">1</a><signature id="Fields.collapse_size">

```lx
Fields.collapse_size : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="drag"></endpoint>
<h4 class="signature_head">Fields.drag</h4><a class="signature-arity" href="#Fields.drag" title="Permanent link">1</a><signature id="Fields.drag">

```lx
Fields.drag : String
```
</signature>

> no docs found   

