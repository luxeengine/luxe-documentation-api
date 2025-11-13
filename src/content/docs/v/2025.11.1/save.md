---
title: "luxe: save"
description: API version 2025.11.1
slug: "v/2025.11.1/save"
---
- [Save](#save)   
- [SaveScope](#savescope)   

---


## Save
```lx
import "luxe: save" for Save
```
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

<endpoint module="luxe: save" class="Save" signature="create(org : String, app : String)"></endpoint>
### Save.create(..)
```lx
Save.create(org : String, app : String) : Save
```
> Create a save slot for the given organization/app name pair. Defaults to 'user' for user id   

<endpoint module="luxe: save" class="Save" signature="create(org : String, app : String, user_id : String)"></endpoint>
### Save.create(...)
```lx
Save.create(org : String, app : String, user_id : String) : Save
```
> Create a save slot for the given user and organization/app name pair. e.g If you have a steam user ID, you'd pass it in here as a string.   

<endpoint module="luxe: save" class="Save" signature="save(save : Save)"></endpoint>
### Save.save(.)
```lx
Save.save(save : Save) : unknown
```
> Flush the data for this profile to storage. Unless auto save on key change is off, unnecessary   

<endpoint module="luxe: save" class="Save" signature="new_slot(save : Save)"></endpoint>
### Save.new_slot(.)
```lx
Save.new_slot(save : Save) : None
```
> Set the current active save slot to a new slot ID.   

<endpoint module="luxe: save" class="Save" signature="set_slot(save : Save, slot : String)"></endpoint>
### Save.set_slot(..)
```lx
Save.set_slot(save : Save, slot : String) : unknown
```
> Set the current active save slot to a Slot ID (from Save.list or otherwise).   

<endpoint module="luxe: save" class="Save" signature="list(save : Save)"></endpoint>
### Save.list(.)
```lx
Save.list(save : Save) : unknown
```
> Return a list of save slot uuids for use with the slot query apis, sorted by modified time (latest first)   

<endpoint module="luxe: save" class="Save" signature="file_exists(save : Save, file_id : String)"></endpoint>
### Save.file_exists(..)
```lx
Save.file_exists(save : Save, file_id : String) : unknown
```
> Returns true if the given file path can be found for the active save slot   

<endpoint module="luxe: save" class="Save" signature="file_exists(save : Save, file_id : String, kind : SaveScope)"></endpoint>
### Save.file_exists(...)
```lx
Save.file_exists(save : Save, file_id : String, kind : SaveScope) : unknown
```
> Returns true if the given file path can be found   

<endpoint module="luxe: save" class="Save" signature="set_file(save : Save, file_id : String, file_contents : String)"></endpoint>
### Save.set_file(...)
```lx
Save.set_file(save : Save, file_id : String, file_contents : String) : unknown
```
> Save the contents of a file at the given path for the active save slot. The path is a relative style path, like `some/file/here`   

<endpoint module="luxe: save" class="Save" signature="set_file(save : Save, file_id : String, file_contents : String, kind : SaveScope)"></endpoint>
### Save.set_file(....)
```lx
Save.set_file(save : Save, file_id : String, file_contents : String, kind : SaveScope) : unknown
```
> Save the contents of a file at the given path. The path is a relative style path, like `some/file/here`   

<endpoint module="luxe: save" class="Save" signature="get_file(save : Save, file_id : String)"></endpoint>
### Save.get_file(..)
```lx
Save.get_file(save : Save, file_id : String) : unknown
```
> Return the contents of the file with the given path for the active save slot. If not found, returns null   

<endpoint module="luxe: save" class="Save" signature="get_file(save : Save, file_id : String, kind : SaveScope)"></endpoint>
### Save.get_file(...)
```lx
Save.get_file(save : Save, file_id : String, kind : SaveScope) : unknown
```
> Return the contents of the file with the given path. If not found, returns null   

<endpoint module="luxe: save" class="Save" signature="set(save : Save, key : String, value : Any)"></endpoint>
### Save.set(...)
```lx
Save.set(save : Save, key : String, value : Any) : unknown
```
> Set the value for a key to the given value, for the active save slot   

<endpoint module="luxe: save" class="Save" signature="set(save : Save, key : String, value : Any, kind : SaveScope)"></endpoint>
### Save.set(....)
```lx
Save.set(save : Save, key : String, value : Any, kind : SaveScope) : unknown
```
> Set the value for a key to the given value   

<endpoint module="luxe: save" class="Save" signature="get(save : Save, key : String, default : Any)"></endpoint>
### Save.get(...)
```lx
Save.get(save : Save, key : String, default : Any) : unknown
```
> Returns the value for the given key if found, otherwise returns the default provided, for the active save slot   

<endpoint module="luxe: save" class="Save" signature="get(save : Save, key : String, default : Any, kind : SaveScope)"></endpoint>
### Save.get(....)
```lx
Save.get(save : Save, key : String, default : Any, kind : SaveScope) : unknown
```
> Returns the value for the given key if found, otherwise returns the default provided   

<endpoint module="luxe: save" class="Save" signature="has(save : Save, key : String)"></endpoint>
### Save.has(..)
```lx
Save.has(save : Save, key : String) : unknown
```
> Returns true if the given key can be found, for the active save slot   

<endpoint module="luxe: save" class="Save" signature="has(save : Save, key : String, kind : SaveScope)"></endpoint>
### Save.has(...)
```lx
Save.has(save : Save, key : String, kind : SaveScope) : unknown
```
> Returns true if the given key can be found   

<endpoint module="luxe: save" class="Save" signature="get_keys(save : Save)"></endpoint>
### Save.get_keys(.)
```lx
Save.get_keys(save : Save) : unknown
```
> Returns a list of knowns keys, for the active save slot   

<endpoint module="luxe: save" class="Save" signature="get_keys(save : Save, kind : SaveScope)"></endpoint>
### Save.get_keys(..)
```lx
Save.get_keys(save : Save, kind : SaveScope) : unknown
```
> Returns a list of knowns keys   

<endpoint module="luxe: save" class="Save" signature="slot_clear(save : Save, slot : String)"></endpoint>
### Save.slot_clear(..)
```lx
Save.slot_clear(save : Save, slot : String) : Bool
```
> Slot query. Delete a save slot, return true or false for success   

<endpoint module="luxe: save" class="Save" signature="slot_backup(save : Save, slot : String)"></endpoint>
### Save.slot_backup(..)
```lx
Save.slot_backup(save : Save, slot : String) : String
```
> Slot query. Makes a backup of the slot, returns a slot ID of the backup if successful, null if false   

<endpoint module="luxe: save" class="Save" signature="slot_modified_time(save : Save, slot : String)"></endpoint>
### Save.slot_modified_time(..)
```lx
Save.slot_modified_time(save : Save, slot : String) : unknown
```
> Slot query. Returns the modified time for the given save slot ID   

<endpoint module="luxe: save" class="Save" signature="slot_file_exists(save : Save, slot : String, file_id : String)"></endpoint>
### Save.slot_file_exists(...)
```lx
Save.slot_file_exists(save : Save, slot : String, file_id : String) : unknown
```
> Slot query. Returns true if the given file path can be found for the given save slot ID   

<endpoint module="luxe: save" class="Save" signature="slot_set_file(save : Save, slot : String, file_id : String, file_contents : String)"></endpoint>
### Save.slot_set_file(....)
```lx
Save.slot_set_file(save : Save, slot : String, file_id : String, file_contents : String) : unknown
```
> Slot query. Save the contents of a file at the given path for the given slot ID. The path is a relative style path, like `some/file/here`   

<endpoint module="luxe: save" class="Save" signature="slot_get_file(save : Save, slot : String, file_id : String)"></endpoint>
### Save.slot_get_file(...)
```lx
Save.slot_get_file(save : Save, slot : String, file_id : String) : unknown
```
> Slot query. Return the contents of the file with the given path for the given slot ID. If not found, returns null   


## SaveScope
```lx
import "luxe: save" for SaveScope
```
> no docs found

<endpoint module="luxe: save" class="SaveScope" signature="slot"></endpoint>
### SaveScope.slot
```lx
SaveScope.slot : unknown
```
> no docs found   

<endpoint module="luxe: save" class="SaveScope" signature="user"></endpoint>
### SaveScope.user
```lx
SaveScope.user : unknown
```
> no docs found   

