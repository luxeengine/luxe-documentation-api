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
```lx
import "luxe: ui/label.control" for Data
```
> no docs found

### Variables
```lx
var text : String = ""
var align : LabelAlignH = LabelAlignH.left
var align_vertical : LabelAlignV = LabelAlignV.center
var localization : Localization = Object
var max_visible : Num = -1
var auto_size : UIAutoSize = UIAutoSize.none
var override : Object = Object
```

## LabelAlignH
```lx
import "luxe: ui/label.control" for LabelAlignH
```
> no docs found

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="left"></endpoint>
### LabelAlignH.left
```lx
LabelAlignH.left : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="center"></endpoint>
### LabelAlignH.center
```lx
LabelAlignH.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignH" signature="right"></endpoint>
### LabelAlignH.right
```lx
LabelAlignH.right : unknown
```
> no docs found   


## LabelAlignV
```lx
import "luxe: ui/label.control" for LabelAlignV
```
> no docs found

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="top"></endpoint>
### LabelAlignV.top
```lx
LabelAlignV.top : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="center"></endpoint>
### LabelAlignV.center
```lx
LabelAlignV.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="LabelAlignV" signature="bottom"></endpoint>
### LabelAlignV.bottom
```lx
LabelAlignV.bottom : unknown
```
> no docs found   


## Localization
```lx
import "luxe: ui/label.control" for Localization
```
> no docs found

### Variables
```lx
var key : String = null
var space : String = "game"
var args : List = []
```

## UIAutoSize
```lx
import "luxe: ui/label.control" for UIAutoSize
```
> no docs found

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="none"></endpoint>
### UIAutoSize.none
```lx
UIAutoSize.none : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="width"></endpoint>
### UIAutoSize.width
```lx
UIAutoSize.width : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="height"></endpoint>
### UIAutoSize.height
```lx
UIAutoSize.height : unknown
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UIAutoSize" signature="both"></endpoint>
### UIAutoSize.both
```lx
UIAutoSize.both : unknown
```
> no docs found   


## UILabel
```lx
import "luxe: ui/label.control" for UILabel
```
> no docs found

<endpoint module="luxe: ui/label.control" class="UILabel" signature="create(ui_entity : Any)"></endpoint>
### UILabel.create(.)
```lx
UILabel.create(ui_entity : Any) : UILabel
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="override(label : Control)"></endpoint>
### UILabel.override(.)
```lx
UILabel.override(label : Control) : LabelInfo
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_render_text(label : Control)"></endpoint>
### UILabel.get_render_text(.)
```lx
UILabel.get_render_text(label : Control) : RenderText
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_extents(label : Control)"></endpoint>
### UILabel.get_text_extents(.)
```lx
UILabel.get_text_extents(label : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_extents(label : Control, offset : Num, count : Num)"></endpoint>
### UILabel.get_text_extents(...)
```lx
UILabel.get_text_extents(label : Control, offset : Num, count : Num) : Float2
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text(label : Control, text : String)"></endpoint>
### UILabel.set_text(..)
```lx
UILabel.set_text(label : Control, text : String) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text(label : Control)"></endpoint>
### UILabel.get_text(.)
```lx
UILabel.get_text(label : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_font(label : Control)"></endpoint>
### UILabel.get_font(.)
```lx
UILabel.get_font(label : Control) : Font
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_font(label : Control, font : Font)"></endpoint>
### UILabel.set_font(..)
```lx
UILabel.set_font(label : Control, font : Font) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_style(label : Control)"></endpoint>
### UILabel.get_text_style(.)
```lx
UILabel.get_text_style(label : Control) : TextStyle
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text_style(label : Control, style : TextStyle)"></endpoint>
### UILabel.set_text_style(..)
```lx
UILabel.set_text_style(label : Control, style : TextStyle) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_color(label : Control, color : Color)"></endpoint>
### UILabel.set_color(..)
```lx
UILabel.set_color(label : Control, color : Color) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_color(label : Control)"></endpoint>
### UILabel.get_color(.)
```lx
UILabel.get_color(label : Control) : Color
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_color_hover(label : Control, color : Color)"></endpoint>
### UILabel.set_color_hover(..)
```lx
UILabel.set_color_hover(label : Control, color : Color) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_color_hover(label : Control)"></endpoint>
### UILabel.get_color_hover(.)
```lx
UILabel.get_color_hover(label : Control) : Color
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_wrap(label : Control, wrap : UITextWrapMode)"></endpoint>
### UILabel.set_wrap(..)
```lx
UILabel.set_wrap(label : Control, wrap : UITextWrapMode) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_wrap(label : Control)"></endpoint>
### UILabel.get_wrap(.)
```lx
UILabel.get_wrap(label : Control) : UITextWrapMode
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_text_size(label : Control, size : Num)"></endpoint>
### UILabel.set_text_size(..)
```lx
UILabel.set_text_size(label : Control, size : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_text_size(label : Control)"></endpoint>
### UILabel.get_text_size(.)
```lx
UILabel.get_text_size(label : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_align(label : Control, align : TextAlign)"></endpoint>
### UILabel.set_align(..)
```lx
UILabel.set_align(label : Control, align : TextAlign) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_align(label : Control)"></endpoint>
### UILabel.get_align(.)
```lx
UILabel.get_align(label : Control) : TextAlign
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_align_vertical(label : Control, align : TextAlign)"></endpoint>
### UILabel.set_align_vertical(..)
```lx
UILabel.set_align_vertical(label : Control, align : TextAlign) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_align_vertical(label : Control)"></endpoint>
### UILabel.get_align_vertical(.)
```lx
UILabel.get_align_vertical(label : Control) : TextAlign
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_max_visible(label : Control, visible_count : Num)"></endpoint>
### UILabel.set_max_visible(..)
```lx
UILabel.set_max_visible(label : Control, visible_count : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="get_max_visible(label : Control)"></endpoint>
### UILabel.get_max_visible(.)
```lx
UILabel.get_max_visible(label : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_auto_size(label : Control, state : UIAutoSize)"></endpoint>
### UILabel.set_auto_size(..)
```lx
UILabel.set_auto_size(label : Control, state : UIAutoSize) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_overflow_scroll(label : Control, speed : Num, wait : Num, pause : Num)"></endpoint>
### UILabel.set_overflow_scroll(....)
```lx
UILabel.set_overflow_scroll(label : Control, speed : Num, wait : Num, pause : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_overflow_scroll(label : Control, type : UIOverflowScroll, speed : Num, wait : Num, pause : Num)"></endpoint>
### UILabel.set_overflow_scroll(.....)
```lx
UILabel.set_overflow_scroll(label : Control, type : UIOverflowScroll, speed : Num, wait : Num, pause : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc(label : Control, space : String, key : String)"></endpoint>
### UILabel.set_loc(...)
```lx
UILabel.set_loc(label : Control, space : String, key : String) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc(label : Control, key : String)"></endpoint>
### UILabel.set_loc(..)
```lx
UILabel.set_loc(label : Control, key : String) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc_with_args(label : Control, space : String, key : String, args : List)"></endpoint>
### UILabel.set_loc_with_args(....)
```lx
UILabel.set_loc_with_args(label : Control, space : String, key : String, args : List) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_loc_with_args(label : Control, key : String, args : List)"></endpoint>
### UILabel.set_loc_with_args(...)
```lx
UILabel.set_loc_with_args(label : Control, key : String, args : List) : None
```
> no docs found   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_outline(label : Control, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### UILabel.set_outline(.....)
```lx
UILabel.set_outline(label : Control, radius : Num, softness : Num, color : Color, offset : Float2) : None
```
> Set the text outline parameters.   

<endpoint module="luxe: ui/label.control" class="UILabel" signature="set_shadow(label : Control, radius : Num, softness : Num, color : Color, offset : Float2)"></endpoint>
### UILabel.set_shadow(.....)
```lx
UILabel.set_shadow(label : Control, radius : Num, softness : Num, color : Color, offset : Float2) : None
```
> Set the text shadow parameters.   

