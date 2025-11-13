---
title: "luxe: system/ui/ui.modifier"
description: API version 2025.11.1
---
## `luxe: system/ui/ui.modifier{:lx}` module

- [Data](#data)   
- [System](#system)   
- [UI](#ui)   

---


### Data
`import "luxe: system/ui/ui.modifier" for Data{:lx}`
> no docs found

- `var theme : Asset = "luxe: ui/style/luxe.dark"{:lx}`
- `var camera : Link = null{:lx}`
- `var bounds : Float4 = [0, 0, 1280, 720]{:lx}`
- `var preview : Bool = false{:lx}`
- `var preview_size : Float2 = [1280, 720]{:lx}`
- `var debug_draw : Bool = false{:lx}`
- `var depth : Num = 0{:lx}`
- `var flex_layout : Bool = true{:lx}`


---


### System
`import "luxe: system/ui/ui.modifier" for System{:lx}`
> no docs found

- `var draw : Draw = 0{:lx}`
- `var style : null = PathStyle.new{:lx}`
- `var drag : Map = {}{:lx}`
- [new](#System.new)(**world**: `Any{:lx}`)
- [editor_init](#System.editor_init)(**world**: `World{:lx}`)
- [init](#System.init)(**world**: `World{:lx}`)
- [editor_attach](#System.editor_attach+2)(**entity**: `Entity{:lx}`, **ui**: `Data{:lx}`)
- [attach](#System.attach+2)(**entity**: `Entity{:lx}`, **ui**: `Data{:lx}`)
- [editor_detach](#System.editor_detach+2)(**entity**: `Entity{:lx}`, **ui**: `Data{:lx}`)
- [detach](#System.detach+2)(**entity**: `Entity{:lx}`, **ui**: `Data{:lx}`)
- [editor_change](#System.editor_change+2)(**entity**: `Entity{:lx}`, **change**: `ModifierChange{:lx}`)
- [change](#System.change+2)(**entity**: `Entity{:lx}`, **change**: `ModifierChange{:lx}`)
- [draw_canvas](#System.draw_canvas+5)(**ui**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **w**: `Any{:lx}`, **h**: `Any{:lx}`)
- [editor_tick](#System.editor_tick)(**delta**: `Num{:lx}`)
- [tick](#System.tick)(**delta**: `Num{:lx}`)


---

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="new(world : Any)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : Any) : System
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_init(world : World)"></endpoint>
<h4 class="signature_head">System.editor_init</h4><a class="signature-arity" href="#System.editor_init" title="Permanent link">1</a><signature id="System.editor_init">

```lx
System.editor_init(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="init(world : World)"></endpoint>
<h4 class="signature_head">System.init</h4><a class="signature-arity" href="#System.init" title="Permanent link">1</a><signature id="System.init">

```lx
System.init(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_attach(entity : Entity, ui : Data)"></endpoint>
<h4 class="signature_head">System.editor_attach</h4><a class="signature-arity" href="#System.editor_attach+2" title="Permanent link">2</a><signature id="System.editor_attach+2">

```lx
System.editor_attach(entity : Entity, ui : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="attach(entity : Entity, ui : Data)"></endpoint>
<h4 class="signature_head">System.attach</h4><a class="signature-arity" href="#System.attach+2" title="Permanent link">2</a><signature id="System.attach+2">

```lx
System.attach(entity : Entity, ui : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_detach(entity : Entity, ui : Data)"></endpoint>
<h4 class="signature_head">System.editor_detach</h4><a class="signature-arity" href="#System.editor_detach+2" title="Permanent link">2</a><signature id="System.editor_detach+2">

```lx
System.editor_detach(entity : Entity, ui : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="detach(entity : Entity, ui : Data)"></endpoint>
<h4 class="signature_head">System.detach</h4><a class="signature-arity" href="#System.detach+2" title="Permanent link">2</a><signature id="System.detach+2">

```lx
System.detach(entity : Entity, ui : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
<h4 class="signature_head">System.editor_change</h4><a class="signature-arity" href="#System.editor_change+2" title="Permanent link">2</a><signature id="System.editor_change+2">

```lx
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="change(entity : Entity, change : ModifierChange)"></endpoint>
<h4 class="signature_head">System.change</h4><a class="signature-arity" href="#System.change+2" title="Permanent link">2</a><signature id="System.change+2">

```lx
System.change(entity : Entity, change : ModifierChange) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="draw_canvas(ui : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
<h4 class="signature_head">System.draw_canvas</h4><a class="signature-arity" href="#System.draw_canvas+5" title="Permanent link">5</a><signature id="System.draw_canvas+5">

```lx
System.draw_canvas(ui : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
<h4 class="signature_head">System.editor_tick</h4><a class="signature-arity" href="#System.editor_tick" title="Permanent link">1</a><signature id="System.editor_tick">

```lx
System.editor_tick(delta : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="tick(delta : Num)"></endpoint>
<h4 class="signature_head">System.tick</h4><a class="signature-arity" href="#System.tick" title="Permanent link">1</a><signature id="System.tick">

```lx
System.tick(delta : Num) : unknown
```
</signature>

> no docs found   


### UI
`import "luxe: system/ui/ui.modifier" for UI{:lx}`
> no docs found



---

