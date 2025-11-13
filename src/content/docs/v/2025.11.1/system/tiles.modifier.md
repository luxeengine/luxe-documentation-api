---
title: "luxe: system/tiles.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/tiles.modifier"
---
- [Data](#data)   
- [System](#system)   
- [Tile](#tile)   
- [Tiles](#tiles)   

---


## Data
```lx
import "luxe: system/tiles.modifier" for Data
```
> no docs found

### Variables
```lx
var tiles : Asset = null
```

## System
```lx
import "luxe: system/tiles.modifier" for System
```
> no docs found

<endpoint module="luxe: system/tiles.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```lx
System.new(world : World) : System
```
> no docs found   


## Tile
```lx
import "luxe: system/tiles.modifier" for Tile
```
> no docs found

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="create(entity : Any, x : Any, y : Any, depth : Any, visual_id : Any)"></endpoint>
### Tile.create(.....)
```lx
Tile.create(entity : Any, x : Any, y : Any, depth : Any, visual_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="destroy(entity : Any, tile : Any)"></endpoint>
### Tile.destroy(..)
```lx
Tile.destroy(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="destroy_at(entity : Any, x : Any, y : Any, depth : Any)"></endpoint>
### Tile.destroy_at(....)
```lx
Tile.destroy_at(entity : Any, x : Any, y : Any, depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="exists_at(entity : Any, x : Any, y : Any, depth : Any)"></endpoint>
### Tile.exists_at(....)
```lx
Tile.exists_at(entity : Any, x : Any, y : Any, depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_at(entity : Any, x : Any, y : Any, depth : Any)"></endpoint>
### Tile.get_at(....)
```lx
Tile.get_at(entity : Any, x : Any, y : Any, depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all(entity : Any, into : Any)"></endpoint>
### Tile.get_all(..)
```lx
Tile.get_all(entity : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all_at(entity : Any, x : Any, y : Any, into : Any)"></endpoint>
### Tile.get_all_at(....)
```lx
Tile.get_all_at(entity : Any, x : Any, y : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all_at_depth(entity : Any, depth : Any, into : Any)"></endpoint>
### Tile.get_all_at_depth(...)
```lx
Tile.get_all_at_depth(entity : Any, depth : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all_with_tag(entity : Any, tag : Any, into : Any)"></endpoint>
### Tile.get_all_with_tag(...)
```lx
Tile.get_all_with_tag(entity : Any, tag : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_all_with_visual(entity : Any, visual : Any, into : Any)"></endpoint>
### Tile.get_all_with_visual(...)
```lx
Tile.get_all_with_visual(entity : Any, visual : Any, into : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="add_tag(entity : Any, tile : Any, tag : Any)"></endpoint>
### Tile.add_tag(...)
```lx
Tile.add_tag(entity : Any, tile : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="remove_tag(entity : Any, tile : Any, tag : Any)"></endpoint>
### Tile.remove_tag(...)
```lx
Tile.remove_tag(entity : Any, tile : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="has_tag(entity : Any, tile : Any, tag : Any)"></endpoint>
### Tile.has_tag(...)
```lx
Tile.has_tag(entity : Any, tile : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_tags(entity : Any, tile : Any)"></endpoint>
### Tile.get_tags(..)
```lx
Tile.get_tags(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="clear_tags(entity : Any, tile : Any)"></endpoint>
### Tile.clear_tags(..)
```lx
Tile.clear_tags(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set(entity : Any, tile : Any, key : Any, value : Any)"></endpoint>
### Tile.set(....)
```lx
Tile.set(entity : Any, tile : Any, key : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get(entity : Any, tile : Any, key : Any, default : Any)"></endpoint>
### Tile.get(....)
```lx
Tile.get(entity : Any, tile : Any, key : Any, default : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_coord(entity : Any, tile : Any, x : Any, y : Any)"></endpoint>
### Tile.set_coord(....)
```lx
Tile.set_coord(entity : Any, tile : Any, x : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_coord_x(entity : Any, tile : Any)"></endpoint>
### Tile.get_coord_x(..)
```lx
Tile.get_coord_x(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_coord_y(entity : Any, tile : Any)"></endpoint>
### Tile.get_coord_y(..)
```lx
Tile.get_coord_y(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_depth(entity : Any, tile : Any, depth : Any)"></endpoint>
### Tile.set_depth(...)
```lx
Tile.set_depth(entity : Any, tile : Any, depth : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_depth(entity : Any, tile : Any)"></endpoint>
### Tile.get_depth(..)
```lx
Tile.get_depth(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_offset(entity : Any, tile : Any, x : Any, y : Any)"></endpoint>
### Tile.set_offset(....)
```lx
Tile.set_offset(entity : Any, tile : Any, x : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_offset_x(entity : Any, tile : Any, x : Any)"></endpoint>
### Tile.set_offset_x(...)
```lx
Tile.set_offset_x(entity : Any, tile : Any, x : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_offset_y(entity : Any, tile : Any, y : Any)"></endpoint>
### Tile.set_offset_y(...)
```lx
Tile.set_offset_y(entity : Any, tile : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_offset_x(entity : Any, tile : Any)"></endpoint>
### Tile.get_offset_x(..)
```lx
Tile.get_offset_x(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_offset_y(entity : Any, tile : Any)"></endpoint>
### Tile.get_offset_y(..)
```lx
Tile.get_offset_y(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="reset_size(entity : Any, tile : Any)"></endpoint>
### Tile.reset_size(..)
```lx
Tile.reset_size(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_size(entity : Any, tile : Any, x : Any, y : Any)"></endpoint>
### Tile.set_size(....)
```lx
Tile.set_size(entity : Any, tile : Any, x : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_size_x(entity : Any, tile : Any, x : Any)"></endpoint>
### Tile.set_size_x(...)
```lx
Tile.set_size_x(entity : Any, tile : Any, x : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_size_y(entity : Any, tile : Any, y : Any)"></endpoint>
### Tile.set_size_y(...)
```lx
Tile.set_size_y(entity : Any, tile : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_size_x(entity : Any, tile : Any)"></endpoint>
### Tile.get_size_x(..)
```lx
Tile.get_size_x(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_size_y(entity : Any, tile : Any)"></endpoint>
### Tile.get_size_y(..)
```lx
Tile.get_size_y(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_flip(entity : Any, tile : Any, x : Any, y : Any)"></endpoint>
### Tile.set_flip(....)
```lx
Tile.set_flip(entity : Any, tile : Any, x : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_flip_x(entity : Any, tile : Any, flip : Any)"></endpoint>
### Tile.set_flip_x(...)
```lx
Tile.set_flip_x(entity : Any, tile : Any, flip : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_flip_y(entity : Any, tile : Any, flip : Any)"></endpoint>
### Tile.set_flip_y(...)
```lx
Tile.set_flip_y(entity : Any, tile : Any, flip : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_flip_x(entity : Any, tile : Any)"></endpoint>
### Tile.get_flip_x(..)
```lx
Tile.get_flip_x(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_flip_y(entity : Any, tile : Any)"></endpoint>
### Tile.get_flip_y(..)
```lx
Tile.get_flip_y(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_visual(entity : Any, tile : Any, visual : Any)"></endpoint>
### Tile.set_visual(...)
```lx
Tile.set_visual(entity : Any, tile : Any, visual : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_visual(entity : Any, tile : Any)"></endpoint>
### Tile.get_visual(..)
```lx
Tile.get_visual(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_angle(entity : Any, tile : Any, angle : Any)"></endpoint>
### Tile.set_angle(...)
```lx
Tile.set_angle(entity : Any, tile : Any, angle : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_angle(entity : Any, tile : Any)"></endpoint>
### Tile.get_angle(..)
```lx
Tile.get_angle(entity : Any, tile : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="set_color(entity : Any, tile : Any, color : Any)"></endpoint>
### Tile.set_color(...)
```lx
Tile.set_color(entity : Any, tile : Any, color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tile" signature="get_color(entity : Any, tile : Any)"></endpoint>
### Tile.get_color(..)
```lx
Tile.get_color(entity : Any, tile : Any) : unknown
```
> no docs found   


## Tiles
```lx
import "luxe: system/tiles.modifier" for Tiles
```
> no docs found

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="create(entity : Any, grid_size_x : Any, grid_size_y : Any)"></endpoint>
### Tiles.create(...)
```lx
Tiles.create(entity : Any, grid_size_x : Any, grid_size_y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="create(entity : Any, asset : Any)"></endpoint>
### Tiles.create(..)
```lx
Tiles.create(entity : Any, asset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="destroy(entity : Any)"></endpoint>
### Tiles.destroy(.)
```lx
Tiles.destroy(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="clear(entity : Any)"></endpoint>
### Tiles.clear(.)
```lx
Tiles.clear(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="has(entity : Any)"></endpoint>
### Tiles.has(.)
```lx
Tiles.has(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="commit(entity : Any)"></endpoint>
### Tiles.commit(.)
```lx
Tiles.commit(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="set_grid_size(entity : Any, x : Any, y : Any)"></endpoint>
### Tiles.set_grid_size(...)
```lx
Tiles.set_grid_size(entity : Any, x : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="get_grid_size(entity : Any)"></endpoint>
### Tiles.get_grid_size(.)
```lx
Tiles.get_grid_size(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="set_asset(entity : Any, asset_id : Any)"></endpoint>
### Tiles.set_asset(..)
```lx
Tiles.set_asset(entity : Any, asset_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="get_asset_id(entity : Any)"></endpoint>
### Tiles.get_asset_id(.)
```lx
Tiles.get_asset_id(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="set_asset_id(entity : Any, asset_id : Any)"></endpoint>
### Tiles.set_asset_id(..)
```lx
Tiles.set_asset_id(entity : Any, asset_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="define_source(entity : Any, source_id : Any, material : Any)"></endpoint>
### Tiles.define_source(...)
```lx
Tiles.define_source(entity : Any, source_id : Any, material : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="undefine_source(entity : Any, source_id : Any)"></endpoint>
### Tiles.undefine_source(..)
```lx
Tiles.undefine_source(entity : Any, source_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="has_source(entity : Any, source_id : Any)"></endpoint>
### Tiles.has_source(..)
```lx
Tiles.has_source(entity : Any, source_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="define_visual(entity : Any, source_id : Any, visual_id : Any, options : Any)"></endpoint>
### Tiles.define_visual(....)
```lx
Tiles.define_visual(entity : Any, source_id : Any, visual_id : Any, options : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="undefine_visual(entity : Any, source_id : Any, visual_id : Any)"></endpoint>
### Tiles.undefine_visual(...)
```lx
Tiles.undefine_visual(entity : Any, source_id : Any, visual_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="has_visual(entity : Any, visual_id : Any)"></endpoint>
### Tiles.has_visual(..)
```lx
Tiles.has_visual(entity : Any, visual_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/tiles.modifier" class="Tiles" signature="get_bounds_rects(entity : Any, tiles : Any, into : Any)"></endpoint>
### Tiles.get_bounds_rects(...)
```lx
Tiles.get_bounds_rects(entity : Any, tiles : Any, into : Any) : unknown
```
> no docs found   

