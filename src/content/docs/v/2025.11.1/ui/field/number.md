---
title: "luxe: ui/field/number"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/field/number"
---
- [UINumber](#uinumber)   
- [UINumberState](#uinumberstate)   

---


## UINumber
```wren
import "luxe: ui/field/number" for UINumber
```
> no docs found

<endpoint module="luxe: ui/field/number" class="UINumber" signature="create(ui : Any)"></endpoint>
### UINumber.create(.)
```wren
UINumber.create(ui : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="get_text_field(num : Control)"></endpoint>
### UINumber.get_text_field(.)
```wren
UINumber.get_text_field(num : Control) : Control
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="get_value(num : Control)"></endpoint>
### UINumber.get_value(.)
```wren
UINumber.get_value(num : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="get_valid(num : Control)"></endpoint>
### UINumber.get_valid(.)
```wren
UINumber.get_valid(num : Control) : Num
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="set_value(num : Control, value : Num)"></endpoint>
### UINumber.set_value(..)
```wren
UINumber.set_value(num : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="set_precision(num : Control, value : Num)"></endpoint>
### UINumber.set_precision(..)
```wren
UINumber.set_precision(num : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="get_precision(num : Control, value : Num)"></endpoint>
### UINumber.get_precision(..)
```wren
UINumber.get_precision(num : Control, value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="set_validation(num : Control, fn : Fn)"></endpoint>
### UINumber.set_validation(..)
```wren
UINumber.set_validation(num : Control, fn : Fn) : unknown
```
> no docs found   


## UINumberState
```wren
import "luxe: ui/field/number" for UINumberState
```
> no docs found

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="validation"></endpoint>
### UINumberState.validation
```wren
UINumberState.validation : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="validation=(v : Any)"></endpoint>
### UINumberState.validation
```wren
UINumberState.validation=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="text_control"></endpoint>
### UINumberState.text_control
```wren
UINumberState.text_control : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="text_value"></endpoint>
### UINumberState.text_value
```wren
UINumberState.text_value : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="precision"></endpoint>
### UINumberState.precision
```wren
UINumberState.precision : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="precision=(v : Any)"></endpoint>
### UINumberState.precision
```wren
UINumberState.precision=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="value"></endpoint>
### UINumberState.value
```wren
UINumberState.value : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="valid"></endpoint>
### UINumberState.valid
```wren
UINumberState.valid : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="new(ui : Any, ctrl : Any)"></endpoint>
### UINumberState.new(..)
```wren
UINumberState.new(ui : Any, ctrl : Any) : UINumberState
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="set_value(value : Any)"></endpoint>
### UINumberState.set_value(.)
```wren
UINumberState.set_value(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="resize(x : Any, y : Any, w : Any, h : Any)"></endpoint>
### UINumberState.resize(....)
```wren
UINumberState.resize(x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="refresh_radial()"></endpoint>
### UINumberState.refresh_radial(.)
```wren
UINumberState.refresh_radial() : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="expand_radial(state : Any)"></endpoint>
### UINumberState.expand_radial(.)
```wren
UINumberState.expand_radial(state : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="fix(value : Num)"></endpoint>
### UINumberState.fix(.)
```wren
UINumberState.fix(value : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="on_radial_event(event : Any)"></endpoint>
### UINumberState.on_radial_event(.)
```wren
UINumberState.on_radial_event(event : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="cancel_radial_capture()"></endpoint>
### UINumberState.cancel_radial_capture(.)
```wren
UINumberState.cancel_radial_capture() : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="render_radial(control : Any, state : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
### UINumberState.render_radial(......)
```wren
UINumberState.render_radial(control : Any, state : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="make_num(string : String)"></endpoint>
### UINumberState.make_num(.)
```wren
UINumberState.make_num(string : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="validate(num : Num)"></endpoint>
### UINumberState.validate(.)
```wren
UINumberState.validate(num : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="try_expression(string : String)"></endpoint>
### UINumberState.try_expression(.)
```wren
UINumberState.try_expression(string : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="on_text_event(event : Any)"></endpoint>
### UINumberState.on_text_event(.)
```wren
UINumberState.on_text_event(event : Any) : unknown
```
> no docs found   

