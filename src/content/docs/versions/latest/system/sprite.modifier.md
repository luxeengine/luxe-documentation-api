---
title: "luxe: system/sprite.modifier"
description: API version 2025.11.1
---
## `luxe: system/sprite.modifier{:lx}` module

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


### Advanced
`import "luxe: system/sprite.modifier" for Advanced{:lx}`
> no docs found

- `var auto_size : Bool = true{:lx}`
- `var material_input : String = "sprite.image"{:lx}`
- `var HSV : HSV = Object{:lx}`
- `var outline : Outline = Object{:lx}`
- `var shadow : Shadow = Object{:lx}`
- `var dissolve : Dissolve = Object{:lx}`
- `var shine : Shine = Object{:lx}`


---


### Data
`import "luxe: system/sprite.modifier" for Data{:lx}`
> no docs found

- `var image : Asset = "luxe: image/logo"{:lx}`
- `var size : Float2 = [64, 64]{:lx}`
- `var origin : Float2 = [0.5, 0.5]{:lx}`
- `var skew : Float2 = [0, 0]{:lx}`
- `var color : Color = [1, 1, 1, 1]{:lx}`
- `var uv : Float4 = [0, 0, 1, 1]{:lx}`
- `var flip_x : Bool = false{:lx}`
- `var flip_y : Bool = false{:lx}`
- `var pixelated : Bool = false{:lx}`
- `var billboard : SpriteBillboard = SpriteBillboard.none{:lx}`
- `var billboard_lock : Float3 = [0, 0, 0]{:lx}`
- `var atlas : Asset = null{:lx}`
- `var atlas_image_id : String = null{:lx}`
- `var material : Asset = null{:lx}`
- `var advanced : Advanced = Object{:lx}`


---


### Dissolve
`import "luxe: system/sprite.modifier" for Dissolve{:lx}`
> no docs found

- `var enabled : Bool = false{:lx}`
- `var image : Asset = null{:lx}`
- `var uv : Float4 = [0, 0, 1, 1]{:lx}`
- `var value : Num = 1{:lx}`


---


### HSV
`import "luxe: system/sprite.modifier" for HSV{:lx}`
> no docs found

- `var enabled : Bool = false{:lx}`
- `var hue_change : Num = 0{:lx}`
- `var saturation : Num = 1{:lx}`
- `var value : Num = 1{:lx}`


---


### Outline
`import "luxe: system/sprite.modifier" for Outline{:lx}`
> no docs found

- `var enabled : Bool = false{:lx}`
- `var color : Color = [1, 1, 1, 1]{:lx}`
- `var thickness : Num = 0{:lx}`


---


### Shadow
`import "luxe: system/sprite.modifier" for Shadow{:lx}`
> no docs found

- `var enabled : Bool = false{:lx}`
- `var offset : Float2 = [0, 0]{:lx}`
- `var color : Color = [0, 0, 0, 1]{:lx}`
- `var softness : Num = 0{:lx}`


---


### Shine
`import "luxe: system/sprite.modifier" for Shine{:lx}`
> no docs found

- `var enabled : Bool = false{:lx}`
- `var color : Color = [1, 0.92, 0.16, 1]{:lx}`
- `var direction : Float2 = [0, 0]{:lx}`
- `var width : Num = 0{:lx}`
- `var speed : Num = 0{:lx}`
- `var spacing : Num = 0{:lx}`


---


### Sprite
`import "luxe: system/sprite.modifier" for Sprite{:lx}`
> A sprite is an image attached to an entity.   
> The `Sprite` modifier provides flipping, sizing, sub images and more.
> To attach a sprite to an entity, call `Sprite.create`:
> 
>   ```js
>   var entity = Entity.create(world)
>   var material = Assets.material("luxe: material/logo")
>   Sprite.create(entity, material, 128, 128)
>   ```

- [create](#Sprite.create+4)(**entity**: `Entity{:lx}`, **image**: `Image{:lx}`, **width**: `Num{:lx}`, **height**: `Num{:lx}`)
- [create](#Sprite.create+2)(**entity**: `Entity{:lx}`, **image**: `Image{:lx}`)
- [create](#Sprite.create)(**entity**: `Entity{:lx}`)
- [create_with](#Sprite.create_with+4)(**entity**: `Entity{:lx}`, **material**: `Material{:lx}`, **width**: `Num{:lx}`, **height**: `Num{:lx}`)
- [create_with](#Sprite.create_with+2)(**entity**: `Entity{:lx}`, **material**: `Material{:lx}`)
- [create](#Sprite.create+3)(**entity**: `Entity{:lx}`, **atlas**: `Atlas{:lx}`, **atlas_image**: `String{:lx}`)
- [destroy](#Sprite.destroy)(**entity**: `Entity{:lx}`)
- [has](#Sprite.has)(**entity**: `Entity{:lx}`)
- [contains](#Sprite.contains+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [set_material](#Sprite.set_material+2)(**entity**: `Entity{:lx}`, **material**: `Material{:lx}`)
- [get_material](#Sprite.get_material)(**entity**: `Entity{:lx}`)
- [set_image](#Sprite.set_image+2)(**entity**: `Entity{:lx}`, **image**: `Image{:lx}`)
- [get_image](#Sprite.get_image)(**entity**: `Entity{:lx}`)
- [set_origin](#Sprite.set_origin+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [get_origin](#Sprite.get_origin)(**entity**: `Entity{:lx}`)
- [set_flip_h](#Sprite.set_flip_h+2)(**entity**: `Entity{:lx}`, **flipped**: `Bool{:lx}`)
- [get_flip_h](#Sprite.get_flip_h)(**entity**: `Entity{:lx}`)
- [set_flip_v](#Sprite.set_flip_v+2)(**entity**: `Entity{:lx}`, **flipped**: `Bool{:lx}`)
- [get_flip_v](#Sprite.get_flip_v)(**entity**: `Entity{:lx}`)
- [set_billboard](#Sprite.set_billboard+3)(**entity**: `Entity{:lx}`, **kind**: `SpriteBillboard{:lx}`, **lock**: `Float3{:lx}`)
- [get_billboard](#Sprite.get_billboard)(**entity**: `Entity{:lx}`)
- [set_size](#Sprite.set_size+3)(**entity**: `Entity{:lx}`, **width**: `Num{:lx}`, **height**: `Num{:lx}`)
- [set_width](#Sprite.set_width+2)(**entity**: `Entity{:lx}`, **width**: `Num{:lx}`)
- [get_width](#Sprite.get_width)(**entity**: `Entity{:lx}`)
- [set_height](#Sprite.set_height+2)(**entity**: `Entity{:lx}`, **height**: `Num{:lx}`)
- [get_height](#Sprite.get_height)(**entity**: `Entity{:lx}`)
- [set_alpha](#Sprite.set_alpha+2)(**entity**: `Entity{:lx}`, **alpha**: `Num{:lx}`)
- [get_alpha](#Sprite.get_alpha)(**entity**: `Entity{:lx}`)
- [set_color](#Sprite.set_color+2)(**entity**: `Entity{:lx}`, **color**: `Color{:lx}`)
- [set_color](#Sprite.set_color+5)(**entity**: `Entity{:lx}`, **r**: `Num{:lx}`, **g**: `Num{:lx}`, **b**: `Num{:lx}`, **a**: `Num{:lx}`)
- [get_color](#Sprite.get_color)(**entity**: `Entity{:lx}`)
- [set_uv](#Sprite.set_uv+5)(**entity**: `Entity{:lx}`, **x0**: `Num{:lx}`, **y0**: `Num{:lx}`, **x1**: `Num{:lx}`, **y1**: `Num{:lx}`)
- [get_uv](#Sprite.get_uv)(**entity**: `Entity{:lx}`)
- [set_skew](#Sprite.set_skew+3)(**entity**: `Entity{:lx}`, **x**: `Num{:lx}`, **y**: `Num{:lx}`)
- [get_skew](#Sprite.get_skew)(**entity**: `Entity{:lx}`)
- [get_geometry](#Sprite.get_geometry)(**entity**: `Entity{:lx}`)
- [set_geometry](#Sprite.set_geometry+2)(**entity**: `Entity{:lx}`, **geo**: `Geometry{:lx}`)
- [get_auto_size](#Sprite.get_auto_size)(**entity**: `Entity{:lx}`)
- [set_auto_size](#Sprite.set_auto_size+2)(**entity**: `Entity{:lx}`, **value**: `Bool{:lx}`)
- [get_pixelated](#Sprite.get_pixelated)(**entity**: `Entity{:lx}`)
- [set_pixelated](#Sprite.set_pixelated+2)(**entity**: `Entity{:lx}`, **value**: `Bool{:lx}`)
- [get_material_input](#Sprite.get_material_input)(**entity**: `Entity{:lx}`)
- [set_material_input](#Sprite.set_material_input+2)(**entity**: `Entity{:lx}`, **value**: `Bool{:lx}`)
- [get_hsv_adjust](#Sprite.get_hsv_adjust)(**entity**: `Entity{:lx}`)
- [set_hsv_adjust](#Sprite.set_hsv_adjust+5)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`, **hue_change**: `Num{:lx}`, **saturation**: `Num{:lx}`, **value**: `Num{:lx}`)
- [set_effect_HSV_enabled](#Sprite.set_effect_HSV_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [get_effect_HSV_enabled](#Sprite.get_effect_HSV_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [set_effect_HSV_hue_change](#Sprite.set_effect_HSV_hue_change+2)(**entity**: `Entity{:lx}`, **hue_change**: `Num{:lx}`)
- [get_effect_HSV_hue_change](#Sprite.get_effect_HSV_hue_change+2)(**entity**: `Entity{:lx}`, **hue_change**: `Num{:lx}`)
- [set_effect_HSV_saturation](#Sprite.set_effect_HSV_saturation+2)(**entity**: `Entity{:lx}`, **saturation**: `Num{:lx}`)
- [get_effect_HSV_saturation](#Sprite.get_effect_HSV_saturation+2)(**entity**: `Entity{:lx}`, **saturation**: `Num{:lx}`)
- [set_effect_HSV_value](#Sprite.set_effect_HSV_value+2)(**entity**: `Entity{:lx}`, **value**: `Num{:lx}`)
- [get_effect_HSV_value](#Sprite.get_effect_HSV_value+2)(**entity**: `Entity{:lx}`, **value**: `Num{:lx}`)
- [get_outline](#Sprite.get_outline)(**entity**: `Entity{:lx}`)
- [set_outline](#Sprite.set_outline+4)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`, **color**: `Color{:lx}`, **thickness**: `Num{:lx}`)
- [set_effect_outline_enabled](#Sprite.set_effect_outline_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [get_effect_outline_enabled](#Sprite.get_effect_outline_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [set_effect_outline_color](#Sprite.set_effect_outline_color+2)(**entity**: `Entity{:lx}`, **color**: `Color{:lx}`)
- [get_effect_outline_color](#Sprite.get_effect_outline_color+2)(**entity**: `Entity{:lx}`, **color**: `Color{:lx}`)
- [set_effect_outline_thickness](#Sprite.set_effect_outline_thickness+2)(**entity**: `Entity{:lx}`, **thickness**: `Num{:lx}`)
- [get_effect_outline_thickness](#Sprite.get_effect_outline_thickness+2)(**entity**: `Entity{:lx}`, **thickness**: `Num{:lx}`)
- [get_shadow](#Sprite.get_shadow)(**entity**: `Entity{:lx}`)
- [set_shadow](#Sprite.set_shadow+5)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`, **offset**: `Num{:lx}`, **color**: `Color{:lx}`, **softness**: `Num{:lx}`)
- [set_effect_shadow_enabled](#Sprite.set_effect_shadow_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [get_effect_shadow_enabled](#Sprite.get_effect_shadow_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [set_effect_shadow_offset](#Sprite.set_effect_shadow_offset+2)(**entity**: `Entity{:lx}`, **offset**: `Vector2{:lx}`)
- [get_effect_shadow_offset](#Sprite.get_effect_shadow_offset+2)(**entity**: `Entity{:lx}`, **offset**: `Vector2{:lx}`)
- [set_effect_shadow_color](#Sprite.set_effect_shadow_color+2)(**entity**: `Entity{:lx}`, **color**: `Color{:lx}`)
- [get_effect_shadow_color](#Sprite.get_effect_shadow_color+2)(**entity**: `Entity{:lx}`, **color**: `Color{:lx}`)
- [get_dissolve](#Sprite.get_dissolve)(**entity**: `Entity{:lx}`)
- [set_dissolve](#Sprite.set_dissolve+5)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`, **image**: `Image{:lx}`, **uv**: `List{:lx}`, **value**: `Num{:lx}`)
- [set_effect_dissolve_enabled](#Sprite.set_effect_dissolve_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [get_effect_dissolve_enabled](#Sprite.get_effect_dissolve_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [set_effect_dissolve_image](#Sprite.set_effect_dissolve_image+2)(**entity**: `Entity{:lx}`, **image**: `Image{:lx}`)
- [get_effect_dissolve_image](#Sprite.get_effect_dissolve_image+2)(**entity**: `Entity{:lx}`, **image**: `Image{:lx}`)
- [set_effect_dissolve_uv](#Sprite.set_effect_dissolve_uv+2)(**entity**: `Entity{:lx}`, **uv**: `Vector4{:lx}`)
- [get_effect_dissolve_uv](#Sprite.get_effect_dissolve_uv+2)(**entity**: `Entity{:lx}`, **uv**: `Vector4{:lx}`)
- [set_effect_dissolve_value](#Sprite.set_effect_dissolve_value+2)(**entity**: `Entity{:lx}`, **value**: `Num{:lx}`)
- [get_effect_dissolve_value](#Sprite.get_effect_dissolve_value+2)(**entity**: `Entity{:lx}`, **value**: `Num{:lx}`)
- [get_shine](#Sprite.get_shine)(**entity**: `Entity{:lx}`)
- [set_shine](#Sprite.set_shine+7)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`, **color**: `Num{:lx}`, **direction**: `Vector2{:lx}`, **width**: `Num{:lx}`, **speed**: `Num{:lx}`, **spacing**: `Num{:lx}`)
- [set_effect_shine_enabled](#Sprite.set_effect_shine_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [get_effect_shine_enabled](#Sprite.get_effect_shine_enabled+2)(**entity**: `Entity{:lx}`, **enabled**: `Bool{:lx}`)
- [set_effect_shine_color](#Sprite.set_effect_shine_color+2)(**entity**: `Entity{:lx}`, **color**: `Color{:lx}`)
- [get_effect_shine_color](#Sprite.get_effect_shine_color+2)(**entity**: `Entity{:lx}`, **color**: `Color{:lx}`)
- [set_effect_shine_direction](#Sprite.set_effect_shine_direction+2)(**entity**: `Entity{:lx}`, **direction**: `Vector2{:lx}`)
- [get_effect_shine_direction](#Sprite.get_effect_shine_direction+2)(**entity**: `Entity{:lx}`, **direction**: `Vector2{:lx}`)
- [set_effect_shine_width](#Sprite.set_effect_shine_width+2)(**entity**: `Entity{:lx}`, **width**: `Num{:lx}`)
- [get_effect_shine_width](#Sprite.get_effect_shine_width+2)(**entity**: `Entity{:lx}`, **width**: `Num{:lx}`)
- [set_effect_shine_speed](#Sprite.set_effect_shine_speed+2)(**entity**: `Entity{:lx}`, **speed**: `Num{:lx}`)
- [get_effect_shine_speed](#Sprite.get_effect_shine_speed+2)(**entity**: `Entity{:lx}`, **speed**: `Num{:lx}`)
- [set_effect_shine_spacing](#Sprite.set_effect_shine_spacing+2)(**entity**: `Entity{:lx}`, **spacing**: `Num{:lx}`)
- [get_effect_shine_spacing](#Sprite.get_effect_shine_spacing+2)(**entity**: `Entity{:lx}`, **spacing**: `Num{:lx}`)


---

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create(entity : Entity, image : Image, width : Num, height : Num)"></endpoint>
<h4 class="signature_head">Sprite.create</h4><a class="signature-arity" href="#Sprite.create+4" title="Permanent link">4</a><signature id="Sprite.create+4">

```lx
Sprite.create(entity : Entity, image : Image, width : Num, height : Num) : None
```
</signature>

> Attach a `Sprite` modifier to `entity`, drawn using `image`,
> with a given size of `width`x`height`.
> 
>   ```js
>   var entity = Entity.create(world)
>   var image = Assets.image("luxe: image/logo")
>   Sprite.create(entity, material, 128, 128)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create(entity : Entity, image : Image)"></endpoint>
<h4 class="signature_head">Sprite.create</h4><a class="signature-arity" href="#Sprite.create+2" title="Permanent link">2</a><signature id="Sprite.create+2">

```lx
Sprite.create(entity : Entity, image : Image) : None
```
</signature>

> Attach a `Sprite` modifier to `entity`, drawn using `image`.
> The size of the sprite will be determined by the size of the image.
> 
>   ```js
>   var entity = Entity.create(world)
>   var image = Assets.image("luxe: image/logo")
>   Sprite.create(entity, image)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.create</h4><a class="signature-arity" href="#Sprite.create" title="Permanent link">1</a><signature id="Sprite.create">

```lx
Sprite.create(entity : Entity) : None
```
</signature>

> Attach a `Sprite` modifier to `entity`, drawn using a default `image`.
> Use `Sprite.set_image` or `Sprite.set_material` to change it later.
> 
>   ```js
>   var entity = Entity.create(world)
>   Sprite.create(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create_with(entity : Entity, material : Material, width : Num, height : Num)"></endpoint>
<h4 class="signature_head">Sprite.create_with</h4><a class="signature-arity" href="#Sprite.create_with+4" title="Permanent link">4</a><signature id="Sprite.create_with+4">

```lx
Sprite.create_with(entity : Entity, material : Material, width : Num, height : Num) : None
```
</signature>

> Attach a `Sprite` modifier to `entity`, drawn using `material`,
> with a size of `width`x`height`.
> 
>   ```js
>   var entity = Entity.create(world)
>   var material = Assets.material("luxe: material/logo")
>   Sprite.create_with(entity, material, 128, 128)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create_with(entity : Entity, material : Material)"></endpoint>
<h4 class="signature_head">Sprite.create_with</h4><a class="signature-arity" href="#Sprite.create_with+2" title="Permanent link">2</a><signature id="Sprite.create_with+2">

```lx
Sprite.create_with(entity : Entity, material : Material) : None
```
</signature>

> Attach a `Sprite` modifier to `entity`, drawn using `material`.
> The size of the sprite will be determined by the `sprite.image` slot in the material.
> 
>   ```js
>   var entity = Entity.create(world)
>   var material = Assets.material("luxe: material/logo")
>   Sprite.create(entity, material)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="create(entity : Entity, atlas : Atlas, atlas_image : String)"></endpoint>
<h4 class="signature_head">Sprite.create</h4><a class="signature-arity" href="#Sprite.create+3" title="Permanent link">3</a><signature id="Sprite.create+3">

```lx
Sprite.create(entity : Entity, atlas : Atlas, atlas_image : String) : None
```
</signature>

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
<h4 class="signature_head">Sprite.destroy</h4><a class="signature-arity" href="#Sprite.destroy" title="Permanent link">1</a><signature id="Sprite.destroy">

```lx
Sprite.destroy(entity : Entity) : None
```
</signature>

> Detach and destroy the `Sprite` attached to `entity`
> 
>   ```js
>   Sprite.destroy(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="has(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.has</h4><a class="signature-arity" href="#Sprite.has" title="Permanent link">1</a><signature id="Sprite.has">

```lx
Sprite.has(entity : Entity) : Bool
```
</signature>

> Returns true if `entity` has a `Sprite` modifier attached.
> 
>   ```js
>   if(Sprite.has(entity)) {
>     Log.print("found sprite")
>   }
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="contains(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Sprite.contains</h4><a class="signature-arity" href="#Sprite.contains+3" title="Permanent link">3</a><signature id="Sprite.contains+3">

```lx
Sprite.contains(entity : Entity, x : Num, y : Num) : Bool
```
</signature>

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
<h4 class="signature_head">Sprite.set_material</h4><a class="signature-arity" href="#Sprite.set_material+2" title="Permanent link">2</a><signature id="Sprite.set_material+2">

```lx
Sprite.set_material(entity : Entity, material : Material) : None
```
</signature>

> Change the material that the `Sprite` attached to `entity` is drawn with, so it will draw with `material` instead.
> 
>   ```js
>   var material = Assets.material("luxe: material/logo.sprite")
>   Sprite.set_material(entity, material)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_material(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_material</h4><a class="signature-arity" href="#Sprite.get_material" title="Permanent link">1</a><signature id="Sprite.get_material">

```lx
Sprite.get_material(entity : Entity) : Material
```
</signature>

> Returns the current material that the `Sprite` attached to `entity` is drawn with.
> 
>   ```js
>   var material = Sprite.get_material(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_image(entity : Entity, image : Image)"></endpoint>
<h4 class="signature_head">Sprite.set_image</h4><a class="signature-arity" href="#Sprite.set_image+2" title="Permanent link">2</a><signature id="Sprite.set_image+2">

```lx
Sprite.set_image(entity : Entity, image : Image) : None
```
</signature>

> Change the image that the `Sprite` attached to `entity` is drawn with.
> 
>   ```js
>   var image = Assets.image("luxe: image/logo.sprite")
>   Sprite.set_image(entity, image)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_image(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_image</h4><a class="signature-arity" href="#Sprite.get_image" title="Permanent link">1</a><signature id="Sprite.get_image">

```lx
Sprite.get_image(entity : Entity) : Image
```
</signature>

> Returns the current image that the `Sprite` attached to `entity` is drawn with.
> 
>   ```js
>   var image = Sprite.get_image(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_origin(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_origin</h4><a class="signature-arity" href="#Sprite.set_origin+3" title="Permanent link">3</a><signature id="Sprite.set_origin+3">

```lx
Sprite.set_origin(entity : Entity, x : Num, y : Num) : None
```
</signature>

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
<h4 class="signature_head">Sprite.get_origin</h4><a class="signature-arity" href="#Sprite.get_origin" title="Permanent link">1</a><signature id="Sprite.get_origin">

```lx
Sprite.get_origin(entity : Entity) : Float2
```
</signature>

> Returns the current origin for the Sprite attached to `entity`.
>         
>   ```js
>   var origin = Sprite.get_origin(entity)
>   Log.print(origin) //[0.5, 0.5]
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_flip_h(entity : Entity, flipped : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_flip_h</h4><a class="signature-arity" href="#Sprite.set_flip_h+2" title="Permanent link">2</a><signature id="Sprite.set_flip_h+2">

```lx
Sprite.set_flip_h(entity : Entity, flipped : Bool) : None
```
</signature>

> Set whether the `Sprite` attached to `entity` is `flipped` horizontally.
> 
>   ```js
>   Sprite.set_flip_h(entity, true)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_flip_h(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_flip_h</h4><a class="signature-arity" href="#Sprite.get_flip_h" title="Permanent link">1</a><signature id="Sprite.get_flip_h">

```lx
Sprite.get_flip_h(entity : Entity) : Bool
```
</signature>

> Returns true if the `Sprite` attached to `entity` is flipped horizontally.
> 
>   ```js
>   var flipped = Sprite.get_flip_h(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_flip_v(entity : Entity, flipped : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_flip_v</h4><a class="signature-arity" href="#Sprite.set_flip_v+2" title="Permanent link">2</a><signature id="Sprite.set_flip_v+2">

```lx
Sprite.set_flip_v(entity : Entity, flipped : Bool) : None
```
</signature>

> Set whether the `Sprite` attached to `entity` is `flipped` vertically.
> 
>   ```js
>   Sprite.set_flip_v(entity, true)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_flip_v(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_flip_v</h4><a class="signature-arity" href="#Sprite.get_flip_v" title="Permanent link">1</a><signature id="Sprite.get_flip_v">

```lx
Sprite.get_flip_v(entity : Entity) : Bool
```
</signature>

> Returns true if the `Sprite` attached to `entity` is flipped vertically.
> 
>   ```js
>   var flipped = Sprite.get_flip_v(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_billboard(entity : Entity, kind : SpriteBillboard, lock : Float3)"></endpoint>
<h4 class="signature_head">Sprite.set_billboard</h4><a class="signature-arity" href="#Sprite.set_billboard+3" title="Permanent link">3</a><signature id="Sprite.set_billboard+3">

```lx
Sprite.set_billboard(entity : Entity, kind : SpriteBillboard, lock : Float3) : None
```
</signature>

> Set how the `Sprite` attached to `entity` behaves as a `billboard` sprite.
> The lock field is 0 for unlocked rotation, 1 for locked rotation on that axis.
> 
>   ```js
>   Sprite.set_billboard(entity, SpriteBillboard.fixed_scale, [0,1,0])
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_billboard(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_billboard</h4><a class="signature-arity" href="#Sprite.get_billboard" title="Permanent link">1</a><signature id="Sprite.get_billboard">

```lx
Sprite.get_billboard(entity : Entity) : SpriteBillboard
```
</signature>

> Get how the `Sprite` attached to `entity` behaves as a `billboard` sprite.
> 
>   ```js
>   var kind = Sprite.get_billboard(entity)
>   if(kind == SpriteBillboard.fixed_scale) { ... }
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_size(entity : Entity, width : Num, height : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_size</h4><a class="signature-arity" href="#Sprite.set_size+3" title="Permanent link">3</a><signature id="Sprite.set_size+3">

```lx
Sprite.set_size(entity : Entity, width : Num, height : Num) : None
```
</signature>

> Resize the `Sprite` attached to `entity` to be `width`x`height`.
> 
>   ```js
>   Sprite.set_size(entity, 256, 256)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_width(entity : Entity, width : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_width</h4><a class="signature-arity" href="#Sprite.set_width+2" title="Permanent link">2</a><signature id="Sprite.set_width+2">

```lx
Sprite.set_width(entity : Entity, width : Num) : None
```
</signature>

> Resize the `Sprite` attached to `entity` to have a new `width`.
> 
>   ```js
>   Sprite.set_width(entity, 64)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_width(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_width</h4><a class="signature-arity" href="#Sprite.get_width" title="Permanent link">1</a><signature id="Sprite.get_width">

```lx
Sprite.get_width(entity : Entity) : Num
```
</signature>

> Returns the width of the `Sprite` attached to `entity`.
> 
>   ```js
>   var width = Sprite.get_width(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_height(entity : Entity, height : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_height</h4><a class="signature-arity" href="#Sprite.set_height+2" title="Permanent link">2</a><signature id="Sprite.set_height+2">

```lx
Sprite.set_height(entity : Entity, height : Num) : None
```
</signature>

> Resize the `Sprite` attached to `entity` to have a new `height`.
> 
>   ```js
>   Sprite.set_height(entity, 64)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_height(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_height</h4><a class="signature-arity" href="#Sprite.get_height" title="Permanent link">1</a><signature id="Sprite.get_height">

```lx
Sprite.get_height(entity : Entity) : Num
```
</signature>

> Returns the height of the `Sprite` attached to `entity`.
> 
>   ```js
>   var height = Sprite.get_height(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_alpha(entity : Entity, alpha : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_alpha</h4><a class="signature-arity" href="#Sprite.set_alpha+2" title="Permanent link">2</a><signature id="Sprite.set_alpha+2">

```lx
Sprite.set_alpha(entity : Entity, alpha : Num) : None
```
</signature>

> Change the alpha (transparency) of the `Sprite` attached to `entity` to be `alpha`. Modifies the color.
> 
>   ```js
>   Sprite.set_alpha(entity, 0.5)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_alpha(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_alpha</h4><a class="signature-arity" href="#Sprite.get_alpha" title="Permanent link">1</a><signature id="Sprite.get_alpha">

```lx
Sprite.get_alpha(entity : Entity) : Num
```
</signature>

> Returns the current alpha of the `Sprite` attached to `entity`.
> 
>   ```js
>   var a = Sprite.get_alpha(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_color(entity : Entity, color : Color)"></endpoint>
<h4 class="signature_head">Sprite.set_color</h4><a class="signature-arity" href="#Sprite.set_color+2" title="Permanent link">2</a><signature id="Sprite.set_color+2">

```lx
Sprite.set_color(entity : Entity, color : Color) : None
```
</signature>

> Set the color of the `Sprite` attached to `entity` to be a color. 
> The default color is white, `[1, 1, 1, 1]`, so to undo a color change, set it to that.
> 
>   ```js
>   var color = Color.hex(0xf6007c)
>   Sprite.set_color(entity, color)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_color(entity : Entity, r : Num, g : Num, b : Num, a : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_color</h4><a class="signature-arity" href="#Sprite.set_color+5" title="Permanent link">5</a><signature id="Sprite.set_color+5">

```lx
Sprite.set_color(entity : Entity, r : Num, g : Num, b : Num, a : Num) : None
```
</signature>

> Set the color of the `Sprite` attached to `entity` to be a color of `r`,`g`,`b`,`a`. 
> The default color is white, `[1, 1, 1, 1]`, so to undo a color change, set it to that.
> 
>   ```js
>   Sprite.set_color(entity, r, g, b, a)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_color(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_color</h4><a class="signature-arity" href="#Sprite.get_color" title="Permanent link">1</a><signature id="Sprite.get_color">

```lx
Sprite.get_color(entity : Entity) : Color
```
</signature>

> Returns the current color of the `Sprite` attached to `entity`.
> 
>   ```js
>   var color = Sprite.get_color(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_uv(entity : Entity, x0 : Num, y0 : Num, x1 : Num, y1 : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_uv</h4><a class="signature-arity" href="#Sprite.set_uv+5" title="Permanent link">5</a><signature id="Sprite.set_uv+5">

```lx
Sprite.set_uv(entity : Entity, x0 : Num, y0 : Num, x1 : Num, y1 : Num) : None
```
</signature>

> Set the UV coordinates for the `Sprite` attached to `entity` with top left at `x0`,`y0` and bottom right `x1`,`y1`. The default is `0, 0, 1, 1`, a full rectangle in UV coordinate space. If you want to tile the image on a sprite, set it to values > 1.
> 
>   ```js
>   //tile 4 times on both x and y
>   Sprite.set_uv(entity, 0, 0, 4, 4)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_uv(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_uv</h4><a class="signature-arity" href="#Sprite.get_uv" title="Permanent link">1</a><signature id="Sprite.get_uv">

```lx
Sprite.get_uv(entity : Entity) : Float4
```
</signature>

> Returns the current uv of the `Sprite` attached to `entity`.
> 
>   ```js
>   var uv = Sprite.get_uv(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_skew(entity : Entity, x : Num, y : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_skew</h4><a class="signature-arity" href="#Sprite.set_skew+3" title="Permanent link">3</a><signature id="Sprite.set_skew+3">

```lx
Sprite.set_skew(entity : Entity, x : Num, y : Num) : None
```
</signature>

> Set the skew amounts for the `Sprite` attached to `entity`. The values of `x` and `y` are between `0 ... 1`, where 1 is the most skew and 0 is none.
> 
>   ```js
>   Sprite.set_skew(entity, 0, 0.25)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_skew(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_skew</h4><a class="signature-arity" href="#Sprite.get_skew" title="Permanent link">1</a><signature id="Sprite.get_skew">

```lx
Sprite.get_skew(entity : Entity) : Float2
```
</signature>

> Return the skew for the `Sprite` attached to `entity`.
> 
>   ```js
>   var skew = Sprite.get_skew(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_geometry(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_geometry</h4><a class="signature-arity" href="#Sprite.get_geometry" title="Permanent link">1</a><signature id="Sprite.get_geometry">

```lx
Sprite.get_geometry(entity : Entity) : Geometry
```
</signature>

> Returns the render [Geometry](#geometry) for the `Sprite` attached to `entity`. The geometry is owned by the sprite, so be aware when modifying it.
> 
>   ```js
>   var geometry = Sprite.get_geometry(entity)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_geometry(entity : Entity, geo : Geometry)"></endpoint>
<h4 class="signature_head">Sprite.set_geometry</h4><a class="signature-arity" href="#Sprite.set_geometry+2" title="Permanent link">2</a><signature id="Sprite.set_geometry+2">

```lx
Sprite.set_geometry(entity : Entity, geo : Geometry) : unknown
```
</signature>

> Sets the render [Geometry](#geometry) for the `Sprite` attached to `entity`.
> 
>   ```js
>   Sprite.set_geometry(entity, geo)
>   ```   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_auto_size(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_auto_size</h4><a class="signature-arity" href="#Sprite.get_auto_size" title="Permanent link">1</a><signature id="Sprite.get_auto_size">

```lx
Sprite.get_auto_size(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_auto_size(entity : Entity, value : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_auto_size</h4><a class="signature-arity" href="#Sprite.set_auto_size+2" title="Permanent link">2</a><signature id="Sprite.set_auto_size+2">

```lx
Sprite.set_auto_size(entity : Entity, value : Bool) : None
```
</signature>

> When setting an image or material, resize the sprite to the image size   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_pixelated(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_pixelated</h4><a class="signature-arity" href="#Sprite.get_pixelated" title="Permanent link">1</a><signature id="Sprite.get_pixelated">

```lx
Sprite.get_pixelated(entity : Entity) : Bool
```
</signature>

> Displaying as pixelated or not   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_pixelated(entity : Entity, value : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_pixelated</h4><a class="signature-arity" href="#Sprite.set_pixelated+2" title="Permanent link">2</a><signature id="Sprite.set_pixelated+2">

```lx
Sprite.set_pixelated(entity : Entity, value : Bool) : None
```
</signature>

> Display as pixelated or not   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_material_input(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_material_input</h4><a class="signature-arity" href="#Sprite.get_material_input" title="Permanent link">1</a><signature id="Sprite.get_material_input">

```lx
Sprite.get_material_input(entity : Entity) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_material_input(entity : Entity, value : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_material_input</h4><a class="signature-arity" href="#Sprite.set_material_input+2" title="Permanent link">2</a><signature id="Sprite.set_material_input+2">

```lx
Sprite.set_material_input(entity : Entity, value : Bool) : None
```
</signature>

> For custom materials, the material input ID for the image.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_hsv_adjust(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_hsv_adjust</h4><a class="signature-arity" href="#Sprite.get_hsv_adjust" title="Permanent link">1</a><signature id="Sprite.get_hsv_adjust">

```lx
Sprite.get_hsv_adjust(entity : Entity) : HSV
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_hsv_adjust(entity : Entity, enabled : Bool, hue_change : Num, saturation : Num, value : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_hsv_adjust</h4><a class="signature-arity" href="#Sprite.set_hsv_adjust+5" title="Permanent link">5</a><signature id="Sprite.set_hsv_adjust+5">

```lx
Sprite.set_hsv_adjust(entity : Entity, enabled : Bool, hue_change : Num, saturation : Num, value : Num) : None
```
</signature>

> Set the values for the hsv adjustment effect.
> The effect applies several operations on the colors of the sprite in sRGB HSV space.
> Saturation and Value changes are applied with exponents as `value ^ adjustment`.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_HSV_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_HSV_enabled</h4><a class="signature-arity" href="#Sprite.set_effect_HSV_enabled+2" title="Permanent link">2</a><signature id="Sprite.set_effect_HSV_enabled+2">

```lx
Sprite.set_effect_HSV_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_HSV_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_HSV_enabled</h4><a class="signature-arity" href="#Sprite.get_effect_HSV_enabled+2" title="Permanent link">2</a><signature id="Sprite.get_effect_HSV_enabled+2">

```lx
Sprite.get_effect_HSV_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_HSV_hue_change(entity : Entity, hue_change : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_HSV_hue_change</h4><a class="signature-arity" href="#Sprite.set_effect_HSV_hue_change+2" title="Permanent link">2</a><signature id="Sprite.set_effect_HSV_hue_change+2">

```lx
Sprite.set_effect_HSV_hue_change(entity : Entity, hue_change : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_HSV_hue_change(entity : Entity, hue_change : Num)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_HSV_hue_change</h4><a class="signature-arity" href="#Sprite.get_effect_HSV_hue_change+2" title="Permanent link">2</a><signature id="Sprite.get_effect_HSV_hue_change+2">

```lx
Sprite.get_effect_HSV_hue_change(entity : Entity, hue_change : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_HSV_saturation(entity : Entity, saturation : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_HSV_saturation</h4><a class="signature-arity" href="#Sprite.set_effect_HSV_saturation+2" title="Permanent link">2</a><signature id="Sprite.set_effect_HSV_saturation+2">

```lx
Sprite.set_effect_HSV_saturation(entity : Entity, saturation : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_HSV_saturation(entity : Entity, saturation : Num)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_HSV_saturation</h4><a class="signature-arity" href="#Sprite.get_effect_HSV_saturation+2" title="Permanent link">2</a><signature id="Sprite.get_effect_HSV_saturation+2">

```lx
Sprite.get_effect_HSV_saturation(entity : Entity, saturation : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_HSV_value(entity : Entity, value : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_HSV_value</h4><a class="signature-arity" href="#Sprite.set_effect_HSV_value+2" title="Permanent link">2</a><signature id="Sprite.set_effect_HSV_value+2">

```lx
Sprite.set_effect_HSV_value(entity : Entity, value : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_HSV_value(entity : Entity, value : Num)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_HSV_value</h4><a class="signature-arity" href="#Sprite.get_effect_HSV_value+2" title="Permanent link">2</a><signature id="Sprite.get_effect_HSV_value+2">

```lx
Sprite.get_effect_HSV_value(entity : Entity, value : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_outline(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_outline</h4><a class="signature-arity" href="#Sprite.get_outline" title="Permanent link">1</a><signature id="Sprite.get_outline">

```lx
Sprite.get_outline(entity : Entity) : Outline
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_outline(entity : Entity, enabled : Bool, color : Color, thickness : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_outline</h4><a class="signature-arity" href="#Sprite.set_outline+4" title="Permanent link">4</a><signature id="Sprite.set_outline+4">

```lx
Sprite.set_outline(entity : Entity, enabled : Bool, color : Color, thickness : Num) : None
```
</signature>

> Set the values of the outline effect.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_outline_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_outline_enabled</h4><a class="signature-arity" href="#Sprite.set_effect_outline_enabled+2" title="Permanent link">2</a><signature id="Sprite.set_effect_outline_enabled+2">

```lx
Sprite.set_effect_outline_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_outline_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_outline_enabled</h4><a class="signature-arity" href="#Sprite.get_effect_outline_enabled+2" title="Permanent link">2</a><signature id="Sprite.get_effect_outline_enabled+2">

```lx
Sprite.get_effect_outline_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_outline_color(entity : Entity, color : Color)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_outline_color</h4><a class="signature-arity" href="#Sprite.set_effect_outline_color+2" title="Permanent link">2</a><signature id="Sprite.set_effect_outline_color+2">

```lx
Sprite.set_effect_outline_color(entity : Entity, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_outline_color(entity : Entity, color : Color)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_outline_color</h4><a class="signature-arity" href="#Sprite.get_effect_outline_color+2" title="Permanent link">2</a><signature id="Sprite.get_effect_outline_color+2">

```lx
Sprite.get_effect_outline_color(entity : Entity, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_outline_thickness(entity : Entity, thickness : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_outline_thickness</h4><a class="signature-arity" href="#Sprite.set_effect_outline_thickness+2" title="Permanent link">2</a><signature id="Sprite.set_effect_outline_thickness+2">

```lx
Sprite.set_effect_outline_thickness(entity : Entity, thickness : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_outline_thickness(entity : Entity, thickness : Num)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_outline_thickness</h4><a class="signature-arity" href="#Sprite.get_effect_outline_thickness+2" title="Permanent link">2</a><signature id="Sprite.get_effect_outline_thickness+2">

```lx
Sprite.get_effect_outline_thickness(entity : Entity, thickness : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_shadow(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_shadow</h4><a class="signature-arity" href="#Sprite.get_shadow" title="Permanent link">1</a><signature id="Sprite.get_shadow">

```lx
Sprite.get_shadow(entity : Entity) : Shadow
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_shadow(entity : Entity, enabled : Bool, offset : Num, color : Color, softness : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_shadow</h4><a class="signature-arity" href="#Sprite.set_shadow+5" title="Permanent link">5</a><signature id="Sprite.set_shadow+5">

```lx
Sprite.set_shadow(entity : Entity, enabled : Bool, offset : Num, color : Color, softness : Num) : None
```
</signature>

> Set the values for the shadow effect.
> Shadows are the same color as the base sprite image, but only have a single color.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shadow_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shadow_enabled</h4><a class="signature-arity" href="#Sprite.set_effect_shadow_enabled+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shadow_enabled+2">

```lx
Sprite.set_effect_shadow_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shadow_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shadow_enabled</h4><a class="signature-arity" href="#Sprite.get_effect_shadow_enabled+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shadow_enabled+2">

```lx
Sprite.get_effect_shadow_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shadow_offset(entity : Entity, offset : Vector2)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shadow_offset</h4><a class="signature-arity" href="#Sprite.set_effect_shadow_offset+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shadow_offset+2">

```lx
Sprite.set_effect_shadow_offset(entity : Entity, offset : Vector2) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shadow_offset(entity : Entity, offset : Vector2)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shadow_offset</h4><a class="signature-arity" href="#Sprite.get_effect_shadow_offset+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shadow_offset+2">

```lx
Sprite.get_effect_shadow_offset(entity : Entity, offset : Vector2) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shadow_color(entity : Entity, color : Color)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shadow_color</h4><a class="signature-arity" href="#Sprite.set_effect_shadow_color+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shadow_color+2">

```lx
Sprite.set_effect_shadow_color(entity : Entity, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shadow_color(entity : Entity, color : Color)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shadow_color</h4><a class="signature-arity" href="#Sprite.get_effect_shadow_color+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shadow_color+2">

```lx
Sprite.get_effect_shadow_color(entity : Entity, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_dissolve(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_dissolve</h4><a class="signature-arity" href="#Sprite.get_dissolve" title="Permanent link">1</a><signature id="Sprite.get_dissolve">

```lx
Sprite.get_dissolve(entity : Entity) : Dissolve
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_dissolve(entity : Entity, enabled : Bool, image : Image, uv : List, value : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_dissolve</h4><a class="signature-arity" href="#Sprite.set_dissolve+5" title="Permanent link">5</a><signature id="Sprite.set_dissolve+5">

```lx
Sprite.set_dissolve(entity : Entity, enabled : Bool, image : Image, uv : List, value : Num) : None
```
</signature>

> Set the values for the hsv adjustment effect.
> The effect applies several operations on the colors of the sprite in sRGB HSV space.
> Saturation and Value changes are applied with exponents as `value ^ adjustment`.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_dissolve_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_dissolve_enabled</h4><a class="signature-arity" href="#Sprite.set_effect_dissolve_enabled+2" title="Permanent link">2</a><signature id="Sprite.set_effect_dissolve_enabled+2">

```lx
Sprite.set_effect_dissolve_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_dissolve_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_dissolve_enabled</h4><a class="signature-arity" href="#Sprite.get_effect_dissolve_enabled+2" title="Permanent link">2</a><signature id="Sprite.get_effect_dissolve_enabled+2">

```lx
Sprite.get_effect_dissolve_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_dissolve_image(entity : Entity, image : Image)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_dissolve_image</h4><a class="signature-arity" href="#Sprite.set_effect_dissolve_image+2" title="Permanent link">2</a><signature id="Sprite.set_effect_dissolve_image+2">

```lx
Sprite.set_effect_dissolve_image(entity : Entity, image : Image) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_dissolve_image(entity : Entity, image : Image)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_dissolve_image</h4><a class="signature-arity" href="#Sprite.get_effect_dissolve_image+2" title="Permanent link">2</a><signature id="Sprite.get_effect_dissolve_image+2">

```lx
Sprite.get_effect_dissolve_image(entity : Entity, image : Image) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_dissolve_uv(entity : Entity, uv : Vector4)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_dissolve_uv</h4><a class="signature-arity" href="#Sprite.set_effect_dissolve_uv+2" title="Permanent link">2</a><signature id="Sprite.set_effect_dissolve_uv+2">

```lx
Sprite.set_effect_dissolve_uv(entity : Entity, uv : Vector4) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_dissolve_uv(entity : Entity, uv : Vector4)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_dissolve_uv</h4><a class="signature-arity" href="#Sprite.get_effect_dissolve_uv+2" title="Permanent link">2</a><signature id="Sprite.get_effect_dissolve_uv+2">

```lx
Sprite.get_effect_dissolve_uv(entity : Entity, uv : Vector4) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_dissolve_value(entity : Entity, value : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_dissolve_value</h4><a class="signature-arity" href="#Sprite.set_effect_dissolve_value+2" title="Permanent link">2</a><signature id="Sprite.set_effect_dissolve_value+2">

```lx
Sprite.set_effect_dissolve_value(entity : Entity, value : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_dissolve_value(entity : Entity, value : Num)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_dissolve_value</h4><a class="signature-arity" href="#Sprite.get_effect_dissolve_value+2" title="Permanent link">2</a><signature id="Sprite.get_effect_dissolve_value+2">

```lx
Sprite.get_effect_dissolve_value(entity : Entity, value : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_shine(entity : Entity)"></endpoint>
<h4 class="signature_head">Sprite.get_shine</h4><a class="signature-arity" href="#Sprite.get_shine" title="Permanent link">1</a><signature id="Sprite.get_shine">

```lx
Sprite.get_shine(entity : Entity) : Shine
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_shine(entity : Entity, enabled : Bool, color : Num, direction : Vector2, width : Num, speed : Num, spacing : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_shine</h4><a class="signature-arity" href="#Sprite.set_shine+7" title="Permanent link">7</a><signature id="Sprite.set_shine+7">

```lx
Sprite.set_shine(entity : Entity, enabled : Bool, color : Num, direction : Vector2, width : Num, speed : Num, spacing : Num) : None
```
</signature>

> Set the values for the hsv adjustment effect.
> The effect applies several operations on the colors of the sprite in sRGB HSV space.
> Saturation and Value changes are applied with exponents as `value ^ adjustment`.   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shine_enabled</h4><a class="signature-arity" href="#Sprite.set_effect_shine_enabled+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shine_enabled+2">

```lx
Sprite.set_effect_shine_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_enabled(entity : Entity, enabled : Bool)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shine_enabled</h4><a class="signature-arity" href="#Sprite.get_effect_shine_enabled+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shine_enabled+2">

```lx
Sprite.get_effect_shine_enabled(entity : Entity, enabled : Bool) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_color(entity : Entity, color : Color)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shine_color</h4><a class="signature-arity" href="#Sprite.set_effect_shine_color+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shine_color+2">

```lx
Sprite.set_effect_shine_color(entity : Entity, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_color(entity : Entity, color : Color)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shine_color</h4><a class="signature-arity" href="#Sprite.get_effect_shine_color+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shine_color+2">

```lx
Sprite.get_effect_shine_color(entity : Entity, color : Color) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_direction(entity : Entity, direction : Vector2)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shine_direction</h4><a class="signature-arity" href="#Sprite.set_effect_shine_direction+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shine_direction+2">

```lx
Sprite.set_effect_shine_direction(entity : Entity, direction : Vector2) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_direction(entity : Entity, direction : Vector2)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shine_direction</h4><a class="signature-arity" href="#Sprite.get_effect_shine_direction+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shine_direction+2">

```lx
Sprite.get_effect_shine_direction(entity : Entity, direction : Vector2) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_width(entity : Entity, width : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shine_width</h4><a class="signature-arity" href="#Sprite.set_effect_shine_width+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shine_width+2">

```lx
Sprite.set_effect_shine_width(entity : Entity, width : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_width(entity : Entity, width : Num)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shine_width</h4><a class="signature-arity" href="#Sprite.get_effect_shine_width+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shine_width+2">

```lx
Sprite.get_effect_shine_width(entity : Entity, width : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_speed(entity : Entity, speed : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shine_speed</h4><a class="signature-arity" href="#Sprite.set_effect_shine_speed+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shine_speed+2">

```lx
Sprite.set_effect_shine_speed(entity : Entity, speed : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_speed(entity : Entity, speed : Num)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shine_speed</h4><a class="signature-arity" href="#Sprite.get_effect_shine_speed+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shine_speed+2">

```lx
Sprite.get_effect_shine_speed(entity : Entity, speed : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="set_effect_shine_spacing(entity : Entity, spacing : Num)"></endpoint>
<h4 class="signature_head">Sprite.set_effect_shine_spacing</h4><a class="signature-arity" href="#Sprite.set_effect_shine_spacing+2" title="Permanent link">2</a><signature id="Sprite.set_effect_shine_spacing+2">

```lx
Sprite.set_effect_shine_spacing(entity : Entity, spacing : Num) : None
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="Sprite" signature="get_effect_shine_spacing(entity : Entity, spacing : Num)"></endpoint>
<h4 class="signature_head">Sprite.get_effect_shine_spacing</h4><a class="signature-arity" href="#Sprite.get_effect_shine_spacing+2" title="Permanent link">2</a><signature id="Sprite.get_effect_shine_spacing+2">

```lx
Sprite.get_effect_shine_spacing(entity : Entity, spacing : Num) : None
```
</signature>

> no docs found   


### SpriteBillboard
`import "luxe: system/sprite.modifier" for SpriteBillboard{:lx}`
> no docs found

- [none](#SpriteBillboard.none)
- [billboard](#SpriteBillboard.billboard)
- [fixed_scale](#SpriteBillboard.fixed_scale)
- [fixed_screen_scale](#SpriteBillboard.fixed_screen_scale)


---

<endpoint module="luxe: system/sprite.modifier" class="SpriteBillboard" signature="none"></endpoint>
<h4 class="signature_head">SpriteBillboard.none</h4><a class="signature-arity" href="#SpriteBillboard.none" title="Permanent link">1</a><signature id="SpriteBillboard.none">

```lx
SpriteBillboard.none : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="SpriteBillboard" signature="billboard"></endpoint>
<h4 class="signature_head">SpriteBillboard.billboard</h4><a class="signature-arity" href="#SpriteBillboard.billboard" title="Permanent link">1</a><signature id="SpriteBillboard.billboard">

```lx
SpriteBillboard.billboard : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="SpriteBillboard" signature="fixed_scale"></endpoint>
<h4 class="signature_head">SpriteBillboard.fixed_scale</h4><a class="signature-arity" href="#SpriteBillboard.fixed_scale" title="Permanent link">1</a><signature id="SpriteBillboard.fixed_scale">

```lx
SpriteBillboard.fixed_scale : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: system/sprite.modifier" class="SpriteBillboard" signature="fixed_screen_scale"></endpoint>
<h4 class="signature_head">SpriteBillboard.fixed_screen_scale</h4><a class="signature-arity" href="#SpriteBillboard.fixed_screen_scale" title="Permanent link">1</a><signature id="SpriteBillboard.fixed_screen_scale">

```lx
SpriteBillboard.fixed_screen_scale : unknown
```
</signature>

> no docs found   


### System
`import "luxe: system/sprite.modifier" for System{:lx}`
> no docs found

- [new](#System.new)(**world**: `World{:lx}`)


---

<endpoint module="luxe: system/sprite.modifier" class="System" signature="new(world : World)"></endpoint>
<h4 class="signature_head">System.new</h4><a class="signature-arity" href="#System.new" title="Permanent link">1</a><signature id="System.new">

```lx
System.new(world : World) : System
```
</signature>

> no docs found   

