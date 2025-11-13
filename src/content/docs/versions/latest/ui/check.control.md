---
title: "luxe: ui/check.control"
description: API version 2025.11.1
---
## `luxe: ui/check.control{:lx}` module

- [Data](#data)   
- [UICheck](#uicheck)   

---


### Data
`import "luxe: ui/check.control" for Data{:lx}`
> no docs found

- `var state : Bool = false{:lx}`
- `var override : Object = Object{:lx}`


---


### UICheck
`import "luxe: ui/check.control" for UICheck{:lx}`
> `UICheck` is a `Control` that represents a boolean toggle.
> 
>   ```js
>   var check = UICheck.create(ui)
>   UICheck.set_state(check, true)
>   Control.set_events(check) {|event|
>     if(event.type == UIEvent.change) {
>       Log.print("Check is toggled %(event.change ? "on" : "off")")
>     }
>   }
>   ```

- [create](#UICheck.create)(**ui_entity**: `Entity{:lx}`)
- [set_state](#UICheck.set_state+2)(**control**: `UICheck{:lx}`, **state**: `Bool{:lx}`)
- [get_state](#UICheck.get_state)(**control**: `UICheck{:lx}`)


---

<endpoint module="luxe: ui/check.control" class="UICheck" signature="create(ui_entity : Entity)"></endpoint>
<h4 class="signature_head">UICheck.create</h4><a class="signature-arity" href="#UICheck.create" title="Permanent link">1</a><signature id="UICheck.create">

```lx
UICheck.create(ui_entity : Entity) : UICheck
```
</signature>

> Create a new check control.   

<endpoint module="luxe: ui/check.control" class="UICheck" signature="set_state(control : UICheck, state : Bool)"></endpoint>
<h4 class="signature_head">UICheck.set_state</h4><a class="signature-arity" href="#UICheck.set_state+2" title="Permanent link">2</a><signature id="UICheck.set_state+2">

```lx
UICheck.set_state(control : UICheck, state : Bool) : None
```
</signature>

> Set the current state of a check.   

<endpoint module="luxe: ui/check.control" class="UICheck" signature="get_state(control : UICheck)"></endpoint>
<h4 class="signature_head">UICheck.get_state</h4><a class="signature-arity" href="#UICheck.get_state" title="Permanent link">1</a><signature id="UICheck.get_state">

```lx
UICheck.get_state(control : UICheck) : Bool
```
</signature>

> Get whether a check is toggled on or off.   

