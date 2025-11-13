---
title: "luxe: system/wires.modifier"
description: API version 2025.11.1
---
## `luxe: system/wires.modifier{:lx}` module

- [Connection](#connection)   
- [Data](#data)   
- [System](#system)   
- [WireNode](#wirenode)   
- [WireTarget](#wiretarget)   
- [Wires](#wires)   

---


### Connection
`import "luxe: system/wires.modifier" for Connection{:lx}`
> no docs found

- `var from : WireTarget = Object{:lx}`
- `var to : WireTarget = Object{:lx}`


---


### Data
`import "luxe: system/wires.modifier" for Data{:lx}`
> no docs found

- `var connections : List = []{:lx}`


---


### System
`import "luxe: system/wires.modifier" for System{:lx}`
> no docs found

- `var nodes : Map = {}{:lx}`
- `var nodes_from_panel : Map = {}{:lx}`
- `var right_panel : Control = 0{:lx}`
- `var left_panel : Control = 0{:lx}`
- `var world_editor : Any = null{:lx}`
- [new](#System.new)(**world**: `World{:lx}`)
- [init](#System.init)(**world**: `World{:lx}`)
- [copy_target](#System.copy_target+2)(**src**: `WireTarget{:lx}`, **to**: `WireTarget{:lx}`)
- [refresh_entity](#System.refresh_entity)(**node**: `WireNode{:lx}`)
- [get_drop_node](#System.get_drop_node+2)(**x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [remove_block_connection](#System.remove_block_connection+2)(**entity**: `Entity{:lx}`, **target**: `WireTarget{:lx}`)
- [find_connection_index](#System.find_connection_index+2)(**entity**: `Entity{:lx}`, **target**: `WireTarget{:lx}`)
- [find_wire_in_list](#System.find_wire_in_list+2)(**wires**: `List{:lx}`, **wire_id**: `Num{:lx}`)
- [find_wire](#System.find_wire)(**target**: `WireTarget{:lx}`)
- [make_placeholder_wire](#System.make_placeholder_wire+2)(**entity**: `Entity{:lx}`, **do_doc**: `Bool{:lx}`)
- [make_node](#System.make_node+4)(**out**: `Bool{:lx}`, **entity**: `Entity{:lx}`, **from**: `WireTarget{:lx}`, **to**: `WireTarget{:lx}`)
- [refresh_wires](#System.refresh_wires+3)(**window**: `UIPanel{:lx}`, **window_w**: `Num{:lx}`, **but**: `UIButton{:lx}`)
- [editor_init](#System.editor_init)(**world**: `World{:lx}`)
- [editor_attach](#System.editor_attach+2)(**entity**: `Entity{:lx}`, **wires**: `Data{:lx}`)


---

<endpoint module="luxe: system/wires.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="init(world : World)"></endpoint>
<h4 class="signature_head">System.init</h4><a class="signature-arity" href="#System.init" title="Permanent link">1</a><signature id="System.init">

```lx
System.init(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="copy_target(src : WireTarget, to : WireTarget)"></endpoint>
<h4 class="signature_head">System.copy_target</h4><a class="signature-arity" href="#System.copy_target+2" title="Permanent link">2</a><signature id="System.copy_target+2">

```lx
System.copy_target(src : WireTarget, to : WireTarget) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="refresh_entity(node : WireNode)"></endpoint>
<h4 class="signature_head">System.refresh_entity</h4><a class="signature-arity" href="#System.refresh_entity" title="Permanent link">1</a><signature id="System.refresh_entity">

```lx
System.refresh_entity(node : WireNode) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="get_drop_node(x : Num, y : Num)"></endpoint>
<h4 class="signature_head">System.get_drop_node</h4><a class="signature-arity" href="#System.get_drop_node+2" title="Permanent link">2</a><signature id="System.get_drop_node+2">

```lx
System.get_drop_node(x : Num, y : Num) : WireNode
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="remove_block_connection(entity : Entity, target : WireTarget)"></endpoint>
<h4 class="signature_head">System.remove_block_connection</h4><a class="signature-arity" href="#System.remove_block_connection+2" title="Permanent link">2</a><signature id="System.remove_block_connection+2">

```lx
System.remove_block_connection(entity : Entity, target : WireTarget) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_connection_index(entity : Entity, target : WireTarget)"></endpoint>
<h4 class="signature_head">System.find_connection_index</h4><a class="signature-arity" href="#System.find_connection_index+2" title="Permanent link">2</a><signature id="System.find_connection_index+2">

```lx
System.find_connection_index(entity : Entity, target : WireTarget) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_wire_in_list(wires : List, wire_id : Num)"></endpoint>
<h4 class="signature_head">System.find_wire_in_list</h4><a class="signature-arity" href="#System.find_wire_in_list+2" title="Permanent link">2</a><signature id="System.find_wire_in_list+2">

```lx
System.find_wire_in_list(wires : List, wire_id : Num) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_wire(target : WireTarget)"></endpoint>
<h4 class="signature_head">System.find_wire</h4><a class="signature-arity" href="#System.find_wire" title="Permanent link">1</a><signature id="System.find_wire">

```lx
System.find_wire(target : WireTarget) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="make_placeholder_wire(entity : Entity, do_doc : Bool)"></endpoint>
<h4 class="signature_head">System.make_placeholder_wire</h4><a class="signature-arity" href="#System.make_placeholder_wire+2" title="Permanent link">2</a><signature id="System.make_placeholder_wire+2">

```lx
System.make_placeholder_wire(entity : Entity, do_doc : Bool) : Connection
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="make_node(out : Bool, entity : Entity, from : WireTarget, to : WireTarget)"></endpoint>
<h4 class="signature_head">System.make_node</h4><a class="signature-arity" href="#System.make_node+4" title="Permanent link">4</a><signature id="System.make_node+4">

```lx
System.make_node(out : Bool, entity : Entity, from : WireTarget, to : WireTarget) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="refresh_wires(window : UIPanel, window_w : Num, but : UIButton)"></endpoint>
<h4 class="signature_head">System.refresh_wires</h4><a class="signature-arity" href="#System.refresh_wires+3" title="Permanent link">3</a><signature id="System.refresh_wires+3">

```lx
System.refresh_wires(window : UIPanel, window_w : Num, but : UIButton) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="editor_init(world : World)"></endpoint>
<h4 class="signature_head">System.editor_init</h4><a class="signature-arity" href="#System.editor_init" title="Permanent link">1</a><signature id="System.editor_init">

```lx
System.editor_init(world : World) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="editor_attach(entity : Entity, wires : Data)"></endpoint>
<h4 class="signature_head">System.editor_attach</h4><a class="signature-arity" href="#System.editor_attach+2" title="Permanent link">2</a><signature id="System.editor_attach+2">

```lx
System.editor_attach(entity : Entity, wires : Data) : unknown
```
</signature>

> no docs found   


### WireNode
`import "luxe: system/wires.modifier" for WireNode{:lx}`
> no docs found

- `var uuid : String = ID.uuid{:lx}`
- `var panel : UIPanel = null{:lx}`
- `var entity : Entity = Entity.none{:lx}`
- `var out : Bool = true{:lx}`
- `var from : WireTarget = null{:lx}`
- `var to : WireTarget = null{:lx}`
- `var other_uuid : String = null{:lx}`
- `var label : UILabel = null{:lx}`
- `var change : UILabel = null{:lx}`
- `var icon : UIImage = null{:lx}`
- `var endpoint : Control = null{:lx}`
- `var cable_control : Control = null{:lx}`
- `var draw_control : Control = null{:lx}`
- `var resolve_node : Fn = null{:lx}`
- `var resolve_wire : Fn = null{:lx}`
- `var cable : Cable = Cable.new{:lx}`
- `var style : PathStyle = PathStyle.new{:lx}`
- `var cable_phase : Num = 0{:lx}`
- `var cable_drag : Bool = false{:lx}`
- [valid_wire](#WireNode.valid_wire)
- [wire](#WireNode.wire)
- [draw_depth](#WireNode.draw_depth)
- [order](#WireNode.order)
- [disconnect](#WireNode.disconnect)()
- [new](#WireNode.new)()
- [destroy](#WireNode.destroy)()
- [highlight](#WireNode.highlight)(**state**: `Bool{:lx}`)
- [from_entity](#WireNode.from_entity)
- [to_entity](#WireNode.to_entity)
- [from_node](#WireNode.from_node)
- [to_node](#WireNode.to_node)
- [make_cable](#WireNode.make_cable)()


---

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="valid_wire"></endpoint>
<h4 class="signature_head">WireNode.valid_wire</h4><a class="signature-arity" href="#WireNode.valid_wire" title="Permanent link">1</a><signature id="WireNode.valid_wire">

```lx
WireNode.valid_wire : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="wire"></endpoint>
<h4 class="signature_head">WireNode.wire</h4><a class="signature-arity" href="#WireNode.wire" title="Permanent link">1</a><signature id="WireNode.wire">

```lx
WireNode.wire : WireData
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="draw_depth"></endpoint>
<h4 class="signature_head">WireNode.draw_depth</h4><a class="signature-arity" href="#WireNode.draw_depth" title="Permanent link">1</a><signature id="WireNode.draw_depth">

```lx
WireNode.draw_depth : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="order"></endpoint>
<h4 class="signature_head">WireNode.order</h4><a class="signature-arity" href="#WireNode.order" title="Permanent link">1</a><signature id="WireNode.order">

```lx
WireNode.order : Num
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="disconnect()"></endpoint>
<h4 class="signature_head">WireNode.disconnect</h4><a class="signature-arity" href="#WireNode.disconnect" title="Permanent link">1</a><signature id="WireNode.disconnect">

```lx
WireNode.disconnect() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="new()"></endpoint>
<h4 class="signature_head">WireNode.new</h4><a class="signature-arity" href="#WireNode.new" title="Permanent link">1</a><signature id="WireNode.new">

```lx
WireNode.new() : WireNode
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="destroy()"></endpoint>
<h4 class="signature_head">WireNode.destroy</h4><a class="signature-arity" href="#WireNode.destroy" title="Permanent link">1</a><signature id="WireNode.destroy">

```lx
WireNode.destroy() : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="highlight(state : Bool)"></endpoint>
<h4 class="signature_head">WireNode.highlight</h4><a class="signature-arity" href="#WireNode.highlight" title="Permanent link">1</a><signature id="WireNode.highlight">

```lx
WireNode.highlight(state : Bool) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="from_entity"></endpoint>
<h4 class="signature_head">WireNode.from_entity</h4><a class="signature-arity" href="#WireNode.from_entity" title="Permanent link">1</a><signature id="WireNode.from_entity">

```lx
WireNode.from_entity : Entity
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="to_entity"></endpoint>
<h4 class="signature_head">WireNode.to_entity</h4><a class="signature-arity" href="#WireNode.to_entity" title="Permanent link">1</a><signature id="WireNode.to_entity">

```lx
WireNode.to_entity : Entity
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="from_node"></endpoint>
<h4 class="signature_head">WireNode.from_node</h4><a class="signature-arity" href="#WireNode.from_node" title="Permanent link">1</a><signature id="WireNode.from_node">

```lx
WireNode.from_node : WireNode
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="to_node"></endpoint>
<h4 class="signature_head">WireNode.to_node</h4><a class="signature-arity" href="#WireNode.to_node" title="Permanent link">1</a><signature id="WireNode.to_node">

```lx
WireNode.to_node : WireNode
```
</signature>

> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="make_cable()"></endpoint>
<h4 class="signature_head">WireNode.make_cable</h4><a class="signature-arity" href="#WireNode.make_cable" title="Permanent link">1</a><signature id="WireNode.make_cable">

```lx
WireNode.make_cable() : unknown
```
</signature>

> no docs found   


### WireTarget
`import "luxe: system/wires.modifier" for WireTarget{:lx}`
> no docs found

- `var wire : Num = 0{:lx}`
- `var link : Link = null{:lx}`
- `var context : Asset = null{:lx}`
- `var order : Num = 0{:lx}`
- `var split : Bool = false{:lx}`


---


### Wires
`import "luxe: system/wires.modifier" for Wires{:lx}`
> no docs found



---

