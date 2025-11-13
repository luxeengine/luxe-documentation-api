---
title: "luxe: ui/window.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/window.control"
---
- [Data](#data)   
- [Localization](#localization)   
- [UIWindow](#uiwindow)   
- [UIWindowChange](#uiwindowchange)   
- [WindowAlignH](#windowalignh)   
- [WindowAlignV](#windowalignv)   

---


## Data
```lx
import "luxe: ui/window.control" for Data
```
> no docs found

### Variables
```lx
var bring_to_front : Bool = true
var closable : Bool = true
var collapsible : Bool = true
var resizable : Bool = true
var draggable : Bool = true
var title_height : Num = 40
var text : String = ""
var align : WindowAlignH = WindowAlignH.left
var align_vertical : WindowAlignV = WindowAlignV.center
var localization : Localization = Object
var max_visible : Num = -1
var text_margin : Float4 = [8, 0, 8, 0]
var override : Object = Object
```

## Localization
```lx
import "luxe: ui/window.control" for Localization
```
> no docs found

### Variables
```lx
var key : String = null
var space : String = "game"
var args : List = []
```

## UIWindow
```lx
import "luxe: ui/window.control" for UIWindow
```
> `UIWindow` is a `Control` with a title bar, close button, and can be moved around 
> and resized like a windowed application on a desktop operating system. As you'd expect,
> you can attach other `Controls` to it that stay attached as you move it around.
> 
> ```js
>   var window = UIWindow.create(ui)
>   UIWindow.set_text(window, "I'm a window!")
>   UIWindow.set_title_size(window, 24)
>   UIWindow.set_text_size(window, 14)
>   UIWindow.set_resizable(window, true)
>   Control.set_bounds(window, 64, 64, 680, 360)
> ```

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="override(window : Control)"></endpoint>
### UIWindow.override(.)
```lx
UIWindow.override(window : Control) : WindowInfo
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="override_text(window : Control)"></endpoint>
### UIWindow.override_text(.)
```lx
UIWindow.override_text(window : Control) : LabelInfo
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="override_base(window : Control)"></endpoint>
### UIWindow.override_base(.)
```lx
UIWindow.override_base(window : Control) : PanelInfo
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="override_header(window : Control)"></endpoint>
### UIWindow.override_header(.)
```lx
UIWindow.override_header(window : Control) : PanelInfo
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="create(ui_entity : Entity)"></endpoint>
### UIWindow.create(.)
```lx
UIWindow.create(ui_entity : Entity) : UIWindow
```
> Create a new `UIWindow` control for the given UI.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="close(window : Control)"></endpoint>
### UIWindow.close(.)
```lx
UIWindow.close(window : Control) : None
```
> Make the given window disappear.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_collapsed(window : Control, state : Bool)"></endpoint>
### UIWindow.set_collapsed(..)
```lx
UIWindow.set_collapsed(window : Control, state : Bool) : None
```
> Set whether the given window's body is drawn (false, uncollapsed) or only the titlebar (true, collapsed).   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_collapsed(window : Control)"></endpoint>
### UIWindow.get_collapsed(.)
```lx
UIWindow.get_collapsed(window : Control) : Bool
```
> Get if the given window is collapsed.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_text(window : Control, text : String)"></endpoint>
### UIWindow.set_text(..)
```lx
UIWindow.set_text(window : Control, text : String) : None
```
> Set the titlebar text of the given window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_text(window : Control)"></endpoint>
### UIWindow.get_text(.)
```lx
UIWindow.get_text(window : Control) : String
```
> Get the titlebar text of the given window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_text_size(window : Control, size : Num)"></endpoint>
### UIWindow.set_text_size(..)
```lx
UIWindow.set_text_size(window : Control, size : Num) : None
```
> Set the size of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_text_size(window : Control)"></endpoint>
### UIWindow.get_text_size(.)
```lx
UIWindow.get_text_size(window : Control) : Num
```
> Get the size of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_text_color(window : Control, color : Color)"></endpoint>
### UIWindow.set_text_color(..)
```lx
UIWindow.set_text_color(window : Control, color : Color) : None
```
> Set the color of the window text.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_text_color(window : Control)"></endpoint>
### UIWindow.get_text_color(.)
```lx
UIWindow.get_text_color(window : Control) : Color
```
> Get the color of a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_text_font(window : Control)"></endpoint>
### UIWindow.get_text_font(.)
```lx
UIWindow.get_text_font(window : Control) : Font
```
> Get the font asset id of the text on the window.
> The asset id is returned as the string hash, to get the string use `Strings.get`.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_text_font(window : Control, font : Font)"></endpoint>
### UIWindow.set_text_font(..)
```lx
UIWindow.set_text_font(window : Control, font : Font) : None
```
> Set the font of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_title_size(window : Control, size : Num)"></endpoint>
### UIWindow.set_title_size(..)
```lx
UIWindow.set_title_size(window : Control, size : Num) : None
```
> Set the height of the titlebar of the given window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_resizable(window : Control, state : Bool)"></endpoint>
### UIWindow.set_resizable(..)
```lx
UIWindow.set_resizable(window : Control, state : Bool) : None
```
> Set if a window can be resized by dragging its bottom right corner.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_bring_to_front(window : Control, state : Bool)"></endpoint>
### UIWindow.set_bring_to_front(..)
```lx
UIWindow.set_bring_to_front(window : Control, state : Bool) : None
```
> Set if a window will bring itself to the front of the UI when interacted with.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_closable(window : Control, state : Bool)"></endpoint>
### UIWindow.set_closable(..)
```lx
UIWindow.set_closable(window : Control, state : Bool) : None
```
> Set if a window has a Close button the user can press.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_collapsible(window : Control, state : Bool)"></endpoint>
### UIWindow.set_collapsible(..)
```lx
UIWindow.set_collapsible(window : Control, state : Bool) : None
```
> Set if a window has a Collapse button the user can press.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_draggable(window : Control, state : Bool)"></endpoint>
### UIWindow.set_draggable(..)
```lx
UIWindow.set_draggable(window : Control, state : Bool) : None
```
> Set if a window can be dragged around with the mouse.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_resizable(window : Control)"></endpoint>
### UIWindow.get_resizable(.)
```lx
UIWindow.get_resizable(window : Control) : Bool
```
> Get if a window can be resized by the user.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_bring_to_front(window : Control)"></endpoint>
### UIWindow.get_bring_to_front(.)
```lx
UIWindow.get_bring_to_front(window : Control) : unknown
```
> Get if a window will bring itself to the front of the UI when interacted with.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_closable(window : Control)"></endpoint>
### UIWindow.get_closable(.)
```lx
UIWindow.get_closable(window : Control) : unknown
```
> Get if a window has its Close button visible.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_collapsible(window : Control)"></endpoint>
### UIWindow.get_collapsible(.)
```lx
UIWindow.get_collapsible(window : Control) : unknown
```
> Get if a window has its Collapse button visible.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_draggable(window : Control)"></endpoint>
### UIWindow.get_draggable(.)
```lx
UIWindow.get_draggable(window : Control) : unknown
```
> Get if a window can be dragged around with the mouse.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_align(window : Control, align : TextAlign)"></endpoint>
### UIWindow.set_align(..)
```lx
UIWindow.set_align(window : Control, align : TextAlign) : None
```
> Set the horizontal alignment of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_align(window : Control)"></endpoint>
### UIWindow.get_align(.)
```lx
UIWindow.get_align(window : Control) : TextAlign
```
> Get the horizontal alignment of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_align_vertical(window : Control, align : TextAlign)"></endpoint>
### UIWindow.set_align_vertical(..)
```lx
UIWindow.set_align_vertical(window : Control, align : TextAlign) : None
```
> Set the vertical alignment of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_align_vertical(window : Control)"></endpoint>
### UIWindow.get_align_vertical(.)
```lx
UIWindow.get_align_vertical(window : Control) : TextAlign
```
> Get the vertical alignment of the text on a window.   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_loc(window : Control, space : String, key : String)"></endpoint>
### UIWindow.set_loc(...)
```lx
UIWindow.set_loc(window : Control, space : String, key : String) : None
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_loc(window : Control, key : String)"></endpoint>
### UIWindow.set_loc(..)
```lx
UIWindow.set_loc(window : Control, key : String) : None
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_loc_with_args(window : Control, space : String, key : String, args : List)"></endpoint>
### UIWindow.set_loc_with_args(....)
```lx
UIWindow.set_loc_with_args(window : Control, space : String, key : String, args : List) : None
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="set_loc_with_args(window : Control, key : String, args : List)"></endpoint>
### UIWindow.set_loc_with_args(...)
```lx
UIWindow.set_loc_with_args(window : Control, key : String, args : List) : None
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindow" signature="get_render_text(window : Control)"></endpoint>
### UIWindow.get_render_text(.)
```lx
UIWindow.get_render_text(window : Control) : RenderText
```
> Get the underlying lowlevel text render object.
> Usable with the `Render.text_*` API.   


## UIWindowChange
```lx
import "luxe: ui/window.control" for UIWindowChange
```
> no docs found

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="close"></endpoint>
### UIWindowChange.close
```lx
UIWindowChange.close : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="open"></endpoint>
### UIWindowChange.open
```lx
UIWindowChange.open : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="collapse"></endpoint>
### UIWindowChange.collapse
```lx
UIWindowChange.collapse : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="uncollapse"></endpoint>
### UIWindowChange.uncollapse
```lx
UIWindowChange.uncollapse : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="move"></endpoint>
### UIWindowChange.move
```lx
UIWindowChange.move : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="UIWindowChange" signature="name(value : Any)"></endpoint>
### UIWindowChange.name(.)
```lx
UIWindowChange.name(value : Any) : unknown
```
> no docs found   


## WindowAlignH
```lx
import "luxe: ui/window.control" for WindowAlignH
```
> no docs found

<endpoint module="luxe: ui/window.control" class="WindowAlignH" signature="left"></endpoint>
### WindowAlignH.left
```lx
WindowAlignH.left : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="WindowAlignH" signature="center"></endpoint>
### WindowAlignH.center
```lx
WindowAlignH.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="WindowAlignH" signature="right"></endpoint>
### WindowAlignH.right
```lx
WindowAlignH.right : unknown
```
> no docs found   


## WindowAlignV
```lx
import "luxe: ui/window.control" for WindowAlignV
```
> no docs found

<endpoint module="luxe: ui/window.control" class="WindowAlignV" signature="top"></endpoint>
### WindowAlignV.top
```lx
WindowAlignV.top : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="WindowAlignV" signature="center"></endpoint>
### WindowAlignV.center
```lx
WindowAlignV.center : unknown
```
> no docs found   

<endpoint module="luxe: ui/window.control" class="WindowAlignV" signature="bottom"></endpoint>
### WindowAlignV.bottom
```lx
WindowAlignV.bottom : unknown
```
> no docs found   

