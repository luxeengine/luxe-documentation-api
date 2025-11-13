---
title: "luxe: ui/window.control.api"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/window.control.api"
---
- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


## API
```wren
import "luxe: ui/window.control.api" for API
```
> no docs found

<endpoint module="luxe: ui/window.control.api" class="API" signature="id"></endpoint>
### API.id
```wren
API.id : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="create(ui : Entity)"></endpoint>
### API.create(.)
```wren
API.create(ui : Entity) : Control
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="has(control : Control)"></endpoint>
### API.has(.)
```wren
API.has(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="get(control : Control)"></endpoint>
### API.get(.)
```wren
API.get(control : Control) : Data
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="get"></endpoint>
### API.get
```wren
API.get : APIGet
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="set"></endpoint>
### API.set
```wren
API.set : APISet
```
> no docs found   


## APIGet
```wren
import "luxe: ui/window.control.api" for APIGet
```
> no docs found

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="new()"></endpoint>
### APIGet.new(.)
```wren
APIGet.new() : APIGet
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="bring_to_front(control : Control)"></endpoint>
### APIGet.bring_to_front(.)
```wren
APIGet.bring_to_front(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="closable(control : Control)"></endpoint>
### APIGet.closable(.)
```wren
APIGet.closable(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapsible(control : Control)"></endpoint>
### APIGet.collapsible(.)
```wren
APIGet.collapsible(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="resizable(control : Control)"></endpoint>
### APIGet.resizable(.)
```wren
APIGet.resizable(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="draggable(control : Control)"></endpoint>
### APIGet.draggable(.)
```wren
APIGet.draggable(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="title_height(control : Control)"></endpoint>
### APIGet.title_height(.)
```wren
APIGet.title_height(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="text(control : Control)"></endpoint>
### APIGet.text(.)
```wren
APIGet.text(control : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="align(control : Control)"></endpoint>
### APIGet.align(.)
```wren
APIGet.align(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="align_vertical(control : Control)"></endpoint>
### APIGet.align_vertical(.)
```wren
APIGet.align_vertical(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="localization(control : Control)"></endpoint>
### APIGet.localization(.)
```wren
APIGet.localization(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="max_visible(control : Control)"></endpoint>
### APIGet.max_visible(.)
```wren
APIGet.max_visible(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="text_margin(control : Control)"></endpoint>
### APIGet.text_margin(.)
```wren
APIGet.text_margin(control : Control) : Float4
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="override(control : Control)"></endpoint>
### APIGet.override(.)
```wren
APIGet.override(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="render_text(control : Control)"></endpoint>
### APIGet.render_text(.)
```wren
APIGet.render_text(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="dragging(control : Control)"></endpoint>
### APIGet.dragging(.)
```wren
APIGet.dragging(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="dragging_resize(control : Control)"></endpoint>
### APIGet.dragging_resize(.)
```wren
APIGet.dragging_resize(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapsed(control : Control)"></endpoint>
### APIGet.collapsed(.)
```wren
APIGet.collapsed(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_title(control : Control)"></endpoint>
### APIGet.in_title(.)
```wren
APIGet.in_title(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_close_handle(control : Control)"></endpoint>
### APIGet.in_close_handle(.)
```wren
APIGet.in_close_handle(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_collapse_handle(control : Control)"></endpoint>
### APIGet.in_collapse_handle(.)
```wren
APIGet.in_collapse_handle(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_resize_handle(control : Control)"></endpoint>
### APIGet.in_resize_handle(.)
```wren
APIGet.in_resize_handle(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapse_size(control : Control)"></endpoint>
### APIGet.collapse_size(.)
```wren
APIGet.collapse_size(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="drag(control : Control)"></endpoint>
### APIGet.drag(.)
```wren
APIGet.drag(control : Control) : Float2
```
> no docs found   


## APISet
```wren
import "luxe: ui/window.control.api" for APISet
```
> no docs found

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="new()"></endpoint>
### APISet.new(.)
```wren
APISet.new() : APISet
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="bring_to_front(control : Control, value : Bool)"></endpoint>
### APISet.bring_to_front(..)
```wren
APISet.bring_to_front(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="closable(control : Control, value : Bool)"></endpoint>
### APISet.closable(..)
```wren
APISet.closable(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapsible(control : Control, value : Bool)"></endpoint>
### APISet.collapsible(..)
```wren
APISet.collapsible(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="resizable(control : Control, value : Bool)"></endpoint>
### APISet.resizable(..)
```wren
APISet.resizable(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="draggable(control : Control, value : Bool)"></endpoint>
### APISet.draggable(..)
```wren
APISet.draggable(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="title_height(control : Control, value : Num)"></endpoint>
### APISet.title_height(..)
```wren
APISet.title_height(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="text(control : Control, value : String)"></endpoint>
### APISet.text(..)
```wren
APISet.text(control : Control, value : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="align(control : Control, value : Any)"></endpoint>
### APISet.align(..)
```wren
APISet.align(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="align_vertical(control : Control, value : Any)"></endpoint>
### APISet.align_vertical(..)
```wren
APISet.align_vertical(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="localization(control : Control, value : Any)"></endpoint>
### APISet.localization(..)
```wren
APISet.localization(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="max_visible(control : Control, value : Num)"></endpoint>
### APISet.max_visible(..)
```wren
APISet.max_visible(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="text_margin(control : Control, value : Float4)"></endpoint>
### APISet.text_margin(..)
```wren
APISet.text_margin(control : Control, value : Float4) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="override(control : Control, value : Any)"></endpoint>
### APISet.override(..)
```wren
APISet.override(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="render_text(control : Control, value : Num)"></endpoint>
### APISet.render_text(..)
```wren
APISet.render_text(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="dragging(control : Control, value : Bool)"></endpoint>
### APISet.dragging(..)
```wren
APISet.dragging(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="dragging_resize(control : Control, value : Bool)"></endpoint>
### APISet.dragging_resize(..)
```wren
APISet.dragging_resize(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapsed(control : Control, value : Bool)"></endpoint>
### APISet.collapsed(..)
```wren
APISet.collapsed(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_title(control : Control, value : Bool)"></endpoint>
### APISet.in_title(..)
```wren
APISet.in_title(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_close_handle(control : Control, value : Bool)"></endpoint>
### APISet.in_close_handle(..)
```wren
APISet.in_close_handle(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_collapse_handle(control : Control, value : Bool)"></endpoint>
### APISet.in_collapse_handle(..)
```wren
APISet.in_collapse_handle(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_resize_handle(control : Control, value : Bool)"></endpoint>
### APISet.in_resize_handle(..)
```wren
APISet.in_resize_handle(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapse_size(control : Control, value : Float2)"></endpoint>
### APISet.collapse_size(..)
```wren
APISet.collapse_size(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="drag(control : Control, value : Float2)"></endpoint>
### APISet.drag(..)
```wren
APISet.drag(control : Control, value : Float2) : unknown
```
> no docs found   


## Fields
```wren
import "luxe: ui/window.control.api" for Fields
```
> no docs found

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="bring_to_front"></endpoint>
### Fields.bring_to_front
```wren
Fields.bring_to_front : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="closable"></endpoint>
### Fields.closable
```wren
Fields.closable : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapsible"></endpoint>
### Fields.collapsible
```wren
Fields.collapsible : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="resizable"></endpoint>
### Fields.resizable
```wren
Fields.resizable : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="draggable"></endpoint>
### Fields.draggable
```wren
Fields.draggable : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="title_height"></endpoint>
### Fields.title_height
```wren
Fields.title_height : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="text"></endpoint>
### Fields.text
```wren
Fields.text : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="align"></endpoint>
### Fields.align
```wren
Fields.align : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="align_vertical"></endpoint>
### Fields.align_vertical
```wren
Fields.align_vertical : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization"></endpoint>
### Fields.localization
```wren
Fields.localization : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_key"></endpoint>
### Fields.localization_key
```wren
Fields.localization_key : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_space"></endpoint>
### Fields.localization_space
```wren
Fields.localization_space : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_args"></endpoint>
### Fields.localization_args
```wren
Fields.localization_args : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="max_visible"></endpoint>
### Fields.max_visible
```wren
Fields.max_visible : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="text_margin"></endpoint>
### Fields.text_margin
```wren
Fields.text_margin : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="override"></endpoint>
### Fields.override
```wren
Fields.override : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="render_text"></endpoint>
### Fields.render_text
```wren
Fields.render_text : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="dragging"></endpoint>
### Fields.dragging
```wren
Fields.dragging : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="dragging_resize"></endpoint>
### Fields.dragging_resize
```wren
Fields.dragging_resize : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapsed"></endpoint>
### Fields.collapsed
```wren
Fields.collapsed : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_title"></endpoint>
### Fields.in_title
```wren
Fields.in_title : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_close_handle"></endpoint>
### Fields.in_close_handle
```wren
Fields.in_close_handle : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_collapse_handle"></endpoint>
### Fields.in_collapse_handle
```wren
Fields.in_collapse_handle : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_resize_handle"></endpoint>
### Fields.in_resize_handle
```wren
Fields.in_resize_handle : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapse_size"></endpoint>
### Fields.collapse_size
```wren
Fields.collapse_size : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="drag"></endpoint>
### Fields.drag
```wren
Fields.drag : String
```
> no docs found   

