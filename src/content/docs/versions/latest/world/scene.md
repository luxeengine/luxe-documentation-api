---
title: "luxe: world/scene"
description: API version 2025.11.1
---
## `luxe: world/scene{:lx}` module

- [Scene](#scene)   
- [SceneReady](#sceneready)   
- [Stage](#stage)   

---


### Scene
`import "luxe: world/scene" for Scene{:lx}`
> Scenes are collections of entities that are stored together and can be instanced together. If entities in a scene have a transform modifier without a transform parent, the scene root will automatically be set as their parent.
> 
> Once a scene is instanced in a world, all its entities behave just like other entities in the world and get assigned unique entity UUIDs. Relative scene UUIDs, or named entities within a scene can be accessed via the root entity of the scene instance.
> 
> Getting information about a Scene is generally done via the `Entity.___(_)` functions that mention a `context`. Resolving scene addresses is done `Entity.get_addressed_in(scene, address)`.

- [create](#Scene.create+2)(**world**: `World{:lx}`, **scene**: `Scene{:lx}`)
- [create](#Scene.create+3)(**world**: `World{:lx}`, **scene**: `Scene{:lx}`, **on_ready**: `Fn{:lx}`)
- [has](#Scene.has)(**entity**: `Entity{:lx}`)
- [fix_id](#Scene.fix_id)(**id**: `String{:lx}`)
- [connect](#Scene.connect+4)(**world**: `World{:lx}`, **scene_id**: `String{:lx}`, **wire**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [send](#Scene.send+4)(**scene_id**: `String{:lx}`, **wire**: `Num{:lx}`, **entity**: `Entity{:lx}`, **data**: `Any{:lx}`)


---

<endpoint module="luxe: world/scene" class="Scene" signature="create(world : World, scene : Scene)"></endpoint>
<h4 class="signature_head">Scene.create</h4><a class="signature-arity" href="#Scene.create+2" title="Permanent link">2</a><signature id="Scene.create+2">

```lx
Scene.create(world : World, scene : Scene) : Entity
```
</signature>

> Loads a scene from a scene asset. Returns the root entity of the newly loaded scene.
> 
> ```js
>   var main_root = Scene.create(app.world, Asset.scene("scene/main"))
> ```   

<endpoint module="luxe: world/scene" class="Scene" signature="create(world : World, scene : Scene, on_ready : Fn)"></endpoint>
<h4 class="signature_head">Scene.create</h4><a class="signature-arity" href="#Scene.create+3" title="Permanent link">3</a><signature id="Scene.create+3">

```lx
Scene.create(world : World, scene : Scene, on_ready : Fn) : Entity
```
</signature>

> Version of scene load that calls `on_ready` function when done loading (just before scene script runs).   

<endpoint module="luxe: world/scene" class="Scene" signature="has(entity : Entity)"></endpoint>
<h4 class="signature_head">Scene.has</h4><a class="signature-arity" href="#Scene.has" title="Permanent link">1</a><signature id="Scene.has">

```lx
Scene.has(entity : Entity) : unknown
```
</signature>

> Get if the entity the root of a scene.   

<endpoint module="luxe: world/scene" class="Scene" signature="fix_id(id : String)"></endpoint>
<h4 class="signature_head">Scene.fix_id</h4><a class="signature-arity" href="#Scene.fix_id" title="Permanent link">1</a><signature id="Scene.fix_id">

```lx
Scene.fix_id(id : String) : unknown
```
</signature>

> Given a full absolute ID to the scene.lx asset, make it a path id (note: temporary solution till asset ids migrate)   

<endpoint module="luxe: world/scene" class="Scene" signature="connect(world : World, scene_id : String, wire : Num, fn : Fn)"></endpoint>
<h4 class="signature_head">Scene.connect</h4><a class="signature-arity" href="#Scene.connect+4" title="Permanent link">4</a><signature id="Scene.connect+4">

```lx
Scene.connect(world : World, scene_id : String, wire : Num, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="Scene" signature="send(scene_id : String, wire : Num, entity : Entity, data : Any)"></endpoint>
<h4 class="signature_head">Scene.send</h4><a class="signature-arity" href="#Scene.send+4" title="Permanent link">4</a><signature id="Scene.send+4">

```lx
Scene.send(scene_id : String, wire : Num, entity : Entity, data : Any) : unknown
```
</signature>

> no docs found   


### SceneReady
`import "luxe: world/scene" for SceneReady{:lx}`
> no docs found

- `var world : World = 0{:lx}`
- `var scene : Entity = Entity.none{:lx}`
- `var data : Any = null{:lx}`
- `var state : States = null{:lx}`
- [new](#SceneReady.new+2)(**world**: `World{:lx}`, **scene**: `Entity{:lx}`)
- [editor_new](#SceneReady.editor_new+2)(**world**: `World{:lx}`, **scene**: `Entity{:lx}`)
- [ready](#SceneReady.ready+2)(**world**: `World{:lx}`, **scene**: `Entity{:lx}`)
- [ready](#SceneReady.ready)()
- [change](#SceneReady.change)(**change**: `SceneChange{:lx}`)
- [editor_change](#SceneReady.editor_change)(**change**: `SceneChange{:lx}`)
- [editor_ready](#SceneReady.editor_ready+2)(**world**: `World{:lx}`, **scene**: `Entity{:lx}`)
- [editor_ready](#SceneReady.editor_ready)()
- [tick](#SceneReady.tick)(**delta**: `Num{:lx}`)
- [editor_tick](#SceneReady.editor_tick)(**delta**: `Num{:lx}`)
- [destroy](#SceneReady.destroy+2)(**world**: `World{:lx}`, **scene**: `Entity{:lx}`)
- [destroy](#SceneReady.destroy)()
- [editor_destroy](#SceneReady.editor_destroy+2)(**world**: `World{:lx}`, **scene**: `Entity{:lx}`)
- [editor_destroy](#SceneReady.editor_destroy)()


---

<endpoint module="luxe: world/scene" class="SceneReady" signature="new(world : World, scene : Entity)"></endpoint>
<h4 class="signature_head">SceneReady.new</h4><a class="signature-arity" href="#SceneReady.new+2" title="Permanent link">2</a><signature id="SceneReady.new+2">

```lx
SceneReady.new(world : World, scene : Entity) : SceneReady
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_new(world : World, scene : Entity)"></endpoint>
<h4 class="signature_head">SceneReady.editor_new</h4><a class="signature-arity" href="#SceneReady.editor_new+2" title="Permanent link">2</a><signature id="SceneReady.editor_new+2">

```lx
SceneReady.editor_new(world : World, scene : Entity) : SceneReady
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="ready(world : World, scene : Entity)"></endpoint>
<h4 class="signature_head">SceneReady.ready</h4><a class="signature-arity" href="#SceneReady.ready+2" title="Permanent link">2</a><signature id="SceneReady.ready+2">

```lx
SceneReady.ready(world : World, scene : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="ready()"></endpoint>
<h4 class="signature_head">SceneReady.ready</h4><a class="signature-arity" href="#SceneReady.ready" title="Permanent link">1</a><signature id="SceneReady.ready">

```lx
SceneReady.ready() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="change(change : SceneChange)"></endpoint>
<h4 class="signature_head">SceneReady.change</h4><a class="signature-arity" href="#SceneReady.change" title="Permanent link">1</a><signature id="SceneReady.change">

```lx
SceneReady.change(change : SceneChange) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_change(change : SceneChange)"></endpoint>
<h4 class="signature_head">SceneReady.editor_change</h4><a class="signature-arity" href="#SceneReady.editor_change" title="Permanent link">1</a><signature id="SceneReady.editor_change">

```lx
SceneReady.editor_change(change : SceneChange) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_ready(world : World, scene : Entity)"></endpoint>
<h4 class="signature_head">SceneReady.editor_ready</h4><a class="signature-arity" href="#SceneReady.editor_ready+2" title="Permanent link">2</a><signature id="SceneReady.editor_ready+2">

```lx
SceneReady.editor_ready(world : World, scene : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_ready()"></endpoint>
<h4 class="signature_head">SceneReady.editor_ready</h4><a class="signature-arity" href="#SceneReady.editor_ready" title="Permanent link">1</a><signature id="SceneReady.editor_ready">

```lx
SceneReady.editor_ready() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="tick(delta : Num)"></endpoint>
<h4 class="signature_head">SceneReady.tick</h4><a class="signature-arity" href="#SceneReady.tick" title="Permanent link">1</a><signature id="SceneReady.tick">

```lx
SceneReady.tick(delta : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_tick(delta : Num)"></endpoint>
<h4 class="signature_head">SceneReady.editor_tick</h4><a class="signature-arity" href="#SceneReady.editor_tick" title="Permanent link">1</a><signature id="SceneReady.editor_tick">

```lx
SceneReady.editor_tick(delta : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="destroy(world : World, scene : Entity)"></endpoint>
<h4 class="signature_head">SceneReady.destroy</h4><a class="signature-arity" href="#SceneReady.destroy+2" title="Permanent link">2</a><signature id="SceneReady.destroy+2">

```lx
SceneReady.destroy(world : World, scene : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="destroy()"></endpoint>
<h4 class="signature_head">SceneReady.destroy</h4><a class="signature-arity" href="#SceneReady.destroy" title="Permanent link">1</a><signature id="SceneReady.destroy">

```lx
SceneReady.destroy() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_destroy(world : World, scene : Entity)"></endpoint>
<h4 class="signature_head">SceneReady.editor_destroy</h4><a class="signature-arity" href="#SceneReady.editor_destroy+2" title="Permanent link">2</a><signature id="SceneReady.editor_destroy+2">

```lx
SceneReady.editor_destroy(world : World, scene : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_destroy()"></endpoint>
<h4 class="signature_head">SceneReady.editor_destroy</h4><a class="signature-arity" href="#SceneReady.editor_destroy" title="Permanent link">1</a><signature id="SceneReady.editor_destroy">

```lx
SceneReady.editor_destroy() : unknown
```
</signature>

> no docs found   


### Stage
`import "luxe: world/scene" for Stage{:lx}`
> no docs found

- [create](#Stage.create+2)(**world**: `World{:lx}`, **stage**: `Stage{:lx}`)


---

<endpoint module="luxe: world/scene" class="Stage" signature="create(world : World, stage : Stage)"></endpoint>
<h4 class="signature_head">Stage.create</h4><a class="signature-arity" href="#Stage.create+2" title="Permanent link">2</a><signature id="Stage.create+2">

```lx
Stage.create(world : World, stage : Stage) : unknown
```
</signature>

> no docs found   

