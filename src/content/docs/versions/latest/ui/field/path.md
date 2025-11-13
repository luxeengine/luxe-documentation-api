---
title: "luxe: ui/field/path"
description: API version 2025.11.1
---
## `luxe: ui/field/path{:lx}` module

- [UIPath](#uipath)   
- [UIPathState](#uipathstate)   
- [UIPathType](#uipathtype)   

---


### UIPath
`import "luxe: ui/field/path" for UIPath{:lx}`
> no docs found

- [create](#UIPath.create)(**ui**: `Entity{:lx}`)
- [set_validation](#UIPath.set_validation+2)(**path**: `Control{:lx}`, **fn**: `Fn{:lx}`)
- [set_defaults](#UIPath.set_defaults+3)(**path**: `Control{:lx}`, **default_path**: `String{:lx}`, **filters**: `String{:lx}`)
- [set_defaults](#UIPath.set_defaults+2)(**path**: `Control{:lx}`, **default_path**: `String{:lx}`)
- [set_type](#UIPath.set_type+2)(**path**: `Control{:lx}`, **type**: `UIPathType{:lx}`)
- [get_text_field](#UIPath.get_text_field)(**path**: `Control{:lx}`)
- [get_path](#UIPath.get_path)(**path**: `Control{:lx}`)
- [set_path](#UIPath.set_path+2)(**path**: `Control{:lx}`, **path_value**: `String{:lx}`)


---

<endpoint module="luxe: ui/field/path" class="UIPath" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">UIPath.create</h4><a class="signature-arity" href="#UIPath.create" title="Permanent link">1</a><signature id="UIPath.create">

```lx
UIPath.create(ui : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_validation(path : Control, fn : Fn)"></endpoint>
<h4 class="signature_head">UIPath.set_validation</h4><a class="signature-arity" href="#UIPath.set_validation+2" title="Permanent link">2</a><signature id="UIPath.set_validation+2">

```lx
UIPath.set_validation(path : Control, fn : Fn) : unknown
```
</signature>

> set a validation function to be called which will ensure the path is validated before use   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_defaults(path : Control, default_path : String, filters : String)"></endpoint>
<h4 class="signature_head">UIPath.set_defaults</h4><a class="signature-arity" href="#UIPath.set_defaults+3" title="Permanent link">3</a><signature id="UIPath.set_defaults+3">

```lx
UIPath.set_defaults(path : Control, default_path : String, filters : String) : unknown
```
</signature>

> set the default file dialog path and file dialog filters   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_defaults(path : Control, default_path : String)"></endpoint>
<h4 class="signature_head">UIPath.set_defaults</h4><a class="signature-arity" href="#UIPath.set_defaults+2" title="Permanent link">2</a><signature id="UIPath.set_defaults+2">

```lx
UIPath.set_defaults(path : Control, default_path : String) : unknown
```
</signature>

> set the default file dialog path   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_type(path : Control, type : UIPathType)"></endpoint>
<h4 class="signature_head">UIPath.set_type</h4><a class="signature-arity" href="#UIPath.set_type+2" title="Permanent link">2</a><signature id="UIPath.set_type+2">

```lx
UIPath.set_type(path : Control, type : UIPathType) : unknown
```
</signature>

> set the path type, to open/save/folder   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="get_text_field(path : Control)"></endpoint>
<h4 class="signature_head">UIPath.get_text_field</h4><a class="signature-arity" href="#UIPath.get_text_field" title="Permanent link">1</a><signature id="UIPath.get_text_field">

```lx
UIPath.get_text_field(path : Control) : unknown
```
</signature>

> return the text field   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="get_path(path : Control)"></endpoint>
<h4 class="signature_head">UIPath.get_path</h4><a class="signature-arity" href="#UIPath.get_path" title="Permanent link">1</a><signature id="UIPath.get_path">

```lx
UIPath.get_path(path : Control) : unknown
```
</signature>

> return the path stored in the field   

<endpoint module="luxe: ui/field/path" class="UIPath" signature="set_path(path : Control, path_value : String)"></endpoint>
<h4 class="signature_head">UIPath.set_path</h4><a class="signature-arity" href="#UIPath.set_path+2" title="Permanent link">2</a><signature id="UIPath.set_path+2">

```lx
UIPath.set_path(path : Control, path_value : String) : unknown
```
</signature>

> set the path stored in the field (will be validated)   


### UIPathState
`import "luxe: ui/field/path" for UIPathState{:lx}`
> no docs found

- [new](#UIPathState.new+2)(**ui**: `Entity{:lx}`, **control**: `Control{:lx}`)
- [get_text_field](#UIPathState.get_text_field)()
- [get_path](#UIPathState.get_path)()
- [set_path](#UIPathState.set_path)(**path**: `String{:lx}`)
- [set_validation](#UIPathState.set_validation)(**fn**: `Fn{:lx}`)
- [set_defaults](#UIPathState.set_defaults+2)(**default_path**: `String{:lx}`, **filters**: `String{:lx}`)
- [set_type](#UIPathState.set_type)(**type**: `UIPathType{:lx}`)


---

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="new(ui : Entity, control : Control)"></endpoint>
<h4 class="signature_head">UIPathState.new</h4><a class="signature-arity" href="#UIPathState.new+2" title="Permanent link">2</a><signature id="UIPathState.new+2">

```lx
UIPathState.new(ui : Entity, control : Control) : UIPathState
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="get_text_field()"></endpoint>
<h4 class="signature_head">UIPathState.get_text_field</h4><a class="signature-arity" href="#UIPathState.get_text_field" title="Permanent link">1</a><signature id="UIPathState.get_text_field">

```lx
UIPathState.get_text_field() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="get_path()"></endpoint>
<h4 class="signature_head">UIPathState.get_path</h4><a class="signature-arity" href="#UIPathState.get_path" title="Permanent link">1</a><signature id="UIPathState.get_path">

```lx
UIPathState.get_path() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="set_path(path : String)"></endpoint>
<h4 class="signature_head">UIPathState.set_path</h4><a class="signature-arity" href="#UIPathState.set_path" title="Permanent link">1</a><signature id="UIPathState.set_path">

```lx
UIPathState.set_path(path : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="set_validation(fn : Fn)"></endpoint>
<h4 class="signature_head">UIPathState.set_validation</h4><a class="signature-arity" href="#UIPathState.set_validation" title="Permanent link">1</a><signature id="UIPathState.set_validation">

```lx
UIPathState.set_validation(fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="set_defaults(default_path : String, filters : String)"></endpoint>
<h4 class="signature_head">UIPathState.set_defaults</h4><a class="signature-arity" href="#UIPathState.set_defaults+2" title="Permanent link">2</a><signature id="UIPathState.set_defaults+2">

```lx
UIPathState.set_defaults(default_path : String, filters : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathState" signature="set_type(type : UIPathType)"></endpoint>
<h4 class="signature_head">UIPathState.set_type</h4><a class="signature-arity" href="#UIPathState.set_type" title="Permanent link">1</a><signature id="UIPathState.set_type">

```lx
UIPathState.set_type(type : UIPathType) : unknown
```
</signature>

> no docs found   


### UIPathType
`import "luxe: ui/field/path" for UIPathType{:lx}`
> no docs found

- [open](#UIPathType.open)
- [save](#UIPathType.save)
- [folder](#UIPathType.folder)


---

<endpoint module="luxe: ui/field/path" class="UIPathType" signature="open"></endpoint>
<h4 class="signature_head">UIPathType.open</h4><a class="signature-arity" href="#UIPathType.open" title="Permanent link">1</a><signature id="UIPathType.open">

```lx
UIPathType.open : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathType" signature="save"></endpoint>
<h4 class="signature_head">UIPathType.save</h4><a class="signature-arity" href="#UIPathType.save" title="Permanent link">1</a><signature id="UIPathType.save">

```lx
UIPathType.save : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/path" class="UIPathType" signature="folder"></endpoint>
<h4 class="signature_head">UIPathType.folder</h4><a class="signature-arity" href="#UIPathType.folder" title="Permanent link">1</a><signature id="UIPathType.folder">

```lx
UIPathType.folder : unknown
```
</signature>

> no docs found   

