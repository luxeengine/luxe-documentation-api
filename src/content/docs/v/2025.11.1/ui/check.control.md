---
title: "luxe: ui/check.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/check.control"
---
- [Data](#data)   
- [UICheck](#uicheck)   

---


## Data
```wren
import "luxe: ui/check.control" for Data
```
> no docs found

### Variables
```wren
var state : Bool = false
var override : Object = Object
```

## UICheck
```wren
import "luxe: ui/check.control" for UICheck
```
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

<endpoint module="luxe: ui/check.control" class="UICheck" signature="create(ui_entity : Entity)"></endpoint>
### UICheck.create(.)
```wren
UICheck.create(ui_entity : Entity) : UICheck
```
> Create a new check control.   

<endpoint module="luxe: ui/check.control" class="UICheck" signature="set_state(control : UICheck, state : Bool)"></endpoint>
### UICheck.set_state(..)
```wren
UICheck.set_state(control : UICheck, state : Bool) : None
```
> Set the current state of a check.   

<endpoint module="luxe: ui/check.control" class="UICheck" signature="get_state(control : UICheck)"></endpoint>
### UICheck.get_state(.)
```wren
UICheck.get_state(control : UICheck) : Bool
```
> Get whether a check is toggled on or off.   

