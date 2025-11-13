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
```wren
import "luxe: asset/type" for AssetArtifact
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="id"></endpoint>
### AssetArtifact.id
```wren
AssetArtifact.id : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="type"></endpoint>
### AssetArtifact.type
```wren
AssetArtifact.type : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="path"></endpoint>
### AssetArtifact.path
```wren
AssetArtifact.path : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetArtifact" signature="new(type : String, id : String, path : String)"></endpoint>
### AssetArtifact.new(...)
```wren
AssetArtifact.new(type : String, id : String, path : String) : AssetArtifact
```
> no docs found   


## AssetContext
```wren
import "luxe: asset/type" for AssetContext
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetContext" signature="id"></endpoint>
### AssetContext.id
```wren
AssetContext.id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="db"></endpoint>
### AssetContext.db
```wren
AssetContext.db : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="artifacts"></endpoint>
### AssetContext.artifacts
```wren
AssetContext.artifacts : Map
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="ast_for_asset"></endpoint>
### AssetContext.ast_for_asset
```wren
AssetContext.ast_for_asset : Map
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="errors"></endpoint>
### AssetContext.errors
```wren
AssetContext.errors : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="error(info : String)"></endpoint>
### AssetContext.error(.)
```wren
AssetContext.error(info : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="artifacts_for(type_id : String)"></endpoint>
### AssetContext.artifacts_for(.)
```wren
AssetContext.artifacts_for(type_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="ast_for(asset : AssetID)"></endpoint>
### AssetContext.ast_for(.)
```wren
AssetContext.ast_for(asset : AssetID) : Result
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_meta(ast : Module, tag : String, value : String)"></endpoint>
### AssetContext.find_class_with_meta(...)
```wren
AssetContext.find_class_with_meta(ast : Module, tag : String, value : String) : ClassStmt
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_meta(ast : Module, tag : String)"></endpoint>
### AssetContext.find_class_with_meta(..)
```wren
AssetContext.find_class_with_meta(ast : Module, tag : String) : ClassStmt
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="find_class_with_name(ast : Module, name : String)"></endpoint>
### AssetContext.find_class_with_name(..)
```wren
AssetContext.find_class_with_name(ast : Module, name : String) : ClassStmt
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_block_def_for(asset : AssetID, block_tag : String, from : String)"></endpoint>
### AssetContext.emit_block_def_for(...)
```wren
AssetContext.emit_block_def_for(asset : AssetID, block_tag : String, from : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_block_def_for(asset : AssetID, block_type_id : String, block_tag : String, from : String)"></endpoint>
### AssetContext.emit_block_def_for(....)
```wren
AssetContext.emit_block_def_for(asset : AssetID, block_type_id : String, block_tag : String, from : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="tagged(tag : String)"></endpoint>
### AssetContext.tagged(.)
```wren
AssetContext.tagged(tag : String) : Any
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="tag(tag : String, value : Any)"></endpoint>
### AssetContext.tag(..)
```wren
AssetContext.tag(tag : String, value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="TYPE"></endpoint>
### AssetContext.TYPE
```wren
AssetContext.TYPE : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="DEV"></endpoint>
### AssetContext.DEV
```wren
AssetContext.DEV : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="RELEASE"></endpoint>
### AssetContext.RELEASE
```wren
AssetContext.RELEASE : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="new(id : String, db : Any, artifact_root : String)"></endpoint>
### AssetContext.new(...)
```wren
AssetContext.new(id : String, db : Any, artifact_root : String) : AssetContext
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="set_modified(type : String, modified : List)"></endpoint>
### AssetContext.set_modified(..)
```wren
AssetContext.set_modified(type : String, modified : List) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="get_modified(type : String)"></endpoint>
### AssetContext.get_modified(.)
```wren
AssetContext.get_modified(type : String) : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="get_modified()"></endpoint>
### AssetContext.get_modified(.)
```wren
AssetContext.get_modified() : Map
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="skip(id : String)"></endpoint>
### AssetContext.skip(.)
```wren
AssetContext.skip(id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="skipped(id : String)"></endpoint>
### AssetContext.skipped(.)
```wren
AssetContext.skipped(id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_path(id : String)"></endpoint>
### AssetContext.emit_path(.)
```wren
AssetContext.emit_path(id : String) : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit_path(id : String, extra : String)"></endpoint>
### AssetContext.emit_path(..)
```wren
AssetContext.emit_path(id : String, extra : String) : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetContext" signature="emit(type_id : String, artifact_id : String, artifact_path : String)"></endpoint>
### AssetContext.emit(...)
```wren
AssetContext.emit(type_id : String, artifact_id : String, artifact_path : String) : unknown
```
> no docs found   


## AssetID
```wren
import "luxe: asset/type" for AssetID
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetID" signature="type_id"></endpoint>
### AssetID.type_id
```wren
AssetID.type_id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="id"></endpoint>
### AssetID.id
```wren
AssetID.id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="asset"></endpoint>
### AssetID.asset
```wren
AssetID.asset : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="path"></endpoint>
### AssetID.path
```wren
AssetID.path : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="ext"></endpoint>
### AssetID.ext
```wren
AssetID.ext : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="subtype"></endpoint>
### AssetID.subtype
```wren
AssetID.subtype : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="prefix"></endpoint>
### AssetID.prefix
```wren
AssetID.prefix : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="root"></endpoint>
### AssetID.root
```wren
AssetID.root : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="meta_uuid"></endpoint>
### AssetID.meta_uuid
```wren
AssetID.meta_uuid : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="new(type_id : String, map : Map)"></endpoint>
### AssetID.new(..)
```wren
AssetID.new(type_id : String, map : Map) : AssetID
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="from_id(type_id : String, asset_id : String)"></endpoint>
### AssetID.from_id(..)
```wren
AssetID.from_id(type_id : String, asset_id : String) : AssetID
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="from_id(db : AssetDB, type_id : String, asset_id : String)"></endpoint>
### AssetID.from_id(...)
```wren
AssetID.from_id(db : AssetDB, type_id : String, asset_id : String) : AssetID
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetID" signature="refresh()"></endpoint>
### AssetID.refresh(.)
```wren
AssetID.refresh() : unknown
```
> no docs found   


## AssetType
```wren
import "luxe: asset/type" for AssetType
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetType" signature="type_id"></endpoint>
### AssetType.type_id
```wren
AssetType.type_id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="version_id"></endpoint>
### AssetType.version_id
```wren
AssetType.version_id : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="ext"></endpoint>
### AssetType.ext
```wren
AssetType.ext : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="subtype"></endpoint>
### AssetType.subtype
```wren
AssetType.subtype : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="ctx"></endpoint>
### AssetType.ctx
```wren
AssetType.ctx : AssetContext
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_loader"></endpoint>
### AssetType.is_loader
```wren
AssetType.is_loader : Bool
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_data"></endpoint>
### AssetType.is_data
```wren
AssetType.is_data : Bool
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="is_handle"></endpoint>
### AssetType.is_handle
```wren
AssetType.is_handle : Bool
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="version"></endpoint>
### AssetType.version
```wren
AssetType.version : Num
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="load_before"></endpoint>
### AssetType.load_before
```wren
AssetType.load_before : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="load_after"></endpoint>
### AssetType.load_after
```wren
AssetType.load_after : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="before"></endpoint>
### AssetType.before
```wren
AssetType.before : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="after"></endpoint>
### AssetType.after
```wren
AssetType.after : List
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre_early"></endpoint>
### AssetType.pre_early
```wren
AssetType.pre_early : Num
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre_late"></endpoint>
### AssetType.pre_late
```wren
AssetType.pre_late : Num
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="new(type_id : String, ctx : AssetContext)"></endpoint>
### AssetType.new(..)
```wren
AssetType.new(type_id : String, ctx : AssetContext) : AssetType
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="remap(asset : AssetID, new_id : String)"></endpoint>
### AssetType.remap(..)
```wren
AssetType.remap(asset : AssetID, new_id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="get_remap(map : Map)"></endpoint>
### AssetType.get_remap(.)
```wren
AssetType.get_remap(map : Map) : Map
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="modify_affected(asset : AssetID)"></endpoint>
### AssetType.modify_affected(.)
```wren
AssetType.modify_affected(asset : AssetID) : unknown
```
> modify all assets that refer to this one   

<endpoint module="luxe: asset/type" class="AssetType" signature="modify(asset : AssetID)"></endpoint>
### AssetType.modify(.)
```wren
AssetType.modify(asset : AssetID) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="unmodify(asset : AssetID)"></endpoint>
### AssetType.unmodify(.)
```wren
AssetType.unmodify(asset : AssetID) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="emit_path(asset : AssetID)"></endpoint>
### AssetType.emit_path(.)
```wren
AssetType.emit_path(asset : AssetID) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="skip(asset : AssetID)"></endpoint>
### AssetType.skip(.)
```wren
AssetType.skip(asset : AssetID) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="get_data(id : String)"></endpoint>
### AssetType.get_data(.)
```wren
AssetType.get_data(id : String) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="set_handle(id : String, handle : Num)"></endpoint>
### AssetType.set_handle(..)
```wren
AssetType.set_handle(id : String, handle : Num) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="init(assets : List)"></endpoint>
### AssetType.init(.)
```wren
AssetType.init(assets : List) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="pre(assets : List)"></endpoint>
### AssetType.pre(.)
```wren
AssetType.pre(assets : List) : None
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="process(assets : List, each : Fn)"></endpoint>
### AssetType.process(..)
```wren
AssetType.process(assets : List, each : Fn) : None
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetType" signature="loader(assets : List, artifacts : List)"></endpoint>
### AssetType.loader(..)
```wren
AssetType.loader(assets : List, artifacts : List) : None
```
> no docs found   


## AssetTypeID
```wren
import "luxe: asset/type" for AssetTypeID
```
> no docs found

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block"></endpoint>
### AssetTypeID.block
```wren
AssetTypeID.block : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block=(v : Any)"></endpoint>
### AssetTypeID.block
```wren
AssetTypeID.block=(v : Any) : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block_class"></endpoint>
### AssetTypeID.block_class
```wren
AssetTypeID.block_class : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="block_class=(v : Any)"></endpoint>
### AssetTypeID.block_class
```wren
AssetTypeID.block_class=(v : Any) : String
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="loader"></endpoint>
### AssetTypeID.loader
```wren
AssetTypeID.loader : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="loader=(v : Any)"></endpoint>
### AssetTypeID.loader
```wren
AssetTypeID.loader=(v : Any) : unknown
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="handler"></endpoint>
### AssetTypeID.handler
```wren
AssetTypeID.handler : AssetType
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="handler=(v : Any)"></endpoint>
### AssetTypeID.handler
```wren
AssetTypeID.handler=(v : Any) : AssetType
```
> no docs found   

<endpoint module="luxe: asset/type" class="AssetTypeID" signature="new(map : Map)"></endpoint>
### AssetTypeID.new(.)
```wren
AssetTypeID.new(map : Map) : AssetTypeID
```
> no docs found   

