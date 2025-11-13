---
title: "luxe: events"
description: API version 2025.11.1
slug: "v/2025.11.1/events"
---
- [Events](#events)   

---


## Events
```wren
import "luxe: events" for Events
```
> A simple event system for listening to and emitting events.
> 
> Note: this API will likely change to ID based soon, where 
> on listening, an ID will be returned, and use that ID to unlisten 
> rather than needing the function object.

<endpoint module="luxe: events" class="Events" signature="new()"></endpoint>
### Events.new(.)
```wren
Events.new() : Events
```
> Create a new `Events` instance to use.
> 
>   ```js
>   var events = Events.new()
>   ```   

<endpoint module="luxe: events" class="Events" signature="once(tags : List, fn : Fn)"></endpoint>
### Events.once(..)
```wren
Events.once(tags : List, fn : Fn) : String
```
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
### Events.listen(..)
```wren
Events.listen(tags : List, fn : Fn) : String
```
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
### Events.unlisten(..)
```wren
Events.unlisten(tags : List, fn : Fn) : None
```
> Removes a connected function for the specified tags (if one exists), 
> by specifying the same function passed to `listen`. See `listen` for example.
> 
>   ```js
>   events.unlisten(["tag"], fn)
>   ```   

<endpoint module="luxe: events" class="Events" signature="unlisten_id(tags : List, id : String)"></endpoint>
### Events.unlisten_id(..)
```wren
Events.unlisten_id(tags : List, id : String) : None
```
> Removes a connected function for the specified tags (if one exists).
> The id is the one returned from `listen`. See `listen` for example.
> 
>   ```js
>   events.unlisten_id(["tag"], id)
>   ```   

<endpoint module="luxe: events" class="Events" signature="unlisten(tags : List)"></endpoint>
### Events.unlisten(.)
```wren
Events.unlisten(tags : List) : None
```
> Removes ALL functions from the specified tags, clearing them.
> 
>   ```js
>   events.unlisten(["tag"])
>   ```   

<endpoint module="luxe: events" class="Events" signature="emit(tags : List)"></endpoint>
### Events.emit(.)
```wren
Events.emit(tags : List) : None
```
> Emit the event tags so that any connected functions will be called.
> Sends `null` for the data argument to the functions. See `listen` for an example.
> 
>   ```js
>   events.emit(["tag"])
>   ```   

<endpoint module="luxe: events" class="Events" signature="emit(tags : List, data : Any)"></endpoint>
### Events.emit(..)
```wren
Events.emit(tags : List, data : Any) : None
```
> Emit the event tags so that any connected functions will be called.
> Sends `data` as is for the data argument to the functions. See `listen` for an example.
> 
>   ```js
>   events.emit(["tag"], ["hello"])
>   ```   

