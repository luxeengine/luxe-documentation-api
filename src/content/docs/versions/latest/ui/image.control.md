---
title: "luxe: ui/image.control"
description: API version 2025.11.1
---
## `luxe: ui/image.control{:lx}` module

- [Data](#data)   
- [UIImage](#uiimage)   
- [UIImageFit](#uiimagefit)   

---


### Data
`import "luxe: ui/image.control" for Data{:lx}`
> no docs found

- `var image : Asset = null{:lx}`
- `var color : Color = [1, 1, 1, 1]{:lx}`
- `var angle : Num = 0{:lx}`
- `var pixelated : Bool = false{:lx}`
- `var fit : UIImageFit = UIImageFit.fill{:lx}`
- `var uv : Float4 = [0, 0, 1, 1]{:lx}`
- `var material : Asset = null{:lx}`


---


### UIImage
`import "luxe: ui/image.control" for UIImage{:lx}`
> `UIImage` is a type of `Control` made to display images.
> 
> ```js
>   var image = UIImage.create(ui)
>   UIImage.set_image(image, Assets.image("path/to/image"))
>   //setup positioning etc with `Control.___`
> ```

- [create](#UIImage.create)(**ui_entity**: `Entity{:lx}`)
- [set_image](#UIImage.set_image+2)(**control**: `UIImage{:lx}`, **image**: `Image{:lx}`)
- [set_image](#UIImage.set_image+3)(**control**: `UIImage{:lx}`, **image**: `Image{:lx}`, **flags**: `UIImageFlags{:lx}`)
- [get_image](#UIImage.get_image)(**control**: `UIImage{:lx}`)
- [set_material](#UIImage.set_material+2)(**control**: `UIImage{:lx}`, **material**: `Material{:lx}`)
- [set_uv](#UIImage.set_uv+5)(**control**: `UIImage{:lx}`, **left**: `Num{:lx}`, **top**: `Num{:lx}`, **right**: `Num{:lx}`, **bottom**: `Num{:lx}`)
- [set_color](#UIImage.set_color+2)(**control**: `UIImage{:lx}`, **color**: `Color{:lx}`)
- [get_color](#UIImage.get_color)(**control**: `UIImage{:lx}`)
- [set_angle](#UIImage.set_angle+2)(**control**: `UIImage{:lx}`, **degrees**: `Num{:lx}`)
- [set_fit](#UIImage.set_fit+2)(**control**: `UIImage{:lx}`, **fit**: `UIImageFit{:lx}`)
- [get_fit](#UIImage.get_fit)(**control**: `UIImage{:lx}`)


---

<endpoint module="luxe: ui/image.control" class="UIImage" signature="create(ui_entity : Entity)"></endpoint>
<h4 class="signature_head">UIImage.create</h4><a class="signature-arity" href="#UIImage.create" title="Permanent link">1</a><signature id="UIImage.create">

```lx
UIImage.create(ui_entity : Entity) : UIImage
```
</signature>

> Create a new UIImage control.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_image(control : UIImage, image : Image)"></endpoint>
<h4 class="signature_head">UIImage.set_image</h4><a class="signature-arity" href="#UIImage.set_image+2" title="Permanent link">2</a><signature id="UIImage.set_image+2">

```lx
UIImage.set_image(control : UIImage, image : Image) : None
```
</signature>

> Set image of `UIImage` control (uses `UIImageFlags.none` with linear interpolation).
> Setting an image will reset any set custom material and use an internal material created from the `luxe: material_basis/ui_solid` basis instead.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_image(control : UIImage, image : Image, flags : UIImageFlags)"></endpoint>
<h4 class="signature_head">UIImage.set_image</h4><a class="signature-arity" href="#UIImage.set_image+3" title="Permanent link">3</a><signature id="UIImage.set_image+3">

```lx
UIImage.set_image(control : UIImage, image : Image, flags : UIImageFlags) : None
```
</signature>

> Set displayed image of `UIImage` control.
> The flags determine what sampler is used to read the image.
> Setting an image will reset any set custom material and use an internal material created from the `luxe: material_basis/ui_solid` basis instead.
> ```js
>   var image = UIImage.create(ui)
>   UIImage.set_image(image, Assets.image("path/to/image"), UIImageFlags.pixelated)
> ```   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="get_image(control : UIImage)"></endpoint>
<h4 class="signature_head">UIImage.get_image</h4><a class="signature-arity" href="#UIImage.get_image" title="Permanent link">1</a><signature id="UIImage.get_image">

```lx
UIImage.get_image(control : UIImage) : Image
```
</signature>

> Get currently displayed image of `UIImage`   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_material(control : UIImage, material : Material)"></endpoint>
<h4 class="signature_head">UIImage.set_material</h4><a class="signature-arity" href="#UIImage.set_material+2" title="Permanent link">2</a><signature id="UIImage.set_material+2">

```lx
UIImage.set_material(control : UIImage, material : Material) : None
```
</signature>

> Set the material used to render the `UIImage`.
> Setting a custom material will reset the controls image, so you need to author that via the inputs on your material.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_uv(control : UIImage, left : Num, top : Num, right : Num, bottom : Num)"></endpoint>
<h4 class="signature_head">UIImage.set_uv</h4><a class="signature-arity" href="#UIImage.set_uv+5" title="Permanent link">5</a><signature id="UIImage.set_uv+5">

```lx
UIImage.set_uv(control : UIImage, left : Num, top : Num, right : Num, bottom : Num) : None
```
</signature>

> Set the uv bounds, default is (0, 0, 1, 1). Drawing only top left of the image would be (0.5, 0.5, 1, 1).   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_color(control : UIImage, color : Color)"></endpoint>
<h4 class="signature_head">UIImage.set_color</h4><a class="signature-arity" href="#UIImage.set_color+2" title="Permanent link">2</a><signature id="UIImage.set_color+2">

```lx
UIImage.set_color(control : UIImage, color : Color) : None
```
</signature>

> Set the tint color of the `UIImage`. Communicated to the shader via vertex colors.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="get_color(control : UIImage)"></endpoint>
<h4 class="signature_head">UIImage.get_color</h4><a class="signature-arity" href="#UIImage.get_color" title="Permanent link">1</a><signature id="UIImage.get_color">

```lx
UIImage.get_color(control : UIImage) : Color
```
</signature>

> Get the current tint color of the `UIImage`.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_angle(control : UIImage, degrees : Num)"></endpoint>
<h4 class="signature_head">UIImage.set_angle</h4><a class="signature-arity" href="#UIImage.set_angle+2" title="Permanent link">2</a><signature id="UIImage.set_angle+2">

```lx
UIImage.set_angle(control : UIImage, degrees : Num) : None
```
</signature>

> Set the angle of the `UIImage` control. Note that this will not affect child controls.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_fit(control : UIImage, fit : UIImageFit)"></endpoint>
<h4 class="signature_head">UIImage.set_fit</h4><a class="signature-arity" href="#UIImage.set_fit+2" title="Permanent link">2</a><signature id="UIImage.set_fit+2">

```lx
UIImage.set_fit(control : UIImage, fit : UIImageFit) : None
```
</signature>

> Set the fit mode   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="get_fit(control : UIImage)"></endpoint>
<h4 class="signature_head">UIImage.get_fit</h4><a class="signature-arity" href="#UIImage.get_fit" title="Permanent link">1</a><signature id="UIImage.get_fit">

```lx
UIImage.get_fit(control : UIImage) : UIImageFit
```
</signature>

> Get the fit mode   


### UIImageFit
`import "luxe: ui/image.control" for UIImageFit{:lx}`
> no docs found

- [fill](#UIImageFit.fill)
- [contain](#UIImageFit.contain)
- [cover](#UIImageFit.cover)
- [keep_width](#UIImageFit.keep_width)
- [keep_height](#UIImageFit.keep_height)


---

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="fill"></endpoint>
<h4 class="signature_head">UIImageFit.fill</h4><a class="signature-arity" href="#UIImageFit.fill" title="Permanent link">1</a><signature id="UIImageFit.fill">

```lx
UIImageFit.fill : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="contain"></endpoint>
<h4 class="signature_head">UIImageFit.contain</h4><a class="signature-arity" href="#UIImageFit.contain" title="Permanent link">1</a><signature id="UIImageFit.contain">

```lx
UIImageFit.contain : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="cover"></endpoint>
<h4 class="signature_head">UIImageFit.cover</h4><a class="signature-arity" href="#UIImageFit.cover" title="Permanent link">1</a><signature id="UIImageFit.cover">

```lx
UIImageFit.cover : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="keep_width"></endpoint>
<h4 class="signature_head">UIImageFit.keep_width</h4><a class="signature-arity" href="#UIImageFit.keep_width" title="Permanent link">1</a><signature id="UIImageFit.keep_width">

```lx
UIImageFit.keep_width : unknown
```
</signature>

> no docs found   

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="keep_height"></endpoint>
<h4 class="signature_head">UIImageFit.keep_height</h4><a class="signature-arity" href="#UIImageFit.keep_height" title="Permanent link">1</a><signature id="UIImageFit.keep_height">

```lx
UIImageFit.keep_height : unknown
```
</signature>

> no docs found   

