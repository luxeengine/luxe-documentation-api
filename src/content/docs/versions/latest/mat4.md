---
title: "luxe: mat4"
description: API version 2025.11.1
---
## `luxe: mat4{:lx}` module

- [Matrix](#matrix)   

---


### Matrix
`import "luxe: mat4" for Matrix{:lx}`
> no docs found

- [new](#Matrix.new)()
- [m](#Matrix.m)
- [ortho](#Matrix.ortho+6)(**left**: `Any{:lx}`, **right**: `Any{:lx}`, **top**: `Any{:lx}`, **bottom**: `Any{:lx}`, **near**: `Any{:lx}`, **far**: `Any{:lx}`)
- [make_angle_axis](#Matrix.make_angle_axis+2)(**axis**: `Any{:lx}`, **theta**: `Any{:lx}`)
- [apply_to_float3](#Matrix.apply_to_float3)(**vec**: `Float3{:lx}`)
- [set](#Matrix.set+16)(**n11**: `Any{:lx}`, **n12**: `Any{:lx}`, **n13**: `Any{:lx}`, **n14**: `Any{:lx}`, **n21**: `Any{:lx}`, **n22**: `Any{:lx}`, **n23**: `Any{:lx}`, **n24**: `Any{:lx}`, **n31**: `Any{:lx}`, **n32**: `Any{:lx}`, **n33**: `Any{:lx}`, **n34**: `Any{:lx}`, **n41**: `Any{:lx}`, **n42**: `Any{:lx}`, **n43**: `Any{:lx}`, **n44**: `Any{:lx}`)
- [pos_x](#Matrix.pos_x)
- [pos_y](#Matrix.pos_y)
- [pos_z](#Matrix.pos_z)
- [pos_x](#Matrix.pos_x=)=(v : Any)
- [pos_y](#Matrix.pos_y=)=(v : Any)
- [pos_z](#Matrix.pos_z=)=(v : Any)
- [pos](#Matrix.pos)
- [pos](#Matrix.pos=)=(v : Any)
- [scale_x](#Matrix.scale_x)
- [scale_y](#Matrix.scale_y)
- [scale_z](#Matrix.scale_z)


---

<endpoint module="luxe: mat4" class="Matrix" signature="new()"></endpoint>
<h4 class="signature_head">Matrix.new</h4><a class="signature-arity" href="#Matrix.new" title="Permanent link">1</a><signature id="Matrix.new">

```lx
Matrix.new() : Matrix
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="m"></endpoint>
<h4 class="signature_head">Matrix.m</h4><a class="signature-arity" href="#Matrix.m" title="Permanent link">1</a><signature id="Matrix.m">

```lx
Matrix.m : Floats
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="ortho(left : Any, right : Any, top : Any, bottom : Any, near : Any, far : Any)"></endpoint>
<h4 class="signature_head">Matrix.ortho</h4><a class="signature-arity" href="#Matrix.ortho+6" title="Permanent link">6</a><signature id="Matrix.ortho+6">

```lx
Matrix.ortho(left : Any, right : Any, top : Any, bottom : Any, near : Any, far : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="make_angle_axis(axis : Any, theta : Any)"></endpoint>
<h4 class="signature_head">Matrix.make_angle_axis</h4><a class="signature-arity" href="#Matrix.make_angle_axis+2" title="Permanent link">2</a><signature id="Matrix.make_angle_axis+2">

```lx
Matrix.make_angle_axis(axis : Any, theta : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="apply_to_float3(vec : Float3)"></endpoint>
<h4 class="signature_head">Matrix.apply_to_float3</h4><a class="signature-arity" href="#Matrix.apply_to_float3" title="Permanent link">1</a><signature id="Matrix.apply_to_float3">

```lx
Matrix.apply_to_float3(vec : Float3) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="set(n11 : Any, n12 : Any, n13 : Any, n14 : Any, n21 : Any, n22 : Any, n23 : Any, n24 : Any, n31 : Any, n32 : Any, n33 : Any, n34 : Any, n41 : Any, n42 : Any, n43 : Any, n44 : Any)"></endpoint>
<h4 class="signature_head">Matrix.set</h4><a class="signature-arity" href="#Matrix.set+16" title="Permanent link">16</a><signature id="Matrix.set+16">

```lx
Matrix.set(n11 : Any, n12 : Any, n13 : Any, n14 : Any, n21 : Any, n22 : Any, n23 : Any, n24 : Any, n31 : Any, n32 : Any, n33 : Any, n34 : Any, n41 : Any, n42 : Any, n43 : Any, n44 : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="pos_x"></endpoint>
<h4 class="signature_head">Matrix.pos_x</h4><a class="signature-arity" href="#Matrix.pos_x" title="Permanent link">1</a><signature id="Matrix.pos_x">

```lx
Matrix.pos_x : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="pos_y"></endpoint>
<h4 class="signature_head">Matrix.pos_y</h4><a class="signature-arity" href="#Matrix.pos_y" title="Permanent link">1</a><signature id="Matrix.pos_y">

```lx
Matrix.pos_y : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="pos_z"></endpoint>
<h4 class="signature_head">Matrix.pos_z</h4><a class="signature-arity" href="#Matrix.pos_z" title="Permanent link">1</a><signature id="Matrix.pos_z">

```lx
Matrix.pos_z : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="pos_x=(v : Any)"></endpoint>
<h4 class="signature_head">Matrix.pos_x</h4><a class="signature-arity" href="#Matrix.pos_x=" title="Permanent link">1</a><signature id="Matrix.pos_x=">

```lx
Matrix.pos_x=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="pos_y=(v : Any)"></endpoint>
<h4 class="signature_head">Matrix.pos_y</h4><a class="signature-arity" href="#Matrix.pos_y=" title="Permanent link">1</a><signature id="Matrix.pos_y=">

```lx
Matrix.pos_y=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="pos_z=(v : Any)"></endpoint>
<h4 class="signature_head">Matrix.pos_z</h4><a class="signature-arity" href="#Matrix.pos_z=" title="Permanent link">1</a><signature id="Matrix.pos_z=">

```lx
Matrix.pos_z=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="pos"></endpoint>
<h4 class="signature_head">Matrix.pos</h4><a class="signature-arity" href="#Matrix.pos" title="Permanent link">1</a><signature id="Matrix.pos">

```lx
Matrix.pos : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="pos=(v : Any)"></endpoint>
<h4 class="signature_head">Matrix.pos</h4><a class="signature-arity" href="#Matrix.pos=" title="Permanent link">1</a><signature id="Matrix.pos=">

```lx
Matrix.pos=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="scale_x"></endpoint>
<h4 class="signature_head">Matrix.scale_x</h4><a class="signature-arity" href="#Matrix.scale_x" title="Permanent link">1</a><signature id="Matrix.scale_x">

```lx
Matrix.scale_x : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="scale_y"></endpoint>
<h4 class="signature_head">Matrix.scale_y</h4><a class="signature-arity" href="#Matrix.scale_y" title="Permanent link">1</a><signature id="Matrix.scale_y">

```lx
Matrix.scale_y : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: mat4" class="Matrix" signature="scale_z"></endpoint>
<h4 class="signature_head">Matrix.scale_z</h4><a class="signature-arity" href="#Matrix.scale_z" title="Permanent link">1</a><signature id="Matrix.scale_z">

```lx
Matrix.scale_z : unknown
```
</signature>

> no docs found   

