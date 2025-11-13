---
title: "luxe: asset/type"
description: API version 2025.11.1
slug: "v/2025.11.1/asset/type"
---
- [AssetArtifact](#assetartifact)   
- [AssetContext](#assetcontext)   
- [AssetID](#assetid)   
- [AssetType](#assettype)   
- [AssetTypeID](#assettypeid)   

---


## AssetArtifact
```lx
import "luxe: asset/type" for AssetArtifact
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="id"></endpoint>
### AssetArtifact.id
```lx
AssetArtifact.id : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="type"></endpoint>
### AssetArtifact.type
```lx
AssetArtifact.type : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="path"></endpoint>
### AssetArtifact.path
```lx
AssetArtifact.path : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="new(type : String, id : String, path : String)"></endpoint>
### AssetArtifact.new(...)
```lx
AssetArtifact.new(type : String, id : String, path : String) : AssetArtifact
```
> no docs found   


## AssetContext
```lx
import "luxe: asset/type" for AssetContext
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetContext" signature="id"></endpoint>
### AssetContext.id
```lx
AssetContext.id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="db"></endpoint>
### AssetContext.db
```lx
AssetContext.db : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="artifacts"></endpoint>
### AssetContext.artifacts
```lx
AssetContext.artifacts : Map
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="ast_for_asset"></endpoint>
### AssetContext.ast_for_asset
```lx
AssetContext.ast_for_asset : Map
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="errors"></endpoint>
### AssetContext.errors
```lx
AssetContext.errors : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="error(info : String)"></endpoint>
### AssetContext.error(.)
```lx
AssetContext.error(info : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="artifacts_for(type_id : String)"></endpoint>
### AssetContext.artifacts_for(.)
```lx
AssetContext.artifacts_for(type_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="ast_for(asset : AssetID)"></endpoint>
### AssetContext.ast_for(.)
```lx
AssetContext.ast_for(asset : AssetID) : Result
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_meta(ast : Module, tag : String, value : String)"></endpoint>
### AssetContext.find_class_with_meta(...)
```lx
AssetContext.find_class_with_meta(ast : Module, tag : String, value : String) : ClassStmt
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_meta(ast : Module, tag : String)"></endpoint>
### AssetContext.find_class_with_meta(..)
```lx
AssetContext.find_class_with_meta(ast : Module, tag : String) : ClassStmt
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_name(ast : Module, name : String)"></endpoint>
### AssetContext.find_class_with_name(..)
```lx
AssetContext.find_class_with_name(ast : Module, name : String) : ClassStmt
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_block_def_for(asset : AssetID, block_tag : String, from : String)"></endpoint>
### AssetContext.emit_block_def_for(...)
```lx
AssetContext.emit_block_def_for(asset : AssetID, block_tag : String, from : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_block_def_for(asset : AssetID, block_type_id : String, block_tag : String, from : String)"></endpoint>
### AssetContext.emit_block_def_for(....)
```lx
AssetContext.emit_block_def_for(asset : AssetID, block_type_id : String, block_tag : String, from : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="tagged(tag : String)"></endpoint>
### AssetContext.tagged(.)
```lx
AssetContext.tagged(tag : String) : Any
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="tag(tag : String, value : Any)"></endpoint>
### AssetContext.tag(..)
```lx
AssetContext.tag(tag : String, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="TYPE"></endpoint>
### AssetContext.TYPE
```lx
AssetContext.TYPE : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="DEV"></endpoint>
### AssetContext.DEV
```lx
AssetContext.DEV : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="RELEASE"></endpoint>
### AssetContext.RELEASE
```lx
AssetContext.RELEASE : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="new(id : String, db : Any, artifact_root : String)"></endpoint>
### AssetContext.new(...)
```lx
AssetContext.new(id : String, db : Any, artifact_root : String) : AssetContext
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="set_modified(type : String, modified : List)"></endpoint>
### AssetContext.set_modified(..)
```lx
AssetContext.set_modified(type : String, modified : List) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="get_modified(type : String)"></endpoint>
### AssetContext.get_modified(.)
```lx
AssetContext.get_modified(type : String) : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="get_modified()"></endpoint>
### AssetContext.get_modified(.)
```lx
AssetContext.get_modified() : Map
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="skip(id : String)"></endpoint>
### AssetContext.skip(.)
```lx
AssetContext.skip(id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="skipped(id : String)"></endpoint>
### AssetContext.skipped(.)
```lx
AssetContext.skipped(id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_path(id : String)"></endpoint>
### AssetContext.emit_path(.)
```lx
AssetContext.emit_path(id : String) : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_path(id : String, extra : String)"></endpoint>
### AssetContext.emit_path(..)
```lx
AssetContext.emit_path(id : String, extra : String) : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit(type_id : String, artifact_id : String, artifact_path : String)"></endpoint>
### AssetContext.emit(...)
```lx
AssetContext.emit(type_id : String, artifact_id : String, artifact_path : String) : unknown
```
> no docs found   


## AssetID
```lx
import "luxe: asset/type" for AssetID
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetID" signature="type_id"></endpoint>
### AssetID.type_id
```lx
AssetID.type_id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="id"></endpoint>
### AssetID.id
```lx
AssetID.id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="asset"></endpoint>
### AssetID.asset
```lx
AssetID.asset : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="path"></endpoint>
### AssetID.path
```lx
AssetID.path : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="ext"></endpoint>
### AssetID.ext
```lx
AssetID.ext : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="subtype"></endpoint>
### AssetID.subtype
```lx
AssetID.subtype : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="prefix"></endpoint>
### AssetID.prefix
```lx
AssetID.prefix : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="root"></endpoint>
### AssetID.root
```lx
AssetID.root : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="meta_uuid"></endpoint>
### AssetID.meta_uuid
```lx
AssetID.meta_uuid : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="new(type_id : String, map : Map)"></endpoint>
### AssetID.new(..)
```lx
AssetID.new(type_id : String, map : Map) : AssetID
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="from_id(type_id : String, asset_id : String)"></endpoint>
### AssetID.from_id(..)
```lx
AssetID.from_id(type_id : String, asset_id : String) : AssetID
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="from_id(db : AssetDB, type_id : String, asset_id : String)"></endpoint>
### AssetID.from_id(...)
```lx
AssetID.from_id(db : AssetDB, type_id : String, asset_id : String) : AssetID
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="refresh()"></endpoint>
### AssetID.refresh(.)
```lx
AssetID.refresh() : unknown
```
> no docs found   


## AssetType
```lx
import "luxe: asset/type" for AssetType
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetType" signature="type_id"></endpoint>
### AssetType.type_id
```lx
AssetType.type_id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="version_id"></endpoint>
### AssetType.version_id
```lx
AssetType.version_id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="ext"></endpoint>
### AssetType.ext
```lx
AssetType.ext : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="subtype"></endpoint>
### AssetType.subtype
```lx
AssetType.subtype : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="ctx"></endpoint>
### AssetType.ctx
```lx
AssetType.ctx : AssetContext
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_loader"></endpoint>
### AssetType.is_loader
```lx
AssetType.is_loader : Bool
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_data"></endpoint>
### AssetType.is_data
```lx
AssetType.is_data : Bool
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_handle"></endpoint>
### AssetType.is_handle
```lx
AssetType.is_handle : Bool
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="version"></endpoint>
### AssetType.version
```lx
AssetType.version : Num
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="load_before"></endpoint>
### AssetType.load_before
```lx
AssetType.load_before : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="load_after"></endpoint>
### AssetType.load_after
```lx
AssetType.load_after : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="before"></endpoint>
### AssetType.before
```lx
AssetType.before : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="after"></endpoint>
### AssetType.after
```lx
AssetType.after : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre_early"></endpoint>
### AssetType.pre_early
```lx
AssetType.pre_early : Num
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre_late"></endpoint>
### AssetType.pre_late
```lx
AssetType.pre_late : Num
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="new(type_id : String, ctx : AssetContext)"></endpoint>
### AssetType.new(..)
```lx
AssetType.new(type_id : String, ctx : AssetContext) : AssetType
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="remap(asset : AssetID, new_id : String)"></endpoint>
### AssetType.remap(..)
```lx
AssetType.remap(asset : AssetID, new_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="get_remap(map : Map)"></endpoint>
### AssetType.get_remap(.)
```lx
AssetType.get_remap(map : Map) : Map
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="modify_affected(asset : AssetID)"></endpoint>
### AssetType.modify_affected(.)
```lx
AssetType.modify_affected(asset : AssetID) : unknown
```
> modify all assets that refer to this one   

<endpoint module="luxe: asset/type" class="AssetType" signature="modify(asset : AssetID)"></endpoint>
### AssetType.modify(.)
```lx
AssetType.modify(asset : AssetID) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="unmodify(asset : AssetID)"></endpoint>
### AssetType.unmodify(.)
```lx
AssetType.unmodify(asset : AssetID) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="emit_path(asset : AssetID)"></endpoint>
### AssetType.emit_path(.)
```lx
AssetType.emit_path(asset : AssetID) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="skip(asset : AssetID)"></endpoint>
### AssetType.skip(.)
```lx
AssetType.skip(asset : AssetID) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="get_data(id : String)"></endpoint>
### AssetType.get_data(.)
```lx
AssetType.get_data(id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="set_handle(id : String, handle : Num)"></endpoint>
### AssetType.set_handle(..)
```lx
AssetType.set_handle(id : String, handle : Num) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="init(assets : List)"></endpoint>
### AssetType.init(.)
```lx
AssetType.init(assets : List) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre(assets : List)"></endpoint>
### AssetType.pre(.)
```lx
AssetType.pre(assets : List) : None
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="process(assets : List, each : Fn)"></endpoint>
### AssetType.process(..)
```lx
AssetType.process(assets : List, each : Fn) : None
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="loader(assets : List, artifacts : List)"></endpoint>
### AssetType.loader(..)
```lx
AssetType.loader(assets : List, artifacts : List) : None
```
> no docs found   


## AssetTypeID
```lx
import "luxe: asset/type" for AssetTypeID
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block"></endpoint>
### AssetTypeID.block
```lx
AssetTypeID.block : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block=(v : Any)"></endpoint>
### AssetTypeID.block
```lx
AssetTypeID.block=(v : Any) : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block_class"></endpoint>
### AssetTypeID.block_class
```lx
AssetTypeID.block_class : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block_class=(v : Any)"></endpoint>
### AssetTypeID.block_class
```lx
AssetTypeID.block_class=(v : Any) : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="loader"></endpoint>
### AssetTypeID.loader
```lx
AssetTypeID.loader : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="loader=(v : Any)"></endpoint>
### AssetTypeID.loader
```lx
AssetTypeID.loader=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="handler"></endpoint>
### AssetTypeID.handler
```lx
AssetTypeID.handler : AssetType
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="handler=(v : Any)"></endpoint>
### AssetTypeID.handler
```lx
AssetTypeID.handler=(v : Any) : AssetType
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="new(map : Map)"></endpoint>
### AssetTypeID.new(.)
```lx
AssetTypeID.new(map : Map) : AssetTypeID
```
> no docs found   

