---
title: "luxe: system/sound.modifier"
description: API version 2025.11.1
---
## `luxe: system/sound.modifier{:lx}` module

- [Data](#data)   
- [Sound](#sound)   
- [SoundAttenuation](#soundattenuation)   
- [System](#system)   

---


### Data
`import "luxe: system/sound.modifier" for Data{:lx}`
> no docs found

- `var source : Asset = null{:lx}`
- `var bus : Asset = null{:lx}`
- `var volume : Num = -1{:lx}`
- `var pan : Num = 0{:lx}`
- `var pitch : Num = 1{:lx}`
- `var looping : Bool = false{:lx}`
- `var world_space : Bool = false{:lx}`
- `var debug_draw : Bool = true{:lx}`
- `var attenuation : SoundAttenuation = SoundAttenuation.none{:lx}`
- `var range : Float2 = [1, 10]{:lx}`
- `var rolloff : Num = 1{:lx}`
- `var simulate_doppler : Bool = false{:lx}`
- `var doppler_factor : Num = 1{:lx}`


---


### Sound
`import "luxe: system/sound.modifier" for Sound{:lx}`
> no docs found



---


### SoundAttenuation
`import "luxe: system/sound.modifier" for SoundAttenuation{:lx}`
> no docs found

- [none](#SoundAttenuation.none)
- [inverse_distance](#SoundAttenuation.inverse_distance)
- [linear_distance](#SoundAttenuation.linear_distance)
- [exponential_distance](#SoundAttenuation.exponential_distance)


---

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="none"></endpoint>
<h4 class="signature_head">SoundAttenuation.none</h4><a class="signature-arity" href="#SoundAttenuation.none" title="Permanent link">1</a><signature id="SoundAttenuation.none">

```lx
SoundAttenuation.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="inverse_distance"></endpoint>
<h4 class="signature_head">SoundAttenuation.inverse_distance</h4><a class="signature-arity" href="#SoundAttenuation.inverse_distance" title="Permanent link">1</a><signature id="SoundAttenuation.inverse_distance">

```lx
SoundAttenuation.inverse_distance : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="linear_distance"></endpoint>
<h4 class="signature_head">SoundAttenuation.linear_distance</h4><a class="signature-arity" href="#SoundAttenuation.linear_distance" title="Permanent link">1</a><signature id="SoundAttenuation.linear_distance">

```lx
SoundAttenuation.linear_distance : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="SoundAttenuation" signature="exponential_distance"></endpoint>
<h4 class="signature_head">SoundAttenuation.exponential_distance</h4><a class="signature-arity" href="#SoundAttenuation.exponential_distance" title="Permanent link">1</a><signature id="SoundAttenuation.exponential_distance">

```lx
SoundAttenuation.exponential_distance : unknown
```
</signature>

> no docs found   


### System
`import "luxe: system/sound.modifier" for System{:lx}`
> no docs found

- `var draw : Draw = null{:lx}`
- `var style : null = PathStyle.new{:lx}`
- `var last_pos : Map = {}{:lx}`
- [new](#System.new)(**world**: `World{:lx}`)
- [init](#System.init)(**world**: `World{:lx}`)
- [editor_init](#System.editor_init)(**world**: `World{:lx}`)
- [attach](#System.attach+2)(**entity**: `Entity{:lx}`, **data**: `Data{:lx}`)
- [detach](#System.detach+2)(**entity**: `Entity{:lx}`, **data**: `Data{:lx}`)
- [get_attenuation](#System.get_attenuation)(**attn**: `SoundAttenuation{:lx}`)
- [tick](#System.tick)(**delta**: `Num{:lx}`)
- [draw](#System.draw+2)(**entity**: `Entity{:lx}`, **data**: `Data{:lx}`)
- [editor_change](#System.editor_change+2)(**entity**: `Entity{:lx}`, **change**: `ModifierChange{:lx}`)
- [editor_tick](#System.editor_tick)(**delta**: `Num{:lx}`)


---

<endpoint module="luxe: system/sound.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="init(world : World)"></endpoint>
<h4 class="signature_head">System.init</h4><a class="signature-arity" href="#System.init" title="Permanent link">1</a><signature id="System.init">

```lx
System.init(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_init(world : World)"></endpoint>
<h4 class="signature_head">System.editor_init</h4><a class="signature-arity" href="#System.editor_init" title="Permanent link">1</a><signature id="System.editor_init">

```lx
System.editor_init(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="attach(entity : Entity, data : Data)"></endpoint>
<h4 class="signature_head">System.attach</h4><a class="signature-arity" href="#System.attach+2" title="Permanent link">2</a><signature id="System.attach+2">

```lx
System.attach(entity : Entity, data : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="detach(entity : Entity, data : Data)"></endpoint>
<h4 class="signature_head">System.detach</h4><a class="signature-arity" href="#System.detach+2" title="Permanent link">2</a><signature id="System.detach+2">

```lx
System.detach(entity : Entity, data : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="get_attenuation(attn : SoundAttenuation)"></endpoint>
<h4 class="signature_head">System.get_attenuation</h4><a class="signature-arity" href="#System.get_attenuation" title="Permanent link">1</a><signature id="System.get_attenuation">

```lx
System.get_attenuation(attn : SoundAttenuation) : AudioAttenuation
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="tick(delta : Num)"></endpoint>
<h4 class="signature_head">System.tick</h4><a class="signature-arity" href="#System.tick" title="Permanent link">1</a><signature id="System.tick">

```lx
System.tick(delta : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="draw(entity : Entity, data : Data)"></endpoint>
<h4 class="signature_head">System.draw</h4><a class="signature-arity" href="#System.draw+2" title="Permanent link">2</a><signature id="System.draw+2">

```lx
System.draw(entity : Entity, data : Data) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
<h4 class="signature_head">System.editor_change</h4><a class="signature-arity" href="#System.editor_change+2" title="Permanent link">2</a><signature id="System.editor_change+2">

```lx
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sound.modifier" class="System" signature="editor_tick(delta : Num)"></endpoint>
<h4 class="signature_head">System.editor_tick</h4><a class="signature-arity" href="#System.editor_tick" title="Permanent link">1</a><signature id="System.editor_tick">

```lx
System.editor_tick(delta : Num) : unknown
```
</signature>

> no docs found   

