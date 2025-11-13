---
title: "luxe: world/states"
description: API version 2025.11.1
---
## `luxe: world/states{:lx}` module

- [AState](#astate)   
- [EntityState](#entitystate)   
- [EntityStates](#entitystates)   
- [Op](#op)   
- [States](#states)   
- [WireAction](#wireaction)   

---


### AState
`import "luxe: world/states" for AState{:lx}`
> no docs found

- `var id : String = ID.uuid{:lx}`
- `var name : String = "<unknown>"{:lx}`
- `var parent : AState = null{:lx}`
- `var persists : Bool = false{:lx}`
- `var entities : Map = {}{:lx}`
- [persist](#AState.persist)(**yes**: `Bool{:lx}`)
- [get](#AState.get)(**entity**: `Entity{:lx}`)
- [enter](#AState.enter+2)(**entity**: `Entity{:lx}`, **fn**: `Fn{:lx}`)
- [reenter](#AState.reenter+2)(**entity**: `Entity{:lx}`, **fn**: `Fn{:lx}`)
- [exit](#AState.exit+2)(**entity**: `Entity{:lx}`, **fn**: `Fn{:lx}`)
- [tick](#AState.tick+2)(**entity**: `Entity{:lx}`, **fn**: `Fn{:lx}`)
- [goto_after](#AState.goto_after+3)(**entity**: `Entity{:lx}`, **state**: `AState{:lx}`, **time**: `Num{:lx}`)
- [goto_if](#AState.goto_if+3)(**entity**: `Entity{:lx}`, **state**: `AState{:lx}`, **fn**: `Fn{:lx}`)
- [goto_when](#AState.goto_when+3)(**entity**: `Entity{:lx}`, **state**: `AState{:lx}`, **field**: `String{:lx}`)
- [goto_when](#AState.goto_when+4)(**entity**: `Entity{:lx}`, **state**: `AState{:lx}`, **field**: `String{:lx}`, **desired_value**: `Any{:lx}`)
- [goto_when](#AState.goto_when+5)(**entity**: `Entity{:lx}`, **state**: `AState{:lx}`, **field**: `String{:lx}`, **op**: `Op{:lx}`, **desired_value**: `Any{:lx}`)
- [goto_on](#AState.goto_on+4)(**entity**: `Entity{:lx}`, **state**: `AState{:lx}`, **context**: `String{:lx}`, **wire**: `Num{:lx}`)
- [create](#AState.create+2)(**in_name**: `String{:lx}`, **in_parent**: `AState{:lx}`)


---

<endpoint module="luxe: world/states" class="AState" signature="persist(yes : Bool)"></endpoint>
<h4 class="signature_head">AState.persist</h4><a class="signature-arity" href="#AState.persist" title="Permanent link">1</a><signature id="AState.persist">

```lx
AState.persist(yes : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="get(entity : Entity)"></endpoint>
<h4 class="signature_head">AState.get</h4><a class="signature-arity" href="#AState.get" title="Permanent link">1</a><signature id="AState.get">

```lx
AState.get(entity : Entity) : EntityState
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="enter(entity : Entity, fn : Fn)"></endpoint>
<h4 class="signature_head">AState.enter</h4><a class="signature-arity" href="#AState.enter+2" title="Permanent link">2</a><signature id="AState.enter+2">

```lx
AState.enter(entity : Entity, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="reenter(entity : Entity, fn : Fn)"></endpoint>
<h4 class="signature_head">AState.reenter</h4><a class="signature-arity" href="#AState.reenter+2" title="Permanent link">2</a><signature id="AState.reenter+2">

```lx
AState.reenter(entity : Entity, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="exit(entity : Entity, fn : Fn)"></endpoint>
<h4 class="signature_head">AState.exit</h4><a class="signature-arity" href="#AState.exit+2" title="Permanent link">2</a><signature id="AState.exit+2">

```lx
AState.exit(entity : Entity, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="tick(entity : Entity, fn : Fn)"></endpoint>
<h4 class="signature_head">AState.tick</h4><a class="signature-arity" href="#AState.tick+2" title="Permanent link">2</a><signature id="AState.tick+2">

```lx
AState.tick(entity : Entity, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_after(entity : Entity, state : AState, time : Num)"></endpoint>
<h4 class="signature_head">AState.goto_after</h4><a class="signature-arity" href="#AState.goto_after+3" title="Permanent link">3</a><signature id="AState.goto_after+3">

```lx
AState.goto_after(entity : Entity, state : AState, time : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_if(entity : Entity, state : AState, fn : Fn)"></endpoint>
<h4 class="signature_head">AState.goto_if</h4><a class="signature-arity" href="#AState.goto_if+3" title="Permanent link">3</a><signature id="AState.goto_if+3">

```lx
AState.goto_if(entity : Entity, state : AState, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_when(entity : Entity, state : AState, field : String)"></endpoint>
<h4 class="signature_head">AState.goto_when</h4><a class="signature-arity" href="#AState.goto_when+3" title="Permanent link">3</a><signature id="AState.goto_when+3">

```lx
AState.goto_when(entity : Entity, state : AState, field : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_when(entity : Entity, state : AState, field : String, desired_value : Any)"></endpoint>
<h4 class="signature_head">AState.goto_when</h4><a class="signature-arity" href="#AState.goto_when+4" title="Permanent link">4</a><signature id="AState.goto_when+4">

```lx
AState.goto_when(entity : Entity, state : AState, field : String, desired_value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_when(entity : Entity, state : AState, field : String, op : Op, desired_value : Any)"></endpoint>
<h4 class="signature_head">AState.goto_when</h4><a class="signature-arity" href="#AState.goto_when+5" title="Permanent link">5</a><signature id="AState.goto_when+5">

```lx
AState.goto_when(entity : Entity, state : AState, field : String, op : Op, desired_value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_on(entity : Entity, state : AState, context : String, wire : Num)"></endpoint>
<h4 class="signature_head">AState.goto_on</h4><a class="signature-arity" href="#AState.goto_on+4" title="Permanent link">4</a><signature id="AState.goto_on+4">

```lx
AState.goto_on(entity : Entity, state : AState, context : String, wire : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="create(in_name : String, in_parent : AState)"></endpoint>
<h4 class="signature_head">AState.create</h4><a class="signature-arity" href="#AState.create+2" title="Permanent link">2</a><signature id="AState.create+2">

```lx
AState.create(in_name : String, in_parent : AState) : AState
```
</signature>

> no docs found   


### EntityState
`import "luxe: world/states" for EntityState{:lx}`
> no docs found

- `var time : Num = 0{:lx}`
- `var timestamp : Num = 0{:lx}`
- `var actions_enter : List = []{:lx}`
- `var actions_enter_with_states : List = []{:lx}`
- `var actions_reenter : List = []{:lx}`
- `var actions_exit : List = []{:lx}`
- `var actions_tick : List = []{:lx}`
- `var actions_if : List = []{:lx}`
- `var actions_wire : Map = {}{:lx}`
- `var actions_change : List = []{:lx}`
- `var state : AState = null{:lx}`
- `var entity : Entity = 0{:lx}`
- [new](#EntityState.new+2)(**in_state**: `AState{:lx}`, **in_entity**: `Entity{:lx}`)


---

<endpoint module="luxe: world/states" class="EntityState" signature="new(in_state : AState, in_entity : Entity)"></endpoint>
<h4 class="signature_head">EntityState.new</h4><a class="signature-arity" href="#EntityState.new+2" title="Permanent link">2</a><signature id="EntityState.new+2">

```lx
EntityState.new(in_state : AState, in_entity : Entity) : EntityState
```
</signature>

> no docs found   


### EntityStates
`import "luxe: world/states" for EntityStates{:lx}`
> no docs found

- `var container : States = null{:lx}`
- `var entity : Entity = 0{:lx}`
- `var active : List = []{:lx}`
- `var previous : AState = null{:lx}`
- `var current : AState = null{:lx}`
- `var next : AState = null{:lx}`
- [new](#EntityStates.new+2)(**in_container**: `States{:lx}`, **in_entity**: `Entity{:lx}`)
- [is_active](#EntityStates.is_active)(**state**: `AState{:lx}`)
- [make_inactive](#EntityStates.make_inactive)(**state**: `AState{:lx}`)
- [make_active](#EntityStates.make_active)(**state**: `AState{:lx}`)
- [get_tree](#EntityStates.get_tree)(**state**: `AState{:lx}`)
- [goto](#EntityStates.goto)(**goto_state**: `AState{:lx}`)
- [tick](#EntityStates.tick+2)(**non_world_delta**: `Num{:lx}`, **delta**: `Num{:lx}`)


---

<endpoint module="luxe: world/states" class="EntityStates" signature="new(in_container : States, in_entity : Entity)"></endpoint>
<h4 class="signature_head">EntityStates.new</h4><a class="signature-arity" href="#EntityStates.new+2" title="Permanent link">2</a><signature id="EntityStates.new+2">

```lx
EntityStates.new(in_container : States, in_entity : Entity) : EntityStates
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="is_active(state : AState)"></endpoint>
<h4 class="signature_head">EntityStates.is_active</h4><a class="signature-arity" href="#EntityStates.is_active" title="Permanent link">1</a><signature id="EntityStates.is_active">

```lx
EntityStates.is_active(state : AState) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="make_inactive(state : AState)"></endpoint>
<h4 class="signature_head">EntityStates.make_inactive</h4><a class="signature-arity" href="#EntityStates.make_inactive" title="Permanent link">1</a><signature id="EntityStates.make_inactive">

```lx
EntityStates.make_inactive(state : AState) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="make_active(state : AState)"></endpoint>
<h4 class="signature_head">EntityStates.make_active</h4><a class="signature-arity" href="#EntityStates.make_active" title="Permanent link">1</a><signature id="EntityStates.make_active">

```lx
EntityStates.make_active(state : AState) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="get_tree(state : AState)"></endpoint>
<h4 class="signature_head">EntityStates.get_tree</h4><a class="signature-arity" href="#EntityStates.get_tree" title="Permanent link">1</a><signature id="EntityStates.get_tree">

```lx
EntityStates.get_tree(state : AState) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="goto(goto_state : AState)"></endpoint>
<h4 class="signature_head">EntityStates.goto</h4><a class="signature-arity" href="#EntityStates.goto" title="Permanent link">1</a><signature id="EntityStates.goto">

```lx
EntityStates.goto(goto_state : AState) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="tick(non_world_delta : Num, delta : Num)"></endpoint>
<h4 class="signature_head">EntityStates.tick</h4><a class="signature-arity" href="#EntityStates.tick+2" title="Permanent link">2</a><signature id="EntityStates.tick+2">

```lx
EntityStates.tick(non_world_delta : Num, delta : Num) : unknown
```
</signature>

> no docs found   


### Op
`import "luxe: world/states" for Op{:lx}`
> no docs found

- [equal](#Op.equal)
- [lt](#Op.lt)
- [lte](#Op.lte)
- [gt](#Op.gt)
- [gte](#Op.gte)


---

<endpoint module="luxe: world/states" class="Op" signature="equal"></endpoint>
<h4 class="signature_head">Op.equal</h4><a class="signature-arity" href="#Op.equal" title="Permanent link">1</a><signature id="Op.equal">

```lx
Op.equal : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="Op" signature="lt"></endpoint>
<h4 class="signature_head">Op.lt</h4><a class="signature-arity" href="#Op.lt" title="Permanent link">1</a><signature id="Op.lt">

```lx
Op.lt : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="Op" signature="lte"></endpoint>
<h4 class="signature_head">Op.lte</h4><a class="signature-arity" href="#Op.lte" title="Permanent link">1</a><signature id="Op.lte">

```lx
Op.lte : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="Op" signature="gt"></endpoint>
<h4 class="signature_head">Op.gt</h4><a class="signature-arity" href="#Op.gt" title="Permanent link">1</a><signature id="Op.gt">

```lx
Op.gt : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="Op" signature="gte"></endpoint>
<h4 class="signature_head">Op.gte</h4><a class="signature-arity" href="#Op.gte" title="Permanent link">1</a><signature id="Op.gte">

```lx
Op.gte : unknown
```
</signature>

> no docs found   


### States
`import "luxe: world/states" for States{:lx}`
> no docs found

- `var world : World = 0{:lx}`
- `var data_block : Block = 0{:lx}`
- `var data_listener : String = null{:lx}`
- `var entities : Map = {}{:lx}`
- [tick](#States.tick)(**delta**: `Num{:lx}`)
- [goto](#States.goto+2)(**entity**: `Entity{:lx}`, **state**: `AState{:lx}`)
- [get](#States.get)(**entity**: `Entity{:lx}`)
- [register](#States.register)(**entity**: `Entity{:lx}`)
- [listen_for_changes](#States.listen_for_changes)()
- [new](#States.new+2)(**in_world**: `World{:lx}`, **in_data_block**: `Block{:lx}`)
- [destroy](#States.destroy)()


---

<endpoint module="luxe: world/states" class="States" signature="tick(delta : Num)"></endpoint>
<h4 class="signature_head">States.tick</h4><a class="signature-arity" href="#States.tick" title="Permanent link">1</a><signature id="States.tick">

```lx
States.tick(delta : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="States" signature="goto(entity : Entity, state : AState)"></endpoint>
<h4 class="signature_head">States.goto</h4><a class="signature-arity" href="#States.goto+2" title="Permanent link">2</a><signature id="States.goto+2">

```lx
States.goto(entity : Entity, state : AState) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="States" signature="get(entity : Entity)"></endpoint>
<h4 class="signature_head">States.get</h4><a class="signature-arity" href="#States.get" title="Permanent link">1</a><signature id="States.get">

```lx
States.get(entity : Entity) : EntityStates
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="States" signature="register(entity : Entity)"></endpoint>
<h4 class="signature_head">States.register</h4><a class="signature-arity" href="#States.register" title="Permanent link">1</a><signature id="States.register">

```lx
States.register(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="States" signature="listen_for_changes()"></endpoint>
<h4 class="signature_head">States.listen_for_changes</h4><a class="signature-arity" href="#States.listen_for_changes" title="Permanent link">1</a><signature id="States.listen_for_changes">

```lx
States.listen_for_changes() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="States" signature="new(in_world : World, in_data_block : Block)"></endpoint>
<h4 class="signature_head">States.new</h4><a class="signature-arity" href="#States.new+2" title="Permanent link">2</a><signature id="States.new+2">

```lx
States.new(in_world : World, in_data_block : Block) : States
```
</signature>

> no docs found   

<endpoint module="luxe: world/states" class="States" signature="destroy()"></endpoint>
<h4 class="signature_head">States.destroy</h4><a class="signature-arity" href="#States.destroy" title="Permanent link">1</a><signature id="States.destroy">

```lx
States.destroy() : unknown
```
</signature>

> no docs found   


### WireAction
`import "luxe: world/states" for WireAction{:lx}`
> no docs found

- `var entity : Entity = 0{:lx}`
- `var connect : String = null{:lx}`
- `var context : String = null{:lx}`
- `var wire : Num = 0{:lx}`
- `var states : List = []{:lx}`
- [new](#WireAction.new)()


---

<endpoint module="luxe: world/states" class="WireAction" signature="new()"></endpoint>
<h4 class="signature_head">WireAction.new</h4><a class="signature-arity" href="#WireAction.new" title="Permanent link">1</a><signature id="WireAction.new">

```lx
WireAction.new() : WireAction
```
</signature>

> no docs found   

