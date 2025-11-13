---
title: "luxe: system/ui/control.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/ui/control.modifier"
---
- [Behave](#behave)   
- [Contain](#contain)   
- [Control](#control)   
- [Data](#data)   
- [System](#system)   

---


## Behave
```wren
import "luxe: system/ui/control.modifier" for Behave
```
> no docs found

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="left"></endpoint>
### Behave.left
```wren
Behave.left : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="top"></endpoint>
### Behave.top
```wren
Behave.top : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="right"></endpoint>
### Behave.right
```wren
Behave.right : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="bottom"></endpoint>
### Behave.bottom
```wren
Behave.bottom : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="hfill"></endpoint>
### Behave.hfill
```wren
Behave.hfill : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="vfill"></endpoint>
### Behave.vfill
```wren
Behave.vfill : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="hcenter"></endpoint>
### Behave.hcenter
```wren
Behave.hcenter : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="vcenter"></endpoint>
### Behave.vcenter
```wren
Behave.vcenter : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="center"></endpoint>
### Behave.center
```wren
Behave.center : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="fill"></endpoint>
### Behave.fill
```wren
Behave.fill : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="break_line"></endpoint>
### Behave.break_line
```wren
Behave.break_line : unknown
```
> no docs found   


## Contain
```wren
import "luxe: system/ui/control.modifier" for Contain
```
> no docs found

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="row"></endpoint>
### Contain.row
```wren
Contain.row : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="column"></endpoint>
### Contain.column
```wren
Contain.column : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="layout"></endpoint>
### Contain.layout
```wren
Contain.layout : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="flex"></endpoint>
### Contain.flex
```wren
Contain.flex : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="nowrap"></endpoint>
### Contain.nowrap
```wren
Contain.nowrap : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="wrap"></endpoint>
### Contain.wrap
```wren
Contain.wrap : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="start"></endpoint>
### Contain.start
```wren
Contain.start : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="middle"></endpoint>
### Contain.middle
```wren
Contain.middle : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="end"></endpoint>
### Contain.end
```wren
Contain.end : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="justify"></endpoint>
### Contain.justify
```wren
Contain.justify : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="vfit"></endpoint>
### Contain.vfit
```wren
Contain.vfit : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="hfit"></endpoint>
### Contain.hfit
```wren
Contain.hfit : unknown
```
> no docs found   


## Control
```wren
import "luxe: system/ui/control.modifier" for Control
```
> no docs found


## Data
```wren
import "luxe: system/ui/control.modifier" for Data
```
> no docs found

### Variables
```wren
var ui : Link = null
var width : Num = 0
var height : Num = 0
var opacity : Num = 1
var visible : Bool = true
var style : Asset = null
var kind : Asset = null
var settings : Object = Object
var allow_input : Bool = false
var send_events : Bool = false
var margin : Float4 = [0, 0, 0, 0]
var behave : List = [Behave.top, Behave.left]
var contain : List = []
var children : List = []
```

## System
```wren
import "luxe: system/ui/control.modifier" for System
```
> no docs found

### Variables
```wren
var press : Wire = Wire.create
var release : Wire = Wire.create
var enter : Wire = Wire.create
var exit : Wire = Wire.create
var draw : Draw = 0
var style : null = PathStyle.new
```
<endpoint module="luxe: system/ui/control.modifier" class="System" signature="new(world : Any)"></endpoint>
### System.new(.)
```wren
System.new(world : Any) : System
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="editor_init(world : World)"></endpoint>
### System.editor_init(.)
```wren
System.editor_init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```wren
System.init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="editor_attach(entity : Entity, ctrl : Data)"></endpoint>
### System.editor_attach(..)
```wren
System.editor_attach(entity : Entity, ctrl : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="attach(entity : Entity, ctrl : Data)"></endpoint>
### System.attach(..)
```wren
System.attach(entity : Entity, ctrl : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="editor_detach(entity : Entity, ctrl : Data)"></endpoint>
### System.editor_detach(..)
```wren
System.editor_detach(entity : Entity, ctrl : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="detach(entity : Entity, ctrl : Data)"></endpoint>
### System.detach(..)
```wren
System.detach(entity : Entity, ctrl : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="draw_canvas(ui : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### System.draw_canvas(.....)
```wren
System.draw_canvas(ui : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
### System.editor_tick(.)
```wren
System.editor_tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="tick(delta : Num)"></endpoint>
### System.tick(.)
```wren
System.tick(delta : Num) : unknown
```
> no docs found   

