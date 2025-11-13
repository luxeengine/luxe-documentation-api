---
title: "luxe: ui/slider.control"
description: API version 2025.11.1
---
## `luxe: ui/slider.control{:lx}` module

- [Data](#data)   
- [UISlider](#uislider)   

---


### Data
`import "luxe: ui/slider.control" for Data{:lx}`
> no docs found

- `var value : Num = 1{:lx}`
- `var min : Num = 0{:lx}`
- `var max : Num = 1{:lx}`
- `var step : Num = -1{:lx}`
- `var invert : Bool = false{:lx}`


---


### UISlider
`import "luxe: ui/slider.control" for UISlider{:lx}`
> no docs found

- [create](#UISlider.create)(**ui_entity**: `Any{:lx}`)
- [set_value](#UISlider.set_value+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [get_value](#UISlider.get_value)(**control**: `Control{:lx}`)
- [set_step](#UISlider.set_step+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [get_step](#UISlider.get_step)(**control**: `Control{:lx}`)
- [set_min](#UISlider.set_min+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [get_min](#UISlider.get_min)(**control**: `Control{:lx}`)
- [set_max](#UISlider.set_max+2)(**control**: `Control{:lx}`, **value**: `Num{:lx}`)
- [get_max](#UISlider.get_max)(**control**: `Control{:lx}`)
- [set_inverted](#UISlider.set_inverted+2)(**control**: `Control{:lx}`, **value**: `Bool{:lx}`)
- [get_inverted](#UISlider.get_inverted)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="create(ui_entity : Any)"></endpoint>
<h4 class="signature_head">UISlider.create</h4><a class="signature-arity" href="#UISlider.create" title="Permanent link">1</a><signature id="UISlider.create">

```lx
UISlider.create(ui_entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_value(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">UISlider.set_value</h4><a class="signature-arity" href="#UISlider.set_value+2" title="Permanent link">2</a><signature id="UISlider.set_value+2">

```lx
UISlider.set_value(control : Control, value : Num) : None
```
</signature>

> Set the value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_value(control : Control)"></endpoint>
<h4 class="signature_head">UISlider.get_value</h4><a class="signature-arity" href="#UISlider.get_value" title="Permanent link">1</a><signature id="UISlider.get_value">

```lx
UISlider.get_value(control : Control) : Num
```
</signature>

> Get the current value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_step(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">UISlider.set_step</h4><a class="signature-arity" href="#UISlider.set_step+2" title="Permanent link">2</a><signature id="UISlider.set_step+2">

```lx
UISlider.set_step(control : Control, value : Num) : unknown
```
</signature>

> Set the step of the slider. -1 will mean no snapping   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_step(control : Control)"></endpoint>
<h4 class="signature_head">UISlider.get_step</h4><a class="signature-arity" href="#UISlider.get_step" title="Permanent link">1</a><signature id="UISlider.get_step">

```lx
UISlider.get_step(control : Control) : Num
```
</signature>

> Get the current step of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_min(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">UISlider.set_min</h4><a class="signature-arity" href="#UISlider.set_min+2" title="Permanent link">2</a><signature id="UISlider.set_min+2">

```lx
UISlider.set_min(control : Control, value : Num) : unknown
```
</signature>

> Set the minimum value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_min(control : Control)"></endpoint>
<h4 class="signature_head">UISlider.get_min</h4><a class="signature-arity" href="#UISlider.get_min" title="Permanent link">1</a><signature id="UISlider.get_min">

```lx
UISlider.get_min(control : Control) : Num
```
</signature>

> Get the minimum value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_max(control : Control, value : Num)"></endpoint>
<h4 class="signature_head">UISlider.set_max</h4><a class="signature-arity" href="#UISlider.set_max+2" title="Permanent link">2</a><signature id="UISlider.set_max+2">

```lx
UISlider.set_max(control : Control, value : Num) : unknown
```
</signature>

> Set the maximum value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_max(control : Control)"></endpoint>
<h4 class="signature_head">UISlider.get_max</h4><a class="signature-arity" href="#UISlider.get_max" title="Permanent link">1</a><signature id="UISlider.get_max">

```lx
UISlider.get_max(control : Control) : Num
```
</signature>

> Get the maximum value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_inverted(control : Control, value : Bool)"></endpoint>
<h4 class="signature_head">UISlider.set_inverted</h4><a class="signature-arity" href="#UISlider.set_inverted+2" title="Permanent link">2</a><signature id="UISlider.set_inverted+2">

```lx
UISlider.set_inverted(control : Control, value : Bool) : unknown
```
</signature>

> Set the inverted state of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_inverted(control : Control)"></endpoint>
<h4 class="signature_head">UISlider.get_inverted</h4><a class="signature-arity" href="#UISlider.get_inverted" title="Permanent link">1</a><signature id="UISlider.get_inverted">

```lx
UISlider.get_inverted(control : Control) : Bool
```
</signature>

> Get the inverted state of the slider   

