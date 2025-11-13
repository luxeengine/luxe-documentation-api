---
title: "luxe: world/world"
description: API version 2025.11.1
slug: "v/2025.11.1/world/world"
---
- [Wire](#wire)   
- [World](#world)   

---


## Wire
```lx
import "luxe: world/world" for Wire
```
> no docs found

### Variables
```lx
var id : Num = null
var uuid : String = null
var all_uuid : String = null
var type : String = null
var target : String = null
```
<endpoint module="luxe: world/world" class="Wire" signature="create()"></endpoint>
### Wire.create(.)
```lx
Wire.create() : Wire
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(entity : Entity)"></endpoint>
### Wire.send(.)
```lx
Wire.send(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(entity : Entity, data : Any)"></endpoint>
### Wire.send(..)
```lx
Wire.send(entity : Entity, data : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="prepare()"></endpoint>
### Wire.prepare(.)
```lx
Wire.prepare() : Any
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="connect(world : World, uuid : String, fn : Fn)"></endpoint>
### Wire.connect(...)
```lx
Wire.connect(world : World, uuid : String, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="disconnect(world : World, uuid : String, event_id : String)"></endpoint>
### Wire.disconnect(...)
```lx
Wire.disconnect(world : World, uuid : String, event_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(world : World, uuid : String, entity : Entity)"></endpoint>
### Wire.send(...)
```lx
Wire.send(world : World, uuid : String, entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(world : World, uuid : String, entity : Entity, args : Any)"></endpoint>
### Wire.send(....)
```lx
Wire.send(world : World, uuid : String, entity : Entity, args : Any) : unknown
```
> no docs found   


## World
```lx
import "luxe: world/world" for World
```
> no docs found

<endpoint module="luxe: world/world" class="World" signature="none"></endpoint>
### World.none
```lx
World.none : World
```
> A world representing no value. Note, not for comparisons! Use World.valid(entity) for that   

<endpoint module="luxe: world/world" class="World" signature="get_system(world : World, modifier_id : String)"></endpoint>
### World.get_system(..)
```lx
World.get_system(world : World, modifier_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="has_system(world : World, modifier_id : String)"></endpoint>
### World.has_system(..)
```lx
World.has_system(world : World, modifier_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene(world : World, scene_id : String)"></endpoint>
### World.get_scene(..)
```lx
World.get_scene(world : World, scene_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene_for(world : World, scene : Entity)"></endpoint>
### World.get_scene_for(..)
```lx
World.get_scene_for(world : World, scene : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="exists(id : String)"></endpoint>
### World.exists(.)
```lx
World.exists(id : String) : Bool
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="valid(world : World)"></endpoint>
### World.valid(.)
```lx
World.valid(world : World) : Bool
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get(id : String)"></endpoint>
### World.get(.)
```lx
World.get(id : String) : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_id(world : World)"></endpoint>
### World.get_id(.)
```lx
World.get_id(world : World) : String
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_id(world : World, id : String)"></endpoint>
### World.set_id(..)
```lx
World.set_id(world : World, id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_default()"></endpoint>
### World.get_default(.)
```lx
World.get_default() : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_default(world : World)"></endpoint>
### World.set_default(.)
```lx
World.set_default(world : World) : None
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="list(world : World)"></endpoint>
### World.list(.)
```lx
World.list(world : World) : List
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="list_ids(world : World)"></endpoint>
### World.list_ids(.)
```lx
World.list_ids(world : World) : List
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="clear(world : World)"></endpoint>
### World.clear(.)
```lx
World.clear(world : World) : None
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="duplicate(world : World)"></endpoint>
### World.duplicate(.)
```lx
World.duplicate(world : World) : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_add(world : Any, tag : Any)"></endpoint>
### World.tag_add(..)
```lx
World.tag_add(world : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_remove(world : Any, tag : Any)"></endpoint>
### World.tag_remove(..)
```lx
World.tag_remove(world : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_has(world : Any, tag : Any)"></endpoint>
### World.tag_has(..)
```lx
World.tag_has(world : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene_roots(world : World)"></endpoint>
### World.get_scene_roots(.)
```lx
World.get_scene_roots(world : World) : unknown
```
> Returns a Set of scene root entities in the given world   

<endpoint module="luxe: world/world" class="World" signature="get_delta(world : Any)"></endpoint>
### World.get_delta(.)
```lx
World.get_delta(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World, when : FrameWhen, section : FrameSection, priority : Num)"></endpoint>
### World.tick(....)
```lx
World.tick(world : World, when : FrameWhen, section : FrameSection, priority : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World)"></endpoint>
### World.tick(.)
```lx
World.tick(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World, delta : Num)"></endpoint>
### World.tick(..)
```lx
World.tick(world : World, delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="schedule(world : Any, time : Any, count : Any, fn : Any)"></endpoint>
### World.schedule(....)
```lx
World.schedule(world : Any, time : Any, count : Any, fn : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="schedule(world : Any, time : Any, fn : Any)"></endpoint>
### World.schedule(...)
```lx
World.schedule(world : Any, time : Any, fn : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="unschedule(world : Any, handle : Any)"></endpoint>
### World.unschedule(..)
```lx
World.unschedule(world : Any, handle : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any)"></endpoint>
### World.render_with_set(....)
```lx
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any, settings : Any)"></endpoint>
### World.render_with_set(.....)
```lx
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any, settings : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any)"></endpoint>
### World.render_with_set(.......)
```lx
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any)"></endpoint>
### World.render(...)
```lx
World.render(world : Any, camera : Any, target_path : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any, settings : Any)"></endpoint>
### World.render(....)
```lx
World.render(world : Any, camera : Any, target_path : Any, settings : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any)"></endpoint>
### World.render(......)
```lx
World.render(world : Any, camera : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, desc : Any)"></endpoint>
### World.render(..)
```lx
World.render(world : Any, desc : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_fn(world : Any, camera : Any, target_resource : Any, target_region : Any, settings : Any, fn : Any)"></endpoint>
### World.render_fn(......)
```lx
World.render_fn(world : Any, camera : Any, target_resource : Any, target_region : Any, settings : Any, fn : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_phases(world : World)"></endpoint>
### World.get_phases(.)
```lx
World.get_phases(world : World) : Set
```
> Return the set of phases in the world, in order   

<endpoint module="luxe: world/world" class="World" signature="get_phase_modifiers(world : World, phase : Num, stage : Num)"></endpoint>
### World.get_phase_modifiers(...)
```lx
World.get_phase_modifiers(world : World, phase : Num, stage : Num) : Set
```
> Return a set of modifier ids in the phase/stage   

<endpoint module="luxe: world/world" class="World" signature="get_modifier_block(world : World, modifier_id : String)"></endpoint>
### World.get_modifier_block(..)
```lx
World.get_modifier_block(world : World, modifier_id : String) : Block
```
> Get the block for the given modifier `modifier_id` in `world`   

<endpoint module="luxe: world/world" class="World" signature="get_sorted_modifiers(world : World)"></endpoint>
### World.get_sorted_modifiers(.)
```lx
World.get_sorted_modifiers(world : World) : Set
```
> Get the list of modifiers in `world` (sorted by their order)   

<endpoint module="luxe: world/world" class="World" signature="get_rate(world : Any)"></endpoint>
### World.get_rate(.)
```lx
World.get_rate(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_rate(world : Any, rate : Any)"></endpoint>
### World.set_rate(..)
```lx
World.set_rate(world : Any, rate : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_time(world : Any, time : Any)"></endpoint>
### World.set_time(..)
```lx
World.set_time(world : Any, time : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="time(world : Any)"></endpoint>
### World.time(.)
```lx
World.time(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_visible(entity : Any, tag : Any)"></endpoint>
### World.render_get_visible(..)
```lx
World.render_get_visible(entity : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_visible(entity : Any)"></endpoint>
### World.render_get_visible(.)
```lx
World.render_get_visible(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_visible(entity : Any, state : Any, tag : Any)"></endpoint>
### World.render_set_visible(...)
```lx
World.render_set_visible(entity : Any, state : Any, tag : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_visible(entity : Any, state : Any)"></endpoint>
### World.render_set_visible(..)
```lx
World.render_set_visible(entity : Any, state : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set(world : Any)"></endpoint>
### World.render_set(.)
```lx
World.render_set(world : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_add(world : Any, geometry : Any)"></endpoint>
### World.render_set_add(..)
```lx
World.render_set_add(world : Any, geometry : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_add(world : Any, geometry : Any, entity : Any)"></endpoint>
### World.render_set_add(...)
```lx
World.render_set_add(world : Any, geometry : Any, entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_remove(world : Any, geometry : Any)"></endpoint>
### World.render_set_remove(..)
```lx
World.render_set_remove(world : Any, geometry : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_remove(world : Any, geometry : Any, entity : Any)"></endpoint>
### World.render_set_remove(...)
```lx
World.render_set_remove(world : Any, geometry : Any, entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_entity(world : Any, geometry : Any)"></endpoint>
### World.render_get_entity(..)
```lx
World.render_get_entity(world : Any, geometry : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_entity_set(entity : Any)"></endpoint>
### World.render_get_entity_set(.)
```lx
World.render_get_entity_set(entity : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="create()"></endpoint>
### World.create(.)
```lx
World.create() : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="create(id : Any)"></endpoint>
### World.create(.)
```lx
World.create(id : Any) : World
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="destroy(world : World)"></endpoint>
### World.destroy(.)
```lx
World.destroy(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="on_register_system(world : World, fn : Fn)"></endpoint>
### World.on_register_system(..)
```lx
World.on_register_system(world : World, fn : Fn) : Handle
```
> Add a function to be called when a new modifier system is added to a world.   

<endpoint module="luxe: world/world" class="World" signature="off_register_system(world : World, listener : Handle)"></endpoint>
### World.off_register_system(..)
```lx
World.off_register_system(world : World, listener : Handle) : None
```
> Unsubscribe a listener from the creation of new modifier systems.   

<endpoint module="luxe: world/world" class="World" signature="tick_now(world : Any, delta : Any)"></endpoint>
### World.tick_now(..)
```lx
World.tick_now(world : Any, delta : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/world" class="World" signature="live_worlds"></endpoint>
### World.live_worlds
```lx
World.live_worlds : unknown
```
> no docs found   

