---
title: "luxe: system/tiles.modifier"
description: API version 2025.11.1
---
## `luxe: system/tiles.modifier{:lx}` module

- [Data](#data)   
- [System](#system)   
- [Tile](#tile)   
- [Tiles](#tiles)   

---


### Data
`import "luxe: system/tiles.modifier" for Data{:lx}`
> no docs found

- `var tiles : Asset = null{:lx}`


---


### System
`import "luxe: system/tiles.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/tiles.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   


### Tile
`import "luxe: system/tiles.modifier" for Tile{:lx}`
> no docs found

- [create](#Tile.create+5)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **depth**: `Any{:lx}`, **visual_id**: `Any{:lx}`)
- [destroy](#Tile.destroy+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [destroy_at](#Tile.destroy_at+4)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **depth**: `Any{:lx}`)
- [exists_at](#Tile.exists_at+4)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **depth**: `Any{:lx}`)
- [get_at](#Tile.get_at+4)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **depth**: `Any{:lx}`)
- [get_all](#Tile.get_all+2)(**entity**: `Any{:lx}`, **into**: `Any{:lx}`)
- [get_all_at](#Tile.get_all_at+4)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **into**: `Any{:lx}`)
- [get_all_at_depth](#Tile.get_all_at_depth+3)(**entity**: `Any{:lx}`, **depth**: `Any{:lx}`, **into**: `Any{:lx}`)
- [get_all_with_tag](#Tile.get_all_with_tag+3)(**entity**: `Any{:lx}`, **tag**: `Any{:lx}`, **into**: `Any{:lx}`)
- [get_all_with_visual](#Tile.get_all_with_visual+3)(**entity**: `Any{:lx}`, **visual**: `Any{:lx}`, **into**: `Any{:lx}`)
- [add_tag](#Tile.add_tag+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **tag**: `Any{:lx}`)
- [remove_tag](#Tile.remove_tag+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **tag**: `Any{:lx}`)
- [has_tag](#Tile.has_tag+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **tag**: `Any{:lx}`)
- [get_tags](#Tile.get_tags+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [clear_tags](#Tile.clear_tags+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [set](#Tile.set+4)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **key**: `Any{:lx}`, **value**: `Any{:lx}`)
- [get](#Tile.get+4)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **key**: `Any{:lx}`, **default**: `Any{:lx}`)
- [set_coord](#Tile.set_coord+4)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`)
- [get_coord_x](#Tile.get_coord_x+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [get_coord_y](#Tile.get_coord_y+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [set_depth](#Tile.set_depth+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **depth**: `Any{:lx}`)
- [get_depth](#Tile.get_depth+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [set_offset](#Tile.set_offset+4)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`)
- [set_offset_x](#Tile.set_offset_x+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **x**: `Any{:lx}`)
- [set_offset_y](#Tile.set_offset_y+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **y**: `Any{:lx}`)
- [get_offset_x](#Tile.get_offset_x+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [get_offset_y](#Tile.get_offset_y+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [reset_size](#Tile.reset_size+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [set_size](#Tile.set_size+4)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`)
- [set_size_x](#Tile.set_size_x+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **x**: `Any{:lx}`)
- [set_size_y](#Tile.set_size_y+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **y**: `Any{:lx}`)
- [get_size_x](#Tile.get_size_x+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [get_size_y](#Tile.get_size_y+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [set_flip](#Tile.set_flip+4)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`)
- [set_flip_x](#Tile.set_flip_x+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **flip**: `Any{:lx}`)
- [set_flip_y](#Tile.set_flip_y+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **flip**: `Any{:lx}`)
- [get_flip_x](#Tile.get_flip_x+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [get_flip_y](#Tile.get_flip_y+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [set_visual](#Tile.set_visual+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **visual**: `Any{:lx}`)
- [get_visual](#Tile.get_visual+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [set_angle](#Tile.set_angle+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **angle**: `Any{:lx}`)
- [get_angle](#Tile.get_angle+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)
- [set_color](#Tile.set_color+3)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`, **color**: `Any{:lx}`)
- [get_color](#Tile.get_color+2)(**entity**: `Any{:lx}`, **tile**: `Any{:lx}`)


---

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="create(entity : Any, x : Any, y : Any, depth : Any, visual_id : Any)"></endpoint>
<h4 class="signature_head">Tile.create</h4><a class="signature-arity" href="#Tile.create+5" title="Permanent link">5</a><signature id="Tile.create+5">

```lx
Tile.create(entity : Any, x : Any, y : Any, depth : Any, visual_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="destroy(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.destroy</h4><a class="signature-arity" href="#Tile.destroy+2" title="Permanent link">2</a><signature id="Tile.destroy+2">

```lx
Tile.destroy(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="destroy_at(entity : Any, x : Any, y : Any, depth : Any)"></endpoint>
<h4 class="signature_head">Tile.destroy_at</h4><a class="signature-arity" href="#Tile.destroy_at+4" title="Permanent link">4</a><signature id="Tile.destroy_at+4">

```lx
Tile.destroy_at(entity : Any, x : Any, y : Any, depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="exists_at(entity : Any, x : Any, y : Any, depth : Any)"></endpoint>
<h4 class="signature_head">Tile.exists_at</h4><a class="signature-arity" href="#Tile.exists_at+4" title="Permanent link">4</a><signature id="Tile.exists_at+4">

```lx
Tile.exists_at(entity : Any, x : Any, y : Any, depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_at(entity : Any, x : Any, y : Any, depth : Any)"></endpoint>
<h4 class="signature_head">Tile.get_at</h4><a class="signature-arity" href="#Tile.get_at+4" title="Permanent link">4</a><signature id="Tile.get_at+4">

```lx
Tile.get_at(entity : Any, x : Any, y : Any, depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all(entity : Any, into : Any)"></endpoint>
<h4 class="signature_head">Tile.get_all</h4><a class="signature-arity" href="#Tile.get_all+2" title="Permanent link">2</a><signature id="Tile.get_all+2">

```lx
Tile.get_all(entity : Any, into : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all_at(entity : Any, x : Any, y : Any, into : Any)"></endpoint>
<h4 class="signature_head">Tile.get_all_at</h4><a class="signature-arity" href="#Tile.get_all_at+4" title="Permanent link">4</a><signature id="Tile.get_all_at+4">

```lx
Tile.get_all_at(entity : Any, x : Any, y : Any, into : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all_at_depth(entity : Any, depth : Any, into : Any)"></endpoint>
<h4 class="signature_head">Tile.get_all_at_depth</h4><a class="signature-arity" href="#Tile.get_all_at_depth+3" title="Permanent link">3</a><signature id="Tile.get_all_at_depth+3">

```lx
Tile.get_all_at_depth(entity : Any, depth : Any, into : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all_with_tag(entity : Any, tag : Any, into : Any)"></endpoint>
<h4 class="signature_head">Tile.get_all_with_tag</h4><a class="signature-arity" href="#Tile.get_all_with_tag+3" title="Permanent link">3</a><signature id="Tile.get_all_with_tag+3">

```lx
Tile.get_all_with_tag(entity : Any, tag : Any, into : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all_with_visual(entity : Any, visual : Any, into : Any)"></endpoint>
<h4 class="signature_head">Tile.get_all_with_visual</h4><a class="signature-arity" href="#Tile.get_all_with_visual+3" title="Permanent link">3</a><signature id="Tile.get_all_with_visual+3">

```lx
Tile.get_all_with_visual(entity : Any, visual : Any, into : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="add_tag(entity : Any, tile : Any, tag : Any)"></endpoint>
<h4 class="signature_head">Tile.add_tag</h4><a class="signature-arity" href="#Tile.add_tag+3" title="Permanent link">3</a><signature id="Tile.add_tag+3">

```lx
Tile.add_tag(entity : Any, tile : Any, tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="remove_tag(entity : Any, tile : Any, tag : Any)"></endpoint>
<h4 class="signature_head">Tile.remove_tag</h4><a class="signature-arity" href="#Tile.remove_tag+3" title="Permanent link">3</a><signature id="Tile.remove_tag+3">

```lx
Tile.remove_tag(entity : Any, tile : Any, tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="has_tag(entity : Any, tile : Any, tag : Any)"></endpoint>
<h4 class="signature_head">Tile.has_tag</h4><a class="signature-arity" href="#Tile.has_tag+3" title="Permanent link">3</a><signature id="Tile.has_tag+3">

```lx
Tile.has_tag(entity : Any, tile : Any, tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_tags(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_tags</h4><a class="signature-arity" href="#Tile.get_tags+2" title="Permanent link">2</a><signature id="Tile.get_tags+2">

```lx
Tile.get_tags(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="clear_tags(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.clear_tags</h4><a class="signature-arity" href="#Tile.clear_tags+2" title="Permanent link">2</a><signature id="Tile.clear_tags+2">

```lx
Tile.clear_tags(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set(entity : Any, tile : Any, key : Any, value : Any)"></endpoint>
<h4 class="signature_head">Tile.set</h4><a class="signature-arity" href="#Tile.set+4" title="Permanent link">4</a><signature id="Tile.set+4">

```lx
Tile.set(entity : Any, tile : Any, key : Any, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get(entity : Any, tile : Any, key : Any, default : Any)"></endpoint>
<h4 class="signature_head">Tile.get</h4><a class="signature-arity" href="#Tile.get+4" title="Permanent link">4</a><signature id="Tile.get+4">

```lx
Tile.get(entity : Any, tile : Any, key : Any, default : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_coord(entity : Any, tile : Any, x : Any, y : Any)"></endpoint>
<h4 class="signature_head">Tile.set_coord</h4><a class="signature-arity" href="#Tile.set_coord+4" title="Permanent link">4</a><signature id="Tile.set_coord+4">

```lx
Tile.set_coord(entity : Any, tile : Any, x : Any, y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_coord_x(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_coord_x</h4><a class="signature-arity" href="#Tile.get_coord_x+2" title="Permanent link">2</a><signature id="Tile.get_coord_x+2">

```lx
Tile.get_coord_x(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_coord_y(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_coord_y</h4><a class="signature-arity" href="#Tile.get_coord_y+2" title="Permanent link">2</a><signature id="Tile.get_coord_y+2">

```lx
Tile.get_coord_y(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_depth(entity : Any, tile : Any, depth : Any)"></endpoint>
<h4 class="signature_head">Tile.set_depth</h4><a class="signature-arity" href="#Tile.set_depth+3" title="Permanent link">3</a><signature id="Tile.set_depth+3">

```lx
Tile.set_depth(entity : Any, tile : Any, depth : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_depth(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_depth</h4><a class="signature-arity" href="#Tile.get_depth+2" title="Permanent link">2</a><signature id="Tile.get_depth+2">

```lx
Tile.get_depth(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_offset(entity : Any, tile : Any, x : Any, y : Any)"></endpoint>
<h4 class="signature_head">Tile.set_offset</h4><a class="signature-arity" href="#Tile.set_offset+4" title="Permanent link">4</a><signature id="Tile.set_offset+4">

```lx
Tile.set_offset(entity : Any, tile : Any, x : Any, y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_offset_x(entity : Any, tile : Any, x : Any)"></endpoint>
<h4 class="signature_head">Tile.set_offset_x</h4><a class="signature-arity" href="#Tile.set_offset_x+3" title="Permanent link">3</a><signature id="Tile.set_offset_x+3">

```lx
Tile.set_offset_x(entity : Any, tile : Any, x : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_offset_y(entity : Any, tile : Any, y : Any)"></endpoint>
<h4 class="signature_head">Tile.set_offset_y</h4><a class="signature-arity" href="#Tile.set_offset_y+3" title="Permanent link">3</a><signature id="Tile.set_offset_y+3">

```lx
Tile.set_offset_y(entity : Any, tile : Any, y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_offset_x(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_offset_x</h4><a class="signature-arity" href="#Tile.get_offset_x+2" title="Permanent link">2</a><signature id="Tile.get_offset_x+2">

```lx
Tile.get_offset_x(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_offset_y(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_offset_y</h4><a class="signature-arity" href="#Tile.get_offset_y+2" title="Permanent link">2</a><signature id="Tile.get_offset_y+2">

```lx
Tile.get_offset_y(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="reset_size(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.reset_size</h4><a class="signature-arity" href="#Tile.reset_size+2" title="Permanent link">2</a><signature id="Tile.reset_size+2">

```lx
Tile.reset_size(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_size(entity : Any, tile : Any, x : Any, y : Any)"></endpoint>
<h4 class="signature_head">Tile.set_size</h4><a class="signature-arity" href="#Tile.set_size+4" title="Permanent link">4</a><signature id="Tile.set_size+4">

```lx
Tile.set_size(entity : Any, tile : Any, x : Any, y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_size_x(entity : Any, tile : Any, x : Any)"></endpoint>
<h4 class="signature_head">Tile.set_size_x</h4><a class="signature-arity" href="#Tile.set_size_x+3" title="Permanent link">3</a><signature id="Tile.set_size_x+3">

```lx
Tile.set_size_x(entity : Any, tile : Any, x : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_size_y(entity : Any, tile : Any, y : Any)"></endpoint>
<h4 class="signature_head">Tile.set_size_y</h4><a class="signature-arity" href="#Tile.set_size_y+3" title="Permanent link">3</a><signature id="Tile.set_size_y+3">

```lx
Tile.set_size_y(entity : Any, tile : Any, y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_size_x(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_size_x</h4><a class="signature-arity" href="#Tile.get_size_x+2" title="Permanent link">2</a><signature id="Tile.get_size_x+2">

```lx
Tile.get_size_x(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_size_y(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_size_y</h4><a class="signature-arity" href="#Tile.get_size_y+2" title="Permanent link">2</a><signature id="Tile.get_size_y+2">

```lx
Tile.get_size_y(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_flip(entity : Any, tile : Any, x : Any, y : Any)"></endpoint>
<h4 class="signature_head">Tile.set_flip</h4><a class="signature-arity" href="#Tile.set_flip+4" title="Permanent link">4</a><signature id="Tile.set_flip+4">

```lx
Tile.set_flip(entity : Any, tile : Any, x : Any, y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_flip_x(entity : Any, tile : Any, flip : Any)"></endpoint>
<h4 class="signature_head">Tile.set_flip_x</h4><a class="signature-arity" href="#Tile.set_flip_x+3" title="Permanent link">3</a><signature id="Tile.set_flip_x+3">

```lx
Tile.set_flip_x(entity : Any, tile : Any, flip : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_flip_y(entity : Any, tile : Any, flip : Any)"></endpoint>
<h4 class="signature_head">Tile.set_flip_y</h4><a class="signature-arity" href="#Tile.set_flip_y+3" title="Permanent link">3</a><signature id="Tile.set_flip_y+3">

```lx
Tile.set_flip_y(entity : Any, tile : Any, flip : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_flip_x(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_flip_x</h4><a class="signature-arity" href="#Tile.get_flip_x+2" title="Permanent link">2</a><signature id="Tile.get_flip_x+2">

```lx
Tile.get_flip_x(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_flip_y(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_flip_y</h4><a class="signature-arity" href="#Tile.get_flip_y+2" title="Permanent link">2</a><signature id="Tile.get_flip_y+2">

```lx
Tile.get_flip_y(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_visual(entity : Any, tile : Any, visual : Any)"></endpoint>
<h4 class="signature_head">Tile.set_visual</h4><a class="signature-arity" href="#Tile.set_visual+3" title="Permanent link">3</a><signature id="Tile.set_visual+3">

```lx
Tile.set_visual(entity : Any, tile : Any, visual : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_visual(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_visual</h4><a class="signature-arity" href="#Tile.get_visual+2" title="Permanent link">2</a><signature id="Tile.get_visual+2">

```lx
Tile.get_visual(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_angle(entity : Any, tile : Any, angle : Any)"></endpoint>
<h4 class="signature_head">Tile.set_angle</h4><a class="signature-arity" href="#Tile.set_angle+3" title="Permanent link">3</a><signature id="Tile.set_angle+3">

```lx
Tile.set_angle(entity : Any, tile : Any, angle : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_angle(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_angle</h4><a class="signature-arity" href="#Tile.get_angle+2" title="Permanent link">2</a><signature id="Tile.get_angle+2">

```lx
Tile.get_angle(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_color(entity : Any, tile : Any, color : Any)"></endpoint>
<h4 class="signature_head">Tile.set_color</h4><a class="signature-arity" href="#Tile.set_color+3" title="Permanent link">3</a><signature id="Tile.set_color+3">

```lx
Tile.set_color(entity : Any, tile : Any, color : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_color(entity : Any, tile : Any)"></endpoint>
<h4 class="signature_head">Tile.get_color</h4><a class="signature-arity" href="#Tile.get_color+2" title="Permanent link">2</a><signature id="Tile.get_color+2">

```lx
Tile.get_color(entity : Any, tile : Any) : unknown
```
</signature>

> no docs found   


### Tiles
`import "luxe: system/tiles.modifier" for Tiles{:lx}`
> no docs found

- [create](#Tiles.create+3)(**entity**: `Any{:lx}`, **grid_size_x**: `Any{:lx}`, **grid_size_y**: `Any{:lx}`)
- [create](#Tiles.create+2)(**entity**: `Any{:lx}`, **asset**: `Any{:lx}`)
- [destroy](#Tiles.destroy)(**entity**: `Any{:lx}`)
- [clear](#Tiles.clear)(**entity**: `Any{:lx}`)
- [has](#Tiles.has)(**entity**: `Any{:lx}`)
- [commit](#Tiles.commit)(**entity**: `Any{:lx}`)
- [set_grid_size](#Tiles.set_grid_size+3)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`)
- [get_grid_size](#Tiles.get_grid_size)(**entity**: `Any{:lx}`)
- [set_asset](#Tiles.set_asset+2)(**entity**: `Any{:lx}`, **asset_id**: `Any{:lx}`)
- [get_asset_id](#Tiles.get_asset_id)(**entity**: `Any{:lx}`)
- [set_asset_id](#Tiles.set_asset_id+2)(**entity**: `Any{:lx}`, **asset_id**: `Any{:lx}`)
- [define_source](#Tiles.define_source+3)(**entity**: `Any{:lx}`, **source_id**: `Any{:lx}`, **material**: `Any{:lx}`)
- [undefine_source](#Tiles.undefine_source+2)(**entity**: `Any{:lx}`, **source_id**: `Any{:lx}`)
- [has_source](#Tiles.has_source+2)(**entity**: `Any{:lx}`, **source_id**: `Any{:lx}`)
- [define_visual](#Tiles.define_visual+4)(**entity**: `Any{:lx}`, **source_id**: `Any{:lx}`, **visual_id**: `Any{:lx}`, **options**: `Any{:lx}`)
- [undefine_visual](#Tiles.undefine_visual+3)(**entity**: `Any{:lx}`, **source_id**: `Any{:lx}`, **visual_id**: `Any{:lx}`)
- [has_visual](#Tiles.has_visual+2)(**entity**: `Any{:lx}`, **visual_id**: `Any{:lx}`)
- [get_bounds_rects](#Tiles.get_bounds_rects+3)(**entity**: `Any{:lx}`, **tiles**: `Any{:lx}`, **into**: `Any{:lx}`)


---

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="create(entity : Any, grid_size_x : Any, grid_size_y : Any)"></endpoint>
<h4 class="signature_head">Tiles.create</h4><a class="signature-arity" href="#Tiles.create+3" title="Permanent link">3</a><signature id="Tiles.create+3">

```lx
Tiles.create(entity : Any, grid_size_x : Any, grid_size_y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="create(entity : Any, asset : Any)"></endpoint>
<h4 class="signature_head">Tiles.create</h4><a class="signature-arity" href="#Tiles.create+2" title="Permanent link">2</a><signature id="Tiles.create+2">

```lx
Tiles.create(entity : Any, asset : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="destroy(entity : Any)"></endpoint>
<h4 class="signature_head">Tiles.destroy</h4><a class="signature-arity" href="#Tiles.destroy" title="Permanent link">1</a><signature id="Tiles.destroy">

```lx
Tiles.destroy(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="clear(entity : Any)"></endpoint>
<h4 class="signature_head">Tiles.clear</h4><a class="signature-arity" href="#Tiles.clear" title="Permanent link">1</a><signature id="Tiles.clear">

```lx
Tiles.clear(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="has(entity : Any)"></endpoint>
<h4 class="signature_head">Tiles.has</h4><a class="signature-arity" href="#Tiles.has" title="Permanent link">1</a><signature id="Tiles.has">

```lx
Tiles.has(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="commit(entity : Any)"></endpoint>
<h4 class="signature_head">Tiles.commit</h4><a class="signature-arity" href="#Tiles.commit" title="Permanent link">1</a><signature id="Tiles.commit">

```lx
Tiles.commit(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="set_grid_size(entity : Any, x : Any, y : Any)"></endpoint>
<h4 class="signature_head">Tiles.set_grid_size</h4><a class="signature-arity" href="#Tiles.set_grid_size+3" title="Permanent link">3</a><signature id="Tiles.set_grid_size+3">

```lx
Tiles.set_grid_size(entity : Any, x : Any, y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="get_grid_size(entity : Any)"></endpoint>
<h4 class="signature_head">Tiles.get_grid_size</h4><a class="signature-arity" href="#Tiles.get_grid_size" title="Permanent link">1</a><signature id="Tiles.get_grid_size">

```lx
Tiles.get_grid_size(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="set_asset(entity : Any, asset_id : Any)"></endpoint>
<h4 class="signature_head">Tiles.set_asset</h4><a class="signature-arity" href="#Tiles.set_asset+2" title="Permanent link">2</a><signature id="Tiles.set_asset+2">

```lx
Tiles.set_asset(entity : Any, asset_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="get_asset_id(entity : Any)"></endpoint>
<h4 class="signature_head">Tiles.get_asset_id</h4><a class="signature-arity" href="#Tiles.get_asset_id" title="Permanent link">1</a><signature id="Tiles.get_asset_id">

```lx
Tiles.get_asset_id(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="set_asset_id(entity : Any, asset_id : Any)"></endpoint>
<h4 class="signature_head">Tiles.set_asset_id</h4><a class="signature-arity" href="#Tiles.set_asset_id+2" title="Permanent link">2</a><signature id="Tiles.set_asset_id+2">

```lx
Tiles.set_asset_id(entity : Any, asset_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="define_source(entity : Any, source_id : Any, material : Any)"></endpoint>
<h4 class="signature_head">Tiles.define_source</h4><a class="signature-arity" href="#Tiles.define_source+3" title="Permanent link">3</a><signature id="Tiles.define_source+3">

```lx
Tiles.define_source(entity : Any, source_id : Any, material : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="undefine_source(entity : Any, source_id : Any)"></endpoint>
<h4 class="signature_head">Tiles.undefine_source</h4><a class="signature-arity" href="#Tiles.undefine_source+2" title="Permanent link">2</a><signature id="Tiles.undefine_source+2">

```lx
Tiles.undefine_source(entity : Any, source_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="has_source(entity : Any, source_id : Any)"></endpoint>
<h4 class="signature_head">Tiles.has_source</h4><a class="signature-arity" href="#Tiles.has_source+2" title="Permanent link">2</a><signature id="Tiles.has_source+2">

```lx
Tiles.has_source(entity : Any, source_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="define_visual(entity : Any, source_id : Any, visual_id : Any, options : Any)"></endpoint>
<h4 class="signature_head">Tiles.define_visual</h4><a class="signature-arity" href="#Tiles.define_visual+4" title="Permanent link">4</a><signature id="Tiles.define_visual+4">

```lx
Tiles.define_visual(entity : Any, source_id : Any, visual_id : Any, options : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="undefine_visual(entity : Any, source_id : Any, visual_id : Any)"></endpoint>
<h4 class="signature_head">Tiles.undefine_visual</h4><a class="signature-arity" href="#Tiles.undefine_visual+3" title="Permanent link">3</a><signature id="Tiles.undefine_visual+3">

```lx
Tiles.undefine_visual(entity : Any, source_id : Any, visual_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="has_visual(entity : Any, visual_id : Any)"></endpoint>
<h4 class="signature_head">Tiles.has_visual</h4><a class="signature-arity" href="#Tiles.has_visual+2" title="Permanent link">2</a><signature id="Tiles.has_visual+2">

```lx
Tiles.has_visual(entity : Any, visual_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="get_bounds_rects(entity : Any, tiles : Any, into : Any)"></endpoint>
<h4 class="signature_head">Tiles.get_bounds_rects</h4><a class="signature-arity" href="#Tiles.get_bounds_rects+3" title="Permanent link">3</a><signature id="Tiles.get_bounds_rects+3">

```lx
Tiles.get_bounds_rects(entity : Any, tiles : Any, into : Any) : unknown
```
</signature>

> no docs found   

