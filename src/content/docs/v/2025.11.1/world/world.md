---
title: "luxe: world/world"
description: API version 2025.11.1
slug: "v/2025.11.1/world/world"
---
- [Wire](#wire)   
- [World](#world)   

---


## Wire
```wren
import "luxe: world/world" for Wire
```
> no docs found

### Variables
```wren
var id : Num = null
var uuid : String = null
var all_uuid : String = null
var type : String = null
var target : String = null
```
<endpoint module="luxe: world/world" class="Wire" signature="create()"></endpoint>
### Wire.create(.)
```wren
Wire.create() : Wire
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(entity : Entity)"></endpoint>
### Wire.send(.)
```wren
Wire.send(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(entity : Entity, data : Any)"></endpoint>
### Wire.send(..)
```wren
Wire.send(entity : Entity, data : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="prepare()"></endpoint>
### Wire.prepare(.)
```wren
Wire.prepare() : Any
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="connect(world : World, uuid : String, fn : Fn)"></endpoint>
### Wire.connect(...)
```wren
Wire.connect(world : World, uuid : String, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="disconnect(world : World, uuid : String, event_id : String)"></endpoint>
### Wire.disconnect(...)
```wren
Wire.disconnect(world : World, uuid : String, event_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(world : World, uuid : String, entity : Entity)"></endpoint>
### Wire.send(...)
```wren
Wire.send(world : World, uuid : String, entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(world : World, uuid : String, entity : Entity, args : Any)"></endpoint>
### Wire.send(....)
```wren
Wire.send(world : World, uuid : String, entity : Entity, args : Any) : unknown
```
> no docs found   


## World
```wren
import "luxe: world/world" for World
```
> no docs found

<endpoint module="luxe: world/world" class="World" signature="none"></endpoint>
### World.none
```wren
World.none : World
```
> A world representing no value. Note, not for comparisons! Use World.valid(entity) for that   

<endpoint module="luxe: world/world" class="World" signature="get_system(world : World, modifier_id : String)"></endpoint>
### World.get_system(..)
```wren
World.get_system(world : World, modifier_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="has_system(world : World, modifier_id : String)"></endpoint>
### World.has_system(..)
```wren
World.has_system(world : World, modifier_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene(world : World, scene_id : String)"></endpoint>
### World.get_scene(..)
```wren
World.get_scene(world : World, scene_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene_for(world : World, scene : Entity)"></endpoint>
### World.get_scene_for(..)
```wren
World.get_scene_for(world : World, scene : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="exists(id : String)"></endpoint>
### World.exists(.)
```wren
World.exists(id : String) : Bool
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="valid(world : World)"></endpoint>
### World.valid(.)
```wren
World.valid(world : World) : Bool
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get(id : String)"></endpoint>
### World.get(.)
```wren
World.get(id : String) : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_id(world : World)"></endpoint>
### World.get_id(.)
```wren
World.get_id(world : World) : String
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_id(world : World, id : String)"></endpoint>
### World.set_id(..)
```wren
World.set_id(world : World, id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_default()"></endpoint>
### World.get_default(.)
```wren
World.get_default() : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_default(world : World)"></endpoint>
### World.set_default(.)
```wren
World.set_default(world : World) : None
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="list(world : World)"></endpoint>
### World.list(.)
```wren
World.list(world : World) : List
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="list_ids(world : World)"></endpoint>
### World.list_ids(.)
```wren
World.list_ids(world : World) : List
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="clear(world : World)"></endpoint>
### World.clear(.)
```wren
World.clear(world : World) : None
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="duplicate(world : World)"></endpoint>
### World.duplicate(.)
```wren
World.duplicate(world : World) : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_add(world : Any, tag : Any)"></endpoint>
### World.tag_add(..)
```wren
World.tag_add(world : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_remove(world : Any, tag : Any)"></endpoint>
### World.tag_remove(..)
```wren
World.tag_remove(world : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_has(world : Any, tag : Any)"></endpoint>
### World.tag_has(..)
```wren
World.tag_has(world : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene_roots(world : World)"></endpoint>
### World.get_scene_roots(.)
```wren
World.get_scene_roots(world : World) : unknown
```
> Returns a Set of scene root entities in the given world   

<endpoint module="luxe: world/world" class="World" signature="get_delta(world : Any)"></endpoint>
### World.get_delta(.)
```wren
World.get_delta(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World, when : FrameWhen, section : FrameSection, priority : Num)"></endpoint>
### World.tick(....)
```wren
World.tick(world : World, when : FrameWhen, section : FrameSection, priority : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World)"></endpoint>
### World.tick(.)
```wren
World.tick(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World, delta : Num)"></endpoint>
### World.tick(..)
```wren
World.tick(world : World, delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="schedule(world : Any, time : Any, count : Any, fn : Any)"></endpoint>
### World.schedule(....)
```wren
World.schedule(world : Any, time : Any, count : Any, fn : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="schedule(world : Any, time : Any, fn : Any)"></endpoint>
### World.schedule(...)
```wren
World.schedule(world : Any, time : Any, fn : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="unschedule(world : Any, handle : Any)"></endpoint>
### World.unschedule(..)
```wren
World.unschedule(world : Any, handle : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any)"></endpoint>
### World.render_with_set(....)
```wren
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any, settings : Any)"></endpoint>
### World.render_with_set(.....)
```wren
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any, settings : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any)"></endpoint>
### World.render_with_set(.......)
```wren
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any)"></endpoint>
### World.render(...)
```wren
World.render(world : Any, camera : Any, target_path : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any, settings : Any)"></endpoint>
### World.render(....)
```wren
World.render(world : Any, camera : Any, target_path : Any, settings : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any)"></endpoint>
### World.render(......)
```wren
World.render(world : Any, camera : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, desc : Any)"></endpoint>
### World.render(..)
```wren
World.render(world : Any, desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_fn(world : Any, camera : Any, target_resource : Any, target_region : Any, settings : Any, fn : Any)"></endpoint>
### World.render_fn(......)
```wren
World.render_fn(world : Any, camera : Any, target_resource : Any, target_region : Any, settings : Any, fn : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_phases(world : World)"></endpoint>
### World.get_phases(.)
```wren
World.get_phases(world : World) : Set
```
> Return the set of phases in the world, in order   

<endpoint module="luxe: world/world" class="World" signature="get_phase_modifiers(world : World, phase : Num, stage : Num)"></endpoint>
### World.get_phase_modifiers(...)
```wren
World.get_phase_modifiers(world : World, phase : Num, stage : Num) : Set
```
> Return a set of modifier ids in the phase/stage   

<endpoint module="luxe: world/world" class="World" signature="get_modifier_block(world : World, modifier_id : String)"></endpoint>
### World.get_modifier_block(..)
```wren
World.get_modifier_block(world : World, modifier_id : String) : Block
```
> Get the block for the given modifier `modifier_id` in `world`   

<endpoint module="luxe: world/world" class="World" signature="get_sorted_modifiers(world : World)"></endpoint>
### World.get_sorted_modifiers(.)
```wren
World.get_sorted_modifiers(world : World) : Set
```
> Get the list of modifiers in `world` (sorted by their order)   

<endpoint module="luxe: world/world" class="World" signature="get_rate(world : Any)"></endpoint>
### World.get_rate(.)
```wren
World.get_rate(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_rate(world : Any, rate : Any)"></endpoint>
### World.set_rate(..)
```wren
World.set_rate(world : Any, rate : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_time(world : Any, time : Any)"></endpoint>
### World.set_time(..)
```wren
World.set_time(world : Any, time : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="time(world : Any)"></endpoint>
### World.time(.)
```wren
World.time(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_visible(entity : Any, tag : Any)"></endpoint>
### World.render_get_visible(..)
```wren
World.render_get_visible(entity : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_visible(entity : Any)"></endpoint>
### World.render_get_visible(.)
```wren
World.render_get_visible(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_visible(entity : Any, state : Any, tag : Any)"></endpoint>
### World.render_set_visible(...)
```wren
World.render_set_visible(entity : Any, state : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_visible(entity : Any, state : Any)"></endpoint>
### World.render_set_visible(..)
```wren
World.render_set_visible(entity : Any, state : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set(world : Any)"></endpoint>
### World.render_set(.)
```wren
World.render_set(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_add(world : Any, geometry : Any)"></endpoint>
### World.render_set_add(..)
```wren
World.render_set_add(world : Any, geometry : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_add(world : Any, geometry : Any, entity : Any)"></endpoint>
### World.render_set_add(...)
```wren
World.render_set_add(world : Any, geometry : Any, entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_remove(world : Any, geometry : Any)"></endpoint>
### World.render_set_remove(..)
```wren
World.render_set_remove(world : Any, geometry : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_remove(world : Any, geometry : Any, entity : Any)"></endpoint>
### World.render_set_remove(...)
```wren
World.render_set_remove(world : Any, geometry : Any, entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_entity(world : Any, geometry : Any)"></endpoint>
### World.render_get_entity(..)
```wren
World.render_get_entity(world : Any, geometry : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_entity_set(entity : Any)"></endpoint>
### World.render_get_entity_set(.)
```wren
World.render_get_entity_set(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="create()"></endpoint>
### World.create(.)
```wren
World.create() : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="create(id : Any)"></endpoint>
### World.create(.)
```wren
World.create(id : Any) : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="destroy(world : World)"></endpoint>
### World.destroy(.)
```wren
World.destroy(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="on_register_system(world : World, fn : Fn)"></endpoint>
### World.on_register_system(..)
```wren
World.on_register_system(world : World, fn : Fn) : Handle
```
> Add a function to be called when a new modifier system is added to a world.   

<endpoint module="luxe: world/world" class="World" signature="off_register_system(world : World, listener : Handle)"></endpoint>
### World.off_register_system(..)
```wren
World.off_register_system(world : World, listener : Handle) : None
```
> Unsubscribe a listener from the creation of new modifier systems.   

<endpoint module="luxe: world/world" class="World" signature="tick_now(world : Any, delta : Any)"></endpoint>
### World.tick_now(..)
```wren
World.tick_now(world : Any, delta : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="live_worlds"></endpoint>
### World.live_worlds
```wren
World.live_worlds : unknown
```
> no docs found   

