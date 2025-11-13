---
title: "luxe: cable"
description: API version 2025.11.1
slug: "v/2025.11.1/cable"
---
- [Cable](#cable)   

---


## Cable
```wren
import "luxe: cable" for Cable
```
> no docs found

### Variables
```wren
var fixed_size : Bool = false
var flex_amount : Num = 0.1
var damping : Num = 0.96
var iterations : Num = 4
var segments : Num = 20
var segment_length : Num = 12
var gravity : List = [0, -200, 0]
var start : Float3 = [0, 0, 0]
var end : Float3 = [0, 0, 0]
var nodes : List = []
```
<endpoint module="luxe: cable" class="Cable" signature="new()"></endpoint>
### Cable.new(.)
```wren
Cable.new() : Cable
```
> no docs found   

<endpoint module="luxe: cable" class="Cable" signature="pre_warm(warm_iterations : Num)"></endpoint>
### Cable.pre_warm(.)
```wren
Cable.pre_warm(warm_iterations : Num) : unknown
```
> no docs found   

<endpoint module="luxe: cable" class="Cable" signature="simulate()"></endpoint>
### Cable.simulate(.)
```wren
Cable.simulate() : unknown
```
> no docs found   

<endpoint module="luxe: cable" class="Cable" signature="apply_constraints()"></endpoint>
### Cable.apply_constraints(.)
```wren
Cable.apply_constraints() : unknown
```
> no docs found   

<endpoint module="luxe: cable" class="Cable" signature="tick()"></endpoint>
### Cable.tick(.)
```wren
Cable.tick() : unknown
```
> no docs found   

