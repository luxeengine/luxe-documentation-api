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
```wren
import "luxe: system/sound.modifier" for Data
```
> no docs found

### Variables
```wren
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
```wren
import "luxe: system/sound.modifier" for Sound
```
> no docs found


## SoundAttenuation
```wren
import "luxe: system/sound.modifier" for SoundAttenuation
```
> no docs found

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="none"></endpoint>
### SoundAttenuation.none
```wren
SoundAttenuation.none : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="inverse_distance"></endpoint>
### SoundAttenuation.inverse_distance
```wren
SoundAttenuation.inverse_distance : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="linear_distance"></endpoint>
### SoundAttenuation.linear_distance
```wren
SoundAttenuation.linear_distance : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="exponential_distance"></endpoint>
### SoundAttenuation.exponential_distance
```wren
SoundAttenuation.exponential_distance : unknown
```
> no docs found   


## System
```wren
import "luxe: system/sound.modifier" for System
```
> no docs found

### Variables
```wren
var draw : Draw = null
var style : null = PathStyle.new
var last_pos : Map = {}
```
<endpoint module="luxe: system/sound.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```wren
System.init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_init(world : World)"></endpoint>
### System.editor_init(.)
```wren
System.editor_init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="attach(entity : Entity, data : Data)"></endpoint>
### System.attach(..)
```wren
System.attach(entity : Entity, data : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="detach(entity : Entity, data : Data)"></endpoint>
### System.detach(..)
```wren
System.detach(entity : Entity, data : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="get_attenuation(attn : SoundAttenuation)"></endpoint>
### System.get_attenuation(.)
```wren
System.get_attenuation(attn : SoundAttenuation) : AudioAttenuation
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="tick(delta : Num)"></endpoint>
### System.tick(.)
```wren
System.tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="draw(entity : Entity, data : Data)"></endpoint>
### System.draw(..)
```wren
System.draw(entity : Entity, data : Data) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
### System.editor_change(..)
```wren
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
### System.editor_tick(.)
```wren
System.editor_tick(delta : Num) : unknown
```
> no docs found   

