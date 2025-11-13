---
title: "luxe: world/modifier"
description: API version 2025.11.1
---
## `luxe: world/modifier{:lx}` module

- [Modifier](#modifier)   
- [ModifierChange](#modifierchange)   

---


### Modifier
`import "luxe: world/modifier" for Modifier{:lx}`
> no docs found

- [create](#Modifier.create+2)(**modifier_id**: `String{:lx}`, **entity**: `Entity{:lx}`)
- [destroy](#Modifier.destroy+2)(**modifier_id**: `String{:lx}`, **entity**: `Entity{:lx}`)
- [has](#Modifier.has+3)(**modifier_id**: `String{:lx}`, **entity**: `Entity{:lx}`, **ignore_removed_flag**: `Bool{:lx}`)
- [has](#Modifier.has+2)(**modifier_id**: `String{:lx}`, **entity**: `Entity{:lx}`)
- [set_error](#Modifier.set_error+4)(**world**: `World{:lx}`, **modifier_id**: `String{:lx}`, **tag**: `String{:lx}`, **state**: `Bool{:lx}`)
- [has_error](#Modifier.has_error+3)(**world**: `World{:lx}`, **modifier_id**: `String{:lx}`, **tag**: `String{:lx}`)
- [has_error](#Modifier.has_error+2)(**world**: `World{:lx}`, **modifier_id**: `String{:lx}`)
- [get_missing_expected](#Modifier.get_missing_expected+2)(**modifier_meta**: `ModifierMeta{:lx}`, **entity**: `Entity{:lx}`)
- [has_expected](#Modifier.has_expected+2)(**modifier_meta**: `ModifierMeta{:lx}`, **entity**: `Entity{:lx}`)
- [set_transient](#Modifier.set_transient+3)(**entity**: `Entity{:lx}`, **modifier_id**: `String{:lx}`, **state**: `Bool{:lx}`)
- [set_transient](#Modifier.set_transient+4)(**entity**: `Entity{:lx}`, **modifier_id**: `String{:lx}`, **state**: `Bool{:lx}`, **commit**: `Bool{:lx}`)
- [get_transient](#Modifier.get_transient+2)(**entity**: `Entity{:lx}`, **modifier_id**: `String{:lx}`)
- [get](#Modifier.get+2)(**entity**: `Entity{:lx}`, **modifier_id**: `String{:lx}`)
- [get_attached_to](#Modifier.get_attached_to+2)(**world**: `World{:lx}`, **modifier_id**: `String{:lx}`)
- [get_meta](#Modifier.get_meta)(**modifier_id**: `String{:lx}`)
- [connect](#Modifier.connect+4)(**world**: `World{:lx}`, **modifier_id**: `String{:lx}`, **wire**: `Num{:lx}`, **fn**: `Fn{:lx}`)
- [send](#Modifier.send+4)(**modifier_id**: `String{:lx}`, **wire**: `Num{:lx}`, **entity**: `Entity{:lx}`, **data**: `Any{:lx}`)
- [get_attached](#Modifier.get_attached)(**entity**: `Entity{:lx}`)
- [get_modifier_id](#Modifier.get_modifier_id+2)(**world**: `World{:lx}`, **block**: `Block{:lx}`)


---

<endpoint module="luxe: world/modifier" class="Modifier" signature="create(modifier_id : String, entity : Entity)"></endpoint>
<h4 class="signature_head">Modifier.create</h4><a class="signature-arity" href="#Modifier.create+2" title="Permanent link">2</a><signature id="Modifier.create+2">

```lx
Modifier.create(modifier_id : String, entity : Entity) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="destroy(modifier_id : String, entity : Entity)"></endpoint>
<h4 class="signature_head">Modifier.destroy</h4><a class="signature-arity" href="#Modifier.destroy+2" title="Permanent link">2</a><signature id="Modifier.destroy+2">

```lx
Modifier.destroy(modifier_id : String, entity : Entity) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has(modifier_id : String, entity : Entity, ignore_removed_flag : Bool)"></endpoint>
<h4 class="signature_head">Modifier.has</h4><a class="signature-arity" href="#Modifier.has+3" title="Permanent link">3</a><signature id="Modifier.has+3">

```lx
Modifier.has(modifier_id : String, entity : Entity, ignore_removed_flag : Bool) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has(modifier_id : String, entity : Entity)"></endpoint>
<h4 class="signature_head">Modifier.has</h4><a class="signature-arity" href="#Modifier.has+2" title="Permanent link">2</a><signature id="Modifier.has+2">

```lx
Modifier.has(modifier_id : String, entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="set_error(world : World, modifier_id : String, tag : String, state : Bool)"></endpoint>
<h4 class="signature_head">Modifier.set_error</h4><a class="signature-arity" href="#Modifier.set_error+4" title="Permanent link">4</a><signature id="Modifier.set_error+4">

```lx
Modifier.set_error(world : World, modifier_id : String, tag : String, state : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has_error(world : World, modifier_id : String, tag : String)"></endpoint>
<h4 class="signature_head">Modifier.has_error</h4><a class="signature-arity" href="#Modifier.has_error+3" title="Permanent link">3</a><signature id="Modifier.has_error+3">

```lx
Modifier.has_error(world : World, modifier_id : String, tag : String) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has_error(world : World, modifier_id : String)"></endpoint>
<h4 class="signature_head">Modifier.has_error</h4><a class="signature-arity" href="#Modifier.has_error+2" title="Permanent link">2</a><signature id="Modifier.has_error+2">

```lx
Modifier.has_error(world : World, modifier_id : String) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_missing_expected(modifier_meta : ModifierMeta, entity : Entity)"></endpoint>
<h4 class="signature_head">Modifier.get_missing_expected</h4><a class="signature-arity" href="#Modifier.get_missing_expected+2" title="Permanent link">2</a><signature id="Modifier.get_missing_expected+2">

```lx
Modifier.get_missing_expected(modifier_meta : ModifierMeta, entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="has_expected(modifier_meta : ModifierMeta, entity : Entity)"></endpoint>
<h4 class="signature_head">Modifier.has_expected</h4><a class="signature-arity" href="#Modifier.has_expected+2" title="Permanent link">2</a><signature id="Modifier.has_expected+2">

```lx
Modifier.has_expected(modifier_meta : ModifierMeta, entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="set_transient(entity : Entity, modifier_id : String, state : Bool)"></endpoint>
<h4 class="signature_head">Modifier.set_transient</h4><a class="signature-arity" href="#Modifier.set_transient+3" title="Permanent link">3</a><signature id="Modifier.set_transient+3">

```lx
Modifier.set_transient(entity : Entity, modifier_id : String, state : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="set_transient(entity : Entity, modifier_id : String, state : Bool, commit : Bool)"></endpoint>
<h4 class="signature_head">Modifier.set_transient</h4><a class="signature-arity" href="#Modifier.set_transient+4" title="Permanent link">4</a><signature id="Modifier.set_transient+4">

```lx
Modifier.set_transient(entity : Entity, modifier_id : String, state : Bool, commit : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_transient(entity : Entity, modifier_id : String)"></endpoint>
<h4 class="signature_head">Modifier.get_transient</h4><a class="signature-arity" href="#Modifier.get_transient+2" title="Permanent link">2</a><signature id="Modifier.get_transient+2">

```lx
Modifier.get_transient(entity : Entity, modifier_id : String) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get(entity : Entity, modifier_id : String)"></endpoint>
<h4 class="signature_head">Modifier.get</h4><a class="signature-arity" href="#Modifier.get+2" title="Permanent link">2</a><signature id="Modifier.get+2">

```lx
Modifier.get(entity : Entity, modifier_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_attached_to(world : World, modifier_id : String)"></endpoint>
<h4 class="signature_head">Modifier.get_attached_to</h4><a class="signature-arity" href="#Modifier.get_attached_to+2" title="Permanent link">2</a><signature id="Modifier.get_attached_to+2">

```lx
Modifier.get_attached_to(world : World, modifier_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_meta(modifier_id : String)"></endpoint>
<h4 class="signature_head">Modifier.get_meta</h4><a class="signature-arity" href="#Modifier.get_meta" title="Permanent link">1</a><signature id="Modifier.get_meta">

```lx
Modifier.get_meta(modifier_id : String) : ModifierMeta
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="connect(world : World, modifier_id : String, wire : Num, fn : Fn)"></endpoint>
<h4 class="signature_head">Modifier.connect</h4><a class="signature-arity" href="#Modifier.connect+4" title="Permanent link">4</a><signature id="Modifier.connect+4">

```lx
Modifier.connect(world : World, modifier_id : String, wire : Num, fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="send(modifier_id : String, wire : Num, entity : Entity, data : Any)"></endpoint>
<h4 class="signature_head">Modifier.send</h4><a class="signature-arity" href="#Modifier.send+4" title="Permanent link">4</a><signature id="Modifier.send+4">

```lx
Modifier.send(modifier_id : String, wire : Num, entity : Entity, data : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_attached(entity : Entity)"></endpoint>
<h4 class="signature_head">Modifier.get_attached</h4><a class="signature-arity" href="#Modifier.get_attached" title="Permanent link">1</a><signature id="Modifier.get_attached">

```lx
Modifier.get_attached(entity : Entity) : Set
```
</signature>

> Returns a set of attached modifier IDs for the given entity   

<endpoint module="luxe: world/modifier" class="Modifier" signature="get_modifier_id(world : World, block : Block)"></endpoint>
<h4 class="signature_head">Modifier.get_modifier_id</h4><a class="signature-arity" href="#Modifier.get_modifier_id+2" title="Permanent link">2</a><signature id="Modifier.get_modifier_id+2">

```lx
Modifier.get_modifier_id(world : World, block : Block) : String
```
</signature>

> Returns a modifier id (or null if not found) for the given data block   


### ModifierChange
`import "luxe: world/modifier" for ModifierChange{:lx}`
> no docs found

- `var world : World = 0{:lx}`
- `var block : Block = 0{:lx}`
- `var instance : BlockInstance = 0{:lx}`
- `var field_path : String = null{:lx}`
- `var field_id : String = null{:lx}`
- [new](#ModifierChange.new)()
- [update](#ModifierChange.update+4)(**in_world**: `World{:lx}`, **in_block**: `Block{:lx}`, **in_instance**: `BlockInstance{:lx}`, **in_field_path**: `String{:lx}`)
- [array_count](#ModifierChange.array_count)(**field**: `String{:lx}`)
- [value](#ModifierChange.value)
- [value_for](#ModifierChange.value_for)(**field**: `String{:lx}`)
- [value_for](#ModifierChange.value_for+2)(**field**: `String{:lx}`, **array_index**: `Num{:lx}`)


---

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="new()"></endpoint>
<h4 class="signature_head">ModifierChange.new</h4><a class="signature-arity" href="#ModifierChange.new" title="Permanent link">1</a><signature id="ModifierChange.new">

```lx
ModifierChange.new() : ModifierChange
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="update(in_world : World, in_block : Block, in_instance : BlockInstance, in_field_path : String)"></endpoint>
<h4 class="signature_head">ModifierChange.update</h4><a class="signature-arity" href="#ModifierChange.update+4" title="Permanent link">4</a><signature id="ModifierChange.update+4">

```lx
ModifierChange.update(in_world : World, in_block : Block, in_instance : BlockInstance, in_field_path : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="array_count(field : String)"></endpoint>
<h4 class="signature_head">ModifierChange.array_count</h4><a class="signature-arity" href="#ModifierChange.array_count" title="Permanent link">1</a><signature id="ModifierChange.array_count">

```lx
ModifierChange.array_count(field : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="value"></endpoint>
<h4 class="signature_head">ModifierChange.value</h4><a class="signature-arity" href="#ModifierChange.value" title="Permanent link">1</a><signature id="ModifierChange.value">

```lx
ModifierChange.value : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="value_for(field : String)"></endpoint>
<h4 class="signature_head">ModifierChange.value_for</h4><a class="signature-arity" href="#ModifierChange.value_for" title="Permanent link">1</a><signature id="ModifierChange.value_for">

```lx
ModifierChange.value_for(field : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: world/modifier" class="ModifierChange" signature="value_for(field : String, array_index : Num)"></endpoint>
<h4 class="signature_head">ModifierChange.value_for</h4><a class="signature-arity" href="#ModifierChange.value_for+2" title="Permanent link">2</a><signature id="ModifierChange.value_for+2">

```lx
ModifierChange.value_for(field : String, array_index : Num) : unknown
```
</signature>

> no docs found   

