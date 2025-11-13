---
title: "luxe: save"
description: API version 2025.11.1
---
## `luxe: save{:lx}` module

- [Save](#save)   
- [SaveScope](#savescope)   

---


### Save
`import "luxe: save" for Save{:lx}`
> A cross platform save system with a Key/Value store and file storage for a user, and save slots.
> 
>   ```js
>     //create a new save profile. loads the default save slot for single save use
>     var save = Save.create("organization", "game")
>     
>     //OR
> 
>     //create a new slot and set it as the active save slot 
>     Save.new_slot(save)
>     
>     //OR
> 
>     //Load a save slot from e.g Save.list()
>     var list = Save.list(save)
>     //activate the first slot
>     Save.set_slot(save, list[0])
> 
>     
>     //Set some slot specific values
>     Save.set(save, "key", "value")
>     //Set some user specific values
>     Save.set(save, "key", "value", SaveScope.user)
> 
>     //Get some values from the slot
>     var name = Save.get(save, "name", "default_name")
>     //get user values, like settings
>     var setting = Save.get(save, "setting", false, SaveScope.user)
>   ```

- [create](#Save.create+2)(**org**: `String{:lx}`, **app**: `String{:lx}`)
- [create](#Save.create+3)(**org**: `String{:lx}`, **app**: `String{:lx}`, **user_id**: `String{:lx}`)
- [save](#Save.save)(**save**: `Save{:lx}`)
- [new_slot](#Save.new_slot)(**save**: `Save{:lx}`)
- [set_slot](#Save.set_slot+2)(**save**: `Save{:lx}`, **slot**: `String{:lx}`)
- [list](#Save.list)(**save**: `Save{:lx}`)
- [file_exists](#Save.file_exists+2)(**save**: `Save{:lx}`, **file_id**: `String{:lx}`)
- [file_exists](#Save.file_exists+3)(**save**: `Save{:lx}`, **file_id**: `String{:lx}`, **kind**: `SaveScope{:lx}`)
- [set_file](#Save.set_file+3)(**save**: `Save{:lx}`, **file_id**: `String{:lx}`, **file_contents**: `String{:lx}`)
- [set_file](#Save.set_file+4)(**save**: `Save{:lx}`, **file_id**: `String{:lx}`, **file_contents**: `String{:lx}`, **kind**: `SaveScope{:lx}`)
- [get_file](#Save.get_file+2)(**save**: `Save{:lx}`, **file_id**: `String{:lx}`)
- [get_file](#Save.get_file+3)(**save**: `Save{:lx}`, **file_id**: `String{:lx}`, **kind**: `SaveScope{:lx}`)
- [set](#Save.set+3)(**save**: `Save{:lx}`, **key**: `String{:lx}`, **value**: `Any{:lx}`)
- [set](#Save.set+4)(**save**: `Save{:lx}`, **key**: `String{:lx}`, **value**: `Any{:lx}`, **kind**: `SaveScope{:lx}`)
- [get](#Save.get+3)(**save**: `Save{:lx}`, **key**: `String{:lx}`, **default**: `Any{:lx}`)
- [get](#Save.get+4)(**save**: `Save{:lx}`, **key**: `String{:lx}`, **default**: `Any{:lx}`, **kind**: `SaveScope{:lx}`)
- [has](#Save.has+2)(**save**: `Save{:lx}`, **key**: `String{:lx}`)
- [has](#Save.has+3)(**save**: `Save{:lx}`, **key**: `String{:lx}`, **kind**: `SaveScope{:lx}`)
- [get_keys](#Save.get_keys)(**save**: `Save{:lx}`)
- [get_keys](#Save.get_keys+2)(**save**: `Save{:lx}`, **kind**: `SaveScope{:lx}`)
- [slot_clear](#Save.slot_clear+2)(**save**: `Save{:lx}`, **slot**: `String{:lx}`)
- [slot_backup](#Save.slot_backup+2)(**save**: `Save{:lx}`, **slot**: `String{:lx}`)
- [slot_modified_time](#Save.slot_modified_time+2)(**save**: `Save{:lx}`, **slot**: `String{:lx}`)
- [slot_file_exists](#Save.slot_file_exists+3)(**save**: `Save{:lx}`, **slot**: `String{:lx}`, **file_id**: `String{:lx}`)
- [slot_set_file](#Save.slot_set_file+4)(**save**: `Save{:lx}`, **slot**: `String{:lx}`, **file_id**: `String{:lx}`, **file_contents**: `String{:lx}`)
- [slot_get_file](#Save.slot_get_file+3)(**save**: `Save{:lx}`, **slot**: `String{:lx}`, **file_id**: `String{:lx}`)


---

<endpoint module="luxe: save" class="Save" signature="create(org : String, app : String)"></endpoint>
<h4 class="signature_head">Save.create</h4><a class="signature-arity" href="#Save.create+2" title="Permanent link">2</a><signature id="Save.create+2">

```lx
Save.create(org : String, app : String) : Save
```
</signature>

> Create a save slot for the given organization/app name pair. Defaults to 'user' for user id   

<endpoint module="luxe: save" class="Save" signature="create(org : String, app : String, user_id : String)"></endpoint>
<h4 class="signature_head">Save.create</h4><a class="signature-arity" href="#Save.create+3" title="Permanent link">3</a><signature id="Save.create+3">

```lx
Save.create(org : String, app : String, user_id : String) : Save
```
</signature>

> Create a save slot for the given user and organization/app name pair. e.g If you have a steam user ID, you'd pass it in here as a string.   

<endpoint module="luxe: save" class="Save" signature="save(save : Save)"></endpoint>
<h4 class="signature_head">Save.save</h4><a class="signature-arity" href="#Save.save" title="Permanent link">1</a><signature id="Save.save">

```lx
Save.save(save : Save) : unknown
```
</signature>

> Flush the data for this profile to storage. Unless auto save on key change is off, unnecessary   

<endpoint module="luxe: save" class="Save" signature="new_slot(save : Save)"></endpoint>
<h4 class="signature_head">Save.new_slot</h4><a class="signature-arity" href="#Save.new_slot" title="Permanent link">1</a><signature id="Save.new_slot">

```lx
Save.new_slot(save : Save) : None
```
</signature>

> Set the current active save slot to a new slot ID.   

<endpoint module="luxe: save" class="Save" signature="set_slot(save : Save, slot : String)"></endpoint>
<h4 class="signature_head">Save.set_slot</h4><a class="signature-arity" href="#Save.set_slot+2" title="Permanent link">2</a><signature id="Save.set_slot+2">

```lx
Save.set_slot(save : Save, slot : String) : unknown
```
</signature>

> Set the current active save slot to a Slot ID (from Save.list or otherwise).   

<endpoint module="luxe: save" class="Save" signature="list(save : Save)"></endpoint>
<h4 class="signature_head">Save.list</h4><a class="signature-arity" href="#Save.list" title="Permanent link">1</a><signature id="Save.list">

```lx
Save.list(save : Save) : unknown
```
</signature>

> Return a list of save slot uuids for use with the slot query apis, sorted by modified time (latest first)   

<endpoint module="luxe: save" class="Save" signature="file_exists(save : Save, file_id : String)"></endpoint>
<h4 class="signature_head">Save.file_exists</h4><a class="signature-arity" href="#Save.file_exists+2" title="Permanent link">2</a><signature id="Save.file_exists+2">

```lx
Save.file_exists(save : Save, file_id : String) : unknown
```
</signature>

> Returns true if the given file path can be found for the active save slot   

<endpoint module="luxe: save" class="Save" signature="file_exists(save : Save, file_id : String, kind : SaveScope)"></endpoint>
<h4 class="signature_head">Save.file_exists</h4><a class="signature-arity" href="#Save.file_exists+3" title="Permanent link">3</a><signature id="Save.file_exists+3">

```lx
Save.file_exists(save : Save, file_id : String, kind : SaveScope) : unknown
```
</signature>

> Returns true if the given file path can be found   

<endpoint module="luxe: save" class="Save" signature="set_file(save : Save, file_id : String, file_contents : String)"></endpoint>
<h4 class="signature_head">Save.set_file</h4><a class="signature-arity" href="#Save.set_file+3" title="Permanent link">3</a><signature id="Save.set_file+3">

```lx
Save.set_file(save : Save, file_id : String, file_contents : String) : unknown
```
</signature>

> Save the contents of a file at the given path for the active save slot. The path is a relative style path, like `some/file/here`   

<endpoint module="luxe: save" class="Save" signature="set_file(save : Save, file_id : String, file_contents : String, kind : SaveScope)"></endpoint>
<h4 class="signature_head">Save.set_file</h4><a class="signature-arity" href="#Save.set_file+4" title="Permanent link">4</a><signature id="Save.set_file+4">

```lx
Save.set_file(save : Save, file_id : String, file_contents : String, kind : SaveScope) : unknown
```
</signature>

> Save the contents of a file at the given path. The path is a relative style path, like `some/file/here`   

<endpoint module="luxe: save" class="Save" signature="get_file(save : Save, file_id : String)"></endpoint>
<h4 class="signature_head">Save.get_file</h4><a class="signature-arity" href="#Save.get_file+2" title="Permanent link">2</a><signature id="Save.get_file+2">

```lx
Save.get_file(save : Save, file_id : String) : unknown
```
</signature>

> Return the contents of the file with the given path for the active save slot. If not found, returns null   

<endpoint module="luxe: save" class="Save" signature="get_file(save : Save, file_id : String, kind : SaveScope)"></endpoint>
<h4 class="signature_head">Save.get_file</h4><a class="signature-arity" href="#Save.get_file+3" title="Permanent link">3</a><signature id="Save.get_file+3">

```lx
Save.get_file(save : Save, file_id : String, kind : SaveScope) : unknown
```
</signature>

> Return the contents of the file with the given path. If not found, returns null   

<endpoint module="luxe: save" class="Save" signature="set(save : Save, key : String, value : Any)"></endpoint>
<h4 class="signature_head">Save.set</h4><a class="signature-arity" href="#Save.set+3" title="Permanent link">3</a><signature id="Save.set+3">

```lx
Save.set(save : Save, key : String, value : Any) : unknown
```
</signature>

> Set the value for a key to the given value, for the active save slot   

<endpoint module="luxe: save" class="Save" signature="set(save : Save, key : String, value : Any, kind : SaveScope)"></endpoint>
<h4 class="signature_head">Save.set</h4><a class="signature-arity" href="#Save.set+4" title="Permanent link">4</a><signature id="Save.set+4">

```lx
Save.set(save : Save, key : String, value : Any, kind : SaveScope) : unknown
```
</signature>

> Set the value for a key to the given value   

<endpoint module="luxe: save" class="Save" signature="get(save : Save, key : String, default : Any)"></endpoint>
<h4 class="signature_head">Save.get</h4><a class="signature-arity" href="#Save.get+3" title="Permanent link">3</a><signature id="Save.get+3">

```lx
Save.get(save : Save, key : String, default : Any) : unknown
```
</signature>

> Returns the value for the given key if found, otherwise returns the default provided, for the active save slot   

<endpoint module="luxe: save" class="Save" signature="get(save : Save, key : String, default : Any, kind : SaveScope)"></endpoint>
<h4 class="signature_head">Save.get</h4><a class="signature-arity" href="#Save.get+4" title="Permanent link">4</a><signature id="Save.get+4">

```lx
Save.get(save : Save, key : String, default : Any, kind : SaveScope) : unknown
```
</signature>

> Returns the value for the given key if found, otherwise returns the default provided   

<endpoint module="luxe: save" class="Save" signature="has(save : Save, key : String)"></endpoint>
<h4 class="signature_head">Save.has</h4><a class="signature-arity" href="#Save.has+2" title="Permanent link">2</a><signature id="Save.has+2">

```lx
Save.has(save : Save, key : String) : unknown
```
</signature>

> Returns true if the given key can be found, for the active save slot   

<endpoint module="luxe: save" class="Save" signature="has(save : Save, key : String, kind : SaveScope)"></endpoint>
<h4 class="signature_head">Save.has</h4><a class="signature-arity" href="#Save.has+3" title="Permanent link">3</a><signature id="Save.has+3">

```lx
Save.has(save : Save, key : String, kind : SaveScope) : unknown
```
</signature>

> Returns true if the given key can be found   

<endpoint module="luxe: save" class="Save" signature="get_keys(save : Save)"></endpoint>
<h4 class="signature_head">Save.get_keys</h4><a class="signature-arity" href="#Save.get_keys" title="Permanent link">1</a><signature id="Save.get_keys">

```lx
Save.get_keys(save : Save) : unknown
```
</signature>

> Returns a list of knowns keys, for the active save slot   

<endpoint module="luxe: save" class="Save" signature="get_keys(save : Save, kind : SaveScope)"></endpoint>
<h4 class="signature_head">Save.get_keys</h4><a class="signature-arity" href="#Save.get_keys+2" title="Permanent link">2</a><signature id="Save.get_keys+2">

```lx
Save.get_keys(save : Save, kind : SaveScope) : unknown
```
</signature>

> Returns a list of knowns keys   

<endpoint module="luxe: save" class="Save" signature="slot_clear(save : Save, slot : String)"></endpoint>
<h4 class="signature_head">Save.slot_clear</h4><a class="signature-arity" href="#Save.slot_clear+2" title="Permanent link">2</a><signature id="Save.slot_clear+2">

```lx
Save.slot_clear(save : Save, slot : String) : Bool
```
</signature>

> Slot query. Delete a save slot, return true or false for success   

<endpoint module="luxe: save" class="Save" signature="slot_backup(save : Save, slot : String)"></endpoint>
<h4 class="signature_head">Save.slot_backup</h4><a class="signature-arity" href="#Save.slot_backup+2" title="Permanent link">2</a><signature id="Save.slot_backup+2">

```lx
Save.slot_backup(save : Save, slot : String) : String
```
</signature>

> Slot query. Makes a backup of the slot, returns a slot ID of the backup if successful, null if false   

<endpoint module="luxe: save" class="Save" signature="slot_modified_time(save : Save, slot : String)"></endpoint>
<h4 class="signature_head">Save.slot_modified_time</h4><a class="signature-arity" href="#Save.slot_modified_time+2" title="Permanent link">2</a><signature id="Save.slot_modified_time+2">

```lx
Save.slot_modified_time(save : Save, slot : String) : unknown
```
</signature>

> Slot query. Returns the modified time for the given save slot ID   

<endpoint module="luxe: save" class="Save" signature="slot_file_exists(save : Save, slot : String, file_id : String)"></endpoint>
<h4 class="signature_head">Save.slot_file_exists</h4><a class="signature-arity" href="#Save.slot_file_exists+3" title="Permanent link">3</a><signature id="Save.slot_file_exists+3">

```lx
Save.slot_file_exists(save : Save, slot : String, file_id : String) : unknown
```
</signature>

> Slot query. Returns true if the given file path can be found for the given save slot ID   

<endpoint module="luxe: save" class="Save" signature="slot_set_file(save : Save, slot : String, file_id : String, file_contents : String)"></endpoint>
<h4 class="signature_head">Save.slot_set_file</h4><a class="signature-arity" href="#Save.slot_set_file+4" title="Permanent link">4</a><signature id="Save.slot_set_file+4">

```lx
Save.slot_set_file(save : Save, slot : String, file_id : String, file_contents : String) : unknown
```
</signature>

> Slot query. Save the contents of a file at the given path for the given slot ID. The path is a relative style path, like `some/file/here`   

<endpoint module="luxe: save" class="Save" signature="slot_get_file(save : Save, slot : String, file_id : String)"></endpoint>
<h4 class="signature_head">Save.slot_get_file</h4><a class="signature-arity" href="#Save.slot_get_file+3" title="Permanent link">3</a><signature id="Save.slot_get_file+3">

```lx
Save.slot_get_file(save : Save, slot : String, file_id : String) : unknown
```
</signature>

> Slot query. Return the contents of the file with the given path for the given slot ID. If not found, returns null   


### SaveScope
`import "luxe: save" for SaveScope{:lx}`
> no docs found

- [slot](#SaveScope.slot)
- [user](#SaveScope.user)


---

<endpoint module="luxe: save" class="SaveScope" signature="slot"></endpoint>
<h4 class="signature_head">SaveScope.slot</h4><a class="signature-arity" href="#SaveScope.slot" title="Permanent link">1</a><signature id="SaveScope.slot">

```lx
SaveScope.slot : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: save" class="SaveScope" signature="user"></endpoint>
<h4 class="signature_head">SaveScope.user</h4><a class="signature-arity" href="#SaveScope.user" title="Permanent link">1</a><signature id="SaveScope.user">

```lx
SaveScope.user : unknown
```
</signature>

> no docs found   

