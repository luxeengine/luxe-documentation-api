---
title: "luxe: ui/control"
description: API version 2025.11.1
---
## `luxe: ui/control{:lx}` module

- [Control](#control)   

---


### Control
`import "luxe: ui/control" for Control{:lx}`
> Class for managing controls on UI modifiers.
> Note that all UI elements are controls, including UIImage, UILabel, UIButton, etc...
> 
> ```js
>   var ui = Entity.create(ui)
>   UI.create(ui, 0, 0, width, height, 0, ui_camera)
>   var control = Control.create(ui)
> ```

- [create](#Control.create)(**ui_entity**: `Entity{:lx}`)
- [create](#Control.create+2)(**ui_entity**: `Entity{:lx}`, **type_id**: `String{:lx}`)
- [destroy](#Control.destroy)(**control**: `Control{:lx}`)
- [destroy_children](#Control.destroy_children)(**control**: `Control{:lx}`)
- [valid](#Control.valid)(**control**: `Control{:lx}`)
- [get_ui](#Control.get_ui)(**control**: `Control{:lx}`)
- [get](#Control.get)(**id**: `String{:lx}`)
- [exists](#Control.exists)(**id**: `String{:lx}`)
- [clear](#Control.clear+2)(**control**: `Control{:lx}`, **uiclear_action**: `UIClear{:lx}`)
- [press](#Control.press+2)(**control**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [enter](#Control.enter+2)(**control**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [can_see](#Control.can_see)(**control**: `Control{:lx}`)
- [can_see_area](#Control.can_see_area+2)(**control**: `Control{:lx}`, **area**: `Rect{:lx}`)
- [can_see_point](#Control.can_see_point+2)(**control**: `Control{:lx}`, **point**: `Vec{:lx}`)
- [point_inside](#Control.point_inside+2)(**control**: `Control{:lx}`, **point**: `Vec{:lx}`)
- [get_data](#Control.get_data)(**control**: `Control{:lx}`)
- [set_type](#Control.set_type+2)(**control**: `Control{:lx}`, **type**: `String{:lx}`)
- [get_type](#Control.get_type)(**control**: `Control{:lx}`)
- [set_id](#Control.set_id+2)(**control**: `Control{:lx}`, **id**: `String{:lx}`)
- [get_id](#Control.get_id)(**control**: `Control{:lx}`)
- [get_bounds_abs](#Control.get_bounds_abs+2)(**control**: `Control{:lx}`, **into**: `List{:lx}`)
- [get_bounds](#Control.get_bounds+2)(**control**: `Control{:lx}`, **into**: `List{:lx}`)
- [set_allow_bounds_event](#Control.set_allow_bounds_event+2)(**control**: `Control{:lx}`, **state**: `Bool{:lx}`)
- [get_allow_bounds_event](#Control.get_allow_bounds_event)(**control**: `Control{:lx}`)
- [set_bounds_abs](#Control.set_bounds_abs+5)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`)
- [set_bounds](#Control.set_bounds+5)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`)
- [set_pos_abs](#Control.set_pos_abs+3)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [set_pos](#Control.set_pos+3)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [set_system_cursor](#Control.set_system_cursor+2)(**control**: `Control{:lx}`, **cursor**: `SystemCursor{:lx}`)
- [set_size](#Control.set_size+3)(**control**: `Control{:lx}`, **w**: `Num{:lx}`, **h**: `Num{:lx}`)
- [get_pos_x](#Control.get_pos_x)(**control**: `Control{:lx}`)
- [get_pos_x_abs](#Control.get_pos_x_abs)(**control**: `Control{:lx}`)
- [get_pos_y](#Control.get_pos_y)(**control**: `Control{:lx}`)
- [get_pos_y_abs](#Control.get_pos_y_abs)(**control**: `Control{:lx}`)
- [get_width](#Control.get_width)(**control**: `Control{:lx}`)
- [get_height](#Control.get_height)(**control**: `Control{:lx}`)
- [contains](#Control.contains+3)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [get_entity](#Control.get_entity)(**control**: `Control{:lx}`)
- [get_parent](#Control.get_parent)(**control**: `Control{:lx}`)
- [get_allow_input](#Control.get_allow_input)(**control**: `Control{:lx}`)
- [set_allow_input](#Control.set_allow_input+2)(**control**: `Control{:lx}`, **allow**: `Bool{:lx}`)
- [set_allow_drag](#Control.set_allow_drag+3)(**control**: `Control{:lx}`, **allow**: `Bool{:lx}`, **tag**: `String{:lx}`)
- [set_droppable_payload](#Control.set_droppable_payload+2)(**control**: `Control{:lx}`, **value**: `Handle{:lx}`)
- [get_droppable_payload](#Control.get_droppable_payload)(**control**: `Control{:lx}`)
- [set_droppable_tags](#Control.set_droppable_tags+2)(**control**: `Control{:lx}`, **tags**: `List{:lx}`)
- [get_droppable_tags](#Control.get_droppable_tags)(**control**: `Control{:lx}`)
- [get_attached](#Control.get_attached)(**control**: `Control{:lx}`)
- [get_allow_keys](#Control.get_allow_keys)(**control**: `Control{:lx}`)
- [set_allow_keys](#Control.set_allow_keys+2)(**control**: `Control{:lx}`, **allow**: `Bool{:lx}`)
- [get_allow_tab](#Control.get_allow_tab)(**control**: `Control{:lx}`)
- [set_allow_tab](#Control.set_allow_tab+2)(**control**: `Control{:lx}`, **allow**: `Bool{:lx}`)
- [get_visible](#Control.get_visible)(**control**: `Control{:lx}`)
- [set_visible](#Control.set_visible+2)(**control**: `Control{:lx}`, **visible**: `Bool{:lx}`)
- [get_opacity](#Control.get_opacity)(**control**: `Control{:lx}`)
- [set_opacity](#Control.set_opacity+2)(**control**: `Control{:lx}`, **opacity**: `Num{:lx}`)
- [get_disabled](#Control.get_disabled)(**control**: `Control{:lx}`)
- [set_disabled](#Control.set_disabled+2)(**control**: `Control{:lx}`, **disabled**: `Bool{:lx}`)
- [get_enabled](#Control.get_enabled)(**control**: `Control{:lx}`)
- [set_enabled](#Control.set_enabled+2)(**control**: `Control{:lx}`, **enabled**: `Bool{:lx}`)
- [get_clip](#Control.get_clip)(**control**: `Control{:lx}`)
- [set_clip](#Control.set_clip+2)(**control**: `Control{:lx}`, **clip**: `Bool{:lx}`)
- [get_nodes](#Control.get_nodes)(**control**: `Control{:lx}`)
- [get_depth](#Control.get_depth)(**control**: `Control{:lx}`)
- [get_depth_offset](#Control.get_depth_offset)(**control**: `Control{:lx}`)
- [set_depth_offset](#Control.set_depth_offset+2)(**control**: `Control{:lx}`, **depth_offset**: `Num{:lx}`)
- [get_input_inside](#Control.get_input_inside)(**control**: `Control{:lx}`)
- [get_input_pressed](#Control.get_input_pressed)(**control**: `Control{:lx}`)
- [child_at_point](#Control.child_at_point+3)(**control**: `Control{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [child_count](#Control.child_count)(**control**: `Control{:lx}`)
- [child_index](#Control.child_index+2)(**control**: `Control{:lx}`, **child**: `Control{:lx}`)
- [child_get](#Control.child_get+2)(**control**: `Control{:lx}`, **index**: `Num{:lx}`)
- [child_add](#Control.child_add+3)(**control**: `Control{:lx}`, **child**: `Control{:lx}`, **internal**: `Bool{:lx}`)
- [child_add](#Control.child_add+2)(**control**: `Control{:lx}`, **child**: `Control{:lx}`)
- [child_remove](#Control.child_remove+2)(**control**: `Control{:lx}`, **child**: `Control{:lx}`)
- [children_bounds](#Control.children_bounds+2)(**control**: `Control{:lx}`, **into**: `List{:lx}`)
- [set_behave](#Control.set_behave+2)(**control**: `Control{:lx}`, **behave**: `UIBehave{:lx}`)
- [get_behave](#Control.get_behave)(**control**: `Control{:lx}`)
- [set_contain](#Control.set_contain+2)(**control**: `Control{:lx}`, **contain**: `UIContain{:lx}`)
- [get_contain](#Control.get_contain)(**control**: `Control{:lx}`)
- [set_margin](#Control.set_margin+5)(**control**: `Control{:lx}`, **left**: `Num{:lx}`, **top**: `Num{:lx}`, **right**: `Num{:lx}`, **bottom**: `Num{:lx}`)
- [set_limits](#Control.set_limits+5)(**control**: `Control{:lx}`, **min_x**: `Num{:lx}`, **min_y**: `Num{:lx}`, **max_x**: `Num{:lx}`, **max_y**: `Num{:lx}`)
- [get_margin](#Control.get_margin)(**control**: `Control{:lx}`)
- [set_render](#Control.set_render+2)(**control**: `Control{:lx}`, **fn**: `Fn{:lx}`)
- [set_events](#Control.set_events+2)(**control**: `Control{:lx}`, **fn**: `Fn{:lx}`)
- [unset_events](#Control.unset_events)(**control**: `Control{:lx}`)
- [unset_events](#Control.unset_events+2)(**control**: `Control{:lx}`, **id**: `String{:lx}`)
- [set_process](#Control.set_process+2)(**control**: `Control{:lx}`, **fn**: `Fn{:lx}`)
- [get_state_data](#Control.get_state_data)(**control**: `Control{:lx}`)
- [set_state_data](#Control.set_state_data+2)(**control**: `Control{:lx}`, **data**: `Any{:lx}`)
- [data](#Control.data)(**control**: `Control{:lx}`)


---

<endpoint module="luxe: ui/control" class="Control" signature="create(ui_entity : Entity)"></endpoint>
<h4 class="signature_head">Control.create</h4><a class="signature-arity" href="#Control.create" title="Permanent link">1</a><signature id="Control.create">

```lx
Control.create(ui_entity : Entity) : Control
```
</signature>

> Create a "blank" control for layout or custom input/drawing.
> Returns the new Control.   

<endpoint module="luxe: ui/control" class="Control" signature="create(ui_entity : Entity, type_id : String)"></endpoint>
<h4 class="signature_head">Control.create</h4><a class="signature-arity" href="#Control.create+2" title="Permanent link">2</a><signature id="Control.create+2">

```lx
Control.create(ui_entity : Entity, type_id : String) : Control
```
</signature>

> Create a typed control. Returns the new Control.   

<endpoint module="luxe: ui/control" class="Control" signature="destroy(control : Control)"></endpoint>
<h4 class="signature_head">Control.destroy</h4><a class="signature-arity" href="#Control.destroy" title="Permanent link">1</a><signature id="Control.destroy">

```lx
Control.destroy(control : Control) : None
```
</signature>

> Destroy an existing control.
> 
> ```js
>   var control = Control.create(_ui)
>   //do stuff and then later...
>   Control.destroy(control)
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="destroy_children(control : Control)"></endpoint>
<h4 class="signature_head">Control.destroy_children</h4><a class="signature-arity" href="#Control.destroy_children" title="Permanent link">1</a><signature id="Control.destroy_children">

```lx
Control.destroy_children(control : Control) : None
```
</signature>

> Destroy the children of a control.   

<endpoint module="luxe: ui/control" class="Control" signature="valid(control : Control)"></endpoint>
<h4 class="signature_head">Control.valid</h4><a class="signature-arity" href="#Control.valid" title="Permanent link">1</a><signature id="Control.valid">

```lx
Control.valid(control : Control) : Bool
```
</signature>

> Check if a control exists and has not been destroyed.
>     
> ```js
>   var control = Control.create(_ui)
>   Log.print(Control.valid(control)) //true
>   Control.destroy(control)
>   Log.print(Control.valid(control)) //false
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="get_ui(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_ui</h4><a class="signature-arity" href="#Control.get_ui" title="Permanent link">1</a><signature id="Control.get_ui">

```lx
Control.get_ui(control : Control) : Entity
```
</signature>

> Get UI entity a control is part of.
> 
> ```js
>   var control = Control.create(_ui)
>   var control_ui = Control.get_ui(control)
>   Log.print(control_ui == _ui) //true
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="get(id : String)"></endpoint>
<h4 class="signature_head">Control.get</h4><a class="signature-arity" href="#Control.get" title="Permanent link">1</a><signature id="Control.get">

```lx
Control.get(id : String) : Control
```
</signature>

> Get a control by its id.
>     
> ```js
>   var control = Control.create(_ui)
>   Control.set_id(control, "test_id")
>   var control_by_id = Control.get("test_id")
>   Log.print(control == control_by_id) //true
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="exists(id : String)"></endpoint>
<h4 class="signature_head">Control.exists</h4><a class="signature-arity" href="#Control.exists" title="Permanent link">1</a><signature id="Control.exists">

```lx
Control.exists(id : String) : Bool
```
</signature>

> Check if a control with a specific id exists.   

<endpoint module="luxe: ui/control" class="Control" signature="clear(control : Control, uiclear_action : UIClear)"></endpoint>
<h4 class="signature_head">Control.clear</h4><a class="signature-arity" href="#Control.clear+2" title="Permanent link">2</a><signature id="Control.clear+2">

```lx
Control.clear(control : Control, uiclear_action : UIClear) : None
```
</signature>

> Clear the children of a control in a specific manner.   

<endpoint module="luxe: ui/control" class="Control" signature="press(control : Control, state : Bool)"></endpoint>
<h4 class="signature_head">Control.press</h4><a class="signature-arity" href="#Control.press+2" title="Permanent link">2</a><signature id="Control.press+2">

```lx
Control.press(control : Control, state : Bool) : None
```
</signature>

> Send a press or release event to the control (in the center of the control)   

<endpoint module="luxe: ui/control" class="Control" signature="enter(control : Control, state : Bool)"></endpoint>
<h4 class="signature_head">Control.enter</h4><a class="signature-arity" href="#Control.enter+2" title="Permanent link">2</a><signature id="Control.enter+2">

```lx
Control.enter(control : Control, state : Bool) : None
```
</signature>

> Send a enter or exit event to the control   

<endpoint module="luxe: ui/control" class="Control" signature="can_see(control : Control)"></endpoint>
<h4 class="signature_head">Control.can_see</h4><a class="signature-arity" href="#Control.can_see" title="Permanent link">1</a><signature id="Control.can_see">

```lx
Control.can_see(control : Control) : Bool
```
</signature>

> Returns true if this control can be seen, or false if clipped.   

<endpoint module="luxe: ui/control" class="Control" signature="can_see_area(control : Control, area : Rect)"></endpoint>
<h4 class="signature_head">Control.can_see_area</h4><a class="signature-arity" href="#Control.can_see_area+2" title="Permanent link">2</a><signature id="Control.can_see_area+2">

```lx
Control.can_see_area(control : Control, area : Rect) : Bool
```
</signature>

> Returns true if the area at this control can be seen or false if clipped.   

<endpoint module="luxe: ui/control" class="Control" signature="can_see_point(control : Control, point : Vec)"></endpoint>
<h4 class="signature_head">Control.can_see_point</h4><a class="signature-arity" href="#Control.can_see_point+2" title="Permanent link">2</a><signature id="Control.can_see_point+2">

```lx
Control.can_see_point(control : Control, point : Vec) : Bool
```
</signature>

> Returns true if the point at this control can be seen or false if clipped.   

<endpoint module="luxe: ui/control" class="Control" signature="point_inside(control : Control, point : Vec)"></endpoint>
<h4 class="signature_head">Control.point_inside</h4><a class="signature-arity" href="#Control.point_inside+2" title="Permanent link">2</a><signature id="Control.point_inside+2">

```lx
Control.point_inside(control : Control, point : Vec) : Bool
```
</signature>

> Returns true if the point is inside the bounds of the control. Ignores visibility etc.   

<endpoint module="luxe: ui/control" class="Control" signature="get_data(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_data</h4><a class="signature-arity" href="#Control.get_data" title="Permanent link">1</a><signature id="Control.get_data">

```lx
Control.get_data(control : Control) : Block
```
</signature>

> Get the data block for this control   

<endpoint module="luxe: ui/control" class="Control" signature="set_type(control : Control, type : String)"></endpoint>
<h4 class="signature_head">Control.set_type</h4><a class="signature-arity" href="#Control.set_type+2" title="Permanent link">2</a><signature id="Control.set_type+2">

```lx
Control.set_type(control : Control, type : String) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/control" class="Control" signature="get_type(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_type</h4><a class="signature-arity" href="#Control.get_type" title="Permanent link">1</a><signature id="Control.get_type">

```lx
Control.get_type(control : Control) : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/control" class="Control" signature="set_id(control : Control, id : String)"></endpoint>
<h4 class="signature_head">Control.set_id</h4><a class="signature-arity" href="#Control.set_id+2" title="Permanent link">2</a><signature id="Control.set_id+2">

```lx
Control.set_id(control : Control, id : String) : unknown
```
</signature>

> Set the id of a control. Good for debugging and retrieving controls by their id.
> Must be unique, so adding `ID.unique()` to the id can be useful.
> 
> ```js
>   var control = Control.create(_ui)
>   Control.set_id(control, "good_recognizable_control_name_%(ID.unique())")
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="get_id(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_id</h4><a class="signature-arity" href="#Control.get_id" title="Permanent link">1</a><signature id="Control.get_id">

```lx
Control.get_id(control : Control) : String
```
</signature>

> Retrieve the id of a control.   

<endpoint module="luxe: ui/control" class="Control" signature="get_bounds_abs(control : Control, into : List)"></endpoint>
<h4 class="signature_head">Control.get_bounds_abs</h4><a class="signature-arity" href="#Control.get_bounds_abs+2" title="Permanent link">2</a><signature id="Control.get_bounds_abs+2">

```lx
Control.get_bounds_abs(control : Control, into : List) : None
```
</signature>

> Retrieve the bounds(position and size) of a control (relative to the UI modifier) into a list `[x, y, width, height]`.
> The passed list must have at least 4 elements and the function will write into the first 4.
> Passing a list into the function instead of returning a value is to avoid allocating memory where not needed.
> 
> ```js
>   var parent = Control.create(_ui)
>   Control.set_pos(parent, 50, 50)
>   var child = Control.create(_ui)
>   Control.child_add(parent, child)
>   Control.set_pos(child, 100, 100)
>   Control.set_size(child, 20, 20)
>   var bounds = [0,0,0,0]
>   Control.get_bounds_abs(child, bounds)
>   Log.print(bounds) // [150, 150, 20, 20]
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="get_bounds(control : Control, into : List)"></endpoint>
<h4 class="signature_head">Control.get_bounds</h4><a class="signature-arity" href="#Control.get_bounds+2" title="Permanent link">2</a><signature id="Control.get_bounds+2">

```lx
Control.get_bounds(control : Control, into : List) : None
```
</signature>

> Retrieve the bounds(position and size) of a control (relative to their parent control or ui modifier if there is none) into a list `[x, y, width, height]`.
> The passed list must have at least 4 elements and the function will write into the first 4.
> Passing a list into the function instead of returning a value is to avoid allocating memory where not needed.
> 
> ```js
>   var parent = Control.create(_ui)
>   Control.set_pos(parent, 50, 50)
>   var child = Control.create(_ui)
>   Control.child_add(parent, child)
>   Control.set_pos(child, 100, 100)
>   Control.set_size(child, 20, 20)
>   var bounds = [0,0,0,0]
>   Control.get_bounds(child, bounds)
>   Log.print(bounds) // [100, 100, 20, 20]
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_bounds_event(control : Control, state : Bool)"></endpoint>
<h4 class="signature_head">Control.set_allow_bounds_event</h4><a class="signature-arity" href="#Control.set_allow_bounds_event+2" title="Permanent link">2</a><signature id="Control.set_allow_bounds_event+2">

```lx
Control.set_allow_bounds_event(control : Control, state : Bool) : None
```
</signature>

> Enables bounds events for the control. Since there are many controls
> that may be resized during layout events, only ones that ask for the event 
> will receive it to save time.   

<endpoint module="luxe: ui/control" class="Control" signature="get_allow_bounds_event(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_allow_bounds_event</h4><a class="signature-arity" href="#Control.get_allow_bounds_event" title="Permanent link">1</a><signature id="Control.get_allow_bounds_event">

```lx
Control.get_allow_bounds_event(control : Control) : Bool
```
</signature>

> Returns true if this control sends bounds events.   

<endpoint module="luxe: ui/control" class="Control" signature="set_bounds_abs(control : Control, x : Num, y : Num, w : Num, h : Num)"></endpoint>
<h4 class="signature_head">Control.set_bounds_abs</h4><a class="signature-arity" href="#Control.set_bounds_abs+5" title="Permanent link">5</a><signature id="Control.set_bounds_abs+5">

```lx
Control.set_bounds_abs(control : Control, x : Num, y : Num, w : Num, h : Num) : None
```
</signature>

> Set the control bounds(position and size) relative to the UI modifier.   

<endpoint module="luxe: ui/control" class="Control" signature="set_bounds(control : Control, x : Num, y : Num, w : Num, h : Num)"></endpoint>
<h4 class="signature_head">Control.set_bounds</h4><a class="signature-arity" href="#Control.set_bounds+5" title="Permanent link">5</a><signature id="Control.set_bounds+5">

```lx
Control.set_bounds(control : Control, x : Num, y : Num, w : Num, h : Num) : None
```
</signature>

> Set the control bounds(position and size) relative to the parent control.   

<endpoint module="luxe: ui/control" class="Control" signature="set_pos_abs(control : Control, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Control.set_pos_abs</h4><a class="signature-arity" href="#Control.set_pos_abs+3" title="Permanent link">3</a><signature id="Control.set_pos_abs+3">

```lx
Control.set_pos_abs(control : Control, x : Num, y : Num) : None
```
</signature>

> Set the control position relative to the UI modifier.   

<endpoint module="luxe: ui/control" class="Control" signature="set_pos(control : Control, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Control.set_pos</h4><a class="signature-arity" href="#Control.set_pos+3" title="Permanent link">3</a><signature id="Control.set_pos+3">

```lx
Control.set_pos(control : Control, x : Num, y : Num) : None
```
</signature>

> Set the control position relative to the parent control, or UI modifier if no parent exists.   

<endpoint module="luxe: ui/control" class="Control" signature="set_system_cursor(control : Control, cursor : SystemCursor)"></endpoint>
<h4 class="signature_head">Control.set_system_cursor</h4><a class="signature-arity" href="#Control.set_system_cursor+2" title="Permanent link">2</a><signature id="Control.set_system_cursor+2">

```lx
Control.set_system_cursor(control : Control, cursor : SystemCursor) : None
```
</signature>

> If the control has input enabled, when entered it will set the system cursor to the given type.   

<endpoint module="luxe: ui/control" class="Control" signature="set_size(control : Control, w : Num, h : Num)"></endpoint>
<h4 class="signature_head">Control.set_size</h4><a class="signature-arity" href="#Control.set_size+3" title="Permanent link">3</a><signature id="Control.set_size+3">

```lx
Control.set_size(control : Control, w : Num, h : Num) : None
```
</signature>

> Set the control size.   

<endpoint module="luxe: ui/control" class="Control" signature="get_pos_x(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_pos_x</h4><a class="signature-arity" href="#Control.get_pos_x" title="Permanent link">1</a><signature id="Control.get_pos_x">

```lx
Control.get_pos_x(control : Control) : Num
```
</signature>

> Get the control position x component relative to its parent control.   

<endpoint module="luxe: ui/control" class="Control" signature="get_pos_x_abs(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_pos_x_abs</h4><a class="signature-arity" href="#Control.get_pos_x_abs" title="Permanent link">1</a><signature id="Control.get_pos_x_abs">

```lx
Control.get_pos_x_abs(control : Control) : Num
```
</signature>

> Get the control position x component.   

<endpoint module="luxe: ui/control" class="Control" signature="get_pos_y(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_pos_y</h4><a class="signature-arity" href="#Control.get_pos_y" title="Permanent link">1</a><signature id="Control.get_pos_y">

```lx
Control.get_pos_y(control : Control) : Num
```
</signature>

> Get the control position y component relative to its parent control.   

<endpoint module="luxe: ui/control" class="Control" signature="get_pos_y_abs(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_pos_y_abs</h4><a class="signature-arity" href="#Control.get_pos_y_abs" title="Permanent link">1</a><signature id="Control.get_pos_y_abs">

```lx
Control.get_pos_y_abs(control : Control) : Num
```
</signature>

> Get the control position y component.   

<endpoint module="luxe: ui/control" class="Control" signature="get_width(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_width</h4><a class="signature-arity" href="#Control.get_width" title="Permanent link">1</a><signature id="Control.get_width">

```lx
Control.get_width(control : Control) : Num
```
</signature>

> Get the control width.   

<endpoint module="luxe: ui/control" class="Control" signature="get_height(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_height</h4><a class="signature-arity" href="#Control.get_height" title="Permanent link">1</a><signature id="Control.get_height">

```lx
Control.get_height(control : Control) : Num
```
</signature>

> Get the control height.   

<endpoint module="luxe: ui/control" class="Control" signature="contains(control : Control, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Control.contains</h4><a class="signature-arity" href="#Control.contains+3" title="Permanent link">3</a><signature id="Control.contains+3">

```lx
Control.contains(control : Control, x : Num, y : Num) : Bool
```
</signature>

> Check whether the a point is within the control bounds   

<endpoint module="luxe: ui/control" class="Control" signature="get_entity(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_entity</h4><a class="signature-arity" href="#Control.get_entity" title="Permanent link">1</a><signature id="Control.get_entity">

```lx
Control.get_entity(control : Control) : Entity
```
</signature>

> Get the entity that has the UI modifier the control in.   

<endpoint module="luxe: ui/control" class="Control" signature="get_parent(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_parent</h4><a class="signature-arity" href="#Control.get_parent" title="Permanent link">1</a><signature id="Control.get_parent">

```lx
Control.get_parent(control : Control) : Control
```
</signature>

> Get the entity this entity is a child of or `null` if there isnt any.   

<endpoint module="luxe: ui/control" class="Control" signature="get_allow_input(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_allow_input</h4><a class="signature-arity" href="#Control.get_allow_input" title="Permanent link">1</a><signature id="Control.get_allow_input">

```lx
Control.get_allow_input(control : Control) : Bool
```
</signature>

> Get whether the control recieves input events in its `set_process` function.   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_input(control : Control, allow : Bool)"></endpoint>
<h4 class="signature_head">Control.set_allow_input</h4><a class="signature-arity" href="#Control.set_allow_input+2" title="Permanent link">2</a><signature id="Control.set_allow_input+2">

```lx
Control.set_allow_input(control : Control, allow : Bool) : None
```
</signature>

> Set whether the control recieves input events in its `set_process` function.   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_drag(control : Control, allow : Bool, tag : String)"></endpoint>
<h4 class="signature_head">Control.set_allow_drag</h4><a class="signature-arity" href="#Control.set_allow_drag+3" title="Permanent link">3</a><signature id="Control.set_allow_drag+3">

```lx
Control.set_allow_drag(control : Control, allow : Bool, tag : String) : None
```
</signature>

> Set whether the control recieves drag events   

<endpoint module="luxe: ui/control" class="Control" signature="set_droppable_payload(control : Control, value : Handle)"></endpoint>
<h4 class="signature_head">Control.set_droppable_payload</h4><a class="signature-arity" href="#Control.set_droppable_payload+2" title="Permanent link">2</a><signature id="Control.set_droppable_payload+2">

```lx
Control.set_droppable_payload(control : Control, value : Handle) : None
```
</signature>

> Set a value that will be passed through the drag event to the drop event on the other side. 
>           This value is a handle/number, so you can pass api handles, a number, a hashed string, or a block instance   

<endpoint module="luxe: ui/control" class="Control" signature="get_droppable_payload(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_droppable_payload</h4><a class="signature-arity" href="#Control.get_droppable_payload" title="Permanent link">1</a><signature id="Control.get_droppable_payload">

```lx
Control.get_droppable_payload(control : Control) : Handle
```
</signature>

> Get the drop payload for this control   

<endpoint module="luxe: ui/control" class="Control" signature="set_droppable_tags(control : Control, tags : List)"></endpoint>
<h4 class="signature_head">Control.set_droppable_tags</h4><a class="signature-arity" href="#Control.set_droppable_tags+2" title="Permanent link">2</a><signature id="Control.set_droppable_tags+2">

```lx
Control.set_droppable_tags(control : Control, tags : List) : None
```
</signature>

> Set the droppable tags that are allowed for this control, as an array of strings   

<endpoint module="luxe: ui/control" class="Control" signature="get_droppable_tags(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_droppable_tags</h4><a class="signature-arity" href="#Control.get_droppable_tags" title="Permanent link">1</a><signature id="Control.get_droppable_tags">

```lx
Control.get_droppable_tags(control : Control) : List
```
</signature>

> Get the droppable tags that are allowed for this control, as an array of strings   

<endpoint module="luxe: ui/control" class="Control" signature="get_attached(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_attached</h4><a class="signature-arity" href="#Control.get_attached" title="Permanent link">1</a><signature id="Control.get_attached">

```lx
Control.get_attached(control : Control) : Entity
```
</signature>

> If used via `luxe: system/ui/control.modifier`, returns the entity this control belongs to. Entity.none is returned if not   

<endpoint module="luxe: ui/control" class="Control" signature="get_allow_keys(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_allow_keys</h4><a class="signature-arity" href="#Control.get_allow_keys" title="Permanent link">1</a><signature id="Control.get_allow_keys">

```lx
Control.get_allow_keys(control : Control) : Bool
```
</signature>

> Get whether the control recieves key events in its `set_process` function.   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_keys(control : Control, allow : Bool)"></endpoint>
<h4 class="signature_head">Control.set_allow_keys</h4><a class="signature-arity" href="#Control.set_allow_keys+2" title="Permanent link">2</a><signature id="Control.set_allow_keys+2">

```lx
Control.set_allow_keys(control : Control, allow : Bool) : None
```
</signature>

> Set whether the control recieves key events in its `set_process` function.   

<endpoint module="luxe: ui/control" class="Control" signature="get_allow_tab(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_allow_tab</h4><a class="signature-arity" href="#Control.get_allow_tab" title="Permanent link">1</a><signature id="Control.get_allow_tab">

```lx
Control.get_allow_tab(control : Control) : Bool
```
</signature>

> Get whether the control can be "tabbed" to.   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_tab(control : Control, allow : Bool)"></endpoint>
<h4 class="signature_head">Control.set_allow_tab</h4><a class="signature-arity" href="#Control.set_allow_tab+2" title="Permanent link">2</a><signature id="Control.set_allow_tab+2">

```lx
Control.set_allow_tab(control : Control, allow : Bool) : None
```
</signature>

> Set whether the control can be "tabbed" to.   

<endpoint module="luxe: ui/control" class="Control" signature="get_visible(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_visible</h4><a class="signature-arity" href="#Control.get_visible" title="Permanent link">1</a><signature id="Control.get_visible">

```lx
Control.get_visible(control : Control) : Bool
```
</signature>

> Get whether a control is visible.   

<endpoint module="luxe: ui/control" class="Control" signature="set_visible(control : Control, visible : Bool)"></endpoint>
<h4 class="signature_head">Control.set_visible</h4><a class="signature-arity" href="#Control.set_visible+2" title="Permanent link">2</a><signature id="Control.set_visible+2">

```lx
Control.set_visible(control : Control, visible : Bool) : None
```
</signature>

> Set whether a control (or its children) is visible.
> Note that when a control is not visible, it also doesnt contribute to the layout.   

<endpoint module="luxe: ui/control" class="Control" signature="get_opacity(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_opacity</h4><a class="signature-arity" href="#Control.get_opacity" title="Permanent link">1</a><signature id="Control.get_opacity">

```lx
Control.get_opacity(control : Control) : Num
```
</signature>

> Get a control opacity value.   

<endpoint module="luxe: ui/control" class="Control" signature="set_opacity(control : Control, opacity : Num)"></endpoint>
<h4 class="signature_head">Control.set_opacity</h4><a class="signature-arity" href="#Control.set_opacity+2" title="Permanent link">2</a><signature id="Control.set_opacity+2">

```lx
Control.set_opacity(control : Control, opacity : Num) : None
```
</signature>

> Set a control opacity value. Affects children opacity as well.   

<endpoint module="luxe: ui/control" class="Control" signature="get_disabled(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_disabled</h4><a class="signature-arity" href="#Control.get_disabled" title="Permanent link">1</a><signature id="Control.get_disabled">

```lx
Control.get_disabled(control : Control) : Bool
```
</signature>

> Get whether a control is disabled. This refers to the "inputable" state of inputs like buttons or text fields.   

<endpoint module="luxe: ui/control" class="Control" signature="set_disabled(control : Control, disabled : Bool)"></endpoint>
<h4 class="signature_head">Control.set_disabled</h4><a class="signature-arity" href="#Control.set_disabled+2" title="Permanent link">2</a><signature id="Control.set_disabled+2">

```lx
Control.set_disabled(control : Control, disabled : Bool) : None
```
</signature>

> Set whether a control is disabled. This refers to the "inputable" state of inputs like buttons or text fields.   

<endpoint module="luxe: ui/control" class="Control" signature="get_enabled(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_enabled</h4><a class="signature-arity" href="#Control.get_enabled" title="Permanent link">1</a><signature id="Control.get_enabled">

```lx
Control.get_enabled(control : Control) : Bool
```
</signature>

> Get whether a control is enabled. This refers to the "inputable" state of inputs like buttons or text fields.   

<endpoint module="luxe: ui/control" class="Control" signature="set_enabled(control : Control, enabled : Bool)"></endpoint>
<h4 class="signature_head">Control.set_enabled</h4><a class="signature-arity" href="#Control.set_enabled+2" title="Permanent link">2</a><signature id="Control.set_enabled+2">

```lx
Control.set_enabled(control : Control, enabled : Bool) : None
```
</signature>

> Set whether a control is enabled. This refers to the "inputable" state of inputs like buttons or text fields.   

<endpoint module="luxe: ui/control" class="Control" signature="get_clip(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_clip</h4><a class="signature-arity" href="#Control.get_clip" title="Permanent link">1</a><signature id="Control.get_clip">

```lx
Control.get_clip(control : Control) : Bool
```
</signature>

> Get whether a control should clip its contents.   

<endpoint module="luxe: ui/control" class="Control" signature="set_clip(control : Control, clip : Bool)"></endpoint>
<h4 class="signature_head">Control.set_clip</h4><a class="signature-arity" href="#Control.set_clip+2" title="Permanent link">2</a><signature id="Control.set_clip+2">

```lx
Control.set_clip(control : Control, clip : Bool) : None
```
</signature>

> Set whether a control should clip its contents.   

<endpoint module="luxe: ui/control" class="Control" signature="get_nodes(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_nodes</h4><a class="signature-arity" href="#Control.get_nodes" title="Permanent link">1</a><signature id="Control.get_nodes">

```lx
Control.get_nodes(control : Control) : Num
```
</signature>

> Get how many child controls this control has recursively.
> So 1 if it doesnt have any children, 2 if it has 1 child, 3 if it has 2 children or if it has 1 child which itself has a child, etc...
> Only valid after `UI.commit`.   

<endpoint module="luxe: ui/control" class="Control" signature="get_depth(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_depth</h4><a class="signature-arity" href="#Control.get_depth" title="Permanent link">1</a><signature id="Control.get_depth">

```lx
Control.get_depth(control : Control) : Num
```
</signature>

> Get the depth generated for a control, not including the depth offset.   

<endpoint module="luxe: ui/control" class="Control" signature="get_depth_offset(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_depth_offset</h4><a class="signature-arity" href="#Control.get_depth_offset" title="Permanent link">1</a><signature id="Control.get_depth_offset">

```lx
Control.get_depth_offset(control : Control) : Num
```
</signature>

> Get the depth offset of a control.   

<endpoint module="luxe: ui/control" class="Control" signature="set_depth_offset(control : Control, depth_offset : Num)"></endpoint>
<h4 class="signature_head">Control.set_depth_offset</h4><a class="signature-arity" href="#Control.set_depth_offset+2" title="Permanent link">2</a><signature id="Control.set_depth_offset+2">

```lx
Control.set_depth_offset(control : Control, depth_offset : Num) : None
```
</signature>

> Set the depth offset for a control, allowing you to move it in front or behind other controls if the generated depth doesnt work for you   

<endpoint module="luxe: ui/control" class="Control" signature="get_input_inside(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_input_inside</h4><a class="signature-arity" href="#Control.get_input_inside" title="Permanent link">1</a><signature id="Control.get_input_inside">

```lx
Control.get_input_inside(control : Control) : Bool
```
</signature>

> Check whether the input (usually mouse cursor) is currently in a control. (In sync with `UIEvent.enter` and `UIEvent.exit`)   

<endpoint module="luxe: ui/control" class="Control" signature="get_input_pressed(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_input_pressed</h4><a class="signature-arity" href="#Control.get_input_pressed" title="Permanent link">1</a><signature id="Control.get_input_pressed">

```lx
Control.get_input_pressed(control : Control) : Bool
```
</signature>

> Check whether the input (usually mouse cursor) is currently in a control and any of its buttons are pressed.   

<endpoint module="luxe: ui/control" class="Control" signature="child_at_point(control : Control, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Control.child_at_point</h4><a class="signature-arity" href="#Control.child_at_point+3" title="Permanent link">3</a><signature id="Control.child_at_point+3">

```lx
Control.child_at_point(control : Control, x : Num, y : Num) : Control
```
</signature>

> Get the top child control at a specific (absolute) point.   

<endpoint module="luxe: ui/control" class="Control" signature="child_count(control : Control)"></endpoint>
<h4 class="signature_head">Control.child_count</h4><a class="signature-arity" href="#Control.child_count" title="Permanent link">1</a><signature id="Control.child_count">

```lx
Control.child_count(control : Control) : Num
```
</signature>

> Get the amount of children a control has.   

<endpoint module="luxe: ui/control" class="Control" signature="child_index(control : Control, child : Control)"></endpoint>
<h4 class="signature_head">Control.child_index</h4><a class="signature-arity" href="#Control.child_index+2" title="Permanent link">2</a><signature id="Control.child_index+2">

```lx
Control.child_index(control : Control, child : Control) : Num
```
</signature>

> Get the index of a child control.   

<endpoint module="luxe: ui/control" class="Control" signature="child_get(control : Control, index : Num)"></endpoint>
<h4 class="signature_head">Control.child_get</h4><a class="signature-arity" href="#Control.child_get+2" title="Permanent link">2</a><signature id="Control.child_get+2">

```lx
Control.child_get(control : Control, index : Num) : Child
```
</signature>

> Get a child control by its index.   

<endpoint module="luxe: ui/control" class="Control" signature="child_add(control : Control, child : Control, internal : Bool)"></endpoint>
<h4 class="signature_head">Control.child_add</h4><a class="signature-arity" href="#Control.child_add+3" title="Permanent link">3</a><signature id="Control.child_add+3">

```lx
Control.child_add(control : Control, child : Control, internal : Bool) : None
```
</signature>

> Make a control the child control of another control.
> If you mark the child as internal, it wont be queried by other methods affecting children.   

<endpoint module="luxe: ui/control" class="Control" signature="child_add(control : Control, child : Control)"></endpoint>
<h4 class="signature_head">Control.child_add</h4><a class="signature-arity" href="#Control.child_add+2" title="Permanent link">2</a><signature id="Control.child_add+2">

```lx
Control.child_add(control : Control, child : Control) : None
```
</signature>

> Make a control the child control of another control.
> This means the childs position will be relative to its parent, layout depends a lot on those relationships and its used by functions like destroy_children.
> 
> ```js
>   //create parent
>   var parent = Control.create(_ui)
>   Control.set_bounds(parent, 200, 200, 100, 100)
>   //create child
>   var child = Control.create(_ui)
>   Control.set_bounds(child, 25, 25, 50, 50)
> 
>   //parent child to parent
>   Control.child_add(parent, child)
> 
>   var bounds = [0,0,0,0]
>   Control.get_bounds_abs(child, bounds)
>   Log.print(bounds) //[225, 225, 50, 50]
> 
>   Control.clear(parent, UIClear.destroy)
>   Log.print(Control.child_count(parent)) //0
>   Log.print(Control.valid(child)) //false
> 
>   UI.commit(_ui)
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="child_remove(control : Control, child : Control)"></endpoint>
<h4 class="signature_head">Control.child_remove</h4><a class="signature-arity" href="#Control.child_remove+2" title="Permanent link">2</a><signature id="Control.child_remove+2">

```lx
Control.child_remove(control : Control, child : Control) : None
```
</signature>

> Remove a child from a control, unparenting it.   

<endpoint module="luxe: ui/control" class="Control" signature="children_bounds(control : Control, into : List)"></endpoint>
<h4 class="signature_head">Control.children_bounds</h4><a class="signature-arity" href="#Control.children_bounds+2" title="Permanent link">2</a><signature id="Control.children_bounds+2">

```lx
Control.children_bounds(control : Control, into : List) : None
```
</signature>

> Get the combined bounds of all children of a control into a list `[x, y, width, height]`.
> The passed list must have at least 4 elements and the function will write into the first 4.
> Passing a list into the function instead of returning a value is to avoid allocating memory where not needed.   

<endpoint module="luxe: ui/control" class="Control" signature="set_behave(control : Control, behave : UIBehave)"></endpoint>
<h4 class="signature_head">Control.set_behave</h4><a class="signature-arity" href="#Control.set_behave+2" title="Permanent link">2</a><signature id="Control.set_behave+2">

```lx
Control.set_behave(control : Control, behave : UIBehave) : None
```
</signature>

> Set how the control behaves in the layout as a child of its container.
> You can combine characteristics with a bit or operator (`|`).   

<endpoint module="luxe: ui/control" class="Control" signature="get_behave(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_behave</h4><a class="signature-arity" href="#Control.get_behave" title="Permanent link">1</a><signature id="Control.get_behave">

```lx
Control.get_behave(control : Control) : UIBehave
```
</signature>

> Returns the behave bitflags for the control   

<endpoint module="luxe: ui/control" class="Control" signature="set_contain(control : Control, contain : UIContain)"></endpoint>
<h4 class="signature_head">Control.set_contain</h4><a class="signature-arity" href="#Control.set_contain+2" title="Permanent link">2</a><signature id="Control.set_contain+2">

```lx
Control.set_contain(control : Control, contain : UIContain) : None
```
</signature>

> Set how the control behaves in the layout as a container of its children.
> You can combine characteristics with a bit or operator (`|`).   

<endpoint module="luxe: ui/control" class="Control" signature="get_contain(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_contain</h4><a class="signature-arity" href="#Control.get_contain" title="Permanent link">1</a><signature id="Control.get_contain">

```lx
Control.get_contain(control : Control) : UIContain
```
</signature>

> Returns the contain bitflags for the control   

<endpoint module="luxe: ui/control" class="Control" signature="set_margin(control : Control, left : Num, top : Num, right : Num, bottom : Num)"></endpoint>
<h4 class="signature_head">Control.set_margin</h4><a class="signature-arity" href="#Control.set_margin+5" title="Permanent link">5</a><signature id="Control.set_margin+5">

```lx
Control.set_margin(control : Control, left : Num, top : Num, right : Num, bottom : Num) : None
```
</signature>

> Set the margins of a control. Only the margins set in `set_behave` are actually observed.   

<endpoint module="luxe: ui/control" class="Control" signature="set_limits(control : Control, min_x : Num, min_y : Num, max_x : Num, max_y : Num)"></endpoint>
<h4 class="signature_head">Control.set_limits</h4><a class="signature-arity" href="#Control.set_limits+5" title="Permanent link">5</a><signature id="Control.set_limits+5">

```lx
Control.set_limits(control : Control, min_x : Num, min_y : Num, max_x : Num, max_y : Num) : None
```
</signature>

> Set the min and max size of a control when using layout.   

<endpoint module="luxe: ui/control" class="Control" signature="get_margin(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_margin</h4><a class="signature-arity" href="#Control.get_margin" title="Permanent link">1</a><signature id="Control.get_margin">

```lx
Control.get_margin(control : Control) : List
```
</signature>

> Get the margins of a control.   

<endpoint module="luxe: ui/control" class="Control" signature="set_render(control : Control, fn : Fn)"></endpoint>
<h4 class="signature_head">Control.set_render</h4><a class="signature-arity" href="#Control.set_render+2" title="Permanent link">2</a><signature id="Control.set_render+2">

```lx
Control.set_render(control : Control, fn : Fn) : None
```
</signature>

> Set a custom render function with the arguments `|control, state, x, y, w, h|`. 
> Useful for making your own controls.   

<endpoint module="luxe: ui/control" class="Control" signature="set_events(control : Control, fn : Fn)"></endpoint>
<h4 class="signature_head">Control.set_events</h4><a class="signature-arity" href="#Control.set_events+2" title="Permanent link">2</a><signature id="Control.set_events+2">

```lx
Control.set_events(control : Control, fn : Fn) : String
```
</signature>

> Add a function to handle events on a control.
> Returns an `id` for the newly added event that can be used to remove it.
> 
> ```js
>   var btn = UIButton.create(ui)
>   UIButton.set_text(btn, "click me!")
>   Control.set_events(btn) {|event|
>     if(event.type == UIEvent.release) {
>       Log.print("clicked button")
>     }
>   }
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="unset_events(control : Control)"></endpoint>
<h4 class="signature_head">Control.unset_events</h4><a class="signature-arity" href="#Control.unset_events" title="Permanent link">1</a><signature id="Control.unset_events">

```lx
Control.unset_events(control : Control) : None
```
</signature>

> Remove all event handling functions from a control.   

<endpoint module="luxe: ui/control" class="Control" signature="unset_events(control : Control, id : String)"></endpoint>
<h4 class="signature_head">Control.unset_events</h4><a class="signature-arity" href="#Control.unset_events+2" title="Permanent link">2</a><signature id="Control.unset_events+2">

```lx
Control.unset_events(control : Control, id : String) : None
```
</signature>

> Remove an event handling function from a control.
> Takes in the id that was returned upon registering the function.   

<endpoint module="luxe: ui/control" class="Control" signature="set_process(control : Control, fn : Fn)"></endpoint>
<h4 class="signature_head">Control.set_process</h4><a class="signature-arity" href="#Control.set_process+2" title="Permanent link">2</a><signature id="Control.set_process+2">

```lx
Control.set_process(control : Control, fn : Fn) : None
```
</signature>

> Set a custom process function with the arguments `|control, state, event, x, y, w, h|`. 
> Useful for making your own controls.   

<endpoint module="luxe: ui/control" class="Control" signature="get_state_data(control : Control)"></endpoint>
<h4 class="signature_head">Control.get_state_data</h4><a class="signature-arity" href="#Control.get_state_data" title="Permanent link">1</a><signature id="Control.get_state_data">

```lx
Control.get_state_data(control : Control) : Any
```
</signature>

> Get the state data associated with this control.   

<endpoint module="luxe: ui/control" class="Control" signature="set_state_data(control : Control, data : Any)"></endpoint>
<h4 class="signature_head">Control.set_state_data</h4><a class="signature-arity" href="#Control.set_state_data+2" title="Permanent link">2</a><signature id="Control.set_state_data+2">

```lx
Control.set_state_data(control : Control, data : Any) : None
```
</signature>

> Set state data associated with this control.
> Can be any wren object.   

<endpoint module="luxe: ui/control" class="Control" signature="data(control : Control)"></endpoint>
<h4 class="signature_head">Control.data</h4><a class="signature-arity" href="#Control.data" title="Permanent link">1</a><signature id="Control.data">

```lx
Control.data(control : Control) : Any
```
</signature>

> Get the data block for this control   

