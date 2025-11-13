---
title: "luxe: ui/scroll.control.api"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/scroll.control.api"
---
- [API](#api)   
- [APIGet](#apiget)   
- [APISet](#apiset)   
- [Fields](#fields)   

---


## API
```lx
import "luxe: ui/scroll.control.api" for API
```
> no docs found

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="id"></endpoint>
### API.id
```lx
API.id : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="create(ui : Entity)"></endpoint>
### API.create(.)
```lx
API.create(ui : Entity) : Control
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="has(control : Control)"></endpoint>
### API.has(.)
```lx
API.has(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="get(control : Control)"></endpoint>
### API.get(.)
```lx
API.get(control : Control) : Data
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="get"></endpoint>
### API.get
```lx
API.get : APIGet
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="set"></endpoint>
### API.set
```lx
API.set : APISet
```
> no docs found   


## APIGet
```lx
import "luxe: ui/scroll.control.api" for APIGet
```
> no docs found

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="new()"></endpoint>
### APIGet.new(.)
```lx
APIGet.new() : APIGet
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="units(control : Control)"></endpoint>
### APIGet.units(.)
```lx
APIGet.units(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="scroll(control : Control)"></endpoint>
### APIGet.scroll(.)
```lx
APIGet.scroll(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="drag(control : Control)"></endpoint>
### APIGet.drag(.)
```lx
APIGet.drag(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="containerb(control : Control)"></endpoint>
### APIGet.containerb(.)
```lx
APIGet.containerb(control : Control) : Float4
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="handle_v(control : Control)"></endpoint>
### APIGet.handle_v(.)
```lx
APIGet.handle_v(control : Control) : Float4
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="handle_h(control : Control)"></endpoint>
### APIGet.handle_h(.)
```lx
APIGet.handle_h(control : Control) : Float4
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="dragging_h(control : Control)"></endpoint>
### APIGet.dragging_h(.)
```lx
APIGet.dragging_h(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="dragging_v(control : Control)"></endpoint>
### APIGet.dragging_v(.)
```lx
APIGet.dragging_v(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="in_handle_v(control : Control)"></endpoint>
### APIGet.in_handle_v(.)
```lx
APIGet.in_handle_v(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="in_handle_h(control : Control)"></endpoint>
### APIGet.in_handle_h(.)
```lx
APIGet.in_handle_h(control : Control) : Bool
```
> no docs found   


## APISet
```lx
import "luxe: ui/scroll.control.api" for APISet
```
> no docs found

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="new()"></endpoint>
### APISet.new(.)
```lx
APISet.new() : APISet
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="units(control : Control, value : Float2)"></endpoint>
### APISet.units(..)
```lx
APISet.units(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="scroll(control : Control, value : Float2)"></endpoint>
### APISet.scroll(..)
```lx
APISet.scroll(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="drag(control : Control, value : Float2)"></endpoint>
### APISet.drag(..)
```lx
APISet.drag(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="containerb(control : Control, value : Float4)"></endpoint>
### APISet.containerb(..)
```lx
APISet.containerb(control : Control, value : Float4) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="handle_v(control : Control, value : Float4)"></endpoint>
### APISet.handle_v(..)
```lx
APISet.handle_v(control : Control, value : Float4) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="handle_h(control : Control, value : Float4)"></endpoint>
### APISet.handle_h(..)
```lx
APISet.handle_h(control : Control, value : Float4) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="dragging_h(control : Control, value : Bool)"></endpoint>
### APISet.dragging_h(..)
```lx
APISet.dragging_h(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="dragging_v(control : Control, value : Bool)"></endpoint>
### APISet.dragging_v(..)
```lx
APISet.dragging_v(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="in_handle_v(control : Control, value : Bool)"></endpoint>
### APISet.in_handle_v(..)
```lx
APISet.in_handle_v(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="in_handle_h(control : Control, value : Bool)"></endpoint>
### APISet.in_handle_h(..)
```lx
APISet.in_handle_h(control : Control, value : Bool) : unknown
```
> no docs found   


## Fields
```lx
import "luxe: ui/scroll.control.api" for Fields
```
> no docs found

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="units"></endpoint>
### Fields.units
```lx
Fields.units : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="scroll"></endpoint>
### Fields.scroll
```lx
Fields.scroll : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="drag"></endpoint>
### Fields.drag
```lx
Fields.drag : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="containerb"></endpoint>
### Fields.containerb
```lx
Fields.containerb : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="handle_v"></endpoint>
### Fields.handle_v
```lx
Fields.handle_v : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="handle_h"></endpoint>
### Fields.handle_h
```lx
Fields.handle_h : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="dragging_h"></endpoint>
### Fields.dragging_h
```lx
Fields.dragging_h : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="dragging_v"></endpoint>
### Fields.dragging_v
```lx
Fields.dragging_v : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="in_handle_v"></endpoint>
### Fields.in_handle_v
```lx
Fields.in_handle_v : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="in_handle_h"></endpoint>
### Fields.in_handle_h
```lx
Fields.in_handle_h : String
```
> no docs found   

