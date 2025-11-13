---
title: "luxe: cable"
description: API version 2025.11.1
---
## `luxe: cable{:lx}` module

- [Cable](#cable)   

---


### Cable
`import "luxe: cable" for Cable{:lx}`
> no docs found

- `var fixed_size : Bool = false{:lx}`
- `var flex_amount : Num = 0.1{:lx}`
- `var damping : Num = 0.96{:lx}`
- `var iterations : Num = 4{:lx}`
- `var segments : Num = 20{:lx}`
- `var segment_length : Num = 12{:lx}`
- `var gravity : List = [0, -200, 0]{:lx}`
- `var start : Float3 = [0, 0, 0]{:lx}`
- `var end : Float3 = [0, 0, 0]{:lx}`
- `var nodes : List = []{:lx}`
- [new](#Cable.new)()
- [pre_warm](#Cable.pre_warm)(**warm_iterations**: `Num{:lx}`)
- [simulate](#Cable.simulate)()
- [apply_constraints](#Cable.apply_constraints)()
- [tick](#Cable.tick)()


---

<endpoint module="luxe: cable" class="Cable" signature="new()"></endpoint>
<h4 class="signature_head">Cable.new</h4><a class="signature-arity" href="#Cable.new" title="Permanent link">1</a><signature id="Cable.new">

```lx
Cable.new() : Cable
```
</signature>

> no docs found   

<endpoint module="luxe: cable" class="Cable" signature="pre_warm(warm_iterations : Num)"></endpoint>
<h4 class="signature_head">Cable.pre_warm</h4><a class="signature-arity" href="#Cable.pre_warm" title="Permanent link">1</a><signature id="Cable.pre_warm">

```lx
Cable.pre_warm(warm_iterations : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: cable" class="Cable" signature="simulate()"></endpoint>
<h4 class="signature_head">Cable.simulate</h4><a class="signature-arity" href="#Cable.simulate" title="Permanent link">1</a><signature id="Cable.simulate">

```lx
Cable.simulate() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: cable" class="Cable" signature="apply_constraints()"></endpoint>
<h4 class="signature_head">Cable.apply_constraints</h4><a class="signature-arity" href="#Cable.apply_constraints" title="Permanent link">1</a><signature id="Cable.apply_constraints">

```lx
Cable.apply_constraints() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: cable" class="Cable" signature="tick()"></endpoint>
<h4 class="signature_head">Cable.tick</h4><a class="signature-arity" href="#Cable.tick" title="Permanent link">1</a><signature id="Cable.tick">

```lx
Cable.tick() : unknown
```
</signature>

> no docs found   

