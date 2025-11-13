---
title: "luxe: world"
description: API version 2025.11.1
slug: "v/2025.11.1/world"
---
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


## Clock
```lx
import "luxe: world" for Clock
```
> no docs found

<endpoint module="luxe: world" class="Clock" signature="create(world : World, rate : Num, paused : Bool)"></endpoint>
### Clock.create(...)
```lx
Clock.create(world : World, rate : Num, paused : Bool) : Clock
```
> no docs found   

<endpoint module="luxe: world" class="Clock" signature="create(world : World, rate : Num)"></endpoint>
### Clock.create(..)
```lx
Clock.create(world : World, rate : Num) : Clock
```
> no docs found   

<endpoint module="luxe: world" class="Clock" signature="time(world : World, clock : Clock)"></endpoint>
### Clock.time(..)
```lx
Clock.time(world : World, clock : Clock) : Num
```
> no docs found   


## Entity
```lx
import "luxe: world" for Entity
```
> Anything that exists in a world is a `entity`. The entity itself is just a handle (represented by a number) with which modifiers and a name can be associated. Entities are very lightweight, so creating and destroying many of them usually isnt a concern.
> 
> An entity in itself does not have a transform (you can attach the `transform` modifier to it to gain that) or any kind of hierarchy (different implicit hierarchies can result from modifiers).
> Entities can be created manually in code, or loaded as Scenes or Prototypes.

<endpoint module="luxe: world" class="Entity" signature="none"></endpoint>
### Entity.none
```lx
Entity.none : Entity
```
> An entity representing no value. Note, not for comparisons! Use Entity.valid(entity) for that   

<endpoint module="luxe: world" class="Entity" signature="create(world : World)"></endpoint>
### Entity.create(.)
```lx
Entity.create(world : World) : Entity
```
> Creates a new `entity` in the given `world`.
> 
>   ```js
>   var player = Entity.create(app.world)
>   ```   

<endpoint module="luxe: world" class="Entity" signature="create(world : World, name : String)"></endpoint>
### Entity.create(..)
```lx
Entity.create(world : World, name : String) : Entity
```
> Creates a new `entity` in the given `world` with the specified `String` name.
> 
>   ```js
>   var player = Entity.create(app.world, "player")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="valid(entity : Entity)"></endpoint>
### Entity.valid(.)
```lx
Entity.valid(entity : Entity) : Bool
```
> Checks if the given variable references a valid `entity`.
> 
>   ```js
>   var player = Entity.get_named(app.world, "player")
>   if (Entity.valid(player)) {
>     Log.print("Got the player entity!")
>   }
>   ```   

<endpoint module="luxe: world" class="Entity" signature="valid_handle(entity : Entity)"></endpoint>
### Entity.valid_handle(.)
```lx
Entity.valid_handle(entity : Entity) : Bool
```
> Checks if the given variable references a valid `entity` handle.
> Note that when an entity is destroyed, it marks the entity as invalid 
> for Entity.valid(), but the destroy happens at the end of the frame.
> This means during that frame the entity can still be "live", but not valid.
> 
> This is mostly useful in the detach handlers, where Entity.valid would return false.   

<endpoint module="luxe: world" class="Entity" signature="get_world(entity : Entity)"></endpoint>
### Entity.get_world(.)
```lx
Entity.get_world(entity : Entity) : World
```
> Get the `world` a given `entity` belongs to
> 
>   ```js
>   var world = Entity.get_world(entity)
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get(uuid : String)"></endpoint>
### Entity.get(.)
```lx
Entity.get(uuid : String) : Entity
```
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
### Entity.get_addressed_in(..)
```lx
Entity.get_addressed_in(context_root : Entity, address : List) : Entity
```
> Find an entity by `address` in the given context (only). 
> The address is a list of uuids, and the context is a scene root entity, 
> or prototype root entity.   

<endpoint module="luxe: world" class="Entity" signature="get_addressed(relative_to : Entity, address : List)"></endpoint>
### Entity.get_addressed(..)
```lx
Entity.get_addressed(relative_to : Entity, address : List) : Entity
```
> Find an entity by `address` relative to the given entity, and will search upward
> through all contexts in the tree to try and find the addressed entity.
> The address is a list of uuids.   

<endpoint module="luxe: world" class="Entity" signature="resolve(relative_to : Entity, address : List)"></endpoint>
### Entity.resolve(..)
```lx
Entity.resolve(relative_to : Entity, address : List) : Entity
```
> Find an entity by `address` relative to the given entity, and will search upward
> through all contexts in the tree to try and find the addressed entity.
> The address is a list of uuids called a `Link` typically.
> Alias for `Entity.get_addressed`.   

<endpoint module="luxe: world" class="Entity" signature="get_relative_address(entity : Entity, relative_to : Entity)"></endpoint>
### Entity.get_relative_address(..)
```lx
Entity.get_relative_address(entity : Entity, relative_to : Entity) : List
```
> Get the address of one entity relative to another. Typically used in e.g the editor to resolve
> an address of a link field. Returns the address as a list of UUIDs.   

<endpoint module="luxe: world" class="Entity" signature="get_addressed_context(relative_to : Entity, address : List)"></endpoint>
### Entity.get_addressed_context(..)
```lx
Entity.get_addressed_context(relative_to : Entity, address : List) : Entity
```
> Find an entity by `address` relative to the given entity, and will search upward
> through all contexts in the tree to try and find the addressed entity - but this
> function will return the context it was found in (e.g the context the address is for).
> The address is a list of uuids.   

<endpoint module="luxe: world" class="Entity" signature="get_with_in(context : Entity, modifier_id : String)"></endpoint>
### Entity.get_with_in(..)
```lx
Entity.get_with_in(context : Entity, modifier_id : String) : Entity
```
> Get the first entity found in the context that has the given modifier attached.
> Searches all entities the context has loaded and returns the first one found.
> Note: Modifiers expose `Thing.id` which you would use here from the type.   

<endpoint module="luxe: world" class="Entity" signature="get_with(relative_to : Entity, modifier_id : String)"></endpoint>
### Entity.get_with(..)
```lx
Entity.get_with(relative_to : Entity, modifier_id : String) : Entity
```
> Get the first entity found in the context that has the given modifier attached.
> Searches all entities within the context this entity is inside of (e.g prototype).
> Note: Modifiers expose `Thing.id` which you would use here from the type.   

<endpoint module="luxe: world" class="Entity" signature="get_with_all_in(context : Entity, modifier_id : String)"></endpoint>
### Entity.get_with_all_in(..)
```lx
Entity.get_with_all_in(context : Entity, modifier_id : String) : Set
```
> Get the set of entities found in the context that have the given modifier attached.
> Searches all entities the context and returns the list as a Set.
> Note: Modifiers expose `Thing.id` which you would use here from the type.   

<endpoint module="luxe: world" class="Entity" signature="get_with_all(relative_to : Entity, modifier_id : String)"></endpoint>
### Entity.get_with_all(..)
```lx
Entity.get_with_all(relative_to : Entity, modifier_id : String) : Set
```
> Get the set of entities found in the context that have the given modifier attached.
> Searches all entities the context and returns the list as a Set.
> Note: Modifiers expose `Thing.id` which you would use here from the type.   

<endpoint module="luxe: world" class="Entity" signature="get_named(world : World, name : String)"></endpoint>
### Entity.get_named(..)
```lx
Entity.get_named(world : World, name : String) : Entity
```
> Get the first `entity` from the given `world` with the name `name`.
> Which entity is returned is unspecified if there are multiple with the same name.
> If you need to test further use `Entity.get_named_all`. Returns null if no
> entity is found by that name.
> 
>   ```js
>   var player = Entity.get_named(app.world, "player")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_named_all(world : World, name : String)"></endpoint>
### Entity.get_named_all(..)
```lx
Entity.get_named_all(world : World, name : String) : List
```
> Get a list of all `entities` from the given `world` with the name `name`.
> Returns a list of entities with an unspecified order. Returns an empty list
> if no entities are found.
> 
>   ```js
>   var list = Entity.get_named_all(app.world, "fern")
>   Log.print("There are %(list.count) ferns in this forest!")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_named_in(context : Entity, name : String)"></endpoint>
### Entity.get_named_in(..)
```lx
Entity.get_named_in(context : Entity, name : String) : Entity
```
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
### Entity.get_named_all_in(..)
```lx
Entity.get_named_all_in(context : Entity, name : String) : List
```
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
### Entity.get_name(.)
```lx
Entity.get_name(entity : Entity) : StringID
```
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
### Entity.name(.)
```lx
Entity.name(entity : Entity) : String
```
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
### Entity.set_visible(..)
```lx
Entity.set_visible(entity : Entity, state : Bool) : unknown
```
> Set the entity visibility flag, which will remove associated geometry from rendering.
> Only geometry intentionally associated with this entity is affected. 
> Sometimes geometry is created and not connected (intentionally or otherwise, see `World.render_set_add`),
> this won't affect that geometry.   

<endpoint module="luxe: world" class="Entity" signature="set_visible(entity : Entity, state : Bool, tag : String)"></endpoint>
### Entity.set_visible(...)
```lx
Entity.set_visible(entity : Entity, state : Bool, tag : String) : unknown
```
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
### Entity.get_visible(.)
```lx
Entity.get_visible(entity : Entity) : unknown
```
> Get the entity visibility state   

<endpoint module="luxe: world" class="Entity" signature="get_visible(entity : Entity, tag : String)"></endpoint>
### Entity.get_visible(..)
```lx
Entity.get_visible(entity : Entity, tag : String) : unknown
```
> Get the entity visibility state for the given tag   

<endpoint module="luxe: world" class="Entity" signature="get_visual_obb(entity : Entity)"></endpoint>
### Entity.get_visual_obb(.)
```lx
Entity.get_visual_obb(entity : Entity) : List
```
> Returns the combined visual bounds of this and entity created by this entity (in the obb shape, e.g 8 corner points)   

<endpoint module="luxe: world" class="Entity" signature="get_folder(entity : Entity)"></endpoint>
### Entity.get_folder(.)
```lx
Entity.get_folder(entity : Entity) : String
```
> get the folder of this entity (used for nested display in a world outliner)   

<endpoint module="luxe: world" class="Entity" signature="set_folder(entity : Entity, folder : String)"></endpoint>
### Entity.set_folder(..)
```lx
Entity.set_folder(entity : Entity, folder : String) : None
```
> set the folder of this entity (used for nested display in a world outliner)   

<endpoint module="luxe: world" class="Entity" signature="get_asset_id(entity : Entity)"></endpoint>
### Entity.get_asset_id(.)
```lx
Entity.get_asset_id(entity : Entity) : String
```
> get the asset ID of this entity (if it has one)   

<endpoint module="luxe: world" class="Entity" signature="set_asset_id(entity : Entity, asset_id : String)"></endpoint>
### Entity.set_asset_id(..)
```lx
Entity.set_asset_id(entity : Entity, asset_id : String) : None
```
> set the asset ID of this entity (used for e.g editor)   

<endpoint module="luxe: world" class="Entity" signature="get_context_asset_id(entity : Entity)"></endpoint>
### Entity.get_context_asset_id(.)
```lx
Entity.get_context_asset_id(entity : Entity) : String
```
> get the context asset ID of this entity (if it has one)   

<endpoint module="luxe: world" class="Entity" signature="set_context_asset_id(entity : Entity, asset_id : String)"></endpoint>
### Entity.set_context_asset_id(..)
```lx
Entity.set_context_asset_id(entity : Entity, asset_id : String) : None
```
> set the context asset ID of this entity (used for e.g editor)   

<endpoint module="luxe: world" class="Entity" signature="get_context_type(entity : Entity)"></endpoint>
### Entity.get_context_type(.)
```lx
Entity.get_context_type(entity : Entity) : EntityContextType
```
> get the context type for an entity   

<endpoint module="luxe: world" class="Entity" signature="get_context_instance_uuid(entity : Entity)"></endpoint>
### Entity.get_context_instance_uuid(.)
```lx
Entity.get_context_instance_uuid(entity : Entity) : String
```
> get the context uuid for a given entity. Entity should be EntityContextType `scene` or `prototype` or null is returned   

<endpoint module="luxe: world" class="Entity" signature="get_context_data_uuid(entity : Entity)"></endpoint>
### Entity.get_context_data_uuid(.)
```lx
Entity.get_context_data_uuid(entity : Entity) : String
```
> get the context data uuid for a given entity. Entity should be EntityContextType `scene` or `prototype` or null is returned   

<endpoint module="luxe: world" class="Entity" signature="get_context(entity : Entity)"></endpoint>
### Entity.get_context(.)
```lx
Entity.get_context(entity : Entity) : Entity
```
> get the context this entity belongs to if any   

<endpoint module="luxe: world" class="Entity" signature="get_context_origin(entity : Entity)"></endpoint>
### Entity.get_context_origin(.)
```lx
Entity.get_context_origin(entity : Entity) : Entity
```
> get the context that this entity originated from. For example if a scene was loaded and inside it there was a prototype and so on, the scene is the origin.   

<endpoint module="luxe: world" class="Entity" signature="get_context_address(entity : Entity, context : Entity)"></endpoint>
### Entity.get_context_address(..)
```lx
Entity.get_context_address(entity : Entity, context : Entity) : List
```
> get the address of the entity within a given context.   

<endpoint module="luxe: world" class="Entity" signature="list_context_all(context : Entity)"></endpoint>
### Entity.list_context_all(.)
```lx
Entity.list_context_all(context : Entity) : Set
```
> Get all the entities this context created as a Set of entities.   

<endpoint module="luxe: world" class="Entity" signature="list_context_direct(context : Entity)"></endpoint>
### Entity.list_context_direct(.)
```lx
Entity.list_context_direct(context : Entity) : Set
```
> Get all the entities this context created directly (rather than indirectly) as a Set of entities.   

<endpoint module="luxe: world" class="Entity" signature="get_context_id(context : Entity)"></endpoint>
### Entity.get_context_id(.)
```lx
Entity.get_context_id(context : Entity) : String
```
> get the id of the given context.   

<endpoint module="luxe: world" class="Entity" signature="get_origin_address(entity : Entity)"></endpoint>
### Entity.get_origin_address(.)
```lx
Entity.get_origin_address(entity : Entity) : List
```
> get the address of the entity within it's origin context.   

<endpoint module="luxe: world" class="Entity" signature="get_address(entity : Entity)"></endpoint>
### Entity.get_address(.)
```lx
Entity.get_address(entity : Entity) : List
```
> get the address of the entity within it's origin context.   

<endpoint module="luxe: world" class="Entity" signature="get_context_is_direct(context : Entity, entity : Entity)"></endpoint>
### Entity.get_context_is_direct(..)
```lx
Entity.get_context_is_direct(context : Entity, entity : Entity) : Bool
```
> returns true if the given entity is a direct entity in the context. This includes prototype roots spawned into the context (use context type to filter them out).   

<endpoint module="luxe: world" class="Entity" signature="init_into_context(entity : Entity, context : Entity)"></endpoint>
### Entity.init_into_context(..)
```lx
Entity.init_into_context(entity : Entity, context : Entity) : unknown
```
> Initialize an entity into an existing context (typically editor related)   

<endpoint module="luxe: world" class="Entity" signature="init_into_context(entity : Entity, context : Entity, address_uuid : UUID)"></endpoint>
### Entity.init_into_context(...)
```lx
Entity.init_into_context(entity : Entity, context : Entity, address_uuid : UUID) : unknown
```
> Initialize an entity into an existing context with an address uuid (typically editor related)   

<endpoint module="luxe: world" class="Entity" signature="note_add(entity : Entity, note : String)"></endpoint>
### Entity.note_add(..)
```lx
Entity.note_add(entity : Entity, note : String) : unknown
```
> add a note to this entity (like a lower level tag)   

<endpoint module="luxe: world" class="Entity" signature="note_remove(entity : Entity, note : String)"></endpoint>
### Entity.note_remove(..)
```lx
Entity.note_remove(entity : Entity, note : String) : unknown
```
> remove a note to this entity   

<endpoint module="luxe: world" class="Entity" signature="note_has(entity : Entity, note : String)"></endpoint>
### Entity.note_has(..)
```lx
Entity.note_has(entity : Entity, note : String) : unknown
```
> returns true if this note exists, false otherwise   

<endpoint module="luxe: world" class="Entity" signature="notes(entity : Entity)"></endpoint>
### Entity.notes(.)
```lx
Entity.notes(entity : Entity) : unknown
```
> get all the notes on the given entity   

<endpoint module="luxe: world" class="Entity" signature="set_name(entity : Entity, name : String)"></endpoint>
### Entity.set_name(..)
```lx
Entity.set_name(entity : Entity, name : String) : unknown
```
> Set the name of a given `entity`.
> 
>   ```js
>   Entity.set_name(player, "player")
>   ```   

<endpoint module="luxe: world" class="Entity" signature="get_uuid(entity : Entity)"></endpoint>
### Entity.get_uuid(.)
```lx
Entity.get_uuid(entity : Entity) : String
```
> Get the unique ID as a string UUID for a given `entity`.   

<endpoint module="luxe: world" class="Entity" signature="set_uuid(entity : Entity, uuid_string : String)"></endpoint>
### Entity.set_uuid(..)
```lx
Entity.set_uuid(entity : Entity, uuid_string : String) : unknown
```
> Set the unique ID of a given `entity`.
> Typically used in special cases, not commonly used on the high level.   

<endpoint module="luxe: world" class="Entity" signature="destroy(entity : Entity)"></endpoint>
### Entity.destroy(.)
```lx
Entity.destroy(entity : Entity) : unknown
```
> Destroy the given `entity`, removing it from the world it's in.
>         
> At the moment destroy is immediate (potentially changing soon),
> so sometimes you might want `Frame.end { Entity.destroy(entity) }` 
> to push the destroy to the end of the frame, so it doesn't happen
> while iterating a list or when things are still processing it.   

<endpoint module="luxe: world" class="Entity" signature="duplicate(entity : Entity)"></endpoint>
### Entity.duplicate(.)
```lx
Entity.duplicate(entity : Entity) : Entity
```
> Duplicate the given `entity`. 
> Returns a new entity with the same notes, folder, name and modifiers.   

<endpoint module="luxe: world" class="Entity" signature="duplicate(entity : Entity, world : World)"></endpoint>
### Entity.duplicate(..)
```lx
Entity.duplicate(entity : Entity, world : World) : Entity
```
> Duplicate the given `entity` into another world.
> Returns a new entity with the same notes, folder, name and modifiers.
> Will not duplicate in same context as origin entity if the new world is different.   


## EntityContextType
```lx
import "luxe: world" for EntityContextType
```
> Which kind of context is an entity the root of? Default is `none`.

<endpoint module="luxe: world" class="EntityContextType" signature="none"></endpoint>
### EntityContextType.none
```lx
EntityContextType.none : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityContextType" signature="scene"></endpoint>
### EntityContextType.scene
```lx
EntityContextType.scene : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityContextType" signature="prototype"></endpoint>
### EntityContextType.prototype
```lx
EntityContextType.prototype : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityContextType" signature="name(value : EntityContextType)"></endpoint>
### EntityContextType.name(.)
```lx
EntityContextType.name(value : EntityContextType) : String
```
> no docs found   


## EntityEventType
```lx
import "luxe: world" for EntityEventType
```
> no docs found

<endpoint module="luxe: world" class="EntityEventType" signature="unknown"></endpoint>
### EntityEventType.unknown
```lx
EntityEventType.unknown : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="create"></endpoint>
### EntityEventType.create
```lx
EntityEventType.create : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="destroy"></endpoint>
### EntityEventType.destroy
```lx
EntityEventType.destroy : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="load"></endpoint>
### EntityEventType.load
```lx
EntityEventType.load : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="unload"></endpoint>
### EntityEventType.unload
```lx
EntityEventType.unload : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="modifier"></endpoint>
### EntityEventType.modifier
```lx
EntityEventType.modifier : unknown
```
> no docs found   

<endpoint module="luxe: world" class="EntityEventType" signature="name(value : EntityEventType)"></endpoint>
### EntityEventType.name(.)
```lx
EntityEventType.name(value : EntityEventType) : String
```
> no docs found   


## ModifierEventType
```lx
import "luxe: world" for ModifierEventType
```
> no docs found

<endpoint module="luxe: world" class="ModifierEventType" signature="unknown"></endpoint>
### ModifierEventType.unknown
```lx
ModifierEventType.unknown : unknown
```
> no docs found   

<endpoint module="luxe: world" class="ModifierEventType" signature="attach"></endpoint>
### ModifierEventType.attach
```lx
ModifierEventType.attach : unknown
```
> no docs found   

<endpoint module="luxe: world" class="ModifierEventType" signature="detach"></endpoint>
### ModifierEventType.detach
```lx
ModifierEventType.detach : unknown
```
> no docs found   

<endpoint module="luxe: world" class="ModifierEventType" signature="change"></endpoint>
### ModifierEventType.change
```lx
ModifierEventType.change : unknown
```
> no docs found   

<endpoint module="luxe: world" class="ModifierEventType" signature="name(value : ModifierEventType)"></endpoint>
### ModifierEventType.name(.)
```lx
ModifierEventType.name(value : ModifierEventType) : String
```
> no docs found   


## UI
```lx
import "luxe: world" for UI
```
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

<endpoint module="luxe: world" class="UI" signature="create(entity : Entity, x : Num, y : Num, w : Num, h : Num, z : Num, camera : Entity)"></endpoint>
### UI.create(.......)
```lx
UI.create(entity : Entity, x : Num, y : Num, w : Num, h : Num, z : Num, camera : Entity) : None
```
> Create a UI modifier on an Entity.
> The `x` `y` `z` arguments are the position relative to the world origin, or relative to the `Transform` on the same entity if one exists.
> `w` and `h` are the width and the height of the canvas, this is both used for the mask texture (and in `UIRenderMode.image` the ui rendertarget) as well as the (unscaled) size of the UI in worldspace.
> `camera` describes a camera that is used to resolve input, most of the time this is the camera rendering the world the UI is in, but it doesnt have to be.   

<endpoint module="luxe: world" class="UI" signature="destroy(entity : Entity)"></endpoint>
### UI.destroy(.)
```lx
UI.destroy(entity : Entity) : None
```
> Remove a `UI` modifier from an entity. This also destroys all controls on that `UI`.   

<endpoint module="luxe: world" class="UI" signature="has(entity : Entity)"></endpoint>
### UI.has(.)
```lx
UI.has(entity : Entity) : Bool
```
> Get whether an Entity has an `UI` modifier attached.   

<endpoint module="luxe: world" class="UI" signature="commit(entity : Entity)"></endpoint>
### UI.commit(.)
```lx
UI.commit(entity : Entity) : None
```
> Request all changes to the UI are committed before rendering happens   

<endpoint module="luxe: world" class="UI" signature="commit_now(entity : Entity)"></endpoint>
### UI.commit_now(.)
```lx
UI.commit_now(entity : Entity) : None
```
> Commit all changes to the UI immediately   

<endpoint module="luxe: world" class="UI" signature="event_cancel(entity : Entity, event_id : ID)"></endpoint>
### UI.event_cancel(..)
```lx
UI.event_cancel(entity : Entity, event_id : ID) : None
```
> Cancel an event.   

<endpoint module="luxe: world" class="UI" signature="event_cancelled(entity : Entity, event_id : ID)"></endpoint>
### UI.event_cancelled(..)
```lx
UI.event_cancelled(entity : Entity, event_id : ID) : Bool
```
> Check whether an event was cancelled before.   

<endpoint module="luxe: world" class="UI" signature="set_camera(entity : Entity, camera : Entity)"></endpoint>
### UI.set_camera(..)
```lx
UI.set_camera(entity : Entity, camera : Entity) : None
```
> Set the camera used for input calculations. Most of the time this is the camera rendering the world the UI is in, but it doesnt have to be.   

<endpoint module="luxe: world" class="UI" signature="set_render_mode(entity : Entity, mode : UIRenderMode)"></endpoint>
### UI.set_render_mode(..)
```lx
UI.set_render_mode(entity : Entity, mode : UIRenderMode) : None
```
> Set the render mode of the UI canvas.
>           
> `UIRenderMode.world` renders the controls directly into the world, while `UIRenderMode.image` first renders them to an intermediate texture and then renders that.
> 
> `UIRenderMode.image` is the default as it can avoid artifacts and works in more circumstances, though `UIRenderMode.world` can lead to more sharp results and slightly better performance.   

<endpoint module="luxe: world" class="UI" signature="set_material_basis(entity : Entity, solid : String, text : String)"></endpoint>
### UI.set_material_basis(...)
```lx
UI.set_material_basis(entity : Entity, solid : String, text : String) : None
```
> Set the material basis the controls (excluding `UIImage`) is drawn with. By default "luxe: material_basis/ui_solid" is the basis for solid controls and "luxe: material_basis/ui_font" the basis for text.   

<endpoint module="luxe: world" class="UI" signature="set_bounds(entity : Entity, x : Num, y : Num, w : Num, h : Num, z : Num)"></endpoint>
### UI.set_bounds(......)
```lx
UI.set_bounds(entity : Entity, x : Num, y : Num, w : Num, h : Num, z : Num) : None
```
> Set size and position of an `UI` modifier.
> The `x` `y` `z` arguments are the position relative to the world origin, or relative to the `Transform` on the same entity if one exists.
> `w` and `h` are the width and the height of the canvas, this is both used for the mask texture (and in `UIRenderMode.image` the ui rendertarget) as well as the (unscaled) size of the UI in worldspace.   

<endpoint module="luxe: world" class="UI" signature="get_pos(entity : Entity)"></endpoint>
### UI.get_pos(.)
```lx
UI.get_pos(entity : Entity) : Vec
```
> Get position of an `UI` modifier.   

<endpoint module="luxe: world" class="UI" signature="get_opacity(entity : Entity)"></endpoint>
### UI.get_opacity(.)
```lx
UI.get_opacity(entity : Entity) : Num
```
> Get overall UI opacity   

<endpoint module="luxe: world" class="UI" signature="set_opacity(entity : Entity, opacity : Num)"></endpoint>
### UI.set_opacity(..)
```lx
UI.set_opacity(entity : Entity, opacity : Num) : Num
```
> Set overall UI opacity   

<endpoint module="luxe: world" class="UI" signature="get_size(entity : Entity)"></endpoint>
### UI.get_size(.)
```lx
UI.get_size(entity : Entity) : Vec
```
> Get size of an `UI` modifier.   

<endpoint module="luxe: world" class="UI" signature="get_debug_control(entity : Entity)"></endpoint>
### UI.get_debug_control(.)
```lx
UI.get_debug_control(entity : Entity) : Control
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="get_debug_draw_depth(entity : Entity)"></endpoint>
### UI.get_debug_draw_depth(.)
```lx
UI.get_debug_draw_depth(entity : Entity) : Num
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="get_input_node(entity : Entity)"></endpoint>
### UI.get_input_node(.)
```lx
UI.get_input_node(entity : Entity) : String
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="set_input_node(entity : Entity, input_node_id : String)"></endpoint>
### UI.set_input_node(..)
```lx
UI.set_input_node(entity : Entity, input_node_id : String) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="set_layout_mode(entity : Entity, mode : UILayoutMode)"></endpoint>
### UI.set_layout_mode(..)
```lx
UI.set_layout_mode(entity : Entity, mode : UILayoutMode) : None
```
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
### UI.set_debug_mode(..)
```lx
UI.set_debug_mode(entity : Entity, mode : UIDebugMode) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="any_marked()"></endpoint>
### UI.any_marked(.)
```lx
UI.any_marked() : Bool
```
> Returns true if any UI has a marked control (any control with input under the mouse)   

<endpoint module="luxe: world" class="UI" signature="any_focused()"></endpoint>
### UI.any_focused(.)
```lx
UI.any_focused() : Bool
```
> Returns true if any UI has a focused control   

<endpoint module="luxe: world" class="UI" signature="get_focused(entity : Entity)"></endpoint>
### UI.get_focused(.)
```lx
UI.get_focused(entity : Entity) : Control
```
> Get currently focussed control. A control being focused means its been clicked on or otherwise focused and will recieve context inputs like keyboard presses on a text input field.   

<endpoint module="luxe: world" class="UI" signature="get_captured(entity : Entity)"></endpoint>
### UI.get_captured(.)
```lx
UI.get_captured(entity : Entity) : Control
```
> Get captured control, `null` if none is captured. A control being captured means all inputs will only be sent to this control until it is uncaptured again.   

<endpoint module="luxe: world" class="UI" signature="get_marked(entity : Entity)"></endpoint>
### UI.get_marked(.)
```lx
UI.get_marked(entity : Entity) : Control
```
> Get marked control, `null` if none is marked. A control being marked means it is hovered over and can be focused.   

<endpoint module="luxe: world" class="UI" signature="get_control_count(entity : Entity)"></endpoint>
### UI.get_control_count(.)
```lx
UI.get_control_count(entity : Entity) : Num
```
> Get amount of controls in a `UI`.   

<endpoint module="luxe: world" class="UI" signature="get_control(entity : Entity, index : Num)"></endpoint>
### UI.get_control(..)
```lx
UI.get_control(entity : Entity, index : Num) : Control
```
> Get a control in a `UI` by its index. Useful for iterating over all controls.   

<endpoint module="luxe: world" class="UI" signature="focus_invalidate(entity : Entity)"></endpoint>
### UI.focus_invalidate(.)
```lx
UI.focus_invalidate(entity : Entity) : None
```
> Unfocus whatever is focussed in a specific `UI`.   

<endpoint module="luxe: world" class="UI" signature="focus(control : Control)"></endpoint>
### UI.focus(.)
```lx
UI.focus(control : Control) : None
```
> Focus a control. Will unfocus any previously focused controls on the `UI`. A control being focused means its been clicked on or otherwise focused and will recieve context inputs like keyboard presses on a text input field.   

<endpoint module="luxe: world" class="UI" signature="unfocus(control : Control)"></endpoint>
### UI.unfocus(.)
```lx
UI.unfocus(control : Control) : None
```
> Unfocus a specific control. If the control is not the focused control in the UI, this does nothing.   

<endpoint module="luxe: world" class="UI" signature="mark(control : Control)"></endpoint>
### UI.mark(.)
```lx
UI.mark(control : Control) : None
```
> Mark a control. Will unfocus any previously marked controls on the `UI`. A control being marked means it is hovered over and can be focused.   

<endpoint module="luxe: world" class="UI" signature="unmark(control : Control)"></endpoint>
### UI.unmark(.)
```lx
UI.unmark(control : Control) : None
```
> Unmark a specific control. If the control is not the marked control in the UI, this does nothing.   

<endpoint module="luxe: world" class="UI" signature="capture(control : Control)"></endpoint>
### UI.capture(.)
```lx
UI.capture(control : Control) : None
```
> Capture a control. Until uncaptured all inputs will only go to this control.   

<endpoint module="luxe: world" class="UI" signature="uncapture(control : Control)"></endpoint>
### UI.uncapture(.)
```lx
UI.uncapture(control : Control) : None
```
> Uncapture a control and have inputs be distributed regularly.   

<endpoint module="luxe: world" class="UI" signature="bring_to_front(control : Control)"></endpoint>
### UI.bring_to_front(.)
```lx
UI.bring_to_front(control : Control) : None
```
> Bring the control to the front in its current context (globally in the `UI` or within its parent if its a child)   

<endpoint module="luxe: world" class="UI" signature="control_at_point(entity : Entity, x : Num, y : Num)"></endpoint>
### UI.control_at_point(...)
```lx
UI.control_at_point(entity : Entity, x : Num, y : Num) : Control
```
> Get the highest control at a position.   

<endpoint module="luxe: world" class="UI" signature="controls_at_point(entity : Entity, x : Num, y : Num)"></endpoint>
### UI.controls_at_point(...)
```lx
UI.controls_at_point(entity : Entity, x : Num, y : Num) : List
```
> Get all controls at a position.   

<endpoint module="luxe: world" class="UI" signature="mouse_to_canvas(entity : Entity, x : Num, y : Num)"></endpoint>
### UI.mouse_to_canvas(...)
```lx
UI.mouse_to_canvas(entity : Entity, x : Num, y : Num) : Float2
```
> Translate from mouse position on screen to canvas coordinates. Uses the set canvas camera.   

<endpoint module="luxe: world" class="UI" signature="canvas_to_world(entity : Entity, x : Num, y : Num)"></endpoint>
### UI.canvas_to_world(...)
```lx
UI.canvas_to_world(entity : Entity, x : Num, y : Num) : Float3
```
> Translate from canvas position to world space.   

<endpoint module="luxe: world" class="UI" signature="dump(ui : Entity)"></endpoint>
### UI.dump(.)
```lx
UI.dump(ui : Entity) : None
```
> Write a bunch of information about the `UI` and its controls into the console.   

<endpoint module="luxe: world" class="UI" signature="spawn(asset_id : String, parent : Control, instance_id : String)"></endpoint>
### UI.spawn(...)
```lx
UI.spawn(asset_id : String, parent : Control, instance_id : String) : None
```
> Spawn controls from a ui asset.
> Puts newly spawned controls into a parent control.   

<endpoint module="luxe: world" class="UI" signature="make(ui : Entity, asset : String, instance_id : String)"></endpoint>
### UI.make(...)
```lx
UI.make(ui : Entity, asset : String, instance_id : String) : Control
```
> Spawn controls from a ui asset.
> Creates new root for newly spawned controls and returns that root control.   

<endpoint module="luxe: world" class="UI" signature="draw_depth_of(control : Control, index : Num)"></endpoint>
### UI.draw_depth_of(..)
```lx
UI.draw_depth_of(control : Control, index : Num) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_text(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, string : String, size : Num, font : String, color : Color, align : TextAlign, align_vertical : TextAlign)"></endpoint>
### UI.draw_text(............)
```lx
UI.draw_text(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, string : String, size : Num, font : String, color : Color, align : TextAlign, align_vertical : TextAlign) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_text(control : Control, x : Num, y : Num, z : Num, string : String, size : Num, font : String, color : Color, align : TextAlign, align_vertical : TextAlign)"></endpoint>
### UI.draw_text(..........)
```lx
UI.draw_text(control : Control, x : Num, y : Num, z : Num, string : String, size : Num, font : String, color : Color, align : TextAlign, align_vertical : TextAlign) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_image(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color, uv : Vec, image : Image, flags : UIImageFlags)"></endpoint>
### UI.draw_image(...........)
```lx
UI.draw_image(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color, uv : Vec, image : Image, flags : UIImageFlags) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_image(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color, uv : Vec, image : Image)"></endpoint>
### UI.draw_image(..........)
```lx
UI.draw_image(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color, uv : Vec, image : Image) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_quad(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color)"></endpoint>
### UI.draw_quad(........)
```lx
UI.draw_quad(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, color : Color) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_circle(control : Control, ox : Num, oy : Num, oz : Num, rx : Num, ry : Num, start_angle : Num, end_angle : Num, smoothness : Num, color : Color)"></endpoint>
### UI.draw_circle(..........)
```lx
UI.draw_circle(control : Control, ox : Num, oy : Num, oz : Num, rx : Num, ry : Num, start_angle : Num, end_angle : Num, smoothness : Num, color : Color) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_line(control : Control, x1 : Num, y1 : Num, x2 : Num, y2 : Num, z : Num, style : PathStyle)"></endpoint>
### UI.draw_line(.......)
```lx
UI.draw_line(control : Control, x1 : Num, y1 : Num, x2 : Num, y2 : Num, z : Num, style : PathStyle) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_rect(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, style : PathStyle)"></endpoint>
### UI.draw_rect(........)
```lx
UI.draw_rect(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, style : PathStyle) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_rect_detailed(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, radius : Num, smoothness : Num, style : PathStyle)"></endpoint>
### UI.draw_rect_detailed(..........)
```lx
UI.draw_rect_detailed(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, radius : Num, smoothness : Num, style : PathStyle) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_quad_detailed(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, radius : Num, smoothness : Num, color : Color)"></endpoint>
### UI.draw_quad_detailed(..........)
```lx
UI.draw_quad_detailed(control : Control, x : Num, y : Num, z : Num, w : Num, h : Num, angle : Num, radius : Num, smoothness : Num, color : Color) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_ring(control : Control, ox : Num, oy : Num, oz : Num, rx : Num, ry : Num, start_angle : Num, end_angle : Num, smoothness : Num, style : PathStyle)"></endpoint>
### UI.draw_ring(..........)
```lx
UI.draw_ring(control : Control, ox : Num, oy : Num, oz : Num, rx : Num, ry : Num, start_angle : Num, end_angle : Num, smoothness : Num, style : PathStyle) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="draw_path(control : Control, points : List, style : PathStyle, closed : Bool)"></endpoint>
### UI.draw_path(....)
```lx
UI.draw_path(control : Control, points : List, style : PathStyle, closed : Bool) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="events_emit(control : Control, type : UIEvent)"></endpoint>
### UI.events_emit(..)
```lx
UI.events_emit(control : Control, type : UIEvent) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="events_emit(control : Control, type : UIEvent, data : Any)"></endpoint>
### UI.events_emit(...)
```lx
UI.events_emit(control : Control, type : UIEvent, data : Any) : None
```
> no docs found   

<endpoint module="luxe: world" class="UI" signature="events_emit(control : Control, type : UIEvent, data : Any, data_before : Any)"></endpoint>
### UI.events_emit(....)
```lx
UI.events_emit(control : Control, type : UIEvent, data : Any, data_before : Any) : None
```
> no docs found   


## UIBehave
```lx
import "luxe: world" for UIBehave
```
> no docs found

<endpoint module="luxe: world" class="UIBehave" signature="left"></endpoint>
### UIBehave.left
```lx
UIBehave.left : unknown
```
> Item anchors to the item to its left or left side of parent   

<endpoint module="luxe: world" class="UIBehave" signature="top"></endpoint>
### UIBehave.top
```lx
UIBehave.top : unknown
```
> Item anchors to the item above it or top side of parent   

<endpoint module="luxe: world" class="UIBehave" signature="right"></endpoint>
### UIBehave.right
```lx
UIBehave.right : unknown
```
> Item anchors to the item to its right or right side of parent   

<endpoint module="luxe: world" class="UIBehave" signature="bottom"></endpoint>
### UIBehave.bottom
```lx
UIBehave.bottom : unknown
```
> Item anchors to the item below it or bottom side of parent   

<endpoint module="luxe: world" class="UIBehave" signature="hfill"></endpoint>
### UIBehave.hfill
```lx
UIBehave.hfill : unknown
```
> Item anchors to both left and right item or parent borders   

<endpoint module="luxe: world" class="UIBehave" signature="vfill"></endpoint>
### UIBehave.vfill
```lx
UIBehave.vfill : unknown
```
> Item anchors to both top and bottom item or parent borders   

<endpoint module="luxe: world" class="UIBehave" signature="hcenter"></endpoint>
### UIBehave.hcenter
```lx
UIBehave.hcenter : unknown
```
> Center item horizontally, with left margin as offset   

<endpoint module="luxe: world" class="UIBehave" signature="vcenter"></endpoint>
### UIBehave.vcenter
```lx
UIBehave.vcenter : unknown
```
> Center item vertically, with top margin as offset   

<endpoint module="luxe: world" class="UIBehave" signature="center"></endpoint>
### UIBehave.center
```lx
UIBehave.center : unknown
```
> Center item in both directions, with left/top margin as offset   

<endpoint module="luxe: world" class="UIBehave" signature="fill"></endpoint>
### UIBehave.fill
```lx
UIBehave.fill : unknown
```
> Anchor item to all four directions   

<endpoint module="luxe: world" class="UIBehave" signature="break_line"></endpoint>
### UIBehave.break_line
```lx
UIBehave.break_line : unknown
```
> no docs found   


## UIClear
```lx
import "luxe: world" for UIClear
```
> Used as an argument when a UI container is cleared to specify what happens to the affected controls.
> `destroy` is often easiest, but only turning controls invisible or removing them from their parent and undoing that as you need them again may be more performant.

<endpoint module="luxe: world" class="UIClear" signature="destroy"></endpoint>
### UIClear.destroy
```lx
UIClear.destroy : unknown
```
> Destroy the controls (like `Control.destroy(_)`).   

<endpoint module="luxe: world" class="UIClear" signature="remove"></endpoint>
### UIClear.remove
```lx
UIClear.remove : unknown
```
> Remove the controls from their parent control (like `Control.child_remove(_, _)`).   

<endpoint module="luxe: world" class="UIClear" signature="set_invisible"></endpoint>
### UIClear.set_invisible
```lx
UIClear.set_invisible : unknown
```
> Turn controls invisible (like `Control.set_visible(_, false)`).   

<endpoint module="luxe: world" class="UIClear" signature="remove_set_invisible"></endpoint>
### UIClear.remove_set_invisible
```lx
UIClear.remove_set_invisible : unknown
```
> Both removes control from parent and sets them as not visible.   


## UIContain
```lx
import "luxe: world" for UIContain
```
> no docs found

<endpoint module="luxe: world" class="UIContain" signature="row"></endpoint>
### UIContain.row
```lx
UIContain.row : unknown
```
> Items go from left to right   

<endpoint module="luxe: world" class="UIContain" signature="column"></endpoint>
### UIContain.column
```lx
UIContain.column : unknown
```
> Items go from top to bottom   

<endpoint module="luxe: world" class="UIContain" signature="layout"></endpoint>
### UIContain.layout
```lx
UIContain.layout : unknown
```
> Use Free Layout model   

<endpoint module="luxe: world" class="UIContain" signature="flex"></endpoint>
### UIContain.flex
```lx
UIContain.flex : unknown
```
> Use Flex Layout model   

<endpoint module="luxe: world" class="UIContain" signature="nowrap"></endpoint>
### UIContain.nowrap
```lx
UIContain.nowrap : unknown
```
> Stays on a single line   

<endpoint module="luxe: world" class="UIContain" signature="wrap"></endpoint>
### UIContain.wrap
```lx
UIContain.wrap : unknown
```
> Wraps to multiple lines, wrapping left to right   

<endpoint module="luxe: world" class="UIContain" signature="start"></endpoint>
### UIContain.start
```lx
UIContain.start : unknown
```
> Items begin at start of row/column   

<endpoint module="luxe: world" class="UIContain" signature="middle"></endpoint>
### UIContain.middle
```lx
UIContain.middle : unknown
```
> Items begin at middle of row/column   

<endpoint module="luxe: world" class="UIContain" signature="end"></endpoint>
### UIContain.end
```lx
UIContain.end : unknown
```
> Items begin at end of row/column   

<endpoint module="luxe: world" class="UIContain" signature="justify"></endpoint>
### UIContain.justify
```lx
UIContain.justify : unknown
```
> Insert spacing between items to stretch elements across whole row/column   

<endpoint module="luxe: world" class="UIContain" signature="vfit"></endpoint>
### UIContain.vfit
```lx
UIContain.vfit : unknown
```
> Items stretch height to fill vertical space   

<endpoint module="luxe: world" class="UIContain" signature="hfit"></endpoint>
### UIContain.hfit
```lx
UIContain.hfit : unknown
```
> Items stretch width to fill horizontal space   


## UIDebugMode
```lx
import "luxe: world" for UIDebugMode
```
> no docs found

<endpoint module="luxe: world" class="UIDebugMode" signature="none"></endpoint>
### UIDebugMode.none
```lx
UIDebugMode.none : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIDebugMode" signature="basic"></endpoint>
### UIDebugMode.basic
```lx
UIDebugMode.basic : unknown
```
> no docs found   


## UIDrop
```lx
import "luxe: world" for UIDrop
```
> no docs found

<endpoint module="luxe: world" class="UIDrop" signature="start"></endpoint>
### UIDrop.start
```lx
UIDrop.start : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIDrop" signature="end"></endpoint>
### UIDrop.end
```lx
UIDrop.end : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIDrop" signature="move"></endpoint>
### UIDrop.move
```lx
UIDrop.move : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIDrop" signature="drop"></endpoint>
### UIDrop.drop
```lx
UIDrop.drop : unknown
```
> no docs found   


## UIEvent
```lx
import "luxe: world" for UIEvent
```
> The built in UI events that all controls can potentially use.

<endpoint module="luxe: world" class="UIEvent" signature="name(value : Any)"></endpoint>
### UIEvent.name(.)
```lx
UIEvent.name(value : Any) : unknown
```
> Converts a UIEvent value to a readable name.
> 
>   ```js
>   Log.print(UIEvent.name(UIEvent.move)) //prints "move"
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="unknown"></endpoint>
### UIEvent.unknown
```lx
UIEvent.unknown : unknown
```
> An event of unknown type, invalid. This is the default value.   

<endpoint module="luxe: world" class="UIEvent" signature="enter"></endpoint>
### UIEvent.enter
```lx
UIEvent.enter : unknown
```
> An input cursor has entered this control. (e.g on mouse enter).
> Sends no additional data in the event.
> 
>   ```js
>   if(event.type == UIEvent.enter) {
>     Log.print("entered control!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="exit"></endpoint>
### UIEvent.exit
```lx
UIEvent.exit : unknown
```
> An input cursor has left this control. (e.g on mouse exit)
> Sends no additional data in the event.
> 
>   ```js
>   if(event.type == UIEvent.exit) {
>     Log.print("exited control!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="press"></endpoint>
### UIEvent.press
```lx
UIEvent.press : unknown
```
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
### UIEvent.release
```lx
UIEvent.release : unknown
```
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
### UIEvent.scroll
```lx
UIEvent.scroll : unknown
```
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
### UIEvent.move
```lx
UIEvent.move : unknown
```
> An input move event (e.g mouse movement).
> Sends `event.x`, `event.y` as the position of the input.
> 
>   ```js
>   if(event.type == UIEvent.press) {
>     Log.print("move on control at `%(event.x)`,`%(event.y)`")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="key"></endpoint>
### UIEvent.key
```lx
UIEvent.key : unknown
```
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
### UIEvent.text
```lx
UIEvent.text : unknown
```
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
### UIEvent.focus
```lx
UIEvent.focus : unknown
```
> A control has gained focus.
> Sends no additional data in the event.
> 
>   ```js
>   if(event.type == UIEvent.focus) {
>     Log.print("gained focus!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="unfocus"></endpoint>
### UIEvent.unfocus
```lx
UIEvent.unfocus : unknown
```
> A control has lost focus.
> Sends no additional data in the event.
> 
>   ```js
>   if(event.type == UIEvent.unfocus) {
>     Log.print("lost focus!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="capture"></endpoint>
### UIEvent.capture
```lx
UIEvent.capture : unknown
```
> A control has been captured.
> 
>   ```js
>   if(event.type == UIEvent.capture) {
>     Log.print("gained input capture!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="uncapture"></endpoint>
### UIEvent.uncapture
```lx
UIEvent.uncapture : unknown
```
> A control has lost capture status.
> 
>   ```js
>   if(event.type == UIEvent.uncapture) {
>     Log.print("lost input capture!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="commit"></endpoint>
### UIEvent.commit
```lx
UIEvent.commit : unknown
```
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
### UIEvent.destroy
```lx
UIEvent.destroy : unknown
```
> When a control is destroyed you'll get notified here.
> Keep in mind that it's destroyed.
> 
>   ```js
>   if(event.type == UIEvent.destroy) {
>     Log.print("destroyed!")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="language"></endpoint>
### UIEvent.language
```lx
UIEvent.language : unknown
```
> When the UI lanuage changes, your control will receive this event.
> 
>   ```js
>   if(event.type == UIEvent.language) {
>     Log.print("language changed.. I should update my size..")
>   }
>   ```   

<endpoint module="luxe: world" class="UIEvent" signature="change"></endpoint>
### UIEvent.change
```lx
UIEvent.change : unknown
```
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
### UIEvent.bounds
```lx
UIEvent.bounds : unknown
```
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
### UIEvent.drag
```lx
UIEvent.drag : unknown
```
> When a control is dragged or dropped on the UI canvas.
> The data field contains the kind of event, e.g UIDrag.start or UIDrag.end.
> The x/y is the start, and end_x/end_y is the end (for a start they're the same)
> 
>   ```js
>   if(event.type == UIEvent.drag) {
>     Log.print("control drag changed.. %(event.data)")
>   }
>   ```   


## UIImageFit
```lx
import "luxe: world" for UIImageFit
```
> no docs found

<endpoint module="luxe: world" class="UIImageFit" signature="fill"></endpoint>
### UIImageFit.fill
```lx
UIImageFit.fill : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIImageFit" signature="contain"></endpoint>
### UIImageFit.contain
```lx
UIImageFit.contain : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIImageFit" signature="cover"></endpoint>
### UIImageFit.cover
```lx
UIImageFit.cover : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIImageFit" signature="keep_width"></endpoint>
### UIImageFit.keep_width
```lx
UIImageFit.keep_width : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIImageFit" signature="keep_height"></endpoint>
### UIImageFit.keep_height
```lx
UIImageFit.keep_height : unknown
```
> no docs found   


## UIImageFlags
```lx
import "luxe: world" for UIImageFlags
```
> no docs found

<endpoint module="luxe: world" class="UIImageFlags" signature="none"></endpoint>
### UIImageFlags.none
```lx
UIImageFlags.none : unknown
```
> uses linear interpolation samplers, interpolating smoothly between pixels.   

<endpoint module="luxe: world" class="UIImageFlags" signature="pixelated"></endpoint>
### UIImageFlags.pixelated
```lx
UIImageFlags.pixelated : unknown
```
> uses nearest neighbor samplers, leading to an interpolated look.   

<endpoint module="luxe: world" class="UIImageFlags" signature="use_mips"></endpoint>
### UIImageFlags.use_mips
```lx
UIImageFlags.use_mips : unknown
```
> uses trilinear interpolation samplers, interpolating smoothly between pixels and mip levels.   


## UILayoutMode
```lx
import "luxe: world" for UILayoutMode
```
> no docs found

<endpoint module="luxe: world" class="UILayoutMode" signature="none"></endpoint>
### UILayoutMode.none
```lx
UILayoutMode.none : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UILayoutMode" signature="flex"></endpoint>
### UILayoutMode.flex
```lx
UILayoutMode.flex : unknown
```
> no docs found   


## UIRenderMode
```lx
import "luxe: world" for UIRenderMode
```
> no docs found

<endpoint module="luxe: world" class="UIRenderMode" signature="unknown"></endpoint>
### UIRenderMode.unknown
```lx
UIRenderMode.unknown : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIRenderMode" signature="image"></endpoint>
### UIRenderMode.image
```lx
UIRenderMode.image : unknown
```
> no docs found   

<endpoint module="luxe: world" class="UIRenderMode" signature="world"></endpoint>
### UIRenderMode.world
```lx
UIRenderMode.world : unknown
```
> no docs found   


## WorldEventType
```lx
import "luxe: world" for WorldEventType
```
> no docs found

<endpoint module="luxe: world" class="WorldEventType" signature="unknown"></endpoint>
### WorldEventType.unknown
```lx
WorldEventType.unknown : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="create"></endpoint>
### WorldEventType.create
```lx
WorldEventType.create : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="destroy"></endpoint>
### WorldEventType.destroy
```lx
WorldEventType.destroy : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="tick"></endpoint>
### WorldEventType.tick
```lx
WorldEventType.tick : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="modifier_tick"></endpoint>
### WorldEventType.modifier_tick
```lx
WorldEventType.modifier_tick : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldEventType" signature="name(value : WorldEventType)"></endpoint>
### WorldEventType.name(.)
```lx
WorldEventType.name(value : WorldEventType) : String
```
> no docs found   


## WorldRenderDesc
```lx
import "luxe: world" for WorldRenderDesc
```
> no docs found

<endpoint module="luxe: world" class="WorldRenderDesc" signature="camera"></endpoint>
### WorldRenderDesc.camera
```lx
WorldRenderDesc.camera : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="camera=(v : Any)"></endpoint>
### WorldRenderDesc.camera
```lx
WorldRenderDesc.camera=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="camera(v : Any)"></endpoint>
### WorldRenderDesc.camera(.)
```lx
WorldRenderDesc.camera(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="cull_camera"></endpoint>
### WorldRenderDesc.cull_camera
```lx
WorldRenderDesc.cull_camera : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="cull_camera=(v : Any)"></endpoint>
### WorldRenderDesc.cull_camera
```lx
WorldRenderDesc.cull_camera=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="cull_camera(v : Any)"></endpoint>
### WorldRenderDesc.cull_camera(.)
```lx
WorldRenderDesc.cull_camera(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="no_cull"></endpoint>
### WorldRenderDesc.no_cull
```lx
WorldRenderDesc.no_cull : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="no_cull=(v : Any)"></endpoint>
### WorldRenderDesc.no_cull
```lx
WorldRenderDesc.no_cull=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="no_cull(v : Any)"></endpoint>
### WorldRenderDesc.no_cull(.)
```lx
WorldRenderDesc.no_cull(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world" class="WorldRenderDesc" signature="new()"></endpoint>
### WorldRenderDesc.new(.)
```lx
WorldRenderDesc.new() : WorldRenderDesc
```
> no docs found   

