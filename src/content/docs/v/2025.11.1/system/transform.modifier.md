---
title: "luxe: system/transform.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/transform.modifier"
---
- [Data](#data)   
- [System](#system)   
- [Transform](#transform)   
- [TransformApplyMask](#transformapplymask)   
- [TransformLinkAction](#transformlinkaction)   

---


## Data
```lx
import "luxe: system/transform.modifier" for Data
```
> no docs found

### Variables
```lx
var pos : Double3 = [0, 0, 0]
var rotation : Float3 = [0, 0, 0]
var scale : Float3 = [1, 1, 1]
var link : Link = null
```

## System
```lx
import "luxe: system/transform.modifier" for System
```
> no docs found

<endpoint module="luxe: system/transform.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```lx
System.new(world : World) : System
```
> no docs found   


## Transform
```lx
import "luxe: system/transform.modifier" for Transform
```
> A transform modifier defines where a entity is.
> That includes position, rotation and scale.
> A `Transform` can also be linked to another `Transform`, in which case its values are relative to their link target.
>   
> While not all entities need to be "somewhere" locally, a lot of them do, which is when this modifier is used.
> Other modifiers on the same entity aren't required to read and react to the `Transform`, but most do, allowing you to use this to move things (like Sprites, Meshes, Physics shapes, etc...).

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="id"></endpoint>
### Transform.id
```lx
Transform.id : unknown
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="create(entity : Entity, x : Num, y : Num)"></endpoint>
### Transform.create(...)
```lx
Transform.create(entity : Entity, x : Num, y : Num) : None
```
> Attach a `Transform` modifier to an entity with the given `x` and `y` position (with a z of 0)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="create(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.create(....)
```lx
Transform.create(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Attach a `Transform` modifier to an entity with the given `x`, `y` and `z` position   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="create(entity : Entity)"></endpoint>
### Transform.create(.)
```lx
Transform.create(entity : Entity) : None
```
> Attach a `Transform` modifier to an entity.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="create(entity : Entity, link_to : Entity)"></endpoint>
### Transform.create(..)
```lx
Transform.create(entity : Entity, link_to : Entity) : None
```
> Attach a `Transform` modifier to an entity, and link it to another entity.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="destroy(entity : Entity)"></endpoint>
### Transform.destroy(.)
```lx
Transform.destroy(entity : Entity) : None
```
> Detatch a `Transform` modifier from an entity.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="has(entity : Entity)"></endpoint>
### Transform.has(.)
```lx
Transform.has(entity : Entity) : Bool
```
> get whether an entity has an attached `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_link(entity : Entity)"></endpoint>
### Transform.get_link(.)
```lx
Transform.get_link(entity : Entity) : Entity
```
> Get what entity this entity is linked to. So what entity the position/rotation/scale of this transform are relative to.
> Linked to entity always has a `Transform` of its own.
> In case `Transform` isn't linked to anything, returns `null` and transformations are global.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_linked(entity : Entity)"></endpoint>
### Transform.get_linked(.)
```lx
Transform.get_linked(entity : Entity) : List
```
> Get what entities are linked to this entity (opposite relationship as `get_link`).
> Transformation values of linked entities are relative to this entity.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="link(entity : Entity, target_entity : Entity, link_action : TransformLinkAction)"></endpoint>
### Transform.link(...)
```lx
Transform.link(entity : Entity, target_entity : Entity, link_action : TransformLinkAction) : None
```
> Link one `Transform` to another.
> The `Transform` values will now be be relative to the link target, meaning the link target `Transform` position, rotation and scale all apply to the local position, rotation, scale of this `Transform`.
> When using non-uniform scales somewhere in your transform link hierarchy you can get transform deformations that would not be possible with just a single transform.
> 
> In other environments, this transform link is often part of the object hierarchy, but here it's specific to transforms and other hierarchies aren't bound to follow the same links.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="link(entity : Entity, target_entity : Entity)"></endpoint>
### Transform.link(..)
```lx
Transform.link(entity : Entity, target_entity : Entity) : None
```
> Link one `Transform` to another.
> The `Transform` values will now be be relative to the link target, meaning the link target `Transform` position, rotation and scale all apply to the local position, rotation, scale of this `Transform`.
> When using non-uniform scales somewhere in your transform link hierarchy you can get transform deformations that would not be possible with just a single transform.
> 
> In other environments, this transform link is often part of the object hierarchy, but here it's specific to transforms and other hierarchies aren't bound to follow the same links.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="unlink(entity : Entity, reset_local : TransformLinkAction)"></endpoint>
### Transform.unlink(..)
```lx
Transform.unlink(entity : Entity, reset_local : TransformLinkAction) : None
```
> Unlink a `Transform`. Local position will be kept (unless reset), so if your parent isnt at the origin, expect the transform to move, or save and reapply the world position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="unlink(entity : Entity)"></endpoint>
### Transform.unlink(.)
```lx
Transform.unlink(entity : Entity) : None
```
> Unlink a `Transform`. Local position will be kept, so if your parent isnt at the origin, expect the transform to move, or save and reapply the world position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at_and_move(entity : Entity, pos : Vec, target : Vec, up : Vec, invert : Bool)"></endpoint>
### Transform.look_at_and_move(.....)
```lx
Transform.look_at_and_move(entity : Entity, pos : Vec, target : Vec, up : Vec, invert : Bool) : None
```
> Move `Transform` somewhere else, then look towards target position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at_and_move(entity : Entity, pos : Vec, target : Vec, up : Vec)"></endpoint>
### Transform.look_at_and_move(....)
```lx
Transform.look_at_and_move(entity : Entity, pos : Vec, target : Vec, up : Vec) : None
```
> Move `Transform` somewhere else, then look towards target position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at_and_move(entity : Entity, pos : Vec, target : Vec)"></endpoint>
### Transform.look_at_and_move(...)
```lx
Transform.look_at_and_move(entity : Entity, pos : Vec, target : Vec) : None
```
> Move `Transform` somewhere else, then look towards target position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at(entity : Entity, target : Vec, up : Vec, invert : Bool)"></endpoint>
### Transform.look_at(....)
```lx
Transform.look_at(entity : Entity, target : Vec, up : Vec, invert : Bool) : None
```
> Rotate `Transform` to look at a position in worldspace, 
>       rotated around that new view axis so the `Transform` 'up' aligns with the `up` input as closely as possible.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at(entity : Entity, target : Vec, up : Vec)"></endpoint>
### Transform.look_at(...)
```lx
Transform.look_at(entity : Entity, target : Vec, up : Vec) : None
```
> Rotate `Transform` to look at a position in worldspace, 
>       rotated around that new view axis so the `Transform` 'up' aligns with the `up` input as closely as possible.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at(entity : Entity, target : Vec)"></endpoint>
### Transform.look_at(..)
```lx
Transform.look_at(entity : Entity, target : Vec) : None
```
> Rotate `Transform` to look at a position in worldspace.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_snap(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.set_snap(....)
```lx
Transform.set_snap(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Set `Transform` position to snap at specific intervals. (midpoints round away from 0)
> 
> ```js
>   var entity = Entity.create(world)
>   Transform.create(entity)
>   Transform.set_snap(entity, 2, 2, 2)
>   Transform.set_pos(entity, 0.5, 1.5, -3)
>   Log.print(Transform.get_pos(entity)) //[0, 2, -4]
> ```   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_snap(entity : Entity, x : Num, y : Num)"></endpoint>
### Transform.set_snap(...)
```lx
Transform.set_snap(entity : Entity, x : Num, y : Num) : None
```
> Set `Transform` position to snap at specific intervals.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.set_pos(....)
```lx
Transform.set_pos(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Set local position of a `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos(entity : Entity, x : Num, y : Num)"></endpoint>
### Transform.set_pos(...)
```lx
Transform.set_pos(entity : Entity, x : Num, y : Num) : None
```
> Set local position of a `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.set_pos_world(....)
```lx
Transform.set_pos_world(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Set global position of a `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_world(entity : Entity, x : Num, y : Num)"></endpoint>
### Transform.set_pos_world(...)
```lx
Transform.set_pos_world(entity : Entity, x : Num, y : Num) : None
```
> Set global position of a `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_x(entity : Entity, x : Num)"></endpoint>
### Transform.set_pos_x(..)
```lx
Transform.set_pos_x(entity : Entity, x : Num) : None
```
> Set `x` component of local `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_y(entity : Entity, y : Num)"></endpoint>
### Transform.set_pos_y(..)
```lx
Transform.set_pos_y(entity : Entity, y : Num) : None
```
> Set `y` component of local `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_z(entity : Entity, z : Num)"></endpoint>
### Transform.set_pos_z(..)
```lx
Transform.set_pos_z(entity : Entity, z : Num) : None
```
> Set `z` component of local `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_x_world(entity : Entity, x : Num)"></endpoint>
### Transform.set_pos_x_world(..)
```lx
Transform.set_pos_x_world(entity : Entity, x : Num) : None
```
> Set `x` component of global `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_y_world(entity : Entity, y : Num)"></endpoint>
### Transform.set_pos_y_world(..)
```lx
Transform.set_pos_y_world(entity : Entity, y : Num) : None
```
> Set `y` component of global `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_z_world(entity : Entity, z : Num)"></endpoint>
### Transform.set_pos_z_world(..)
```lx
Transform.set_pos_z_world(entity : Entity, z : Num) : None
```
> Set `z` component of global `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_scale(entity : Entity, x : Num, y : Num)"></endpoint>
### Transform.set_scale(...)
```lx
Transform.set_scale(entity : Entity, x : Num, y : Num) : None
```
> Set x and y scale of a `Transform`, keeping z scale unchanged.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_scale(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.set_scale(....)
```lx
Transform.set_scale(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Set local scale of a `Transform`.
> Setting the scale in a global context isnt available, as link hierarchies with rotations and nonuniform scalings can lead to weird and hard to predict states for that.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_slerp_angle_axis(entity : Entity, axis : Vec, from : Num, to : Num, t : Num)"></endpoint>
### Transform.set_rotation_slerp_angle_axis(.....)
```lx
Transform.set_rotation_slerp_angle_axis(entity : Entity, axis : Vec, from : Num, to : Num, t : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_slerp_angle_axis_world(entity : Entity, axis : Vec, from : Num, to : Num, t : Num)"></endpoint>
### Transform.set_rotation_slerp_angle_axis_world(.....)
```lx
Transform.set_rotation_slerp_angle_axis_world(entity : Entity, axis : Vec, from : Num, to : Num, t : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_slerp(entity : Entity, from : Vec, to : Vec, t : Num)"></endpoint>
### Transform.set_rotation_slerp(....)
```lx
Transform.set_rotation_slerp(entity : Entity, from : Vec, to : Vec, t : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_slerp_world(entity : Entity, from : Vec, to : Vec, t : Num)"></endpoint>
### Transform.set_rotation_slerp_world(....)
```lx
Transform.set_rotation_slerp_world(entity : Entity, from : Vec, to : Vec, t : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation(entity : Entity, x : Num, y : Num, z : Num, w : Num)"></endpoint>
### Transform.set_rotation(.....)
```lx
Transform.set_rotation(entity : Entity, x : Num, y : Num, z : Num, w : Num) : None
```
> Set local rotation in quaternions.
>   
> (Quaternions are how rotations are handled by the engine internally, though it can be hard to understand how to manipulate them, so feel free to stick to euler angles using `set_euler(entity, x, y, z)`.)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_world(entity : Entity, x : Num, y : Num, z : Num, w : Num)"></endpoint>
### Transform.set_rotation_world(.....)
```lx
Transform.set_rotation_world(entity : Entity, x : Num, y : Num, z : Num, w : Num) : None
```
> Set global rotation in quaternions.
>   
> (Quaternions are how rotations are handled by the engine internally, though it can be hard to understand how to manipulate them, so feel free to stick to euler angles using `set_euler_world(entity, x, y, z)`.)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_angle_axis(entity : Entity, degrees : Any, x : Num, y : Num, z : Num)"></endpoint>
### Transform.set_angle_axis(.....)
```lx
Transform.set_angle_axis(entity : Entity, degrees : Any, x : Num, y : Num, z : Num) : None
```
> Set local rotation as a rotation around an axis.
> 
> Rotation direction is left-handed (counter-clockwise when looking in the direction of the axis.)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_angle_axis_world(entity : Entity, degrees : Any, x : Num, y : Num, z : Num)"></endpoint>
### Transform.set_angle_axis_world(.....)
```lx
Transform.set_angle_axis_world(entity : Entity, degrees : Any, x : Num, y : Num, z : Num) : None
```
> Set global rotation as a rotation around an axis.
> 
> Rotation direction is left-handed (counter-clockwise when looking in the direction of the axis.)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.set_euler(....)
```lx
Transform.set_euler(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Set local rotation as xyz euler angles.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.set_euler_world(....)
```lx
Transform.set_euler_world(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Set global rotation as xyz euler angles.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_x(entity : Entity, x : Num)"></endpoint>
### Transform.set_euler_x(..)
```lx
Transform.set_euler_x(entity : Entity, x : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_y(entity : Entity, y : Num)"></endpoint>
### Transform.set_euler_y(..)
```lx
Transform.set_euler_y(entity : Entity, y : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_z(entity : Entity, z : Num)"></endpoint>
### Transform.set_euler_z(..)
```lx
Transform.set_euler_z(entity : Entity, z : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_x_world(entity : Entity, x : Num)"></endpoint>
### Transform.set_euler_x_world(..)
```lx
Transform.set_euler_x_world(entity : Entity, x : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_y_world(entity : Entity, y : Num)"></endpoint>
### Transform.set_euler_y_world(..)
```lx
Transform.set_euler_y_world(entity : Entity, y : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_z_world(entity : Entity, z : Num)"></endpoint>
### Transform.set_euler_z_world(..)
```lx
Transform.set_euler_z_world(entity : Entity, z : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_angle_axis_slerp(entity : Entity, axis : Vec, angle_amount : Num)"></endpoint>
### Transform.rotate_angle_axis_slerp(...)
```lx
Transform.rotate_angle_axis_slerp(entity : Entity, axis : Vec, angle_amount : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_angle_axis_slerp_world(entity : Entity, axis : Vec, angle_amount : Num)"></endpoint>
### Transform.rotate_angle_axis_slerp_world(...)
```lx
Transform.rotate_angle_axis_slerp_world(entity : Entity, axis : Vec, angle_amount : Num) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_around_world(entity : Entity, x : Num, y : Num, z : Num, axis_x : Num, axis_y : Num, axis_z : Num, degrees : Num)"></endpoint>
### Transform.rotate_around_world(........)
```lx
Transform.rotate_around_world(entity : Entity, x : Num, y : Num, z : Num, axis_x : Num, axis_y : Num, axis_z : Num, degrees : Num) : None
```
> Rotate around an axis in world space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_around(entity : Entity, x : Num, y : Num, z : Num, axis_x : Num, axis_y : Num, axis_z : Num, degrees : Num)"></endpoint>
### Transform.rotate_around(........)
```lx
Transform.rotate_around(entity : Entity, x : Num, y : Num, z : Num, axis_x : Num, axis_y : Num, axis_z : Num, degrees : Num) : None
```
> Rotate around an axis in local space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_angle_axis(entity : Entity, degrees : Any, x : Num, y : Num, z : Num)"></endpoint>
### Transform.rotate_angle_axis(.....)
```lx
Transform.rotate_angle_axis(entity : Entity, degrees : Any, x : Num, y : Num, z : Num) : None
```
> Rotate on the spot around an axis in local coordinates.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_angle_axis_world(entity : Entity, degrees : Any, x : Num, y : Num, z : Num)"></endpoint>
### Transform.rotate_angle_axis_world(.....)
```lx
Transform.rotate_angle_axis_world(entity : Entity, degrees : Any, x : Num, y : Num, z : Num) : None
```
> Rotate on the spot around an axis in global coordinates.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_euler(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.rotate_euler(....)
```lx
Transform.rotate_euler(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Rotate by euler angles in local space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_euler_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.rotate_euler_world(....)
```lx
Transform.rotate_euler_world(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Rotate by euler angles in global space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="translate(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.translate(....)
```lx
Transform.translate(entity : Entity, x : Num, y : Num, z : Num) : None
```
> Move `Transform` in local space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="translate(entity : Entity, x : Num, y : Num)"></endpoint>
### Transform.translate(...)
```lx
Transform.translate(entity : Entity, x : Num, y : Num) : None
```
> Move `Transform` in local space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos(entity : Entity)"></endpoint>
### Transform.get_pos(.)
```lx
Transform.get_pos(entity : Entity) : Vec
```
> Get position local space (relative to link `Transform`).   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_x(entity : Entity)"></endpoint>
### Transform.get_pos_x(.)
```lx
Transform.get_pos_x(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_y(entity : Entity)"></endpoint>
### Transform.get_pos_y(.)
```lx
Transform.get_pos_y(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_z(entity : Entity)"></endpoint>
### Transform.get_pos_z(.)
```lx
Transform.get_pos_z(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_world(entity : Entity)"></endpoint>
### Transform.get_pos_world(.)
```lx
Transform.get_pos_world(entity : Entity) : unknown
```
> Get position global space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_world_unsnapped(entity : Entity)"></endpoint>
### Transform.get_pos_world_unsnapped(.)
```lx
Transform.get_pos_world_unsnapped(entity : Entity) : Vec
```
> Get position global space independently of `set_snap` settings.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_x_world(entity : Entity)"></endpoint>
### Transform.get_pos_x_world(.)
```lx
Transform.get_pos_x_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_y_world(entity : Entity)"></endpoint>
### Transform.get_pos_y_world(.)
```lx
Transform.get_pos_y_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_z_world(entity : Entity)"></endpoint>
### Transform.get_pos_z_world(.)
```lx
Transform.get_pos_z_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate2D(entity : Entity, degrees : Num)"></endpoint>
### Transform.rotate2D(..)
```lx
Transform.rotate2D(entity : Entity, degrees : Num) : None
```
> Rotate the `Transform` in local space.
>     
> This technically rotates around the z axis, since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_angle2D(entity : Entity, degrees : Num)"></endpoint>
### Transform.set_angle2D(..)
```lx
Transform.set_angle2D(entity : Entity, degrees : Num) : None
```
> Set the 2d angle in local space.
>     
> This is technically the same as `set_euler_z`(doesnt touch x or y), since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_angle2D_world(entity : Entity, degrees : Num)"></endpoint>
### Transform.set_angle2D_world(..)
```lx
Transform.set_angle2D_world(entity : Entity, degrees : Num) : None
```
> Set the 2d angle in global space.
>     
> This is technically the same as `set_euler_z`(doesnt touch x or y), since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_angle2D(entity : Entity)"></endpoint>
### Transform.get_angle2D(.)
```lx
Transform.get_angle2D(entity : Entity) : Num
```
> Get the 2d angle in local space.
>     
> This is technically the same as `get_euler_z`, since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_angle2D_world(entity : Entity)"></endpoint>
### Transform.get_angle2D_world(.)
```lx
Transform.get_angle2D_world(entity : Entity) : Num
```
> Get the 2d angle in global space.
>     
> This is technically the same as `get_euler_z_world`, since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_depth2D(entity : Entity, depth : Num)"></endpoint>
### Transform.set_depth2D(..)
```lx
Transform.set_depth2D(entity : Entity, depth : Num) : None
```
> Set the local depth (relative to link `Transform`).
>     
> This is technically the same as `set_pos_z`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_depth2D(entity : Entity)"></endpoint>
### Transform.get_depth2D(.)
```lx
Transform.get_depth2D(entity : Entity) : Num
```
> Get the local depth (relative to link `Transform`).
>     
> This is technically the same as `get_pos_z`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_depth2D_world(entity : Entity, depth : Num)"></endpoint>
### Transform.set_depth2D_world(..)
```lx
Transform.set_depth2D_world(entity : Entity, depth : Num) : None
```
> Set the global depth.
>     
> This is technically the same as `set_pos_z_world`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_depth2D_world(entity : Entity)"></endpoint>
### Transform.get_depth2D_world(.)
```lx
Transform.get_depth2D_world(entity : Entity) : Num
```
> Get the global depth.
>     
> This is technically the same as `get_pos_z_world`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_world_matrix(entity : Entity, into_matrix : Floats)"></endpoint>
### Transform.get_world_matrix(..)
```lx
Transform.get_world_matrix(entity : Entity, into_matrix : Floats) : None
```
> Get 4x4 world transform matrix (column major array).
> 
> ```js
>   var ent = Entity.create(app.world)
>   Transform.create(ent)
>   Transform.set_pos(ent, 2, 3, 4)
>   var matrix = Floats.new(16)
>   Transform.get_world_matrix(ent, matrix)
>   //matrix is now [1,0,0,0, 0,1,0,0, 0,0,1,0, 2,3,4,1]
> ```   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_rotation(entity : Entity)"></endpoint>
### Transform.get_rotation(.)
```lx
Transform.get_rotation(entity : Entity) : Quat
```
> Get local quaternion rotation.
>     
> (Note that quaternions can be unfamiliar and hard to manipulate, so if you're not familiar with them you might want to use `get_euler` instead)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_rotation_world(entity : Entity)"></endpoint>
### Transform.get_rotation_world(.)
```lx
Transform.get_rotation_world(entity : Entity) : Quat
```
> Get global quaternion rotation.
>     
> (Note that quaternions can be unfamiliar and hard to manipulate, so if you're not familiar with them you might want to use `get_euler_world` instead)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_rotation_matrix(entity : Entity, into_matrix : Floats)"></endpoint>
### Transform.get_rotation_matrix(..)
```lx
Transform.get_rotation_matrix(entity : Entity, into_matrix : Floats) : None
```
> Get 4x4 world rotation matrix (column major array).   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler(entity : Entity)"></endpoint>
### Transform.get_euler(.)
```lx
Transform.get_euler(entity : Entity) : Vec
```
> Get local euler angles.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_x(entity : Entity)"></endpoint>
### Transform.get_euler_x(.)
```lx
Transform.get_euler_x(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_y(entity : Entity)"></endpoint>
### Transform.get_euler_y(.)
```lx
Transform.get_euler_y(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_z(entity : Entity)"></endpoint>
### Transform.get_euler_z(.)
```lx
Transform.get_euler_z(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_world(entity : Entity)"></endpoint>
### Transform.get_euler_world(.)
```lx
Transform.get_euler_world(entity : Entity) : Vec
```
> Get global euler angles.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_x_world(entity : Entity)"></endpoint>
### Transform.get_euler_x_world(.)
```lx
Transform.get_euler_x_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_y_world(entity : Entity)"></endpoint>
### Transform.get_euler_y_world(.)
```lx
Transform.get_euler_y_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_z_world(entity : Entity)"></endpoint>
### Transform.get_euler_z_world(.)
```lx
Transform.get_euler_z_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale(entity : Entity)"></endpoint>
### Transform.get_scale(.)
```lx
Transform.get_scale(entity : Entity) : Vec
```
> Get local scale.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_x(entity : Entity)"></endpoint>
### Transform.get_scale_x(.)
```lx
Transform.get_scale_x(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_y(entity : Entity)"></endpoint>
### Transform.get_scale_y(.)
```lx
Transform.get_scale_y(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_z(entity : Entity)"></endpoint>
### Transform.get_scale_z(.)
```lx
Transform.get_scale_z(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_world(entity : Entity)"></endpoint>
### Transform.get_scale_world(.)
```lx
Transform.get_scale_world(entity : Entity) : Vec
```
> Get global scale.
> Note that through rotations and non-uniform scale in the transform link hierarchy, getting an accurate world scale might be impossible, making this lossy.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_x_world(entity : Entity)"></endpoint>
### Transform.get_scale_x_world(.)
```lx
Transform.get_scale_x_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_y_world(entity : Entity)"></endpoint>
### Transform.get_scale_y_world(.)
```lx
Transform.get_scale_y_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_z_world(entity : Entity)"></endpoint>
### Transform.get_scale_z_world(.)
```lx
Transform.get_scale_z_world(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_right(entity : Entity)"></endpoint>
### Transform.get_right(.)
```lx
Transform.get_right(entity : Entity) : Vec
```
> Get the "right" direction of the `Transform`.
> Same direction as the red arrow in the translation gizmo in the editor.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_forward(entity : Entity)"></endpoint>
### Transform.get_forward(.)
```lx
Transform.get_forward(entity : Entity) : Vec
```
> Get the "forward" direction of the `Transform`.
> Same direction as the green arrow in the translation gizmo in the editor.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_up(entity : Entity)"></endpoint>
### Transform.get_up(.)
```lx
Transform.get_up(entity : Entity) : Vec
```
> Get the "up" direction of the `Transform`.
> Same direction as the blue arrow in the translation gizmo in the editor.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="sync(entity : Entity)"></endpoint>
### Transform.sync(.)
```lx
Transform.sync(entity : Entity) : None
```
> Forces a sync of the `Transform`. Will trigger listen functions.
> This usually shouldn't be needed as `Transform` sync automatically when updated.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="sync_block(entity : Entity, mask : TransformApplyMask)"></endpoint>
### Transform.sync_block(..)
```lx
Transform.sync_block(entity : Entity, mask : TransformApplyMask) : None
```
> Forces a sync of the `Transform` block data. Will trigger block listener functions.
> This usually shouldn't be needed as `Transform` sync automatically when updated.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="sync_world(world : World)"></endpoint>
### Transform.sync_world(.)
```lx
Transform.sync_world(world : World) : None
```
> Forces a sync of all `Transform` in a world. Will trigger listen functions.
> This usually shouldn't be needed as `Transform` sync automatically when updated.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="transform_by(entity : Entity, other : Entity)"></endpoint>
### Transform.transform_by(..)
```lx
Transform.transform_by(entity : Entity, other : Entity) : None
```
> Transform the given entity by another entities transform. e.g set world using the other as a parent   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="scale_by(entity : Entity, scale : Float3, origin : Float3)"></endpoint>
### Transform.scale_by(...)
```lx
Transform.scale_by(entity : Entity, scale : Float3, origin : Float3) : None
```
> Transform the given entity scale by the value around the given origin   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_euler_by(entity : Entity, euler : Float3, origin : Float3)"></endpoint>
### Transform.rotate_euler_by(...)
```lx
Transform.rotate_euler_by(entity : Entity, euler : Float3, origin : Float3) : None
```
> Transform the given entity rotation around the origin, by euler amount (radians)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="local_vector_to_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.local_vector_to_world(....)
```lx
Transform.local_vector_to_world(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
> Convert a vector from local space to world space. (applies scale and rotation, but not translation)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="world_vector_to_local(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.world_vector_to_local(....)
```lx
Transform.world_vector_to_local(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
> Convert a vector from world space to local space. (applies scale and rotation, but not translation)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="local_dir_to_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.local_dir_to_world(....)
```lx
Transform.local_dir_to_world(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
> Convert a direction from local space to world space. (applies only rotation, not rotation or translation)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="world_dir_to_local(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.world_dir_to_local(....)
```lx
Transform.world_dir_to_local(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
> Convert a direction from world space to local space. (applies only rotation, not rotation or translation)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="local_point_to_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.local_point_to_world(....)
```lx
Transform.local_point_to_world(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
> Convert a point from local space to world space. (applies translation, rotation and scale)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="local_point_to_world(entity : Entity, x : Num, y : Num, z : Num, scaled : Bool)"></endpoint>
### Transform.local_point_to_world(.....)
```lx
Transform.local_point_to_world(entity : Entity, x : Num, y : Num, z : Num, scaled : Bool) : Vec
```
> Convert a point from local space to world space. (applies translation, rotation and optionally, scale)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="world_point_to_local(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
### Transform.world_point_to_local(....)
```lx
Transform.world_point_to_local(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
> Convert a point from world space to local space. (applies translation, rotation and scale)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="world_point_to_local(entity : Entity, x : Num, y : Num, z : Num, scaled : Bool)"></endpoint>
### Transform.world_point_to_local(.....)
```lx
Transform.world_point_to_local(entity : Entity, x : Num, y : Num, z : Num, scaled : Bool) : Vec
```
> Convert a point from world space to local space. (applies translation, rotation and optionally, scale)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="listen_all(world : World, fn : Fn)"></endpoint>
### Transform.listen_all(..)
```lx
Transform.listen_all(world : World, fn : Fn) : Handle
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="unlisten_all(world : World, handle : Handle)"></endpoint>
### Transform.unlisten_all(..)
```lx
Transform.unlisten_all(world : World, handle : Handle) : None
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="listen(entity : Entity, fn : Fn)"></endpoint>
### Transform.listen(..)
```lx
Transform.listen(entity : Entity, fn : Fn) : Handle
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="unlisten(entity : Entity, handle : Handle)"></endpoint>
### Transform.unlisten(..)
```lx
Transform.unlisten(entity : Entity, handle : Handle) : None
```
> no docs found   


## TransformApplyMask
```lx
import "luxe: system/transform.modifier" for TransformApplyMask
```
> no docs found

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="pos"></endpoint>
### TransformApplyMask.pos
```lx
TransformApplyMask.pos : unknown
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="scale"></endpoint>
### TransformApplyMask.scale
```lx
TransformApplyMask.scale : unknown
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="rotation"></endpoint>
### TransformApplyMask.rotation
```lx
TransformApplyMask.rotation : unknown
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="modified"></endpoint>
### TransformApplyMask.modified
```lx
TransformApplyMask.modified : unknown
```
> no docs found   

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="all_modified"></endpoint>
### TransformApplyMask.all_modified
```lx
TransformApplyMask.all_modified : unknown
```
> no docs found   


## TransformLinkAction
```lx
import "luxe: system/transform.modifier" for TransformLinkAction
```
> How to preserve or not preserve the transform fields on link/unlink.

<endpoint module="luxe: system/transform.modifier" class="TransformLinkAction" signature="reset_local"></endpoint>
### TransformLinkAction.reset_local
```lx
TransformLinkAction.reset_local : unknown
```
> Reset fields to 0 position, 0 rotation and 1 scale.   

<endpoint module="luxe: system/transform.modifier" class="TransformLinkAction" signature="keep_local"></endpoint>
### TransformLinkAction.keep_local
```lx
TransformLinkAction.keep_local : unknown
```
> Don't touch local values at all.   

<endpoint module="luxe: system/transform.modifier" class="TransformLinkAction" signature="keep_world"></endpoint>
### TransformLinkAction.keep_world
```lx
TransformLinkAction.keep_world : unknown
```
> Try preserve the values how they appear in the world after transform hierarchy has been taken into consideration.
> Note that scale is on a best effort basis on unlink, and currently doesn't do anything on link.   

