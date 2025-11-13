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
```lx
import "luxe: ui/text.control.api" for API
```
> no docs found

<endpoint module="luxe: ui/text.control.api" class="API" signature="id"></endpoint>
### API.id
```lx
API.id : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="create(ui : Entity)"></endpoint>
### API.create(.)
```lx
API.create(ui : Entity) : Control
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="has(control : Control)"></endpoint>
### API.has(.)
```lx
API.has(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="get(control : Control)"></endpoint>
### API.get(.)
```lx
API.get(control : Control) : Data
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="get"></endpoint>
### API.get
```lx
API.get : APIGet
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="API" signature="set"></endpoint>
### API.set
```lx
API.set : APISet
```
> no docs found   


## APIGet
```lx
import "luxe: ui/text.control.api" for APIGet
```
> no docs found

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="new()"></endpoint>
### APIGet.new(.)
```lx
APIGet.new() : APIGet
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="text(control : Control)"></endpoint>
### APIGet.text(.)
```lx
APIGet.text(control : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="align(control : Control)"></endpoint>
### APIGet.align(.)
```lx
APIGet.align(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="align_vertical(control : Control)"></endpoint>
### APIGet.align_vertical(.)
```lx
APIGet.align_vertical(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="override(control : Control)"></endpoint>
### APIGet.override(.)
```lx
APIGet.override(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="render_text(control : Control)"></endpoint>
### APIGet.render_text(.)
```lx
APIGet.render_text(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="offset(control : Control)"></endpoint>
### APIGet.offset(.)
```lx
APIGet.offset(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="press_time(control : Control)"></endpoint>
### APIGet.press_time(.)
```lx
APIGet.press_time(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="blink_next(control : Control)"></endpoint>
### APIGet.blink_next(.)
```lx
APIGet.blink_next(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="index(control : Control)"></endpoint>
### APIGet.index(.)
```lx
APIGet.index(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="index_offset(control : Control)"></endpoint>
### APIGet.index_offset(.)
```lx
APIGet.index_offset(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="select_index(control : Control)"></endpoint>
### APIGet.select_index(.)
```lx
APIGet.select_index(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="select_count(control : Control)"></endpoint>
### APIGet.select_count(.)
```lx
APIGet.select_count(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="composition_index(control : Control)"></endpoint>
### APIGet.composition_index(.)
```lx
APIGet.composition_index(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="composition_size(control : Control)"></endpoint>
### APIGet.composition_size(.)
```lx
APIGet.composition_size(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="blink(control : Control)"></endpoint>
### APIGet.blink(.)
```lx
APIGet.blink(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="dragging(control : Control)"></endpoint>
### APIGet.dragging(.)
```lx
APIGet.dragging(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="editing(control : Control)"></endpoint>
### APIGet.editing(.)
```lx
APIGet.editing(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="invalidated(control : Control)"></endpoint>
### APIGet.invalidated(.)
```lx
APIGet.invalidated(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APIGet" signature="text_pre(control : Control)"></endpoint>
### APIGet.text_pre(.)
```lx
APIGet.text_pre(control : Control) : String
```
> no docs found   


## APISet
```lx
import "luxe: ui/text.control.api" for APISet
```
> no docs found

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="new()"></endpoint>
### APISet.new(.)
```lx
APISet.new() : APISet
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="text(control : Control, value : String)"></endpoint>
### APISet.text(..)
```lx
APISet.text(control : Control, value : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="align(control : Control, value : Any)"></endpoint>
### APISet.align(..)
```lx
APISet.align(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="align_vertical(control : Control, value : Any)"></endpoint>
### APISet.align_vertical(..)
```lx
APISet.align_vertical(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="override(control : Control, value : Any)"></endpoint>
### APISet.override(..)
```lx
APISet.override(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="render_text(control : Control, value : Num)"></endpoint>
### APISet.render_text(..)
```lx
APISet.render_text(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="offset(control : Control, value : Float2)"></endpoint>
### APISet.offset(..)
```lx
APISet.offset(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="press_time(control : Control, value : Num)"></endpoint>
### APISet.press_time(..)
```lx
APISet.press_time(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="blink_next(control : Control, value : Num)"></endpoint>
### APISet.blink_next(..)
```lx
APISet.blink_next(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="index(control : Control, value : Num)"></endpoint>
### APISet.index(..)
```lx
APISet.index(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="index_offset(control : Control, value : Num)"></endpoint>
### APISet.index_offset(..)
```lx
APISet.index_offset(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="select_index(control : Control, value : Num)"></endpoint>
### APISet.select_index(..)
```lx
APISet.select_index(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="select_count(control : Control, value : Num)"></endpoint>
### APISet.select_count(..)
```lx
APISet.select_count(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="composition_index(control : Control, value : Num)"></endpoint>
### APISet.composition_index(..)
```lx
APISet.composition_index(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="composition_size(control : Control, value : Num)"></endpoint>
### APISet.composition_size(..)
```lx
APISet.composition_size(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="blink(control : Control, value : Bool)"></endpoint>
### APISet.blink(..)
```lx
APISet.blink(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="dragging(control : Control, value : Bool)"></endpoint>
### APISet.dragging(..)
```lx
APISet.dragging(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="editing(control : Control, value : Bool)"></endpoint>
### APISet.editing(..)
```lx
APISet.editing(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="invalidated(control : Control, value : Bool)"></endpoint>
### APISet.invalidated(..)
```lx
APISet.invalidated(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="APISet" signature="text_pre(control : Control, value : String)"></endpoint>
### APISet.text_pre(..)
```lx
APISet.text_pre(control : Control, value : String) : unknown
```
> no docs found   


## Fields
```lx
import "luxe: ui/text.control.api" for Fields
```
> no docs found

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="text"></endpoint>
### Fields.text
```lx
Fields.text : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="align"></endpoint>
### Fields.align
```lx
Fields.align : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="align_vertical"></endpoint>
### Fields.align_vertical
```lx
Fields.align_vertical : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="override"></endpoint>
### Fields.override
```lx
Fields.override : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="render_text"></endpoint>
### Fields.render_text
```lx
Fields.render_text : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="offset"></endpoint>
### Fields.offset
```lx
Fields.offset : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="press_time"></endpoint>
### Fields.press_time
```lx
Fields.press_time : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="blink_next"></endpoint>
### Fields.blink_next
```lx
Fields.blink_next : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="index"></endpoint>
### Fields.index
```lx
Fields.index : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="index_offset"></endpoint>
### Fields.index_offset
```lx
Fields.index_offset : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="select_index"></endpoint>
### Fields.select_index
```lx
Fields.select_index : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="select_count"></endpoint>
### Fields.select_count
```lx
Fields.select_count : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="composition_index"></endpoint>
### Fields.composition_index
```lx
Fields.composition_index : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="composition_size"></endpoint>
### Fields.composition_size
```lx
Fields.composition_size : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="blink"></endpoint>
### Fields.blink
```lx
Fields.blink : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="dragging"></endpoint>
### Fields.dragging
```lx
Fields.dragging : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="editing"></endpoint>
### Fields.editing
```lx
Fields.editing : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="invalidated"></endpoint>
### Fields.invalidated
```lx
Fields.invalidated : String
```
> no docs found   

<endpoint module="luxe: ui/text.control.api" class="Fields" signature="text_pre"></endpoint>
### Fields.text_pre
```lx
Fields.text_pre : String
```
> no docs found   

