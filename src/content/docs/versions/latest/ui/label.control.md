---
title: "luxe: ui/label.control"
description: API version 2025.11.1
---
## `luxe: ui/label.control{:lx}` module

- [Data](#data)   
- [LabelAlignH](#labelalignh)   
- [LabelAlignV](#labelalignv)   
- [Localization](#localization)   
- [UIAutoSize](#uiautosize)   
- [UILabel](#uilabel)   

---


### Data
`import "luxe: ui/label.control" for Data{:lx}`
> no docs found

- `var text : String = ""{:lx}`
- `var align : LabelAlignH = LabelAlignH.left{:lx}`
- `var align_vertical : LabelAlignV = LabelAlignV.center{:lx}`
- `var localization : Localization = Object{:lx}`
- `var max_visible : Num = -1{:lx}`
- `var auto_size : UIAutoSize = UIAutoSize.none{:lx}`
- `var override : Object = Object{:lx}`


---


### LabelAlignH
`import "luxe: ui/label.control" for LabelAlignH{:lx}`
> no docs found

- [left](#LabelAlignH.left)
- [center](#LabelAlignH.center)
- [right](#LabelAlignH.right)


---

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="left"></endpoint>
<h4 class="signature_head">LabelAlignH.left</h4><a class="signature-arity" href="#LabelAlignH.left" title="Permanent link">1</a><signature id="LabelAlignH.left">

```lx
LabelAlignH.left : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="center"></endpoint>
<h4 class="signature_head">LabelAlignH.center</h4><a class="signature-arity" href="#LabelAlignH.center" title="Permanent link">1</a><signature id="LabelAlignH.center">

```lx
LabelAlignH.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="right"></endpoint>
<h4 class="signature_head">LabelAlignH.right</h4><a class="signature-arity" href="#LabelAlignH.right" title="Permanent link">1</a><signature id="LabelAlignH.right">

```lx
LabelAlignH.right : unknown
```
</signature>

> no docs found   


### LabelAlignV
`import "luxe: ui/label.control" for LabelAlignV{:lx}`
> no docs found

- [top](#LabelAlignV.top)
- [center](#LabelAlignV.center)
- [bottom](#LabelAlignV.bottom)


---

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="top"></endpoint>
<h4 class="signature_head">LabelAlignV.top</h4><a class="signature-arity" href="#LabelAlignV.top" title="Permanent link">1</a><signature id="LabelAlignV.top">

```lx
LabelAlignV.top : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="center"></endpoint>
<h4 class="signature_head">LabelAlignV.center</h4><a class="signature-arity" href="#LabelAlignV.center" title="Permanent link">1</a><signature id="LabelAlignV.center">

```lx
LabelAlignV.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="bottom"></endpoint>
<h4 class="signature_head">LabelAlignV.bottom</h4><a class="signature-arity" href="#LabelAlignV.bottom" title="Permanent link">1</a><signature id="LabelAlignV.bottom">

```lx
LabelAlignV.bottom : unknown
```
</signature>

> no docs found   


### Localization
`import "luxe: ui/label.control" for Localization{:lx}`
> no docs found

- `var key : String = null{:lx}`
- `var space : String = "game"{:lx}`
- `var args : List = []{:lx}`


---


### UIAutoSize
`import "luxe: ui/label.control" for UIAutoSize{:lx}`
> no docs found

- [none](#UIAutoSize.none)
- [width](#UIAutoSize.width)
- [height](#UIAutoSize.height)
- [both](#UIAutoSize.both)


---

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="none"></endpoint>
<h4 class="signature_head">UIAutoSize.none</h4><a class="signature-arity" href="#UIAutoSize.none" title="Permanent link">1</a><signature id="UIAutoSize.none">

```lx
UIAutoSize.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="width"></endpoint>
<h4 class="signature_head">UIAutoSize.width</h4><a class="signature-arity" href="#UIAutoSize.width" title="Permanent link">1</a><signature id="UIAutoSize.width">

```lx
UIAutoSize.width : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="height"></endpoint>
<h4 class="signature_head">UIAutoSize.height</h4><a class="signature-arity" href="#UIAutoSize.height" title="Permanent link">1</a><signature id="UIAutoSize.height">

```lx
UIAutoSize.height : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="both"></endpoint>
<h4 class="signature_head">UIAutoSize.both</h4><a class="signature-arity" href="#UIAutoSize.both" title="Permanent link">1</a><signature id="UIAutoSize.both">

```lx
UIAutoSize.both : unknown
```
</signature>

> no docs found   


### UILabel
`import "luxe: ui/label.control" for UILabel{:lx}`
> no docs found

- [create](#UILabel.create)(**ui_entity**: `Any{:lx}`)
- [override](#UILabel.override)(**label**: `Control{:lx}`)
- [get_render_text](#UILabel.get_render_text)(**label**: `Control{:lx}`)
- [get_text_extents](#UILabel.get_text_extents)(**label**: `Control{:lx}`)
- [get_text_extents](#UILabel.get_text_extents+3)(**label**: `Control{:lx}`, **offset**: `Num{:lx}`, **count**: `Num{:lx}`)
- [set_text](#UILabel.set_text+2)(**label**: `Control{:lx}`, **text**: `String{:lx}`)
- [get_text](#UILabel.get_text)(**label**: `Control{:lx}`)
- [get_font](#UILabel.get_font)(**label**: `Control{:lx}`)
- [set_font](#UILabel.set_font+2)(**label**: `Control{:lx}`, **font**: `Font{:lx}`)
- [get_text_style](#UILabel.get_text_style)(**label**: `Control{:lx}`)
- [set_text_style](#UILabel.set_text_style+2)(**label**: `Control{:lx}`, **style**: `TextStyle{:lx}`)
- [set_color](#UILabel.set_color+2)(**label**: `Control{:lx}`, **color**: `Color{:lx}`)
- [get_color](#UILabel.get_color)(**label**: `Control{:lx}`)
- [set_color_hover](#UILabel.set_color_hover+2)(**label**: `Control{:lx}`, **color**: `Color{:lx}`)
- [get_color_hover](#UILabel.get_color_hover)(**label**: `Control{:lx}`)
- [set_wrap](#UILabel.set_wrap+2)(**label**: `Control{:lx}`, **wrap**: `UITextWrapMode{:lx}`)
- [get_wrap](#UILabel.get_wrap)(**label**: `Control{:lx}`)
- [set_text_size](#UILabel.set_text_size+2)(**label**: `Control{:lx}`, **size**: `Num{:lx}`)
- [get_text_size](#UILabel.get_text_size)(**label**: `Control{:lx}`)
- [set_align](#UILabel.set_align+2)(**label**: `Control{:lx}`, **align**: `TextAlign{:lx}`)
- [get_align](#UILabel.get_align)(**label**: `Control{:lx}`)
- [set_align_vertical](#UILabel.set_align_vertical+2)(**label**: `Control{:lx}`, **align**: `TextAlign{:lx}`)
- [get_align_vertical](#UILabel.get_align_vertical)(**label**: `Control{:lx}`)
- [set_max_visible](#UILabel.set_max_visible+2)(**label**: `Control{:lx}`, **visible_count**: `Num{:lx}`)
- [get_max_visible](#UILabel.get_max_visible)(**label**: `Control{:lx}`)
- [set_auto_size](#UILabel.set_auto_size+2)(**label**: `Control{:lx}`, **state**: `UIAutoSize{:lx}`)
- [set_overflow_scroll](#UILabel.set_overflow_scroll+4)(**label**: `Control{:lx}`, **speed**: `Num{:lx}`, **wait**: `Num{:lx}`, **pause**: `Num{:lx}`)
- [set_overflow_scroll](#UILabel.set_overflow_scroll+5)(**label**: `Control{:lx}`, **type**: `UIOverflowScroll{:lx}`, **speed**: `Num{:lx}`, **wait**: `Num{:lx}`, **pause**: `Num{:lx}`)
- [set_loc](#UILabel.set_loc+3)(**label**: `Control{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`)
- [set_loc](#UILabel.set_loc+2)(**label**: `Control{:lx}`, **key**: `String{:lx}`)
- [set_loc_with_args](#UILabel.set_loc_with_args+4)(**label**: `Control{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`, **args**: `List{:lx}`)
- [set_loc_with_args](#UILabel.set_loc_with_args+3)(**label**: `Control{:lx}`, **key**: `String{:lx}`, **args**: `List{:lx}`)
- [set_outline](#UILabel.set_outline+5)(**label**: `Control{:lx}`, **radius**: `Num{:lx}`, **softness**: `Num{:lx}`, **color**: `Color{:lx}`, **offset**: `Float2{:lx}`)
- [set_shadow](#UILabel.set_shadow+5)(**label**: `Control{:lx}`, **radius**: `Num{:lx}`, **softness**: `Num{:lx}`, **color**: `Color{:lx}`, **offset**: `Float2{:lx}`)


---

<endpoint module="luxe: ui/label.control" class="UILabel" signature="create(ui_entity : Any)"></endpoint>
<h4 class="signature_head">UILabel.create</h4><a class="signature-arity" href="#UILabel.create" title="Permanent link">1</a><signature id="UILabel.create">

```lx
UILabel.create(ui_entity : Any) : UILabel
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="override(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.override</h4><a class="signature-arity" href="#UILabel.override" title="Permanent link">1</a><signature id="UILabel.override">

```lx
UILabel.override(label : Control) : LabelInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_render_text(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_render_text</h4><a class="signature-arity" href="#UILabel.get_render_text" title="Permanent link">1</a><signature id="UILabel.get_render_text">

```lx
UILabel.get_render_text(label : Control) : RenderText
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_extents(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_text_extents</h4><a class="signature-arity" href="#UILabel.get_text_extents" title="Permanent link">1</a><signature id="UILabel.get_text_extents">

```lx
UILabel.get_text_extents(label : Control) : Float2
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_extents(label : Control, offset : Num, count : Num)"></endpoint>
<h4 class="signature_head">UILabel.get_text_extents</h4><a class="signature-arity" href="#UILabel.get_text_extents+3" title="Permanent link">3</a><signature id="UILabel.get_text_extents+3">

```lx
UILabel.get_text_extents(label : Control, offset : Num, count : Num) : Float2
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text(label : Control, text : String)"></endpoint>
<h4 class="signature_head">UILabel.set_text</h4><a class="signature-arity" href="#UILabel.set_text+2" title="Permanent link">2</a><signature id="UILabel.set_text+2">

```lx
UILabel.set_text(label : Control, text : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_text</h4><a class="signature-arity" href="#UILabel.get_text" title="Permanent link">1</a><signature id="UILabel.get_text">

```lx
UILabel.get_text(label : Control) : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_font(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_font</h4><a class="signature-arity" href="#UILabel.get_font" title="Permanent link">1</a><signature id="UILabel.get_font">

```lx
UILabel.get_font(label : Control) : Font
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_font(label : Control, font : Font)"></endpoint>
<h4 class="signature_head">UILabel.set_font</h4><a class="signature-arity" href="#UILabel.set_font+2" title="Permanent link">2</a><signature id="UILabel.set_font+2">

```lx
UILabel.set_font(label : Control, font : Font) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_style(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_text_style</h4><a class="signature-arity" href="#UILabel.get_text_style" title="Permanent link">1</a><signature id="UILabel.get_text_style">

```lx
UILabel.get_text_style(label : Control) : TextStyle
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text_style(label : Control, style : TextStyle)"></endpoint>
<h4 class="signature_head">UILabel.set_text_style</h4><a class="signature-arity" href="#UILabel.set_text_style+2" title="Permanent link">2</a><signature id="UILabel.set_text_style+2">

```lx
UILabel.set_text_style(label : Control, style : TextStyle) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_color(label : Control, color : Color)"></endpoint>
<h4 class="signature_head">UILabel.set_color</h4><a class="signature-arity" href="#UILabel.set_color+2" title="Permanent link">2</a><signature id="UILabel.set_color+2">

```lx
UILabel.set_color(label : Control, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_color(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_color</h4><a class="signature-arity" href="#UILabel.get_color" title="Permanent link">1</a><signature id="UILabel.get_color">

```lx
UILabel.get_color(label : Control) : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_color_hover(label : Control, color : Color)"></endpoint>
<h4 class="signature_head">UILabel.set_color_hover</h4><a class="signature-arity" href="#UILabel.set_color_hover+2" title="Permanent link">2</a><signature id="UILabel.set_color_hover+2">

```lx
UILabel.set_color_hover(label : Control, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_color_hover(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_color_hover</h4><a class="signature-arity" href="#UILabel.get_color_hover" title="Permanent link">1</a><signature id="UILabel.get_color_hover">

```lx
UILabel.get_color_hover(label : Control) : Color
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_wrap(label : Control, wrap : UITextWrapMode)"></endpoint>
<h4 class="signature_head">UILabel.set_wrap</h4><a class="signature-arity" href="#UILabel.set_wrap+2" title="Permanent link">2</a><signature id="UILabel.set_wrap+2">

```lx
UILabel.set_wrap(label : Control, wrap : UITextWrapMode) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_wrap(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_wrap</h4><a class="signature-arity" href="#UILabel.get_wrap" title="Permanent link">1</a><signature id="UILabel.get_wrap">

```lx
UILabel.get_wrap(label : Control) : UITextWrapMode
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text_size(label : Control, size : Num)"></endpoint>
<h4 class="signature_head">UILabel.set_text_size</h4><a class="signature-arity" href="#UILabel.set_text_size+2" title="Permanent link">2</a><signature id="UILabel.set_text_size+2">

```lx
UILabel.set_text_size(label : Control, size : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_size(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_text_size</h4><a class="signature-arity" href="#UILabel.get_text_size" title="Permanent link">1</a><signature id="UILabel.get_text_size">

```lx
UILabel.get_text_size(label : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_align(label : Control, align : TextAlign)"></endpoint>
<h4 class="signature_head">UILabel.set_align</h4><a class="signature-arity" href="#UILabel.set_align+2" title="Permanent link">2</a><signature id="UILabel.set_align+2">

```lx
UILabel.set_align(label : Control, align : TextAlign) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_align(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_align</h4><a class="signature-arity" href="#UILabel.get_align" title="Permanent link">1</a><signature id="UILabel.get_align">

```lx
UILabel.get_align(label : Control) : TextAlign
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_align_vertical(label : Control, align : TextAlign)"></endpoint>
<h4 class="signature_head">UILabel.set_align_vertical</h4><a class="signature-arity" href="#UILabel.set_align_vertical+2" title="Permanent link">2</a><signature id="UILabel.set_align_vertical+2">

```lx
UILabel.set_align_vertical(label : Control, align : TextAlign) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_align_vertical(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_align_vertical</h4><a class="signature-arity" href="#UILabel.get_align_vertical" title="Permanent link">1</a><signature id="UILabel.get_align_vertical">

```lx
UILabel.get_align_vertical(label : Control) : TextAlign
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_max_visible(label : Control, visible_count : Num)"></endpoint>
<h4 class="signature_head">UILabel.set_max_visible</h4><a class="signature-arity" href="#UILabel.set_max_visible+2" title="Permanent link">2</a><signature id="UILabel.set_max_visible+2">

```lx
UILabel.set_max_visible(label : Control, visible_count : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_max_visible(label : Control)"></endpoint>
<h4 class="signature_head">UILabel.get_max_visible</h4><a class="signature-arity" href="#UILabel.get_max_visible" title="Permanent link">1</a><signature id="UILabel.get_max_visible">

```lx
UILabel.get_max_visible(label : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_auto_size(label : Control, state : UIAutoSize)"></endpoint>
<h4 class="signature_head">UILabel.set_auto_size</h4><a class="signature-arity" href="#UILabel.set_auto_size+2" title="Permanent link">2</a><signature id="UILabel.set_auto_size+2">

```lx
UILabel.set_auto_size(label : Control, state : UIAutoSize) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_overflow_scroll(label : Control, speed : Num, wait : Num, pause : Num)"></endpoint>
<h4 class="signature_head">UILabel.set_overflow_scroll</h4><a class="signature-arity" href="#UILabel.set_overflow_scroll+4" title="Permanent link">4</a><signature id="UILabel.set_overflow_scroll+4">

```lx
UILabel.set_overflow_scroll(label : Control, speed : Num, wait : Num, pause : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_overflow_scroll(label : Control, type : UIOverflowScroll, speed : Num, wait : Num, pause : Num)"></endpoint>
<h4 class="signature_head">UILabel.set_overflow_scroll</h4><a class="signature-arity" href="#UILabel.set_overflow_scroll+5" title="Permanent link">5</a><signature id="UILabel.set_overflow_scroll+5">

```lx
UILabel.set_overflow_scroll(label : Control, type : UIOverflowScroll, speed : Num, wait : Num, pause : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc(label : Control, space : String, key : String)"></endpoint>
<h4 class="signature_head">UILabel.set_loc</h4><a class="signature-arity" href="#UILabel.set_loc+3" title="Permanent link">3</a><signature id="UILabel.set_loc+3">

```lx
UILabel.set_loc(label : Control, space : String, key : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc(label : Control, key : String)"></endpoint>
<h4 class="signature_head">UILabel.set_loc</h4><a class="signature-arity" href="#UILabel.set_loc+2" title="Permanent link">2</a><signature id="UILabel.set_loc+2">

```lx
UILabel.set_loc(label : Control, key : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc_with_args(label : Control, space : String, key : String, args : List)"></endpoint>
<h4 class="signature_head">UILabel.set_loc_with_args</h4><a class="signature-arity" href="#UILabel.set_loc_with_args+4" title="Permanent link">4</a><signature id="UILabel.set_loc_with_args+4">

```lx
UILabel.set_loc_with_args(label : Control, space : String, key : String, args : List) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc_with_args(label : Control, key : String, args : List)"></endpoint>
<h4 class="signature_head">UILabel.set_loc_with_args</h4><a class="signature-arity" href="#UILabel.set_loc_with_args+3" title="Permanent link">3</a><signature id="UILabel.set_loc_with_args+3">

```lx
UILabel.set_loc_with_args(label : Control, key : String, args : List) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_outline(label : Control, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
<h4 class="signature_head">UILabel.set_outline</h4><a class="signature-arity" href="#UILabel.set_outline+5" title="Permanent link">5</a><signature id="UILabel.set_outline+5">

```lx
UILabel.set_outline(label : Control, radius : Num, softness : Num, color : Color, offset : Float2) : None
```
</signature>

> Set the text outline parameters.   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_shadow(label : Control, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
<h4 class="signature_head">UILabel.set_shadow</h4><a class="signature-arity" href="#UILabel.set_shadow+5" title="Permanent link">5</a><signature id="UILabel.set_shadow+5">

```lx
UILabel.set_shadow(label : Control, radius : Num, softness : Num, color : Color, offset : Float2) : None
```
</signature>

> Set the text shadow parameters.   

