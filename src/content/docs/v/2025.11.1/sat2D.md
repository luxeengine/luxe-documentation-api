---
title: "luxe: sat2D"
description: API version 2025.11.1
slug: "v/2025.11.1/sat2D"
---
- [SAT2D](#sat2d)   

---


## SAT2D
```lx
import "luxe: sat2D" for SAT2D
```
> The SAT2D API is a collision and query API for the [luxe: shape2D](../shape2D) shapes and types.
> It implements the "separating axis theorom" for collision.   
> **Note** The return values in the API are not user friendly atm, this will improve.
> They return lists with various values packed inside.

<endpoint module="luxe: sat2D" class="SAT2D" signature="collide_shape(shape1 : Any, shape2 : Any)"></endpoint>
### SAT2D.collide_shape(..)
```lx
SAT2D.collide_shape(shape1 : Any, shape2 : Any) : unknown
```
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
### SAT2D.collide_shapes(..)
```lx
SAT2D.collide_shapes(shape : Any, list : Any) : unknown
```
> Like `collide_shape` for details on the results, but checks multiple shapes against a single one. 
> For example `SAT2D.collide_shapes(player, walls)`, where walls is a list of `Shape2D` to collide against.
> 
> Note this returns a list of results, and each result is a list described by `collide_shape`.
> 
>   ```js
>   //:todo: example. see samples/wip/shape2D
>   ```   

<endpoint module="luxe: sat2D" class="SAT2D" signature="contains(shape : Any, point : Any)"></endpoint>
### SAT2D.contains(..)
```lx
SAT2D.contains(shape : Any, point : Any) : unknown
```
> Returns true if the given `Shape2D` contains `point`.   

<endpoint module="luxe: sat2D" class="SAT2D" signature="sweep_shape(shape1 : Any, shape2 : Any, vel : Any)"></endpoint>
### SAT2D.sweep_shape(...)
```lx
SAT2D.sweep_shape(shape1 : Any, shape2 : Any, vel : Any) : unknown
```
>    

<endpoint module="luxe: sat2D" class="SAT2D" signature="raycast_ray(ray1 : Any, ray2 : Any)"></endpoint>
### SAT2D.raycast_ray(..)
```lx
SAT2D.raycast_ray(ray1 : Any, ray2 : Any) : unknown
```
>    

<endpoint module="luxe: sat2D" class="SAT2D" signature="raycast_rays(ray : Any, rays : Any)"></endpoint>
### SAT2D.raycast_rays(..)
```lx
SAT2D.raycast_rays(ray : Any, rays : Any) : unknown
```
>    

<endpoint module="luxe: sat2D" class="SAT2D" signature="raycast_shape(ray : Any, shape : Any)"></endpoint>
### SAT2D.raycast_shape(..)
```lx
SAT2D.raycast_shape(ray : Any, shape : Any) : unknown
```
>    

<endpoint module="luxe: sat2D" class="SAT2D" signature="raycast_shapes(ray : Any, shapes : Any)"></endpoint>
### SAT2D.raycast_shapes(..)
```lx
SAT2D.raycast_shapes(ray : Any, shapes : Any) : unknown
```
>    

