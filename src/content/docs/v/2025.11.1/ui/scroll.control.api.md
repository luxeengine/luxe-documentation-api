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
```wren
import "luxe: ui/scroll.control.api" for API
```
> no docs found

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="id"></endpoint>
### API.id
```wren
API.id : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="create(ui : Entity)"></endpoint>
### API.create(.)
```wren
API.create(ui : Entity) : Control
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="has(control : Control)"></endpoint>
### API.has(.)
```wren
API.has(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="get(control : Control)"></endpoint>
### API.get(.)
```wren
API.get(control : Control) : Data
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="get"></endpoint>
### API.get
```wren
API.get : APIGet
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="API" signature="set"></endpoint>
### API.set
```wren
API.set : APISet
```
> no docs found   


## APIGet
```wren
import "luxe: ui/scroll.control.api" for APIGet
```
> no docs found

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="new()"></endpoint>
### APIGet.new(.)
```wren
APIGet.new() : APIGet
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="units(control : Control)"></endpoint>
### APIGet.units(.)
```wren
APIGet.units(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="scroll(control : Control)"></endpoint>
### APIGet.scroll(.)
```wren
APIGet.scroll(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="drag(control : Control)"></endpoint>
### APIGet.drag(.)
```wren
APIGet.drag(control : Control) : Float2
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="containerb(control : Control)"></endpoint>
### APIGet.containerb(.)
```wren
APIGet.containerb(control : Control) : Float4
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="handle_v(control : Control)"></endpoint>
### APIGet.handle_v(.)
```wren
APIGet.handle_v(control : Control) : Float4
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="handle_h(control : Control)"></endpoint>
### APIGet.handle_h(.)
```wren
APIGet.handle_h(control : Control) : Float4
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="dragging_h(control : Control)"></endpoint>
### APIGet.dragging_h(.)
```wren
APIGet.dragging_h(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="dragging_v(control : Control)"></endpoint>
### APIGet.dragging_v(.)
```wren
APIGet.dragging_v(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="in_handle_v(control : Control)"></endpoint>
### APIGet.in_handle_v(.)
```wren
APIGet.in_handle_v(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APIGet" signature="in_handle_h(control : Control)"></endpoint>
### APIGet.in_handle_h(.)
```wren
APIGet.in_handle_h(control : Control) : Bool
```
> no docs found   


## APISet
```wren
import "luxe: ui/scroll.control.api" for APISet
```
> no docs found

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="new()"></endpoint>
### APISet.new(.)
```wren
APISet.new() : APISet
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="units(control : Control, value : Float2)"></endpoint>
### APISet.units(..)
```wren
APISet.units(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="scroll(control : Control, value : Float2)"></endpoint>
### APISet.scroll(..)
```wren
APISet.scroll(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="drag(control : Control, value : Float2)"></endpoint>
### APISet.drag(..)
```wren
APISet.drag(control : Control, value : Float2) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="containerb(control : Control, value : Float4)"></endpoint>
### APISet.containerb(..)
```wren
APISet.containerb(control : Control, value : Float4) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="handle_v(control : Control, value : Float4)"></endpoint>
### APISet.handle_v(..)
```wren
APISet.handle_v(control : Control, value : Float4) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="handle_h(control : Control, value : Float4)"></endpoint>
### APISet.handle_h(..)
```wren
APISet.handle_h(control : Control, value : Float4) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="dragging_h(control : Control, value : Bool)"></endpoint>
### APISet.dragging_h(..)
```wren
APISet.dragging_h(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="dragging_v(control : Control, value : Bool)"></endpoint>
### APISet.dragging_v(..)
```wren
APISet.dragging_v(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="in_handle_v(control : Control, value : Bool)"></endpoint>
### APISet.in_handle_v(..)
```wren
APISet.in_handle_v(control : Control, value : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="APISet" signature="in_handle_h(control : Control, value : Bool)"></endpoint>
### APISet.in_handle_h(..)
```wren
APISet.in_handle_h(control : Control, value : Bool) : unknown
```
> no docs found   


## Fields
```wren
import "luxe: ui/scroll.control.api" for Fields
```
> no docs found

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="units"></endpoint>
### Fields.units
```wren
Fields.units : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="scroll"></endpoint>
### Fields.scroll
```wren
Fields.scroll : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="drag"></endpoint>
### Fields.drag
```wren
Fields.drag : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="containerb"></endpoint>
### Fields.containerb
```wren
Fields.containerb : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="handle_v"></endpoint>
### Fields.handle_v
```wren
Fields.handle_v : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="handle_h"></endpoint>
### Fields.handle_h
```wren
Fields.handle_h : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="dragging_h"></endpoint>
### Fields.dragging_h
```wren
Fields.dragging_h : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="dragging_v"></endpoint>
### Fields.dragging_v
```wren
Fields.dragging_v : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="in_handle_v"></endpoint>
### Fields.in_handle_v
```wren
Fields.in_handle_v : String
```
> no docs found   

<endpoint module="luxe: ui/scroll.control.api" class="Fields" signature="in_handle_h"></endpoint>
### Fields.in_handle_h
```wren
Fields.in_handle_h : String
```
> no docs found   

