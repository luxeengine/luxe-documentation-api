---
title: "luxe: ui/field/path"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/field/path"
---
- [UIPath](#uipath)   
- [UIPathState](#uipathstate)   
- [UIPathType](#uipathtype)   

---


## UIPath
```wren
import "luxe: ui/field/path" for UIPath
```
> no docs found

<endpoint module="luxe: ui/field/path" class="UIPath" signature="create(ui : Entity)"></endpoint>
### UIPath.create(.)
```wren
UIPath.create(ui : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_validation(path : Control, fn : Fn)"></endpoint>
### UIPath.set_validation(..)
```wren
UIPath.set_validation(path : Control, fn : Fn) : unknown
```
> set a validation function to be called which will ensure the path is validated before use   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_defaults(path : Control, default_path : String, filters : String)"></endpoint>
### UIPath.set_defaults(...)
```wren
UIPath.set_defaults(path : Control, default_path : String, filters : String) : unknown
```
> set the default file dialog path and file dialog filters   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_defaults(path : Control, default_path : String)"></endpoint>
### UIPath.set_defaults(..)
```wren
UIPath.set_defaults(path : Control, default_path : String) : unknown
```
> set the default file dialog path   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_type(path : Control, type : UIPathType)"></endpoint>
### UIPath.set_type(..)
```wren
UIPath.set_type(path : Control, type : UIPathType) : unknown
```
> set the path type, to open/save/folder   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="get_text_field(path : Control)"></endpoint>
### UIPath.get_text_field(.)
```wren
UIPath.get_text_field(path : Control) : unknown
```
> return the text field   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="get_path(path : Control)"></endpoint>
### UIPath.get_path(.)
```wren
UIPath.get_path(path : Control) : unknown
```
> return the path stored in the field   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_path(path : Control, path_value : String)"></endpoint>
### UIPath.set_path(..)
```wren
UIPath.set_path(path : Control, path_value : String) : unknown
```
> set the path stored in the field (will be validated)   


## UIPathState
```wren
import "luxe: ui/field/path" for UIPathState
```
> no docs found

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="new(ui : Entity, control : Control)"></endpoint>
### UIPathState.new(..)
```wren
UIPathState.new(ui : Entity, control : Control) : UIPathState
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="get_text_field()"></endpoint>
### UIPathState.get_text_field(.)
```wren
UIPathState.get_text_field() : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="get_path()"></endpoint>
### UIPathState.get_path(.)
```wren
UIPathState.get_path() : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="set_path(path : String)"></endpoint>
### UIPathState.set_path(.)
```wren
UIPathState.set_path(path : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="set_validation(fn : Fn)"></endpoint>
### UIPathState.set_validation(.)
```wren
UIPathState.set_validation(fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="set_defaults(default_path : String, filters : String)"></endpoint>
### UIPathState.set_defaults(..)
```wren
UIPathState.set_defaults(default_path : String, filters : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="set_type(type : UIPathType)"></endpoint>
### UIPathState.set_type(.)
```wren
UIPathState.set_type(type : UIPathType) : unknown
```
> no docs found   


## UIPathType
```wren
import "luxe: ui/field/path" for UIPathType
```
> no docs found

<endpoint module="luxe: ui/field/path" class="UIPathType" signature="open"></endpoint>
### UIPathType.open
```wren
UIPathType.open : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathType" signature="save"></endpoint>
### UIPathType.save
```wren
UIPathType.save : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathType" signature="folder"></endpoint>
### UIPathType.folder
```wren
UIPathType.folder : unknown
```
> no docs found   

