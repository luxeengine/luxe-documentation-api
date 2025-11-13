---
title: "luxe: math"
description: API version 2025.11.1
slug: "v/2025.11.1/math"
---
- [Math](#math)   

---


## Math
```lx
import "luxe: math" for Math
```
> Utility class with static math functions.

<endpoint module="luxe: math" class="Math" signature="add(a : Vec, b : Vec)"></endpoint>
### Math.add(..)
```lx
Math.add(a : Vec, b : Vec) : unknown
```
> Add two 3D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="add2D(a : Vec, b : Vec)"></endpoint>
### Math.add2D(..)
```lx
Math.add2D(a : Vec, b : Vec) : unknown
```
> Add two vector2s together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="add_to(a : Vec, b : Vec)"></endpoint>
### Math.add_to(..)
```lx
Math.add_to(a : Vec, b : Vec) : unknown
```
> Add two 3D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="add2D_to(a : Vec, b : Vec)"></endpoint>
### Math.add2D_to(..)
```lx
Math.add2D_to(a : Vec, b : Vec) : unknown
```
> Add two 2D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="sub(a : Vec, b : Vec)"></endpoint>
### Math.sub(..)
```lx
Math.sub(a : Vec, b : Vec) : unknown
```
> Subtract two 3D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="sub2D(a : Vec, b : Vec)"></endpoint>
### Math.sub2D(..)
```lx
Math.sub2D(a : Vec, b : Vec) : unknown
```
> Subtract two 2D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="sub_to(a : Vec, b : Vec)"></endpoint>
### Math.sub_to(..)
```lx
Math.sub_to(a : Vec, b : Vec) : unknown
```
> Subtract two 3D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="sub2D_to(a : Vec, b : Vec)"></endpoint>
### Math.sub2D_to(..)
```lx
Math.sub2D_to(a : Vec, b : Vec) : unknown
```
> Subtract two 2D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="mults(a : Vec, b : Num)"></endpoint>
### Math.mults(..)
```lx
Math.mults(a : Vec, b : Num) : unknown
```
> Multiply a 3D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="mult(a : Vec, b : Vec)"></endpoint>
### Math.mult(..)
```lx
Math.mult(a : Vec, b : Vec) : unknown
```
> Multiply two 3D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="mult2D(a : Vec, b : Vec)"></endpoint>
### Math.mult2D(..)
```lx
Math.mult2D(a : Vec, b : Vec) : unknown
```
> Multiply two 2D vectors together componentwise, returning the result   

<endpoint module="luxe: math" class="Math" signature="mult_to(a : Vec, b : Vec)"></endpoint>
### Math.mult_to(..)
```lx
Math.mult_to(a : Vec, b : Vec) : unknown
```
> Multiply two 3D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="mults_to(a : Vec, b : Num)"></endpoint>
### Math.mults_to(..)
```lx
Math.mults_to(a : Vec, b : Num) : unknown
```
> Multiply a 3D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="mult2D_to(a : Vec, b : Vec)"></endpoint>
### Math.mult2D_to(..)
```lx
Math.mult2D_to(a : Vec, b : Vec) : unknown
```
> Multiply two 2D vectors together componentwise, updating the first vector   

<endpoint module="luxe: math" class="Math" signature="scale(a : Vec, s : Num)"></endpoint>
### Math.scale(..)
```lx
Math.scale(a : Vec, s : Num) : unknown
```
> Multiply a 3D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="scale2D(a : Vec, s : Num)"></endpoint>
### Math.scale2D(..)
```lx
Math.scale2D(a : Vec, s : Num) : unknown
```
> Multiply a 2D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="scale_to(a : Vec, s : Num)"></endpoint>
### Math.scale_to(..)
```lx
Math.scale_to(a : Vec, s : Num) : unknown
```
> Multiply a 3D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="scale2D_to(a : Vec, s : Num)"></endpoint>
### Math.scale2D_to(..)
```lx
Math.scale2D_to(a : Vec, s : Num) : unknown
```
> Multiply a 2D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="divide(a : Vec, b : Vec)"></endpoint>
### Math.divide(..)
```lx
Math.divide(a : Vec, b : Vec) : unknown
```
> Divide a 3D vector by another, returning the result   

<endpoint module="luxe: math" class="Math" signature="divide_to(vec : Vec, other : Vec)"></endpoint>
### Math.divide_to(..)
```lx
Math.divide_to(vec : Vec, other : Vec) : unknown
```
> Divide a 3D vector by another, updating the vector   

<endpoint module="luxe: math" class="Math" signature="divide2D(a : Vec, b : Vec)"></endpoint>
### Math.divide2D(..)
```lx
Math.divide2D(a : Vec, b : Vec) : unknown
```
> Divide a 2D vector by another, returning the result   

<endpoint module="luxe: math" class="Math" signature="divide2D_to(vec : Vec, other : Vec)"></endpoint>
### Math.divide2D_to(..)
```lx
Math.divide2D_to(vec : Vec, other : Vec) : unknown
```
> Divide a 2D vector by another, updating the vector   

<endpoint module="luxe: math" class="Math" signature="div(a : Vec, s : Num)"></endpoint>
### Math.div(..)
```lx
Math.div(a : Vec, s : Num) : unknown
```
> Divide a 3D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="div2D(a : Vec, s : Num)"></endpoint>
### Math.div2D(..)
```lx
Math.div2D(a : Vec, s : Num) : unknown
```
> Divide a 2D vector by a scalar, returning the result   

<endpoint module="luxe: math" class="Math" signature="div_to(a : Vec, s : Num)"></endpoint>
### Math.div_to(..)
```lx
Math.div_to(a : Vec, s : Num) : unknown
```
> Divide a 3D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="div2D_to(a : Vec, s : Num)"></endpoint>
### Math.div2D_to(..)
```lx
Math.div2D_to(a : Vec, s : Num) : unknown
```
> Divide a 2D vector by a scalar, updating the vector   

<endpoint module="luxe: math" class="Math" signature="equal(a : Vec, b : Vec)"></endpoint>
### Math.equal(..)
```lx
Math.equal(a : Vec, b : Vec) : Bool
```
> Checks if two vectors are equal. Vectors of different dimensions (e.g. 2D and 3D) are considered unequal   

<endpoint module="luxe: math" class="Math" signature="length(x : Num, y : Num)"></endpoint>
### Math.length(..)
```lx
Math.length(x : Num, y : Num) : Num
```
> Length of a 2d vector.   

<endpoint module="luxe: math" class="Math" signature="length(x : Num, y : Num, z : Num)"></endpoint>
### Math.length(...)
```lx
Math.length(x : Num, y : Num, z : Num) : Num
```
> Length of a 3d vector.   

<endpoint module="luxe: math" class="Math" signature="length(vec : Vec)"></endpoint>
### Math.length(.)
```lx
Math.length(vec : Vec) : Num
```
> Length of a 3d vector.   

<endpoint module="luxe: math" class="Math" signature="length2D(vec : Vec)"></endpoint>
### Math.length2D(.)
```lx
Math.length2D(vec : Vec) : Num
```
> Length of a 2d vector.   

<endpoint module="luxe: math" class="Math" signature="length_sq(x : Num, y : Num)"></endpoint>
### Math.length_sq(..)
```lx
Math.length_sq(x : Num, y : Num) : Num
```
> Squared length of a 2d vector (slightly cheaper than length).   

<endpoint module="luxe: math" class="Math" signature="length_sq(x : Num, y : Num, z : Num)"></endpoint>
### Math.length_sq(...)
```lx
Math.length_sq(x : Num, y : Num, z : Num) : Num
```
> Squared length of a 3d vector (slightly cheaper than length).   

<endpoint module="luxe: math" class="Math" signature="length_sq(vec : Vec)"></endpoint>
### Math.length_sq(.)
```lx
Math.length_sq(vec : Vec) : Num
```
> Squared length of a 3d vector.   

<endpoint module="luxe: math" class="Math" signature="length_sq2D(vec : Vec)"></endpoint>
### Math.length_sq2D(.)
```lx
Math.length_sq2D(vec : Vec) : Num
```
> Squared length of a 2d vector.   

<endpoint module="luxe: math" class="Math" signature="dot(x : Num, y : Num, z : Num, other_x : Num, other_y : Num, other_z : Num)"></endpoint>
### Math.dot(......)
```lx
Math.dot(x : Num, y : Num, z : Num, other_x : Num, other_y : Num, other_z : Num) : Num
```
> Dot product (or scalar product) of two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="dot(x : Num, y : Num, other_x : Num, other_y : Num)"></endpoint>
### Math.dot(....)
```lx
Math.dot(x : Num, y : Num, other_x : Num, other_y : Num) : Num
```
> Dot product (or scalar product) of two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="dot(vec : Vec, other : Vec)"></endpoint>
### Math.dot(..)
```lx
Math.dot(vec : Vec, other : Vec) : Num
```
> Dot product (or scalar product) of two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="dot2D(vec : Vec, other : Vec)"></endpoint>
### Math.dot2D(..)
```lx
Math.dot2D(vec : Vec, other : Vec) : Num
```
> Dot product (or scalar product) of two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="cross(a : Vec, b : Vec)"></endpoint>
### Math.cross(..)
```lx
Math.cross(a : Vec, b : Vec) : Vec
```
> Cross product of two 3d vectors. 
> Result will always be orthogonal to both input vectors (and [0, 0, 0] if the arguments are parallel)   

<endpoint module="luxe: math" class="Math" signature="angle(from : Vec, to : Vec)"></endpoint>
### Math.angle(..)
```lx
Math.angle(from : Vec, to : Vec) : Num
```
> Unsigned angle between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="angle(v1 : Vec, v2 : Vec, up : Vec)"></endpoint>
### Math.angle(...)
```lx
Math.angle(v1 : Vec, v2 : Vec, up : Vec) : Num
```
> Signed angle between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="angle2D(from : Vec, to : Vec)"></endpoint>
### Math.angle2D(..)
```lx
Math.angle2D(from : Vec, to : Vec) : Num
```
> Signed angle between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="angle2D(from_x : Num, from_y : Num, to_x : Num, to_y : Num)"></endpoint>
### Math.angle2D(....)
```lx
Math.angle2D(from_x : Num, from_y : Num, to_x : Num, to_y : Num) : Num
```
> Signed angle between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="normalize2D(vec : Vec)"></endpoint>
### Math.normalize2D(.)
```lx
Math.normalize2D(vec : Vec) : None
```
> Normalize 2d vector. Changes input vector and doesnt return anything. 0 length vectors remain untouched.   

<endpoint module="luxe: math" class="Math" signature="normalized(vec : Vec)"></endpoint>
### Math.normalized(.)
```lx
Math.normalized(vec : Vec) : None
```
> Normalize 3d vector. Returns the result.   

<endpoint module="luxe: math" class="Math" signature="normalized2D(vec : Vec)"></endpoint>
### Math.normalized2D(.)
```lx
Math.normalized2D(vec : Vec) : None
```
> Normalize 2d vector. Returns the result.   

<endpoint module="luxe: math" class="Math" signature="normalize(vec : Vec)"></endpoint>
### Math.normalize(.)
```lx
Math.normalize(vec : Vec) : None
```
> Normalize 3d vector. Changes input vector and doesnt return anything. 0 length vectors remain untouched.   

<endpoint module="luxe: math" class="Math" signature="dist(x : Num, y : Num, z : Num, other_x : Num, other_y : Num, other_z : Num)"></endpoint>
### Math.dist(......)
```lx
Math.dist(x : Num, y : Num, z : Num, other_x : Num, other_y : Num, other_z : Num) : Num
```
> Distance between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="dist(vec : Vec, other : Vec)"></endpoint>
### Math.dist(..)
```lx
Math.dist(vec : Vec, other : Vec) : Num
```
> Distance between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="dist2D(vec : Vec, other : Vec)"></endpoint>
### Math.dist2D(..)
```lx
Math.dist2D(vec : Vec, other : Vec) : Num
```
> Distance between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="dist2D(x : Num, y : Num, other_x : Num, other_y : Num)"></endpoint>
### Math.dist2D(....)
```lx
Math.dist2D(x : Num, y : Num, other_x : Num, other_y : Num) : Num
```
> Distance between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="dir2D(pos : Vec, target : Vec)"></endpoint>
### Math.dir2D(..)
```lx
Math.dir2D(pos : Vec, target : Vec) : Vec
```
> Directional vector (length 1 unless the arguments are the same) between two 2d vectors.   

<endpoint module="luxe: math" class="Math" signature="dir(pos : Vec, target : Vec)"></endpoint>
### Math.dir(..)
```lx
Math.dir(pos : Vec, target : Vec) : Vec
```
> Directional vector (length 1 unless the arguments are the same) between two 3d vectors.   

<endpoint module="luxe: math" class="Math" signature="rotate(vec : Vec, axis : Vec, angle : Num)"></endpoint>
### Math.rotate(...)
```lx
Math.rotate(vec : Vec, axis : Vec, angle : Num) : Vec
```
> Rotate a 3d vector around the given axis by angle degrees   

<endpoint module="luxe: math" class="Math" signature="rotate_by_quat(vec : Vec, quat : Float4)"></endpoint>
### Math.rotate_by_quat(..)
```lx
Math.rotate_by_quat(vec : Vec, quat : Float4) : Vec
```
> Rotate a 3d vector using the given quaternion   

<endpoint module="luxe: math" class="Math" signature="quat_from_euler(vec : Vec)"></endpoint>
### Math.quat_from_euler(.)
```lx
Math.quat_from_euler(vec : Vec) : Float4
```
> Create a quaternion from float3 euler (radians)   

<endpoint module="luxe: math" class="Math" signature="rotate(vec : Vec, ox : Num, oy : Num, angle : Num)"></endpoint>
### Math.rotate(....)
```lx
Math.rotate(vec : Vec, ox : Num, oy : Num, angle : Num) : None
```
> Rotate 2d vector around another 2d vector. This rotates the input vector and doesnt return anything.   

<endpoint module="luxe: math" class="Math" signature="ray_intersect_plane(plane_x : Num, plane_y : Num, plane_z : Num, normal_x : Num, normal_y : Num, normal_z : Num, ray_x : Num, ray_y : Num, ray_z : Num, ray_dir_x : Num, ray_dir_y : Num, ray_dir_z : Num)"></endpoint>
### Math.ray_intersect_plane(............)
```lx
Math.ray_intersect_plane(plane_x : Num, plane_y : Num, plane_z : Num, normal_x : Num, normal_y : Num, normal_z : Num, ray_x : Num, ray_y : Num, ray_z : Num, ray_dir_x : Num, ray_dir_y : Num, ray_dir_z : Num) : Vec
```
> Intersection point between an infinitely long ray and a infinitely big plane.
> Returns `null` if parallel.   

<endpoint module="luxe: math" class="Math" signature="closest_point_on_plane(plane_x : Num, plane_y : Num, plane_z : Num, normal_x : Num, normal_y : Num, normal_z : Num, point_x : Num, point_y : Num, point_z : Num)"></endpoint>
### Math.closest_point_on_plane(.........)
```lx
Math.closest_point_on_plane(plane_x : Num, plane_y : Num, plane_z : Num, normal_x : Num, normal_y : Num, normal_z : Num, point_x : Num, point_y : Num, point_z : Num) : Vec
```
> Closest point on an infinite plane to a point.   

<endpoint module="luxe: math" class="Math" signature="closest_point_on_line(line_x : Num, line_y : Num, line_z : Num, line_end_x : Num, line_end_y : Num, line_end_z : Num, point_x : Num, point_y : Num, point_z : Num)"></endpoint>
### Math.closest_point_on_line(.........)
```lx
Math.closest_point_on_line(line_x : Num, line_y : Num, line_z : Num, line_end_x : Num, line_end_y : Num, line_end_z : Num, point_x : Num, point_y : Num, point_z : Num) : Vec
```
> Closest point on an infinite line to a point.
> The progress from line start to line end in 4th component of return value.
> Line is constructed by 2 points on the line, 
> but the closest point can also be before the start of after the end 
> (in that case the 4th component of the return value wont be in the 0-1 range).   

<endpoint module="luxe: math" class="Math" signature="closest_point_on_line(line : Vec, line_end : Vec, point : Vec)"></endpoint>
### Math.closest_point_on_line(...)
```lx
Math.closest_point_on_line(line : Vec, line_end : Vec, point : Vec) : Vec
```
> Closest point on an infinite line to a point.
> The progress from line start to line end in 4th component of return value.
> Line is constructed by 2 points on the line, 
> but the closest point can also be before the start of after the end 
> (in that case the 4th component of the return value wont be in the 0-1 range).   

<endpoint module="luxe: math" class="Math" signature="in_rect(x : Num, y : Num, rx : Num, ry : Num, rw : Num, rh : Num)"></endpoint>
### Math.in_rect(......)
```lx
Math.in_rect(x : Num, y : Num, rx : Num, ry : Num, rw : Num, rh : Num) : Bool
```
> Checks if a 2d point is inside a rectangle.
> Only works for positive rectangle sizes.   

<endpoint module="luxe: math" class="Math" signature="in_volume(pos : Vec, origin : Vec, extents : Vec)"></endpoint>
### Math.in_volume(...)
```lx
Math.in_volume(pos : Vec, origin : Vec, extents : Vec) : unknown
```
> Checks if point is inside the volume at origin with extents   

<endpoint module="luxe: math" class="Math" signature="wrap(value : Num, modulus : Num)"></endpoint>
### Math.wrap(..)
```lx
Math.wrap(value : Num, modulus : Num) : Num
```
> no docs found   

<endpoint module="luxe: math" class="Math" signature="overlaps(x0 : Num, y0 : Num, w0 : Num, h0 : Num, x1 : Num, y1 : Num, w1 : Num, h1 : Num)"></endpoint>
### Math.overlaps(........)
```lx
Math.overlaps(x0 : Num, y0 : Num, w0 : Num, h0 : Num, x1 : Num, y1 : Num, w1 : Num, h1 : Num) : Bool
```
> Checks if two rectangles overlap.
> Only works for positive rectangle sizes.   

<endpoint module="luxe: math" class="Math" signature="sign(x : Num)"></endpoint>
### Math.sign(.)
```lx
Math.sign(x : Num) : Num
```
> The sign of the number, expressed as a -1, 1 or 0, for negative and positive numbers, and zero.   

<endpoint module="luxe: math" class="Math" signature="sign0(x : Num)"></endpoint>
### Math.sign0(.)
```lx
Math.sign0(x : Num) : Num
```
> The sign of the number, expressed as a -1 0r 1, for negative and positive numbers, zero is positive.   

<endpoint module="luxe: math" class="Math" signature="atan2(y : Num, x : Num)"></endpoint>
### Math.atan2(..)
```lx
Math.atan2(y : Num, x : Num) : Num
```
> The arc tangent of `y` when divided by `x`, 
>     using the signs of the two numbers to determine the quadrant of the result. 
>     (equivalient to `y.atan(x)`)   

<endpoint module="luxe: math" class="Math" signature="degrees(radians : Num)"></endpoint>
### Math.degrees(.)
```lx
Math.degrees(radians : Num) : Num
```
> Convert radians (0...2*PI) to degree (0...360).   

<endpoint module="luxe: math" class="Math" signature="radians(degrees : Num)"></endpoint>
### Math.radians(.)
```lx
Math.radians(degrees : Num) : Num
```
> Convert degree (0...360) to radians (0...2*PI).   

<endpoint module="luxe: math" class="Math" signature="clamp(value : Num, a : Num, b : Num)"></endpoint>
### Math.clamp(...)
```lx
Math.clamp(value : Num, a : Num, b : Num) : Num
```
> Clamp `value` between `a` and `b` (result will never be smaller than a or bigger than b). 
>     Equivalent to `value.clamp(a, b)`.   

<endpoint module="luxe: math" class="Math" signature="min(a : Num, b : Num)"></endpoint>
### Math.min(..)
```lx
Math.min(a : Num, b : Num) : Num
```
> The smaller of two numbers. Eqivalent to `a.min(b)`.   

<endpoint module="luxe: math" class="Math" signature="max(a : Num, b : Num)"></endpoint>
### Math.max(..)
```lx
Math.max(a : Num, b : Num) : Num
```
> The larger of two numbers. Eqivalent to `a.max(b)`.   

<endpoint module="luxe: math" class="Math" signature="floor_around_zero(a : Num)"></endpoint>
### Math.floor_around_zero(.)
```lx
Math.floor_around_zero(a : Num) : Num
```
> Round towards zero. (floor when positive, ceil when negative)   

<endpoint module="luxe: math" class="Math" signature="ceil_around_zero(a : Num)"></endpoint>
### Math.ceil_around_zero(.)
```lx
Math.ceil_around_zero(a : Num) : Num
```
> Round away from zero. (ceil when positive, floor when negative)   

<endpoint module="luxe: math" class="Math" signature="fixed(value : Num)"></endpoint>
### Math.fixed(.)
```lx
Math.fixed(value : Num) : Num
```
> Round number to 3 digits after comma precision.   

<endpoint module="luxe: math" class="Math" signature="fixed(value : Num, precision : Num)"></endpoint>
### Math.fixed(..)
```lx
Math.fixed(value : Num, precision : Num) : Num
```
> Round number to `precision` digits after comma precision.   

<endpoint module="luxe: math" class="Math" signature="angle_delta(from : Num, to : Num)"></endpoint>
### Math.angle_delta(..)
```lx
Math.angle_delta(from : Num, to : Num) : Num
```
> Signed difference between two (degree) angles. Always in -180...180 range.   

<endpoint module="luxe: math" class="Math" signature="lerp2D(a : Vec, b : Vec, t : Num)"></endpoint>
### Math.lerp2D(...)
```lx
Math.lerp2D(a : Vec, b : Vec, t : Num) : Vec
```
> Linearly interpolate between two vectors.
> Returns `a` when `t` is `0` and `b` when `t` is `1`, with values inbetween interpolating inbetween.
> If `t` is outside 0-1 range, the output will be extrapolated.   

<endpoint module="luxe: math" class="Math" signature="lerp3D(a : Vec, b : Vec, t : Num)"></endpoint>
### Math.lerp3D(...)
```lx
Math.lerp3D(a : Vec, b : Vec, t : Num) : Vec
```
> Linearly interpolate between two vectors.
> Returns `a` when `t` is `0` and `b` when `t` is `1`, with values inbetween interpolating inbetween.
> If `t` is outside 0-1 range, the output will be extrapolated.   

<endpoint module="luxe: math" class="Math" signature="smooth_t(t : Num, smoothness : Num)"></endpoint>
### Math.smooth_t(..)
```lx
Math.smooth_t(t : Num, smoothness : Num) : Num
```
> Get a smooth time t for lerping, based on a smoothness value. e.g t = smooth_t(delta, 1.25). exponential decay   

<endpoint module="luxe: math" class="Math" signature="smoother_t(t : Num, smoothness : Num)"></endpoint>
### Math.smoother_t(..)
```lx
Math.smoother_t(t : Num, smoothness : Num) : Num
```
> Get a smooth time t for lerping, based on a smoothness value. e.g t = smoother_t(delta, 1.25). s curve like shape   

<endpoint module="luxe: math" class="Math" signature="lerp(a : Num, b : Num, t : Num)"></endpoint>
### Math.lerp(...)
```lx
Math.lerp(a : Num, b : Num, t : Num) : Num
```
> Linearly interpolate between two numbers.
> Returns `a` when `t` is `0` and `b` when `t` is `1`, with values inbetween interpolating inbetween.
> If `t` is outside 0-1 range, the output will be extrapolated.   

<endpoint module="luxe: math" class="Math" signature="lerp_angle(a : Num, b : Num, t : Num)"></endpoint>
### Math.lerp_angle(...)
```lx
Math.lerp_angle(a : Num, b : Num, t : Num) : Num
```
> Interpolates between angles. Always in 0...360 range.   

<endpoint module="luxe: math" class="Math" signature="weighted_avg(value : Num, target : Num, slowness : Num)"></endpoint>
### Math.weighted_avg(...)
```lx
Math.weighted_avg(value : Num, target : Num, slowness : Num) : unknown
```
> no docs found   

<endpoint module="luxe: math" class="Math" signature="within_range(value : Num, start_range : Num, end_range : Num)"></endpoint>
### Math.within_range(...)
```lx
Math.within_range(value : Num, start_range : Num, end_range : Num) : unknown
```
> Checks whether `value` is inbetween `start_range` and `end_range` (inclusive).   

<endpoint module="luxe: math" class="Math" signature="approx(one : Num, other : Num)"></endpoint>
### Math.approx(..)
```lx
Math.approx(one : Num, other : Num) : Bool
```
> Checks whether two values are approximately the same (with a max difference of 0.001).   

<endpoint module="luxe: math" class="Math" signature="approx(one : Num, other : Num, epsilon : Num)"></endpoint>
### Math.approx(...)
```lx
Math.approx(one : Num, other : Num, epsilon : Num) : Bool
```
> Checks whether two values are approximately the same (with a max difference of `epsilon`).   

<endpoint module="luxe: math" class="Math" signature="wrap_angle(degrees : Num)"></endpoint>
### Math.wrap_angle(.)
```lx
Math.wrap_angle(degrees : Num) : Num
```
> Bring angle into 0...360 degree space.   

<endpoint module="luxe: math" class="Math" signature="wrap_angle(degrees : Num, lower : Num, upper : Num)"></endpoint>
### Math.wrap_angle(...)
```lx
Math.wrap_angle(degrees : Num, lower : Num, upper : Num) : Num
```
> Bring angle into lower...upper degree space.   

<endpoint module="luxe: math" class="Math" signature="wrap_radians(radians : Num, lower : Num, upper : Num)"></endpoint>
### Math.wrap_radians(...)
```lx
Math.wrap_radians(radians : Num, lower : Num, upper : Num) : Num
```
> no docs found   

<endpoint module="luxe: math" class="Math" signature="nearest_power_of_two(value : Num)"></endpoint>
### Math.nearest_power_of_two(.)
```lx
Math.nearest_power_of_two(value : Num) : Num
```
> no docs found   

<endpoint module="luxe: math" class="Math" signature="map_linear(value : Num, a1 : Num, a2 : Num, b1 : Num, b2 : Num)"></endpoint>
### Math.map_linear(.....)
```lx
Math.map_linear(value : Num, a1 : Num, a2 : Num, b1 : Num, b2 : Num) : Num
```
> Remap value from `a1...a2` space to `b1...b2` space (unclamped).   

<endpoint module="luxe: math" class="Math" signature="smoothstep(x : Num, min : Num, max : Num)"></endpoint>
### Math.smoothstep(...)
```lx
Math.smoothstep(x : Num, min : Num, max : Num) : Num
```
> Smoothed inverse lerp using cubic hermite interpolation. Output is clamped between 0 and 1.   

<endpoint module="luxe: math" class="Math" signature="smootherstep(x : Num, min : Num, max : Num)"></endpoint>
### Math.smootherstep(...)
```lx
Math.smootherstep(x : Num, min : Num, max : Num) : Num
```
> Alternate smooth inverse interpolation with derivative of 0 at min and max points. Output is clamped between 0 and 1.   

<endpoint module="luxe: math" class="Math" signature="smoothstepx(x : Num, round : Num, steep : Num)"></endpoint>
### Math.smoothstepx(...)
```lx
Math.smoothstepx(x : Num, round : Num, steep : Num) : unknown
```
> no docs found   

<endpoint module="luxe: math" class="Math" signature="random_point_in_unit_circle(rng : Random)"></endpoint>
### Math.random_point_in_unit_circle(.)
```lx
Math.random_point_in_unit_circle(rng : Random) : Num
```
> Random 2d point in circle of radius 1. Has uniform distribution.   

<endpoint module="luxe: math" class="Math" signature="slerp(a : Quat, b : Quat, t : Num)"></endpoint>
### Math.slerp(...)
```lx
Math.slerp(a : Quat, b : Quat, t : Num) : unknown
```
> no docs found   

