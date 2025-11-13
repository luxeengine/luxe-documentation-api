---
title: "luxe: ui/block"
description: API version 2025.11.1
---
## `luxe: ui/block{:lx}` module

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


### BlockListener
`import "luxe: ui/block" for BlockListener{:lx}`
> no docs found

- [block](#BlockListener.block)
- [handle](#BlockListener.handle)
- [new](#BlockListener.new+2)(**block**: `Block{:lx}`, **handle**: `Handle{:lx}`)


---

<endpoint module="luxe: ui/block" class="BlockListener" signature="block"></endpoint>
<h4 class="signature_head">BlockListener.block</h4><a class="signature-arity" href="#BlockListener.block" title="Permanent link">1</a><signature id="BlockListener.block">

```lx
BlockListener.block : Block
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="BlockListener" signature="handle"></endpoint>
<h4 class="signature_head">BlockListener.handle</h4><a class="signature-arity" href="#BlockListener.handle" title="Permanent link">1</a><signature id="BlockListener.handle">

```lx
BlockListener.handle : Handle
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="BlockListener" signature="new(block : Block, handle : Handle)"></endpoint>
<h4 class="signature_head">BlockListener.new</h4><a class="signature-arity" href="#BlockListener.new+2" title="Permanent link">2</a><signature id="BlockListener.new+2">

```lx
BlockListener.new(block : Block, handle : Handle) : BlockListener
```
</signature>

> no docs found   


### BlockWindowState
`import "luxe: ui/block" for BlockWindowState{:lx}`
> no docs found

- `var collapsed : Bool = false{:lx}`
- [new](#BlockWindowState.new)()


---

<endpoint module="luxe: ui/block" class="BlockWindowState" signature="new()"></endpoint>
<h4 class="signature_head">BlockWindowState.new</h4><a class="signature-arity" href="#BlockWindowState.new" title="Permanent link">1</a><signature id="BlockWindowState.new">

```lx
BlockWindowState.new() : BlockWindowState
```
</signature>

> no docs found   


### ModifiedPip
`import "luxe: ui/block" for ModifiedPip{:lx}`
> no docs found

- [control](#ModifiedPip.control)
- [kind](#ModifiedPip.kind)
- [kind](#ModifiedPip.kind=)=(value : BlockFieldModified)
- [color](#ModifiedPip.color)
- [new](#ModifiedPip.new+2)(**ui**: `UI{:lx}`, **kind**: `BlockFieldModified{:lx}`)


---

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="control"></endpoint>
<h4 class="signature_head">ModifiedPip.control</h4><a class="signature-arity" href="#ModifiedPip.control" title="Permanent link">1</a><signature id="ModifiedPip.control">

```lx
ModifiedPip.control : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="kind"></endpoint>
<h4 class="signature_head">ModifiedPip.kind</h4><a class="signature-arity" href="#ModifiedPip.kind" title="Permanent link">1</a><signature id="ModifiedPip.kind">

```lx
ModifiedPip.kind : BlockFieldModified
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="kind=(value : BlockFieldModified)"></endpoint>
<h4 class="signature_head">ModifiedPip.kind</h4><a class="signature-arity" href="#ModifiedPip.kind=" title="Permanent link">1</a><signature id="ModifiedPip.kind=">

```lx
ModifiedPip.kind=(value : BlockFieldModified) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="color"></endpoint>
<h4 class="signature_head">ModifiedPip.color</h4><a class="signature-arity" href="#ModifiedPip.color" title="Permanent link">1</a><signature id="ModifiedPip.color">

```lx
ModifiedPip.color : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="ModifiedPip" signature="new(ui : UI, kind : BlockFieldModified)"></endpoint>
<h4 class="signature_head">ModifiedPip.new</h4><a class="signature-arity" href="#ModifiedPip.new+2" title="Permanent link">2</a><signature id="ModifiedPip.new+2">

```lx
ModifiedPip.new(ui : UI, kind : BlockFieldModified) : ModifiedPip
```
</signature>

> no docs found   


### UIBlock
`import "luxe: ui/block" for UIBlock{:lx}`
> no docs found

- [create](#UIBlock.create)(**ui**: `Entity{:lx}`)
- [set_block_instance](#UIBlock.set_block_instance+3)(**control**: `Control{:lx}`, **block**: `Block{:lx}`, **instance**: `BlockInstance{:lx}`)
- [set_block_instances](#UIBlock.set_block_instances+3)(**control**: `Control{:lx}`, **block**: `Block{:lx}`, **instances**: `List{:lx}`)
- [set_blocks_instances](#UIBlock.set_blocks_instances+3)(**control**: `Control{:lx}`, **blocks**: `List{:lx}`, **instances**: `List{:lx}`)
- [set_sizes](#UIBlock.set_sizes+4)(**control**: `Control{:lx}`, **label_width**: `Num{:lx}`, **label_size**: `Num{:lx}`, **field_height**: `Num{:lx}`)
- [refresh](#UIBlock.refresh)(**control**: `Control{:lx}`)
- [set_allow_gizmo](#UIBlock.set_allow_gizmo+2)(**control**: `Control{:lx}`, **yes**: `Bool{:lx}`)
- [get_handle_assets](#UIBlock.get_handle_assets)(**control**: `Control{:lx}`)
- [set_handle_assets](#UIBlock.set_handle_assets+2)(**control**: `Control{:lx}`, **yes**: `Bool{:lx}`)
- [set_show_defaults](#UIBlock.set_show_defaults+2)(**control**: `Control{:lx}`, **yes**: `Bool{:lx}`)
- [get_block_fields](#UIBlock.get_block_fields)(**control**: `Any{:lx}`)


---

<endpoint module="luxe: ui/block" class="UIBlock" signature="create(ui : Entity)"></endpoint>
<h4 class="signature_head">UIBlock.create</h4><a class="signature-arity" href="#UIBlock.create" title="Permanent link">1</a><signature id="UIBlock.create">

```lx
UIBlock.create(ui : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_block_instance(control : Control, block : Block, instance : BlockInstance)"></endpoint>
<h4 class="signature_head">UIBlock.set_block_instance</h4><a class="signature-arity" href="#UIBlock.set_block_instance+3" title="Permanent link">3</a><signature id="UIBlock.set_block_instance+3">

```lx
UIBlock.set_block_instance(control : Control, block : Block, instance : BlockInstance) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_block_instances(control : Control, block : Block, instances : List)"></endpoint>
<h4 class="signature_head">UIBlock.set_block_instances</h4><a class="signature-arity" href="#UIBlock.set_block_instances+3" title="Permanent link">3</a><signature id="UIBlock.set_block_instances+3">

```lx
UIBlock.set_block_instances(control : Control, block : Block, instances : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_blocks_instances(control : Control, blocks : List, instances : List)"></endpoint>
<h4 class="signature_head">UIBlock.set_blocks_instances</h4><a class="signature-arity" href="#UIBlock.set_blocks_instances+3" title="Permanent link">3</a><signature id="UIBlock.set_blocks_instances+3">

```lx
UIBlock.set_blocks_instances(control : Control, blocks : List, instances : List) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_sizes(control : Control, label_width : Num, label_size : Num, field_height : Num)"></endpoint>
<h4 class="signature_head">UIBlock.set_sizes</h4><a class="signature-arity" href="#UIBlock.set_sizes+4" title="Permanent link">4</a><signature id="UIBlock.set_sizes+4">

```lx
UIBlock.set_sizes(control : Control, label_width : Num, label_size : Num, field_height : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="refresh(control : Control)"></endpoint>
<h4 class="signature_head">UIBlock.refresh</h4><a class="signature-arity" href="#UIBlock.refresh" title="Permanent link">1</a><signature id="UIBlock.refresh">

```lx
UIBlock.refresh(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_allow_gizmo(control : Control, yes : Bool)"></endpoint>
<h4 class="signature_head">UIBlock.set_allow_gizmo</h4><a class="signature-arity" href="#UIBlock.set_allow_gizmo+2" title="Permanent link">2</a><signature id="UIBlock.set_allow_gizmo+2">

```lx
UIBlock.set_allow_gizmo(control : Control, yes : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="get_handle_assets(control : Control)"></endpoint>
<h4 class="signature_head">UIBlock.get_handle_assets</h4><a class="signature-arity" href="#UIBlock.get_handle_assets" title="Permanent link">1</a><signature id="UIBlock.get_handle_assets">

```lx
UIBlock.get_handle_assets(control : Control) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_handle_assets(control : Control, yes : Bool)"></endpoint>
<h4 class="signature_head">UIBlock.set_handle_assets</h4><a class="signature-arity" href="#UIBlock.set_handle_assets+2" title="Permanent link">2</a><signature id="UIBlock.set_handle_assets+2">

```lx
UIBlock.set_handle_assets(control : Control, yes : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="set_show_defaults(control : Control, yes : Bool)"></endpoint>
<h4 class="signature_head">UIBlock.set_show_defaults</h4><a class="signature-arity" href="#UIBlock.set_show_defaults+2" title="Permanent link">2</a><signature id="UIBlock.set_show_defaults+2">

```lx
UIBlock.set_show_defaults(control : Control, yes : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlock" signature="get_block_fields(control : Any)"></endpoint>
<h4 class="signature_head">UIBlock.get_block_fields</h4><a class="signature-arity" href="#UIBlock.get_block_fields" title="Permanent link">1</a><signature id="UIBlock.get_block_fields">

```lx
UIBlock.get_block_fields(control : Any) : Map
```
</signature>

> no docs found   


### UIBlockAssetEvent
`import "luxe: ui/block" for UIBlockAssetEvent{:lx}`
> no docs found

- `var view : ValueView = null{:lx}`
- [tags](#UIBlockAssetEvent.tags)
- [original](#UIBlockAssetEvent.original)
- [new](#UIBlockAssetEvent.new+4)(**tags_in**: `List{:lx}`, **original_in**: `String{:lx}`, **view**: `ValueView{:lx}`, **fn**: `Fn{:lx}`)
- [done](#UIBlockAssetEvent.done)(**value**: `String{:lx}`)


---

<endpoint module="luxe: ui/block" class="UIBlockAssetEvent" signature="tags"></endpoint>
<h4 class="signature_head">UIBlockAssetEvent.tags</h4><a class="signature-arity" href="#UIBlockAssetEvent.tags" title="Permanent link">1</a><signature id="UIBlockAssetEvent.tags">

```lx
UIBlockAssetEvent.tags : List
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockAssetEvent" signature="original"></endpoint>
<h4 class="signature_head">UIBlockAssetEvent.original</h4><a class="signature-arity" href="#UIBlockAssetEvent.original" title="Permanent link">1</a><signature id="UIBlockAssetEvent.original">

```lx
UIBlockAssetEvent.original : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockAssetEvent" signature="new(tags_in : List, original_in : String, view : ValueView, fn : Fn)"></endpoint>
<h4 class="signature_head">UIBlockAssetEvent.new</h4><a class="signature-arity" href="#UIBlockAssetEvent.new+4" title="Permanent link">4</a><signature id="UIBlockAssetEvent.new+4">

```lx
UIBlockAssetEvent.new(tags_in : List, original_in : String, view : ValueView, fn : Fn) : UIBlockAssetEvent
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockAssetEvent" signature="done(value : String)"></endpoint>
<h4 class="signature_head">UIBlockAssetEvent.done</h4><a class="signature-arity" href="#UIBlockAssetEvent.done" title="Permanent link">1</a><signature id="UIBlockAssetEvent.done">

```lx
UIBlockAssetEvent.done(value : String) : unknown
```
</signature>

> no docs found   


### UIBlockChange
`import "luxe: ui/block" for UIBlockChange{:lx}`
> A change in the block ui can inside a nested block, each
> with it's own individual instance, list of nested fields, and list of 
> nested array index values each step down. This tracks that for changes.

- `var change_id : Any = null{:lx}`
- [new](#UIBlockChange.new+8)(**kind**: `UIBlockChangeType{:lx}`, **root**: `Block{:lx}`, **root_instance**: `BlockInstance{:lx}`, **blocks**: `List{:lx}`, **instances**: `List{:lx}`, **fields**: `List{:lx}`, **indices**: `List{:lx}`, **edit_value**: `Any{:lx}`)
- [refresh](#UIBlockChange.refresh)()
- [handle](#UIBlockChange.handle)()
- [set_refresh](#UIBlockChange.set_refresh)(**fn**: `Fn{:lx}`)
- [set_handler](#UIBlockChange.set_handler)(**fn**: `Fn{:lx}`)
- [kind](#UIBlockChange.kind)
- [block](#UIBlockChange.block)
- [instance](#UIBlockChange.instance)
- [blocks](#UIBlockChange.blocks)
- [instances](#UIBlockChange.instances)
- [field](#UIBlockChange.field)
- [array_indices](#UIBlockChange.array_indices)
- [field_index](#UIBlockChange.field_index)(**idx**: `Num{:lx}`)
- [default](#UIBlockChange.default)
- [get_field_value](#UIBlockChange.get_field_value)()
- [get_leaf_value](#UIBlockChange.get_leaf_value)()
- [leaf_block](#UIBlockChange.leaf_block)
- [leaf_instance](#UIBlockChange.leaf_instance)
- [leaf_field_index](#UIBlockChange.leaf_field_index)
- [leaf_array_index](#UIBlockChange.leaf_array_index)
- [get_change_value](#UIBlockChange.get_change_value)()
- [field_is_array](#UIBlockChange.field_is_array)()
- [field_is_object](#UIBlockChange.field_is_object)()
- [value](#UIBlockChange.value)
- [edit_value](#UIBlockChange.edit_value)


---

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="new(kind : UIBlockChangeType, root : Block, root_instance : BlockInstance, blocks : List, instances : List, fields : List, indices : List, edit_value : Any)"></endpoint>
<h4 class="signature_head">UIBlockChange.new</h4><a class="signature-arity" href="#UIBlockChange.new+8" title="Permanent link">8</a><signature id="UIBlockChange.new+8">

```lx
UIBlockChange.new(kind : UIBlockChangeType, root : Block, root_instance : BlockInstance, blocks : List, instances : List, fields : List, indices : List, edit_value : Any) : UIBlockChange
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="refresh()"></endpoint>
<h4 class="signature_head">UIBlockChange.refresh</h4><a class="signature-arity" href="#UIBlockChange.refresh" title="Permanent link">1</a><signature id="UIBlockChange.refresh">

```lx
UIBlockChange.refresh() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="handle()"></endpoint>
<h4 class="signature_head">UIBlockChange.handle</h4><a class="signature-arity" href="#UIBlockChange.handle" title="Permanent link">1</a><signature id="UIBlockChange.handle">

```lx
UIBlockChange.handle() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="set_refresh(fn : Fn)"></endpoint>
<h4 class="signature_head">UIBlockChange.set_refresh</h4><a class="signature-arity" href="#UIBlockChange.set_refresh" title="Permanent link">1</a><signature id="UIBlockChange.set_refresh">

```lx
UIBlockChange.set_refresh(fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="set_handler(fn : Fn)"></endpoint>
<h4 class="signature_head">UIBlockChange.set_handler</h4><a class="signature-arity" href="#UIBlockChange.set_handler" title="Permanent link">1</a><signature id="UIBlockChange.set_handler">

```lx
UIBlockChange.set_handler(fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="kind"></endpoint>
<h4 class="signature_head">UIBlockChange.kind</h4><a class="signature-arity" href="#UIBlockChange.kind" title="Permanent link">1</a><signature id="UIBlockChange.kind">

```lx
UIBlockChange.kind : UIBlockChangeType
```
</signature>

> The type of change event   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="block"></endpoint>
<h4 class="signature_head">UIBlockChange.block</h4><a class="signature-arity" href="#UIBlockChange.block" title="Permanent link">1</a><signature id="UIBlockChange.block">

```lx
UIBlockChange.block : Block
```
</signature>

> The root block in which the change occurred   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="instance"></endpoint>
<h4 class="signature_head">UIBlockChange.instance</h4><a class="signature-arity" href="#UIBlockChange.instance" title="Permanent link">1</a><signature id="UIBlockChange.instance">

```lx
UIBlockChange.instance : Num
```
</signature>

> The instance of the root block   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="blocks"></endpoint>
<h4 class="signature_head">UIBlockChange.blocks</h4><a class="signature-arity" href="#UIBlockChange.blocks" title="Permanent link">1</a><signature id="UIBlockChange.blocks">

```lx
UIBlockChange.blocks : List
```
</signature>

> The list of blocks down the chain e.g some.nested.field   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="instances"></endpoint>
<h4 class="signature_head">UIBlockChange.instances</h4><a class="signature-arity" href="#UIBlockChange.instances" title="Permanent link">1</a><signature id="UIBlockChange.instances">

```lx
UIBlockChange.instances : List
```
</signature>

> The list of instances for each block down the chain e.g some.nested.field   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="field"></endpoint>
<h4 class="signature_head">UIBlockChange.field</h4><a class="signature-arity" href="#UIBlockChange.field" title="Permanent link">1</a><signature id="UIBlockChange.field">

```lx
UIBlockChange.field : List
```
</signature>

> The list of nested fields for each block, e.g some.nested.field -> ["some", "nested", "field"]   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="array_indices"></endpoint>
<h4 class="signature_head">UIBlockChange.array_indices</h4><a class="signature-arity" href="#UIBlockChange.array_indices" title="Permanent link">1</a><signature id="UIBlockChange.array_indices">

```lx
UIBlockChange.array_indices : Num
```
</signature>

> The array index for each nested block. e.g some.nested[2].block[3] is [0, 2, 3]   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="field_index(idx : Num)"></endpoint>
<h4 class="signature_head">UIBlockChange.field_index</h4><a class="signature-arity" href="#UIBlockChange.field_index" title="Permanent link">1</a><signature id="UIBlockChange.field_index">

```lx
UIBlockChange.field_index(idx : Num) : Num
```
</signature>

> The field index for the field in the fields list. 
>   e.g ["some", "nested", "field"] -> field_index[1] returns the field index of nested in the second block down   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="default"></endpoint>
<h4 class="signature_head">UIBlockChange.default</h4><a class="signature-arity" href="#UIBlockChange.default" title="Permanent link">1</a><signature id="UIBlockChange.default">

```lx
UIBlockChange.default : Any
```
</signature>

> The default value in the leaf block for this field   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="get_field_value()"></endpoint>
<h4 class="signature_head">UIBlockChange.get_field_value</h4><a class="signature-arity" href="#UIBlockChange.get_field_value" title="Permanent link">1</a><signature id="UIBlockChange.get_field_value">

```lx
UIBlockChange.get_field_value() : Any
```
</signature>

> The current value in the leaf block for this field (e.g for an array, returns the contents of the array)   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="get_leaf_value()"></endpoint>
<h4 class="signature_head">UIBlockChange.get_leaf_value</h4><a class="signature-arity" href="#UIBlockChange.get_leaf_value" title="Permanent link">1</a><signature id="UIBlockChange.get_leaf_value">

```lx
UIBlockChange.get_leaf_value() : Any
```
</signature>

> The current value in the leaf for this block/field/array?   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="leaf_block"></endpoint>
<h4 class="signature_head">UIBlockChange.leaf_block</h4><a class="signature-arity" href="#UIBlockChange.leaf_block" title="Permanent link">1</a><signature id="UIBlockChange.leaf_block">

```lx
UIBlockChange.leaf_block : Block
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="leaf_instance"></endpoint>
<h4 class="signature_head">UIBlockChange.leaf_instance</h4><a class="signature-arity" href="#UIBlockChange.leaf_instance" title="Permanent link">1</a><signature id="UIBlockChange.leaf_instance">

```lx
UIBlockChange.leaf_instance : BlockInstance
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="leaf_field_index"></endpoint>
<h4 class="signature_head">UIBlockChange.leaf_field_index</h4><a class="signature-arity" href="#UIBlockChange.leaf_field_index" title="Permanent link">1</a><signature id="UIBlockChange.leaf_field_index">

```lx
UIBlockChange.leaf_field_index : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="leaf_array_index"></endpoint>
<h4 class="signature_head">UIBlockChange.leaf_array_index</h4><a class="signature-arity" href="#UIBlockChange.leaf_array_index" title="Permanent link">1</a><signature id="UIBlockChange.leaf_array_index">

```lx
UIBlockChange.leaf_array_index : Num
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="get_change_value()"></endpoint>
<h4 class="signature_head">UIBlockChange.get_change_value</h4><a class="signature-arity" href="#UIBlockChange.get_change_value" title="Permanent link">1</a><signature id="UIBlockChange.get_change_value">

```lx
UIBlockChange.get_change_value() : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="field_is_array()"></endpoint>
<h4 class="signature_head">UIBlockChange.field_is_array</h4><a class="signature-arity" href="#UIBlockChange.field_is_array" title="Permanent link">1</a><signature id="UIBlockChange.field_is_array">

```lx
UIBlockChange.field_is_array() : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="field_is_object()"></endpoint>
<h4 class="signature_head">UIBlockChange.field_is_object</h4><a class="signature-arity" href="#UIBlockChange.field_is_object" title="Permanent link">1</a><signature id="UIBlockChange.field_is_object">

```lx
UIBlockChange.field_is_object() : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="value"></endpoint>
<h4 class="signature_head">UIBlockChange.value</h4><a class="signature-arity" href="#UIBlockChange.value" title="Permanent link">1</a><signature id="UIBlockChange.value">

```lx
UIBlockChange.value : Any
```
</signature>

> The intended change value based on type   

<endpoint module="luxe: ui/block" class="UIBlockChange" signature="edit_value"></endpoint>
<h4 class="signature_head">UIBlockChange.edit_value</h4><a class="signature-arity" href="#UIBlockChange.edit_value" title="Permanent link">1</a><signature id="UIBlockChange.edit_value">

```lx
UIBlockChange.edit_value : Any
```
</signature>

> The value from the ui at the time of the change   


### UIBlockChangeType
`import "luxe: ui/block" for UIBlockChangeType{:lx}`
> no docs found

- [NORMAL](#UIBlockChangeType.NORMAL)
- [RESET](#UIBlockChangeType.RESET)
- [ARRAY_ADD](#UIBlockChangeType.ARRAY_ADD)
- [ARRAY_REMOVE](#UIBlockChangeType.ARRAY_REMOVE)
- [ARRAY_CLEAR](#UIBlockChangeType.ARRAY_CLEAR)
- [ARRAY_RESET](#UIBlockChangeType.ARRAY_RESET)
- [ARRAY_ELEMENT_RESET](#UIBlockChangeType.ARRAY_ELEMENT_RESET)
- [ARRAY_REORDER](#UIBlockChangeType.ARRAY_REORDER)
- [BLOCK](#UIBlockChangeType.BLOCK)


---

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="NORMAL"></endpoint>
<h4 class="signature_head">UIBlockChangeType.NORMAL</h4><a class="signature-arity" href="#UIBlockChangeType.NORMAL" title="Permanent link">1</a><signature id="UIBlockChangeType.NORMAL">

```lx
UIBlockChangeType.NORMAL : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="RESET"></endpoint>
<h4 class="signature_head">UIBlockChangeType.RESET</h4><a class="signature-arity" href="#UIBlockChangeType.RESET" title="Permanent link">1</a><signature id="UIBlockChangeType.RESET">

```lx
UIBlockChangeType.RESET : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_ADD"></endpoint>
<h4 class="signature_head">UIBlockChangeType.ARRAY_ADD</h4><a class="signature-arity" href="#UIBlockChangeType.ARRAY_ADD" title="Permanent link">1</a><signature id="UIBlockChangeType.ARRAY_ADD">

```lx
UIBlockChangeType.ARRAY_ADD : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_REMOVE"></endpoint>
<h4 class="signature_head">UIBlockChangeType.ARRAY_REMOVE</h4><a class="signature-arity" href="#UIBlockChangeType.ARRAY_REMOVE" title="Permanent link">1</a><signature id="UIBlockChangeType.ARRAY_REMOVE">

```lx
UIBlockChangeType.ARRAY_REMOVE : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_CLEAR"></endpoint>
<h4 class="signature_head">UIBlockChangeType.ARRAY_CLEAR</h4><a class="signature-arity" href="#UIBlockChangeType.ARRAY_CLEAR" title="Permanent link">1</a><signature id="UIBlockChangeType.ARRAY_CLEAR">

```lx
UIBlockChangeType.ARRAY_CLEAR : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_RESET"></endpoint>
<h4 class="signature_head">UIBlockChangeType.ARRAY_RESET</h4><a class="signature-arity" href="#UIBlockChangeType.ARRAY_RESET" title="Permanent link">1</a><signature id="UIBlockChangeType.ARRAY_RESET">

```lx
UIBlockChangeType.ARRAY_RESET : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_ELEMENT_RESET"></endpoint>
<h4 class="signature_head">UIBlockChangeType.ARRAY_ELEMENT_RESET</h4><a class="signature-arity" href="#UIBlockChangeType.ARRAY_ELEMENT_RESET" title="Permanent link">1</a><signature id="UIBlockChangeType.ARRAY_ELEMENT_RESET">

```lx
UIBlockChangeType.ARRAY_ELEMENT_RESET : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="ARRAY_REORDER"></endpoint>
<h4 class="signature_head">UIBlockChangeType.ARRAY_REORDER</h4><a class="signature-arity" href="#UIBlockChangeType.ARRAY_REORDER" title="Permanent link">1</a><signature id="UIBlockChangeType.ARRAY_REORDER">

```lx
UIBlockChangeType.ARRAY_REORDER : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockChangeType" signature="BLOCK"></endpoint>
<h4 class="signature_head">UIBlockChangeType.BLOCK</h4><a class="signature-arity" href="#UIBlockChangeType.BLOCK" title="Permanent link">1</a><signature id="UIBlockChangeType.BLOCK">

```lx
UIBlockChangeType.BLOCK : unknown
```
</signature>

> no docs found   


### UIBlockEventType
`import "luxe: ui/block" for UIBlockEventType{:lx}`
> no docs found

- [asset](#UIBlockEventType.asset)
- [link](#UIBlockEventType.link)
- [gizmo](#UIBlockEventType.gizmo)


---

<endpoint module="luxe: ui/block" class="UIBlockEventType" signature="asset"></endpoint>
<h4 class="signature_head">UIBlockEventType.asset</h4><a class="signature-arity" href="#UIBlockEventType.asset" title="Permanent link">1</a><signature id="UIBlockEventType.asset">

```lx
UIBlockEventType.asset : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockEventType" signature="link"></endpoint>
<h4 class="signature_head">UIBlockEventType.link</h4><a class="signature-arity" href="#UIBlockEventType.link" title="Permanent link">1</a><signature id="UIBlockEventType.link">

```lx
UIBlockEventType.link : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockEventType" signature="gizmo"></endpoint>
<h4 class="signature_head">UIBlockEventType.gizmo</h4><a class="signature-arity" href="#UIBlockEventType.gizmo" title="Permanent link">1</a><signature id="UIBlockEventType.gizmo">

```lx
UIBlockEventType.gizmo : unknown
```
</signature>

> no docs found   


### UIBlockGizmoEvent
`import "luxe: ui/block" for UIBlockGizmoEvent{:lx}`
> no docs found

- `var view : ValueView = null{:lx}`
- `var kind : String = "translate"{:lx}`
- `var on_done : Fn = null{:lx}`
- `var is_done : Bool = false{:lx}`
- [original](#UIBlockGizmoEvent.original)
- [new](#UIBlockGizmoEvent.new+4)(**kind_in**: `String{:lx}`, **original_in**: `String{:lx}`, **view**: `ValueView{:lx}`, **fn**: `Fn{:lx}`)
- [done](#UIBlockGizmoEvent.done)()
- [update](#UIBlockGizmoEvent.update)(**value**: `String{:lx}`)


---

<endpoint module="luxe: ui/block" class="UIBlockGizmoEvent" signature="original"></endpoint>
<h4 class="signature_head">UIBlockGizmoEvent.original</h4><a class="signature-arity" href="#UIBlockGizmoEvent.original" title="Permanent link">1</a><signature id="UIBlockGizmoEvent.original">

```lx
UIBlockGizmoEvent.original : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockGizmoEvent" signature="new(kind_in : String, original_in : String, view : ValueView, fn : Fn)"></endpoint>
<h4 class="signature_head">UIBlockGizmoEvent.new</h4><a class="signature-arity" href="#UIBlockGizmoEvent.new+4" title="Permanent link">4</a><signature id="UIBlockGizmoEvent.new+4">

```lx
UIBlockGizmoEvent.new(kind_in : String, original_in : String, view : ValueView, fn : Fn) : UIBlockGizmoEvent
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockGizmoEvent" signature="done()"></endpoint>
<h4 class="signature_head">UIBlockGizmoEvent.done</h4><a class="signature-arity" href="#UIBlockGizmoEvent.done" title="Permanent link">1</a><signature id="UIBlockGizmoEvent.done">

```lx
UIBlockGizmoEvent.done() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockGizmoEvent" signature="update(value : String)"></endpoint>
<h4 class="signature_head">UIBlockGizmoEvent.update</h4><a class="signature-arity" href="#UIBlockGizmoEvent.update" title="Permanent link">1</a><signature id="UIBlockGizmoEvent.update">

```lx
UIBlockGizmoEvent.update(value : String) : unknown
```
</signature>

> no docs found   


### UIBlockLinkEvent
`import "luxe: ui/block" for UIBlockLinkEvent{:lx}`
> no docs found

- [original](#UIBlockLinkEvent.original)
- [tag](#UIBlockLinkEvent.tag)
- [from_drop](#UIBlockLinkEvent.from_drop)
- [drop_payload](#UIBlockLinkEvent.drop_payload)
- [link_target](#UIBlockLinkEvent.link_target)
- [new](#UIBlockLinkEvent.new+4)(**original_in**: `List{:lx}`, **tag**: `ID32{:lx}`, **link_target**: `Handle{:lx}`, **fn**: `Fn{:lx}`)
- [new](#UIBlockLinkEvent.new+5)(**original_in**: `List{:lx}`, **tag**: `ID32{:lx}`, **link_target**: `Handle{:lx}`, **drop_payload**: `Handle{:lx}`, **fn**: `Fn{:lx}`)
- [done](#UIBlockLinkEvent.done)(**value**: `List{:lx}`)


---

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="original"></endpoint>
<h4 class="signature_head">UIBlockLinkEvent.original</h4><a class="signature-arity" href="#UIBlockLinkEvent.original" title="Permanent link">1</a><signature id="UIBlockLinkEvent.original">

```lx
UIBlockLinkEvent.original : List
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="tag"></endpoint>
<h4 class="signature_head">UIBlockLinkEvent.tag</h4><a class="signature-arity" href="#UIBlockLinkEvent.tag" title="Permanent link">1</a><signature id="UIBlockLinkEvent.tag">

```lx
UIBlockLinkEvent.tag : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="from_drop"></endpoint>
<h4 class="signature_head">UIBlockLinkEvent.from_drop</h4><a class="signature-arity" href="#UIBlockLinkEvent.from_drop" title="Permanent link">1</a><signature id="UIBlockLinkEvent.from_drop">

```lx
UIBlockLinkEvent.from_drop : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="drop_payload"></endpoint>
<h4 class="signature_head">UIBlockLinkEvent.drop_payload</h4><a class="signature-arity" href="#UIBlockLinkEvent.drop_payload" title="Permanent link">1</a><signature id="UIBlockLinkEvent.drop_payload">

```lx
UIBlockLinkEvent.drop_payload : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="link_target"></endpoint>
<h4 class="signature_head">UIBlockLinkEvent.link_target</h4><a class="signature-arity" href="#UIBlockLinkEvent.link_target" title="Permanent link">1</a><signature id="UIBlockLinkEvent.link_target">

```lx
UIBlockLinkEvent.link_target : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="new(original_in : List, tag : ID32, link_target : Handle, fn : Fn)"></endpoint>
<h4 class="signature_head">UIBlockLinkEvent.new</h4><a class="signature-arity" href="#UIBlockLinkEvent.new+4" title="Permanent link">4</a><signature id="UIBlockLinkEvent.new+4">

```lx
UIBlockLinkEvent.new(original_in : List, tag : ID32, link_target : Handle, fn : Fn) : UIBlockLinkEvent
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="new(original_in : List, tag : ID32, link_target : Handle, drop_payload : Handle, fn : Fn)"></endpoint>
<h4 class="signature_head">UIBlockLinkEvent.new</h4><a class="signature-arity" href="#UIBlockLinkEvent.new+5" title="Permanent link">5</a><signature id="UIBlockLinkEvent.new+5">

```lx
UIBlockLinkEvent.new(original_in : List, tag : ID32, link_target : Handle, drop_payload : Handle, fn : Fn) : UIBlockLinkEvent
```
</signature>

> no docs found   

<endpoint module="luxe: ui/block" class="UIBlockLinkEvent" signature="done(value : List)"></endpoint>
<h4 class="signature_head">UIBlockLinkEvent.done</h4><a class="signature-arity" href="#UIBlockLinkEvent.done" title="Permanent link">1</a><signature id="UIBlockLinkEvent.done">

```lx
UIBlockLinkEvent.done(value : List) : unknown
```
</signature>

> no docs found   

