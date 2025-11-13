---
title: "luxe: ui/text.control.api"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/text.control.api"
---
- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


## API
```wren
import "luxe: ui/text.control.api" for API
```
> no docs found

<endpoint module="luxe: ui/text.control.api" class="API" signature="id"></endpoint>
### API.id
```wren
API.id : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="create(ui : Entity)"></endpoint>
### API.create(.)
```wren
API.create(ui : Entity) : Control
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="has(control : Control)"></endpoint>
### API.has(.)
```wren
API.has(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="get(control : Control)"></endpoint>
### API.get(.)
```wren
API.get(control : Control) : Data
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="get"></endpoint>
### API.get
```wren
API.get : APIGet
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="set"></endpoint>
### API.set
```wren
API.set : APISet
```
> no docs found   


## APIGet
```wren
import "luxe: ui/text.control.api" for APIGet
```
> no docs found

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="new()"></endpoint>
### APIGet.new(.)
```wren
APIGet.new() : APIGet
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="text(control : Control)"></endpoint>
### APIGet.text(.)
```wren
APIGet.text(control : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="align(control : Control)"></endpoint>
### APIGet.align(.)
```wren
APIGet.align(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="align_vertical(control : Control)"></endpoint>
### APIGet.align_vertical(.)
```wren
APIGet.align_vertical(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="override(control : Control)"></endpoint>
### APIGet.override(.)
```wren
APIGet.override(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="render_text(control : Control)"></endpoint>
### APIGet.render_text(.)
```wren
APIGet.render_text(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="offset(control : Control)"></endpoint>
### APIGet.offset(.)
```wren
APIGet.offset(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="press_time(control : Control)"></endpoint>
### APIGet.press_time(.)
```wren
APIGet.press_time(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="blink_next(control : Control)"></endpoint>
### APIGet.blink_next(.)
```wren
APIGet.blink_next(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="index(control : Control)"></endpoint>
### APIGet.index(.)
```wren
APIGet.index(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="index_offset(control : Control)"></endpoint>
### APIGet.index_offset(.)
```wren
APIGet.index_offset(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="select_index(control : Control)"></endpoint>
### APIGet.select_index(.)
```wren
APIGet.select_index(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="select_count(control : Control)"></endpoint>
### APIGet.select_count(.)
```wren
APIGet.select_count(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="composition_index(control : Control)"></endpoint>
### APIGet.composition_index(.)
```wren
APIGet.composition_index(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="composition_size(control : Control)"></endpoint>
### APIGet.composition_size(.)
```wren
APIGet.composition_size(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="blink(control : Control)"></endpoint>
### APIGet.blink(.)
```wren
APIGet.blink(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="dragging(control : Control)"></endpoint>
### APIGet.dragging(.)
```wren
APIGet.dragging(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="editing(control : Control)"></endpoint>
### APIGet.editing(.)
```wren
APIGet.editing(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="invalidated(control : Control)"></endpoint>
### APIGet.invalidated(.)
```wren
APIGet.invalidated(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="text_pre(control : Control)"></endpoint>
### APIGet.text_pre(.)
```wren
APIGet.text_pre(control : Control) : String
```
> no docs found   


## APISet
```wren
import "luxe: ui/text.control.api" for APISet
```
> no docs found

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="new()"></endpoint>
### APISet.new(.)
```wren
APISet.new() : APISet
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="text(control : Control, value : String)"></endpoint>
### APISet.text(..)
```wren
APISet.text(control : Control, value : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="align(control : Control, value : Any)"></endpoint>
### APISet.align(..)
```wren
APISet.align(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="align_vertical(control : Control, value : Any)"></endpoint>
### APISet.align_vertical(..)
```wren
APISet.align_vertical(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="override(control : Control, value : Any)"></endpoint>
### APISet.override(..)
```wren
APISet.override(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="render_text(control : Control, value : Num)"></endpoint>
### APISet.render_text(..)
```wren
APISet.render_text(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="offset(control : Control, value : Float2)"></endpoint>
### APISet.offset(..)
```wren
APISet.offset(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="press_time(control : Control, value : Num)"></endpoint>
### APISet.press_time(..)
```wren
APISet.press_time(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="blink_next(control : Control, value : Num)"></endpoint>
### APISet.blink_next(..)
```wren
APISet.blink_next(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="index(control : Control, value : Num)"></endpoint>
### APISet.index(..)
```wren
APISet.index(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="index_offset(control : Control, value : Num)"></endpoint>
### APISet.index_offset(..)
```wren
APISet.index_offset(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="select_index(control : Control, value : Num)"></endpoint>
### APISet.select_index(..)
```wren
APISet.select_index(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="select_count(control : Control, value : Num)"></endpoint>
### APISet.select_count(..)
```wren
APISet.select_count(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="composition_index(control : Control, value : Num)"></endpoint>
### APISet.composition_index(..)
```wren
APISet.composition_index(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="composition_size(control : Control, value : Num)"></endpoint>
### APISet.composition_size(..)
```wren
APISet.composition_size(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="blink(control : Control, value : Bool)"></endpoint>
### APISet.blink(..)
```wren
APISet.blink(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="dragging(control : Control, value : Bool)"></endpoint>
### APISet.dragging(..)
```wren
APISet.dragging(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="editing(control : Control, value : Bool)"></endpoint>
### APISet.editing(..)
```wren
APISet.editing(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="invalidated(control : Control, value : Bool)"></endpoint>
### APISet.invalidated(..)
```wren
APISet.invalidated(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="text_pre(control : Control, value : String)"></endpoint>
### APISet.text_pre(..)
```wren
APISet.text_pre(control : Control, value : String) : unknown
```
> no docs found   


## Fields
```wren
import "luxe: ui/text.control.api" for Fields
```
> no docs found

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="text"></endpoint>
### Fields.text
```wren
Fields.text : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="align"></endpoint>
### Fields.align
```wren
Fields.align : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="align_vertical"></endpoint>
### Fields.align_vertical
```wren
Fields.align_vertical : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="override"></endpoint>
### Fields.override
```wren
Fields.override : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="render_text"></endpoint>
### Fields.render_text
```wren
Fields.render_text : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="offset"></endpoint>
### Fields.offset
```wren
Fields.offset : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="press_time"></endpoint>
### Fields.press_time
```wren
Fields.press_time : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="blink_next"></endpoint>
### Fields.blink_next
```wren
Fields.blink_next : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="index"></endpoint>
### Fields.index
```wren
Fields.index : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="index_offset"></endpoint>
### Fields.index_offset
```wren
Fields.index_offset : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="select_index"></endpoint>
### Fields.select_index
```wren
Fields.select_index : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="select_count"></endpoint>
### Fields.select_count
```wren
Fields.select_count : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="composition_index"></endpoint>
### Fields.composition_index
```wren
Fields.composition_index : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="composition_size"></endpoint>
### Fields.composition_size
```wren
Fields.composition_size : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="blink"></endpoint>
### Fields.blink
```wren
Fields.blink : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="dragging"></endpoint>
### Fields.dragging
```wren
Fields.dragging : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="editing"></endpoint>
### Fields.editing
```wren
Fields.editing : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="invalidated"></endpoint>
### Fields.invalidated
```wren
Fields.invalidated : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="text_pre"></endpoint>
### Fields.text_pre
```wren
Fields.text_pre : String
```
> no docs found   

