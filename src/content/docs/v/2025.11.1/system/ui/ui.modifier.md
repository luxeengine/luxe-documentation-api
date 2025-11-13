---
title: "luxe: system/ui/ui.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/ui/ui.modifier"
---
- [Data](#data)   
- [System](#system)   
- [UI](#ui)   

---


## Data
```wren
import "luxe: system/ui/ui.modifier" for Data
```
> no docs found

### Variables
```wren
var theme : Asset = "luxe: ui/style/luxe.dark"
var camera : Link = null
var bounds : Float4 = [0, 0, 1280, 720]
var preview : Bool = false
var preview_size : Float2 = [1280, 720]
var debug_draw : Bool = false
var depth : Num = 0
var flex_layout : Bool = true
```

## System
```wren
import "luxe: system/ui/ui.modifier" for System
```
> no docs found

### Variables
```wren
var draw : Draw = 0
var style : null = PathStyle.new
var drag : Map = {}
```
<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="new(world : Any)"></endpoint>
### System.new(.)
```wren
System.new(world : Any) : System
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_init(world : World)"></endpoint>
### System.editor_init(.)
```wren
System.editor_init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```wren
System.init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_attach(entity : Entity, ui : Data)"></endpoint>
### System.editor_attach(..)
```wren
System.editor_attach(entity : Entity, ui : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="attach(entity : Entity, ui : Data)"></endpoint>
### System.attach(..)
```wren
System.attach(entity : Entity, ui : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_detach(entity : Entity, ui : Data)"></endpoint>
### System.editor_detach(..)
```wren
System.editor_detach(entity : Entity, ui : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="detach(entity : Entity, ui : Data)"></endpoint>
### System.detach(..)
```wren
System.detach(entity : Entity, ui : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
### System.editor_change(..)
```wren
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="change(entity : Entity, change : ModifierChange)"></endpoint>
### System.change(..)
```wren
System.change(entity : Entity, change : ModifierChange) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="draw_canvas(ui : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### System.draw_canvas(.....)
```wren
System.draw_canvas(ui : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
### System.editor_tick(.)
```wren
System.editor_tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/ui.modifier" class="System" signature="tick(delta : Num)"></endpoint>
### System.tick(.)
```wren
System.tick(delta : Num) : unknown
```
> no docs found   


## UI
```wren
import "luxe: system/ui/ui.modifier" for UI
```
> no docs found

