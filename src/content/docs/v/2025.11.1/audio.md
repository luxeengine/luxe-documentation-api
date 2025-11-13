---
title: "luxe: audio"
description: API version 2025.11.1
slug: "v/2025.11.1/audio"
---
- [Audio](#audio)   
- [AudioAttenuation](#audioattenuation)   
- [Bus](#bus)   

---


## Audio
```wren
import "luxe: audio" for Audio
```
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

<endpoint module="luxe: audio" class="Audio" signature="set_listener(pos : Float3, forward : Float3, up : Float3, velocity : Float3)"></endpoint>
### Audio.set_listener(....)
```wren
Audio.set_listener(pos : Float3, forward : Float3, up : Float3, velocity : Float3) : unknown
```
> Set the world space listener position directly   

<endpoint module="luxe: audio" class="Audio" signature="duration(source : AudioAsset)"></endpoint>
### Audio.duration(.)
```wren
Audio.duration(source : AudioAsset) : Num
```
> Returns the duration of the given audio asset.
>         
>   ```js
>   var asset = Asset.audio("audio/file")
>   var duration = Audio.duration(asset)
>   Log.print("duration = %(duration)")
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="play(source : AudioAsset, volume : Num)"></endpoint>
### Audio.play(..)
```wren
Audio.play(source : AudioAsset, volume : Num) : AudioInstance
```
> Plays audio from the specified `source` at volume `volume`.
> Returns a handle to an audio instance that you can modify or stop.
>         
>   ```js
>   var asset = Audio.asset("assets/sound.wav")
>   Audio.play(asset, 1)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="play(source : AudioAsset, as3D : Bool, bus : AudioBus, volume : Num)"></endpoint>
### Audio.play(....)
```wren
Audio.play(source : AudioAsset, as3D : Bool, bus : AudioBus, volume : Num) : AudioInstance
```
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
### Audio.play(.)
```wren
Audio.play(source : AudioAsset) : AudioInstance
```
> Plays audio from the specified `source` at volume `1.0`.
> Returns a handle to an audio instance that you can modify or stop.
> 
>   ```js
>   var asset = Audio.asset("assets/sound.wav")
>   Audio.play(asset)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="loop(source : AudioAsset, volume : Num)"></endpoint>
### Audio.loop(..)
```wren
Audio.loop(source : AudioAsset, volume : Num) : AudioInstance
```
> Begins looping audio for `id` at volume `volume`.
> Returns a handle to an audio instance that you can modify or stop.
> 
>   ```js
>   var music = Audio.loop("music", 1.0)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="loop(source : AudioAsset, as3D : Bool, bus : AudioBus, volume : Num)"></endpoint>
### Audio.loop(....)
```wren
Audio.loop(source : AudioAsset, as3D : Bool, bus : AudioBus, volume : Num) : AudioInstance
```
> Begins looping audio for `id` with `as3D` and `bus` at volume `volume`.
> The bus comes from `create_bus`, and 0 means global/default bus.
> If `as3D` is true, use set3D on the handle returned to configure position/velocity.    
> Returns a handle to an audio instance that you can modify or stop.
> 
>   ```js
>   var music = Audio.loop("music", false, 0, 1.0)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="loop(source : AudioAsset)"></endpoint>
### Audio.loop(.)
```wren
Audio.loop(source : AudioAsset) : AudioInstance
```
> Begins looping audio for `id` at volume `1.0`.
> Returns a handle to an audio instance that you can modify or stop.
> 
>   ```js
>   var music = Audio.loop("music")
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="stop(instance : AudioInstance)"></endpoint>
### Audio.stop(.)
```wren
Audio.stop(instance : AudioInstance) : None
```
> Stops an AudioInstance.
> 
>   ```js
>   var music = Audio.loop("music")
>   Audio.stop(music)
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="playing(instance : AudioInstance)"></endpoint>
### Audio.playing(.)
```wren
Audio.playing(instance : AudioInstance) : Bool
```
> Returns true if an AudioInstance is playing.
> 
>   ```js
>   var music = Audio.loop("music")
>   Log.print(Audio.playing(music)) //true
>   Audio.stop(music)
>   Log.print(Audio.playing(music)) //false
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="pan(instance : AudioInstance, pan : Num)"></endpoint>
### Audio.pan(..)
```wren
Audio.pan(instance : AudioInstance, pan : Num) : None
```
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
### Audio.pan_of(.)
```wren
Audio.pan_of(instance : AudioInstance) : Num
```
> Returns the current `pan` value for the given `instance`.
> 
>   ```js
>   var sound = Audio.play(asset)
>   Audio.pan(sound, 2.0)
>   Log.print(Audio.pan_of(sound)) // returns 2.0
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="volume(instance : AudioInstance, volume : Num)"></endpoint>
### Audio.volume(..)
```wren
Audio.volume(instance : AudioInstance, volume : Num) : None
```
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
### Audio.volume_of(.)
```wren
Audio.volume_of(instance : AudioInstance) : Num
```
> Returns the current `volume` for the given `instance`.
> 
>   ```js
>   var sound = Audio.play(asset)
>   Log.print(Audio.volume_of(sound)) // returns 1
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="pitch(instance : AudioInstance, pitch : Num)"></endpoint>
### Audio.pitch(..)
```wren
Audio.pitch(instance : AudioInstance, pitch : Num) : None
```
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
### Audio.pitch_of(.)
```wren
Audio.pitch_of(instance : AudioInstance) : Num
```
> Returns the current `pitch` for `instance`.
> 
>   ```js
>   var sound = Audio.play(asset)
>   Audio.pitch(sound, 3)
>   Log.print(Audio.pitch_of(sound)) // returns 3
>   ```   

<endpoint module="luxe: audio" class="Audio" signature="pause(instance : AudioInstance, paused : Bool)"></endpoint>
### Audio.pause(..)
```wren
Audio.pause(instance : AudioInstance, paused : Bool) : None
```
> Sets whether the audio `instance` is playing, pausing it when not.
> Once you set an `instance` to not play you can resume it later.
> 
> ```js
> var sound = Audio.play(asset)
> Audio.pause(sound, false) //pauses
> ```   

<endpoint module="luxe: audio" class="Audio" signature="pause_of(instance : AudioInstance)"></endpoint>
### Audio.pause_of(.)
```wren
Audio.pause_of(instance : AudioInstance) : Bool
```
> Returns whether an `instance` is paused.
> 
> ```js
> var sound = Audio.play(asset)
> Log.print(Audio.pause_of(sound)) //true
> Audio.pause(sound, false) //pause
> Log.print(Audio.pause_of(sound)) //false
> ```   

<endpoint module="luxe: audio" class="Audio" signature="set3D(instance : AudioInstance, pos : Float3, vel : Float3, dopper_factor : Float, attenuation : AudioAttenuation, range : Float2, rolloff : Num)"></endpoint>
### Audio.set3D(.......)
```wren
Audio.set3D(instance : AudioInstance, pos : Float3, vel : Float3, dopper_factor : Float, attenuation : AudioAttenuation, range : Float2, rolloff : Num) : None
```
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


## AudioAttenuation
```wren
import "luxe: audio" for AudioAttenuation
```
> Read more details with graphs here https://solhsa.com/soloud/concepts3d.html#attenuation

<endpoint module="luxe: audio" class="AudioAttenuation" signature="none"></endpoint>
### AudioAttenuation.none
```wren
AudioAttenuation.none : unknown
```
> No attenuation based on distance. The default   

<endpoint module="luxe: audio" class="AudioAttenuation" signature="inverse_distance"></endpoint>
### AudioAttenuation.inverse_distance
```wren
AudioAttenuation.inverse_distance : unknown
```
> The higher the rolloff factor, the more steeply the volume drops. 
> At low enough rolloff factor, the volume never drops near zero. 
> Values over 1 recommended (unless you have special needs). 
> Values less than equal to zero result in undefined behavior.
> Increasing the minimum distance pushes the start of the attenuation further. 
> It also causes the curve to change. Note that the minimum distance must be above 0.
> The maximum distance simply cuts the attenuation at the volume level it has reached at that point.   

<endpoint module="luxe: audio" class="AudioAttenuation" signature="linear_distance"></endpoint>
### AudioAttenuation.linear_distance
```wren
AudioAttenuation.linear_distance : unknown
```
> The rolloff factor for linear distance simply sets the maximum volume reduction. 
> Using values outside the 0..1 range causes undefined behavior.
> The minimum and maximum distance works as one might expect. 
> Minimum distance must be less or equal to maximum distance.   

<endpoint module="luxe: audio" class="AudioAttenuation" signature="exponential_distance"></endpoint>
### AudioAttenuation.exponential_distance
```wren
AudioAttenuation.exponential_distance : unknown
```
> The higher the rolloff factor, the more steeply the volume drops. 
> At low enough rolloff factor, the volume never drops near zero. 
> Values over 1 recommended (unless you have special needs). 
> Values less than equal to zero result in really weird behavior.
> Increasing the minimum distance pushes the start of the attenuation further. 
> It also causes the curve to change. Note that the minimum distance must be above 0.
> The maximum distance simply cuts the attenuation at the volume level it has reached at that point.   


## Bus
```wren
import "luxe: audio" for Bus
```
> no docs found

<endpoint module="luxe: audio" class="Bus" signature="set_channels(bus : AudioBus, value : Num)"></endpoint>
### Bus.set_channels(..)
```wren
Bus.set_channels(bus : AudioBus, value : Num) : None
```
> Set the number of channels for the bus   

<endpoint module="luxe: audio" class="Bus" signature="set_volume(bus : AudioBus, value : Num)"></endpoint>
### Bus.set_volume(..)
```wren
Bus.set_volume(bus : AudioBus, value : Num) : None
```
> Set the volume for the bus   

<endpoint module="luxe: audio" class="Bus" signature="get_volume(bus : AudioBus)"></endpoint>
### Bus.get_volume(.)
```wren
Bus.get_volume(bus : AudioBus) : Num
```
> Get the volume for the bus   

