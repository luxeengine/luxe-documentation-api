---
title: "luxe: draw"
description: API version 2025.11.1
slug: "v/2025.11.1/draw"
---
- [Draw](#draw)   
- [LineCap](#linecap)   
- [LineJoin](#linejoin)   
- [PathStyle](#pathstyle)   

---


## Draw
```lx
import "luxe: draw" for Draw
```
> Draw is a service API that offers drawing to a context (canvas) in an efficient way.
> Things like lines, circles, paths and so on are what it provides. _The terms canvas and context
> will be used interchangeably._ 
> 
> It is important to note that
> `Draw` is a [commit](../../guide/concepts#commit) based API. A brief tutorial 
> on using it can be found here: [2D drawing tutorial](../../tutorial/basics/drawing-2d).
> 
> `Draw` can be used to draw game content with, but is also a great tool for debug visualization.
> Many problems are a lot clearer when their details are drawn in the world, which Draw is very useful for.
> 
> The context can be drawn to once or updated frequently. For example you might draw a grid to the context,
> and then leave it there which is a very efficient way to draw many lines.

<endpoint module="luxe: draw" class="Draw" signature="create(set : Any)"></endpoint>
### Draw.create(.)
```lx
Draw.create(set : Any) : unknown
```
> Creates a new drawing context to draw with.
> The `set` passed in is a `RenderSet`, which you normally get from a `World` via `World.render_set(world)`.
> This would place the canvas in the world to be rendered at the same time, as part of the world.
> 
>     var canvas = Draw.create(World.render_set(app.world))   

<endpoint module="luxe: draw" class="Draw" signature="create(set : RenderSet, tri_basis : String, text_basis : String, line_basis : String)"></endpoint>
### Draw.create(....)
```lx
Draw.create(set : RenderSet, tri_basis : String, text_basis : String, line_basis : String) : unknown
```
> Creates a new drawing context to draw with.
> The `set` passed in is a `RenderSet`, which you normally get from a `World` via `World.render_set(world)`.
> This would place the canvas in the world to be rendered at the same time, as part of the world.
> 
> - `tri_basis`
>   - Triangle Material Basis for the geometry
>   - default `luxe: material_basis/solid`
> - `text_basis`
>   - Text Material Basis
>   - default `luxe: material_basis/font`
> - `line_basis`
>   - Line Material Basis for 3D line geometry
>   - default `luxe: material_basis/debug_line3d`
> 
>     var canvas = Draw.create(World.render_set(app.world), 
>                              "luxe: material_basis/solid", 
>                              "luxe: material_basis/font",
>                              "luxe: material_basis/debug_line3d")   

<endpoint module="luxe: draw" class="Draw" signature="destroy(context : Any)"></endpoint>
### Draw.destroy(.)
```lx
Draw.destroy(context : Any) : unknown
```
> Destroy a previously created context.
> 
>   ```js
>   var canvas = Draw.create(World.render_set(app.world))
>   ...
>   Draw.destroy(canvas)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="valid(context : Any)"></endpoint>
### Draw.valid(.)
```lx
Draw.valid(context : Any) : unknown
```
> Returns true if the context is valid (and hasn't been destroyed).
> 
>   ```js
>   var canvas = Draw.create(World.render_set(app.world))
>   var canvas = Draw.create(World.render_set(app.world))
>   Log.print(Draw.valid(canvas)) //true
>   Draw.destroy(canvas)
>   Log.print(Draw.valid(canvas)) //false
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="clear(context : Any)"></endpoint>
### Draw.clear(.)
```lx
Draw.clear(context : Any) : unknown
```
> Clears the context of any drawn content.
> This clears both committed and uncommitted data.
> 
>   ```js
>   Draw.clear(draw)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="commit(context : Any)"></endpoint>
### Draw.commit(.)
```lx
Draw.commit(context : Any) : unknown
```
> Commit the content that has been drawn to the context.
> 
> When using the Draw API, you can submit a bunch of drawing to happen,
> but it won't show up until it is committed. 
> 
> You can think of the draw calls as a queue, commit will process 
> that queue, and the canvas contents will be updated. The content
> will stay there until commit is called again. 
> 
> Calling commit with nothing in the queue will clear the contents (see also `Draw.clear`).
> 
>   ```js
>   var canvas = Draw.create(World.render_set(app.world))
>   //draw a red box rotated 45 degrees
>   Draw.quad(canvas, 0, 0, 0, 100, 100, 45, [1, 0, 0, 1])
>   Draw.commit(canvas)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="rect(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, style : Any)"></endpoint>
### Draw.rect(........)
```lx
Draw.rect(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, style : Any) : unknown
```
> Draws a rectangle **outline** using `style` (`PathStyle`) at `x`,`y`, with depth `z`, with width of `w` and height of `h`.
> The rectangle will be rotated `angle` degrees.
> 
>   ```js
>   var depth = 0
>   var angle = 45
>   var style = PathStyle.new()
>       style.color = [1,0,0,1]
>       style.thickness = 2
>   Draw.rect(canvas, 0, 0, depth, 100, 100, angle, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="rect_detailed(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, radius : Any, smoothness : Any, style : Any)"></endpoint>
### Draw.rect_detailed(..........)
```lx
Draw.rect_detailed(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, radius : Any, smoothness : Any, style : Any) : unknown
```
> Draws a detailed rectangle **outline** using `style` (`PathStyle`) at `x`,`y`, with depth `z`, with width of `w` and height of `h`.
> The rectangle will be rotated `angle` degrees. 
> 
> "Detailed" means that the corners can be configured using the `radius` and `smoothness` values.
> This allows drawing rounded rectangles, rectangles with inverted rounded corners, and with flat corners.
> The radius controls the amount inset from the edges. With a smoothness of 0, the corners will be angled/flat.
> 
> The order is `[bottom left, bottom right, top right, top left]` for radius + smoothness.
> 
>   ```js
>   var depth = 0
>   var angle = 0
>   var style = PathStyle.new()
>   var radius = [16, 16, 16, 16]
>   var smoothness = [2, 2, 2, 2]
>   Draw.rect_detailed(_ctx, 64, 64, depth, 256, 128, angle, radius, smoothness, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="quad_detailed(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, radius : Any, smoothness : Any, color : Any)"></endpoint>
### Draw.quad_detailed(..........)
```lx
Draw.quad_detailed(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, radius : Any, smoothness : Any, color : Any) : unknown
```
> Draws a detailed rectangle using `color` at `x`,`y`, with depth `z`, with width of `w` and height of `h`.
> The rectangle will be rotated `angle` degrees. 
> 
> "Detailed" means that the corners can be configured using the `radius` and `smoothness` values.
> This allows drawing rounded rectangles, rectangles with inverted rounded corners, and with flat corners.
> The radius controls the amount inset from the edges. With a smoothness of 0, the corners will be angled/flat.
> 
> The order is `[bottom left, bottom right, top right, top left]` for radius + smoothness.
> 
>   ```js
>   var depth = 0
>   var angle = 0
>   var color = [0,0,0,1]
>   var radius = [16, 16, 16, 16]
>   var smoothness = [2, 2, 2, 2]
>   Draw.quad_detailed(_ctx, 64, 64, depth, 256, 128, angle, radius, smoothness, color)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="quad(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, color : Any)"></endpoint>
### Draw.quad(........)
```lx
Draw.quad(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, color : Any) : unknown
```
> Draws a **solid** rectangle using `color` at `x`,`y`, with depth `z`, with width of `w` and height of `h`.
> The rectangle will be rotated `angle` degrees.
> 
>   ```js
>   //draw a black solid rectangle
>   var depth = 0
>   var angle = 45
>   Draw.quad(canvas, 0, 0, depth, 100, 100, angle, [0,0,0,1])
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="ngon(context : Any, ox : Any, oy : Any, oz : Any, rx : Any, ry : Any, sides : Any, angle : Any, style : Any)"></endpoint>
### Draw.ngon(.........)
```lx
Draw.ngon(context : Any, ox : Any, oy : Any, oz : Any, rx : Any, ry : Any, sides : Any, angle : Any, style : Any) : unknown
```
> Draw an ngon (like a triangle, hexagon, pentagon etc) **outline** at `ox`,`oy` at depth `oz`. 
> The `rx` and `ry` radius values control the size of the shape around its origin.
> The number of `sides` controls how many sides the polygon will have (3 for a triangle, 6 for a hexagon).
> `sides` must be bigger than `3` to make sense for this function, it will be clamped to 3.
> 
>   ```js
>   var depth = 0
>   var sides = 3
>   var radius = 32
>   var angle = 45
>   var style = PathStyle.new()
>   Draw.ngon(canvas, 128, 128, depth, radius, radius, sides, angle, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="ngon_solid(context : Any, ox : Any, oy : Any, oz : Any, rx : Any, ry : Any, sides : Any, angle : Any, color : Any)"></endpoint>
### Draw.ngon_solid(.........)
```lx
Draw.ngon_solid(context : Any, ox : Any, oy : Any, oz : Any, rx : Any, ry : Any, sides : Any, angle : Any, color : Any) : unknown
```
> Draw a **solid** ngon (like a triangle, hexagon, pentagon etc)  at `ox`,`oy` at depth `oz`. 
> The `rx` and `ry` radius values control the size of the shape around its origin.
> The number of `sides` controls how many sides the polygon will have (3 for a triangle, 6 for a hexagon).
> `sides` must be bigger than `3` to make sense for this function.
> 
> :todo: this naming will change soon to be consistent across all draw APIs.
> 
>   ```js
>   var depth = 0
>   var sides = 3
>   var radius = 32
>   var angle = 45
>   Draw.ngon_solid(canvas, 128, 128, depth, radius, radius, sides, angle, Color.pink)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="ring(context : Any, ox : Any, oy : Any, oz : Any, rx : Any, ry : Any, start_angle : Any, end_angle : Any, smoothness : Any, style : Any)"></endpoint>
### Draw.ring(..........)
```lx
Draw.ring(context : Any, ox : Any, oy : Any, oz : Any, rx : Any, ry : Any, start_angle : Any, end_angle : Any, smoothness : Any, style : Any) : unknown
```
> Draw a circle **outline** at `ox`,`oy` at depth `oz`. `rx` and `ry` control separate radius values
> for x and y axis, to draw an ellipse.
> 
> `start_angle` and `end_angle` specify in degrees allow drawing
> an open arc, instead of a closed circle. A closed circle has `start_angle` as `0` and `end_angle` as `360`.
> These angles match "the unit circle" in mathematics, where 0 is to the right, and 90 is pointing up.
> 
> :todo: `smoothness` controls how smooth the circle will be.
> 
>   ```js
>   var depth = 0
>   var start_angle = 0
>   var end_angle = 270
>   var smoothness = 2
>   var style = PathStyle.new()
>   Draw.ring(canvas, 128, 128, depth, 32, 16, start_angle, end_angle, smoothness, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="ring(context : Any, ox : Any, oy : Any, oz : Any, radius : Any, smoothness : Any, style : Any)"></endpoint>
### Draw.ring(.......)
```lx
Draw.ring(context : Any, ox : Any, oy : Any, oz : Any, radius : Any, smoothness : Any, style : Any) : unknown
```
> Similar to `ring` with a single radius for both `x` and `y`.   

<endpoint module="luxe: draw" class="Draw" signature="circle(context : Any, ox : Any, oy : Any, oz : Any, radius : Any, smoothness : Any, color : Any)"></endpoint>
### Draw.circle(.......)
```lx
Draw.circle(context : Any, ox : Any, oy : Any, oz : Any, radius : Any, smoothness : Any, color : Any) : unknown
```
> Draw a **solid** circle at `ox`,`oy` at depth `oz`, using `color` and `radius` in size.
> :todo: `smoothness` controls how smooth the circle will be.
> 
>   ```js
>   var depth = 0
>   var smoothness = 2
>   Draw.circle(canvas, 128, 128, depth, 32, smoothness, [1,0,0,1])
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="circle(context : Any, ox : Any, oy : Any, oz : Any, rx : Any, ry : Any, start_angle : Any, end_angle : Any, smoothness : Any, color : Any)"></endpoint>
### Draw.circle(..........)
```lx
Draw.circle(context : Any, ox : Any, oy : Any, oz : Any, rx : Any, ry : Any, start_angle : Any, end_angle : Any, smoothness : Any, color : Any) : unknown
```
> Draw a **solid** circle at `ox`,`oy` at depth `oz`. `rx` and `ry` control separate radius values
> for x and y axis, to draw an ellipse.
> 
> `start_angle` and `end_angle` specify in degrees allow drawing
> an open area, like a pie chart (or pacman) instead of a closed circle. A closed circle has `start_angle` as `0` and `end_angle` as `360`.
> These angles match "the unit circle" in mathematics, where 0 is to the right, and 90 is pointing up.
> 
> :todo: `smoothness` controls how smooth the circle will be.
> 
>   ```js
>   var depth = 0
>   var start_angle = 0
>   var end_angle = 270
>   var smoothness = 2
>   Draw.circle(canvas, 128, 128, depth, 32, 16, start_angle, end_angle, smoothness, Color.black)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="line(context : Any, x1 : Any, y1 : Any, x2 : Any, y2 : Any, z : Any, style : Any)"></endpoint>
### Draw.line(.......)
```lx
Draw.line(context : Any, x1 : Any, y1 : Any, x2 : Any, y2 : Any, z : Any, style : Any) : unknown
```
> Draw a line from `x1`,`y1` to `x2`,`y2` at depth `z` using `style` (`PathStyle`).
> 
>   ```js
>   var depth = 0
>   var style = PathStyle.new()
>   Draw.line(canvas, 0,0, 100,100, depth, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="path(context : Any, points : Any, style : Any, closed : Any)"></endpoint>
### Draw.path(....)
```lx
Draw.path(context : Any, points : Any, style : Any, closed : Any) : unknown
```
> Draw a path consisting of a list of points. 
> 
> If `closed` is true it is expected that the first and last point in `points`
> have the same positions. 
> 
> `points` is a `List` of `[x, y]` or `[x,y,z]` points. 
> If `z` is not specified for a point it will be 0. 
> Note that this is a 2D drawing function atm, so different z values may not be what you expect.
> 
>   ```js
>   var style = PathStyle.new()
>   var points = [
>     [0,0],
>     [100,100],
>     [120,50],
>     [0,0]
>   ]
>   Draw.path(canvas, points, style, true)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="path3D(context : Any, points : Any, style : Any, closed : Any)"></endpoint>
### Draw.path3D(....)
```lx
Draw.path3D(context : Any, points : Any, style : Any, closed : Any) : unknown
```
> Draw a 3D path consisting of a list of points. 
> 
> If `closed` is true it is expected that the first and last point in `points`
> have the same positions. 
> 
> `points` is a `List` of `[x,y,z]` points. 
> 
>   ```js
>   var style = PathStyle.new()
>   var points = [
>     [0,0,0],
>     [100,100,100],
>     [120,50,100],
>     [0,0,0]
>   ]
>   Draw.path3D(canvas, points, style, true)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="line3D(context : Draw, start : Vec, end : Vec, style : PathStyle)"></endpoint>
### Draw.line3D(....)
```lx
Draw.line3D(context : Draw, start : Vec, end : Vec, style : PathStyle) : unknown
```
> Draw a 3D line from `start` to `end` using `style`. 
> 
>   ```js
>   var style = PathStyle.new()
>   Draw.line3D(canvas, [100,100,100], [120,50,100], style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="obb3D(context : Any, obb : Any, style : Any)"></endpoint>
### Draw.obb3D(...)
```lx
Draw.obb3D(context : Any, obb : Any, style : Any) : unknown
```
> no docs found   

<endpoint module="luxe: draw" class="Draw" signature="bounds3D(context : Any, geometry : Any, style : Any)"></endpoint>
### Draw.bounds3D(...)
```lx
Draw.bounds3D(context : Any, geometry : Any, style : Any) : unknown
```
> no docs found   

<endpoint module="luxe: draw" class="Draw" signature="aabb3D(context : Any, center : Any, radius : Any, style : Any)"></endpoint>
### Draw.aabb3D(....)
```lx
Draw.aabb3D(context : Any, center : Any, radius : Any, style : Any) : unknown
```
> no docs found   

<endpoint module="luxe: draw" class="Draw" signature="plane3D(context : Draw, pos : Vec, normal : Vec, radius : Num, style : PathStyle)"></endpoint>
### Draw.plane3D(.....)
```lx
Draw.plane3D(context : Draw, pos : Vec, normal : Vec, radius : Num, style : PathStyle) : unknown
```
> no docs found   

<endpoint module="luxe: draw" class="Draw" signature="plus3D(context : Draw, pos : Vec, radius : Num, style : PathStyle)"></endpoint>
### Draw.plus3D(....)
```lx
Draw.plus3D(context : Draw, pos : Vec, radius : Num, style : PathStyle) : unknown
```
> Draw a 3D plus at `pos` with size `radius` using `style`. 
> 
>   ```js
>   var style = PathStyle.new()
>   Draw.plus3D(canvas, [100,100,100], 4, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="ring3D(context : Draw, pos : Vec3, radius : Vec2, start_angle : Num, end_angle : Num, smoothness : Num, style : PathStyle)"></endpoint>
### Draw.ring3D(.......)
```lx
Draw.ring3D(context : Draw, pos : Vec3, radius : Vec2, start_angle : Num, end_angle : Num, smoothness : Num, style : PathStyle) : unknown
```
> Draw a 3D ring at `pos` with radius `[radius_x, radius_y]` using `style`. 
> 
>   ```js
>   var style = PathStyle.new()
>   Draw.ring3D(canvas, [100,100,100], [4, 4], 0, 360, smoothness, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="plus(context : Draw, pos : Vec, radius : Num, style : PathStyle)"></endpoint>
### Draw.plus(....)
```lx
Draw.plus(context : Draw, pos : Vec, radius : Num, style : PathStyle) : unknown
```
> Draw a 2D plus at `pos` with size `radius` using `style`. 
> 
>   ```js
>   var style = PathStyle.new()
>   Draw.plus(canvas, [100,100], 20, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="camera(context : Draw, camera : Entity, style : PathStyle)"></endpoint>
### Draw.camera(...)
```lx
Draw.camera(context : Draw, camera : Entity, style : PathStyle) : unknown
```
> Draw a 3D camera frustum for the given camera entity using `style`. 
> 
>   ```js
>   var style = PathStyle.new()
>   Draw.camera(canvas, camera, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="frustum(context : Draw, corners : List, style : PathStyle)"></endpoint>
### Draw.frustum(...)
```lx
Draw.frustum(context : Draw, corners : List, style : PathStyle) : unknown
```
> Draw a 3D camera frustum for the given 8 corner points using `style`.
> (You can get one from Camera.get_frustum(entity) for example, but can use Draw.camera as well).
> 
>   ```js
>   var style = PathStyle.new()
>   var corners = [
>     near_top_left, 
>     near_top_right, 
>     near_bottom_left, 
>     near_bottom_right,
>     far_top_left, 
>     far_top_right, 
>     far_bottom_left, 
>     far_bottom_right,
>   ]
>   Draw.frustum(canvas, corners, style)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="text(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, string : Any, size : Any, font : Any, color : Any, align : Any, align_vertical : Any)"></endpoint>
### Draw.text(............)
```lx
Draw.text(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, string : Any, size : Any, font : Any, color : Any, align : Any, align_vertical : Any) : unknown
```
> Draw the specified `string` at `x`,`y` and depth `z`. `w` and `h` specify the bounds for the text, bottom left origin, y going up. 
> The `size` specifies the text size, and `color` the color. `font` is a font asset, e.g Asset.font("luxe: font/lato"). 
> `align` and `align_vertical` control alignment within the bounds, 
> using the `TextAlign` enums such as `TextAlign.left`.
> 
>   ```js
>   var depth = 0
>   var size = 24
>   var red = [1,0,0,1]
>   Draw.text(canvas, 32, 32, depth, 100, 32, "hello", size, Asset.font("luxe: font/lato"), red, TextAlign.center, TextAlign.bottom)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="text(context : Any, x : Any, y : Any, z : Any, string : Any, size : Any, font : Any, color : Any, align : Any, align_vertical : Any)"></endpoint>
### Draw.text(..........)
```lx
Draw.text(context : Any, x : Any, y : Any, z : Any, string : Any, size : Any, font : Any, color : Any, align : Any, align_vertical : Any) : unknown
```
> Draw the specified `string` at `x`,`y` and depth `z`. 
> The `size` specifies the text size, and `color` the color.  `font` is a font asset, e.g Asset.font("luxe: font/lato"). 
> `align` and `align_vertical` control alignment relative to the specified position, 
> using the `TextAlign` enums such as `TextAlign.left`.
> 
>   ```js
>   var depth = 0
>   var size = 24
>   var red = [1,0,0,1]
>   Draw.text(canvas, 32, 32, depth, "hello", size, Asset.font("luxe: font/lato"), red, TextAlign.center, TextAlign.bottom)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="text(context : Any, x : Any, y : Any, z : Any, string : Any, size : Any, color : Any)"></endpoint>
### Draw.text(.......)
```lx
Draw.text(context : Any, x : Any, y : Any, z : Any, string : Any, size : Any, color : Any) : unknown
```
> Draw the specified `string` at `x`,`y`, `z`.
> The `size` specifies the text size, and `color` the color. 
> 
>   ```js
>   var depth = 0
>   var size = 24
>   var red = [1,0,0,1]
>   Draw.text(canvas, 32, 32, depth, "hello", size, red)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="image(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, material : Any)"></endpoint>
### Draw.image(........)
```lx
Draw.image(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, material : Any) : unknown
```
> Draw an image with the specified `material` at `x`,`y` and depth `z`. 
> The image will be rotated by `angle` degrees.
> 
>   ```js
>   var depth = 0
>   var angle = 30
>   var material = Assets.material("luxe: material/logo.sprite")
>   Draw.image(canvas, 128, 128, depth, 64, 64, angle, material)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="image(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, color : Any, uv : Any, material : Any)"></endpoint>
### Draw.image(..........)
```lx
Draw.image(context : Any, x : Any, y : Any, z : Any, w : Any, h : Any, angle : Any, color : Any, uv : Any, material : Any) : unknown
```
> Draw an image with the specified `material` at `x`,`y` and depth `z`. 
> The image will be rotated by `angle` degrees. 
> 
> The `uv` value specifies a fixed rectangle like `[left, top, right, bottom]` in the `0..1` range,
> where `[0,0,1,1]` is the default and displays the full image. 
> A `uv` value of `[0.5, 0, 1, 0.5]` would draw the top right corner of the image only.
> A `uv` value of `[0, 0, 4, 4]` would tile the image 4 times _(as long as the material has a repeat mode for the image)._
> 
>   ```js
>   var depth = 0
>   var angle = 30
>   var material = Assets.material("luxe: material/logo.sprite")
>   var uv = [0, 0.5, 0, 1] //bottom right
>   Draw.image(canvas, 128, 128, depth, 64, 64, angle, uv, material)
>   ```   

<endpoint module="luxe: draw" class="Draw" signature="cross(context : Any, x : Any, y : Any, z : Any, radius : Any, angle : Any, style : Any)"></endpoint>
### Draw.cross(.......)
```lx
Draw.cross(context : Any, x : Any, y : Any, z : Any, radius : Any, angle : Any, style : Any) : unknown
```
> Draws a cross, an x shape   

<endpoint module="luxe: draw" class="Draw" signature="sphere3D_slice(context : Draw, pos : Vec3, radius : Vec2, start_angle : Num, end_angle : Num, layers : Num, style : PathStyle)"></endpoint>
### Draw.sphere3D_slice(.......)
```lx
Draw.sphere3D_slice(context : Draw, pos : Vec3, radius : Vec2, start_angle : Num, end_angle : Num, layers : Num, style : PathStyle) : unknown
```
> Draw a 3D sphere made from layered circles with `layers` number of circles and `radius` radius. Make the `start_angle` 0 and the `end_angle` 360 to make a full sphere, or 0/180 for a half sphere.
> 
>   ```js
>   Draw.sphere3D_slice(canvas, [0, 2, 0], [1,1], 0, 360, 16, PathStyle.new())
>   ```   


## LineCap
```lx
import "luxe: draw" for LineCap
```
> The end of a line is called a "cap", when drawing paths, this determines the type of cap that a line will have. :todo: images

<endpoint module="luxe: draw" class="LineCap" signature="butt"></endpoint>
### LineCap.butt
```lx
LineCap.butt : unknown
```
> This cap is as if there was no cap, the line is just ended. The default.
> 
>   ```js
>   var style = PathStyle.new()
>       style.cap = LineCap.butt
>   ```   

<endpoint module="luxe: draw" class="LineCap" signature="round"></endpoint>
### LineCap.round
```lx
LineCap.round : unknown
```
> A round cap is a half circle at the end of the line.
> 
>   ```js
>   var style = PathStyle.new()
>       style.cap = LineCap.round
>   ```   

<endpoint module="luxe: draw" class="LineCap" signature="square"></endpoint>
### LineCap.square
```lx
LineCap.square : unknown
```
> A square cap is a square at the end of the line.
> 
>   ```js
>   var style = PathStyle.new()
>       style.cap = LineCap.square
>   ```   

<endpoint module="luxe: draw" class="LineCap" signature="from_string(value : Any)"></endpoint>
### LineCap.from_string(.)
```lx
LineCap.from_string(value : Any) : unknown
```
> Convert a string to a LineCap value.
> 
>   ```js
>   Log.print(LineCap.round == LineCap.from_string("round")) //true
>   ```   


## LineJoin
```lx
import "luxe: draw" for LineJoin
```
> When drawing a path, a series of lines will be drawn and joined together.
> The join of each connection can be configured when drawing paths using `LineJoin`.
> :todo: images

<endpoint module="luxe: draw" class="LineJoin" signature="bevel"></endpoint>
### LineJoin.bevel
```lx
LineJoin.bevel : unknown
```
> The default join is a bevel, which is a flat join.
> 
>   ```js
>   var style = PathStyle.new()
>       style.join = LineJoin.bevel
>   ```   

<endpoint module="luxe: draw" class="LineJoin" signature="round"></endpoint>
### LineJoin.round
```lx
LineJoin.round : unknown
```
> A round join is a semi circle that makes the corner rounded.
> 
>   ```js
>   var style = PathStyle.new()
>       style.join = LineJoin.round
>   ```   

<endpoint module="luxe: draw" class="LineJoin" signature="miter"></endpoint>
### LineJoin.miter
```lx
LineJoin.miter : unknown
```
> A miter join is a sharp triangle join that has a limit value (which falls back to bevel).
> 
>   ```js
>   var style = PathStyle.new()
>       style.join = LineJoin.miter
>       style.miter_limit = 8
>   ```   

<endpoint module="luxe: draw" class="LineJoin" signature="from_string(value : Any)"></endpoint>
### LineJoin.from_string(.)
```lx
LineJoin.from_string(value : Any) : unknown
```
> Convert a string to a LineJoin value.
> 
>   ```js
>   Log.print(LineJoin.round == LineJoin.from_string("round")) //true
>   ```   


## PathStyle
```lx
import "luxe: draw" for PathStyle
```
> 

<endpoint module="luxe: draw" class="PathStyle" signature="array"></endpoint>
### PathStyle.array
```lx
PathStyle.array : unknown
```
> no docs found   

<endpoint module="luxe: draw" class="PathStyle" signature="color"></endpoint>
### PathStyle.color
```lx
PathStyle.color : unknown
```
> Returns the color of the path style.
> 
>   ```js
>   var style = PathStyle.new()
>   var color = style.color //the default color
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="alpha(value : Any)"></endpoint>
### PathStyle.alpha(.)
```lx
PathStyle.alpha(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: draw" class="PathStyle" signature="color(value : Any)"></endpoint>
### PathStyle.color(.)
```lx
PathStyle.color(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: draw" class="PathStyle" signature="thickness(value : Any)"></endpoint>
### PathStyle.thickness(.)
```lx
PathStyle.thickness(value : Any) : unknown
```
> no docs found   

<endpoint module="luxe: draw" class="PathStyle" signature="color=(value : Any)"></endpoint>
### PathStyle.color
```lx
PathStyle.color=(value : Any) : unknown
```
> Set the color for the style.
> 
>   ```js
>   var style = PathStyle.new()
>   style.color = [0, 0, 0, 1] //black
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="alpha"></endpoint>
### PathStyle.alpha
```lx
PathStyle.alpha : unknown
```
> Returns the alpha from the color of the path style.
> 
>   ```js
>   var style = PathStyle.new()
>   var color = style.alpha //the alpha value of the default color
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="alpha=(value : Any)"></endpoint>
### PathStyle.alpha
```lx
PathStyle.alpha=(value : Any) : unknown
```
> Set the alpha of the color for the style.
> 
>   ```js
>   var style = PathStyle.new()
>   style.alpha = 0.5 //half alpha
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="thickness"></endpoint>
### PathStyle.thickness
```lx
PathStyle.thickness : unknown
```
> Returns the thickness of the path style.
> 
>   ```js
>   var style = PathStyle.new()
>   Log.print(style.thickness) //1
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="thickness=(value : Any)"></endpoint>
### PathStyle.thickness
```lx
PathStyle.thickness=(value : Any) : unknown
```
> Set the thickness of the path style.
> 
>   ```js
>   var style = PathStyle.new()
>   style.thickness = 4
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="feather"></endpoint>
### PathStyle.feather
```lx
PathStyle.feather : unknown
```
> Returns the feather value for the path style. 
> Note: not used much at the moment.
> 
>   ```js
>   var style = PathStyle.new()
>   var feather = style.feather
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="feather=(value : Any)"></endpoint>
### PathStyle.feather
```lx
PathStyle.feather=(value : Any) : unknown
```
> Set the feather value for the path style. 
> Note: not used much at the moment.
> 
>   ```js
>   var style = PathStyle.new()
>   style.feather = 2
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="cap"></endpoint>
### PathStyle.cap
```lx
PathStyle.cap : unknown
```
> Returns the `LineCap` type for the path style.
> 
>   ```js
>   var style = PathStyle.new()
>   var cap = style.cap
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="cap=(value : Any)"></endpoint>
### PathStyle.cap
```lx
PathStyle.cap=(value : Any) : unknown
```
> Set the `LineCap` type for the path style.
> 
>   ```js
>   var style = PathStyle.new()
>   style.cap = LineCap.round
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="join"></endpoint>
### PathStyle.join
```lx
PathStyle.join : unknown
```
> Returns the `LineJoin` type for the path style.
> 
>   ```js
>   var style = PathStyle.new()
>   var join = style.join
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="join=(value : Any)"></endpoint>
### PathStyle.join
```lx
PathStyle.join=(value : Any) : unknown
```
> Set the `LineJoin` type for the path style.
> 
>   ```js
>   var style = PathStyle.new()
>   style.cap = LineJoin.round
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="miter_limit"></endpoint>
### PathStyle.miter_limit
```lx
PathStyle.miter_limit : unknown
```
> Returns the miter limit for the path style.
> Only relevant if the `join` type is `LineJoin.miter`.
> 
>   ```js
>   var style = PathStyle.new()
>   var limit = style.miter_limit
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="miter_limit=(value : Any)"></endpoint>
### PathStyle.miter_limit
```lx
PathStyle.miter_limit=(value : Any) : unknown
```
> Set the miter limit for the path style.
> Only relevant if the `join` type is `LineJoin.miter`.
> 
>   ```js
>   var style = PathStyle.new()
>   style.miter_limit = 8
>   ```   

<endpoint module="luxe: draw" class="PathStyle" signature="new()"></endpoint>
### PathStyle.new(.)
```lx
PathStyle.new() : PathStyle
```
> Create a new `PathStyle` instance.
> 
>   ```js
>   var style = PathStyle.new()
>   style.color = [1,0,0,1]
>   style.thickness = 2
>   style.join = LineJoin.round
>   //use style
>   //...
>   style.thickness = 1
>   //use style again...
>   ```   

