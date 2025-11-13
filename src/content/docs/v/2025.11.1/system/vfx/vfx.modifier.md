---
title: "luxe: system/vfx/vfx.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/vfx/vfx.modifier"
---
- [Data](#data)   
- [Emitter](#emitter)   
- [Module](#module)   
- [Renderer](#renderer)   
- [System](#system)   
- [Vfx](#vfx)   

---


## Data
```wren
import "luxe: system/vfx/vfx.modifier" for Data
```
> no docs found

### Variables
```wren
var play_count : Num = 0
var duration : Num = 2
var emitters : List = []
```

## Emitter
```wren
import "luxe: system/vfx/vfx.modifier" for Emitter
```
> no docs found

### Variables
```wren
var emitter_id : String = "emitter"
var start : Num = 0
var duration : Num = -1
var modules : List = []
var renderers : List = []
```

## Module
```wren
import "luxe: system/vfx/vfx.modifier" for Module
```
> no docs found

### Variables
```wren
var module_id : String = "module"
var module : Asset = null
var inputs : Object = Object
```

## Renderer
```wren
import "luxe: system/vfx/vfx.modifier" for Renderer
```
> no docs found

### Variables
```wren
var render_id : String = "render"
var kind : Asset = null
var inputs : Object = Object
```

## System
```wren
import "luxe: system/vfx/vfx.modifier" for System
```
> no docs found

<endpoint module="luxe: system/vfx/vfx.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   


## Vfx
```wren
import "luxe: system/vfx/vfx.modifier" for Vfx
```
> no docs found

