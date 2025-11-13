---
title: "luxe: ui/block"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/block"
---
- [BlockListener](#blocklistener)   
- [BlockWindowState](#blockwindowstate)   
- [ModifiedPip](#modifiedpip)   
- [UIBlock](#uiblock)   
- [UIBlockAssetEvent](#uiblockassetevent)   
- [UIBlockChange](#uiblockchange)   
- [UIBlockChangeType](#uiblockchangetype)   
- [UIBlockEventType](#uiblockeventtype)   
- [UIBlockGizmoEvent](#uiblockgizmoevent)   
- [UIBlockLinkEvent](#uiblocklinkevent)   

---


## BlockListener
```lx
import "luxe: ui/block" for BlockListener
```
> no docs found

<endpoint module="luxe: ui/block" class="BlockListener" signature="block"></endpoint>
### BlockListener.block
```lx
BlockListener.block : Block
```
> no docs found   

<endpoint module="luxe: ui/block" class="BlockListener" signature="handle"></endpoint>
### BlockListener.handle
```lx
BlockListener.handle : Handle
```
> no docs found   

<endpoint module="luxe: ui/block" class="BlockListener" signature="new(block : Block, handle : Handle)"></endpoint>
### BlockListener.new(..)
```lx
BlockListener.new(block : Block, handle : Handle) : BlockListener
```
> no docs found   


## BlockWindowState
```lx
import "luxe: ui/block" for BlockWindowState
```
> no docs found

### Variables
```lx
var collapsed : Bool = false
```
<endpoint module="luxe: ui/block" class="BlockWindowState" signature="new()"></endpoint>
### BlockWindowState.new(.)
```lx
BlockWindowState.new() : BlockWindowState
```
> no docs found   


## ModifiedPip
```lx
import "luxe: ui/block" for ModifiedPip
```
> no docs found

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="control"></endpoint>
### ModifiedPip.control
```lx
ModifiedPip.control : Control
```
> no docs found   

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="kind"></endpoint>
### ModifiedPip.kind
```lx
ModifiedPip.kind : BlockFieldModified
```
> no docs found   

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="kind=(value : BlockFieldModified)"></endpoint>
### ModifiedPip.kind
```lx
ModifiedPip.kind=(value : BlockFieldModified) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="color"></endpoint>
### ModifiedPip.color
```lx
ModifiedPip.color : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="new(ui : UI, kind : BlockFieldModified)"></endpoint>
### ModifiedPip.new(..)
```lx
ModifiedPip.new(ui : UI, kind : BlockFieldModified) : ModifiedPip
```
> no docs found   


## UIBlock
```lx
import "luxe: ui/block" for UIBlock
```
> no docs found

<endpoint module="luxe: ui/block" class="UIBlock" signature="create(ui : Entity)"></endpoint>
### UIBlock.create(.)
```lx
UIBlock.create(ui : Entity) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_block_instance(control : Control, block : Block, instance : BlockInstance)"></endpoint>
### UIBlock.set_block_instance(...)
```lx
UIBlock.set_block_instance(control : Control, block : Block, instance : BlockInstance) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_block_instances(control : Control, block : Block, instances : List)"></endpoint>
### UIBlock.set_block_instances(...)
```lx
UIBlock.set_block_instances(control : Control, block : Block, instances : List) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_blocks_instances(control : Control, blocks : List, instances : List)"></endpoint>
### UIBlock.set_blocks_instances(...)
```lx
UIBlock.set_blocks_instances(control : Control, blocks : List, instances : List) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_sizes(control : Control, label_width : Num, label_size : Num, field_height : Num)"></endpoint>
### UIBlock.set_sizes(....)
```lx
UIBlock.set_sizes(control : Control, label_width : Num, label_size : Num, field_height : Num) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="refresh(control : Control)"></endpoint>
### UIBlock.refresh(.)
```lx
UIBlock.refresh(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_allow_gizmo(control : Control, yes : Bool)"></endpoint>
### UIBlock.set_allow_gizmo(..)
```lx
UIBlock.set_allow_gizmo(control : Control, yes : Bool) : None
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="get_handle_assets(control : Control)"></endpoint>
### UIBlock.get_handle_assets(.)
```lx
UIBlock.get_handle_assets(control : Control) : Bool
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_handle_assets(control : Control, yes : Bool)"></endpoint>
### UIBlock.set_handle_assets(..)
```lx
UIBlock.set_handle_assets(control : Control, yes : Bool) : None
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_show_defaults(control : Control, yes : Bool)"></endpoint>
### UIBlock.set_show_defaults(..)
```lx
UIBlock.set_show_defaults(control : Control, yes : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="get_block_fields(control : Any)"></endpoint>
### UIBlock.get_block_fields(.)
```lx
UIBlock.get_block_fields(control : Any) : Map
```
> no docs found   


## UIBlockAssetEvent
```lx
import "luxe: ui/block" for UIBlockAssetEvent
```
> no docs found

### Variables
```lx
var view : ValueView = null
```
<endpoint module="luxe: ui/block" class="UIBlockAssetEvent" signature="tags"></endpoint>
### UIBlockAssetEvent.tags
```lx
UIBlockAssetEvent.tags : List
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockAssetEvent" signature="original"></endpoint>
### UIBlockAssetEvent.original
```lx
UIBlockAssetEvent.original : String
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockAssetEvent" signature="new(tags_in : List, original_in : String, view : ValueView, fn : Fn)"></endpoint>
### UIBlockAssetEvent.new(....)
```lx
UIBlockAssetEvent.new(tags_in : List, original_in : String, view : ValueView, fn : Fn) : UIBlockAssetEvent
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockAssetEvent" signature="done(value : String)"></endpoint>
### UIBlockAssetEvent.done(.)
```lx
UIBlockAssetEvent.done(value : String) : unknown
```
> no docs found   


## UIBlockChange
```lx
import "luxe: ui/block" for UIBlockChange
```
> A change in the block ui can inside a nested block, each
> with it's own individual instance, list of nested fields, and list of 
> nested array index values each step down. This tracks that for changes.

### Variables
```lx
var change_id : Any = null
```
<endpoint module="luxe: ui/block" class="UIBlockChange" signature="new(kind : UIBlockChangeType, root : Block, root_instance : BlockInstance, blocks : List, instances : List, fields : List, indices : List, edit_value : Any)"></endpoint>
### UIBlockChange.new(........)
```lx
UIBlockChange.new(kind : UIBlockChangeType, root : Block, root_instance : BlockInstance, blocks : List, instances : List, fields : List, indices : List, edit_value : Any) : UIBlockChange
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="refresh()"></endpoint>
### UIBlockChange.refresh(.)
```lx
UIBlockChange.refresh() : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="handle()"></endpoint>
### UIBlockChange.handle(.)
```lx
UIBlockChange.handle() : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="set_refresh(fn : Fn)"></endpoint>
### UIBlockChange.set_refresh(.)
```lx
UIBlockChange.set_refresh(fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="set_handler(fn : Fn)"></endpoint>
### UIBlockChange.set_handler(.)
```lx
UIBlockChange.set_handler(fn : Fn) : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="kind"></endpoint>
### UIBlockChange.kind
```lx
UIBlockChange.kind : UIBlockChangeType
```
> The type of change event   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="block"></endpoint>
### UIBlockChange.block
```lx
UIBlockChange.block : Block
```
> The root block in which the change occurred   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="instance"></endpoint>
### UIBlockChange.instance
```lx
UIBlockChange.instance : Num
```
> The instance of the root block   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="blocks"></endpoint>
### UIBlockChange.blocks
```lx
UIBlockChange.blocks : List
```
> The list of blocks down the chain e.g some.nested.field   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="instances"></endpoint>
### UIBlockChange.instances
```lx
UIBlockChange.instances : List
```
> The list of instances for each block down the chain e.g some.nested.field   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="field"></endpoint>
### UIBlockChange.field
```lx
UIBlockChange.field : List
```
> The list of nested fields for each block, e.g some.nested.field -> ["some", "nested", "field"]   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="array_indices"></endpoint>
### UIBlockChange.array_indices
```lx
UIBlockChange.array_indices : Num
```
> The array index for each nested block. e.g some.nested[2].block[3] is [0, 2, 3]   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="field_index(idx : Num)"></endpoint>
### UIBlockChange.field_index(.)
```lx
UIBlockChange.field_index(idx : Num) : Num
```
> The field index for the field in the fields list. 
>   e.g ["some", "nested", "field"] -> field_index[1] returns the field index of nested in the second block down   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="default"></endpoint>
### UIBlockChange.default
```lx
UIBlockChange.default : Any
```
> The default value in the leaf block for this field   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="get_field_value()"></endpoint>
### UIBlockChange.get_field_value(.)
```lx
UIBlockChange.get_field_value() : Any
```
> The current value in the leaf block for this field (e.g for an array, returns the contents of the array)   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="get_leaf_value()"></endpoint>
### UIBlockChange.get_leaf_value(.)
```lx
UIBlockChange.get_leaf_value() : Any
```
> The current value in the leaf for this block/field/array?   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="leaf_block"></endpoint>
### UIBlockChange.leaf_block
```lx
UIBlockChange.leaf_block : Block
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="leaf_instance"></endpoint>
### UIBlockChange.leaf_instance
```lx
UIBlockChange.leaf_instance : BlockInstance
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="leaf_field_index"></endpoint>
### UIBlockChange.leaf_field_index
```lx
UIBlockChange.leaf_field_index : Num
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="leaf_array_index"></endpoint>
### UIBlockChange.leaf_array_index
```lx
UIBlockChange.leaf_array_index : Num
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="get_change_value()"></endpoint>
### UIBlockChange.get_change_value(.)
```lx
UIBlockChange.get_change_value() : Any
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="field_is_array()"></endpoint>
### UIBlockChange.field_is_array(.)
```lx
UIBlockChange.field_is_array() : Bool
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="field_is_object()"></endpoint>
### UIBlockChange.field_is_object(.)
```lx
UIBlockChange.field_is_object() : Bool
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="value"></endpoint>
### UIBlockChange.value
```lx
UIBlockChange.value : Any
```
> The intended change value based on type   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="edit_value"></endpoint>
### UIBlockChange.edit_value
```lx
UIBlockChange.edit_value : Any
```
> The value from the ui at the time of the change   


## UIBlockChangeType
```lx
import "luxe: ui/block" for UIBlockChangeType
```
> no docs found

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="NORMAL"></endpoint>
### UIBlockChangeType.NORMAL
```lx
UIBlockChangeType.NORMAL : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="RESET"></endpoint>
### UIBlockChangeType.RESET
```lx
UIBlockChangeType.RESET : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_ADD"></endpoint>
### UIBlockChangeType.ARRAY_ADD
```lx
UIBlockChangeType.ARRAY_ADD : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_REMOVE"></endpoint>
### UIBlockChangeType.ARRAY_REMOVE
```lx
UIBlockChangeType.ARRAY_REMOVE : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_CLEAR"></endpoint>
### UIBlockChangeType.ARRAY_CLEAR
```lx
UIBlockChangeType.ARRAY_CLEAR : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_RESET"></endpoint>
### UIBlockChangeType.ARRAY_RESET
```lx
UIBlockChangeType.ARRAY_RESET : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_ELEMENT_RESET"></endpoint>
### UIBlockChangeType.ARRAY_ELEMENT_RESET
```lx
UIBlockChangeType.ARRAY_ELEMENT_RESET : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_REORDER"></endpoint>
### UIBlockChangeType.ARRAY_REORDER
```lx
UIBlockChangeType.ARRAY_REORDER : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="BLOCK"></endpoint>
### UIBlockChangeType.BLOCK
```lx
UIBlockChangeType.BLOCK : unknown
```
> no docs found   


## UIBlockEventType
```lx
import "luxe: ui/block" for UIBlockEventType
```
> no docs found

<endpoint module="luxe: ui/block" class="UIBlockEventType" signature="asset"></endpoint>
### UIBlockEventType.asset
```lx
UIBlockEventType.asset : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockEventType" signature="link"></endpoint>
### UIBlockEventType.link
```lx
UIBlockEventType.link : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockEventType" signature="gizmo"></endpoint>
### UIBlockEventType.gizmo
```lx
UIBlockEventType.gizmo : unknown
```
> no docs found   


## UIBlockGizmoEvent
```lx
import "luxe: ui/block" for UIBlockGizmoEvent
```
> no docs found

### Variables
```lx
var view : ValueView = null
var kind : String = "translate"
var on_done : Fn = null
var is_done : Bool = false
```
<endpoint module="luxe: ui/block" class="UIBlockGizmoEvent" signature="original"></endpoint>
### UIBlockGizmoEvent.original
```lx
UIBlockGizmoEvent.original : String
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockGizmoEvent" signature="new(kind_in : String, original_in : String, view : ValueView, fn : Fn)"></endpoint>
### UIBlockGizmoEvent.new(....)
```lx
UIBlockGizmoEvent.new(kind_in : String, original_in : String, view : ValueView, fn : Fn) : UIBlockGizmoEvent
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockGizmoEvent" signature="done()"></endpoint>
### UIBlockGizmoEvent.done(.)
```lx
UIBlockGizmoEvent.done() : unknown
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockGizmoEvent" signature="update(value : String)"></endpoint>
### UIBlockGizmoEvent.update(.)
```lx
UIBlockGizmoEvent.update(value : String) : unknown
```
> no docs found   


## UIBlockLinkEvent
```lx
import "luxe: ui/block" for UIBlockLinkEvent
```
> no docs found

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="original"></endpoint>
### UIBlockLinkEvent.original
```lx
UIBlockLinkEvent.original : List
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="tag"></endpoint>
### UIBlockLinkEvent.tag
```lx
UIBlockLinkEvent.tag : String
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="from_drop"></endpoint>
### UIBlockLinkEvent.from_drop
```lx
UIBlockLinkEvent.from_drop : Bool
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="drop_payload"></endpoint>
### UIBlockLinkEvent.drop_payload
```lx
UIBlockLinkEvent.drop_payload : Any
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="link_target"></endpoint>
### UIBlockLinkEvent.link_target
```lx
UIBlockLinkEvent.link_target : Any
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="new(original_in : List, tag : ID32, link_target : Handle, fn : Fn)"></endpoint>
### UIBlockLinkEvent.new(....)
```lx
UIBlockLinkEvent.new(original_in : List, tag : ID32, link_target : Handle, fn : Fn) : UIBlockLinkEvent
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="new(original_in : List, tag : ID32, link_target : Handle, drop_payload : Handle, fn : Fn)"></endpoint>
### UIBlockLinkEvent.new(.....)
```lx
UIBlockLinkEvent.new(original_in : List, tag : ID32, link_target : Handle, drop_payload : Handle, fn : Fn) : UIBlockLinkEvent
```
> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="done(value : List)"></endpoint>
### UIBlockLinkEvent.done(.)
```lx
UIBlockLinkEvent.done(value : List) : unknown
```
> no docs found   

