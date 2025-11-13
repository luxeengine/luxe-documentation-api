---
title: "luxe: ui/label.control.api"
description: API version 2025.11.1
---
## `luxe: ui/label.control.api{:lx}` module

- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


### API
`import "luxe: ui/label.control.api" for API{:lx}`
> no docs found

- [id](#API.id)
- [create](#API.create)(**ui**: `Entity{:lx}`)
- [has](#API.has)(**control**: `Control{:lx}`)
- [get](#API.get)(**control**: `Control{:lx}`)
- [get](#API.get)
- [set](#API.set)


---

<endpoint module="luxe: ui/label.control.api" class="API" signature="id"></endpoint>
<h4 class="signature_head">API.id</h4><a class="signature-arity" href="#API.id" title="Permanent link">1</a><signature id="API.id">

```lx
API.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="API" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">API.create</h4><a class="signature-arity" href="#API.create" title="Permanent link">1</a><signature id="API.create">

```lx
API.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="API" signature="has(control : Control)"></endpoint>
<h4 class="signature_head">API.has</h4><a class="signature-arity" href="#API.has" title="Permanent link">1</a><signature id="API.has">

```lx
API.has(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="API" signature="get(control : Control)"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get(control : Control) : Data
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="API" signature="get"></endpoint>
<h4 class="signature_head">API.get</h4><a class="signature-arity" href="#API.get" title="Permanent link">1</a><signature id="API.get">

```lx
API.get : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="API" signature="set"></endpoint>
<h4 class="signature_head">API.set</h4><a class="signature-arity" href="#API.set" title="Permanent link">1</a><signature id="API.set">

```lx
API.set : APISet
```
</signature>

> no docs found   


### APIGet
`import "luxe: ui/label.control.api" for APIGet{:lx}`
> no docs found

- [new](#APIGet.new)()
- [text](#APIGet.text)(**control**: `Control{:lx}`)
- [align](#APIGet.align)(**control**: `Control{:lx}`)
- [align_vertical](#APIGet.align_vertical)(**control**: `Control{:lx}`)
- [localization](#APIGet.localization)(**control**: `Control{:lx}`)
- [max_visible](#APIGet.max_visible)(**control**: `Control{:lx}`)
- [auto_size](#APIGet.auto_size)(**control**: `Control{:lx}`)
- [override](#APIGet.override)(**control**: `Control{:lx}`)
- [render_text](#APIGet.render_text)(**control**: `Control{:lx}`)
- [scroll_offset](#APIGet.scroll_offset)(**control**: `Control{:lx}`)
- [scroll_timer](#APIGet.scroll_timer)(**control**: `Control{:lx}`)
- [autosize_pending](#APIGet.autosize_pending)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="new()"></endpoint>
<h4 class="signature_head">APIGet.new</h4><a class="signature-arity" href="#APIGet.new" title="Permanent link">1</a><signature id="APIGet.new">

```lx
APIGet.new() : APIGet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="text(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.text</h4><a class="signature-arity" href="#APIGet.text" title="Permanent link">1</a><signature id="APIGet.text">

```lx
APIGet.text(control : Control) : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="align(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.align</h4><a class="signature-arity" href="#APIGet.align" title="Permanent link">1</a><signature id="APIGet.align">

```lx
APIGet.align(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="align_vertical(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.align_vertical</h4><a class="signature-arity" href="#APIGet.align_vertical" title="Permanent link">1</a><signature id="APIGet.align_vertical">

```lx
APIGet.align_vertical(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="localization(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.localization</h4><a class="signature-arity" href="#APIGet.localization" title="Permanent link">1</a><signature id="APIGet.localization">

```lx
APIGet.localization(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="max_visible(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.max_visible</h4><a class="signature-arity" href="#APIGet.max_visible" title="Permanent link">1</a><signature id="APIGet.max_visible">

```lx
APIGet.max_visible(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="auto_size(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.auto_size</h4><a class="signature-arity" href="#APIGet.auto_size" title="Permanent link">1</a><signature id="APIGet.auto_size">

```lx
APIGet.auto_size(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="override(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.override</h4><a class="signature-arity" href="#APIGet.override" title="Permanent link">1</a><signature id="APIGet.override">

```lx
APIGet.override(control : Control) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="render_text(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.render_text</h4><a class="signature-arity" href="#APIGet.render_text" title="Permanent link">1</a><signature id="APIGet.render_text">

```lx
APIGet.render_text(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="scroll_offset(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.scroll_offset</h4><a class="signature-arity" href="#APIGet.scroll_offset" title="Permanent link">1</a><signature id="APIGet.scroll_offset">

```lx
APIGet.scroll_offset(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="scroll_timer(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.scroll_timer</h4><a class="signature-arity" href="#APIGet.scroll_timer" title="Permanent link">1</a><signature id="APIGet.scroll_timer">

```lx
APIGet.scroll_timer(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APIGet" signature="autosize_pending(control : Control)"></endpoint>
<h4 class="signature_head">APIGet.autosize_pending</h4><a class="signature-arity" href="#APIGet.autosize_pending" title="Permanent link">1</a><signature id="APIGet.autosize_pending">

```lx
APIGet.autosize_pending(control : Control) : Num
```
</signature>

> no docs found   


### APISet
`import "luxe: ui/label.control.api" for APISet{:lx}`
> no docs found

- [new](#APISet.new)()
- [text](#APISet.text+2)(**control**: `Control{:lx}`, **value**: `String{:lx}`)
- [align](#APISet.align+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [align_vertical](#APISet.align_vertical+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [localization](#APISet.localization+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [max_visible](#APISet.max_visible+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [auto_size](#APISet.auto_size+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [override](#APISet.override+2)(**control**: `Control{:lx}`, **value**: `Any{:lx}`)
- [render_text](#APISet.render_text+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [scroll_offset](#APISet.scroll_offset+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [scroll_timer](#APISet.scroll_timer+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [autosize_pending](#APISet.autosize_pending+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)


---

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="new()"></endpoint>
<h4 class="signature_head">APISet.new</h4><a class="signature-arity" href="#APISet.new" title="Permanent link">1</a><signature id="APISet.new">

```lx
APISet.new() : APISet
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="text(control : Control, value : String)"></endpoint>
<h4 class="signature_head">APISet.text</h4><a class="signature-arity" href="#APISet.text+2" title="Permanent link">2</a><signature id="APISet.text+2">

```lx
APISet.text(control : Control, value : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="align(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.align</h4><a class="signature-arity" href="#APISet.align+2" title="Permanent link">2</a><signature id="APISet.align+2">

```lx
APISet.align(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="align_vertical(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.align_vertical</h4><a class="signature-arity" href="#APISet.align_vertical+2" title="Permanent link">2</a><signature id="APISet.align_vertical+2">

```lx
APISet.align_vertical(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="localization(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.localization</h4><a class="signature-arity" href="#APISet.localization+2" title="Permanent link">2</a><signature id="APISet.localization+2">

```lx
APISet.localization(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="max_visible(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.max_visible</h4><a class="signature-arity" href="#APISet.max_visible+2" title="Permanent link">2</a><signature id="APISet.max_visible+2">

```lx
APISet.max_visible(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="auto_size(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.auto_size</h4><a class="signature-arity" href="#APISet.auto_size+2" title="Permanent link">2</a><signature id="APISet.auto_size+2">

```lx
APISet.auto_size(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="override(control : Control, value : Any)"></endpoint>
<h4 class="signature_head">APISet.override</h4><a class="signature-arity" href="#APISet.override+2" title="Permanent link">2</a><signature id="APISet.override+2">

```lx
APISet.override(control : Control, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="render_text(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.render_text</h4><a class="signature-arity" href="#APISet.render_text+2" title="Permanent link">2</a><signature id="APISet.render_text+2">

```lx
APISet.render_text(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="scroll_offset(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.scroll_offset</h4><a class="signature-arity" href="#APISet.scroll_offset+2" title="Permanent link">2</a><signature id="APISet.scroll_offset+2">

```lx
APISet.scroll_offset(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="scroll_timer(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.scroll_timer</h4><a class="signature-arity" href="#APISet.scroll_timer+2" title="Permanent link">2</a><signature id="APISet.scroll_timer+2">

```lx
APISet.scroll_timer(control : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="APISet" signature="autosize_pending(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">APISet.autosize_pending</h4><a class="signature-arity" href="#APISet.autosize_pending+2" title="Permanent link">2</a><signature id="APISet.autosize_pending+2">

```lx
APISet.autosize_pending(control : Control, value : Num) : unknown
```
</signature>

> no docs found   


### Fields
`import "luxe: ui/label.control.api" for Fields{:lx}`
> no docs found

- [text](#Fields.text)
- [align](#Fields.align)
- [align_vertical](#Fields.align_vertical)
- [localization](#Fields.localization)
- [localization_key](#Fields.localization_key)
- [localization_space](#Fields.localization_space)
- [localization_args](#Fields.localization_args)
- [max_visible](#Fields.max_visible)
- [auto_size](#Fields.auto_size)
- [override](#Fields.override)
- [render_text](#Fields.render_text)
- [scroll_offset](#Fields.scroll_offset)
- [scroll_timer](#Fields.scroll_timer)
- [autosize_pending](#Fields.autosize_pending)


---

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="text"></endpoint>
<h4 class="signature_head">Fields.text</h4><a class="signature-arity" href="#Fields.text" title="Permanent link">1</a><signature id="Fields.text">

```lx
Fields.text : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="align"></endpoint>
<h4 class="signature_head">Fields.align</h4><a class="signature-arity" href="#Fields.align" title="Permanent link">1</a><signature id="Fields.align">

```lx
Fields.align : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="align_vertical"></endpoint>
<h4 class="signature_head">Fields.align_vertical</h4><a class="signature-arity" href="#Fields.align_vertical" title="Permanent link">1</a><signature id="Fields.align_vertical">

```lx
Fields.align_vertical : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="localization"></endpoint>
<h4 class="signature_head">Fields.localization</h4><a class="signature-arity" href="#Fields.localization" title="Permanent link">1</a><signature id="Fields.localization">

```lx
Fields.localization : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="localization_key"></endpoint>
<h4 class="signature_head">Fields.localization_key</h4><a class="signature-arity" href="#Fields.localization_key" title="Permanent link">1</a><signature id="Fields.localization_key">

```lx
Fields.localization_key : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="localization_space"></endpoint>
<h4 class="signature_head">Fields.localization_space</h4><a class="signature-arity" href="#Fields.localization_space" title="Permanent link">1</a><signature id="Fields.localization_space">

```lx
Fields.localization_space : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="localization_args"></endpoint>
<h4 class="signature_head">Fields.localization_args</h4><a class="signature-arity" href="#Fields.localization_args" title="Permanent link">1</a><signature id="Fields.localization_args">

```lx
Fields.localization_args : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="max_visible"></endpoint>
<h4 class="signature_head">Fields.max_visible</h4><a class="signature-arity" href="#Fields.max_visible" title="Permanent link">1</a><signature id="Fields.max_visible">

```lx
Fields.max_visible : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="auto_size"></endpoint>
<h4 class="signature_head">Fields.auto_size</h4><a class="signature-arity" href="#Fields.auto_size" title="Permanent link">1</a><signature id="Fields.auto_size">

```lx
Fields.auto_size : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="override"></endpoint>
<h4 class="signature_head">Fields.override</h4><a class="signature-arity" href="#Fields.override" title="Permanent link">1</a><signature id="Fields.override">

```lx
Fields.override : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="render_text"></endpoint>
<h4 class="signature_head">Fields.render_text</h4><a class="signature-arity" href="#Fields.render_text" title="Permanent link">1</a><signature id="Fields.render_text">

```lx
Fields.render_text : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="scroll_offset"></endpoint>
<h4 class="signature_head">Fields.scroll_offset</h4><a class="signature-arity" href="#Fields.scroll_offset" title="Permanent link">1</a><signature id="Fields.scroll_offset">

```lx
Fields.scroll_offset : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="scroll_timer"></endpoint>
<h4 class="signature_head">Fields.scroll_timer</h4><a class="signature-arity" href="#Fields.scroll_timer" title="Permanent link">1</a><signature id="Fields.scroll_timer">

```lx
Fields.scroll_timer : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control.api" class="Fields" signature="autosize_pending"></endpoint>
<h4 class="signature_head">Fields.autosize_pending</h4><a class="signature-arity" href="#Fields.autosize_pending" title="Permanent link">1</a><signature id="Fields.autosize_pending">

```lx
Fields.autosize_pending : String
```
</signature>

> no docs found   

