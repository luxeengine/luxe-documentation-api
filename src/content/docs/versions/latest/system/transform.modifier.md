---
title: "luxe: system/transform.modifier"
description: API version 2025.11.1
---
## `luxe: system/transform.modifier{:lx}` module

- [Data](#data)   
- [System](#system)   
- [Transform](#transform)   
- [TransformApplyMask](#transformapplymask)   
- [TransformLinkAction](#transformlinkaction)   

---


### Data
`import "luxe: system/transform.modifier" for Data{:lx}`
> no docs found

- `var pos : Double3 = [0, 0, 0]{:lx}`
- `var rotation : Float3 = [0, 0, 0]{:lx}`
- `var scale : Float3 = [1, 1, 1]{:lx}`
- `var link : Link = null{:lx}`


---


### System
`import "luxe: system/transform.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/transform.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   


### Transform
`import "luxe: system/transform.modifier" for Transform{:lx}`
> A transform modifier defines where a entity is.
> That includes position, rotation and scale.
> A `Transform` can also be linked to another `Transform`, in which case its values are relative to their link target.
>   
> While not all entities need to be "somewhere" locally, a lot of them do, which is when this modifier is used.
> Other modifiers on the same entity aren't required to read and react to the `Transform`, but most do, allowing you to use this to move things (like Sprites, Meshes, Physics shapes, etc...).

- [id](#Transform.id)
- [create](#Transform.create+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [create](#Transform.create+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [create](#Transform.create)(**entity**: `Entity{:lx}`)
- [create](#Transform.create+2)(**entity**: `Entity{:lx}`, **link_to**: `Entity{:lx}`)
- [destroy](#Transform.destroy)(**entity**: `Entity{:lx}`)
- [has](#Transform.has)(**entity**: `Entity{:lx}`)
- [get_link](#Transform.get_link)(**entity**: `Entity{:lx}`)
- [get_linked](#Transform.get_linked)(**entity**: `Entity{:lx}`)
- [link](#Transform.link+3)(**entity**: `Entity{:lx}`, **target_entity**: `Entity{:lx}`, **link_action**: `TransformLinkAction{:lx}`)
- [link](#Transform.link+2)(**entity**: `Entity{:lx}`, **target_entity**: `Entity{:lx}`)
- [unlink](#Transform.unlink+2)(**entity**: `Entity{:lx}`, **reset_local**: `TransformLinkAction{:lx}`)
- [unlink](#Transform.unlink)(**entity**: `Entity{:lx}`)
- [look_at_and_move](#Transform.look_at_and_move+5)(**entity**: `Entity{:lx}`, **pos**: `Vec{:lx}`, **target**: `Vec{:lx}`, **up**: `Vec{:lx}`, **invert**: `Bool{:lx}`)
- [look_at_and_move](#Transform.look_at_and_move+4)(**entity**: `Entity{:lx}`, **pos**: `Vec{:lx}`, **target**: `Vec{:lx}`, **up**: `Vec{:lx}`)
- [look_at_and_move](#Transform.look_at_and_move+3)(**entity**: `Entity{:lx}`, **pos**: `Vec{:lx}`, **target**: `Vec{:lx}`)
- [look_at](#Transform.look_at+4)(**entity**: `Entity{:lx}`, **target**: `Vec{:lx}`, **up**: `Vec{:lx}`, **invert**: `Bool{:lx}`)
- [look_at](#Transform.look_at+3)(**entity**: `Entity{:lx}`, **target**: `Vec{:lx}`, **up**: `Vec{:lx}`)
- [look_at](#Transform.look_at+2)(**entity**: `Entity{:lx}`, **target**: `Vec{:lx}`)
- [set_snap](#Transform.set_snap+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_snap](#Transform.set_snap+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [set_pos](#Transform.set_pos+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_pos](#Transform.set_pos+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [set_pos_world](#Transform.set_pos_world+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_pos_world](#Transform.set_pos_world+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [set_pos_x](#Transform.set_pos_x+2)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`)
- [set_pos_y](#Transform.set_pos_y+2)(**entity**: `Entity{:lx}`, **y**: `Num{:lx}`)
- [set_pos_z](#Transform.set_pos_z+2)(**entity**: `Entity{:lx}`, **z**: `Num{:lx}`)
- [set_pos_x_world](#Transform.set_pos_x_world+2)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`)
- [set_pos_y_world](#Transform.set_pos_y_world+2)(**entity**: `Entity{:lx}`, **y**: `Num{:lx}`)
- [set_pos_z_world](#Transform.set_pos_z_world+2)(**entity**: `Entity{:lx}`, **z**: `Num{:lx}`)
- [set_scale](#Transform.set_scale+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [set_scale](#Transform.set_scale+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_rotation_slerp_angle_axis](#Transform.set_rotation_slerp_angle_axis+5)(**entity**: `Entity{:lx}`, **axis**: `Vec{:lx}`, **from**: `Num{:lx}`, **to**: `Num{:lx}`, **t**: `Num{:lx}`)
- [set_rotation_slerp_angle_axis_world](#Transform.set_rotation_slerp_angle_axis_world+5)(**entity**: `Entity{:lx}`, **axis**: `Vec{:lx}`, **from**: `Num{:lx}`, **to**: `Num{:lx}`, **t**: `Num{:lx}`)
- [set_rotation_slerp](#Transform.set_rotation_slerp+4)(**entity**: `Entity{:lx}`, **from**: `Vec{:lx}`, **to**: `Vec{:lx}`, **t**: `Num{:lx}`)
- [set_rotation_slerp_world](#Transform.set_rotation_slerp_world+4)(**entity**: `Entity{:lx}`, **from**: `Vec{:lx}`, **to**: `Vec{:lx}`, **t**: `Num{:lx}`)
- [set_rotation](#Transform.set_rotation+5)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`)
- [set_rotation_world](#Transform.set_rotation_world+5)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`)
- [set_angle_axis](#Transform.set_angle_axis+5)(**entity**: `Entity{:lx}`, **degrees**: `Any{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_angle_axis_world](#Transform.set_angle_axis_world+5)(**entity**: `Entity{:lx}`, **degrees**: `Any{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_euler](#Transform.set_euler+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_euler_world](#Transform.set_euler_world+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_euler_x](#Transform.set_euler_x+2)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`)
- [set_euler_y](#Transform.set_euler_y+2)(**entity**: `Entity{:lx}`, **y**: `Num{:lx}`)
- [set_euler_z](#Transform.set_euler_z+2)(**entity**: `Entity{:lx}`, **z**: `Num{:lx}`)
- [set_euler_x_world](#Transform.set_euler_x_world+2)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`)
- [set_euler_y_world](#Transform.set_euler_y_world+2)(**entity**: `Entity{:lx}`, **y**: `Num{:lx}`)
- [set_euler_z_world](#Transform.set_euler_z_world+2)(**entity**: `Entity{:lx}`, **z**: `Num{:lx}`)
- [rotate_angle_axis_slerp](#Transform.rotate_angle_axis_slerp+3)(**entity**: `Entity{:lx}`, **axis**: `Vec{:lx}`, **angle_amount**: `Num{:lx}`)
- [rotate_angle_axis_slerp_world](#Transform.rotate_angle_axis_slerp_world+3)(**entity**: `Entity{:lx}`, **axis**: `Vec{:lx}`, **angle_amount**: `Num{:lx}`)
- [rotate_around_world](#Transform.rotate_around_world+8)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **axis_x**: `Num{:lx}`, **axis_y**: `Num{:lx}`, **axis_z**: `Num{:lx}`, **degrees**: `Num{:lx}`)
- [rotate_around](#Transform.rotate_around+8)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **axis_x**: `Num{:lx}`, **axis_y**: `Num{:lx}`, **axis_z**: `Num{:lx}`, **degrees**: `Num{:lx}`)
- [rotate_angle_axis](#Transform.rotate_angle_axis+5)(**entity**: `Entity{:lx}`, **degrees**: `Any{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [rotate_angle_axis_world](#Transform.rotate_angle_axis_world+5)(**entity**: `Entity{:lx}`, **degrees**: `Any{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [rotate_euler](#Transform.rotate_euler+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [rotate_euler_world](#Transform.rotate_euler_world+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [translate](#Transform.translate+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [translate](#Transform.translate+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [get_pos](#Transform.get_pos)(**entity**: `Entity{:lx}`)
- [get_pos_x](#Transform.get_pos_x)(**entity**: `Entity{:lx}`)
- [get_pos_y](#Transform.get_pos_y)(**entity**: `Entity{:lx}`)
- [get_pos_z](#Transform.get_pos_z)(**entity**: `Entity{:lx}`)
- [get_pos_world](#Transform.get_pos_world)(**entity**: `Entity{:lx}`)
- [get_pos_world_unsnapped](#Transform.get_pos_world_unsnapped)(**entity**: `Entity{:lx}`)
- [get_pos_x_world](#Transform.get_pos_x_world)(**entity**: `Entity{:lx}`)
- [get_pos_y_world](#Transform.get_pos_y_world)(**entity**: `Entity{:lx}`)
- [get_pos_z_world](#Transform.get_pos_z_world)(**entity**: `Entity{:lx}`)
- [rotate2D](#Transform.rotate2D+2)(**entity**: `Entity{:lx}`, **degrees**: `Num{:lx}`)
- [set_angle2D](#Transform.set_angle2D+2)(**entity**: `Entity{:lx}`, **degrees**: `Num{:lx}`)
- [set_angle2D_world](#Transform.set_angle2D_world+2)(**entity**: `Entity{:lx}`, **degrees**: `Num{:lx}`)
- [get_angle2D](#Transform.get_angle2D)(**entity**: `Entity{:lx}`)
- [get_angle2D_world](#Transform.get_angle2D_world)(**entity**: `Entity{:lx}`)
- [set_depth2D](#Transform.set_depth2D+2)(**entity**: `Entity{:lx}`, **depth**: `Num{:lx}`)
- [get_depth2D](#Transform.get_depth2D)(**entity**: `Entity{:lx}`)
- [set_depth2D_world](#Transform.set_depth2D_world+2)(**entity**: `Entity{:lx}`, **depth**: `Num{:lx}`)
- [get_depth2D_world](#Transform.get_depth2D_world)(**entity**: `Entity{:lx}`)
- [get_world_matrix](#Transform.get_world_matrix+2)(**entity**: `Entity{:lx}`, **into_matrix**: `Floats{:lx}`)
- [get_rotation](#Transform.get_rotation)(**entity**: `Entity{:lx}`)
- [get_rotation_world](#Transform.get_rotation_world)(**entity**: `Entity{:lx}`)
- [get_rotation_matrix](#Transform.get_rotation_matrix+2)(**entity**: `Entity{:lx}`, **into_matrix**: `Floats{:lx}`)
- [get_euler](#Transform.get_euler)(**entity**: `Entity{:lx}`)
- [get_euler_x](#Transform.get_euler_x)(**entity**: `Entity{:lx}`)
- [get_euler_y](#Transform.get_euler_y)(**entity**: `Entity{:lx}`)
- [get_euler_z](#Transform.get_euler_z)(**entity**: `Entity{:lx}`)
- [get_euler_world](#Transform.get_euler_world)(**entity**: `Entity{:lx}`)
- [get_euler_x_world](#Transform.get_euler_x_world)(**entity**: `Entity{:lx}`)
- [get_euler_y_world](#Transform.get_euler_y_world)(**entity**: `Entity{:lx}`)
- [get_euler_z_world](#Transform.get_euler_z_world)(**entity**: `Entity{:lx}`)
- [get_scale](#Transform.get_scale)(**entity**: `Entity{:lx}`)
- [get_scale_x](#Transform.get_scale_x)(**entity**: `Entity{:lx}`)
- [get_scale_y](#Transform.get_scale_y)(**entity**: `Entity{:lx}`)
- [get_scale_z](#Transform.get_scale_z)(**entity**: `Entity{:lx}`)
- [get_scale_world](#Transform.get_scale_world)(**entity**: `Entity{:lx}`)
- [get_scale_x_world](#Transform.get_scale_x_world)(**entity**: `Entity{:lx}`)
- [get_scale_y_world](#Transform.get_scale_y_world)(**entity**: `Entity{:lx}`)
- [get_scale_z_world](#Transform.get_scale_z_world)(**entity**: `Entity{:lx}`)
- [get_right](#Transform.get_right)(**entity**: `Entity{:lx}`)
- [get_forward](#Transform.get_forward)(**entity**: `Entity{:lx}`)
- [get_up](#Transform.get_up)(**entity**: `Entity{:lx}`)
- [sync](#Transform.sync)(**entity**: `Entity{:lx}`)
- [sync_block](#Transform.sync_block+2)(**entity**: `Entity{:lx}`, **mask**: `TransformApplyMask{:lx}`)
- [sync_world](#Transform.sync_world)(**world**: `World{:lx}`)
- [transform_by](#Transform.transform_by+2)(**entity**: `Entity{:lx}`, **other**: `Entity{:lx}`)
- [scale_by](#Transform.scale_by+3)(**entity**: `Entity{:lx}`, **scale**: `Float3{:lx}`, **origin**: `Float3{:lx}`)
- [rotate_euler_by](#Transform.rotate_euler_by+3)(**entity**: `Entity{:lx}`, **euler**: `Float3{:lx}`, **origin**: `Float3{:lx}`)
- [local_vector_to_world](#Transform.local_vector_to_world+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [world_vector_to_local](#Transform.world_vector_to_local+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [local_dir_to_world](#Transform.local_dir_to_world+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [world_dir_to_local](#Transform.world_dir_to_local+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [local_point_to_world](#Transform.local_point_to_world+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [local_point_to_world](#Transform.local_point_to_world+5)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **scaled**: `Bool{:lx}`)
- [world_point_to_local](#Transform.world_point_to_local+4)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [world_point_to_local](#Transform.world_point_to_local+5)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **scaled**: `Bool{:lx}`)
- [listen_all](#Transform.listen_all+2)(**world**: `World{:lx}`, **fn**: `Fn{:lx}`)
- [unlisten_all](#Transform.unlisten_all+2)(**world**: `World{:lx}`, **handle**: `Handle{:lx}`)
- [listen](#Transform.listen+2)(**entity**: `Entity{:lx}`, **fn**: `Fn{:lx}`)
- [unlisten](#Transform.unlisten+2)(**entity**: `Entity{:lx}`, **handle**: `Handle{:lx}`)


---

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="id"></endpoint>
<h4 class="signature_head">Transform.id</h4><a class="signature-arity" href="#Transform.id" title="Permanent link">1</a><signature id="Transform.id">

```lx
Transform.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="create(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Transform.create</h4><a class="signature-arity" href="#Transform.create+3" title="Permanent link">3</a><signature id="Transform.create+3">

```lx
Transform.create(entity : Entity, x : Num, y : Num) : None
```
</signature>

> Attach a `Transform` modifier to an entity with the given `x` and `y` position (with a z of 0)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="create(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.create</h4><a class="signature-arity" href="#Transform.create+4" title="Permanent link">4</a><signature id="Transform.create+4">

```lx
Transform.create(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Attach a `Transform` modifier to an entity with the given `x`, `y` and `z` position   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="create(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.create</h4><a class="signature-arity" href="#Transform.create" title="Permanent link">1</a><signature id="Transform.create">

```lx
Transform.create(entity : Entity) : None
```
</signature>

> Attach a `Transform` modifier to an entity.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="create(entity : Entity, link_to : Entity)"></endpoint>
<h4 class="signature_head">Transform.create</h4><a class="signature-arity" href="#Transform.create+2" title="Permanent link">2</a><signature id="Transform.create+2">

```lx
Transform.create(entity : Entity, link_to : Entity) : None
```
</signature>

> Attach a `Transform` modifier to an entity, and link it to another entity.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="destroy(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.destroy</h4><a class="signature-arity" href="#Transform.destroy" title="Permanent link">1</a><signature id="Transform.destroy">

```lx
Transform.destroy(entity : Entity) : None
```
</signature>

> Detatch a `Transform` modifier from an entity.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="has(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.has</h4><a class="signature-arity" href="#Transform.has" title="Permanent link">1</a><signature id="Transform.has">

```lx
Transform.has(entity : Entity) : Bool
```
</signature>

> get whether an entity has an attached `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_link(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_link</h4><a class="signature-arity" href="#Transform.get_link" title="Permanent link">1</a><signature id="Transform.get_link">

```lx
Transform.get_link(entity : Entity) : Entity
```
</signature>

> Get what entity this entity is linked to. So what entity the position/rotation/scale of this transform are relative to.
> Linked to entity always has a `Transform` of its own.
> In case `Transform` isn't linked to anything, returns `null` and transformations are global.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_linked(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_linked</h4><a class="signature-arity" href="#Transform.get_linked" title="Permanent link">1</a><signature id="Transform.get_linked">

```lx
Transform.get_linked(entity : Entity) : List
```
</signature>

> Get what entities are linked to this entity (opposite relationship as `get_link`).
> Transformation values of linked entities are relative to this entity.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="link(entity : Entity, target_entity : Entity, link_action : TransformLinkAction)"></endpoint>
<h4 class="signature_head">Transform.link</h4><a class="signature-arity" href="#Transform.link+3" title="Permanent link">3</a><signature id="Transform.link+3">

```lx
Transform.link(entity : Entity, target_entity : Entity, link_action : TransformLinkAction) : None
```
</signature>

> Link one `Transform` to another.
> The `Transform` values will now be be relative to the link target, meaning the link target `Transform` position, rotation and scale all apply to the local position, rotation, scale of this `Transform`.
> When using non-uniform scales somewhere in your transform link hierarchy you can get transform deformations that would not be possible with just a single transform.
> 
> In other environments, this transform link is often part of the object hierarchy, but here it's specific to transforms and other hierarchies aren't bound to follow the same links.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="link(entity : Entity, target_entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.link</h4><a class="signature-arity" href="#Transform.link+2" title="Permanent link">2</a><signature id="Transform.link+2">

```lx
Transform.link(entity : Entity, target_entity : Entity) : None
```
</signature>

> Link one `Transform` to another.
> The `Transform` values will now be be relative to the link target, meaning the link target `Transform` position, rotation and scale all apply to the local position, rotation, scale of this `Transform`.
> When using non-uniform scales somewhere in your transform link hierarchy you can get transform deformations that would not be possible with just a single transform.
> 
> In other environments, this transform link is often part of the object hierarchy, but here it's specific to transforms and other hierarchies aren't bound to follow the same links.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="unlink(entity : Entity, reset_local : TransformLinkAction)"></endpoint>
<h4 class="signature_head">Transform.unlink</h4><a class="signature-arity" href="#Transform.unlink+2" title="Permanent link">2</a><signature id="Transform.unlink+2">

```lx
Transform.unlink(entity : Entity, reset_local : TransformLinkAction) : None
```
</signature>

> Unlink a `Transform`. Local position will be kept (unless reset), so if your parent isnt at the origin, expect the transform to move, or save and reapply the world position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="unlink(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.unlink</h4><a class="signature-arity" href="#Transform.unlink" title="Permanent link">1</a><signature id="Transform.unlink">

```lx
Transform.unlink(entity : Entity) : None
```
</signature>

> Unlink a `Transform`. Local position will be kept, so if your parent isnt at the origin, expect the transform to move, or save and reapply the world position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at_and_move(entity : Entity, pos : Vec, target : Vec, up : Vec, invert : Bool)"></endpoint>
<h4 class="signature_head">Transform.look_at_and_move</h4><a class="signature-arity" href="#Transform.look_at_and_move+5" title="Permanent link">5</a><signature id="Transform.look_at_and_move+5">

```lx
Transform.look_at_and_move(entity : Entity, pos : Vec, target : Vec, up : Vec, invert : Bool) : None
```
</signature>

> Move `Transform` somewhere else, then look towards target position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at_and_move(entity : Entity, pos : Vec, target : Vec, up : Vec)"></endpoint>
<h4 class="signature_head">Transform.look_at_and_move</h4><a class="signature-arity" href="#Transform.look_at_and_move+4" title="Permanent link">4</a><signature id="Transform.look_at_and_move+4">

```lx
Transform.look_at_and_move(entity : Entity, pos : Vec, target : Vec, up : Vec) : None
```
</signature>

> Move `Transform` somewhere else, then look towards target position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at_and_move(entity : Entity, pos : Vec, target : Vec)"></endpoint>
<h4 class="signature_head">Transform.look_at_and_move</h4><a class="signature-arity" href="#Transform.look_at_and_move+3" title="Permanent link">3</a><signature id="Transform.look_at_and_move+3">

```lx
Transform.look_at_and_move(entity : Entity, pos : Vec, target : Vec) : None
```
</signature>

> Move `Transform` somewhere else, then look towards target position.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at(entity : Entity, target : Vec, up : Vec, invert : Bool)"></endpoint>
<h4 class="signature_head">Transform.look_at</h4><a class="signature-arity" href="#Transform.look_at+4" title="Permanent link">4</a><signature id="Transform.look_at+4">

```lx
Transform.look_at(entity : Entity, target : Vec, up : Vec, invert : Bool) : None
```
</signature>

> Rotate `Transform` to look at a position in worldspace, 
>       rotated around that new view axis so the `Transform` 'up' aligns with the `up` input as closely as possible.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at(entity : Entity, target : Vec, up : Vec)"></endpoint>
<h4 class="signature_head">Transform.look_at</h4><a class="signature-arity" href="#Transform.look_at+3" title="Permanent link">3</a><signature id="Transform.look_at+3">

```lx
Transform.look_at(entity : Entity, target : Vec, up : Vec) : None
```
</signature>

> Rotate `Transform` to look at a position in worldspace, 
>       rotated around that new view axis so the `Transform` 'up' aligns with the `up` input as closely as possible.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="look_at(entity : Entity, target : Vec)"></endpoint>
<h4 class="signature_head">Transform.look_at</h4><a class="signature-arity" href="#Transform.look_at+2" title="Permanent link">2</a><signature id="Transform.look_at+2">

```lx
Transform.look_at(entity : Entity, target : Vec) : None
```
</signature>

> Rotate `Transform` to look at a position in worldspace.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_snap(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_snap</h4><a class="signature-arity" href="#Transform.set_snap+4" title="Permanent link">4</a><signature id="Transform.set_snap+4">

```lx
Transform.set_snap(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

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
<h4 class="signature_head">Transform.set_snap</h4><a class="signature-arity" href="#Transform.set_snap+3" title="Permanent link">3</a><signature id="Transform.set_snap+3">

```lx
Transform.set_snap(entity : Entity, x : Num, y : Num) : None
```
</signature>

> Set `Transform` position to snap at specific intervals.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos</h4><a class="signature-arity" href="#Transform.set_pos+4" title="Permanent link">4</a><signature id="Transform.set_pos+4">

```lx
Transform.set_pos(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Set local position of a `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos</h4><a class="signature-arity" href="#Transform.set_pos+3" title="Permanent link">3</a><signature id="Transform.set_pos+3">

```lx
Transform.set_pos(entity : Entity, x : Num, y : Num) : None
```
</signature>

> Set local position of a `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos_world</h4><a class="signature-arity" href="#Transform.set_pos_world+4" title="Permanent link">4</a><signature id="Transform.set_pos_world+4">

```lx
Transform.set_pos_world(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Set global position of a `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_world(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos_world</h4><a class="signature-arity" href="#Transform.set_pos_world+3" title="Permanent link">3</a><signature id="Transform.set_pos_world+3">

```lx
Transform.set_pos_world(entity : Entity, x : Num, y : Num) : None
```
</signature>

> Set global position of a `Transform`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_x(entity : Entity, x : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos_x</h4><a class="signature-arity" href="#Transform.set_pos_x+2" title="Permanent link">2</a><signature id="Transform.set_pos_x+2">

```lx
Transform.set_pos_x(entity : Entity, x : Num) : None
```
</signature>

> Set `x` component of local `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_y(entity : Entity, y : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos_y</h4><a class="signature-arity" href="#Transform.set_pos_y+2" title="Permanent link">2</a><signature id="Transform.set_pos_y+2">

```lx
Transform.set_pos_y(entity : Entity, y : Num) : None
```
</signature>

> Set `y` component of local `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_z(entity : Entity, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos_z</h4><a class="signature-arity" href="#Transform.set_pos_z+2" title="Permanent link">2</a><signature id="Transform.set_pos_z+2">

```lx
Transform.set_pos_z(entity : Entity, z : Num) : None
```
</signature>

> Set `z` component of local `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_x_world(entity : Entity, x : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos_x_world</h4><a class="signature-arity" href="#Transform.set_pos_x_world+2" title="Permanent link">2</a><signature id="Transform.set_pos_x_world+2">

```lx
Transform.set_pos_x_world(entity : Entity, x : Num) : None
```
</signature>

> Set `x` component of global `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_y_world(entity : Entity, y : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos_y_world</h4><a class="signature-arity" href="#Transform.set_pos_y_world+2" title="Permanent link">2</a><signature id="Transform.set_pos_y_world+2">

```lx
Transform.set_pos_y_world(entity : Entity, y : Num) : None
```
</signature>

> Set `y` component of global `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_pos_z_world(entity : Entity, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_pos_z_world</h4><a class="signature-arity" href="#Transform.set_pos_z_world+2" title="Permanent link">2</a><signature id="Transform.set_pos_z_world+2">

```lx
Transform.set_pos_z_world(entity : Entity, z : Num) : None
```
</signature>

> Set `z` component of global `Transform` pos.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_scale(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Transform.set_scale</h4><a class="signature-arity" href="#Transform.set_scale+3" title="Permanent link">3</a><signature id="Transform.set_scale+3">

```lx
Transform.set_scale(entity : Entity, x : Num, y : Num) : None
```
</signature>

> Set x and y scale of a `Transform`, keeping z scale unchanged.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_scale(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_scale</h4><a class="signature-arity" href="#Transform.set_scale+4" title="Permanent link">4</a><signature id="Transform.set_scale+4">

```lx
Transform.set_scale(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Set local scale of a `Transform`.
> Setting the scale in a global context isnt available, as link hierarchies with rotations and nonuniform scalings can lead to weird and hard to predict states for that.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_slerp_angle_axis(entity : Entity, axis : Vec, from : Num, to : Num, t : Num)"></endpoint>
<h4 class="signature_head">Transform.set_rotation_slerp_angle_axis</h4><a class="signature-arity" href="#Transform.set_rotation_slerp_angle_axis+5" title="Permanent link">5</a><signature id="Transform.set_rotation_slerp_angle_axis+5">

```lx
Transform.set_rotation_slerp_angle_axis(entity : Entity, axis : Vec, from : Num, to : Num, t : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_slerp_angle_axis_world(entity : Entity, axis : Vec, from : Num, to : Num, t : Num)"></endpoint>
<h4 class="signature_head">Transform.set_rotation_slerp_angle_axis_world</h4><a class="signature-arity" href="#Transform.set_rotation_slerp_angle_axis_world+5" title="Permanent link">5</a><signature id="Transform.set_rotation_slerp_angle_axis_world+5">

```lx
Transform.set_rotation_slerp_angle_axis_world(entity : Entity, axis : Vec, from : Num, to : Num, t : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_slerp(entity : Entity, from : Vec, to : Vec, t : Num)"></endpoint>
<h4 class="signature_head">Transform.set_rotation_slerp</h4><a class="signature-arity" href="#Transform.set_rotation_slerp+4" title="Permanent link">4</a><signature id="Transform.set_rotation_slerp+4">

```lx
Transform.set_rotation_slerp(entity : Entity, from : Vec, to : Vec, t : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_slerp_world(entity : Entity, from : Vec, to : Vec, t : Num)"></endpoint>
<h4 class="signature_head">Transform.set_rotation_slerp_world</h4><a class="signature-arity" href="#Transform.set_rotation_slerp_world+4" title="Permanent link">4</a><signature id="Transform.set_rotation_slerp_world+4">

```lx
Transform.set_rotation_slerp_world(entity : Entity, from : Vec, to : Vec, t : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation(entity : Entity, x : Num, y : Num, z : Num, w : Num)"></endpoint>
<h4 class="signature_head">Transform.set_rotation</h4><a class="signature-arity" href="#Transform.set_rotation+5" title="Permanent link">5</a><signature id="Transform.set_rotation+5">

```lx
Transform.set_rotation(entity : Entity, x : Num, y : Num, z : Num, w : Num) : None
```
</signature>

> Set local rotation in quaternions.
>   
> (Quaternions are how rotations are handled by the engine internally, though it can be hard to understand how to manipulate them, so feel free to stick to euler angles using `set_euler(entity, x, y, z)`.)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_rotation_world(entity : Entity, x : Num, y : Num, z : Num, w : Num)"></endpoint>
<h4 class="signature_head">Transform.set_rotation_world</h4><a class="signature-arity" href="#Transform.set_rotation_world+5" title="Permanent link">5</a><signature id="Transform.set_rotation_world+5">

```lx
Transform.set_rotation_world(entity : Entity, x : Num, y : Num, z : Num, w : Num) : None
```
</signature>

> Set global rotation in quaternions.
>   
> (Quaternions are how rotations are handled by the engine internally, though it can be hard to understand how to manipulate them, so feel free to stick to euler angles using `set_euler_world(entity, x, y, z)`.)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_angle_axis(entity : Entity, degrees : Any, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_angle_axis</h4><a class="signature-arity" href="#Transform.set_angle_axis+5" title="Permanent link">5</a><signature id="Transform.set_angle_axis+5">

```lx
Transform.set_angle_axis(entity : Entity, degrees : Any, x : Num, y : Num, z : Num) : None
```
</signature>

> Set local rotation as a rotation around an axis.
> 
> Rotation direction is left-handed (counter-clockwise when looking in the direction of the axis.)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_angle_axis_world(entity : Entity, degrees : Any, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_angle_axis_world</h4><a class="signature-arity" href="#Transform.set_angle_axis_world+5" title="Permanent link">5</a><signature id="Transform.set_angle_axis_world+5">

```lx
Transform.set_angle_axis_world(entity : Entity, degrees : Any, x : Num, y : Num, z : Num) : None
```
</signature>

> Set global rotation as a rotation around an axis.
> 
> Rotation direction is left-handed (counter-clockwise when looking in the direction of the axis.)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_euler</h4><a class="signature-arity" href="#Transform.set_euler+4" title="Permanent link">4</a><signature id="Transform.set_euler+4">

```lx
Transform.set_euler(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Set local rotation as xyz euler angles.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_euler_world</h4><a class="signature-arity" href="#Transform.set_euler_world+4" title="Permanent link">4</a><signature id="Transform.set_euler_world+4">

```lx
Transform.set_euler_world(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Set global rotation as xyz euler angles.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_x(entity : Entity, x : Num)"></endpoint>
<h4 class="signature_head">Transform.set_euler_x</h4><a class="signature-arity" href="#Transform.set_euler_x+2" title="Permanent link">2</a><signature id="Transform.set_euler_x+2">

```lx
Transform.set_euler_x(entity : Entity, x : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_y(entity : Entity, y : Num)"></endpoint>
<h4 class="signature_head">Transform.set_euler_y</h4><a class="signature-arity" href="#Transform.set_euler_y+2" title="Permanent link">2</a><signature id="Transform.set_euler_y+2">

```lx
Transform.set_euler_y(entity : Entity, y : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_z(entity : Entity, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_euler_z</h4><a class="signature-arity" href="#Transform.set_euler_z+2" title="Permanent link">2</a><signature id="Transform.set_euler_z+2">

```lx
Transform.set_euler_z(entity : Entity, z : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_x_world(entity : Entity, x : Num)"></endpoint>
<h4 class="signature_head">Transform.set_euler_x_world</h4><a class="signature-arity" href="#Transform.set_euler_x_world+2" title="Permanent link">2</a><signature id="Transform.set_euler_x_world+2">

```lx
Transform.set_euler_x_world(entity : Entity, x : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_y_world(entity : Entity, y : Num)"></endpoint>
<h4 class="signature_head">Transform.set_euler_y_world</h4><a class="signature-arity" href="#Transform.set_euler_y_world+2" title="Permanent link">2</a><signature id="Transform.set_euler_y_world+2">

```lx
Transform.set_euler_y_world(entity : Entity, y : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_euler_z_world(entity : Entity, z : Num)"></endpoint>
<h4 class="signature_head">Transform.set_euler_z_world</h4><a class="signature-arity" href="#Transform.set_euler_z_world+2" title="Permanent link">2</a><signature id="Transform.set_euler_z_world+2">

```lx
Transform.set_euler_z_world(entity : Entity, z : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_angle_axis_slerp(entity : Entity, axis : Vec, angle_amount : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate_angle_axis_slerp</h4><a class="signature-arity" href="#Transform.rotate_angle_axis_slerp+3" title="Permanent link">3</a><signature id="Transform.rotate_angle_axis_slerp+3">

```lx
Transform.rotate_angle_axis_slerp(entity : Entity, axis : Vec, angle_amount : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_angle_axis_slerp_world(entity : Entity, axis : Vec, angle_amount : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate_angle_axis_slerp_world</h4><a class="signature-arity" href="#Transform.rotate_angle_axis_slerp_world+3" title="Permanent link">3</a><signature id="Transform.rotate_angle_axis_slerp_world+3">

```lx
Transform.rotate_angle_axis_slerp_world(entity : Entity, axis : Vec, angle_amount : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_around_world(entity : Entity, x : Num, y : Num, z : Num, axis_x : Num, axis_y : Num, axis_z : Num, degrees : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate_around_world</h4><a class="signature-arity" href="#Transform.rotate_around_world+8" title="Permanent link">8</a><signature id="Transform.rotate_around_world+8">

```lx
Transform.rotate_around_world(entity : Entity, x : Num, y : Num, z : Num, axis_x : Num, axis_y : Num, axis_z : Num, degrees : Num) : None
```
</signature>

> Rotate around an axis in world space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_around(entity : Entity, x : Num, y : Num, z : Num, axis_x : Num, axis_y : Num, axis_z : Num, degrees : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate_around</h4><a class="signature-arity" href="#Transform.rotate_around+8" title="Permanent link">8</a><signature id="Transform.rotate_around+8">

```lx
Transform.rotate_around(entity : Entity, x : Num, y : Num, z : Num, axis_x : Num, axis_y : Num, axis_z : Num, degrees : Num) : None
```
</signature>

> Rotate around an axis in local space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_angle_axis(entity : Entity, degrees : Any, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate_angle_axis</h4><a class="signature-arity" href="#Transform.rotate_angle_axis+5" title="Permanent link">5</a><signature id="Transform.rotate_angle_axis+5">

```lx
Transform.rotate_angle_axis(entity : Entity, degrees : Any, x : Num, y : Num, z : Num) : None
```
</signature>

> Rotate on the spot around an axis in local coordinates.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_angle_axis_world(entity : Entity, degrees : Any, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate_angle_axis_world</h4><a class="signature-arity" href="#Transform.rotate_angle_axis_world+5" title="Permanent link">5</a><signature id="Transform.rotate_angle_axis_world+5">

```lx
Transform.rotate_angle_axis_world(entity : Entity, degrees : Any, x : Num, y : Num, z : Num) : None
```
</signature>

> Rotate on the spot around an axis in global coordinates.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_euler(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate_euler</h4><a class="signature-arity" href="#Transform.rotate_euler+4" title="Permanent link">4</a><signature id="Transform.rotate_euler+4">

```lx
Transform.rotate_euler(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Rotate by euler angles in local space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_euler_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate_euler_world</h4><a class="signature-arity" href="#Transform.rotate_euler_world+4" title="Permanent link">4</a><signature id="Transform.rotate_euler_world+4">

```lx
Transform.rotate_euler_world(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Rotate by euler angles in global space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="translate(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.translate</h4><a class="signature-arity" href="#Transform.translate+4" title="Permanent link">4</a><signature id="Transform.translate+4">

```lx
Transform.translate(entity : Entity, x : Num, y : Num, z : Num) : None
```
</signature>

> Move `Transform` in local space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="translate(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Transform.translate</h4><a class="signature-arity" href="#Transform.translate+3" title="Permanent link">3</a><signature id="Transform.translate+3">

```lx
Transform.translate(entity : Entity, x : Num, y : Num) : None
```
</signature>

> Move `Transform` in local space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos</h4><a class="signature-arity" href="#Transform.get_pos" title="Permanent link">1</a><signature id="Transform.get_pos">

```lx
Transform.get_pos(entity : Entity) : Vec
```
</signature>

> Get position local space (relative to link `Transform`).   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_x(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos_x</h4><a class="signature-arity" href="#Transform.get_pos_x" title="Permanent link">1</a><signature id="Transform.get_pos_x">

```lx
Transform.get_pos_x(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_y(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos_y</h4><a class="signature-arity" href="#Transform.get_pos_y" title="Permanent link">1</a><signature id="Transform.get_pos_y">

```lx
Transform.get_pos_y(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_z(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos_z</h4><a class="signature-arity" href="#Transform.get_pos_z" title="Permanent link">1</a><signature id="Transform.get_pos_z">

```lx
Transform.get_pos_z(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos_world</h4><a class="signature-arity" href="#Transform.get_pos_world" title="Permanent link">1</a><signature id="Transform.get_pos_world">

```lx
Transform.get_pos_world(entity : Entity) : unknown
```
</signature>

> Get position global space.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_world_unsnapped(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos_world_unsnapped</h4><a class="signature-arity" href="#Transform.get_pos_world_unsnapped" title="Permanent link">1</a><signature id="Transform.get_pos_world_unsnapped">

```lx
Transform.get_pos_world_unsnapped(entity : Entity) : Vec
```
</signature>

> Get position global space independently of `set_snap` settings.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_x_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos_x_world</h4><a class="signature-arity" href="#Transform.get_pos_x_world" title="Permanent link">1</a><signature id="Transform.get_pos_x_world">

```lx
Transform.get_pos_x_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_y_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos_y_world</h4><a class="signature-arity" href="#Transform.get_pos_y_world" title="Permanent link">1</a><signature id="Transform.get_pos_y_world">

```lx
Transform.get_pos_y_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_pos_z_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_pos_z_world</h4><a class="signature-arity" href="#Transform.get_pos_z_world" title="Permanent link">1</a><signature id="Transform.get_pos_z_world">

```lx
Transform.get_pos_z_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate2D(entity : Entity, degrees : Num)"></endpoint>
<h4 class="signature_head">Transform.rotate2D</h4><a class="signature-arity" href="#Transform.rotate2D+2" title="Permanent link">2</a><signature id="Transform.rotate2D+2">

```lx
Transform.rotate2D(entity : Entity, degrees : Num) : None
```
</signature>

> Rotate the `Transform` in local space.
>     
> This technically rotates around the z axis, since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_angle2D(entity : Entity, degrees : Num)"></endpoint>
<h4 class="signature_head">Transform.set_angle2D</h4><a class="signature-arity" href="#Transform.set_angle2D+2" title="Permanent link">2</a><signature id="Transform.set_angle2D+2">

```lx
Transform.set_angle2D(entity : Entity, degrees : Num) : None
```
</signature>

> Set the 2d angle in local space.
>     
> This is technically the same as `set_euler_z`(doesnt touch x or y), since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_angle2D_world(entity : Entity, degrees : Num)"></endpoint>
<h4 class="signature_head">Transform.set_angle2D_world</h4><a class="signature-arity" href="#Transform.set_angle2D_world+2" title="Permanent link">2</a><signature id="Transform.set_angle2D_world+2">

```lx
Transform.set_angle2D_world(entity : Entity, degrees : Num) : None
```
</signature>

> Set the 2d angle in global space.
>     
> This is technically the same as `set_euler_z`(doesnt touch x or y), since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_angle2D(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_angle2D</h4><a class="signature-arity" href="#Transform.get_angle2D" title="Permanent link">1</a><signature id="Transform.get_angle2D">

```lx
Transform.get_angle2D(entity : Entity) : Num
```
</signature>

> Get the 2d angle in local space.
>     
> This is technically the same as `get_euler_z`, since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_angle2D_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_angle2D_world</h4><a class="signature-arity" href="#Transform.get_angle2D_world" title="Permanent link">1</a><signature id="Transform.get_angle2D_world">

```lx
Transform.get_angle2D_world(entity : Entity) : Num
```
</signature>

> Get the 2d angle in global space.
>     
> This is technically the same as `get_euler_z_world`, since thats the only axis we care about in 2d contexts.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_depth2D(entity : Entity, depth : Num)"></endpoint>
<h4 class="signature_head">Transform.set_depth2D</h4><a class="signature-arity" href="#Transform.set_depth2D+2" title="Permanent link">2</a><signature id="Transform.set_depth2D+2">

```lx
Transform.set_depth2D(entity : Entity, depth : Num) : None
```
</signature>

> Set the local depth (relative to link `Transform`).
>     
> This is technically the same as `set_pos_z`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_depth2D(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_depth2D</h4><a class="signature-arity" href="#Transform.get_depth2D" title="Permanent link">1</a><signature id="Transform.get_depth2D">

```lx
Transform.get_depth2D(entity : Entity) : Num
```
</signature>

> Get the local depth (relative to link `Transform`).
>     
> This is technically the same as `get_pos_z`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="set_depth2D_world(entity : Entity, depth : Num)"></endpoint>
<h4 class="signature_head">Transform.set_depth2D_world</h4><a class="signature-arity" href="#Transform.set_depth2D_world+2" title="Permanent link">2</a><signature id="Transform.set_depth2D_world+2">

```lx
Transform.set_depth2D_world(entity : Entity, depth : Num) : None
```
</signature>

> Set the global depth.
>     
> This is technically the same as `set_pos_z_world`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_depth2D_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_depth2D_world</h4><a class="signature-arity" href="#Transform.get_depth2D_world" title="Permanent link">1</a><signature id="Transform.get_depth2D_world">

```lx
Transform.get_depth2D_world(entity : Entity) : Num
```
</signature>

> Get the global depth.
>     
> This is technically the same as `get_pos_z_world`.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_world_matrix(entity : Entity, into_matrix : Floats)"></endpoint>
<h4 class="signature_head">Transform.get_world_matrix</h4><a class="signature-arity" href="#Transform.get_world_matrix+2" title="Permanent link">2</a><signature id="Transform.get_world_matrix+2">

```lx
Transform.get_world_matrix(entity : Entity, into_matrix : Floats) : None
```
</signature>

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
<h4 class="signature_head">Transform.get_rotation</h4><a class="signature-arity" href="#Transform.get_rotation" title="Permanent link">1</a><signature id="Transform.get_rotation">

```lx
Transform.get_rotation(entity : Entity) : Quat
```
</signature>

> Get local quaternion rotation.
>     
> (Note that quaternions can be unfamiliar and hard to manipulate, so if you're not familiar with them you might want to use `get_euler` instead)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_rotation_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_rotation_world</h4><a class="signature-arity" href="#Transform.get_rotation_world" title="Permanent link">1</a><signature id="Transform.get_rotation_world">

```lx
Transform.get_rotation_world(entity : Entity) : Quat
```
</signature>

> Get global quaternion rotation.
>     
> (Note that quaternions can be unfamiliar and hard to manipulate, so if you're not familiar with them you might want to use `get_euler_world` instead)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_rotation_matrix(entity : Entity, into_matrix : Floats)"></endpoint>
<h4 class="signature_head">Transform.get_rotation_matrix</h4><a class="signature-arity" href="#Transform.get_rotation_matrix+2" title="Permanent link">2</a><signature id="Transform.get_rotation_matrix+2">

```lx
Transform.get_rotation_matrix(entity : Entity, into_matrix : Floats) : None
```
</signature>

> Get 4x4 world rotation matrix (column major array).   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_euler</h4><a class="signature-arity" href="#Transform.get_euler" title="Permanent link">1</a><signature id="Transform.get_euler">

```lx
Transform.get_euler(entity : Entity) : Vec
```
</signature>

> Get local euler angles.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_x(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_euler_x</h4><a class="signature-arity" href="#Transform.get_euler_x" title="Permanent link">1</a><signature id="Transform.get_euler_x">

```lx
Transform.get_euler_x(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_y(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_euler_y</h4><a class="signature-arity" href="#Transform.get_euler_y" title="Permanent link">1</a><signature id="Transform.get_euler_y">

```lx
Transform.get_euler_y(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_z(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_euler_z</h4><a class="signature-arity" href="#Transform.get_euler_z" title="Permanent link">1</a><signature id="Transform.get_euler_z">

```lx
Transform.get_euler_z(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_euler_world</h4><a class="signature-arity" href="#Transform.get_euler_world" title="Permanent link">1</a><signature id="Transform.get_euler_world">

```lx
Transform.get_euler_world(entity : Entity) : Vec
```
</signature>

> Get global euler angles.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_x_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_euler_x_world</h4><a class="signature-arity" href="#Transform.get_euler_x_world" title="Permanent link">1</a><signature id="Transform.get_euler_x_world">

```lx
Transform.get_euler_x_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_y_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_euler_y_world</h4><a class="signature-arity" href="#Transform.get_euler_y_world" title="Permanent link">1</a><signature id="Transform.get_euler_y_world">

```lx
Transform.get_euler_y_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_euler_z_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_euler_z_world</h4><a class="signature-arity" href="#Transform.get_euler_z_world" title="Permanent link">1</a><signature id="Transform.get_euler_z_world">

```lx
Transform.get_euler_z_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_scale</h4><a class="signature-arity" href="#Transform.get_scale" title="Permanent link">1</a><signature id="Transform.get_scale">

```lx
Transform.get_scale(entity : Entity) : Vec
```
</signature>

> Get local scale.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_x(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_scale_x</h4><a class="signature-arity" href="#Transform.get_scale_x" title="Permanent link">1</a><signature id="Transform.get_scale_x">

```lx
Transform.get_scale_x(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_y(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_scale_y</h4><a class="signature-arity" href="#Transform.get_scale_y" title="Permanent link">1</a><signature id="Transform.get_scale_y">

```lx
Transform.get_scale_y(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_z(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_scale_z</h4><a class="signature-arity" href="#Transform.get_scale_z" title="Permanent link">1</a><signature id="Transform.get_scale_z">

```lx
Transform.get_scale_z(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_scale_world</h4><a class="signature-arity" href="#Transform.get_scale_world" title="Permanent link">1</a><signature id="Transform.get_scale_world">

```lx
Transform.get_scale_world(entity : Entity) : Vec
```
</signature>

> Get global scale.
> Note that through rotations and non-uniform scale in the transform link hierarchy, getting an accurate world scale might be impossible, making this lossy.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_x_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_scale_x_world</h4><a class="signature-arity" href="#Transform.get_scale_x_world" title="Permanent link">1</a><signature id="Transform.get_scale_x_world">

```lx
Transform.get_scale_x_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_y_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_scale_y_world</h4><a class="signature-arity" href="#Transform.get_scale_y_world" title="Permanent link">1</a><signature id="Transform.get_scale_y_world">

```lx
Transform.get_scale_y_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_scale_z_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_scale_z_world</h4><a class="signature-arity" href="#Transform.get_scale_z_world" title="Permanent link">1</a><signature id="Transform.get_scale_z_world">

```lx
Transform.get_scale_z_world(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_right(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_right</h4><a class="signature-arity" href="#Transform.get_right" title="Permanent link">1</a><signature id="Transform.get_right">

```lx
Transform.get_right(entity : Entity) : Vec
```
</signature>

> Get the "right" direction of the `Transform`.
> Same direction as the red arrow in the translation gizmo in the editor.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_forward(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_forward</h4><a class="signature-arity" href="#Transform.get_forward" title="Permanent link">1</a><signature id="Transform.get_forward">

```lx
Transform.get_forward(entity : Entity) : Vec
```
</signature>

> Get the "forward" direction of the `Transform`.
> Same direction as the green arrow in the translation gizmo in the editor.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="get_up(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.get_up</h4><a class="signature-arity" href="#Transform.get_up" title="Permanent link">1</a><signature id="Transform.get_up">

```lx
Transform.get_up(entity : Entity) : Vec
```
</signature>

> Get the "up" direction of the `Transform`.
> Same direction as the blue arrow in the translation gizmo in the editor.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="sync(entity : Entity)"></endpoint>
<h4 class="signature_head">Transform.sync</h4><a class="signature-arity" href="#Transform.sync" title="Permanent link">1</a><signature id="Transform.sync">

```lx
Transform.sync(entity : Entity) : None
```
</signature>

> Forces a sync of the `Transform`. Will trigger listen functions.
> This usually shouldn't be needed as `Transform` sync automatically when updated.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="sync_block(entity : Entity, mask : TransformApplyMask)"></endpoint>
<h4 class="signature_head">Transform.sync_block</h4><a class="signature-arity" href="#Transform.sync_block+2" title="Permanent link">2</a><signature id="Transform.sync_block+2">

```lx
Transform.sync_block(entity : Entity, mask : TransformApplyMask) : None
```
</signature>

> Forces a sync of the `Transform` block data. Will trigger block listener functions.
> This usually shouldn't be needed as `Transform` sync automatically when updated.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="sync_world(world : World)"></endpoint>
<h4 class="signature_head">Transform.sync_world</h4><a class="signature-arity" href="#Transform.sync_world" title="Permanent link">1</a><signature id="Transform.sync_world">

```lx
Transform.sync_world(world : World) : None
```
</signature>

> Forces a sync of all `Transform` in a world. Will trigger listen functions.
> This usually shouldn't be needed as `Transform` sync automatically when updated.   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="transform_by(entity : Entity, other : Entity)"></endpoint>
<h4 class="signature_head">Transform.transform_by</h4><a class="signature-arity" href="#Transform.transform_by+2" title="Permanent link">2</a><signature id="Transform.transform_by+2">

```lx
Transform.transform_by(entity : Entity, other : Entity) : None
```
</signature>

> Transform the given entity by another entities transform. e.g set world using the other as a parent   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="scale_by(entity : Entity, scale : Float3, origin : Float3)"></endpoint>
<h4 class="signature_head">Transform.scale_by</h4><a class="signature-arity" href="#Transform.scale_by+3" title="Permanent link">3</a><signature id="Transform.scale_by+3">

```lx
Transform.scale_by(entity : Entity, scale : Float3, origin : Float3) : None
```
</signature>

> Transform the given entity scale by the value around the given origin   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="rotate_euler_by(entity : Entity, euler : Float3, origin : Float3)"></endpoint>
<h4 class="signature_head">Transform.rotate_euler_by</h4><a class="signature-arity" href="#Transform.rotate_euler_by+3" title="Permanent link">3</a><signature id="Transform.rotate_euler_by+3">

```lx
Transform.rotate_euler_by(entity : Entity, euler : Float3, origin : Float3) : None
```
</signature>

> Transform the given entity rotation around the origin, by euler amount (radians)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="local_vector_to_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.local_vector_to_world</h4><a class="signature-arity" href="#Transform.local_vector_to_world+4" title="Permanent link">4</a><signature id="Transform.local_vector_to_world+4">

```lx
Transform.local_vector_to_world(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
</signature>

> Convert a vector from local space to world space. (applies scale and rotation, but not translation)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="world_vector_to_local(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.world_vector_to_local</h4><a class="signature-arity" href="#Transform.world_vector_to_local+4" title="Permanent link">4</a><signature id="Transform.world_vector_to_local+4">

```lx
Transform.world_vector_to_local(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
</signature>

> Convert a vector from world space to local space. (applies scale and rotation, but not translation)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="local_dir_to_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.local_dir_to_world</h4><a class="signature-arity" href="#Transform.local_dir_to_world+4" title="Permanent link">4</a><signature id="Transform.local_dir_to_world+4">

```lx
Transform.local_dir_to_world(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
</signature>

> Convert a direction from local space to world space. (applies only rotation, not rotation or translation)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="world_dir_to_local(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.world_dir_to_local</h4><a class="signature-arity" href="#Transform.world_dir_to_local+4" title="Permanent link">4</a><signature id="Transform.world_dir_to_local+4">

```lx
Transform.world_dir_to_local(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
</signature>

> Convert a direction from world space to local space. (applies only rotation, not rotation or translation)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="local_point_to_world(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.local_point_to_world</h4><a class="signature-arity" href="#Transform.local_point_to_world+4" title="Permanent link">4</a><signature id="Transform.local_point_to_world+4">

```lx
Transform.local_point_to_world(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
</signature>

> Convert a point from local space to world space. (applies translation, rotation and scale)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="local_point_to_world(entity : Entity, x : Num, y : Num, z : Num, scaled : Bool)"></endpoint>
<h4 class="signature_head">Transform.local_point_to_world</h4><a class="signature-arity" href="#Transform.local_point_to_world+5" title="Permanent link">5</a><signature id="Transform.local_point_to_world+5">

```lx
Transform.local_point_to_world(entity : Entity, x : Num, y : Num, z : Num, scaled : Bool) : Vec
```
</signature>

> Convert a point from local space to world space. (applies translation, rotation and optionally, scale)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="world_point_to_local(entity : Entity, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Transform.world_point_to_local</h4><a class="signature-arity" href="#Transform.world_point_to_local+4" title="Permanent link">4</a><signature id="Transform.world_point_to_local+4">

```lx
Transform.world_point_to_local(entity : Entity, x : Num, y : Num, z : Num) : Vec
```
</signature>

> Convert a point from world space to local space. (applies translation, rotation and scale)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="world_point_to_local(entity : Entity, x : Num, y : Num, z : Num, scaled : Bool)"></endpoint>
<h4 class="signature_head">Transform.world_point_to_local</h4><a class="signature-arity" href="#Transform.world_point_to_local+5" title="Permanent link">5</a><signature id="Transform.world_point_to_local+5">

```lx
Transform.world_point_to_local(entity : Entity, x : Num, y : Num, z : Num, scaled : Bool) : Vec
```
</signature>

> Convert a point from world space to local space. (applies translation, rotation and optionally, scale)   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="listen_all(world : World, fn : Fn)"></endpoint>
<h4 class="signature_head">Transform.listen_all</h4><a class="signature-arity" href="#Transform.listen_all+2" title="Permanent link">2</a><signature id="Transform.listen_all+2">

```lx
Transform.listen_all(world : World, fn : Fn) : Handle
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="unlisten_all(world : World, handle : Handle)"></endpoint>
<h4 class="signature_head">Transform.unlisten_all</h4><a class="signature-arity" href="#Transform.unlisten_all+2" title="Permanent link">2</a><signature id="Transform.unlisten_all+2">

```lx
Transform.unlisten_all(world : World, handle : Handle) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="listen(entity : Entity, fn : Fn)"></endpoint>
<h4 class="signature_head">Transform.listen</h4><a class="signature-arity" href="#Transform.listen+2" title="Permanent link">2</a><signature id="Transform.listen+2">

```lx
Transform.listen(entity : Entity, fn : Fn) : Handle
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="Transform" signature="unlisten(entity : Entity, handle : Handle)"></endpoint>
<h4 class="signature_head">Transform.unlisten</h4><a class="signature-arity" href="#Transform.unlisten+2" title="Permanent link">2</a><signature id="Transform.unlisten+2">

```lx
Transform.unlisten(entity : Entity, handle : Handle) : None
```
</signature>

> no docs found   


### TransformApplyMask
`import "luxe: system/transform.modifier" for TransformApplyMask{:lx}`
> no docs found

- [pos](#TransformApplyMask.pos)
- [scale](#TransformApplyMask.scale)
- [rotation](#TransformApplyMask.rotation)
- [modified](#TransformApplyMask.modified)
- [all_modified](#TransformApplyMask.all_modified)


---

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="pos"></endpoint>
<h4 class="signature_head">TransformApplyMask.pos</h4><a class="signature-arity" href="#TransformApplyMask.pos" title="Permanent link">1</a><signature id="TransformApplyMask.pos">

```lx
TransformApplyMask.pos : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="scale"></endpoint>
<h4 class="signature_head">TransformApplyMask.scale</h4><a class="signature-arity" href="#TransformApplyMask.scale" title="Permanent link">1</a><signature id="TransformApplyMask.scale">

```lx
TransformApplyMask.scale : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="rotation"></endpoint>
<h4 class="signature_head">TransformApplyMask.rotation</h4><a class="signature-arity" href="#TransformApplyMask.rotation" title="Permanent link">1</a><signature id="TransformApplyMask.rotation">

```lx
TransformApplyMask.rotation : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="modified"></endpoint>
<h4 class="signature_head">TransformApplyMask.modified</h4><a class="signature-arity" href="#TransformApplyMask.modified" title="Permanent link">1</a><signature id="TransformApplyMask.modified">

```lx
TransformApplyMask.modified : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/transform.modifier" class="TransformApplyMask" signature="all_modified"></endpoint>
<h4 class="signature_head">TransformApplyMask.all_modified</h4><a class="signature-arity" href="#TransformApplyMask.all_modified" title="Permanent link">1</a><signature id="TransformApplyMask.all_modified">

```lx
TransformApplyMask.all_modified : unknown
```
</signature>

> no docs found   


### TransformLinkAction
`import "luxe: system/transform.modifier" for TransformLinkAction{:lx}`
> How to preserve or not preserve the transform fields on link/unlink.

- [reset_local](#TransformLinkAction.reset_local)
- [keep_local](#TransformLinkAction.keep_local)
- [keep_world](#TransformLinkAction.keep_world)


---

<endpoint module="luxe: system/transform.modifier" class="TransformLinkAction" signature="reset_local"></endpoint>
<h4 class="signature_head">TransformLinkAction.reset_local</h4><a class="signature-arity" href="#TransformLinkAction.reset_local" title="Permanent link">1</a><signature id="TransformLinkAction.reset_local">

```lx
TransformLinkAction.reset_local : unknown
```
</signature>

> Reset fields to 0 position, 0 rotation and 1 scale.   

<endpoint module="luxe: system/transform.modifier" class="TransformLinkAction" signature="keep_local"></endpoint>
<h4 class="signature_head">TransformLinkAction.keep_local</h4><a class="signature-arity" href="#TransformLinkAction.keep_local" title="Permanent link">1</a><signature id="TransformLinkAction.keep_local">

```lx
TransformLinkAction.keep_local : unknown
```
</signature>

> Don't touch local values at all.   

<endpoint module="luxe: system/transform.modifier" class="TransformLinkAction" signature="keep_world"></endpoint>
<h4 class="signature_head">TransformLinkAction.keep_world</h4><a class="signature-arity" href="#TransformLinkAction.keep_world" title="Permanent link">1</a><signature id="TransformLinkAction.keep_world">

```lx
TransformLinkAction.keep_world : unknown
```
</signature>

> Try preserve the values how they appear in the world after transform hierarchy has been taken into consideration.
> Note that scale is on a best effort basis on unlink, and currently doesn't do anything on link.   

