---
title: "luxe: system/wires.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/wires.modifier"
---
- [Connection](#connection)   
- [Data](#data)   
- [System](#system)   
- [WireNode](#wirenode)   
- [WireTarget](#wiretarget)   
- [Wires](#wires)   

---


## Connection
```wren
import "luxe: system/wires.modifier" for Connection
```
> no docs found

### Variables
```wren
var from : WireTarget = Object
var to : WireTarget = Object
```

## Data
```wren
import "luxe: system/wires.modifier" for Data
```
> no docs found

### Variables
```wren
var connections : List = []
```

## System
```wren
import "luxe: system/wires.modifier" for System
```
> no docs found

### Variables
```wren
var nodes : Map = {}
var nodes_from_panel : Map = {}
var right_panel : Control = 0
var left_panel : Control = 0
var world_editor : Any = null
```
<endpoint module="luxe: system/wires.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```wren
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```wren
System.init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="copy_target(src : WireTarget, to : WireTarget)"></endpoint>
### System.copy_target(..)
```wren
System.copy_target(src : WireTarget, to : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="refresh_entity(node : WireNode)"></endpoint>
### System.refresh_entity(.)
```wren
System.refresh_entity(node : WireNode) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="get_drop_node(x : Num, y : Num)"></endpoint>
### System.get_drop_node(..)
```wren
System.get_drop_node(x : Num, y : Num) : WireNode
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="remove_block_connection(entity : Entity, target : WireTarget)"></endpoint>
### System.remove_block_connection(..)
```wren
System.remove_block_connection(entity : Entity, target : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_connection_index(entity : Entity, target : WireTarget)"></endpoint>
### System.find_connection_index(..)
```wren
System.find_connection_index(entity : Entity, target : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_wire_in_list(wires : List, wire_id : Num)"></endpoint>
### System.find_wire_in_list(..)
```wren
System.find_wire_in_list(wires : List, wire_id : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_wire(target : WireTarget)"></endpoint>
### System.find_wire(.)
```wren
System.find_wire(target : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="make_placeholder_wire(entity : Entity, do_doc : Bool)"></endpoint>
### System.make_placeholder_wire(..)
```wren
System.make_placeholder_wire(entity : Entity, do_doc : Bool) : Connection
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="make_node(out : Bool, entity : Entity, from : WireTarget, to : WireTarget)"></endpoint>
### System.make_node(....)
```wren
System.make_node(out : Bool, entity : Entity, from : WireTarget, to : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="refresh_wires(window : UIPanel, window_w : Num, but : UIButton)"></endpoint>
### System.refresh_wires(...)
```wren
System.refresh_wires(window : UIPanel, window_w : Num, but : UIButton) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="editor_init(world : World)"></endpoint>
### System.editor_init(.)
```wren
System.editor_init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="editor_attach(entity : Entity, wires : Data)"></endpoint>
### System.editor_attach(..)
```wren
System.editor_attach(entity : Entity, wires : Data) : unknown
```
> no docs found   


## WireNode
```wren
import "luxe: system/wires.modifier" for WireNode
```
> no docs found

### Variables
```wren
var uuid : String = ID.uuid
var panel : UIPanel = null
var entity : Entity = Entity.none
var out : Bool = true
var from : WireTarget = null
var to : WireTarget = null
var other_uuid : String = null
var label : UILabel = null
var change : UILabel = null
var icon : UIImage = null
var endpoint : Control = null
var cable_control : Control = null
var draw_control : Control = null
var resolve_node : Fn = null
var resolve_wire : Fn = null
var cable : Cable = Cable.new
var style : PathStyle = PathStyle.new
var cable_phase : Num = 0
var cable_drag : Bool = false
```
<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="valid_wire"></endpoint>
### WireNode.valid_wire
```wren
WireNode.valid_wire : Bool
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="wire"></endpoint>
### WireNode.wire
```wren
WireNode.wire : WireData
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="draw_depth"></endpoint>
### WireNode.draw_depth
```wren
WireNode.draw_depth : Num
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="order"></endpoint>
### WireNode.order
```wren
WireNode.order : Num
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="disconnect()"></endpoint>
### WireNode.disconnect(.)
```wren
WireNode.disconnect() : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="new()"></endpoint>
### WireNode.new(.)
```wren
WireNode.new() : WireNode
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="destroy()"></endpoint>
### WireNode.destroy(.)
```wren
WireNode.destroy() : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="highlight(state : Bool)"></endpoint>
### WireNode.highlight(.)
```wren
WireNode.highlight(state : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="from_entity"></endpoint>
### WireNode.from_entity
```wren
WireNode.from_entity : Entity
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="to_entity"></endpoint>
### WireNode.to_entity
```wren
WireNode.to_entity : Entity
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="from_node"></endpoint>
### WireNode.from_node
```wren
WireNode.from_node : WireNode
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="to_node"></endpoint>
### WireNode.to_node
```wren
WireNode.to_node : WireNode
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="make_cable()"></endpoint>
### WireNode.make_cable(.)
```wren
WireNode.make_cable() : unknown
```
> no docs found   


## WireTarget
```wren
import "luxe: system/wires.modifier" for WireTarget
```
> no docs found

### Variables
```wren
var wire : Num = 0
var link : Link = null
var context : Asset = null
var order : Num = 0
var split : Bool = false
```

## Wires
```wren
import "luxe: system/wires.modifier" for Wires
```
> no docs found

