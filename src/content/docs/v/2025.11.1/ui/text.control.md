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
```lx
import "luxe: ui/text.control" for Data
```
> no docs found

### Variables
```lx
var text : String = ""
var align : TextAlignH = TextAlignH.left
var align_vertical : TextAlignV = TextAlignV.center
var override : Object = Object
```

## TextAlignH
```lx
import "luxe: ui/text.control" for TextAlignH
```
> no docs found

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="left"></endpoint>
### TextAlignH.left
```lx
TextAlignH.left : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="center"></endpoint>
### TextAlignH.center
```lx
TextAlignH.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignH" signature="right"></endpoint>
### TextAlignH.right
```lx
TextAlignH.right : unknown
```
> no docs found   


## TextAlignV
```lx
import "luxe: ui/text.control" for TextAlignV
```
> no docs found

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="top"></endpoint>
### TextAlignV.top
```lx
TextAlignV.top : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="center"></endpoint>
### TextAlignV.center
```lx
TextAlignV.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="TextAlignV" signature="bottom"></endpoint>
### TextAlignV.bottom
```lx
TextAlignV.bottom : unknown
```
> no docs found   


## UIText
```lx
import "luxe: ui/text.control" for UIText
```
> no docs found

<endpoint module="luxe: ui/text.control" class="UIText" signature="override(text : Control)"></endpoint>
### UIText.override(.)
```lx
UIText.override(text : Control) : TextInfo
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="override_text(text : Control)"></endpoint>
### UIText.override_text(.)
```lx
UIText.override_text(text : Control) : LabelInfo
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="create(ui_entity : Any)"></endpoint>
### UIText.create(.)
```lx
UIText.create(ui_entity : Any) : UIText
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="select_all(control : Control)"></endpoint>
### UIText.select_all(.)
```lx
UIText.select_all(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="has_selected(control : Control)"></endpoint>
### UIText.has_selected(.)
```lx
UIText.has_selected(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="invalidate(control : Control, change_before : String)"></endpoint>
### UIText.invalidate(..)
```lx
UIText.invalidate(control : Control, change_before : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_text(control : Control, text : String)"></endpoint>
### UIText.set_text(..)
```lx
UIText.set_text(control : Control, text : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_text(control : Control)"></endpoint>
### UIText.get_text(.)
```lx
UIText.get_text(control : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_font(control : Control)"></endpoint>
### UIText.get_font(.)
```lx
UIText.get_font(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_font(control : Control, font : Font)"></endpoint>
### UIText.set_font(..)
```lx
UIText.set_font(control : Control, font : Font) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_color(control : Control, color : Color)"></endpoint>
### UIText.set_color(..)
```lx
UIText.set_color(control : Control, color : Color) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_color(control : Control)"></endpoint>
### UIText.get_color(.)
```lx
UIText.get_color(control : Control) : Color
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_text_size(control : Control, size : Num)"></endpoint>
### UIText.set_text_size(..)
```lx
UIText.set_text_size(control : Control, size : Num) : None
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_text_size(control : Control)"></endpoint>
### UIText.get_text_size(.)
```lx
UIText.get_text_size(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_align(control : Control, align : TextAlign)"></endpoint>
### UIText.set_align(..)
```lx
UIText.set_align(control : Control, align : TextAlign) : None
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_align(control : Control)"></endpoint>
### UIText.get_align(.)
```lx
UIText.get_align(control : Control) : TextAlign
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="set_align_vertical(control : Control, align : TextAlign)"></endpoint>
### UIText.set_align_vertical(..)
```lx
UIText.set_align_vertical(control : Control, align : TextAlign) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control" class="UIText" signature="get_align_vertical(control : Control)"></endpoint>
### UIText.get_align_vertical(.)
```lx
UIText.get_align_vertical(control : Control) : Text
```
> no docs found   

