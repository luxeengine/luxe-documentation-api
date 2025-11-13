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
```wren
import "luxe: system/text.modifier" for Data
```
> no docs found

### Variables
```wren
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
```wren
import "luxe: system/text.modifier" for System
```
> no docs found

<endpoint module="luxe: system/text.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   


## Text
```wren
import "luxe: system/text.modifier" for Text
```
> no docs found

<endpoint module="luxe: system/text.modifier" class="Text" signature="create(entity : Any, material : Any, default_size : Any, default_font : Any, default_color : Any)"></endpoint>
### Text.create(.....)
```wren
Text.create(entity : Any, material : Any, default_size : Any, default_font : Any, default_color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="destroy(entity : Any)"></endpoint>
### Text.destroy(.)
```wren
Text.destroy(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_size(entity : Any, default_size : Any)"></endpoint>
### Text.set_size(..)
```wren
Text.set_size(entity : Any, default_size : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_size(entity : Any)"></endpoint>
### Text.get_size(.)
```wren
Text.get_size(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_font(entity : Any, default_font : Any)"></endpoint>
### Text.set_font(..)
```wren
Text.set_font(entity : Any, default_font : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_font(entity : Any)"></endpoint>
### Text.get_font(.)
```wren
Text.get_font(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_style(entity : Entity, style : TextStyle)"></endpoint>
### Text.set_style(..)
```wren
Text.set_style(entity : Entity, style : TextStyle) : None
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_style(entity : Entity)"></endpoint>
### Text.get_style(.)
```wren
Text.get_style(entity : Entity) : TextStyle
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_outline(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### Text.set_outline(.....)
```wren
Text.set_outline(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_shadow(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### Text.set_shadow(.....)
```wren
Text.set_shadow(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_max_visible(entity : Entity, max_visible : Num)"></endpoint>
### Text.set_max_visible(..)
```wren
Text.set_max_visible(entity : Entity, max_visible : Num) : None
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_max_visible(entity : Entity)"></endpoint>
### Text.get_max_visible(.)
```wren
Text.get_max_visible(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_color(entity : Any, default_color : Any)"></endpoint>
### Text.set_color(..)
```wren
Text.set_color(entity : Any, default_color : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_color(entity : Any)"></endpoint>
### Text.get_color(.)
```wren
Text.get_color(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align(entity : Any, align : Any, align_vertical : Any)"></endpoint>
### Text.set_align(...)
```wren
Text.set_align(entity : Any, align : Any, align_vertical : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align(entity : Any, align : Any)"></endpoint>
### Text.set_align(..)
```wren
Text.set_align(entity : Any, align : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_align(entity : Any)"></endpoint>
### Text.get_align(.)
```wren
Text.get_align(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align_vertical(entity : Any, align_vertical : Any)"></endpoint>
### Text.set_align_vertical(..)
```wren
Text.set_align_vertical(entity : Any, align_vertical : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_align_vertical(entity : Any)"></endpoint>
### Text.get_align_vertical(.)
```wren
Text.get_align_vertical(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_bounds(entity : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### Text.set_bounds(.....)
```wren
Text.set_bounds(entity : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_bounds(entity : Any)"></endpoint>
### Text.get_bounds(.)
```wren
Text.get_bounds(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_attr(entity : Entity, start : Num, length : Num, type : TextAttrType, key : String, value : Any)"></endpoint>
### Text.set_attr(......)
```wren
Text.set_attr(entity : Entity, start : Num, length : Num, type : TextAttrType, key : String, value : Any) : None
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="attr_clear(entity : Any)"></endpoint>
### Text.attr_clear(.)
```wren
Text.attr_clear(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="commit(entity : Any)"></endpoint>
### Text.commit(.)
```wren
Text.commit(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_render_text(entity : Any)"></endpoint>
### Text.get_render_text(.)
```wren
Text.get_render_text(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_geometry(entity : Any)"></endpoint>
### Text.get_geometry(.)
```wren
Text.get_geometry(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_extents(entity : Any, offset : Any, count : Any)"></endpoint>
### Text.get_extents(...)
```wren
Text.get_extents(entity : Any, offset : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_extents(entity : Any)"></endpoint>
### Text.get_extents(.)
```wren
Text.get_extents(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="contains(entity : Any, x : Any, y : Any)"></endpoint>
### Text.contains(...)
```wren
Text.contains(entity : Any, x : Any, y : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="has(entity : Any)"></endpoint>
### Text.has(.)
```wren
Text.has(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc(entity : Entity, space : String, key : String)"></endpoint>
### Text.set_loc(...)
```wren
Text.set_loc(entity : Entity, space : String, key : String) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc(entity : Entity, key : String)"></endpoint>
### Text.set_loc(..)
```wren
Text.set_loc(entity : Entity, key : String) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc_with_args(entity : Entity, space : String, key : String, args : List)"></endpoint>
### Text.set_loc_with_args(....)
```wren
Text.set_loc_with_args(entity : Entity, space : String, key : String, args : List) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc_with_args(entity : Entity, key : String, args : List)"></endpoint>
### Text.set_loc_with_args(...)
```wren
Text.set_loc_with_args(entity : Entity, key : String, args : List) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_text(entity : Any)"></endpoint>
### Text.get_text(.)
```wren
Text.get_text(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_text_buffer(entity : Any, string : Any)"></endpoint>
### Text.set_text_buffer(..)
```wren
Text.set_text_buffer(entity : Any, string : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_text(entity : Any, string : Any)"></endpoint>
### Text.set_text(..)
```wren
Text.set_text(entity : Any, string : Any) : unknown
```
> no docs found   


## TextAlignH
```wren
import "luxe: system/text.modifier" for TextAlignH
```
> no docs found

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="left"></endpoint>
### TextAlignH.left
```wren
TextAlignH.left : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="center"></endpoint>
### TextAlignH.center
```wren
TextAlignH.center : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="right"></endpoint>
### TextAlignH.right
```wren
TextAlignH.right : unknown
```
> no docs found   


## TextAlignV
```wren
import "luxe: system/text.modifier" for TextAlignV
```
> no docs found

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="top"></endpoint>
### TextAlignV.top
```wren
TextAlignV.top : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="center"></endpoint>
### TextAlignV.center
```wren
TextAlignV.center : unknown
```
> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="bottom"></endpoint>
### TextAlignV.bottom
```wren
TextAlignV.bottom : unknown
```
> no docs found   

