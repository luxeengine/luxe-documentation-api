---
title: "luxe: system/physics/physics3D.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/physics/physics3D.modifier"
---
- [Data](#data)   
- [Physics3D](#physics3d)   
- [System](#system)   

---


## Data
```lx
import "luxe: system/physics/physics3D.modifier" for Data
```
> no docs found

### Variables
```lx
var gravity : Float3 = [0, -9.8, 0]
```

## Physics3D
```lx
import "luxe: system/physics/physics3D.modifier" for Physics3D
```
> no docs found

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="create_in(world : World)"></endpoint>
### Physics3D.create_in(.)
```lx
Physics3D.create_in(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="query_box(world : World, center : Float3, size : Float3)"></endpoint>
### Physics3D.query_box(...)
```lx
Physics3D.query_box(world : World, center : Float3, size : Float3) : Any
```
> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="query_sphere(world : World, center : Float3, radius : Num)"></endpoint>
### Physics3D.query_sphere(...)
```lx
Physics3D.query_sphere(world : World, center : Float3, radius : Num) : List
```
> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="cast_ray_closest(world : World, origin : Float3, dir : Float3, distance : Num)"></endpoint>
### Physics3D.cast_ray_closest(....)
```lx
Physics3D.cast_ray_closest(world : World, origin : Float3, dir : Float3, distance : Num) : CastRayResult
```
> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="cast_ray(world : World, origin : Float3, dir : Float3, distance : Num)"></endpoint>
### Physics3D.cast_ray(....)
```lx
Physics3D.cast_ray(world : World, origin : Float3, dir : Float3, distance : Num) : unknown
```
> Cast a ray into the world and return all hits, sorted by closest first   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="set_debug_draw(world : World, state : Bool)"></endpoint>
### Physics3D.set_debug_draw(..)
```lx
Physics3D.set_debug_draw(world : World, state : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="unlisten(world : World, handle : Handle)"></endpoint>
### Physics3D.unlisten(..)
```lx
Physics3D.unlisten(world : World, handle : Handle) : Bool
```
> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="listen(world : World, fn : Fn)"></endpoint>
### Physics3D.listen(..)
```lx
Physics3D.listen(world : World, fn : Fn) : unknown
```
> no docs found   


## System
```lx
import "luxe: system/physics/physics3D.modifier" for System
```
> no docs found

<endpoint module="luxe: system/physics/physics3D.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```lx
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```lx
System.init(world : World) : unknown
```
> no docs found   

