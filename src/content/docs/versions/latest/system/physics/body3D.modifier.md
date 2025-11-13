---
title: "luxe: system/physics/body3D.modifier"
description: API version 2025.11.1
---
## `luxe: system/physics/body3D.modifier{:lx}` module

- [Body3D](#body3d)   
- [Data](#data)   
- [MotionQuality](#motionquality)   
- [MotionType](#motiontype)   
- [System](#system)   

---


### Body3D
`import "luxe: system/physics/body3D.modifier" for Body3D{:lx}`
> no docs found

- [unlisten](#Body3D.unlisten+2)(**entity**: `Entity{:lx}`, **handle**: `Handle{:lx}`)
- [listen](#Body3D.listen+2)(**entity**: `Entity{:lx}`, **fn**: `Fn{:lx}`)
- [get_aabb](#Body3D.get_aabb)(**entity**: `Entity{:lx}`)


---

<endpoint module="luxe: system/physics/body3D.modifier" class="Body3D" signature="unlisten(entity : Entity, handle : Handle)"></endpoint>
<h4 class="signature_head">Body3D.unlisten</h4><a class="signature-arity" href="#Body3D.unlisten+2" title="Permanent link">2</a><signature id="Body3D.unlisten+2">

```lx
Body3D.unlisten(entity : Entity, handle : Handle) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="Body3D" signature="listen(entity : Entity, fn : Fn)"></endpoint>
<h4 class="signature_head">Body3D.listen</h4><a class="signature-arity" href="#Body3D.listen+2" title="Permanent link">2</a><signature id="Body3D.listen+2">

```lx
Body3D.listen(entity : Entity, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="Body3D" signature="get_aabb(entity : Entity)"></endpoint>
<h4 class="signature_head">Body3D.get_aabb</h4><a class="signature-arity" href="#Body3D.get_aabb" title="Permanent link">1</a><signature id="Body3D.get_aabb">

```lx
Body3D.get_aabb(entity : Entity) : List
```
</signature>

> no docs found   


### Data
`import "luxe: system/physics/body3D.modifier" for Data{:lx}`
> no docs found

- `var motion_type : MotionType = MotionType.is_static{:lx}`
- `var motion_quality : MotionQuality = MotionQuality.discrete{:lx}`
- `var is_sensor : Bool = false{:lx}`
- `var allow_sleeping : Bool = true{:lx}`
- `var friction : Num = 0.2{:lx}`
- `var restitution : Num = 0.0{:lx}`
- `var linear_damping : Num = 0.05{:lx}`
- `var angular_damping : Num = 0.05{:lx}`
- `var max_linear_velocity : Num = 500.0{:lx}`
- `var max_angular_velocity : Num = 2700{:lx}`
- `var gravity_factor : Num = 1{:lx}`
- `var mass : Num = 1{:lx}`
- `var lock_movement : Float3 = [0, 0, 0]{:lx}`
- `var lock_rotation : Float3 = [0, 0, 0]{:lx}`
- `var use_manifold_reduction : Bool = true{:lx}`
- `var allow_dynamic_or_kinematic : Bool = false{:lx}`
- `var collide_kinematic_vs_non_dynamic : Bool = false{:lx}`
- `var apply_gyroscopic_force : Bool = false{:lx}`
- `var enhanced_internal_edge_removal : Bool = false{:lx}`
- `var velocity_steps_override : Num = 0{:lx}`
- `var position_steps_override : Num = 0{:lx}`


---


### MotionQuality
`import "luxe: system/physics/body3D.modifier" for MotionQuality{:lx}`
> no docs found

- [discrete](#MotionQuality.discrete)
- [linear_cast](#MotionQuality.linear_cast)


---

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionQuality" signature="discrete"></endpoint>
<h4 class="signature_head">MotionQuality.discrete</h4><a class="signature-arity" href="#MotionQuality.discrete" title="Permanent link">1</a><signature id="MotionQuality.discrete">

```lx
MotionQuality.discrete : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionQuality" signature="linear_cast"></endpoint>
<h4 class="signature_head">MotionQuality.linear_cast</h4><a class="signature-arity" href="#MotionQuality.linear_cast" title="Permanent link">1</a><signature id="MotionQuality.linear_cast">

```lx
MotionQuality.linear_cast : unknown
```
</signature>

> no docs found   


### MotionType
`import "luxe: system/physics/body3D.modifier" for MotionType{:lx}`
> no docs found

- [is_static](#MotionType.is_static)
- [is_dynamic](#MotionType.is_dynamic)
- [is_kinematic](#MotionType.is_kinematic)


---

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionType" signature="is_static"></endpoint>
<h4 class="signature_head">MotionType.is_static</h4><a class="signature-arity" href="#MotionType.is_static" title="Permanent link">1</a><signature id="MotionType.is_static">

```lx
MotionType.is_static : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionType" signature="is_dynamic"></endpoint>
<h4 class="signature_head">MotionType.is_dynamic</h4><a class="signature-arity" href="#MotionType.is_dynamic" title="Permanent link">1</a><signature id="MotionType.is_dynamic">

```lx
MotionType.is_dynamic : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionType" signature="is_kinematic"></endpoint>
<h4 class="signature_head">MotionType.is_kinematic</h4><a class="signature-arity" href="#MotionType.is_kinematic" title="Permanent link">1</a><signature id="MotionType.is_kinematic">

```lx
MotionType.is_kinematic : unknown
```
</signature>

> no docs found   


### System
`import "luxe: system/physics/body3D.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)
- [init](#System.init)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/physics/body3D.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="System" signature="init(world : World)"></endpoint>
<h4 class="signature_head">System.init</h4><a class="signature-arity" href="#System.init" title="Permanent link">1</a><signature id="System.init">

```lx
System.init(world : World) : unknown
```
</signature>

> no docs found   

