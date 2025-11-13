---
title: "luxe: world"
description: API version 2025.11.1
---
## `luxe: world{:lx}` module

- [Clock](#clock)   
- [Entity](#entity)   
- [EntityContextType](#entitycontexttype)   
- [EntityEventType](#entityeventtype)   
- [ModifierEventType](#modifiereventtype)   
- [UI](#ui)   
- [UIBehave](#uibehave)   
- [UIClear](#uiclear)   
- [UIContain](#uicontain)   
- [UIDebugMode](#uidebugmode)   
- [UIDrop](#uidrop)   
- [UIEvent](#uievent)   
- [UIImageFit](#uiimagefit)   
- [UIImageFlags](#uiimageflags)   
- [UILayoutMode](#uilayoutmode)   
- [UIRenderMode](#uirendermode)   
- [WorldEventType](#worldeventtype)   
- [WorldRenderDesc](#worldrenderdesc)   

---


### Clock
`import "luxe: world" for Clock{:lx}`
> no docs found

- [create](#Clock.create+3)(**world**: `World{:lx}`, **rate**: `Num{:lx}`, **paused**: `Bool{:lx}`)
- [create](#Clock.create+2)(**world**: `World{:lx}`, **rate**: `Num{:lx}`)
- [time](#Clock.time+2)(**world**: `World{:lx}`, **clock**: `Clock{:lx}`)


---

<endpoint module="luxe: world" class="Clock" signature="create(world : World, rate : Num, paused : Bool)"></endpoint>
<h4 class="signature_head">Clock.create</h4><a class="signature-arity" href="#Clock.create+3" title="Permanent link">3</a><signature id="Clock.create+3">

```lx
Clock.create(world : World, rate : Num, paused : Bool) : Clock
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="Clock" signature="create(world : World, rate : Num)"></endpoint>
<h4 class="signature_head">Clock.create</h4><a class="signature-arity" href="#Clock.create+2" title="Permanent link">2</a><signature id="Clock.create+2">

```lx
Clock.create(world : World, rate : Num) : Clock
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="Clock" signature="time(world : World, clock : Clock)"></endpoint>
<h4 class="signature_head">Clock.time</h4><a class="signature-arity" href="#Clock.time+2" title="Permanent link">2</a><signature id="Clock.time+2">

```lx
Clock.time(world : World, clock : Clock) : Num
```
</signature>

> no docs found   


### Entity
`import "luxe: world" for Entity{:lx}`
> Anything that exists in a world is a `entity`. The entity itself is just a handle (represented by a number) with which modifiers and a name can be associated. Entities are very lightweight, so creating and destroying many of them usually isnt a concern.
> 
> An entity in itself does not have a transform (you can attach the `transform` modifier to it to gain that) or any kind of hierarchy (different implicit hierarchies can result from modifiers).
> Entities can be created manually in code, or loaded as Scenes or Prototypes.

- [none](#Entity.none)
- [create](#Entity.create)(**world**: `World{:lx}`)
- [create](#Entity.create+2)(**world**: `World{:lx}`, **name**: `String{:lx}`)
- [valid](#Entity.valid)(**entity**: `Entity{:lx}`)
- [valid_handle](#Entity.valid_handle)(**entity**: `Entity{:lx}`)
- [get_world](#Entity.get_world)(**entity**: `Entity{:lx}`)
- [get](#Entity.get)(**uuid**: `String{:lx}`)
- [get_addressed_in](#Entity.get_addressed_in+2)(**context_root**: `Entity{:lx}`, **address**: `List{:lx}`)
- [get_addressed](#Entity.get_addressed+2)(**relative_to**: `Entity{:lx}`, **address**: `List{:lx}`)
- [resolve](#Entity.resolve+2)(**relative_to**: `Entity{:lx}`, **address**: `List{:lx}`)
- [get_relative_address](#Entity.get_relative_address+2)(**entity**: `Entity{:lx}`, **relative_to**: `Entity{:lx}`)
- [get_addressed_context](#Entity.get_addressed_context+2)(**relative_to**: `Entity{:lx}`, **address**: `List{:lx}`)
- [get_with_in](#Entity.get_with_in+2)(**context**: `Entity{:lx}`, **modifier_id**: `String{:lx}`)
- [get_with](#Entity.get_with+2)(**relative_to**: `Entity{:lx}`, **modifier_id**: `String{:lx}`)
- [get_with_all_in](#Entity.get_with_all_in+2)(**context**: `Entity{:lx}`, **modifier_id**: `String{:lx}`)
- [get_with_all](#Entity.get_with_all+2)(**relative_to**: `Entity{:lx}`, **modifier_id**: `String{:lx}`)
- [get_named](#Entity.get_named+2)(**world**: `World{:lx}`, **name**: `String{:lx}`)
- [get_named_all](#Entity.get_named_all+2)(**world**: `World{:lx}`, **name**: `String{:lx}`)
- [get_named_in](#Entity.get_named_in+2)(**context**: `Entity{:lx}`, **name**: `String{:lx}`)
- [get_named_all_in](#Entity.get_named_all_in+2)(**context**: `Entity{:lx}`, **name**: `String{:lx}`)
- [get_name](#Entity.get_name)(**entity**: `Entity{:lx}`)
- [name](#Entity.name)(**entity**: `Entity{:lx}`)
- [set_visible](#Entity.set_visible+2)(**entity**: `Entity{:lx}`, **state**: `Bool{:lx}`)
- [set_visible](#Entity.set_visible+3)(**entity**: `Entity{:lx}`, **state**: `Bool{:lx}`, **tag**: `String{:lx}`)
- [get_visible](#Entity.get_visible)(**entity**: `Entity{:lx}`)
- [get_visible](#Entity.get_visible+2)(**entity**: `Entity{:lx}`, **tag**: `String{:lx}`)
- [get_visual_obb](#Entity.get_visual_obb)(**entity**: `Entity{:lx}`)
- [get_folder](#Entity.get_folder)(**entity**: `Entity{:lx}`)
- [set_folder](#Entity.set_folder+2)(**entity**: `Entity{:lx}`, **folder**: `String{:lx}`)
- [get_asset_id](#Entity.get_asset_id)(**entity**: `Entity{:lx}`)
- [set_asset_id](#Entity.set_asset_id+2)(**entity**: `Entity{:lx}`, **asset_id**: `String{:lx}`)
- [get_context_asset_id](#Entity.get_context_asset_id)(**entity**: `Entity{:lx}`)
- [set_context_asset_id](#Entity.set_context_asset_id+2)(**entity**: `Entity{:lx}`, **asset_id**: `String{:lx}`)
- [get_context_type](#Entity.get_context_type)(**entity**: `Entity{:lx}`)
- [get_context_instance_uuid](#Entity.get_context_instance_uuid)(**entity**: `Entity{:lx}`)
- [get_context_data_uuid](#Entity.get_context_data_uuid)(**entity**: `Entity{:lx}`)
- [get_context](#Entity.get_context)(**entity**: `Entity{:lx}`)
- [get_context_origin](#Entity.get_context_origin)(**entity**: `Entity{:lx}`)
- [get_context_address](#Entity.get_context_address+2)(**entity**: `Entity{:lx}`, **context**: `Entity{:lx}`)
- [list_context_all](#Entity.list_context_all)(**context**: `Entity{:lx}`)
- [list_context_direct](#Entity.list_context_direct)(**context**: `Entity{:lx}`)
- [get_context_id](#Entity.get_context_id)(**context**: `Entity{:lx}`)
- [get_origin_address](#Entity.get_origin_address)(**entity**: `Entity{:lx}`)
- [get_address](#Entity.get_address)(**entity**: `Entity{:lx}`)
- [get_context_is_direct](#Entity.get_context_is_direct+2)(**context**: `Entity{:lx}`, **entity**: `Entity{:lx}`)
- [init_into_context](#Entity.init_into_context+2)(**entity**: `Entity{:lx}`, **context**: `Entity{:lx}`)
- [init_into_context](#Entity.init_into_context+3)(**entity**: `Entity{:lx}`, **context**: `Entity{:lx}`, **address_uuid**: `UUID{:lx}`)
- [note_add](#Entity.note_add+2)(**entity**: `Entity{:lx}`, **note**: `String{:lx}`)
- [note_remove](#Entity.note_remove+2)(**entity**: `Entity{:lx}`, **note**: `String{:lx}`)
- [note_has](#Entity.note_has+2)(**entity**: `Entity{:lx}`, **note**: `String{:lx}`)
- [notes](#Entity.notes)(**entity**: `Entity{:lx}`)
- [set_name](#Entity.set_name+2)(**entity**: `Entity{:lx}`, **name**: `String{:lx}`)
- [get_uuid](#Entity.get_uuid)(**entity**: `Entity{:lx}`)
- [set_uuid](#Entity.set_uuid+2)(**entity**: `Entity{:lx}`, **uuid_string**: `String{:lx}`)
- [destroy](#Entity.destroy)(**entity**: `Entity{:lx}`)
- [duplicate](#Entity.duplicate)(**entity**: `Entity{:lx}`)
- [duplicate](#Entity.duplicate+2)(**entity**: `Entity{:lx}`, **world**: `World{:lx}`)


---

<endpoint module="luxe: world" class="Entity" signature="none"></endpoint>
<h4 class="signature_head">Entity.none</h4><a class="signature-arity" href="#Entity.none" title="Permanent link">1</a><signature id="Entity.none">

```lx
Entity.none : Entity
```
</signature>

> An entity representing no value. Note, not for comparisons! Use Entity.valid(entity) for that   

<endpoint module="luxe: world" class="Entity" signature="create(world : World)"></endpoint>
<h4 class="signature_head">Entity.create</h4><a class="signature-arity" href="#Entity.create" title="Permanent link">1</a><signature id="Entity.create">

```lx
Entity.create(world : World) : Entity
```
</signature>

> Creates a new `entity` in the given `world`.
> 
>   ```js
>   var player = Entity.create(app.world)
>   ```   

<endpoint module="luxe: world" class="Entity" signature="create(world : World, name : String)"></endpoint>
<h4 class="signature_head">Entity.create</h4><a class="signature-arity" href="#Entity.create+2" title="Permanent link">2</a><signature id="Entity.create+2">

```lx
Entity.create(world : World, name : String) : Entity
```
</signature>

> Creates a new `entity` in the given `world` with the specified `String` name.
> 
>   ```js
>   var player = Entity.create(app.world, "player")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="valid(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.valid</h4><a class="signature-arity" href="#Entity.valid" title="Permanent link">1</a><signature id="Entity.valid">

```lx
Entity.valid(entity : Entity) : Bool
```
</signature>

> Checks if the given variable references a valid `entity`.
> 
>   ```js
>   var player = Entity.get_named(app.world, "player")
>   if (Entity.valid(player)) {
>     Log.print("Got the player entity!")
>   }
>   ```   

<endpoint module="luxe: world" class="Entity" signature="valid_handle(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.valid_handle</h4><a class="signature-arity" href="#Entity.valid_handle" title="Permanent link">1</a><signature id="Entity.valid_handle">

```lx
Entity.valid_handle(entity : Entity) : Bool
```
</signature>

> Checks if the given variable references a valid `entity` handle.
> Note that when an entity is destroyed, it marks the entity as invalid 
> for Entity.valid(), but the destroy happens at the end of the frame.
> This means during that frame the entity can still be "live", but not valid.
> 
> This is mostly useful in the detach handlers, where Entity.valid would return false.   

<endpoint module="luxe: world" class="Entity" signature="get_world(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_world</h4><a class="signature-arity" href="#Entity.get_world" title="Permanent link">1</a><signature id="Entity.get_world">

```lx
Entity.get_world(entity : Entity) : World
```
</signature>

> Get the `world` a given `entity` belongs to
> 
>   ```js
>   var world = Entity.get_world(entity)
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get(uuid : String)"></endpoint>
<h4 class="signature_head">Entity.get</h4><a class="signature-arity" href="#Entity.get" title="Permanent link">1</a><signature id="Entity.get">

```lx
Entity.get(uuid : String) : Entity
```
</signature>

> Get the entity with a given UUID. Since an entity can have 
> a name that is shared by several entities in the same world, 
> the unique ID of an entity is used to locate exactly one entity.
> Generally, no two entities will have the same UUID.
> 
>   ```js
>   var entity = Entity.get("5b01869b-fd59-4f2c-892f-4c0b726c79a2")
> 
>   if (Entity.valid(entity)) {
>     Log.print("found entity")
>   }
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_addressed_in(context_root : Entity, address : List)"></endpoint>
<h4 class="signature_head">Entity.get_addressed_in</h4><a class="signature-arity" href="#Entity.get_addressed_in+2" title="Permanent link">2</a><signature id="Entity.get_addressed_in+2">

```lx
Entity.get_addressed_in(context_root : Entity, address : List) : Entity
```
</signature>

> Find an entity by `address` in the given context (only). 
> The address is a list of uuids, and the context is a scene root entity, 
> or prototype root entity.   

<endpoint module="luxe: world" class="Entity" signature="get_addressed(relative_to : Entity, address : List)"></endpoint>
<h4 class="signature_head">Entity.get_addressed</h4><a class="signature-arity" href="#Entity.get_addressed+2" title="Permanent link">2</a><signature id="Entity.get_addressed+2">

```lx
Entity.get_addressed(relative_to : Entity, address : List) : Entity
```
</signature>

> Find an entity by `address` relative to the given entity, and will search upward
> through all contexts in the tree to try and find the addressed entity.
> The address is a list of uuids.   

<endpoint module="luxe: world" class="Entity" signature="resolve(relative_to : Entity, address : List)"></endpoint>
<h4 class="signature_head">Entity.resolve</h4><a class="signature-arity" href="#Entity.resolve+2" title="Permanent link">2</a><signature id="Entity.resolve+2">

```lx
Entity.resolve(relative_to : Entity, address : List) : Entity
```
</signature>

> Find an entity by `address` relative to the given entity, and will search upward
> through all contexts in the tree to try and find the addressed entity.
> The address is a list of uuids called a `Link` typically.
> Alias for `Entity.get_addressed`.   

<endpoint module="luxe: world" class="Entity" signature="get_relative_address(entity : Entity, relative_to : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_relative_address</h4><a class="signature-arity" href="#Entity.get_relative_address+2" title="Permanent link">2</a><signature id="Entity.get_relative_address+2">

```lx
Entity.get_relative_address(entity : Entity, relative_to : Entity) : List
```
</signature>

> Get the address of one entity relative to another. Typically used in e.g the editor to resolve
> an address of a link field. Returns the address as a list of UUIDs.   

<endpoint module="luxe: world" class="Entity" signature="get_addressed_context(relative_to : Entity, address : List)"></endpoint>
<h4 class="signature_head">Entity.get_addressed_context</h4><a class="signature-arity" href="#Entity.get_addressed_context+2" title="Permanent link">2</a><signature id="Entity.get_addressed_context+2">

```lx
Entity.get_addressed_context(relative_to : Entity, address : List) : Entity
```
</signature>

> Find an entity by `address` relative to the given entity, and will search upward
> through all contexts in the tree to try and find the addressed entity - but this
> function will return the context it was found in (e.g the context the address is for).
> The address is a list of uuids.   

<endpoint module="luxe: world" class="Entity" signature="get_with_in(context : Entity, modifier_id : String)"></endpoint>
<h4 class="signature_head">Entity.get_with_in</h4><a class="signature-arity" href="#Entity.get_with_in+2" title="Permanent link">2</a><signature id="Entity.get_with_in+2">

```lx
Entity.get_with_in(context : Entity, modifier_id : String) : Entity
```
</signature>

> Get the first entity found in the context that has the given modifier attached.
> Searches all entities the context has loaded and returns the first one found.
> Note: Modifiers expose `Thing.id` which you would use here from the type.   

<endpoint module="luxe: world" class="Entity" signature="get_with(relative_to : Entity, modifier_id : String)"></endpoint>
<h4 class="signature_head">Entity.get_with</h4><a class="signature-arity" href="#Entity.get_with+2" title="Permanent link">2</a><signature id="Entity.get_with+2">

```lx
Entity.get_with(relative_to : Entity, modifier_id : String) : Entity
```
</signature>

> Get the first entity found in the context that has the given modifier attached.
> Searches all entities within the context this entity is inside of (e.g prototype).
> Note: Modifiers expose `Thing.id` which you would use here from the type.   

<endpoint module="luxe: world" class="Entity" signature="get_with_all_in(context : Entity, modifier_id : String)"></endpoint>
<h4 class="signature_head">Entity.get_with_all_in</h4><a class="signature-arity" href="#Entity.get_with_all_in+2" title="Permanent link">2</a><signature id="Entity.get_with_all_in+2">

```lx
Entity.get_with_all_in(context : Entity, modifier_id : String) : Set
```
</signature>

> Get the set of entities found in the context that have the given modifier attached.
> Searches all entities the context and returns the list as a Set.
> Note: Modifiers expose `Thing.id` which you would use here from the type.   

<endpoint module="luxe: world" class="Entity" signature="get_with_all(relative_to : Entity, modifier_id : String)"></endpoint>
<h4 class="signature_head">Entity.get_with_all</h4><a class="signature-arity" href="#Entity.get_with_all+2" title="Permanent link">2</a><signature id="Entity.get_with_all+2">

```lx
Entity.get_with_all(relative_to : Entity, modifier_id : String) : Set
```
</signature>

> Get the set of entities found in the context that have the given modifier attached.
> Searches all entities the context and returns the list as a Set.
> Note: Modifiers expose `Thing.id` which you would use here from the type.   

<endpoint module="luxe: world" class="Entity" signature="get_named(world : World, name : String)"></endpoint>
<h4 class="signature_head">Entity.get_named</h4><a class="signature-arity" href="#Entity.get_named+2" title="Permanent link">2</a><signature id="Entity.get_named+2">

```lx
Entity.get_named(world : World, name : String) : Entity
```
</signature>

> Get the first `entity` from the given `world` with the name `name`.
> Which entity is returned is unspecified if there are multiple with the same name.
> If you need to test further use `Entity.get_named_all`. Returns null if no
> entity is found by that name.
> 
>   ```js
>   var player = Entity.get_named(app.world, "player")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_named_all(world : World, name : String)"></endpoint>
<h4 class="signature_head">Entity.get_named_all</h4><a class="signature-arity" href="#Entity.get_named_all+2" title="Permanent link">2</a><signature id="Entity.get_named_all+2">

```lx
Entity.get_named_all(world : World, name : String) : List
```
</signature>

> Get a list of all `entities` from the given `world` with the name `name`.
> Returns a list of entities with an unspecified order. Returns an empty list
> if no entities are found.
> 
>   ```js
>   var list = Entity.get_named_all(app.world, "fern")
>   Log.print("There are %(list.count) ferns in this forest!")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_named_in(context : Entity, name : String)"></endpoint>
<h4 class="signature_head">Entity.get_named_in</h4><a class="signature-arity" href="#Entity.get_named_in+2" title="Permanent link">2</a><signature id="Entity.get_named_in+2">

```lx
Entity.get_named_in(context : Entity, name : String) : Entity
```
</signature>

> Get the first `entity` from the given `context` with the name `name`.
> The context is a scene root or a prototype root entity.
> Which entity is returned is unspecified if there are multiple with the same name.
> If you need to test further use `Entity.get_named_all`. Returns null if no
> entity is found by that name.
> 
>   ```js
>   var prototype = Prototype.create(world, Asset.prototype("proto/example"))
>   var item = Entity.get_named_in(prototype, "item")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_named_all_in(context : Entity, name : String)"></endpoint>
<h4 class="signature_head">Entity.get_named_all_in</h4><a class="signature-arity" href="#Entity.get_named_all_in+2" title="Permanent link">2</a><signature id="Entity.get_named_all_in+2">

```lx
Entity.get_named_all_in(context : Entity, name : String) : List
```
</signature>

> Get a list of all `entities` from the given `context` with the name `name`.
> The context is a scene root or a prototype root entity.
> Returns a list of entities with an unspecified order. Returns an empty list
> if no entities are found.
> 
>   ```js
>     var scene = Scene.create(world, Asset.scene("scene/example")) {
>     var list = Entity.get_named_all_in(scene, "fern")
>     Log.print("There are %(list.count) ferns in this forest!")
>   }
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_name(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_name</h4><a class="signature-arity" href="#Entity.get_name" title="Permanent link">1</a><signature id="Entity.get_name">

```lx
Entity.get_name(entity : Entity) : StringID
```
</signature>

> Get the name of a given `entity` as a hashed string ID.
> Use `import "luxe: assets" for Strings` with `Strings.get(name)`
> to convert to a string. :note: this ID nuance is wip.
> 
>   ```js
>   Entity.set_name(player, "player")
>   var name_id = Entity.get_name(player)
>   var name = Strings.get(name_id)
>   Log.print("Entity name is `%(name)`!")
>   // prints "Entity name is `player`"
>   ```   

<endpoint module="luxe: world" class="Entity" signature="name(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.name</h4><a class="signature-arity" href="#Entity.name" title="Permanent link">1</a><signature id="Entity.name">

```lx
Entity.name(entity : Entity) : String
```
</signature>

> Get the name of a given `entity` as a string.
> Supports invalid entities (returns `<invalid>`).
> 
>   ```js
>   Entity.set_name(player, "player")
>   var name = Entity.name(player)
>   Log.print("Entity name is `%(name)`!")
>   // prints "Entity name is `player`"
>   ```   

<endpoint module="luxe: world" class="Entity" signature="set_visible(entity : Entity, state : Bool)"></endpoint>
<h4 class="signature_head">Entity.set_visible</h4><a class="signature-arity" href="#Entity.set_visible+2" title="Permanent link">2</a><signature id="Entity.set_visible+2">

```lx
Entity.set_visible(entity : Entity, state : Bool) : unknown
```
</signature>

> Set the entity visibility flag, which will remove associated geometry from rendering.
> Only geometry intentionally associated with this entity is affected. 
> Sometimes geometry is created and not connected (intentionally or otherwise, see `World.render_set_add`),
> this won't affect that geometry.   

<endpoint module="luxe: world" class="Entity" signature="set_visible(entity : Entity, state : Bool, tag : String)"></endpoint>
<h4 class="signature_head">Entity.set_visible</h4><a class="signature-arity" href="#Entity.set_visible+3" title="Permanent link">3</a><signature id="Entity.set_visible+3">

```lx
Entity.set_visible(entity : Entity, state : Bool, tag : String) : unknown
```
</signature>

> Set the entity visibility flag, which will remove associated geometry from rendering.
> Only geometry intentionally associated with this entity is affected. 
> Sometimes geometry is created and not connected (intentionally or otherwise, see `World.render_set_add`),
> this won't affect that geometry.
> 
> The tag means the state is not a simple binary, rather it is a multi-toggle concept. 
> e.g if you can toggle visible from "code" and from "ui" tags, unhiding via UI won't 
> unhide it if the code still wants it hidden. This can be thought of as a counter, 
> it will be hidden as long as the number of uses asking for it to be hidden > 0.   

<endpoint module="luxe: world" class="Entity" signature="get_visible(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_visible</h4><a class="signature-arity" href="#Entity.get_visible" title="Permanent link">1</a><signature id="Entity.get_visible">

```lx
Entity.get_visible(entity : Entity) : unknown
```
</signature>

> Get the entity visibility state   

<endpoint module="luxe: world" class="Entity" signature="get_visible(entity : Entity, tag : String)"></endpoint>
<h4 class="signature_head">Entity.get_visible</h4><a class="signature-arity" href="#Entity.get_visible+2" title="Permanent link">2</a><signature id="Entity.get_visible+2">

```lx
Entity.get_visible(entity : Entity, tag : String) : unknown
```
</signature>

> Get the entity visibility state for the given tag   

<endpoint module="luxe: world" class="Entity" signature="get_visual_obb(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_visual_obb</h4><a class="signature-arity" href="#Entity.get_visual_obb" title="Permanent link">1</a><signature id="Entity.get_visual_obb">

```lx
Entity.get_visual_obb(entity : Entity) : List
```
</signature>

> Returns the combined visual bounds of this and entity created by this entity (in the obb shape, e.g 8 corner points)   

<endpoint module="luxe: world" class="Entity" signature="get_folder(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_folder</h4><a class="signature-arity" href="#Entity.get_folder" title="Permanent link">1</a><signature id="Entity.get_folder">

```lx
Entity.get_folder(entity : Entity) : String
```
</signature>

> get the folder of this entity (used for nested display in a world outliner)   

<endpoint module="luxe: world" class="Entity" signature="set_folder(entity : Entity, folder : String)"></endpoint>
<h4 class="signature_head">Entity.set_folder</h4><a class="signature-arity" href="#Entity.set_folder+2" title="Permanent link">2</a><signature id="Entity.set_folder+2">

```lx
Entity.set_folder(entity : Entity, folder : String) : None
```
</signature>

> set the folder of this entity (used for nested display in a world outliner)   

<endpoint module="luxe: world" class="Entity" signature="get_asset_id(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_asset_id</h4><a class="signature-arity" href="#Entity.get_asset_id" title="Permanent link">1</a><signature id="Entity.get_asset_id">

```lx
Entity.get_asset_id(entity : Entity) : String
```
</signature>

> get the asset ID of this entity (if it has one)   

<endpoint module="luxe: world" class="Entity" signature="set_asset_id(entity : Entity, asset_id : String)"></endpoint>
<h4 class="signature_head">Entity.set_asset_id</h4><a class="signature-arity" href="#Entity.set_asset_id+2" title="Permanent link">2</a><signature id="Entity.set_asset_id+2">

```lx
Entity.set_asset_id(entity : Entity, asset_id : String) : None
```
</signature>

> set the asset ID of this entity (used for e.g editor)   

<endpoint module="luxe: world" class="Entity" signature="get_context_asset_id(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context_asset_id</h4><a class="signature-arity" href="#Entity.get_context_asset_id" title="Permanent link">1</a><signature id="Entity.get_context_asset_id">

```lx
Entity.get_context_asset_id(entity : Entity) : String
```
</signature>

> get the context asset ID of this entity (if it has one)   

<endpoint module="luxe: world" class="Entity" signature="set_context_asset_id(entity : Entity, asset_id : String)"></endpoint>
<h4 class="signature_head">Entity.set_context_asset_id</h4><a class="signature-arity" href="#Entity.set_context_asset_id+2" title="Permanent link">2</a><signature id="Entity.set_context_asset_id+2">

```lx
Entity.set_context_asset_id(entity : Entity, asset_id : String) : None
```
</signature>

> set the context asset ID of this entity (used for e.g editor)   

<endpoint module="luxe: world" class="Entity" signature="get_context_type(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context_type</h4><a class="signature-arity" href="#Entity.get_context_type" title="Permanent link">1</a><signature id="Entity.get_context_type">

```lx
Entity.get_context_type(entity : Entity) : EntityContextType
```
</signature>

> get the context type for an entity   

<endpoint module="luxe: world" class="Entity" signature="get_context_instance_uuid(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context_instance_uuid</h4><a class="signature-arity" href="#Entity.get_context_instance_uuid" title="Permanent link">1</a><signature id="Entity.get_context_instance_uuid">

```lx
Entity.get_context_instance_uuid(entity : Entity) : String
```
</signature>

> get the context uuid for a given entity. Entity should be EntityContextType `scene` or `prototype` or null is returned   

<endpoint module="luxe: world" class="Entity" signature="get_context_data_uuid(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context_data_uuid</h4><a class="signature-arity" href="#Entity.get_context_data_uuid" title="Permanent link">1</a><signature id="Entity.get_context_data_uuid">

```lx
Entity.get_context_data_uuid(entity : Entity) : String
```
</signature>

> get the context data uuid for a given entity. Entity should be EntityContextType `scene` or `prototype` or null is returned   

<endpoint module="luxe: world" class="Entity" signature="get_context(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context</h4><a class="signature-arity" href="#Entity.get_context" title="Permanent link">1</a><signature id="Entity.get_context">

```lx
Entity.get_context(entity : Entity) : Entity
```
</signature>

> get the context this entity belongs to if any   

<endpoint module="luxe: world" class="Entity" signature="get_context_origin(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context_origin</h4><a class="signature-arity" href="#Entity.get_context_origin" title="Permanent link">1</a><signature id="Entity.get_context_origin">

```lx
Entity.get_context_origin(entity : Entity) : Entity
```
</signature>

> get the context that this entity originated from. For example if a scene was loaded and inside it there was a prototype and so on, the scene is the origin.   

<endpoint module="luxe: world" class="Entity" signature="get_context_address(entity : Entity, context : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context_address</h4><a class="signature-arity" href="#Entity.get_context_address+2" title="Permanent link">2</a><signature id="Entity.get_context_address+2">

```lx
Entity.get_context_address(entity : Entity, context : Entity) : List
```
</signature>

> get the address of the entity within a given context.   

<endpoint module="luxe: world" class="Entity" signature="list_context_all(context : Entity)"></endpoint>
<h4 class="signature_head">Entity.list_context_all</h4><a class="signature-arity" href="#Entity.list_context_all" title="Permanent link">1</a><signature id="Entity.list_context_all">

```lx
Entity.list_context_all(context : Entity) : Set
```
</signature>

> Get all the entities this context created as a Set of entities.   

<endpoint module="luxe: world" class="Entity" signature="list_context_direct(context : Entity)"></endpoint>
<h4 class="signature_head">Entity.list_context_direct</h4><a class="signature-arity" href="#Entity.list_context_direct" title="Permanent link">1</a><signature id="Entity.list_context_direct">

```lx
Entity.list_context_direct(context : Entity) : Set
```
</signature>

> Get all the entities this context created directly (rather than indirectly) as a Set of entities.   

<endpoint module="luxe: world" class="Entity" signature="get_context_id(context : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context_id</h4><a class="signature-arity" href="#Entity.get_context_id" title="Permanent link">1</a><signature id="Entity.get_context_id">

```lx
Entity.get_context_id(context : Entity) : String
```
</signature>

> get the id of the given context.   

<endpoint module="luxe: world" class="Entity" signature="get_origin_address(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_origin_address</h4><a class="signature-arity" href="#Entity.get_origin_address" title="Permanent link">1</a><signature id="Entity.get_origin_address">

```lx
Entity.get_origin_address(entity : Entity) : List
```
</signature>

> get the address of the entity within it's origin context.   

<endpoint module="luxe: world" class="Entity" signature="get_address(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_address</h4><a class="signature-arity" href="#Entity.get_address" title="Permanent link">1</a><signature id="Entity.get_address">

```lx
Entity.get_address(entity : Entity) : List
```
</signature>

> get the address of the entity within it's origin context.   

<endpoint module="luxe: world" class="Entity" signature="get_context_is_direct(context : Entity, entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_context_is_direct</h4><a class="signature-arity" href="#Entity.get_context_is_direct+2" title="Permanent link">2</a><signature id="Entity.get_context_is_direct+2">

```lx
Entity.get_context_is_direct(context : Entity, entity : Entity) : Bool
```
</signature>

> returns true if the given entity is a direct entity in the context. This includes prototype roots spawned into the context (use context type to filter them out).   

<endpoint module="luxe: world" class="Entity" signature="init_into_context(entity : Entity, context : Entity)"></endpoint>
<h4 class="signature_head">Entity.init_into_context</h4><a class="signature-arity" href="#Entity.init_into_context+2" title="Permanent link">2</a><signature id="Entity.init_into_context+2">

```lx
Entity.init_into_context(entity : Entity, context : Entity) : unknown
```
</signature>

> Initialize an entity into an existing context (typically editor related)   

<endpoint module="luxe: world" class="Entity" signature="init_into_context(entity : Entity, context : Entity, address_uuid : UUID)"></endpoint>
<h4 class="signature_head">Entity.init_into_context</h4><a class="signature-arity" href="#Entity.init_into_context+3" title="Permanent link">3</a><signature id="Entity.init_into_context+3">

```lx
Entity.init_into_context(entity : Entity, context : Entity, address_uuid : UUID) : unknown
```
</signature>

> Initialize an entity into an existing context with an address uuid (typically editor related)   

<endpoint module="luxe: world" class="Entity" signature="note_add(entity : Entity, note : String)"></endpoint>
<h4 class="signature_head">Entity.note_add</h4><a class="signature-arity" href="#Entity.note_add+2" title="Permanent link">2</a><signature id="Entity.note_add+2">

```lx
Entity.note_add(entity : Entity, note : String) : unknown
```
</signature>

> add a note to this entity (like a lower level tag)   

<endpoint module="luxe: world" class="Entity" signature="note_remove(entity : Entity, note : String)"></endpoint>
<h4 class="signature_head">Entity.note_remove</h4><a class="signature-arity" href="#Entity.note_remove+2" title="Permanent link">2</a><signature id="Entity.note_remove+2">

```lx
Entity.note_remove(entity : Entity, note : String) : unknown
```
</signature>

> remove a note to this entity   

<endpoint module="luxe: world" class="Entity" signature="note_has(entity : Entity, note : String)"></endpoint>
<h4 class="signature_head">Entity.note_has</h4><a class="signature-arity" href="#Entity.note_has+2" title="Permanent link">2</a><signature id="Entity.note_has+2">

```lx
Entity.note_has(entity : Entity, note : String) : unknown
```
</signature>

> returns true if this note exists, false otherwise   

<endpoint module="luxe: world" class="Entity" signature="notes(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.notes</h4><a class="signature-arity" href="#Entity.notes" title="Permanent link">1</a><signature id="Entity.notes">

```lx
Entity.notes(entity : Entity) : unknown
```
</signature>

> get all the notes on the given entity   

<endpoint module="luxe: world" class="Entity" signature="set_name(entity : Entity, name : String)"></endpoint>
<h4 class="signature_head">Entity.set_name</h4><a class="signature-arity" href="#Entity.set_name+2" title="Permanent link">2</a><signature id="Entity.set_name+2">

```lx
Entity.set_name(entity : Entity, name : String) : unknown
```
</signature>

> Set the name of a given `entity`.
> 
>   ```js
>   Entity.set_name(player, "player")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_uuid(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.get_uuid</h4><a class="signature-arity" href="#Entity.get_uuid" title="Permanent link">1</a><signature id="Entity.get_uuid">

```lx
Entity.get_uuid(entity : Entity) : String
```
</signature>

> Get the unique ID as a string UUID for a given `entity`.   

<endpoint module="luxe: world" class="Entity" signature="set_uuid(entity : Entity, uuid_string : String)"></endpoint>
<h4 class="signature_head">Entity.set_uuid</h4><a class="signature-arity" href="#Entity.set_uuid+2" title="Permanent link">2</a><signature id="Entity.set_uuid+2">

```lx
Entity.set_uuid(entity : Entity, uuid_string : String) : unknown
```
</signature>

> Set the unique ID of a given `entity`.
> Typically used in special cases, not commonly used on the high level.   

<endpoint module="luxe: world" class="Entity" signature="destroy(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.destroy</h4><a class="signature-arity" href="#Entity.destroy" title="Permanent link">1</a><signature id="Entity.destroy">

```lx
Entity.destroy(entity : Entity) : unknown
```
</signature>

> Destroy the given `entity`, removing it from the world it's in.
>         
> At the moment destroy is immediate (potentially changing soon),
> so sometimes you might want `Frame.end { Entity.destroy(entity) }` 
> to push the destroy to the end of the frame, so it doesn't happen
> while iterating a list or when things are still processing it.   

<endpoint module="luxe: world" class="Entity" signature="duplicate(entity : Entity)"></endpoint>
<h4 class="signature_head">Entity.duplicate</h4><a class="signature-arity" href="#Entity.duplicate" title="Permanent link">1</a><signature id="Entity.duplicate">

```lx
Entity.duplicate(entity : Entity) : Entity
```
</signature>

> Duplicate the given `entity`. 
> Returns a new entity with the same notes, folder, name and modifiers.   

<endpoint module="luxe: world" class="Entity" signature="duplicate(entity : Entity, world : World)"></endpoint>
<h4 class="signature_head">Entity.duplicate</h4><a class="signature-arity" href="#Entity.duplicate+2" title="Permanent link">2</a><signature id="Entity.duplicate+2">

```lx
Entity.duplicate(entity : Entity, world : World) : Entity
```
</signature>

> Duplicate the given `entity` into another world.
> Returns a new entity with the same notes, folder, name and modifiers.
> Will not duplicate in same context as origin entity if the new world is different.   


### EntityContextType
`import "luxe: world" for EntityContextType{:lx}`
> Which kind of context is an entity the root of? Default is `none`.

- [none](#EntityContextType.none)
- [scene](#EntityContextType.scene)
- [prototype](#EntityContextType.prototype)
- [name](#EntityContextType.name)(**value**: `EntityContextType{:lx}`)


---

<endpoint module="luxe: world" class="EntityContextType" signature="none"></endpoint>
<h4 class="signature_head">EntityContextType.none</h4><a class="signature-arity" href="#EntityContextType.none" title="Permanent link">1</a><signature id="EntityContextType.none">

```lx
EntityContextType.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityContextType" signature="scene"></endpoint>
<h4 class="signature_head">EntityContextType.scene</h4><a class="signature-arity" href="#EntityContextType.scene" title="Permanent link">1</a><signature id="EntityContextType.scene">

```lx
EntityContextType.scene : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityContextType" signature="prototype"></endpoint>
<h4 class="signature_head">EntityContextType.prototype</h4><a class="signature-arity" href="#EntityContextType.prototype" title="Permanent link">1</a><signature id="EntityContextType.prototype">

```lx
EntityContextType.prototype : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityContextType" signature="name(value : EntityContextType)"></endpoint>
<h4 class="signature_head">EntityContextType.name</h4><a class="signature-arity" href="#EntityContextType.name" title="Permanent link">1</a><signature id="EntityContextType.name">

```lx
EntityContextType.name(value : EntityContextType) : String
```
</signature>

> no docs found   


### EntityEventType
`import "luxe: world" for EntityEventType{:lx}`
> no docs found

- [unknown](#EntityEventType.unknown)
- [create](#EntityEventType.create)
- [destroy](#EntityEventType.destroy)
- [load](#EntityEventType.load)
- [unload](#EntityEventType.unload)
- [modifier](#EntityEventType.modifier)
- [name](#EntityEventType.name)(**value**: `EntityEventType{:lx}`)


---

<endpoint module="luxe: world" class="EntityEventType" signature="unknown"></endpoint>
<h4 class="signature_head">EntityEventType.unknown</h4><a class="signature-arity" href="#EntityEventType.unknown" title="Permanent link">1</a><signature id="EntityEventType.unknown">

```lx
EntityEventType.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="create"></endpoint>
<h4 class="signature_head">EntityEventType.create</h4><a class="signature-arity" href="#EntityEventType.create" title="Permanent link">1</a><signature id="EntityEventType.create">

```lx
EntityEventType.create : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="destroy"></endpoint>
<h4 class="signature_head">EntityEventType.destroy</h4><a class="signature-arity" href="#EntityEventType.destroy" title="Permanent link">1</a><signature id="EntityEventType.destroy">

```lx
EntityEventType.destroy : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="load"></endpoint>
<h4 class="signature_head">EntityEventType.load</h4><a class="signature-arity" href="#EntityEventType.load" title="Permanent link">1</a><signature id="EntityEventType.load">

```lx
EntityEventType.load : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="unload"></endpoint>
<h4 class="signature_head">EntityEventType.unload</h4><a class="signature-arity" href="#EntityEventType.unload" title="Permanent link">1</a><signature id="EntityEventType.unload">

```lx
EntityEventType.unload : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="modifier"></endpoint>
<h4 class="signature_head">EntityEventType.modifier</h4><a class="signature-arity" href="#EntityEventType.modifier" title="Permanent link">1</a><signature id="EntityEventType.modifier">

```lx
EntityEventType.modifier : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="name(value : EntityEventType)"></endpoint>
<h4 class="signature_head">EntityEventType.name</h4><a class="signature-arity" href="#EntityEventType.name" title="Permanent link">1</a><signature id="EntityEventType.name">

```lx
EntityEventType.name(value : EntityEventType) : String
```
</signature>

> no docs found   


### ModifierEventType
`import "luxe: world" for ModifierEventType{:lx}`
> no docs found

- [unknown](#ModifierEventType.unknown)
- [attach](#ModifierEventType.attach)
- [detach](#ModifierEventType.detach)
- [change](#ModifierEventType.change)
- [name](#ModifierEventType.name)(**value**: `ModifierEventType{:lx}`)


---

<endpoint module="luxe: world" class="ModifierEventType" signature="unknown"></endpoint>
<h4 class="signature_head">ModifierEventType.unknown</h4><a class="signature-arity" href="#ModifierEventType.unknown" title="Permanent link">1</a><signature id="ModifierEventType.unknown">

```lx
ModifierEventType.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="ModifierEventType" signature="attach"></endpoint>
<h4 class="signature_head">ModifierEventType.attach</h4><a class="signature-arity" href="#ModifierEventType.attach" title="Permanent link">1</a><signature id="ModifierEventType.attach">

```lx
ModifierEventType.attach : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="ModifierEventType" signature="detach"></endpoint>
<h4 class="signature_head">ModifierEventType.detach</h4><a class="signature-arity" href="#ModifierEventType.detach" title="Permanent link">1</a><signature id="ModifierEventType.detach">

```lx
ModifierEventType.detach : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="ModifierEventType" signature="change"></endpoint>
<h4 class="signature_head">ModifierEventType.change</h4><a class="signature-arity" href="#ModifierEventType.change" title="Permanent link">1</a><signature id="ModifierEventType.change">

```lx
ModifierEventType.change : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="ModifierEventType" signature="name(value : ModifierEventType)"></endpoint>
<h4 class="signature_head">ModifierEventType.name</h4><a class="signature-arity" href="#ModifierEventType.name" title="Permanent link">1</a><signature id="ModifierEventType.name">

```lx
ModifierEventType.name(value : ModifierEventType) : String
```
</signature>

> no docs found   


### UI
`import "luxe: world" for UI{:lx}`
> A `UI` modifier holds controls which define a 2d user interface with images, buttons, sliders, etc...
> 
> ```js
>   //create ui modifier in ui world
>   var ui = Entity.create(app.ui)
>   UI.create(ui, 0, 0, world.width, world.height, 0, app.ui_camera)
> 
>   //add controls
>   var control = Control.create(ui)
>   //more control stuff
> 
>   //then rebuild the UI
>   UI.commit(ui)
> ```

- [create](#UI.create+7)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **z**: `Num{:lx}`, **camera**: `Entity{:lx}`)
- [destroy](#UI.destroy)(**entity**: `Entity{:lx}`)
- [has](#UI.has)(**entity**: `Entity{:lx}`)
- [commit](#UI.commit)(**entity**: `Entity{:lx}`)
- [commit_now](#UI.commit_now)(**entity**: `Entity{:lx}`)
- [event_cancel](#UI.event_cancel+2)(**entity**: `Entity{:lx}`, **event_id**: `ID{:lx}`)
- [event_cancelled](#UI.event_cancelled+2)(**entity**: `Entity{:lx}`, **event_id**: `ID{:lx}`)
- [set_camera](#UI.set_camera+2)(**entity**: `Entity{:lx}`, **camera**: `Entity{:lx}`)
- [set_render_mode](#UI.set_render_mode+2)(**entity**: `Entity{:lx}`, **mode**: `UIRenderMode{:lx}`)
- [set_material_basis](#UI.set_material_basis+3)(**entity**: `Entity{:lx}`, **solid**: `String{:lx}`, **text**: `String{:lx}`)
- [set_bounds](#UI.set_bounds+6)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **z**: `Num{:lx}`)
- [get_pos](#UI.get_pos)(**entity**: `Entity{:lx}`)
- [get_opacity](#UI.get_opacity)(**entity**: `Entity{:lx}`)
- [set_opacity](#UI.set_opacity+2)(**entity**: `Entity{:lx}`, **opacity**: `Num{:lx}`)
- [get_size](#UI.get_size)(**entity**: `Entity{:lx}`)
- [get_debug_control](#UI.get_debug_control)(**entity**: `Entity{:lx}`)
- [get_debug_draw_depth](#UI.get_debug_draw_depth)(**entity**: `Entity{:lx}`)
- [get_input_node](#UI.get_input_node)(**entity**: `Entity{:lx}`)
- [set_input_node](#UI.set_input_node+2)(**entity**: `Entity{:lx}`, **input_node_id**: `String{:lx}`)
- [set_layout_mode](#UI.set_layout_mode+2)(**entity**: `Entity{:lx}`, **mode**: `UILayoutMode{:lx}`)
- [set_debug_mode](#UI.set_debug_mode+2)(**entity**: `Entity{:lx}`, **mode**: `UIDebugMode{:lx}`)
- [any_marked](#UI.any_marked)()
- [any_focused](#UI.any_focused)()
- [get_focused](#UI.get_focused)(**entity**: `Entity{:lx}`)
- [get_captured](#UI.get_captured)(**entity**: `Entity{:lx}`)
- [get_marked](#UI.get_marked)(**entity**: `Entity{:lx}`)
- [get_control_count](#UI.get_control_count)(**entity**: `Entity{:lx}`)
- [get_control](#UI.get_control+2)(**entity**: `Entity{:lx}`, **index**: `Num{:lx}`)
- [focus_invalidate](#UI.focus_invalidate)(**entity**: `Entity{:lx}`)
- [focus](#UI.focus)(**control**: `Control{:lx}`)
- [unfocus](#UI.unfocus)(**control**: `Control{:lx}`)
- [mark](#UI.mark)(**control**: `Control{:lx}`)
- [unmark](#UI.unmark)(**control**: `Control{:lx}`)
- [capture](#UI.capture)(**control**: `Control{:lx}`)
- [uncapture](#UI.uncapture)(**control**: `Control{:lx}`)
- [bring_to_front](#UI.bring_to_front)(**control**: `Control{:lx}`)
- [control_at_point](#UI.control_at_point+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [controls_at_point](#UI.controls_at_point+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [mouse_to_canvas](#UI.mouse_to_canvas+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [canvas_to_world](#UI.canvas_to_world+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [dump](#UI.dump)(**ui**: `Entity{:lx}`)
- [spawn](#UI.spawn+3)(**asset_id**: `String{:lx}`, **parent**: `Control{:lx}`, **instance_id**: `String{:lx}`)
- [make](#UI.make+3)(**ui**: `Entity{:lx}`, **asset**: `String{:lx}`, **instance_id**: `String{:lx}`)
- [draw_depth_of](#UI.draw_depth_of+2)(**control**: `Control{:lx}`, **index**: `Num{:lx}`)
- [draw_text](#UI.draw_text+12)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **string**: `String{:lx}`, **size**: `Num{:lx}`, **font**: `String{:lx}`, **color**: `Color{:lx}`, **align**: `TextAlign{:lx}`, **align_vertical**: `TextAlign{:lx}`)
- [draw_text](#UI.draw_text+10)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **string**: `String{:lx}`, **size**: `Num{:lx}`, **font**: `String{:lx}`, **color**: `Color{:lx}`, **align**: `TextAlign{:lx}`, **align_vertical**: `TextAlign{:lx}`)
- [draw_image](#UI.draw_image+11)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **angle**: `Num{:lx}`, **color**: `Color{:lx}`, **uv**: `Vec{:lx}`, **image**: `Image{:lx}`, **flags**: `UIImageFlags{:lx}`)
- [draw_image](#UI.draw_image+10)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **angle**: `Num{:lx}`, **color**: `Color{:lx}`, **uv**: `Vec{:lx}`, **image**: `Image{:lx}`)
- [draw_quad](#UI.draw_quad+8)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **angle**: `Num{:lx}`, **color**: `Color{:lx}`)
- [draw_circle](#UI.draw_circle+10)(**control**: `Control{:lx}`, **ox**: `Num{:lx}`, **oy**: `Num{:lx}`, **oz**: `Num{:lx}`, **rx**: `Num{:lx}`, **ry**: `Num{:lx}`, **start_angle**: `Num{:lx}`, **end_angle**: `Num{:lx}`, **smoothness**: `Num{:lx}`, **color**: `Color{:lx}`)
- [draw_line](#UI.draw_line+7)(**control**: `Control{:lx}`, **x1**: `Num{:lx}`, **y1**: `Num{:lx}`, **x2**: `Num{:lx}`, **y2**: `Num{:lx}`, **z**: `Num{:lx}`, **style**: `PathStyle{:lx}`)
- [draw_rect](#UI.draw_rect+8)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **angle**: `Num{:lx}`, **style**: `PathStyle{:lx}`)
- [draw_rect_detailed](#UI.draw_rect_detailed+10)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **angle**: `Num{:lx}`, **radius**: `Num{:lx}`, **smoothness**: `Num{:lx}`, **style**: `PathStyle{:lx}`)
- [draw_quad_detailed](#UI.draw_quad_detailed+10)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **z**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`, **angle**: `Num{:lx}`, **radius**: `Num{:lx}`, **smoothness**: `Num{:lx}`, **color**: `Color{:lx}`)
- [draw_ring](#UI.draw_ring+10)(**control**: `Control{:lx}`, **ox**: `Num{:lx}`, **oy**: `Num{:lx}`, **oz**: `Num{:lx}`, **rx**: `Num{:lx}`, **ry**: `Num{:lx}`, **start_angle**: `Num{:lx}`, **end_angle**: `Num{:lx}`, **smoothness**: `Num{:lx}`, **style**: `PathStyle{:lx}`)
- [draw_path](#UI.draw_path+4)(**control**: `Control{:lx}`, **points**: `List{:lx}`, **style**: `PathStyle{:lx}`, **closed**: `Bool{:lx}`)
- [events_emit](#UI.events_emit+2)(**control**: `Control{:lx}`, **type**: `UIEvent{:lx}`)
- [events_emit](#UI.events_emit+3)(**control**: `Control{:lx}`, **type**: `UIEvent{:lx}`, **data**: `Any{:lx}`)
- [events_emit](#UI.events_emit+4)(**control**: `Control{:lx}`, **type**: `UIEvent{:lx}`, **data**: `Any{:lx}`, **data_before**: `Any{:lx}`)


---

<endpoint module="luxe: world" class="UI" signature="create(entity : Entity, x : Num, y : Num, w : Num, h : Num, z : Num, camera : Entity)"></endpoint>
<h4 class="signature_head">UI.create</h4><a class="signature-arity" href="#UI.create+7" title="Permanent link">7</a><signature id="UI.create+7">

```lx
UI.create(entity : Entity, x : Num, y : Num, w : Num, h : Num, z : Num, camera : Entity) : None
```
</signature>

> Create a UI modifier on an Entity.
> The `x` `y` `z` arguments are the position relative to the world origin, or relative to the `Transform` on the same entity if one exists.
> `w` and `h` are the width and the height of the canvas, this is both used for the mask texture (and in `UIRenderMode.image` the ui rendertarget) as well as the (unscaled) size of the UI in worldspace.
> `camera` describes a camera that is used to resolve input, most of the time this is the camera rendering the world the UI is in, but it doesnt have to be.   

<endpoint module="luxe: world" class="UI" signature="destroy(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.destroy</h4><a class="signature-arity" href="#UI.destroy" title="Permanent link">1</a><signature id="UI.destroy">

```lx
UI.destroy(entity : Entity) : None
```
</signature>

> Remove a `UI` modifier from an entity. This also destroys all controls on that `UI`.   

<endpoint module="luxe: world" class="UI" signature="has(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.has</h4><a class="signature-arity" href="#UI.has" title="Permanent link">1</a><signature id="UI.has">

```lx
UI.has(entity : Entity) : Bool
```
</signature>

> Get whether an Entity has an `UI` modifier attached.   

<endpoint module="luxe: world" class="UI" signature="commit(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.commit</h4><a class="signature-arity" href="#UI.commit" title="Permanent link">1</a><signature id="UI.commit">

```lx
UI.commit(entity : Entity) : None
```
</signature>

> Request all changes to the UI are committed before rendering happens   

<endpoint module="luxe: world" class="UI" signature="commit_now(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.commit_now</h4><a class="signature-arity" href="#UI.commit_now" title="Permanent link">1</a><signature id="UI.commit_now">

```lx
UI.commit_now(entity : Entity) : None
```
</signature>

> Commit all changes to the UI immediately   

<endpoint module="luxe: world" class="UI" signature="event_cancel(entity : Entity, event_id : ID)"></endpoint>
<h4 class="signature_head">UI.event_cancel</h4><a class="signature-arity" href="#UI.event_cancel+2" title="Permanent link">2</a><signature id="UI.event_cancel+2">

```lx
UI.event_cancel(entity : Entity, event_id : ID) : None
```
</signature>

> Cancel an event.   

<endpoint module="luxe: world" class="UI" signature="event_cancelled(entity : Entity, event_id : ID)"></endpoint>
<h4 class="signature_head">UI.event_cancelled</h4><a class="signature-arity" href="#UI.event_cancelled+2" title="Permanent link">2</a><signature id="UI.event_cancelled+2">

```lx
UI.event_cancelled(entity : Entity, event_id : ID) : Bool
```
</signature>

> Check whether an event was cancelled before.   

<endpoint module="luxe: world" class="UI" signature="set_camera(entity : Entity, camera : Entity)"></endpoint>
<h4 class="signature_head">UI.set_camera</h4><a class="signature-arity" href="#UI.set_camera+2" title="Permanent link">2</a><signature id="UI.set_camera+2">

```lx
UI.set_camera(entity : Entity, camera : Entity) : None
```
</signature>

> Set the camera used for input calculations. Most of the time this is the camera rendering the world the UI is in, but it doesnt have to be.   

<endpoint module="luxe: world" class="UI" signature="set_render_mode(entity : Entity, mode : UIRenderMode)"></endpoint>
<h4 class="signature_head">UI.set_render_mode</h4><a class="signature-arity" href="#UI.set_render_mode+2" title="Permanent link">2</a><signature id="UI.set_render_mode+2">

```lx
UI.set_render_mode(entity : Entity, mode : UIRenderMode) : None
```
</signature>

> Set the render mode of the UI canvas.
>           
> `UIRenderMode.world` renders the controls directly into the world, while `UIRenderMode.image` first renders them to an intermediate texture and then renders that.
> 
> `UIRenderMode.image` is the default as it can avoid artifacts and works in more circumstances, though `UIRenderMode.world` can lead to more sharp results and slightly better performance.   

<endpoint module="luxe: world" class="UI" signature="set_material_basis(entity : Entity, solid : String, text : String)"></endpoint>
<h4 class="signature_head">UI.set_material_basis</h4><a class="signature-arity" href="#UI.set_material_basis+3" title="Permanent link">3</a><signature id="UI.set_material_basis+3">

```lx
UI.set_material_basis(entity : Entity, solid : String, text : String) : None
```
</signature>

> Set the material basis the controls (excluding `UIImage`) is drawn with. By default "luxe: material_basis/ui_solid" is the basis for solid controls and "luxe: material_basis/ui_font" the basis for text.   

<endpoint module="luxe: world" class="UI" signature="set_bounds(entity : Entity, x : Num, y : Num, w : Num, h : Num, z : Num)"></endpoint>
<h4 class="signature_head">UI.set_bounds</h4><a class="signature-arity" href="#UI.set_bounds+6" title="Permanent link">6</a><signature id="UI.set_bounds+6">

```lx
UI.set_bounds(entity : Entity, x : Num, y : Num, w : Num, h : Num, z : Num) : None
```
</signature>

> Set size and position of an `UI` modifier.
> The `x` `y` `z` arguments are the position relative to the world origin, or relative to the `Transform` on the same entity if one exists.
> `w` and `h` are the width and the height of the canvas, this is both used for the mask texture (and in `UIRenderMode.image` the ui rendertarget) as well as the (unscaled) size of the UI in worldspace.   

<endpoint module="luxe: world" class="UI" signature="get_pos(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_pos</h4><a class="signature-arity" href="#UI.get_pos" title="Permanent link">1</a><signature id="UI.get_pos">

```lx
UI.get_pos(entity : Entity) : Vec
```
</signature>

> Get position of an `UI` modifier.   

<endpoint module="luxe: world" class="UI" signature="get_opacity(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_opacity</h4><a class="signature-arity" href="#UI.get_opacity" title="Permanent link">1</a><signature id="UI.get_opacity">

```lx
UI.get_opacity(entity : Entity) : Num
```
</signature>

> Get overall UI opacity   

<endpoint module="luxe: world" class="UI" signature="set_opacity(entity : Entity, opacity : Num)"></endpoint>
<h4 class="signature_head">UI.set_opacity</h4><a class="signature-arity" href="#UI.set_opacity+2" title="Permanent link">2</a><signature id="UI.set_opacity+2">

```lx
UI.set_opacity(entity : Entity, opacity : Num) : Num
```
</signature>

> Set overall UI opacity   

<endpoint module="luxe: world" class="UI" signature="get_size(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_size</h4><a class="signature-arity" href="#UI.get_size" title="Permanent link">1</a><signature id="UI.get_size">

```lx
UI.get_size(entity : Entity) : Vec
```
</signature>

> Get size of an `UI` modifier.   

<endpoint module="luxe: world" class="UI" signature="get_debug_control(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_debug_control</h4><a class="signature-arity" href="#UI.get_debug_control" title="Permanent link">1</a><signature id="UI.get_debug_control">

```lx
UI.get_debug_control(entity : Entity) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="get_debug_draw_depth(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_debug_draw_depth</h4><a class="signature-arity" href="#UI.get_debug_draw_depth" title="Permanent link">1</a><signature id="UI.get_debug_draw_depth">

```lx
UI.get_debug_draw_depth(entity : Entity) : Num
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="get_input_node(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_input_node</h4><a class="signature-arity" href="#UI.get_input_node" title="Permanent link">1</a><signature id="UI.get_input_node">

```lx
UI.get_input_node(entity : Entity) : String
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="set_input_node(entity : Entity, input_node_id : String)"></endpoint>
<h4 class="signature_head">UI.set_input_node</h4><a class="signature-arity" href="#UI.set_input_node+2" title="Permanent link">2</a><signature id="UI.set_input_node+2">

```lx
UI.set_input_node(entity : Entity, input_node_id : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="set_layout_mode(entity : Entity, mode : UILayoutMode)"></endpoint>
<h4 class="signature_head">UI.set_layout_mode</h4><a class="signature-arity" href="#UI.set_layout_mode+2" title="Permanent link">2</a><signature id="UI.set_layout_mode+2">

```lx
UI.set_layout_mode(entity : Entity, mode : UILayoutMode) : None
```
</signature>

> Set the layout mode of the UI.
> 
> By default this is `UILayoutMode.none`, which will do no extra layouting and ignore `Control` margin, behave and contain.
> 
> `UILayoutMode.flex` is the default layout implementation which will follow the `Control` margin, behave and contain settings.
> 
> ```js
>   UI.set_layout_mode(ui, UILayoutMode.flex)
> 
>   var root = Control.create(ui)
>     Control.set_size(root, 300, 0)
>     Control.set_behave(root, UIBehave.left | UIBehave.top)
>     Control.set_margin(root, 100, 100, 0, 0)
>     Control.set_contain(root, UIContain.column | UIContain.start | UIContain.vfit)
> 
>   var text_input = UIText.create(ui)
>     Control.set_behave(text_input, UIBehave.left | UIBehave.top | UIBehave.hfill)
>   Control.child_add(root, text_input)
> 
>   var image = UIImage.create(ui)
>     UIImage.set_image(image, Assets.image("luxe: image/logo.sprite"))
>     Control.set_size(image, 300, 300)
>     Control.set_behave(image, UIBehave.left | UIBehave.top | UIBehave.hfill)
>   Control.child_add(root, image)
> ```   

<endpoint module="luxe: world" class="UI" signature="set_debug_mode(entity : Entity, mode : UIDebugMode)"></endpoint>
<h4 class="signature_head">UI.set_debug_mode</h4><a class="signature-arity" href="#UI.set_debug_mode+2" title="Permanent link">2</a><signature id="UI.set_debug_mode+2">

```lx
UI.set_debug_mode(entity : Entity, mode : UIDebugMode) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="any_marked()"></endpoint>
<h4 class="signature_head">UI.any_marked</h4><a class="signature-arity" href="#UI.any_marked" title="Permanent link">1</a><signature id="UI.any_marked">

```lx
UI.any_marked() : Bool
```
</signature>

> Returns true if any UI has a marked control (any control with input under the mouse)   

<endpoint module="luxe: world" class="UI" signature="any_focused()"></endpoint>
<h4 class="signature_head">UI.any_focused</h4><a class="signature-arity" href="#UI.any_focused" title="Permanent link">1</a><signature id="UI.any_focused">

```lx
UI.any_focused() : Bool
```
</signature>

> Returns true if any UI has a focused control   

<endpoint module="luxe: world" class="UI" signature="get_focused(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_focused</h4><a class="signature-arity" href="#UI.get_focused" title="Permanent link">1</a><signature id="UI.get_focused">

```lx
UI.get_focused(entity : Entity) : Control
```
</signature>

> Get currently focussed control. A control being focused means its been clicked on or otherwise focused and will recieve context inputs like keyboard presses on a text input field.   

<endpoint module="luxe: world" class="UI" signature="get_captured(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_captured</h4><a class="signature-arity" href="#UI.get_captured" title="Permanent link">1</a><signature id="UI.get_captured">

```lx
UI.get_captured(entity : Entity) : Control
```
</signature>

> Get captured control, `null` if none is captured. A control being captured means all inputs will only be sent to this control until it is uncaptured again.   

<endpoint module="luxe: world" class="UI" signature="get_marked(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_marked</h4><a class="signature-arity" href="#UI.get_marked" title="Permanent link">1</a><signature id="UI.get_marked">

```lx
UI.get_marked(entity : Entity) : Control
```
</signature>

> Get marked control, `null` if none is marked. A control being marked means it is hovered over and can be focused.   

<endpoint module="luxe: world" class="UI" signature="get_control_count(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.get_control_count</h4><a class="signature-arity" href="#UI.get_control_count" title="Permanent link">1</a><signature id="UI.get_control_count">

```lx
UI.get_control_count(entity : Entity) : Num
```
</signature>

> Get amount of controls in a `UI`.   

<endpoint module="luxe: world" class="UI" signature="get_control(entity : Entity, index : Num)"></endpoint>
<h4 class="signature_head">UI.get_control</h4><a class="signature-arity" href="#UI.get_control+2" title="Permanent link">2</a><signature id="UI.get_control+2">

```lx
UI.get_control(entity : Entity, index : Num) : Control
```
</signature>

> Get a control in a `UI` by its index. Useful for iterating over all controls.   

<endpoint module="luxe: world" class="UI" signature="focus_invalidate(entity : Entity)"></endpoint>
<h4 class="signature_head">UI.focus_invalidate</h4><a class="signature-arity" href="#UI.focus_invalidate" title="Permanent link">1</a><signature id="UI.focus_invalidate">

```lx
UI.focus_invalidate(entity : Entity) : None
```
</signature>

> Unfocus whatever is focussed in a specific `UI`.   

<endpoint module="luxe: world" class="UI" signature="focus(control : Control)"></endpoint>
<h4 class="signature_head">UI.focus</h4><a class="signature-arity" href="#UI.focus" title="Permanent link">1</a><signature id="UI.focus">

```lx
UI.focus(control : Control) : None
```
</signature>

> Focus a control. Will unfocus any previously focused controls on the `UI`. A control being focused means its been clicked on or otherwise focused and will recieve context inputs like keyboard presses on a text input field.   

<endpoint module="luxe: world" class="UI" signature="unfocus(control : Control)"></endpoint>
<h4 class="signature_head">UI.unfocus</h4><a class="signature-arity" href="#UI.unfocus" title="Permanent link">1</a><signature id="UI.unfocus">

```lx
UI.unfocus(control : Control) : None
```
</signature>

> Unfocus a specific control. If the control is not the focused control in the UI, this does nothing.   

<endpoint module="luxe: world" class="UI" signature="mark(control : Control)"></endpoint>
<h4 class="signature_head">UI.mark</h4><a class="signature-arity" href="#UI.mark" title="Permanent link">1</a><signature id="UI.mark">

```lx
UI.mark(control : Control) : None
```
</signature>

> Mark a control. Will unfocus any previously marked controls on the `UI`. A control being marked means it is hovered over and can be focused.   

<endpoint module="luxe: world" class="UI" signature="unmark(control : Control)"></endpoint>
<h4 class="signature_head">UI.unmark</h4><a class="signature-arity" href="#UI.unmark" title="Permanent link">1</a><signature id="UI.unmark">

```lx
UI.unmark(control : Control) : None
```
</signature>

> Unmark a specific control. If the control is not the marked control in the UI, this does nothing.   

<endpoint module="luxe: world" class="UI" signature="capture(control : Control)"></endpoint>
<h4 class="signature_head">UI.capture</h4><a class="signature-arity" href="#UI.capture" title="Permanent link">1</a><signature id="UI.capture">

```lx
UI.capture(control : Control) : None
```
</signature>

> Capture a control. Until uncaptured all inputs will only go to this control.   

<endpoint module="luxe: world" class="UI" signature="uncapture(control : Control)"></endpoint>
<h4 class="signature_head">UI.uncapture</h4><a class="signature-arity" href="#UI.uncapture" title="Permanent link">1</a><signature id="UI.uncapture">

```lx
UI.uncapture(control : Control) : None
```
</signature>

> Uncapture a control and have inputs be distributed regularly.   

<endpoint module="luxe: world" class="UI" signature="bring_to_front(control : Control)"></endpoint>
<h4 class="signature_head">UI.bring_to_front</h4><a class="signature-arity" href="#UI.bring_to_front" title="Permanent link">1</a><signature id="UI.bring_to_front">

```lx
UI.bring_to_front(control : Control) : None
```
</signature>

> Bring the control to the front in its current context (globally in the `UI` or within its parent if its a child)   

<endpoint module="luxe: world" class="UI" signature="control_at_point(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">UI.control_at_point</h4><a class="signature-arity" href="#UI.control_at_point+3" title="Permanent link">3</a><signature id="UI.control_at_point+3">

```lx
UI.control_at_point(entity : Entity, x : Num, y : Num) : Control
```
</signature>

> Get the highest control at a position.   

<endpoint module="luxe: world" class="UI" signature="controls_at_point(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">UI.controls_at_point</h4><a class="signature-arity" href="#UI.controls_at_point+3" title="Permanent link">3</a><signature id="UI.controls_at_point+3">

```lx
UI.controls_at_point(entity : Entity, x : Num, y : Num) : List
```
</signature>

> Get all controls at a position.   

<endpoint module="luxe: world" class="UI" signature="mouse_to_canvas(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">UI.mouse_to_canvas</h4><a class="signature-arity" href="#UI.mouse_to_canvas+3" title="Permanent link">3</a><signature id="UI.mouse_to_canvas+3">

```lx
UI.mouse_to_canvas(entity : Entity, x : Num, y : Num) : Float2
```
</signature>

> Translate from mouse position on screen to canvas coordinates. Uses the set canvas camera.   

<endpoint module="luxe: world" class="UI" signature="canvas_to_world(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">UI.canvas_to_world</h4><a class="signature-arity" href="#UI.canvas_to_world+3" title="Permanent link">3</a><signature id="UI.canvas_to_world+3">

```lx
UI.canvas_to_world(entity : Entity, x : Num, y : Num) : Float3
```
</signature>

> Translate from canvas position to world space.   

<endpoint module="luxe: world" class="UI" signature="dump(ui : Entity)"></endpoint>
<h4 class="signature_head">UI.dump</h4><a class="signature-arity" href="#UI.dump" title="Permanent link">1</a><signature id="UI.dump">

```lx
UI.dump(ui : Entity) : None
```
</signature>

> Write a bunch of information about the `UI` and its controls into the console.   

<endpoint module="luxe: world" class="UI" signature="spawn(asset_id : String, parent : Control, instance_id : String)"></endpoint>
<h4 class="signature_head">UI.spawn</h4><a class="signature-arity" href="#UI.spawn+3" title="Permanent link">3</a><signature id="UI.spawn+3">

```lx
UI.spawn(asset_id : String, parent : Control, instance_id : String) : None
```
</signature>

> Spawn controls from a ui asset.
> Puts newly spawned controls into a parent control.   

<endpoint module="luxe: world" class="UI" signature="make(ui : Entity, asset : String, instance_id : String)"></endpoint>
<h4 class="signature_head">UI.make</h4><a class="signature-arity" href="#UI.make+3" title="Permanent link">3</a><signature id="UI.make+3">

```lx
UI.make(ui : Entity, asset : String, instance_id : String) : Control
```
</signature>

> Spawn controls from a ui asset.
> Creates new root for newly spawned controls and returns that root control.   

<endpoint module="luxe: world" class="UI" signature="draw_depth_of(control : Control, index : Num)"></endpoint>
<h4 class="signature_head">UI.draw_depth_of</h4><a class="signature-arity" href="#UI.draw_depth_of+2" title="Permanent link">2</a><signature id="UI.draw_depth_of+2">

```lx
UI.draw_depth_of(control : Control, index : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_text(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, string : String, size : Num, font : String, color : Color, align : TextAlign, align_vertical : TextAlign)"></endpoint>
<h4 class="signature_head">UI.draw_text</h4><a class="signature-arity" href="#UI.draw_text+12" title="Permanent link">12</a><signature id="UI.draw_text+12">

```lx
UI.draw_text(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, string : String, size : Num, font : String, color : Color, align : TextAlign, align_vertical : TextAlign) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_text(control : Control, x : Num, y : Num, z : Num, string : String, size : Num, font : String, color : Color, align : TextAlign, align_vertical : TextAlign)"></endpoint>
<h4 class="signature_head">UI.draw_text</h4><a class="signature-arity" href="#UI.draw_text+10" title="Permanent link">10</a><signature id="UI.draw_text+10">

```lx
UI.draw_text(control : Control, x : Num, y : Num, z : Num, string : String, size : Num, font : String, color : Color, align : TextAlign, align_vertical : TextAlign) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_image(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color, uv : Vec, image : Image, flags : UIImageFlags)"></endpoint>
<h4 class="signature_head">UI.draw_image</h4><a class="signature-arity" href="#UI.draw_image+11" title="Permanent link">11</a><signature id="UI.draw_image+11">

```lx
UI.draw_image(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color, uv : Vec, image : Image, flags : UIImageFlags) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_image(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color, uv : Vec, image : Image)"></endpoint>
<h4 class="signature_head">UI.draw_image</h4><a class="signature-arity" href="#UI.draw_image+10" title="Permanent link">10</a><signature id="UI.draw_image+10">

```lx
UI.draw_image(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color, uv : Vec, image : Image) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_quad(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color)"></endpoint>
<h4 class="signature_head">UI.draw_quad</h4><a class="signature-arity" href="#UI.draw_quad+8" title="Permanent link">8</a><signature id="UI.draw_quad+8">

```lx
UI.draw_quad(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_circle(control : Control, ox : Num, oy : Num, oz : Num, rx : Num, ry : Num, start_angle : Num, end_angle : Num, smoothness : Num, color : Color)"></endpoint>
<h4 class="signature_head">UI.draw_circle</h4><a class="signature-arity" href="#UI.draw_circle+10" title="Permanent link">10</a><signature id="UI.draw_circle+10">

```lx
UI.draw_circle(control : Control, ox : Num, oy : Num, oz : Num, rx : Num, ry : Num, start_angle : Num, end_angle : Num, smoothness : Num, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_line(control : Control, x1 : Num, y1 : Num, x2 : Num, y2 : Num, z : Num, style : PathStyle)"></endpoint>
<h4 class="signature_head">UI.draw_line</h4><a class="signature-arity" href="#UI.draw_line+7" title="Permanent link">7</a><signature id="UI.draw_line+7">

```lx
UI.draw_line(control : Control, x1 : Num, y1 : Num, x2 : Num, y2 : Num, z : Num, style : PathStyle) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_rect(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, style : PathStyle)"></endpoint>
<h4 class="signature_head">UI.draw_rect</h4><a class="signature-arity" href="#UI.draw_rect+8" title="Permanent link">8</a><signature id="UI.draw_rect+8">

```lx
UI.draw_rect(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, style : PathStyle) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_rect_detailed(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, radius : Num, smoothness : Num, style : PathStyle)"></endpoint>
<h4 class="signature_head">UI.draw_rect_detailed</h4><a class="signature-arity" href="#UI.draw_rect_detailed+10" title="Permanent link">10</a><signature id="UI.draw_rect_detailed+10">

```lx
UI.draw_rect_detailed(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, radius : Num, smoothness : Num, style : PathStyle) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_quad_detailed(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, radius : Num, smoothness : Num, color : Color)"></endpoint>
<h4 class="signature_head">UI.draw_quad_detailed</h4><a class="signature-arity" href="#UI.draw_quad_detailed+10" title="Permanent link">10</a><signature id="UI.draw_quad_detailed+10">

```lx
UI.draw_quad_detailed(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, radius : Num, smoothness : Num, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_ring(control : Control, ox : Num, oy : Num, oz : Num, rx : Num, ry : Num, start_angle : Num, end_angle : Num, smoothness : Num, style : PathStyle)"></endpoint>
<h4 class="signature_head">UI.draw_ring</h4><a class="signature-arity" href="#UI.draw_ring+10" title="Permanent link">10</a><signature id="UI.draw_ring+10">

```lx
UI.draw_ring(control : Control, ox : Num, oy : Num, oz : Num, rx : Num, ry : Num, start_angle : Num, end_angle : Num, smoothness : Num, style : PathStyle) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_path(control : Control, points : List, style : PathStyle, closed : Bool)"></endpoint>
<h4 class="signature_head">UI.draw_path</h4><a class="signature-arity" href="#UI.draw_path+4" title="Permanent link">4</a><signature id="UI.draw_path+4">

```lx
UI.draw_path(control : Control, points : List, style : PathStyle, closed : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="events_emit(control : Control, type : UIEvent)"></endpoint>
<h4 class="signature_head">UI.events_emit</h4><a class="signature-arity" href="#UI.events_emit+2" title="Permanent link">2</a><signature id="UI.events_emit+2">

```lx
UI.events_emit(control : Control, type : UIEvent) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="events_emit(control : Control, type : UIEvent, data : Any)"></endpoint>
<h4 class="signature_head">UI.events_emit</h4><a class="signature-arity" href="#UI.events_emit+3" title="Permanent link">3</a><signature id="UI.events_emit+3">

```lx
UI.events_emit(control : Control, type : UIEvent, data : Any) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UI" signature="events_emit(control : Control, type : UIEvent, data : Any, data_before : Any)"></endpoint>
<h4 class="signature_head">UI.events_emit</h4><a class="signature-arity" href="#UI.events_emit+4" title="Permanent link">4</a><signature id="UI.events_emit+4">

```lx
UI.events_emit(control : Control, type : UIEvent, data : Any, data_before : Any) : None
```
</signature>

> no docs found   


### UIBehave
`import "luxe: world" for UIBehave{:lx}`
> no docs found

- [left](#UIBehave.left)
- [top](#UIBehave.top)
- [right](#UIBehave.right)
- [bottom](#UIBehave.bottom)
- [hfill](#UIBehave.hfill)
- [vfill](#UIBehave.vfill)
- [hcenter](#UIBehave.hcenter)
- [vcenter](#UIBehave.vcenter)
- [center](#UIBehave.center)
- [fill](#UIBehave.fill)
- [break_line](#UIBehave.break_line)


---

<endpoint module="luxe: world" class="UIBehave" signature="left"></endpoint>
<h4 class="signature_head">UIBehave.left</h4><a class="signature-arity" href="#UIBehave.left" title="Permanent link">1</a><signature id="UIBehave.left">

```lx
UIBehave.left : unknown
```
</signature>

> Item anchors to the item to its left or left side of parent   

<endpoint module="luxe: world" class="UIBehave" signature="top"></endpoint>
<h4 class="signature_head">UIBehave.top</h4><a class="signature-arity" href="#UIBehave.top" title="Permanent link">1</a><signature id="UIBehave.top">

```lx
UIBehave.top : unknown
```
</signature>

> Item anchors to the item above it or top side of parent   

<endpoint module="luxe: world" class="UIBehave" signature="right"></endpoint>
<h4 class="signature_head">UIBehave.right</h4><a class="signature-arity" href="#UIBehave.right" title="Permanent link">1</a><signature id="UIBehave.right">

```lx
UIBehave.right : unknown
```
</signature>

> Item anchors to the item to its right or right side of parent   

<endpoint module="luxe: world" class="UIBehave" signature="bottom"></endpoint>
<h4 class="signature_head">UIBehave.bottom</h4><a class="signature-arity" href="#UIBehave.bottom" title="Permanent link">1</a><signature id="UIBehave.bottom">

```lx
UIBehave.bottom : unknown
```
</signature>

> Item anchors to the item below it or bottom side of parent   

<endpoint module="luxe: world" class="UIBehave" signature="hfill"></endpoint>
<h4 class="signature_head">UIBehave.hfill</h4><a class="signature-arity" href="#UIBehave.hfill" title="Permanent link">1</a><signature id="UIBehave.hfill">

```lx
UIBehave.hfill : unknown
```
</signature>

> Item anchors to both left and right item or parent borders   

<endpoint module="luxe: world" class="UIBehave" signature="vfill"></endpoint>
<h4 class="signature_head">UIBehave.vfill</h4><a class="signature-arity" href="#UIBehave.vfill" title="Permanent link">1</a><signature id="UIBehave.vfill">

```lx
UIBehave.vfill : unknown
```
</signature>

> Item anchors to both top and bottom item or parent borders   

<endpoint module="luxe: world" class="UIBehave" signature="hcenter"></endpoint>
<h4 class="signature_head">UIBehave.hcenter</h4><a class="signature-arity" href="#UIBehave.hcenter" title="Permanent link">1</a><signature id="UIBehave.hcenter">

```lx
UIBehave.hcenter : unknown
```
</signature>

> Center item horizontally, with left margin as offset   

<endpoint module="luxe: world" class="UIBehave" signature="vcenter"></endpoint>
<h4 class="signature_head">UIBehave.vcenter</h4><a class="signature-arity" href="#UIBehave.vcenter" title="Permanent link">1</a><signature id="UIBehave.vcenter">

```lx
UIBehave.vcenter : unknown
```
</signature>

> Center item vertically, with top margin as offset   

<endpoint module="luxe: world" class="UIBehave" signature="center"></endpoint>
<h4 class="signature_head">UIBehave.center</h4><a class="signature-arity" href="#UIBehave.center" title="Permanent link">1</a><signature id="UIBehave.center">

```lx
UIBehave.center : unknown
```
</signature>

> Center item in both directions, with left/top margin as offset   

<endpoint module="luxe: world" class="UIBehave" signature="fill"></endpoint>
<h4 class="signature_head">UIBehave.fill</h4><a class="signature-arity" href="#UIBehave.fill" title="Permanent link">1</a><signature id="UIBehave.fill">

```lx
UIBehave.fill : unknown
```
</signature>

> Anchor item to all four directions   

<endpoint module="luxe: world" class="UIBehave" signature="break_line"></endpoint>
<h4 class="signature_head">UIBehave.break_line</h4><a class="signature-arity" href="#UIBehave.break_line" title="Permanent link">1</a><signature id="UIBehave.break_line">

```lx
UIBehave.break_line : unknown
```
</signature>

> no docs found   


### UIClear
`import "luxe: world" for UIClear{:lx}`
> Used as an argument when a UI container is cleared to specify what happens to the affected controls.
> `destroy` is often easiest, but only turning controls invisible or removing them from their parent and undoing that as you need them again may be more performant.

- [destroy](#UIClear.destroy)
- [remove](#UIClear.remove)
- [set_invisible](#UIClear.set_invisible)
- [remove_set_invisible](#UIClear.remove_set_invisible)


---

<endpoint module="luxe: world" class="UIClear" signature="destroy"></endpoint>
<h4 class="signature_head">UIClear.destroy</h4><a class="signature-arity" href="#UIClear.destroy" title="Permanent link">1</a><signature id="UIClear.destroy">

```lx
UIClear.destroy : unknown
```
</signature>

> Destroy the controls (like `Control.destroy(_)`).   

<endpoint module="luxe: world" class="UIClear" signature="remove"></endpoint>
<h4 class="signature_head">UIClear.remove</h4><a class="signature-arity" href="#UIClear.remove" title="Permanent link">1</a><signature id="UIClear.remove">

```lx
UIClear.remove : unknown
```
</signature>

> Remove the controls from their parent control (like `Control.child_remove(_, _)`).   

<endpoint module="luxe: world" class="UIClear" signature="set_invisible"></endpoint>
<h4 class="signature_head">UIClear.set_invisible</h4><a class="signature-arity" href="#UIClear.set_invisible" title="Permanent link">1</a><signature id="UIClear.set_invisible">

```lx
UIClear.set_invisible : unknown
```
</signature>

> Turn controls invisible (like `Control.set_visible(_, false)`).   

<endpoint module="luxe: world" class="UIClear" signature="remove_set_invisible"></endpoint>
<h4 class="signature_head">UIClear.remove_set_invisible</h4><a class="signature-arity" href="#UIClear.remove_set_invisible" title="Permanent link">1</a><signature id="UIClear.remove_set_invisible">

```lx
UIClear.remove_set_invisible : unknown
```
</signature>

> Both removes control from parent and sets them as not visible.   


### UIContain
`import "luxe: world" for UIContain{:lx}`
> no docs found

- [row](#UIContain.row)
- [column](#UIContain.column)
- [layout](#UIContain.layout)
- [flex](#UIContain.flex)
- [nowrap](#UIContain.nowrap)
- [wrap](#UIContain.wrap)
- [start](#UIContain.start)
- [middle](#UIContain.middle)
- [end](#UIContain.end)
- [justify](#UIContain.justify)
- [vfit](#UIContain.vfit)
- [hfit](#UIContain.hfit)


---

<endpoint module="luxe: world" class="UIContain" signature="row"></endpoint>
<h4 class="signature_head">UIContain.row</h4><a class="signature-arity" href="#UIContain.row" title="Permanent link">1</a><signature id="UIContain.row">

```lx
UIContain.row : unknown
```
</signature>

> Items go from left to right   

<endpoint module="luxe: world" class="UIContain" signature="column"></endpoint>
<h4 class="signature_head">UIContain.column</h4><a class="signature-arity" href="#UIContain.column" title="Permanent link">1</a><signature id="UIContain.column">

```lx
UIContain.column : unknown
```
</signature>

> Items go from top to bottom   

<endpoint module="luxe: world" class="UIContain" signature="layout"></endpoint>
<h4 class="signature_head">UIContain.layout</h4><a class="signature-arity" href="#UIContain.layout" title="Permanent link">1</a><signature id="UIContain.layout">

```lx
UIContain.layout : unknown
```
</signature>

> Use Free Layout model   

<endpoint module="luxe: world" class="UIContain" signature="flex"></endpoint>
<h4 class="signature_head">UIContain.flex</h4><a class="signature-arity" href="#UIContain.flex" title="Permanent link">1</a><signature id="UIContain.flex">

```lx
UIContain.flex : unknown
```
</signature>

> Use Flex Layout model   

<endpoint module="luxe: world" class="UIContain" signature="nowrap"></endpoint>
<h4 class="signature_head">UIContain.nowrap</h4><a class="signature-arity" href="#UIContain.nowrap" title="Permanent link">1</a><signature id="UIContain.nowrap">

```lx
UIContain.nowrap : unknown
```
</signature>

> Stays on a single line   

<endpoint module="luxe: world" class="UIContain" signature="wrap"></endpoint>
<h4 class="signature_head">UIContain.wrap</h4><a class="signature-arity" href="#UIContain.wrap" title="Permanent link">1</a><signature id="UIContain.wrap">

```lx
UIContain.wrap : unknown
```
</signature>

> Wraps to multiple lines, wrapping left to right   

<endpoint module="luxe: world" class="UIContain" signature="start"></endpoint>
<h4 class="signature_head">UIContain.start</h4><a class="signature-arity" href="#UIContain.start" title="Permanent link">1</a><signature id="UIContain.start">

```lx
UIContain.start : unknown
```
</signature>

> Items begin at start of row/column   

<endpoint module="luxe: world" class="UIContain" signature="middle"></endpoint>
<h4 class="signature_head">UIContain.middle</h4><a class="signature-arity" href="#UIContain.middle" title="Permanent link">1</a><signature id="UIContain.middle">

```lx
UIContain.middle : unknown
```
</signature>

> Items begin at middle of row/column   

<endpoint module="luxe: world" class="UIContain" signature="end"></endpoint>
<h4 class="signature_head">UIContain.end</h4><a class="signature-arity" href="#UIContain.end" title="Permanent link">1</a><signature id="UIContain.end">

```lx
UIContain.end : unknown
```
</signature>

> Items begin at end of row/column   

<endpoint module="luxe: world" class="UIContain" signature="justify"></endpoint>
<h4 class="signature_head">UIContain.justify</h4><a class="signature-arity" href="#UIContain.justify" title="Permanent link">1</a><signature id="UIContain.justify">

```lx
UIContain.justify : unknown
```
</signature>

> Insert spacing between items to stretch elements across whole row/column   

<endpoint module="luxe: world" class="UIContain" signature="vfit"></endpoint>
<h4 class="signature_head">UIContain.vfit</h4><a class="signature-arity" href="#UIContain.vfit" title="Permanent link">1</a><signature id="UIContain.vfit">

```lx
UIContain.vfit : unknown
```
</signature>

> Items stretch height to fill vertical space   

<endpoint module="luxe: world" class="UIContain" signature="hfit"></endpoint>
<h4 class="signature_head">UIContain.hfit</h4><a class="signature-arity" href="#UIContain.hfit" title="Permanent link">1</a><signature id="UIContain.hfit">

```lx
UIContain.hfit : unknown
```
</signature>

> Items stretch width to fill horizontal space   


### UIDebugMode
`import "luxe: world" for UIDebugMode{:lx}`
> no docs found

- [none](#UIDebugMode.none)
- [basic](#UIDebugMode.basic)


---

<endpoint module="luxe: world" class="UIDebugMode" signature="none"></endpoint>
<h4 class="signature_head">UIDebugMode.none</h4><a class="signature-arity" href="#UIDebugMode.none" title="Permanent link">1</a><signature id="UIDebugMode.none">

```lx
UIDebugMode.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIDebugMode" signature="basic"></endpoint>
<h4 class="signature_head">UIDebugMode.basic</h4><a class="signature-arity" href="#UIDebugMode.basic" title="Permanent link">1</a><signature id="UIDebugMode.basic">

```lx
UIDebugMode.basic : unknown
```
</signature>

> no docs found   


### UIDrop
`import "luxe: world" for UIDrop{:lx}`
> no docs found

- [start](#UIDrop.start)
- [end](#UIDrop.end)
- [move](#UIDrop.move)
- [drop](#UIDrop.drop)


---

<endpoint module="luxe: world" class="UIDrop" signature="start"></endpoint>
<h4 class="signature_head">UIDrop.start</h4><a class="signature-arity" href="#UIDrop.start" title="Permanent link">1</a><signature id="UIDrop.start">

```lx
UIDrop.start : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIDrop" signature="end"></endpoint>
<h4 class="signature_head">UIDrop.end</h4><a class="signature-arity" href="#UIDrop.end" title="Permanent link">1</a><signature id="UIDrop.end">

```lx
UIDrop.end : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIDrop" signature="move"></endpoint>
<h4 class="signature_head">UIDrop.move</h4><a class="signature-arity" href="#UIDrop.move" title="Permanent link">1</a><signature id="UIDrop.move">

```lx
UIDrop.move : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIDrop" signature="drop"></endpoint>
<h4 class="signature_head">UIDrop.drop</h4><a class="signature-arity" href="#UIDrop.drop" title="Permanent link">1</a><signature id="UIDrop.drop">

```lx
UIDrop.drop : unknown
```
</signature>

> no docs found   


### UIEvent
`import "luxe: world" for UIEvent{:lx}`
> The built in UI events that all controls can potentially use.

- [name](#UIEvent.name)(**value**: `Any{:lx}`)
- [unknown](#UIEvent.unknown)
- [enter](#UIEvent.enter)
- [exit](#UIEvent.exit)
- [press](#UIEvent.press)
- [release](#UIEvent.release)
- [scroll](#UIEvent.scroll)
- [move](#UIEvent.move)
- [key](#UIEvent.key)
- [text](#UIEvent.text)
- [focus](#UIEvent.focus)
- [unfocus](#UIEvent.unfocus)
- [capture](#UIEvent.capture)
- [uncapture](#UIEvent.uncapture)
- [commit](#UIEvent.commit)
- [destroy](#UIEvent.destroy)
- [language](#UIEvent.language)
- [change](#UIEvent.change)
- [bounds](#UIEvent.bounds)
- [drag](#UIEvent.drag)


---

<endpoint module="luxe: world" class="UIEvent" signature="name(value : Any)"></endpoint>
<h4 class="signature_head">UIEvent.name</h4><a class="signature-arity" href="#UIEvent.name" title="Permanent link">1</a><signature id="UIEvent.name">

```lx
UIEvent.name(value : Any) : unknown
```
</signature>

> Converts a UIEvent value to a readable name.
> 
>   ```js
>   Log.print(UIEvent.name(UIEvent.move)) //prints "move"
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="unknown"></endpoint>
<h4 class="signature_head">UIEvent.unknown</h4><a class="signature-arity" href="#UIEvent.unknown" title="Permanent link">1</a><signature id="UIEvent.unknown">

```lx
UIEvent.unknown : unknown
```
</signature>

> An event of unknown type, invalid. This is the default value.   

<endpoint module="luxe: world" class="UIEvent" signature="enter"></endpoint>
<h4 class="signature_head">UIEvent.enter</h4><a class="signature-arity" href="#UIEvent.enter" title="Permanent link">1</a><signature id="UIEvent.enter">

```lx
UIEvent.enter : unknown
```
</signature>

> An input cursor has entered this control. (e.g on mouse enter).
> Sends no additional data in the event.
> 
>   ```js
>   if(event.type == UIEvent.enter) {
>     Log.print("entered control!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="exit"></endpoint>
<h4 class="signature_head">UIEvent.exit</h4><a class="signature-arity" href="#UIEvent.exit" title="Permanent link">1</a><signature id="UIEvent.exit">

```lx
UIEvent.exit : unknown
```
</signature>

> An input cursor has left this control. (e.g on mouse exit)
> Sends no additional data in the event.
> 
>   ```js
>   if(event.type == UIEvent.exit) {
>     Log.print("exited control!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="press"></endpoint>
<h4 class="signature_head">UIEvent.press</h4><a class="signature-arity" href="#UIEvent.press" title="Permanent link">1</a><signature id="UIEvent.press">

```lx
UIEvent.press : unknown
```
</signature>

> An input press event (e.g mouse button was pressed down). a.k.a "down"
> Sends `event.x`, `event.y` and `event.button`.
> 
>   ```js
>   if(event.type == UIEvent.press) {
>     var button = MouseButton.name(event.button)
>     Log.print("pressed down on control at `%(event.x)`,`%(event.y)`")
>     Log.print("  button was `%(button)`")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="release"></endpoint>
<h4 class="signature_head">UIEvent.release</h4><a class="signature-arity" href="#UIEvent.release" title="Permanent link">1</a><signature id="UIEvent.release">

```lx
UIEvent.release : unknown
```
</signature>

> An input release event (e.g mouse button was released). a.k.a "up"
> Sends `event.x`, `event.y` and `event.button`.
> 
>   ```js
>   if(event.type == UIEvent.press) {
>     var button = MouseButton.name(event.button)
>     Log.print("released input on control at `%(event.x)`,`%(event.y)`")
>     Log.print("  button was `%(button)`")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="scroll"></endpoint>
<h4 class="signature_head">UIEvent.scroll</h4><a class="signature-arity" href="#UIEvent.scroll" title="Permanent link">1</a><signature id="UIEvent.scroll">

```lx
UIEvent.scroll : unknown
```
</signature>

> A scroll event (e.g mouse wheel).
> Sends `event.x`, `event.y` where `x` is the horizontal scroll amount, 
> and `y` is the vertical scroll amount.
> 
>   ```js
>   if(event.type == UIEvent.scroll) {
>     Log.print("scroll amount `%(event.x)`,`%(event.y)`")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="move"></endpoint>
<h4 class="signature_head">UIEvent.move</h4><a class="signature-arity" href="#UIEvent.move" title="Permanent link">1</a><signature id="UIEvent.move">

```lx
UIEvent.move : unknown
```
</signature>

> An input move event (e.g mouse movement).
> Sends `event.x`, `event.y` as the position of the input.
> 
>   ```js
>   if(event.type == UIEvent.press) {
>     Log.print("move on control at `%(event.x)`,`%(event.y)`")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="key"></endpoint>
<h4 class="signature_head">UIEvent.key</h4><a class="signature-arity" href="#UIEvent.key" title="Permanent link">1</a><signature id="UIEvent.key">

```lx
UIEvent.key : unknown
```
</signature>

> A key input event.
> Sends a few useful values:
> 
> - `event.key` - a [Key](../input/#key) value
> - `event.scan` - a [Scan](../input/#scan) value
> - `event.mod` - a [ModState](../input/#modstate) value
> - `event.down` - a `Bool` value, whether the key is down or not
> - `event.repeat` - a `Bool` value, whether the event is from a key repeat
> 
>   ```js
>   if(event.type == UIEvent.key) {
>     var down = event.down ? "pressed" : "released"
>     Log.print("key %(down), key was `%(Key.name(event.key))`")
>     Log.print("  scan `%(Scan.name(event.scan))`, repeat? %(event.repeat)")
>     if(event.mod.lshift || event.mod.rshift) {
>       Log.print("shift was also held down!")
>     }
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="text"></endpoint>
<h4 class="signature_head">UIEvent.text</h4><a class="signature-arity" href="#UIEvent.text" title="Permanent link">1</a><signature id="UIEvent.text">

```lx
UIEvent.text : unknown
```
</signature>

> A control has sent a text event, which originates from typing.
> 
> These events allow handling complex input that comes from the OS
> level IME input dialogs. On the simplest level, displaying `event.text`
> is enough to get started. 
> 
> Sends the following:
> 
> - `event.text` - the latest text displayed
> - `event.text_start` - the start of the modified text
> - `event.text_length` - the length of the modified text
> - `event.text_type` - a [TextEvent](../input/#textevent) type (`edit` or `input`)
> 
> The easiest way to understand might be to see.
> [This video](https://twitter.com/ruby0x1/status/928435874718679040) shows this at work.
> 
> As a user is typing, there may be candidates avaiable to select from, 
> when this is true, these are sent as `TextInput.edit` events, with a start and end.
> When a candidate is selected (or no choices), a `TextEvent.input` is sent with the `text`.   

<endpoint module="luxe: world" class="UIEvent" signature="focus"></endpoint>
<h4 class="signature_head">UIEvent.focus</h4><a class="signature-arity" href="#UIEvent.focus" title="Permanent link">1</a><signature id="UIEvent.focus">

```lx
UIEvent.focus : unknown
```
</signature>

> A control has gained focus.
> Sends no additional data in the event.
> 
>   ```js
>   if(event.type == UIEvent.focus) {
>     Log.print("gained focus!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="unfocus"></endpoint>
<h4 class="signature_head">UIEvent.unfocus</h4><a class="signature-arity" href="#UIEvent.unfocus" title="Permanent link">1</a><signature id="UIEvent.unfocus">

```lx
UIEvent.unfocus : unknown
```
</signature>

> A control has lost focus.
> Sends no additional data in the event.
> 
>   ```js
>   if(event.type == UIEvent.unfocus) {
>     Log.print("lost focus!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="capture"></endpoint>
<h4 class="signature_head">UIEvent.capture</h4><a class="signature-arity" href="#UIEvent.capture" title="Permanent link">1</a><signature id="UIEvent.capture">

```lx
UIEvent.capture : unknown
```
</signature>

> A control has been captured.
> 
>   ```js
>   if(event.type == UIEvent.capture) {
>     Log.print("gained input capture!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="uncapture"></endpoint>
<h4 class="signature_head">UIEvent.uncapture</h4><a class="signature-arity" href="#UIEvent.uncapture" title="Permanent link">1</a><signature id="UIEvent.uncapture">

```lx
UIEvent.uncapture : unknown
```
</signature>

> A control has lost capture status.
> 
>   ```js
>   if(event.type == UIEvent.uncapture) {
>     Log.print("lost input capture!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="commit"></endpoint>
<h4 class="signature_head">UIEvent.commit</h4><a class="signature-arity" href="#UIEvent.commit" title="Permanent link">1</a><signature id="UIEvent.commit">

```lx
UIEvent.commit : unknown
```
</signature>

> When a control has changeable state (like an editable text control),
> it will send a `commit` event when the contents are being applied/committed.
> For example, if you are typing text and hit enter, or unfocus the control.
> 
>   ```js
>   if(event.type == UIEvent.uncapture) {
>     Log.print("lost input capture!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="destroy"></endpoint>
<h4 class="signature_head">UIEvent.destroy</h4><a class="signature-arity" href="#UIEvent.destroy" title="Permanent link">1</a><signature id="UIEvent.destroy">

```lx
UIEvent.destroy : unknown
```
</signature>

> When a control is destroyed you'll get notified here.
> Keep in mind that it's destroyed.
> 
>   ```js
>   if(event.type == UIEvent.destroy) {
>     Log.print("destroyed!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="language"></endpoint>
<h4 class="signature_head">UIEvent.language</h4><a class="signature-arity" href="#UIEvent.language" title="Permanent link">1</a><signature id="UIEvent.language">

```lx
UIEvent.language : unknown
```
</signature>

> When the UI lanuage changes, your control will receive this event.
> 
>   ```js
>   if(event.type == UIEvent.language) {
>     Log.print("language changed.. I should update my size..")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="change"></endpoint>
<h4 class="signature_head">UIEvent.change</h4><a class="signature-arity" href="#UIEvent.change" title="Permanent link">1</a><signature id="UIEvent.change">

```lx
UIEvent.change : unknown
```
</signature>

> Change events are context specific, but notify you of a change in state.
> For example, [UIWindow](../ui/window) sends a change event with [UIWindowChange](../ui/window/#uiwindowchange) to notify when a window was closed, collapsed or uncollapsed. A [UIText](../ui/text) sends a change event
> when the text has been changed, via typing or otherwise.
> 
> In each case, `event.change` contains the relevant data.
> 
>   ```js
>   //UIText example
>   if(event.type == UIEvent.change) {
>     Log.print("text changed `%(event.change)`!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="bounds"></endpoint>
<h4 class="signature_head">UIEvent.bounds</h4><a class="signature-arity" href="#UIEvent.bounds" title="Permanent link">1</a><signature id="UIEvent.bounds">

```lx
UIEvent.bounds : unknown
```
</signature>

> A control has changed bounds (note: this may not be working as intended right now).
> Sends `event.dx`, `event.dy` and `event.dw`, `event.dh` where `d` means `delta`.
> i.e the change in bounds as a difference between now and before.
> 
>   ```js
>   if(event.type == UIEvent.bounds) {
>     if(event.dx != 0) Log.print("moved on x by %(event.dx) amount!")
>     if(event.dy != 0) Log.print("moved on y by %(event.dy) amount!")
>     if(event.dw != 0) Log.print("width changed by %(event.dw) amount!")
>     if(event.dh != 0) Log.print("height changed by %(event.dh) amount!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="drag"></endpoint>
<h4 class="signature_head">UIEvent.drag</h4><a class="signature-arity" href="#UIEvent.drag" title="Permanent link">1</a><signature id="UIEvent.drag">

```lx
UIEvent.drag : unknown
```
</signature>

> When a control is dragged or dropped on the UI canvas.
> The data field contains the kind of event, e.g UIDrag.start or UIDrag.end.
> The x/y is the start, and end_x/end_y is the end (for a start they're the same)
> 
>   ```js
>   if(event.type == UIEvent.drag) {
>     Log.print("control drag changed.. %(event.data)")
>   }
>   ```   


### UIImageFit
`import "luxe: world" for UIImageFit{:lx}`
> no docs found

- [fill](#UIImageFit.fill)
- [contain](#UIImageFit.contain)
- [cover](#UIImageFit.cover)
- [keep_width](#UIImageFit.keep_width)
- [keep_height](#UIImageFit.keep_height)


---

<endpoint module="luxe: world" class="UIImageFit" signature="fill"></endpoint>
<h4 class="signature_head">UIImageFit.fill</h4><a class="signature-arity" href="#UIImageFit.fill" title="Permanent link">1</a><signature id="UIImageFit.fill">

```lx
UIImageFit.fill : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIImageFit" signature="contain"></endpoint>
<h4 class="signature_head">UIImageFit.contain</h4><a class="signature-arity" href="#UIImageFit.contain" title="Permanent link">1</a><signature id="UIImageFit.contain">

```lx
UIImageFit.contain : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIImageFit" signature="cover"></endpoint>
<h4 class="signature_head">UIImageFit.cover</h4><a class="signature-arity" href="#UIImageFit.cover" title="Permanent link">1</a><signature id="UIImageFit.cover">

```lx
UIImageFit.cover : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIImageFit" signature="keep_width"></endpoint>
<h4 class="signature_head">UIImageFit.keep_width</h4><a class="signature-arity" href="#UIImageFit.keep_width" title="Permanent link">1</a><signature id="UIImageFit.keep_width">

```lx
UIImageFit.keep_width : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIImageFit" signature="keep_height"></endpoint>
<h4 class="signature_head">UIImageFit.keep_height</h4><a class="signature-arity" href="#UIImageFit.keep_height" title="Permanent link">1</a><signature id="UIImageFit.keep_height">

```lx
UIImageFit.keep_height : unknown
```
</signature>

> no docs found   


### UIImageFlags
`import "luxe: world" for UIImageFlags{:lx}`
> no docs found

- [none](#UIImageFlags.none)
- [pixelated](#UIImageFlags.pixelated)
- [use_mips](#UIImageFlags.use_mips)


---

<endpoint module="luxe: world" class="UIImageFlags" signature="none"></endpoint>
<h4 class="signature_head">UIImageFlags.none</h4><a class="signature-arity" href="#UIImageFlags.none" title="Permanent link">1</a><signature id="UIImageFlags.none">

```lx
UIImageFlags.none : unknown
```
</signature>

> uses linear interpolation samplers, interpolating smoothly between pixels.   

<endpoint module="luxe: world" class="UIImageFlags" signature="pixelated"></endpoint>
<h4 class="signature_head">UIImageFlags.pixelated</h4><a class="signature-arity" href="#UIImageFlags.pixelated" title="Permanent link">1</a><signature id="UIImageFlags.pixelated">

```lx
UIImageFlags.pixelated : unknown
```
</signature>

> uses nearest neighbor samplers, leading to an interpolated look.   

<endpoint module="luxe: world" class="UIImageFlags" signature="use_mips"></endpoint>
<h4 class="signature_head">UIImageFlags.use_mips</h4><a class="signature-arity" href="#UIImageFlags.use_mips" title="Permanent link">1</a><signature id="UIImageFlags.use_mips">

```lx
UIImageFlags.use_mips : unknown
```
</signature>

> uses trilinear interpolation samplers, interpolating smoothly between pixels and mip levels.   


### UILayoutMode
`import "luxe: world" for UILayoutMode{:lx}`
> no docs found

- [none](#UILayoutMode.none)
- [flex](#UILayoutMode.flex)


---

<endpoint module="luxe: world" class="UILayoutMode" signature="none"></endpoint>
<h4 class="signature_head">UILayoutMode.none</h4><a class="signature-arity" href="#UILayoutMode.none" title="Permanent link">1</a><signature id="UILayoutMode.none">

```lx
UILayoutMode.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UILayoutMode" signature="flex"></endpoint>
<h4 class="signature_head">UILayoutMode.flex</h4><a class="signature-arity" href="#UILayoutMode.flex" title="Permanent link">1</a><signature id="UILayoutMode.flex">

```lx
UILayoutMode.flex : unknown
```
</signature>

> no docs found   


### UIRenderMode
`import "luxe: world" for UIRenderMode{:lx}`
> no docs found

- [unknown](#UIRenderMode.unknown)
- [image](#UIRenderMode.image)
- [world](#UIRenderMode.world)


---

<endpoint module="luxe: world" class="UIRenderMode" signature="unknown"></endpoint>
<h4 class="signature_head">UIRenderMode.unknown</h4><a class="signature-arity" href="#UIRenderMode.unknown" title="Permanent link">1</a><signature id="UIRenderMode.unknown">

```lx
UIRenderMode.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIRenderMode" signature="image"></endpoint>
<h4 class="signature_head">UIRenderMode.image</h4><a class="signature-arity" href="#UIRenderMode.image" title="Permanent link">1</a><signature id="UIRenderMode.image">

```lx
UIRenderMode.image : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="UIRenderMode" signature="world"></endpoint>
<h4 class="signature_head">UIRenderMode.world</h4><a class="signature-arity" href="#UIRenderMode.world" title="Permanent link">1</a><signature id="UIRenderMode.world">

```lx
UIRenderMode.world : unknown
```
</signature>

> no docs found   


### WorldEventType
`import "luxe: world" for WorldEventType{:lx}`
> no docs found

- [unknown](#WorldEventType.unknown)
- [create](#WorldEventType.create)
- [destroy](#WorldEventType.destroy)
- [tick](#WorldEventType.tick)
- [modifier_tick](#WorldEventType.modifier_tick)
- [name](#WorldEventType.name)(**value**: `WorldEventType{:lx}`)


---

<endpoint module="luxe: world" class="WorldEventType" signature="unknown"></endpoint>
<h4 class="signature_head">WorldEventType.unknown</h4><a class="signature-arity" href="#WorldEventType.unknown" title="Permanent link">1</a><signature id="WorldEventType.unknown">

```lx
WorldEventType.unknown : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="create"></endpoint>
<h4 class="signature_head">WorldEventType.create</h4><a class="signature-arity" href="#WorldEventType.create" title="Permanent link">1</a><signature id="WorldEventType.create">

```lx
WorldEventType.create : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="destroy"></endpoint>
<h4 class="signature_head">WorldEventType.destroy</h4><a class="signature-arity" href="#WorldEventType.destroy" title="Permanent link">1</a><signature id="WorldEventType.destroy">

```lx
WorldEventType.destroy : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="tick"></endpoint>
<h4 class="signature_head">WorldEventType.tick</h4><a class="signature-arity" href="#WorldEventType.tick" title="Permanent link">1</a><signature id="WorldEventType.tick">

```lx
WorldEventType.tick : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="modifier_tick"></endpoint>
<h4 class="signature_head">WorldEventType.modifier_tick</h4><a class="signature-arity" href="#WorldEventType.modifier_tick" title="Permanent link">1</a><signature id="WorldEventType.modifier_tick">

```lx
WorldEventType.modifier_tick : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="name(value : WorldEventType)"></endpoint>
<h4 class="signature_head">WorldEventType.name</h4><a class="signature-arity" href="#WorldEventType.name" title="Permanent link">1</a><signature id="WorldEventType.name">

```lx
WorldEventType.name(value : WorldEventType) : String
```
</signature>

> no docs found   


### WorldRenderDesc
`import "luxe: world" for WorldRenderDesc{:lx}`
> no docs found

- [camera](#WorldRenderDesc.camera)
- [camera](#WorldRenderDesc.camera=)=(v : Any)
- [camera](#WorldRenderDesc.camera)(**v**: `Any{:lx}`)
- [cull_camera](#WorldRenderDesc.cull_camera)
- [cull_camera](#WorldRenderDesc.cull_camera=)=(v : Any)
- [cull_camera](#WorldRenderDesc.cull_camera)(**v**: `Any{:lx}`)
- [no_cull](#WorldRenderDesc.no_cull)
- [no_cull](#WorldRenderDesc.no_cull=)=(v : Any)
- [no_cull](#WorldRenderDesc.no_cull)(**v**: `Any{:lx}`)
- [new](#WorldRenderDesc.new)()


---

<endpoint module="luxe: world" class="WorldRenderDesc" signature="camera"></endpoint>
<h4 class="signature_head">WorldRenderDesc.camera</h4><a class="signature-arity" href="#WorldRenderDesc.camera" title="Permanent link">1</a><signature id="WorldRenderDesc.camera">

```lx
WorldRenderDesc.camera : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="camera=(v : Any)"></endpoint>
<h4 class="signature_head">WorldRenderDesc.camera</h4><a class="signature-arity" href="#WorldRenderDesc.camera=" title="Permanent link">1</a><signature id="WorldRenderDesc.camera=">

```lx
WorldRenderDesc.camera=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="camera(v : Any)"></endpoint>
<h4 class="signature_head">WorldRenderDesc.camera</h4><a class="signature-arity" href="#WorldRenderDesc.camera" title="Permanent link">1</a><signature id="WorldRenderDesc.camera">

```lx
WorldRenderDesc.camera(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="cull_camera"></endpoint>
<h4 class="signature_head">WorldRenderDesc.cull_camera</h4><a class="signature-arity" href="#WorldRenderDesc.cull_camera" title="Permanent link">1</a><signature id="WorldRenderDesc.cull_camera">

```lx
WorldRenderDesc.cull_camera : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="cull_camera=(v : Any)"></endpoint>
<h4 class="signature_head">WorldRenderDesc.cull_camera</h4><a class="signature-arity" href="#WorldRenderDesc.cull_camera=" title="Permanent link">1</a><signature id="WorldRenderDesc.cull_camera=">

```lx
WorldRenderDesc.cull_camera=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="cull_camera(v : Any)"></endpoint>
<h4 class="signature_head">WorldRenderDesc.cull_camera</h4><a class="signature-arity" href="#WorldRenderDesc.cull_camera" title="Permanent link">1</a><signature id="WorldRenderDesc.cull_camera">

```lx
WorldRenderDesc.cull_camera(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="no_cull"></endpoint>
<h4 class="signature_head">WorldRenderDesc.no_cull</h4><a class="signature-arity" href="#WorldRenderDesc.no_cull" title="Permanent link">1</a><signature id="WorldRenderDesc.no_cull">

```lx
WorldRenderDesc.no_cull : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="no_cull=(v : Any)"></endpoint>
<h4 class="signature_head">WorldRenderDesc.no_cull</h4><a class="signature-arity" href="#WorldRenderDesc.no_cull=" title="Permanent link">1</a><signature id="WorldRenderDesc.no_cull=">

```lx
WorldRenderDesc.no_cull=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="no_cull(v : Any)"></endpoint>
<h4 class="signature_head">WorldRenderDesc.no_cull</h4><a class="signature-arity" href="#WorldRenderDesc.no_cull" title="Permanent link">1</a><signature id="WorldRenderDesc.no_cull">

```lx
WorldRenderDesc.no_cull(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="new()"></endpoint>
<h4 class="signature_head">WorldRenderDesc.new</h4><a class="signature-arity" href="#WorldRenderDesc.new" title="Permanent link">1</a><signature id="WorldRenderDesc.new">

```lx
WorldRenderDesc.new() : WorldRenderDesc
```
</signature>

> no docs found   

