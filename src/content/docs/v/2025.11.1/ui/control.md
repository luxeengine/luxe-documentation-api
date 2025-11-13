---
title: "luxe: ui/control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/control"
---
- [Control](#control)   

---


## Control
```wren
import "luxe: ui/control" for Control
```
> Class for managing controls on UI modifiers.
> Note that all UI elements are controls, including UIImage, UILabel, UIButton, etc...
> 
> ```js
>   var ui = Entity.create(ui)
>   UI.create(ui, 0, 0, width, height, 0, ui_camera)
>   var control = Control.create(ui)
> ```

<endpoint module="luxe: ui/control" class="Control" signature="create(ui_entity : Entity)"></endpoint>
### Control.create(.)
```wren
Control.create(ui_entity : Entity) : Control
```
> Create a "blank" control for layout or custom input/drawing.
> Returns the new Control.   

<endpoint module="luxe: ui/control" class="Control" signature="create(ui_entity : Entity, type_id : String)"></endpoint>
### Control.create(..)
```wren
Control.create(ui_entity : Entity, type_id : String) : Control
```
> Create a typed control. Returns the new Control.   

<endpoint module="luxe: ui/control" class="Control" signature="destroy(control : Control)"></endpoint>
### Control.destroy(.)
```wren
Control.destroy(control : Control) : None
```
> Destroy an existing control.
> 
> ```js
>   var control = Control.create(_ui)
>   //do stuff and then later...
>   Control.destroy(control)
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="destroy_children(control : Control)"></endpoint>
### Control.destroy_children(.)
```wren
Control.destroy_children(control : Control) : None
```
> Destroy the children of a control.   

<endpoint module="luxe: ui/control" class="Control" signature="valid(control : Control)"></endpoint>
### Control.valid(.)
```wren
Control.valid(control : Control) : Bool
```
> Check if a control exists and has not been destroyed.
>     
> ```js
>   var control = Control.create(_ui)
>   Log.print(Control.valid(control)) //true
>   Control.destroy(control)
>   Log.print(Control.valid(control)) //false
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="get_ui(control : Control)"></endpoint>
### Control.get_ui(.)
```wren
Control.get_ui(control : Control) : Entity
```
> Get UI entity a control is part of.
> 
> ```js
>   var control = Control.create(_ui)
>   var control_ui = Control.get_ui(control)
>   Log.print(control_ui == _ui) //true
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="get(id : String)"></endpoint>
### Control.get(.)
```wren
Control.get(id : String) : Control
```
> Get a control by its id.
>     
> ```js
>   var control = Control.create(_ui)
>   Control.set_id(control, "test_id")
>   var control_by_id = Control.get("test_id")
>   Log.print(control == control_by_id) //true
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="exists(id : String)"></endpoint>
### Control.exists(.)
```wren
Control.exists(id : String) : Bool
```
> Check if a control with a specific id exists.   

<endpoint module="luxe: ui/control" class="Control" signature="clear(control : Control, uiclear_action : UIClear)"></endpoint>
### Control.clear(..)
```wren
Control.clear(control : Control, uiclear_action : UIClear) : None
```
> Clear the children of a control in a specific manner.   

<endpoint module="luxe: ui/control" class="Control" signature="press(control : Control, state : Bool)"></endpoint>
### Control.press(..)
```wren
Control.press(control : Control, state : Bool) : None
```
> Send a press or release event to the control (in the center of the control)   

<endpoint module="luxe: ui/control" class="Control" signature="enter(control : Control, state : Bool)"></endpoint>
### Control.enter(..)
```wren
Control.enter(control : Control, state : Bool) : None
```
> Send a enter or exit event to the control   

<endpoint module="luxe: ui/control" class="Control" signature="can_see(control : Control)"></endpoint>
### Control.can_see(.)
```wren
Control.can_see(control : Control) : Bool
```
> Returns true if this control can be seen, or false if clipped.   

<endpoint module="luxe: ui/control" class="Control" signature="can_see_area(control : Control, area : Rect)"></endpoint>
### Control.can_see_area(..)
```wren
Control.can_see_area(control : Control, area : Rect) : Bool
```
> Returns true if the area at this control can be seen or false if clipped.   

<endpoint module="luxe: ui/control" class="Control" signature="can_see_point(control : Control, point : Vec)"></endpoint>
### Control.can_see_point(..)
```wren
Control.can_see_point(control : Control, point : Vec) : Bool
```
> Returns true if the point at this control can be seen or false if clipped.   

<endpoint module="luxe: ui/control" class="Control" signature="point_inside(control : Control, point : Vec)"></endpoint>
### Control.point_inside(..)
```wren
Control.point_inside(control : Control, point : Vec) : Bool
```
> Returns true if the point is inside the bounds of the control. Ignores visibility etc.   

<endpoint module="luxe: ui/control" class="Control" signature="get_data(control : Control)"></endpoint>
### Control.get_data(.)
```wren
Control.get_data(control : Control) : Block
```
> Get the data block for this control   

<endpoint module="luxe: ui/control" class="Control" signature="set_type(control : Control, type : String)"></endpoint>
### Control.set_type(..)
```wren
Control.set_type(control : Control, type : String) : unknown
```
> no docs found   

<endpoint module="luxe: ui/control" class="Control" signature="get_type(control : Control)"></endpoint>
### Control.get_type(.)
```wren
Control.get_type(control : Control) : unknown
```
> no docs found   

<endpoint module="luxe: ui/control" class="Control" signature="set_id(control : Control, id : String)"></endpoint>
### Control.set_id(..)
```wren
Control.set_id(control : Control, id : String) : unknown
```
> Set the id of a control. Good for debugging and retrieving controls by their id.
> Must be unique, so adding `ID.unique()` to the id can be useful.
> 
> ```js
>   var control = Control.create(_ui)
>   Control.set_id(control, "good_recognizable_control_name_%(ID.unique())")
> ```   

<endpoint module="luxe: ui/control" class="Control" signature="get_id(control : Control)"></endpoint>
### Control.get_id(.)
```wren
Control.get_id(control : Control) : String
```
> Retrieve the id of a control.   

<endpoint module="luxe: ui/control" class="Control" signature="get_bounds_abs(control : Control, into : List)"></endpoint>
### Control.get_bounds_abs(..)
```wren
Control.get_bounds_abs(control : Control, into : List) : None
```
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
### Control.get_bounds(..)
```wren
Control.get_bounds(control : Control, into : List) : None
```
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
### Control.set_allow_bounds_event(..)
```wren
Control.set_allow_bounds_event(control : Control, state : Bool) : None
```
> Enables bounds events for the control. Since there are many controls
> that may be resized during layout events, only ones that ask for the event 
> will receive it to save time.   

<endpoint module="luxe: ui/control" class="Control" signature="get_allow_bounds_event(control : Control)"></endpoint>
### Control.get_allow_bounds_event(.)
```wren
Control.get_allow_bounds_event(control : Control) : Bool
```
> Returns true if this control sends bounds events.   

<endpoint module="luxe: ui/control" class="Control" signature="set_bounds_abs(control : Control, x : Num, y : Num, w : Num, h : Num)"></endpoint>
### Control.set_bounds_abs(.....)
```wren
Control.set_bounds_abs(control : Control, x : Num, y : Num, w : Num, h : Num) : None
```
> Set the control bounds(position and size) relative to the UI modifier.   

<endpoint module="luxe: ui/control" class="Control" signature="set_bounds(control : Control, x : Num, y : Num, w : Num, h : Num)"></endpoint>
### Control.set_bounds(.....)
```wren
Control.set_bounds(control : Control, x : Num, y : Num, w : Num, h : Num) : None
```
> Set the control bounds(position and size) relative to the parent control.   

<endpoint module="luxe: ui/control" class="Control" signature="set_pos_abs(control : Control, x : Num, y : Num)"></endpoint>
### Control.set_pos_abs(...)
```wren
Control.set_pos_abs(control : Control, x : Num, y : Num) : None
```
> Set the control position relative to the UI modifier.   

<endpoint module="luxe: ui/control" class="Control" signature="set_pos(control : Control, x : Num, y : Num)"></endpoint>
### Control.set_pos(...)
```wren
Control.set_pos(control : Control, x : Num, y : Num) : None
```
> Set the control position relative to the parent control, or UI modifier if no parent exists.   

<endpoint module="luxe: ui/control" class="Control" signature="set_system_cursor(control : Control, cursor : SystemCursor)"></endpoint>
### Control.set_system_cursor(..)
```wren
Control.set_system_cursor(control : Control, cursor : SystemCursor) : None
```
> If the control has input enabled, when entered it will set the system cursor to the given type.   

<endpoint module="luxe: ui/control" class="Control" signature="set_size(control : Control, w : Num, h : Num)"></endpoint>
### Control.set_size(...)
```wren
Control.set_size(control : Control, w : Num, h : Num) : None
```
> Set the control size.   

<endpoint module="luxe: ui/control" class="Control" signature="get_pos_x(control : Control)"></endpoint>
### Control.get_pos_x(.)
```wren
Control.get_pos_x(control : Control) : Num
```
> Get the control position x component relative to its parent control.   

<endpoint module="luxe: ui/control" class="Control" signature="get_pos_x_abs(control : Control)"></endpoint>
### Control.get_pos_x_abs(.)
```wren
Control.get_pos_x_abs(control : Control) : Num
```
> Get the control position x component.   

<endpoint module="luxe: ui/control" class="Control" signature="get_pos_y(control : Control)"></endpoint>
### Control.get_pos_y(.)
```wren
Control.get_pos_y(control : Control) : Num
```
> Get the control position y component relative to its parent control.   

<endpoint module="luxe: ui/control" class="Control" signature="get_pos_y_abs(control : Control)"></endpoint>
### Control.get_pos_y_abs(.)
```wren
Control.get_pos_y_abs(control : Control) : Num
```
> Get the control position y component.   

<endpoint module="luxe: ui/control" class="Control" signature="get_width(control : Control)"></endpoint>
### Control.get_width(.)
```wren
Control.get_width(control : Control) : Num
```
> Get the control width.   

<endpoint module="luxe: ui/control" class="Control" signature="get_height(control : Control)"></endpoint>
### Control.get_height(.)
```wren
Control.get_height(control : Control) : Num
```
> Get the control height.   

<endpoint module="luxe: ui/control" class="Control" signature="contains(control : Control, x : Num, y : Num)"></endpoint>
### Control.contains(...)
```wren
Control.contains(control : Control, x : Num, y : Num) : Bool
```
> Check whether the a point is within the control bounds   

<endpoint module="luxe: ui/control" class="Control" signature="get_entity(control : Control)"></endpoint>
### Control.get_entity(.)
```wren
Control.get_entity(control : Control) : Entity
```
> Get the entity that has the UI modifier the control in.   

<endpoint module="luxe: ui/control" class="Control" signature="get_parent(control : Control)"></endpoint>
### Control.get_parent(.)
```wren
Control.get_parent(control : Control) : Control
```
> Get the entity this entity is a child of or `null` if there isnt any.   

<endpoint module="luxe: ui/control" class="Control" signature="get_allow_input(control : Control)"></endpoint>
### Control.get_allow_input(.)
```wren
Control.get_allow_input(control : Control) : Bool
```
> Get whether the control recieves input events in its `set_process` function.   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_input(control : Control, allow : Bool)"></endpoint>
### Control.set_allow_input(..)
```wren
Control.set_allow_input(control : Control, allow : Bool) : None
```
> Set whether the control recieves input events in its `set_process` function.   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_drag(control : Control, allow : Bool, tag : String)"></endpoint>
### Control.set_allow_drag(...)
```wren
Control.set_allow_drag(control : Control, allow : Bool, tag : String) : None
```
> Set whether the control recieves drag events   

<endpoint module="luxe: ui/control" class="Control" signature="set_droppable_payload(control : Control, value : Handle)"></endpoint>
### Control.set_droppable_payload(..)
```wren
Control.set_droppable_payload(control : Control, value : Handle) : None
```
> Set a value that will be passed through the drag event to the drop event on the other side. 
>           This value is a handle/number, so you can pass api handles, a number, a hashed string, or a block instance   

<endpoint module="luxe: ui/control" class="Control" signature="get_droppable_payload(control : Control)"></endpoint>
### Control.get_droppable_payload(.)
```wren
Control.get_droppable_payload(control : Control) : Handle
```
> Get the drop payload for this control   

<endpoint module="luxe: ui/control" class="Control" signature="set_droppable_tags(control : Control, tags : List)"></endpoint>
### Control.set_droppable_tags(..)
```wren
Control.set_droppable_tags(control : Control, tags : List) : None
```
> Set the droppable tags that are allowed for this control, as an array of strings   

<endpoint module="luxe: ui/control" class="Control" signature="get_droppable_tags(control : Control)"></endpoint>
### Control.get_droppable_tags(.)
```wren
Control.get_droppable_tags(control : Control) : List
```
> Get the droppable tags that are allowed for this control, as an array of strings   

<endpoint module="luxe: ui/control" class="Control" signature="get_attached(control : Control)"></endpoint>
### Control.get_attached(.)
```wren
Control.get_attached(control : Control) : Entity
```
> If used via `luxe: system/ui/control.modifier`, returns the entity this control belongs to. Entity.none is returned if not   

<endpoint module="luxe: ui/control" class="Control" signature="get_allow_keys(control : Control)"></endpoint>
### Control.get_allow_keys(.)
```wren
Control.get_allow_keys(control : Control) : Bool
```
> Get whether the control recieves key events in its `set_process` function.   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_keys(control : Control, allow : Bool)"></endpoint>
### Control.set_allow_keys(..)
```wren
Control.set_allow_keys(control : Control, allow : Bool) : None
```
> Set whether the control recieves key events in its `set_process` function.   

<endpoint module="luxe: ui/control" class="Control" signature="get_allow_tab(control : Control)"></endpoint>
### Control.get_allow_tab(.)
```wren
Control.get_allow_tab(control : Control) : Bool
```
> Get whether the control can be "tabbed" to.   

<endpoint module="luxe: ui/control" class="Control" signature="set_allow_tab(control : Control, allow : Bool)"></endpoint>
### Control.set_allow_tab(..)
```wren
Control.set_allow_tab(control : Control, allow : Bool) : None
```
> Set whether the control can be "tabbed" to.   

<endpoint module="luxe: ui/control" class="Control" signature="get_visible(control : Control)"></endpoint>
### Control.get_visible(.)
```wren
Control.get_visible(control : Control) : Bool
```
> Get whether a control is visible.   

<endpoint module="luxe: ui/control" class="Control" signature="set_visible(control : Control, visible : Bool)"></endpoint>
### Control.set_visible(..)
```wren
Control.set_visible(control : Control, visible : Bool) : None
```
> Set whether a control (or its children) is visible.
> Note that when a control is not visible, it also doesnt contribute to the layout.   

<endpoint module="luxe: ui/control" class="Control" signature="get_opacity(control : Control)"></endpoint>
### Control.get_opacity(.)
```wren
Control.get_opacity(control : Control) : Num
```
> Get a control opacity value.   

<endpoint module="luxe: ui/control" class="Control" signature="set_opacity(control : Control, opacity : Num)"></endpoint>
### Control.set_opacity(..)
```wren
Control.set_opacity(control : Control, opacity : Num) : None
```
> Set a control opacity value. Affects children opacity as well.   

<endpoint module="luxe: ui/control" class="Control" signature="get_disabled(control : Control)"></endpoint>
### Control.get_disabled(.)
```wren
Control.get_disabled(control : Control) : Bool
```
> Get whether a control is disabled. This refers to the "inputable" state of inputs like buttons or text fields.   

<endpoint module="luxe: ui/control" class="Control" signature="set_disabled(control : Control, disabled : Bool)"></endpoint>
### Control.set_disabled(..)
```wren
Control.set_disabled(control : Control, disabled : Bool) : None
```
> Set whether a control is disabled. This refers to the "inputable" state of inputs like buttons or text fields.   

<endpoint module="luxe: ui/control" class="Control" signature="get_enabled(control : Control)"></endpoint>
### Control.get_enabled(.)
```wren
Control.get_enabled(control : Control) : Bool
```
> Get whether a control is enabled. This refers to the "inputable" state of inputs like buttons or text fields.   

<endpoint module="luxe: ui/control" class="Control" signature="set_enabled(control : Control, enabled : Bool)"></endpoint>
### Control.set_enabled(..)
```wren
Control.set_enabled(control : Control, enabled : Bool) : None
```
> Set whether a control is enabled. This refers to the "inputable" state of inputs like buttons or text fields.   

<endpoint module="luxe: ui/control" class="Control" signature="get_clip(control : Control)"></endpoint>
### Control.get_clip(.)
```wren
Control.get_clip(control : Control) : Bool
```
> Get whether a control should clip its contents.   

<endpoint module="luxe: ui/control" class="Control" signature="set_clip(control : Control, clip : Bool)"></endpoint>
### Control.set_clip(..)
```wren
Control.set_clip(control : Control, clip : Bool) : None
```
> Set whether a control should clip its contents.   

<endpoint module="luxe: ui/control" class="Control" signature="get_nodes(control : Control)"></endpoint>
### Control.get_nodes(.)
```wren
Control.get_nodes(control : Control) : Num
```
> Get how many child controls this control has recursively.
> So 1 if it doesnt have any children, 2 if it has 1 child, 3 if it has 2 children or if it has 1 child which itself has a child, etc...
> Only valid after `UI.commit`.   

<endpoint module="luxe: ui/control" class="Control" signature="get_depth(control : Control)"></endpoint>
### Control.get_depth(.)
```wren
Control.get_depth(control : Control) : Num
```
> Get the depth generated for a control, not including the depth offset.   

<endpoint module="luxe: ui/control" class="Control" signature="get_depth_offset(control : Control)"></endpoint>
### Control.get_depth_offset(.)
```wren
Control.get_depth_offset(control : Control) : Num
```
> Get the depth offset of a control.   

<endpoint module="luxe: ui/control" class="Control" signature="set_depth_offset(control : Control, depth_offset : Num)"></endpoint>
### Control.set_depth_offset(..)
```wren
Control.set_depth_offset(control : Control, depth_offset : Num) : None
```
> Set the depth offset for a control, allowing you to move it in front or behind other controls if the generated depth doesnt work for you   

<endpoint module="luxe: ui/control" class="Control" signature="get_input_inside(control : Control)"></endpoint>
### Control.get_input_inside(.)
```wren
Control.get_input_inside(control : Control) : Bool
```
> Check whether the input (usually mouse cursor) is currently in a control. (In sync with `UIEvent.enter` and `UIEvent.exit`)   

<endpoint module="luxe: ui/control" class="Control" signature="get_input_pressed(control : Control)"></endpoint>
### Control.get_input_pressed(.)
```wren
Control.get_input_pressed(control : Control) : Bool
```
> Check whether the input (usually mouse cursor) is currently in a control and any of its buttons are pressed.   

<endpoint module="luxe: ui/control" class="Control" signature="child_at_point(control : Control, x : Num, y : Num)"></endpoint>
### Control.child_at_point(...)
```wren
Control.child_at_point(control : Control, x : Num, y : Num) : Control
```
> Get the top child control at a specific (absolute) point.   

<endpoint module="luxe: ui/control" class="Control" signature="child_count(control : Control)"></endpoint>
### Control.child_count(.)
```wren
Control.child_count(control : Control) : Num
```
> Get the amount of children a control has.   

<endpoint module="luxe: ui/control" class="Control" signature="child_index(control : Control, child : Control)"></endpoint>
### Control.child_index(..)
```wren
Control.child_index(control : Control, child : Control) : Num
```
> Get the index of a child control.   

<endpoint module="luxe: ui/control" class="Control" signature="child_get(control : Control, index : Num)"></endpoint>
### Control.child_get(..)
```wren
Control.child_get(control : Control, index : Num) : Child
```
> Get a child control by its index.   

<endpoint module="luxe: ui/control" class="Control" signature="child_add(control : Control, child : Control, internal : Bool)"></endpoint>
### Control.child_add(...)
```wren
Control.child_add(control : Control, child : Control, internal : Bool) : None
```
> Make a control the child control of another control.
> If you mark the child as internal, it wont be queried by other methods affecting children.   

<endpoint module="luxe: ui/control" class="Control" signature="child_add(control : Control, child : Control)"></endpoint>
### Control.child_add(..)
```wren
Control.child_add(control : Control, child : Control) : None
```
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
### Control.child_remove(..)
```wren
Control.child_remove(control : Control, child : Control) : None
```
> Remove a child from a control, unparenting it.   

<endpoint module="luxe: ui/control" class="Control" signature="children_bounds(control : Control, into : List)"></endpoint>
### Control.children_bounds(..)
```wren
Control.children_bounds(control : Control, into : List) : None
```
> Get the combined bounds of all children of a control into a list `[x, y, width, height]`.
> The passed list must have at least 4 elements and the function will write into the first 4.
> Passing a list into the function instead of returning a value is to avoid allocating memory where not needed.   

<endpoint module="luxe: ui/control" class="Control" signature="set_behave(control : Control, behave : UIBehave)"></endpoint>
### Control.set_behave(..)
```wren
Control.set_behave(control : Control, behave : UIBehave) : None
```
> Set how the control behaves in the layout as a child of its container.
> You can combine characteristics with a bit or operator (`|`).   

<endpoint module="luxe: ui/control" class="Control" signature="get_behave(control : Control)"></endpoint>
### Control.get_behave(.)
```wren
Control.get_behave(control : Control) : UIBehave
```
> Returns the behave bitflags for the control   

<endpoint module="luxe: ui/control" class="Control" signature="set_contain(control : Control, contain : UIContain)"></endpoint>
### Control.set_contain(..)
```wren
Control.set_contain(control : Control, contain : UIContain) : None
```
> Set how the control behaves in the layout as a container of its children.
> You can combine characteristics with a bit or operator (`|`).   

<endpoint module="luxe: ui/control" class="Control" signature="get_contain(control : Control)"></endpoint>
### Control.get_contain(.)
```wren
Control.get_contain(control : Control) : UIContain
```
> Returns the contain bitflags for the control   

<endpoint module="luxe: ui/control" class="Control" signature="set_margin(control : Control, left : Num, top : Num, right : Num, bottom : Num)"></endpoint>
### Control.set_margin(.....)
```wren
Control.set_margin(control : Control, left : Num, top : Num, right : Num, bottom : Num) : None
```
> Set the margins of a control. Only the margins set in `set_behave` are actually observed.   

<endpoint module="luxe: ui/control" class="Control" signature="set_limits(control : Control, min_x : Num, min_y : Num, max_x : Num, max_y : Num)"></endpoint>
### Control.set_limits(.....)
```wren
Control.set_limits(control : Control, min_x : Num, min_y : Num, max_x : Num, max_y : Num) : None
```
> Set the min and max size of a control when using layout.   

<endpoint module="luxe: ui/control" class="Control" signature="get_margin(control : Control)"></endpoint>
### Control.get_margin(.)
```wren
Control.get_margin(control : Control) : List
```
> Get the margins of a control.   

<endpoint module="luxe: ui/control" class="Control" signature="set_render(control : Control, fn : Fn)"></endpoint>
### Control.set_render(..)
```wren
Control.set_render(control : Control, fn : Fn) : None
```
> Set a custom render function with the arguments `|control, state, x, y, w, h|`. 
> Useful for making your own controls.   

<endpoint module="luxe: ui/control" class="Control" signature="set_events(control : Control, fn : Fn)"></endpoint>
### Control.set_events(..)
```wren
Control.set_events(control : Control, fn : Fn) : String
```
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
### Control.unset_events(.)
```wren
Control.unset_events(control : Control) : None
```
> Remove all event handling functions from a control.   

<endpoint module="luxe: ui/control" class="Control" signature="unset_events(control : Control, id : String)"></endpoint>
### Control.unset_events(..)
```wren
Control.unset_events(control : Control, id : String) : None
```
> Remove an event handling function from a control.
> Takes in the id that was returned upon registering the function.   

<endpoint module="luxe: ui/control" class="Control" signature="set_process(control : Control, fn : Fn)"></endpoint>
### Control.set_process(..)
```wren
Control.set_process(control : Control, fn : Fn) : None
```
> Set a custom process function with the arguments `|control, state, event, x, y, w, h|`. 
> Useful for making your own controls.   

<endpoint module="luxe: ui/control" class="Control" signature="get_state_data(control : Control)"></endpoint>
### Control.get_state_data(.)
```wren
Control.get_state_data(control : Control) : Any
```
> Get the state data associated with this control.   

<endpoint module="luxe: ui/control" class="Control" signature="set_state_data(control : Control, data : Any)"></endpoint>
### Control.set_state_data(..)
```wren
Control.set_state_data(control : Control, data : Any) : None
```
> Set state data associated with this control.
> Can be any wren object.   

<endpoint module="luxe: ui/control" class="Control" signature="data(control : Control)"></endpoint>
### Control.data(.)
```wren
Control.data(control : Control) : Any
```
> Get the data block for this control   

