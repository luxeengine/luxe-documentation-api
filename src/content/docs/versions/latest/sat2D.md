---
title: "luxe: sat2D"
description: API version 2025.11.1
---
## `luxe: sat2D{:lx}` module

- [SAT2D](#sat2d)   

---


### SAT2D
`import "luxe: sat2D" for SAT2D{:lx}`
> The SAT2D API is a collision and query API for the [luxe: shape2D](../shape2D) shapes and types.
> It implements the "separating axis theorom" for collision.   
> **Note** The return values in the API are not user friendly atm, this will improve.
> They return lists with various values packed inside.

- [collide_shape](#SAT2D.collide_shape+2)(**shape1**: `Any{:lx}`, **shape2**: `Any{:lx}`)
- [collide_shapes](#SAT2D.collide_shapes+2)(**shape**: `Any{:lx}`, **list**: `Any{:lx}`)
- [contains](#SAT2D.contains+2)(**shape**: `Any{:lx}`, **point**: `Any{:lx}`)
- [sweep_shape](#SAT2D.sweep_shape+3)(**shape1**: `Any{:lx}`, **shape2**: `Any{:lx}`, **vel**: `Any{:lx}`)
- [raycast_ray](#SAT2D.raycast_ray+2)(**ray1**: `Any{:lx}`, **ray2**: `Any{:lx}`)
- [raycast_rays](#SAT2D.raycast_rays+2)(**ray**: `Any{:lx}`, **rays**: `Any{:lx}`)
- [raycast_shape](#SAT2D.raycast_shape+2)(**ray**: `Any{:lx}`, **shape**: `Any{:lx}`)
- [raycast_shapes](#SAT2D.raycast_shapes+2)(**ray**: `Any{:lx}`, **shapes**: `Any{:lx}`)


---

<endpoint module="luxe: sat2D" class="SAT2D" signature="collide_shape(shape1 : Any, shape2 : Any)"></endpoint>
<h4 class="signature_head">SAT2D.collide_shape</h4><a class="signature-arity" href="#SAT2D.collide_shape+2" title="Permanent link">2</a><signature id="SAT2D.collide_shape+2">

```lx
SAT2D.collide_shape(shape1 : Any, shape2 : Any) : unknown
```
</signature>

> Check if two `Shape2D` instances are colliding. Returns a result with several values in a `List`.
> 
> The results include a `separation` value for x and y axis, which is how much to move `shape1` to cancel
> out the overlap. An example of using this: move a player `shape2D` collider, check for collision,
> and then move them back by `separation` so that they do not collide anymore.
> 
>   ```js
>   [
>     shape1,       //the original shapes
>     shape2,
>     overlap,      //amount the shapes overlap
>     separation_x, //the amount to separate on the x axis
>     separation_y, //the amount to separate on the y axis
>     normal_x,     //the normal of the collision
>     normal_y      //the amount to separate on the y axis
>   ]
>   ```   

<endpoint module="luxe: sat2D" class="SAT2D" signature="collide_shapes(shape : Any, list : Any)"></endpoint>
<h4 class="signature_head">SAT2D.collide_shapes</h4><a class="signature-arity" href="#SAT2D.collide_shapes+2" title="Permanent link">2</a><signature id="SAT2D.collide_shapes+2">

```lx
SAT2D.collide_shapes(shape : Any, list : Any) : unknown
```
</signature>

> Like `collide_shape` for details on the results, but checks multiple shapes against a single one. 
> For example `SAT2D.collide_shapes(player, walls)`, where walls is a list of `Shape2D` to collide against.
> 
> Note this returns a list of results, and each result is a list described by `collide_shape`.
> 
>   ```js
>   //:todo: example. see samples/wip/shape2D
>   ```   

<endpoint module="luxe: sat2D" class="SAT2D" signature="contains(shape : Any, point : Any)"></endpoint>
<h4 class="signature_head">SAT2D.contains</h4><a class="signature-arity" href="#SAT2D.contains+2" title="Permanent link">2</a><signature id="SAT2D.contains+2">

```lx
SAT2D.contains(shape : Any, point : Any) : unknown
```
</signature>

> Returns true if the given `Shape2D` contains `point`.   

<endpoint module="luxe: sat2D" class="SAT2D" signature="sweep_shape(shape1 : Any, shape2 : Any, vel : Any)"></endpoint>
<h4 class="signature_head">SAT2D.sweep_shape</h4><a class="signature-arity" href="#SAT2D.sweep_shape+3" title="Permanent link">3</a><signature id="SAT2D.sweep_shape+3">

```lx
SAT2D.sweep_shape(shape1 : Any, shape2 : Any, vel : Any) : unknown
```
</signature>

>    

<endpoint module="luxe: sat2D" class="SAT2D" signature="raycast_ray(ray1 : Any, ray2 : Any)"></endpoint>
<h4 class="signature_head">SAT2D.raycast_ray</h4><a class="signature-arity" href="#SAT2D.raycast_ray+2" title="Permanent link">2</a><signature id="SAT2D.raycast_ray+2">

```lx
SAT2D.raycast_ray(ray1 : Any, ray2 : Any) : unknown
```
</signature>

>    

<endpoint module="luxe: sat2D" class="SAT2D" signature="raycast_rays(ray : Any, rays : Any)"></endpoint>
<h4 class="signature_head">SAT2D.raycast_rays</h4><a class="signature-arity" href="#SAT2D.raycast_rays+2" title="Permanent link">2</a><signature id="SAT2D.raycast_rays+2">

```lx
SAT2D.raycast_rays(ray : Any, rays : Any) : unknown
```
</signature>

>    

<endpoint module="luxe: sat2D" class="SAT2D" signature="raycast_shape(ray : Any, shape : Any)"></endpoint>
<h4 class="signature_head">SAT2D.raycast_shape</h4><a class="signature-arity" href="#SAT2D.raycast_shape+2" title="Permanent link">2</a><signature id="SAT2D.raycast_shape+2">

```lx
SAT2D.raycast_shape(ray : Any, shape : Any) : unknown
```
</signature>

>    

<endpoint module="luxe: sat2D" class="SAT2D" signature="raycast_shapes(ray : Any, shapes : Any)"></endpoint>
<h4 class="signature_head">SAT2D.raycast_shapes</h4><a class="signature-arity" href="#SAT2D.raycast_shapes+2" title="Permanent link">2</a><signature id="SAT2D.raycast_shapes+2">

```lx
SAT2D.raycast_shapes(ray : Any, shapes : Any) : unknown
```
</signature>

>    

