---
title: "luxe: system/camera.modifier"
description: API version 2025.11.1
---
## `luxe: system/camera.modifier{:lx}` module

- [Camera](#camera)   
- [CameraProjection](#cameraprojection)   
- [CameraViewType](#cameraviewtype)   
- [Data](#data)   
- [PerEntityInfo](#perentityinfo)   
- [System](#system)   

---


### Camera
`import "luxe: system/camera.modifier" for Camera{:lx}`
> no docs found

- [create](#Camera.create)(**entity**: `Any{:lx}`)
- [destroy](#Camera.destroy)(**entity**: `Any{:lx}`)
- [has](#Camera.has)(**entity**: `Any{:lx}`)
- [get_default](#Camera.get_default)(**world**: `Any{:lx}`)
- [set_default](#Camera.set_default+2)(**world**: `Any{:lx}`, **camera**: `Any{:lx}`)
- [set_fov_vertical](#Camera.set_fov_vertical+2)(**entity**: `Any{:lx}`, **fov_vertical**: `Any{:lx}`)
- [get_fov_vertical](#Camera.get_fov_vertical)(**entity**: `Any{:lx}`)
- [get_projection](#Camera.get_projection)(**entity**: `Any{:lx}`)
- [set_zoom2D](#Camera.set_zoom2D+2)(**entity**: `Entity{:lx}`, **zoom**: `Num{:lx}`)
- [get_zoom2D](#Camera.get_zoom2D)(**entity**: `Any{:lx}`)
- [get_near](#Camera.get_near)(**entity**: `Any{:lx}`)
- [get_far](#Camera.get_far)(**entity**: `Any{:lx}`)
- [get_aspect](#Camera.get_aspect)(**entity**: `Any{:lx}`)
- [get_frustum](#Camera.get_frustum)(**entity**: `Any{:lx}`)
- [perspective](#Camera.perspective+5)(**entity**: `Any{:lx}`, **fov_vertical**: `Any{:lx}`, **aspect**: `Any{:lx}`, **near**: `Any{:lx}`, **far**: `Any{:lx}`)
- [ortho](#Camera.ortho+7)(**entity**: `Any{:lx}`, **left**: `Any{:lx}`, **top**: `Any{:lx}`, **right**: `Any{:lx}`, **bottom**: `Any{:lx}`, **near**: `Any{:lx}`, **far**: `Any{:lx}`)
- [look_at](#Camera.look_at+4)(**entity**: `Any{:lx}`, **from**: `Any{:lx}`, **to**: `Any{:lx}`, **up**: `Any{:lx}`)
- [set2D](#Camera.set2D+7)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **width**: `Any{:lx}`, **height**: `Any{:lx}`, **near**: `Any{:lx}`, **far**: `Any{:lx}`)
- [set3D](#Camera.set3D+5)(**entity**: `Any{:lx}`, **fov_vertical**: `Any{:lx}`, **aspect**: `Any{:lx}`, **near**: `Any{:lx}`, **far**: `Any{:lx}`)
- [screen_point_to_world](#Camera.screen_point_to_world+3)(**entity**: `Any{:lx}`, **pos_x**: `Any{:lx}`, **pos_y**: `Any{:lx}`)
- [world_point_to_screen](#Camera.world_point_to_screen+4)(**entity**: `Any{:lx}`, **pos_x**: `Any{:lx}`, **pos_y**: `Any{:lx}`, **pos_z**: `Any{:lx}`)
- [world_point_to_view](#Camera.world_point_to_view+5)(**entity**: `Any{:lx}`, **pos_x**: `Any{:lx}`, **pos_y**: `Any{:lx}`, **pos_z**: `Any{:lx}`, **into**: `Any{:lx}`)
- [world_point_to_view](#Camera.world_point_to_view+4)(**entity**: `Any{:lx}`, **pos_x**: `Any{:lx}`, **pos_y**: `Any{:lx}`, **pos_z**: `Any{:lx}`)
- [view_point_to_world](#Camera.view_point_to_world+4)(**entity**: `Any{:lx}`, **pos_x**: `Any{:lx}`, **pos_y**: `Any{:lx}`, **pos_z**: `Any{:lx}`)
- [world_point_to_clip](#Camera.world_point_to_clip+4)(**entity**: `Any{:lx}`, **pos_x**: `Any{:lx}`, **pos_y**: `Any{:lx}`, **pos_z**: `Any{:lx}`)
- [clip_point_to_world](#Camera.clip_point_to_world+4)(**entity**: `Any{:lx}`, **pos_x**: `Any{:lx}`, **pos_y**: `Any{:lx}`, **pos_z**: `Any{:lx}`)
- [get_view_matrix](#Camera.get_view_matrix+2)(**entity**: `Any{:lx}`, **into_matrix**: `Any{:lx}`)
- [get_projection_matrix](#Camera.get_projection_matrix+2)(**entity**: `Any{:lx}`, **into_matrix**: `Any{:lx}`)
- [get_view_projection_matrix](#Camera.get_view_projection_matrix+2)(**entity**: `Any{:lx}`, **into_matrix**: `Any{:lx}`)
- [set_view_matrix](#Camera.set_view_matrix+2)(**entity**: `Any{:lx}`, **matrix**: `Any{:lx}`)
- [set_projection_matrix](#Camera.set_projection_matrix+2)(**entity**: `Any{:lx}`, **matrix**: `Any{:lx}`)
- [cull](#Camera.cull+2)(**camera**: `Any{:lx}`, **render_set**: `Any{:lx}`)
- [froxelize](#Camera.froxelize+5)(**camera**: `Any{:lx}`, **slices**: `Any{:lx}`, **entity_info_list**: `Any{:lx}`, **cluster_image**: `Any{:lx}`, **items_image**: `Any{:lx}`)
- [cut](#Camera.cut+2)(**camera**: `Entity{:lx}`, **to_camera**: `Entity{:lx}`)
- [blend](#Camera.blend+4)(**camera**: `Entity{:lx}`, **from_camera**: `Entity{:lx}`, **to_camera**: `Entity{:lx}`, **t**: `Num{:lx}`)
- [blend](#Camera.blend+3)(**camera**: `Entity{:lx}`, **to_camera**: `Entity{:lx}`, **t**: `Num{:lx}`)


---

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="create(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.create</h4><a class="signature-arity" href="#Camera.create" title="Permanent link">1</a><signature id="Camera.create">

```lx
Camera.create(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="destroy(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.destroy</h4><a class="signature-arity" href="#Camera.destroy" title="Permanent link">1</a><signature id="Camera.destroy">

```lx
Camera.destroy(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="has(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.has</h4><a class="signature-arity" href="#Camera.has" title="Permanent link">1</a><signature id="Camera.has">

```lx
Camera.has(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_default(world : Any)"></endpoint>
<h4 class="signature_head">Camera.get_default</h4><a class="signature-arity" href="#Camera.get_default" title="Permanent link">1</a><signature id="Camera.get_default">

```lx
Camera.get_default(world : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_default(world : Any, camera : Any)"></endpoint>
<h4 class="signature_head">Camera.set_default</h4><a class="signature-arity" href="#Camera.set_default+2" title="Permanent link">2</a><signature id="Camera.set_default+2">

```lx
Camera.set_default(world : Any, camera : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_fov_vertical(entity : Any, fov_vertical : Any)"></endpoint>
<h4 class="signature_head">Camera.set_fov_vertical</h4><a class="signature-arity" href="#Camera.set_fov_vertical+2" title="Permanent link">2</a><signature id="Camera.set_fov_vertical+2">

```lx
Camera.set_fov_vertical(entity : Any, fov_vertical : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_fov_vertical(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.get_fov_vertical</h4><a class="signature-arity" href="#Camera.get_fov_vertical" title="Permanent link">1</a><signature id="Camera.get_fov_vertical">

```lx
Camera.get_fov_vertical(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_projection(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.get_projection</h4><a class="signature-arity" href="#Camera.get_projection" title="Permanent link">1</a><signature id="Camera.get_projection">

```lx
Camera.get_projection(entity : Any) : CameraProjection
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_zoom2D(entity : Entity, zoom : Num)"></endpoint>
<h4 class="signature_head">Camera.set_zoom2D</h4><a class="signature-arity" href="#Camera.set_zoom2D+2" title="Permanent link">2</a><signature id="Camera.set_zoom2D+2">

```lx
Camera.set_zoom2D(entity : Entity, zoom : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_zoom2D(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.get_zoom2D</h4><a class="signature-arity" href="#Camera.get_zoom2D" title="Permanent link">1</a><signature id="Camera.get_zoom2D">

```lx
Camera.get_zoom2D(entity : Any) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_near(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.get_near</h4><a class="signature-arity" href="#Camera.get_near" title="Permanent link">1</a><signature id="Camera.get_near">

```lx
Camera.get_near(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_far(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.get_far</h4><a class="signature-arity" href="#Camera.get_far" title="Permanent link">1</a><signature id="Camera.get_far">

```lx
Camera.get_far(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_aspect(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.get_aspect</h4><a class="signature-arity" href="#Camera.get_aspect" title="Permanent link">1</a><signature id="Camera.get_aspect">

```lx
Camera.get_aspect(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_frustum(entity : Any)"></endpoint>
<h4 class="signature_head">Camera.get_frustum</h4><a class="signature-arity" href="#Camera.get_frustum" title="Permanent link">1</a><signature id="Camera.get_frustum">

```lx
Camera.get_frustum(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="perspective(entity : Any, fov_vertical : Any, aspect : Any, near : Any, far : Any)"></endpoint>
<h4 class="signature_head">Camera.perspective</h4><a class="signature-arity" href="#Camera.perspective+5" title="Permanent link">5</a><signature id="Camera.perspective+5">

```lx
Camera.perspective(entity : Any, fov_vertical : Any, aspect : Any, near : Any, far : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="ortho(entity : Any, left : Any, top : Any, right : Any, bottom : Any, near : Any, far : Any)"></endpoint>
<h4 class="signature_head">Camera.ortho</h4><a class="signature-arity" href="#Camera.ortho+7" title="Permanent link">7</a><signature id="Camera.ortho+7">

```lx
Camera.ortho(entity : Any, left : Any, top : Any, right : Any, bottom : Any, near : Any, far : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="look_at(entity : Any, from : Any, to : Any, up : Any)"></endpoint>
<h4 class="signature_head">Camera.look_at</h4><a class="signature-arity" href="#Camera.look_at+4" title="Permanent link">4</a><signature id="Camera.look_at+4">

```lx
Camera.look_at(entity : Any, from : Any, to : Any, up : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set2D(entity : Any, x : Any, y : Any, width : Any, height : Any, near : Any, far : Any)"></endpoint>
<h4 class="signature_head">Camera.set2D</h4><a class="signature-arity" href="#Camera.set2D+7" title="Permanent link">7</a><signature id="Camera.set2D+7">

```lx
Camera.set2D(entity : Any, x : Any, y : Any, width : Any, height : Any, near : Any, far : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set3D(entity : Any, fov_vertical : Any, aspect : Any, near : Any, far : Any)"></endpoint>
<h4 class="signature_head">Camera.set3D</h4><a class="signature-arity" href="#Camera.set3D+5" title="Permanent link">5</a><signature id="Camera.set3D+5">

```lx
Camera.set3D(entity : Any, fov_vertical : Any, aspect : Any, near : Any, far : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="screen_point_to_world(entity : Any, pos_x : Any, pos_y : Any)"></endpoint>
<h4 class="signature_head">Camera.screen_point_to_world</h4><a class="signature-arity" href="#Camera.screen_point_to_world+3" title="Permanent link">3</a><signature id="Camera.screen_point_to_world+3">

```lx
Camera.screen_point_to_world(entity : Any, pos_x : Any, pos_y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="world_point_to_screen(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
<h4 class="signature_head">Camera.world_point_to_screen</h4><a class="signature-arity" href="#Camera.world_point_to_screen+4" title="Permanent link">4</a><signature id="Camera.world_point_to_screen+4">

```lx
Camera.world_point_to_screen(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="world_point_to_view(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any, into : Any)"></endpoint>
<h4 class="signature_head">Camera.world_point_to_view</h4><a class="signature-arity" href="#Camera.world_point_to_view+5" title="Permanent link">5</a><signature id="Camera.world_point_to_view+5">

```lx
Camera.world_point_to_view(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any, into : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="world_point_to_view(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
<h4 class="signature_head">Camera.world_point_to_view</h4><a class="signature-arity" href="#Camera.world_point_to_view+4" title="Permanent link">4</a><signature id="Camera.world_point_to_view+4">

```lx
Camera.world_point_to_view(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="view_point_to_world(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
<h4 class="signature_head">Camera.view_point_to_world</h4><a class="signature-arity" href="#Camera.view_point_to_world+4" title="Permanent link">4</a><signature id="Camera.view_point_to_world+4">

```lx
Camera.view_point_to_world(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="world_point_to_clip(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
<h4 class="signature_head">Camera.world_point_to_clip</h4><a class="signature-arity" href="#Camera.world_point_to_clip+4" title="Permanent link">4</a><signature id="Camera.world_point_to_clip+4">

```lx
Camera.world_point_to_clip(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="clip_point_to_world(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
<h4 class="signature_head">Camera.clip_point_to_world</h4><a class="signature-arity" href="#Camera.clip_point_to_world+4" title="Permanent link">4</a><signature id="Camera.clip_point_to_world+4">

```lx
Camera.clip_point_to_world(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_view_matrix(entity : Any, into_matrix : Any)"></endpoint>
<h4 class="signature_head">Camera.get_view_matrix</h4><a class="signature-arity" href="#Camera.get_view_matrix+2" title="Permanent link">2</a><signature id="Camera.get_view_matrix+2">

```lx
Camera.get_view_matrix(entity : Any, into_matrix : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_projection_matrix(entity : Any, into_matrix : Any)"></endpoint>
<h4 class="signature_head">Camera.get_projection_matrix</h4><a class="signature-arity" href="#Camera.get_projection_matrix+2" title="Permanent link">2</a><signature id="Camera.get_projection_matrix+2">

```lx
Camera.get_projection_matrix(entity : Any, into_matrix : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_view_projection_matrix(entity : Any, into_matrix : Any)"></endpoint>
<h4 class="signature_head">Camera.get_view_projection_matrix</h4><a class="signature-arity" href="#Camera.get_view_projection_matrix+2" title="Permanent link">2</a><signature id="Camera.get_view_projection_matrix+2">

```lx
Camera.get_view_projection_matrix(entity : Any, into_matrix : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_view_matrix(entity : Any, matrix : Any)"></endpoint>
<h4 class="signature_head">Camera.set_view_matrix</h4><a class="signature-arity" href="#Camera.set_view_matrix+2" title="Permanent link">2</a><signature id="Camera.set_view_matrix+2">

```lx
Camera.set_view_matrix(entity : Any, matrix : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_projection_matrix(entity : Any, matrix : Any)"></endpoint>
<h4 class="signature_head">Camera.set_projection_matrix</h4><a class="signature-arity" href="#Camera.set_projection_matrix+2" title="Permanent link">2</a><signature id="Camera.set_projection_matrix+2">

```lx
Camera.set_projection_matrix(entity : Any, matrix : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="cull(camera : Any, render_set : Any)"></endpoint>
<h4 class="signature_head">Camera.cull</h4><a class="signature-arity" href="#Camera.cull+2" title="Permanent link">2</a><signature id="Camera.cull+2">

```lx
Camera.cull(camera : Any, render_set : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="froxelize(camera : Any, slices : Any, entity_info_list : Any, cluster_image : Any, items_image : Any)"></endpoint>
<h4 class="signature_head">Camera.froxelize</h4><a class="signature-arity" href="#Camera.froxelize+5" title="Permanent link">5</a><signature id="Camera.froxelize+5">

```lx
Camera.froxelize(camera : Any, slices : Any, entity_info_list : Any, cluster_image : Any, items_image : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="cut(camera : Entity, to_camera : Entity)"></endpoint>
<h4 class="signature_head">Camera.cut</h4><a class="signature-arity" href="#Camera.cut+2" title="Permanent link">2</a><signature id="Camera.cut+2">

```lx
Camera.cut(camera : Entity, to_camera : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="blend(camera : Entity, from_camera : Entity, to_camera : Entity, t : Num)"></endpoint>
<h4 class="signature_head">Camera.blend</h4><a class="signature-arity" href="#Camera.blend+4" title="Permanent link">4</a><signature id="Camera.blend+4">

```lx
Camera.blend(camera : Entity, from_camera : Entity, to_camera : Entity, t : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="blend(camera : Entity, to_camera : Entity, t : Num)"></endpoint>
<h4 class="signature_head">Camera.blend</h4><a class="signature-arity" href="#Camera.blend+3" title="Permanent link">3</a><signature id="Camera.blend+3">

```lx
Camera.blend(camera : Entity, to_camera : Entity, t : Num) : unknown
```
</signature>

> no docs found   


### CameraProjection
`import "luxe: system/camera.modifier" for CameraProjection{:lx}`
> no docs found

- [ortho](#CameraProjection.ortho)
- [perspective](#CameraProjection.perspective)
- [custom](#CameraProjection.custom)


---

<endpoint module="luxe: system/camera.modifier" class="CameraProjection" signature="ortho"></endpoint>
<h4 class="signature_head">CameraProjection.ortho</h4><a class="signature-arity" href="#CameraProjection.ortho" title="Permanent link">1</a><signature id="CameraProjection.ortho">

```lx
CameraProjection.ortho : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="CameraProjection" signature="perspective"></endpoint>
<h4 class="signature_head">CameraProjection.perspective</h4><a class="signature-arity" href="#CameraProjection.perspective" title="Permanent link">1</a><signature id="CameraProjection.perspective">

```lx
CameraProjection.perspective : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="CameraProjection" signature="custom"></endpoint>
<h4 class="signature_head">CameraProjection.custom</h4><a class="signature-arity" href="#CameraProjection.custom" title="Permanent link">1</a><signature id="CameraProjection.custom">

```lx
CameraProjection.custom : unknown
```
</signature>

> no docs found   


### CameraViewType
`import "luxe: system/camera.modifier" for CameraViewType{:lx}`
> no docs found

- [view_2D](#CameraViewType.view_2D)
- [view_3D](#CameraViewType.view_3D)
- [custom](#CameraViewType.custom)


---

<endpoint module="luxe: system/camera.modifier" class="CameraViewType" signature="view_2D"></endpoint>
<h4 class="signature_head">CameraViewType.view_2D</h4><a class="signature-arity" href="#CameraViewType.view_2D" title="Permanent link">1</a><signature id="CameraViewType.view_2D">

```lx
CameraViewType.view_2D : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="CameraViewType" signature="view_3D"></endpoint>
<h4 class="signature_head">CameraViewType.view_3D</h4><a class="signature-arity" href="#CameraViewType.view_3D" title="Permanent link">1</a><signature id="CameraViewType.view_3D">

```lx
CameraViewType.view_3D : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="CameraViewType" signature="custom"></endpoint>
<h4 class="signature_head">CameraViewType.custom</h4><a class="signature-arity" href="#CameraViewType.custom" title="Permanent link">1</a><signature id="CameraViewType.custom">

```lx
CameraViewType.custom : unknown
```
</signature>

> no docs found   


### Data
`import "luxe: system/camera.modifier" for Data{:lx}`
> no docs found

- `var align_to_view : Num = 0{:lx}`
- `var kind : CameraViewType = CameraViewType.view_2D{:lx}`
- `var offset : Float2 = [0, 0]{:lx}`
- `var size : Float2 = [0, 0]{:lx}`
- `var near_2d : Num = -2000{:lx}`
- `var far_2d : Num = 2000{:lx}`
- `var zoom : Num = 1{:lx}`
- `var fov_vertical : Num = 60{:lx}`
- `var aspect : Num = 0{:lx}`
- `var near_3d : Num = 0.1{:lx}`
- `var far_3d : Num = 100{:lx}`
- `var default : Bool = false{:lx}`
- `var debug_draw : Bool = false{:lx}`
- `var debug_color : Color = [0.965, 0, 0.486, 1]{:lx}`
- `var debug_thickness : Num = 1{:lx}`
- `var debug_pinned : Bool = false{:lx}`


---


### PerEntityInfo
`import "luxe: system/camera.modifier" for PerEntityInfo{:lx}`
> no docs found

- `var entity : Num = 0{:lx}`
- `var window : Any = null{:lx}`
- `var preview : Any = null{:lx}`
- `var world_edit : Any = null{:lx}`
- [new](#PerEntityInfo.new)(**in_entity**: `Any{:lx}`)
- [destroy](#PerEntityInfo.destroy)()
- [show](#PerEntityInfo.show)(**state**: `Bool{:lx}`)
- [visible](#PerEntityInfo.visible)
- [update](#PerEntityInfo.update)()


---

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="new(in_entity : Any)"></endpoint>
<h4 class="signature_head">PerEntityInfo.new</h4><a class="signature-arity" href="#PerEntityInfo.new" title="Permanent link">1</a><signature id="PerEntityInfo.new">

```lx
PerEntityInfo.new(in_entity : Any) : PerEntityInfo
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="destroy()"></endpoint>
<h4 class="signature_head">PerEntityInfo.destroy</h4><a class="signature-arity" href="#PerEntityInfo.destroy" title="Permanent link">1</a><signature id="PerEntityInfo.destroy">

```lx
PerEntityInfo.destroy() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="show(state : Bool)"></endpoint>
<h4 class="signature_head">PerEntityInfo.show</h4><a class="signature-arity" href="#PerEntityInfo.show" title="Permanent link">1</a><signature id="PerEntityInfo.show">

```lx
PerEntityInfo.show(state : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="visible"></endpoint>
<h4 class="signature_head">PerEntityInfo.visible</h4><a class="signature-arity" href="#PerEntityInfo.visible" title="Permanent link">1</a><signature id="PerEntityInfo.visible">

```lx
PerEntityInfo.visible : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="update()"></endpoint>
<h4 class="signature_head">PerEntityInfo.update</h4><a class="signature-arity" href="#PerEntityInfo.update" title="Permanent link">1</a><signature id="PerEntityInfo.update">

```lx
PerEntityInfo.update() : unknown
```
</signature>

> no docs found   


### System
`import "luxe: system/camera.modifier" for System{:lx}`
> no docs found

- `var draw : Draw = null{:lx}`
- `var style : null = PathStyle.new{:lx}`
- `var window : Any = null{:lx}`
- `var preview : Any = null{:lx}`
- `var world_edit : Any = null{:lx}`
- `var current_selection : PerEntityInfo = null{:lx}`
- [new](#System.new)(**world**: `World{:lx}`)
- [editor_init](#System.editor_init)(**world**: `World{:lx}`)
- [init](#System.init)(**world**: `World{:lx}`)
- [editor_attach](#System.editor_attach+2)(**entity**: `Entity{:lx}`, **data**: `Data{:lx}`)
- [editor_detach](#System.editor_detach+2)(**entity**: `Entity{:lx}`, **data**: `Data{:lx}`)
- [tick](#System.tick)(**delta**: `Num{:lx}`)
- [editor_change](#System.editor_change+2)(**entity**: `Entity{:lx}`, **change**: `ModifierChange{:lx}`)
- [editor_tick](#System.editor_tick)(**delta**: `Num{:lx}`)


---

<endpoint module="luxe: system/camera.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_init(world : World)"></endpoint>
<h4 class="signature_head">System.editor_init</h4><a class="signature-arity" href="#System.editor_init" title="Permanent link">1</a><signature id="System.editor_init">

```lx
System.editor_init(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="init(world : World)"></endpoint>
<h4 class="signature_head">System.init</h4><a class="signature-arity" href="#System.init" title="Permanent link">1</a><signature id="System.init">

```lx
System.init(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_attach(entity : Entity, data : Data)"></endpoint>
<h4 class="signature_head">System.editor_attach</h4><a class="signature-arity" href="#System.editor_attach+2" title="Permanent link">2</a><signature id="System.editor_attach+2">

```lx
System.editor_attach(entity : Entity, data : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_detach(entity : Entity, data : Data)"></endpoint>
<h4 class="signature_head">System.editor_detach</h4><a class="signature-arity" href="#System.editor_detach+2" title="Permanent link">2</a><signature id="System.editor_detach+2">

```lx
System.editor_detach(entity : Entity, data : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="tick(delta : Num)"></endpoint>
<h4 class="signature_head">System.tick</h4><a class="signature-arity" href="#System.tick" title="Permanent link">1</a><signature id="System.tick">

```lx
System.tick(delta : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
<h4 class="signature_head">System.editor_change</h4><a class="signature-arity" href="#System.editor_change+2" title="Permanent link">2</a><signature id="System.editor_change+2">

```lx
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
<h4 class="signature_head">System.editor_tick</h4><a class="signature-arity" href="#System.editor_tick" title="Permanent link">1</a><signature id="System.editor_tick">

```lx
System.editor_tick(delta : Num) : unknown
```
</signature>

> no docs found   

