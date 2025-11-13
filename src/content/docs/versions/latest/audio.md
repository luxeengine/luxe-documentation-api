---
title: "luxe: audio"
description: API version 2025.11.1
---
## `luxe: audio{:lx}` module

- [Audio](#audio)   
- [AudioAttenuation](#audioattenuation)   
- [Bus](#bus)   

---


### Audio
`import "luxe: audio" for Audio{:lx}`
> The Audio module let's you play audio.
> 
> `Audio` is a service API, and isn't a modifier system.
> There is e.g the Sound modifier for placing sounds in the world.
> 
> Most things in `Audio` work on an instance (handle) of a sound.
> You get one of those from `play` or `loop`, and then can modify or query it.
> It's always safe to call any function on an instance, even if it's finished playing.
> 
> A quick look:
>   
>   ```js
>   //play them
>   var sound = Audio.play(Asset.audio("assets/sound"))
>   var music = Audio.loop(Asset.audio("assets/music"))
> 
>   //later...
>   Audio.volume(music, 0.5)
> 
>   //later still...
>   Audio.stop(music)
>   ```
> 
> That's it!

- [set_listener](#Audio.set_listener+4)(**pos**: `Float3{:lx}`, **forward**: `Float3{:lx}`, **up**: `Float3{:lx}`, **velocity**: `Float3{:lx}`)
- [duration](#Audio.duration)(**source**: `AudioAsset{:lx}`)
- [play](#Audio.play+2)(**source**: `AudioAsset{:lx}`, **volume**: `Num{:lx}`)
- [play](#Audio.play+4)(**source**: `AudioAsset{:lx}`, **as3D**: `Bool{:lx}`, **bus**: `AudioBus{:lx}`, **volume**: `Num{:lx}`)
- [play](#Audio.play)(**source**: `AudioAsset{:lx}`)
- [loop](#Audio.loop+2)(**source**: `AudioAsset{:lx}`, **volume**: `Num{:lx}`)
- [loop](#Audio.loop+4)(**source**: `AudioAsset{:lx}`, **as3D**: `Bool{:lx}`, **bus**: `AudioBus{:lx}`, **volume**: `Num{:lx}`)
- [loop](#Audio.loop)(**source**: `AudioAsset{:lx}`)
- [stop](#Audio.stop)(**instance**: `AudioInstance{:lx}`)
- [playing](#Audio.playing)(**instance**: `AudioInstance{:lx}`)
- [pan](#Audio.pan+2)(**instance**: `AudioInstance{:lx}`, **pan**: `Num{:lx}`)
- [pan_of](#Audio.pan_of)(**instance**: `AudioInstance{:lx}`)
- [volume](#Audio.volume+2)(**instance**: `AudioInstance{:lx}`, **volume**: `Num{:lx}`)
- [volume_of](#Audio.volume_of)(**instance**: `AudioInstance{:lx}`)
- [pitch](#Audio.pitch+2)(**instance**: `AudioInstance{:lx}`, **pitch**: `Num{:lx}`)
- [pitch_of](#Audio.pitch_of)(**instance**: `AudioInstance{:lx}`)
- [pause](#Audio.pause+2)(**instance**: `AudioInstance{:lx}`, **paused**: `Bool{:lx}`)
- [pause_of](#Audio.pause_of)(**instance**: `AudioInstance{:lx}`)
- [set3D](#Audio.set3D+7)(**instance**: `AudioInstance{:lx}`, **pos**: `Float3{:lx}`, **vel**: `Float3{:lx}`, **dopper_factor**: `Float{:lx}`, **attenuation**: `AudioAttenuation{:lx}`, **range**: `Float2{:lx}`, **rolloff**: `Num{:lx}`)


---

<endpoint module="luxe: audio" class="Audio" signature="set_listener(pos : Float3, forward : Float3, up : Float3, velocity : Float3)"></endpoint>
<h4 class="signature_head">Audio.set_listener</h4><a class="signature-arity" href="#Audio.set_listener+4" title="Permanent link">4</a><signature id="Audio.set_listener+4">

```lx
Audio.set_listener(pos : Float3, forward : Float3, up : Float3, velocity : Float3) : unknown
```
</signature>

> Set the world space listener position directly   

<endpoint module="luxe: audio" class="Audio" signature="duration(source : AudioAsset)"></endpoint>
<h4 class="signature_head">Audio.duration</h4><a class="signature-arity" href="#Audio.duration" title="Permanent link">1</a><signature id="Audio.duration">

```lx
Audio.duration(source : AudioAsset) : Num
```
</signature>

> Returns the duration of the given audio asset.
>         
>   ```js
>   var asset = Asset.audio("audio/file")
>   var duration = Audio.duration(asset)
>   Log.print("duration = %(duration)")
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="play(source : AudioAsset, volume : Num)"></endpoint>
<h4 class="signature_head">Audio.play</h4><a class="signature-arity" href="#Audio.play+2" title="Permanent link">2</a><signature id="Audio.play+2">

```lx
Audio.play(source : AudioAsset, volume : Num) : AudioInstance
```
</signature>

> Plays audio from the specified `source` at volume `volume`.
> Returns a handle to an audio instance that you can modify or stop.
>         
>   ```js
>   var asset = Audio.asset("assets/sound.wav")
>   Audio.play(asset, 1)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="play(source : AudioAsset, as3D : Bool, bus : AudioBus, volume : Num)"></endpoint>
<h4 class="signature_head">Audio.play</h4><a class="signature-arity" href="#Audio.play+4" title="Permanent link">4</a><signature id="Audio.play+4">

```lx
Audio.play(source : AudioAsset, as3D : Bool, bus : AudioBus, volume : Num) : AudioInstance
```
</signature>

> Plays audio from the specified `source` with `as3D` and `bus` at volume `volume`.
> The bus comes from `create_bus`, and 0 means global/default bus.
> If `as3D` is true, use set3D on the handle returned to configure position/velocity.
> Returns a handle to an audio instance that you can modify or stop.
>         
>   ```js
>   var asset = Audio.asset("assets/sound.wav")
>   Audio.play(asset, true, 0, 1)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="play(source : AudioAsset)"></endpoint>
<h4 class="signature_head">Audio.play</h4><a class="signature-arity" href="#Audio.play" title="Permanent link">1</a><signature id="Audio.play">

```lx
Audio.play(source : AudioAsset) : AudioInstance
```
</signature>

> Plays audio from the specified `source` at volume `1.0`.
> Returns a handle to an audio instance that you can modify or stop.
> 
>   ```js
>   var asset = Audio.asset("assets/sound.wav")
>   Audio.play(asset)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="loop(source : AudioAsset, volume : Num)"></endpoint>
<h4 class="signature_head">Audio.loop</h4><a class="signature-arity" href="#Audio.loop+2" title="Permanent link">2</a><signature id="Audio.loop+2">

```lx
Audio.loop(source : AudioAsset, volume : Num) : AudioInstance
```
</signature>

> Begins looping audio for `id` at volume `volume`.
> Returns a handle to an audio instance that you can modify or stop.
> 
>   ```js
>   var music = Audio.loop("music", 1.0)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="loop(source : AudioAsset, as3D : Bool, bus : AudioBus, volume : Num)"></endpoint>
<h4 class="signature_head">Audio.loop</h4><a class="signature-arity" href="#Audio.loop+4" title="Permanent link">4</a><signature id="Audio.loop+4">

```lx
Audio.loop(source : AudioAsset, as3D : Bool, bus : AudioBus, volume : Num) : AudioInstance
```
</signature>

> Begins looping audio for `id` with `as3D` and `bus` at volume `volume`.
> The bus comes from `create_bus`, and 0 means global/default bus.
> If `as3D` is true, use set3D on the handle returned to configure position/velocity.    
> Returns a handle to an audio instance that you can modify or stop.
> 
>   ```js
>   var music = Audio.loop("music", false, 0, 1.0)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="loop(source : AudioAsset)"></endpoint>
<h4 class="signature_head">Audio.loop</h4><a class="signature-arity" href="#Audio.loop" title="Permanent link">1</a><signature id="Audio.loop">

```lx
Audio.loop(source : AudioAsset) : AudioInstance
```
</signature>

> Begins looping audio for `id` at volume `1.0`.
> Returns a handle to an audio instance that you can modify or stop.
> 
>   ```js
>   var music = Audio.loop("music")
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="stop(instance : AudioInstance)"></endpoint>
<h4 class="signature_head">Audio.stop</h4><a class="signature-arity" href="#Audio.stop" title="Permanent link">1</a><signature id="Audio.stop">

```lx
Audio.stop(instance : AudioInstance) : None
```
</signature>

> Stops an AudioInstance.
> 
>   ```js
>   var music = Audio.loop("music")
>   Audio.stop(music)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="playing(instance : AudioInstance)"></endpoint>
<h4 class="signature_head">Audio.playing</h4><a class="signature-arity" href="#Audio.playing" title="Permanent link">1</a><signature id="Audio.playing">

```lx
Audio.playing(instance : AudioInstance) : Bool
```
</signature>

> Returns true if an AudioInstance is playing.
> 
>   ```js
>   var music = Audio.loop("music")
>   Log.print(Audio.playing(music)) //true
>   Audio.stop(music)
>   Log.print(Audio.playing(music)) //false
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="pan(instance : AudioInstance, pan : Num)"></endpoint>
<h4 class="signature_head">Audio.pan</h4><a class="signature-arity" href="#Audio.pan+2" title="Permanent link">2</a><signature id="Audio.pan+2">

```lx
Audio.pan(instance : AudioInstance, pan : Num) : None
```
</signature>

> Sets the current `pan` value for the given `instance`.
> 
> Negative values for `pan` will move the audio to the left speakers, 
> while positive values will move the audio to the right speakers.
> 
> A value of 0 will reset to the audio sample back to center.
> 
>   ```js
>   var sound = Audio.play(asset)
>   Audio.pan(sound, -2.0)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="pan_of(instance : AudioInstance)"></endpoint>
<h4 class="signature_head">Audio.pan_of</h4><a class="signature-arity" href="#Audio.pan_of" title="Permanent link">1</a><signature id="Audio.pan_of">

```lx
Audio.pan_of(instance : AudioInstance) : Num
```
</signature>

> Returns the current `pan` value for the given `instance`.
> 
>   ```js
>   var sound = Audio.play(asset)
>   Audio.pan(sound, 2.0)
>   Log.print(Audio.pan_of(sound)) // returns 2.0
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="volume(instance : AudioInstance, volume : Num)"></endpoint>
<h4 class="signature_head">Audio.volume</h4><a class="signature-arity" href="#Audio.volume+2" title="Permanent link">2</a><signature id="Audio.volume+2">

```lx
Audio.volume(instance : AudioInstance, volume : Num) : None
```
</signature>

> Sets the `volume` for a given `instance`.
> 
> Intended volumes range from 0..1, with 1 meaning 100% volume, and 0 meaning silence.
> Volume values higher than 1 are valid (> 100%).
> 
>   ```js
>   var sound = Audio.play(asset) // Volume is 1.0
>   Audio.volume(sound, 0.5)        // Volume is now 0.5
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="volume_of(instance : AudioInstance)"></endpoint>
<h4 class="signature_head">Audio.volume_of</h4><a class="signature-arity" href="#Audio.volume_of" title="Permanent link">1</a><signature id="Audio.volume_of">

```lx
Audio.volume_of(instance : AudioInstance) : Num
```
</signature>

> Returns the current `volume` for the given `instance`.
> 
>   ```js
>   var sound = Audio.play(asset)
>   Log.print(Audio.volume_of(sound)) // returns 1
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="pitch(instance : AudioInstance, pitch : Num)"></endpoint>
<h4 class="signature_head">Audio.pitch</h4><a class="signature-arity" href="#Audio.pitch+2" title="Permanent link">2</a><signature id="Audio.pitch+2">

```lx
Audio.pitch(instance : AudioInstance, pitch : Num) : None
```
</signature>

> Adjusts the `pitch` of `instance`, making the sample sound higher or lower-pitched.
> Pitch values below 1 will lower the pitch of the sample, while pitch values above 1 raise it.
>     
> A value of 1 will cause the sample to be played at its source pitch.
>     
> Pitch changes will affect playback duration, causing lower-pitched samples 
> to have longer durations and higher-pitched samples to have shorter durations, 
> because the audio is not resampled (when using this function).
> 
> A pitch of 0 (or smaller) will be ignored.
> 
>   ```js
>   var sound = Audio.play(asset)
>   Audio.pitch(sound, 1)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="pitch_of(instance : AudioInstance)"></endpoint>
<h4 class="signature_head">Audio.pitch_of</h4><a class="signature-arity" href="#Audio.pitch_of" title="Permanent link">1</a><signature id="Audio.pitch_of">

```lx
Audio.pitch_of(instance : AudioInstance) : Num
```
</signature>

> Returns the current `pitch` for `instance`.
> 
>   ```js
>   var sound = Audio.play(asset)
>   Audio.pitch(sound, 3)
>   Log.print(Audio.pitch_of(sound)) // returns 3
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="pause(instance : AudioInstance, paused : Bool)"></endpoint>
<h4 class="signature_head">Audio.pause</h4><a class="signature-arity" href="#Audio.pause+2" title="Permanent link">2</a><signature id="Audio.pause+2">

```lx
Audio.pause(instance : AudioInstance, paused : Bool) : None
```
</signature>

> Sets whether the audio `instance` is playing, pausing it when not.
> Once you set an `instance` to not play you can resume it later.
> 
> ```js
> var sound = Audio.play(asset)
> Audio.pause(sound, false) //pauses
> ```   

<endpoint module="luxe: audio" class="Audio" signature="pause_of(instance : AudioInstance)"></endpoint>
<h4 class="signature_head">Audio.pause_of</h4><a class="signature-arity" href="#Audio.pause_of" title="Permanent link">1</a><signature id="Audio.pause_of">

```lx
Audio.pause_of(instance : AudioInstance) : Bool
```
</signature>

> Returns whether an `instance` is paused.
> 
> ```js
> var sound = Audio.play(asset)
> Log.print(Audio.pause_of(sound)) //true
> Audio.pause(sound, false) //pause
> Log.print(Audio.pause_of(sound)) //false
> ```   

<endpoint module="luxe: audio" class="Audio" signature="set3D(instance : AudioInstance, pos : Float3, vel : Float3, dopper_factor : Float, attenuation : AudioAttenuation, range : Float2, rolloff : Num)"></endpoint>
<h4 class="signature_head">Audio.set3D</h4><a class="signature-arity" href="#Audio.set3D+7" title="Permanent link">7</a><signature id="Audio.set3D+7">

```lx
Audio.set3D(instance : AudioInstance, pos : Float3, vel : Float3, dopper_factor : Float, attenuation : AudioAttenuation, range : Float2, rolloff : Num) : None
```
</signature>

> Sets 3D parameters of the the audio `instance`.
> Note that you need to use play with the 3d flag to make the sound 3d otherwise this has no effect.
> 
> ```js
> var sound = Audio.play(asset)
> var pos = [0,0,0]
> var vel = [0,0,0]
> var doppler = 1.0
> var attn = AudioAttenuation.none
> var range = [1, 100] // min / max distance for attenuation
> var rolloff = 1.0
> Audio.set3D(sound, pos, vel, doppler, attn, range, rolloff)
> ```   


### AudioAttenuation
`import "luxe: audio" for AudioAttenuation{:lx}`
> Read more details with graphs here https://solhsa.com/soloud/concepts3d.html#attenuation

- [none](#AudioAttenuation.none)
- [inverse_distance](#AudioAttenuation.inverse_distance)
- [linear_distance](#AudioAttenuation.linear_distance)
- [exponential_distance](#AudioAttenuation.exponential_distance)


---

<endpoint module="luxe: audio" class="AudioAttenuation" signature="none"></endpoint>
<h4 class="signature_head">AudioAttenuation.none</h4><a class="signature-arity" href="#AudioAttenuation.none" title="Permanent link">1</a><signature id="AudioAttenuation.none">

```lx
AudioAttenuation.none : unknown
```
</signature>

> No attenuation based on distance. The default   

<endpoint module="luxe: audio" class="AudioAttenuation" signature="inverse_distance"></endpoint>
<h4 class="signature_head">AudioAttenuation.inverse_distance</h4><a class="signature-arity" href="#AudioAttenuation.inverse_distance" title="Permanent link">1</a><signature id="AudioAttenuation.inverse_distance">

```lx
AudioAttenuation.inverse_distance : unknown
```
</signature>

> The higher the rolloff factor, the more steeply the volume drops. 
> At low enough rolloff factor, the volume never drops near zero. 
> Values over 1 recommended (unless you have special needs). 
> Values less than equal to zero result in undefined behavior.
> Increasing the minimum distance pushes the start of the attenuation further. 
> It also causes the curve to change. Note that the minimum distance must be above 0.
> The maximum distance simply cuts the attenuation at the volume level it has reached at that point.   

<endpoint module="luxe: audio" class="AudioAttenuation" signature="linear_distance"></endpoint>
<h4 class="signature_head">AudioAttenuation.linear_distance</h4><a class="signature-arity" href="#AudioAttenuation.linear_distance" title="Permanent link">1</a><signature id="AudioAttenuation.linear_distance">

```lx
AudioAttenuation.linear_distance : unknown
```
</signature>

> The rolloff factor for linear distance simply sets the maximum volume reduction. 
> Using values outside the 0..1 range causes undefined behavior.
> The minimum and maximum distance works as one might expect. 
> Minimum distance must be less or equal to maximum distance.   

<endpoint module="luxe: audio" class="AudioAttenuation" signature="exponential_distance"></endpoint>
<h4 class="signature_head">AudioAttenuation.exponential_distance</h4><a class="signature-arity" href="#AudioAttenuation.exponential_distance" title="Permanent link">1</a><signature id="AudioAttenuation.exponential_distance">

```lx
AudioAttenuation.exponential_distance : unknown
```
</signature>

> The higher the rolloff factor, the more steeply the volume drops. 
> At low enough rolloff factor, the volume never drops near zero. 
> Values over 1 recommended (unless you have special needs). 
> Values less than equal to zero result in really weird behavior.
> Increasing the minimum distance pushes the start of the attenuation further. 
> It also causes the curve to change. Note that the minimum distance must be above 0.
> The maximum distance simply cuts the attenuation at the volume level it has reached at that point.   


### Bus
`import "luxe: audio" for Bus{:lx}`
> no docs found

- [set_channels](#Bus.set_channels+2)(**bus**: `AudioBus{:lx}`, **value**: `Num{:lx}`)
- [set_volume](#Bus.set_volume+2)(**bus**: `AudioBus{:lx}`, **value**: `Num{:lx}`)
- [get_volume](#Bus.get_volume)(**bus**: `AudioBus{:lx}`)


---

<endpoint module="luxe: audio" class="Bus" signature="set_channels(bus : AudioBus, value : Num)"></endpoint>
<h4 class="signature_head">Bus.set_channels</h4><a class="signature-arity" href="#Bus.set_channels+2" title="Permanent link">2</a><signature id="Bus.set_channels+2">

```lx
Bus.set_channels(bus : AudioBus, value : Num) : None
```
</signature>

> Set the number of channels for the bus   

<endpoint module="luxe: audio" class="Bus" signature="set_volume(bus : AudioBus, value : Num)"></endpoint>
<h4 class="signature_head">Bus.set_volume</h4><a class="signature-arity" href="#Bus.set_volume+2" title="Permanent link">2</a><signature id="Bus.set_volume+2">

```lx
Bus.set_volume(bus : AudioBus, value : Num) : None
```
</signature>

> Set the volume for the bus   

<endpoint module="luxe: audio" class="Bus" signature="get_volume(bus : AudioBus)"></endpoint>
<h4 class="signature_head">Bus.get_volume</h4><a class="signature-arity" href="#Bus.get_volume" title="Permanent link">1</a><signature id="Bus.get_volume">

```lx
Bus.get_volume(bus : AudioBus) : Num
```
</signature>

> Get the volume for the bus   

