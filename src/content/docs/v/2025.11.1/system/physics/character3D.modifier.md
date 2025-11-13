---
title: "luxe: system/physics/character3D.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/physics/character3D.modifier"
---
- [BackFaceMode](#backfacemode)   
- [Character3D](#character3d)   
- [Data](#data)   
- [System](#system)   

---


## BackFaceMode
```wren
import "luxe: system/physics/character3D.modifier" for BackFaceMode
```
> no docs found

<endpoint module="luxe: system/physics/character3D.modifier" class="BackFaceMode" signature="ignore"></endpoint>
### BackFaceMode.ignore
```wren
BackFaceMode.ignore : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/character3D.modifier" class="BackFaceMode" signature="collide"></endpoint>
### BackFaceMode.collide
```wren
BackFaceMode.collide : unknown
```
> no docs found   


## Character3D
```wren
import "luxe: system/physics/character3D.modifier" for Character3D
```
> no docs found


## Data
```wren
import "luxe: system/physics/character3D.modifier" for Data
```
> no docs found

### Variables
```wren
var target : Link = null
var height : Num = 2
var width : Num = 1
var input : Float3 = [0, 0, 0]
var speed : Num = 1
var velocity : Float3 = [0, 0, 0]
var mass : Num = 70
var max_strength : Num = 100
var shape_offset : Float3 = [0, 0, 0]
var backface_mode : BackFaceMode = BackFaceMode.collide
var predictive_contact_distance : Num = 0.1
var max_collision_iterations : Num = 5
var max_constraint_iterations : Num = 5
var min_time_remaining : Num = 0.0001
var collision_tolerance : Num = 0.001
var character_padding : Num = 0.02
var max_hits : Num = 256
var hit_reduction_cos_max_angle : Num = 0.999
var penetration_recovery_speed : Num = 1
```

## System
```wren
import "luxe: system/physics/character3D.modifier" for System
```
> no docs found

<endpoint module="luxe: system/physics/character3D.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/physics/character3D.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```wren
System.init(world : World) : unknown
```
> no docs found   

