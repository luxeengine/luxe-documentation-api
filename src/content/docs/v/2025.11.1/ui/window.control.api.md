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
```lx
import "luxe: ui/window.control.api" for API
```
> no docs found

<endpoint module="luxe: ui/window.control.api" class="API" signature="id"></endpoint>
### API.id
```lx
API.id : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="create(ui : Entity)"></endpoint>
### API.create(.)
```lx
API.create(ui : Entity) : Control
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="has(control : Control)"></endpoint>
### API.has(.)
```lx
API.has(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="get(control : Control)"></endpoint>
### API.get(.)
```lx
API.get(control : Control) : Data
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="get"></endpoint>
### API.get
```lx
API.get : APIGet
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="API" signature="set"></endpoint>
### API.set
```lx
API.set : APISet
```
> no docs found   


## APIGet
```lx
import "luxe: ui/window.control.api" for APIGet
```
> no docs found

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="new()"></endpoint>
### APIGet.new(.)
```lx
APIGet.new() : APIGet
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="bring_to_front(control : Control)"></endpoint>
### APIGet.bring_to_front(.)
```lx
APIGet.bring_to_front(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="closable(control : Control)"></endpoint>
### APIGet.closable(.)
```lx
APIGet.closable(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapsible(control : Control)"></endpoint>
### APIGet.collapsible(.)
```lx
APIGet.collapsible(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="resizable(control : Control)"></endpoint>
### APIGet.resizable(.)
```lx
APIGet.resizable(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="draggable(control : Control)"></endpoint>
### APIGet.draggable(.)
```lx
APIGet.draggable(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="title_height(control : Control)"></endpoint>
### APIGet.title_height(.)
```lx
APIGet.title_height(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="text(control : Control)"></endpoint>
### APIGet.text(.)
```lx
APIGet.text(control : Control) : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="align(control : Control)"></endpoint>
### APIGet.align(.)
```lx
APIGet.align(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="align_vertical(control : Control)"></endpoint>
### APIGet.align_vertical(.)
```lx
APIGet.align_vertical(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="localization(control : Control)"></endpoint>
### APIGet.localization(.)
```lx
APIGet.localization(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="max_visible(control : Control)"></endpoint>
### APIGet.max_visible(.)
```lx
APIGet.max_visible(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="text_margin(control : Control)"></endpoint>
### APIGet.text_margin(.)
```lx
APIGet.text_margin(control : Control) : Float4
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="override(control : Control)"></endpoint>
### APIGet.override(.)
```lx
APIGet.override(control : Control) : Any
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="render_text(control : Control)"></endpoint>
### APIGet.render_text(.)
```lx
APIGet.render_text(control : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="dragging(control : Control)"></endpoint>
### APIGet.dragging(.)
```lx
APIGet.dragging(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="dragging_resize(control : Control)"></endpoint>
### APIGet.dragging_resize(.)
```lx
APIGet.dragging_resize(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapsed(control : Control)"></endpoint>
### APIGet.collapsed(.)
```lx
APIGet.collapsed(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_title(control : Control)"></endpoint>
### APIGet.in_title(.)
```lx
APIGet.in_title(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_close_handle(control : Control)"></endpoint>
### APIGet.in_close_handle(.)
```lx
APIGet.in_close_handle(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_collapse_handle(control : Control)"></endpoint>
### APIGet.in_collapse_handle(.)
```lx
APIGet.in_collapse_handle(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="in_resize_handle(control : Control)"></endpoint>
### APIGet.in_resize_handle(.)
```lx
APIGet.in_resize_handle(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="collapse_size(control : Control)"></endpoint>
### APIGet.collapse_size(.)
```lx
APIGet.collapse_size(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APIGet" signature="drag(control : Control)"></endpoint>
### APIGet.drag(.)
```lx
APIGet.drag(control : Control) : Float2
```
> no docs found   


## APISet
```lx
import "luxe: ui/window.control.api" for APISet
```
> no docs found

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="new()"></endpoint>
### APISet.new(.)
```lx
APISet.new() : APISet
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="bring_to_front(control : Control, value : Bool)"></endpoint>
### APISet.bring_to_front(..)
```lx
APISet.bring_to_front(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="closable(control : Control, value : Bool)"></endpoint>
### APISet.closable(..)
```lx
APISet.closable(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapsible(control : Control, value : Bool)"></endpoint>
### APISet.collapsible(..)
```lx
APISet.collapsible(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="resizable(control : Control, value : Bool)"></endpoint>
### APISet.resizable(..)
```lx
APISet.resizable(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="draggable(control : Control, value : Bool)"></endpoint>
### APISet.draggable(..)
```lx
APISet.draggable(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="title_height(control : Control, value : Num)"></endpoint>
### APISet.title_height(..)
```lx
APISet.title_height(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="text(control : Control, value : String)"></endpoint>
### APISet.text(..)
```lx
APISet.text(control : Control, value : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="align(control : Control, value : Any)"></endpoint>
### APISet.align(..)
```lx
APISet.align(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="align_vertical(control : Control, value : Any)"></endpoint>
### APISet.align_vertical(..)
```lx
APISet.align_vertical(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="localization(control : Control, value : Any)"></endpoint>
### APISet.localization(..)
```lx
APISet.localization(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="max_visible(control : Control, value : Num)"></endpoint>
### APISet.max_visible(..)
```lx
APISet.max_visible(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="text_margin(control : Control, value : Float4)"></endpoint>
### APISet.text_margin(..)
```lx
APISet.text_margin(control : Control, value : Float4) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="override(control : Control, value : Any)"></endpoint>
### APISet.override(..)
```lx
APISet.override(control : Control, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="render_text(control : Control, value : Num)"></endpoint>
### APISet.render_text(..)
```lx
APISet.render_text(control : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="dragging(control : Control, value : Bool)"></endpoint>
### APISet.dragging(..)
```lx
APISet.dragging(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="dragging_resize(control : Control, value : Bool)"></endpoint>
### APISet.dragging_resize(..)
```lx
APISet.dragging_resize(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapsed(control : Control, value : Bool)"></endpoint>
### APISet.collapsed(..)
```lx
APISet.collapsed(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_title(control : Control, value : Bool)"></endpoint>
### APISet.in_title(..)
```lx
APISet.in_title(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_close_handle(control : Control, value : Bool)"></endpoint>
### APISet.in_close_handle(..)
```lx
APISet.in_close_handle(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_collapse_handle(control : Control, value : Bool)"></endpoint>
### APISet.in_collapse_handle(..)
```lx
APISet.in_collapse_handle(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="in_resize_handle(control : Control, value : Bool)"></endpoint>
### APISet.in_resize_handle(..)
```lx
APISet.in_resize_handle(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="collapse_size(control : Control, value : Float2)"></endpoint>
### APISet.collapse_size(..)
```lx
APISet.collapse_size(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="APISet" signature="drag(control : Control, value : Float2)"></endpoint>
### APISet.drag(..)
```lx
APISet.drag(control : Control, value : Float2) : unknown
```
> no docs found   


## Fields
```lx
import "luxe: ui/window.control.api" for Fields
```
> no docs found

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="bring_to_front"></endpoint>
### Fields.bring_to_front
```lx
Fields.bring_to_front : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="closable"></endpoint>
### Fields.closable
```lx
Fields.closable : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapsible"></endpoint>
### Fields.collapsible
```lx
Fields.collapsible : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="resizable"></endpoint>
### Fields.resizable
```lx
Fields.resizable : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="draggable"></endpoint>
### Fields.draggable
```lx
Fields.draggable : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="title_height"></endpoint>
### Fields.title_height
```lx
Fields.title_height : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="text"></endpoint>
### Fields.text
```lx
Fields.text : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="align"></endpoint>
### Fields.align
```lx
Fields.align : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="align_vertical"></endpoint>
### Fields.align_vertical
```lx
Fields.align_vertical : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization"></endpoint>
### Fields.localization
```lx
Fields.localization : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_key"></endpoint>
### Fields.localization_key
```lx
Fields.localization_key : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_space"></endpoint>
### Fields.localization_space
```lx
Fields.localization_space : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="localization_args"></endpoint>
### Fields.localization_args
```lx
Fields.localization_args : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="max_visible"></endpoint>
### Fields.max_visible
```lx
Fields.max_visible : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="text_margin"></endpoint>
### Fields.text_margin
```lx
Fields.text_margin : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="override"></endpoint>
### Fields.override
```lx
Fields.override : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="render_text"></endpoint>
### Fields.render_text
```lx
Fields.render_text : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="dragging"></endpoint>
### Fields.dragging
```lx
Fields.dragging : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="dragging_resize"></endpoint>
### Fields.dragging_resize
```lx
Fields.dragging_resize : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapsed"></endpoint>
### Fields.collapsed
```lx
Fields.collapsed : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_title"></endpoint>
### Fields.in_title
```lx
Fields.in_title : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_close_handle"></endpoint>
### Fields.in_close_handle
```lx
Fields.in_close_handle : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_collapse_handle"></endpoint>
### Fields.in_collapse_handle
```lx
Fields.in_collapse_handle : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="in_resize_handle"></endpoint>
### Fields.in_resize_handle
```lx
Fields.in_resize_handle : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="collapse_size"></endpoint>
### Fields.collapse_size
```lx
Fields.collapse_size : String
```
> no docs found   

<endpoint module="luxe: ui/window.control.api" class="Fields" signature="drag"></endpoint>
### Fields.drag
```lx
Fields.drag : String
```
> no docs found   

