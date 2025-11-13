---
title: "luxe: system/anim.modifier"
description: API version 2025.11.1
---
## `luxe: system/anim.modifier{:lx}` module

- [Anim](#anim)   
- [AnimEvent](#animevent)   
- [AnimInterpolation](#animinterpolation)   
- [AnimInterval](#animinterval)   
- [AnimState](#animstate)   
- [AnimUI](#animui)   
- [Data](#data)   
- [System](#system)   

---


### Anim
`import "luxe: system/anim.modifier" for Anim{:lx}`
> `Anim` is an animation player attached to an entity.
> 
> It plays animations from animation assets or ones created from code. 
> Animations can target the entity `Anim` is attached to, 
> but can target any entity. 
> For example, a level cutscene could be played back from one entity, 
> but it drives several other entities. From assets like scenes and prototypes, 
> `Anim` provides an autoplay list, for playing when loaded. 
> 
> You can play multiple animations at the same time, 
> for example, the player might have a _walk_ animation playing 
> and you play a _glowing_ animation on top. 
> 
> `Anim` supports curve, linear and discrete driven animations 
> and is expanded on by World Systems that provide animation tracks.

- [create](#Anim.create)(**entity**: `Entity{:lx}`)
- [destroy](#Anim.destroy)(**entity**: `Entity{:lx}`)
- [has](#Anim.has)(**entity**: `Entity{:lx}`)
- [valid](#Anim.valid+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [get_source_id](#Anim.get_source_id+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [get_state](#Anim.get_state+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [get_active_anims](#Anim.get_active_anims)(**entity**: `Entity{:lx}`)
- [play](#Anim.play+3)(**entity**: `Entity{:lx}`, **anim_lx**: `ID{:lx}`, **time_offset**: `Num{:lx}`)
- [play_block](#Anim.play_block+5)(**entity**: `Entity{:lx}`, **anim_block**: `Block{:lx}`, **anim_instance**: `BlockInstance{:lx}`, **time_offset**: `Num{:lx}`, **force_parse**: `Bool{:lx}`)
- [blend](#Anim.blend+4)(**entity**: `Entity{:lx}`, **anim_lx**: `ID{:lx}`, **blend_time**: `Num{:lx}`, **time_offset**: `Num{:lx}`)
- [play](#Anim.play+2)(**entity**: `Entity{:lx}`, **anim_lx**: `ID{:lx}`)
- [blend](#Anim.blend+3)(**entity**: `Entity{:lx}`, **anim_lx**: `ID{:lx}`, **blend_time**: `Num{:lx}`)
- [play_only](#Anim.play_only+3)(**entity**: `Entity{:lx}`, **anim_lx**: `ID{:lx}`, **time_offset**: `Num{:lx}`)
- [play_only](#Anim.play_only+2)(**entity**: `Entity{:lx}`, **anim_lx**: `ID{:lx}`)
- [stop](#Anim.stop+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **reset**: `Bool{:lx}`)
- [stop](#Anim.stop+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [stop_all](#Anim.stop_all+2)(**entity**: `Entity{:lx}`, **reset**: `Bool{:lx}`)
- [stop_all](#Anim.stop_all)(**entity**: `Entity{:lx}`)
- [create_track](#Anim.create_track+4)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **track_id**: `Any{:lx}`, **track_type**: `Any{:lx}`)
- [has_track](#Anim.has_track+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **track_id**: `Any{:lx}`)
- [track_set_range](#Anim.track_set_range+5)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **track_id**: `Any{:lx}`, **min**: `Any{:lx}`, **max**: `Any{:lx}`)
- [track_get_range](#Anim.track_get_range+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **track_id**: `Any{:lx}`)
- [track_set](#Anim.track_set+5)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **track_id**: `Any{:lx}`, **property**: `Any{:lx}`, **value**: `Any{:lx}`)
- [track_set_channel](#Anim.track_set_channel+7)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **track_id**: `Any{:lx}`, **channel_id**: `Any{:lx}`, **channel_idx**: `Any{:lx}`, **interp**: `Any{:lx}`, **keys**: `Any{:lx}`)
- [set_play_count](#Anim.set_play_count+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **play_count**: `Num{:lx}`)
- [set_rate](#Anim.set_rate+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **rate**: `Num{:lx}`)
- [set_start](#Anim.set_start+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **start**: `Num{:lx}`)
- [set_end](#Anim.set_end+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **end**: `Num{:lx}`)
- [set_interval_time](#Anim.set_interval_time+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **time**: `Num{:lx}`)
- [set_persist](#Anim.set_persist+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **persist**: `Bool{:lx}`)
- [get_play_count](#Anim.get_play_count+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [get_rate](#Anim.get_rate+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [get_duration](#Anim.get_duration+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [get_start](#Anim.get_start+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [get_end](#Anim.get_end+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [get_interval_time](#Anim.get_interval_time+2)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`)
- [on_event](#Anim.on_event+3)(**entity**: `Entity{:lx}`, **anim**: `Anim{:lx}`, **fn**: `Fn{:lx}`)


---

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="create(entity : Entity)"></endpoint>
<h4 class="signature_head">Anim.create</h4><a class="signature-arity" href="#Anim.create" title="Permanent link">1</a><signature id="Anim.create">

```lx
Anim.create(entity : Entity) : unknown
```
</signature>

> Attach an `Anim` modifier to `entity`.
> 
>   ```js
>   var entity = Entity.create(world)
>   Anim.create(entity)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="destroy(entity : Entity)"></endpoint>
<h4 class="signature_head">Anim.destroy</h4><a class="signature-arity" href="#Anim.destroy" title="Permanent link">1</a><signature id="Anim.destroy">

```lx
Anim.destroy(entity : Entity) : None
```
</signature>

> Detach and destroy the `Anim` attached to `entity`.
> 
>   ```js
>   Anim.destroy(entity)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="has(entity : Entity)"></endpoint>
<h4 class="signature_head">Anim.has</h4><a class="signature-arity" href="#Anim.has" title="Permanent link">1</a><signature id="Anim.has">

```lx
Anim.has(entity : Entity) : Bool
```
</signature>

> Returns whether `entity` has an `Anim` modifier attached. 
> 
>   ```js
>   if(Anim.has(entity)) {
>     Log.print("found anim")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="valid(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.valid</h4><a class="signature-arity" href="#Anim.valid+2" title="Permanent link">2</a><signature id="Anim.valid+2">

```lx
Anim.valid(entity : Entity, anim : Anim) : Bool
```
</signature>

> Returns whether the `Anim` instance is valid for the `Anim` attached to `entity`. 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   if(!Anim.valid(entity, anim)) {
>     Log.print("oh no!")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_source_id(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.get_source_id</h4><a class="signature-arity" href="#Anim.get_source_id+2" title="Permanent link">2</a><signature id="Anim.get_source_id+2">

```lx
Anim.get_source_id(entity : Entity, anim : Anim) : ID
```
</signature>

> Returns the `ID` of the animation asset that the `Anim` instance was played from, 
> if known, by asking the `Anim` attached to `entity`. Returns `null` if not. 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   var source_id = Anim.get_source_id(entity, anim)
>   Log.print(Strings.get(source_id)) //expect: "player/idle"
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_state(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.get_state</h4><a class="signature-arity" href="#Anim.get_state+2" title="Permanent link">2</a><signature id="Anim.get_state+2">

```lx
Anim.get_state(entity : Entity, anim : Anim) : AnimState
```
</signature>

> Return the animation state of the `Anim` instance, by asking the `Anim` attached to `entity`. 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.playing) {
>     Anim.stop(entity, anim)
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_active_anims(entity : Entity)"></endpoint>
<h4 class="signature_head">Anim.get_active_anims</h4><a class="signature-arity" href="#Anim.get_active_anims" title="Permanent link">1</a><signature id="Anim.get_active_anims">

```lx
Anim.get_active_anims(entity : Entity) : List
```
</signature>

> Returns a list of `Anim` instances that are active on the `Anim` attached to `entity`. 
> 
>   ```js
>   var active = Anim.get_active_anims(entity)
>   for(anim in active) {
>     var state = Anim.get_state(entity, anim)
>     Log.print(AnimState.name(state));
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="play(entity : Entity, anim_lx : ID, time_offset : Num)"></endpoint>
<h4 class="signature_head">Anim.play</h4><a class="signature-arity" href="#Anim.play+3" title="Permanent link">3</a><signature id="Anim.play+3">

```lx
Anim.play(entity : Entity, anim_lx : ID, time_offset : Num) : Anim
```
</signature>

> Play the animation asset `anim_lx` on the Anim attached to `entity`. 
> The `time_offset` is a time in seconds to begin playback from. 
> For example, you might pause an animation and hold onto the animation time when it was paused. 
> Then when resuming, you can play from the new time.
> Returns the newly started `Anim` instance.
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle", 0.5)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="play_block(entity : Entity, anim_block : Block, anim_instance : BlockInstance, time_offset : Num, force_parse : Bool)"></endpoint>
<h4 class="signature_head">Anim.play_block</h4><a class="signature-arity" href="#Anim.play_block+5" title="Permanent link">5</a><signature id="Anim.play_block+5">

```lx
Anim.play_block(entity : Entity, anim_block : Block, anim_instance : BlockInstance, time_offset : Num, force_parse : Bool) : Anim
```
</signature>

> Play the animation stored in a block instance on the Anim attached to `entity`. 
> This way you can play animations that are not in the asset system.   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="blend(entity : Entity, anim_lx : ID, blend_time : Num, time_offset : Num)"></endpoint>
<h4 class="signature_head">Anim.blend</h4><a class="signature-arity" href="#Anim.blend+4" title="Permanent link">4</a><signature id="Anim.blend+4">

```lx
Anim.blend(entity : Entity, anim_lx : ID, blend_time : Num, time_offset : Num) : Anim
```
</signature>

> Play the animation asset `anim_lx` on the `Anim` attached to `entity` with a blend fade time. 
> The `time_offset` is a time in seconds to begin playback from. 
> The `blend_time` is handled by some tracks, not all.
> Returns the newly started `Anim` instance.
> 
>   ```js
>   //fade in the animation over 0.6 seconds
>   var anim = Anim.blend(entity, "player/idle", 0.6)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="play(entity : Entity, anim_lx : ID)"></endpoint>
<h4 class="signature_head">Anim.play</h4><a class="signature-arity" href="#Anim.play+2" title="Permanent link">2</a><signature id="Anim.play+2">

```lx
Anim.play(entity : Entity, anim_lx : ID) : Anim
```
</signature>

> Play the animation asset `anim_lx` on the `Anim` attached to `entity`. 
> Plays from the beginning.
> Returns the newly started `Anim` instance.
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="blend(entity : Entity, anim_lx : ID, blend_time : Num)"></endpoint>
<h4 class="signature_head">Anim.blend</h4><a class="signature-arity" href="#Anim.blend+3" title="Permanent link">3</a><signature id="Anim.blend+3">

```lx
Anim.blend(entity : Entity, anim_lx : ID, blend_time : Num) : Anim
```
</signature>

> Play the animation asset `anim_lx` on the `Anim` attached to `entity` with a blend fade time. 
> Plays from the beginning. Blend time is handled by some tracks, not all.
> Returns the newly started `Anim` instance.
> 
>   ```js
>   //fade in the animation over 0.6 seconds
>   var anim = Anim.blend(entity, "player/idle", 0.6)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="play_only(entity : Entity, anim_lx : ID, time_offset : Num)"></endpoint>
<h4 class="signature_head">Anim.play_only</h4><a class="signature-arity" href="#Anim.play_only+3" title="Permanent link">3</a><signature id="Anim.play_only+3">

```lx
Anim.play_only(entity : Entity, anim_lx : ID, time_offset : Num) : Anim
```
</signature>

> Play the animation asset `anim_lx` on the `Anim` attached to `entity`, stopping all other active anims, 
> and only playing this one. The `time_offset` is a time in seconds to begin playback from. 
> Returns the newly started `Anim` instance.
> 
>   ```js
>   var anim = Anim.play_only(entity, "player/idle", 0.5)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="play_only(entity : Entity, anim_lx : ID)"></endpoint>
<h4 class="signature_head">Anim.play_only</h4><a class="signature-arity" href="#Anim.play_only+2" title="Permanent link">2</a><signature id="Anim.play_only+2">

```lx
Anim.play_only(entity : Entity, anim_lx : ID) : Anim
```
</signature>

> Play the animation asset `anim_lx` on the `Anim` attached to `entity`, stopping all other active anims, 
> and only playing this one.
> Returns the newly started `Anim` instance.
> 
>   ```js
>   var anim = Anim.play_only(entity, "player/idle")
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="stop(entity : Entity, anim : Anim, reset : Bool)"></endpoint>
<h4 class="signature_head">Anim.stop</h4><a class="signature-arity" href="#Anim.stop+3" title="Permanent link">3</a><signature id="Anim.stop+3">

```lx
Anim.stop(entity : Entity, anim : Anim, reset : Bool) : None
```
</signature>

> Stop the `Anim` instance if playing on the `Anim` attached to `entity`.
> 
> If `reset` is `true`, the state of anything that was being animated by this `Anim` instance, 
> will be reset to what it was before it was played. For example, if your animation is changing the transform position, 
> it will revert back to the position at the time the animation was played. 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.stop(entity, anim, true)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="stop(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.stop</h4><a class="signature-arity" href="#Anim.stop+2" title="Permanent link">2</a><signature id="Anim.stop+2">

```lx
Anim.stop(entity : Entity, anim : Anim) : None
```
</signature>

> Stop the `Anim` instance if playing on the `Anim` attached to `entity`. 
> State is not reset (see `Anim.stop(entity, anim, reset)`). 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.stop(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="stop_all(entity : Entity, reset : Bool)"></endpoint>
<h4 class="signature_head">Anim.stop_all</h4><a class="signature-arity" href="#Anim.stop_all+2" title="Permanent link">2</a><signature id="Anim.stop_all+2">

```lx
Anim.stop_all(entity : Entity, reset : Bool) : None
```
</signature>

> Stop all active `Anim` instances playing on the `Anim` attached to `entity`. 
> If `reset` is `true`, state will be reset to the state before the animation started (see `Anim.stop(entity, anim, reset)`). 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.stop_all(entity, true)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="stop_all(entity : Entity)"></endpoint>
<h4 class="signature_head">Anim.stop_all</h4><a class="signature-arity" href="#Anim.stop_all" title="Permanent link">1</a><signature id="Anim.stop_all">

```lx
Anim.stop_all(entity : Entity) : None
```
</signature>

> Stop all active `Anim` instances playing on the `Anim` attached to `entity`. 
> State is not reset (see `Anim.stop(entity, anim, reset)`). 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.stop_all(entity)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="create_track(entity : Entity, anim : Anim, track_id : Any, track_type : Any)"></endpoint>
<h4 class="signature_head">Anim.create_track</h4><a class="signature-arity" href="#Anim.create_track+4" title="Permanent link">4</a><signature id="Anim.create_track+4">

```lx
Anim.create_track(entity : Entity, anim : Anim, track_id : Any, track_type : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="has_track(entity : Entity, anim : Anim, track_id : Any)"></endpoint>
<h4 class="signature_head">Anim.has_track</h4><a class="signature-arity" href="#Anim.has_track+3" title="Permanent link">3</a><signature id="Anim.has_track+3">

```lx
Anim.has_track(entity : Entity, anim : Anim, track_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="track_set_range(entity : Entity, anim : Anim, track_id : Any, min : Any, max : Any)"></endpoint>
<h4 class="signature_head">Anim.track_set_range</h4><a class="signature-arity" href="#Anim.track_set_range+5" title="Permanent link">5</a><signature id="Anim.track_set_range+5">

```lx
Anim.track_set_range(entity : Entity, anim : Anim, track_id : Any, min : Any, max : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="track_get_range(entity : Entity, anim : Anim, track_id : Any)"></endpoint>
<h4 class="signature_head">Anim.track_get_range</h4><a class="signature-arity" href="#Anim.track_get_range+3" title="Permanent link">3</a><signature id="Anim.track_get_range+3">

```lx
Anim.track_get_range(entity : Entity, anim : Anim, track_id : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="track_set(entity : Entity, anim : Anim, track_id : Any, property : Any, value : Any)"></endpoint>
<h4 class="signature_head">Anim.track_set</h4><a class="signature-arity" href="#Anim.track_set+5" title="Permanent link">5</a><signature id="Anim.track_set+5">

```lx
Anim.track_set(entity : Entity, anim : Anim, track_id : Any, property : Any, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="track_set_channel(entity : Entity, anim : Anim, track_id : Any, channel_id : Any, channel_idx : Any, interp : Any, keys : Any)"></endpoint>
<h4 class="signature_head">Anim.track_set_channel</h4><a class="signature-arity" href="#Anim.track_set_channel+7" title="Permanent link">7</a><signature id="Anim.track_set_channel+7">

```lx
Anim.track_set_channel(entity : Entity, anim : Anim, track_id : Any, channel_id : Any, channel_idx : Any, interp : Any, keys : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_play_count(entity : Entity, anim : Anim, play_count : Num)"></endpoint>
<h4 class="signature_head">Anim.set_play_count</h4><a class="signature-arity" href="#Anim.set_play_count+3" title="Permanent link">3</a><signature id="Anim.set_play_count+3">

```lx
Anim.set_play_count(entity : Entity, anim : Anim, play_count : Num) : None
```
</signature>

> Set the amount of times to play the `Anim` instance on the `Anim` attached to `entity`. 
> The `play_count` value can be `0`, which will loop forever.
> 
>   ```js
>   //play 3 times and then end
>   var anim = Anim.play(entity, "player/idle")
>   Anim.set_play_count(entity, anim, 3)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_rate(entity : Entity, anim : Anim, rate : Num)"></endpoint>
<h4 class="signature_head">Anim.set_rate</h4><a class="signature-arity" href="#Anim.set_rate+3" title="Permanent link">3</a><signature id="Anim.set_rate+3">

```lx
Anim.set_rate(entity : Entity, anim : Anim, rate : Num) : None
```
</signature>

> Set the playback rate of the `Anim` instance on the `Anim` attached to `entity`. 
> The rate of `1` is the default speed. `0.5` is half speed, and `2` is twice as fast. 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.set_rate(entity, anim, 0.5)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_start(entity : Entity, anim : Anim, start : Num)"></endpoint>
<h4 class="signature_head">Anim.set_start</h4><a class="signature-arity" href="#Anim.set_start+3" title="Permanent link">3</a><signature id="Anim.set_start+3">

```lx
Anim.set_start(entity : Entity, anim : Anim, start : Num) : None
```
</signature>

> Set the start marker of the `Anim` instance on the `Anim` attached to `entity`. *note* This API is WIP. 
> 
>   ```js
>   Anim.set_start(entity, anim, 0)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_end(entity : Entity, anim : Anim, end : Num)"></endpoint>
<h4 class="signature_head">Anim.set_end</h4><a class="signature-arity" href="#Anim.set_end+3" title="Permanent link">3</a><signature id="Anim.set_end+3">

```lx
Anim.set_end(entity : Entity, anim : Anim, end : Num) : None
```
</signature>

> Set the end marker of the `Anim` instance on the `Anim` attached to `entity`. *note* This API is WIP. 
> 
>   ```js
>   Anim.set_end(entity, anim, 1)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_interval_time(entity : Entity, anim : Anim, time : Num)"></endpoint>
<h4 class="signature_head">Anim.set_interval_time</h4><a class="signature-arity" href="#Anim.set_interval_time+3" title="Permanent link">3</a><signature id="Anim.set_interval_time+3">

```lx
Anim.set_interval_time(entity : Entity, anim : Anim, time : Num) : None
```
</signature>

> Set the current playback time of the `Anim` instance on the `Anim` attached to `entity`. *note* This API is WIP. 
> 
>   ```js
>   Anim.set_interval_time(entity, anim, 0.5)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_persist(entity : Entity, anim : Anim, persist : Bool)"></endpoint>
<h4 class="signature_head">Anim.set_persist</h4><a class="signature-arity" href="#Anim.set_persist+3" title="Permanent link">3</a><signature id="Anim.set_persist+3">

```lx
Anim.set_persist(entity : Entity, anim : Anim, persist : Bool) : None
```
</signature>

> Set an `Anim` instance to persist after it has ended, 
> making it stick around until stopped manually or the `Anim` modifier it is on is destroyed.
> Only useful for niche cases like in the editor.   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_play_count(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.get_play_count</h4><a class="signature-arity" href="#Anim.get_play_count+2" title="Permanent link">2</a><signature id="Anim.get_play_count+2">

```lx
Anim.get_play_count(entity : Entity, anim : Anim) : Num
```
</signature>

> Return the play count of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_rate(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.get_rate</h4><a class="signature-arity" href="#Anim.get_rate+2" title="Permanent link">2</a><signature id="Anim.get_rate+2">

```lx
Anim.get_rate(entity : Entity, anim : Anim) : Num
```
</signature>

> Return the rate of playback of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_duration(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.get_duration</h4><a class="signature-arity" href="#Anim.get_duration+2" title="Permanent link">2</a><signature id="Anim.get_duration+2">

```lx
Anim.get_duration(entity : Entity, anim : Anim) : Num
```
</signature>

> Return the duration of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_start(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.get_start</h4><a class="signature-arity" href="#Anim.get_start+2" title="Permanent link">2</a><signature id="Anim.get_start+2">

```lx
Anim.get_start(entity : Entity, anim : Anim) : Num
```
</signature>

> Return the start marker of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_end(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.get_end</h4><a class="signature-arity" href="#Anim.get_end+2" title="Permanent link">2</a><signature id="Anim.get_end+2">

```lx
Anim.get_end(entity : Entity, anim : Anim) : Num
```
</signature>

> Return the end marker of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_interval_time(entity : Entity, anim : Anim)"></endpoint>
<h4 class="signature_head">Anim.get_interval_time</h4><a class="signature-arity" href="#Anim.get_interval_time+2" title="Permanent link">2</a><signature id="Anim.get_interval_time+2">

```lx
Anim.get_interval_time(entity : Entity, anim : Anim) : Num
```
</signature>

> Return the current playback time of the `Anim` instance on the `Anim` attached to entity. *note* This API is WIP. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="on_event(entity : Entity, anim : Anim, fn : Fn)"></endpoint>
<h4 class="signature_head">Anim.on_event</h4><a class="signature-arity" href="#Anim.on_event+3" title="Permanent link">3</a><signature id="Anim.on_event+3">

```lx
Anim.on_event(entity : Entity, anim : Anim, fn : Fn) : None
```
</signature>

> no docs found   


### AnimEvent
`import "luxe: system/anim.modifier" for AnimEvent{:lx}`
> no docs found

- [start](#AnimEvent.start)
- [tick](#AnimEvent.tick)
- [complete](#AnimEvent.complete)
- [name](#AnimEvent.name)(**value**: `AnimEvent{:lx}`)


---

<endpoint module="luxe: system/anim.modifier" class="AnimEvent" signature="start"></endpoint>
<h4 class="signature_head">AnimEvent.start</h4><a class="signature-arity" href="#AnimEvent.start" title="Permanent link">1</a><signature id="AnimEvent.start">

```lx
AnimEvent.start : unknown
```
</signature>

> An event fired when an animation started playing.   

<endpoint module="luxe: system/anim.modifier" class="AnimEvent" signature="tick"></endpoint>
<h4 class="signature_head">AnimEvent.tick</h4><a class="signature-arity" href="#AnimEvent.tick" title="Permanent link">1</a><signature id="AnimEvent.tick">

```lx
AnimEvent.tick : unknown
```
</signature>

> An event fired when an animation is updated, but only if the track is set to emit the event.   

<endpoint module="luxe: system/anim.modifier" class="AnimEvent" signature="complete"></endpoint>
<h4 class="signature_head">AnimEvent.complete</h4><a class="signature-arity" href="#AnimEvent.complete" title="Permanent link">1</a><signature id="AnimEvent.complete">

```lx
AnimEvent.complete : unknown
```
</signature>

> An event fired when an animation is stopped or done playing.   

<endpoint module="luxe: system/anim.modifier" class="AnimEvent" signature="name(value : AnimEvent)"></endpoint>
<h4 class="signature_head">AnimEvent.name</h4><a class="signature-arity" href="#AnimEvent.name" title="Permanent link">1</a><signature id="AnimEvent.name">

```lx
AnimEvent.name(value : AnimEvent) : unknown
```
</signature>

> no docs found   


### AnimInterpolation
`import "luxe: system/anim.modifier" for AnimInterpolation{:lx}`
> An enum for types of interpolation in animation tracks.

- [unknown](#AnimInterpolation.unknown)
- [curve](#AnimInterpolation.curve)
- [linear](#AnimInterpolation.linear)
- [discrete](#AnimInterpolation.discrete)
- [name](#AnimInterpolation.name)(**value**: `AnimInterpolation{:lx}`)
- [from_string](#AnimInterpolation.from_string)(**value**: `String{:lx}`)


---

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="unknown"></endpoint>
<h4 class="signature_head">AnimInterpolation.unknown</h4><a class="signature-arity" href="#AnimInterpolation.unknown" title="Permanent link">1</a><signature id="AnimInterpolation.unknown">

```lx
AnimInterpolation.unknown : unknown
```
</signature>

> An invalid or unknown value.
> 
>   ```js
>   if(value == AnimInterpolation.unknown) {
>     Log.print("unknown interpolation type!")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="curve"></endpoint>
<h4 class="signature_head">AnimInterpolation.curve</h4><a class="signature-arity" href="#AnimInterpolation.curve" title="Permanent link">1</a><signature id="AnimInterpolation.curve">

```lx
AnimInterpolation.curve : unknown
```
</signature>

> The animation values between keys will be interpolated 
> according to the curve defined by the keys themselves. 
> 
>   ```js
>   if(value == AnimInterpolation.curve) {
>     Log.print("curve")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="linear"></endpoint>
<h4 class="signature_head">AnimInterpolation.linear</h4><a class="signature-arity" href="#AnimInterpolation.linear" title="Permanent link">1</a><signature id="AnimInterpolation.linear">

```lx
AnimInterpolation.linear : unknown
```
</signature>

> The animation values between keys will be interpolated linearly. 
> For example if your keys were `{ time=0 value=0 }` and `{ time=1 value=4 }`, 
> at the time of `0.5` the value would be `2`, half of the next key. 
> 
>   ```js
>   if(value == AnimInterpolation.linear) {
>     Log.print("linear")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="discrete"></endpoint>
<h4 class="signature_head">AnimInterpolation.discrete</h4><a class="signature-arity" href="#AnimInterpolation.discrete" title="Permanent link">1</a><signature id="AnimInterpolation.discrete">

```lx
AnimInterpolation.discrete : unknown
```
</signature>

> The animation values between keys would not be interpolated, 
> they would jump from one value to the next. 
> For example if your keys were `{ time=0 value=0 }` and `{ time=1 value=3 }`, 
> with discrete the value at time `0.5` is still `0` 
> (instead of `1.5` with linear). 
> It will only change to `3` when the next key is reached. 
> 
>   ```js
>   if(value == AnimInterpolation.discrete) {
>     Log.print("discrete")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="name(value : AnimInterpolation)"></endpoint>
<h4 class="signature_head">AnimInterpolation.name</h4><a class="signature-arity" href="#AnimInterpolation.name" title="Permanent link">1</a><signature id="AnimInterpolation.name">

```lx
AnimInterpolation.name(value : AnimInterpolation) : String
```
</signature>

> Convert an `AnimInterpolation` value to a string. 
> 
>   ```js
>   var type = AnimInterpolation.linear
>   var name = AnimInterpolation.name(type)
>   Log.print("type is %(name)") //expect: "linear"
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="from_string(value : String)"></endpoint>
<h4 class="signature_head">AnimInterpolation.from_string</h4><a class="signature-arity" href="#AnimInterpolation.from_string" title="Permanent link">1</a><signature id="AnimInterpolation.from_string">

```lx
AnimInterpolation.from_string(value : String) : AnimInterpolation
```
</signature>

> Get the `AnimInterpolation` value to a name.
> 
>   ```js
>   var type = AnimInterpolation.from_string("discrete")
>   Log.print("discrete is value %(type)") //expect: "3", the internal value
>   ```   


### AnimInterval
`import "luxe: system/anim.modifier" for AnimInterval{:lx}`
> no docs found

- [create](#AnimInterval.create+3)(**world**: `Any{:lx}`, **duration**: `Any{:lx}`, **rate**: `Any{:lx}`)
- [create](#AnimInterval.create+2)(**world**: `Any{:lx}`, **duration**: `Any{:lx}`)
- [time](#AnimInterval.time+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)
- [set_time](#AnimInterval.set_time+3)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`, **time**: `Any{:lx}`)
- [set_now](#AnimInterval.set_now+3)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`, **offset**: `Any{:lx}`)
- [set_now](#AnimInterval.set_now+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)
- [set_play_count](#AnimInterval.set_play_count+3)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`, **count**: `Any{:lx}`)
- [set_clock](#AnimInterval.set_clock+3)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`, **clock**: `Any{:lx}`)
- [set_rate](#AnimInterval.set_rate+3)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`, **rate**: `Any{:lx}`)
- [set_duration](#AnimInterval.set_duration+3)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`, **duration**: `Any{:lx}`)
- [set_start](#AnimInterval.set_start+3)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`, **start**: `Any{:lx}`)
- [set_end](#AnimInterval.set_end+3)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`, **end**: `Any{:lx}`)
- [get_now](#AnimInterval.get_now+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)
- [get_play_count](#AnimInterval.get_play_count+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)
- [get_clock](#AnimInterval.get_clock+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)
- [get_rate](#AnimInterval.get_rate+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)
- [get_duration](#AnimInterval.get_duration+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)
- [get_start](#AnimInterval.get_start+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)
- [get_end](#AnimInterval.get_end+2)(**world**: `Any{:lx}`, **anim**: `Any{:lx}`)


---

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="create(world : Any, duration : Any, rate : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.create</h4><a class="signature-arity" href="#AnimInterval.create+3" title="Permanent link">3</a><signature id="AnimInterval.create+3">

```lx
AnimInterval.create(world : Any, duration : Any, rate : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="create(world : Any, duration : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.create</h4><a class="signature-arity" href="#AnimInterval.create+2" title="Permanent link">2</a><signature id="AnimInterval.create+2">

```lx
AnimInterval.create(world : Any, duration : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="time(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.time</h4><a class="signature-arity" href="#AnimInterval.time+2" title="Permanent link">2</a><signature id="AnimInterval.time+2">

```lx
AnimInterval.time(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_time(world : Any, anim : Any, time : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_time</h4><a class="signature-arity" href="#AnimInterval.set_time+3" title="Permanent link">3</a><signature id="AnimInterval.set_time+3">

```lx
AnimInterval.set_time(world : Any, anim : Any, time : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_now(world : Any, anim : Any, offset : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_now</h4><a class="signature-arity" href="#AnimInterval.set_now+3" title="Permanent link">3</a><signature id="AnimInterval.set_now+3">

```lx
AnimInterval.set_now(world : Any, anim : Any, offset : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_now(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_now</h4><a class="signature-arity" href="#AnimInterval.set_now+2" title="Permanent link">2</a><signature id="AnimInterval.set_now+2">

```lx
AnimInterval.set_now(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_play_count(world : Any, anim : Any, count : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_play_count</h4><a class="signature-arity" href="#AnimInterval.set_play_count+3" title="Permanent link">3</a><signature id="AnimInterval.set_play_count+3">

```lx
AnimInterval.set_play_count(world : Any, anim : Any, count : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_clock(world : Any, anim : Any, clock : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_clock</h4><a class="signature-arity" href="#AnimInterval.set_clock+3" title="Permanent link">3</a><signature id="AnimInterval.set_clock+3">

```lx
AnimInterval.set_clock(world : Any, anim : Any, clock : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_rate(world : Any, anim : Any, rate : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_rate</h4><a class="signature-arity" href="#AnimInterval.set_rate+3" title="Permanent link">3</a><signature id="AnimInterval.set_rate+3">

```lx
AnimInterval.set_rate(world : Any, anim : Any, rate : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_duration(world : Any, anim : Any, duration : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_duration</h4><a class="signature-arity" href="#AnimInterval.set_duration+3" title="Permanent link">3</a><signature id="AnimInterval.set_duration+3">

```lx
AnimInterval.set_duration(world : Any, anim : Any, duration : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_start(world : Any, anim : Any, start : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_start</h4><a class="signature-arity" href="#AnimInterval.set_start+3" title="Permanent link">3</a><signature id="AnimInterval.set_start+3">

```lx
AnimInterval.set_start(world : Any, anim : Any, start : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_end(world : Any, anim : Any, end : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.set_end</h4><a class="signature-arity" href="#AnimInterval.set_end+3" title="Permanent link">3</a><signature id="AnimInterval.set_end+3">

```lx
AnimInterval.set_end(world : Any, anim : Any, end : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_now(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.get_now</h4><a class="signature-arity" href="#AnimInterval.get_now+2" title="Permanent link">2</a><signature id="AnimInterval.get_now+2">

```lx
AnimInterval.get_now(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_play_count(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.get_play_count</h4><a class="signature-arity" href="#AnimInterval.get_play_count+2" title="Permanent link">2</a><signature id="AnimInterval.get_play_count+2">

```lx
AnimInterval.get_play_count(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_clock(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.get_clock</h4><a class="signature-arity" href="#AnimInterval.get_clock+2" title="Permanent link">2</a><signature id="AnimInterval.get_clock+2">

```lx
AnimInterval.get_clock(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_rate(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.get_rate</h4><a class="signature-arity" href="#AnimInterval.get_rate+2" title="Permanent link">2</a><signature id="AnimInterval.get_rate+2">

```lx
AnimInterval.get_rate(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_duration(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.get_duration</h4><a class="signature-arity" href="#AnimInterval.get_duration+2" title="Permanent link">2</a><signature id="AnimInterval.get_duration+2">

```lx
AnimInterval.get_duration(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_start(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.get_start</h4><a class="signature-arity" href="#AnimInterval.get_start+2" title="Permanent link">2</a><signature id="AnimInterval.get_start+2">

```lx
AnimInterval.get_start(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_end(world : Any, anim : Any)"></endpoint>
<h4 class="signature_head">AnimInterval.get_end</h4><a class="signature-arity" href="#AnimInterval.get_end+2" title="Permanent link">2</a><signature id="AnimInterval.get_end+2">

```lx
AnimInterval.get_end(world : Any, anim : Any) : unknown
```
</signature>

> no docs found   


### AnimState
`import "luxe: system/anim.modifier" for AnimState{:lx}`
> An enum for the state of an `Anim` instance.

- [inactive](#AnimState.inactive)
- [playing](#AnimState.playing)
- [ending](#AnimState.ending)
- [complete](#AnimState.complete)
- [name](#AnimState.name)(**value**: `Num{:lx}`)
- [from_string](#AnimState.from_string)(**value**: `String{:lx}`)


---

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="inactive"></endpoint>
<h4 class="signature_head">AnimState.inactive</h4><a class="signature-arity" href="#AnimState.inactive" title="Permanent link">1</a><signature id="AnimState.inactive">

```lx
AnimState.inactive : Num
```
</signature>

> The animation is inactive. _:todo: This may be obsolete_.
> 
>   ```js
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.inactive) {
>     Log.print("anim is inactive")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="playing"></endpoint>
<h4 class="signature_head">AnimState.playing</h4><a class="signature-arity" href="#AnimState.playing" title="Permanent link">1</a><signature id="AnimState.playing">

```lx
AnimState.playing : Num
```
</signature>

> The animation is active and is playing.
> 
>   ```js
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.playing) {
>     Log.print("anim is playing")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="ending"></endpoint>
<h4 class="signature_head">AnimState.ending</h4><a class="signature-arity" href="#AnimState.ending" title="Permanent link">1</a><signature id="AnimState.ending">

```lx
AnimState.ending : Num
```
</signature>

> The animation is ending, and will be marked complete next update.
> 
>   ```js
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.ending) {
>     Log.print("anim is ending")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="complete"></endpoint>
<h4 class="signature_head">AnimState.complete</h4><a class="signature-arity" href="#AnimState.complete" title="Permanent link">1</a><signature id="AnimState.complete">

```lx
AnimState.complete : Num
```
</signature>

> The animation has ended and is complete.
> 
>   ```js
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.complete) {
>     Log.print("anim is complete")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="name(value : Num)"></endpoint>
<h4 class="signature_head">AnimState.name</h4><a class="signature-arity" href="#AnimState.name" title="Permanent link">1</a><signature id="AnimState.name">

```lx
AnimState.name(value : Num) : String
```
</signature>

> Convert an `AnimState` value to a string.
> 
>   ```js
>   var type = AnimState.ending
>   var name = AnimState.name(type)
>   Log.print("type is %(name)") //expect: "ending"
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="from_string(value : String)"></endpoint>
<h4 class="signature_head">AnimState.from_string</h4><a class="signature-arity" href="#AnimState.from_string" title="Permanent link">1</a><signature id="AnimState.from_string">

```lx
AnimState.from_string(value : String) : Num
```
</signature>

> Convert a string to an enum value.
>         
>   ```js
>   var state = AnimState.from_string("ending")
>   var same = state == AnimState.ending //true
>   ```   


### AnimUI
`import "luxe: system/anim.modifier" for AnimUI{:lx}`
> no docs found

- [make_field](#AnimUI.make_field+4)(**state**: `UIBlockState{:lx}`, **name**: `String{:lx}`, **type**: `BlockFieldType{:lx}`, **view**: `ValueView{:lx}`)
- [refresh](#AnimUI.refresh+3)(**container**: `Any{:lx}`, **anim_block**: `Any{:lx}`, **state**: `Any{:lx}`)


---

<endpoint module="luxe: system/anim.modifier" class="AnimUI" signature="make_field(state : UIBlockState, name : String, type : BlockFieldType, view : ValueView)"></endpoint>
<h4 class="signature_head">AnimUI.make_field</h4><a class="signature-arity" href="#AnimUI.make_field+4" title="Permanent link">4</a><signature id="AnimUI.make_field+4">

```lx
AnimUI.make_field(state : UIBlockState, name : String, type : BlockFieldType, view : ValueView) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimUI" signature="refresh(container : Any, anim_block : Any, state : Any)"></endpoint>
<h4 class="signature_head">AnimUI.refresh</h4><a class="signature-arity" href="#AnimUI.refresh+3" title="Permanent link">3</a><signature id="AnimUI.refresh+3">

```lx
AnimUI.refresh(container : Any, anim_block : Any, state : Any) : unknown
```
</signature>

> no docs found   


### Data
`import "luxe: system/anim.modifier" for Data{:lx}`
> no docs found

- `var play : List = []{:lx}`
- `var internal : Object = null{:lx}`
- `var show_editor : Num = 0{:lx}`


---


### System
`import "luxe: system/anim.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)
- [editor_change](#System.editor_change+2)(**entity**: `Entity{:lx}`, **change**: `ModifierChange{:lx}`)


---

<endpoint module="luxe: system/anim.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

<endpoint module="luxe: system/anim.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
<h4 class="signature_head">System.editor_change</h4><a class="signature-arity" href="#System.editor_change+2" title="Permanent link">2</a><signature id="System.editor_change+2">

```lx
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
</signature>

> no docs found   

