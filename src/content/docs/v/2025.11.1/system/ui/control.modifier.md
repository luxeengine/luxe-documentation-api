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
```lx
import "luxe: system/ui/control.modifier" for Behave
```
> no docs found

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="left"></endpoint>
### Behave.left
```lx
Behave.left : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="top"></endpoint>
### Behave.top
```lx
Behave.top : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="right"></endpoint>
### Behave.right
```lx
Behave.right : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="bottom"></endpoint>
### Behave.bottom
```lx
Behave.bottom : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="hfill"></endpoint>
### Behave.hfill
```lx
Behave.hfill : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="vfill"></endpoint>
### Behave.vfill
```lx
Behave.vfill : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="hcenter"></endpoint>
### Behave.hcenter
```lx
Behave.hcenter : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="vcenter"></endpoint>
### Behave.vcenter
```lx
Behave.vcenter : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="center"></endpoint>
### Behave.center
```lx
Behave.center : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="fill"></endpoint>
### Behave.fill
```lx
Behave.fill : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Behave" signature="break_line"></endpoint>
### Behave.break_line
```lx
Behave.break_line : unknown
```
> no docs found   


## Contain
```lx
import "luxe: system/ui/control.modifier" for Contain
```
> no docs found

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="row"></endpoint>
### Contain.row
```lx
Contain.row : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="column"></endpoint>
### Contain.column
```lx
Contain.column : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="layout"></endpoint>
### Contain.layout
```lx
Contain.layout : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="flex"></endpoint>
### Contain.flex
```lx
Contain.flex : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="nowrap"></endpoint>
### Contain.nowrap
```lx
Contain.nowrap : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="wrap"></endpoint>
### Contain.wrap
```lx
Contain.wrap : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="start"></endpoint>
### Contain.start
```lx
Contain.start : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="middle"></endpoint>
### Contain.middle
```lx
Contain.middle : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="end"></endpoint>
### Contain.end
```lx
Contain.end : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="justify"></endpoint>
### Contain.justify
```lx
Contain.justify : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="vfit"></endpoint>
### Contain.vfit
```lx
Contain.vfit : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="Contain" signature="hfit"></endpoint>
### Contain.hfit
```lx
Contain.hfit : unknown
```
> no docs found   


## Control
```lx
import "luxe: system/ui/control.modifier" for Control
```
> no docs found


## Data
```lx
import "luxe: system/ui/control.modifier" for Data
```
> no docs found

### Variables
```lx
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
```lx
import "luxe: system/ui/control.modifier" for System
```
> no docs found

### Variables
```lx
var press : Wire = Wire.create
var release : Wire = Wire.create
var enter : Wire = Wire.create
var exit : Wire = Wire.create
var draw : Draw = 0
var style : null = PathStyle.new
```
<endpoint module="luxe: system/ui/control.modifier" class="System" signature="new(world : Any)"></endpoint>
### System.new(.)
```lx
System.new(world : Any) : System
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="editor_init(world : World)"></endpoint>
### System.editor_init(.)
```lx
System.editor_init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```lx
System.init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="editor_attach(entity : Entity, ctrl : Data)"></endpoint>
### System.editor_attach(..)
```lx
System.editor_attach(entity : Entity, ctrl : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="attach(entity : Entity, ctrl : Data)"></endpoint>
### System.attach(..)
```lx
System.attach(entity : Entity, ctrl : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="editor_detach(entity : Entity, ctrl : Data)"></endpoint>
### System.editor_detach(..)
```lx
System.editor_detach(entity : Entity, ctrl : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="detach(entity : Entity, ctrl : Data)"></endpoint>
### System.detach(..)
```lx
System.detach(entity : Entity, ctrl : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="draw_canvas(ui : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### System.draw_canvas(.....)
```lx
System.draw_canvas(ui : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
### System.editor_tick(.)
```lx
System.editor_tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/ui/control.modifier" class="System" signature="tick(delta : Num)"></endpoint>
### System.tick(.)
```lx
System.tick(delta : Num) : unknown
```
> no docs found   

