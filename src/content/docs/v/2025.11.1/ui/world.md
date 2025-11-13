---
title: "luxe: ui/world"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/world"
---
- [BucketedNodes](#bucketednodes)   
- [LabelCache](#labelcache)   
- [TreeNodeIter](#treenodeiter)   
- [UIWorld](#uiworld)   
- [UIWorldEvent](#uiworldevent)   
- [UIWorldIcon](#uiworldicon)   
- [UIWorldLens](#uiworldlens)   
- [UIWorldLensDefault](#uiworldlensdefault)   
- [UIWorldLensTransform](#uiworldlenstransform)   
- [UIWorldLensUI](#uiworldlensui)   

---


## BucketedNodes
```lx
import "luxe: ui/world" for BucketedNodes
```
> no docs found

### Variables
```lx
var count : Num = 0
var bucket_size : Num = 64
var buckets : List = [[]]
```
<endpoint module="luxe: ui/world" class="BucketedNodes" signature="new(size : Num)"></endpoint>
### BucketedNodes.new(.)
```lx
BucketedNodes.new(size : Num) : BucketedNodes
```
> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="clear()"></endpoint>
### BucketedNodes.clear(.)
```lx
BucketedNodes.clear() : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="insert(node : TreeNode)"></endpoint>
### BucketedNodes.insert(.)
```lx
BucketedNodes.insert(node : TreeNode) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="remove(node : TreeNode)"></endpoint>
### BucketedNodes.remove(.)
```lx
BucketedNodes.remove(node : TreeNode) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="find_bucket(display : String)"></endpoint>
### BucketedNodes.find_bucket(.)
```lx
BucketedNodes.find_bucket(display : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="toList"></endpoint>
### BucketedNodes.toList
```lx
BucketedNodes.toList : unknown
```
> no docs found   


## LabelCache
```lx
import "luxe: ui/world" for LabelCache
```
> no docs found

### Variables
```lx
var ui : Entity = Entity.none
var cache : List = []
var used : List = []
```
<endpoint module="luxe: ui/world" class="LabelCache" signature="new(in_ui : Entity)"></endpoint>
### LabelCache.new(.)
```lx
LabelCache.new(in_ui : Entity) : LabelCache
```
> no docs found   

<endpoint module="luxe: ui/world" class="LabelCache" signature="reset()"></endpoint>
### LabelCache.reset(.)
```lx
LabelCache.reset() : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="LabelCache" signature="create()"></endpoint>
### LabelCache.create(.)
```lx
LabelCache.create() : unknown
```
> no docs found   


## TreeNodeIter
```lx
import "luxe: ui/world" for TreeNodeIter
```
> no docs found

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="node"></endpoint>
### TreeNodeIter.node
```lx
TreeNodeIter.node : TreeNode
```
> no docs found   

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="new(node : TreeNode, depth : Num)"></endpoint>
### TreeNodeIter.new(..)
```lx
TreeNodeIter.new(node : TreeNode, depth : Num) : TreeNodeIter
```
> no docs found   

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="iteratorValue(index : Num)"></endpoint>
### TreeNodeIter.iteratorValue(.)
```lx
TreeNodeIter.iteratorValue(index : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="next_bucket(from_start : Bool)"></endpoint>
### TreeNodeIter.next_bucket(.)
```lx
TreeNodeIter.next_bucket(from_start : Bool) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="iterate(index : Num)"></endpoint>
### TreeNodeIter.iterate(.)
```lx
TreeNodeIter.iterate(index : Num) : unknown
```
> no docs found   


## UIWorld
```lx
import "luxe: ui/world" for UIWorld
```
> no docs found

<endpoint module="luxe: ui/world" class="UIWorld" signature="create(ui : UI)"></endpoint>
### UIWorld.create(.)
```lx
UIWorld.create(ui : UI) : Control
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="set_world(control : Control, world : World)"></endpoint>
### UIWorld.set_world(..)
```lx
UIWorld.set_world(control : Control, world : World) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="set_handle_default_icons(control : Control, enable : Bool)"></endpoint>
### UIWorld.set_handle_default_icons(..)
```lx
UIWorld.set_handle_default_icons(control : Control, enable : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="set_handle_folder_drop(control : Control, enable : Bool)"></endpoint>
### UIWorld.set_handle_folder_drop(..)
```lx
UIWorld.set_handle_folder_drop(control : Control, enable : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="refresh(control : Control)"></endpoint>
### UIWorld.refresh(.)
```lx
UIWorld.refresh(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="get_view(control : Control)"></endpoint>
### UIWorld.get_view(.)
```lx
UIWorld.get_view(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="scroll_to(control : Control, entity : Entity)"></endpoint>
### UIWorld.scroll_to(..)
```lx
UIWorld.scroll_to(control : Control, entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="set_selection(control : Control, selection : Selection)"></endpoint>
### UIWorld.set_selection(..)
```lx
UIWorld.set_selection(control : Control, selection : Selection) : None
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="get_selection(control : Control)"></endpoint>
### UIWorld.get_selection(.)
```lx
UIWorld.get_selection(control : Control) : Selection
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="enter_select_mode(control : Control, enter_state : Bool, display : String)"></endpoint>
### UIWorld.enter_select_mode(...)
```lx
UIWorld.enter_select_mode(control : Control, enter_state : Bool, display : String) : None
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="show_rename(control : Control)"></endpoint>
### UIWorld.show_rename(.)
```lx
UIWorld.show_rename(control : Control) : unknown
```
> no docs found   


## UIWorldEvent
```lx
import "luxe: ui/world" for UIWorldEvent
```
> no docs found

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="filter"></endpoint>
### UIWorldEvent.filter
```lx
UIWorldEvent.filter : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="save"></endpoint>
### UIWorldEvent.save
```lx
UIWorldEvent.save : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="save_all"></endpoint>
### UIWorldEvent.save_all
```lx
UIWorldEvent.save_all : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="delete"></endpoint>
### UIWorldEvent.delete
```lx
UIWorldEvent.delete : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="duplicate"></endpoint>
### UIWorldEvent.duplicate
```lx
UIWorldEvent.duplicate : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="rename"></endpoint>
### UIWorldEvent.rename
```lx
UIWorldEvent.rename : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="active_context"></endpoint>
### UIWorldEvent.active_context
```lx
UIWorldEvent.active_context : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="focus"></endpoint>
### UIWorldEvent.focus
```lx
UIWorldEvent.focus : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="close"></endpoint>
### UIWorldEvent.close
```lx
UIWorldEvent.close : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="dragging"></endpoint>
### UIWorldEvent.dragging
```lx
UIWorldEvent.dragging : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="collapse"></endpoint>
### UIWorldEvent.collapse
```lx
UIWorldEvent.collapse : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="uncollapse"></endpoint>
### UIWorldEvent.uncollapse
```lx
UIWorldEvent.uncollapse : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="entity_drop"></endpoint>
### UIWorldEvent.entity_drop
```lx
UIWorldEvent.entity_drop : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="folder_drop"></endpoint>
### UIWorldEvent.folder_drop
```lx
UIWorldEvent.folder_drop : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="kind"></endpoint>
### UIWorldEvent.kind
```lx
UIWorldEvent.kind : Any
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="items"></endpoint>
### UIWorldEvent.items
```lx
UIWorldEvent.items : Any
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="data"></endpoint>
### UIWorldEvent.data
```lx
UIWorldEvent.data : Any
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="data2"></endpoint>
### UIWorldEvent.data2
```lx
UIWorldEvent.data2 : Any
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="new(kind : UIWorldEvent, items : List, data : Any)"></endpoint>
### UIWorldEvent.new(...)
```lx
UIWorldEvent.new(kind : UIWorldEvent, items : List, data : Any) : UIWorldEvent
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="new(kind : UIWorldEvent, items : List, data : Any, data2 : Any)"></endpoint>
### UIWorldEvent.new(....)
```lx
UIWorldEvent.new(kind : UIWorldEvent, items : List, data : Any, data2 : Any) : UIWorldEvent
```
> no docs found   


## UIWorldIcon
```lx
import "luxe: ui/world" for UIWorldIcon
```
> no docs found

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="icon"></endpoint>
### UIWorldIcon.icon
```lx
UIWorldIcon.icon : Control
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="enabled"></endpoint>
### UIWorldIcon.enabled
```lx
UIWorldIcon.enabled : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="enabled(handle : Num)"></endpoint>
### UIWorldIcon.enabled(.)
```lx
UIWorldIcon.enabled(handle : Num) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="tooltip"></endpoint>
### UIWorldIcon.tooltip
```lx
UIWorldIcon.tooltip : String
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="tooltip=(v : String)"></endpoint>
### UIWorldIcon.tooltip
```lx
UIWorldIcon.tooltip=(v : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="selection_based"></endpoint>
### UIWorldIcon.selection_based
```lx
UIWorldIcon.selection_based : String
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="selection_based=(v : String)"></endpoint>
### UIWorldIcon.selection_based
```lx
UIWorldIcon.selection_based=(v : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="allow_indirect"></endpoint>
### UIWorldIcon.allow_indirect
```lx
UIWorldIcon.allow_indirect : String
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="allow_indirect=(v : String)"></endpoint>
### UIWorldIcon.allow_indirect
```lx
UIWorldIcon.allow_indirect=(v : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="svg"></endpoint>
### UIWorldIcon.svg
```lx
UIWorldIcon.svg : String
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="svg=(v : Any)"></endpoint>
### UIWorldIcon.svg
```lx
UIWorldIcon.svg=(v : Any) : String
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="new(world_view : UIWorld)"></endpoint>
### UIWorldIcon.new(.)
```lx
UIWorldIcon.new(world_view : UIWorld) : UIWorldIcon
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="enable()"></endpoint>
### UIWorldIcon.enable(.)
```lx
UIWorldIcon.enable() : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="enable(handle : Num)"></endpoint>
### UIWorldIcon.enable(.)
```lx
UIWorldIcon.enable(handle : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="disable()"></endpoint>
### UIWorldIcon.disable(.)
```lx
UIWorldIcon.disable() : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="disable(handle : Num)"></endpoint>
### UIWorldIcon.disable(.)
```lx
UIWorldIcon.disable(handle : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="can_do_direct_only_action(list : List)"></endpoint>
### UIWorldIcon.can_do_direct_only_action(.)
```lx
UIWorldIcon.can_do_direct_only_action(list : List) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="on_selection(fn : Fn)"></endpoint>
### UIWorldIcon.on_selection(.)
```lx
UIWorldIcon.on_selection(fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="on_release(fn : Fn)"></endpoint>
### UIWorldIcon.on_release(.)
```lx
UIWorldIcon.on_release(fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="on_enter(fn : Fn)"></endpoint>
### UIWorldIcon.on_enter(.)
```lx
UIWorldIcon.on_enter(fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="on_exit(fn : Fn)"></endpoint>
### UIWorldIcon.on_exit(.)
```lx
UIWorldIcon.on_exit(fn : Fn) : unknown
```
> no docs found   


## UIWorldLens
```lx
import "luxe: ui/world" for UIWorldLens
```
> no docs found

### Variables
```lx
var id : UUID = ID.uuid
var state : UIWorldState = null
var icon : String = "luxe: image/folder-open.svg"
var display : String = "Folder Hierarchy"
var name : String = "luxe.default"
```
<endpoint module="luxe: ui/world" class="UIWorldLens" signature="new(in_state : UIWorldState)"></endpoint>
### UIWorldLens.new(.)
```lx
UIWorldLens.new(in_state : UIWorldState) : UIWorldLens
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="get_droppable_tags(entity : Entity)"></endpoint>
### UIWorldLens.get_droppable_tags(.)
```lx
UIWorldLens.get_droppable_tags(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="on_drop(from : Entity, to : Entity)"></endpoint>
### UIWorldLens.on_drop(..)
```lx
UIWorldLens.on_drop(from : Entity, to : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="reset(tree_root : TreeNode)"></endpoint>
### UIWorldLens.reset(.)
```lx
UIWorldLens.reset(tree_root : TreeNode) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="post_add(tree_root : TreeNode)"></endpoint>
### UIWorldLens.post_add(.)
```lx
UIWorldLens.post_add(tree_root : TreeNode) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="has_parent(entity : Entity)"></endpoint>
### UIWorldLens.has_parent(.)
```lx
UIWorldLens.has_parent(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="get_parent(entity : Entity)"></endpoint>
### UIWorldLens.get_parent(.)
```lx
UIWorldLens.get_parent(entity : Entity) : Entity
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="should_ignore(entity : Entity)"></endpoint>
### UIWorldLens.should_ignore(.)
```lx
UIWorldLens.should_ignore(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="entity_is_root(entity : Entity)"></endpoint>
### UIWorldLens.entity_is_root(.)
```lx
UIWorldLens.entity_is_root(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="entity_is_origin(entity : Entity)"></endpoint>
### UIWorldLens.entity_is_origin(.)
```lx
UIWorldLens.entity_is_origin(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="add_root(root : EntityNode, entity_to_node : Map)"></endpoint>
### UIWorldLens.add_root(..)
```lx
UIWorldLens.add_root(root : EntityNode, entity_to_node : Map) : unknown
```
> an opportunity to process roots added to the view. e.g the default view processes folders inside this   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="add_nested(node : EntityNode, entity_to_node : Map)"></endpoint>
### UIWorldLens.add_nested(..)
```lx
UIWorldLens.add_nested(node : EntityNode, entity_to_node : Map) : unknown
```
> When an added child is added.  Return false to put into parent as expected, return true if you handled it manually.   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="create_node(entity : Entity)"></endpoint>
### UIWorldLens.create_node(.)
```lx
UIWorldLens.create_node(entity : Entity) : TreeNode
```
> add the nested child into it's parent   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="get_icon_id(entity : Entity, collapsed : Bool)"></endpoint>
### UIWorldLens.get_icon_id(..)
```lx
UIWorldLens.get_icon_id(entity : Entity, collapsed : Bool) : unknown
```
> no docs found   


## UIWorldLensDefault
```lx
import "luxe: ui/world" for UIWorldLensDefault
```
> no docs found

### Variables
```lx
var context_to_folders : Map = {}
var all_folders : Map = {}
var folder_id_to_folder_node : Map = {}
```
<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="new(state : UIWorldState)"></endpoint>
### UIWorldLensDefault.new(.)
```lx
UIWorldLensDefault.new(state : UIWorldState) : UIWorldLensDefault
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="reset(tree_root : TreeNode)"></endpoint>
### UIWorldLensDefault.reset(.)
```lx
UIWorldLensDefault.reset(tree_root : TreeNode) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="post_add(tree_root : TreeNode)"></endpoint>
### UIWorldLensDefault.post_add(.)
```lx
UIWorldLensDefault.post_add(tree_root : TreeNode) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="get_parent(entity : Entity)"></endpoint>
### UIWorldLensDefault.get_parent(.)
```lx
UIWorldLensDefault.get_parent(entity : Entity) : Entity
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="entity_is_root(entity : Entity)"></endpoint>
### UIWorldLensDefault.entity_is_root(.)
```lx
UIWorldLensDefault.entity_is_root(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="entity_is_origin(entity : Entity)"></endpoint>
### UIWorldLensDefault.entity_is_origin(.)
```lx
UIWorldLensDefault.entity_is_origin(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="add_root(root : EntityNode, entity_to_node : Map)"></endpoint>
### UIWorldLensDefault.add_root(..)
```lx
UIWorldLensDefault.add_root(root : EntityNode, entity_to_node : Map) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="add_nested(node : EntityNode, entity_to_node : Map)"></endpoint>
### UIWorldLensDefault.add_nested(..)
```lx
UIWorldLensDefault.add_nested(node : EntityNode, entity_to_node : Map) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="create_node(entity : Entity)"></endpoint>
### UIWorldLensDefault.create_node(.)
```lx
UIWorldLensDefault.create_node(entity : Entity) : TreeNode
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="get_context_folder_map(entity : Entity)"></endpoint>
### UIWorldLensDefault.get_context_folder_map(.)
```lx
UIWorldLensDefault.get_context_folder_map(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="get_root_folders(entity : Entity)"></endpoint>
### UIWorldLensDefault.get_root_folders(.)
```lx
UIWorldLensDefault.get_root_folders(entity : Entity) : unknown
```
> no docs found   


## UIWorldLensTransform
```lx
import "luxe: ui/world" for UIWorldLensTransform
```
> no docs found

### Variables
```lx
var no_transform : FolderNode = null
```
<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="new(state : UIWorldState)"></endpoint>
### UIWorldLensTransform.new(.)
```lx
UIWorldLensTransform.new(state : UIWorldState) : UIWorldLensTransform
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="get_droppable_tags(entity : Entity)"></endpoint>
### UIWorldLensTransform.get_droppable_tags(.)
```lx
UIWorldLensTransform.get_droppable_tags(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="on_drop(from : Entity, to : Entity)"></endpoint>
### UIWorldLensTransform.on_drop(..)
```lx
UIWorldLensTransform.on_drop(from : Entity, to : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="reset(tree_root : TreeNode)"></endpoint>
### UIWorldLensTransform.reset(.)
```lx
UIWorldLensTransform.reset(tree_root : TreeNode) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="get_parent(entity : Entity)"></endpoint>
### UIWorldLensTransform.get_parent(.)
```lx
UIWorldLensTransform.get_parent(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="entity_is_root(entity : Entity)"></endpoint>
### UIWorldLensTransform.entity_is_root(.)
```lx
UIWorldLensTransform.entity_is_root(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="create_node(entity : Entity)"></endpoint>
### UIWorldLensTransform.create_node(.)
```lx
UIWorldLensTransform.create_node(entity : Entity) : TreeNode
```
> no docs found   


## UIWorldLensUI
```lx
import "luxe: ui/world" for UIWorldLensUI
```
> no docs found

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="new(state : UIWorldState)"></endpoint>
### UIWorldLensUI.new(.)
```lx
UIWorldLensUI.new(state : UIWorldState) : UIWorldLensUI
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="get_droppable_tags(entity : Entity)"></endpoint>
### UIWorldLensUI.get_droppable_tags(.)
```lx
UIWorldLensUI.get_droppable_tags(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="on_drop(from : Entity, to : Entity)"></endpoint>
### UIWorldLensUI.on_drop(..)
```lx
UIWorldLensUI.on_drop(from : Entity, to : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="reset(tree_root : TreeNode)"></endpoint>
### UIWorldLensUI.reset(.)
```lx
UIWorldLensUI.reset(tree_root : TreeNode) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="get_parent(entity : Entity)"></endpoint>
### UIWorldLensUI.get_parent(.)
```lx
UIWorldLensUI.get_parent(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="entity_is_root(entity : Entity)"></endpoint>
### UIWorldLensUI.entity_is_root(.)
```lx
UIWorldLensUI.entity_is_root(entity : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="create_node(entity : Entity)"></endpoint>
### UIWorldLensUI.create_node(.)
```lx
UIWorldLensUI.create_node(entity : Entity) : TreeNode
```
> no docs found   

