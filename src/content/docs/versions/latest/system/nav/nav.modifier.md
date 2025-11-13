---
title: "luxe: system/nav/nav.modifier"
description: API version 2025.11.1
---
## `luxe: system/nav/nav.modifier{:lx}` module

- [Data](#data)   
- [Nav](#nav)   
- [Partition](#partition)   
- [System](#system)   

---


### Data
`import "luxe: system/nav/nav.modifier" for Data{:lx}`
> no docs found

- `var rebuild : Num = 1{:lx}`
- `var mesh : Asset = null{:lx}`
- `var tile_size : Num = 32{:lx}`
- `var cell_size : Num = 0.3{:lx}`
- `var cell_height : Num = 0.2{:lx}`
- `var height : Num = 2{:lx}`
- `var radius : Num = 0.6{:lx}`
- `var max_climb : Num = 0.9{:lx}`
- `var max_slope : Num = 45{:lx}`
- `var min_region_size : Num = 8{:lx}`
- `var merged_region_size : Num = 20{:lx}`
- `var max_edge_length : Num = 12{:lx}`
- `var max_edge_error : Num = 1.3{:lx}`
- `var verts_per_poly : Num = 6{:lx}`
- `var detail_sample_distance : Num = 6{:lx}`
- `var detail_sample_max_error : Num = 1{:lx}`
- `var partition : Partition = Partition.watershed{:lx}`
- `var no_low_hanging : Bool = true{:lx}`
- `var no_ledge_spans : Bool = true{:lx}`
- `var no_walkable_low_spans : Bool = true{:lx}`
- `var debug_draw : Bool = false{:lx}`
- `var keep_debug_data : Bool = false{:lx}`


---


### Nav
`import "luxe: system/nav/nav.modifier" for Nav{:lx}`
> no docs found

- [raycast](#Nav.raycast+4)(**entity**: `Entity{:lx}`, **start**: `Float3{:lx}`, **end**: `Float3{:lx}`, **extents**: `Float3{:lx}`)
- [nearest_point](#Nav.nearest_point+3)(**entity**: `Entity{:lx}`, **start**: `Float3{:lx}`, **extents**: `Float3{:lx}`)
- [get_path](#Nav.get_path+4)(**entity**: `Entity{:lx}`, **start**: `Float3{:lx}`, **end**: `Float3{:lx}`, **extents**: `Float3{:lx}`)


---

<endpoint module="luxe: system/nav/nav.modifier" class="Nav" signature="raycast(entity : Entity, start : Float3, end : Float3, extents : Float3)"></endpoint>
<h4 class="signature_head">Nav.raycast</h4><a class="signature-arity" href="#Nav.raycast+4" title="Permanent link">4</a><signature id="Nav.raycast+4">

```lx
Nav.raycast(entity : Entity, start : Float3, end : Float3, extents : Float3) : Float3
```
</signature>

> no docs found   

<endpoint module="luxe: system/nav/nav.modifier" class="Nav" signature="nearest_point(entity : Entity, start : Float3, extents : Float3)"></endpoint>
<h4 class="signature_head">Nav.nearest_point</h4><a class="signature-arity" href="#Nav.nearest_point+3" title="Permanent link">3</a><signature id="Nav.nearest_point+3">

```lx
Nav.nearest_point(entity : Entity, start : Float3, extents : Float3) : Float3
```
</signature>

> no docs found   

<endpoint module="luxe: system/nav/nav.modifier" class="Nav" signature="get_path(entity : Entity, start : Float3, end : Float3, extents : Float3)"></endpoint>
<h4 class="signature_head">Nav.get_path</h4><a class="signature-arity" href="#Nav.get_path+4" title="Permanent link">4</a><signature id="Nav.get_path+4">

```lx
Nav.get_path(entity : Entity, start : Float3, end : Float3, extents : Float3) : List
```
</signature>

> no docs found   


### Partition
`import "luxe: system/nav/nav.modifier" for Partition{:lx}`
> no docs found

- [watershed](#Partition.watershed)
- [monotone](#Partition.monotone)
- [layers](#Partition.layers)


---

<endpoint module="luxe: system/nav/nav.modifier" class="Partition" signature="watershed"></endpoint>
<h4 class="signature_head">Partition.watershed</h4><a class="signature-arity" href="#Partition.watershed" title="Permanent link">1</a><signature id="Partition.watershed">

```lx
Partition.watershed : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/nav/nav.modifier" class="Partition" signature="monotone"></endpoint>
<h4 class="signature_head">Partition.monotone</h4><a class="signature-arity" href="#Partition.monotone" title="Permanent link">1</a><signature id="Partition.monotone">

```lx
Partition.monotone : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/nav/nav.modifier" class="Partition" signature="layers"></endpoint>
<h4 class="signature_head">Partition.layers</h4><a class="signature-arity" href="#Partition.layers" title="Permanent link">1</a><signature id="Partition.layers">

```lx
Partition.layers : unknown
```
</signature>

> no docs found   


### System
`import "luxe: system/nav/nav.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/nav/nav.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

