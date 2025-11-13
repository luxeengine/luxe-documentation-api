---
title: "luxe: system/physics/body3D.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/physics/body3D.modifier"
---
- [Body3D](#body3d)   
- [Data](#data)   
- [MotionQuality](#motionquality)   
- [MotionType](#motiontype)   
- [System](#system)   

---


## Body3D
```wren
import "luxe: system/physics/body3D.modifier" for Body3D
```
> no docs found

<endpoint module="luxe: system/physics/body3D.modifier" class="Body3D" signature="unlisten(entity : Entity, handle : Handle)"></endpoint>
### Body3D.unlisten(..)
```wren
Body3D.unlisten(entity : Entity, handle : Handle) : Bool
```
> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="Body3D" signature="listen(entity : Entity, fn : Fn)"></endpoint>
### Body3D.listen(..)
```wren
Body3D.listen(entity : Entity, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="Body3D" signature="get_aabb(entity : Entity)"></endpoint>
### Body3D.get_aabb(.)
```wren
Body3D.get_aabb(entity : Entity) : List
```
> no docs found   


## Data
```wren
import "luxe: system/physics/body3D.modifier" for Data
```
> no docs found

### Variables
```wren
var motion_type : MotionType = MotionType.is_static
var motion_quality : MotionQuality = MotionQuality.discrete
var is_sensor : Bool = false
var allow_sleeping : Bool = true
var friction : Num = 0.2
var restitution : Num = 0.0
var linear_damping : Num = 0.05
var angular_damping : Num = 0.05
var max_linear_velocity : Num = 500.0
var max_angular_velocity : Num = 2700
var gravity_factor : Num = 1
var mass : Num = 1
var lock_movement : Float3 = [0, 0, 0]
var lock_rotation : Float3 = [0, 0, 0]
var use_manifold_reduction : Bool = true
var allow_dynamic_or_kinematic : Bool = false
var collide_kinematic_vs_non_dynamic : Bool = false
var apply_gyroscopic_force : Bool = false
var enhanced_internal_edge_removal : Bool = false
var velocity_steps_override : Num = 0
var position_steps_override : Num = 0
```

## MotionQuality
```wren
import "luxe: system/physics/body3D.modifier" for MotionQuality
```
> no docs found

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionQuality" signature="discrete"></endpoint>
### MotionQuality.discrete
```wren
MotionQuality.discrete : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionQuality" signature="linear_cast"></endpoint>
### MotionQuality.linear_cast
```wren
MotionQuality.linear_cast : unknown
```
> no docs found   


## MotionType
```wren
import "luxe: system/physics/body3D.modifier" for MotionType
```
> no docs found

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionType" signature="is_static"></endpoint>
### MotionType.is_static
```wren
MotionType.is_static : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionType" signature="is_dynamic"></endpoint>
### MotionType.is_dynamic
```wren
MotionType.is_dynamic : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="MotionType" signature="is_kinematic"></endpoint>
### MotionType.is_kinematic
```wren
MotionType.is_kinematic : unknown
```
> no docs found   


## System
```wren
import "luxe: system/physics/body3D.modifier" for System
```
> no docs found

<endpoint module="luxe: system/physics/body3D.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/physics/body3D.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```wren
System.init(world : World) : unknown
```
> no docs found   

