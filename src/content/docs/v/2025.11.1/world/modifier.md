---
title: "luxe: world/modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/world/modifier"
---
- [Modifier](#modifier)   
- [ModifierChange](#modifierchange)   

---


## Modifier
```lx
import "luxe: world/modifier" for Modifier
```
> no docs found

<endpoint module="luxe: world/modifier" class="Modifier" signature="create(modifier_id : String, entity : Entity)"></endpoint>
### Modifier.create(..)
```lx
Modifier.create(modifier_id : String, entity : Entity) : None
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="destroy(modifier_id : String, entity : Entity)"></endpoint>
### Modifier.destroy(..)
```lx
Modifier.destroy(modifier_id : String, entity : Entity) : None
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has(modifier_id : String, entity : Entity, ignore_removed_flag : Bool)"></endpoint>
### Modifier.has(...)
```lx
Modifier.has(modifier_id : String, entity : Entity, ignore_removed_flag : Bool) : Bool
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has(modifier_id : String, entity : Entity)"></endpoint>
### Modifier.has(..)
```lx
Modifier.has(modifier_id : String, entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="set_error(world : World, modifier_id : String, tag : String, state : Bool)"></endpoint>
### Modifier.set_error(....)
```lx
Modifier.set_error(world : World, modifier_id : String, tag : String, state : Bool) : None
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has_error(world : World, modifier_id : String, tag : String)"></endpoint>
### Modifier.has_error(...)
```lx
Modifier.has_error(world : World, modifier_id : String, tag : String) : Bool
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has_error(world : World, modifier_id : String)"></endpoint>
### Modifier.has_error(..)
```lx
Modifier.has_error(world : World, modifier_id : String) : Bool
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_missing_expected(modifier_meta : ModifierMeta, entity : Entity)"></endpoint>
### Modifier.get_missing_expected(..)
```lx
Modifier.get_missing_expected(modifier_meta : ModifierMeta, entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has_expected(modifier_meta : ModifierMeta, entity : Entity)"></endpoint>
### Modifier.has_expected(..)
```lx
Modifier.has_expected(modifier_meta : ModifierMeta, entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="set_transient(entity : Entity, modifier_id : String, state : Bool)"></endpoint>
### Modifier.set_transient(...)
```lx
Modifier.set_transient(entity : Entity, modifier_id : String, state : Bool) : None
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="set_transient(entity : Entity, modifier_id : String, state : Bool, commit : Bool)"></endpoint>
### Modifier.set_transient(....)
```lx
Modifier.set_transient(entity : Entity, modifier_id : String, state : Bool, commit : Bool) : None
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_transient(entity : Entity, modifier_id : String)"></endpoint>
### Modifier.get_transient(..)
```lx
Modifier.get_transient(entity : Entity, modifier_id : String) : Bool
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get(entity : Entity, modifier_id : String)"></endpoint>
### Modifier.get(..)
```lx
Modifier.get(entity : Entity, modifier_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_attached_to(world : World, modifier_id : String)"></endpoint>
### Modifier.get_attached_to(..)
```lx
Modifier.get_attached_to(world : World, modifier_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_meta(modifier_id : String)"></endpoint>
### Modifier.get_meta(.)
```lx
Modifier.get_meta(modifier_id : String) : ModifierMeta
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="connect(world : World, modifier_id : String, wire : Num, fn : Fn)"></endpoint>
### Modifier.connect(....)
```lx
Modifier.connect(world : World, modifier_id : String, wire : Num, fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="send(modifier_id : String, wire : Num, entity : Entity, data : Any)"></endpoint>
### Modifier.send(....)
```lx
Modifier.send(modifier_id : String, wire : Num, entity : Entity, data : Any) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_attached(entity : Entity)"></endpoint>
### Modifier.get_attached(.)
```lx
Modifier.get_attached(entity : Entity) : Set
```
> Returns a set of attached modifier IDs for the given entity   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_modifier_id(world : World, block : Block)"></endpoint>
### Modifier.get_modifier_id(..)
```lx
Modifier.get_modifier_id(world : World, block : Block) : String
```
> Returns a modifier id (or null if not found) for the given data block   


## ModifierChange
```lx
import "luxe: world/modifier" for ModifierChange
```
> no docs found

### Variables
```lx
var world : World = 0
var block : Block = 0
var instance : BlockInstance = 0
var field_path : String = null
var field_id : String = null
```
<endpoint module="luxe: world/modifier" class="ModifierChange" signature="new()"></endpoint>
### ModifierChange.new(.)
```lx
ModifierChange.new() : ModifierChange
```
> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="update(in_world : World, in_block : Block, in_instance : BlockInstance, in_field_path : String)"></endpoint>
### ModifierChange.update(....)
```lx
ModifierChange.update(in_world : World, in_block : Block, in_instance : BlockInstance, in_field_path : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="array_count(field : String)"></endpoint>
### ModifierChange.array_count(.)
```lx
ModifierChange.array_count(field : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="value"></endpoint>
### ModifierChange.value
```lx
ModifierChange.value : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="value_for(field : String)"></endpoint>
### ModifierChange.value_for(.)
```lx
ModifierChange.value_for(field : String) : unknown
```
> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="value_for(field : String, array_index : Num)"></endpoint>
### ModifierChange.value_for(..)
```lx
ModifierChange.value_for(field : String, array_index : Num) : unknown
```
> no docs found   

