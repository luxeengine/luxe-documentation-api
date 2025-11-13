---
title: "luxe: system/physics/character3D.modifier"
description: API version 2025.11.1
---
## `luxe: system/physics/character3D.modifier{:lx}` module

- [BackFaceMode](#backfacemode)   
- [Character3D](#character3d)   
- [Data](#data)   
- [System](#system)   

---


### BackFaceMode
`import "luxe: system/physics/character3D.modifier" for BackFaceMode{:lx}`
> no docs found

- [ignore](#BackFaceMode.ignore)
- [collide](#BackFaceMode.collide)


---

<endpoint module="luxe: system/physics/character3D.modifier" class="BackFaceMode" signature="ignore"></endpoint>
<h4 class="signature_head">BackFaceMode.ignore</h4><a class="signature-arity" href="#BackFaceMode.ignore" title="Permanent link">1</a><signature id="BackFaceMode.ignore">

```lx
BackFaceMode.ignore : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/character3D.modifier" class="BackFaceMode" signature="collide"></endpoint>
<h4 class="signature_head">BackFaceMode.collide</h4><a class="signature-arity" href="#BackFaceMode.collide" title="Permanent link">1</a><signature id="BackFaceMode.collide">

```lx
BackFaceMode.collide : unknown
```
</signature>

> no docs found   


### Character3D
`import "luxe: system/physics/character3D.modifier" for Character3D{:lx}`
> no docs found



---


### Data
`import "luxe: system/physics/character3D.modifier" for Data{:lx}`
> no docs found

- `var target : Link = null{:lx}`
- `var height : Num = 2{:lx}`
- `var width : Num = 1{:lx}`
- `var input : Float3 = [0, 0, 0]{:lx}`
- `var speed : Num = 1{:lx}`
- `var velocity : Float3 = [0, 0, 0]{:lx}`
- `var mass : Num = 70{:lx}`
- `var max_strength : Num = 100{:lx}`
- `var shape_offset : Float3 = [0, 0, 0]{:lx}`
- `var backface_mode : BackFaceMode = BackFaceMode.collide{:lx}`
- `var predictive_contact_distance : Num = 0.1{:lx}`
- `var max_collision_iterations : Num = 5{:lx}`
- `var max_constraint_iterations : Num = 5{:lx}`
- `var min_time_remaining : Num = 0.0001{:lx}`
- `var collision_tolerance : Num = 0.001{:lx}`
- `var character_padding : Num = 0.02{:lx}`
- `var max_hits : Num = 256{:lx}`
- `var hit_reduction_cos_max_angle : Num = 0.999{:lx}`
- `var penetration_recovery_speed : Num = 1{:lx}`


---


### System
`import "luxe: system/physics/character3D.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)
- [init](#System.init)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/physics/character3D.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/character3D.modifier" class="System" signature="init(world : World)"></endpoint>
<h4 class="signature_head">System.init</h4><a class="signature-arity" href="#System.init" title="Permanent link">1</a><signature id="System.init">

```lx
System.init(world : World) : unknown
```
</signature>

> no docs found   

