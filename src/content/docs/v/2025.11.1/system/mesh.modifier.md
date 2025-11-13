---
title: "luxe: system/mesh.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/mesh.modifier"
---
- [Data](#data)   
- [InstancedMode](#instancedmode)   
- [Mesh](#mesh)   
- [System](#system)   

---


## Data
```wren
import "luxe: system/mesh.modifier" for Data
```
> no docs found

### Variables
```wren
var mesh : Asset = null
var material : Asset = null
var instanced : InstancedMode = InstancedMode.none
var own_materials : Bool = false
```

## InstancedMode
```wren
import "luxe: system/mesh.modifier" for InstancedMode
```
> no docs found

<endpoint module="luxe: system/mesh.modifier" class="InstancedMode" signature="none"></endpoint>
### InstancedMode.none
```wren
InstancedMode.none : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="InstancedMode" signature="group_auto"></endpoint>
### InstancedMode.group_auto
```wren
InstancedMode.group_auto : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="InstancedMode" signature="group_custom"></endpoint>
### InstancedMode.group_custom
```wren
InstancedMode.group_custom : unknown
```
> no docs found   


## Mesh
```wren
import "luxe: system/mesh.modifier" for Mesh
```
> no docs found

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="create(entity : Entity)"></endpoint>
### Mesh.create(.)
```wren
Mesh.create(entity : Entity) : None
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="create(entity : Entity, material : Material, mesh_lx : String)"></endpoint>
### Mesh.create(...)
```wren
Mesh.create(entity : Entity, material : Material, mesh_lx : String) : None
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="destroy(entity : Entity)"></endpoint>
### Mesh.destroy(.)
```wren
Mesh.destroy(entity : Entity) : None
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_instanced_auto_units(world : World, grid_units_cell_size : Num)"></endpoint>
### Mesh.set_instanced_auto_units(..)
```wren
Mesh.set_instanced_auto_units(world : World, grid_units_cell_size : Num) : None
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_instanced_auto_units(world : World)"></endpoint>
### Mesh.get_instanced_auto_units(.)
```wren
Mesh.get_instanced_auto_units(world : World) : Num
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="has(entity : Entity)"></endpoint>
### Mesh.has(.)
```wren
Mesh.has(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="clear(entity : Entity)"></endpoint>
### Mesh.clear(.)
```wren
Mesh.clear(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_get_element_count(entity : Entity, level : Num)"></endpoint>
### Mesh.level_get_element_count(..)
```wren
Mesh.level_get_element_count(entity : Entity, level : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_get_count(entity : Entity)"></endpoint>
### Mesh.level_get_count(.)
```wren
Mesh.level_get_count(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_set_active(entity : Entity, level : Num, disable_current : Bool)"></endpoint>
### Mesh.level_set_active(...)
```wren
Mesh.level_set_active(entity : Entity, level : Num, disable_current : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_get_active(entity : Entity)"></endpoint>
### Mesh.level_get_active(.)
```wren
Mesh.level_get_active(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_set_enabled(entity : Entity, level : Num, state : Bool)"></endpoint>
### Mesh.level_set_enabled(...)
```wren
Mesh.level_set_enabled(entity : Entity, level : Num, state : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="level_get_enabled(entity : Entity, level : Num)"></endpoint>
### Mesh.level_get_enabled(..)
```wren
Mesh.level_get_enabled(entity : Entity, level : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_asset(entity : Entity, asset_id : String)"></endpoint>
### Mesh.set_asset(..)
```wren
Mesh.set_asset(entity : Entity, asset_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_instanced_group(entity : Entity, group_id : String)"></endpoint>
### Mesh.set_instanced_group(..)
```wren
Mesh.set_instanced_group(entity : Entity, group_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_instanced_group(entity : Entity)"></endpoint>
### Mesh.get_instanced_group(.)
```wren
Mesh.get_instanced_group(entity : Entity) : String
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_instanced(entity : Entity, state : Bool)"></endpoint>
### Mesh.set_instanced(..)
```wren
Mesh.set_instanced(entity : Entity, state : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_instanced(entity : Entity)"></endpoint>
### Mesh.get_instanced(.)
```wren
Mesh.get_instanced(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_source_id(entity : Entity)"></endpoint>
### Mesh.get_source_id(.)
```wren
Mesh.get_source_id(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_default_material(entity : Entity)"></endpoint>
### Mesh.get_default_material(.)
```wren
Mesh.get_default_material(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="set_default_material(entity : Entity, material : Material)"></endpoint>
### Mesh.set_default_material(..)
```wren
Mesh.set_default_material(entity : Entity, material : Material) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_geometry(entity : Entity, level : Num, element : Num)"></endpoint>
### Mesh.get_geometry(...)
```wren
Mesh.get_geometry(entity : Entity, level : Num, element : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="get_geometry(entity : Entity)"></endpoint>
### Mesh.get_geometry(.)
```wren
Mesh.get_geometry(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: system/mesh.modifier" class="Mesh" signature="obb_intersect_ray(entity : Entity, ray_x : Num, ray_y : Num, ray_z : Num, ray_dir_x : Num, ray_dir_y : Num, ray_dir_z : Num)"></endpoint>
### Mesh.obb_intersect_ray(.......)
```wren
Mesh.obb_intersect_ray(entity : Entity, ray_x : Num, ray_y : Num, ray_z : Num, ray_dir_x : Num, ray_dir_y : Num, ray_dir_z : Num) : unknown
```
> no docs found   


## System
```wren
import "luxe: system/mesh.modifier" for System
```
> no docs found

<endpoint module="luxe: system/mesh.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   

