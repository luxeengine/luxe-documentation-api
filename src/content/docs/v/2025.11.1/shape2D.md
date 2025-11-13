---
title: "luxe: shape2D"
description: API version 2025.11.1
slug: "v/2025.11.1/shape2D"
---
- [Ray2D](#ray2d)   
- [Ray2DType](#ray2dtype)   
- [Shape2D](#shape2d)   
- [Shape2DType](#shape2dtype)   

---


## Ray2D
```lx
import "luxe: shape2D" for Ray2D
```
> no docs found

<endpoint module="luxe: shape2D" class="Ray2D" signature="create(start : Any, end : Any, type : Any)"></endpoint>
### Ray2D.create(...)
```lx
Ray2D.create(start : Any, end : Any, type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2D" signature="set(ray : Any, start : Any, end : Any, type : Any)"></endpoint>
### Ray2D.set(....)
```lx
Ray2D.set(ray : Any, start : Any, end : Any, type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2D" signature="set_start(ray : Any, start : Any)"></endpoint>
### Ray2D.set_start(..)
```lx
Ray2D.set_start(ray : Any, start : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2D" signature="set_end(ray : Any, end : Any)"></endpoint>
### Ray2D.set_end(..)
```lx
Ray2D.set_end(ray : Any, end : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2D" signature="set_type(ray : Any, type : Any)"></endpoint>
### Ray2D.set_type(..)
```lx
Ray2D.set_type(ray : Any, type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2D" signature="get_start(ray : Any)"></endpoint>
### Ray2D.get_start(.)
```lx
Ray2D.get_start(ray : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2D" signature="get_end(ray : Any)"></endpoint>
### Ray2D.get_end(.)
```lx
Ray2D.get_end(ray : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2D" signature="get_type(ray : Any)"></endpoint>
### Ray2D.get_type(.)
```lx
Ray2D.get_type(ray : Any) : unknown
```
> no docs found   


## Ray2DType
```lx
import "luxe: shape2D" for Ray2DType
```
> no docs found

<endpoint module="luxe: shape2D" class="Ray2DType" signature="finite"></endpoint>
### Ray2DType.finite
```lx
Ray2DType.finite : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2DType" signature="infinite_end"></endpoint>
### Ray2DType.infinite_end
```lx
Ray2DType.infinite_end : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2DType" signature="infinite"></endpoint>
### Ray2DType.infinite
```lx
Ray2DType.infinite : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2DType" signature="from_string(value : Any)"></endpoint>
### Ray2DType.from_string(.)
```lx
Ray2DType.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Ray2DType" signature="name(value : Any)"></endpoint>
### Ray2DType.name(.)
```lx
Ray2DType.name(value : Any) : unknown
```
> no docs found   


## Shape2D
```lx
import "luxe: shape2D" for Shape2D
```
> no docs found

<endpoint module="luxe: shape2D" class="Shape2D" signature="create_poly(pos : Any, angle : Any, scale : Any, verts : Any)"></endpoint>
### Shape2D.create_poly(....)
```lx
Shape2D.create_poly(pos : Any, angle : Any, scale : Any, verts : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="create_ngon(pos : Any, angle : Any, scale : Any, sides : Any, radius : Any)"></endpoint>
### Shape2D.create_ngon(.....)
```lx
Shape2D.create_ngon(pos : Any, angle : Any, scale : Any, sides : Any, radius : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="create_rect(pos : Any, angle : Any, scale : Any, size : Any, centered : Any)"></endpoint>
### Shape2D.create_rect(.....)
```lx
Shape2D.create_rect(pos : Any, angle : Any, scale : Any, size : Any, centered : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="create_circle(pos : Any, angle : Any, scale : Any, radius : Any)"></endpoint>
### Shape2D.create_circle(....)
```lx
Shape2D.create_circle(pos : Any, angle : Any, scale : Any, radius : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="destroy(shape : Any)"></endpoint>
### Shape2D.destroy(.)
```lx
Shape2D.destroy(shape : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="set_pos(shape : Any, pos : Any)"></endpoint>
### Shape2D.set_pos(..)
```lx
Shape2D.set_pos(shape : Any, pos : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="set_rotation(shape : Any, angle : Any)"></endpoint>
### Shape2D.set_rotation(..)
```lx
Shape2D.set_rotation(shape : Any, angle : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="set_scale(shape : Any, scale : Any)"></endpoint>
### Shape2D.set_scale(..)
```lx
Shape2D.set_scale(shape : Any, scale : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="get_type(shape : Any)"></endpoint>
### Shape2D.get_type(.)
```lx
Shape2D.get_type(shape : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="get_pos(shape : Any)"></endpoint>
### Shape2D.get_pos(.)
```lx
Shape2D.get_pos(shape : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="get_bounds(shape : Any, into : Any)"></endpoint>
### Shape2D.get_bounds(..)
```lx
Shape2D.get_bounds(shape : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="get_rotation(shape : Any)"></endpoint>
### Shape2D.get_rotation(.)
```lx
Shape2D.get_rotation(shape : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="get_scale(shape : Any)"></endpoint>
### Shape2D.get_scale(.)
```lx
Shape2D.get_scale(shape : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="get_verts(shape : Any)"></endpoint>
### Shape2D.get_verts(.)
```lx
Shape2D.get_verts(shape : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2D" signature="get_radius(shape : Any)"></endpoint>
### Shape2D.get_radius(.)
```lx
Shape2D.get_radius(shape : Any) : unknown
```
> no docs found   


## Shape2DType
```lx
import "luxe: shape2D" for Shape2DType
```
> no docs found

<endpoint module="luxe: shape2D" class="Shape2DType" signature="poly"></endpoint>
### Shape2DType.poly
```lx
Shape2DType.poly : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2DType" signature="circle"></endpoint>
### Shape2DType.circle
```lx
Shape2DType.circle : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2DType" signature="from_string(value : Any)"></endpoint>
### Shape2DType.from_string(.)
```lx
Shape2DType.from_string(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: shape2D" class="Shape2DType" signature="name(value : Any)"></endpoint>
### Shape2DType.name(.)
```lx
Shape2DType.name(value : Any) : unknown
```
> no docs found   

