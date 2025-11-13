---
title: "luxe: system/sprite.modifier"
description: API version 2025.11.1
slug: "v/2025.11.1/system/sprite.modifier"
---
- [Advanced](#advanced)   
- [Data](#data)   
- [Dissolve](#dissolve)   
- [HSV](#hsv)   
- [Outline](#outline)   
- [Shadow](#shadow)   
- [Shine](#shine)   
- [Sprite](#sprite)   
- [SpriteBillboard](#spritebillboard)   
- [System](#system)   

---


## Advanced
```lx
import "luxe: system/sprite.modifier" for Advanced
```
> no docs found

### Variables
```lx
var auto_size : Bool = true
var material_input : String = "sprite.image"
var HSV : HSV = Object
var outline : Outline = Object
var shadow : Shadow = Object
var dissolve : Dissolve = Object
var shine : Shine = Object
```

## Data
```lx
import "luxe: system/sprite.modifier" for Data
```
> no docs found

### Variables
```lx
var image : Asset = "luxe: image/logo"
var size : Float2 = [64, 64]
var origin : Float2 = [0.5, 0.5]
var skew : Float2 = [0, 0]
var color : Color = [1, 1, 1, 1]
var uv : Float4 = [0, 0, 1, 1]
var flip_x : Bool = false
var flip_y : Bool = false
var pixelated : Bool = false
var billboard : SpriteBillboard = SpriteBillboard.none
var billboard_lock : Float3 = [0, 0, 0]
var atlas : Asset = null
var atlas_image_id : String = null
var material : Asset = null
var advanced : Advanced = Object
```

## Dissolve
```lx
import "luxe: system/sprite.modifier" for Dissolve
```
> no docs found

### Variables
```lx
var enabled : Bool = false
var image : Asset = null
var uv : Float4 = [0, 0, 1, 1]
var value : Num = 1
```

## HSV
```lx
import "luxe: system/sprite.modifier" for HSV
```
> no docs found

### Variables
```lx
var enabled : Bool = false
var hue_change : Num = 0
var saturation : Num = 1
var value : Num = 1
```

## Outline
```lx
import "luxe: system/sprite.modifier" for Outline
```
> no docs found

### Variables
```lx
var enabled : Bool = false
var color : Color = [1, 1, 1, 1]
var thickness : Num = 0
```

## Shadow
```lx
import "luxe: system/sprite.modifier" for Shadow
```
> no docs found

### Variables
```lx
var enabled : Bool = false
var offset : Float2 = [0, 0]
var color : Color = [0, 0, 0, 1]
var softness : Num = 0
```

## Shine
```lx
import "luxe: system/sprite.modifier" for Shine
```
> no docs found

### Variables
```lx
var enabled : Bool = false
var color : Color = [1, 0.92, 0.16, 1]
var direction : Float2 = [0, 0]
var width : Num = 0
var speed : Num = 0
var spacing : Num = 0
```

## Sprite
```lx
import "luxe: system/sprite.modifier" for Sprite
```
> A sprite is an image attached to an entity.   
> The `Sprite` modifier provides flipping, sizing, sub images and more.
> To attach a sprite to an entity, call `Sprite.create`:
> 
>   ```js
>   var entity = Entity.create(world)
>   var material = Assets.material("luxe: material/logo")
>   Sprite.create(entity, material, 128, 128)
>   ```

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create(entity : Entity, image : Image, width : Num, height : Num)"></endpoint>
### Sprite.create(....)
```lx
Sprite.create(entity : Entity, image : Image, width : Num, height : Num) : None
```
> Attach a `Sprite` modifier to `entity`, drawn using `image`,
> with a given size of `width`x`height`.
> 
>   ```js
>   var entity = Entity.create(world)
>   var image = Assets.image("luxe: image/logo")
>   Sprite.create(entity, material, 128, 128)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create(entity : Entity, image : Image)"></endpoint>
### Sprite.create(..)
```lx
Sprite.create(entity : Entity, image : Image) : None
```
> Attach a `Sprite` modifier to `entity`, drawn using `image`.
> The size of the sprite will be determined by the size of the image.
> 
>   ```js
>   var entity = Entity.create(world)
>   var image = Assets.image("luxe: image/logo")
>   Sprite.create(entity, image)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create(entity : Entity)"></endpoint>
### Sprite.create(.)
```lx
Sprite.create(entity : Entity) : None
```
> Attach a `Sprite` modifier to `entity`, drawn using a default `image`.
> Use `Sprite.set_image` or `Sprite.set_material` to change it later.
> 
>   ```js
>   var entity = Entity.create(world)
>   Sprite.create(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create_with(entity : Entity, material : Material, width : Num, height : Num)"></endpoint>
### Sprite.create_with(....)
```lx
Sprite.create_with(entity : Entity, material : Material, width : Num, height : Num) : None
```
> Attach a `Sprite` modifier to `entity`, drawn using `material`,
> with a size of `width`x`height`.
> 
>   ```js
>   var entity = Entity.create(world)
>   var material = Assets.material("luxe: material/logo")
>   Sprite.create_with(entity, material, 128, 128)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create_with(entity : Entity, material : Material)"></endpoint>
### Sprite.create_with(..)
```lx
Sprite.create_with(entity : Entity, material : Material) : None
```
> Attach a `Sprite` modifier to `entity`, drawn using `material`.
> The size of the sprite will be determined by the `sprite.image` slot in the material.
> 
>   ```js
>   var entity = Entity.create(world)
>   var material = Assets.material("luxe: material/logo")
>   Sprite.create(entity, material)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create(entity : Entity, atlas : Atlas, atlas_image : String)"></endpoint>
### Sprite.create(...)
```lx
Sprite.create(entity : Entity, atlas : Atlas, atlas_image : String) : None
```
> Attach a `Sprite` modifier to `entity`, drawn using the `atlas`, 
> using the image name in the atlas as `atlas_image`,
> with a size defined by the image in the atlas.
> 
>   ```js
>   var entity = Entity.create(world)
>   var atlas = Assets.atlas("atlas/example")
>   var image_name = "images/atlas/example/tree"
>   Sprite.create(entity, atlas, image_name)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="destroy(entity : Entity)"></endpoint>
### Sprite.destroy(.)
```lx
Sprite.destroy(entity : Entity) : None
```
> Detach and destroy the `Sprite` attached to `entity`
> 
>   ```js
>   Sprite.destroy(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="has(entity : Entity)"></endpoint>
### Sprite.has(.)
```lx
Sprite.has(entity : Entity) : Bool
```
> Returns true if `entity` has a `Sprite` modifier attached.
> 
>   ```js
>   if(Sprite.has(entity)) {
>     Log.print("found sprite")
>   }
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="contains(entity : Entity, x : Num, y : Num)"></endpoint>
### Sprite.contains(...)
```lx
Sprite.contains(entity : Entity, x : Num, y : Num) : Bool
```
> Returns true if the `Sprite` attached to `entity` contains the point at `x`,`y` (in world units).
> Note that the function is based on the sprite `width` and `height`, it is not pixel perfect.
> 
>   ```js
>   //Convert mouse coords to world units
>   var pos = Camera.screen_point_to_world(
>       app.camera,
>       Input.mouse_x(),
>       Input.mouse_y())
>   //Check if point is inside the sprite
>   if(Sprite.contains(entity, pos.x, pos.y)) {
>     Log.print("mouse inside sprite!")
>   }
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_material(entity : Entity, material : Material)"></endpoint>
### Sprite.set_material(..)
```lx
Sprite.set_material(entity : Entity, material : Material) : None
```
> Change the material that the `Sprite` attached to `entity` is drawn with, so it will draw with `material` instead.
> 
>   ```js
>   var material = Assets.material("luxe: material/logo.sprite")
>   Sprite.set_material(entity, material)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_material(entity : Entity)"></endpoint>
### Sprite.get_material(.)
```lx
Sprite.get_material(entity : Entity) : Material
```
> Returns the current material that the `Sprite` attached to `entity` is drawn with.
> 
>   ```js
>   var material = Sprite.get_material(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_image(entity : Entity, image : Image)"></endpoint>
### Sprite.set_image(..)
```lx
Sprite.set_image(entity : Entity, image : Image) : None
```
> Change the image that the `Sprite` attached to `entity` is drawn with.
> 
>   ```js
>   var image = Assets.image("luxe: image/logo.sprite")
>   Sprite.set_image(entity, image)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_image(entity : Entity)"></endpoint>
### Sprite.get_image(.)
```lx
Sprite.get_image(entity : Entity) : Image
```
> Returns the current image that the `Sprite` attached to `entity` is drawn with.
> 
>   ```js
>   var image = Sprite.get_image(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_origin(entity : Entity, x : Num, y : Num)"></endpoint>
### Sprite.set_origin(...)
```lx
Sprite.set_origin(entity : Entity, x : Num, y : Num) : None
```
> Sets the origin of the sprite in relation to the `Transform` on `entity`. The `x` and `y` values are `0...1` range, where `0, 0` is bottom left, and `1, 1` is top right. A centered sprite is `0.5, 0.5`. To set the origin to the center, bottom you'd use `0.5, 0`.
> 
>   ```js
>   //centered
>   Sprite.set_origin(entity, 0.5, 0.5)
>   //bottom left
>   Sprite.set_origin(entity, 0, 0)
>   //bottom center
>   Sprite.set_origin(entity, 0.5, 0)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_origin(entity : Entity)"></endpoint>
### Sprite.get_origin(.)
```lx
Sprite.get_origin(entity : Entity) : Float2
```
> Returns the current origin for the Sprite attached to `entity`.
>         
>   ```js
>   var origin = Sprite.get_origin(entity)
>   Log.print(origin) //[0.5, 0.5]
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_flip_h(entity : Entity, flipped : Bool)"></endpoint>
### Sprite.set_flip_h(..)
```lx
Sprite.set_flip_h(entity : Entity, flipped : Bool) : None
```
> Set whether the `Sprite` attached to `entity` is `flipped` horizontally.
> 
>   ```js
>   Sprite.set_flip_h(entity, true)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_flip_h(entity : Entity)"></endpoint>
### Sprite.get_flip_h(.)
```lx
Sprite.get_flip_h(entity : Entity) : Bool
```
> Returns true if the `Sprite` attached to `entity` is flipped horizontally.
> 
>   ```js
>   var flipped = Sprite.get_flip_h(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_flip_v(entity : Entity, flipped : Bool)"></endpoint>
### Sprite.set_flip_v(..)
```lx
Sprite.set_flip_v(entity : Entity, flipped : Bool) : None
```
> Set whether the `Sprite` attached to `entity` is `flipped` vertically.
> 
>   ```js
>   Sprite.set_flip_v(entity, true)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_flip_v(entity : Entity)"></endpoint>
### Sprite.get_flip_v(.)
```lx
Sprite.get_flip_v(entity : Entity) : Bool
```
> Returns true if the `Sprite` attached to `entity` is flipped vertically.
> 
>   ```js
>   var flipped = Sprite.get_flip_v(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_billboard(entity : Entity, kind : SpriteBillboard, lock : Float3)"></endpoint>
### Sprite.set_billboard(...)
```lx
Sprite.set_billboard(entity : Entity, kind : SpriteBillboard, lock : Float3) : None
```
> Set how the `Sprite` attached to `entity` behaves as a `billboard` sprite.
> The lock field is 0 for unlocked rotation, 1 for locked rotation on that axis.
> 
>   ```js
>   Sprite.set_billboard(entity, SpriteBillboard.fixed_scale, [0,1,0])
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_billboard(entity : Entity)"></endpoint>
### Sprite.get_billboard(.)
```lx
Sprite.get_billboard(entity : Entity) : SpriteBillboard
```
> Get how the `Sprite` attached to `entity` behaves as a `billboard` sprite.
> 
>   ```js
>   var kind = Sprite.get_billboard(entity)
>   if(kind == SpriteBillboard.fixed_scale) { ... }
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_size(entity : Entity, width : Num, height : Num)"></endpoint>
### Sprite.set_size(...)
```lx
Sprite.set_size(entity : Entity, width : Num, height : Num) : None
```
> Resize the `Sprite` attached to `entity` to be `width`x`height`.
> 
>   ```js
>   Sprite.set_size(entity, 256, 256)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_width(entity : Entity, width : Num)"></endpoint>
### Sprite.set_width(..)
```lx
Sprite.set_width(entity : Entity, width : Num) : None
```
> Resize the `Sprite` attached to `entity` to have a new `width`.
> 
>   ```js
>   Sprite.set_width(entity, 64)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_width(entity : Entity)"></endpoint>
### Sprite.get_width(.)
```lx
Sprite.get_width(entity : Entity) : Num
```
> Returns the width of the `Sprite` attached to `entity`.
> 
>   ```js
>   var width = Sprite.get_width(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_height(entity : Entity, height : Num)"></endpoint>
### Sprite.set_height(..)
```lx
Sprite.set_height(entity : Entity, height : Num) : None
```
> Resize the `Sprite` attached to `entity` to have a new `height`.
> 
>   ```js
>   Sprite.set_height(entity, 64)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_height(entity : Entity)"></endpoint>
### Sprite.get_height(.)
```lx
Sprite.get_height(entity : Entity) : Num
```
> Returns the height of the `Sprite` attached to `entity`.
> 
>   ```js
>   var height = Sprite.get_height(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_alpha(entity : Entity, alpha : Num)"></endpoint>
### Sprite.set_alpha(..)
```lx
Sprite.set_alpha(entity : Entity, alpha : Num) : None
```
> Change the alpha (transparency) of the `Sprite` attached to `entity` to be `alpha`. Modifies the color.
> 
>   ```js
>   Sprite.set_alpha(entity, 0.5)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_alpha(entity : Entity)"></endpoint>
### Sprite.get_alpha(.)
```lx
Sprite.get_alpha(entity : Entity) : Num
```
> Returns the current alpha of the `Sprite` attached to `entity`.
> 
>   ```js
>   var a = Sprite.get_alpha(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_color(entity : Entity, color : Color)"></endpoint>
### Sprite.set_color(..)
```lx
Sprite.set_color(entity : Entity, color : Color) : None
```
> Set the color of the `Sprite` attached to `entity` to be a color. 
> The default color is white, `[1, 1, 1, 1]`, so to undo a color change, set it to that.
> 
>   ```js
>   var color = Color.hex(0xf6007c)
>   Sprite.set_color(entity, color)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_color(entity : Entity, r : Num, g : Num, b : Num, a : Num)"></endpoint>
### Sprite.set_color(.....)
```lx
Sprite.set_color(entity : Entity, r : Num, g : Num, b : Num, a : Num) : None
```
> Set the color of the `Sprite` attached to `entity` to be a color of `r`,`g`,`b`,`a`. 
> The default color is white, `[1, 1, 1, 1]`, so to undo a color change, set it to that.
> 
>   ```js
>   Sprite.set_color(entity, r, g, b, a)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_color(entity : Entity)"></endpoint>
### Sprite.get_color(.)
```lx
Sprite.get_color(entity : Entity) : Color
```
> Returns the current color of the `Sprite` attached to `entity`.
> 
>   ```js
>   var color = Sprite.get_color(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_uv(entity : Entity, x0 : Num, y0 : Num, x1 : Num, y1 : Num)"></endpoint>
### Sprite.set_uv(.....)
```lx
Sprite.set_uv(entity : Entity, x0 : Num, y0 : Num, x1 : Num, y1 : Num) : None
```
> Set the UV coordinates for the `Sprite` attached to `entity` with top left at `x0`,`y0` and bottom right `x1`,`y1`. The default is `0, 0, 1, 1`, a full rectangle in UV coordinate space. If you want to tile the image on a sprite, set it to values > 1.
> 
>   ```js
>   //tile 4 times on both x and y
>   Sprite.set_uv(entity, 0, 0, 4, 4)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_uv(entity : Entity)"></endpoint>
### Sprite.get_uv(.)
```lx
Sprite.get_uv(entity : Entity) : Float4
```
> Returns the current uv of the `Sprite` attached to `entity`.
> 
>   ```js
>   var uv = Sprite.get_uv(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_skew(entity : Entity, x : Num, y : Num)"></endpoint>
### Sprite.set_skew(...)
```lx
Sprite.set_skew(entity : Entity, x : Num, y : Num) : None
```
> Set the skew amounts for the `Sprite` attached to `entity`. The values of `x` and `y` are between `0 ... 1`, where 1 is the most skew and 0 is none.
> 
>   ```js
>   Sprite.set_skew(entity, 0, 0.25)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_skew(entity : Entity)"></endpoint>
### Sprite.get_skew(.)
```lx
Sprite.get_skew(entity : Entity) : Float2
```
> Return the skew for the `Sprite` attached to `entity`.
> 
>   ```js
>   var skew = Sprite.get_skew(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_geometry(entity : Entity)"></endpoint>
### Sprite.get_geometry(.)
```lx
Sprite.get_geometry(entity : Entity) : Geometry
```
> Returns the render [Geometry](#geometry) for the `Sprite` attached to `entity`. The geometry is owned by the sprite, so be aware when modifying it.
> 
>   ```js
>   var geometry = Sprite.get_geometry(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_geometry(entity : Entity, geo : Geometry)"></endpoint>
### Sprite.set_geometry(..)
```lx
Sprite.set_geometry(entity : Entity, geo : Geometry) : unknown
```
> Sets the render [Geometry](#geometry) for the `Sprite` attached to `entity`.
> 
>   ```js
>   Sprite.set_geometry(entity, geo)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_auto_size(entity : Entity)"></endpoint>
### Sprite.get_auto_size(.)
```lx
Sprite.get_auto_size(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_auto_size(entity : Entity, value : Bool)"></endpoint>
### Sprite.set_auto_size(..)
```lx
Sprite.set_auto_size(entity : Entity, value : Bool) : None
```
> When setting an image or material, resize the sprite to the image size   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_pixelated(entity : Entity)"></endpoint>
### Sprite.get_pixelated(.)
```lx
Sprite.get_pixelated(entity : Entity) : Bool
```
> Displaying as pixelated or not   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_pixelated(entity : Entity, value : Bool)"></endpoint>
### Sprite.set_pixelated(..)
```lx
Sprite.set_pixelated(entity : Entity, value : Bool) : None
```
> Display as pixelated or not   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_material_input(entity : Entity)"></endpoint>
### Sprite.get_material_input(.)
```lx
Sprite.get_material_input(entity : Entity) : Bool
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_material_input(entity : Entity, value : Bool)"></endpoint>
### Sprite.set_material_input(..)
```lx
Sprite.set_material_input(entity : Entity, value : Bool) : None
```
> For custom materials, the material input ID for the image.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_hsv_adjust(entity : Entity)"></endpoint>
### Sprite.get_hsv_adjust(.)
```lx
Sprite.get_hsv_adjust(entity : Entity) : HSV
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_hsv_adjust(entity : Entity, enabled : Bool, hue_change : Num, saturation : Num, value : Num)"></endpoint>
### Sprite.set_hsv_adjust(.....)
```lx
Sprite.set_hsv_adjust(entity : Entity, enabled : Bool, hue_change : Num, saturation : Num, value : Num) : None
```
> Set the values for the hsv adjustment effect.
> The effect applies several operations on the colors of the sprite in sRGB HSV space.
> Saturation and Value changes are applied with exponents as `value ^ adjustment`.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_HSV_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.set_effect_HSV_enabled(..)
```lx
Sprite.set_effect_HSV_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_HSV_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.get_effect_HSV_enabled(..)
```lx
Sprite.get_effect_HSV_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_HSV_hue_change(entity : Entity, hue_change : Num)"></endpoint>
### Sprite.set_effect_HSV_hue_change(..)
```lx
Sprite.set_effect_HSV_hue_change(entity : Entity, hue_change : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_HSV_hue_change(entity : Entity, hue_change : Num)"></endpoint>
### Sprite.get_effect_HSV_hue_change(..)
```lx
Sprite.get_effect_HSV_hue_change(entity : Entity, hue_change : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_HSV_saturation(entity : Entity, saturation : Num)"></endpoint>
### Sprite.set_effect_HSV_saturation(..)
```lx
Sprite.set_effect_HSV_saturation(entity : Entity, saturation : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_HSV_saturation(entity : Entity, saturation : Num)"></endpoint>
### Sprite.get_effect_HSV_saturation(..)
```lx
Sprite.get_effect_HSV_saturation(entity : Entity, saturation : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_HSV_value(entity : Entity, value : Num)"></endpoint>
### Sprite.set_effect_HSV_value(..)
```lx
Sprite.set_effect_HSV_value(entity : Entity, value : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_HSV_value(entity : Entity, value : Num)"></endpoint>
### Sprite.get_effect_HSV_value(..)
```lx
Sprite.get_effect_HSV_value(entity : Entity, value : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_outline(entity : Entity)"></endpoint>
### Sprite.get_outline(.)
```lx
Sprite.get_outline(entity : Entity) : Outline
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_outline(entity : Entity, enabled : Bool, color : Color, thickness : Num)"></endpoint>
### Sprite.set_outline(....)
```lx
Sprite.set_outline(entity : Entity, enabled : Bool, color : Color, thickness : Num) : None
```
> Set the values of the outline effect.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_outline_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.set_effect_outline_enabled(..)
```lx
Sprite.set_effect_outline_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_outline_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.get_effect_outline_enabled(..)
```lx
Sprite.get_effect_outline_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_outline_color(entity : Entity, color : Color)"></endpoint>
### Sprite.set_effect_outline_color(..)
```lx
Sprite.set_effect_outline_color(entity : Entity, color : Color) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_outline_color(entity : Entity, color : Color)"></endpoint>
### Sprite.get_effect_outline_color(..)
```lx
Sprite.get_effect_outline_color(entity : Entity, color : Color) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_outline_thickness(entity : Entity, thickness : Num)"></endpoint>
### Sprite.set_effect_outline_thickness(..)
```lx
Sprite.set_effect_outline_thickness(entity : Entity, thickness : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_outline_thickness(entity : Entity, thickness : Num)"></endpoint>
### Sprite.get_effect_outline_thickness(..)
```lx
Sprite.get_effect_outline_thickness(entity : Entity, thickness : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_shadow(entity : Entity)"></endpoint>
### Sprite.get_shadow(.)
```lx
Sprite.get_shadow(entity : Entity) : Shadow
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_shadow(entity : Entity, enabled : Bool, offset : Num, color : Color, softness : Num)"></endpoint>
### Sprite.set_shadow(.....)
```lx
Sprite.set_shadow(entity : Entity, enabled : Bool, offset : Num, color : Color, softness : Num) : None
```
> Set the values for the shadow effect.
> Shadows are the same color as the base sprite image, but only have a single color.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shadow_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.set_effect_shadow_enabled(..)
```lx
Sprite.set_effect_shadow_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shadow_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.get_effect_shadow_enabled(..)
```lx
Sprite.get_effect_shadow_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shadow_offset(entity : Entity, offset : Vector2)"></endpoint>
### Sprite.set_effect_shadow_offset(..)
```lx
Sprite.set_effect_shadow_offset(entity : Entity, offset : Vector2) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shadow_offset(entity : Entity, offset : Vector2)"></endpoint>
### Sprite.get_effect_shadow_offset(..)
```lx
Sprite.get_effect_shadow_offset(entity : Entity, offset : Vector2) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shadow_color(entity : Entity, color : Color)"></endpoint>
### Sprite.set_effect_shadow_color(..)
```lx
Sprite.set_effect_shadow_color(entity : Entity, color : Color) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shadow_color(entity : Entity, color : Color)"></endpoint>
### Sprite.get_effect_shadow_color(..)
```lx
Sprite.get_effect_shadow_color(entity : Entity, color : Color) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_dissolve(entity : Entity)"></endpoint>
### Sprite.get_dissolve(.)
```lx
Sprite.get_dissolve(entity : Entity) : Dissolve
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_dissolve(entity : Entity, enabled : Bool, image : Image, uv : List, value : Num)"></endpoint>
### Sprite.set_dissolve(.....)
```lx
Sprite.set_dissolve(entity : Entity, enabled : Bool, image : Image, uv : List, value : Num) : None
```
> Set the values for the hsv adjustment effect.
> The effect applies several operations on the colors of the sprite in sRGB HSV space.
> Saturation and Value changes are applied with exponents as `value ^ adjustment`.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_dissolve_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.set_effect_dissolve_enabled(..)
```lx
Sprite.set_effect_dissolve_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_dissolve_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.get_effect_dissolve_enabled(..)
```lx
Sprite.get_effect_dissolve_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_dissolve_image(entity : Entity, image : Image)"></endpoint>
### Sprite.set_effect_dissolve_image(..)
```lx
Sprite.set_effect_dissolve_image(entity : Entity, image : Image) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_dissolve_image(entity : Entity, image : Image)"></endpoint>
### Sprite.get_effect_dissolve_image(..)
```lx
Sprite.get_effect_dissolve_image(entity : Entity, image : Image) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_dissolve_uv(entity : Entity, uv : Vector4)"></endpoint>
### Sprite.set_effect_dissolve_uv(..)
```lx
Sprite.set_effect_dissolve_uv(entity : Entity, uv : Vector4) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_dissolve_uv(entity : Entity, uv : Vector4)"></endpoint>
### Sprite.get_effect_dissolve_uv(..)
```lx
Sprite.get_effect_dissolve_uv(entity : Entity, uv : Vector4) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_dissolve_value(entity : Entity, value : Num)"></endpoint>
### Sprite.set_effect_dissolve_value(..)
```lx
Sprite.set_effect_dissolve_value(entity : Entity, value : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_dissolve_value(entity : Entity, value : Num)"></endpoint>
### Sprite.get_effect_dissolve_value(..)
```lx
Sprite.get_effect_dissolve_value(entity : Entity, value : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_shine(entity : Entity)"></endpoint>
### Sprite.get_shine(.)
```lx
Sprite.get_shine(entity : Entity) : Shine
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_shine(entity : Entity, enabled : Bool, color : Num, direction : Vector2, width : Num, speed : Num, spacing : Num)"></endpoint>
### Sprite.set_shine(.......)
```lx
Sprite.set_shine(entity : Entity, enabled : Bool, color : Num, direction : Vector2, width : Num, speed : Num, spacing : Num) : None
```
> Set the values for the hsv adjustment effect.
> The effect applies several operations on the colors of the sprite in sRGB HSV space.
> Saturation and Value changes are applied with exponents as `value ^ adjustment`.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.set_effect_shine_enabled(..)
```lx
Sprite.set_effect_shine_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_enabled(entity : Entity, enabled : Bool)"></endpoint>
### Sprite.get_effect_shine_enabled(..)
```lx
Sprite.get_effect_shine_enabled(entity : Entity, enabled : Bool) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_color(entity : Entity, color : Color)"></endpoint>
### Sprite.set_effect_shine_color(..)
```lx
Sprite.set_effect_shine_color(entity : Entity, color : Color) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_color(entity : Entity, color : Color)"></endpoint>
### Sprite.get_effect_shine_color(..)
```lx
Sprite.get_effect_shine_color(entity : Entity, color : Color) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_direction(entity : Entity, direction : Vector2)"></endpoint>
### Sprite.set_effect_shine_direction(..)
```lx
Sprite.set_effect_shine_direction(entity : Entity, direction : Vector2) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_direction(entity : Entity, direction : Vector2)"></endpoint>
### Sprite.get_effect_shine_direction(..)
```lx
Sprite.get_effect_shine_direction(entity : Entity, direction : Vector2) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_width(entity : Entity, width : Num)"></endpoint>
### Sprite.set_effect_shine_width(..)
```lx
Sprite.set_effect_shine_width(entity : Entity, width : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_width(entity : Entity, width : Num)"></endpoint>
### Sprite.get_effect_shine_width(..)
```lx
Sprite.get_effect_shine_width(entity : Entity, width : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_speed(entity : Entity, speed : Num)"></endpoint>
### Sprite.set_effect_shine_speed(..)
```lx
Sprite.set_effect_shine_speed(entity : Entity, speed : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_speed(entity : Entity, speed : Num)"></endpoint>
### Sprite.get_effect_shine_speed(..)
```lx
Sprite.get_effect_shine_speed(entity : Entity, speed : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_spacing(entity : Entity, spacing : Num)"></endpoint>
### Sprite.set_effect_shine_spacing(..)
```lx
Sprite.set_effect_shine_spacing(entity : Entity, spacing : Num) : None
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_spacing(entity : Entity, spacing : Num)"></endpoint>
### Sprite.get_effect_shine_spacing(..)
```lx
Sprite.get_effect_shine_spacing(entity : Entity, spacing : Num) : None
```
> no docs found   


## SpriteBillboard
```lx
import "luxe: system/sprite.modifier" for SpriteBillboard
```
> no docs found

<endpoint module="luxe: system/sprite.modifier" class="SpriteBillboard" signature="none"></endpoint>
### SpriteBillboard.none
```lx
SpriteBillboard.none : unknown
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="SpriteBillboard" signature="billboard"></endpoint>
### SpriteBillboard.billboard
```lx
SpriteBillboard.billboard : unknown
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="SpriteBillboard" signature="fixed_scale"></endpoint>
### SpriteBillboard.fixed_scale
```lx
SpriteBillboard.fixed_scale : unknown
```
> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="SpriteBillboard" signature="fixed_screen_scale"></endpoint>
### SpriteBillboard.fixed_screen_scale
```lx
SpriteBillboard.fixed_screen_scale : unknown
```
> no docs found   


## System
```lx
import "luxe: system/sprite.modifier" for System
```
> no docs found

<endpoint module="luxe: system/sprite.modifier" class="System" signature="new(world : World)"></endpoint>
### System.new(.)
```lx
System.new(world : World) : System
```
> no docs found   

