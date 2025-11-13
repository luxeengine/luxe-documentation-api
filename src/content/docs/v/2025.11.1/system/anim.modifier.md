---
title: "luxe: system/anim.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/anim.modifier"
---
- [Anim](#anim)   
- [AnimEvent](#animevent)   
- [AnimInterpolation](#animinterpolation)   
- [AnimInterval](#animinterval)   
- [AnimState](#animstate)   
- [AnimUI](#animui)   
- [Data](#data)   
- [System](#system)   

---


## Anim
```wren
import "luxe: system/anim.modifier" for Anim
```
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

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="create(entity : Entity)"></endpoint>
### Anim.create(.)
```wren
Anim.create(entity : Entity) : unknown
```
> Attach an `Anim` modifier to `entity`.
> 
>   ```js
>   var entity = Entity.create(world)
>   Anim.create(entity)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="destroy(entity : Entity)"></endpoint>
### Anim.destroy(.)
```wren
Anim.destroy(entity : Entity) : None
```
> Detach and destroy the `Anim` attached to `entity`.
> 
>   ```js
>   Anim.destroy(entity)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="has(entity : Entity)"></endpoint>
### Anim.has(.)
```wren
Anim.has(entity : Entity) : Bool
```
> Returns whether `entity` has an `Anim` modifier attached. 
> 
>   ```js
>   if(Anim.has(entity)) {
>     Log.print("found anim")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="valid(entity : Entity, anim : Anim)"></endpoint>
### Anim.valid(..)
```wren
Anim.valid(entity : Entity, anim : Anim) : Bool
```
> Returns whether the `Anim` instance is valid for the `Anim` attached to `entity`. 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   if(!Anim.valid(entity, anim)) {
>     Log.print("oh no!")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_source_id(entity : Entity, anim : Anim)"></endpoint>
### Anim.get_source_id(..)
```wren
Anim.get_source_id(entity : Entity, anim : Anim) : ID
```
> Returns the `ID` of the animation asset that the `Anim` instance was played from, 
> if known, by asking the `Anim` attached to `entity`. Returns `null` if not. 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   var source_id = Anim.get_source_id(entity, anim)
>   Log.print(Strings.get(source_id)) //expect: "player/idle"
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_state(entity : Entity, anim : Anim)"></endpoint>
### Anim.get_state(..)
```wren
Anim.get_state(entity : Entity, anim : Anim) : AnimState
```
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
### Anim.get_active_anims(.)
```wren
Anim.get_active_anims(entity : Entity) : List
```
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
### Anim.play(...)
```wren
Anim.play(entity : Entity, anim_lx : ID, time_offset : Num) : Anim
```
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
### Anim.play_block(.....)
```wren
Anim.play_block(entity : Entity, anim_block : Block, anim_instance : BlockInstance, time_offset : Num, force_parse : Bool) : Anim
```
> Play the animation stored in a block instance on the Anim attached to `entity`. 
> This way you can play animations that are not in the asset system.   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="blend(entity : Entity, anim_lx : ID, blend_time : Num, time_offset : Num)"></endpoint>
### Anim.blend(....)
```wren
Anim.blend(entity : Entity, anim_lx : ID, blend_time : Num, time_offset : Num) : Anim
```
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
### Anim.play(..)
```wren
Anim.play(entity : Entity, anim_lx : ID) : Anim
```
> Play the animation asset `anim_lx` on the `Anim` attached to `entity`. 
> Plays from the beginning.
> Returns the newly started `Anim` instance.
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="blend(entity : Entity, anim_lx : ID, blend_time : Num)"></endpoint>
### Anim.blend(...)
```wren
Anim.blend(entity : Entity, anim_lx : ID, blend_time : Num) : Anim
```
> Play the animation asset `anim_lx` on the `Anim` attached to `entity` with a blend fade time. 
> Plays from the beginning. Blend time is handled by some tracks, not all.
> Returns the newly started `Anim` instance.
> 
>   ```js
>   //fade in the animation over 0.6 seconds
>   var anim = Anim.blend(entity, "player/idle", 0.6)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="play_only(entity : Entity, anim_lx : ID, time_offset : Num)"></endpoint>
### Anim.play_only(...)
```wren
Anim.play_only(entity : Entity, anim_lx : ID, time_offset : Num) : Anim
```
> Play the animation asset `anim_lx` on the `Anim` attached to `entity`, stopping all other active anims, 
> and only playing this one. The `time_offset` is a time in seconds to begin playback from. 
> Returns the newly started `Anim` instance.
> 
>   ```js
>   var anim = Anim.play_only(entity, "player/idle", 0.5)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="play_only(entity : Entity, anim_lx : ID)"></endpoint>
### Anim.play_only(..)
```wren
Anim.play_only(entity : Entity, anim_lx : ID) : Anim
```
> Play the animation asset `anim_lx` on the `Anim` attached to `entity`, stopping all other active anims, 
> and only playing this one.
> Returns the newly started `Anim` instance.
> 
>   ```js
>   var anim = Anim.play_only(entity, "player/idle")
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="stop(entity : Entity, anim : Anim, reset : Bool)"></endpoint>
### Anim.stop(...)
```wren
Anim.stop(entity : Entity, anim : Anim, reset : Bool) : None
```
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
### Anim.stop(..)
```wren
Anim.stop(entity : Entity, anim : Anim) : None
```
> Stop the `Anim` instance if playing on the `Anim` attached to `entity`. 
> State is not reset (see `Anim.stop(entity, anim, reset)`). 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.stop(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="stop_all(entity : Entity, reset : Bool)"></endpoint>
### Anim.stop_all(..)
```wren
Anim.stop_all(entity : Entity, reset : Bool) : None
```
> Stop all active `Anim` instances playing on the `Anim` attached to `entity`. 
> If `reset` is `true`, state will be reset to the state before the animation started (see `Anim.stop(entity, anim, reset)`). 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.stop_all(entity, true)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="stop_all(entity : Entity)"></endpoint>
### Anim.stop_all(.)
```wren
Anim.stop_all(entity : Entity) : None
```
> Stop all active `Anim` instances playing on the `Anim` attached to `entity`. 
> State is not reset (see `Anim.stop(entity, anim, reset)`). 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.stop_all(entity)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="create_track(entity : Entity, anim : Anim, track_id : Any, track_type : Any)"></endpoint>
### Anim.create_track(....)
```wren
Anim.create_track(entity : Entity, anim : Anim, track_id : Any, track_type : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="has_track(entity : Entity, anim : Anim, track_id : Any)"></endpoint>
### Anim.has_track(...)
```wren
Anim.has_track(entity : Entity, anim : Anim, track_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="track_set_range(entity : Entity, anim : Anim, track_id : Any, min : Any, max : Any)"></endpoint>
### Anim.track_set_range(.....)
```wren
Anim.track_set_range(entity : Entity, anim : Anim, track_id : Any, min : Any, max : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="track_get_range(entity : Entity, anim : Anim, track_id : Any)"></endpoint>
### Anim.track_get_range(...)
```wren
Anim.track_get_range(entity : Entity, anim : Anim, track_id : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="track_set(entity : Entity, anim : Anim, track_id : Any, property : Any, value : Any)"></endpoint>
### Anim.track_set(.....)
```wren
Anim.track_set(entity : Entity, anim : Anim, track_id : Any, property : Any, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="track_set_channel(entity : Entity, anim : Anim, track_id : Any, channel_id : Any, channel_idx : Any, interp : Any, keys : Any)"></endpoint>
### Anim.track_set_channel(.......)
```wren
Anim.track_set_channel(entity : Entity, anim : Anim, track_id : Any, channel_id : Any, channel_idx : Any, interp : Any, keys : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_play_count(entity : Entity, anim : Anim, play_count : Num)"></endpoint>
### Anim.set_play_count(...)
```wren
Anim.set_play_count(entity : Entity, anim : Anim, play_count : Num) : None
```
> Set the amount of times to play the `Anim` instance on the `Anim` attached to `entity`. 
> The `play_count` value can be `0`, which will loop forever.
> 
>   ```js
>   //play 3 times and then end
>   var anim = Anim.play(entity, "player/idle")
>   Anim.set_play_count(entity, anim, 3)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_rate(entity : Entity, anim : Anim, rate : Num)"></endpoint>
### Anim.set_rate(...)
```wren
Anim.set_rate(entity : Entity, anim : Anim, rate : Num) : None
```
> Set the playback rate of the `Anim` instance on the `Anim` attached to `entity`. 
> The rate of `1` is the default speed. `0.5` is half speed, and `2` is twice as fast. 
> 
>   ```js
>   var anim = Anim.play(entity, "player/idle")
>   Anim.set_rate(entity, anim, 0.5)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_start(entity : Entity, anim : Anim, start : Num)"></endpoint>
### Anim.set_start(...)
```wren
Anim.set_start(entity : Entity, anim : Anim, start : Num) : None
```
> Set the start marker of the `Anim` instance on the `Anim` attached to `entity`. *note* This API is WIP. 
> 
>   ```js
>   Anim.set_start(entity, anim, 0)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_end(entity : Entity, anim : Anim, end : Num)"></endpoint>
### Anim.set_end(...)
```wren
Anim.set_end(entity : Entity, anim : Anim, end : Num) : None
```
> Set the end marker of the `Anim` instance on the `Anim` attached to `entity`. *note* This API is WIP. 
> 
>   ```js
>   Anim.set_end(entity, anim, 1)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_interval_time(entity : Entity, anim : Anim, time : Num)"></endpoint>
### Anim.set_interval_time(...)
```wren
Anim.set_interval_time(entity : Entity, anim : Anim, time : Num) : None
```
> Set the current playback time of the `Anim` instance on the `Anim` attached to `entity`. *note* This API is WIP. 
> 
>   ```js
>   Anim.set_interval_time(entity, anim, 0.5)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="set_persist(entity : Entity, anim : Anim, persist : Bool)"></endpoint>
### Anim.set_persist(...)
```wren
Anim.set_persist(entity : Entity, anim : Anim, persist : Bool) : None
```
> Set an `Anim` instance to persist after it has ended, 
> making it stick around until stopped manually or the `Anim` modifier it is on is destroyed.
> Only useful for niche cases like in the editor.   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_play_count(entity : Entity, anim : Anim)"></endpoint>
### Anim.get_play_count(..)
```wren
Anim.get_play_count(entity : Entity, anim : Anim) : Num
```
> Return the play count of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_rate(entity : Entity, anim : Anim)"></endpoint>
### Anim.get_rate(..)
```wren
Anim.get_rate(entity : Entity, anim : Anim) : Num
```
> Return the rate of playback of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_duration(entity : Entity, anim : Anim)"></endpoint>
### Anim.get_duration(..)
```wren
Anim.get_duration(entity : Entity, anim : Anim) : Num
```
> Return the duration of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_start(entity : Entity, anim : Anim)"></endpoint>
### Anim.get_start(..)
```wren
Anim.get_start(entity : Entity, anim : Anim) : Num
```
> Return the start marker of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_end(entity : Entity, anim : Anim)"></endpoint>
### Anim.get_end(..)
```wren
Anim.get_end(entity : Entity, anim : Anim) : Num
```
> Return the end marker of the `Anim` instance on the `Anim` attached to `entity`. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="get_interval_time(entity : Entity, anim : Anim)"></endpoint>
### Anim.get_interval_time(..)
```wren
Anim.get_interval_time(entity : Entity, anim : Anim) : Num
```
> Return the current playback time of the `Anim` instance on the `Anim` attached to entity. *note* This API is WIP. 
> 
>   ```js
>   var play_count = Anim.get_play_count(entity, anim)
>   ```   

<endpoint module="luxe: system/anim.modifier" class="Anim" signature="on_event(entity : Entity, anim : Anim, fn : Fn)"></endpoint>
### Anim.on_event(...)
```wren
Anim.on_event(entity : Entity, anim : Anim, fn : Fn) : None
```
> no docs found   


## AnimEvent
```wren
import "luxe: system/anim.modifier" for AnimEvent
```
> no docs found

<endpoint module="luxe: system/anim.modifier" class="AnimEvent" signature="start"></endpoint>
### AnimEvent.start
```wren
AnimEvent.start : unknown
```
> An event fired when an animation started playing.   

<endpoint module="luxe: system/anim.modifier" class="AnimEvent" signature="tick"></endpoint>
### AnimEvent.tick
```wren
AnimEvent.tick : unknown
```
> An event fired when an animation is updated, but only if the track is set to emit the event.   

<endpoint module="luxe: system/anim.modifier" class="AnimEvent" signature="complete"></endpoint>
### AnimEvent.complete
```wren
AnimEvent.complete : unknown
```
> An event fired when an animation is stopped or done playing.   

<endpoint module="luxe: system/anim.modifier" class="AnimEvent" signature="name(value : AnimEvent)"></endpoint>
### AnimEvent.name(.)
```wren
AnimEvent.name(value : AnimEvent) : unknown
```
> no docs found   


## AnimInterpolation
```wren
import "luxe: system/anim.modifier" for AnimInterpolation
```
> An enum for types of interpolation in animation tracks.

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="unknown"></endpoint>
### AnimInterpolation.unknown
```wren
AnimInterpolation.unknown : unknown
```
> An invalid or unknown value.
> 
>   ```js
>   if(value == AnimInterpolation.unknown) {
>     Log.print("unknown interpolation type!")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="curve"></endpoint>
### AnimInterpolation.curve
```wren
AnimInterpolation.curve : unknown
```
> The animation values between keys will be interpolated 
> according to the curve defined by the keys themselves. 
> 
>   ```js
>   if(value == AnimInterpolation.curve) {
>     Log.print("curve")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="linear"></endpoint>
### AnimInterpolation.linear
```wren
AnimInterpolation.linear : unknown
```
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
### AnimInterpolation.discrete
```wren
AnimInterpolation.discrete : unknown
```
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
### AnimInterpolation.name(.)
```wren
AnimInterpolation.name(value : AnimInterpolation) : String
```
> Convert an `AnimInterpolation` value to a string. 
> 
>   ```js
>   var type = AnimInterpolation.linear
>   var name = AnimInterpolation.name(type)
>   Log.print("type is %(name)") //expect: "linear"
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimInterpolation" signature="from_string(value : String)"></endpoint>
### AnimInterpolation.from_string(.)
```wren
AnimInterpolation.from_string(value : String) : AnimInterpolation
```
> Get the `AnimInterpolation` value to a name.
> 
>   ```js
>   var type = AnimInterpolation.from_string("discrete")
>   Log.print("discrete is value %(type)") //expect: "3", the internal value
>   ```   


## AnimInterval
```wren
import "luxe: system/anim.modifier" for AnimInterval
```
> no docs found

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="create(world : Any, duration : Any, rate : Any)"></endpoint>
### AnimInterval.create(...)
```wren
AnimInterval.create(world : Any, duration : Any, rate : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="create(world : Any, duration : Any)"></endpoint>
### AnimInterval.create(..)
```wren
AnimInterval.create(world : Any, duration : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="time(world : Any, anim : Any)"></endpoint>
### AnimInterval.time(..)
```wren
AnimInterval.time(world : Any, anim : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_time(world : Any, anim : Any, time : Any)"></endpoint>
### AnimInterval.set_time(...)
```wren
AnimInterval.set_time(world : Any, anim : Any, time : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_now(world : Any, anim : Any, offset : Any)"></endpoint>
### AnimInterval.set_now(...)
```wren
AnimInterval.set_now(world : Any, anim : Any, offset : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_now(world : Any, anim : Any)"></endpoint>
### AnimInterval.set_now(..)
```wren
AnimInterval.set_now(world : Any, anim : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_play_count(world : Any, anim : Any, count : Any)"></endpoint>
### AnimInterval.set_play_count(...)
```wren
AnimInterval.set_play_count(world : Any, anim : Any, count : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_clock(world : Any, anim : Any, clock : Any)"></endpoint>
### AnimInterval.set_clock(...)
```wren
AnimInterval.set_clock(world : Any, anim : Any, clock : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_rate(world : Any, anim : Any, rate : Any)"></endpoint>
### AnimInterval.set_rate(...)
```wren
AnimInterval.set_rate(world : Any, anim : Any, rate : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_duration(world : Any, anim : Any, duration : Any)"></endpoint>
### AnimInterval.set_duration(...)
```wren
AnimInterval.set_duration(world : Any, anim : Any, duration : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_start(world : Any, anim : Any, start : Any)"></endpoint>
### AnimInterval.set_start(...)
```wren
AnimInterval.set_start(world : Any, anim : Any, start : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="set_end(world : Any, anim : Any, end : Any)"></endpoint>
### AnimInterval.set_end(...)
```wren
AnimInterval.set_end(world : Any, anim : Any, end : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_now(world : Any, anim : Any)"></endpoint>
### AnimInterval.get_now(..)
```wren
AnimInterval.get_now(world : Any, anim : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_play_count(world : Any, anim : Any)"></endpoint>
### AnimInterval.get_play_count(..)
```wren
AnimInterval.get_play_count(world : Any, anim : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_clock(world : Any, anim : Any)"></endpoint>
### AnimInterval.get_clock(..)
```wren
AnimInterval.get_clock(world : Any, anim : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_rate(world : Any, anim : Any)"></endpoint>
### AnimInterval.get_rate(..)
```wren
AnimInterval.get_rate(world : Any, anim : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_duration(world : Any, anim : Any)"></endpoint>
### AnimInterval.get_duration(..)
```wren
AnimInterval.get_duration(world : Any, anim : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_start(world : Any, anim : Any)"></endpoint>
### AnimInterval.get_start(..)
```wren
AnimInterval.get_start(world : Any, anim : Any) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimInterval" signature="get_end(world : Any, anim : Any)"></endpoint>
### AnimInterval.get_end(..)
```wren
AnimInterval.get_end(world : Any, anim : Any) : unknown
```
> no docs found   


## AnimState
```wren
import "luxe: system/anim.modifier" for AnimState
```
> An enum for the state of an `Anim` instance.

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="inactive"></endpoint>
### AnimState.inactive
```wren
AnimState.inactive : Num
```
> The animation is inactive. _:todo: This may be obsolete_.
> 
>   ```js
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.inactive) {
>     Log.print("anim is inactive")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="playing"></endpoint>
### AnimState.playing
```wren
AnimState.playing : Num
```
> The animation is active and is playing.
> 
>   ```js
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.playing) {
>     Log.print("anim is playing")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="ending"></endpoint>
### AnimState.ending
```wren
AnimState.ending : Num
```
> The animation is ending, and will be marked complete next update.
> 
>   ```js
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.ending) {
>     Log.print("anim is ending")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="complete"></endpoint>
### AnimState.complete
```wren
AnimState.complete : Num
```
> The animation has ended and is complete.
> 
>   ```js
>   var state = Anim.get_state(entity, anim)
>   if(state == AnimState.complete) {
>     Log.print("anim is complete")
>   }
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="name(value : Num)"></endpoint>
### AnimState.name(.)
```wren
AnimState.name(value : Num) : String
```
> Convert an `AnimState` value to a string.
> 
>   ```js
>   var type = AnimState.ending
>   var name = AnimState.name(type)
>   Log.print("type is %(name)") //expect: "ending"
>   ```   

<endpoint module="luxe: system/anim.modifier" class="AnimState" signature="from_string(value : String)"></endpoint>
### AnimState.from_string(.)
```wren
AnimState.from_string(value : String) : Num
```
> Convert a string to an enum value.
>         
>   ```js
>   var state = AnimState.from_string("ending")
>   var same = state == AnimState.ending //true
>   ```   


## AnimUI
```wren
import "luxe: system/anim.modifier" for AnimUI
```
> no docs found

<endpoint module="luxe: system/anim.modifier" class="AnimUI" signature="make_field(state : UIBlockState, name : String, type : BlockFieldType, view : ValueView)"></endpoint>
### AnimUI.make_field(....)
```wren
AnimUI.make_field(state : UIBlockState, name : String, type : BlockFieldType, view : ValueView) : unknown
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="AnimUI" signature="refresh(container : Any, anim_block : Any, state : Any)"></endpoint>
### AnimUI.refresh(...)
```wren
AnimUI.refresh(container : Any, anim_block : Any, state : Any) : unknown
```
> no docs found   


## Data
```wren
import "luxe: system/anim.modifier" for Data
```
> no docs found

### Variables
```wren
var play : List = []
var internal : Object = null
var show_editor : Num = 0
```

## System
```wren
import "luxe: system/anim.modifier" for System
```
> no docs found

<endpoint module="luxe: system/anim.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/anim.modifier" class="System" signature="editor_change(entity : Entity, change : ModifierChange)"></endpoint>
### System.editor_change(..)
```wren
System.editor_change(entity : Entity, change : ModifierChange) : unknown
```
> no docs found   

