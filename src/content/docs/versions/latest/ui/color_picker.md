---
title: "luxe: ui/color_picker"
description: API version 2025.11.1
---
## `luxe: ui/color_picker{:lx}` module

- [ColorPicker](#colorpicker)   
- [ColorPickerData](#colorpickerdata)   

---


### ColorPicker
`import "luxe: ui/color_picker" for ColorPicker{:lx}`
> no docs found

- [create](#ColorPicker.create)(**ui**: `Entity{:lx}`)
- [set_color](#ColorPicker.set_color+2)(**control**: `Control{:lx}`, **color**: `Color{:lx}`)
- [get_color](#ColorPicker.get_color)(**control**: `Control{:lx}`)
- [set_allow_hdr](#ColorPicker.set_allow_hdr+2)(**control**: `Control{:lx}`, **allow**: `Bool{:lx}`)


---

<endpoint module="luxe: ui/color_picker" class="ColorPicker" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">ColorPicker.create</h4><a class="signature-arity" href="#ColorPicker.create" title="Permanent link">1</a><signature id="ColorPicker.create">

```lx
ColorPicker.create(ui : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPicker" signature="set_color(control : Control, color : Color)"></endpoint>
<h4 class="signature_head">ColorPicker.set_color</h4><a class="signature-arity" href="#ColorPicker.set_color+2" title="Permanent link">2</a><signature id="ColorPicker.set_color+2">

```lx
ColorPicker.set_color(control : Control, color : Color) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPicker" signature="get_color(control : Control)"></endpoint>
<h4 class="signature_head">ColorPicker.get_color</h4><a class="signature-arity" href="#ColorPicker.get_color" title="Permanent link">1</a><signature id="ColorPicker.get_color">

```lx
ColorPicker.get_color(control : Control) : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPicker" signature="set_allow_hdr(control : Control, allow : Bool)"></endpoint>
<h4 class="signature_head">ColorPicker.set_allow_hdr</h4><a class="signature-arity" href="#ColorPicker.set_allow_hdr+2" title="Permanent link">2</a><signature id="ColorPicker.set_allow_hdr+2">

```lx
ColorPicker.set_allow_hdr(control : Control, allow : Bool) : unknown
```
</signature>

> no docs found   


### ColorPickerData
`import "luxe: ui/color_picker" for ColorPickerData{:lx}`
> no docs found

- [triangle_size](#ColorPickerData.triangle_size)
- [outer_ring_size](#ColorPickerData.outer_ring_size)
- [inner_ring_size](#ColorPickerData.inner_ring_size)
- [r](#ColorPickerData.r)
- [g](#ColorPickerData.g)
- [b](#ColorPickerData.b)
- [h](#ColorPickerData.h)
- [s](#ColorPickerData.s)
- [v](#ColorPickerData.v)
- [a](#ColorPickerData.a)
- [color_ldr](#ColorPickerData.color_ldr)
- [color_hdr](#ColorPickerData.color_hdr)
- [srgb](#ColorPickerData.srgb)
- [srgb](#ColorPickerData.srgb=)=(value : Bool)
- [hdr_multiplier](#ColorPickerData.hdr_multiplier)
- [hdr_multiplier](#ColorPickerData.hdr_multiplier=)=(value : Num)
- [allow_hdr](#ColorPickerData.allow_hdr)
- [allow_hdr](#ColorPickerData.allow_hdr=)=(v : Bool)
- [show_hdr](#ColorPickerData.show_hdr)
- [show_hdr](#ColorPickerData.show_hdr=)=(v : Bool)
- [show_components](#ColorPickerData.show_components)
- [show_components](#ColorPickerData.show_components)(**v**: `String{:lx}`)
- [debug](#ColorPickerData.debug=)=(v : Any)
- [new](#ColorPickerData.new+2)(**ui**: `Control{:lx}`, **root**: `Control{:lx}`)
- [set_allow_hdr](#ColorPickerData.set_allow_hdr)(**allow**: `Bool{:lx}`)
- [set_color](#ColorPickerData.set_color)(**color**: `Color{:lx}`)
- [get_rgba](#ColorPickerData.get_rgba)()
- [get_rgba](#ColorPickerData.get_rgba+2)(**srgb**: `Bool{:lx}`, **hdr**: `Bool{:lx}`)
- [get_hsva_component](#ColorPickerData.get_hsva_component)()
- [get_hsva](#ColorPickerData.get_hsva)(**srgb**: `Bool{:lx}`)
- [set_rgba](#ColorPickerData.set_rgba)(**col**: `Color{:lx}`)
- [set_rgba](#ColorPickerData.set_rgba+2)(**col**: `Color{:lx}`, **srgb**: `Bool{:lx}`)
- [set_rgba](#ColorPickerData.set_rgba+3)(**col**: `Color{:lx}`, **srgb**: `Bool{:lx}`, **update_spaces**: `Bool{:lx}`)
- [set_hsva](#ColorPickerData.set_hsva)(**col**: `Any{:lx}`)
- [set_hsva](#ColorPickerData.set_hsva+2)(**col**: `Color{:lx}`, **srgb**: `Bool{:lx}`)
- [set_hsva](#ColorPickerData.set_hsva+3)(**col**: `Color{:lx}`, **srgb**: `Bool{:lx}`, **update_spaces**: `Bool{:lx}`)
- [set_rgba_component](#ColorPickerData.set_rgba_component+2)(**index**: `Num{:lx}`, **value**: `Num{:lx}`)
- [set_rgba_component](#ColorPickerData.set_rgba_component+3)(**index**: `Num{:lx}`, **value**: `Num{:lx}`, **srgb**: `Bool{:lx}`)
- [get_rgba_component](#ColorPickerData.get_rgba_component)(**index**: `Num{:lx}`)
- [get_rgba_component](#ColorPickerData.get_rgba_component+2)(**index**: `Num{:lx}`, **srgb**: `Bool{:lx}`)
- [get_rgba_component](#ColorPickerData.get_rgba_component+3)(**index**: `Num{:lx}`, **srgb**: `Bool{:lx}`, **hdr**: `Bool{:lx}`)
- [set_hsva_component](#ColorPickerData.set_hsva_component+2)(**index**: `Num{:lx}`, **value**: `Num{:lx}`)
- [set_hsva_component](#ColorPickerData.set_hsva_component+3)(**index**: `Num{:lx}`, **value**: `Num{:lx}`, **srgb**: `Bool{:lx}`)
- [get_hsva_component](#ColorPickerData.get_hsva_component)(**index**: `Num{:lx}`)
- [get_hsva_component](#ColorPickerData.get_hsva_component+2)(**index**: `Num{:lx}`, **srgb**: `Bool{:lx}`)
- [create_colorpicker](#ColorPickerData.create_colorpicker+2)(**ui**: `Entity{:lx}`, **color_view**: `Control{:lx}`)
- [hdr_settings](#ColorPickerData.hdr_settings+2)(**ui**: `UI{:lx}`, **data_control**: `Control{:lx}`)
- [color_display](#ColorPickerData.color_display+2)(**ui**: `UI{:lx}`, **data_control**: `Control{:lx}`)
- [colorspace_choice](#ColorPickerData.colorspace_choice+2)(**ui**: `Any{:lx}`, **data_control**: `Any{:lx}`)
- [hex_input](#ColorPickerData.hex_input+2)(**ui**: `UI{:lx}`, **data_control**: `Control{:lx}`)
- [rgba_values](#ColorPickerData.rgba_values+2)(**ui**: `UI{:lx}`, **color_view**: `Control{:lx}`)
- [hsva_values](#ColorPickerData.hsva_values+2)(**ui**: `UI{:lx}`, **color_view**: `Control{:lx}`)
- [color_component](#ColorPickerData.color_component+5)(**ui**: `Entity{:lx}`, **name**: `String{:lx}`, **index**: `Num{:lx}`, **color_view**: `Control{:lx}`, **space**: `String{:lx}`)
- [create_hsv_wheel](#ColorPickerData.create_hsv_wheel+2)(**ui**: `Entity{:lx}`, **data_root**: `Control{:lx}`)


---

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="triangle_size"></endpoint>
<h4 class="signature_head">ColorPickerData.triangle_size</h4><a class="signature-arity" href="#ColorPickerData.triangle_size" title="Permanent link">1</a><signature id="ColorPickerData.triangle_size">

```lx
ColorPickerData.triangle_size : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="outer_ring_size"></endpoint>
<h4 class="signature_head">ColorPickerData.outer_ring_size</h4><a class="signature-arity" href="#ColorPickerData.outer_ring_size" title="Permanent link">1</a><signature id="ColorPickerData.outer_ring_size">

```lx
ColorPickerData.outer_ring_size : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="inner_ring_size"></endpoint>
<h4 class="signature_head">ColorPickerData.inner_ring_size</h4><a class="signature-arity" href="#ColorPickerData.inner_ring_size" title="Permanent link">1</a><signature id="ColorPickerData.inner_ring_size">

```lx
ColorPickerData.inner_ring_size : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="r"></endpoint>
<h4 class="signature_head">ColorPickerData.r</h4><a class="signature-arity" href="#ColorPickerData.r" title="Permanent link">1</a><signature id="ColorPickerData.r">

```lx
ColorPickerData.r : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="g"></endpoint>
<h4 class="signature_head">ColorPickerData.g</h4><a class="signature-arity" href="#ColorPickerData.g" title="Permanent link">1</a><signature id="ColorPickerData.g">

```lx
ColorPickerData.g : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="b"></endpoint>
<h4 class="signature_head">ColorPickerData.b</h4><a class="signature-arity" href="#ColorPickerData.b" title="Permanent link">1</a><signature id="ColorPickerData.b">

```lx
ColorPickerData.b : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="h"></endpoint>
<h4 class="signature_head">ColorPickerData.h</h4><a class="signature-arity" href="#ColorPickerData.h" title="Permanent link">1</a><signature id="ColorPickerData.h">

```lx
ColorPickerData.h : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="s"></endpoint>
<h4 class="signature_head">ColorPickerData.s</h4><a class="signature-arity" href="#ColorPickerData.s" title="Permanent link">1</a><signature id="ColorPickerData.s">

```lx
ColorPickerData.s : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="v"></endpoint>
<h4 class="signature_head">ColorPickerData.v</h4><a class="signature-arity" href="#ColorPickerData.v" title="Permanent link">1</a><signature id="ColorPickerData.v">

```lx
ColorPickerData.v : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="a"></endpoint>
<h4 class="signature_head">ColorPickerData.a</h4><a class="signature-arity" href="#ColorPickerData.a" title="Permanent link">1</a><signature id="ColorPickerData.a">

```lx
ColorPickerData.a : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="color_ldr"></endpoint>
<h4 class="signature_head">ColorPickerData.color_ldr</h4><a class="signature-arity" href="#ColorPickerData.color_ldr" title="Permanent link">1</a><signature id="ColorPickerData.color_ldr">

```lx
ColorPickerData.color_ldr : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="color_hdr"></endpoint>
<h4 class="signature_head">ColorPickerData.color_hdr</h4><a class="signature-arity" href="#ColorPickerData.color_hdr" title="Permanent link">1</a><signature id="ColorPickerData.color_hdr">

```lx
ColorPickerData.color_hdr : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="srgb"></endpoint>
<h4 class="signature_head">ColorPickerData.srgb</h4><a class="signature-arity" href="#ColorPickerData.srgb" title="Permanent link">1</a><signature id="ColorPickerData.srgb">

```lx
ColorPickerData.srgb : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="srgb=(value : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.srgb</h4><a class="signature-arity" href="#ColorPickerData.srgb=" title="Permanent link">1</a><signature id="ColorPickerData.srgb=">

```lx
ColorPickerData.srgb=(value : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="hdr_multiplier"></endpoint>
<h4 class="signature_head">ColorPickerData.hdr_multiplier</h4><a class="signature-arity" href="#ColorPickerData.hdr_multiplier" title="Permanent link">1</a><signature id="ColorPickerData.hdr_multiplier">

```lx
ColorPickerData.hdr_multiplier : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="hdr_multiplier=(value : Num)"></endpoint>
<h4 class="signature_head">ColorPickerData.hdr_multiplier</h4><a class="signature-arity" href="#ColorPickerData.hdr_multiplier=" title="Permanent link">1</a><signature id="ColorPickerData.hdr_multiplier=">

```lx
ColorPickerData.hdr_multiplier=(value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="allow_hdr"></endpoint>
<h4 class="signature_head">ColorPickerData.allow_hdr</h4><a class="signature-arity" href="#ColorPickerData.allow_hdr" title="Permanent link">1</a><signature id="ColorPickerData.allow_hdr">

```lx
ColorPickerData.allow_hdr : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="allow_hdr=(v : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.allow_hdr</h4><a class="signature-arity" href="#ColorPickerData.allow_hdr=" title="Permanent link">1</a><signature id="ColorPickerData.allow_hdr=">

```lx
ColorPickerData.allow_hdr=(v : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="show_hdr"></endpoint>
<h4 class="signature_head">ColorPickerData.show_hdr</h4><a class="signature-arity" href="#ColorPickerData.show_hdr" title="Permanent link">1</a><signature id="ColorPickerData.show_hdr">

```lx
ColorPickerData.show_hdr : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="show_hdr=(v : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.show_hdr</h4><a class="signature-arity" href="#ColorPickerData.show_hdr=" title="Permanent link">1</a><signature id="ColorPickerData.show_hdr=">

```lx
ColorPickerData.show_hdr=(v : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="show_components"></endpoint>
<h4 class="signature_head">ColorPickerData.show_components</h4><a class="signature-arity" href="#ColorPickerData.show_components" title="Permanent link">1</a><signature id="ColorPickerData.show_components">

```lx
ColorPickerData.show_components : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="show_components(v : String)"></endpoint>
<h4 class="signature_head">ColorPickerData.show_components</h4><a class="signature-arity" href="#ColorPickerData.show_components" title="Permanent link">1</a><signature id="ColorPickerData.show_components">

```lx
ColorPickerData.show_components(v : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="debug=(v : Any)"></endpoint>
<h4 class="signature_head">ColorPickerData.debug</h4><a class="signature-arity" href="#ColorPickerData.debug=" title="Permanent link">1</a><signature id="ColorPickerData.debug=">

```lx
ColorPickerData.debug=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="new(ui : Control, root : Control)"></endpoint>
<h4 class="signature_head">ColorPickerData.new</h4><a class="signature-arity" href="#ColorPickerData.new+2" title="Permanent link">2</a><signature id="ColorPickerData.new+2">

```lx
ColorPickerData.new(ui : Control, root : Control) : ColorPickerData
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_allow_hdr(allow : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_allow_hdr</h4><a class="signature-arity" href="#ColorPickerData.set_allow_hdr" title="Permanent link">1</a><signature id="ColorPickerData.set_allow_hdr">

```lx
ColorPickerData.set_allow_hdr(allow : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_color(color : Color)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_color</h4><a class="signature-arity" href="#ColorPickerData.set_color" title="Permanent link">1</a><signature id="ColorPickerData.set_color">

```lx
ColorPickerData.set_color(color : Color) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_rgba()"></endpoint>
<h4 class="signature_head">ColorPickerData.get_rgba</h4><a class="signature-arity" href="#ColorPickerData.get_rgba" title="Permanent link">1</a><signature id="ColorPickerData.get_rgba">

```lx
ColorPickerData.get_rgba() : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_rgba(srgb : Bool, hdr : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.get_rgba</h4><a class="signature-arity" href="#ColorPickerData.get_rgba+2" title="Permanent link">2</a><signature id="ColorPickerData.get_rgba+2">

```lx
ColorPickerData.get_rgba(srgb : Bool, hdr : Bool) : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_hsva_component()"></endpoint>
<h4 class="signature_head">ColorPickerData.get_hsva_component</h4><a class="signature-arity" href="#ColorPickerData.get_hsva_component" title="Permanent link">1</a><signature id="ColorPickerData.get_hsva_component">

```lx
ColorPickerData.get_hsva_component() : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_hsva(srgb : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.get_hsva</h4><a class="signature-arity" href="#ColorPickerData.get_hsva" title="Permanent link">1</a><signature id="ColorPickerData.get_hsva">

```lx
ColorPickerData.get_hsva(srgb : Bool) : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_rgba(col : Color)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_rgba</h4><a class="signature-arity" href="#ColorPickerData.set_rgba" title="Permanent link">1</a><signature id="ColorPickerData.set_rgba">

```lx
ColorPickerData.set_rgba(col : Color) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_rgba(col : Color, srgb : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_rgba</h4><a class="signature-arity" href="#ColorPickerData.set_rgba+2" title="Permanent link">2</a><signature id="ColorPickerData.set_rgba+2">

```lx
ColorPickerData.set_rgba(col : Color, srgb : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_rgba(col : Color, srgb : Bool, update_spaces : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_rgba</h4><a class="signature-arity" href="#ColorPickerData.set_rgba+3" title="Permanent link">3</a><signature id="ColorPickerData.set_rgba+3">

```lx
ColorPickerData.set_rgba(col : Color, srgb : Bool, update_spaces : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_hsva(col : Any)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_hsva</h4><a class="signature-arity" href="#ColorPickerData.set_hsva" title="Permanent link">1</a><signature id="ColorPickerData.set_hsva">

```lx
ColorPickerData.set_hsva(col : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_hsva(col : Color, srgb : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_hsva</h4><a class="signature-arity" href="#ColorPickerData.set_hsva+2" title="Permanent link">2</a><signature id="ColorPickerData.set_hsva+2">

```lx
ColorPickerData.set_hsva(col : Color, srgb : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_hsva(col : Color, srgb : Bool, update_spaces : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_hsva</h4><a class="signature-arity" href="#ColorPickerData.set_hsva+3" title="Permanent link">3</a><signature id="ColorPickerData.set_hsva+3">

```lx
ColorPickerData.set_hsva(col : Color, srgb : Bool, update_spaces : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_rgba_component(index : Num, value : Num)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_rgba_component</h4><a class="signature-arity" href="#ColorPickerData.set_rgba_component+2" title="Permanent link">2</a><signature id="ColorPickerData.set_rgba_component+2">

```lx
ColorPickerData.set_rgba_component(index : Num, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_rgba_component(index : Num, value : Num, srgb : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_rgba_component</h4><a class="signature-arity" href="#ColorPickerData.set_rgba_component+3" title="Permanent link">3</a><signature id="ColorPickerData.set_rgba_component+3">

```lx
ColorPickerData.set_rgba_component(index : Num, value : Num, srgb : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_rgba_component(index : Num)"></endpoint>
<h4 class="signature_head">ColorPickerData.get_rgba_component</h4><a class="signature-arity" href="#ColorPickerData.get_rgba_component" title="Permanent link">1</a><signature id="ColorPickerData.get_rgba_component">

```lx
ColorPickerData.get_rgba_component(index : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_rgba_component(index : Num, srgb : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.get_rgba_component</h4><a class="signature-arity" href="#ColorPickerData.get_rgba_component+2" title="Permanent link">2</a><signature id="ColorPickerData.get_rgba_component+2">

```lx
ColorPickerData.get_rgba_component(index : Num, srgb : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_rgba_component(index : Num, srgb : Bool, hdr : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.get_rgba_component</h4><a class="signature-arity" href="#ColorPickerData.get_rgba_component+3" title="Permanent link">3</a><signature id="ColorPickerData.get_rgba_component+3">

```lx
ColorPickerData.get_rgba_component(index : Num, srgb : Bool, hdr : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_hsva_component(index : Num, value : Num)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_hsva_component</h4><a class="signature-arity" href="#ColorPickerData.set_hsva_component+2" title="Permanent link">2</a><signature id="ColorPickerData.set_hsva_component+2">

```lx
ColorPickerData.set_hsva_component(index : Num, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="set_hsva_component(index : Num, value : Num, srgb : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.set_hsva_component</h4><a class="signature-arity" href="#ColorPickerData.set_hsva_component+3" title="Permanent link">3</a><signature id="ColorPickerData.set_hsva_component+3">

```lx
ColorPickerData.set_hsva_component(index : Num, value : Num, srgb : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_hsva_component(index : Num)"></endpoint>
<h4 class="signature_head">ColorPickerData.get_hsva_component</h4><a class="signature-arity" href="#ColorPickerData.get_hsva_component" title="Permanent link">1</a><signature id="ColorPickerData.get_hsva_component">

```lx
ColorPickerData.get_hsva_component(index : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="get_hsva_component(index : Num, srgb : Bool)"></endpoint>
<h4 class="signature_head">ColorPickerData.get_hsva_component</h4><a class="signature-arity" href="#ColorPickerData.get_hsva_component+2" title="Permanent link">2</a><signature id="ColorPickerData.get_hsva_component+2">

```lx
ColorPickerData.get_hsva_component(index : Num, srgb : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="create_colorpicker(ui : Entity, color_view : Control)"></endpoint>
<h4 class="signature_head">ColorPickerData.create_colorpicker</h4><a class="signature-arity" href="#ColorPickerData.create_colorpicker+2" title="Permanent link">2</a><signature id="ColorPickerData.create_colorpicker+2">

```lx
ColorPickerData.create_colorpicker(ui : Entity, color_view : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="hdr_settings(ui : UI, data_control : Control)"></endpoint>
<h4 class="signature_head">ColorPickerData.hdr_settings</h4><a class="signature-arity" href="#ColorPickerData.hdr_settings+2" title="Permanent link">2</a><signature id="ColorPickerData.hdr_settings+2">

```lx
ColorPickerData.hdr_settings(ui : UI, data_control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="color_display(ui : UI, data_control : Control)"></endpoint>
<h4 class="signature_head">ColorPickerData.color_display</h4><a class="signature-arity" href="#ColorPickerData.color_display+2" title="Permanent link">2</a><signature id="ColorPickerData.color_display+2">

```lx
ColorPickerData.color_display(ui : UI, data_control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="colorspace_choice(ui : Any, data_control : Any)"></endpoint>
<h4 class="signature_head">ColorPickerData.colorspace_choice</h4><a class="signature-arity" href="#ColorPickerData.colorspace_choice+2" title="Permanent link">2</a><signature id="ColorPickerData.colorspace_choice+2">

```lx
ColorPickerData.colorspace_choice(ui : Any, data_control : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="hex_input(ui : UI, data_control : Control)"></endpoint>
<h4 class="signature_head">ColorPickerData.hex_input</h4><a class="signature-arity" href="#ColorPickerData.hex_input+2" title="Permanent link">2</a><signature id="ColorPickerData.hex_input+2">

```lx
ColorPickerData.hex_input(ui : UI, data_control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="rgba_values(ui : UI, color_view : Control)"></endpoint>
<h4 class="signature_head">ColorPickerData.rgba_values</h4><a class="signature-arity" href="#ColorPickerData.rgba_values+2" title="Permanent link">2</a><signature id="ColorPickerData.rgba_values+2">

```lx
ColorPickerData.rgba_values(ui : UI, color_view : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="hsva_values(ui : UI, color_view : Control)"></endpoint>
<h4 class="signature_head">ColorPickerData.hsva_values</h4><a class="signature-arity" href="#ColorPickerData.hsva_values+2" title="Permanent link">2</a><signature id="ColorPickerData.hsva_values+2">

```lx
ColorPickerData.hsva_values(ui : UI, color_view : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="color_component(ui : Entity, name : String, index : Num, color_view : Control, space : String)"></endpoint>
<h4 class="signature_head">ColorPickerData.color_component</h4><a class="signature-arity" href="#ColorPickerData.color_component+5" title="Permanent link">5</a><signature id="ColorPickerData.color_component+5">

```lx
ColorPickerData.color_component(ui : Entity, name : String, index : Num, color_view : Control, space : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/color_picker" class="ColorPickerData" signature="create_hsv_wheel(ui : Entity, data_root : Control)"></endpoint>
<h4 class="signature_head">ColorPickerData.create_hsv_wheel</h4><a class="signature-arity" href="#ColorPickerData.create_hsv_wheel+2" title="Permanent link">2</a><signature id="ColorPickerData.create_hsv_wheel+2">

```lx
ColorPickerData.create_hsv_wheel(ui : Entity, data_root : Control) : Control
```
</signature>

> no docs found   

