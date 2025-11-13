---
title: "luxe: ui/text.control"
description: API version 2025.11.1
---
## `luxe: ui/text.control{:lx}` module

- [Data](#data)   
- [TextAlignH](#textalignh)   
- [TextAlignV](#textalignv)   
- [UIText](#uitext)   

---


### Data
`import "luxe: ui/text.control" for Data{:lx}`
> no docs found

- `var text : String = ""{:lx}`
- `var align : TextAlignH = TextAlignH.left{:lx}`
- `var align_vertical : TextAlignV = TextAlignV.center{:lx}`
- `var override : Object = Object{:lx}`


---


### TextAlignH
`import "luxe: ui/text.control" for TextAlignH{:lx}`
> no docs found

- [left](#TextAlignH.left)
- [center](#TextAlignH.center)
- [right](#TextAlignH.right)


---

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="left"></endpoint>
<h4 class="signature_head">TextAlignH.left</h4><a class="signature-arity" href="#TextAlignH.left" title="Permanent link">1</a><signature id="TextAlignH.left">

```lx
TextAlignH.left : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="center"></endpoint>
<h4 class="signature_head">TextAlignH.center</h4><a class="signature-arity" href="#TextAlignH.center" title="Permanent link">1</a><signature id="TextAlignH.center">

```lx
TextAlignH.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="right"></endpoint>
<h4 class="signature_head">TextAlignH.right</h4><a class="signature-arity" href="#TextAlignH.right" title="Permanent link">1</a><signature id="TextAlignH.right">

```lx
TextAlignH.right : unknown
```
</signature>

> no docs found   


### TextAlignV
`import "luxe: ui/text.control" for TextAlignV{:lx}`
> no docs found

- [top](#TextAlignV.top)
- [center](#TextAlignV.center)
- [bottom](#TextAlignV.bottom)


---

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="top"></endpoint>
<h4 class="signature_head">TextAlignV.top</h4><a class="signature-arity" href="#TextAlignV.top" title="Permanent link">1</a><signature id="TextAlignV.top">

```lx
TextAlignV.top : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="center"></endpoint>
<h4 class="signature_head">TextAlignV.center</h4><a class="signature-arity" href="#TextAlignV.center" title="Permanent link">1</a><signature id="TextAlignV.center">

```lx
TextAlignV.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="bottom"></endpoint>
<h4 class="signature_head">TextAlignV.bottom</h4><a class="signature-arity" href="#TextAlignV.bottom" title="Permanent link">1</a><signature id="TextAlignV.bottom">

```lx
TextAlignV.bottom : unknown
```
</signature>

> no docs found   


### UIText
`import "luxe: ui/text.control" for UIText{:lx}`
> no docs found

- [override](#UIText.override)(**text**: `Control{:lx}`)
- [override_text](#UIText.override_text)(**text**: `Control{:lx}`)
- [create](#UIText.create)(**ui_entity**: `Any{:lx}`)
- [select_all](#UIText.select_all)(**control**: `Control{:lx}`)
- [has_selected](#UIText.has_selected)(**control**: `Control{:lx}`)
- [invalidate](#UIText.invalidate+2)(**control**: `Control{:lx}`, **change_before**: `String{:lx}`)
- [set_text](#UIText.set_text+2)(**control**: `Control{:lx}`, **text**: `String{:lx}`)
- [get_text](#UIText.get_text)(**control**: `Control{:lx}`)
- [get_font](#UIText.get_font)(**control**: `Control{:lx}`)
- [set_font](#UIText.set_font+2)(**control**: `Control{:lx}`, **font**: `Font{:lx}`)
- [set_color](#UIText.set_color+2)(**control**: `Control{:lx}`, **color**: `Color{:lx}`)
- [get_color](#UIText.get_color)(**control**: `Control{:lx}`)
- [set_text_size](#UIText.set_text_size+2)(**control**: `Control{:lx}`, **size**: `Num{:lx}`)
- [get_text_size](#UIText.get_text_size)(**control**: `Control{:lx}`)
- [set_align](#UIText.set_align+2)(**control**: `Control{:lx}`, **align**: `TextAlign{:lx}`)
- [get_align](#UIText.get_align)(**control**: `Control{:lx}`)
- [set_align_vertical](#UIText.set_align_vertical+2)(**control**: `Control{:lx}`, **align**: `TextAlign{:lx}`)
- [get_align_vertical](#UIText.get_align_vertical)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/text.control" class="UIText" signature="override(text : Control)"></endpoint>
<h4 class="signature_head">UIText.override</h4><a class="signature-arity" href="#UIText.override" title="Permanent link">1</a><signature id="UIText.override">

```lx
UIText.override(text : Control) : TextInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="override_text(text : Control)"></endpoint>
<h4 class="signature_head">UIText.override_text</h4><a class="signature-arity" href="#UIText.override_text" title="Permanent link">1</a><signature id="UIText.override_text">

```lx
UIText.override_text(text : Control) : LabelInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="create(ui_entity : Any)"></endpoint>
<h4 class="signature_head">UIText.create</h4><a class="signature-arity" href="#UIText.create" title="Permanent link">1</a><signature id="UIText.create">

```lx
UIText.create(ui_entity : Any) : UIText
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="select_all(control : Control)"></endpoint>
<h4 class="signature_head">UIText.select_all</h4><a class="signature-arity" href="#UIText.select_all" title="Permanent link">1</a><signature id="UIText.select_all">

```lx
UIText.select_all(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="has_selected(control : Control)"></endpoint>
<h4 class="signature_head">UIText.has_selected</h4><a class="signature-arity" href="#UIText.has_selected" title="Permanent link">1</a><signature id="UIText.has_selected">

```lx
UIText.has_selected(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="invalidate(control : Control, change_before : String)"></endpoint>
<h4 class="signature_head">UIText.invalidate</h4><a class="signature-arity" href="#UIText.invalidate+2" title="Permanent link">2</a><signature id="UIText.invalidate+2">

```lx
UIText.invalidate(control : Control, change_before : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_text(control : Control, text : String)"></endpoint>
<h4 class="signature_head">UIText.set_text</h4><a class="signature-arity" href="#UIText.set_text+2" title="Permanent link">2</a><signature id="UIText.set_text+2">

```lx
UIText.set_text(control : Control, text : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_text(control : Control)"></endpoint>
<h4 class="signature_head">UIText.get_text</h4><a class="signature-arity" href="#UIText.get_text" title="Permanent link">1</a><signature id="UIText.get_text">

```lx
UIText.get_text(control : Control) : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_font(control : Control)"></endpoint>
<h4 class="signature_head">UIText.get_font</h4><a class="signature-arity" href="#UIText.get_font" title="Permanent link">1</a><signature id="UIText.get_font">

```lx
UIText.get_font(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_font(control : Control, font : Font)"></endpoint>
<h4 class="signature_head">UIText.set_font</h4><a class="signature-arity" href="#UIText.set_font+2" title="Permanent link">2</a><signature id="UIText.set_font+2">

```lx
UIText.set_font(control : Control, font : Font) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_color(control : Control, color : Color)"></endpoint>
<h4 class="signature_head">UIText.set_color</h4><a class="signature-arity" href="#UIText.set_color+2" title="Permanent link">2</a><signature id="UIText.set_color+2">

```lx
UIText.set_color(control : Control, color : Color) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_color(control : Control)"></endpoint>
<h4 class="signature_head">UIText.get_color</h4><a class="signature-arity" href="#UIText.get_color" title="Permanent link">1</a><signature id="UIText.get_color">

```lx
UIText.get_color(control : Control) : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_text_size(control : Control, size : Num)"></endpoint>
<h4 class="signature_head">UIText.set_text_size</h4><a class="signature-arity" href="#UIText.set_text_size+2" title="Permanent link">2</a><signature id="UIText.set_text_size+2">

```lx
UIText.set_text_size(control : Control, size : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_text_size(control : Control)"></endpoint>
<h4 class="signature_head">UIText.get_text_size</h4><a class="signature-arity" href="#UIText.get_text_size" title="Permanent link">1</a><signature id="UIText.get_text_size">

```lx
UIText.get_text_size(control : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_align(control : Control, align : TextAlign)"></endpoint>
<h4 class="signature_head">UIText.set_align</h4><a class="signature-arity" href="#UIText.set_align+2" title="Permanent link">2</a><signature id="UIText.set_align+2">

```lx
UIText.set_align(control : Control, align : TextAlign) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_align(control : Control)"></endpoint>
<h4 class="signature_head">UIText.get_align</h4><a class="signature-arity" href="#UIText.get_align" title="Permanent link">1</a><signature id="UIText.get_align">

```lx
UIText.get_align(control : Control) : TextAlign
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_align_vertical(control : Control, align : TextAlign)"></endpoint>
<h4 class="signature_head">UIText.set_align_vertical</h4><a class="signature-arity" href="#UIText.set_align_vertical+2" title="Permanent link">2</a><signature id="UIText.set_align_vertical+2">

```lx
UIText.set_align_vertical(control : Control, align : TextAlign) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_align_vertical(control : Control)"></endpoint>
<h4 class="signature_head">UIText.get_align_vertical</h4><a class="signature-arity" href="#UIText.get_align_vertical" title="Permanent link">1</a><signature id="UIText.get_align_vertical">

```lx
UIText.get_align_vertical(control : Control) : Text
```
</signature>

> no docs found   

