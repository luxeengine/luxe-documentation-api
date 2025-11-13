---
title: "luxe: asset/type"
description: API version 2025.11.1
---
## `luxe: asset/type{:lx}` module

- [AssetArtifact](#assetartifact)   
- [AssetContext](#assetcontext)   
- [AssetID](#assetid)   
- [AssetType](#assettype)   
- [AssetTypeID](#assettypeid)   

---


### AssetArtifact
`import "luxe: asset/type" for AssetArtifact{:lx}`
> no docs found

- [id](#AssetArtifact.id)
- [type](#AssetArtifact.type)
- [path](#AssetArtifact.path)
- [new](#AssetArtifact.new+3)(**type**: `String{:lx}`, **id**: `String{:lx}`, **path**: `String{:lx}`)


---

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="id"></endpoint>
<h4 class="signature_head">AssetArtifact.id</h4><a class="signature-arity" href="#AssetArtifact.id" title="Permanent link">1</a><signature id="AssetArtifact.id">

```lx
AssetArtifact.id : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="type"></endpoint>
<h4 class="signature_head">AssetArtifact.type</h4><a class="signature-arity" href="#AssetArtifact.type" title="Permanent link">1</a><signature id="AssetArtifact.type">

```lx
AssetArtifact.type : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="path"></endpoint>
<h4 class="signature_head">AssetArtifact.path</h4><a class="signature-arity" href="#AssetArtifact.path" title="Permanent link">1</a><signature id="AssetArtifact.path">

```lx
AssetArtifact.path : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="new(type : String, id : String, path : String)"></endpoint>
<h4 class="signature_head">AssetArtifact.new</h4><a class="signature-arity" href="#AssetArtifact.new+3" title="Permanent link">3</a><signature id="AssetArtifact.new+3">

```lx
AssetArtifact.new(type : String, id : String, path : String) : AssetArtifact
```
</signature>

> no docs found   


### AssetContext
`import "luxe: asset/type" for AssetContext{:lx}`
> no docs found

- [id](#AssetContext.id)
- [db](#AssetContext.db)
- [artifacts](#AssetContext.artifacts)
- [ast_for_asset](#AssetContext.ast_for_asset)
- [errors](#AssetContext.errors)
- [error](#AssetContext.error)(**info**: `String{:lx}`)
- [artifacts_for](#AssetContext.artifacts_for)(**type_id**: `String{:lx}`)
- [ast_for](#AssetContext.ast_for)(**asset**: `AssetID{:lx}`)
- [find_class_with_meta](#AssetContext.find_class_with_meta+3)(**ast**: `Module{:lx}`, **tag**: `String{:lx}`, **value**: `String{:lx}`)
- [find_class_with_meta](#AssetContext.find_class_with_meta+2)(**ast**: `Module{:lx}`, **tag**: `String{:lx}`)
- [find_class_with_name](#AssetContext.find_class_with_name+2)(**ast**: `Module{:lx}`, **name**: `String{:lx}`)
- [emit_block_def_for](#AssetContext.emit_block_def_for+3)(**asset**: `AssetID{:lx}`, **block_tag**: `String{:lx}`, **from**: `String{:lx}`)
- [emit_block_def_for](#AssetContext.emit_block_def_for+4)(**asset**: `AssetID{:lx}`, **block_type_id**: `String{:lx}`, **block_tag**: `String{:lx}`, **from**: `String{:lx}`)
- [tagged](#AssetContext.tagged)(**tag**: `String{:lx}`)
- [tag](#AssetContext.tag+2)(**tag**: `String{:lx}`, **value**: `Any{:lx}`)
- [TYPE](#AssetContext.TYPE)
- [DEV](#AssetContext.DEV)
- [RELEASE](#AssetContext.RELEASE)
- [new](#AssetContext.new+3)(**id**: `String{:lx}`, **db**: `Any{:lx}`, **artifact_root**: `String{:lx}`)
- [set_modified](#AssetContext.set_modified+2)(**type**: `String{:lx}`, **modified**: `List{:lx}`)
- [get_modified](#AssetContext.get_modified)(**type**: `String{:lx}`)
- [get_modified](#AssetContext.get_modified)()
- [skip](#AssetContext.skip)(**id**: `String{:lx}`)
- [skipped](#AssetContext.skipped)(**id**: `String{:lx}`)
- [emit_path](#AssetContext.emit_path)(**id**: `String{:lx}`)
- [emit_path](#AssetContext.emit_path+2)(**id**: `String{:lx}`, **extra**: `String{:lx}`)
- [emit](#AssetContext.emit+3)(**type_id**: `String{:lx}`, **artifact_id**: `String{:lx}`, **artifact_path**: `String{:lx}`)


---

<endpoint module="luxe: asset/type" class="AssetContext" signature="id"></endpoint>
<h4 class="signature_head">AssetContext.id</h4><a class="signature-arity" href="#AssetContext.id" title="Permanent link">1</a><signature id="AssetContext.id">

```lx
AssetContext.id : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="db"></endpoint>
<h4 class="signature_head">AssetContext.db</h4><a class="signature-arity" href="#AssetContext.db" title="Permanent link">1</a><signature id="AssetContext.db">

```lx
AssetContext.db : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="artifacts"></endpoint>
<h4 class="signature_head">AssetContext.artifacts</h4><a class="signature-arity" href="#AssetContext.artifacts" title="Permanent link">1</a><signature id="AssetContext.artifacts">

```lx
AssetContext.artifacts : Map
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="ast_for_asset"></endpoint>
<h4 class="signature_head">AssetContext.ast_for_asset</h4><a class="signature-arity" href="#AssetContext.ast_for_asset" title="Permanent link">1</a><signature id="AssetContext.ast_for_asset">

```lx
AssetContext.ast_for_asset : Map
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="errors"></endpoint>
<h4 class="signature_head">AssetContext.errors</h4><a class="signature-arity" href="#AssetContext.errors" title="Permanent link">1</a><signature id="AssetContext.errors">

```lx
AssetContext.errors : List
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="error(info : String)"></endpoint>
<h4 class="signature_head">AssetContext.error</h4><a class="signature-arity" href="#AssetContext.error" title="Permanent link">1</a><signature id="AssetContext.error">

```lx
AssetContext.error(info : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="artifacts_for(type_id : String)"></endpoint>
<h4 class="signature_head">AssetContext.artifacts_for</h4><a class="signature-arity" href="#AssetContext.artifacts_for" title="Permanent link">1</a><signature id="AssetContext.artifacts_for">

```lx
AssetContext.artifacts_for(type_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="ast_for(asset : AssetID)"></endpoint>
<h4 class="signature_head">AssetContext.ast_for</h4><a class="signature-arity" href="#AssetContext.ast_for" title="Permanent link">1</a><signature id="AssetContext.ast_for">

```lx
AssetContext.ast_for(asset : AssetID) : Result
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_meta(ast : Module, tag : String, value : String)"></endpoint>
<h4 class="signature_head">AssetContext.find_class_with_meta</h4><a class="signature-arity" href="#AssetContext.find_class_with_meta+3" title="Permanent link">3</a><signature id="AssetContext.find_class_with_meta+3">

```lx
AssetContext.find_class_with_meta(ast : Module, tag : String, value : String) : ClassStmt
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_meta(ast : Module, tag : String)"></endpoint>
<h4 class="signature_head">AssetContext.find_class_with_meta</h4><a class="signature-arity" href="#AssetContext.find_class_with_meta+2" title="Permanent link">2</a><signature id="AssetContext.find_class_with_meta+2">

```lx
AssetContext.find_class_with_meta(ast : Module, tag : String) : ClassStmt
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_name(ast : Module, name : String)"></endpoint>
<h4 class="signature_head">AssetContext.find_class_with_name</h4><a class="signature-arity" href="#AssetContext.find_class_with_name+2" title="Permanent link">2</a><signature id="AssetContext.find_class_with_name+2">

```lx
AssetContext.find_class_with_name(ast : Module, name : String) : ClassStmt
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_block_def_for(asset : AssetID, block_tag : String, from : String)"></endpoint>
<h4 class="signature_head">AssetContext.emit_block_def_for</h4><a class="signature-arity" href="#AssetContext.emit_block_def_for+3" title="Permanent link">3</a><signature id="AssetContext.emit_block_def_for+3">

```lx
AssetContext.emit_block_def_for(asset : AssetID, block_tag : String, from : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_block_def_for(asset : AssetID, block_type_id : String, block_tag : String, from : String)"></endpoint>
<h4 class="signature_head">AssetContext.emit_block_def_for</h4><a class="signature-arity" href="#AssetContext.emit_block_def_for+4" title="Permanent link">4</a><signature id="AssetContext.emit_block_def_for+4">

```lx
AssetContext.emit_block_def_for(asset : AssetID, block_type_id : String, block_tag : String, from : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="tagged(tag : String)"></endpoint>
<h4 class="signature_head">AssetContext.tagged</h4><a class="signature-arity" href="#AssetContext.tagged" title="Permanent link">1</a><signature id="AssetContext.tagged">

```lx
AssetContext.tagged(tag : String) : Any
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="tag(tag : String, value : Any)"></endpoint>
<h4 class="signature_head">AssetContext.tag</h4><a class="signature-arity" href="#AssetContext.tag+2" title="Permanent link">2</a><signature id="AssetContext.tag+2">

```lx
AssetContext.tag(tag : String, value : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="TYPE"></endpoint>
<h4 class="signature_head">AssetContext.TYPE</h4><a class="signature-arity" href="#AssetContext.TYPE" title="Permanent link">1</a><signature id="AssetContext.TYPE">

```lx
AssetContext.TYPE : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="DEV"></endpoint>
<h4 class="signature_head">AssetContext.DEV</h4><a class="signature-arity" href="#AssetContext.DEV" title="Permanent link">1</a><signature id="AssetContext.DEV">

```lx
AssetContext.DEV : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="RELEASE"></endpoint>
<h4 class="signature_head">AssetContext.RELEASE</h4><a class="signature-arity" href="#AssetContext.RELEASE" title="Permanent link">1</a><signature id="AssetContext.RELEASE">

```lx
AssetContext.RELEASE : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="new(id : String, db : Any, artifact_root : String)"></endpoint>
<h4 class="signature_head">AssetContext.new</h4><a class="signature-arity" href="#AssetContext.new+3" title="Permanent link">3</a><signature id="AssetContext.new+3">

```lx
AssetContext.new(id : String, db : Any, artifact_root : String) : AssetContext
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="set_modified(type : String, modified : List)"></endpoint>
<h4 class="signature_head">AssetContext.set_modified</h4><a class="signature-arity" href="#AssetContext.set_modified+2" title="Permanent link">2</a><signature id="AssetContext.set_modified+2">

```lx
AssetContext.set_modified(type : String, modified : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="get_modified(type : String)"></endpoint>
<h4 class="signature_head">AssetContext.get_modified</h4><a class="signature-arity" href="#AssetContext.get_modified" title="Permanent link">1</a><signature id="AssetContext.get_modified">

```lx
AssetContext.get_modified(type : String) : List
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="get_modified()"></endpoint>
<h4 class="signature_head">AssetContext.get_modified</h4><a class="signature-arity" href="#AssetContext.get_modified" title="Permanent link">1</a><signature id="AssetContext.get_modified">

```lx
AssetContext.get_modified() : Map
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="skip(id : String)"></endpoint>
<h4 class="signature_head">AssetContext.skip</h4><a class="signature-arity" href="#AssetContext.skip" title="Permanent link">1</a><signature id="AssetContext.skip">

```lx
AssetContext.skip(id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="skipped(id : String)"></endpoint>
<h4 class="signature_head">AssetContext.skipped</h4><a class="signature-arity" href="#AssetContext.skipped" title="Permanent link">1</a><signature id="AssetContext.skipped">

```lx
AssetContext.skipped(id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_path(id : String)"></endpoint>
<h4 class="signature_head">AssetContext.emit_path</h4><a class="signature-arity" href="#AssetContext.emit_path" title="Permanent link">1</a><signature id="AssetContext.emit_path">

```lx
AssetContext.emit_path(id : String) : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_path(id : String, extra : String)"></endpoint>
<h4 class="signature_head">AssetContext.emit_path</h4><a class="signature-arity" href="#AssetContext.emit_path+2" title="Permanent link">2</a><signature id="AssetContext.emit_path+2">

```lx
AssetContext.emit_path(id : String, extra : String) : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit(type_id : String, artifact_id : String, artifact_path : String)"></endpoint>
<h4 class="signature_head">AssetContext.emit</h4><a class="signature-arity" href="#AssetContext.emit+3" title="Permanent link">3</a><signature id="AssetContext.emit+3">

```lx
AssetContext.emit(type_id : String, artifact_id : String, artifact_path : String) : unknown
```
</signature>

> no docs found   


### AssetID
`import "luxe: asset/type" for AssetID{:lx}`
> no docs found

- [type_id](#AssetID.type_id)
- [id](#AssetID.id)
- [asset](#AssetID.asset)
- [path](#AssetID.path)
- [ext](#AssetID.ext)
- [subtype](#AssetID.subtype)
- [prefix](#AssetID.prefix)
- [root](#AssetID.root)
- [meta_uuid](#AssetID.meta_uuid)
- [new](#AssetID.new+2)(**type_id**: `String{:lx}`, **map**: `Map{:lx}`)
- [from_id](#AssetID.from_id+2)(**type_id**: `String{:lx}`, **asset_id**: `String{:lx}`)
- [from_id](#AssetID.from_id+3)(**db**: `AssetDB{:lx}`, **type_id**: `String{:lx}`, **asset_id**: `String{:lx}`)
- [refresh](#AssetID.refresh)()


---

<endpoint module="luxe: asset/type" class="AssetID" signature="type_id"></endpoint>
<h4 class="signature_head">AssetID.type_id</h4><a class="signature-arity" href="#AssetID.type_id" title="Permanent link">1</a><signature id="AssetID.type_id">

```lx
AssetID.type_id : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="id"></endpoint>
<h4 class="signature_head">AssetID.id</h4><a class="signature-arity" href="#AssetID.id" title="Permanent link">1</a><signature id="AssetID.id">

```lx
AssetID.id : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="asset"></endpoint>
<h4 class="signature_head">AssetID.asset</h4><a class="signature-arity" href="#AssetID.asset" title="Permanent link">1</a><signature id="AssetID.asset">

```lx
AssetID.asset : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="path"></endpoint>
<h4 class="signature_head">AssetID.path</h4><a class="signature-arity" href="#AssetID.path" title="Permanent link">1</a><signature id="AssetID.path">

```lx
AssetID.path : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="ext"></endpoint>
<h4 class="signature_head">AssetID.ext</h4><a class="signature-arity" href="#AssetID.ext" title="Permanent link">1</a><signature id="AssetID.ext">

```lx
AssetID.ext : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="subtype"></endpoint>
<h4 class="signature_head">AssetID.subtype</h4><a class="signature-arity" href="#AssetID.subtype" title="Permanent link">1</a><signature id="AssetID.subtype">

```lx
AssetID.subtype : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="prefix"></endpoint>
<h4 class="signature_head">AssetID.prefix</h4><a class="signature-arity" href="#AssetID.prefix" title="Permanent link">1</a><signature id="AssetID.prefix">

```lx
AssetID.prefix : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="root"></endpoint>
<h4 class="signature_head">AssetID.root</h4><a class="signature-arity" href="#AssetID.root" title="Permanent link">1</a><signature id="AssetID.root">

```lx
AssetID.root : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="meta_uuid"></endpoint>
<h4 class="signature_head">AssetID.meta_uuid</h4><a class="signature-arity" href="#AssetID.meta_uuid" title="Permanent link">1</a><signature id="AssetID.meta_uuid">

```lx
AssetID.meta_uuid : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="new(type_id : String, map : Map)"></endpoint>
<h4 class="signature_head">AssetID.new</h4><a class="signature-arity" href="#AssetID.new+2" title="Permanent link">2</a><signature id="AssetID.new+2">

```lx
AssetID.new(type_id : String, map : Map) : AssetID
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="from_id(type_id : String, asset_id : String)"></endpoint>
<h4 class="signature_head">AssetID.from_id</h4><a class="signature-arity" href="#AssetID.from_id+2" title="Permanent link">2</a><signature id="AssetID.from_id+2">

```lx
AssetID.from_id(type_id : String, asset_id : String) : AssetID
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="from_id(db : AssetDB, type_id : String, asset_id : String)"></endpoint>
<h4 class="signature_head">AssetID.from_id</h4><a class="signature-arity" href="#AssetID.from_id+3" title="Permanent link">3</a><signature id="AssetID.from_id+3">

```lx
AssetID.from_id(db : AssetDB, type_id : String, asset_id : String) : AssetID
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="refresh()"></endpoint>
<h4 class="signature_head">AssetID.refresh</h4><a class="signature-arity" href="#AssetID.refresh" title="Permanent link">1</a><signature id="AssetID.refresh">

```lx
AssetID.refresh() : unknown
```
</signature>

> no docs found   


### AssetType
`import "luxe: asset/type" for AssetType{:lx}`
> no docs found

- [type_id](#AssetType.type_id)
- [version_id](#AssetType.version_id)
- [ext](#AssetType.ext)
- [subtype](#AssetType.subtype)
- [ctx](#AssetType.ctx)
- [is_loader](#AssetType.is_loader)
- [is_data](#AssetType.is_data)
- [is_handle](#AssetType.is_handle)
- [version](#AssetType.version)
- [load_before](#AssetType.load_before)
- [load_after](#AssetType.load_after)
- [before](#AssetType.before)
- [after](#AssetType.after)
- [pre_early](#AssetType.pre_early)
- [pre_late](#AssetType.pre_late)
- [new](#AssetType.new+2)(**type_id**: `String{:lx}`, **ctx**: `AssetContext{:lx}`)
- [remap](#AssetType.remap+2)(**asset**: `AssetID{:lx}`, **new_id**: `String{:lx}`)
- [get_remap](#AssetType.get_remap)(**map**: `Map{:lx}`)
- [modify_affected](#AssetType.modify_affected)(**asset**: `AssetID{:lx}`)
- [modify](#AssetType.modify)(**asset**: `AssetID{:lx}`)
- [unmodify](#AssetType.unmodify)(**asset**: `AssetID{:lx}`)
- [emit_path](#AssetType.emit_path)(**asset**: `AssetID{:lx}`)
- [skip](#AssetType.skip)(**asset**: `AssetID{:lx}`)
- [get_data](#AssetType.get_data)(**id**: `String{:lx}`)
- [set_handle](#AssetType.set_handle+2)(**id**: `String{:lx}`, **handle**: `Num{:lx}`)
- [init](#AssetType.init)(**assets**: `List{:lx}`)
- [pre](#AssetType.pre)(**assets**: `List{:lx}`)
- [process](#AssetType.process+2)(**assets**: `List{:lx}`, **each**: `Fn{:lx}`)
- [loader](#AssetType.loader+2)(**assets**: `List{:lx}`, **artifacts**: `List{:lx}`)


---

<endpoint module="luxe: asset/type" class="AssetType" signature="type_id"></endpoint>
<h4 class="signature_head">AssetType.type_id</h4><a class="signature-arity" href="#AssetType.type_id" title="Permanent link">1</a><signature id="AssetType.type_id">

```lx
AssetType.type_id : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="version_id"></endpoint>
<h4 class="signature_head">AssetType.version_id</h4><a class="signature-arity" href="#AssetType.version_id" title="Permanent link">1</a><signature id="AssetType.version_id">

```lx
AssetType.version_id : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="ext"></endpoint>
<h4 class="signature_head">AssetType.ext</h4><a class="signature-arity" href="#AssetType.ext" title="Permanent link">1</a><signature id="AssetType.ext">

```lx
AssetType.ext : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="subtype"></endpoint>
<h4 class="signature_head">AssetType.subtype</h4><a class="signature-arity" href="#AssetType.subtype" title="Permanent link">1</a><signature id="AssetType.subtype">

```lx
AssetType.subtype : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="ctx"></endpoint>
<h4 class="signature_head">AssetType.ctx</h4><a class="signature-arity" href="#AssetType.ctx" title="Permanent link">1</a><signature id="AssetType.ctx">

```lx
AssetType.ctx : AssetContext
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_loader"></endpoint>
<h4 class="signature_head">AssetType.is_loader</h4><a class="signature-arity" href="#AssetType.is_loader" title="Permanent link">1</a><signature id="AssetType.is_loader">

```lx
AssetType.is_loader : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_data"></endpoint>
<h4 class="signature_head">AssetType.is_data</h4><a class="signature-arity" href="#AssetType.is_data" title="Permanent link">1</a><signature id="AssetType.is_data">

```lx
AssetType.is_data : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_handle"></endpoint>
<h4 class="signature_head">AssetType.is_handle</h4><a class="signature-arity" href="#AssetType.is_handle" title="Permanent link">1</a><signature id="AssetType.is_handle">

```lx
AssetType.is_handle : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="version"></endpoint>
<h4 class="signature_head">AssetType.version</h4><a class="signature-arity" href="#AssetType.version" title="Permanent link">1</a><signature id="AssetType.version">

```lx
AssetType.version : Num
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="load_before"></endpoint>
<h4 class="signature_head">AssetType.load_before</h4><a class="signature-arity" href="#AssetType.load_before" title="Permanent link">1</a><signature id="AssetType.load_before">

```lx
AssetType.load_before : List
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="load_after"></endpoint>
<h4 class="signature_head">AssetType.load_after</h4><a class="signature-arity" href="#AssetType.load_after" title="Permanent link">1</a><signature id="AssetType.load_after">

```lx
AssetType.load_after : List
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="before"></endpoint>
<h4 class="signature_head">AssetType.before</h4><a class="signature-arity" href="#AssetType.before" title="Permanent link">1</a><signature id="AssetType.before">

```lx
AssetType.before : List
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="after"></endpoint>
<h4 class="signature_head">AssetType.after</h4><a class="signature-arity" href="#AssetType.after" title="Permanent link">1</a><signature id="AssetType.after">

```lx
AssetType.after : List
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre_early"></endpoint>
<h4 class="signature_head">AssetType.pre_early</h4><a class="signature-arity" href="#AssetType.pre_early" title="Permanent link">1</a><signature id="AssetType.pre_early">

```lx
AssetType.pre_early : Num
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre_late"></endpoint>
<h4 class="signature_head">AssetType.pre_late</h4><a class="signature-arity" href="#AssetType.pre_late" title="Permanent link">1</a><signature id="AssetType.pre_late">

```lx
AssetType.pre_late : Num
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="new(type_id : String, ctx : AssetContext)"></endpoint>
<h4 class="signature_head">AssetType.new</h4><a class="signature-arity" href="#AssetType.new+2" title="Permanent link">2</a><signature id="AssetType.new+2">

```lx
AssetType.new(type_id : String, ctx : AssetContext) : AssetType
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="remap(asset : AssetID, new_id : String)"></endpoint>
<h4 class="signature_head">AssetType.remap</h4><a class="signature-arity" href="#AssetType.remap+2" title="Permanent link">2</a><signature id="AssetType.remap+2">

```lx
AssetType.remap(asset : AssetID, new_id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="get_remap(map : Map)"></endpoint>
<h4 class="signature_head">AssetType.get_remap</h4><a class="signature-arity" href="#AssetType.get_remap" title="Permanent link">1</a><signature id="AssetType.get_remap">

```lx
AssetType.get_remap(map : Map) : Map
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="modify_affected(asset : AssetID)"></endpoint>
<h4 class="signature_head">AssetType.modify_affected</h4><a class="signature-arity" href="#AssetType.modify_affected" title="Permanent link">1</a><signature id="AssetType.modify_affected">

```lx
AssetType.modify_affected(asset : AssetID) : unknown
```
</signature>

> modify all assets that refer to this one   

<endpoint module="luxe: asset/type" class="AssetType" signature="modify(asset : AssetID)"></endpoint>
<h4 class="signature_head">AssetType.modify</h4><a class="signature-arity" href="#AssetType.modify" title="Permanent link">1</a><signature id="AssetType.modify">

```lx
AssetType.modify(asset : AssetID) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="unmodify(asset : AssetID)"></endpoint>
<h4 class="signature_head">AssetType.unmodify</h4><a class="signature-arity" href="#AssetType.unmodify" title="Permanent link">1</a><signature id="AssetType.unmodify">

```lx
AssetType.unmodify(asset : AssetID) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="emit_path(asset : AssetID)"></endpoint>
<h4 class="signature_head">AssetType.emit_path</h4><a class="signature-arity" href="#AssetType.emit_path" title="Permanent link">1</a><signature id="AssetType.emit_path">

```lx
AssetType.emit_path(asset : AssetID) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="skip(asset : AssetID)"></endpoint>
<h4 class="signature_head">AssetType.skip</h4><a class="signature-arity" href="#AssetType.skip" title="Permanent link">1</a><signature id="AssetType.skip">

```lx
AssetType.skip(asset : AssetID) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="get_data(id : String)"></endpoint>
<h4 class="signature_head">AssetType.get_data</h4><a class="signature-arity" href="#AssetType.get_data" title="Permanent link">1</a><signature id="AssetType.get_data">

```lx
AssetType.get_data(id : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="set_handle(id : String, handle : Num)"></endpoint>
<h4 class="signature_head">AssetType.set_handle</h4><a class="signature-arity" href="#AssetType.set_handle+2" title="Permanent link">2</a><signature id="AssetType.set_handle+2">

```lx
AssetType.set_handle(id : String, handle : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="init(assets : List)"></endpoint>
<h4 class="signature_head">AssetType.init</h4><a class="signature-arity" href="#AssetType.init" title="Permanent link">1</a><signature id="AssetType.init">

```lx
AssetType.init(assets : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre(assets : List)"></endpoint>
<h4 class="signature_head">AssetType.pre</h4><a class="signature-arity" href="#AssetType.pre" title="Permanent link">1</a><signature id="AssetType.pre">

```lx
AssetType.pre(assets : List) : None
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="process(assets : List, each : Fn)"></endpoint>
<h4 class="signature_head">AssetType.process</h4><a class="signature-arity" href="#AssetType.process+2" title="Permanent link">2</a><signature id="AssetType.process+2">

```lx
AssetType.process(assets : List, each : Fn) : None
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="loader(assets : List, artifacts : List)"></endpoint>
<h4 class="signature_head">AssetType.loader</h4><a class="signature-arity" href="#AssetType.loader+2" title="Permanent link">2</a><signature id="AssetType.loader+2">

```lx
AssetType.loader(assets : List, artifacts : List) : None
```
</signature>

> no docs found   


### AssetTypeID
`import "luxe: asset/type" for AssetTypeID{:lx}`
> no docs found

- [block](#AssetTypeID.block)
- [block](#AssetTypeID.block=)=(v : Any)
- [block_class](#AssetTypeID.block_class)
- [block_class](#AssetTypeID.block_class=)=(v : Any)
- [loader](#AssetTypeID.loader)
- [loader](#AssetTypeID.loader=)=(v : Any)
- [handler](#AssetTypeID.handler)
- [handler](#AssetTypeID.handler=)=(v : Any)
- [new](#AssetTypeID.new)(**map**: `Map{:lx}`)


---

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block"></endpoint>
<h4 class="signature_head">AssetTypeID.block</h4><a class="signature-arity" href="#AssetTypeID.block" title="Permanent link">1</a><signature id="AssetTypeID.block">

```lx
AssetTypeID.block : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block=(v : Any)"></endpoint>
<h4 class="signature_head">AssetTypeID.block</h4><a class="signature-arity" href="#AssetTypeID.block=" title="Permanent link">1</a><signature id="AssetTypeID.block=">

```lx
AssetTypeID.block=(v : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block_class"></endpoint>
<h4 class="signature_head">AssetTypeID.block_class</h4><a class="signature-arity" href="#AssetTypeID.block_class" title="Permanent link">1</a><signature id="AssetTypeID.block_class">

```lx
AssetTypeID.block_class : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block_class=(v : Any)"></endpoint>
<h4 class="signature_head">AssetTypeID.block_class</h4><a class="signature-arity" href="#AssetTypeID.block_class=" title="Permanent link">1</a><signature id="AssetTypeID.block_class=">

```lx
AssetTypeID.block_class=(v : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="loader"></endpoint>
<h4 class="signature_head">AssetTypeID.loader</h4><a class="signature-arity" href="#AssetTypeID.loader" title="Permanent link">1</a><signature id="AssetTypeID.loader">

```lx
AssetTypeID.loader : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="loader=(v : Any)"></endpoint>
<h4 class="signature_head">AssetTypeID.loader</h4><a class="signature-arity" href="#AssetTypeID.loader=" title="Permanent link">1</a><signature id="AssetTypeID.loader=">

```lx
AssetTypeID.loader=(v : Any) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="handler"></endpoint>
<h4 class="signature_head">AssetTypeID.handler</h4><a class="signature-arity" href="#AssetTypeID.handler" title="Permanent link">1</a><signature id="AssetTypeID.handler">

```lx
AssetTypeID.handler : AssetType
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="handler=(v : Any)"></endpoint>
<h4 class="signature_head">AssetTypeID.handler</h4><a class="signature-arity" href="#AssetTypeID.handler=" title="Permanent link">1</a><signature id="AssetTypeID.handler=">

```lx
AssetTypeID.handler=(v : Any) : AssetType
```
</signature>

> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="new(map : Map)"></endpoint>
<h4 class="signature_head">AssetTypeID.new</h4><a class="signature-arity" href="#AssetTypeID.new" title="Permanent link">1</a><signature id="AssetTypeID.new">

```lx
AssetTypeID.new(map : Map) : AssetTypeID
```
</signature>

> no docs found   

