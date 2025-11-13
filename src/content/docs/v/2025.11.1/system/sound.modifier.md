---
title: "luxe: system/sound.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/sound.modifier"
---
- [Data](#data)   
- [Sound](#sound)   
- [SoundAttenuation](#soundattenuation)   
- [System](#system)   

---


## Data
```lx
import "luxe: system/sound.modifier" for Data
```
> no docs found

### Variables
```lx
var source : Asset = null
var bus : Asset = null
var volume : Num = -1
var pan : Num = 0
var pitch : Num = 1
var looping : Bool = false
var world_space : Bool = false
var debug_draw : Bool = true
var attenuation : SoundAttenuation = SoundAttenuation.none
var range : Float2 = [1, 10]
var rolloff : Num = 1
var simulate_doppler : Bool = false
var doppler_factor : Num = 1
```

## Sound
```lx
import "luxe: system/sound.modifier" for Sound
```
> no docs found


## SoundAttenuation
```lx
import "luxe: system/sound.modifier" for SoundAttenuation
```
> no docs found

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="none"></endpoint>
### SoundAttenuation.none
```lx
SoundAttenuation.none : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="inverse_distance"></endpoint>
### SoundAttenuation.inverse_distance
```lx
SoundAttenuation.inverse_distance : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="linear_distance"></endpoint>
### SoundAttenuation.linear_distance
```lx
SoundAttenuation.linear_distance : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="exponential_distance"></endpoint>
### SoundAttenuation.exponential_distance
```lx
SoundAttenuation.exponential_distance : unknown
```
> no docs found   


## System
```lx
import "luxe: system/sound.modifier" for System
```
> no docs found

### Variables
```lx
var draw : Draw = null
var style : null = PathStyle.new
var last_pos : Map = {}
```
<endpoint module="luxe: system/sound.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```lx
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```lx
System.init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_init(world : World)"></endpoint>
### System.editor_init(.)
```lx
System.editor_init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="attach(entity : Entity, data : Data)"></endpoint>
### System.attach(..)
```lx
System.attach(entity : Entity, data : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="detach(entity : Entity, data : Data)"></endpoint>
### System.detach(..)
```lx
System.detach(entity : Entity, data : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="get_attenuation(attn : SoundAttenuation)"></endpoint>
### System.get_attenuation(.)
```lx
System.get_attenuation(attn : SoundAttenuation) : AudioAttenuation
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="tick(delta : Num)"></endpoint>
### System.tick(.)
```lx
System.tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="draw(entity : Entity, data : Data)"></endpoint>
### System.draw(..)
```lx
System.draw(entity : Entity, data : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
### System.editor_change(..)
```lx
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
### System.editor_tick(.)
```lx
System.editor_tick(delta : Num) : unknown
```
> no docs found   

