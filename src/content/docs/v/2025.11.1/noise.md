---
title: "luxe: noise"
description: API version 2025.11.1
slug: "v/2025.11.1/noise"
---
- [Noise](#noise)   
- [NoiseCellularDistanceFunc](#noisecellulardistancefunc)   
- [NoiseCellularReturnType](#noisecellularreturntype)   
- [NoiseDomainWarpType](#noisedomainwarptype)   
- [NoiseFractalType](#noisefractaltype)   
- [NoiseRotationType3D](#noiserotationtype3d)   
- [NoiseType](#noisetype)   

---


## Noise
```wren
import "luxe: noise" for Noise
```
> no docs found

<endpoint module="luxe: noise" class="Noise" signature="create(type : NoiseType)"></endpoint>
### Noise.create(.)
```wren
Noise.create(type : NoiseType) : Noise
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="create(type : NoiseType, seed : Num)"></endpoint>
### Noise.create(..)
```wren
Noise.create(type : NoiseType, seed : Num) : Noise
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="destroy(handle : Noise)"></endpoint>
### Noise.destroy(.)
```wren
Noise.destroy(handle : Noise) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="valid(handle : Noise)"></endpoint>
### Noise.valid(.)
```wren
Noise.valid(handle : Noise) : Bool
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="get2D(handle : Noise, x : Num, y : Num)"></endpoint>
### Noise.get2D(...)
```wren
Noise.get2D(handle : Noise, x : Num, y : Num) : Num
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="get3D(handle : Noise, x : Num, y : Num, z : Num)"></endpoint>
### Noise.get3D(....)
```wren
Noise.get3D(handle : Noise, x : Num, y : Num, z : Num) : Num
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_seed(handle : Noise, seed : Num)"></endpoint>
### Noise.set_seed(..)
```wren
Noise.set_seed(handle : Noise, seed : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="domain_warp2D(handle : Noise, x : Num, y : Num)"></endpoint>
### Noise.domain_warp2D(...)
```wren
Noise.domain_warp2D(handle : Noise, x : Num, y : Num) : Vec2
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="domain_warp3D(handle : Noise, x : Num, y : Num, z : Num)"></endpoint>
### Noise.domain_warp3D(....)
```wren
Noise.domain_warp3D(handle : Noise, x : Num, y : Num, z : Num) : Vec3
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_rotation_type3D(handle : Noise, type : NoiseRotationType3D)"></endpoint>
### Noise.set_rotation_type3D(..)
```wren
Noise.set_rotation_type3D(handle : Noise, type : NoiseRotationType3D) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_type(handle : Noise, type : NoiseFractalType)"></endpoint>
### Noise.set_fractal_type(..)
```wren
Noise.set_fractal_type(handle : Noise, type : NoiseFractalType) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_octaves(handle : Noise, octaves : Num)"></endpoint>
### Noise.set_fractal_octaves(..)
```wren
Noise.set_fractal_octaves(handle : Noise, octaves : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_lacunarity(handle : Noise, lacunarity : Num)"></endpoint>
### Noise.set_fractal_lacunarity(..)
```wren
Noise.set_fractal_lacunarity(handle : Noise, lacunarity : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_gain(handle : Noise, gain : Num)"></endpoint>
### Noise.set_fractal_gain(..)
```wren
Noise.set_fractal_gain(handle : Noise, gain : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_weighted_strength(handle : Noise, weighted_strength : Num)"></endpoint>
### Noise.set_fractal_weighted_strength(..)
```wren
Noise.set_fractal_weighted_strength(handle : Noise, weighted_strength : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_ping_pong_strength(handle : Noise, ping_pong_strength : Num)"></endpoint>
### Noise.set_fractal_ping_pong_strength(..)
```wren
Noise.set_fractal_ping_pong_strength(handle : Noise, ping_pong_strength : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_distance_func(handle : Noise, distance_func : NoiseCellularDistanceFunc)"></endpoint>
### Noise.set_cellular_distance_func(..)
```wren
Noise.set_cellular_distance_func(handle : Noise, distance_func : NoiseCellularDistanceFunc) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_return_type(handle : Noise, type : NoiseCellularReturnType)"></endpoint>
### Noise.set_cellular_return_type(..)
```wren
Noise.set_cellular_return_type(handle : Noise, type : NoiseCellularReturnType) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_jitter(handle : Noise, jitter : Num)"></endpoint>
### Noise.set_cellular_jitter(..)
```wren
Noise.set_cellular_jitter(handle : Noise, jitter : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_domain_warp_type(handle : Noise, type : NoiseDomainWarpType)"></endpoint>
### Noise.set_domain_warp_type(..)
```wren
Noise.set_domain_warp_type(handle : Noise, type : NoiseDomainWarpType) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_domain_warp_amp(handle : Noise, amp : Num)"></endpoint>
### Noise.set_domain_warp_amp(..)
```wren
Noise.set_domain_warp_amp(handle : Noise, amp : Num) : None
```
> no docs found   


## NoiseCellularDistanceFunc
```wren
import "luxe: noise" for NoiseCellularDistanceFunc
```
> no docs found

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="euclidean"></endpoint>
### NoiseCellularDistanceFunc.euclidean
```wren
NoiseCellularDistanceFunc.euclidean : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="euclidean_sq"></endpoint>
### NoiseCellularDistanceFunc.euclidean_sq
```wren
NoiseCellularDistanceFunc.euclidean_sq : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="manhattan"></endpoint>
### NoiseCellularDistanceFunc.manhattan
```wren
NoiseCellularDistanceFunc.manhattan : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="hybrid"></endpoint>
### NoiseCellularDistanceFunc.hybrid
```wren
NoiseCellularDistanceFunc.hybrid : unknown
```
> no docs found   


## NoiseCellularReturnType
```wren
import "luxe: noise" for NoiseCellularReturnType
```
> no docs found

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="cell_value"></endpoint>
### NoiseCellularReturnType.cell_value
```wren
NoiseCellularReturnType.cell_value : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance"></endpoint>
### NoiseCellularReturnType.distance
```wren
NoiseCellularReturnType.distance : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2"></endpoint>
### NoiseCellularReturnType.distance2
```wren
NoiseCellularReturnType.distance2 : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_add"></endpoint>
### NoiseCellularReturnType.distance2_add
```wren
NoiseCellularReturnType.distance2_add : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_sub"></endpoint>
### NoiseCellularReturnType.distance2_sub
```wren
NoiseCellularReturnType.distance2_sub : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_mul"></endpoint>
### NoiseCellularReturnType.distance2_mul
```wren
NoiseCellularReturnType.distance2_mul : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_div"></endpoint>
### NoiseCellularReturnType.distance2_div
```wren
NoiseCellularReturnType.distance2_div : unknown
```
> no docs found   


## NoiseDomainWarpType
```wren
import "luxe: noise" for NoiseDomainWarpType
```
> no docs found

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="open_simplex2"></endpoint>
### NoiseDomainWarpType.open_simplex2
```wren
NoiseDomainWarpType.open_simplex2 : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="open_simplex2_reduced"></endpoint>
### NoiseDomainWarpType.open_simplex2_reduced
```wren
NoiseDomainWarpType.open_simplex2_reduced : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="basic_grid"></endpoint>
### NoiseDomainWarpType.basic_grid
```wren
NoiseDomainWarpType.basic_grid : unknown
```
> no docs found   


## NoiseFractalType
```wren
import "luxe: noise" for NoiseFractalType
```
> no docs found

<endpoint module="luxe: noise" class="NoiseFractalType" signature="none"></endpoint>
### NoiseFractalType.none
```wren
NoiseFractalType.none : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="fbm"></endpoint>
### NoiseFractalType.fbm
```wren
NoiseFractalType.fbm : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="ridged"></endpoint>
### NoiseFractalType.ridged
```wren
NoiseFractalType.ridged : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="pingpong"></endpoint>
### NoiseFractalType.pingpong
```wren
NoiseFractalType.pingpong : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="domain_warp_progressive"></endpoint>
### NoiseFractalType.domain_warp_progressive
```wren
NoiseFractalType.domain_warp_progressive : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="domain_warp_independent"></endpoint>
### NoiseFractalType.domain_warp_independent
```wren
NoiseFractalType.domain_warp_independent : unknown
```
> no docs found   


## NoiseRotationType3D
```wren
import "luxe: noise" for NoiseRotationType3D
```
> no docs found

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="none"></endpoint>
### NoiseRotationType3D.none
```wren
NoiseRotationType3D.none : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="improve_xy_planes"></endpoint>
### NoiseRotationType3D.improve_xy_planes
```wren
NoiseRotationType3D.improve_xy_planes : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="improve_xz_planes"></endpoint>
### NoiseRotationType3D.improve_xz_planes
```wren
NoiseRotationType3D.improve_xz_planes : unknown
```
> no docs found   


## NoiseType
```wren
import "luxe: noise" for NoiseType
```
> no docs found

<endpoint module="luxe: noise" class="NoiseType" signature="open_simplex2"></endpoint>
### NoiseType.open_simplex2
```wren
NoiseType.open_simplex2 : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="open_simplex2s"></endpoint>
### NoiseType.open_simplex2s
```wren
NoiseType.open_simplex2s : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="cellular"></endpoint>
### NoiseType.cellular
```wren
NoiseType.cellular : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="perlin"></endpoint>
### NoiseType.perlin
```wren
NoiseType.perlin : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="value_cubic"></endpoint>
### NoiseType.value_cubic
```wren
NoiseType.value_cubic : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="value"></endpoint>
### NoiseType.value
```wren
NoiseType.value : unknown
```
> no docs found   

