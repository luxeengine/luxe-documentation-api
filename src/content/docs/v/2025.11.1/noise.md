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
```lx
import "luxe: noise" for Noise
```
> no docs found

<endpoint module="luxe: noise" class="Noise" signature="create(type : NoiseType)"></endpoint>
### Noise.create(.)
```lx
Noise.create(type : NoiseType) : Noise
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="create(type : NoiseType, seed : Num)"></endpoint>
### Noise.create(..)
```lx
Noise.create(type : NoiseType, seed : Num) : Noise
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="destroy(handle : Noise)"></endpoint>
### Noise.destroy(.)
```lx
Noise.destroy(handle : Noise) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="valid(handle : Noise)"></endpoint>
### Noise.valid(.)
```lx
Noise.valid(handle : Noise) : Bool
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="get2D(handle : Noise, x : Num, y : Num)"></endpoint>
### Noise.get2D(...)
```lx
Noise.get2D(handle : Noise, x : Num, y : Num) : Num
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="get3D(handle : Noise, x : Num, y : Num, z : Num)"></endpoint>
### Noise.get3D(....)
```lx
Noise.get3D(handle : Noise, x : Num, y : Num, z : Num) : Num
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_seed(handle : Noise, seed : Num)"></endpoint>
### Noise.set_seed(..)
```lx
Noise.set_seed(handle : Noise, seed : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="domain_warp2D(handle : Noise, x : Num, y : Num)"></endpoint>
### Noise.domain_warp2D(...)
```lx
Noise.domain_warp2D(handle : Noise, x : Num, y : Num) : Vec2
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="domain_warp3D(handle : Noise, x : Num, y : Num, z : Num)"></endpoint>
### Noise.domain_warp3D(....)
```lx
Noise.domain_warp3D(handle : Noise, x : Num, y : Num, z : Num) : Vec3
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_rotation_type3D(handle : Noise, type : NoiseRotationType3D)"></endpoint>
### Noise.set_rotation_type3D(..)
```lx
Noise.set_rotation_type3D(handle : Noise, type : NoiseRotationType3D) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_type(handle : Noise, type : NoiseFractalType)"></endpoint>
### Noise.set_fractal_type(..)
```lx
Noise.set_fractal_type(handle : Noise, type : NoiseFractalType) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_octaves(handle : Noise, octaves : Num)"></endpoint>
### Noise.set_fractal_octaves(..)
```lx
Noise.set_fractal_octaves(handle : Noise, octaves : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_lacunarity(handle : Noise, lacunarity : Num)"></endpoint>
### Noise.set_fractal_lacunarity(..)
```lx
Noise.set_fractal_lacunarity(handle : Noise, lacunarity : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_gain(handle : Noise, gain : Num)"></endpoint>
### Noise.set_fractal_gain(..)
```lx
Noise.set_fractal_gain(handle : Noise, gain : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_weighted_strength(handle : Noise, weighted_strength : Num)"></endpoint>
### Noise.set_fractal_weighted_strength(..)
```lx
Noise.set_fractal_weighted_strength(handle : Noise, weighted_strength : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_fractal_ping_pong_strength(handle : Noise, ping_pong_strength : Num)"></endpoint>
### Noise.set_fractal_ping_pong_strength(..)
```lx
Noise.set_fractal_ping_pong_strength(handle : Noise, ping_pong_strength : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_distance_func(handle : Noise, distance_func : NoiseCellularDistanceFunc)"></endpoint>
### Noise.set_cellular_distance_func(..)
```lx
Noise.set_cellular_distance_func(handle : Noise, distance_func : NoiseCellularDistanceFunc) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_return_type(handle : Noise, type : NoiseCellularReturnType)"></endpoint>
### Noise.set_cellular_return_type(..)
```lx
Noise.set_cellular_return_type(handle : Noise, type : NoiseCellularReturnType) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_cellular_jitter(handle : Noise, jitter : Num)"></endpoint>
### Noise.set_cellular_jitter(..)
```lx
Noise.set_cellular_jitter(handle : Noise, jitter : Num) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_domain_warp_type(handle : Noise, type : NoiseDomainWarpType)"></endpoint>
### Noise.set_domain_warp_type(..)
```lx
Noise.set_domain_warp_type(handle : Noise, type : NoiseDomainWarpType) : None
```
> no docs found   

<endpoint module="luxe: noise" class="Noise" signature="set_domain_warp_amp(handle : Noise, amp : Num)"></endpoint>
### Noise.set_domain_warp_amp(..)
```lx
Noise.set_domain_warp_amp(handle : Noise, amp : Num) : None
```
> no docs found   


## NoiseCellularDistanceFunc
```lx
import "luxe: noise" for NoiseCellularDistanceFunc
```
> no docs found

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="euclidean"></endpoint>
### NoiseCellularDistanceFunc.euclidean
```lx
NoiseCellularDistanceFunc.euclidean : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="euclidean_sq"></endpoint>
### NoiseCellularDistanceFunc.euclidean_sq
```lx
NoiseCellularDistanceFunc.euclidean_sq : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="manhattan"></endpoint>
### NoiseCellularDistanceFunc.manhattan
```lx
NoiseCellularDistanceFunc.manhattan : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularDistanceFunc" signature="hybrid"></endpoint>
### NoiseCellularDistanceFunc.hybrid
```lx
NoiseCellularDistanceFunc.hybrid : unknown
```
> no docs found   


## NoiseCellularReturnType
```lx
import "luxe: noise" for NoiseCellularReturnType
```
> no docs found

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="cell_value"></endpoint>
### NoiseCellularReturnType.cell_value
```lx
NoiseCellularReturnType.cell_value : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance"></endpoint>
### NoiseCellularReturnType.distance
```lx
NoiseCellularReturnType.distance : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2"></endpoint>
### NoiseCellularReturnType.distance2
```lx
NoiseCellularReturnType.distance2 : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_add"></endpoint>
### NoiseCellularReturnType.distance2_add
```lx
NoiseCellularReturnType.distance2_add : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_sub"></endpoint>
### NoiseCellularReturnType.distance2_sub
```lx
NoiseCellularReturnType.distance2_sub : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_mul"></endpoint>
### NoiseCellularReturnType.distance2_mul
```lx
NoiseCellularReturnType.distance2_mul : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseCellularReturnType" signature="distance2_div"></endpoint>
### NoiseCellularReturnType.distance2_div
```lx
NoiseCellularReturnType.distance2_div : unknown
```
> no docs found   


## NoiseDomainWarpType
```lx
import "luxe: noise" for NoiseDomainWarpType
```
> no docs found

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="open_simplex2"></endpoint>
### NoiseDomainWarpType.open_simplex2
```lx
NoiseDomainWarpType.open_simplex2 : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="open_simplex2_reduced"></endpoint>
### NoiseDomainWarpType.open_simplex2_reduced
```lx
NoiseDomainWarpType.open_simplex2_reduced : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseDomainWarpType" signature="basic_grid"></endpoint>
### NoiseDomainWarpType.basic_grid
```lx
NoiseDomainWarpType.basic_grid : unknown
```
> no docs found   


## NoiseFractalType
```lx
import "luxe: noise" for NoiseFractalType
```
> no docs found

<endpoint module="luxe: noise" class="NoiseFractalType" signature="none"></endpoint>
### NoiseFractalType.none
```lx
NoiseFractalType.none : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="fbm"></endpoint>
### NoiseFractalType.fbm
```lx
NoiseFractalType.fbm : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="ridged"></endpoint>
### NoiseFractalType.ridged
```lx
NoiseFractalType.ridged : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="pingpong"></endpoint>
### NoiseFractalType.pingpong
```lx
NoiseFractalType.pingpong : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="domain_warp_progressive"></endpoint>
### NoiseFractalType.domain_warp_progressive
```lx
NoiseFractalType.domain_warp_progressive : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseFractalType" signature="domain_warp_independent"></endpoint>
### NoiseFractalType.domain_warp_independent
```lx
NoiseFractalType.domain_warp_independent : unknown
```
> no docs found   


## NoiseRotationType3D
```lx
import "luxe: noise" for NoiseRotationType3D
```
> no docs found

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="none"></endpoint>
### NoiseRotationType3D.none
```lx
NoiseRotationType3D.none : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="improve_xy_planes"></endpoint>
### NoiseRotationType3D.improve_xy_planes
```lx
NoiseRotationType3D.improve_xy_planes : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseRotationType3D" signature="improve_xz_planes"></endpoint>
### NoiseRotationType3D.improve_xz_planes
```lx
NoiseRotationType3D.improve_xz_planes : unknown
```
> no docs found   


## NoiseType
```lx
import "luxe: noise" for NoiseType
```
> no docs found

<endpoint module="luxe: noise" class="NoiseType" signature="open_simplex2"></endpoint>
### NoiseType.open_simplex2
```lx
NoiseType.open_simplex2 : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="open_simplex2s"></endpoint>
### NoiseType.open_simplex2s
```lx
NoiseType.open_simplex2s : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="cellular"></endpoint>
### NoiseType.cellular
```lx
NoiseType.cellular : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="perlin"></endpoint>
### NoiseType.perlin
```lx
NoiseType.perlin : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="value_cubic"></endpoint>
### NoiseType.value_cubic
```lx
NoiseType.value_cubic : unknown
```
> no docs found   

<endpoint module="luxe: noise" class="NoiseType" signature="value"></endpoint>
### NoiseType.value
```lx
NoiseType.value : unknown
```
> no docs found   

