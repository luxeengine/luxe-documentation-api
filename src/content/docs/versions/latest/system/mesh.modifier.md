---
title: "luxe: system/mesh.modifier"
description: API version 2025.11.1
---
## `luxe: system/mesh.modifier{:lx}` module

- [Data](#data)   
- [InstancedMode](#instancedmode)   
- [Mesh](#mesh)   
- [System](#system)   

---


### Data
`import "luxe: system/mesh.modifier" for Data{:lx}`
> no docs found

- `var mesh : Asset = null{:lx}`
- `var material : Asset = null{:lx}`
- `var instanced : InstancedMode = InstancedMode.none{:lx}`
- `var own_materials : Bool = false{:lx}`


---


### InstancedMode
`import "luxe: system/mesh.modifier" for InstancedMode{:lx}`
> no docs found

- [none](#InstancedMode.none)
- [group_auto](#InstancedMode.group_auto)
- [group_custom](#InstancedMode.group_custom)


---

<endpoint module="luxe: system/mesh.modifier" class="InstancedMode" signature="none"></endpoint>
<h4 class="signature_head">InstancedMode.none</h4><a class="signature-arity" href="#InstancedMode.none" title="Permanent link">1</a><signature id="InstancedMode.none">

```lx
InstancedMode.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="InstancedMode" signature="group_auto"></endpoint>
<h4 class="signature_head">InstancedMode.group_auto</h4><a class="signature-arity" href="#InstancedMode.group_auto" title="Permanent link">1</a><signature id="InstancedMode.group_auto">

```lx
InstancedMode.group_auto : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="InstancedMode" signature="group_custom"></endpoint>
<h4 class="signature_head">InstancedMode.group_custom</h4><a class="signature-arity" href="#InstancedMode.group_custom" title="Permanent link">1</a><signature id="InstancedMode.group_custom">

```lx
InstancedMode.group_custom : unknown
```
</signature>

> no docs found   


### Mesh
`import "luxe: system/mesh.modifier" for Mesh{:lx}`
> no docs found

- [create](#Mesh.create)(**entity**: `Entity{:lx}`)
- [create](#Mesh.create+3)(**entity**: `Entity{:lx}`, **material**: `Material{:lx}`, **mesh_lx**: `String{:lx}`)
- [destroy](#Mesh.destroy)(**entity**: `Entity{:lx}`)
- [set_instanced_auto_units](#Mesh.set_instanced_auto_units+2)(**world**: `World{:lx}`, **grid_units_cell_size**: `Num{:lx}`)
- [get_instanced_auto_units](#Mesh.get_instanced_auto_units)(**world**: `World{:lx}`)
- [has](#Mesh.has)(**entity**: `Entity{:lx}`)
- [clear](#Mesh.clear)(**entity**: `Entity{:lx}`)
- [level_get_element_count](#Mesh.level_get_element_count+2)(**entity**: `Entity{:lx}`, **level**: `Num{:lx}`)
- [level_get_count](#Mesh.level_get_count)(**entity**: `Entity{:lx}`)
- [level_set_active](#Mesh.level_set_active+3)(**entity**: `Entity{:lx}`, **level**: `Num{:lx}`, **disable_current**: `Bool{:lx}`)
- [level_get_active](#Mesh.level_get_active)(**entity**: `Entity{:lx}`)
- [level_set_enabled](#Mesh.level_set_enabled+3)(**entity**: `Entity{:lx}`, **level**: `Num{:lx}`, **state**: `Bool{:lx}`)
- [level_get_enabled](#Mesh.level_get_enabled+2)(**entity**: `Entity{:lx}`, **level**: `Num{:lx}`)
- [set_asset](#Mesh.set_asset+2)(**entity**: `Entity{:lx}`, **asset_id**: `String{:lx}`)
- [set_instanced_group](#Mesh.set_instanced_group+2)(**entity**: `Entity{:lx}`, **group_id**: `String{:lx}`)
- [get_instanced_group](#Mesh.get_instanced_group)(**entity**: `Entity{:lx}`)
- [set_instanced](#Mesh.set_instanced+2)(**entity**: `Entity{:lx}`, **state**: `Bool{:lx}`)
- [get_instanced](#Mesh.get_instanced)(**entity**: `Entity{:lx}`)
- [get_source_id](#Mesh.get_source_id)(**entity**: `Entity{:lx}`)
- [get_default_material](#Mesh.get_default_material)(**entity**: `Entity{:lx}`)
- [set_default_material](#Mesh.set_default_material+2)(**entity**: `Entity{:lx}`, **material**: `Material{:lx}`)
- [get_geometry](#Mesh.get_geometry+3)(**entity**: `Entity{:lx}`, **level**: `Num{:lx}`, **element**: `Num{:lx}`)
- [get_geometry](#Mesh.get_geometry)(**entity**: `Entity{:lx}`)
- [obb_intersect_ray](#Mesh.obb_intersect_ray+7)(**entity**: `Entity{:lx}`, **ray_x**: `Num{:lx}`, **ray_y**: `Num{:lx}`, **ray_z**: `Num{:lx}`, **ray_dir_x**: `Num{:lx}`, **ray_dir_y**: `Num{:lx}`, **ray_dir_z**: `Num{:lx}`)


---

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="create(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.create</h4><a class="signature-arity" href="#Mesh.create" title="Permanent link">1</a><signature id="Mesh.create">

```lx
Mesh.create(entity : Entity) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="create(entity : Entity, material : Material, mesh_lx : String)"></endpoint>
<h4 class="signature_head">Mesh.create</h4><a class="signature-arity" href="#Mesh.create+3" title="Permanent link">3</a><signature id="Mesh.create+3">

```lx
Mesh.create(entity : Entity, material : Material, mesh_lx : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="destroy(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.destroy</h4><a class="signature-arity" href="#Mesh.destroy" title="Permanent link">1</a><signature id="Mesh.destroy">

```lx
Mesh.destroy(entity : Entity) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_instanced_auto_units(world : World, grid_units_cell_size : Num)"></endpoint>
<h4 class="signature_head">Mesh.set_instanced_auto_units</h4><a class="signature-arity" href="#Mesh.set_instanced_auto_units+2" title="Permanent link">2</a><signature id="Mesh.set_instanced_auto_units+2">

```lx
Mesh.set_instanced_auto_units(world : World, grid_units_cell_size : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_instanced_auto_units(world : World)"></endpoint>
<h4 class="signature_head">Mesh.get_instanced_auto_units</h4><a class="signature-arity" href="#Mesh.get_instanced_auto_units" title="Permanent link">1</a><signature id="Mesh.get_instanced_auto_units">

```lx
Mesh.get_instanced_auto_units(world : World) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="has(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.has</h4><a class="signature-arity" href="#Mesh.has" title="Permanent link">1</a><signature id="Mesh.has">

```lx
Mesh.has(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="clear(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.clear</h4><a class="signature-arity" href="#Mesh.clear" title="Permanent link">1</a><signature id="Mesh.clear">

```lx
Mesh.clear(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_get_element_count(entity : Entity, level : Num)"></endpoint>
<h4 class="signature_head">Mesh.level_get_element_count</h4><a class="signature-arity" href="#Mesh.level_get_element_count+2" title="Permanent link">2</a><signature id="Mesh.level_get_element_count+2">

```lx
Mesh.level_get_element_count(entity : Entity, level : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_get_count(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.level_get_count</h4><a class="signature-arity" href="#Mesh.level_get_count" title="Permanent link">1</a><signature id="Mesh.level_get_count">

```lx
Mesh.level_get_count(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_set_active(entity : Entity, level : Num, disable_current : Bool)"></endpoint>
<h4 class="signature_head">Mesh.level_set_active</h4><a class="signature-arity" href="#Mesh.level_set_active+3" title="Permanent link">3</a><signature id="Mesh.level_set_active+3">

```lx
Mesh.level_set_active(entity : Entity, level : Num, disable_current : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_get_active(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.level_get_active</h4><a class="signature-arity" href="#Mesh.level_get_active" title="Permanent link">1</a><signature id="Mesh.level_get_active">

```lx
Mesh.level_get_active(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_set_enabled(entity : Entity, level : Num, state : Bool)"></endpoint>
<h4 class="signature_head">Mesh.level_set_enabled</h4><a class="signature-arity" href="#Mesh.level_set_enabled+3" title="Permanent link">3</a><signature id="Mesh.level_set_enabled+3">

```lx
Mesh.level_set_enabled(entity : Entity, level : Num, state : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_get_enabled(entity : Entity, level : Num)"></endpoint>
<h4 class="signature_head">Mesh.level_get_enabled</h4><a class="signature-arity" href="#Mesh.level_get_enabled+2" title="Permanent link">2</a><signature id="Mesh.level_get_enabled+2">

```lx
Mesh.level_get_enabled(entity : Entity, level : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_asset(entity : Entity, asset_id : String)"></endpoint>
<h4 class="signature_head">Mesh.set_asset</h4><a class="signature-arity" href="#Mesh.set_asset+2" title="Permanent link">2</a><signature id="Mesh.set_asset+2">

```lx
Mesh.set_asset(entity : Entity, asset_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_instanced_group(entity : Entity, group_id : String)"></endpoint>
<h4 class="signature_head">Mesh.set_instanced_group</h4><a class="signature-arity" href="#Mesh.set_instanced_group+2" title="Permanent link">2</a><signature id="Mesh.set_instanced_group+2">

```lx
Mesh.set_instanced_group(entity : Entity, group_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_instanced_group(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.get_instanced_group</h4><a class="signature-arity" href="#Mesh.get_instanced_group" title="Permanent link">1</a><signature id="Mesh.get_instanced_group">

```lx
Mesh.get_instanced_group(entity : Entity) : String
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_instanced(entity : Entity, state : Bool)"></endpoint>
<h4 class="signature_head">Mesh.set_instanced</h4><a class="signature-arity" href="#Mesh.set_instanced+2" title="Permanent link">2</a><signature id="Mesh.set_instanced+2">

```lx
Mesh.set_instanced(entity : Entity, state : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_instanced(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.get_instanced</h4><a class="signature-arity" href="#Mesh.get_instanced" title="Permanent link">1</a><signature id="Mesh.get_instanced">

```lx
Mesh.get_instanced(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_source_id(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.get_source_id</h4><a class="signature-arity" href="#Mesh.get_source_id" title="Permanent link">1</a><signature id="Mesh.get_source_id">

```lx
Mesh.get_source_id(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_default_material(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.get_default_material</h4><a class="signature-arity" href="#Mesh.get_default_material" title="Permanent link">1</a><signature id="Mesh.get_default_material">

```lx
Mesh.get_default_material(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_default_material(entity : Entity, material : Material)"></endpoint>
<h4 class="signature_head">Mesh.set_default_material</h4><a class="signature-arity" href="#Mesh.set_default_material+2" title="Permanent link">2</a><signature id="Mesh.set_default_material+2">

```lx
Mesh.set_default_material(entity : Entity, material : Material) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_geometry(entity : Entity, level : Num, element : Num)"></endpoint>
<h4 class="signature_head">Mesh.get_geometry</h4><a class="signature-arity" href="#Mesh.get_geometry+3" title="Permanent link">3</a><signature id="Mesh.get_geometry+3">

```lx
Mesh.get_geometry(entity : Entity, level : Num, element : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_geometry(entity : Entity)"></endpoint>
<h4 class="signature_head">Mesh.get_geometry</h4><a class="signature-arity" href="#Mesh.get_geometry" title="Permanent link">1</a><signature id="Mesh.get_geometry">

```lx
Mesh.get_geometry(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="obb_intersect_ray(entity : Entity, ray_x : Num, ray_y : Num, ray_z : Num, ray_dir_x : Num, ray_dir_y : Num, ray_dir_z : Num)"></endpoint>
<h4 class="signature_head">Mesh.obb_intersect_ray</h4><a class="signature-arity" href="#Mesh.obb_intersect_ray+7" title="Permanent link">7</a><signature id="Mesh.obb_intersect_ray+7">

```lx
Mesh.obb_intersect_ray(entity : Entity, ray_x : Num, ray_y : Num, ray_z : Num, ray_dir_x : Num, ray_dir_y : Num, ray_dir_z : Num) : unknown
```
</signature>

> no docs found   


### System
`import "luxe: system/mesh.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/mesh.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

