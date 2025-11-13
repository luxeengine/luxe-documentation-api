---
title: "luxe: ui/label.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/label.control"
---
- [Data](#data)   
- [LabelAlignH](#labelalignh)   
- [LabelAlignV](#labelalignv)   
- [Localization](#localization)   
- [UIAutoSize](#uiautosize)   
- [UILabel](#uilabel)   

---


## Data
```wren
import "luxe: ui/label.control" for Data
```
> no docs found

### Variables
```wren
var text : String = ""
var align : LabelAlignH = LabelAlignH.left
var align_vertical : LabelAlignV = LabelAlignV.center
var localization : Localization = Object
var max_visible : Num = -1
var auto_size : UIAutoSize = UIAutoSize.none
var override : Object = Object
```

## LabelAlignH
```wren
import "luxe: ui/label.control" for LabelAlignH
```
> no docs found

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="left"></endpoint>
### LabelAlignH.left
```wren
LabelAlignH.left : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="center"></endpoint>
### LabelAlignH.center
```wren
LabelAlignH.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="right"></endpoint>
### LabelAlignH.right
```wren
LabelAlignH.right : unknown
```
> no docs found   


## LabelAlignV
```wren
import "luxe: ui/label.control" for LabelAlignV
```
> no docs found

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="top"></endpoint>
### LabelAlignV.top
```wren
LabelAlignV.top : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="center"></endpoint>
### LabelAlignV.center
```wren
LabelAlignV.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="bottom"></endpoint>
### LabelAlignV.bottom
```wren
LabelAlignV.bottom : unknown
```
> no docs found   


## Localization
```wren
import "luxe: ui/label.control" for Localization
```
> no docs found

### Variables
```wren
var key : String = null
var space : String = "game"
var args : List = []
```

## UIAutoSize
```wren
import "luxe: ui/label.control" for UIAutoSize
```
> no docs found

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="none"></endpoint>
### UIAutoSize.none
```wren
UIAutoSize.none : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="width"></endpoint>
### UIAutoSize.width
```wren
UIAutoSize.width : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="height"></endpoint>
### UIAutoSize.height
```wren
UIAutoSize.height : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="both"></endpoint>
### UIAutoSize.both
```wren
UIAutoSize.both : unknown
```
> no docs found   


## UILabel
```wren
import "luxe: ui/label.control" for UILabel
```
> no docs found

<endpoint module="luxe: ui/label.control" class="UILabel" signature="create(ui_entity : Any)"></endpoint>
### UILabel.create(.)
```wren
UILabel.create(ui_entity : Any) : UILabel
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="override(label : Control)"></endpoint>
### UILabel.override(.)
```wren
UILabel.override(label : Control) : LabelInfo
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_render_text(label : Control)"></endpoint>
### UILabel.get_render_text(.)
```wren
UILabel.get_render_text(label : Control) : RenderText
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_extents(label : Control)"></endpoint>
### UILabel.get_text_extents(.)
```wren
UILabel.get_text_extents(label : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_extents(label : Control, offset : Num, count : Num)"></endpoint>
### UILabel.get_text_extents(...)
```wren
UILabel.get_text_extents(label : Control, offset : Num, count : Num) : Float2
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text(label : Control, text : String)"></endpoint>
### UILabel.set_text(..)
```wren
UILabel.set_text(label : Control, text : String) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text(label : Control)"></endpoint>
### UILabel.get_text(.)
```wren
UILabel.get_text(label : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_font(label : Control)"></endpoint>
### UILabel.get_font(.)
```wren
UILabel.get_font(label : Control) : Font
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_font(label : Control, font : Font)"></endpoint>
### UILabel.set_font(..)
```wren
UILabel.set_font(label : Control, font : Font) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_style(label : Control)"></endpoint>
### UILabel.get_text_style(.)
```wren
UILabel.get_text_style(label : Control) : TextStyle
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text_style(label : Control, style : TextStyle)"></endpoint>
### UILabel.set_text_style(..)
```wren
UILabel.set_text_style(label : Control, style : TextStyle) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_color(label : Control, color : Color)"></endpoint>
### UILabel.set_color(..)
```wren
UILabel.set_color(label : Control, color : Color) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_color(label : Control)"></endpoint>
### UILabel.get_color(.)
```wren
UILabel.get_color(label : Control) : Color
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_color_hover(label : Control, color : Color)"></endpoint>
### UILabel.set_color_hover(..)
```wren
UILabel.set_color_hover(label : Control, color : Color) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_color_hover(label : Control)"></endpoint>
### UILabel.get_color_hover(.)
```wren
UILabel.get_color_hover(label : Control) : Color
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_wrap(label : Control, wrap : UITextWrapMode)"></endpoint>
### UILabel.set_wrap(..)
```wren
UILabel.set_wrap(label : Control, wrap : UITextWrapMode) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_wrap(label : Control)"></endpoint>
### UILabel.get_wrap(.)
```wren
UILabel.get_wrap(label : Control) : UITextWrapMode
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text_size(label : Control, size : Num)"></endpoint>
### UILabel.set_text_size(..)
```wren
UILabel.set_text_size(label : Control, size : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_size(label : Control)"></endpoint>
### UILabel.get_text_size(.)
```wren
UILabel.get_text_size(label : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_align(label : Control, align : TextAlign)"></endpoint>
### UILabel.set_align(..)
```wren
UILabel.set_align(label : Control, align : TextAlign) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_align(label : Control)"></endpoint>
### UILabel.get_align(.)
```wren
UILabel.get_align(label : Control) : TextAlign
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_align_vertical(label : Control, align : TextAlign)"></endpoint>
### UILabel.set_align_vertical(..)
```wren
UILabel.set_align_vertical(label : Control, align : TextAlign) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_align_vertical(label : Control)"></endpoint>
### UILabel.get_align_vertical(.)
```wren
UILabel.get_align_vertical(label : Control) : TextAlign
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_max_visible(label : Control, visible_count : Num)"></endpoint>
### UILabel.set_max_visible(..)
```wren
UILabel.set_max_visible(label : Control, visible_count : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_max_visible(label : Control)"></endpoint>
### UILabel.get_max_visible(.)
```wren
UILabel.get_max_visible(label : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_auto_size(label : Control, state : UIAutoSize)"></endpoint>
### UILabel.set_auto_size(..)
```wren
UILabel.set_auto_size(label : Control, state : UIAutoSize) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_overflow_scroll(label : Control, speed : Num, wait : Num, pause : Num)"></endpoint>
### UILabel.set_overflow_scroll(....)
```wren
UILabel.set_overflow_scroll(label : Control, speed : Num, wait : Num, pause : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_overflow_scroll(label : Control, type : UIOverflowScroll, speed : Num, wait : Num, pause : Num)"></endpoint>
### UILabel.set_overflow_scroll(.....)
```wren
UILabel.set_overflow_scroll(label : Control, type : UIOverflowScroll, speed : Num, wait : Num, pause : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc(label : Control, space : String, key : String)"></endpoint>
### UILabel.set_loc(...)
```wren
UILabel.set_loc(label : Control, space : String, key : String) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc(label : Control, key : String)"></endpoint>
### UILabel.set_loc(..)
```wren
UILabel.set_loc(label : Control, key : String) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc_with_args(label : Control, space : String, key : String, args : List)"></endpoint>
### UILabel.set_loc_with_args(....)
```wren
UILabel.set_loc_with_args(label : Control, space : String, key : String, args : List) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc_with_args(label : Control, key : String, args : List)"></endpoint>
### UILabel.set_loc_with_args(...)
```wren
UILabel.set_loc_with_args(label : Control, key : String, args : List) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_outline(label : Control, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### UILabel.set_outline(.....)
```wren
UILabel.set_outline(label : Control, radius : Num, softness : Num, color : Color, offset : Float2) : None
```
> Set the text outline parameters.   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_shadow(label : Control, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### UILabel.set_shadow(.....)
```wren
UILabel.set_shadow(label : Control, radius : Num, softness : Num, color : Color, offset : Float2) : None
```
> Set the text shadow parameters.   

