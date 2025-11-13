---
title: "luxe: system/physics/physics3D.modifier"
description: API version 2025.11.1
---
## `luxe: system/physics/physics3D.modifier{:lx}` module

- [Data](#data)   
- [Physics3D](#physics3d)   
- [System](#system)   

---


### Data
`import "luxe: system/physics/physics3D.modifier" for Data{:lx}`
> no docs found

- `var gravity : Float3 = [0, -9.8, 0]{:lx}`


---


### Physics3D
`import "luxe: system/physics/physics3D.modifier" for Physics3D{:lx}`
> no docs found

- [create_in](#Physics3D.create_in)(**world**: `World{:lx}`)
- [query_box](#Physics3D.query_box+3)(**world**: `World{:lx}`, **center**: `Float3{:lx}`, **size**: `Float3{:lx}`)
- [query_sphere](#Physics3D.query_sphere+3)(**world**: `World{:lx}`, **center**: `Float3{:lx}`, **radius**: `Num{:lx}`)
- [cast_ray_closest](#Physics3D.cast_ray_closest+4)(**world**: `World{:lx}`, **origin**: `Float3{:lx}`, **dir**: `Float3{:lx}`, **distance**: `Num{:lx}`)
- [cast_ray](#Physics3D.cast_ray+4)(**world**: `World{:lx}`, **origin**: `Float3{:lx}`, **dir**: `Float3{:lx}`, **distance**: `Num{:lx}`)
- [set_debug_draw](#Physics3D.set_debug_draw+2)(**world**: `World{:lx}`, **state**: `Bool{:lx}`)
- [unlisten](#Physics3D.unlisten+2)(**world**: `World{:lx}`, **handle**: `Handle{:lx}`)
- [listen](#Physics3D.listen+2)(**world**: `World{:lx}`, **fn**: `Fn{:lx}`)


---

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="create_in(world : World)"></endpoint>
<h4 class="signature_head">Physics3D.create_in</h4><a class="signature-arity" href="#Physics3D.create_in" title="Permanent link">1</a><signature id="Physics3D.create_in">

```lx
Physics3D.create_in(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="query_box(world : World, center : Float3, size : Float3)"></endpoint>
<h4 class="signature_head">Physics3D.query_box</h4><a class="signature-arity" href="#Physics3D.query_box+3" title="Permanent link">3</a><signature id="Physics3D.query_box+3">

```lx
Physics3D.query_box(world : World, center : Float3, size : Float3) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="query_sphere(world : World, center : Float3, radius : Num)"></endpoint>
<h4 class="signature_head">Physics3D.query_sphere</h4><a class="signature-arity" href="#Physics3D.query_sphere+3" title="Permanent link">3</a><signature id="Physics3D.query_sphere+3">

```lx
Physics3D.query_sphere(world : World, center : Float3, radius : Num) : List
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="cast_ray_closest(world : World, origin : Float3, dir : Float3, distance : Num)"></endpoint>
<h4 class="signature_head">Physics3D.cast_ray_closest</h4><a class="signature-arity" href="#Physics3D.cast_ray_closest+4" title="Permanent link">4</a><signature id="Physics3D.cast_ray_closest+4">

```lx
Physics3D.cast_ray_closest(world : World, origin : Float3, dir : Float3, distance : Num) : CastRayResult
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="cast_ray(world : World, origin : Float3, dir : Float3, distance : Num)"></endpoint>
<h4 class="signature_head">Physics3D.cast_ray</h4><a class="signature-arity" href="#Physics3D.cast_ray+4" title="Permanent link">4</a><signature id="Physics3D.cast_ray+4">

```lx
Physics3D.cast_ray(world : World, origin : Float3, dir : Float3, distance : Num) : unknown
```
</signature>

> Cast a ray into the world and return all hits, sorted by closest first   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="set_debug_draw(world : World, state : Bool)"></endpoint>
<h4 class="signature_head">Physics3D.set_debug_draw</h4><a class="signature-arity" href="#Physics3D.set_debug_draw+2" title="Permanent link">2</a><signature id="Physics3D.set_debug_draw+2">

```lx
Physics3D.set_debug_draw(world : World, state : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="unlisten(world : World, handle : Handle)"></endpoint>
<h4 class="signature_head">Physics3D.unlisten</h4><a class="signature-arity" href="#Physics3D.unlisten+2" title="Permanent link">2</a><signature id="Physics3D.unlisten+2">

```lx
Physics3D.unlisten(world : World, handle : Handle) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="Physics3D" signature="listen(world : World, fn : Fn)"></endpoint>
<h4 class="signature_head">Physics3D.listen</h4><a class="signature-arity" href="#Physics3D.listen+2" title="Permanent link">2</a><signature id="Physics3D.listen+2">

```lx
Physics3D.listen(world : World, fn : Fn) : unknown
```
</signature>

> no docs found   


### System
`import "luxe: system/physics/physics3D.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)
- [init](#System.init)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/physics/physics3D.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

<endpoint module="luxe: system/physics/physics3D.modifier" class="System" signature="init(world : World)"></endpoint>
<h4 class="signature_head">System.init</h4><a class="signature-arity" href="#System.init" title="Permanent link">1</a><signature id="System.init">

```lx
System.init(world : World) : unknown
```
</signature>

> no docs found   

