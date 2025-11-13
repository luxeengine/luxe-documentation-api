---
title: "luxe: math"
description: API version 2025.11.1
---
## `luxe: math{:lx}` module

- [Math](#math)   

---


### Math
`import "luxe: math" for Math{:lx}`
> Utility class with static math functions.

- [add](#Math.add+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [add2D](#Math.add2D+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [add_to](#Math.add_to+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [add2D_to](#Math.add2D_to+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [sub](#Math.sub+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [sub2D](#Math.sub2D+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [sub_to](#Math.sub_to+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [sub2D_to](#Math.sub2D_to+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [mults](#Math.mults+2)(**a**: `Vec{:lx}`, **b**: `Num{:lx}`)
- [mult](#Math.mult+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [mult2D](#Math.mult2D+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [mult_to](#Math.mult_to+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [mults_to](#Math.mults_to+2)(**a**: `Vec{:lx}`, **b**: `Num{:lx}`)
- [mult2D_to](#Math.mult2D_to+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [scale](#Math.scale+2)(**a**: `Vec{:lx}`, **s**: `Num{:lx}`)
- [scale2D](#Math.scale2D+2)(**a**: `Vec{:lx}`, **s**: `Num{:lx}`)
- [scale_to](#Math.scale_to+2)(**a**: `Vec{:lx}`, **s**: `Num{:lx}`)
- [scale2D_to](#Math.scale2D_to+2)(**a**: `Vec{:lx}`, **s**: `Num{:lx}`)
- [divide](#Math.divide+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [divide_to](#Math.divide_to+2)(**vec**: `Vec{:lx}`, **other**: `Vec{:lx}`)
- [divide2D](#Math.divide2D+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [divide2D_to](#Math.divide2D_to+2)(**vec**: `Vec{:lx}`, **other**: `Vec{:lx}`)
- [div](#Math.div+2)(**a**: `Vec{:lx}`, **s**: `Num{:lx}`)
- [div2D](#Math.div2D+2)(**a**: `Vec{:lx}`, **s**: `Num{:lx}`)
- [div_to](#Math.div_to+2)(**a**: `Vec{:lx}`, **s**: `Num{:lx}`)
- [div2D_to](#Math.div2D_to+2)(**a**: `Vec{:lx}`, **s**: `Num{:lx}`)
- [equal](#Math.equal+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [length](#Math.length+2)(**x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [length](#Math.length+3)(**x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [length](#Math.length)(**vec**: `Vec{:lx}`)
- [length2D](#Math.length2D)(**vec**: `Vec{:lx}`)
- [length_sq](#Math.length_sq+2)(**x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [length_sq](#Math.length_sq+3)(**x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [length_sq](#Math.length_sq)(**vec**: `Vec{:lx}`)
- [length_sq2D](#Math.length_sq2D)(**vec**: `Vec{:lx}`)
- [dot](#Math.dot+6)(**x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **other_x**: `Num{:lx}`, **other_y**: `Num{:lx}`, **other_z**: `Num{:lx}`)
- [dot](#Math.dot+4)(**x**: `Num{:lx}`, **y**: `Num{:lx}`, **other_x**: `Num{:lx}`, **other_y**: `Num{:lx}`)
- [dot](#Math.dot+2)(**vec**: `Vec{:lx}`, **other**: `Vec{:lx}`)
- [dot2D](#Math.dot2D+2)(**vec**: `Vec{:lx}`, **other**: `Vec{:lx}`)
- [cross](#Math.cross+2)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`)
- [angle](#Math.angle+2)(**from**: `Vec{:lx}`, **to**: `Vec{:lx}`)
- [angle](#Math.angle+3)(**v1**: `Vec{:lx}`, **v2**: `Vec{:lx}`, **up**: `Vec{:lx}`)
- [angle2D](#Math.angle2D+2)(**from**: `Vec{:lx}`, **to**: `Vec{:lx}`)
- [angle2D](#Math.angle2D+4)(**from_x**: `Num{:lx}`, **from_y**: `Num{:lx}`, **to_x**: `Num{:lx}`, **to_y**: `Num{:lx}`)
- [normalize2D](#Math.normalize2D)(**vec**: `Vec{:lx}`)
- [normalized](#Math.normalized)(**vec**: `Vec{:lx}`)
- [normalized2D](#Math.normalized2D)(**vec**: `Vec{:lx}`)
- [normalize](#Math.normalize)(**vec**: `Vec{:lx}`)
- [dist](#Math.dist+6)(**x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **other_x**: `Num{:lx}`, **other_y**: `Num{:lx}`, **other_z**: `Num{:lx}`)
- [dist](#Math.dist+2)(**vec**: `Vec{:lx}`, **other**: `Vec{:lx}`)
- [dist2D](#Math.dist2D+2)(**vec**: `Vec{:lx}`, **other**: `Vec{:lx}`)
- [dist2D](#Math.dist2D+4)(**x**: `Num{:lx}`, **y**: `Num{:lx}`, **other_x**: `Num{:lx}`, **other_y**: `Num{:lx}`)
- [dir2D](#Math.dir2D+2)(**pos**: `Vec{:lx}`, **target**: `Vec{:lx}`)
- [dir](#Math.dir+2)(**pos**: `Vec{:lx}`, **target**: `Vec{:lx}`)
- [rotate](#Math.rotate+3)(**vec**: `Vec{:lx}`, **axis**: `Vec{:lx}`, **angle**: `Num{:lx}`)
- [rotate_by_quat](#Math.rotate_by_quat+2)(**vec**: `Vec{:lx}`, **quat**: `Float4{:lx}`)
- [quat_from_euler](#Math.quat_from_euler)(**vec**: `Vec{:lx}`)
- [rotate](#Math.rotate+4)(**vec**: `Vec{:lx}`, **ox**: `Num{:lx}`, **oy**: `Num{:lx}`, **angle**: `Num{:lx}`)
- [ray_intersect_plane](#Math.ray_intersect_plane+12)(**plane_x**: `Num{:lx}`, **plane_y**: `Num{:lx}`, **plane_z**: `Num{:lx}`, **normal_x**: `Num{:lx}`, **normal_y**: `Num{:lx}`, **normal_z**: `Num{:lx}`, **ray_x**: `Num{:lx}`, **ray_y**: `Num{:lx}`, **ray_z**: `Num{:lx}`, **ray_dir_x**: `Num{:lx}`, **ray_dir_y**: `Num{:lx}`, **ray_dir_z**: `Num{:lx}`)
- [closest_point_on_plane](#Math.closest_point_on_plane+9)(**plane_x**: `Num{:lx}`, **plane_y**: `Num{:lx}`, **plane_z**: `Num{:lx}`, **normal_x**: `Num{:lx}`, **normal_y**: `Num{:lx}`, **normal_z**: `Num{:lx}`, **point_x**: `Num{:lx}`, **point_y**: `Num{:lx}`, **point_z**: `Num{:lx}`)
- [closest_point_on_line](#Math.closest_point_on_line+9)(**line_x**: `Num{:lx}`, **line_y**: `Num{:lx}`, **line_z**: `Num{:lx}`, **line_end_x**: `Num{:lx}`, **line_end_y**: `Num{:lx}`, **line_end_z**: `Num{:lx}`, **point_x**: `Num{:lx}`, **point_y**: `Num{:lx}`, **point_z**: `Num{:lx}`)
- [closest_point_on_line](#Math.closest_point_on_line+3)(**line**: `Vec{:lx}`, **line_end**: `Vec{:lx}`, **point**: `Vec{:lx}`)
- [in_rect](#Math.in_rect+6)(**x**: `Num{:lx}`, **y**: `Num{:lx}`, **rx**: `Num{:lx}`, **ry**: `Num{:lx}`, **rw**: `Num{:lx}`, **rh**: `Num{:lx}`)
- [in_volume](#Math.in_volume+3)(**pos**: `Vec{:lx}`, **origin**: `Vec{:lx}`, **extents**: `Vec{:lx}`)
- [wrap](#Math.wrap+2)(**value**: `Num{:lx}`, **modulus**: `Num{:lx}`)
- [overlaps](#Math.overlaps+8)(**x0**: `Num{:lx}`, **y0**: `Num{:lx}`, **w0**: `Num{:lx}`, **h0**: `Num{:lx}`, **x1**: `Num{:lx}`, **y1**: `Num{:lx}`, **w1**: `Num{:lx}`, **h1**: `Num{:lx}`)
- [sign](#Math.sign)(**x**: `Num{:lx}`)
- [sign0](#Math.sign0)(**x**: `Num{:lx}`)
- [atan2](#Math.atan2+2)(**y**: `Num{:lx}`, **x**: `Num{:lx}`)
- [degrees](#Math.degrees)(**radians**: `Num{:lx}`)
- [radians](#Math.radians)(**degrees**: `Num{:lx}`)
- [clamp](#Math.clamp+3)(**value**: `Num{:lx}`, **a**: `Num{:lx}`, **b**: `Num{:lx}`)
- [min](#Math.min+2)(**a**: `Num{:lx}`, **b**: `Num{:lx}`)
- [max](#Math.max+2)(**a**: `Num{:lx}`, **b**: `Num{:lx}`)
- [floor_around_zero](#Math.floor_around_zero)(**a**: `Num{:lx}`)
- [ceil_around_zero](#Math.ceil_around_zero)(**a**: `Num{:lx}`)
- [fixed](#Math.fixed)(**value**: `Num{:lx}`)
- [fixed](#Math.fixed+2)(**value**: `Num{:lx}`, **precision**: `Num{:lx}`)
- [angle_delta](#Math.angle_delta+2)(**from**: `Num{:lx}`, **to**: `Num{:lx}`)
- [lerp2D](#Math.lerp2D+3)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`, **t**: `Num{:lx}`)
- [lerp3D](#Math.lerp3D+3)(**a**: `Vec{:lx}`, **b**: `Vec{:lx}`, **t**: `Num{:lx}`)
- [smooth_t](#Math.smooth_t+2)(**t**: `Num{:lx}`, **smoothness**: `Num{:lx}`)
- [smoother_t](#Math.smoother_t+2)(**t**: `Num{:lx}`, **smoothness**: `Num{:lx}`)
- [lerp](#Math.lerp+3)(**a**: `Num{:lx}`, **b**: `Num{:lx}`, **t**: `Num{:lx}`)
- [lerp_angle](#Math.lerp_angle+3)(**a**: `Num{:lx}`, **b**: `Num{:lx}`, **t**: `Num{:lx}`)
- [weighted_avg](#Math.weighted_avg+3)(**value**: `Num{:lx}`, **target**: `Num{:lx}`, **slowness**: `Num{:lx}`)
- [within_range](#Math.within_range+3)(**value**: `Num{:lx}`, **start_range**: `Num{:lx}`, **end_range**: `Num{:lx}`)
- [approx](#Math.approx+2)(**one**: `Num{:lx}`, **other**: `Num{:lx}`)
- [approx](#Math.approx+3)(**one**: `Num{:lx}`, **other**: `Num{:lx}`, **epsilon**: `Num{:lx}`)
- [wrap_angle](#Math.wrap_angle)(**degrees**: `Num{:lx}`)
- [wrap_angle](#Math.wrap_angle+3)(**degrees**: `Num{:lx}`, **lower**: `Num{:lx}`, **upper**: `Num{:lx}`)
- [wrap_radians](#Math.wrap_radians+3)(**radians**: `Num{:lx}`, **lower**: `Num{:lx}`, **upper**: `Num{:lx}`)
- [nearest_power_of_two](#Math.nearest_power_of_two)(**value**: `Num{:lx}`)
- [map_linear](#Math.map_linear+5)(**value**: `Num{:lx}`, **a1**: `Num{:lx}`, **a2**: `Num{:lx}`, **b1**: `Num{:lx}`, **b2**: `Num{:lx}`)
- [smoothstep](#Math.smoothstep+3)(**x**: `Num{:lx}`, **min**: `Num{:lx}`, **max**: `Num{:lx}`)
- [smootherstep](#Math.smootherstep+3)(**x**: `Num{:lx}`, **min**: `Num{:lx}`, **max**: `Num{:lx}`)
- [smoothstepx](#Math.smoothstepx+3)(**x**: `Num{:lx}`, **round**: `Num{:lx}`, **steep**: `Num{:lx}`)
- [random_point_in_unit_circle](#Math.random_point_in_unit_circle)(**rng**: `Random{:lx}`)
- [slerp](#Math.slerp+3)(**a**: `Quat{:lx}`, **b**: `Quat{:lx}`, **t**: `Num{:lx}`)


---

<endpoint module="luxe: math" class="Math" signature="add(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.add</h4><a class="signature-arity" href="#Math.add+2" title="Permanent link">2</a><signature id="Math.add+2">

```lx
Math.add(a : Vec, b : Vec) : unknown
```
</signature>

> Add two 3D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="add2D(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.add2D</h4><a class="signature-arity" href="#Math.add2D+2" title="Permanent link">2</a><signature id="Math.add2D+2">

```lx
Math.add2D(a : Vec, b : Vec) : unknown
```
</signature>

> Add two vector2s together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="add_to(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.add_to</h4><a class="signature-arity" href="#Math.add_to+2" title="Permanent link">2</a><signature id="Math.add_to+2">

```lx
Math.add_to(a : Vec, b : Vec) : unknown
```
</signature>

> Add two 3D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="add2D_to(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.add2D_to</h4><a class="signature-arity" href="#Math.add2D_to+2" title="Permanent link">2</a><signature id="Math.add2D_to+2">

```lx
Math.add2D_to(a : Vec, b : Vec) : unknown
```
</signature>

> Add two 2D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="sub(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.sub</h4><a class="signature-arity" href="#Math.sub+2" title="Permanent link">2</a><signature id="Math.sub+2">

```lx
Math.sub(a : Vec, b : Vec) : unknown
```
</signature>

> Subtract two 3D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="sub2D(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.sub2D</h4><a class="signature-arity" href="#Math.sub2D+2" title="Permanent link">2</a><signature id="Math.sub2D+2">

```lx
Math.sub2D(a : Vec, b : Vec) : unknown
```
</signature>

> Subtract two 2D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="sub_to(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.sub_to</h4><a class="signature-arity" href="#Math.sub_to+2" title="Permanent link">2</a><signature id="Math.sub_to+2">

```lx
Math.sub_to(a : Vec, b : Vec) : unknown
```
</signature>

> Subtract two 3D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="sub2D_to(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.sub2D_to</h4><a class="signature-arity" href="#Math.sub2D_to+2" title="Permanent link">2</a><signature id="Math.sub2D_to+2">

```lx
Math.sub2D_to(a : Vec, b : Vec) : unknown
```
</signature>

> Subtract two 2D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="mults(a : Vec, b : Num)"></endpoint>
<h4 class="signature_head">Math.mults</h4><a class="signature-arity" href="#Math.mults+2" title="Permanent link">2</a><signature id="Math.mults+2">

```lx
Math.mults(a : Vec, b : Num) : unknown
```
</signature>

> Multiply a 3D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="mult(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.mult</h4><a class="signature-arity" href="#Math.mult+2" title="Permanent link">2</a><signature id="Math.mult+2">

```lx
Math.mult(a : Vec, b : Vec) : unknown
```
</signature>

> Multiply two 3D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="mult2D(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.mult2D</h4><a class="signature-arity" href="#Math.mult2D+2" title="Permanent link">2</a><signature id="Math.mult2D+2">

```lx
Math.mult2D(a : Vec, b : Vec) : unknown
```
</signature>

> Multiply two 2D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="mult_to(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.mult_to</h4><a class="signature-arity" href="#Math.mult_to+2" title="Permanent link">2</a><signature id="Math.mult_to+2">

```lx
Math.mult_to(a : Vec, b : Vec) : unknown
```
</signature>

> Multiply two 3D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="mults_to(a : Vec, b : Num)"></endpoint>
<h4 class="signature_head">Math.mults_to</h4><a class="signature-arity" href="#Math.mults_to+2" title="Permanent link">2</a><signature id="Math.mults_to+2">

```lx
Math.mults_to(a : Vec, b : Num) : unknown
```
</signature>

> Multiply a 3D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="mult2D_to(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.mult2D_to</h4><a class="signature-arity" href="#Math.mult2D_to+2" title="Permanent link">2</a><signature id="Math.mult2D_to+2">

```lx
Math.mult2D_to(a : Vec, b : Vec) : unknown
```
</signature>

> Multiply two 2D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="scale(a : Vec, s : Num)"></endpoint>
<h4 class="signature_head">Math.scale</h4><a class="signature-arity" href="#Math.scale+2" title="Permanent link">2</a><signature id="Math.scale+2">

```lx
Math.scale(a : Vec, s : Num) : unknown
```
</signature>

> Multiply a 3D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="scale2D(a : Vec, s : Num)"></endpoint>
<h4 class="signature_head">Math.scale2D</h4><a class="signature-arity" href="#Math.scale2D+2" title="Permanent link">2</a><signature id="Math.scale2D+2">

```lx
Math.scale2D(a : Vec, s : Num) : unknown
```
</signature>

> Multiply a 2D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="scale_to(a : Vec, s : Num)"></endpoint>
<h4 class="signature_head">Math.scale_to</h4><a class="signature-arity" href="#Math.scale_to+2" title="Permanent link">2</a><signature id="Math.scale_to+2">

```lx
Math.scale_to(a : Vec, s : Num) : unknown
```
</signature>

> Multiply a 3D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="scale2D_to(a : Vec, s : Num)"></endpoint>
<h4 class="signature_head">Math.scale2D_to</h4><a class="signature-arity" href="#Math.scale2D_to+2" title="Permanent link">2</a><signature id="Math.scale2D_to+2">

```lx
Math.scale2D_to(a : Vec, s : Num) : unknown
```
</signature>

> Multiply a 2D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="divide(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.divide</h4><a class="signature-arity" href="#Math.divide+2" title="Permanent link">2</a><signature id="Math.divide+2">

```lx
Math.divide(a : Vec, b : Vec) : unknown
```
</signature>

> Divide a 3D vector by another, returning the result   

<endpoint module="luxe: math" class="Math" signature="divide_to(vec : Vec, other : Vec)"></endpoint>
<h4 class="signature_head">Math.divide_to</h4><a class="signature-arity" href="#Math.divide_to+2" title="Permanent link">2</a><signature id="Math.divide_to+2">

```lx
Math.divide_to(vec : Vec, other : Vec) : unknown
```
</signature>

> Divide a 3D vector by another, updating the vector   

<endpoint module="luxe: math" class="Math" signature="divide2D(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.divide2D</h4><a class="signature-arity" href="#Math.divide2D+2" title="Permanent link">2</a><signature id="Math.divide2D+2">

```lx
Math.divide2D(a : Vec, b : Vec) : unknown
```
</signature>

> Divide a 2D vector by another, returning the result   

<endpoint module="luxe: math" class="Math" signature="divide2D_to(vec : Vec, other : Vec)"></endpoint>
<h4 class="signature_head">Math.divide2D_to</h4><a class="signature-arity" href="#Math.divide2D_to+2" title="Permanent link">2</a><signature id="Math.divide2D_to+2">

```lx
Math.divide2D_to(vec : Vec, other : Vec) : unknown
```
</signature>

> Divide a 2D vector by another, updating the vector   

<endpoint module="luxe: math" class="Math" signature="div(a : Vec, s : Num)"></endpoint>
<h4 class="signature_head">Math.div</h4><a class="signature-arity" href="#Math.div+2" title="Permanent link">2</a><signature id="Math.div+2">

```lx
Math.div(a : Vec, s : Num) : unknown
```
</signature>

> Divide a 3D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="div2D(a : Vec, s : Num)"></endpoint>
<h4 class="signature_head">Math.div2D</h4><a class="signature-arity" href="#Math.div2D+2" title="Permanent link">2</a><signature id="Math.div2D+2">

```lx
Math.div2D(a : Vec, s : Num) : unknown
```
</signature>

> Divide a 2D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="div_to(a : Vec, s : Num)"></endpoint>
<h4 class="signature_head">Math.div_to</h4><a class="signature-arity" href="#Math.div_to+2" title="Permanent link">2</a><signature id="Math.div_to+2">

```lx
Math.div_to(a : Vec, s : Num) : unknown
```
</signature>

> Divide a 3D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="div2D_to(a : Vec, s : Num)"></endpoint>
<h4 class="signature_head">Math.div2D_to</h4><a class="signature-arity" href="#Math.div2D_to+2" title="Permanent link">2</a><signature id="Math.div2D_to+2">

```lx
Math.div2D_to(a : Vec, s : Num) : unknown
```
</signature>

> Divide a 2D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="equal(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.equal</h4><a class="signature-arity" href="#Math.equal+2" title="Permanent link">2</a><signature id="Math.equal+2">

```lx
Math.equal(a : Vec, b : Vec) : Bool
```
</signature>

> Checks if two vectors are equal. Vectors of different dimensions (e.g. 2D and 3D) are considered unequal   

<endpoint module="luxe: math" class="Math" signature="length(x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Math.length</h4><a class="signature-arity" href="#Math.length+2" title="Permanent link">2</a><signature id="Math.length+2">

```lx
Math.length(x : Num, y : Num) : Num
```
</signature>

> Length of a 2d vector.   

<endpoint module="luxe: math" class="Math" signature="length(x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Math.length</h4><a class="signature-arity" href="#Math.length+3" title="Permanent link">3</a><signature id="Math.length+3">

```lx
Math.length(x : Num, y : Num, z : Num) : Num
```
</signature>

> Length of a 3d vector.   

<endpoint module="luxe: math" class="Math" signature="length(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.length</h4><a class="signature-arity" href="#Math.length" title="Permanent link">1</a><signature id="Math.length">

```lx
Math.length(vec : Vec) : Num
```
</signature>

> Length of a 3d vector.   

<endpoint module="luxe: math" class="Math" signature="length2D(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.length2D</h4><a class="signature-arity" href="#Math.length2D" title="Permanent link">1</a><signature id="Math.length2D">

```lx
Math.length2D(vec : Vec) : Num
```
</signature>

> Length of a 2d vector.   

<endpoint module="luxe: math" class="Math" signature="length_sq(x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Math.length_sq</h4><a class="signature-arity" href="#Math.length_sq+2" title="Permanent link">2</a><signature id="Math.length_sq+2">

```lx
Math.length_sq(x : Num, y : Num) : Num
```
</signature>

> Squared length of a 2d vector (slightly cheaper than length).   

<endpoint module="luxe: math" class="Math" signature="length_sq(x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Math.length_sq</h4><a class="signature-arity" href="#Math.length_sq+3" title="Permanent link">3</a><signature id="Math.length_sq+3">

```lx
Math.length_sq(x : Num, y : Num, z : Num) : Num
```
</signature>

> Squared length of a 3d vector (slightly cheaper than length).   

<endpoint module="luxe: math" class="Math" signature="length_sq(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.length_sq</h4><a class="signature-arity" href="#Math.length_sq" title="Permanent link">1</a><signature id="Math.length_sq">

```lx
Math.length_sq(vec : Vec) : Num
```
</signature>

> Squared length of a 3d vector.   

<endpoint module="luxe: math" class="Math" signature="length_sq2D(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.length_sq2D</h4><a class="signature-arity" href="#Math.length_sq2D" title="Permanent link">1</a><signature id="Math.length_sq2D">

```lx
Math.length_sq2D(vec : Vec) : Num
```
</signature>

> Squared length of a 2d vector.   

<endpoint module="luxe: math" class="Math" signature="dot(x : Num, y : Num, z : Num, other_x : Num, other_y : Num, other_z : Num)"></endpoint>
<h4 class="signature_head">Math.dot</h4><a class="signature-arity" href="#Math.dot+6" title="Permanent link">6</a><signature id="Math.dot+6">

```lx
Math.dot(x : Num, y : Num, z : Num, other_x : Num, other_y : Num, other_z : Num) : Num
```
</signature>

> Dot product (or scalar product) of two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="dot(x : Num, y : Num, other_x : Num, other_y : Num)"></endpoint>
<h4 class="signature_head">Math.dot</h4><a class="signature-arity" href="#Math.dot+4" title="Permanent link">4</a><signature id="Math.dot+4">

```lx
Math.dot(x : Num, y : Num, other_x : Num, other_y : Num) : Num
```
</signature>

> Dot product (or scalar product) of two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="dot(vec : Vec, other : Vec)"></endpoint>
<h4 class="signature_head">Math.dot</h4><a class="signature-arity" href="#Math.dot+2" title="Permanent link">2</a><signature id="Math.dot+2">

```lx
Math.dot(vec : Vec, other : Vec) : Num
```
</signature>

> Dot product (or scalar product) of two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="dot2D(vec : Vec, other : Vec)"></endpoint>
<h4 class="signature_head">Math.dot2D</h4><a class="signature-arity" href="#Math.dot2D+2" title="Permanent link">2</a><signature id="Math.dot2D+2">

```lx
Math.dot2D(vec : Vec, other : Vec) : Num
```
</signature>

> Dot product (or scalar product) of two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="cross(a : Vec, b : Vec)"></endpoint>
<h4 class="signature_head">Math.cross</h4><a class="signature-arity" href="#Math.cross+2" title="Permanent link">2</a><signature id="Math.cross+2">

```lx
Math.cross(a : Vec, b : Vec) : Vec
```
</signature>

> Cross product of two 3d vectors. 
> Result will always be orthogonal to both input vectors (and [0, 0, 0] if the arguments are parallel)   

<endpoint module="luxe: math" class="Math" signature="angle(from : Vec, to : Vec)"></endpoint>
<h4 class="signature_head">Math.angle</h4><a class="signature-arity" href="#Math.angle+2" title="Permanent link">2</a><signature id="Math.angle+2">

```lx
Math.angle(from : Vec, to : Vec) : Num
```
</signature>

> Unsigned angle between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="angle(v1 : Vec, v2 : Vec, up : Vec)"></endpoint>
<h4 class="signature_head">Math.angle</h4><a class="signature-arity" href="#Math.angle+3" title="Permanent link">3</a><signature id="Math.angle+3">

```lx
Math.angle(v1 : Vec, v2 : Vec, up : Vec) : Num
```
</signature>

> Signed angle between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="angle2D(from : Vec, to : Vec)"></endpoint>
<h4 class="signature_head">Math.angle2D</h4><a class="signature-arity" href="#Math.angle2D+2" title="Permanent link">2</a><signature id="Math.angle2D+2">

```lx
Math.angle2D(from : Vec, to : Vec) : Num
```
</signature>

> Signed angle between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="angle2D(from_x : Num, from_y : Num, to_x : Num, to_y : Num)"></endpoint>
<h4 class="signature_head">Math.angle2D</h4><a class="signature-arity" href="#Math.angle2D+4" title="Permanent link">4</a><signature id="Math.angle2D+4">

```lx
Math.angle2D(from_x : Num, from_y : Num, to_x : Num, to_y : Num) : Num
```
</signature>

> Signed angle between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="normalize2D(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.normalize2D</h4><a class="signature-arity" href="#Math.normalize2D" title="Permanent link">1</a><signature id="Math.normalize2D">

```lx
Math.normalize2D(vec : Vec) : None
```
</signature>

> Normalize 2d vector. Changes input vector and doesnt return anything. 0 length vectors remain untouched.   

<endpoint module="luxe: math" class="Math" signature="normalized(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.normalized</h4><a class="signature-arity" href="#Math.normalized" title="Permanent link">1</a><signature id="Math.normalized">

```lx
Math.normalized(vec : Vec) : None
```
</signature>

> Normalize 3d vector. Returns the result.   

<endpoint module="luxe: math" class="Math" signature="normalized2D(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.normalized2D</h4><a class="signature-arity" href="#Math.normalized2D" title="Permanent link">1</a><signature id="Math.normalized2D">

```lx
Math.normalized2D(vec : Vec) : None
```
</signature>

> Normalize 2d vector. Returns the result.   

<endpoint module="luxe: math" class="Math" signature="normalize(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.normalize</h4><a class="signature-arity" href="#Math.normalize" title="Permanent link">1</a><signature id="Math.normalize">

```lx
Math.normalize(vec : Vec) : None
```
</signature>

> Normalize 3d vector. Changes input vector and doesnt return anything. 0 length vectors remain untouched.   

<endpoint module="luxe: math" class="Math" signature="dist(x : Num, y : Num, z : Num, other_x : Num, other_y : Num, other_z : Num)"></endpoint>
<h4 class="signature_head">Math.dist</h4><a class="signature-arity" href="#Math.dist+6" title="Permanent link">6</a><signature id="Math.dist+6">

```lx
Math.dist(x : Num, y : Num, z : Num, other_x : Num, other_y : Num, other_z : Num) : Num
```
</signature>

> Distance between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="dist(vec : Vec, other : Vec)"></endpoint>
<h4 class="signature_head">Math.dist</h4><a class="signature-arity" href="#Math.dist+2" title="Permanent link">2</a><signature id="Math.dist+2">

```lx
Math.dist(vec : Vec, other : Vec) : Num
```
</signature>

> Distance between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="dist2D(vec : Vec, other : Vec)"></endpoint>
<h4 class="signature_head">Math.dist2D</h4><a class="signature-arity" href="#Math.dist2D+2" title="Permanent link">2</a><signature id="Math.dist2D+2">

```lx
Math.dist2D(vec : Vec, other : Vec) : Num
```
</signature>

> Distance between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="dist2D(x : Num, y : Num, other_x : Num, other_y : Num)"></endpoint>
<h4 class="signature_head">Math.dist2D</h4><a class="signature-arity" href="#Math.dist2D+4" title="Permanent link">4</a><signature id="Math.dist2D+4">

```lx
Math.dist2D(x : Num, y : Num, other_x : Num, other_y : Num) : Num
```
</signature>

> Distance between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="dir2D(pos : Vec, target : Vec)"></endpoint>
<h4 class="signature_head">Math.dir2D</h4><a class="signature-arity" href="#Math.dir2D+2" title="Permanent link">2</a><signature id="Math.dir2D+2">

```lx
Math.dir2D(pos : Vec, target : Vec) : Vec
```
</signature>

> Directional vector (length 1 unless the arguments are the same) between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="dir(pos : Vec, target : Vec)"></endpoint>
<h4 class="signature_head">Math.dir</h4><a class="signature-arity" href="#Math.dir+2" title="Permanent link">2</a><signature id="Math.dir+2">

```lx
Math.dir(pos : Vec, target : Vec) : Vec
```
</signature>

> Directional vector (length 1 unless the arguments are the same) between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="rotate(vec : Vec, axis : Vec, angle : Num)"></endpoint>
<h4 class="signature_head">Math.rotate</h4><a class="signature-arity" href="#Math.rotate+3" title="Permanent link">3</a><signature id="Math.rotate+3">

```lx
Math.rotate(vec : Vec, axis : Vec, angle : Num) : Vec
```
</signature>

> Rotate a 3d vector around the given axis by angle degrees   

<endpoint module="luxe: math" class="Math" signature="rotate_by_quat(vec : Vec, quat : Float4)"></endpoint>
<h4 class="signature_head">Math.rotate_by_quat</h4><a class="signature-arity" href="#Math.rotate_by_quat+2" title="Permanent link">2</a><signature id="Math.rotate_by_quat+2">

```lx
Math.rotate_by_quat(vec : Vec, quat : Float4) : Vec
```
</signature>

> Rotate a 3d vector using the given quaternion   

<endpoint module="luxe: math" class="Math" signature="quat_from_euler(vec : Vec)"></endpoint>
<h4 class="signature_head">Math.quat_from_euler</h4><a class="signature-arity" href="#Math.quat_from_euler" title="Permanent link">1</a><signature id="Math.quat_from_euler">

```lx
Math.quat_from_euler(vec : Vec) : Float4
```
</signature>

> Create a quaternion from float3 euler (radians)   

<endpoint module="luxe: math" class="Math" signature="rotate(vec : Vec, ox : Num, oy : Num, angle : Num)"></endpoint>
<h4 class="signature_head">Math.rotate</h4><a class="signature-arity" href="#Math.rotate+4" title="Permanent link">4</a><signature id="Math.rotate+4">

```lx
Math.rotate(vec : Vec, ox : Num, oy : Num, angle : Num) : None
```
</signature>

> Rotate 2d vector around another 2d vector. This rotates the input vector and doesnt return anything.   

<endpoint module="luxe: math" class="Math" signature="ray_intersect_plane(plane_x : Num, plane_y : Num, plane_z : Num, normal_x : Num, normal_y : Num, normal_z : Num, ray_x : Num, ray_y : Num, ray_z : Num, ray_dir_x : Num, ray_dir_y : Num, ray_dir_z : Num)"></endpoint>
<h4 class="signature_head">Math.ray_intersect_plane</h4><a class="signature-arity" href="#Math.ray_intersect_plane+12" title="Permanent link">12</a><signature id="Math.ray_intersect_plane+12">

```lx
Math.ray_intersect_plane(plane_x : Num, plane_y : Num, plane_z : Num, normal_x : Num, normal_y : Num, normal_z : Num, ray_x : Num, ray_y : Num, ray_z : Num, ray_dir_x : Num, ray_dir_y : Num, ray_dir_z : Num) : Vec
```
</signature>

> Intersection point between an infinitely long ray and a infinitely big plane.
> Returns `null` if parallel.   

<endpoint module="luxe: math" class="Math" signature="closest_point_on_plane(plane_x : Num, plane_y : Num, plane_z : Num, normal_x : Num, normal_y : Num, normal_z : Num, point_x : Num, point_y : Num, point_z : Num)"></endpoint>
<h4 class="signature_head">Math.closest_point_on_plane</h4><a class="signature-arity" href="#Math.closest_point_on_plane+9" title="Permanent link">9</a><signature id="Math.closest_point_on_plane+9">

```lx
Math.closest_point_on_plane(plane_x : Num, plane_y : Num, plane_z : Num, normal_x : Num, normal_y : Num, normal_z : Num, point_x : Num, point_y : Num, point_z : Num) : Vec
```
</signature>

> Closest point on an infinite plane to a point.   

<endpoint module="luxe: math" class="Math" signature="closest_point_on_line(line_x : Num, line_y : Num, line_z : Num, line_end_x : Num, line_end_y : Num, line_end_z : Num, point_x : Num, point_y : Num, point_z : Num)"></endpoint>
<h4 class="signature_head">Math.closest_point_on_line</h4><a class="signature-arity" href="#Math.closest_point_on_line+9" title="Permanent link">9</a><signature id="Math.closest_point_on_line+9">

```lx
Math.closest_point_on_line(line_x : Num, line_y : Num, line_z : Num, line_end_x : Num, line_end_y : Num, line_end_z : Num, point_x : Num, point_y : Num, point_z : Num) : Vec
```
</signature>

> Closest point on an infinite line to a point.
> The progress from line start to line end in 4th component of return value.
> Line is constructed by 2 points on the line, 
> but the closest point can also be before the start of after the end 
> (in that case the 4th component of the return value wont be in the 0-1 range).   

<endpoint module="luxe: math" class="Math" signature="closest_point_on_line(line : Vec, line_end : Vec, point : Vec)"></endpoint>
<h4 class="signature_head">Math.closest_point_on_line</h4><a class="signature-arity" href="#Math.closest_point_on_line+3" title="Permanent link">3</a><signature id="Math.closest_point_on_line+3">

```lx
Math.closest_point_on_line(line : Vec, line_end : Vec, point : Vec) : Vec
```
</signature>

> Closest point on an infinite line to a point.
> The progress from line start to line end in 4th component of return value.
> Line is constructed by 2 points on the line, 
> but the closest point can also be before the start of after the end 
> (in that case the 4th component of the return value wont be in the 0-1 range).   

<endpoint module="luxe: math" class="Math" signature="in_rect(x : Num, y : Num, rx : Num, ry : Num, rw : Num, rh : Num)"></endpoint>
<h4 class="signature_head">Math.in_rect</h4><a class="signature-arity" href="#Math.in_rect+6" title="Permanent link">6</a><signature id="Math.in_rect+6">

```lx
Math.in_rect(x : Num, y : Num, rx : Num, ry : Num, rw : Num, rh : Num) : Bool
```
</signature>

> Checks if a 2d point is inside a rectangle.
> Only works for positive rectangle sizes.   

<endpoint module="luxe: math" class="Math" signature="in_volume(pos : Vec, origin : Vec, extents : Vec)"></endpoint>
<h4 class="signature_head">Math.in_volume</h4><a class="signature-arity" href="#Math.in_volume+3" title="Permanent link">3</a><signature id="Math.in_volume+3">

```lx
Math.in_volume(pos : Vec, origin : Vec, extents : Vec) : unknown
```
</signature>

> Checks if point is inside the volume at origin with extents   

<endpoint module="luxe: math" class="Math" signature="wrap(value : Num, modulus : Num)"></endpoint>
<h4 class="signature_head">Math.wrap</h4><a class="signature-arity" href="#Math.wrap+2" title="Permanent link">2</a><signature id="Math.wrap+2">

```lx
Math.wrap(value : Num, modulus : Num) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: math" class="Math" signature="overlaps(x0 : Num, y0 : Num, w0 : Num, h0 : Num, x1 : Num, y1 : Num, w1 : Num, h1 : Num)"></endpoint>
<h4 class="signature_head">Math.overlaps</h4><a class="signature-arity" href="#Math.overlaps+8" title="Permanent link">8</a><signature id="Math.overlaps+8">

```lx
Math.overlaps(x0 : Num, y0 : Num, w0 : Num, h0 : Num, x1 : Num, y1 : Num, w1 : Num, h1 : Num) : Bool
```
</signature>

> Checks if two rectangles overlap.
> Only works for positive rectangle sizes.   

<endpoint module="luxe: math" class="Math" signature="sign(x : Num)"></endpoint>
<h4 class="signature_head">Math.sign</h4><a class="signature-arity" href="#Math.sign" title="Permanent link">1</a><signature id="Math.sign">

```lx
Math.sign(x : Num) : Num
```
</signature>

> The sign of the number, expressed as a -1, 1 or 0, for negative and positive numbers, and zero.   

<endpoint module="luxe: math" class="Math" signature="sign0(x : Num)"></endpoint>
<h4 class="signature_head">Math.sign0</h4><a class="signature-arity" href="#Math.sign0" title="Permanent link">1</a><signature id="Math.sign0">

```lx
Math.sign0(x : Num) : Num
```
</signature>

> The sign of the number, expressed as a -1 0r 1, for negative and positive numbers, zero is positive.   

<endpoint module="luxe: math" class="Math" signature="atan2(y : Num, x : Num)"></endpoint>
<h4 class="signature_head">Math.atan2</h4><a class="signature-arity" href="#Math.atan2+2" title="Permanent link">2</a><signature id="Math.atan2+2">

```lx
Math.atan2(y : Num, x : Num) : Num
```
</signature>

> The arc tangent of `y` when divided by `x`, 
>     using the signs of the two numbers to determine the quadrant of the result. 
>     (equivalient to `y.atan(x)`)   

<endpoint module="luxe: math" class="Math" signature="degrees(radians : Num)"></endpoint>
<h4 class="signature_head">Math.degrees</h4><a class="signature-arity" href="#Math.degrees" title="Permanent link">1</a><signature id="Math.degrees">

```lx
Math.degrees(radians : Num) : Num
```
</signature>

> Convert radians (0...2*PI) to degree (0...360).   

<endpoint module="luxe: math" class="Math" signature="radians(degrees : Num)"></endpoint>
<h4 class="signature_head">Math.radians</h4><a class="signature-arity" href="#Math.radians" title="Permanent link">1</a><signature id="Math.radians">

```lx
Math.radians(degrees : Num) : Num
```
</signature>

> Convert degree (0...360) to radians (0...2*PI).   

<endpoint module="luxe: math" class="Math" signature="clamp(value : Num, a : Num, b : Num)"></endpoint>
<h4 class="signature_head">Math.clamp</h4><a class="signature-arity" href="#Math.clamp+3" title="Permanent link">3</a><signature id="Math.clamp+3">

```lx
Math.clamp(value : Num, a : Num, b : Num) : Num
```
</signature>

> Clamp `value` between `a` and `b` (result will never be smaller than a or bigger than b). 
>     Equivalent to `value.clamp(a, b)`.   

<endpoint module="luxe: math" class="Math" signature="min(a : Num, b : Num)"></endpoint>
<h4 class="signature_head">Math.min</h4><a class="signature-arity" href="#Math.min+2" title="Permanent link">2</a><signature id="Math.min+2">

```lx
Math.min(a : Num, b : Num) : Num
```
</signature>

> The smaller of two numbers. Eqivalent to `a.min(b)`.   

<endpoint module="luxe: math" class="Math" signature="max(a : Num, b : Num)"></endpoint>
<h4 class="signature_head">Math.max</h4><a class="signature-arity" href="#Math.max+2" title="Permanent link">2</a><signature id="Math.max+2">

```lx
Math.max(a : Num, b : Num) : Num
```
</signature>

> The larger of two numbers. Eqivalent to `a.max(b)`.   

<endpoint module="luxe: math" class="Math" signature="floor_around_zero(a : Num)"></endpoint>
<h4 class="signature_head">Math.floor_around_zero</h4><a class="signature-arity" href="#Math.floor_around_zero" title="Permanent link">1</a><signature id="Math.floor_around_zero">

```lx
Math.floor_around_zero(a : Num) : Num
```
</signature>

> Round towards zero. (floor when positive, ceil when negative)   

<endpoint module="luxe: math" class="Math" signature="ceil_around_zero(a : Num)"></endpoint>
<h4 class="signature_head">Math.ceil_around_zero</h4><a class="signature-arity" href="#Math.ceil_around_zero" title="Permanent link">1</a><signature id="Math.ceil_around_zero">

```lx
Math.ceil_around_zero(a : Num) : Num
```
</signature>

> Round away from zero. (ceil when positive, floor when negative)   

<endpoint module="luxe: math" class="Math" signature="fixed(value : Num)"></endpoint>
<h4 class="signature_head">Math.fixed</h4><a class="signature-arity" href="#Math.fixed" title="Permanent link">1</a><signature id="Math.fixed">

```lx
Math.fixed(value : Num) : Num
```
</signature>

> Round number to 3 digits after comma precision.   

<endpoint module="luxe: math" class="Math" signature="fixed(value : Num, precision : Num)"></endpoint>
<h4 class="signature_head">Math.fixed</h4><a class="signature-arity" href="#Math.fixed+2" title="Permanent link">2</a><signature id="Math.fixed+2">

```lx
Math.fixed(value : Num, precision : Num) : Num
```
</signature>

> Round number to `precision` digits after comma precision.   

<endpoint module="luxe: math" class="Math" signature="angle_delta(from : Num, to : Num)"></endpoint>
<h4 class="signature_head">Math.angle_delta</h4><a class="signature-arity" href="#Math.angle_delta+2" title="Permanent link">2</a><signature id="Math.angle_delta+2">

```lx
Math.angle_delta(from : Num, to : Num) : Num
```
</signature>

> Signed difference between two (degree) angles. Always in -180...180 range.   

<endpoint module="luxe: math" class="Math" signature="lerp2D(a : Vec, b : Vec, t : Num)"></endpoint>
<h4 class="signature_head">Math.lerp2D</h4><a class="signature-arity" href="#Math.lerp2D+3" title="Permanent link">3</a><signature id="Math.lerp2D+3">

```lx
Math.lerp2D(a : Vec, b : Vec, t : Num) : Vec
```
</signature>

> Linearly interpolate between two vectors.
> Returns `a` when `t` is `0` and `b` when `t` is `1`, with values inbetween interpolating inbetween.
> If `t` is outside 0-1 range, the output will be extrapolated.   

<endpoint module="luxe: math" class="Math" signature="lerp3D(a : Vec, b : Vec, t : Num)"></endpoint>
<h4 class="signature_head">Math.lerp3D</h4><a class="signature-arity" href="#Math.lerp3D+3" title="Permanent link">3</a><signature id="Math.lerp3D+3">

```lx
Math.lerp3D(a : Vec, b : Vec, t : Num) : Vec
```
</signature>

> Linearly interpolate between two vectors.
> Returns `a` when `t` is `0` and `b` when `t` is `1`, with values inbetween interpolating inbetween.
> If `t` is outside 0-1 range, the output will be extrapolated.   

<endpoint module="luxe: math" class="Math" signature="smooth_t(t : Num, smoothness : Num)"></endpoint>
<h4 class="signature_head">Math.smooth_t</h4><a class="signature-arity" href="#Math.smooth_t+2" title="Permanent link">2</a><signature id="Math.smooth_t+2">

```lx
Math.smooth_t(t : Num, smoothness : Num) : Num
```
</signature>

> Get a smooth time t for lerping, based on a smoothness value. e.g t = smooth_t(delta, 1.25). exponential decay   

<endpoint module="luxe: math" class="Math" signature="smoother_t(t : Num, smoothness : Num)"></endpoint>
<h4 class="signature_head">Math.smoother_t</h4><a class="signature-arity" href="#Math.smoother_t+2" title="Permanent link">2</a><signature id="Math.smoother_t+2">

```lx
Math.smoother_t(t : Num, smoothness : Num) : Num
```
</signature>

> Get a smooth time t for lerping, based on a smoothness value. e.g t = smoother_t(delta, 1.25). s curve like shape   

<endpoint module="luxe: math" class="Math" signature="lerp(a : Num, b : Num, t : Num)"></endpoint>
<h4 class="signature_head">Math.lerp</h4><a class="signature-arity" href="#Math.lerp+3" title="Permanent link">3</a><signature id="Math.lerp+3">

```lx
Math.lerp(a : Num, b : Num, t : Num) : Num
```
</signature>

> Linearly interpolate between two numbers.
> Returns `a` when `t` is `0` and `b` when `t` is `1`, with values inbetween interpolating inbetween.
> If `t` is outside 0-1 range, the output will be extrapolated.   

<endpoint module="luxe: math" class="Math" signature="lerp_angle(a : Num, b : Num, t : Num)"></endpoint>
<h4 class="signature_head">Math.lerp_angle</h4><a class="signature-arity" href="#Math.lerp_angle+3" title="Permanent link">3</a><signature id="Math.lerp_angle+3">

```lx
Math.lerp_angle(a : Num, b : Num, t : Num) : Num
```
</signature>

> Interpolates between angles. Always in 0...360 range.   

<endpoint module="luxe: math" class="Math" signature="weighted_avg(value : Num, target : Num, slowness : Num)"></endpoint>
<h4 class="signature_head">Math.weighted_avg</h4><a class="signature-arity" href="#Math.weighted_avg+3" title="Permanent link">3</a><signature id="Math.weighted_avg+3">

```lx
Math.weighted_avg(value : Num, target : Num, slowness : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: math" class="Math" signature="within_range(value : Num, start_range : Num, end_range : Num)"></endpoint>
<h4 class="signature_head">Math.within_range</h4><a class="signature-arity" href="#Math.within_range+3" title="Permanent link">3</a><signature id="Math.within_range+3">

```lx
Math.within_range(value : Num, start_range : Num, end_range : Num) : unknown
```
</signature>

> Checks whether `value` is inbetween `start_range` and `end_range` (inclusive).   

<endpoint module="luxe: math" class="Math" signature="approx(one : Num, other : Num)"></endpoint>
<h4 class="signature_head">Math.approx</h4><a class="signature-arity" href="#Math.approx+2" title="Permanent link">2</a><signature id="Math.approx+2">

```lx
Math.approx(one : Num, other : Num) : Bool
```
</signature>

> Checks whether two values are approximately the same (with a max difference of 0.001).   

<endpoint module="luxe: math" class="Math" signature="approx(one : Num, other : Num, epsilon : Num)"></endpoint>
<h4 class="signature_head">Math.approx</h4><a class="signature-arity" href="#Math.approx+3" title="Permanent link">3</a><signature id="Math.approx+3">

```lx
Math.approx(one : Num, other : Num, epsilon : Num) : Bool
```
</signature>

> Checks whether two values are approximately the same (with a max difference of `epsilon`).   

<endpoint module="luxe: math" class="Math" signature="wrap_angle(degrees : Num)"></endpoint>
<h4 class="signature_head">Math.wrap_angle</h4><a class="signature-arity" href="#Math.wrap_angle" title="Permanent link">1</a><signature id="Math.wrap_angle">

```lx
Math.wrap_angle(degrees : Num) : Num
```
</signature>

> Bring angle into 0...360 degree space.   

<endpoint module="luxe: math" class="Math" signature="wrap_angle(degrees : Num, lower : Num, upper : Num)"></endpoint>
<h4 class="signature_head">Math.wrap_angle</h4><a class="signature-arity" href="#Math.wrap_angle+3" title="Permanent link">3</a><signature id="Math.wrap_angle+3">

```lx
Math.wrap_angle(degrees : Num, lower : Num, upper : Num) : Num
```
</signature>

> Bring angle into lower...upper degree space.   

<endpoint module="luxe: math" class="Math" signature="wrap_radians(radians : Num, lower : Num, upper : Num)"></endpoint>
<h4 class="signature_head">Math.wrap_radians</h4><a class="signature-arity" href="#Math.wrap_radians+3" title="Permanent link">3</a><signature id="Math.wrap_radians+3">

```lx
Math.wrap_radians(radians : Num, lower : Num, upper : Num) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: math" class="Math" signature="nearest_power_of_two(value : Num)"></endpoint>
<h4 class="signature_head">Math.nearest_power_of_two</h4><a class="signature-arity" href="#Math.nearest_power_of_two" title="Permanent link">1</a><signature id="Math.nearest_power_of_two">

```lx
Math.nearest_power_of_two(value : Num) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: math" class="Math" signature="map_linear(value : Num, a1 : Num, a2 : Num, b1 : Num, b2 : Num)"></endpoint>
<h4 class="signature_head">Math.map_linear</h4><a class="signature-arity" href="#Math.map_linear+5" title="Permanent link">5</a><signature id="Math.map_linear+5">

```lx
Math.map_linear(value : Num, a1 : Num, a2 : Num, b1 : Num, b2 : Num) : Num
```
</signature>

> Remap value from `a1...a2` space to `b1...b2` space (unclamped).   

<endpoint module="luxe: math" class="Math" signature="smoothstep(x : Num, min : Num, max : Num)"></endpoint>
<h4 class="signature_head">Math.smoothstep</h4><a class="signature-arity" href="#Math.smoothstep+3" title="Permanent link">3</a><signature id="Math.smoothstep+3">

```lx
Math.smoothstep(x : Num, min : Num, max : Num) : Num
```
</signature>

> Smoothed inverse lerp using cubic hermite interpolation. Output is clamped between 0 and 1.   

<endpoint module="luxe: math" class="Math" signature="smootherstep(x : Num, min : Num, max : Num)"></endpoint>
<h4 class="signature_head">Math.smootherstep</h4><a class="signature-arity" href="#Math.smootherstep+3" title="Permanent link">3</a><signature id="Math.smootherstep+3">

```lx
Math.smootherstep(x : Num, min : Num, max : Num) : Num
```
</signature>

> Alternate smooth inverse interpolation with derivative of 0 at min and max points. Output is clamped between 0 and 1.   

<endpoint module="luxe: math" class="Math" signature="smoothstepx(x : Num, round : Num, steep : Num)"></endpoint>
<h4 class="signature_head">Math.smoothstepx</h4><a class="signature-arity" href="#Math.smoothstepx+3" title="Permanent link">3</a><signature id="Math.smoothstepx+3">

```lx
Math.smoothstepx(x : Num, round : Num, steep : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: math" class="Math" signature="random_point_in_unit_circle(rng : Random)"></endpoint>
<h4 class="signature_head">Math.random_point_in_unit_circle</h4><a class="signature-arity" href="#Math.random_point_in_unit_circle" title="Permanent link">1</a><signature id="Math.random_point_in_unit_circle">

```lx
Math.random_point_in_unit_circle(rng : Random) : Num
```
</signature>

> Random 2d point in circle of radius 1. Has uniform distribution.   

<endpoint module="luxe: math" class="Math" signature="slerp(a : Quat, b : Quat, t : Num)"></endpoint>
<h4 class="signature_head">Math.slerp</h4><a class="signature-arity" href="#Math.slerp+3" title="Permanent link">3</a><signature id="Math.slerp+3">

```lx
Math.slerp(a : Quat, b : Quat, t : Num) : unknown
```
</signature>

> no docs found   

