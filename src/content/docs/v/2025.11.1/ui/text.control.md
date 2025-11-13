---
title: "luxe: ui/text.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/text.control"
---
- [Data](#data)   
- [TextAlignH](#textalignh)   
- [TextAlignV](#textalignv)   
- [UIText](#uitext)   

---


## Data
```wren
import "luxe: ui/text.control" for Data
```
> no docs found

### Variables
```wren
var text : String = ""
var align : TextAlignH = TextAlignH.left
var align_vertical : TextAlignV = TextAlignV.center
var override : Object = Object
```

## TextAlignH
```wren
import "luxe: ui/text.control" for TextAlignH
```
> no docs found

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="left"></endpoint>
### TextAlignH.left
```wren
TextAlignH.left : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="center"></endpoint>
### TextAlignH.center
```wren
TextAlignH.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="right"></endpoint>
### TextAlignH.right
```wren
TextAlignH.right : unknown
```
> no docs found   


## TextAlignV
```wren
import "luxe: ui/text.control" for TextAlignV
```
> no docs found

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="top"></endpoint>
### TextAlignV.top
```wren
TextAlignV.top : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="center"></endpoint>
### TextAlignV.center
```wren
TextAlignV.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="bottom"></endpoint>
### TextAlignV.bottom
```wren
TextAlignV.bottom : unknown
```
> no docs found   


## UIText
```wren
import "luxe: ui/text.control" for UIText
```
> no docs found

<endpoint module="luxe: ui/text.control" class="UIText" signature="override(text : Control)"></endpoint>
### UIText.override(.)
```wren
UIText.override(text : Control) : TextInfo
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="override_text(text : Control)"></endpoint>
### UIText.override_text(.)
```wren
UIText.override_text(text : Control) : LabelInfo
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="create(ui_entity : Any)"></endpoint>
### UIText.create(.)
```wren
UIText.create(ui_entity : Any) : UIText
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="select_all(control : Control)"></endpoint>
### UIText.select_all(.)
```wren
UIText.select_all(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="has_selected(control : Control)"></endpoint>
### UIText.has_selected(.)
```wren
UIText.has_selected(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="invalidate(control : Control, change_before : String)"></endpoint>
### UIText.invalidate(..)
```wren
UIText.invalidate(control : Control, change_before : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_text(control : Control, text : String)"></endpoint>
### UIText.set_text(..)
```wren
UIText.set_text(control : Control, text : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_text(control : Control)"></endpoint>
### UIText.get_text(.)
```wren
UIText.get_text(control : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_font(control : Control)"></endpoint>
### UIText.get_font(.)
```wren
UIText.get_font(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_font(control : Control, font : Font)"></endpoint>
### UIText.set_font(..)
```wren
UIText.set_font(control : Control, font : Font) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_color(control : Control, color : Color)"></endpoint>
### UIText.set_color(..)
```wren
UIText.set_color(control : Control, color : Color) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_color(control : Control)"></endpoint>
### UIText.get_color(.)
```wren
UIText.get_color(control : Control) : Color
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_text_size(control : Control, size : Num)"></endpoint>
### UIText.set_text_size(..)
```wren
UIText.set_text_size(control : Control, size : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_text_size(control : Control)"></endpoint>
### UIText.get_text_size(.)
```wren
UIText.get_text_size(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_align(control : Control, align : TextAlign)"></endpoint>
### UIText.set_align(..)
```wren
UIText.set_align(control : Control, align : TextAlign) : None
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_align(control : Control)"></endpoint>
### UIText.get_align(.)
```wren
UIText.get_align(control : Control) : TextAlign
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_align_vertical(control : Control, align : TextAlign)"></endpoint>
### UIText.set_align_vertical(..)
```wren
UIText.set_align_vertical(control : Control, align : TextAlign) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_align_vertical(control : Control)"></endpoint>
### UIText.get_align_vertical(.)
```wren
UIText.get_align_vertical(control : Control) : Text
```
> no docs found   

