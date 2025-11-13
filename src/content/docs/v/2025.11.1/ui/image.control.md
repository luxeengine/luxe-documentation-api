---
title: "luxe: ui/image.control"
description: API version 2025.11.1
slug: "v/2025.11.1/ui/image.control"
---
- [Data](#data)   
- [UIImage](#uiimage)   
- [UIImageFit](#uiimagefit)   

---


## Data
```lx
import "luxe: ui/image.control" for Data
```
> no docs found

### Variables
```lx
var image : Asset = null
var color : Color = [1, 1, 1, 1]
var angle : Num = 0
var pixelated : Bool = false
var fit : UIImageFit = UIImageFit.fill
var uv : Float4 = [0, 0, 1, 1]
var material : Asset = null
```

## UIImage
```lx
import "luxe: ui/image.control" for UIImage
```
> `UIImage` is a type of `Control` made to display images.
> 
> ```js
>   var image = UIImage.create(ui)
>   UIImage.set_image(image, Assets.image("path/to/image"))
>   //setup positioning etc with `Control.___`
> ```

<endpoint module="luxe: ui/image.control" class="UIImage" signature="create(ui_entity : Entity)"></endpoint>
### UIImage.create(.)
```lx
UIImage.create(ui_entity : Entity) : UIImage
```
> Create a new UIImage control.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_image(control : UIImage, image : Image)"></endpoint>
### UIImage.set_image(..)
```lx
UIImage.set_image(control : UIImage, image : Image) : None
```
> Set image of `UIImage` control (uses `UIImageFlags.none` with linear interpolation).
> Setting an image will reset any set custom material and use an internal material created from the `luxe: material_basis/ui_solid` basis instead.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_image(control : UIImage, image : Image, flags : UIImageFlags)"></endpoint>
### UIImage.set_image(...)
```lx
UIImage.set_image(control : UIImage, image : Image, flags : UIImageFlags) : None
```
> Set displayed image of `UIImage` control.
> The flags determine what sampler is used to read the image.
> Setting an image will reset any set custom material and use an internal material created from the `luxe: material_basis/ui_solid` basis instead.
> ```js
>   var image = UIImage.create(ui)
>   UIImage.set_image(image, Assets.image("path/to/image"), UIImageFlags.pixelated)
> ```   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="get_image(control : UIImage)"></endpoint>
### UIImage.get_image(.)
```lx
UIImage.get_image(control : UIImage) : Image
```
> Get currently displayed image of `UIImage`   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_material(control : UIImage, material : Material)"></endpoint>
### UIImage.set_material(..)
```lx
UIImage.set_material(control : UIImage, material : Material) : None
```
> Set the material used to render the `UIImage`.
> Setting a custom material will reset the controls image, so you need to author that via the inputs on your material.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_uv(control : UIImage, left : Num, top : Num, right : Num, bottom : Num)"></endpoint>
### UIImage.set_uv(.....)
```lx
UIImage.set_uv(control : UIImage, left : Num, top : Num, right : Num, bottom : Num) : None
```
> Set the uv bounds, default is (0, 0, 1, 1). Drawing only top left of the image would be (0.5, 0.5, 1, 1).   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_color(control : UIImage, color : Color)"></endpoint>
### UIImage.set_color(..)
```lx
UIImage.set_color(control : UIImage, color : Color) : None
```
> Set the tint color of the `UIImage`. Communicated to the shader via vertex colors.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="get_color(control : UIImage)"></endpoint>
### UIImage.get_color(.)
```lx
UIImage.get_color(control : UIImage) : Color
```
> Get the current tint color of the `UIImage`.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_angle(control : UIImage, degrees : Num)"></endpoint>
### UIImage.set_angle(..)
```lx
UIImage.set_angle(control : UIImage, degrees : Num) : None
```
> Set the angle of the `UIImage` control. Note that this will not affect child controls.   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="set_fit(control : UIImage, fit : UIImageFit)"></endpoint>
### UIImage.set_fit(..)
```lx
UIImage.set_fit(control : UIImage, fit : UIImageFit) : None
```
> Set the fit mode   

<endpoint module="luxe: ui/image.control" class="UIImage" signature="get_fit(control : UIImage)"></endpoint>
### UIImage.get_fit(.)
```lx
UIImage.get_fit(control : UIImage) : UIImageFit
```
> Get the fit mode   


## UIImageFit
```lx
import "luxe: ui/image.control" for UIImageFit
```
> no docs found

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="fill"></endpoint>
### UIImageFit.fill
```lx
UIImageFit.fill : unknown
```
> no docs found   

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="contain"></endpoint>
### UIImageFit.contain
```lx
UIImageFit.contain : unknown
```
> no docs found   

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="cover"></endpoint>
### UIImageFit.cover
```lx
UIImageFit.cover : unknown
```
> no docs found   

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="keep_width"></endpoint>
### UIImageFit.keep_width
```lx
UIImageFit.keep_width : unknown
```
> no docs found   

<endpoint module="luxe: ui/image.control" class="UIImageFit" signature="keep_height"></endpoint>
### UIImageFit.keep_height
```lx
UIImageFit.keep_height : unknown
```
> no docs found   

