---
title: "luxe: ui/slider.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/slider.control"
---
- [Data](#data)   
- [UISlider](#uislider)   

---


## Data
```wren
import "luxe: ui/slider.control" for Data
```
> no docs found

### Variables
```wren
var value : Num = 1
var min : Num = 0
var max : Num = 1
var step : Num = -1
var invert : Bool = false
```

## UISlider
```wren
import "luxe: ui/slider.control" for UISlider
```
> no docs found

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="create(ui_entity : Any)"></endpoint>
### UISlider.create(.)
```wren
UISlider.create(ui_entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_value(control : Control, value : Num)"></endpoint>
### UISlider.set_value(..)
```wren
UISlider.set_value(control : Control, value : Num) : None
```
> Set the value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_value(control : Control)"></endpoint>
### UISlider.get_value(.)
```wren
UISlider.get_value(control : Control) : Num
```
> Get the current value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_step(control : Control, value : Num)"></endpoint>
### UISlider.set_step(..)
```wren
UISlider.set_step(control : Control, value : Num) : unknown
```
> Set the step of the slider. -1 will mean no snapping   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_step(control : Control)"></endpoint>
### UISlider.get_step(.)
```wren
UISlider.get_step(control : Control) : Num
```
> Get the current step of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_min(control : Control, value : Num)"></endpoint>
### UISlider.set_min(..)
```wren
UISlider.set_min(control : Control, value : Num) : unknown
```
> Set the minimum value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_min(control : Control)"></endpoint>
### UISlider.get_min(.)
```wren
UISlider.get_min(control : Control) : Num
```
> Get the minimum value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_max(control : Control, value : Num)"></endpoint>
### UISlider.set_max(..)
```wren
UISlider.set_max(control : Control, value : Num) : unknown
```
> Set the maximum value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_max(control : Control)"></endpoint>
### UISlider.get_max(.)
```wren
UISlider.get_max(control : Control) : Num
```
> Get the maximum value of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="set_inverted(control : Control, value : Bool)"></endpoint>
### UISlider.set_inverted(..)
```wren
UISlider.set_inverted(control : Control, value : Bool) : unknown
```
> Set the inverted state of the slider   

<endpoint module="luxe: ui/slider.control" class="UISlider" signature="get_inverted(control : Control)"></endpoint>
### UISlider.get_inverted(.)
```wren
UISlider.get_inverted(control : Control) : Bool
```
> Get the inverted state of the slider   

