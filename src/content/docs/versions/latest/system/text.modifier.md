---
title: "luxe: system/text.modifier"
description: API version 2025.11.1
---
## `luxe: system/text.modifier{:lx}` module

- [Data](#data)   
- [System](#system)   
- [Text](#text)   
- [TextAlignH](#textalignh)   
- [TextAlignV](#textalignv)   

---


### Data
`import "luxe: system/text.modifier" for Data{:lx}`
> no docs found

- `var text : String = "hello"{:lx}`
- `var size : Num = 16{:lx}`
- `var align : TextAlignH = TextAlignH.center{:lx}`
- `var vertical : TextAlignV = TextAlignV.center{:lx}`
- `var color : Color = [1, 1, 1, 1]{:lx}`
- `var bounds : Float4 = [0, 0, 0, 0]{:lx}`
- `var font : Asset = "luxe: font/lato"{:lx}`
- `var material : Asset = "luxe: material/font"{:lx}`


---


### System
`import "luxe: system/text.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/text.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   


### Text
`import "luxe: system/text.modifier" for Text{:lx}`
> no docs found

- [create](#Text.create+5)(**entity**: `Any{:lx}`, **material**: `Any{:lx}`, **default_size**: `Any{:lx}`, **default_font**: `Any{:lx}`, **default_color**: `Any{:lx}`)
- [destroy](#Text.destroy)(**entity**: `Any{:lx}`)
- [set_size](#Text.set_size+2)(**entity**: `Any{:lx}`, **default_size**: `Any{:lx}`)
- [get_size](#Text.get_size)(**entity**: `Any{:lx}`)
- [set_font](#Text.set_font+2)(**entity**: `Any{:lx}`, **default_font**: `Any{:lx}`)
- [get_font](#Text.get_font)(**entity**: `Any{:lx}`)
- [set_style](#Text.set_style+2)(**entity**: `Entity{:lx}`, **style**: `TextStyle{:lx}`)
- [get_style](#Text.get_style)(**entity**: `Entity{:lx}`)
- [set_outline](#Text.set_outline+5)(**entity**: `Entity{:lx}`, **radius**: `Num{:lx}`, **softness**: `Num{:lx}`, **color**: `Color{:lx}`, **offset**: `Float2{:lx}`)
- [set_shadow](#Text.set_shadow+5)(**entity**: `Entity{:lx}`, **radius**: `Num{:lx}`, **softness**: `Num{:lx}`, **color**: `Color{:lx}`, **offset**: `Float2{:lx}`)
- [set_max_visible](#Text.set_max_visible+2)(**entity**: `Entity{:lx}`, **max_visible**: `Num{:lx}`)
- [get_max_visible](#Text.get_max_visible)(**entity**: `Entity{:lx}`)
- [set_color](#Text.set_color+2)(**entity**: `Any{:lx}`, **default_color**: `Any{:lx}`)
- [get_color](#Text.get_color)(**entity**: `Any{:lx}`)
- [set_align](#Text.set_align+3)(**entity**: `Any{:lx}`, **align**: `Any{:lx}`, **align_vertical**: `Any{:lx}`)
- [set_align](#Text.set_align+2)(**entity**: `Any{:lx}`, **align**: `Any{:lx}`)
- [get_align](#Text.get_align)(**entity**: `Any{:lx}`)
- [set_align_vertical](#Text.set_align_vertical+2)(**entity**: `Any{:lx}`, **align_vertical**: `Any{:lx}`)
- [get_align_vertical](#Text.get_align_vertical)(**entity**: `Any{:lx}`)
- [set_bounds](#Text.set_bounds+5)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **w**: `Any{:lx}`, **h**: `Any{:lx}`)
- [get_bounds](#Text.get_bounds)(**entity**: `Any{:lx}`)
- [set_attr](#Text.set_attr+6)(**entity**: `Entity{:lx}`, **start**: `Num{:lx}`, **length**: `Num{:lx}`, **type**: `TextAttrType{:lx}`, **key**: `String{:lx}`, **value**: `Any{:lx}`)
- [attr_clear](#Text.attr_clear)(**entity**: `Any{:lx}`)
- [commit](#Text.commit)(**entity**: `Any{:lx}`)
- [get_render_text](#Text.get_render_text)(**entity**: `Any{:lx}`)
- [get_geometry](#Text.get_geometry)(**entity**: `Any{:lx}`)
- [get_extents](#Text.get_extents+3)(**entity**: `Any{:lx}`, **offset**: `Any{:lx}`, **count**: `Any{:lx}`)
- [get_extents](#Text.get_extents)(**entity**: `Any{:lx}`)
- [contains](#Text.contains+3)(**entity**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`)
- [has](#Text.has)(**entity**: `Any{:lx}`)
- [set_loc](#Text.set_loc+3)(**entity**: `Entity{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`)
- [set_loc](#Text.set_loc+2)(**entity**: `Entity{:lx}`, **key**: `String{:lx}`)
- [set_loc_with_args](#Text.set_loc_with_args+4)(**entity**: `Entity{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`, **args**: `List{:lx}`)
- [set_loc_with_args](#Text.set_loc_with_args+3)(**entity**: `Entity{:lx}`, **key**: `String{:lx}`, **args**: `List{:lx}`)
- [get_text](#Text.get_text)(**entity**: `Any{:lx}`)
- [set_text_buffer](#Text.set_text_buffer+2)(**entity**: `Any{:lx}`, **string**: `Any{:lx}`)
- [set_text](#Text.set_text+2)(**entity**: `Any{:lx}`, **string**: `Any{:lx}`)


---

<endpoint module="luxe: system/text.modifier" class="Text" signature="create(entity : Any, material : Any, default_size : Any, default_font : Any, default_color : Any)"></endpoint>
<h4 class="signature_head">Text.create</h4><a class="signature-arity" href="#Text.create+5" title="Permanent link">5</a><signature id="Text.create+5">

```lx
Text.create(entity : Any, material : Any, default_size : Any, default_font : Any, default_color : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="destroy(entity : Any)"></endpoint>
<h4 class="signature_head">Text.destroy</h4><a class="signature-arity" href="#Text.destroy" title="Permanent link">1</a><signature id="Text.destroy">

```lx
Text.destroy(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_size(entity : Any, default_size : Any)"></endpoint>
<h4 class="signature_head">Text.set_size</h4><a class="signature-arity" href="#Text.set_size+2" title="Permanent link">2</a><signature id="Text.set_size+2">

```lx
Text.set_size(entity : Any, default_size : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_size(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_size</h4><a class="signature-arity" href="#Text.get_size" title="Permanent link">1</a><signature id="Text.get_size">

```lx
Text.get_size(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_font(entity : Any, default_font : Any)"></endpoint>
<h4 class="signature_head">Text.set_font</h4><a class="signature-arity" href="#Text.set_font+2" title="Permanent link">2</a><signature id="Text.set_font+2">

```lx
Text.set_font(entity : Any, default_font : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_font(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_font</h4><a class="signature-arity" href="#Text.get_font" title="Permanent link">1</a><signature id="Text.get_font">

```lx
Text.get_font(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_style(entity : Entity, style : TextStyle)"></endpoint>
<h4 class="signature_head">Text.set_style</h4><a class="signature-arity" href="#Text.set_style+2" title="Permanent link">2</a><signature id="Text.set_style+2">

```lx
Text.set_style(entity : Entity, style : TextStyle) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_style(entity : Entity)"></endpoint>
<h4 class="signature_head">Text.get_style</h4><a class="signature-arity" href="#Text.get_style" title="Permanent link">1</a><signature id="Text.get_style">

```lx
Text.get_style(entity : Entity) : TextStyle
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_outline(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
<h4 class="signature_head">Text.set_outline</h4><a class="signature-arity" href="#Text.set_outline+5" title="Permanent link">5</a><signature id="Text.set_outline+5">

```lx
Text.set_outline(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_shadow(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
<h4 class="signature_head">Text.set_shadow</h4><a class="signature-arity" href="#Text.set_shadow+5" title="Permanent link">5</a><signature id="Text.set_shadow+5">

```lx
Text.set_shadow(entity : Entity, radius : Num, softness : Num, color : Color, offset : Float2) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_max_visible(entity : Entity, max_visible : Num)"></endpoint>
<h4 class="signature_head">Text.set_max_visible</h4><a class="signature-arity" href="#Text.set_max_visible+2" title="Permanent link">2</a><signature id="Text.set_max_visible+2">

```lx
Text.set_max_visible(entity : Entity, max_visible : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_max_visible(entity : Entity)"></endpoint>
<h4 class="signature_head">Text.get_max_visible</h4><a class="signature-arity" href="#Text.get_max_visible" title="Permanent link">1</a><signature id="Text.get_max_visible">

```lx
Text.get_max_visible(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_color(entity : Any, default_color : Any)"></endpoint>
<h4 class="signature_head">Text.set_color</h4><a class="signature-arity" href="#Text.set_color+2" title="Permanent link">2</a><signature id="Text.set_color+2">

```lx
Text.set_color(entity : Any, default_color : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_color(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_color</h4><a class="signature-arity" href="#Text.get_color" title="Permanent link">1</a><signature id="Text.get_color">

```lx
Text.get_color(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align(entity : Any, align : Any, align_vertical : Any)"></endpoint>
<h4 class="signature_head">Text.set_align</h4><a class="signature-arity" href="#Text.set_align+3" title="Permanent link">3</a><signature id="Text.set_align+3">

```lx
Text.set_align(entity : Any, align : Any, align_vertical : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align(entity : Any, align : Any)"></endpoint>
<h4 class="signature_head">Text.set_align</h4><a class="signature-arity" href="#Text.set_align+2" title="Permanent link">2</a><signature id="Text.set_align+2">

```lx
Text.set_align(entity : Any, align : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_align(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_align</h4><a class="signature-arity" href="#Text.get_align" title="Permanent link">1</a><signature id="Text.get_align">

```lx
Text.get_align(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_align_vertical(entity : Any, align_vertical : Any)"></endpoint>
<h4 class="signature_head">Text.set_align_vertical</h4><a class="signature-arity" href="#Text.set_align_vertical+2" title="Permanent link">2</a><signature id="Text.set_align_vertical+2">

```lx
Text.set_align_vertical(entity : Any, align_vertical : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_align_vertical(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_align_vertical</h4><a class="signature-arity" href="#Text.get_align_vertical" title="Permanent link">1</a><signature id="Text.get_align_vertical">

```lx
Text.get_align_vertical(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_bounds(entity : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
<h4 class="signature_head">Text.set_bounds</h4><a class="signature-arity" href="#Text.set_bounds+5" title="Permanent link">5</a><signature id="Text.set_bounds+5">

```lx
Text.set_bounds(entity : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_bounds(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_bounds</h4><a class="signature-arity" href="#Text.get_bounds" title="Permanent link">1</a><signature id="Text.get_bounds">

```lx
Text.get_bounds(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_attr(entity : Entity, start : Num, length : Num, type : TextAttrType, key : String, value : Any)"></endpoint>
<h4 class="signature_head">Text.set_attr</h4><a class="signature-arity" href="#Text.set_attr+6" title="Permanent link">6</a><signature id="Text.set_attr+6">

```lx
Text.set_attr(entity : Entity, start : Num, length : Num, type : TextAttrType, key : String, value : Any) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="attr_clear(entity : Any)"></endpoint>
<h4 class="signature_head">Text.attr_clear</h4><a class="signature-arity" href="#Text.attr_clear" title="Permanent link">1</a><signature id="Text.attr_clear">

```lx
Text.attr_clear(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="commit(entity : Any)"></endpoint>
<h4 class="signature_head">Text.commit</h4><a class="signature-arity" href="#Text.commit" title="Permanent link">1</a><signature id="Text.commit">

```lx
Text.commit(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_render_text(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_render_text</h4><a class="signature-arity" href="#Text.get_render_text" title="Permanent link">1</a><signature id="Text.get_render_text">

```lx
Text.get_render_text(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_geometry(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_geometry</h4><a class="signature-arity" href="#Text.get_geometry" title="Permanent link">1</a><signature id="Text.get_geometry">

```lx
Text.get_geometry(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_extents(entity : Any, offset : Any, count : Any)"></endpoint>
<h4 class="signature_head">Text.get_extents</h4><a class="signature-arity" href="#Text.get_extents+3" title="Permanent link">3</a><signature id="Text.get_extents+3">

```lx
Text.get_extents(entity : Any, offset : Any, count : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_extents(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_extents</h4><a class="signature-arity" href="#Text.get_extents" title="Permanent link">1</a><signature id="Text.get_extents">

```lx
Text.get_extents(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="contains(entity : Any, x : Any, y : Any)"></endpoint>
<h4 class="signature_head">Text.contains</h4><a class="signature-arity" href="#Text.contains+3" title="Permanent link">3</a><signature id="Text.contains+3">

```lx
Text.contains(entity : Any, x : Any, y : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="has(entity : Any)"></endpoint>
<h4 class="signature_head">Text.has</h4><a class="signature-arity" href="#Text.has" title="Permanent link">1</a><signature id="Text.has">

```lx
Text.has(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc(entity : Entity, space : String, key : String)"></endpoint>
<h4 class="signature_head">Text.set_loc</h4><a class="signature-arity" href="#Text.set_loc+3" title="Permanent link">3</a><signature id="Text.set_loc+3">

```lx
Text.set_loc(entity : Entity, space : String, key : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc(entity : Entity, key : String)"></endpoint>
<h4 class="signature_head">Text.set_loc</h4><a class="signature-arity" href="#Text.set_loc+2" title="Permanent link">2</a><signature id="Text.set_loc+2">

```lx
Text.set_loc(entity : Entity, key : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc_with_args(entity : Entity, space : String, key : String, args : List)"></endpoint>
<h4 class="signature_head">Text.set_loc_with_args</h4><a class="signature-arity" href="#Text.set_loc_with_args+4" title="Permanent link">4</a><signature id="Text.set_loc_with_args+4">

```lx
Text.set_loc_with_args(entity : Entity, space : String, key : String, args : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_loc_with_args(entity : Entity, key : String, args : List)"></endpoint>
<h4 class="signature_head">Text.set_loc_with_args</h4><a class="signature-arity" href="#Text.set_loc_with_args+3" title="Permanent link">3</a><signature id="Text.set_loc_with_args+3">

```lx
Text.set_loc_with_args(entity : Entity, key : String, args : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="get_text(entity : Any)"></endpoint>
<h4 class="signature_head">Text.get_text</h4><a class="signature-arity" href="#Text.get_text" title="Permanent link">1</a><signature id="Text.get_text">

```lx
Text.get_text(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_text_buffer(entity : Any, string : Any)"></endpoint>
<h4 class="signature_head">Text.set_text_buffer</h4><a class="signature-arity" href="#Text.set_text_buffer+2" title="Permanent link">2</a><signature id="Text.set_text_buffer+2">

```lx
Text.set_text_buffer(entity : Any, string : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="Text" signature="set_text(entity : Any, string : Any)"></endpoint>
<h4 class="signature_head">Text.set_text</h4><a class="signature-arity" href="#Text.set_text+2" title="Permanent link">2</a><signature id="Text.set_text+2">

```lx
Text.set_text(entity : Any, string : Any) : unknown
```
</signature>

> no docs found   


### TextAlignH
`import "luxe: system/text.modifier" for TextAlignH{:lx}`
> no docs found

- [left](#TextAlignH.left)
- [center](#TextAlignH.center)
- [right](#TextAlignH.right)


---

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="left"></endpoint>
<h4 class="signature_head">TextAlignH.left</h4><a class="signature-arity" href="#TextAlignH.left" title="Permanent link">1</a><signature id="TextAlignH.left">

```lx
TextAlignH.left : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="center"></endpoint>
<h4 class="signature_head">TextAlignH.center</h4><a class="signature-arity" href="#TextAlignH.center" title="Permanent link">1</a><signature id="TextAlignH.center">

```lx
TextAlignH.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignH" signature="right"></endpoint>
<h4 class="signature_head">TextAlignH.right</h4><a class="signature-arity" href="#TextAlignH.right" title="Permanent link">1</a><signature id="TextAlignH.right">

```lx
TextAlignH.right : unknown
```
</signature>

> no docs found   


### TextAlignV
`import "luxe: system/text.modifier" for TextAlignV{:lx}`
> no docs found

- [top](#TextAlignV.top)
- [center](#TextAlignV.center)
- [bottom](#TextAlignV.bottom)


---

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="top"></endpoint>
<h4 class="signature_head">TextAlignV.top</h4><a class="signature-arity" href="#TextAlignV.top" title="Permanent link">1</a><signature id="TextAlignV.top">

```lx
TextAlignV.top : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="center"></endpoint>
<h4 class="signature_head">TextAlignV.center</h4><a class="signature-arity" href="#TextAlignV.center" title="Permanent link">1</a><signature id="TextAlignV.center">

```lx
TextAlignV.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/text.modifier" class="TextAlignV" signature="bottom"></endpoint>
<h4 class="signature_head">TextAlignV.bottom</h4><a class="signature-arity" href="#TextAlignV.bottom" title="Permanent link">1</a><signature id="TextAlignV.bottom">

```lx
TextAlignV.bottom : unknown
```
</signature>

> no docs found   

