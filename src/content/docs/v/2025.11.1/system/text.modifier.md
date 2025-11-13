---
title: "luxe: system/text.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/text.modifier"
---
- [Data](#data)   
- [System](#system)   
- [Text](#text)   
- [TextAlignH](#textalignh)   
- [TextAlignV](#textalignv)   

---


## Data
```lx
import "luxe: system/text.modifier" for Data
```
> no docs found

### Variables
```lx
var text : String = "hello"
var size : Num = 16
var align : TextAlignH = TextAlignH.center
var vertical : TextAlignV = TextAlignV.center
var color : Color = [1, 1, 1, 1]
var bounds : Float4 = [0, 0, 0, 0]
var font : Asset = "luxe: font/lato"
var material : Asset = "luxe: material/font"
```

## System
```lx
import "luxe: system/text.modifier" for System
```
> no docs found

<endpoint module="luxe: system/text.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```lx
System.new(world : World) : System
```
> no docs found   


## Text
```lx
import "luxe: system/text.modifier" for Text
```
> no docs found

<endpoint module="luxe: system/text.modifier" class="Text" signature="create(entity : Any, material : Any, default_size : Any, default_font : Any, default_color : Any)"></endpoint>
### Text.create(.....)
```lx
Text.create(entity : Any, material : Any, default_size : Any, default_font : Any, default_color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="destroy(entity : Any)"></endpoint>
### Text.destroy(.)
```lx
Text.destroy(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_size(entity : Any, default_size : Any)"></endpoint>
### Text.set_size(..)
```lx
Text.set_size(entity : Any, default_size : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_size(entity : Any)"></endpoint>
### Text.get_size(.)
```lx
Text.get_size(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_font(entity : Any, default_font : Any)"></endpoint>
### Text.set_font(..)
```lx
Text.set_font(entity : Any, default_font : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_font(entity : Any)"></endpoint>
### Text.get_font(.)
```lx
Text.get_font(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_style(entity : Entity, style : TextStyle)"></endpoint>
### Text.set_style(..)
```lx
Text.set_style(entity : Entity, style : TextStyle) : None
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_style(entity : Entity)"></endpoint>
### Text.get_style(.)
```lx
Text.get_style(entity : Entity) : TextStyle
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_outline(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### Text.set_outline(.....)
```lx
Text.set_outline(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_shadow(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### Text.set_shadow(.....)
```lx
Text.set_shadow(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_max_visible(entity : Entity, max_visible : Num)"></endpoint>
### Text.set_max_visible(..)
```lx
Text.set_max_visible(entity : Entity, max_visible : Num) : None
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_max_visible(entity : Entity)"></endpoint>
### Text.get_max_visible(.)
```lx
Text.get_max_visible(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_color(entity : Any, default_color : Any)"></endpoint>
### Text.set_color(..)
```lx
Text.set_color(entity : Any, default_color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_color(entity : Any)"></endpoint>
### Text.get_color(.)
```lx
Text.get_color(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align(entity : Any, align : Any, align_vertical : Any)"></endpoint>
### Text.set_align(...)
```lx
Text.set_align(entity : Any, align : Any, align_vertical : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align(entity : Any, align : Any)"></endpoint>
### Text.set_align(..)
```lx
Text.set_align(entity : Any, align : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_align(entity : Any)"></endpoint>
### Text.get_align(.)
```lx
Text.get_align(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align_vertical(entity : Any, align_vertical : Any)"></endpoint>
### Text.set_align_vertical(..)
```lx
Text.set_align_vertical(entity : Any, align_vertical : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_align_vertical(entity : Any)"></endpoint>
### Text.get_align_vertical(.)
```lx
Text.get_align_vertical(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_bounds(entity : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### Text.set_bounds(.....)
```lx
Text.set_bounds(entity : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_bounds(entity : Any)"></endpoint>
### Text.get_bounds(.)
```lx
Text.get_bounds(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_attr(entity : Entity, start : Num, length : Num, type : TextAttrType, key : String, value : Any)"></endpoint>
### Text.set_attr(......)
```lx
Text.set_attr(entity : Entity, start : Num, length : Num, type : TextAttrType, key : String, value : Any) : None
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="attr_clear(entity : Any)"></endpoint>
### Text.attr_clear(.)
```lx
Text.attr_clear(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="commit(entity : Any)"></endpoint>
### Text.commit(.)
```lx
Text.commit(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_render_text(entity : Any)"></endpoint>
### Text.get_render_text(.)
```lx
Text.get_render_text(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_geometry(entity : Any)"></endpoint>
### Text.get_geometry(.)
```lx
Text.get_geometry(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_extents(entity : Any, offset : Any, count : Any)"></endpoint>
### Text.get_extents(...)
```lx
Text.get_extents(entity : Any, offset : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_extents(entity : Any)"></endpoint>
### Text.get_extents(.)
```lx
Text.get_extents(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="contains(entity : Any, x : Any, y : Any)"></endpoint>
### Text.contains(...)
```lx
Text.contains(entity : Any, x : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="has(entity : Any)"></endpoint>
### Text.has(.)
```lx
Text.has(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc(entity : Entity, space : String, key : String)"></endpoint>
### Text.set_loc(...)
```lx
Text.set_loc(entity : Entity, space : String, key : String) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc(entity : Entity, key : String)"></endpoint>
### Text.set_loc(..)
```lx
Text.set_loc(entity : Entity, key : String) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc_with_args(entity : Entity, space : String, key : String, args : List)"></endpoint>
### Text.set_loc_with_args(....)
```lx
Text.set_loc_with_args(entity : Entity, space : String, key : String, args : List) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc_with_args(entity : Entity, key : String, args : List)"></endpoint>
### Text.set_loc_with_args(...)
```lx
Text.set_loc_with_args(entity : Entity, key : String, args : List) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_text(entity : Any)"></endpoint>
### Text.get_text(.)
```lx
Text.get_text(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_text_buffer(entity : Any, string : Any)"></endpoint>
### Text.set_text_buffer(..)
```lx
Text.set_text_buffer(entity : Any, string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_text(entity : Any, string : Any)"></endpoint>
### Text.set_text(..)
```lx
Text.set_text(entity : Any, string : Any) : unknown
```
> no docs found   


## TextAlignH
```lx
import "luxe: system/text.modifier" for TextAlignH
```
> no docs found

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="left"></endpoint>
### TextAlignH.left
```lx
TextAlignH.left : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="center"></endpoint>
### TextAlignH.center
```lx
TextAlignH.center : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="right"></endpoint>
### TextAlignH.right
```lx
TextAlignH.right : unknown
```
> no docs found   


## TextAlignV
```lx
import "luxe: system/text.modifier" for TextAlignV
```
> no docs found

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="top"></endpoint>
### TextAlignV.top
```lx
TextAlignV.top : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="center"></endpoint>
### TextAlignV.center
```lx
TextAlignV.center : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="bottom"></endpoint>
### TextAlignV.bottom
```lx
TextAlignV.bottom : unknown
```
> no docs found   

