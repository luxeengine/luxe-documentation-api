---
title: "luxe: world/world"
description: API version 2025.11.1
---
## `luxe: world/world{:lx}` module

- [Wire](#wire)   
- [World](#world)   

---


### Wire
`import "luxe: world/world" for Wire{:lx}`
> no docs found

- `var id : Num = null{:lx}`
- `var uuid : String = null{:lx}`
- `var all_uuid : String = null{:lx}`
- `var type : String = null{:lx}`
- `var target : String = null{:lx}`
- [create](#Wire.create)()
- [send](#Wire.send)(**entity**: `Entity{:lx}`)
- [send](#Wire.send+2)(**entity**: `Entity{:lx}`, **data**: `Any{:lx}`)
- [prepare](#Wire.prepare)()
- [connect](#Wire.connect+3)(**world**: `World{:lx}`, **uuid**: `String{:lx}`, **fn**: `Fn{:lx}`)
- [disconnect](#Wire.disconnect+3)(**world**: `World{:lx}`, **uuid**: `String{:lx}`, **event_id**: `String{:lx}`)
- [send](#Wire.send+3)(**world**: `World{:lx}`, **uuid**: `String{:lx}`, **entity**: `Entity{:lx}`)
- [send](#Wire.send+4)(**world**: `World{:lx}`, **uuid**: `String{:lx}`, **entity**: `Entity{:lx}`, **args**: `Any{:lx}`)


---

<endpoint module="luxe: world/world" class="Wire" signature="create()"></endpoint>
<h4 class="signature_head">Wire.create</h4><a class="signature-arity" href="#Wire.create" title="Permanent link">1</a><signature id="Wire.create">

```lx
Wire.create() : Wire
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(entity : Entity)"></endpoint>
<h4 class="signature_head">Wire.send</h4><a class="signature-arity" href="#Wire.send" title="Permanent link">1</a><signature id="Wire.send">

```lx
Wire.send(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(entity : Entity, data : Any)"></endpoint>
<h4 class="signature_head">Wire.send</h4><a class="signature-arity" href="#Wire.send+2" title="Permanent link">2</a><signature id="Wire.send+2">

```lx
Wire.send(entity : Entity, data : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="prepare()"></endpoint>
<h4 class="signature_head">Wire.prepare</h4><a class="signature-arity" href="#Wire.prepare" title="Permanent link">1</a><signature id="Wire.prepare">

```lx
Wire.prepare() : Any
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="connect(world : World, uuid : String, fn : Fn)"></endpoint>
<h4 class="signature_head">Wire.connect</h4><a class="signature-arity" href="#Wire.connect+3" title="Permanent link">3</a><signature id="Wire.connect+3">

```lx
Wire.connect(world : World, uuid : String, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="disconnect(world : World, uuid : String, event_id : String)"></endpoint>
<h4 class="signature_head">Wire.disconnect</h4><a class="signature-arity" href="#Wire.disconnect+3" title="Permanent link">3</a><signature id="Wire.disconnect+3">

```lx
Wire.disconnect(world : World, uuid : String, event_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(world : World, uuid : String, entity : Entity)"></endpoint>
<h4 class="signature_head">Wire.send</h4><a class="signature-arity" href="#Wire.send+3" title="Permanent link">3</a><signature id="Wire.send+3">

```lx
Wire.send(world : World, uuid : String, entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="Wire" signature="send(world : World, uuid : String, entity : Entity, args : Any)"></endpoint>
<h4 class="signature_head">Wire.send</h4><a class="signature-arity" href="#Wire.send+4" title="Permanent link">4</a><signature id="Wire.send+4">

```lx
Wire.send(world : World, uuid : String, entity : Entity, args : Any) : unknown
```
</signature>

> no docs found   


### World
`import "luxe: world/world" for World{:lx}`
> no docs found

- [none](#World.none)
- [get_system](#World.get_system+2)(**world**: `World{:lx}`, **modifier_id**: `String{:lx}`)
- [has_system](#World.has_system+2)(**world**: `World{:lx}`, **modifier_id**: `String{:lx}`)
- [get_scene](#World.get_scene+2)(**world**: `World{:lx}`, **scene_id**: `String{:lx}`)
- [get_scene_for](#World.get_scene_for+2)(**world**: `World{:lx}`, **scene**: `Entity{:lx}`)
- [exists](#World.exists)(**id**: `String{:lx}`)
- [valid](#World.valid)(**world**: `World{:lx}`)
- [get](#World.get)(**id**: `String{:lx}`)
- [get_id](#World.get_id)(**world**: `World{:lx}`)
- [set_id](#World.set_id+2)(**world**: `World{:lx}`, **id**: `String{:lx}`)
- [get_default](#World.get_default)()
- [set_default](#World.set_default)(**world**: `World{:lx}`)
- [list](#World.list)(**world**: `World{:lx}`)
- [list_ids](#World.list_ids)(**world**: `World{:lx}`)
- [clear](#World.clear)(**world**: `World{:lx}`)
- [duplicate](#World.duplicate)(**world**: `World{:lx}`)
- [tag_add](#World.tag_add+2)(**world**: `Any{:lx}`, **tag**: `Any{:lx}`)
- [tag_remove](#World.tag_remove+2)(**world**: `Any{:lx}`, **tag**: `Any{:lx}`)
- [tag_has](#World.tag_has+2)(**world**: `Any{:lx}`, **tag**: `Any{:lx}`)
- [get_scene_roots](#World.get_scene_roots)(**world**: `World{:lx}`)
- [get_delta](#World.get_delta)(**world**: `Any{:lx}`)
- [tick](#World.tick+4)(**world**: `World{:lx}`, **when**: `FrameWhen{:lx}`, **section**: `FrameSection{:lx}`, **priority**: `Num{:lx}`)
- [tick](#World.tick)(**world**: `World{:lx}`)
- [tick](#World.tick+2)(**world**: `World{:lx}`, **delta**: `Num{:lx}`)
- [schedule](#World.schedule+4)(**world**: `Any{:lx}`, **time**: `Any{:lx}`, **count**: `Any{:lx}`, **fn**: `Any{:lx}`)
- [schedule](#World.schedule+3)(**world**: `Any{:lx}`, **time**: `Any{:lx}`, **fn**: `Any{:lx}`)
- [unschedule](#World.unschedule+2)(**world**: `Any{:lx}`, **handle**: `Any{:lx}`)
- [render_with_set](#World.render_with_set+4)(**world**: `Any{:lx}`, **camera**: `Any{:lx}`, **set**: `Any{:lx}`, **target_path**: `Any{:lx}`)
- [render_with_set](#World.render_with_set+5)(**world**: `Any{:lx}`, **camera**: `Any{:lx}`, **set**: `Any{:lx}`, **target_path**: `Any{:lx}`, **settings**: `Any{:lx}`)
- [render_with_set](#World.render_with_set+7)(**world**: `Any{:lx}`, **camera**: `Any{:lx}`, **set**: `Any{:lx}`, **target_path**: `Any{:lx}`, **target_resource**: `Any{:lx}`, **target_region**: `Any{:lx}`, **settings**: `Any{:lx}`)
- [render](#World.render+3)(**world**: `Any{:lx}`, **camera**: `Any{:lx}`, **target_path**: `Any{:lx}`)
- [render](#World.render+4)(**world**: `Any{:lx}`, **camera**: `Any{:lx}`, **target_path**: `Any{:lx}`, **settings**: `Any{:lx}`)
- [render](#World.render+6)(**world**: `Any{:lx}`, **camera**: `Any{:lx}`, **target_path**: `Any{:lx}`, **target_resource**: `Any{:lx}`, **target_region**: `Any{:lx}`, **settings**: `Any{:lx}`)
- [render](#World.render+2)(**world**: `Any{:lx}`, **desc**: `Any{:lx}`)
- [render_fn](#World.render_fn+6)(**world**: `Any{:lx}`, **camera**: `Any{:lx}`, **target_resource**: `Any{:lx}`, **target_region**: `Any{:lx}`, **settings**: `Any{:lx}`, **fn**: `Any{:lx}`)
- [get_phases](#World.get_phases)(**world**: `World{:lx}`)
- [get_phase_modifiers](#World.get_phase_modifiers+3)(**world**: `World{:lx}`, **phase**: `Num{:lx}`, **stage**: `Num{:lx}`)
- [get_modifier_block](#World.get_modifier_block+2)(**world**: `World{:lx}`, **modifier_id**: `String{:lx}`)
- [get_sorted_modifiers](#World.get_sorted_modifiers)(**world**: `World{:lx}`)
- [get_rate](#World.get_rate)(**world**: `Any{:lx}`)
- [set_rate](#World.set_rate+2)(**world**: `Any{:lx}`, **rate**: `Any{:lx}`)
- [set_time](#World.set_time+2)(**world**: `Any{:lx}`, **time**: `Any{:lx}`)
- [time](#World.time)(**world**: `Any{:lx}`)
- [render_get_visible](#World.render_get_visible+2)(**entity**: `Any{:lx}`, **tag**: `Any{:lx}`)
- [render_get_visible](#World.render_get_visible)(**entity**: `Any{:lx}`)
- [render_set_visible](#World.render_set_visible+3)(**entity**: `Any{:lx}`, **state**: `Any{:lx}`, **tag**: `Any{:lx}`)
- [render_set_visible](#World.render_set_visible+2)(**entity**: `Any{:lx}`, **state**: `Any{:lx}`)
- [render_set](#World.render_set)(**world**: `Any{:lx}`)
- [render_set_add](#World.render_set_add+2)(**world**: `Any{:lx}`, **geometry**: `Any{:lx}`)
- [render_set_add](#World.render_set_add+3)(**world**: `Any{:lx}`, **geometry**: `Any{:lx}`, **entity**: `Any{:lx}`)
- [render_set_remove](#World.render_set_remove+2)(**world**: `Any{:lx}`, **geometry**: `Any{:lx}`)
- [render_set_remove](#World.render_set_remove+3)(**world**: `Any{:lx}`, **geometry**: `Any{:lx}`, **entity**: `Any{:lx}`)
- [render_get_entity](#World.render_get_entity+2)(**world**: `Any{:lx}`, **geometry**: `Any{:lx}`)
- [render_get_entity_set](#World.render_get_entity_set)(**entity**: `Any{:lx}`)
- [create](#World.create)()
- [create](#World.create)(**id**: `Any{:lx}`)
- [destroy](#World.destroy)(**world**: `World{:lx}`)
- [on_register_system](#World.on_register_system+2)(**world**: `World{:lx}`, **fn**: `Fn{:lx}`)
- [off_register_system](#World.off_register_system+2)(**world**: `World{:lx}`, **listener**: `Handle{:lx}`)
- [tick_now](#World.tick_now+2)(**world**: `Any{:lx}`, **delta**: `Any{:lx}`)
- [live_worlds](#World.live_worlds)


---

<endpoint module="luxe: world/world" class="World" signature="none"></endpoint>
<h4 class="signature_head">World.none</h4><a class="signature-arity" href="#World.none" title="Permanent link">1</a><signature id="World.none">

```lx
World.none : World
```
</signature>

> A world representing no value. Note, not for comparisons! Use World.valid(entity) for that   

<endpoint module="luxe: world/world" class="World" signature="get_system(world : World, modifier_id : String)"></endpoint>
<h4 class="signature_head">World.get_system</h4><a class="signature-arity" href="#World.get_system+2" title="Permanent link">2</a><signature id="World.get_system+2">

```lx
World.get_system(world : World, modifier_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="has_system(world : World, modifier_id : String)"></endpoint>
<h4 class="signature_head">World.has_system</h4><a class="signature-arity" href="#World.has_system+2" title="Permanent link">2</a><signature id="World.has_system+2">

```lx
World.has_system(world : World, modifier_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene(world : World, scene_id : String)"></endpoint>
<h4 class="signature_head">World.get_scene</h4><a class="signature-arity" href="#World.get_scene+2" title="Permanent link">2</a><signature id="World.get_scene+2">

```lx
World.get_scene(world : World, scene_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene_for(world : World, scene : Entity)"></endpoint>
<h4 class="signature_head">World.get_scene_for</h4><a class="signature-arity" href="#World.get_scene_for+2" title="Permanent link">2</a><signature id="World.get_scene_for+2">

```lx
World.get_scene_for(world : World, scene : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="exists(id : String)"></endpoint>
<h4 class="signature_head">World.exists</h4><a class="signature-arity" href="#World.exists" title="Permanent link">1</a><signature id="World.exists">

```lx
World.exists(id : String) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="valid(world : World)"></endpoint>
<h4 class="signature_head">World.valid</h4><a class="signature-arity" href="#World.valid" title="Permanent link">1</a><signature id="World.valid">

```lx
World.valid(world : World) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get(id : String)"></endpoint>
<h4 class="signature_head">World.get</h4><a class="signature-arity" href="#World.get" title="Permanent link">1</a><signature id="World.get">

```lx
World.get(id : String) : World
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_id(world : World)"></endpoint>
<h4 class="signature_head">World.get_id</h4><a class="signature-arity" href="#World.get_id" title="Permanent link">1</a><signature id="World.get_id">

```lx
World.get_id(world : World) : String
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_id(world : World, id : String)"></endpoint>
<h4 class="signature_head">World.set_id</h4><a class="signature-arity" href="#World.set_id+2" title="Permanent link">2</a><signature id="World.set_id+2">

```lx
World.set_id(world : World, id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_default()"></endpoint>
<h4 class="signature_head">World.get_default</h4><a class="signature-arity" href="#World.get_default" title="Permanent link">1</a><signature id="World.get_default">

```lx
World.get_default() : World
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_default(world : World)"></endpoint>
<h4 class="signature_head">World.set_default</h4><a class="signature-arity" href="#World.set_default" title="Permanent link">1</a><signature id="World.set_default">

```lx
World.set_default(world : World) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="list(world : World)"></endpoint>
<h4 class="signature_head">World.list</h4><a class="signature-arity" href="#World.list" title="Permanent link">1</a><signature id="World.list">

```lx
World.list(world : World) : List
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="list_ids(world : World)"></endpoint>
<h4 class="signature_head">World.list_ids</h4><a class="signature-arity" href="#World.list_ids" title="Permanent link">1</a><signature id="World.list_ids">

```lx
World.list_ids(world : World) : List
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="clear(world : World)"></endpoint>
<h4 class="signature_head">World.clear</h4><a class="signature-arity" href="#World.clear" title="Permanent link">1</a><signature id="World.clear">

```lx
World.clear(world : World) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="duplicate(world : World)"></endpoint>
<h4 class="signature_head">World.duplicate</h4><a class="signature-arity" href="#World.duplicate" title="Permanent link">1</a><signature id="World.duplicate">

```lx
World.duplicate(world : World) : World
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_add(world : Any, tag : Any)"></endpoint>
<h4 class="signature_head">World.tag_add</h4><a class="signature-arity" href="#World.tag_add+2" title="Permanent link">2</a><signature id="World.tag_add+2">

```lx
World.tag_add(world : Any, tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_remove(world : Any, tag : Any)"></endpoint>
<h4 class="signature_head">World.tag_remove</h4><a class="signature-arity" href="#World.tag_remove+2" title="Permanent link">2</a><signature id="World.tag_remove+2">

```lx
World.tag_remove(world : Any, tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tag_has(world : Any, tag : Any)"></endpoint>
<h4 class="signature_head">World.tag_has</h4><a class="signature-arity" href="#World.tag_has+2" title="Permanent link">2</a><signature id="World.tag_has+2">

```lx
World.tag_has(world : Any, tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_scene_roots(world : World)"></endpoint>
<h4 class="signature_head">World.get_scene_roots</h4><a class="signature-arity" href="#World.get_scene_roots" title="Permanent link">1</a><signature id="World.get_scene_roots">

```lx
World.get_scene_roots(world : World) : unknown
```
</signature>

> Returns a Set of scene root entities in the given world   

<endpoint module="luxe: world/world" class="World" signature="get_delta(world : Any)"></endpoint>
<h4 class="signature_head">World.get_delta</h4><a class="signature-arity" href="#World.get_delta" title="Permanent link">1</a><signature id="World.get_delta">

```lx
World.get_delta(world : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World, when : FrameWhen, section : FrameSection, priority : Num)"></endpoint>
<h4 class="signature_head">World.tick</h4><a class="signature-arity" href="#World.tick+4" title="Permanent link">4</a><signature id="World.tick+4">

```lx
World.tick(world : World, when : FrameWhen, section : FrameSection, priority : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World)"></endpoint>
<h4 class="signature_head">World.tick</h4><a class="signature-arity" href="#World.tick" title="Permanent link">1</a><signature id="World.tick">

```lx
World.tick(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="tick(world : World, delta : Num)"></endpoint>
<h4 class="signature_head">World.tick</h4><a class="signature-arity" href="#World.tick+2" title="Permanent link">2</a><signature id="World.tick+2">

```lx
World.tick(world : World, delta : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="schedule(world : Any, time : Any, count : Any, fn : Any)"></endpoint>
<h4 class="signature_head">World.schedule</h4><a class="signature-arity" href="#World.schedule+4" title="Permanent link">4</a><signature id="World.schedule+4">

```lx
World.schedule(world : Any, time : Any, count : Any, fn : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="schedule(world : Any, time : Any, fn : Any)"></endpoint>
<h4 class="signature_head">World.schedule</h4><a class="signature-arity" href="#World.schedule+3" title="Permanent link">3</a><signature id="World.schedule+3">

```lx
World.schedule(world : Any, time : Any, fn : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="unschedule(world : Any, handle : Any)"></endpoint>
<h4 class="signature_head">World.unschedule</h4><a class="signature-arity" href="#World.unschedule+2" title="Permanent link">2</a><signature id="World.unschedule+2">

```lx
World.unschedule(world : Any, handle : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any)"></endpoint>
<h4 class="signature_head">World.render_with_set</h4><a class="signature-arity" href="#World.render_with_set+4" title="Permanent link">4</a><signature id="World.render_with_set+4">

```lx
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any, settings : Any)"></endpoint>
<h4 class="signature_head">World.render_with_set</h4><a class="signature-arity" href="#World.render_with_set+5" title="Permanent link">5</a><signature id="World.render_with_set+5">

```lx
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any, settings : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_with_set(world : Any, camera : Any, set : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any)"></endpoint>
<h4 class="signature_head">World.render_with_set</h4><a class="signature-arity" href="#World.render_with_set+7" title="Permanent link">7</a><signature id="World.render_with_set+7">

```lx
World.render_with_set(world : Any, camera : Any, set : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any)"></endpoint>
<h4 class="signature_head">World.render</h4><a class="signature-arity" href="#World.render+3" title="Permanent link">3</a><signature id="World.render+3">

```lx
World.render(world : Any, camera : Any, target_path : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any, settings : Any)"></endpoint>
<h4 class="signature_head">World.render</h4><a class="signature-arity" href="#World.render+4" title="Permanent link">4</a><signature id="World.render+4">

```lx
World.render(world : Any, camera : Any, target_path : Any, settings : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, camera : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any)"></endpoint>
<h4 class="signature_head">World.render</h4><a class="signature-arity" href="#World.render+6" title="Permanent link">6</a><signature id="World.render+6">

```lx
World.render(world : Any, camera : Any, target_path : Any, target_resource : Any, target_region : Any, settings : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render(world : Any, desc : Any)"></endpoint>
<h4 class="signature_head">World.render</h4><a class="signature-arity" href="#World.render+2" title="Permanent link">2</a><signature id="World.render+2">

```lx
World.render(world : Any, desc : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_fn(world : Any, camera : Any, target_resource : Any, target_region : Any, settings : Any, fn : Any)"></endpoint>
<h4 class="signature_head">World.render_fn</h4><a class="signature-arity" href="#World.render_fn+6" title="Permanent link">6</a><signature id="World.render_fn+6">

```lx
World.render_fn(world : Any, camera : Any, target_resource : Any, target_region : Any, settings : Any, fn : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="get_phases(world : World)"></endpoint>
<h4 class="signature_head">World.get_phases</h4><a class="signature-arity" href="#World.get_phases" title="Permanent link">1</a><signature id="World.get_phases">

```lx
World.get_phases(world : World) : Set
```
</signature>

> Return the set of phases in the world, in order   

<endpoint module="luxe: world/world" class="World" signature="get_phase_modifiers(world : World, phase : Num, stage : Num)"></endpoint>
<h4 class="signature_head">World.get_phase_modifiers</h4><a class="signature-arity" href="#World.get_phase_modifiers+3" title="Permanent link">3</a><signature id="World.get_phase_modifiers+3">

```lx
World.get_phase_modifiers(world : World, phase : Num, stage : Num) : Set
```
</signature>

> Return a set of modifier ids in the phase/stage   

<endpoint module="luxe: world/world" class="World" signature="get_modifier_block(world : World, modifier_id : String)"></endpoint>
<h4 class="signature_head">World.get_modifier_block</h4><a class="signature-arity" href="#World.get_modifier_block+2" title="Permanent link">2</a><signature id="World.get_modifier_block+2">

```lx
World.get_modifier_block(world : World, modifier_id : String) : Block
```
</signature>

> Get the block for the given modifier `modifier_id` in `world`   

<endpoint module="luxe: world/world" class="World" signature="get_sorted_modifiers(world : World)"></endpoint>
<h4 class="signature_head">World.get_sorted_modifiers</h4><a class="signature-arity" href="#World.get_sorted_modifiers" title="Permanent link">1</a><signature id="World.get_sorted_modifiers">

```lx
World.get_sorted_modifiers(world : World) : Set
```
</signature>

> Get the list of modifiers in `world` (sorted by their order)   

<endpoint module="luxe: world/world" class="World" signature="get_rate(world : Any)"></endpoint>
<h4 class="signature_head">World.get_rate</h4><a class="signature-arity" href="#World.get_rate" title="Permanent link">1</a><signature id="World.get_rate">

```lx
World.get_rate(world : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_rate(world : Any, rate : Any)"></endpoint>
<h4 class="signature_head">World.set_rate</h4><a class="signature-arity" href="#World.set_rate+2" title="Permanent link">2</a><signature id="World.set_rate+2">

```lx
World.set_rate(world : Any, rate : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="set_time(world : Any, time : Any)"></endpoint>
<h4 class="signature_head">World.set_time</h4><a class="signature-arity" href="#World.set_time+2" title="Permanent link">2</a><signature id="World.set_time+2">

```lx
World.set_time(world : Any, time : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="time(world : Any)"></endpoint>
<h4 class="signature_head">World.time</h4><a class="signature-arity" href="#World.time" title="Permanent link">1</a><signature id="World.time">

```lx
World.time(world : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_visible(entity : Any, tag : Any)"></endpoint>
<h4 class="signature_head">World.render_get_visible</h4><a class="signature-arity" href="#World.render_get_visible+2" title="Permanent link">2</a><signature id="World.render_get_visible+2">

```lx
World.render_get_visible(entity : Any, tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_visible(entity : Any)"></endpoint>
<h4 class="signature_head">World.render_get_visible</h4><a class="signature-arity" href="#World.render_get_visible" title="Permanent link">1</a><signature id="World.render_get_visible">

```lx
World.render_get_visible(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_visible(entity : Any, state : Any, tag : Any)"></endpoint>
<h4 class="signature_head">World.render_set_visible</h4><a class="signature-arity" href="#World.render_set_visible+3" title="Permanent link">3</a><signature id="World.render_set_visible+3">

```lx
World.render_set_visible(entity : Any, state : Any, tag : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_visible(entity : Any, state : Any)"></endpoint>
<h4 class="signature_head">World.render_set_visible</h4><a class="signature-arity" href="#World.render_set_visible+2" title="Permanent link">2</a><signature id="World.render_set_visible+2">

```lx
World.render_set_visible(entity : Any, state : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set(world : Any)"></endpoint>
<h4 class="signature_head">World.render_set</h4><a class="signature-arity" href="#World.render_set" title="Permanent link">1</a><signature id="World.render_set">

```lx
World.render_set(world : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_add(world : Any, geometry : Any)"></endpoint>
<h4 class="signature_head">World.render_set_add</h4><a class="signature-arity" href="#World.render_set_add+2" title="Permanent link">2</a><signature id="World.render_set_add+2">

```lx
World.render_set_add(world : Any, geometry : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_add(world : Any, geometry : Any, entity : Any)"></endpoint>
<h4 class="signature_head">World.render_set_add</h4><a class="signature-arity" href="#World.render_set_add+3" title="Permanent link">3</a><signature id="World.render_set_add+3">

```lx
World.render_set_add(world : Any, geometry : Any, entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_remove(world : Any, geometry : Any)"></endpoint>
<h4 class="signature_head">World.render_set_remove</h4><a class="signature-arity" href="#World.render_set_remove+2" title="Permanent link">2</a><signature id="World.render_set_remove+2">

```lx
World.render_set_remove(world : Any, geometry : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_set_remove(world : Any, geometry : Any, entity : Any)"></endpoint>
<h4 class="signature_head">World.render_set_remove</h4><a class="signature-arity" href="#World.render_set_remove+3" title="Permanent link">3</a><signature id="World.render_set_remove+3">

```lx
World.render_set_remove(world : Any, geometry : Any, entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_entity(world : Any, geometry : Any)"></endpoint>
<h4 class="signature_head">World.render_get_entity</h4><a class="signature-arity" href="#World.render_get_entity+2" title="Permanent link">2</a><signature id="World.render_get_entity+2">

```lx
World.render_get_entity(world : Any, geometry : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="render_get_entity_set(entity : Any)"></endpoint>
<h4 class="signature_head">World.render_get_entity_set</h4><a class="signature-arity" href="#World.render_get_entity_set" title="Permanent link">1</a><signature id="World.render_get_entity_set">

```lx
World.render_get_entity_set(entity : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="create()"></endpoint>
<h4 class="signature_head">World.create</h4><a class="signature-arity" href="#World.create" title="Permanent link">1</a><signature id="World.create">

```lx
World.create() : World
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="create(id : Any)"></endpoint>
<h4 class="signature_head">World.create</h4><a class="signature-arity" href="#World.create" title="Permanent link">1</a><signature id="World.create">

```lx
World.create(id : Any) : World
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="destroy(world : World)"></endpoint>
<h4 class="signature_head">World.destroy</h4><a class="signature-arity" href="#World.destroy" title="Permanent link">1</a><signature id="World.destroy">

```lx
World.destroy(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="on_register_system(world : World, fn : Fn)"></endpoint>
<h4 class="signature_head">World.on_register_system</h4><a class="signature-arity" href="#World.on_register_system+2" title="Permanent link">2</a><signature id="World.on_register_system+2">

```lx
World.on_register_system(world : World, fn : Fn) : Handle
```
</signature>

> Add a function to be called when a new modifier system is added to a world.   

<endpoint module="luxe: world/world" class="World" signature="off_register_system(world : World, listener : Handle)"></endpoint>
<h4 class="signature_head">World.off_register_system</h4><a class="signature-arity" href="#World.off_register_system+2" title="Permanent link">2</a><signature id="World.off_register_system+2">

```lx
World.off_register_system(world : World, listener : Handle) : None
```
</signature>

> Unsubscribe a listener from the creation of new modifier systems.   

<endpoint module="luxe: world/world" class="World" signature="tick_now(world : Any, delta : Any)"></endpoint>
<h4 class="signature_head">World.tick_now</h4><a class="signature-arity" href="#World.tick_now+2" title="Permanent link">2</a><signature id="World.tick_now+2">

```lx
World.tick_now(world : Any, delta : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/world" class="World" signature="live_worlds"></endpoint>
<h4 class="signature_head">World.live_worlds</h4><a class="signature-arity" href="#World.live_worlds" title="Permanent link">1</a><signature id="World.live_worlds">

```lx
World.live_worlds : unknown
```
</signature>

> no docs found   

