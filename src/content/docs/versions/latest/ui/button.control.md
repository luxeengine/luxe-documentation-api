---
title: "luxe: ui/button.control"
description: API version 2025.11.1
---
## `luxe: ui/button.control{:lx}` module

- [ButtonAlignH](#buttonalignh)   
- [ButtonAlignV](#buttonalignv)   
- [Data](#data)   
- [Localization](#localization)   
- [UIButton](#uibutton)   

---


### ButtonAlignH
`import "luxe: ui/button.control" for ButtonAlignH{:lx}`
> no docs found

- [left](#ButtonAlignH.left)
- [center](#ButtonAlignH.center)
- [right](#ButtonAlignH.right)


---

<endpoint module="luxe: ui/button.control" class="ButtonAlignH" signature="left"></endpoint>
<h4 class="signature_head">ButtonAlignH.left</h4><a class="signature-arity" href="#ButtonAlignH.left" title="Permanent link">1</a><signature id="ButtonAlignH.left">

```lx
ButtonAlignH.left : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="ButtonAlignH" signature="center"></endpoint>
<h4 class="signature_head">ButtonAlignH.center</h4><a class="signature-arity" href="#ButtonAlignH.center" title="Permanent link">1</a><signature id="ButtonAlignH.center">

```lx
ButtonAlignH.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="ButtonAlignH" signature="right"></endpoint>
<h4 class="signature_head">ButtonAlignH.right</h4><a class="signature-arity" href="#ButtonAlignH.right" title="Permanent link">1</a><signature id="ButtonAlignH.right">

```lx
ButtonAlignH.right : unknown
```
</signature>

> no docs found   


### ButtonAlignV
`import "luxe: ui/button.control" for ButtonAlignV{:lx}`
> no docs found

- [top](#ButtonAlignV.top)
- [center](#ButtonAlignV.center)
- [bottom](#ButtonAlignV.bottom)


---

<endpoint module="luxe: ui/button.control" class="ButtonAlignV" signature="top"></endpoint>
<h4 class="signature_head">ButtonAlignV.top</h4><a class="signature-arity" href="#ButtonAlignV.top" title="Permanent link">1</a><signature id="ButtonAlignV.top">

```lx
ButtonAlignV.top : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="ButtonAlignV" signature="center"></endpoint>
<h4 class="signature_head">ButtonAlignV.center</h4><a class="signature-arity" href="#ButtonAlignV.center" title="Permanent link">1</a><signature id="ButtonAlignV.center">

```lx
ButtonAlignV.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="ButtonAlignV" signature="bottom"></endpoint>
<h4 class="signature_head">ButtonAlignV.bottom</h4><a class="signature-arity" href="#ButtonAlignV.bottom" title="Permanent link">1</a><signature id="ButtonAlignV.bottom">

```lx
ButtonAlignV.bottom : unknown
```
</signature>

> no docs found   


### Data
`import "luxe: ui/button.control" for Data{:lx}`
> no docs found

- `var text : String = ""{:lx}`
- `var align : ButtonAlignH = ButtonAlignH.center{:lx}`
- `var align_vertical : ButtonAlignV = ButtonAlignV.center{:lx}`
- `var localization : Localization = Object{:lx}`
- `var max_visible : Num = -1{:lx}`
- `var text_margin : Float4 = [8, 0, 8, 0]{:lx}`
- `var override : Object = Object{:lx}`


---


### Localization
`import "luxe: ui/button.control" for Localization{:lx}`
> no docs found

- `var key : String = null{:lx}`
- `var space : String = "game"{:lx}`
- `var args : List = []{:lx}`


---


### UIButton
`import "luxe: ui/button.control" for UIButton{:lx}`
> no docs found

- [override](#UIButton.override)(**button**: `Control{:lx}`)
- [override_text](#UIButton.override_text)(**button**: `Control{:lx}`)
- [override_base](#UIButton.override_base)(**button**: `Control{:lx}`)
- [create](#UIButton.create)(**ui**: `Entity{:lx}`)
- [set_text](#UIButton.set_text+2)(**button**: `Control{:lx}`, **text**: `String{:lx}`)
- [get_text](#UIButton.get_text)(**button**: `Control{:lx}`)
- [get_font](#UIButton.get_font)(**button**: `Control{:lx}`)
- [set_font](#UIButton.set_font+2)(**button**: `Control{:lx}`, **font**: `Font{:lx}`)
- [set_color](#UIButton.set_color+2)(**button**: `Control{:lx}`, **color**: `Color{:lx}`)
- [get_color](#UIButton.get_color)(**button**: `Control{:lx}`)
- [set_text_size](#UIButton.set_text_size+2)(**button**: `Control{:lx}`, **size**: `Num{:lx}`)
- [get_text_size](#UIButton.get_text_size)(**button**: `Control{:lx}`)
- [set_align](#UIButton.set_align+2)(**button**: `Control{:lx}`, **align**: `TextAlign{:lx}`)
- [get_align](#UIButton.get_align)(**button**: `Control{:lx}`)
- [set_align_vertical](#UIButton.set_align_vertical+2)(**button**: `Control{:lx}`, **align**: `TextAlign{:lx}`)
- [get_align_vertical](#UIButton.get_align_vertical)(**button**: `Control{:lx}`)
- [set_loc](#UIButton.set_loc+3)(**button**: `Control{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`)
- [set_loc](#UIButton.set_loc+2)(**button**: `Control{:lx}`, **key**: `String{:lx}`)
- [set_loc_with_args](#UIButton.set_loc_with_args+4)(**button**: `Control{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`, **args**: `List{:lx}`)
- [set_loc_with_args](#UIButton.set_loc_with_args+3)(**button**: `Control{:lx}`, **key**: `String{:lx}`, **args**: `List{:lx}`)
- [get_render_text](#UIButton.get_render_text)(**button**: `Control{:lx}`)
- [set_colors](#UIButton.set_colors+5)(**button**: `UIButton{:lx}`, **bg**: `Color{:lx}`, **bg_hover**: `Color{:lx}`, **border**: `Color{:lx}`, **border_hover**: `Color{:lx}`)


---

<endpoint module="luxe: ui/button.control" class="UIButton" signature="override(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.override</h4><a class="signature-arity" href="#UIButton.override" title="Permanent link">1</a><signature id="UIButton.override">

```lx
UIButton.override(button : Control) : ButtonInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="override_text(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.override_text</h4><a class="signature-arity" href="#UIButton.override_text" title="Permanent link">1</a><signature id="UIButton.override_text">

```lx
UIButton.override_text(button : Control) : LabelInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="override_base(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.override_base</h4><a class="signature-arity" href="#UIButton.override_base" title="Permanent link">1</a><signature id="UIButton.override_base">

```lx
UIButton.override_base(button : Control) : PanelInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">UIButton.create</h4><a class="signature-arity" href="#UIButton.create" title="Permanent link">1</a><signature id="UIButton.create">

```lx
UIButton.create(ui : Entity) : Control
```
</signature>

> Create a new button control.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_text(button : Control, text : String)"></endpoint>
<h4 class="signature_head">UIButton.set_text</h4><a class="signature-arity" href="#UIButton.set_text+2" title="Permanent link">2</a><signature id="UIButton.set_text+2">

```lx
UIButton.set_text(button : Control, text : String) : None
```
</signature>

> Set the text displayed on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_text(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.get_text</h4><a class="signature-arity" href="#UIButton.get_text" title="Permanent link">1</a><signature id="UIButton.get_text">

```lx
UIButton.get_text(button : Control) : String
```
</signature>

> Get the text displayed on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_font(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.get_font</h4><a class="signature-arity" href="#UIButton.get_font" title="Permanent link">1</a><signature id="UIButton.get_font">

```lx
UIButton.get_font(button : Control) : Font
```
</signature>

> Get the font asset id of the text on the button.
> The asset id is returned as the string hash, to get the string use `Strings.get`.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_font(button : Control, font : Font)"></endpoint>
<h4 class="signature_head">UIButton.set_font</h4><a class="signature-arity" href="#UIButton.set_font+2" title="Permanent link">2</a><signature id="UIButton.set_font+2">

```lx
UIButton.set_font(button : Control, font : Font) : None
```
</signature>

> Set the font of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_color(button : Control, color : Color)"></endpoint>
<h4 class="signature_head">UIButton.set_color</h4><a class="signature-arity" href="#UIButton.set_color+2" title="Permanent link">2</a><signature id="UIButton.set_color+2">

```lx
UIButton.set_color(button : Control, color : Color) : None
```
</signature>

> Set the color of the button text.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_color(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.get_color</h4><a class="signature-arity" href="#UIButton.get_color" title="Permanent link">1</a><signature id="UIButton.get_color">

```lx
UIButton.get_color(button : Control) : Color
```
</signature>

> Get the color of a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_text_size(button : Control, size : Num)"></endpoint>
<h4 class="signature_head">UIButton.set_text_size</h4><a class="signature-arity" href="#UIButton.set_text_size+2" title="Permanent link">2</a><signature id="UIButton.set_text_size+2">

```lx
UIButton.set_text_size(button : Control, size : Num) : None
```
</signature>

> Set the size of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_text_size(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.get_text_size</h4><a class="signature-arity" href="#UIButton.get_text_size" title="Permanent link">1</a><signature id="UIButton.get_text_size">

```lx
UIButton.get_text_size(button : Control) : Num
```
</signature>

> Get the size of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_align(button : Control, align : TextAlign)"></endpoint>
<h4 class="signature_head">UIButton.set_align</h4><a class="signature-arity" href="#UIButton.set_align+2" title="Permanent link">2</a><signature id="UIButton.set_align+2">

```lx
UIButton.set_align(button : Control, align : TextAlign) : None
```
</signature>

> Set the horizontal alignment of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_align(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.get_align</h4><a class="signature-arity" href="#UIButton.get_align" title="Permanent link">1</a><signature id="UIButton.get_align">

```lx
UIButton.get_align(button : Control) : TextAlign
```
</signature>

> Get the horizontal alignment of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_align_vertical(button : Control, align : TextAlign)"></endpoint>
<h4 class="signature_head">UIButton.set_align_vertical</h4><a class="signature-arity" href="#UIButton.set_align_vertical+2" title="Permanent link">2</a><signature id="UIButton.set_align_vertical+2">

```lx
UIButton.set_align_vertical(button : Control, align : TextAlign) : None
```
</signature>

> Set the vertical alignment of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_align_vertical(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.get_align_vertical</h4><a class="signature-arity" href="#UIButton.get_align_vertical" title="Permanent link">1</a><signature id="UIButton.get_align_vertical">

```lx
UIButton.get_align_vertical(button : Control) : TextAlign
```
</signature>

> Get the vertical alignment of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_loc(button : Control, space : String, key : String)"></endpoint>
<h4 class="signature_head">UIButton.set_loc</h4><a class="signature-arity" href="#UIButton.set_loc+3" title="Permanent link">3</a><signature id="UIButton.set_loc+3">

```lx
UIButton.set_loc(button : Control, space : String, key : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_loc(button : Control, key : String)"></endpoint>
<h4 class="signature_head">UIButton.set_loc</h4><a class="signature-arity" href="#UIButton.set_loc+2" title="Permanent link">2</a><signature id="UIButton.set_loc+2">

```lx
UIButton.set_loc(button : Control, key : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_loc_with_args(button : Control, space : String, key : String, args : List)"></endpoint>
<h4 class="signature_head">UIButton.set_loc_with_args</h4><a class="signature-arity" href="#UIButton.set_loc_with_args+4" title="Permanent link">4</a><signature id="UIButton.set_loc_with_args+4">

```lx
UIButton.set_loc_with_args(button : Control, space : String, key : String, args : List) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_loc_with_args(button : Control, key : String, args : List)"></endpoint>
<h4 class="signature_head">UIButton.set_loc_with_args</h4><a class="signature-arity" href="#UIButton.set_loc_with_args+3" title="Permanent link">3</a><signature id="UIButton.set_loc_with_args+3">

```lx
UIButton.set_loc_with_args(button : Control, key : String, args : List) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_render_text(button : Control)"></endpoint>
<h4 class="signature_head">UIButton.get_render_text</h4><a class="signature-arity" href="#UIButton.get_render_text" title="Permanent link">1</a><signature id="UIButton.get_render_text">

```lx
UIButton.get_render_text(button : Control) : RenderText
```
</signature>

> Get the underlying lowlevel text render object.
> Usable with the `Render.text_*` API.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_colors(button : UIButton, bg : Color, bg_hover : Color, border : Color, border_hover : Color)"></endpoint>
<h4 class="signature_head">UIButton.set_colors</h4><a class="signature-arity" href="#UIButton.set_colors+5" title="Permanent link">5</a><signature id="UIButton.set_colors+5">

```lx
UIButton.set_colors(button : UIButton, bg : Color, bg_hover : Color, border : Color, border_hover : Color) : None
```
</signature>

> no docs found   

