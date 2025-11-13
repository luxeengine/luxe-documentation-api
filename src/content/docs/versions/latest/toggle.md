---
title: "luxe: toggle"
description: API version 2025.11.1
---
## `luxe: toggle{:lx}` module

- [Toggle](#toggle)   

---


### Toggle
`import "luxe: toggle" for Toggle{:lx}`
> ```js
>   import "luxe: toggle" for Toggle
> 
>   //set up variables
>   var toggle = Toggle.create()
>   var handle = Strings.add("A")
> 
>   //set up value
>   Toggle.set(toggle, handle, true)
> 
>   Log.print("value: %(Toggle.get(toggle, handle))") //true
> 
>   Toggle.set(toggle, handle, false) //turn off once
>   Toggle.set(toggle, handle, false) //turn off twice
>   Toggle.set(toggle, handle, true) //turn on once
> 
>   //still false here because toggle counts amount of times turned off
>   Log.print("value: %(Toggle.get(toggle, handle))")
> ```

- [create](#Toggle.create)()
- [valid](#Toggle.valid)(**toggle**: `Toggle{:lx}`)
- [destroy](#Toggle.destroy)(**toggle**: `Toggle{:lx}`)
- [set](#Toggle.set+3)(**toggle**: `Toggle{:lx}`, **handle**: `Num{:lx}`, **state**: `Bool{:lx}`)
- [get](#Toggle.get+2)(**toggle**: `Toggle{:lx}`, **handle**: `Num{:lx}`)
- [get](#Toggle.get)(**toggle**: `Toggle{:lx}`)
- [filter](#Toggle.filter+2)(**toggle**: `Toggle{:lx}`, **handles**: `List{:lx}`)
- [link](#Toggle.link+3)(**toggle**: `Toggle{:lx}`, **from_handle**: `Num{:lx}`, **to_handle**: `Num{:lx}`)


---

<endpoint module="luxe: toggle" class="Toggle" signature="create()"></endpoint>
<h4 class="signature_head">Toggle.create</h4><a class="signature-arity" href="#Toggle.create" title="Permanent link">1</a><signature id="Toggle.create">

```lx
Toggle.create() : Toggle
```
</signature>

> Create a new `Toggle` instance.   

<endpoint module="luxe: toggle" class="Toggle" signature="valid(toggle : Toggle)"></endpoint>
<h4 class="signature_head">Toggle.valid</h4><a class="signature-arity" href="#Toggle.valid" title="Permanent link">1</a><signature id="Toggle.valid">

```lx
Toggle.valid(toggle : Toggle) : Bool
```
</signature>

> Does the toggle instance exists.   

<endpoint module="luxe: toggle" class="Toggle" signature="destroy(toggle : Toggle)"></endpoint>
<h4 class="signature_head">Toggle.destroy</h4><a class="signature-arity" href="#Toggle.destroy" title="Permanent link">1</a><signature id="Toggle.destroy">

```lx
Toggle.destroy(toggle : Toggle) : None
```
</signature>

> Destroy the toggle instance and associated data.   

<endpoint module="luxe: toggle" class="Toggle" signature="set(toggle : Toggle, handle : Num, state : Bool)"></endpoint>
<h4 class="signature_head">Toggle.set</h4><a class="signature-arity" href="#Toggle.set+3" title="Permanent link">3</a><signature id="Toggle.set+3">

```lx
Toggle.set(toggle : Toggle, handle : Num, state : Bool) : None
```
</signature>

> Turn the value associated with a handle on or off.
> This counts how often its been turned off and has to be turned on again as often to be counted as on again.
>     
> `turn off`(state = false) -> `turn off` -> `turn on` -> get state is `false`, even though last action was setting it to `true`, but the internal "off count" is still at 1.
> 
> The internal "off count" is never less than 0.   

<endpoint module="luxe: toggle" class="Toggle" signature="get(toggle : Toggle, handle : Num)"></endpoint>
<h4 class="signature_head">Toggle.get</h4><a class="signature-arity" href="#Toggle.get+2" title="Permanent link">2</a><signature id="Toggle.get+2">

```lx
Toggle.get(toggle : Toggle, handle : Num) : Bool
```
</signature>

> Check the state of the handle.   

<endpoint module="luxe: toggle" class="Toggle" signature="get(toggle : Toggle)"></endpoint>
<h4 class="signature_head">Toggle.get</h4><a class="signature-arity" href="#Toggle.get" title="Permanent link">1</a><signature id="Toggle.get">

```lx
Toggle.get(toggle : Toggle) : Bool
```
</signature>

> Get if *all* handles are `true`/`on`. Returns `false` if any are `false`.   

<endpoint module="luxe: toggle" class="Toggle" signature="filter(toggle : Toggle, handles : List)"></endpoint>
<h4 class="signature_head">Toggle.filter</h4><a class="signature-arity" href="#Toggle.filter+2" title="Permanent link">2</a><signature id="Toggle.filter+2">

```lx
Toggle.filter(toggle : Toggle, handles : List) : List
```
</signature>

> Takes a list of handles and returns those that are `true` in the `Toggle`.   

<endpoint module="luxe: toggle" class="Toggle" signature="link(toggle : Toggle, from_handle : Num, to_handle : Num)"></endpoint>
<h4 class="signature_head">Toggle.link</h4><a class="signature-arity" href="#Toggle.link+3" title="Permanent link">3</a><signature id="Toggle.link+3">

```lx
Toggle.link(toggle : Toggle, from_handle : Num, to_handle : Num) : None
```
</signature>

> Links two values, so that the `from_handle` value will be considered `false` if any of the `to_handle` values associated with it are `false`.
> Recursive links will not be taken into consideration.
> One handle can be linked to a maximum of 8 other values.
> Both handles have to be set at least once before for the link to be created.
> 
> ```js
>   import "luxe: toggle" for Toggle
> 
>   //set up variables
>   var toggle = Toggle.create()
>   var handleA = Strings.add("A")
>   var handleB = Strings.add("B")
>   var handleC = Strings.add("C")
> 
>   //set up internal values
>   Toggle.set(toggle, handleA, true)
>   Toggle.set(toggle, handleB, true)
>   Toggle.set(toggle, handleC, true)
> 
>   //set up links
>   Toggle.link(toggle, handleB, handleA)
>   Toggle.link(toggle, handleC, handleB)
> 
>   //all true
>   Log.print("A:%(Toggle.get(toggle, handleA)) - B:%(Toggle.get(toggle, handleB)) - C: %(Toggle.get(toggle, handleC))")
> 
>   Toggle.set(toggle, handleA, false)
>       
>   //A is disabled directly, B is disabled by link, but link is not propagated to C, C is still `true`
>   Log.print("A:%(Toggle.get(toggle, handleA)) - B:%(Toggle.get(toggle, handleB)) - C: %(Toggle.get(toggle, handleC))")
> ```   

