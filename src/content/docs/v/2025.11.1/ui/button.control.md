---
title: "luxe: ui/button.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/button.control"
---
- [ButtonAlignH](#buttonalignh)   
- [ButtonAlignV](#buttonalignv)   
- [Data](#data)   
- [Localization](#localization)   
- [UIButton](#uibutton)   

---


## ButtonAlignH
```wren
import "luxe: ui/button.control" for ButtonAlignH
```
> no docs found

<endpoint module="luxe: ui/button.control" class="ButtonAlignH" signature="left"></endpoint>
### ButtonAlignH.left
```wren
ButtonAlignH.left : unknown
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="ButtonAlignH" signature="center"></endpoint>
### ButtonAlignH.center
```wren
ButtonAlignH.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="ButtonAlignH" signature="right"></endpoint>
### ButtonAlignH.right
```wren
ButtonAlignH.right : unknown
```
> no docs found   


## ButtonAlignV
```wren
import "luxe: ui/button.control" for ButtonAlignV
```
> no docs found

<endpoint module="luxe: ui/button.control" class="ButtonAlignV" signature="top"></endpoint>
### ButtonAlignV.top
```wren
ButtonAlignV.top : unknown
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="ButtonAlignV" signature="center"></endpoint>
### ButtonAlignV.center
```wren
ButtonAlignV.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="ButtonAlignV" signature="bottom"></endpoint>
### ButtonAlignV.bottom
```wren
ButtonAlignV.bottom : unknown
```
> no docs found   


## Data
```wren
import "luxe: ui/button.control" for Data
```
> no docs found

### Variables
```wren
var text : String = ""
var align : ButtonAlignH = ButtonAlignH.center
var align_vertical : ButtonAlignV = ButtonAlignV.center
var localization : Localization = Object
var max_visible : Num = -1
var text_margin : Float4 = [8, 0, 8, 0]
var override : Object = Object
```

## Localization
```wren
import "luxe: ui/button.control" for Localization
```
> no docs found

### Variables
```wren
var key : String = null
var space : String = "game"
var args : List = []
```

## UIButton
```wren
import "luxe: ui/button.control" for UIButton
```
> no docs found

<endpoint module="luxe: ui/button.control" class="UIButton" signature="override(button : Control)"></endpoint>
### UIButton.override(.)
```wren
UIButton.override(button : Control) : ButtonInfo
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="override_text(button : Control)"></endpoint>
### UIButton.override_text(.)
```wren
UIButton.override_text(button : Control) : LabelInfo
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="override_base(button : Control)"></endpoint>
### UIButton.override_base(.)
```wren
UIButton.override_base(button : Control) : PanelInfo
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="create(ui : Entity)"></endpoint>
### UIButton.create(.)
```wren
UIButton.create(ui : Entity) : Control
```
> Create a new button control.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_text(button : Control, text : String)"></endpoint>
### UIButton.set_text(..)
```wren
UIButton.set_text(button : Control, text : String) : None
```
> Set the text displayed on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_text(button : Control)"></endpoint>
### UIButton.get_text(.)
```wren
UIButton.get_text(button : Control) : String
```
> Get the text displayed on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_font(button : Control)"></endpoint>
### UIButton.get_font(.)
```wren
UIButton.get_font(button : Control) : Font
```
> Get the font asset id of the text on the button.
> The asset id is returned as the string hash, to get the string use `Strings.get`.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_font(button : Control, font : Font)"></endpoint>
### UIButton.set_font(..)
```wren
UIButton.set_font(button : Control, font : Font) : None
```
> Set the font of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_color(button : Control, color : Color)"></endpoint>
### UIButton.set_color(..)
```wren
UIButton.set_color(button : Control, color : Color) : None
```
> Set the color of the button text.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_color(button : Control)"></endpoint>
### UIButton.get_color(.)
```wren
UIButton.get_color(button : Control) : Color
```
> Get the color of a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_text_size(button : Control, size : Num)"></endpoint>
### UIButton.set_text_size(..)
```wren
UIButton.set_text_size(button : Control, size : Num) : None
```
> Set the size of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_text_size(button : Control)"></endpoint>
### UIButton.get_text_size(.)
```wren
UIButton.get_text_size(button : Control) : Num
```
> Get the size of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_align(button : Control, align : TextAlign)"></endpoint>
### UIButton.set_align(..)
```wren
UIButton.set_align(button : Control, align : TextAlign) : None
```
> Set the horizontal alignment of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_align(button : Control)"></endpoint>
### UIButton.get_align(.)
```wren
UIButton.get_align(button : Control) : TextAlign
```
> Get the horizontal alignment of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_align_vertical(button : Control, align : TextAlign)"></endpoint>
### UIButton.set_align_vertical(..)
```wren
UIButton.set_align_vertical(button : Control, align : TextAlign) : None
```
> Set the vertical alignment of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_align_vertical(button : Control)"></endpoint>
### UIButton.get_align_vertical(.)
```wren
UIButton.get_align_vertical(button : Control) : TextAlign
```
> Get the vertical alignment of the text on a button.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_loc(button : Control, space : String, key : String)"></endpoint>
### UIButton.set_loc(...)
```wren
UIButton.set_loc(button : Control, space : String, key : String) : None
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_loc(button : Control, key : String)"></endpoint>
### UIButton.set_loc(..)
```wren
UIButton.set_loc(button : Control, key : String) : None
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_loc_with_args(button : Control, space : String, key : String, args : List)"></endpoint>
### UIButton.set_loc_with_args(....)
```wren
UIButton.set_loc_with_args(button : Control, space : String, key : String, args : List) : None
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_loc_with_args(button : Control, key : String, args : List)"></endpoint>
### UIButton.set_loc_with_args(...)
```wren
UIButton.set_loc_with_args(button : Control, key : String, args : List) : None
```
> no docs found   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="get_render_text(button : Control)"></endpoint>
### UIButton.get_render_text(.)
```wren
UIButton.get_render_text(button : Control) : RenderText
```
> Get the underlying lowlevel text render object.
> Usable with the `Render.text_*` API.   

<endpoint module="luxe: ui/button.control" class="UIButton" signature="set_colors(button : UIButton, bg : Color, bg_hover : Color, border : Color, border_hover : Color)"></endpoint>
### UIButton.set_colors(.....)
```wren
UIButton.set_colors(button : UIButton, bg : Color, bg_hover : Color, border : Color, border_hover : Color) : None
```
> no docs found   

