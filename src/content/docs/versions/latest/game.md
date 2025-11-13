---
title: "luxe: game"
description: API version 2025.11.1
---
## `luxe: game{:lx}` module

- [Frame](#frame)   
- [FrameSection](#framesection)   
- [FrameWhen](#framewhen)   
- [Ready](#ready)   

---


### Frame
`import "luxe: game" for Frame{:lx}`
> Access to the frame and game loop. 
> At the moment, the loop contains fixed sections,
> `begin` -> `init` -> `sim` -> `visual` -> `debug` -> `end`.
> 
> Functions can be hooked into sections of the frame using `before`,
> `after` or `on` ordering.
> 
> Note: This API is a work in progress.

- [begin](#Frame.begin)
- [init](#Frame.init)
- [sim](#Frame.sim)
- [visual](#Frame.visual)
- [debug](#Frame.debug)
- [end](#Frame.end)
- [queue](#Frame.queue)(**fn**: `Fn{:lx}`)
- [next](#Frame.next)(**fn**: `Fn{:lx}`)
- [end](#Frame.end)(**fn**: `Fn{:lx}`)
- [schedule](#Frame.schedule+2)(**time**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [schedule](#Frame.schedule+3)(**time**: `Num{:lx}`, **count**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [unschedule](#Frame.unschedule)(**handle**: `Handle{:lx}`)
- [off](#Frame.off)(**handle**: `Handle{:lx}`)
- [once](#Frame.once+3)(**section**: `String{:lx}`, **priority**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [on](#Frame.on+3)(**section**: `String{:lx}`, **priority**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [before](#Frame.before+3)(**section**: `String{:lx}`, **priority**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [after](#Frame.after+3)(**section**: `String{:lx}`, **priority**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [on](#Frame.on+2)(**section**: `String{:lx}`, **fn**: `Fn{:lx}`)
- [once](#Frame.once+2)(**section**: `String{:lx}`, **fn**: `Fn{:lx}`)
- [before](#Frame.before+2)(**section**: `String{:lx}`, **fn**: `Fn{:lx}`)
- [after](#Frame.after+2)(**section**: `String{:lx}`, **fn**: `Fn{:lx}`)
- [skip](#Frame.skip+2)(**count_frames**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [mark](#Frame.mark+2)(**id**: `String{:lx}`, **display**: `String{:lx}`)
- [get_marks](#Frame.get_marks)(**frame_index**: `Num{:lx}`)
- [index](#Frame.index)
- [delta](#Frame.delta)


---

<endpoint module="luxe: game" class="Frame" signature="begin"></endpoint>
<h4 class="signature_head">Frame.begin</h4><a class="signature-arity" href="#Frame.begin" title="Permanent link">1</a><signature id="Frame.begin">

```lx
Frame.begin : String
```
</signature>

> An enum value for the `begin` section in the loop.
> The `begin section is the start of the frame from the game's perspective.
> 
>   ```js
>   Frame.on(Frame.begin) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="init"></endpoint>
<h4 class="signature_head">Frame.init</h4><a class="signature-arity" href="#Frame.init" title="Permanent link">1</a><signature id="Frame.init">

```lx
Frame.init : String
```
</signature>

> An enum value for the `init` section in the loop.
> The `init` section is used for initialization tasks that happen before
> updates, like when a new entity is created, it can be added to a queue and
> processed in init to set some default values before it arrives in `sim` or `visual`.
>     
>   ```js
>   Frame.on(Frame.init) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="sim"></endpoint>
<h4 class="signature_head">Frame.sim</h4><a class="signature-arity" href="#Frame.sim" title="Permanent link">1</a><signature id="Frame.sim">

```lx
Frame.sim : String
```
</signature>

> An enum value for the `sim` section in the loop.
> The `sim` section is for simulation, also known as `update`. 
> In this section you would update game logic and modify things that the `visual` section would reference.
> 
>   ```js
>   Frame.on(Frame.sim) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="visual"></endpoint>
<h4 class="signature_head">Frame.visual</h4><a class="signature-arity" href="#Frame.visual" title="Permanent link">1</a><signature id="Frame.visual">

```lx
Frame.visual : String
```
</signature>

> An enum value for the `visual` section in the loop.
> The `visual` section is for rendering, also known as `render`.
> Updating visual state from the sim states happens here.
> 
>   ```js
>   Frame.on(Frame.visual) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="debug"></endpoint>
<h4 class="signature_head">Frame.debug</h4><a class="signature-arity" href="#Frame.debug" title="Permanent link">1</a><signature id="Frame.debug">

```lx
Frame.debug : String
```
</signature>

> An enum value for the `debug` section in the loop.
> The `debug` part of the loop can perform debug related tasks before the end of the frame and rendering is submitted.
> 
>   ```js
>   Frame.on(Frame.debug) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="end"></endpoint>
<h4 class="signature_head">Frame.end</h4><a class="signature-arity" href="#Frame.end" title="Permanent link">1</a><signature id="Frame.end">

```lx
Frame.end : String
```
</signature>

> An enum value for the `end` section in the loop.
> The `end` of the loop can perform tasks after rendering and simulation.
> 
>   ```js
>   Frame.on(Frame.end) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="queue(fn : Fn)"></endpoint>
<h4 class="signature_head">Frame.queue</h4><a class="signature-arity" href="#Frame.queue" title="Permanent link">1</a><signature id="Frame.queue">

```lx
Frame.queue(fn : Fn) : None
```
</signature>

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
<h4 class="signature_head">Frame.next</h4><a class="signature-arity" href="#Frame.next" title="Permanent link">1</a><signature id="Frame.next">

```lx
Frame.next(fn : Fn) : None
```
</signature>

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
<h4 class="signature_head">Frame.end</h4><a class="signature-arity" href="#Frame.end" title="Permanent link">1</a><signature id="Frame.end">

```lx
Frame.end(fn : Fn) : None
```
</signature>

> **Once off**. Queue a function to be called at the end of the current frame,
> after all sections.
> 
>   ```js
>   Frame.end {
>     Log.print("end frame!")
>   }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="schedule(time : Num, fn : Fn)"></endpoint>
<h4 class="signature_head">Frame.schedule</h4><a class="signature-arity" href="#Frame.schedule+2" title="Permanent link">2</a><signature id="Frame.schedule+2">

```lx
Frame.schedule(time : Num, fn : Fn) : Handle
```
</signature>

> Schedule a function to be called in future. 
> The `time` value is in seconds, and is not affected by any time scaling.
> The function is only called once. To repeat, see the other `schedule` method.   

<endpoint module="luxe: game" class="Frame" signature="schedule(time : Num, count : Num, fn : Fn)"></endpoint>
<h4 class="signature_head">Frame.schedule</h4><a class="signature-arity" href="#Frame.schedule+3" title="Permanent link">3</a><signature id="Frame.schedule+3">

```lx
Frame.schedule(time : Num, count : Num, fn : Fn) : Handle
```
</signature>

> Schedule a function to be called in future. 
> The `time` value is in seconds, and is not affected by any time scaling.
> If `count` is 0, the function will be called repeatedly until `unschedule` is called.   

<endpoint module="luxe: game" class="Frame" signature="unschedule(handle : Handle)"></endpoint>
<h4 class="signature_head">Frame.unschedule</h4><a class="signature-arity" href="#Frame.unschedule" title="Permanent link">1</a><signature id="Frame.unschedule">

```lx
Frame.unschedule(handle : Handle) : None
```
</signature>

> Unschedule a function scheduled previously, using the handle returned from `schedule`.   

<endpoint module="luxe: game" class="Frame" signature="off(handle : Handle)"></endpoint>
<h4 class="signature_head">Frame.off</h4><a class="signature-arity" href="#Frame.off" title="Permanent link">1</a><signature id="Frame.off">

```lx
Frame.off(handle : Handle) : Bool
```
</signature>

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
<h4 class="signature_head">Frame.once</h4><a class="signature-arity" href="#Frame.once+3" title="Permanent link">3</a><signature id="Frame.once+3">

```lx
Frame.once(section : String, priority : Num, fn : Fn) : Handle
```
</signature>

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
<h4 class="signature_head">Frame.on</h4><a class="signature-arity" href="#Frame.on+3" title="Permanent link">3</a><signature id="Frame.on+3">

```lx
Frame.on(section : String, priority : Num, fn : Fn) : Handle
```
</signature>

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
<h4 class="signature_head">Frame.before</h4><a class="signature-arity" href="#Frame.before+3" title="Permanent link">3</a><signature id="Frame.before+3">

```lx
Frame.before(section : String, priority : Num, fn : Fn) : Handle
```
</signature>

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
<h4 class="signature_head">Frame.after</h4><a class="signature-arity" href="#Frame.after+3" title="Permanent link">3</a><signature id="Frame.after+3">

```lx
Frame.after(section : String, priority : Num, fn : Fn) : Handle
```
</signature>

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
<h4 class="signature_head">Frame.on</h4><a class="signature-arity" href="#Frame.on+2" title="Permanent link">2</a><signature id="Frame.on+2">

```lx
Frame.on(section : String, fn : Fn) : Handle
```
</signature>

> Connect a function to the specified section (with priority 0) which will be executed _during_ the section.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.on(Frame.sim) {|delta| Log.print("delta:%(delta)") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="once(section : String, fn : Fn)"></endpoint>
<h4 class="signature_head">Frame.once</h4><a class="signature-arity" href="#Frame.once+2" title="Permanent link">2</a><signature id="Frame.once+2">

```lx
Frame.once(section : String, fn : Fn) : Handle
```
</signature>

> **Once off**. Queue a function to the specified section (with priority 0) which will be executed _during_ the section.
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.once(Frame.sim) { Log.print("happens during 'sim'") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="before(section : String, fn : Fn)"></endpoint>
<h4 class="signature_head">Frame.before</h4><a class="signature-arity" href="#Frame.before+2" title="Permanent link">2</a><signature id="Frame.before+2">

```lx
Frame.before(section : String, fn : Fn) : Handle
```
</signature>

> Connect a function to the specified section (with priority 0) which will be executed _before_ the section.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.before(Frame.sim) {|delta| Log.print("delta:%(delta)") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="after(section : String, fn : Fn)"></endpoint>
<h4 class="signature_head">Frame.after</h4><a class="signature-arity" href="#Frame.after+2" title="Permanent link">2</a><signature id="Frame.after+2">

```lx
Frame.after(section : String, fn : Fn) : Handle
```
</signature>

> Connect a function to the specified section (with priority 0) which will be executed _after_ the section.
> 
> Returns a handle that can be used to remove the function via `off`.
> 
>   ```js
>   Frame.after(Frame.sim) {|delta| Log.print("delta:%(delta)") }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="skip(count_frames : Num, fn : Fn)"></endpoint>
<h4 class="signature_head">Frame.skip</h4><a class="signature-arity" href="#Frame.skip+2" title="Permanent link">2</a><signature id="Frame.skip+2">

```lx
Frame.skip(count_frames : Num, fn : Fn) : unknown
```
</signature>

> **Once off**. Queue a function to be called at the beginning of the frame `count_frames` from now, 
> before any sections. This is `Frame.next` but can push actions forward by frame count instead of time.
> 
>   ```js
>   Frame.skip(3) {
>     Log.print("three frames from now!")
>   }
>   ```   

<endpoint module="luxe: game" class="Frame" signature="mark(id : String, display : String)"></endpoint>
<h4 class="signature_head">Frame.mark</h4><a class="signature-arity" href="#Frame.mark+2" title="Permanent link">2</a><signature id="Frame.mark+2">

```lx
Frame.mark(id : String, display : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: game" class="Frame" signature="get_marks(frame_index : Num)"></endpoint>
<h4 class="signature_head">Frame.get_marks</h4><a class="signature-arity" href="#Frame.get_marks" title="Permanent link">1</a><signature id="Frame.get_marks">

```lx
Frame.get_marks(frame_index : Num) : List
```
</signature>

> no docs found   

<endpoint module="luxe: game" class="Frame" signature="index"></endpoint>
<h4 class="signature_head">Frame.index</h4><a class="signature-arity" href="#Frame.index" title="Permanent link">1</a><signature id="Frame.index">

```lx
Frame.index : Num
```
</signature>

> no docs found   

<endpoint module="luxe: game" class="Frame" signature="delta"></endpoint>
<h4 class="signature_head">Frame.delta</h4><a class="signature-arity" href="#Frame.delta" title="Permanent link">1</a><signature id="Frame.delta">

```lx
Frame.delta : Num
```
</signature>

> no docs found   


### FrameSection
`import "luxe: game" for FrameSection{:lx}`
> no docs found

- [begin](#FrameSection.begin)
- [init](#FrameSection.init)
- [sim](#FrameSection.sim)
- [visual](#FrameSection.visual)
- [debug](#FrameSection.debug)
- [end](#FrameSection.end)
- [name](#FrameSection.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: game" class="FrameSection" signature="begin"></endpoint>
<h4 class="signature_head">FrameSection.begin</h4><a class="signature-arity" href="#FrameSection.begin" title="Permanent link">1</a><signature id="FrameSection.begin">

```lx
FrameSection.begin : String
```
</signature>

> An enum value for the `begin` section in the loop.
> The `begin section is the start of the frame from the game's perspective.
> 
>   ```js
>   Frame.on(Frame.begin) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="init"></endpoint>
<h4 class="signature_head">FrameSection.init</h4><a class="signature-arity" href="#FrameSection.init" title="Permanent link">1</a><signature id="FrameSection.init">

```lx
FrameSection.init : String
```
</signature>

> An enum value for the `init` section in the loop.
> The `init` section is used for initialization tasks that happen before
> updates, like when a new entity is created, it can be added to a queue and
> processed in init to set some default values before it arrives in `sim` or `visual`.
>     
>   ```js
>   Frame.on(Frame.init) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="sim"></endpoint>
<h4 class="signature_head">FrameSection.sim</h4><a class="signature-arity" href="#FrameSection.sim" title="Permanent link">1</a><signature id="FrameSection.sim">

```lx
FrameSection.sim : String
```
</signature>

> An enum value for the `sim` section in the loop.
> The `sim` section is for simulation, also known as `update`. 
> In this section you would update game logic and modify things that the `visual` section would reference.
> 
>   ```js
>   Frame.on(Frame.sim) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="visual"></endpoint>
<h4 class="signature_head">FrameSection.visual</h4><a class="signature-arity" href="#FrameSection.visual" title="Permanent link">1</a><signature id="FrameSection.visual">

```lx
FrameSection.visual : String
```
</signature>

> An enum value for the `visual` section in the loop.
> The `visual` section is for rendering, also known as `render`.
> Updating visual state from the sim states happens here.
> 
>   ```js
>   Frame.on(Frame.visual) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="debug"></endpoint>
<h4 class="signature_head">FrameSection.debug</h4><a class="signature-arity" href="#FrameSection.debug" title="Permanent link">1</a><signature id="FrameSection.debug">

```lx
FrameSection.debug : String
```
</signature>

> An enum value for the `debug` section in the loop.
> The `debug` part of the loop can perform debug related tasks before the end of the frame and rendering is submitted.
> 
>   ```js
>   Frame.on(Frame.debug) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="end"></endpoint>
<h4 class="signature_head">FrameSection.end</h4><a class="signature-arity" href="#FrameSection.end" title="Permanent link">1</a><signature id="FrameSection.end">

```lx
FrameSection.end : String
```
</signature>

> An enum value for the `end` section in the loop.
> The `end` of the loop can perform tasks after rendering and simulation.
> 
>   ```js
>   Frame.on(Frame.end) {|delta| ... }
>   ```   

<endpoint module="luxe: game" class="FrameSection" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">FrameSection.name</h4><a class="signature-arity" href="#FrameSection.name" title="Permanent link">1</a><signature id="FrameSection.name">

```lx
FrameSection.name(value : Any) : unknown
```
</signature>

> no docs found   


### FrameWhen
`import "luxe: game" for FrameWhen{:lx}`
> no docs found

- [unknown](#FrameWhen.unknown)
- [before](#FrameWhen.before)
- [on](#FrameWhen.on)
- [after](#FrameWhen.after)
- [name](#FrameWhen.name)(**value**: `Any{:lx}`)


---

<endpoint module="luxe: game" class="FrameWhen" signature="unknown"></endpoint>
<h4 class="signature_head">FrameWhen.unknown</h4><a class="signature-arity" href="#FrameWhen.unknown" title="Permanent link">1</a><signature id="FrameWhen.unknown">

```lx
FrameWhen.unknown : String
```
</signature>

> no docs found   

<endpoint module="luxe: game" class="FrameWhen" signature="before"></endpoint>
<h4 class="signature_head">FrameWhen.before</h4><a class="signature-arity" href="#FrameWhen.before" title="Permanent link">1</a><signature id="FrameWhen.before">

```lx
FrameWhen.before : String
```
</signature>

> no docs found   

<endpoint module="luxe: game" class="FrameWhen" signature="on"></endpoint>
<h4 class="signature_head">FrameWhen.on</h4><a class="signature-arity" href="#FrameWhen.on" title="Permanent link">1</a><signature id="FrameWhen.on">

```lx
FrameWhen.on : String
```
</signature>

> no docs found   

<endpoint module="luxe: game" class="FrameWhen" signature="after"></endpoint>
<h4 class="signature_head">FrameWhen.after</h4><a class="signature-arity" href="#FrameWhen.after" title="Permanent link">1</a><signature id="FrameWhen.after">

```lx
FrameWhen.after : String
```
</signature>

> no docs found   

<endpoint module="luxe: game" class="FrameWhen" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">FrameWhen.name</h4><a class="signature-arity" href="#FrameWhen.name" title="Permanent link">1</a><signature id="FrameWhen.name">

```lx
FrameWhen.name(value : Any) : unknown
```
</signature>

> no docs found   


### Ready
`import "luxe: game" for Ready{:lx}`
> The base class for a luxe game.

- [ready](#Ready.ready)()
- [ready](#Ready.ready)(**message**: `String{:lx}`)
- [tick](#Ready.tick)(**delta**: `Num{:lx}`)
- [destroy](#Ready.destroy)()


---

<endpoint module="luxe: game" class="Ready" signature="ready()"></endpoint>
<h4 class="signature_head">Ready.ready</h4><a class="signature-arity" href="#Ready.ready" title="Permanent link">1</a><signature id="Ready.ready">

```lx
Ready.ready() : None
```
</signature>

> Called via `super()` inside your `ready` function. Must be called.   

<endpoint module="luxe: game" class="Ready" signature="ready(message : String)"></endpoint>
<h4 class="signature_head">Ready.ready</h4><a class="signature-arity" href="#Ready.ready" title="Permanent link">1</a><signature id="Ready.ready">

```lx
Ready.ready(message : String) : None
```
</signature>

> Called via `super(message)` inside your `ready` function. Must be called.   

<endpoint module="luxe: game" class="Ready" signature="tick(delta : Num)"></endpoint>
<h4 class="signature_head">Ready.tick</h4><a class="signature-arity" href="#Ready.tick" title="Permanent link">1</a><signature id="Ready.tick">

```lx
Ready.tick(delta : Num) : None
```
</signature>

> A default implementation for tick.   

<endpoint module="luxe: game" class="Ready" signature="destroy()"></endpoint>
<h4 class="signature_head">Ready.destroy</h4><a class="signature-arity" href="#Ready.destroy" title="Permanent link">1</a><signature id="Ready.destroy">

```lx
Ready.destroy() : None
```
</signature>

> A default implementation for destroy.   

