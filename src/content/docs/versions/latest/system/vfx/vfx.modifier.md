---
title: "luxe: system/vfx/vfx.modifier"
description: API version 2025.11.1
---
## `luxe: system/vfx/vfx.modifier{:lx}` module

- [Data](#data)   
- [Emitter](#emitter)   
- [Module](#module)   
- [Renderer](#renderer)   
- [System](#system)   
- [Vfx](#vfx)   

---


### Data
`import "luxe: system/vfx/vfx.modifier" for Data{:lx}`
> no docs found

- `var play_count : Num = 0{:lx}`
- `var duration : Num = 2{:lx}`
- `var emitters : List = []{:lx}`


---


### Emitter
`import "luxe: system/vfx/vfx.modifier" for Emitter{:lx}`
> no docs found

- `var emitter_id : String = "emitter"{:lx}`
- `var start : Num = 0{:lx}`
- `var duration : Num = -1{:lx}`
- `var modules : List = []{:lx}`
- `var renderers : List = []{:lx}`


---


### Module
`import "luxe: system/vfx/vfx.modifier" for Module{:lx}`
> no docs found

- `var module_id : String = "module"{:lx}`
- `var module : Asset = null{:lx}`
- `var inputs : Object = Object{:lx}`


---


### Renderer
`import "luxe: system/vfx/vfx.modifier" for Renderer{:lx}`
> no docs found

- `var render_id : String = "render"{:lx}`
- `var kind : Asset = null{:lx}`
- `var inputs : Object = Object{:lx}`


---


### System
`import "luxe: system/vfx/vfx.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/vfx/vfx.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   


### Vfx
`import "luxe: system/vfx/vfx.modifier" for Vfx{:lx}`
> no docs found



---

