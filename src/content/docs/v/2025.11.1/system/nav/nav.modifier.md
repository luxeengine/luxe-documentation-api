---
title: "luxe: system/nav/nav.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/nav/nav.modifier"
---
- [Data](#data)   
- [Nav](#nav)   
- [Partition](#partition)   
- [System](#system)   

---


## Data
```wren
import "luxe: system/nav/nav.modifier" for Data
```
> no docs found

### Variables
```wren
var rebuild : Num = 1
var mesh : Asset = null
var tile_size : Num = 32
var cell_size : Num = 0.3
var cell_height : Num = 0.2
var height : Num = 2
var radius : Num = 0.6
var max_climb : Num = 0.9
var max_slope : Num = 45
var min_region_size : Num = 8
var merged_region_size : Num = 20
var max_edge_length : Num = 12
var max_edge_error : Num = 1.3
var verts_per_poly : Num = 6
var detail_sample_distance : Num = 6
var detail_sample_max_error : Num = 1
var partition : Partition = Partition.watershed
var no_low_hanging : Bool = true
var no_ledge_spans : Bool = true
var no_walkable_low_spans : Bool = true
var debug_draw : Bool = false
var keep_debug_data : Bool = false
```

## Nav
```wren
import "luxe: system/nav/nav.modifier" for Nav
```
> no docs found

<endpoint module="luxe: system/nav/nav.modifier" class="Nav" signature="raycast(entity : Entity, start : Float3, end : Float3, extents : Float3)"></endpoint>
### Nav.raycast(....)
```wren
Nav.raycast(entity : Entity, start : Float3, end : Float3, extents : Float3) : Float3
```
> no docs found   

<endpoint module="luxe: system/nav/nav.modifier" class="Nav" signature="nearest_point(entity : Entity, start : Float3, extents : Float3)"></endpoint>
### Nav.nearest_point(...)
```wren
Nav.nearest_point(entity : Entity, start : Float3, extents : Float3) : Float3
```
> no docs found   

<endpoint module="luxe: system/nav/nav.modifier" class="Nav" signature="get_path(entity : Entity, start : Float3, end : Float3, extents : Float3)"></endpoint>
### Nav.get_path(....)
```wren
Nav.get_path(entity : Entity, start : Float3, end : Float3, extents : Float3) : List
```
> no docs found   


## Partition
```wren
import "luxe: system/nav/nav.modifier" for Partition
```
> no docs found

<endpoint module="luxe: system/nav/nav.modifier" class="Partition" signature="watershed"></endpoint>
### Partition.watershed
```wren
Partition.watershed : unknown
```
> no docs found   

<endpoint module="luxe: system/nav/nav.modifier" class="Partition" signature="monotone"></endpoint>
### Partition.monotone
```wren
Partition.monotone : unknown
```
> no docs found   

<endpoint module="luxe: system/nav/nav.modifier" class="Partition" signature="layers"></endpoint>
### Partition.layers
```wren
Partition.layers : unknown
```
> no docs found   


## System
```wren
import "luxe: system/nav/nav.modifier" for System
```
> no docs found

<endpoint module="luxe: system/nav/nav.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   

