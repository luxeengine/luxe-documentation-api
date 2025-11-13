---
title: "luxe: events"
description: API version 2025.11.1
---
## `luxe: events{:lx}` module

- [Events](#events)   

---


### Events
`import "luxe: events" for Events{:lx}`
> A simple event system for listening to and emitting events.
> 
> Note: this API will likely change to ID based soon, where 
> on listening, an ID will be returned, and use that ID to unlisten 
> rather than needing the function object.

- [new](#Events.new)()
- [once](#Events.once+2)(**tags**: `List{:lx}`, **fn**: `Fn{:lx}`)
- [listen](#Events.listen+2)(**tags**: `List{:lx}`, **fn**: `Fn{:lx}`)
- [unlisten](#Events.unlisten+2)(**tags**: `List{:lx}`, **fn**: `Fn{:lx}`)
- [unlisten_id](#Events.unlisten_id+2)(**tags**: `List{:lx}`, **id**: `String{:lx}`)
- [unlisten](#Events.unlisten)(**tags**: `List{:lx}`)
- [emit](#Events.emit)(**tags**: `List{:lx}`)
- [emit](#Events.emit+2)(**tags**: `List{:lx}`, **data**: `Any{:lx}`)


---

<endpoint module="luxe: events" class="Events" signature="new()"></endpoint>
<h4 class="signature_head">Events.new</h4><a class="signature-arity" href="#Events.new" title="Permanent link">1</a><signature id="Events.new">

```lx
Events.new() : Events
```
</signature>

> Create a new `Events` instance to use.
> 
>   ```js
>   var events = Events.new()
>   ```   

<endpoint module="luxe: events" class="Events" signature="once(tags : List, fn : Fn)"></endpoint>
<h4 class="signature_head">Events.once</h4><a class="signature-arity" href="#Events.once+2" title="Permanent link">2</a><signature id="Events.once+2">

```lx
Events.once(tags : List, fn : Fn) : String
```
</signature>

> Connect a function to the given tags, that is automatically removed after the event is emitted.
> The function takes a single argument, `data`, which is sent from `emit`.
> 
>   ```js
>   events.once(["example"]) {|data|
>     Log.print("event received: data = `%(data)`")
>   }
> 
>   //make the event happen, will call the above function
>   //which prints  event received: data = `321`
>   events.emit(["example"], 321)
>   //fire the event again, but this one does NOT print,
>   //because the event was only listening once
>   events.emit(["example"], 654)
>   ```   

<endpoint module="luxe: events" class="Events" signature="listen(tags : List, fn : Fn)"></endpoint>
<h4 class="signature_head">Events.listen</h4><a class="signature-arity" href="#Events.listen+2" title="Permanent link">2</a><signature id="Events.listen+2">

```lx
Events.listen(tags : List, fn : Fn) : String
```
</signature>

> Connect a function to the given tags. The function will be called each time the event is
> emitted, until `unlisten` is called. The function takes a single argument, `data`, which is sent through `emit`.
> Returns an id that you give to `unlisten`.
> 
>   ```js
>   var tags = ["example", "tags"]
>   var fn = Fn.new {|data|
>     Log.print("data = `%(data)`")
>   }
> 
>   var id = events.listen(tags, fn)
>   events.emit(tags, "hello")          //prints data = `hello`
>   events.emit(tags, { "map":"data" }) //prints data = `{map:data}`
>   events.emit(tags)                   //prints data = `null`
>   events.unlisten_id(tags, id)        //remove the function
>   events.emit(tags)                   //nothing printed
>   ```   

<endpoint module="luxe: events" class="Events" signature="unlisten(tags : List, fn : Fn)"></endpoint>
<h4 class="signature_head">Events.unlisten</h4><a class="signature-arity" href="#Events.unlisten+2" title="Permanent link">2</a><signature id="Events.unlisten+2">

```lx
Events.unlisten(tags : List, fn : Fn) : None
```
</signature>

> Removes a connected function for the specified tags (if one exists), 
> by specifying the same function passed to `listen`. See `listen` for example.
> 
>   ```js
>   events.unlisten(["tag"], fn)
>   ```   

<endpoint module="luxe: events" class="Events" signature="unlisten_id(tags : List, id : String)"></endpoint>
<h4 class="signature_head">Events.unlisten_id</h4><a class="signature-arity" href="#Events.unlisten_id+2" title="Permanent link">2</a><signature id="Events.unlisten_id+2">

```lx
Events.unlisten_id(tags : List, id : String) : None
```
</signature>

> Removes a connected function for the specified tags (if one exists).
> The id is the one returned from `listen`. See `listen` for example.
> 
>   ```js
>   events.unlisten_id(["tag"], id)
>   ```   

<endpoint module="luxe: events" class="Events" signature="unlisten(tags : List)"></endpoint>
<h4 class="signature_head">Events.unlisten</h4><a class="signature-arity" href="#Events.unlisten" title="Permanent link">1</a><signature id="Events.unlisten">

```lx
Events.unlisten(tags : List) : None
```
</signature>

> Removes ALL functions from the specified tags, clearing them.
> 
>   ```js
>   events.unlisten(["tag"])
>   ```   

<endpoint module="luxe: events" class="Events" signature="emit(tags : List)"></endpoint>
<h4 class="signature_head">Events.emit</h4><a class="signature-arity" href="#Events.emit" title="Permanent link">1</a><signature id="Events.emit">

```lx
Events.emit(tags : List) : None
```
</signature>

> Emit the event tags so that any connected functions will be called.
> Sends `null` for the data argument to the functions. See `listen` for an example.
> 
>   ```js
>   events.emit(["tag"])
>   ```   

<endpoint module="luxe: events" class="Events" signature="emit(tags : List, data : Any)"></endpoint>
<h4 class="signature_head">Events.emit</h4><a class="signature-arity" href="#Events.emit+2" title="Permanent link">2</a><signature id="Events.emit+2">

```lx
Events.emit(tags : List, data : Any) : None
```
</signature>

> Emit the event tags so that any connected functions will be called.
> Sends `data` as is for the data argument to the functions. See `listen` for an example.
> 
>   ```js
>   events.emit(["tag"], ["hello"])
>   ```   

