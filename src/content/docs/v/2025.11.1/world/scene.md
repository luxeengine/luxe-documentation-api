---
title: "luxe: world/scene"
description: API version 2025.11.1
slug: "v/2025.11.1/world/scene"
---
- [Scene](#scene)   
- [SceneReady](#sceneready)   
- [Stage](#stage)   

---


## Scene
```lx
import "luxe: world/scene" for Scene
```
> Scenes are collections of entities that are stored together and can be instanced together. If entities in a scene have a transform modifier without a transform parent, the scene root will automatically be set as their parent.
> 
> Once a scene is instanced in a world, all its entities behave just like other entities in the world and get assigned unique entity UUIDs. Relative scene UUIDs, or named entities within a scene can be accessed via the root entity of the scene instance.
> 
> Getting information about a Scene is generally done via the `Entity.___(_)` functions that mention a `context`. Resolving scene addresses is done `Entity.get_addressed_in(scene, address)`.

<endpoint module="luxe: world/scene" class="Scene" signature="create(world : World, scene : Scene)"></endpoint>
### Scene.create(..)
```lx
Scene.create(world : World, scene : Scene) : Entity
```
> Loads a scene from a scene asset. Returns the root entity of the newly loaded scene.
> 
> ```js
>   var main_root = Scene.create(app.world, Asset.scene("scene/main"))
> ```   

<endpoint module="luxe: world/scene" class="Scene" signature="create(world : World, scene : Scene, on_ready : Fn)"></endpoint>
### Scene.create(...)
```lx
Scene.create(world : World, scene : Scene, on_ready : Fn) : Entity
```
> Version of scene load that calls `on_ready` function when done loading (just before scene script runs).   

<endpoint module="luxe: world/scene" class="Scene" signature="has(entity : Entity)"></endpoint>
### Scene.has(.)
```lx
Scene.has(entity : Entity) : unknown
```
> Get if the entity the root of a scene.   

<endpoint module="luxe: world/scene" class="Scene" signature="fix_id(id : String)"></endpoint>
### Scene.fix_id(.)
```lx
Scene.fix_id(id : String) : unknown
```
> Given a full absolute ID to the scene.lx asset, make it a path id (note: temporary solution till asset ids migrate)   

<endpoint module="luxe: world/scene" class="Scene" signature="connect(world : World, scene_id : String, wire : Num, fn : Fn)"></endpoint>
### Scene.connect(....)
```lx
Scene.connect(world : World, scene_id : String, wire : Num, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="Scene" signature="send(scene_id : String, wire : Num, entity : Entity, data : Any)"></endpoint>
### Scene.send(....)
```lx
Scene.send(scene_id : String, wire : Num, entity : Entity, data : Any) : unknown
```
> no docs found   


## SceneReady
```lx
import "luxe: world/scene" for SceneReady
```
> no docs found

### Variables
```lx
var world : World = 0
var scene : Entity = Entity.none
var data : Any = null
var state : States = null
```
<endpoint module="luxe: world/scene" class="SceneReady" signature="new(world : World, scene : Entity)"></endpoint>
### SceneReady.new(..)
```lx
SceneReady.new(world : World, scene : Entity) : SceneReady
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_new(world : World, scene : Entity)"></endpoint>
### SceneReady.editor_new(..)
```lx
SceneReady.editor_new(world : World, scene : Entity) : SceneReady
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="ready(world : World, scene : Entity)"></endpoint>
### SceneReady.ready(..)
```lx
SceneReady.ready(world : World, scene : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="ready()"></endpoint>
### SceneReady.ready(.)
```lx
SceneReady.ready() : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="change(change : SceneChange)"></endpoint>
### SceneReady.change(.)
```lx
SceneReady.change(change : SceneChange) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_change(change : SceneChange)"></endpoint>
### SceneReady.editor_change(.)
```lx
SceneReady.editor_change(change : SceneChange) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_ready(world : World, scene : Entity)"></endpoint>
### SceneReady.editor_ready(..)
```lx
SceneReady.editor_ready(world : World, scene : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_ready()"></endpoint>
### SceneReady.editor_ready(.)
```lx
SceneReady.editor_ready() : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="tick(delta : Num)"></endpoint>
### SceneReady.tick(.)
```lx
SceneReady.tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_tick(delta : Num)"></endpoint>
### SceneReady.editor_tick(.)
```lx
SceneReady.editor_tick(delta : Num) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="destroy(world : World, scene : Entity)"></endpoint>
### SceneReady.destroy(..)
```lx
SceneReady.destroy(world : World, scene : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="destroy()"></endpoint>
### SceneReady.destroy(.)
```lx
SceneReady.destroy() : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_destroy(world : World, scene : Entity)"></endpoint>
### SceneReady.editor_destroy(..)
```lx
SceneReady.editor_destroy(world : World, scene : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/scene" class="SceneReady" signature="editor_destroy()"></endpoint>
### SceneReady.editor_destroy(.)
```lx
SceneReady.editor_destroy() : unknown
```
> no docs found   


## Stage
```lx
import "luxe: world/scene" for Stage
```
> no docs found

<endpoint module="luxe: world/scene" class="Stage" signature="create(world : World, stage : Stage)"></endpoint>
### Stage.create(..)
```lx
Stage.create(world : World, stage : Stage) : unknown
```
> no docs found   

