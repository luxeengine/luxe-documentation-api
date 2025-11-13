---
title: "luxe: assets"
description: API version 2025.11.1
slug: "v/2025.11.1/assets"
---
- [Assets](#assets)   
- [Strings](#strings)   

---


## Assets
```lx
import "luxe: assets" for Assets
```
> The `Assets` services is how you access loaded assets, and query if an asset is loaded.
> The primary use for this at the moment is the accessors like `Assets.image`, and finding out 
> if an asset is loaded via `Assets.has_image`. 
> 
> Note that the asset system is a work in progress and is not final. 
> There are several accessors missing, for example, fonts are often referenced 
> as a string, not via `Assets.font("fonts/name")`. Later, all assets will be unified into this form as intended.
> 
> Also, they're supposed to be able to reload dynamically, many can't currently. And remember the input
> to the asset system is compiled assets, not the assets themselves. 
> 
> Finally, there are functions in the API that shouldn't be used directly (they aren't listed here.)

<endpoint module="luxe: assets" class="Assets" signature="db_init()"></endpoint>
### Assets.db_init(.)
```lx
Assets.db_init() : AssetDB
```
> Create a new asset DB. 
> This is usually internal stuff.
> Also used internally in `"luxe: project" for ProjectAssets` which has additional functions for making the DB useful for common usecases.   

<endpoint module="luxe: assets" class="Assets" signature="db_destroy(db : AssetDB)"></endpoint>
### Assets.db_destroy(.)
```lx
Assets.db_destroy(db : AssetDB) : Bool
```
> Destroy a previously created asset DB.
> returns true if the db existed and was destroyed successfully.   

<endpoint module="luxe: assets" class="Assets" signature="db_commit(db : AssetDB)"></endpoint>
### Assets.db_commit(.)
```lx
Assets.db_commit(db : AssetDB) : None
```
> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_default()"></endpoint>
### Assets.db_default(.)
```lx
Assets.db_default() : AssetDB
```
> Get the default database handle. By default this is the first created database.   

<endpoint module="luxe: assets" class="Assets" signature="db_default_set(db : AssetDB)"></endpoint>
### Assets.db_default_set(.)
```lx
Assets.db_default_set(db : AssetDB) : None
```
> Set the default database to a different one.   

<endpoint module="luxe: assets" class="Assets" signature="db_commit_post(db : AssetDB)"></endpoint>
### Assets.db_commit_post(.)
```lx
Assets.db_commit_post(db : AssetDB) : unknown
```
> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_commit_refs(db : AssetDB)"></endpoint>
### Assets.db_commit_refs(.)
```lx
Assets.db_commit_refs(db : AssetDB) : unknown
```
> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_add_root_path(db : AssetDB, path : String, subfolder : String, prefix : String)"></endpoint>
### Assets.db_add_root_path(....)
```lx
Assets.db_add_root_path(db : AssetDB, path : String, subfolder : String, prefix : String) : None
```
> Add a root path for files that the asset database considers.
> In a normal project this is the project folder and all module folders.
> note: this usually happens internally without you needing to worry about it.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_item(db : AssetDB, root : String, path : String, is_directory : Bool)"></endpoint>
### Assets.db_add_item(....)
```lx
Assets.db_add_item(db : AssetDB, root : String, path : String, is_directory : Bool) : None
```
> Add a folder path or file path to the database.
> Relevant if you generate asset files and want the engine to know about them.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_item(db : AssetDB, root : String, path : String)"></endpoint>
### Assets.db_add_item(...)
```lx
Assets.db_add_item(db : AssetDB, root : String, path : String) : None
```
> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_make_item(db : AssetDB, root : String, path : String, is_directory : Bool)"></endpoint>
### Assets.db_make_item(....)
```lx
Assets.db_make_item(db : AssetDB, root : String, path : String, is_directory : Bool) : Map
```
> Get DB item information for a path without adding it to the DB.   

<endpoint module="luxe: assets" class="Assets" signature="db_make_item(db : AssetDB, root : String, path : String)"></endpoint>
### Assets.db_make_item(...)
```lx
Assets.db_make_item(db : AssetDB, root : String, path : String) : None
```
> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_remove_item(db : AssetDB, asset_id : String)"></endpoint>
### Assets.db_remove_item(..)
```lx
Assets.db_remove_item(db : AssetDB, asset_id : String) : Bool
```
> Make a database forget about an asset with a asset ID. Returns if asset existed and was successfully forgotten.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_ignore(db : AssetDB, globs : List)"></endpoint>
### Assets.db_add_ignore(..)
```lx
Assets.db_add_ignore(db : AssetDB, globs : List) : None
```
> Tell the database to ignore files or folders. This is used to not include things like logs, temp data and previous builds.   

<endpoint module="luxe: assets" class="Assets" signature="db_asset_from_path(db : AssetDB, path : String)"></endpoint>
### Assets.db_asset_from_path(..)
```lx
Assets.db_asset_from_path(db : AssetDB, path : String) : Map
```
> Get the db asset info for an asset by its path on disk.   

<endpoint module="luxe: assets" class="Assets" signature="db_asset_from_id(db : AssetDB, asset_id : String)"></endpoint>
### Assets.db_asset_from_id(..)
```lx
Assets.db_asset_from_id(db : AssetDB, asset_id : String) : Map
```
> Get the db asset info for an asset by its asset id.
> !in this context the "asset ID" is the local path from the project or module root (with the module prefix if in a module), including extensions!   

<endpoint module="luxe: assets" class="Assets" signature="db_asset_from_uuid(db : AssetDB, meta_uuid : String)"></endpoint>
### Assets.db_asset_from_uuid(..)
```lx
Assets.db_asset_from_uuid(db : AssetDB, meta_uuid : String) : Map
```
> Get the db asset info for an asset by its UUID stored in the associated `.meta.lx` file.   

<endpoint module="luxe: assets" class="Assets" signature="db_asset_get_root(db : AssetDB, asset_id : String)"></endpoint>
### Assets.db_asset_get_root(..)
```lx
Assets.db_asset_get_root(db : AssetDB, asset_id : String) : String
```
> Get root path of the project/module the asset is a part of.   

<endpoint module="luxe: assets" class="Assets" signature="db_compile(db : AssetDB)"></endpoint>
### Assets.db_compile(.)
```lx
Assets.db_compile(db : AssetDB) : String
```
> Compile the asset DB into a serialized form.   

<endpoint module="luxe: assets" class="Assets" signature="db_parse(bytes : String)"></endpoint>
### Assets.db_parse(.)
```lx
Assets.db_parse(bytes : String) : AssetDB
```
> Parse the asset DB from its serialized form.   

<endpoint module="luxe: assets" class="Assets" signature="db_has(db : AssetDB, asset_id : String)"></endpoint>
### Assets.db_has(..)
```lx
Assets.db_has(db : AssetDB, asset_id : String) : Bool
```
> Check whether a database knows about an asset id.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_reference(db : AssetDB, from_asset_id : String, to_asset_id : String)"></endpoint>
### Assets.db_add_reference(...)
```lx
Assets.db_add_reference(db : AssetDB, from_asset_id : String, to_asset_id : String) : None
```
> Track a reference between two assets. Block fields with the `Asset` type are tracked like this automatically.   

<endpoint module="luxe: assets" class="Assets" signature="db_reset_references(db : AssetDB, asset_id : String)"></endpoint>
### Assets.db_reset_references(..)
```lx
Assets.db_reset_references(db : AssetDB, asset_id : String) : None
```
> Forget all tracked references from this asset.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_references(db : AssetDB, asset_id : String)"></endpoint>
### Assets.db_get_references(..)
```lx
Assets.db_get_references(db : AssetDB, asset_id : String) : List
```
> Get list of assets that are referenced by this asset.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_referenced_by(db : AssetDB, asset_id : String)"></endpoint>
### Assets.db_get_referenced_by(..)
```lx
Assets.db_get_referenced_by(db : AssetDB, asset_id : String) : List
```
> Get list of assets that are referencing this asset.   

<endpoint module="luxe: assets" class="Assets" signature="list(db : AssetDB)"></endpoint>
### Assets.list(.)
```lx
Assets.list(db : AssetDB) : List
```
> Get a list of *all* assets tracked by a database (as dictionaries with all db entry info).   

<endpoint module="luxe: assets" class="Assets" signature="list(db : AssetDB, ext : String)"></endpoint>
### Assets.list(..)
```lx
Assets.list(db : AssetDB, ext : String) : List
```
> #doc="Get a list of assets tracked by a database filtered by a specific extension. Same as `Assets.list(db, ext, null)`"   

<endpoint module="luxe: assets" class="Assets" signature="list(db : AssetDB, ext : String, subtype : String)"></endpoint>
### Assets.list(...)
```lx
Assets.list(db : AssetDB, ext : String, subtype : String) : List
```
> Get a list of assets tracked by a database filtered by a specific extension and subtype.   

<endpoint module="luxe: assets" class="Assets" signature="list(db : AssetDB, ext : String, subtype : String, root : String)"></endpoint>
### Assets.list(....)
```lx
Assets.list(db : AssetDB, ext : String, subtype : String, root : String) : List
```
> Get a list of assets tracked by a database filtered by a specific extension and subtype. 
> But only if their path starts with a given root.   

<endpoint module="luxe: assets" class="Assets" signature="list_folders(db : AssetDB, root : String, use_path : Bool)"></endpoint>
### Assets.list_folders(...)
```lx
Assets.list_folders(db : AssetDB, root : String, use_path : Bool) : List
```
> Get folders in the DB as asset entry maps. 
> `root` can be `null` to get all folders, or a folder path to get sub-folders.   

<endpoint module="luxe: assets" class="Assets" signature="list_ids(db : AssetDB, type_id : String)"></endpoint>
### Assets.list_ids(..)
```lx
Assets.list_ids(db : AssetDB, type_id : String) : List
```
> Get a list of all asset IDs (as strings) of a known asset type.   

<endpoint module="luxe: assets" class="Assets" signature="db_list_tags(db : AssetDB)"></endpoint>
### Assets.db_list_tags(.)
```lx
Assets.db_list_tags(db : AssetDB) : List
```
> Get a list of all tags used anywhere in the database.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_tags(db : AssetDB, asset_id : String)"></endpoint>
### Assets.db_get_tags(..)
```lx
Assets.db_get_tags(db : AssetDB, asset_id : String) : List
```
> Get a list of tags on a specific asset.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_tagged(db : AssetDB, tag : String)"></endpoint>
### Assets.db_get_tagged(..)
```lx
Assets.db_get_tagged(db : AssetDB, tag : String) : List
```
> Check whether an asset has a specific tag.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_tagged_from_list(db : AssetDB, tags : List)"></endpoint>
### Assets.db_get_tagged_from_list(..)
```lx
Assets.db_get_tagged_from_list(db : AssetDB, tags : List) : List
```
> Get all asset ids of assets that *any* of the tags apply to.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_tags(db : AssetDB, asset_id : String, tags : List)"></endpoint>
### Assets.db_add_tags(...)
```lx
Assets.db_add_tags(db : AssetDB, asset_id : String, tags : List) : None
```
> Add new tags to the DB entry of an asset.   

<endpoint module="luxe: assets" class="Assets" signature="db_remove_tags(db : AssetDB, asset_id : String, tags : List)"></endpoint>
### Assets.db_remove_tags(...)
```lx
Assets.db_remove_tags(db : AssetDB, asset_id : String, tags : List) : None
```
> Remove tags from the DB entry of an asset.   

<endpoint module="luxe: assets" class="Assets" signature="modified(db : AssetDB, query_id : String)"></endpoint>
### Assets.modified(..)
```lx
Assets.modified(db : AssetDB, query_id : String) : List
```
> Get all modified asset files in the db. 
> The query id is used for having different systems be able to have different modified states.
> The query id can also be changed to make sure assets are seen as not handled yet when an asset handler has a new version.
> This function returns a list of DB entries as maps. the `AssetID` helper class can hold these infos in a wren type.   

<endpoint module="luxe: assets" class="Assets" signature="modified(db : AssetDB, query_id : String, ext : String, subtype : String)"></endpoint>
### Assets.modified(....)
```lx
Assets.modified(db : AssetDB, query_id : String, ext : String, subtype : String) : List
```
> Get the modified asset files in the DB with a specific extension/subtype (like `.subtype.ext`). Asset flow uses this internally to get which assets to recompile.   

<endpoint module="luxe: assets" class="Assets" signature="modified(db : AssetDB, query_id : String, ext : String, subtype : String, root : String)"></endpoint>
### Assets.modified(.....)
```lx
Assets.modified(db : AssetDB, query_id : String, ext : String, subtype : String, root : String) : List
```
> Get the modified asset files in the DB with a specific extension with paths that are starting with a specific root.   

<endpoint module="luxe: assets" class="Assets" signature="modified(db : AssetDB, query_id : String, ext : String)"></endpoint>
### Assets.modified(...)
```lx
Assets.modified(db : AssetDB, query_id : String, ext : String) : List
```
> Get the modified asset files in the DB with a specific extension.   

<endpoint module="luxe: assets" class="Assets" signature="unmodified(db : AssetDB, query_id : String, asset_id : String)"></endpoint>
### Assets.unmodified(...)
```lx
Assets.unmodified(db : AssetDB, query_id : String, asset_id : String) : None
```
> Mark an asset as not modified/dirty anymore (in the context of one query), this usually happens when an asset was handled/compiled successfully and doesn't need to be touched again until the file changes.   

<endpoint module="luxe: assets" class="Assets" signature="modify(db : AssetDB, query_id : String, asset_id : String)"></endpoint>
### Assets.modify(...)
```lx
Assets.modify(db : AssetDB, query_id : String, asset_id : String) : None
```
> Mark an asset file as modified. This can be useful if one asset is dependent on a bunch of other assets in a folder (like entities in scenes, the entities mark the scene as modified when the entity changes.).   

<endpoint module="luxe: assets" class="Assets" signature="is_modified(db : AssetDB, query_id : String, asset_id : String)"></endpoint>
### Assets.is_modified(...)
```lx
Assets.is_modified(db : AssetDB, query_id : String, asset_id : String) : Bool
```
> Get if an asset changed or was marked as modified manually.   

<endpoint module="luxe: assets" class="Assets" signature="get_data(type_id : String, id : String)"></endpoint>
### Assets.get_data(..)
```lx
Assets.get_data(type_id : String, id : String) : String
```
> Get the contents of an asset file.   

<endpoint module="luxe: assets" class="Assets" signature="get_block(type_id : String)"></endpoint>
### Assets.get_block(.)
```lx
Assets.get_block(type_id : String) : Block
```
> Get the data block associated with an asset type.   

<endpoint module="luxe: assets" class="Assets" signature="get_handle(type_id : String, id : String)"></endpoint>
### Assets.get_handle(..)
```lx
Assets.get_handle(type_id : String, id : String) : Num
```
> Get the block handle for a compiled asset block instance.   

<endpoint module="luxe: assets" class="Assets" signature="set_handle(type_id : String, id : String, handle : Num)"></endpoint>
### Assets.set_handle(...)
```lx
Assets.set_handle(type_id : String, id : String, handle : Num) : None
```
> Set the block handle for a compiled asset block instance.   

<endpoint module="luxe: assets" class="Assets" signature="get_id_from_handle(type_id : String, handle : Handle)"></endpoint>
### Assets.get_id_from_handle(..)
```lx
Assets.get_id_from_handle(type_id : String, handle : Handle) : String
```
> Get the asset id to from the block handle of the compiled asset block instance.   

<endpoint module="luxe: assets" class="Assets" signature="get_dev_version_path(db : AssetDB, asset_id : String)"></endpoint>
### Assets.get_dev_version_path(..)
```lx
Assets.get_dev_version_path(db : AssetDB, asset_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="get_dev_version_data(db : AssetDB, asset_id : String)"></endpoint>
### Assets.get_dev_version_data(..)
```lx
Assets.get_dev_version_data(db : AssetDB, asset_id : String) : Map
```
> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="save_dev_version_data(db : AssetDB, asset_id : String, version_data : Map)"></endpoint>
### Assets.save_dev_version_data(...)
```lx
Assets.save_dev_version_data(db : AssetDB, asset_id : String, version_data : Map) : None
```
> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="image(id : String)"></endpoint>
### Assets.image(.)
```lx
Assets.image(id : String) : Image
```
> Return a loaded image by id.
> 
>   ```js
>   var image = Assets.image("image/player")
>   Log.print("width: %(Image.get_width(image))")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="bytes(id : String)"></endpoint>
### Assets.bytes(.)
```lx
Assets.bytes(id : String) : String
```
> Returns the data stored as bytes. 
> A Wren `String` is also a byte sequence, used via `string.bytes`.
> 
> **Note** That unlike other assets, bytes are stored by name _with_ extension.
> For example if you put a file called `data/hello.txt` in your project,
> you would access it via `var data = Assets.bytes("data/hello.txt")`.
> 
> This is because the extension might be meaningful to the user of the bytes,
> for example loading an image based on png vs jpg extension would be impossible
> if we don't know the extension of the data. Because bytes are "opaque", as in, 
> we don't care what they store, we just store them for you to access, we keep the extension.
> 
>   ```js
>   var text = Assets.bytes("data/hello.txt")
>   Log.print(text) //prints the contents of the file (the contents at compile time).
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="material(id : String)"></endpoint>
### Assets.material(.)
```lx
Assets.material(id : String) : Material
```
> Returns a loaded material by id.
> 
>   ```js
>   var material = Assets.material("material/player")
>   Sprite.set_material(player, material)
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="atlas(id : String)"></endpoint>
### Assets.atlas(.)
```lx
Assets.atlas(id : String) : Atlas
```
> Returns a loaded atlas by id.
> 
>   ```js
>   var atlas = Assets.atlas("atlas/example")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="lx(id : String)"></endpoint>
### Assets.lx(.)
```lx
Assets.lx(id : String) : Any
```
> Returns the LX parsed representation of a `bytes` asset.
> This is convenience for `Assets.bytes` followed by `LX.parse`.
> Returns null if the asset isn't found, or if parsing failed.
> 
> See `Assets.bytes`, as bytes require an extension.
> 
>   ```js
>   //assuming our data contains { speaker="sara" message="follow me." }
>   var dialog = Assets.lx("dialog/hello.lx")
>   var speaker = dialog["speaker"]
>   var message = dialog["message"]
>   Log.print("%(speaker): %(message)")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_shader_library(id : String)"></endpoint>
### Assets.has_shader_library(.)
```lx
Assets.has_shader_library(id : String) : Bool
```
> Returns true if a shader library with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_shader_library("assets/shaders")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_image(id : String)"></endpoint>
### Assets.has_image(.)
```lx
Assets.has_image(id : String) : Bool
```
> Returns true if an image with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_image("image/player")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_material_basis(id : String)"></endpoint>
### Assets.has_material_basis(.)
```lx
Assets.has_material_basis(id : String) : Bool
```
> Returns true if a material basis with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_material_basis("basis/example")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_material(id : String)"></endpoint>
### Assets.has_material(.)
```lx
Assets.has_material(id : String) : Bool
```
> Returns true if a material with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_material("material/player")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_bytes(id : String)"></endpoint>
### Assets.has_bytes(.)
```lx
Assets.has_bytes(id : String) : Bool
```
> Returns true if a bytes asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_bytes("data/hello.txt")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_settings(id : String)"></endpoint>
### Assets.has_settings(.)
```lx
Assets.has_settings(id : String) : Bool
```
> Returns true if a settings asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_settings("settings/area1")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_atlas(id : String)"></endpoint>
### Assets.has_atlas(.)
```lx
Assets.has_atlas(id : String) : Bool
```
> Returns true if an atlas asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_atlas("atlas/example")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_input(id : String)"></endpoint>
### Assets.has_input(.)
```lx
Assets.has_input(id : String) : Bool
```
> Returns true if an input asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_input("input/player")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_ui(id : String)"></endpoint>
### Assets.has_ui(.)
```lx
Assets.has_ui(id : String) : Bool
```
> Returns true if a ui asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_ui("ui/menu")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="unload_input(id : String)"></endpoint>
### Assets.unload_input(.)
```lx
Assets.unload_input(id : String) : None
```
> Unload the input asset, which undefines any nodes or events   

<endpoint module="luxe: assets" class="Assets" signature="load_input(id : String)"></endpoint>
### Assets.load_input(.)
```lx
Assets.load_input(id : String) : None
```
> Load an input asset, which defines any nodes or events within it   


## Strings
```lx
import "luxe: assets" for Strings
```
> When dealing with data like assets, storing a string directly can take up a lot of space.
> Instead, what we can do is store the strings once, in a shared place, and then reference that string later.
> 
> At runtime, strings can also be more expensive than is ideal (like needing to iterate the characters individually, or taking up more memory).
> 
> In both cases, what we store instead of a string is a _string id_, which is just a number.
> 
> Comparing two numbers, looking up numbers in an array or map and so on, it's _much_ faster with a number than using
> the string itself. Operating on numbers is both faster and simpler, and has a fixed size in memory.
> This is commonly called "string interning".
> 
> In luxe, the `Strings` class is how you interact with the strings available to your game.
> For example, `var name_id = Entity.get_name(entity)` will return a _string id_, not a string.
> To get the string, you can use `var name = Strings.get(name_id)`.
> Note that if the name is unknown to `Strings`, it will return null, so handle that appropriately.
> 
> To add a string, use `Strings.add("string")`.
> 
> For debugging strings, if you look inside `.luxe/luxe.strings.lx`, 
> this lists all the strings your assets reference, and what their key is.
> 
>   ```js
>   //Assuming this string hasn't been added before:
>   Log.print( Strings.get("hello") ) //prints null
>   var key = Strings.add("hello") //key is 1335831723
>   Log.print( Strings.get("hello") ) //prints 'hello'
>   ```

<endpoint module="luxe: assets" class="Strings" signature="add(value : String)"></endpoint>
### Strings.add(.)
```lx
Strings.add(value : String) : Num
```
> Adds a string to the `Strings` service and returns the key.
> 
>   ```js
>   Log.print(Strings.add("hello")) //prints 1335831723
>   ```   

<endpoint module="luxe: assets" class="Strings" signature="get(key : Num)"></endpoint>
### Strings.get(.)
```lx
Strings.get(key : Num) : String
```
> Return the value associated with the given key.
> This will return null if the string is not found.
> 
>   ```js
>   var name_id = Entity.get_name(entity)
>   var name = Strings.get(name_id)
>   if(name) {
>     Log.print("entity name is %(name)")
>   } else {
>     Log.print("entity name is not known (or it has no name)")
>   }
>   ```   

