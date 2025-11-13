---
title: "luxe: system/skeleton.modifier"
description: API version 2025.11.1
---
## `luxe: system/skeleton.modifier{:lx}` module

- [Data](#data)   
- [Skeleton](#skeleton)   
- [System](#system)   

---


### Data
`import "luxe: system/skeleton.modifier" for Data{:lx}`
> no docs found

- `var skeleton : Asset = null{:lx}`
- `var draw_skeleton : Bool = false{:lx}`


---


### Skeleton
`import "luxe: system/skeleton.modifier" for Skeleton{:lx}`
> no docs found

- [has](#Skeleton.has)(**entity**: `Entity{:lx}`)
- [set_pose](#Skeleton.set_pose+2)(**entity**: `Entity{:lx}`, **pose**: `Pose{:lx}`)
- [get_pose](#Skeleton.get_pose)(**entity**: `Entity{:lx}`)
- [get_skeleton](#Skeleton.get_skeleton)(**entity**: `Entity{:lx}`)


---

<endpoint module="luxe: system/skeleton.modifier" class="Skeleton" signature="has(entity : Entity)"></endpoint>
<h4 class="signature_head">Skeleton.has</h4><a class="signature-arity" href="#Skeleton.has" title="Permanent link">1</a><signature id="Skeleton.has">

```lx
Skeleton.has(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: system/skeleton.modifier" class="Skeleton" signature="set_pose(entity : Entity, pose : Pose)"></endpoint>
<h4 class="signature_head">Skeleton.set_pose</h4><a class="signature-arity" href="#Skeleton.set_pose+2" title="Permanent link">2</a><signature id="Skeleton.set_pose+2">

```lx
Skeleton.set_pose(entity : Entity, pose : Pose) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/skeleton.modifier" class="Skeleton" signature="get_pose(entity : Entity)"></endpoint>
<h4 class="signature_head">Skeleton.get_pose</h4><a class="signature-arity" href="#Skeleton.get_pose" title="Permanent link">1</a><signature id="Skeleton.get_pose">

```lx
Skeleton.get_pose(entity : Entity) : Pose
```
</signature>

> no docs found   

<endpoint module="luxe: system/skeleton.modifier" class="Skeleton" signature="get_skeleton(entity : Entity)"></endpoint>
<h4 class="signature_head">Skeleton.get_skeleton</h4><a class="signature-arity" href="#Skeleton.get_skeleton" title="Permanent link">1</a><signature id="Skeleton.get_skeleton">

```lx
Skeleton.get_skeleton(entity : Entity) : Skeleton
```
</signature>

> no docs found   


### System
`import "luxe: system/skeleton.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/skeleton.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

