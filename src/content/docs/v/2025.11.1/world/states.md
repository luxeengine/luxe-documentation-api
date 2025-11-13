---
title: "luxe: world/states"
description: API version 2025.11.1
slug: "v/2025.11.1/world/states"
---
- [AState](#astate)   
- [EntityState](#entitystate)   
- [EntityStates](#entitystates)   
- [Op](#op)   
- [States](#states)   
- [WireAction](#wireaction)   

---


## AState
```wren
import "luxe: world/states" for AState
```
> no docs found

### Variables
```wren
var id : String = ID.uuid
var name : String = "<unknown>"
var parent : AState = null
var persists : Bool = false
var entities : Map = {}
```
<endpoint module="luxe: world/states" class="AState" signature="persist(yes : Bool)"></endpoint>
### AState.persist(.)
```wren
AState.persist(yes : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="get(entity : Entity)"></endpoint>
### AState.get(.)
```wren
AState.get(entity : Entity) : EntityState
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="enter(entity : Entity, fn : Fn)"></endpoint>
### AState.enter(..)
```wren
AState.enter(entity : Entity, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="reenter(entity : Entity, fn : Fn)"></endpoint>
### AState.reenter(..)
```wren
AState.reenter(entity : Entity, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="exit(entity : Entity, fn : Fn)"></endpoint>
### AState.exit(..)
```wren
AState.exit(entity : Entity, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="tick(entity : Entity, fn : Fn)"></endpoint>
### AState.tick(..)
```wren
AState.tick(entity : Entity, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_after(entity : Entity, state : AState, time : Num)"></endpoint>
### AState.goto_after(...)
```wren
AState.goto_after(entity : Entity, state : AState, time : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_if(entity : Entity, state : AState, fn : Fn)"></endpoint>
### AState.goto_if(...)
```wren
AState.goto_if(entity : Entity, state : AState, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_when(entity : Entity, state : AState, field : String)"></endpoint>
### AState.goto_when(...)
```wren
AState.goto_when(entity : Entity, state : AState, field : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_when(entity : Entity, state : AState, field : String, desired_value : Any)"></endpoint>
### AState.goto_when(....)
```wren
AState.goto_when(entity : Entity, state : AState, field : String, desired_value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_when(entity : Entity, state : AState, field : String, op : Op, desired_value : Any)"></endpoint>
### AState.goto_when(.....)
```wren
AState.goto_when(entity : Entity, state : AState, field : String, op : Op, desired_value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="goto_on(entity : Entity, state : AState, context : String, wire : Num)"></endpoint>
### AState.goto_on(....)
```wren
AState.goto_on(entity : Entity, state : AState, context : String, wire : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="AState" signature="create(in_name : String, in_parent : AState)"></endpoint>
### AState.create(..)
```wren
AState.create(in_name : String, in_parent : AState) : AState
```
> no docs found   


## EntityState
```wren
import "luxe: world/states" for EntityState
```
> no docs found

### Variables
```wren
var time : Num = 0
var timestamp : Num = 0
var actions_enter : List = []
var actions_enter_with_states : List = []
var actions_reenter : List = []
var actions_exit : List = []
var actions_tick : List = []
var actions_if : List = []
var actions_wire : Map = {}
var actions_change : List = []
var state : AState = null
var entity : Entity = 0
```
<endpoint module="luxe: world/states" class="EntityState" signature="new(in_state : AState, in_entity : Entity)"></endpoint>
### EntityState.new(..)
```wren
EntityState.new(in_state : AState, in_entity : Entity) : EntityState
```
> no docs found   


## EntityStates
```wren
import "luxe: world/states" for EntityStates
```
> no docs found

### Variables
```wren
var container : States = null
var entity : Entity = 0
var active : List = []
var previous : AState = null
var current : AState = null
var next : AState = null
```
<endpoint module="luxe: world/states" class="EntityStates" signature="new(in_container : States, in_entity : Entity)"></endpoint>
### EntityStates.new(..)
```wren
EntityStates.new(in_container : States, in_entity : Entity) : EntityStates
```
> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="is_active(state : AState)"></endpoint>
### EntityStates.is_active(.)
```wren
EntityStates.is_active(state : AState) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="make_inactive(state : AState)"></endpoint>
### EntityStates.make_inactive(.)
```wren
EntityStates.make_inactive(state : AState) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="make_active(state : AState)"></endpoint>
### EntityStates.make_active(.)
```wren
EntityStates.make_active(state : AState) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="get_tree(state : AState)"></endpoint>
### EntityStates.get_tree(.)
```wren
EntityStates.get_tree(state : AState) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="goto(goto_state : AState)"></endpoint>
### EntityStates.goto(.)
```wren
EntityStates.goto(goto_state : AState) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="EntityStates" signature="tick(non_world_delta : Num, delta : Num)"></endpoint>
### EntityStates.tick(..)
```wren
EntityStates.tick(non_world_delta : Num, delta : Num) : unknown
```
> no docs found   


## Op
```wren
import "luxe: world/states" for Op
```
> no docs found

<endpoint module="luxe: world/states" class="Op" signature="equal"></endpoint>
### Op.equal
```wren
Op.equal : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="Op" signature="lt"></endpoint>
### Op.lt
```wren
Op.lt : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="Op" signature="lte"></endpoint>
### Op.lte
```wren
Op.lte : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="Op" signature="gt"></endpoint>
### Op.gt
```wren
Op.gt : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="Op" signature="gte"></endpoint>
### Op.gte
```wren
Op.gte : unknown
```
> no docs found   


## States
```wren
import "luxe: world/states" for States
```
> no docs found

### Variables
```wren
var world : World = 0
var data_block : Block = 0
var data_listener : String = null
var entities : Map = {}
```
<endpoint module="luxe: world/states" class="States" signature="tick(delta : Num)"></endpoint>
### States.tick(.)
```wren
States.tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="States" signature="goto(entity : Entity, state : AState)"></endpoint>
### States.goto(..)
```wren
States.goto(entity : Entity, state : AState) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="States" signature="get(entity : Entity)"></endpoint>
### States.get(.)
```wren
States.get(entity : Entity) : EntityStates
```
> no docs found   

<endpoint module="luxe: world/states" class="States" signature="register(entity : Entity)"></endpoint>
### States.register(.)
```wren
States.register(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="States" signature="listen_for_changes()"></endpoint>
### States.listen_for_changes(.)
```wren
States.listen_for_changes() : unknown
```
> no docs found   

<endpoint module="luxe: world/states" class="States" signature="new(in_world : World, in_data_block : Block)"></endpoint>
### States.new(..)
```wren
States.new(in_world : World, in_data_block : Block) : States
```
> no docs found   

<endpoint module="luxe: world/states" class="States" signature="destroy()"></endpoint>
### States.destroy(.)
```wren
States.destroy() : unknown
```
> no docs found   


## WireAction
```wren
import "luxe: world/states" for WireAction
```
> no docs found

### Variables
```wren
var entity : Entity = 0
var connect : String = null
var context : String = null
var wire : Num = 0
var states : List = []
```
<endpoint module="luxe: world/states" class="WireAction" signature="new()"></endpoint>
### WireAction.new(.)
```wren
WireAction.new() : WireAction
```
> no docs found   

