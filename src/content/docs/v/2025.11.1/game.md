---
title: "luxe: game"
description: API version 2025.11.1
slug: "v/2025.11.1/game"
---
- [Frame](#frame)   
- [FrameSection](#framesection)   
- [FrameWhen](#framewhen)   
- [Ready](#ready)   

---


## Frame
```wren
import "luxe: game" for Frame
```
> Access to the frame and game loop. 
> At the moment, the loop contains fixed sections,
> `begin` -> `init` -> `sim` -> `visual` -> `debug` -> `end`.
> 
> Functions can be hooked into sections of the frame using `before`,
> `after` or `on` ordering.
> 
> Note: This API is a work in progress.

<endpoint module="luxe: game" class="Frame" signature="begin"></endpoint>
### Frame.begin
```wren
Frame.begin : String
```
> An enum value for the `begin` section in the loop.
> The `begin section is the start of the frame from the game's perspective.
> 
>   ```js
>   Frame.on(Frame.begin) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="init"></endpoint>
### Frame.init
```wren
Frame.init : String
```
> An enum value for the `init` section in the loop.
> The `init` section is used for initialization tasks that happen before
> updates, like when a new entity is created, it can be added to a queue and
> processed in init to set some default values before it arrives in `sim` or `visual`.
>     
>   ```js
>   Frame.on(Frame.init) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="sim"></endpoint>
### Frame.sim
```wren
Frame.sim : String
```
> An enum value for the `sim` section in the loop.
> The `sim` section is for simulation, also known as `update`. 
> In this section you would update game logic and modify things that the `visual` section would reference.
> 
>   ```js
>   Frame.on(Frame.sim) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="visual"></endpoint>
### Frame.visual
```wren
Frame.visual : String
```
> An enum value for the `visual` section in the loop.
> The `visual` section is for rendering, also known as `render`.
> Updating visual state from the sim states happens here.
> 
>   ```js
>   Frame.on(Frame.visual) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="debug"></endpoint>
### Frame.debug
```wren
Frame.debug : String
```
> An enum value for the `debug` section in the loop.
> The `debug` part of the loop can perform debug related tasks before the end of the frame and rendering is submitted.
> 
>   ```js
>   Frame.on(Frame.debug) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="end"></endpoint>
### Frame.end
```wren
Frame.end : String
```
> An enum value for the `end` section in the loop.
> The `end` of the loop can perform tasks after rendering and simulation.
> 
>   ```js
>   Frame.on(Frame.end) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="queue(fn : Fn)"></endpoint>
### Frame.queue(.)
```wren
Frame.queue(fn : Fn) : None
```
> **Once off**. Queue a function to be called after the current section has completed fully.
> That is, if we were inside of `sim` and we queued a function, it would happen after `before` `on` and `after`.
> 
> This is used for systems that fire callbacks, you normally don't want to fire callbacks during processing,
> so you can queue them to happen "as soon as possible" but in a well defined place and time.
> 
>   ```js
>   Frame.queue {
>     Log.print("happens at the end of the current section")
>   }
> 
>   //fake example: collision callbacks
>   for(entity in collidable) {
>     if(collides(entity)) {
>       var fn = callbacks[entity]
>       Frame.queue { fn.call() }
>     }
>   }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="next(fn : Fn)"></endpoint>
### Frame.next(.)
```wren
Frame.next(fn : Fn) : None
```
> **Once off**. Queue a function to be called at the beginning of the next frame, 
> before any sections.
> 
>   ```js
>   Frame.next {
>     Log.print("next frame!")
>   }
> 
>   //common example, destroying something when it might
>   //not be safe to. Instead, just destroy it later
>   for(thing in list) {
>     Frame.next { Thing.destroy(thing) }
>   }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="end(fn : Fn)"></endpoint>
### Frame.end(.)
```wren
Frame.end(fn : Fn) : None
```
> **Once off**. Queue a function to be called at the end of the current frame,
> after all sections.
> 
>   ```js
>   Frame.end {
>     Log.print("end frame!")
>   }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="schedule(time : Num, fn : Fn)"></endpoint>
### Frame.schedule(..)
```wren
Frame.schedule(time : Num, fn : Fn) : Handle
```
> Schedule a function to be called in future. 
> The `time` value is in seconds, and is not affected by any time scaling.
> The function is only called once. To repeat, see the other `schedule` method.   

<endpoint module="luxe: game" class="Frame" signature="schedule(time : Num, count : Num, fn : Fn)"></endpoint>
### Frame.schedule(...)
```wren
Frame.schedule(time : Num, count : Num, fn : Fn) : Handle
```
> Schedule a function to be called in future. 
> The `time` value is in seconds, and is not affected by any time scaling.
> If `count` is 0, the function will be called repeatedly until `unschedule` is called.   

<endpoint module="luxe: game" class="Frame" signature="unschedule(handle : Handle)"></endpoint>
### Frame.unschedule(.)
```wren
Frame.unschedule(handle : Handle) : None
```
> Unschedule a function scheduled previously, using the handle returned from `schedule`.   

<endpoint module="luxe: game" class="Frame" signature="off(handle : Handle)"></endpoint>
### Frame.off(.)
```wren
Frame.off(handle : Handle) : Bool
```
> Disconnect a function using the handle returned from one of the recurring functions.
> This will remove the function from the loop and it will no longer be called.
> 
> Returns true if the function was valid and removed.
> 
>   ```js
>   var tick = Frame.on(Frame.sim) {|delta| Log.print("delta:%(delta)") }
>   //...
>   Frame.off(tick)
>   ```   

<endpoint module="luxe: game" class="Frame" signature="once(section : String, priority : Num, fn : Fn)"></endpoint>
### Frame.once(...)
```wren
Frame.once(section : String, priority : Num, fn : Fn) : Handle
```
> **Once off**. Queues a function to the specified section, with a given priority which will be executed _during_ the section.
> Priority is based on "highest priority first". So priority 1 executes before 0.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.once(Frame.sim, 3) {|delta| Log.print("prints first") }
>   Frame.once(Frame.sim, 1) {|delta| Log.print("prints second") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="on(section : String, priority : Num, fn : Fn)"></endpoint>
### Frame.on(...)
```wren
Frame.on(section : String, priority : Num, fn : Fn) : Handle
```
> Connect a function to the specified section, with a given priority which will be executed _during_ the section.
> Priority is based on "highest priority first". So priority 1 executes before 0.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.on(Frame.sim, 3) {|delta| Log.print("prints first") }
>   Frame.on(Frame.sim, 1) {|delta| Log.print("prints second") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="before(section : String, priority : Num, fn : Fn)"></endpoint>
### Frame.before(...)
```wren
Frame.before(section : String, priority : Num, fn : Fn) : Handle
```
> Connect a function to the specified section, with a given priority which will be executed _before_ the section.
> Priority is based on "highest priority first". So priority 1 executes before 0.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.before(Frame.sim, 0) {|delta| Log.print("prints second") }
>   Frame.before(Frame.sim, 1) {|delta| Log.print("prints first") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="after(section : String, priority : Num, fn : Fn)"></endpoint>
### Frame.after(...)
```wren
Frame.after(section : String, priority : Num, fn : Fn) : Handle
```
> Connect a function to the specified section, with a given priority which will be executed _after_ the section.
> Priority is based on "highest priority first". So priority 1 executes before 0.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.after(Frame.sim, 2) {|delta| Log.print("prints first") }
>   Frame.after(Frame.sim, 1) {|delta| Log.print("prints second") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="on(section : String, fn : Fn)"></endpoint>
### Frame.on(..)
```wren
Frame.on(section : String, fn : Fn) : Handle
```
> Connect a function to the specified section (with priority 0) which will be executed _during_ the section.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.on(Frame.sim) {|delta| Log.print("delta:%(delta)") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="once(section : String, fn : Fn)"></endpoint>
### Frame.once(..)
```wren
Frame.once(section : String, fn : Fn) : Handle
```
> **Once off**. Queue a function to the specified section (with priority 0) which will be executed _during_ the section.
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.once(Frame.sim) { Log.print("happens during 'sim'") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="before(section : String, fn : Fn)"></endpoint>
### Frame.before(..)
```wren
Frame.before(section : String, fn : Fn) : Handle
```
> Connect a function to the specified section (with priority 0) which will be executed _before_ the section.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.before(Frame.sim) {|delta| Log.print("delta:%(delta)") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="after(section : String, fn : Fn)"></endpoint>
### Frame.after(..)
```wren
Frame.after(section : String, fn : Fn) : Handle
```
> Connect a function to the specified section (with priority 0) which will be executed _after_ the section.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.after(Frame.sim) {|delta| Log.print("delta:%(delta)") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="skip(count_frames : Num, fn : Fn)"></endpoint>
### Frame.skip(..)
```wren
Frame.skip(count_frames : Num, fn : Fn) : unknown
```
> **Once off**. Queue a function to be called at the beginning of the frame `count_frames` from now, 
> before any sections. This is `Frame.next` but can push actions forward by frame count instead of time.
> 
>   ```js
>   Frame.skip(3) {
>     Log.print("three frames from now!")
>   }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="mark(id : String, display : String)"></endpoint>
### Frame.mark(..)
```wren
Frame.mark(id : String, display : String) : None
```
> no docs found   

<endpoint module="luxe: game" class="Frame" signature="get_marks(frame_index : Num)"></endpoint>
### Frame.get_marks(.)
```wren
Frame.get_marks(frame_index : Num) : List
```
> no docs found   

<endpoint module="luxe: game" class="Frame" signature="index"></endpoint>
### Frame.index
```wren
Frame.index : Num
```
> no docs found   

<endpoint module="luxe: game" class="Frame" signature="delta"></endpoint>
### Frame.delta
```wren
Frame.delta : Num
```
> no docs found   


## FrameSection
```wren
import "luxe: game" for FrameSection
```
> no docs found

<endpoint module="luxe: game" class="FrameSection" signature="begin"></endpoint>
### FrameSection.begin
```wren
FrameSection.begin : String
```
> An enum value for the `begin` section in the loop.
> The `begin section is the start of the frame from the game's perspective.
> 
>   ```js
>   Frame.on(Frame.begin) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="init"></endpoint>
### FrameSection.init
```wren
FrameSection.init : String
```
> An enum value for the `init` section in the loop.
> The `init` section is used for initialization tasks that happen before
> updates, like when a new entity is created, it can be added to a queue and
> processed in init to set some default values before it arrives in `sim` or `visual`.
>     
>   ```js
>   Frame.on(Frame.init) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="sim"></endpoint>
### FrameSection.sim
```wren
FrameSection.sim : String
```
> An enum value for the `sim` section in the loop.
> The `sim` section is for simulation, also known as `update`. 
> In this section you would update game logic and modify things that the `visual` section would reference.
> 
>   ```js
>   Frame.on(Frame.sim) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="visual"></endpoint>
### FrameSection.visual
```wren
FrameSection.visual : String
```
> An enum value for the `visual` section in the loop.
> The `visual` section is for rendering, also known as `render`.
> Updating visual state from the sim states happens here.
> 
>   ```js
>   Frame.on(Frame.visual) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="debug"></endpoint>
### FrameSection.debug
```wren
FrameSection.debug : String
```
> An enum value for the `debug` section in the loop.
> The `debug` part of the loop can perform debug related tasks before the end of the frame and rendering is submitted.
> 
>   ```js
>   Frame.on(Frame.debug) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="end"></endpoint>
### FrameSection.end
```wren
FrameSection.end : String
```
> An enum value for the `end` section in the loop.
> The `end` of the loop can perform tasks after rendering and simulation.
> 
>   ```js
>   Frame.on(Frame.end) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="name(value : Any)"></endpoint>
### FrameSection.name(.)
```wren
FrameSection.name(value : Any) : unknown
```
> no docs found   


## FrameWhen
```wren
import "luxe: game" for FrameWhen
```
> no docs found

<endpoint module="luxe: game" class="FrameWhen" signature="unknown"></endpoint>
### FrameWhen.unknown
```wren
FrameWhen.unknown : String
```
> no docs found   

<endpoint module="luxe: game" class="FrameWhen" signature="before"></endpoint>
### FrameWhen.before
```wren
FrameWhen.before : String
```
> no docs found   

<endpoint module="luxe: game" class="FrameWhen" signature="on"></endpoint>
### FrameWhen.on
```wren
FrameWhen.on : String
```
> no docs found   

<endpoint module="luxe: game" class="FrameWhen" signature="after"></endpoint>
### FrameWhen.after
```wren
FrameWhen.after : String
```
> no docs found   

<endpoint module="luxe: game" class="FrameWhen" signature="name(value : Any)"></endpoint>
### FrameWhen.name(.)
```wren
FrameWhen.name(value : Any) : unknown
```
> no docs found   


## Ready
```wren
import "luxe: game" for Ready
```
> The base class for a luxe game.

<endpoint module="luxe: game" class="Ready" signature="ready()"></endpoint>
### Ready.ready(.)
```wren
Ready.ready() : None
```
> Called via `super()` inside your `ready` function. Must be called.   

<endpoint module="luxe: game" class="Ready" signature="ready(message : String)"></endpoint>
### Ready.ready(.)
```wren
Ready.ready(message : String) : None
```
> Called via `super(message)` inside your `ready` function. Must be called.   

<endpoint module="luxe: game" class="Ready" signature="tick(delta : Num)"></endpoint>
### Ready.tick(.)
```wren
Ready.tick(delta : Num) : None
```
> A default implementation for tick.   

<endpoint module="luxe: game" class="Ready" signature="destroy()"></endpoint>
### Ready.destroy(.)
```wren
Ready.destroy() : None
```
> A default implementation for destroy.   

