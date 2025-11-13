---
title: "luxe: ui/window.control"
description: API version 2025.11.1
---
## `luxe: ui/window.control{:lx}` module

- [Data](#data)   
- [Localization](#localization)   
- [UIWindow](#uiwindow)   
- [UIWindowChange](#uiwindowchange)   
- [WindowAlignH](#windowalignh)   
- [WindowAlignV](#windowalignv)   

---


### Data
`import "luxe: ui/window.control" for Data{:lx}`
> no docs found

- `var bring_to_front : Bool = true{:lx}`
- `var closable : Bool = true{:lx}`
- `var collapsible : Bool = true{:lx}`
- `var resizable : Bool = true{:lx}`
- `var draggable : Bool = true{:lx}`
- `var title_height : Num = 40{:lx}`
- `var text : String = ""{:lx}`
- `var align : WindowAlignH = WindowAlignH.left{:lx}`
- `var align_vertical : WindowAlignV = WindowAlignV.center{:lx}`
- `var localization : Localization = Object{:lx}`
- `var max_visible : Num = -1{:lx}`
- `var text_margin : Float4 = [8, 0, 8, 0]{:lx}`
- `var override : Object = Object{:lx}`


---


### Localization
`import "luxe: ui/window.control" for Localization{:lx}`
> no docs found

- `var key : String = null{:lx}`
- `var space : String = "game"{:lx}`
- `var args : List = []{:lx}`


---


### UIWindow
`import "luxe: ui/window.control" for UIWindow{:lx}`
> `UIWindow` is a `Control` with a title bar, close button, and can be moved around 
> and resized like a windowed application on a desktop operating system. As you'd expect,
> you can attach other `Controls` to it that stay attached as you move it around.
> 
> ```js
>   var window = UIWindow.create(ui)
>   UIWindow.set_text(window, "I'm a window!")
>   UIWindow.set_title_size(window, 24)
>   UIWindow.set_text_size(window, 14)
>   UIWindow.set_resizable(window, true)
>   Control.set_bounds(window, 64, 64, 680, 360)
> ```

- [override](#UIWindow.override)(**window**: `Control{:lx}`)
- [override_text](#UIWindow.override_text)(**window**: `Control{:lx}`)
- [override_base](#UIWindow.override_base)(**window**: `Control{:lx}`)
- [override_header](#UIWindow.override_header)(**window**: `Control{:lx}`)
- [create](#UIWindow.create)(**ui_entity**: `Entity{:lx}`)
- [close](#UIWindow.close)(**window**: `Control{:lx}`)
- [set_collapsed](#UIWindow.set_collapsed+2)(**window**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [get_collapsed](#UIWindow.get_collapsed)(**window**: `Control{:lx}`)
- [set_text](#UIWindow.set_text+2)(**window**: `Control{:lx}`, **text**: `String{:lx}`)
- [get_text](#UIWindow.get_text)(**window**: `Control{:lx}`)
- [set_text_size](#UIWindow.set_text_size+2)(**window**: `Control{:lx}`, **size**: `Num{:lx}`)
- [get_text_size](#UIWindow.get_text_size)(**window**: `Control{:lx}`)
- [set_text_color](#UIWindow.set_text_color+2)(**window**: `Control{:lx}`, **color**: `Color{:lx}`)
- [get_text_color](#UIWindow.get_text_color)(**window**: `Control{:lx}`)
- [get_text_font](#UIWindow.get_text_font)(**window**: `Control{:lx}`)
- [set_text_font](#UIWindow.set_text_font+2)(**window**: `Control{:lx}`, **font**: `Font{:lx}`)
- [set_title_size](#UIWindow.set_title_size+2)(**window**: `Control{:lx}`, **size**: `Num{:lx}`)
- [set_resizable](#UIWindow.set_resizable+2)(**window**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [set_bring_to_front](#UIWindow.set_bring_to_front+2)(**window**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [set_closable](#UIWindow.set_closable+2)(**window**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [set_collapsible](#UIWindow.set_collapsible+2)(**window**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [set_draggable](#UIWindow.set_draggable+2)(**window**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [get_resizable](#UIWindow.get_resizable)(**window**: `Control{:lx}`)
- [get_bring_to_front](#UIWindow.get_bring_to_front)(**window**: `Control{:lx}`)
- [get_closable](#UIWindow.get_closable)(**window**: `Control{:lx}`)
- [get_collapsible](#UIWindow.get_collapsible)(**window**: `Control{:lx}`)
- [get_draggable](#UIWindow.get_draggable)(**window**: `Control{:lx}`)
- [set_align](#UIWindow.set_align+2)(**window**: `Control{:lx}`, **align**: `TextAlign{:lx}`)
- [get_align](#UIWindow.get_align)(**window**: `Control{:lx}`)
- [set_align_vertical](#UIWindow.set_align_vertical+2)(**window**: `Control{:lx}`, **align**: `TextAlign{:lx}`)
- [get_align_vertical](#UIWindow.get_align_vertical)(**window**: `Control{:lx}`)
- [set_loc](#UIWindow.set_loc+3)(**window**: `Control{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`)
- [set_loc](#UIWindow.set_loc+2)(**window**: `Control{:lx}`, **key**: `String{:lx}`)
- [set_loc_with_args](#UIWindow.set_loc_with_args+4)(**window**: `Control{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`, **args**: `List{:lx}`)
- [set_loc_with_args](#UIWindow.set_loc_with_args+3)(**window**: `Control{:lx}`, **key**: `String{:lx}`, **args**: `List{:lx}`)
- [get_render_text](#UIWindow.get_render_text)(**window**: `Control{:lx}`)


---

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="override(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.override</h4><a class="signature-arity" href="#UIWindow.override" title="Permanent link">1</a><signature id="UIWindow.override">

```lx
UIWindow.override(window : Control) : WindowInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="override_text(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.override_text</h4><a class="signature-arity" href="#UIWindow.override_text" title="Permanent link">1</a><signature id="UIWindow.override_text">

```lx
UIWindow.override_text(window : Control) : LabelInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="override_base(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.override_base</h4><a class="signature-arity" href="#UIWindow.override_base" title="Permanent link">1</a><signature id="UIWindow.override_base">

```lx
UIWindow.override_base(window : Control) : PanelInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="override_header(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.override_header</h4><a class="signature-arity" href="#UIWindow.override_header" title="Permanent link">1</a><signature id="UIWindow.override_header">

```lx
UIWindow.override_header(window : Control) : PanelInfo
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="create(ui_entity : Entity)"></endpoint>
<h4 class="signature_head">UIWindow.create</h4><a class="signature-arity" href="#UIWindow.create" title="Permanent link">1</a><signature id="UIWindow.create">

```lx
UIWindow.create(ui_entity : Entity) : UIWindow
```
</signature>

> Create a new `UIWindow` control for the given UI.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="close(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.close</h4><a class="signature-arity" href="#UIWindow.close" title="Permanent link">1</a><signature id="UIWindow.close">

```lx
UIWindow.close(window : Control) : None
```
</signature>

> Make the given window disappear.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_collapsed(window : Control, state : Bool)"></endpoint>
<h4 class="signature_head">UIWindow.set_collapsed</h4><a class="signature-arity" href="#UIWindow.set_collapsed+2" title="Permanent link">2</a><signature id="UIWindow.set_collapsed+2">

```lx
UIWindow.set_collapsed(window : Control, state : Bool) : None
```
</signature>

> Set whether the given window's body is drawn (false, uncollapsed) or only the titlebar (true, collapsed).   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_collapsed(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_collapsed</h4><a class="signature-arity" href="#UIWindow.get_collapsed" title="Permanent link">1</a><signature id="UIWindow.get_collapsed">

```lx
UIWindow.get_collapsed(window : Control) : Bool
```
</signature>

> Get if the given window is collapsed.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_text(window : Control, text : String)"></endpoint>
<h4 class="signature_head">UIWindow.set_text</h4><a class="signature-arity" href="#UIWindow.set_text+2" title="Permanent link">2</a><signature id="UIWindow.set_text+2">

```lx
UIWindow.set_text(window : Control, text : String) : None
```
</signature>

> Set the titlebar text of the given window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_text(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_text</h4><a class="signature-arity" href="#UIWindow.get_text" title="Permanent link">1</a><signature id="UIWindow.get_text">

```lx
UIWindow.get_text(window : Control) : String
```
</signature>

> Get the titlebar text of the given window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_text_size(window : Control, size : Num)"></endpoint>
<h4 class="signature_head">UIWindow.set_text_size</h4><a class="signature-arity" href="#UIWindow.set_text_size+2" title="Permanent link">2</a><signature id="UIWindow.set_text_size+2">

```lx
UIWindow.set_text_size(window : Control, size : Num) : None
```
</signature>

> Set the size of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_text_size(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_text_size</h4><a class="signature-arity" href="#UIWindow.get_text_size" title="Permanent link">1</a><signature id="UIWindow.get_text_size">

```lx
UIWindow.get_text_size(window : Control) : Num
```
</signature>

> Get the size of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_text_color(window : Control, color : Color)"></endpoint>
<h4 class="signature_head">UIWindow.set_text_color</h4><a class="signature-arity" href="#UIWindow.set_text_color+2" title="Permanent link">2</a><signature id="UIWindow.set_text_color+2">

```lx
UIWindow.set_text_color(window : Control, color : Color) : None
```
</signature>

> Set the color of the window text.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_text_color(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_text_color</h4><a class="signature-arity" href="#UIWindow.get_text_color" title="Permanent link">1</a><signature id="UIWindow.get_text_color">

```lx
UIWindow.get_text_color(window : Control) : Color
```
</signature>

> Get the color of a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_text_font(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_text_font</h4><a class="signature-arity" href="#UIWindow.get_text_font" title="Permanent link">1</a><signature id="UIWindow.get_text_font">

```lx
UIWindow.get_text_font(window : Control) : Font
```
</signature>

> Get the font asset id of the text on the window.
> The asset id is returned as the string hash, to get the string use `Strings.get`.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_text_font(window : Control, font : Font)"></endpoint>
<h4 class="signature_head">UIWindow.set_text_font</h4><a class="signature-arity" href="#UIWindow.set_text_font+2" title="Permanent link">2</a><signature id="UIWindow.set_text_font+2">

```lx
UIWindow.set_text_font(window : Control, font : Font) : None
```
</signature>

> Set the font of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_title_size(window : Control, size : Num)"></endpoint>
<h4 class="signature_head">UIWindow.set_title_size</h4><a class="signature-arity" href="#UIWindow.set_title_size+2" title="Permanent link">2</a><signature id="UIWindow.set_title_size+2">

```lx
UIWindow.set_title_size(window : Control, size : Num) : None
```
</signature>

> Set the height of the titlebar of the given window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_resizable(window : Control, state : Bool)"></endpoint>
<h4 class="signature_head">UIWindow.set_resizable</h4><a class="signature-arity" href="#UIWindow.set_resizable+2" title="Permanent link">2</a><signature id="UIWindow.set_resizable+2">

```lx
UIWindow.set_resizable(window : Control, state : Bool) : None
```
</signature>

> Set if a window can be resized by dragging its bottom right corner.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_bring_to_front(window : Control, state : Bool)"></endpoint>
<h4 class="signature_head">UIWindow.set_bring_to_front</h4><a class="signature-arity" href="#UIWindow.set_bring_to_front+2" title="Permanent link">2</a><signature id="UIWindow.set_bring_to_front+2">

```lx
UIWindow.set_bring_to_front(window : Control, state : Bool) : None
```
</signature>

> Set if a window will bring itself to the front of the UI when interacted with.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_closable(window : Control, state : Bool)"></endpoint>
<h4 class="signature_head">UIWindow.set_closable</h4><a class="signature-arity" href="#UIWindow.set_closable+2" title="Permanent link">2</a><signature id="UIWindow.set_closable+2">

```lx
UIWindow.set_closable(window : Control, state : Bool) : None
```
</signature>

> Set if a window has a Close button the user can press.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_collapsible(window : Control, state : Bool)"></endpoint>
<h4 class="signature_head">UIWindow.set_collapsible</h4><a class="signature-arity" href="#UIWindow.set_collapsible+2" title="Permanent link">2</a><signature id="UIWindow.set_collapsible+2">

```lx
UIWindow.set_collapsible(window : Control, state : Bool) : None
```
</signature>

> Set if a window has a Collapse button the user can press.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_draggable(window : Control, state : Bool)"></endpoint>
<h4 class="signature_head">UIWindow.set_draggable</h4><a class="signature-arity" href="#UIWindow.set_draggable+2" title="Permanent link">2</a><signature id="UIWindow.set_draggable+2">

```lx
UIWindow.set_draggable(window : Control, state : Bool) : None
```
</signature>

> Set if a window can be dragged around with the mouse.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_resizable(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_resizable</h4><a class="signature-arity" href="#UIWindow.get_resizable" title="Permanent link">1</a><signature id="UIWindow.get_resizable">

```lx
UIWindow.get_resizable(window : Control) : Bool
```
</signature>

> Get if a window can be resized by the user.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_bring_to_front(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_bring_to_front</h4><a class="signature-arity" href="#UIWindow.get_bring_to_front" title="Permanent link">1</a><signature id="UIWindow.get_bring_to_front">

```lx
UIWindow.get_bring_to_front(window : Control) : unknown
```
</signature>

> Get if a window will bring itself to the front of the UI when interacted with.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_closable(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_closable</h4><a class="signature-arity" href="#UIWindow.get_closable" title="Permanent link">1</a><signature id="UIWindow.get_closable">

```lx
UIWindow.get_closable(window : Control) : unknown
```
</signature>

> Get if a window has its Close button visible.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_collapsible(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_collapsible</h4><a class="signature-arity" href="#UIWindow.get_collapsible" title="Permanent link">1</a><signature id="UIWindow.get_collapsible">

```lx
UIWindow.get_collapsible(window : Control) : unknown
```
</signature>

> Get if a window has its Collapse button visible.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_draggable(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_draggable</h4><a class="signature-arity" href="#UIWindow.get_draggable" title="Permanent link">1</a><signature id="UIWindow.get_draggable">

```lx
UIWindow.get_draggable(window : Control) : unknown
```
</signature>

> Get if a window can be dragged around with the mouse.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_align(window : Control, align : TextAlign)"></endpoint>
<h4 class="signature_head">UIWindow.set_align</h4><a class="signature-arity" href="#UIWindow.set_align+2" title="Permanent link">2</a><signature id="UIWindow.set_align+2">

```lx
UIWindow.set_align(window : Control, align : TextAlign) : None
```
</signature>

> Set the horizontal alignment of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_align(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_align</h4><a class="signature-arity" href="#UIWindow.get_align" title="Permanent link">1</a><signature id="UIWindow.get_align">

```lx
UIWindow.get_align(window : Control) : TextAlign
```
</signature>

> Get the horizontal alignment of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_align_vertical(window : Control, align : TextAlign)"></endpoint>
<h4 class="signature_head">UIWindow.set_align_vertical</h4><a class="signature-arity" href="#UIWindow.set_align_vertical+2" title="Permanent link">2</a><signature id="UIWindow.set_align_vertical+2">

```lx
UIWindow.set_align_vertical(window : Control, align : TextAlign) : None
```
</signature>

> Set the vertical alignment of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_align_vertical(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_align_vertical</h4><a class="signature-arity" href="#UIWindow.get_align_vertical" title="Permanent link">1</a><signature id="UIWindow.get_align_vertical">

```lx
UIWindow.get_align_vertical(window : Control) : TextAlign
```
</signature>

> Get the vertical alignment of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_loc(window : Control, space : String, key : String)"></endpoint>
<h4 class="signature_head">UIWindow.set_loc</h4><a class="signature-arity" href="#UIWindow.set_loc+3" title="Permanent link">3</a><signature id="UIWindow.set_loc+3">

```lx
UIWindow.set_loc(window : Control, space : String, key : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_loc(window : Control, key : String)"></endpoint>
<h4 class="signature_head">UIWindow.set_loc</h4><a class="signature-arity" href="#UIWindow.set_loc+2" title="Permanent link">2</a><signature id="UIWindow.set_loc+2">

```lx
UIWindow.set_loc(window : Control, key : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_loc_with_args(window : Control, space : String, key : String, args : List)"></endpoint>
<h4 class="signature_head">UIWindow.set_loc_with_args</h4><a class="signature-arity" href="#UIWindow.set_loc_with_args+4" title="Permanent link">4</a><signature id="UIWindow.set_loc_with_args+4">

```lx
UIWindow.set_loc_with_args(window : Control, space : String, key : String, args : List) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_loc_with_args(window : Control, key : String, args : List)"></endpoint>
<h4 class="signature_head">UIWindow.set_loc_with_args</h4><a class="signature-arity" href="#UIWindow.set_loc_with_args+3" title="Permanent link">3</a><signature id="UIWindow.set_loc_with_args+3">

```lx
UIWindow.set_loc_with_args(window : Control, key : String, args : List) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_render_text(window : Control)"></endpoint>
<h4 class="signature_head">UIWindow.get_render_text</h4><a class="signature-arity" href="#UIWindow.get_render_text" title="Permanent link">1</a><signature id="UIWindow.get_render_text">

```lx
UIWindow.get_render_text(window : Control) : RenderText
```
</signature>

> Get the underlying lowlevel text render object.
> Usable with the `Render.text_*` API.   


### UIWindowChange
`import "luxe: ui/window.control" for UIWindowChange{:lx}`
> no docs found

- [close](#UIWindowChange.close)
- [open](#UIWindowChange.open)
- [collapse](#UIWindowChange.collapse)
- [uncollapse](#UIWindowChange.uncollapse)
- [move](#UIWindowChange.move)
- [name](#UIWindowChange.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="close"></endpoint>
<h4 class="signature_head">UIWindowChange.close</h4><a class="signature-arity" href="#UIWindowChange.close" title="Permanent link">1</a><signature id="UIWindowChange.close">

```lx
UIWindowChange.close : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="open"></endpoint>
<h4 class="signature_head">UIWindowChange.open</h4><a class="signature-arity" href="#UIWindowChange.open" title="Permanent link">1</a><signature id="UIWindowChange.open">

```lx
UIWindowChange.open : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="collapse"></endpoint>
<h4 class="signature_head">UIWindowChange.collapse</h4><a class="signature-arity" href="#UIWindowChange.collapse" title="Permanent link">1</a><signature id="UIWindowChange.collapse">

```lx
UIWindowChange.collapse : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="uncollapse"></endpoint>
<h4 class="signature_head">UIWindowChange.uncollapse</h4><a class="signature-arity" href="#UIWindowChange.uncollapse" title="Permanent link">1</a><signature id="UIWindowChange.uncollapse">

```lx
UIWindowChange.uncollapse : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="move"></endpoint>
<h4 class="signature_head">UIWindowChange.move</h4><a class="signature-arity" href="#UIWindowChange.move" title="Permanent link">1</a><signature id="UIWindowChange.move">

```lx
UIWindowChange.move : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">UIWindowChange.name</h4><a class="signature-arity" href="#UIWindowChange.name" title="Permanent link">1</a><signature id="UIWindowChange.name">

```lx
UIWindowChange.name(value : Any) : unknown
```
</signature>

> no docs found   


### WindowAlignH
`import "luxe: ui/window.control" for WindowAlignH{:lx}`
> no docs found

- [left](#WindowAlignH.left)
- [center](#WindowAlignH.center)
- [right](#WindowAlignH.right)


---

<endpoint module="luxe: ui/window.control" class="WindowAlignH" signature="left"></endpoint>
<h4 class="signature_head">WindowAlignH.left</h4><a class="signature-arity" href="#WindowAlignH.left" title="Permanent link">1</a><signature id="WindowAlignH.left">

```lx
WindowAlignH.left : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="WindowAlignH" signature="center"></endpoint>
<h4 class="signature_head">WindowAlignH.center</h4><a class="signature-arity" href="#WindowAlignH.center" title="Permanent link">1</a><signature id="WindowAlignH.center">

```lx
WindowAlignH.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="WindowAlignH" signature="right"></endpoint>
<h4 class="signature_head">WindowAlignH.right</h4><a class="signature-arity" href="#WindowAlignH.right" title="Permanent link">1</a><signature id="WindowAlignH.right">

```lx
WindowAlignH.right : unknown
```
</signature>

> no docs found   


### WindowAlignV
`import "luxe: ui/window.control" for WindowAlignV{:lx}`
> no docs found

- [top](#WindowAlignV.top)
- [center](#WindowAlignV.center)
- [bottom](#WindowAlignV.bottom)


---

<endpoint module="luxe: ui/window.control" class="WindowAlignV" signature="top"></endpoint>
<h4 class="signature_head">WindowAlignV.top</h4><a class="signature-arity" href="#WindowAlignV.top" title="Permanent link">1</a><signature id="WindowAlignV.top">

```lx
WindowAlignV.top : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="WindowAlignV" signature="center"></endpoint>
<h4 class="signature_head">WindowAlignV.center</h4><a class="signature-arity" href="#WindowAlignV.center" title="Permanent link">1</a><signature id="WindowAlignV.center">

```lx
WindowAlignV.center : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/window.control" class="WindowAlignV" signature="bottom"></endpoint>
<h4 class="signature_head">WindowAlignV.bottom</h4><a class="signature-arity" href="#WindowAlignV.bottom" title="Permanent link">1</a><signature id="WindowAlignV.bottom">

```lx
WindowAlignV.bottom : unknown
```
</signature>

> no docs found   

