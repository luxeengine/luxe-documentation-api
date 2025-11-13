---
title: "luxe: assets"
description: API version 2025.11.1
---
## `luxe: assets{:lx}` module

- [Assets](#assets)   
- [Strings](#strings)   

---


### Assets
`import "luxe: assets" for Assets{:lx}`
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

- [db_init](#Assets.db_init)()
- [db_destroy](#Assets.db_destroy)(**db**: `AssetDB{:lx}`)
- [db_commit](#Assets.db_commit)(**db**: `AssetDB{:lx}`)
- [db_default](#Assets.db_default)()
- [db_default_set](#Assets.db_default_set)(**db**: `AssetDB{:lx}`)
- [db_commit_post](#Assets.db_commit_post)(**db**: `AssetDB{:lx}`)
- [db_commit_refs](#Assets.db_commit_refs)(**db**: `AssetDB{:lx}`)
- [db_add_root_path](#Assets.db_add_root_path+4)(**db**: `AssetDB{:lx}`, **path**: `String{:lx}`, **subfolder**: `String{:lx}`, **prefix**: `String{:lx}`)
- [db_add_item](#Assets.db_add_item+4)(**db**: `AssetDB{:lx}`, **root**: `String{:lx}`, **path**: `String{:lx}`, **is_directory**: `Bool{:lx}`)
- [db_add_item](#Assets.db_add_item+3)(**db**: `AssetDB{:lx}`, **root**: `String{:lx}`, **path**: `String{:lx}`)
- [db_make_item](#Assets.db_make_item+4)(**db**: `AssetDB{:lx}`, **root**: `String{:lx}`, **path**: `String{:lx}`, **is_directory**: `Bool{:lx}`)
- [db_make_item](#Assets.db_make_item+3)(**db**: `AssetDB{:lx}`, **root**: `String{:lx}`, **path**: `String{:lx}`)
- [db_remove_item](#Assets.db_remove_item+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [db_add_ignore](#Assets.db_add_ignore+2)(**db**: `AssetDB{:lx}`, **globs**: `List{:lx}`)
- [db_asset_from_path](#Assets.db_asset_from_path+2)(**db**: `AssetDB{:lx}`, **path**: `String{:lx}`)
- [db_asset_from_id](#Assets.db_asset_from_id+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [db_asset_from_uuid](#Assets.db_asset_from_uuid+2)(**db**: `AssetDB{:lx}`, **meta_uuid**: `String{:lx}`)
- [db_asset_get_root](#Assets.db_asset_get_root+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [db_compile](#Assets.db_compile)(**db**: `AssetDB{:lx}`)
- [db_parse](#Assets.db_parse)(**bytes**: `String{:lx}`)
- [db_has](#Assets.db_has+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [db_add_reference](#Assets.db_add_reference+3)(**db**: `AssetDB{:lx}`, **from_asset_id**: `String{:lx}`, **to_asset_id**: `String{:lx}`)
- [db_reset_references](#Assets.db_reset_references+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [db_get_references](#Assets.db_get_references+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [db_get_referenced_by](#Assets.db_get_referenced_by+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [list](#Assets.list)(**db**: `AssetDB{:lx}`)
- [list](#Assets.list+2)(**db**: `AssetDB{:lx}`, **ext**: `String{:lx}`)
- [list](#Assets.list+3)(**db**: `AssetDB{:lx}`, **ext**: `String{:lx}`, **subtype**: `String{:lx}`)
- [list](#Assets.list+4)(**db**: `AssetDB{:lx}`, **ext**: `String{:lx}`, **subtype**: `String{:lx}`, **root**: `String{:lx}`)
- [list_folders](#Assets.list_folders+3)(**db**: `AssetDB{:lx}`, **root**: `String{:lx}`, **use_path**: `Bool{:lx}`)
- [list_ids](#Assets.list_ids+2)(**db**: `AssetDB{:lx}`, **type_id**: `String{:lx}`)
- [db_list_tags](#Assets.db_list_tags)(**db**: `AssetDB{:lx}`)
- [db_get_tags](#Assets.db_get_tags+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [db_get_tagged](#Assets.db_get_tagged+2)(**db**: `AssetDB{:lx}`, **tag**: `String{:lx}`)
- [db_get_tagged_from_list](#Assets.db_get_tagged_from_list+2)(**db**: `AssetDB{:lx}`, **tags**: `List{:lx}`)
- [db_add_tags](#Assets.db_add_tags+3)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`, **tags**: `List{:lx}`)
- [db_remove_tags](#Assets.db_remove_tags+3)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`, **tags**: `List{:lx}`)
- [modified](#Assets.modified+2)(**db**: `AssetDB{:lx}`, **query_id**: `String{:lx}`)
- [modified](#Assets.modified+4)(**db**: `AssetDB{:lx}`, **query_id**: `String{:lx}`, **ext**: `String{:lx}`, **subtype**: `String{:lx}`)
- [modified](#Assets.modified+5)(**db**: `AssetDB{:lx}`, **query_id**: `String{:lx}`, **ext**: `String{:lx}`, **subtype**: `String{:lx}`, **root**: `String{:lx}`)
- [modified](#Assets.modified+3)(**db**: `AssetDB{:lx}`, **query_id**: `String{:lx}`, **ext**: `String{:lx}`)
- [unmodified](#Assets.unmodified+3)(**db**: `AssetDB{:lx}`, **query_id**: `String{:lx}`, **asset_id**: `String{:lx}`)
- [modify](#Assets.modify+3)(**db**: `AssetDB{:lx}`, **query_id**: `String{:lx}`, **asset_id**: `String{:lx}`)
- [is_modified](#Assets.is_modified+3)(**db**: `AssetDB{:lx}`, **query_id**: `String{:lx}`, **asset_id**: `String{:lx}`)
- [get_data](#Assets.get_data+2)(**type_id**: `String{:lx}`, **id**: `String{:lx}`)
- [get_block](#Assets.get_block)(**type_id**: `String{:lx}`)
- [get_handle](#Assets.get_handle+2)(**type_id**: `String{:lx}`, **id**: `String{:lx}`)
- [set_handle](#Assets.set_handle+3)(**type_id**: `String{:lx}`, **id**: `String{:lx}`, **handle**: `Num{:lx}`)
- [get_id_from_handle](#Assets.get_id_from_handle+2)(**type_id**: `String{:lx}`, **handle**: `Handle{:lx}`)
- [get_dev_version_path](#Assets.get_dev_version_path+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [get_dev_version_data](#Assets.get_dev_version_data+2)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`)
- [save_dev_version_data](#Assets.save_dev_version_data+3)(**db**: `AssetDB{:lx}`, **asset_id**: `String{:lx}`, **version_data**: `Map{:lx}`)
- [image](#Assets.image)(**id**: `String{:lx}`)
- [bytes](#Assets.bytes)(**id**: `String{:lx}`)
- [material](#Assets.material)(**id**: `String{:lx}`)
- [atlas](#Assets.atlas)(**id**: `String{:lx}`)
- [lx](#Assets.lx)(**id**: `String{:lx}`)
- [has_shader_library](#Assets.has_shader_library)(**id**: `String{:lx}`)
- [has_image](#Assets.has_image)(**id**: `String{:lx}`)
- [has_material_basis](#Assets.has_material_basis)(**id**: `String{:lx}`)
- [has_material](#Assets.has_material)(**id**: `String{:lx}`)
- [has_bytes](#Assets.has_bytes)(**id**: `String{:lx}`)
- [has_settings](#Assets.has_settings)(**id**: `String{:lx}`)
- [has_atlas](#Assets.has_atlas)(**id**: `String{:lx}`)
- [has_input](#Assets.has_input)(**id**: `String{:lx}`)
- [has_ui](#Assets.has_ui)(**id**: `String{:lx}`)
- [unload_input](#Assets.unload_input)(**id**: `String{:lx}`)
- [load_input](#Assets.load_input)(**id**: `String{:lx}`)


---

<endpoint module="luxe: assets" class="Assets" signature="db_init()"></endpoint>
<h4 class="signature_head">Assets.db_init</h4><a class="signature-arity" href="#Assets.db_init" title="Permanent link">1</a><signature id="Assets.db_init">

```lx
Assets.db_init() : AssetDB
```
</signature>

> Create a new asset DB. 
> This is usually internal stuff.
> Also used internally in `"luxe: project" for ProjectAssets` which has additional functions for making the DB useful for common usecases.   

<endpoint module="luxe: assets" class="Assets" signature="db_destroy(db : AssetDB)"></endpoint>
<h4 class="signature_head">Assets.db_destroy</h4><a class="signature-arity" href="#Assets.db_destroy" title="Permanent link">1</a><signature id="Assets.db_destroy">

```lx
Assets.db_destroy(db : AssetDB) : Bool
```
</signature>

> Destroy a previously created asset DB.
> returns true if the db existed and was destroyed successfully.   

<endpoint module="luxe: assets" class="Assets" signature="db_commit(db : AssetDB)"></endpoint>
<h4 class="signature_head">Assets.db_commit</h4><a class="signature-arity" href="#Assets.db_commit" title="Permanent link">1</a><signature id="Assets.db_commit">

```lx
Assets.db_commit(db : AssetDB) : None
```
</signature>

> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_default()"></endpoint>
<h4 class="signature_head">Assets.db_default</h4><a class="signature-arity" href="#Assets.db_default" title="Permanent link">1</a><signature id="Assets.db_default">

```lx
Assets.db_default() : AssetDB
```
</signature>

> Get the default database handle. By default this is the first created database.   

<endpoint module="luxe: assets" class="Assets" signature="db_default_set(db : AssetDB)"></endpoint>
<h4 class="signature_head">Assets.db_default_set</h4><a class="signature-arity" href="#Assets.db_default_set" title="Permanent link">1</a><signature id="Assets.db_default_set">

```lx
Assets.db_default_set(db : AssetDB) : None
```
</signature>

> Set the default database to a different one.   

<endpoint module="luxe: assets" class="Assets" signature="db_commit_post(db : AssetDB)"></endpoint>
<h4 class="signature_head">Assets.db_commit_post</h4><a class="signature-arity" href="#Assets.db_commit_post" title="Permanent link">1</a><signature id="Assets.db_commit_post">

```lx
Assets.db_commit_post(db : AssetDB) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_commit_refs(db : AssetDB)"></endpoint>
<h4 class="signature_head">Assets.db_commit_refs</h4><a class="signature-arity" href="#Assets.db_commit_refs" title="Permanent link">1</a><signature id="Assets.db_commit_refs">

```lx
Assets.db_commit_refs(db : AssetDB) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_add_root_path(db : AssetDB, path : String, subfolder : String, prefix : String)"></endpoint>
<h4 class="signature_head">Assets.db_add_root_path</h4><a class="signature-arity" href="#Assets.db_add_root_path+4" title="Permanent link">4</a><signature id="Assets.db_add_root_path+4">

```lx
Assets.db_add_root_path(db : AssetDB, path : String, subfolder : String, prefix : String) : None
```
</signature>

> Add a root path for files that the asset database considers.
> In a normal project this is the project folder and all module folders.
> note: this usually happens internally without you needing to worry about it.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_item(db : AssetDB, root : String, path : String, is_directory : Bool)"></endpoint>
<h4 class="signature_head">Assets.db_add_item</h4><a class="signature-arity" href="#Assets.db_add_item+4" title="Permanent link">4</a><signature id="Assets.db_add_item+4">

```lx
Assets.db_add_item(db : AssetDB, root : String, path : String, is_directory : Bool) : None
```
</signature>

> Add a folder path or file path to the database.
> Relevant if you generate asset files and want the engine to know about them.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_item(db : AssetDB, root : String, path : String)"></endpoint>
<h4 class="signature_head">Assets.db_add_item</h4><a class="signature-arity" href="#Assets.db_add_item+3" title="Permanent link">3</a><signature id="Assets.db_add_item+3">

```lx
Assets.db_add_item(db : AssetDB, root : String, path : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_make_item(db : AssetDB, root : String, path : String, is_directory : Bool)"></endpoint>
<h4 class="signature_head">Assets.db_make_item</h4><a class="signature-arity" href="#Assets.db_make_item+4" title="Permanent link">4</a><signature id="Assets.db_make_item+4">

```lx
Assets.db_make_item(db : AssetDB, root : String, path : String, is_directory : Bool) : Map
```
</signature>

> Get DB item information for a path without adding it to the DB.   

<endpoint module="luxe: assets" class="Assets" signature="db_make_item(db : AssetDB, root : String, path : String)"></endpoint>
<h4 class="signature_head">Assets.db_make_item</h4><a class="signature-arity" href="#Assets.db_make_item+3" title="Permanent link">3</a><signature id="Assets.db_make_item+3">

```lx
Assets.db_make_item(db : AssetDB, root : String, path : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="db_remove_item(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_remove_item</h4><a class="signature-arity" href="#Assets.db_remove_item+2" title="Permanent link">2</a><signature id="Assets.db_remove_item+2">

```lx
Assets.db_remove_item(db : AssetDB, asset_id : String) : Bool
```
</signature>

> Make a database forget about an asset with a asset ID. Returns if asset existed and was successfully forgotten.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_ignore(db : AssetDB, globs : List)"></endpoint>
<h4 class="signature_head">Assets.db_add_ignore</h4><a class="signature-arity" href="#Assets.db_add_ignore+2" title="Permanent link">2</a><signature id="Assets.db_add_ignore+2">

```lx
Assets.db_add_ignore(db : AssetDB, globs : List) : None
```
</signature>

> Tell the database to ignore files or folders. This is used to not include things like logs, temp data and previous builds.   

<endpoint module="luxe: assets" class="Assets" signature="db_asset_from_path(db : AssetDB, path : String)"></endpoint>
<h4 class="signature_head">Assets.db_asset_from_path</h4><a class="signature-arity" href="#Assets.db_asset_from_path+2" title="Permanent link">2</a><signature id="Assets.db_asset_from_path+2">

```lx
Assets.db_asset_from_path(db : AssetDB, path : String) : Map
```
</signature>

> Get the db asset info for an asset by its path on disk.   

<endpoint module="luxe: assets" class="Assets" signature="db_asset_from_id(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_asset_from_id</h4><a class="signature-arity" href="#Assets.db_asset_from_id+2" title="Permanent link">2</a><signature id="Assets.db_asset_from_id+2">

```lx
Assets.db_asset_from_id(db : AssetDB, asset_id : String) : Map
```
</signature>

> Get the db asset info for an asset by its asset id.
> !in this context the "asset ID" is the local path from the project or module root (with the module prefix if in a module), including extensions!   

<endpoint module="luxe: assets" class="Assets" signature="db_asset_from_uuid(db : AssetDB, meta_uuid : String)"></endpoint>
<h4 class="signature_head">Assets.db_asset_from_uuid</h4><a class="signature-arity" href="#Assets.db_asset_from_uuid+2" title="Permanent link">2</a><signature id="Assets.db_asset_from_uuid+2">

```lx
Assets.db_asset_from_uuid(db : AssetDB, meta_uuid : String) : Map
```
</signature>

> Get the db asset info for an asset by its UUID stored in the associated `.meta.lx` file.   

<endpoint module="luxe: assets" class="Assets" signature="db_asset_get_root(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_asset_get_root</h4><a class="signature-arity" href="#Assets.db_asset_get_root+2" title="Permanent link">2</a><signature id="Assets.db_asset_get_root+2">

```lx
Assets.db_asset_get_root(db : AssetDB, asset_id : String) : String
```
</signature>

> Get root path of the project/module the asset is a part of.   

<endpoint module="luxe: assets" class="Assets" signature="db_compile(db : AssetDB)"></endpoint>
<h4 class="signature_head">Assets.db_compile</h4><a class="signature-arity" href="#Assets.db_compile" title="Permanent link">1</a><signature id="Assets.db_compile">

```lx
Assets.db_compile(db : AssetDB) : String
```
</signature>

> Compile the asset DB into a serialized form.   

<endpoint module="luxe: assets" class="Assets" signature="db_parse(bytes : String)"></endpoint>
<h4 class="signature_head">Assets.db_parse</h4><a class="signature-arity" href="#Assets.db_parse" title="Permanent link">1</a><signature id="Assets.db_parse">

```lx
Assets.db_parse(bytes : String) : AssetDB
```
</signature>

> Parse the asset DB from its serialized form.   

<endpoint module="luxe: assets" class="Assets" signature="db_has(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_has</h4><a class="signature-arity" href="#Assets.db_has+2" title="Permanent link">2</a><signature id="Assets.db_has+2">

```lx
Assets.db_has(db : AssetDB, asset_id : String) : Bool
```
</signature>

> Check whether a database knows about an asset id.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_reference(db : AssetDB, from_asset_id : String, to_asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_add_reference</h4><a class="signature-arity" href="#Assets.db_add_reference+3" title="Permanent link">3</a><signature id="Assets.db_add_reference+3">

```lx
Assets.db_add_reference(db : AssetDB, from_asset_id : String, to_asset_id : String) : None
```
</signature>

> Track a reference between two assets. Block fields with the `Asset` type are tracked like this automatically.   

<endpoint module="luxe: assets" class="Assets" signature="db_reset_references(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_reset_references</h4><a class="signature-arity" href="#Assets.db_reset_references+2" title="Permanent link">2</a><signature id="Assets.db_reset_references+2">

```lx
Assets.db_reset_references(db : AssetDB, asset_id : String) : None
```
</signature>

> Forget all tracked references from this asset.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_references(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_get_references</h4><a class="signature-arity" href="#Assets.db_get_references+2" title="Permanent link">2</a><signature id="Assets.db_get_references+2">

```lx
Assets.db_get_references(db : AssetDB, asset_id : String) : List
```
</signature>

> Get list of assets that are referenced by this asset.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_referenced_by(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_get_referenced_by</h4><a class="signature-arity" href="#Assets.db_get_referenced_by+2" title="Permanent link">2</a><signature id="Assets.db_get_referenced_by+2">

```lx
Assets.db_get_referenced_by(db : AssetDB, asset_id : String) : List
```
</signature>

> Get list of assets that are referencing this asset.   

<endpoint module="luxe: assets" class="Assets" signature="list(db : AssetDB)"></endpoint>
<h4 class="signature_head">Assets.list</h4><a class="signature-arity" href="#Assets.list" title="Permanent link">1</a><signature id="Assets.list">

```lx
Assets.list(db : AssetDB) : List
```
</signature>

> Get a list of *all* assets tracked by a database (as dictionaries with all db entry info).   

<endpoint module="luxe: assets" class="Assets" signature="list(db : AssetDB, ext : String)"></endpoint>
<h4 class="signature_head">Assets.list</h4><a class="signature-arity" href="#Assets.list+2" title="Permanent link">2</a><signature id="Assets.list+2">

```lx
Assets.list(db : AssetDB, ext : String) : List
```
</signature>

> #doc="Get a list of assets tracked by a database filtered by a specific extension. Same as `Assets.list(db, ext, null)`"   

<endpoint module="luxe: assets" class="Assets" signature="list(db : AssetDB, ext : String, subtype : String)"></endpoint>
<h4 class="signature_head">Assets.list</h4><a class="signature-arity" href="#Assets.list+3" title="Permanent link">3</a><signature id="Assets.list+3">

```lx
Assets.list(db : AssetDB, ext : String, subtype : String) : List
```
</signature>

> Get a list of assets tracked by a database filtered by a specific extension and subtype.   

<endpoint module="luxe: assets" class="Assets" signature="list(db : AssetDB, ext : String, subtype : String, root : String)"></endpoint>
<h4 class="signature_head">Assets.list</h4><a class="signature-arity" href="#Assets.list+4" title="Permanent link">4</a><signature id="Assets.list+4">

```lx
Assets.list(db : AssetDB, ext : String, subtype : String, root : String) : List
```
</signature>

> Get a list of assets tracked by a database filtered by a specific extension and subtype. 
> But only if their path starts with a given root.   

<endpoint module="luxe: assets" class="Assets" signature="list_folders(db : AssetDB, root : String, use_path : Bool)"></endpoint>
<h4 class="signature_head">Assets.list_folders</h4><a class="signature-arity" href="#Assets.list_folders+3" title="Permanent link">3</a><signature id="Assets.list_folders+3">

```lx
Assets.list_folders(db : AssetDB, root : String, use_path : Bool) : List
```
</signature>

> Get folders in the DB as asset entry maps. 
> `root` can be `null` to get all folders, or a folder path to get sub-folders.   

<endpoint module="luxe: assets" class="Assets" signature="list_ids(db : AssetDB, type_id : String)"></endpoint>
<h4 class="signature_head">Assets.list_ids</h4><a class="signature-arity" href="#Assets.list_ids+2" title="Permanent link">2</a><signature id="Assets.list_ids+2">

```lx
Assets.list_ids(db : AssetDB, type_id : String) : List
```
</signature>

> Get a list of all asset IDs (as strings) of a known asset type.   

<endpoint module="luxe: assets" class="Assets" signature="db_list_tags(db : AssetDB)"></endpoint>
<h4 class="signature_head">Assets.db_list_tags</h4><a class="signature-arity" href="#Assets.db_list_tags" title="Permanent link">1</a><signature id="Assets.db_list_tags">

```lx
Assets.db_list_tags(db : AssetDB) : List
```
</signature>

> Get a list of all tags used anywhere in the database.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_tags(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.db_get_tags</h4><a class="signature-arity" href="#Assets.db_get_tags+2" title="Permanent link">2</a><signature id="Assets.db_get_tags+2">

```lx
Assets.db_get_tags(db : AssetDB, asset_id : String) : List
```
</signature>

> Get a list of tags on a specific asset.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_tagged(db : AssetDB, tag : String)"></endpoint>
<h4 class="signature_head">Assets.db_get_tagged</h4><a class="signature-arity" href="#Assets.db_get_tagged+2" title="Permanent link">2</a><signature id="Assets.db_get_tagged+2">

```lx
Assets.db_get_tagged(db : AssetDB, tag : String) : List
```
</signature>

> Check whether an asset has a specific tag.   

<endpoint module="luxe: assets" class="Assets" signature="db_get_tagged_from_list(db : AssetDB, tags : List)"></endpoint>
<h4 class="signature_head">Assets.db_get_tagged_from_list</h4><a class="signature-arity" href="#Assets.db_get_tagged_from_list+2" title="Permanent link">2</a><signature id="Assets.db_get_tagged_from_list+2">

```lx
Assets.db_get_tagged_from_list(db : AssetDB, tags : List) : List
```
</signature>

> Get all asset ids of assets that *any* of the tags apply to.   

<endpoint module="luxe: assets" class="Assets" signature="db_add_tags(db : AssetDB, asset_id : String, tags : List)"></endpoint>
<h4 class="signature_head">Assets.db_add_tags</h4><a class="signature-arity" href="#Assets.db_add_tags+3" title="Permanent link">3</a><signature id="Assets.db_add_tags+3">

```lx
Assets.db_add_tags(db : AssetDB, asset_id : String, tags : List) : None
```
</signature>

> Add new tags to the DB entry of an asset.   

<endpoint module="luxe: assets" class="Assets" signature="db_remove_tags(db : AssetDB, asset_id : String, tags : List)"></endpoint>
<h4 class="signature_head">Assets.db_remove_tags</h4><a class="signature-arity" href="#Assets.db_remove_tags+3" title="Permanent link">3</a><signature id="Assets.db_remove_tags+3">

```lx
Assets.db_remove_tags(db : AssetDB, asset_id : String, tags : List) : None
```
</signature>

> Remove tags from the DB entry of an asset.   

<endpoint module="luxe: assets" class="Assets" signature="modified(db : AssetDB, query_id : String)"></endpoint>
<h4 class="signature_head">Assets.modified</h4><a class="signature-arity" href="#Assets.modified+2" title="Permanent link">2</a><signature id="Assets.modified+2">

```lx
Assets.modified(db : AssetDB, query_id : String) : List
```
</signature>

> Get all modified asset files in the db. 
> The query id is used for having different systems be able to have different modified states.
> The query id can also be changed to make sure assets are seen as not handled yet when an asset handler has a new version.
> This function returns a list of DB entries as maps. the `AssetID` helper class can hold these infos in a wren type.   

<endpoint module="luxe: assets" class="Assets" signature="modified(db : AssetDB, query_id : String, ext : String, subtype : String)"></endpoint>
<h4 class="signature_head">Assets.modified</h4><a class="signature-arity" href="#Assets.modified+4" title="Permanent link">4</a><signature id="Assets.modified+4">

```lx
Assets.modified(db : AssetDB, query_id : String, ext : String, subtype : String) : List
```
</signature>

> Get the modified asset files in the DB with a specific extension/subtype (like `.subtype.ext`). Asset flow uses this internally to get which assets to recompile.   

<endpoint module="luxe: assets" class="Assets" signature="modified(db : AssetDB, query_id : String, ext : String, subtype : String, root : String)"></endpoint>
<h4 class="signature_head">Assets.modified</h4><a class="signature-arity" href="#Assets.modified+5" title="Permanent link">5</a><signature id="Assets.modified+5">

```lx
Assets.modified(db : AssetDB, query_id : String, ext : String, subtype : String, root : String) : List
```
</signature>

> Get the modified asset files in the DB with a specific extension with paths that are starting with a specific root.   

<endpoint module="luxe: assets" class="Assets" signature="modified(db : AssetDB, query_id : String, ext : String)"></endpoint>
<h4 class="signature_head">Assets.modified</h4><a class="signature-arity" href="#Assets.modified+3" title="Permanent link">3</a><signature id="Assets.modified+3">

```lx
Assets.modified(db : AssetDB, query_id : String, ext : String) : List
```
</signature>

> Get the modified asset files in the DB with a specific extension.   

<endpoint module="luxe: assets" class="Assets" signature="unmodified(db : AssetDB, query_id : String, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.unmodified</h4><a class="signature-arity" href="#Assets.unmodified+3" title="Permanent link">3</a><signature id="Assets.unmodified+3">

```lx
Assets.unmodified(db : AssetDB, query_id : String, asset_id : String) : None
```
</signature>

> Mark an asset as not modified/dirty anymore (in the context of one query), this usually happens when an asset was handled/compiled successfully and doesn't need to be touched again until the file changes.   

<endpoint module="luxe: assets" class="Assets" signature="modify(db : AssetDB, query_id : String, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.modify</h4><a class="signature-arity" href="#Assets.modify+3" title="Permanent link">3</a><signature id="Assets.modify+3">

```lx
Assets.modify(db : AssetDB, query_id : String, asset_id : String) : None
```
</signature>

> Mark an asset file as modified. This can be useful if one asset is dependent on a bunch of other assets in a folder (like entities in scenes, the entities mark the scene as modified when the entity changes.).   

<endpoint module="luxe: assets" class="Assets" signature="is_modified(db : AssetDB, query_id : String, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.is_modified</h4><a class="signature-arity" href="#Assets.is_modified+3" title="Permanent link">3</a><signature id="Assets.is_modified+3">

```lx
Assets.is_modified(db : AssetDB, query_id : String, asset_id : String) : Bool
```
</signature>

> Get if an asset changed or was marked as modified manually.   

<endpoint module="luxe: assets" class="Assets" signature="get_data(type_id : String, id : String)"></endpoint>
<h4 class="signature_head">Assets.get_data</h4><a class="signature-arity" href="#Assets.get_data+2" title="Permanent link">2</a><signature id="Assets.get_data+2">

```lx
Assets.get_data(type_id : String, id : String) : String
```
</signature>

> Get the contents of an asset file.   

<endpoint module="luxe: assets" class="Assets" signature="get_block(type_id : String)"></endpoint>
<h4 class="signature_head">Assets.get_block</h4><a class="signature-arity" href="#Assets.get_block" title="Permanent link">1</a><signature id="Assets.get_block">

```lx
Assets.get_block(type_id : String) : Block
```
</signature>

> Get the data block associated with an asset type.   

<endpoint module="luxe: assets" class="Assets" signature="get_handle(type_id : String, id : String)"></endpoint>
<h4 class="signature_head">Assets.get_handle</h4><a class="signature-arity" href="#Assets.get_handle+2" title="Permanent link">2</a><signature id="Assets.get_handle+2">

```lx
Assets.get_handle(type_id : String, id : String) : Num
```
</signature>

> Get the block handle for a compiled asset block instance.   

<endpoint module="luxe: assets" class="Assets" signature="set_handle(type_id : String, id : String, handle : Num)"></endpoint>
<h4 class="signature_head">Assets.set_handle</h4><a class="signature-arity" href="#Assets.set_handle+3" title="Permanent link">3</a><signature id="Assets.set_handle+3">

```lx
Assets.set_handle(type_id : String, id : String, handle : Num) : None
```
</signature>

> Set the block handle for a compiled asset block instance.   

<endpoint module="luxe: assets" class="Assets" signature="get_id_from_handle(type_id : String, handle : Handle)"></endpoint>
<h4 class="signature_head">Assets.get_id_from_handle</h4><a class="signature-arity" href="#Assets.get_id_from_handle+2" title="Permanent link">2</a><signature id="Assets.get_id_from_handle+2">

```lx
Assets.get_id_from_handle(type_id : String, handle : Handle) : String
```
</signature>

> Get the asset id to from the block handle of the compiled asset block instance.   

<endpoint module="luxe: assets" class="Assets" signature="get_dev_version_path(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.get_dev_version_path</h4><a class="signature-arity" href="#Assets.get_dev_version_path+2" title="Permanent link">2</a><signature id="Assets.get_dev_version_path+2">

```lx
Assets.get_dev_version_path(db : AssetDB, asset_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="get_dev_version_data(db : AssetDB, asset_id : String)"></endpoint>
<h4 class="signature_head">Assets.get_dev_version_data</h4><a class="signature-arity" href="#Assets.get_dev_version_data+2" title="Permanent link">2</a><signature id="Assets.get_dev_version_data+2">

```lx
Assets.get_dev_version_data(db : AssetDB, asset_id : String) : Map
```
</signature>

> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="save_dev_version_data(db : AssetDB, asset_id : String, version_data : Map)"></endpoint>
<h4 class="signature_head">Assets.save_dev_version_data</h4><a class="signature-arity" href="#Assets.save_dev_version_data+3" title="Permanent link">3</a><signature id="Assets.save_dev_version_data+3">

```lx
Assets.save_dev_version_data(db : AssetDB, asset_id : String, version_data : Map) : None
```
</signature>

> no docs found   

<endpoint module="luxe: assets" class="Assets" signature="image(id : String)"></endpoint>
<h4 class="signature_head">Assets.image</h4><a class="signature-arity" href="#Assets.image" title="Permanent link">1</a><signature id="Assets.image">

```lx
Assets.image(id : String) : Image
```
</signature>

> Return a loaded image by id.
> 
>   ```js
>   var image = Assets.image("image/player")
>   Log.print("width: %(Image.get_width(image))")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="bytes(id : String)"></endpoint>
<h4 class="signature_head">Assets.bytes</h4><a class="signature-arity" href="#Assets.bytes" title="Permanent link">1</a><signature id="Assets.bytes">

```lx
Assets.bytes(id : String) : String
```
</signature>

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
<h4 class="signature_head">Assets.material</h4><a class="signature-arity" href="#Assets.material" title="Permanent link">1</a><signature id="Assets.material">

```lx
Assets.material(id : String) : Material
```
</signature>

> Returns a loaded material by id.
> 
>   ```js
>   var material = Assets.material("material/player")
>   Sprite.set_material(player, material)
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="atlas(id : String)"></endpoint>
<h4 class="signature_head">Assets.atlas</h4><a class="signature-arity" href="#Assets.atlas" title="Permanent link">1</a><signature id="Assets.atlas">

```lx
Assets.atlas(id : String) : Atlas
```
</signature>

> Returns a loaded atlas by id.
> 
>   ```js
>   var atlas = Assets.atlas("atlas/example")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="lx(id : String)"></endpoint>
<h4 class="signature_head">Assets.lx</h4><a class="signature-arity" href="#Assets.lx" title="Permanent link">1</a><signature id="Assets.lx">

```lx
Assets.lx(id : String) : Any
```
</signature>

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
<h4 class="signature_head">Assets.has_shader_library</h4><a class="signature-arity" href="#Assets.has_shader_library" title="Permanent link">1</a><signature id="Assets.has_shader_library">

```lx
Assets.has_shader_library(id : String) : Bool
```
</signature>

> Returns true if a shader library with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_shader_library("assets/shaders")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_image(id : String)"></endpoint>
<h4 class="signature_head">Assets.has_image</h4><a class="signature-arity" href="#Assets.has_image" title="Permanent link">1</a><signature id="Assets.has_image">

```lx
Assets.has_image(id : String) : Bool
```
</signature>

> Returns true if an image with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_image("image/player")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_material_basis(id : String)"></endpoint>
<h4 class="signature_head">Assets.has_material_basis</h4><a class="signature-arity" href="#Assets.has_material_basis" title="Permanent link">1</a><signature id="Assets.has_material_basis">

```lx
Assets.has_material_basis(id : String) : Bool
```
</signature>

> Returns true if a material basis with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_material_basis("basis/example")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_material(id : String)"></endpoint>
<h4 class="signature_head">Assets.has_material</h4><a class="signature-arity" href="#Assets.has_material" title="Permanent link">1</a><signature id="Assets.has_material">

```lx
Assets.has_material(id : String) : Bool
```
</signature>

> Returns true if a material with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_material("material/player")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_bytes(id : String)"></endpoint>
<h4 class="signature_head">Assets.has_bytes</h4><a class="signature-arity" href="#Assets.has_bytes" title="Permanent link">1</a><signature id="Assets.has_bytes">

```lx
Assets.has_bytes(id : String) : Bool
```
</signature>

> Returns true if a bytes asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_bytes("data/hello.txt")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_settings(id : String)"></endpoint>
<h4 class="signature_head">Assets.has_settings</h4><a class="signature-arity" href="#Assets.has_settings" title="Permanent link">1</a><signature id="Assets.has_settings">

```lx
Assets.has_settings(id : String) : Bool
```
</signature>

> Returns true if a settings asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_settings("settings/area1")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_atlas(id : String)"></endpoint>
<h4 class="signature_head">Assets.has_atlas</h4><a class="signature-arity" href="#Assets.has_atlas" title="Permanent link">1</a><signature id="Assets.has_atlas">

```lx
Assets.has_atlas(id : String) : Bool
```
</signature>

> Returns true if an atlas asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_atlas("atlas/example")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_input(id : String)"></endpoint>
<h4 class="signature_head">Assets.has_input</h4><a class="signature-arity" href="#Assets.has_input" title="Permanent link">1</a><signature id="Assets.has_input">

```lx
Assets.has_input(id : String) : Bool
```
</signature>

> Returns true if an input asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_input("input/player")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="has_ui(id : String)"></endpoint>
<h4 class="signature_head">Assets.has_ui</h4><a class="signature-arity" href="#Assets.has_ui" title="Permanent link">1</a><signature id="Assets.has_ui">

```lx
Assets.has_ui(id : String) : Bool
```
</signature>

> Returns true if a ui asset with this id is loaded, or false otherwise.
> 
>   ```js
>   var exists = Assets.has_ui("ui/menu")
>   ```   

<endpoint module="luxe: assets" class="Assets" signature="unload_input(id : String)"></endpoint>
<h4 class="signature_head">Assets.unload_input</h4><a class="signature-arity" href="#Assets.unload_input" title="Permanent link">1</a><signature id="Assets.unload_input">

```lx
Assets.unload_input(id : String) : None
```
</signature>

> Unload the input asset, which undefines any nodes or events   

<endpoint module="luxe: assets" class="Assets" signature="load_input(id : String)"></endpoint>
<h4 class="signature_head">Assets.load_input</h4><a class="signature-arity" href="#Assets.load_input" title="Permanent link">1</a><signature id="Assets.load_input">

```lx
Assets.load_input(id : String) : None
```
</signature>

> Load an input asset, which defines any nodes or events within it   


### Strings
`import "luxe: assets" for Strings{:lx}`
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

- [add](#Strings.add)(**value**: `String{:lx}`)
- [get](#Strings.get)(**key**: `Num{:lx}`)


---

<endpoint module="luxe: assets" class="Strings" signature="add(value : String)"></endpoint>
<h4 class="signature_head">Strings.add</h4><a class="signature-arity" href="#Strings.add" title="Permanent link">1</a><signature id="Strings.add">

```lx
Strings.add(value : String) : Num
```
</signature>

> Adds a string to the `Strings` service and returns the key.
> 
>   ```js
>   Log.print(Strings.add("hello")) //prints 1335831723
>   ```   

<endpoint module="luxe: assets" class="Strings" signature="get(key : Num)"></endpoint>
<h4 class="signature_head">Strings.get</h4><a class="signature-arity" href="#Strings.get" title="Permanent link">1</a><signature id="Strings.get">

```lx
Strings.get(key : Num) : String
```
</signature>

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

