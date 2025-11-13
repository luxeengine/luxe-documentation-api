---
title: "luxe: ui/text.control.api"
description: API version 2025.11.1
---
## `luxe: ui/text.control.api{:lx}` module

- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


### API
`import "luxe: ui/text.control.api" for API{:lx}`
> no docs found

- [id](#API.id)
- [create](#API.create)(**ui**: `Entity{:lx}`)
- [has](#API.has)(**control**: `Control{:lx}`)
- [get](#API.get)(**control**: `Control{:lx}`)
- [get](#API.get)
- [set](#API.set)


---

<endpoint module="luxe: ui/text.control.api" class="API" signature="id"></endpoint>
<h4 class="signature_head">API.id</h4><a class="signature-arity" href="#API.id" title="Permanent link">1</a><signature id="API.id">

```lx
API.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">API.create</h4><a class="signature-arity" href="#API.create" title="Permanent link">1</a><signature id="API.create">

```lx
API.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="has(control : Control)"></endpoint>
<h4 class="signature_head">API.has</h4><a class="signature-arity" href="#API.has" title="Permanent link">1</a><signature id="API.has">

```lx
API.has(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="get(control : Control)"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get(control : Control) : Data
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="get"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="set"></endpoint>
<h4 class="signature_head">API.set</h4><a class="signature-arity" href="#API.set" title="Permanent link">1</a><signature id="API.set">

```lx
API.set : APISet
```
</signature>

> no docs found   


### APIGet
`import "luxe: ui/text.control.api" for APIGet{:lx}`
> no docs found

- [new](#APIGet.new)()
- [text](#APIGet.text)(**control**: `Control{:lx}`)
- [align](#APIGet.align)(**control**: `Control{:lx}`)
- [align_vertical](#APIGet.align_vertical)(**control**: `Control{:lx}`)
- [override](#APIGet.override)(**control**: `Control{:lx}`)
- [render_text](#APIGet.render_text)(**control**: `Control{:lx}`)
- [offset](#APIGet.offset)(**control**: `Control{:lx}`)
- [press_time](#APIGet.press_time)(**control**: `Control{:lx}`)
- [blink_next](#APIGet.blink_next)(**control**: `Control{:lx}`)
- [index](#APIGet.index)(**control**: `Control{:lx}`)
- [index_offset](#APIGet.index_offset)(**control**: `Control{:lx}`)
- [select_index](#APIGet.select_index)(**control**: `Control{:lx}`)
- [select_count](#APIGet.select_count)(**control**: `Control{:lx}`)
- [composition_index](#APIGet.composition_index)(**control**: `Control{:lx}`)
- [composition_size](#APIGet.composition_size)(**control**: `Control{:lx}`)
- [blink](#APIGet.blink)(**control**: `Control{:lx}`)
- [dragging](#APIGet.dragging)(**control**: `Control{:lx}`)
- [editing](#APIGet.editing)(**control**: `Control{:lx}`)
- [invalidated](#APIGet.invalidated)(**control**: `Control{:lx}`)
- [text_pre](#APIGet.text_pre)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="new()"></endpoint>
<h4 class="signature_head">APIGet.new</h4><a class="signature-arity" href="#APIGet.new" title="Permanent link">1</a><signature id="APIGet.new">

```lx
APIGet.new() : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="text(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.text</h4><a class="signature-arity" href="#APIGet.text" title="Permanent link">1</a><signature id="APIGet.text">

```lx
APIGet.text(control : Control) : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="align(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.align</h4><a class="signature-arity" href="#APIGet.align" title="Permanent link">1</a><signature id="APIGet.align">

```lx
APIGet.align(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="align_vertical(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.align_vertical</h4><a class="signature-arity" href="#APIGet.align_vertical" title="Permanent link">1</a><signature id="APIGet.align_vertical">

```lx
APIGet.align_vertical(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="override(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.override</h4><a class="signature-arity" href="#APIGet.override" title="Permanent link">1</a><signature id="APIGet.override">

```lx
APIGet.override(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="render_text(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.render_text</h4><a class="signature-arity" href="#APIGet.render_text" title="Permanent link">1</a><signature id="APIGet.render_text">

```lx
APIGet.render_text(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="offset(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.offset</h4><a class="signature-arity" href="#APIGet.offset" title="Permanent link">1</a><signature id="APIGet.offset">

```lx
APIGet.offset(control : Control) : Float2
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="press_time(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.press_time</h4><a class="signature-arity" href="#APIGet.press_time" title="Permanent link">1</a><signature id="APIGet.press_time">

```lx
APIGet.press_time(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="blink_next(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.blink_next</h4><a class="signature-arity" href="#APIGet.blink_next" title="Permanent link">1</a><signature id="APIGet.blink_next">

```lx
APIGet.blink_next(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="index(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.index</h4><a class="signature-arity" href="#APIGet.index" title="Permanent link">1</a><signature id="APIGet.index">

```lx
APIGet.index(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="index_offset(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.index_offset</h4><a class="signature-arity" href="#APIGet.index_offset" title="Permanent link">1</a><signature id="APIGet.index_offset">

```lx
APIGet.index_offset(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="select_index(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.select_index</h4><a class="signature-arity" href="#APIGet.select_index" title="Permanent link">1</a><signature id="APIGet.select_index">

```lx
APIGet.select_index(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="select_count(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.select_count</h4><a class="signature-arity" href="#APIGet.select_count" title="Permanent link">1</a><signature id="APIGet.select_count">

```lx
APIGet.select_count(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="composition_index(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.composition_index</h4><a class="signature-arity" href="#APIGet.composition_index" title="Permanent link">1</a><signature id="APIGet.composition_index">

```lx
APIGet.composition_index(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="composition_size(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.composition_size</h4><a class="signature-arity" href="#APIGet.composition_size" title="Permanent link">1</a><signature id="APIGet.composition_size">

```lx
APIGet.composition_size(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="blink(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.blink</h4><a class="signature-arity" href="#APIGet.blink" title="Permanent link">1</a><signature id="APIGet.blink">

```lx
APIGet.blink(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="dragging(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.dragging</h4><a class="signature-arity" href="#APIGet.dragging" title="Permanent link">1</a><signature id="APIGet.dragging">

```lx
APIGet.dragging(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="editing(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.editing</h4><a class="signature-arity" href="#APIGet.editing" title="Permanent link">1</a><signature id="APIGet.editing">

```lx
APIGet.editing(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="invalidated(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.invalidated</h4><a class="signature-arity" href="#APIGet.invalidated" title="Permanent link">1</a><signature id="APIGet.invalidated">

```lx
APIGet.invalidated(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="text_pre(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.text_pre</h4><a class="signature-arity" href="#APIGet.text_pre" title="Permanent link">1</a><signature id="APIGet.text_pre">

```lx
APIGet.text_pre(control : Control) : String
```
</signature>

> no docs found   


### APISet
`import "luxe: ui/text.control.api" for APISet{:lx}`
> no docs found

- [new](#APISet.new)()
- [text](#APISet.text+2)(**control**: `Control{:lx}`, **value**: `String{:lx}`)
- [align](#APISet.align+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [align_vertical](#APISet.align_vertical+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [override](#APISet.override+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [render_text](#APISet.render_text+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [offset](#APISet.offset+2)(**control**: `Control{:lx}`, **value**: `Float2{:lx}`)
- [press_time](#APISet.press_time+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [blink_next](#APISet.blink_next+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [index](#APISet.index+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [index_offset](#APISet.index_offset+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [select_index](#APISet.select_index+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [select_count](#APISet.select_count+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [composition_index](#APISet.composition_index+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [composition_size](#APISet.composition_size+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [blink](#APISet.blink+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [dragging](#APISet.dragging+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [editing](#APISet.editing+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [invalidated](#APISet.invalidated+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [text_pre](#APISet.text_pre+2)(**control**: `Control{:lx}`, **value**: `String{:lx}`)


---

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="new()"></endpoint>
<h4 class="signature_head">APISet.new</h4><a class="signature-arity" href="#APISet.new" title="Permanent link">1</a><signature id="APISet.new">

```lx
APISet.new() : APISet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="text(control : Control, value : String)"></endpoint>
<h4 class="signature_head">APISet.text</h4><a class="signature-arity" href="#APISet.text+2" title="Permanent link">2</a><signature id="APISet.text+2">

```lx
APISet.text(control : Control, value : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="align(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.align</h4><a class="signature-arity" href="#APISet.align+2" title="Permanent link">2</a><signature id="APISet.align+2">

```lx
APISet.align(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="align_vertical(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.align_vertical</h4><a class="signature-arity" href="#APISet.align_vertical+2" title="Permanent link">2</a><signature id="APISet.align_vertical+2">

```lx
APISet.align_vertical(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="override(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.override</h4><a class="signature-arity" href="#APISet.override+2" title="Permanent link">2</a><signature id="APISet.override+2">

```lx
APISet.override(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="render_text(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.render_text</h4><a class="signature-arity" href="#APISet.render_text+2" title="Permanent link">2</a><signature id="APISet.render_text+2">

```lx
APISet.render_text(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="offset(control : Control, value : Float2)"></endpoint>
<h4 class="signature_head">APISet.offset</h4><a class="signature-arity" href="#APISet.offset+2" title="Permanent link">2</a><signature id="APISet.offset+2">

```lx
APISet.offset(control : Control, value : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="press_time(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.press_time</h4><a class="signature-arity" href="#APISet.press_time+2" title="Permanent link">2</a><signature id="APISet.press_time+2">

```lx
APISet.press_time(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="blink_next(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.blink_next</h4><a class="signature-arity" href="#APISet.blink_next+2" title="Permanent link">2</a><signature id="APISet.blink_next+2">

```lx
APISet.blink_next(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="index(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.index</h4><a class="signature-arity" href="#APISet.index+2" title="Permanent link">2</a><signature id="APISet.index+2">

```lx
APISet.index(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="index_offset(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.index_offset</h4><a class="signature-arity" href="#APISet.index_offset+2" title="Permanent link">2</a><signature id="APISet.index_offset+2">

```lx
APISet.index_offset(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="select_index(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.select_index</h4><a class="signature-arity" href="#APISet.select_index+2" title="Permanent link">2</a><signature id="APISet.select_index+2">

```lx
APISet.select_index(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="select_count(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.select_count</h4><a class="signature-arity" href="#APISet.select_count+2" title="Permanent link">2</a><signature id="APISet.select_count+2">

```lx
APISet.select_count(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="composition_index(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.composition_index</h4><a class="signature-arity" href="#APISet.composition_index+2" title="Permanent link">2</a><signature id="APISet.composition_index+2">

```lx
APISet.composition_index(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="composition_size(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.composition_size</h4><a class="signature-arity" href="#APISet.composition_size+2" title="Permanent link">2</a><signature id="APISet.composition_size+2">

```lx
APISet.composition_size(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="blink(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.blink</h4><a class="signature-arity" href="#APISet.blink+2" title="Permanent link">2</a><signature id="APISet.blink+2">

```lx
APISet.blink(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="dragging(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.dragging</h4><a class="signature-arity" href="#APISet.dragging+2" title="Permanent link">2</a><signature id="APISet.dragging+2">

```lx
APISet.dragging(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="editing(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.editing</h4><a class="signature-arity" href="#APISet.editing+2" title="Permanent link">2</a><signature id="APISet.editing+2">

```lx
APISet.editing(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="invalidated(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">APISet.invalidated</h4><a class="signature-arity" href="#APISet.invalidated+2" title="Permanent link">2</a><signature id="APISet.invalidated+2">

```lx
APISet.invalidated(control : Control, value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="text_pre(control : Control, value : String)"></endpoint>
<h4 class="signature_head">APISet.text_pre</h4><a class="signature-arity" href="#APISet.text_pre+2" title="Permanent link">2</a><signature id="APISet.text_pre+2">

```lx
APISet.text_pre(control : Control, value : String) : unknown
```
</signature>

> no docs found   


### Fields
`import "luxe: ui/text.control.api" for Fields{:lx}`
> no docs found

- [text](#Fields.text)
- [align](#Fields.align)
- [align_vertical](#Fields.align_vertical)
- [override](#Fields.override)
- [render_text](#Fields.render_text)
- [offset](#Fields.offset)
- [press_time](#Fields.press_time)
- [blink_next](#Fields.blink_next)
- [index](#Fields.index)
- [index_offset](#Fields.index_offset)
- [select_index](#Fields.select_index)
- [select_count](#Fields.select_count)
- [composition_index](#Fields.composition_index)
- [composition_size](#Fields.composition_size)
- [blink](#Fields.blink)
- [dragging](#Fields.dragging)
- [editing](#Fields.editing)
- [invalidated](#Fields.invalidated)
- [text_pre](#Fields.text_pre)


---

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="text"></endpoint>
<h4 class="signature_head">Fields.text</h4><a class="signature-arity" href="#Fields.text" title="Permanent link">1</a><signature id="Fields.text">

```lx
Fields.text : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="align"></endpoint>
<h4 class="signature_head">Fields.align</h4><a class="signature-arity" href="#Fields.align" title="Permanent link">1</a><signature id="Fields.align">

```lx
Fields.align : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="align_vertical"></endpoint>
<h4 class="signature_head">Fields.align_vertical</h4><a class="signature-arity" href="#Fields.align_vertical" title="Permanent link">1</a><signature id="Fields.align_vertical">

```lx
Fields.align_vertical : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="override"></endpoint>
<h4 class="signature_head">Fields.override</h4><a class="signature-arity" href="#Fields.override" title="Permanent link">1</a><signature id="Fields.override">

```lx
Fields.override : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="render_text"></endpoint>
<h4 class="signature_head">Fields.render_text</h4><a class="signature-arity" href="#Fields.render_text" title="Permanent link">1</a><signature id="Fields.render_text">

```lx
Fields.render_text : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="offset"></endpoint>
<h4 class="signature_head">Fields.offset</h4><a class="signature-arity" href="#Fields.offset" title="Permanent link">1</a><signature id="Fields.offset">

```lx
Fields.offset : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="press_time"></endpoint>
<h4 class="signature_head">Fields.press_time</h4><a class="signature-arity" href="#Fields.press_time" title="Permanent link">1</a><signature id="Fields.press_time">

```lx
Fields.press_time : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="blink_next"></endpoint>
<h4 class="signature_head">Fields.blink_next</h4><a class="signature-arity" href="#Fields.blink_next" title="Permanent link">1</a><signature id="Fields.blink_next">

```lx
Fields.blink_next : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="index"></endpoint>
<h4 class="signature_head">Fields.index</h4><a class="signature-arity" href="#Fields.index" title="Permanent link">1</a><signature id="Fields.index">

```lx
Fields.index : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="index_offset"></endpoint>
<h4 class="signature_head">Fields.index_offset</h4><a class="signature-arity" href="#Fields.index_offset" title="Permanent link">1</a><signature id="Fields.index_offset">

```lx
Fields.index_offset : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="select_index"></endpoint>
<h4 class="signature_head">Fields.select_index</h4><a class="signature-arity" href="#Fields.select_index" title="Permanent link">1</a><signature id="Fields.select_index">

```lx
Fields.select_index : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="select_count"></endpoint>
<h4 class="signature_head">Fields.select_count</h4><a class="signature-arity" href="#Fields.select_count" title="Permanent link">1</a><signature id="Fields.select_count">

```lx
Fields.select_count : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="composition_index"></endpoint>
<h4 class="signature_head">Fields.composition_index</h4><a class="signature-arity" href="#Fields.composition_index" title="Permanent link">1</a><signature id="Fields.composition_index">

```lx
Fields.composition_index : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="composition_size"></endpoint>
<h4 class="signature_head">Fields.composition_size</h4><a class="signature-arity" href="#Fields.composition_size" title="Permanent link">1</a><signature id="Fields.composition_size">

```lx
Fields.composition_size : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="blink"></endpoint>
<h4 class="signature_head">Fields.blink</h4><a class="signature-arity" href="#Fields.blink" title="Permanent link">1</a><signature id="Fields.blink">

```lx
Fields.blink : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="dragging"></endpoint>
<h4 class="signature_head">Fields.dragging</h4><a class="signature-arity" href="#Fields.dragging" title="Permanent link">1</a><signature id="Fields.dragging">

```lx
Fields.dragging : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="editing"></endpoint>
<h4 class="signature_head">Fields.editing</h4><a class="signature-arity" href="#Fields.editing" title="Permanent link">1</a><signature id="Fields.editing">

```lx
Fields.editing : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="invalidated"></endpoint>
<h4 class="signature_head">Fields.invalidated</h4><a class="signature-arity" href="#Fields.invalidated" title="Permanent link">1</a><signature id="Fields.invalidated">

```lx
Fields.invalidated : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="text_pre"></endpoint>
<h4 class="signature_head">Fields.text_pre</h4><a class="signature-arity" href="#Fields.text_pre" title="Permanent link">1</a><signature id="Fields.text_pre">

```lx
Fields.text_pre : String
```
</signature>

> no docs found   

