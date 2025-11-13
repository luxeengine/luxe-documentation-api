---
title: "luxe: system/camera.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/camera.modifier"
---
- [Camera](#camera)   
- [CameraProjection](#cameraprojection)   
- [CameraViewType](#cameraviewtype)   
- [Data](#data)   
- [PerEntityInfo](#perentityinfo)   
- [System](#system)   

---


## Camera
```lx
import "luxe: system/camera.modifier" for Camera
```
> no docs found

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="create(entity : Any)"></endpoint>
### Camera.create(.)
```lx
Camera.create(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="destroy(entity : Any)"></endpoint>
### Camera.destroy(.)
```lx
Camera.destroy(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="has(entity : Any)"></endpoint>
### Camera.has(.)
```lx
Camera.has(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_default(world : Any)"></endpoint>
### Camera.get_default(.)
```lx
Camera.get_default(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_default(world : Any, camera : Any)"></endpoint>
### Camera.set_default(..)
```lx
Camera.set_default(world : Any, camera : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_fov_vertical(entity : Any, fov_vertical : Any)"></endpoint>
### Camera.set_fov_vertical(..)
```lx
Camera.set_fov_vertical(entity : Any, fov_vertical : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_fov_vertical(entity : Any)"></endpoint>
### Camera.get_fov_vertical(.)
```lx
Camera.get_fov_vertical(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_projection(entity : Any)"></endpoint>
### Camera.get_projection(.)
```lx
Camera.get_projection(entity : Any) : CameraProjection
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_zoom2D(entity : Entity, zoom : Num)"></endpoint>
### Camera.set_zoom2D(..)
```lx
Camera.set_zoom2D(entity : Entity, zoom : Num) : None
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_zoom2D(entity : Any)"></endpoint>
### Camera.get_zoom2D(.)
```lx
Camera.get_zoom2D(entity : Any) : Num
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_near(entity : Any)"></endpoint>
### Camera.get_near(.)
```lx
Camera.get_near(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_far(entity : Any)"></endpoint>
### Camera.get_far(.)
```lx
Camera.get_far(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_aspect(entity : Any)"></endpoint>
### Camera.get_aspect(.)
```lx
Camera.get_aspect(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_frustum(entity : Any)"></endpoint>
### Camera.get_frustum(.)
```lx
Camera.get_frustum(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="perspective(entity : Any, fov_vertical : Any, aspect : Any, near : Any, far : Any)"></endpoint>
### Camera.perspective(.....)
```lx
Camera.perspective(entity : Any, fov_vertical : Any, aspect : Any, near : Any, far : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="ortho(entity : Any, left : Any, top : Any, right : Any, bottom : Any, near : Any, far : Any)"></endpoint>
### Camera.ortho(.......)
```lx
Camera.ortho(entity : Any, left : Any, top : Any, right : Any, bottom : Any, near : Any, far : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="look_at(entity : Any, from : Any, to : Any, up : Any)"></endpoint>
### Camera.look_at(....)
```lx
Camera.look_at(entity : Any, from : Any, to : Any, up : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set2D(entity : Any, x : Any, y : Any, width : Any, height : Any, near : Any, far : Any)"></endpoint>
### Camera.set2D(.......)
```lx
Camera.set2D(entity : Any, x : Any, y : Any, width : Any, height : Any, near : Any, far : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set3D(entity : Any, fov_vertical : Any, aspect : Any, near : Any, far : Any)"></endpoint>
### Camera.set3D(.....)
```lx
Camera.set3D(entity : Any, fov_vertical : Any, aspect : Any, near : Any, far : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="screen_point_to_world(entity : Any, pos_x : Any, pos_y : Any)"></endpoint>
### Camera.screen_point_to_world(...)
```lx
Camera.screen_point_to_world(entity : Any, pos_x : Any, pos_y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="world_point_to_screen(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
### Camera.world_point_to_screen(....)
```lx
Camera.world_point_to_screen(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="world_point_to_view(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any, into : Any)"></endpoint>
### Camera.world_point_to_view(.....)
```lx
Camera.world_point_to_view(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="world_point_to_view(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
### Camera.world_point_to_view(....)
```lx
Camera.world_point_to_view(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="view_point_to_world(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
### Camera.view_point_to_world(....)
```lx
Camera.view_point_to_world(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="world_point_to_clip(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
### Camera.world_point_to_clip(....)
```lx
Camera.world_point_to_clip(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="clip_point_to_world(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any)"></endpoint>
### Camera.clip_point_to_world(....)
```lx
Camera.clip_point_to_world(entity : Any, pos_x : Any, pos_y : Any, pos_z : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_view_matrix(entity : Any, into_matrix : Any)"></endpoint>
### Camera.get_view_matrix(..)
```lx
Camera.get_view_matrix(entity : Any, into_matrix : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_projection_matrix(entity : Any, into_matrix : Any)"></endpoint>
### Camera.get_projection_matrix(..)
```lx
Camera.get_projection_matrix(entity : Any, into_matrix : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="get_view_projection_matrix(entity : Any, into_matrix : Any)"></endpoint>
### Camera.get_view_projection_matrix(..)
```lx
Camera.get_view_projection_matrix(entity : Any, into_matrix : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_view_matrix(entity : Any, matrix : Any)"></endpoint>
### Camera.set_view_matrix(..)
```lx
Camera.set_view_matrix(entity : Any, matrix : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="set_projection_matrix(entity : Any, matrix : Any)"></endpoint>
### Camera.set_projection_matrix(..)
```lx
Camera.set_projection_matrix(entity : Any, matrix : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="cull(camera : Any, render_set : Any)"></endpoint>
### Camera.cull(..)
```lx
Camera.cull(camera : Any, render_set : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="froxelize(camera : Any, slices : Any, entity_info_list : Any, cluster_image : Any, items_image : Any)"></endpoint>
### Camera.froxelize(.....)
```lx
Camera.froxelize(camera : Any, slices : Any, entity_info_list : Any, cluster_image : Any, items_image : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="cut(camera : Entity, to_camera : Entity)"></endpoint>
### Camera.cut(..)
```lx
Camera.cut(camera : Entity, to_camera : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="blend(camera : Entity, from_camera : Entity, to_camera : Entity, t : Num)"></endpoint>
### Camera.blend(....)
```lx
Camera.blend(camera : Entity, from_camera : Entity, to_camera : Entity, t : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="Camera" signature="blend(camera : Entity, to_camera : Entity, t : Num)"></endpoint>
### Camera.blend(...)
```lx
Camera.blend(camera : Entity, to_camera : Entity, t : Num) : unknown
```
> no docs found   


## CameraProjection
```lx
import "luxe: system/camera.modifier" for CameraProjection
```
> no docs found

<endpoint module="luxe: system/camera.modifier" class="CameraProjection" signature="ortho"></endpoint>
### CameraProjection.ortho
```lx
CameraProjection.ortho : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="CameraProjection" signature="perspective"></endpoint>
### CameraProjection.perspective
```lx
CameraProjection.perspective : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="CameraProjection" signature="custom"></endpoint>
### CameraProjection.custom
```lx
CameraProjection.custom : unknown
```
> no docs found   


## CameraViewType
```lx
import "luxe: system/camera.modifier" for CameraViewType
```
> no docs found

<endpoint module="luxe: system/camera.modifier" class="CameraViewType" signature="view_2D"></endpoint>
### CameraViewType.view_2D
```lx
CameraViewType.view_2D : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="CameraViewType" signature="view_3D"></endpoint>
### CameraViewType.view_3D
```lx
CameraViewType.view_3D : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="CameraViewType" signature="custom"></endpoint>
### CameraViewType.custom
```lx
CameraViewType.custom : unknown
```
> no docs found   


## Data
```lx
import "luxe: system/camera.modifier" for Data
```
> no docs found

### Variables
```lx
var align_to_view : Num = 0
var kind : CameraViewType = CameraViewType.view_2D
var offset : Float2 = [0, 0]
var size : Float2 = [0, 0]
var near_2d : Num = -2000
var far_2d : Num = 2000
var zoom : Num = 1
var fov_vertical : Num = 60
var aspect : Num = 0
var near_3d : Num = 0.1
var far_3d : Num = 100
var default : Bool = false
var debug_draw : Bool = false
var debug_color : Color = [0.965, 0, 0.486, 1]
var debug_thickness : Num = 1
var debug_pinned : Bool = false
```

## PerEntityInfo
```lx
import "luxe: system/camera.modifier" for PerEntityInfo
```
> no docs found

### Variables
```lx
var entity : Num = 0
var window : Any = null
var preview : Any = null
var world_edit : Any = null
```
<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="new(in_entity : Any)"></endpoint>
### PerEntityInfo.new(.)
```lx
PerEntityInfo.new(in_entity : Any) : PerEntityInfo
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="destroy()"></endpoint>
### PerEntityInfo.destroy(.)
```lx
PerEntityInfo.destroy() : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="show(state : Bool)"></endpoint>
### PerEntityInfo.show(.)
```lx
PerEntityInfo.show(state : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="visible"></endpoint>
### PerEntityInfo.visible
```lx
PerEntityInfo.visible : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="PerEntityInfo" signature="update()"></endpoint>
### PerEntityInfo.update(.)
```lx
PerEntityInfo.update() : unknown
```
> no docs found   


## System
```lx
import "luxe: system/camera.modifier" for System
```
> no docs found

### Variables
```lx
var draw : Draw = null
var style : null = PathStyle.new
var window : Any = null
var preview : Any = null
var world_edit : Any = null
var current_selection : PerEntityInfo = null
```
<endpoint module="luxe: system/camera.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```lx
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_init(world : World)"></endpoint>
### System.editor_init(.)
```lx
System.editor_init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```lx
System.init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_attach(entity : Entity, data : Data)"></endpoint>
### System.editor_attach(..)
```lx
System.editor_attach(entity : Entity, data : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_detach(entity : Entity, data : Data)"></endpoint>
### System.editor_detach(..)
```lx
System.editor_detach(entity : Entity, data : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="tick(delta : Num)"></endpoint>
### System.tick(.)
```lx
System.tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
### System.editor_change(..)
```lx
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
> no docs found   

<endpoint module="luxe: system/camera.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
### System.editor_tick(.)
```lx
System.editor_tick(delta : Num) : unknown
```
> no docs found   

