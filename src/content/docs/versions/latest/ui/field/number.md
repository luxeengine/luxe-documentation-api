---
title: "luxe: ui/field/number"
description: API version 2025.11.1
---
## `luxe: ui/field/number{:lx}` module

- [UINumber](#uinumber)   
- [UINumberState](#uinumberstate)   

---


### UINumber
`import "luxe: ui/field/number" for UINumber{:lx}`
> no docs found

- [create](#UINumber.create)(**ui**: `Any{:lx}`)
- [get_text_field](#UINumber.get_text_field)(**num**: `Control{:lx}`)
- [get_value](#UINumber.get_value)(**num**: `Control{:lx}`)
- [get_valid](#UINumber.get_valid)(**num**: `Control{:lx}`)
- [set_value](#UINumber.set_value+2)(**num**: `Control{:lx}`, **value**: `Num{:lx}`)
- [set_precision](#UINumber.set_precision+2)(**num**: `Control{:lx}`, **value**: `Num{:lx}`)
- [get_precision](#UINumber.get_precision+2)(**num**: `Control{:lx}`, **value**: `Num{:lx}`)
- [set_validation](#UINumber.set_validation+2)(**num**: `Control{:lx}`, **fn**: `Fn{:lx}`)


---

<endpoint module="luxe: ui/field/number" class="UINumber" signature="create(ui : Any)"></endpoint>
<h4 class="signature_head">UINumber.create</h4><a class="signature-arity" href="#UINumber.create" title="Permanent link">1</a><signature id="UINumber.create">

```lx
UINumber.create(ui : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="get_text_field(num : Control)"></endpoint>
<h4 class="signature_head">UINumber.get_text_field</h4><a class="signature-arity" href="#UINumber.get_text_field" title="Permanent link">1</a><signature id="UINumber.get_text_field">

```lx
UINumber.get_text_field(num : Control) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="get_value(num : Control)"></endpoint>
<h4 class="signature_head">UINumber.get_value</h4><a class="signature-arity" href="#UINumber.get_value" title="Permanent link">1</a><signature id="UINumber.get_value">

```lx
UINumber.get_value(num : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="get_valid(num : Control)"></endpoint>
<h4 class="signature_head">UINumber.get_valid</h4><a class="signature-arity" href="#UINumber.get_valid" title="Permanent link">1</a><signature id="UINumber.get_valid">

```lx
UINumber.get_valid(num : Control) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="set_value(num : Control, value : Num)"></endpoint>
<h4 class="signature_head">UINumber.set_value</h4><a class="signature-arity" href="#UINumber.set_value+2" title="Permanent link">2</a><signature id="UINumber.set_value+2">

```lx
UINumber.set_value(num : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="set_precision(num : Control, value : Num)"></endpoint>
<h4 class="signature_head">UINumber.set_precision</h4><a class="signature-arity" href="#UINumber.set_precision+2" title="Permanent link">2</a><signature id="UINumber.set_precision+2">

```lx
UINumber.set_precision(num : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="get_precision(num : Control, value : Num)"></endpoint>
<h4 class="signature_head">UINumber.get_precision</h4><a class="signature-arity" href="#UINumber.get_precision+2" title="Permanent link">2</a><signature id="UINumber.get_precision+2">

```lx
UINumber.get_precision(num : Control, value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumber" signature="set_validation(num : Control, fn : Fn)"></endpoint>
<h4 class="signature_head">UINumber.set_validation</h4><a class="signature-arity" href="#UINumber.set_validation+2" title="Permanent link">2</a><signature id="UINumber.set_validation+2">

```lx
UINumber.set_validation(num : Control, fn : Fn) : unknown
```
</signature>

> no docs found   


### UINumberState
`import "luxe: ui/field/number" for UINumberState{:lx}`
> no docs found

- [validation](#UINumberState.validation)
- [validation](#UINumberState.validation=)=(v : Any)
- [text_control](#UINumberState.text_control)
- [text_value](#UINumberState.text_value)
- [precision](#UINumberState.precision)
- [precision](#UINumberState.precision=)=(v : Any)
- [value](#UINumberState.value)
- [valid](#UINumberState.valid)
- [new](#UINumberState.new+2)(**ui**: `Any{:lx}`, **ctrl**: `Any{:lx}`)
- [set_value](#UINumberState.set_value)(**value**: `Any{:lx}`)
- [resize](#UINumberState.resize+4)(**x**: `Any{:lx}`, **y**: `Any{:lx}`, **w**: `Any{:lx}`, **h**: `Any{:lx}`)
- [refresh_radial](#UINumberState.refresh_radial)()
- [expand_radial](#UINumberState.expand_radial)(**state**: `Any{:lx}`)
- [fix](#UINumberState.fix)(**value**: `Num{:lx}`)
- [on_radial_event](#UINumberState.on_radial_event)(**event**: `Any{:lx}`)
- [cancel_radial_capture](#UINumberState.cancel_radial_capture)()
- [render_radial](#UINumberState.render_radial+6)(**control**: `Any{:lx}`, **state**: `Any{:lx}`, **x**: `Any{:lx}`, **y**: `Any{:lx}`, **w**: `Any{:lx}`, **h**: `Any{:lx}`)
- [make_num](#UINumberState.make_num)(**string**: `String{:lx}`)
- [validate](#UINumberState.validate)(**num**: `Num{:lx}`)
- [try_expression](#UINumberState.try_expression)(**string**: `String{:lx}`)
- [on_text_event](#UINumberState.on_text_event)(**event**: `Any{:lx}`)


---

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="validation"></endpoint>
<h4 class="signature_head">UINumberState.validation</h4><a class="signature-arity" href="#UINumberState.validation" title="Permanent link">1</a><signature id="UINumberState.validation">

```lx
UINumberState.validation : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="validation=(v : Any)"></endpoint>
<h4 class="signature_head">UINumberState.validation</h4><a class="signature-arity" href="#UINumberState.validation=" title="Permanent link">1</a><signature id="UINumberState.validation=">

```lx
UINumberState.validation=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="text_control"></endpoint>
<h4 class="signature_head">UINumberState.text_control</h4><a class="signature-arity" href="#UINumberState.text_control" title="Permanent link">1</a><signature id="UINumberState.text_control">

```lx
UINumberState.text_control : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="text_value"></endpoint>
<h4 class="signature_head">UINumberState.text_value</h4><a class="signature-arity" href="#UINumberState.text_value" title="Permanent link">1</a><signature id="UINumberState.text_value">

```lx
UINumberState.text_value : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="precision"></endpoint>
<h4 class="signature_head">UINumberState.precision</h4><a class="signature-arity" href="#UINumberState.precision" title="Permanent link">1</a><signature id="UINumberState.precision">

```lx
UINumberState.precision : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="precision=(v : Any)"></endpoint>
<h4 class="signature_head">UINumberState.precision</h4><a class="signature-arity" href="#UINumberState.precision=" title="Permanent link">1</a><signature id="UINumberState.precision=">

```lx
UINumberState.precision=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="value"></endpoint>
<h4 class="signature_head">UINumberState.value</h4><a class="signature-arity" href="#UINumberState.value" title="Permanent link">1</a><signature id="UINumberState.value">

```lx
UINumberState.value : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="valid"></endpoint>
<h4 class="signature_head">UINumberState.valid</h4><a class="signature-arity" href="#UINumberState.valid" title="Permanent link">1</a><signature id="UINumberState.valid">

```lx
UINumberState.valid : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="new(ui : Any, ctrl : Any)"></endpoint>
<h4 class="signature_head">UINumberState.new</h4><a class="signature-arity" href="#UINumberState.new+2" title="Permanent link">2</a><signature id="UINumberState.new+2">

```lx
UINumberState.new(ui : Any, ctrl : Any) : UINumberState
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="set_value(value : Any)"></endpoint>
<h4 class="signature_head">UINumberState.set_value</h4><a class="signature-arity" href="#UINumberState.set_value" title="Permanent link">1</a><signature id="UINumberState.set_value">

```lx
UINumberState.set_value(value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="resize(x : Any, y : Any, w : Any, h : Any)"></endpoint>
<h4 class="signature_head">UINumberState.resize</h4><a class="signature-arity" href="#UINumberState.resize+4" title="Permanent link">4</a><signature id="UINumberState.resize+4">

```lx
UINumberState.resize(x : Any, y : Any, w : Any, h : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="refresh_radial()"></endpoint>
<h4 class="signature_head">UINumberState.refresh_radial</h4><a class="signature-arity" href="#UINumberState.refresh_radial" title="Permanent link">1</a><signature id="UINumberState.refresh_radial">

```lx
UINumberState.refresh_radial() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="expand_radial(state : Any)"></endpoint>
<h4 class="signature_head">UINumberState.expand_radial</h4><a class="signature-arity" href="#UINumberState.expand_radial" title="Permanent link">1</a><signature id="UINumberState.expand_radial">

```lx
UINumberState.expand_radial(state : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="fix(value : Num)"></endpoint>
<h4 class="signature_head">UINumberState.fix</h4><a class="signature-arity" href="#UINumberState.fix" title="Permanent link">1</a><signature id="UINumberState.fix">

```lx
UINumberState.fix(value : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="on_radial_event(event : Any)"></endpoint>
<h4 class="signature_head">UINumberState.on_radial_event</h4><a class="signature-arity" href="#UINumberState.on_radial_event" title="Permanent link">1</a><signature id="UINumberState.on_radial_event">

```lx
UINumberState.on_radial_event(event : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="cancel_radial_capture()"></endpoint>
<h4 class="signature_head">UINumberState.cancel_radial_capture</h4><a class="signature-arity" href="#UINumberState.cancel_radial_capture" title="Permanent link">1</a><signature id="UINumberState.cancel_radial_capture">

```lx
UINumberState.cancel_radial_capture() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="render_radial(control : Any, state : Any, x : Any, y : Any, w : Any, h : Any)"></endpoint>
<h4 class="signature_head">UINumberState.render_radial</h4><a class="signature-arity" href="#UINumberState.render_radial+6" title="Permanent link">6</a><signature id="UINumberState.render_radial+6">

```lx
UINumberState.render_radial(control : Any, state : Any, x : Any, y : Any, w : Any, h : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="make_num(string : String)"></endpoint>
<h4 class="signature_head">UINumberState.make_num</h4><a class="signature-arity" href="#UINumberState.make_num" title="Permanent link">1</a><signature id="UINumberState.make_num">

```lx
UINumberState.make_num(string : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="validate(num : Num)"></endpoint>
<h4 class="signature_head">UINumberState.validate</h4><a class="signature-arity" href="#UINumberState.validate" title="Permanent link">1</a><signature id="UINumberState.validate">

```lx
UINumberState.validate(num : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="try_expression(string : String)"></endpoint>
<h4 class="signature_head">UINumberState.try_expression</h4><a class="signature-arity" href="#UINumberState.try_expression" title="Permanent link">1</a><signature id="UINumberState.try_expression">

```lx
UINumberState.try_expression(string : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/field/number" class="UINumberState" signature="on_text_event(event : Any)"></endpoint>
<h4 class="signature_head">UINumberState.on_text_event</h4><a class="signature-arity" href="#UINumberState.on_text_event" title="Permanent link">1</a><signature id="UINumberState.on_text_event">

```lx
UINumberState.on_text_event(event : Any) : unknown
```
</signature>

> no docs found   

