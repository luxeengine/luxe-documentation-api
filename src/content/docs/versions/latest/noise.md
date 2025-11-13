---
title: "luxe: noise"
description: API version 2025.11.1
---
## `luxe: noise{:lx}` module

- [Noise](#noise)   
- [NoiseCellularDistanceFunc](#noisecellulardistancefunc)   
- [NoiseCellularReturnType](#noisecellularreturntype)   
- [NoiseDomainWarpType](#noisedomainwarptype)   
- [NoiseFractalType](#noisefractaltype)   
- [NoiseRotationType3D](#noiserotationtype3d)   
- [NoiseType](#noisetype)   

---


### Noise
`import "luxe: noise" for Noise{:lx}`
> no docs found

- [create](#Noise.create)(**type**: `NoiseType{:lx}`)
- [create](#Noise.create+2)(**type**: `NoiseType{:lx}`, **seed**: `Num{:lx}`)
- [destroy](#Noise.destroy)(**handle**: `Noise{:lx}`)
- [valid](#Noise.valid)(**handle**: `Noise{:lx}`)
- [get2D](#Noise.get2D+3)(**handle**: `Noise{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [get3D](#Noise.get3D+4)(**handle**: `Noise{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_seed](#Noise.set_seed+2)(**handle**: `Noise{:lx}`, **seed**: `Num{:lx}`)
- [domain_warp2D](#Noise.domain_warp2D+3)(**handle**: `Noise{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [domain_warp3D](#Noise.domain_warp3D+4)(**handle**: `Noise{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`)
- [set_rotation_type3D](#Noise.set_rotation_type3D+2)(**handle**: `Noise{:lx}`, **type**: `NoiseRotationType3D{:lx}`)
- [set_fractal_type](#Noise.set_fractal_type+2)(**handle**: `Noise{:lx}`, **type**: `NoiseFractalType{:lx}`)
- [set_fractal_octaves](#Noise.set_fractal_octaves+2)(**handle**: `Noise{:lx}`, **octaves**: `Num{:lx}`)
- [set_fractal_lacunarity](#Noise.set_fractal_lacunarity+2)(**handle**: `Noise{:lx}`, **lacunarity**: `Num{:lx}`)
- [set_fractal_gain](#Noise.set_fractal_gain+2)(**handle**: `Noise{:lx}`, **gain**: `Num{:lx}`)
- [set_fractal_weighted_strength](#Noise.set_fractal_weighted_strength+2)(**handle**: `Noise{:lx}`, **weighted_strength**: `Num{:lx}`)
- [set_fractal_ping_pong_strength](#Noise.set_fractal_ping_pong_strength+2)(**handle**: `Noise{:lx}`, **ping_pong_strength**: `Num{:lx}`)
- [set_cellular_distance_func](#Noise.set_cellular_distance_func+2)(**handle**: `Noise{:lx}`, **distance_func**: `NoiseCellularDistanceFunc{:lx}`)
- [set_cellular_return_type](#Noise.set_cellular_return_type+2)(**handle**: `Noise{:lx}`, **type**: `NoiseCellularReturnType{:lx}`)
- [set_cellular_jitter](#Noise.set_cellular_jitter+2)(**handle**: `Noise{:lx}`, **jitter**: `Num{:lx}`)
- [set_domain_warp_type](#Noise.set_domain_warp_type+2)(**handle**: `Noise{:lx}`, **type**: `NoiseDomainWarpType{:lx}`)
- [set_domain_warp_amp](#Noise.set_domain_warp_amp+2)(**handle**: `Noise{:lx}`, **amp**: `Num{:lx}`)


---

<endpoint module="luxe: noise" class="Noise" signature="create(type : NoiseType)"></endpoint>
<h4 class="signature_head">Noise.create</h4><a class="signature-arity" href="#Noise.create" title="Permanent link">1</a><signature id="Noise.create">

```lx
Noise.create(type : NoiseType) : Noise
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="create(type : NoiseType, seed : Num)"></endpoint>
<h4 class="signature_head">Noise.create</h4><a class="signature-arity" href="#Noise.create+2" title="Permanent link">2</a><signature id="Noise.create+2">

```lx
Noise.create(type : NoiseType, seed : Num) : Noise
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="destroy(handle : Noise)"></endpoint>
<h4 class="signature_head">Noise.destroy</h4><a class="signature-arity" href="#Noise.destroy" title="Permanent link">1</a><signature id="Noise.destroy">

```lx
Noise.destroy(handle : Noise) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="valid(handle : Noise)"></endpoint>
<h4 class="signature_head">Noise.valid</h4><a class="signature-arity" href="#Noise.valid" title="Permanent link">1</a><signature id="Noise.valid">

```lx
Noise.valid(handle : Noise) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="get2D(handle : Noise, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Noise.get2D</h4><a class="signature-arity" href="#Noise.get2D+3" title="Permanent link">3</a><signature id="Noise.get2D+3">

```lx
Noise.get2D(handle : Noise, x : Num, y : Num) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="get3D(handle : Noise, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Noise.get3D</h4><a class="signature-arity" href="#Noise.get3D+4" title="Permanent link">4</a><signature id="Noise.get3D+4">

```lx
Noise.get3D(handle : Noise, x : Num, y : Num, z : Num) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_seed(handle : Noise, seed : Num)"></endpoint>
<h4 class="signature_head">Noise.set_seed</h4><a class="signature-arity" href="#Noise.set_seed+2" title="Permanent link">2</a><signature id="Noise.set_seed+2">

```lx
Noise.set_seed(handle : Noise, seed : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="domain_warp2D(handle : Noise, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Noise.domain_warp2D</h4><a class="signature-arity" href="#Noise.domain_warp2D+3" title="Permanent link">3</a><signature id="Noise.domain_warp2D+3">

```lx
Noise.domain_warp2D(handle : Noise, x : Num, y : Num) : Vec2
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="domain_warp3D(handle : Noise, x : Num, y : Num, z : Num)"></endpoint>
<h4 class="signature_head">Noise.domain_warp3D</h4><a class="signature-arity" href="#Noise.domain_warp3D+4" title="Permanent link">4</a><signature id="Noise.domain_warp3D+4">

```lx
Noise.domain_warp3D(handle : Noise, x : Num, y : Num, z : Num) : Vec3
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_rotation_type3D(handle : Noise, type : NoiseRotationType3D)"></endpoint>
<h4 class="signature_head">Noise.set_rotation_type3D</h4><a class="signature-arity" href="#Noise.set_rotation_type3D+2" title="Permanent link">2</a><signature id="Noise.set_rotation_type3D+2">

```lx
Noise.set_rotation_type3D(handle : Noise, type : NoiseRotationType3D) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_type(handle : Noise, type : NoiseFractalType)"></endpoint>
<h4 class="signature_head">Noise.set_fractal_type</h4><a class="signature-arity" href="#Noise.set_fractal_type+2" title="Permanent link">2</a><signature id="Noise.set_fractal_type+2">

```lx
Noise.set_fractal_type(handle : Noise, type : NoiseFractalType) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_octaves(handle : Noise, octaves : Num)"></endpoint>
<h4 class="signature_head">Noise.set_fractal_octaves</h4><a class="signature-arity" href="#Noise.set_fractal_octaves+2" title="Permanent link">2</a><signature id="Noise.set_fractal_octaves+2">

```lx
Noise.set_fractal_octaves(handle : Noise, octaves : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_lacunarity(handle : Noise, lacunarity : Num)"></endpoint>
<h4 class="signature_head">Noise.set_fractal_lacunarity</h4><a class="signature-arity" href="#Noise.set_fractal_lacunarity+2" title="Permanent link">2</a><signature id="Noise.set_fractal_lacunarity+2">

```lx
Noise.set_fractal_lacunarity(handle : Noise, lacunarity : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_gain(handle : Noise, gain : Num)"></endpoint>
<h4 class="signature_head">Noise.set_fractal_gain</h4><a class="signature-arity" href="#Noise.set_fractal_gain+2" title="Permanent link">2</a><signature id="Noise.set_fractal_gain+2">

```lx
Noise.set_fractal_gain(handle : Noise, gain : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_weighted_strength(handle : Noise, weighted_strength : Num)"></endpoint>
<h4 class="signature_head">Noise.set_fractal_weighted_strength</h4><a class="signature-arity" href="#Noise.set_fractal_weighted_strength+2" title="Permanent link">2</a><signature id="Noise.set_fractal_weighted_strength+2">

```lx
Noise.set_fractal_weighted_strength(handle : Noise, weighted_strength : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_ping_pong_strength(handle : Noise, ping_pong_strength : Num)"></endpoint>
<h4 class="signature_head">Noise.set_fractal_ping_pong_strength</h4><a class="signature-arity" href="#Noise.set_fractal_ping_pong_strength+2" title="Permanent link">2</a><signature id="Noise.set_fractal_ping_pong_strength+2">

```lx
Noise.set_fractal_ping_pong_strength(handle : Noise, ping_pong_strength : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_distance_func(handle : Noise, distance_func : NoiseCellularDistanceFunc)"></endpoint>
<h4 class="signature_head">Noise.set_cellular_distance_func</h4><a class="signature-arity" href="#Noise.set_cellular_distance_func+2" title="Permanent link">2</a><signature id="Noise.set_cellular_distance_func+2">

```lx
Noise.set_cellular_distance_func(handle : Noise, distance_func : NoiseCellularDistanceFunc) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_return_type(handle : Noise, type : NoiseCellularReturnType)"></endpoint>
<h4 class="signature_head">Noise.set_cellular_return_type</h4><a class="signature-arity" href="#Noise.set_cellular_return_type+2" title="Permanent link">2</a><signature id="Noise.set_cellular_return_type+2">

```lx
Noise.set_cellular_return_type(handle : Noise, type : NoiseCellularReturnType) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_jitter(handle : Noise, jitter : Num)"></endpoint>
<h4 class="signature_head">Noise.set_cellular_jitter</h4><a class="signature-arity" href="#Noise.set_cellular_jitter+2" title="Permanent link">2</a><signature id="Noise.set_cellular_jitter+2">

```lx
Noise.set_cellular_jitter(handle : Noise, jitter : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_domain_warp_type(handle : Noise, type : NoiseDomainWarpType)"></endpoint>
<h4 class="signature_head">Noise.set_domain_warp_type</h4><a class="signature-arity" href="#Noise.set_domain_warp_type+2" title="Permanent link">2</a><signature id="Noise.set_domain_warp_type+2">

```lx
Noise.set_domain_warp_type(handle : Noise, type : NoiseDomainWarpType) : None
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_domain_warp_amp(handle : Noise, amp : Num)"></endpoint>
<h4 class="signature_head">Noise.set_domain_warp_amp</h4><a class="signature-arity" href="#Noise.set_domain_warp_amp+2" title="Permanent link">2</a><signature id="Noise.set_domain_warp_amp+2">

```lx
Noise.set_domain_warp_amp(handle : Noise, amp : Num) : None
```
</signature>

> no docs found   


### NoiseCellularDistanceFunc
`import "luxe: noise" for NoiseCellularDistanceFunc{:lx}`
> no docs found

- [euclidean](#NoiseCellularDistanceFunc.euclidean)
- [euclidean_sq](#NoiseCellularDistanceFunc.euclidean_sq)
- [manhattan](#NoiseCellularDistanceFunc.manhattan)
- [hybrid](#NoiseCellularDistanceFunc.hybrid)


---

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="euclidean"></endpoint>
<h4 class="signature_head">NoiseCellularDistanceFunc.euclidean</h4><a class="signature-arity" href="#NoiseCellularDistanceFunc.euclidean" title="Permanent link">1</a><signature id="NoiseCellularDistanceFunc.euclidean">

```lx
NoiseCellularDistanceFunc.euclidean : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="euclidean_sq"></endpoint>
<h4 class="signature_head">NoiseCellularDistanceFunc.euclidean_sq</h4><a class="signature-arity" href="#NoiseCellularDistanceFunc.euclidean_sq" title="Permanent link">1</a><signature id="NoiseCellularDistanceFunc.euclidean_sq">

```lx
NoiseCellularDistanceFunc.euclidean_sq : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="manhattan"></endpoint>
<h4 class="signature_head">NoiseCellularDistanceFunc.manhattan</h4><a class="signature-arity" href="#NoiseCellularDistanceFunc.manhattan" title="Permanent link">1</a><signature id="NoiseCellularDistanceFunc.manhattan">

```lx
NoiseCellularDistanceFunc.manhattan : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="hybrid"></endpoint>
<h4 class="signature_head">NoiseCellularDistanceFunc.hybrid</h4><a class="signature-arity" href="#NoiseCellularDistanceFunc.hybrid" title="Permanent link">1</a><signature id="NoiseCellularDistanceFunc.hybrid">

```lx
NoiseCellularDistanceFunc.hybrid : unknown
```
</signature>

> no docs found   


### NoiseCellularReturnType
`import "luxe: noise" for NoiseCellularReturnType{:lx}`
> no docs found

- [cell_value](#NoiseCellularReturnType.cell_value)
- [distance](#NoiseCellularReturnType.distance)
- [distance2](#NoiseCellularReturnType.distance2)
- [distance2_add](#NoiseCellularReturnType.distance2_add)
- [distance2_sub](#NoiseCellularReturnType.distance2_sub)
- [distance2_mul](#NoiseCellularReturnType.distance2_mul)
- [distance2_div](#NoiseCellularReturnType.distance2_div)


---

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="cell_value"></endpoint>
<h4 class="signature_head">NoiseCellularReturnType.cell_value</h4><a class="signature-arity" href="#NoiseCellularReturnType.cell_value" title="Permanent link">1</a><signature id="NoiseCellularReturnType.cell_value">

```lx
NoiseCellularReturnType.cell_value : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance"></endpoint>
<h4 class="signature_head">NoiseCellularReturnType.distance</h4><a class="signature-arity" href="#NoiseCellularReturnType.distance" title="Permanent link">1</a><signature id="NoiseCellularReturnType.distance">

```lx
NoiseCellularReturnType.distance : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2"></endpoint>
<h4 class="signature_head">NoiseCellularReturnType.distance2</h4><a class="signature-arity" href="#NoiseCellularReturnType.distance2" title="Permanent link">1</a><signature id="NoiseCellularReturnType.distance2">

```lx
NoiseCellularReturnType.distance2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_add"></endpoint>
<h4 class="signature_head">NoiseCellularReturnType.distance2_add</h4><a class="signature-arity" href="#NoiseCellularReturnType.distance2_add" title="Permanent link">1</a><signature id="NoiseCellularReturnType.distance2_add">

```lx
NoiseCellularReturnType.distance2_add : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_sub"></endpoint>
<h4 class="signature_head">NoiseCellularReturnType.distance2_sub</h4><a class="signature-arity" href="#NoiseCellularReturnType.distance2_sub" title="Permanent link">1</a><signature id="NoiseCellularReturnType.distance2_sub">

```lx
NoiseCellularReturnType.distance2_sub : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_mul"></endpoint>
<h4 class="signature_head">NoiseCellularReturnType.distance2_mul</h4><a class="signature-arity" href="#NoiseCellularReturnType.distance2_mul" title="Permanent link">1</a><signature id="NoiseCellularReturnType.distance2_mul">

```lx
NoiseCellularReturnType.distance2_mul : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_div"></endpoint>
<h4 class="signature_head">NoiseCellularReturnType.distance2_div</h4><a class="signature-arity" href="#NoiseCellularReturnType.distance2_div" title="Permanent link">1</a><signature id="NoiseCellularReturnType.distance2_div">

```lx
NoiseCellularReturnType.distance2_div : unknown
```
</signature>

> no docs found   


### NoiseDomainWarpType
`import "luxe: noise" for NoiseDomainWarpType{:lx}`
> no docs found

- [open_simplex2](#NoiseDomainWarpType.open_simplex2)
- [open_simplex2_reduced](#NoiseDomainWarpType.open_simplex2_reduced)
- [basic_grid](#NoiseDomainWarpType.basic_grid)


---

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="open_simplex2"></endpoint>
<h4 class="signature_head">NoiseDomainWarpType.open_simplex2</h4><a class="signature-arity" href="#NoiseDomainWarpType.open_simplex2" title="Permanent link">1</a><signature id="NoiseDomainWarpType.open_simplex2">

```lx
NoiseDomainWarpType.open_simplex2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="open_simplex2_reduced"></endpoint>
<h4 class="signature_head">NoiseDomainWarpType.open_simplex2_reduced</h4><a class="signature-arity" href="#NoiseDomainWarpType.open_simplex2_reduced" title="Permanent link">1</a><signature id="NoiseDomainWarpType.open_simplex2_reduced">

```lx
NoiseDomainWarpType.open_simplex2_reduced : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="basic_grid"></endpoint>
<h4 class="signature_head">NoiseDomainWarpType.basic_grid</h4><a class="signature-arity" href="#NoiseDomainWarpType.basic_grid" title="Permanent link">1</a><signature id="NoiseDomainWarpType.basic_grid">

```lx
NoiseDomainWarpType.basic_grid : unknown
```
</signature>

> no docs found   


### NoiseFractalType
`import "luxe: noise" for NoiseFractalType{:lx}`
> no docs found

- [none](#NoiseFractalType.none)
- [fbm](#NoiseFractalType.fbm)
- [ridged](#NoiseFractalType.ridged)
- [pingpong](#NoiseFractalType.pingpong)
- [domain_warp_progressive](#NoiseFractalType.domain_warp_progressive)
- [domain_warp_independent](#NoiseFractalType.domain_warp_independent)


---

<endpoint module="luxe: noise" class="NoiseFractalType" signature="none"></endpoint>
<h4 class="signature_head">NoiseFractalType.none</h4><a class="signature-arity" href="#NoiseFractalType.none" title="Permanent link">1</a><signature id="NoiseFractalType.none">

```lx
NoiseFractalType.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="fbm"></endpoint>
<h4 class="signature_head">NoiseFractalType.fbm</h4><a class="signature-arity" href="#NoiseFractalType.fbm" title="Permanent link">1</a><signature id="NoiseFractalType.fbm">

```lx
NoiseFractalType.fbm : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="ridged"></endpoint>
<h4 class="signature_head">NoiseFractalType.ridged</h4><a class="signature-arity" href="#NoiseFractalType.ridged" title="Permanent link">1</a><signature id="NoiseFractalType.ridged">

```lx
NoiseFractalType.ridged : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="pingpong"></endpoint>
<h4 class="signature_head">NoiseFractalType.pingpong</h4><a class="signature-arity" href="#NoiseFractalType.pingpong" title="Permanent link">1</a><signature id="NoiseFractalType.pingpong">

```lx
NoiseFractalType.pingpong : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="domain_warp_progressive"></endpoint>
<h4 class="signature_head">NoiseFractalType.domain_warp_progressive</h4><a class="signature-arity" href="#NoiseFractalType.domain_warp_progressive" title="Permanent link">1</a><signature id="NoiseFractalType.domain_warp_progressive">

```lx
NoiseFractalType.domain_warp_progressive : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="domain_warp_independent"></endpoint>
<h4 class="signature_head">NoiseFractalType.domain_warp_independent</h4><a class="signature-arity" href="#NoiseFractalType.domain_warp_independent" title="Permanent link">1</a><signature id="NoiseFractalType.domain_warp_independent">

```lx
NoiseFractalType.domain_warp_independent : unknown
```
</signature>

> no docs found   


### NoiseRotationType3D
`import "luxe: noise" for NoiseRotationType3D{:lx}`
> no docs found

- [none](#NoiseRotationType3D.none)
- [improve_xy_planes](#NoiseRotationType3D.improve_xy_planes)
- [improve_xz_planes](#NoiseRotationType3D.improve_xz_planes)


---

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="none"></endpoint>
<h4 class="signature_head">NoiseRotationType3D.none</h4><a class="signature-arity" href="#NoiseRotationType3D.none" title="Permanent link">1</a><signature id="NoiseRotationType3D.none">

```lx
NoiseRotationType3D.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="improve_xy_planes"></endpoint>
<h4 class="signature_head">NoiseRotationType3D.improve_xy_planes</h4><a class="signature-arity" href="#NoiseRotationType3D.improve_xy_planes" title="Permanent link">1</a><signature id="NoiseRotationType3D.improve_xy_planes">

```lx
NoiseRotationType3D.improve_xy_planes : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="improve_xz_planes"></endpoint>
<h4 class="signature_head">NoiseRotationType3D.improve_xz_planes</h4><a class="signature-arity" href="#NoiseRotationType3D.improve_xz_planes" title="Permanent link">1</a><signature id="NoiseRotationType3D.improve_xz_planes">

```lx
NoiseRotationType3D.improve_xz_planes : unknown
```
</signature>

> no docs found   


### NoiseType
`import "luxe: noise" for NoiseType{:lx}`
> no docs found

- [open_simplex2](#NoiseType.open_simplex2)
- [open_simplex2s](#NoiseType.open_simplex2s)
- [cellular](#NoiseType.cellular)
- [perlin](#NoiseType.perlin)
- [value_cubic](#NoiseType.value_cubic)
- [value](#NoiseType.value)


---

<endpoint module="luxe: noise" class="NoiseType" signature="open_simplex2"></endpoint>
<h4 class="signature_head">NoiseType.open_simplex2</h4><a class="signature-arity" href="#NoiseType.open_simplex2" title="Permanent link">1</a><signature id="NoiseType.open_simplex2">

```lx
NoiseType.open_simplex2 : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="open_simplex2s"></endpoint>
<h4 class="signature_head">NoiseType.open_simplex2s</h4><a class="signature-arity" href="#NoiseType.open_simplex2s" title="Permanent link">1</a><signature id="NoiseType.open_simplex2s">

```lx
NoiseType.open_simplex2s : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="cellular"></endpoint>
<h4 class="signature_head">NoiseType.cellular</h4><a class="signature-arity" href="#NoiseType.cellular" title="Permanent link">1</a><signature id="NoiseType.cellular">

```lx
NoiseType.cellular : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="perlin"></endpoint>
<h4 class="signature_head">NoiseType.perlin</h4><a class="signature-arity" href="#NoiseType.perlin" title="Permanent link">1</a><signature id="NoiseType.perlin">

```lx
NoiseType.perlin : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="value_cubic"></endpoint>
<h4 class="signature_head">NoiseType.value_cubic</h4><a class="signature-arity" href="#NoiseType.value_cubic" title="Permanent link">1</a><signature id="NoiseType.value_cubic">

```lx
NoiseType.value_cubic : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="value"></endpoint>
<h4 class="signature_head">NoiseType.value</h4><a class="signature-arity" href="#NoiseType.value" title="Permanent link">1</a><signature id="NoiseType.value">

```lx
NoiseType.value : unknown
```
</signature>

> no docs found   

