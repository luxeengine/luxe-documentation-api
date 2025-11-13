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
```lx
import "luxe: system/wires.modifier" for Connection
```
> no docs found

### Variables
```lx
var from : WireTarget = Object
var to : WireTarget = Object
```

## Data
```lx
import "luxe: system/wires.modifier" for Data
```
> no docs found

### Variables
```lx
var connections : List = []
```

## System
```lx
import "luxe: system/wires.modifier" for System
```
> no docs found

### Variables
```lx
var nodes : Map = {}
var nodes_from_panel : Map = {}
var right_panel : Control = 0
var left_panel : Control = 0
var world_editor : Any = null
```
<endpoint module="luxe: system/wires.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```lx
System.new(world : World) : System
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="init(world : World)"></endpoint>
### System.init(.)
```lx
System.init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="copy_target(src : WireTarget, to : WireTarget)"></endpoint>
### System.copy_target(..)
```lx
System.copy_target(src : WireTarget, to : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="refresh_entity(node : WireNode)"></endpoint>
### System.refresh_entity(.)
```lx
System.refresh_entity(node : WireNode) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="get_drop_node(x : Num, y : Num)"></endpoint>
### System.get_drop_node(..)
```lx
System.get_drop_node(x : Num, y : Num) : WireNode
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="remove_block_connection(entity : Entity, target : WireTarget)"></endpoint>
### System.remove_block_connection(..)
```lx
System.remove_block_connection(entity : Entity, target : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_connection_index(entity : Entity, target : WireTarget)"></endpoint>
### System.find_connection_index(..)
```lx
System.find_connection_index(entity : Entity, target : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_wire_in_list(wires : List, wire_id : Num)"></endpoint>
### System.find_wire_in_list(..)
```lx
System.find_wire_in_list(wires : List, wire_id : Num) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="find_wire(target : WireTarget)"></endpoint>
### System.find_wire(.)
```lx
System.find_wire(target : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="make_placeholder_wire(entity : Entity, do_doc : Bool)"></endpoint>
### System.make_placeholder_wire(..)
```lx
System.make_placeholder_wire(entity : Entity, do_doc : Bool) : Connection
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="make_node(out : Bool, entity : Entity, from : WireTarget, to : WireTarget)"></endpoint>
### System.make_node(....)
```lx
System.make_node(out : Bool, entity : Entity, from : WireTarget, to : WireTarget) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="refresh_wires(window : UIPanel, window_w : Num, but : UIButton)"></endpoint>
### System.refresh_wires(...)
```lx
System.refresh_wires(window : UIPanel, window_w : Num, but : UIButton) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="editor_init(world : World)"></endpoint>
### System.editor_init(.)
```lx
System.editor_init(world : World) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="System" signature="editor_attach(entity : Entity, wires : Data)"></endpoint>
### System.editor_attach(..)
```lx
System.editor_attach(entity : Entity, wires : Data) : unknown
```
> no docs found   


## WireNode
```lx
import "luxe: system/wires.modifier" for WireNode
```
> no docs found

### Variables
```lx
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
```lx
WireNode.valid_wire : Bool
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="wire"></endpoint>
### WireNode.wire
```lx
WireNode.wire : WireData
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="draw_depth"></endpoint>
### WireNode.draw_depth
```lx
WireNode.draw_depth : Num
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="order"></endpoint>
### WireNode.order
```lx
WireNode.order : Num
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="disconnect()"></endpoint>
### WireNode.disconnect(.)
```lx
WireNode.disconnect() : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="new()"></endpoint>
### WireNode.new(.)
```lx
WireNode.new() : WireNode
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="destroy()"></endpoint>
### WireNode.destroy(.)
```lx
WireNode.destroy() : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="highlight(state : Bool)"></endpoint>
### WireNode.highlight(.)
```lx
WireNode.highlight(state : Bool) : unknown
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="from_entity"></endpoint>
### WireNode.from_entity
```lx
WireNode.from_entity : Entity
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="to_entity"></endpoint>
### WireNode.to_entity
```lx
WireNode.to_entity : Entity
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="from_node"></endpoint>
### WireNode.from_node
```lx
WireNode.from_node : WireNode
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="to_node"></endpoint>
### WireNode.to_node
```lx
WireNode.to_node : WireNode
```
> no docs found   

<endpoint module="luxe: system/wires.modifier" class="WireNode" signature="make_cable()"></endpoint>
### WireNode.make_cable(.)
```lx
WireNode.make_cable() : unknown
```
> no docs found   


## WireTarget
```lx
import "luxe: system/wires.modifier" for WireTarget
```
> no docs found

### Variables
```lx
var wire : Num = 0
var link : Link = null
var context : Asset = null
var order : Num = 0
var split : Bool = false
```

## Wires
```lx
import "luxe: system/wires.modifier" for Wires
```
> no docs found

