---
title: "luxe: ui/world"
description: API version 2025.11.1
---
## `luxe: ui/world{:lx}` module

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


### BucketedNodes
`import "luxe: ui/world" for BucketedNodes{:lx}`
> no docs found

- `var count : Num = 0{:lx}`
- `var bucket_size : Num = 64{:lx}`
- `var buckets : List = [[]]{:lx}`
- [new](#BucketedNodes.new)(**size**: `Num{:lx}`)
- [clear](#BucketedNodes.clear)()
- [insert](#BucketedNodes.insert)(**node**: `TreeNode{:lx}`)
- [remove](#BucketedNodes.remove)(**node**: `TreeNode{:lx}`)
- [find_bucket](#BucketedNodes.find_bucket)(**display**: `String{:lx}`)
- [toList](#BucketedNodes.toList)


---

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="new(size : Num)"></endpoint>
<h4 class="signature_head">BucketedNodes.new</h4><a class="signature-arity" href="#BucketedNodes.new" title="Permanent link">1</a><signature id="BucketedNodes.new">

```lx
BucketedNodes.new(size : Num) : BucketedNodes
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="clear()"></endpoint>
<h4 class="signature_head">BucketedNodes.clear</h4><a class="signature-arity" href="#BucketedNodes.clear" title="Permanent link">1</a><signature id="BucketedNodes.clear">

```lx
BucketedNodes.clear() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="insert(node : TreeNode)"></endpoint>
<h4 class="signature_head">BucketedNodes.insert</h4><a class="signature-arity" href="#BucketedNodes.insert" title="Permanent link">1</a><signature id="BucketedNodes.insert">

```lx
BucketedNodes.insert(node : TreeNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="remove(node : TreeNode)"></endpoint>
<h4 class="signature_head">BucketedNodes.remove</h4><a class="signature-arity" href="#BucketedNodes.remove" title="Permanent link">1</a><signature id="BucketedNodes.remove">

```lx
BucketedNodes.remove(node : TreeNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="find_bucket(display : String)"></endpoint>
<h4 class="signature_head">BucketedNodes.find_bucket</h4><a class="signature-arity" href="#BucketedNodes.find_bucket" title="Permanent link">1</a><signature id="BucketedNodes.find_bucket">

```lx
BucketedNodes.find_bucket(display : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="BucketedNodes" signature="toList"></endpoint>
<h4 class="signature_head">BucketedNodes.toList</h4><a class="signature-arity" href="#BucketedNodes.toList" title="Permanent link">1</a><signature id="BucketedNodes.toList">

```lx
BucketedNodes.toList : unknown
```
</signature>

> no docs found   


### LabelCache
`import "luxe: ui/world" for LabelCache{:lx}`
> no docs found

- `var ui : Entity = Entity.none{:lx}`
- `var cache : List = []{:lx}`
- `var used : List = []{:lx}`
- [new](#LabelCache.new)(**in_ui**: `Entity{:lx}`)
- [reset](#LabelCache.reset)()
- [create](#LabelCache.create)()


---

<endpoint module="luxe: ui/world" class="LabelCache" signature="new(in_ui : Entity)"></endpoint>
<h4 class="signature_head">LabelCache.new</h4><a class="signature-arity" href="#LabelCache.new" title="Permanent link">1</a><signature id="LabelCache.new">

```lx
LabelCache.new(in_ui : Entity) : LabelCache
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="LabelCache" signature="reset()"></endpoint>
<h4 class="signature_head">LabelCache.reset</h4><a class="signature-arity" href="#LabelCache.reset" title="Permanent link">1</a><signature id="LabelCache.reset">

```lx
LabelCache.reset() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="LabelCache" signature="create()"></endpoint>
<h4 class="signature_head">LabelCache.create</h4><a class="signature-arity" href="#LabelCache.create" title="Permanent link">1</a><signature id="LabelCache.create">

```lx
LabelCache.create() : unknown
```
</signature>

> no docs found   


### TreeNodeIter
`import "luxe: ui/world" for TreeNodeIter{:lx}`
> no docs found

- [node](#TreeNodeIter.node)
- [new](#TreeNodeIter.new+2)(**node**: `TreeNode{:lx}`, **depth**: `Num{:lx}`)
- [iteratorValue](#TreeNodeIter.iteratorValue)(**index**: `Num{:lx}`)
- [next_bucket](#TreeNodeIter.next_bucket)(**from_start**: `Bool{:lx}`)
- [iterate](#TreeNodeIter.iterate)(**index**: `Num{:lx}`)


---

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="node"></endpoint>
<h4 class="signature_head">TreeNodeIter.node</h4><a class="signature-arity" href="#TreeNodeIter.node" title="Permanent link">1</a><signature id="TreeNodeIter.node">

```lx
TreeNodeIter.node : TreeNode
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="new(node : TreeNode, depth : Num)"></endpoint>
<h4 class="signature_head">TreeNodeIter.new</h4><a class="signature-arity" href="#TreeNodeIter.new+2" title="Permanent link">2</a><signature id="TreeNodeIter.new+2">

```lx
TreeNodeIter.new(node : TreeNode, depth : Num) : TreeNodeIter
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="iteratorValue(index : Num)"></endpoint>
<h4 class="signature_head">TreeNodeIter.iteratorValue</h4><a class="signature-arity" href="#TreeNodeIter.iteratorValue" title="Permanent link">1</a><signature id="TreeNodeIter.iteratorValue">

```lx
TreeNodeIter.iteratorValue(index : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="next_bucket(from_start : Bool)"></endpoint>
<h4 class="signature_head">TreeNodeIter.next_bucket</h4><a class="signature-arity" href="#TreeNodeIter.next_bucket" title="Permanent link">1</a><signature id="TreeNodeIter.next_bucket">

```lx
TreeNodeIter.next_bucket(from_start : Bool) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="TreeNodeIter" signature="iterate(index : Num)"></endpoint>
<h4 class="signature_head">TreeNodeIter.iterate</h4><a class="signature-arity" href="#TreeNodeIter.iterate" title="Permanent link">1</a><signature id="TreeNodeIter.iterate">

```lx
TreeNodeIter.iterate(index : Num) : unknown
```
</signature>

> no docs found   


### UIWorld
`import "luxe: ui/world" for UIWorld{:lx}`
> no docs found

- [create](#UIWorld.create)(**ui**: `UI{:lx}`)
- [set_world](#UIWorld.set_world+2)(**control**: `Control{:lx}`, **world**: `World{:lx}`)
- [set_handle_default_icons](#UIWorld.set_handle_default_icons+2)(**control**: `Control{:lx}`, **enable**: `Bool{:lx}`)
- [set_handle_folder_drop](#UIWorld.set_handle_folder_drop+2)(**control**: `Control{:lx}`, **enable**: `Bool{:lx}`)
- [refresh](#UIWorld.refresh)(**control**: `Control{:lx}`)
- [get_view](#UIWorld.get_view)(**control**: `Control{:lx}`)
- [scroll_to](#UIWorld.scroll_to+2)(**control**: `Control{:lx}`, **entity**: `Entity{:lx}`)
- [set_selection](#UIWorld.set_selection+2)(**control**: `Control{:lx}`, **selection**: `Selection{:lx}`)
- [get_selection](#UIWorld.get_selection)(**control**: `Control{:lx}`)
- [enter_select_mode](#UIWorld.enter_select_mode+3)(**control**: `Control{:lx}`, **enter_state**: `Bool{:lx}`, **display**: `String{:lx}`)
- [show_rename](#UIWorld.show_rename)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/world" class="UIWorld" signature="create(ui : UI)"></endpoint>
<h4 class="signature_head">UIWorld.create</h4><a class="signature-arity" href="#UIWorld.create" title="Permanent link">1</a><signature id="UIWorld.create">

```lx
UIWorld.create(ui : UI) : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="set_world(control : Control, world : World)"></endpoint>
<h4 class="signature_head">UIWorld.set_world</h4><a class="signature-arity" href="#UIWorld.set_world+2" title="Permanent link">2</a><signature id="UIWorld.set_world+2">

```lx
UIWorld.set_world(control : Control, world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="set_handle_default_icons(control : Control, enable : Bool)"></endpoint>
<h4 class="signature_head">UIWorld.set_handle_default_icons</h4><a class="signature-arity" href="#UIWorld.set_handle_default_icons+2" title="Permanent link">2</a><signature id="UIWorld.set_handle_default_icons+2">

```lx
UIWorld.set_handle_default_icons(control : Control, enable : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="set_handle_folder_drop(control : Control, enable : Bool)"></endpoint>
<h4 class="signature_head">UIWorld.set_handle_folder_drop</h4><a class="signature-arity" href="#UIWorld.set_handle_folder_drop+2" title="Permanent link">2</a><signature id="UIWorld.set_handle_folder_drop+2">

```lx
UIWorld.set_handle_folder_drop(control : Control, enable : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="refresh(control : Control)"></endpoint>
<h4 class="signature_head">UIWorld.refresh</h4><a class="signature-arity" href="#UIWorld.refresh" title="Permanent link">1</a><signature id="UIWorld.refresh">

```lx
UIWorld.refresh(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="get_view(control : Control)"></endpoint>
<h4 class="signature_head">UIWorld.get_view</h4><a class="signature-arity" href="#UIWorld.get_view" title="Permanent link">1</a><signature id="UIWorld.get_view">

```lx
UIWorld.get_view(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="scroll_to(control : Control, entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorld.scroll_to</h4><a class="signature-arity" href="#UIWorld.scroll_to+2" title="Permanent link">2</a><signature id="UIWorld.scroll_to+2">

```lx
UIWorld.scroll_to(control : Control, entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="set_selection(control : Control, selection : Selection)"></endpoint>
<h4 class="signature_head">UIWorld.set_selection</h4><a class="signature-arity" href="#UIWorld.set_selection+2" title="Permanent link">2</a><signature id="UIWorld.set_selection+2">

```lx
UIWorld.set_selection(control : Control, selection : Selection) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="get_selection(control : Control)"></endpoint>
<h4 class="signature_head">UIWorld.get_selection</h4><a class="signature-arity" href="#UIWorld.get_selection" title="Permanent link">1</a><signature id="UIWorld.get_selection">

```lx
UIWorld.get_selection(control : Control) : Selection
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="enter_select_mode(control : Control, enter_state : Bool, display : String)"></endpoint>
<h4 class="signature_head">UIWorld.enter_select_mode</h4><a class="signature-arity" href="#UIWorld.enter_select_mode+3" title="Permanent link">3</a><signature id="UIWorld.enter_select_mode+3">

```lx
UIWorld.enter_select_mode(control : Control, enter_state : Bool, display : String) : None
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorld" signature="show_rename(control : Control)"></endpoint>
<h4 class="signature_head">UIWorld.show_rename</h4><a class="signature-arity" href="#UIWorld.show_rename" title="Permanent link">1</a><signature id="UIWorld.show_rename">

```lx
UIWorld.show_rename(control : Control) : unknown
```
</signature>

> no docs found   


### UIWorldEvent
`import "luxe: ui/world" for UIWorldEvent{:lx}`
> no docs found

- [filter](#UIWorldEvent.filter)
- [save](#UIWorldEvent.save)
- [save_all](#UIWorldEvent.save_all)
- [delete](#UIWorldEvent.delete)
- [duplicate](#UIWorldEvent.duplicate)
- [rename](#UIWorldEvent.rename)
- [active_context](#UIWorldEvent.active_context)
- [focus](#UIWorldEvent.focus)
- [close](#UIWorldEvent.close)
- [dragging](#UIWorldEvent.dragging)
- [collapse](#UIWorldEvent.collapse)
- [uncollapse](#UIWorldEvent.uncollapse)
- [entity_drop](#UIWorldEvent.entity_drop)
- [folder_drop](#UIWorldEvent.folder_drop)
- [kind](#UIWorldEvent.kind)
- [items](#UIWorldEvent.items)
- [data](#UIWorldEvent.data)
- [data2](#UIWorldEvent.data2)
- [new](#UIWorldEvent.new+3)(**kind**: `UIWorldEvent{:lx}`, **items**: `List{:lx}`, **data**: `Any{:lx}`)
- [new](#UIWorldEvent.new+4)(**kind**: `UIWorldEvent{:lx}`, **items**: `List{:lx}`, **data**: `Any{:lx}`, **data2**: `Any{:lx}`)


---

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="filter"></endpoint>
<h4 class="signature_head">UIWorldEvent.filter</h4><a class="signature-arity" href="#UIWorldEvent.filter" title="Permanent link">1</a><signature id="UIWorldEvent.filter">

```lx
UIWorldEvent.filter : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="save"></endpoint>
<h4 class="signature_head">UIWorldEvent.save</h4><a class="signature-arity" href="#UIWorldEvent.save" title="Permanent link">1</a><signature id="UIWorldEvent.save">

```lx
UIWorldEvent.save : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="save_all"></endpoint>
<h4 class="signature_head">UIWorldEvent.save_all</h4><a class="signature-arity" href="#UIWorldEvent.save_all" title="Permanent link">1</a><signature id="UIWorldEvent.save_all">

```lx
UIWorldEvent.save_all : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="delete"></endpoint>
<h4 class="signature_head">UIWorldEvent.delete</h4><a class="signature-arity" href="#UIWorldEvent.delete" title="Permanent link">1</a><signature id="UIWorldEvent.delete">

```lx
UIWorldEvent.delete : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="duplicate"></endpoint>
<h4 class="signature_head">UIWorldEvent.duplicate</h4><a class="signature-arity" href="#UIWorldEvent.duplicate" title="Permanent link">1</a><signature id="UIWorldEvent.duplicate">

```lx
UIWorldEvent.duplicate : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="rename"></endpoint>
<h4 class="signature_head">UIWorldEvent.rename</h4><a class="signature-arity" href="#UIWorldEvent.rename" title="Permanent link">1</a><signature id="UIWorldEvent.rename">

```lx
UIWorldEvent.rename : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="active_context"></endpoint>
<h4 class="signature_head">UIWorldEvent.active_context</h4><a class="signature-arity" href="#UIWorldEvent.active_context" title="Permanent link">1</a><signature id="UIWorldEvent.active_context">

```lx
UIWorldEvent.active_context : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="focus"></endpoint>
<h4 class="signature_head">UIWorldEvent.focus</h4><a class="signature-arity" href="#UIWorldEvent.focus" title="Permanent link">1</a><signature id="UIWorldEvent.focus">

```lx
UIWorldEvent.focus : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="close"></endpoint>
<h4 class="signature_head">UIWorldEvent.close</h4><a class="signature-arity" href="#UIWorldEvent.close" title="Permanent link">1</a><signature id="UIWorldEvent.close">

```lx
UIWorldEvent.close : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="dragging"></endpoint>
<h4 class="signature_head">UIWorldEvent.dragging</h4><a class="signature-arity" href="#UIWorldEvent.dragging" title="Permanent link">1</a><signature id="UIWorldEvent.dragging">

```lx
UIWorldEvent.dragging : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="collapse"></endpoint>
<h4 class="signature_head">UIWorldEvent.collapse</h4><a class="signature-arity" href="#UIWorldEvent.collapse" title="Permanent link">1</a><signature id="UIWorldEvent.collapse">

```lx
UIWorldEvent.collapse : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="uncollapse"></endpoint>
<h4 class="signature_head">UIWorldEvent.uncollapse</h4><a class="signature-arity" href="#UIWorldEvent.uncollapse" title="Permanent link">1</a><signature id="UIWorldEvent.uncollapse">

```lx
UIWorldEvent.uncollapse : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="entity_drop"></endpoint>
<h4 class="signature_head">UIWorldEvent.entity_drop</h4><a class="signature-arity" href="#UIWorldEvent.entity_drop" title="Permanent link">1</a><signature id="UIWorldEvent.entity_drop">

```lx
UIWorldEvent.entity_drop : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="folder_drop"></endpoint>
<h4 class="signature_head">UIWorldEvent.folder_drop</h4><a class="signature-arity" href="#UIWorldEvent.folder_drop" title="Permanent link">1</a><signature id="UIWorldEvent.folder_drop">

```lx
UIWorldEvent.folder_drop : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="kind"></endpoint>
<h4 class="signature_head">UIWorldEvent.kind</h4><a class="signature-arity" href="#UIWorldEvent.kind" title="Permanent link">1</a><signature id="UIWorldEvent.kind">

```lx
UIWorldEvent.kind : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="items"></endpoint>
<h4 class="signature_head">UIWorldEvent.items</h4><a class="signature-arity" href="#UIWorldEvent.items" title="Permanent link">1</a><signature id="UIWorldEvent.items">

```lx
UIWorldEvent.items : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="data"></endpoint>
<h4 class="signature_head">UIWorldEvent.data</h4><a class="signature-arity" href="#UIWorldEvent.data" title="Permanent link">1</a><signature id="UIWorldEvent.data">

```lx
UIWorldEvent.data : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="data2"></endpoint>
<h4 class="signature_head">UIWorldEvent.data2</h4><a class="signature-arity" href="#UIWorldEvent.data2" title="Permanent link">1</a><signature id="UIWorldEvent.data2">

```lx
UIWorldEvent.data2 : Any
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="new(kind : UIWorldEvent, items : List, data : Any)"></endpoint>
<h4 class="signature_head">UIWorldEvent.new</h4><a class="signature-arity" href="#UIWorldEvent.new+3" title="Permanent link">3</a><signature id="UIWorldEvent.new+3">

```lx
UIWorldEvent.new(kind : UIWorldEvent, items : List, data : Any) : UIWorldEvent
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldEvent" signature="new(kind : UIWorldEvent, items : List, data : Any, data2 : Any)"></endpoint>
<h4 class="signature_head">UIWorldEvent.new</h4><a class="signature-arity" href="#UIWorldEvent.new+4" title="Permanent link">4</a><signature id="UIWorldEvent.new+4">

```lx
UIWorldEvent.new(kind : UIWorldEvent, items : List, data : Any, data2 : Any) : UIWorldEvent
```
</signature>

> no docs found   


### UIWorldIcon
`import "luxe: ui/world" for UIWorldIcon{:lx}`
> no docs found

- [icon](#UIWorldIcon.icon)
- [enabled](#UIWorldIcon.enabled)
- [enabled](#UIWorldIcon.enabled)(**handle**: `Num{:lx}`)
- [tooltip](#UIWorldIcon.tooltip)
- [tooltip](#UIWorldIcon.tooltip=)=(v : String)
- [selection_based](#UIWorldIcon.selection_based)
- [selection_based](#UIWorldIcon.selection_based=)=(v : String)
- [allow_indirect](#UIWorldIcon.allow_indirect)
- [allow_indirect](#UIWorldIcon.allow_indirect=)=(v : String)
- [svg](#UIWorldIcon.svg)
- [svg](#UIWorldIcon.svg=)=(v : Any)
- [new](#UIWorldIcon.new)(**world_view**: `UIWorld{:lx}`)
- [enable](#UIWorldIcon.enable)()
- [enable](#UIWorldIcon.enable)(**handle**: `Num{:lx}`)
- [disable](#UIWorldIcon.disable)()
- [disable](#UIWorldIcon.disable)(**handle**: `Num{:lx}`)
- [can_do_direct_only_action](#UIWorldIcon.can_do_direct_only_action)(**list**: `List{:lx}`)
- [on_selection](#UIWorldIcon.on_selection)(**fn**: `Fn{:lx}`)
- [on_release](#UIWorldIcon.on_release)(**fn**: `Fn{:lx}`)
- [on_enter](#UIWorldIcon.on_enter)(**fn**: `Fn{:lx}`)
- [on_exit](#UIWorldIcon.on_exit)(**fn**: `Fn{:lx}`)


---

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="icon"></endpoint>
<h4 class="signature_head">UIWorldIcon.icon</h4><a class="signature-arity" href="#UIWorldIcon.icon" title="Permanent link">1</a><signature id="UIWorldIcon.icon">

```lx
UIWorldIcon.icon : Control
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="enabled"></endpoint>
<h4 class="signature_head">UIWorldIcon.enabled</h4><a class="signature-arity" href="#UIWorldIcon.enabled" title="Permanent link">1</a><signature id="UIWorldIcon.enabled">

```lx
UIWorldIcon.enabled : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="enabled(handle : Num)"></endpoint>
<h4 class="signature_head">UIWorldIcon.enabled</h4><a class="signature-arity" href="#UIWorldIcon.enabled" title="Permanent link">1</a><signature id="UIWorldIcon.enabled">

```lx
UIWorldIcon.enabled(handle : Num) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="tooltip"></endpoint>
<h4 class="signature_head">UIWorldIcon.tooltip</h4><a class="signature-arity" href="#UIWorldIcon.tooltip" title="Permanent link">1</a><signature id="UIWorldIcon.tooltip">

```lx
UIWorldIcon.tooltip : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="tooltip=(v : String)"></endpoint>
<h4 class="signature_head">UIWorldIcon.tooltip</h4><a class="signature-arity" href="#UIWorldIcon.tooltip=" title="Permanent link">1</a><signature id="UIWorldIcon.tooltip=">

```lx
UIWorldIcon.tooltip=(v : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="selection_based"></endpoint>
<h4 class="signature_head">UIWorldIcon.selection_based</h4><a class="signature-arity" href="#UIWorldIcon.selection_based" title="Permanent link">1</a><signature id="UIWorldIcon.selection_based">

```lx
UIWorldIcon.selection_based : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="selection_based=(v : String)"></endpoint>
<h4 class="signature_head">UIWorldIcon.selection_based</h4><a class="signature-arity" href="#UIWorldIcon.selection_based=" title="Permanent link">1</a><signature id="UIWorldIcon.selection_based=">

```lx
UIWorldIcon.selection_based=(v : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="allow_indirect"></endpoint>
<h4 class="signature_head">UIWorldIcon.allow_indirect</h4><a class="signature-arity" href="#UIWorldIcon.allow_indirect" title="Permanent link">1</a><signature id="UIWorldIcon.allow_indirect">

```lx
UIWorldIcon.allow_indirect : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="allow_indirect=(v : String)"></endpoint>
<h4 class="signature_head">UIWorldIcon.allow_indirect</h4><a class="signature-arity" href="#UIWorldIcon.allow_indirect=" title="Permanent link">1</a><signature id="UIWorldIcon.allow_indirect=">

```lx
UIWorldIcon.allow_indirect=(v : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="svg"></endpoint>
<h4 class="signature_head">UIWorldIcon.svg</h4><a class="signature-arity" href="#UIWorldIcon.svg" title="Permanent link">1</a><signature id="UIWorldIcon.svg">

```lx
UIWorldIcon.svg : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="svg=(v : Any)"></endpoint>
<h4 class="signature_head">UIWorldIcon.svg</h4><a class="signature-arity" href="#UIWorldIcon.svg=" title="Permanent link">1</a><signature id="UIWorldIcon.svg=">

```lx
UIWorldIcon.svg=(v : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="new(world_view : UIWorld)"></endpoint>
<h4 class="signature_head">UIWorldIcon.new</h4><a class="signature-arity" href="#UIWorldIcon.new" title="Permanent link">1</a><signature id="UIWorldIcon.new">

```lx
UIWorldIcon.new(world_view : UIWorld) : UIWorldIcon
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="enable()"></endpoint>
<h4 class="signature_head">UIWorldIcon.enable</h4><a class="signature-arity" href="#UIWorldIcon.enable" title="Permanent link">1</a><signature id="UIWorldIcon.enable">

```lx
UIWorldIcon.enable() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="enable(handle : Num)"></endpoint>
<h4 class="signature_head">UIWorldIcon.enable</h4><a class="signature-arity" href="#UIWorldIcon.enable" title="Permanent link">1</a><signature id="UIWorldIcon.enable">

```lx
UIWorldIcon.enable(handle : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="disable()"></endpoint>
<h4 class="signature_head">UIWorldIcon.disable</h4><a class="signature-arity" href="#UIWorldIcon.disable" title="Permanent link">1</a><signature id="UIWorldIcon.disable">

```lx
UIWorldIcon.disable() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="disable(handle : Num)"></endpoint>
<h4 class="signature_head">UIWorldIcon.disable</h4><a class="signature-arity" href="#UIWorldIcon.disable" title="Permanent link">1</a><signature id="UIWorldIcon.disable">

```lx
UIWorldIcon.disable(handle : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="can_do_direct_only_action(list : List)"></endpoint>
<h4 class="signature_head">UIWorldIcon.can_do_direct_only_action</h4><a class="signature-arity" href="#UIWorldIcon.can_do_direct_only_action" title="Permanent link">1</a><signature id="UIWorldIcon.can_do_direct_only_action">

```lx
UIWorldIcon.can_do_direct_only_action(list : List) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="on_selection(fn : Fn)"></endpoint>
<h4 class="signature_head">UIWorldIcon.on_selection</h4><a class="signature-arity" href="#UIWorldIcon.on_selection" title="Permanent link">1</a><signature id="UIWorldIcon.on_selection">

```lx
UIWorldIcon.on_selection(fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="on_release(fn : Fn)"></endpoint>
<h4 class="signature_head">UIWorldIcon.on_release</h4><a class="signature-arity" href="#UIWorldIcon.on_release" title="Permanent link">1</a><signature id="UIWorldIcon.on_release">

```lx
UIWorldIcon.on_release(fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="on_enter(fn : Fn)"></endpoint>
<h4 class="signature_head">UIWorldIcon.on_enter</h4><a class="signature-arity" href="#UIWorldIcon.on_enter" title="Permanent link">1</a><signature id="UIWorldIcon.on_enter">

```lx
UIWorldIcon.on_enter(fn : Fn) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldIcon" signature="on_exit(fn : Fn)"></endpoint>
<h4 class="signature_head">UIWorldIcon.on_exit</h4><a class="signature-arity" href="#UIWorldIcon.on_exit" title="Permanent link">1</a><signature id="UIWorldIcon.on_exit">

```lx
UIWorldIcon.on_exit(fn : Fn) : unknown
```
</signature>

> no docs found   


### UIWorldLens
`import "luxe: ui/world" for UIWorldLens{:lx}`
> no docs found

- `var id : UUID = ID.uuid{:lx}`
- `var state : UIWorldState = null{:lx}`
- `var icon : String = "luxe: image/folder-open.svg"{:lx}`
- `var display : String = "Folder Hierarchy"{:lx}`
- `var name : String = "luxe.default"{:lx}`
- [new](#UIWorldLens.new)(**in_state**: `UIWorldState{:lx}`)
- [get_droppable_tags](#UIWorldLens.get_droppable_tags)(**entity**: `Entity{:lx}`)
- [on_drop](#UIWorldLens.on_drop+2)(**from**: `Entity{:lx}`, **to**: `Entity{:lx}`)
- [reset](#UIWorldLens.reset)(**tree_root**: `TreeNode{:lx}`)
- [post_add](#UIWorldLens.post_add)(**tree_root**: `TreeNode{:lx}`)
- [has_parent](#UIWorldLens.has_parent)(**entity**: `Entity{:lx}`)
- [get_parent](#UIWorldLens.get_parent)(**entity**: `Entity{:lx}`)
- [should_ignore](#UIWorldLens.should_ignore)(**entity**: `Entity{:lx}`)
- [entity_is_root](#UIWorldLens.entity_is_root)(**entity**: `Entity{:lx}`)
- [entity_is_origin](#UIWorldLens.entity_is_origin)(**entity**: `Entity{:lx}`)
- [add_root](#UIWorldLens.add_root+2)(**root**: `EntityNode{:lx}`, **entity_to_node**: `Map{:lx}`)
- [add_nested](#UIWorldLens.add_nested+2)(**node**: `EntityNode{:lx}`, **entity_to_node**: `Map{:lx}`)
- [create_node](#UIWorldLens.create_node)(**entity**: `Entity{:lx}`)
- [get_icon_id](#UIWorldLens.get_icon_id+2)(**entity**: `Entity{:lx}`, **collapsed**: `Bool{:lx}`)


---

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="new(in_state : UIWorldState)"></endpoint>
<h4 class="signature_head">UIWorldLens.new</h4><a class="signature-arity" href="#UIWorldLens.new" title="Permanent link">1</a><signature id="UIWorldLens.new">

```lx
UIWorldLens.new(in_state : UIWorldState) : UIWorldLens
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="get_droppable_tags(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLens.get_droppable_tags</h4><a class="signature-arity" href="#UIWorldLens.get_droppable_tags" title="Permanent link">1</a><signature id="UIWorldLens.get_droppable_tags">

```lx
UIWorldLens.get_droppable_tags(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="on_drop(from : Entity, to : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLens.on_drop</h4><a class="signature-arity" href="#UIWorldLens.on_drop+2" title="Permanent link">2</a><signature id="UIWorldLens.on_drop+2">

```lx
UIWorldLens.on_drop(from : Entity, to : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="reset(tree_root : TreeNode)"></endpoint>
<h4 class="signature_head">UIWorldLens.reset</h4><a class="signature-arity" href="#UIWorldLens.reset" title="Permanent link">1</a><signature id="UIWorldLens.reset">

```lx
UIWorldLens.reset(tree_root : TreeNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="post_add(tree_root : TreeNode)"></endpoint>
<h4 class="signature_head">UIWorldLens.post_add</h4><a class="signature-arity" href="#UIWorldLens.post_add" title="Permanent link">1</a><signature id="UIWorldLens.post_add">

```lx
UIWorldLens.post_add(tree_root : TreeNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="has_parent(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLens.has_parent</h4><a class="signature-arity" href="#UIWorldLens.has_parent" title="Permanent link">1</a><signature id="UIWorldLens.has_parent">

```lx
UIWorldLens.has_parent(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="get_parent(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLens.get_parent</h4><a class="signature-arity" href="#UIWorldLens.get_parent" title="Permanent link">1</a><signature id="UIWorldLens.get_parent">

```lx
UIWorldLens.get_parent(entity : Entity) : Entity
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="should_ignore(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLens.should_ignore</h4><a class="signature-arity" href="#UIWorldLens.should_ignore" title="Permanent link">1</a><signature id="UIWorldLens.should_ignore">

```lx
UIWorldLens.should_ignore(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="entity_is_root(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLens.entity_is_root</h4><a class="signature-arity" href="#UIWorldLens.entity_is_root" title="Permanent link">1</a><signature id="UIWorldLens.entity_is_root">

```lx
UIWorldLens.entity_is_root(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="entity_is_origin(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLens.entity_is_origin</h4><a class="signature-arity" href="#UIWorldLens.entity_is_origin" title="Permanent link">1</a><signature id="UIWorldLens.entity_is_origin">

```lx
UIWorldLens.entity_is_origin(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="add_root(root : EntityNode, entity_to_node : Map)"></endpoint>
<h4 class="signature_head">UIWorldLens.add_root</h4><a class="signature-arity" href="#UIWorldLens.add_root+2" title="Permanent link">2</a><signature id="UIWorldLens.add_root+2">

```lx
UIWorldLens.add_root(root : EntityNode, entity_to_node : Map) : unknown
```
</signature>

> an opportunity to process roots added to the view. e.g the default view processes folders inside this   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="add_nested(node : EntityNode, entity_to_node : Map)"></endpoint>
<h4 class="signature_head">UIWorldLens.add_nested</h4><a class="signature-arity" href="#UIWorldLens.add_nested+2" title="Permanent link">2</a><signature id="UIWorldLens.add_nested+2">

```lx
UIWorldLens.add_nested(node : EntityNode, entity_to_node : Map) : unknown
```
</signature>

> When an added child is added.  Return false to put into parent as expected, return true if you handled it manually.   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="create_node(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLens.create_node</h4><a class="signature-arity" href="#UIWorldLens.create_node" title="Permanent link">1</a><signature id="UIWorldLens.create_node">

```lx
UIWorldLens.create_node(entity : Entity) : TreeNode
```
</signature>

> add the nested child into it's parent   

<endpoint module="luxe: ui/world" class="UIWorldLens" signature="get_icon_id(entity : Entity, collapsed : Bool)"></endpoint>
<h4 class="signature_head">UIWorldLens.get_icon_id</h4><a class="signature-arity" href="#UIWorldLens.get_icon_id+2" title="Permanent link">2</a><signature id="UIWorldLens.get_icon_id+2">

```lx
UIWorldLens.get_icon_id(entity : Entity, collapsed : Bool) : unknown
```
</signature>

> no docs found   


### UIWorldLensDefault
`import "luxe: ui/world" for UIWorldLensDefault{:lx}`
> no docs found

- `var context_to_folders : Map = {}{:lx}`
- `var all_folders : Map = {}{:lx}`
- `var folder_id_to_folder_node : Map = {}{:lx}`
- [new](#UIWorldLensDefault.new)(**state**: `UIWorldState{:lx}`)
- [reset](#UIWorldLensDefault.reset)(**tree_root**: `TreeNode{:lx}`)
- [post_add](#UIWorldLensDefault.post_add)(**tree_root**: `TreeNode{:lx}`)
- [get_parent](#UIWorldLensDefault.get_parent)(**entity**: `Entity{:lx}`)
- [entity_is_root](#UIWorldLensDefault.entity_is_root)(**entity**: `Entity{:lx}`)
- [entity_is_origin](#UIWorldLensDefault.entity_is_origin)(**entity**: `Entity{:lx}`)
- [add_root](#UIWorldLensDefault.add_root+2)(**root**: `EntityNode{:lx}`, **entity_to_node**: `Map{:lx}`)
- [add_nested](#UIWorldLensDefault.add_nested+2)(**node**: `EntityNode{:lx}`, **entity_to_node**: `Map{:lx}`)
- [create_node](#UIWorldLensDefault.create_node)(**entity**: `Entity{:lx}`)
- [get_context_folder_map](#UIWorldLensDefault.get_context_folder_map)(**entity**: `Entity{:lx}`)
- [get_root_folders](#UIWorldLensDefault.get_root_folders)(**entity**: `Entity{:lx}`)


---

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="new(state : UIWorldState)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.new</h4><a class="signature-arity" href="#UIWorldLensDefault.new" title="Permanent link">1</a><signature id="UIWorldLensDefault.new">

```lx
UIWorldLensDefault.new(state : UIWorldState) : UIWorldLensDefault
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="reset(tree_root : TreeNode)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.reset</h4><a class="signature-arity" href="#UIWorldLensDefault.reset" title="Permanent link">1</a><signature id="UIWorldLensDefault.reset">

```lx
UIWorldLensDefault.reset(tree_root : TreeNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="post_add(tree_root : TreeNode)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.post_add</h4><a class="signature-arity" href="#UIWorldLensDefault.post_add" title="Permanent link">1</a><signature id="UIWorldLensDefault.post_add">

```lx
UIWorldLensDefault.post_add(tree_root : TreeNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="get_parent(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.get_parent</h4><a class="signature-arity" href="#UIWorldLensDefault.get_parent" title="Permanent link">1</a><signature id="UIWorldLensDefault.get_parent">

```lx
UIWorldLensDefault.get_parent(entity : Entity) : Entity
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="entity_is_root(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.entity_is_root</h4><a class="signature-arity" href="#UIWorldLensDefault.entity_is_root" title="Permanent link">1</a><signature id="UIWorldLensDefault.entity_is_root">

```lx
UIWorldLensDefault.entity_is_root(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="entity_is_origin(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.entity_is_origin</h4><a class="signature-arity" href="#UIWorldLensDefault.entity_is_origin" title="Permanent link">1</a><signature id="UIWorldLensDefault.entity_is_origin">

```lx
UIWorldLensDefault.entity_is_origin(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="add_root(root : EntityNode, entity_to_node : Map)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.add_root</h4><a class="signature-arity" href="#UIWorldLensDefault.add_root+2" title="Permanent link">2</a><signature id="UIWorldLensDefault.add_root+2">

```lx
UIWorldLensDefault.add_root(root : EntityNode, entity_to_node : Map) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="add_nested(node : EntityNode, entity_to_node : Map)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.add_nested</h4><a class="signature-arity" href="#UIWorldLensDefault.add_nested+2" title="Permanent link">2</a><signature id="UIWorldLensDefault.add_nested+2">

```lx
UIWorldLensDefault.add_nested(node : EntityNode, entity_to_node : Map) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="create_node(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.create_node</h4><a class="signature-arity" href="#UIWorldLensDefault.create_node" title="Permanent link">1</a><signature id="UIWorldLensDefault.create_node">

```lx
UIWorldLensDefault.create_node(entity : Entity) : TreeNode
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="get_context_folder_map(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.get_context_folder_map</h4><a class="signature-arity" href="#UIWorldLensDefault.get_context_folder_map" title="Permanent link">1</a><signature id="UIWorldLensDefault.get_context_folder_map">

```lx
UIWorldLensDefault.get_context_folder_map(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensDefault" signature="get_root_folders(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensDefault.get_root_folders</h4><a class="signature-arity" href="#UIWorldLensDefault.get_root_folders" title="Permanent link">1</a><signature id="UIWorldLensDefault.get_root_folders">

```lx
UIWorldLensDefault.get_root_folders(entity : Entity) : unknown
```
</signature>

> no docs found   


### UIWorldLensTransform
`import "luxe: ui/world" for UIWorldLensTransform{:lx}`
> no docs found

- `var no_transform : FolderNode = null{:lx}`
- [new](#UIWorldLensTransform.new)(**state**: `UIWorldState{:lx}`)
- [get_droppable_tags](#UIWorldLensTransform.get_droppable_tags)(**entity**: `Entity{:lx}`)
- [on_drop](#UIWorldLensTransform.on_drop+2)(**from**: `Entity{:lx}`, **to**: `Entity{:lx}`)
- [reset](#UIWorldLensTransform.reset)(**tree_root**: `TreeNode{:lx}`)
- [get_parent](#UIWorldLensTransform.get_parent)(**entity**: `Entity{:lx}`)
- [entity_is_root](#UIWorldLensTransform.entity_is_root)(**entity**: `Entity{:lx}`)
- [create_node](#UIWorldLensTransform.create_node)(**entity**: `Entity{:lx}`)


---

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="new(state : UIWorldState)"></endpoint>
<h4 class="signature_head">UIWorldLensTransform.new</h4><a class="signature-arity" href="#UIWorldLensTransform.new" title="Permanent link">1</a><signature id="UIWorldLensTransform.new">

```lx
UIWorldLensTransform.new(state : UIWorldState) : UIWorldLensTransform
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="get_droppable_tags(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensTransform.get_droppable_tags</h4><a class="signature-arity" href="#UIWorldLensTransform.get_droppable_tags" title="Permanent link">1</a><signature id="UIWorldLensTransform.get_droppable_tags">

```lx
UIWorldLensTransform.get_droppable_tags(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="on_drop(from : Entity, to : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensTransform.on_drop</h4><a class="signature-arity" href="#UIWorldLensTransform.on_drop+2" title="Permanent link">2</a><signature id="UIWorldLensTransform.on_drop+2">

```lx
UIWorldLensTransform.on_drop(from : Entity, to : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="reset(tree_root : TreeNode)"></endpoint>
<h4 class="signature_head">UIWorldLensTransform.reset</h4><a class="signature-arity" href="#UIWorldLensTransform.reset" title="Permanent link">1</a><signature id="UIWorldLensTransform.reset">

```lx
UIWorldLensTransform.reset(tree_root : TreeNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="get_parent(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensTransform.get_parent</h4><a class="signature-arity" href="#UIWorldLensTransform.get_parent" title="Permanent link">1</a><signature id="UIWorldLensTransform.get_parent">

```lx
UIWorldLensTransform.get_parent(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="entity_is_root(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensTransform.entity_is_root</h4><a class="signature-arity" href="#UIWorldLensTransform.entity_is_root" title="Permanent link">1</a><signature id="UIWorldLensTransform.entity_is_root">

```lx
UIWorldLensTransform.entity_is_root(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensTransform" signature="create_node(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensTransform.create_node</h4><a class="signature-arity" href="#UIWorldLensTransform.create_node" title="Permanent link">1</a><signature id="UIWorldLensTransform.create_node">

```lx
UIWorldLensTransform.create_node(entity : Entity) : TreeNode
```
</signature>

> no docs found   


### UIWorldLensUI
`import "luxe: ui/world" for UIWorldLensUI{:lx}`
> no docs found

- [new](#UIWorldLensUI.new)(**state**: `UIWorldState{:lx}`)
- [get_droppable_tags](#UIWorldLensUI.get_droppable_tags)(**entity**: `Entity{:lx}`)
- [on_drop](#UIWorldLensUI.on_drop+2)(**from**: `Entity{:lx}`, **to**: `Entity{:lx}`)
- [reset](#UIWorldLensUI.reset)(**tree_root**: `TreeNode{:lx}`)
- [get_parent](#UIWorldLensUI.get_parent)(**entity**: `Entity{:lx}`)
- [entity_is_root](#UIWorldLensUI.entity_is_root)(**entity**: `Entity{:lx}`)
- [create_node](#UIWorldLensUI.create_node)(**entity**: `Entity{:lx}`)


---

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="new(state : UIWorldState)"></endpoint>
<h4 class="signature_head">UIWorldLensUI.new</h4><a class="signature-arity" href="#UIWorldLensUI.new" title="Permanent link">1</a><signature id="UIWorldLensUI.new">

```lx
UIWorldLensUI.new(state : UIWorldState) : UIWorldLensUI
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="get_droppable_tags(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensUI.get_droppable_tags</h4><a class="signature-arity" href="#UIWorldLensUI.get_droppable_tags" title="Permanent link">1</a><signature id="UIWorldLensUI.get_droppable_tags">

```lx
UIWorldLensUI.get_droppable_tags(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="on_drop(from : Entity, to : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensUI.on_drop</h4><a class="signature-arity" href="#UIWorldLensUI.on_drop+2" title="Permanent link">2</a><signature id="UIWorldLensUI.on_drop+2">

```lx
UIWorldLensUI.on_drop(from : Entity, to : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="reset(tree_root : TreeNode)"></endpoint>
<h4 class="signature_head">UIWorldLensUI.reset</h4><a class="signature-arity" href="#UIWorldLensUI.reset" title="Permanent link">1</a><signature id="UIWorldLensUI.reset">

```lx
UIWorldLensUI.reset(tree_root : TreeNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="get_parent(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensUI.get_parent</h4><a class="signature-arity" href="#UIWorldLensUI.get_parent" title="Permanent link">1</a><signature id="UIWorldLensUI.get_parent">

```lx
UIWorldLensUI.get_parent(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="entity_is_root(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensUI.entity_is_root</h4><a class="signature-arity" href="#UIWorldLensUI.entity_is_root" title="Permanent link">1</a><signature id="UIWorldLensUI.entity_is_root">

```lx
UIWorldLensUI.entity_is_root(entity : Entity) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/world" class="UIWorldLensUI" signature="create_node(entity : Entity)"></endpoint>
<h4 class="signature_head">UIWorldLensUI.create_node</h4><a class="signature-arity" href="#UIWorldLensUI.create_node" title="Permanent link">1</a><signature id="UIWorldLensUI.create_node">

```lx
UIWorldLensUI.create_node(entity : Entity) : TreeNode
```
</signature>

> no docs found   

